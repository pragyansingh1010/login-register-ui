from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
html = list(ROOT.glob("*.html"))
assert html, "no HTML page found"
assert any("<form" in p.read_text(encoding="utf-8").lower() for p in html)
print("Login/Register UI smoke check passed")
