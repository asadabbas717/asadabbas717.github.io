"""Copy the explicit public asset list without deleting unrelated files."""
from shutil import copyfile
from check_site import ROOT, PUBLIC

if __name__ == '__main__':
    for asset in PUBLIC:
        destination = ROOT / 'dist' / asset
        destination.parent.mkdir(parents=True, exist_ok=True)
        copyfile(ROOT / asset, destination)
    print(f'Synchronized {len(PUBLIC)} public assets. Run scripts/check_site.py next.')
