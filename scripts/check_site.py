"""Dependency-free repository contracts; run from any working directory."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote, parse_qs
import json
import re
import unittest

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ('index.html', 'usage.html', 'case-studies.html', 'folio.css', 'portfolio-2026.css',
          'exhibition.js', 'PRIVATE_PROJECT_SHOWCASE.md', 'assets/repolens-report.html',
          'assets/repolens-report.json', 'assets/favicon.svg')


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.tags = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)


class SiteContracts(unittest.TestCase):
    def test_deployment_parity_and_allowlist(self):
        self.assertEqual(set(PUBLIC), {str(p.relative_to(ROOT / 'dist')).replace('\\', '/')
                                     for p in (ROOT / 'dist').rglob('*') if p.is_file()})
        for path in PUBLIC:
            with self.subTest(path=path):
                self.assertEqual((ROOT / path).read_bytes(), (ROOT / 'dist' / path).read_bytes())

    def test_html_references_and_accessible_relationships(self):
        for folder in (ROOT, ROOT / 'dist'):
            for filename in ('index.html', 'usage.html', 'case-studies.html'):
                with self.subTest(folder=folder.name, page=filename):
                    page = Page((folder / filename).read_text(encoding='utf-8'))
                    ids = [a['id'] for _, a in page.tags if 'id' in a]
                    self.assertEqual(len(ids), len(set(ids)), 'Duplicate IDs')
                    self.assertEqual(sum(tag == 'main' for tag, _ in page.tags), 1)
                    self.assertTrue(any(tag == 'html' and a.get('lang') == 'en' for tag, a in page.tags))
                    for tag, attrs in page.tags:
                        for relation in ('aria-controls', 'aria-labelledby'):
                            for target in attrs.get(relation, '').split():
                                self.assertIn(target, ids)
                        if attrs.get('target') == '_blank':
                            self.assertTrue({'noreferrer', 'noopener'} & set(attrs.get('rel', '').split()))
                        if tag == 'img':
                            self.assertIn('alt', attrs)
                        for key in ('href', 'src'):
                            target = urlsplit(attrs.get(key, ''))
                            self.assertNotEqual(target.scheme, 'javascript')
                            if target.scheme or target.netloc:
                                continue
                            if target.path:
                                resolved = (folder / unquote(target.path)).resolve()
                                self.assertTrue(resolved.is_relative_to(ROOT))
                                self.assertTrue(resolved.is_file(), target.path)
                                if resolved.suffix == '.html' and target.fragment:
                                    target_page = Page(resolved.read_text(encoding='utf-8'))
                                    target_ids = {a['id'] for _, a in target_page.tags if 'id' in a}
                                    aliases = {a['data-project'] for _, a in target_page.tags if 'data-project' in a}
                                    self.assertIn(unquote(target.fragment), target_ids | aliases)
                            elif target.fragment:
                                aliases = {a['data-project'] for _, a in page.tags if 'data-project' in a}
                                self.assertIn(unquote(target.fragment), set(ids) | aliases)
                    tabs = [a for _, a in page.tags if a.get('role') == 'tab']
                    panels = {a['id']: a for _, a in page.tags if a.get('role') == 'tabpanel'}
                    if filename == 'index.html':
                        self.assertEqual(len(tabs), 5)
                        self.assertEqual(len(panels), 5)
                        self.assertEqual(sum(a.get('aria-selected') == 'true' for a in tabs), 1)
                        for tab in tabs:
                            self.assertEqual(panels[tab['aria-controls']]['aria-labelledby'], tab['id'])
                            self.assertEqual(tab.get('aria-selected') == 'true', 'hidden' not in panels[tab['aria-controls']])

    def test_static_contact_and_schema(self):
        text = (ROOT / 'index.html').read_text(encoding='utf-8')
        page = Page(text)
        links = [a for tag, a in page.tags if tag == 'a']
        title = next(a for a in links if a.get('class') == 'contact-title')
        self.assertEqual(title['href'], 'mailto:asadabbasbusiness@gmail.com')
        self.assertNotIn('target', title)
        self.assertTrue(any(a.get('href') == 'tel:+923000473399' for a in links))
        messages = {parse_qs(urlsplit(a.get('href', '')).query).get('text', [''])[0]
                    for a in links if urlsplit(a.get('href', '')).netloc == 'wa.me'}
        self.assertEqual(messages, {
            'Hi Asad, I found your portfolio and would like to discuss a software engineering opportunity with you.',
            'Hi Asad, I found your portfolio and would like to discuss a software project or modernization requirement with you.',
            'Hi Asad, I found your portfolio and would like to connect with you.'})
        schema = json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>', text, re.S)[1])
        self.assertEqual(schema['@type'], 'Person')
        self.assertEqual(schema['telephone'], '+923000473399')
        self.assertEqual(len(schema['sameAs']), 2)
        self.assertIn('html:not(.enhanced) .project-panel[hidden]{display:grid!important}',
                      (ROOT / 'portfolio-2026.css').read_text(encoding='utf-8'))

    def test_css_and_markdown_local_references(self):
        for folder in (ROOT, ROOT / 'dist'):
            for file in folder.glob('*.css'):
                for target in re.findall(r'url\([\'\"]?([^\)\'\"]+)', file.read_text(encoding='utf-8')):
                    if not urlsplit(target).scheme:
                        self.assertTrue((folder / target).is_file(), target)
            for file in folder.rglob('*.md'):
                for target in re.findall(r'\]\(([^\s)]+)\)', file.read_text(encoding='utf-8')):
                    url = urlsplit(target)
                    if not url.scheme and url.path:
                        self.assertTrue((file.parent / unquote(url.path)).is_file(), f'{file}: {target}')


if __name__ == '__main__':
    unittest.main(verbosity=2)
