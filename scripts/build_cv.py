"""Rebuild the public CV with optional ReportLab; not a site build dependency."""
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'assets' / 'Asad-Abbas-Software-Engineer-CV.pdf'
BLUE = colors.HexColor('#2445a8')
styles = {
 'name': ParagraphStyle('name',fontName='Helvetica-Bold',fontSize=25,leading=28,textColor=colors.HexColor('#18202d'),spaceAfter=3),
 'title': ParagraphStyle('title',fontName='Helvetica',fontSize=12,leading=16,textColor=BLUE,spaceAfter=7),
 'body': ParagraphStyle('body',fontName='Helvetica',fontSize=9.5,leading=12,spaceAfter=4),
 'section': ParagraphStyle('section',fontName='Helvetica-Bold',fontSize=10.5,leading=14,textColor=BLUE,spaceBefore=7,spaceAfter=4),
 'item': ParagraphStyle('item',fontName='Helvetica-Bold',fontSize=10,leading=13,spaceBefore=4,spaceAfter=3),
 'bullet': ParagraphStyle('bullet',fontName='Helvetica',fontSize=9.3,leading=11.8,leftIndent=9,firstLineIndent=-8,spaceAfter=3),
}
story=[]
def add(text,style='body'):story.append(Paragraph(text,styles[style]))
def bullet(text):add('- '+text,'bullet')
def link(url,label):return f'<link href="{url}" color="#2445a8">{label}</link>'
add('ASAD ABBAS','name')
add('Software Engineer | Graduate | Open to junior opportunities','title')
add('Karachi, Pakistan | '+link('mailto:asadabbasbusiness@gmail.com','asadabbasbusiness@gmail.com'))
add(link('https://asadabbas717.github.io/','Portfolio')+' | '+link('https://github.com/asadabbas717','GitHub: asadabbas717')+' | '+link('https://www.linkedin.com/in/asadabbas717/','LinkedIn: asadabbas717'))
add('PROFILE','section')
add('Software Engineering graduate building Python developer tools, desktop business applications and full-stack/mobile software. Practical experience with transaction design, data recovery, automated testing and software releases through independent projects and internships.')
add('TECHNICAL SKILLS','section')
add('<b>Languages:</b> Python, TypeScript, JavaScript, SQL, Java<br/><b>Applications:</b> React, React Native/Expo, PySide6/Qt, Django, Supabase<br/><b>Data and delivery:</b> PostgreSQL, SQLite, Git, GitHub Actions, pytest, Vitest, Playwright, Ruff, mypy, Windows packaging')
add('SOFTWARE DEVELOPMENT EXPERIENCE','section')
add('Independent Software Developer - Qashoryx | June 2026 - Present','item')
bullet('Gathered shop-owner requirements and deployed offline business software for a client in Ranipur. Continue implementing changes and resolving defects across invoices, inventory, payments and customer accounts.')
add('SELECTED ENGINEERING PROJECTS','section')
add('RepoLens | Python developer tool | '+link('https://github.com/asadabbas717/RepoLens','Public source'),'item')
bullet('Designed and published repolens-engineering on PyPI: deterministic Python repository analysis with evidence-backed findings and console, JSON and HTML reports.')
bullet('Separated acquisition, typed analyzers, scoring and reporting; added Windows/Linux CI and OIDC package publishing. Analysis reads target code without executing it.')
add('Vendiqo | Offline Windows retail software | '+link('https://asadabbas717.github.io/case-studies.html#vendiqo','Case study'),'item')
bullet('Built inventory, purchases, sales, credit/collections and referenced returns using Python, Qt and SQLite, with atomic posting, balance snapshots and guarded backup recovery.')

add('Loopnest | React Native / Supabase messaging | '+link('https://github.com/asadabbas717/loopnest','Public source'),'item')
bullet('Built invitation-based conversations, Realtime messaging and private photo sharing with participant authorization, retention rules and account deletion.')

add('InternLog PK | Offline web application | '+link('https://asadabbas717.github.io/internlog-pk/','Live app'),'item')
bullet('Shipped a React/TypeScript logbook with IndexedDB persistence, exact working-time totals, printable weekly reports and validated JSON backup replacement.')

add('Cineyra | React / TypeScript / PostgreSQL | '+link('https://asadabbas717.github.io/case-studies.html#cineyra','Case study'),'item')
bullet('Built film/TV discovery with deterministic ranking and optional AI reasoning, server-side integrations, account isolation and transactional preference reconciliation.')
add('INTERNSHIP EXPERIENCE','section')
add('<b>Kaizen Hive - Web Development Intern</b><br/>Completed HTML/CSS/JavaScript assignments covering DOM interactions, forms and responsive layouts, with introductory Node.js/Express work.')
add('<b>Internee.pk - React Native Intern | Virtual, two months</b><br/>Built Expo assignment prototypes for local profiles/QR sharing, a demo-data dashboard with PDF export and locally persisted lesson progress.')
add('<b>Developers Hub Corporation - Android Development Intern | Remote | 10 June - 26 July 2025</b><br/>Developed Java/Firebase social-app screens and data flows using Android activities, fragments and adapters.')
add('EDUCATION','section')
add('<b>BS Software Engineering</b> | University of Management and Technology (UMT), Lahore | Graduated July 2025')
SimpleDocTemplate(str(OUTPUT),pagesize=A4,rightMargin=38,leftMargin=38,topMargin=28,bottomMargin=28,title='Asad Abbas - Software Engineer CV',author='Asad Abbas',subject='Software engineering CV',pageCompression=1).build(story)
print(OUTPUT)
