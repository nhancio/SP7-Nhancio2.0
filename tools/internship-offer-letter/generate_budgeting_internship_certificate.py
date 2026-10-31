#!/usr/bin/env python3
"""Create a landscape Nhancio internship certificate, inspired by the supplied layout."""

from __future__ import annotations

import argparse
import json
import re
from datetime import date, timedelta
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4, landscape
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfgen import canvas


BASE = Path(__file__).resolve().parent
LEGAL_NAME = "Nhancio Technologies Private Limited"
NAVY = colors.HexColor("#14082F")
PANEL = colors.HexColor("#200C4A")
CYAN = colors.HexColor("#00D8F3")
PURPLE = colors.HexColor("#A448ED")
WHITE = colors.white
PALE = colors.HexColor("#C9C3D5")


def day(value: date) -> str:
    return f"{value.day} {value.strftime('%B %Y')}"


def text(c: canvas.Canvas, value: str, x: float, y: float, font: str, size: float, color) -> None:
    c.setFont(font, size)
    c.setFillColor(color)
    c.drawString(x, y, value)


def spaced(c: canvas.Canvas, value: str, x: float, y: float, size: float, color, gap: float) -> None:
    c.setFillColor(color)
    c.setFont("Times-Bold", size)
    t = c.beginText(x, y)
    t.setCharSpace(gap)
    t.textOut(value)
    c.drawText(t)


def fit_size(value: str, font: str, preferred: int, max_width: float) -> int:
    size = preferred
    while pdfmetrics.stringWidth(value, font, size) > max_width and size > 18:
        size -= 1
    return size


def build(name: str, role: str, start: date, end: date, issued: date, output: Path) -> Path:
    if end < start or issued < end:
        raise ValueError("Dates must satisfy start <= end <= issue date")
    if not name.strip() or not role.strip():
        raise ValueError("Name and role are required")

    profile = json.loads((BASE / "company_profile.json").read_text(encoding="utf-8"))
    phone = re.sub(r"\D", "", profile["phone"])
    output.parent.mkdir(parents=True, exist_ok=True)
    w, h = landscape(A4)
    c = canvas.Canvas(str(output), pagesize=(w, h))
    c.setTitle(f"Internship Completion Certificate - {name}")
    c.setAuthor(LEGAL_NAME)

    # The original reference has a decorative left rail and a dark certificate field.
    c.setFillColor(NAVY)
    c.rect(0, 0, w, h, fill=1, stroke=0)
    c.setFillColor(PANEL)
    c.rect(0, 0, 236, h, fill=1, stroke=0)
    c.setStrokeColor(CYAN)
    c.setLineWidth(1.3)
    c.line(235, 22, 235, h - 22)
    c.setLineWidth(0.6)
    c.rect(13, 13, w - 26, h - 26, fill=0, stroke=1)
    c.setStrokeColor(colors.HexColor("#385886"))
    for center_y in (35, h - 35):
        for radius in (42, 62, 82, 102):
            c.circle(24, center_y, radius, fill=0, stroke=1)
    for x in range(28, 215, 28):
        c.circle(x, 52, 2.1, fill=0, stroke=1)
        c.circle(x, h - 52, 2.1, fill=0, stroke=1)

    c.setStrokeColor(PURPLE)
    c.setLineWidth(2)
    c.circle(118, 424, 80, fill=0, stroke=1)
    c.setStrokeColor(CYAN)
    c.circle(118, 424, 88, fill=0, stroke=1)
    c.drawImage(str(BASE / profile["logo_image"]), 54, 360, width=128, height=128, mask="auto")
    text(c, "NHANCIO", 64, 303, "Helvetica-Bold", 22, WHITE)
    text(c, "TECHNOLOGIES PRIVATE LIMITED", 30, 280, "Helvetica", 9, PALE)
    c.setStrokeColor(CYAN)
    c.line(46, 260, 190, 260)
    text(c, "IIT ALUMNUS STARTUP", 47, 234, "Helvetica-Bold", 10, CYAN)
    text(c, "AI SERVICES | USA | AUS", 48, 215, "Helvetica", 9, WHITE)
    text(c, "HYDERABAD", 73, 88, "Helvetica-Bold", 9, PALE)

    x = 275
    spaced(c, "CERTIFICATE", x, 506, 45, WHITE, 4)
    spaced(c, "OF INTERNSHIP COMPLETION", x, 465, 18, CYAN, 1.5)
    text(c, "This certificate is proudly presented to", x, 408, "Times-Roman", 16, WHITE)
    text(c, name, x, 344, "Times-Roman", fit_size(name, "Times-Roman", 49, 500), WHITE)
    c.setStrokeColor(CYAN)
    c.setLineWidth(1.7)
    c.line(x, 329, 785, 329)

    role_line = f"for completing a remote internship as a {role}"
    text(c, role_line, x, 289, "Times-Roman", fit_size(role_line, "Times-Roman", 16, 505), WHITE)
    text(c, f"with {LEGAL_NAME}", x, 264, "Times-Roman", 16, WHITE)
    text(c, f"from {day(start)} to {day(end)}.", x, 239, "Times-Roman", 16, WHITE)

    text(c, f"Issued on {day(issued)}", x, 166, "Helvetica-Bold", 11, CYAN)
    text(c, f"For {LEGAL_NAME}", x, 145, "Helvetica", 10, PALE)

    # Keep the supplied signature image unaltered in a deliberate white signing panel.
    c.setFillColor(WHITE)
    c.roundRect(585, 108, 194, 75, 7, fill=1, stroke=0)
    c.drawImage(
        str(BASE / profile["signatory"]["signature_image"]),
        612, 116, width=140, height=61, preserveAspectRatio=True,
    )
    c.setStrokeColor(CYAN)
    c.line(585, 101, 779, 101)
    text(c, "Didigam Sathyanarayana", 585, 82, "Helvetica-Bold", 11, WHITE)
    text(c, "Director, Nhancio", 585, 65, "Helvetica", 10, PALE)

    text(c, f"nhancio.com  |  {phone}  |  {profile['email']}", x, 34, "Helvetica", 9, PALE)
    c.save()
    return output


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--name", default="Jilla Shravya")
    p.add_argument("--role", default="Budgeting Associate")
    p.add_argument("--start-date", default="2026-10-01")
    p.add_argument("--end-date", default="2026-10-30")
    p.add_argument("--issue-date", help="YYYY-MM-DD; defaults to day after the internship")
    p.add_argument("--output", type=Path, default=BASE / "generated/Jilla_Shravya_Budgeting_Associate_Internship_Certificate.pdf")
    a = p.parse_args()
    start, end = date.fromisoformat(a.start_date), date.fromisoformat(a.end_date)
    issued = date.fromisoformat(a.issue_date) if a.issue_date else end + timedelta(days=1)
    print(build(a.name, a.role, start, end, issued, a.output.resolve()))


if __name__ == "__main__":
    main()
