from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4, landscape
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader

BASE = Path(__file__).resolve().parent
OUT = BASE / "generated/Jilla_Shravya_Internship_Certificate_Landscape.pdf"
PURPLE = colors.HexColor("#4A20A0")
CYAN = colors.HexColor("#00B1D6")
INK = colors.HexColor("#22222A")
MUTED = colors.HexColor("#5C5E69")

def draw_center(c, text, y, size, color=INK, font="Helvetica-Bold"):
    c.setFont(font, size); c.setFillColor(color); c.drawCentredString(421, y, text)

def build(path=OUT):
    w, h = landscape(A4); c = canvas.Canvas(str(path), pagesize=(w, h))
    c.setStrokeColor(CYAN); c.setLineWidth(2); c.line(54, h-88, w-54, h-88)
    c.drawImage(str(BASE / "assets/nhancio-logo-transparent.png"), 58, h-80, width=75, height=75, mask="auto", preserveAspectRatio=True)
    draw_center(c, "NHANCIO TECHNOLOGIES PRIVATE LIMITED", h-45, 19, PURPLE)
    draw_center(c, "IIT Alumnus Startup  •  AI Services | USA | AUS", h-66, 11, CYAN)
    c.setFont("Helvetica-Bold", 10); c.setFillColor(MUTED); c.drawRightString(w-58, h-43, "nhancio.com"); c.drawRightString(w-58, h-59, "Hyderabad")
    draw_center(c, "INTERNSHIP CERTIFICATE", h-135, 30, PURPLE)
    draw_center(c, "Certificate of Successful Internship", h-158, 13, MUTED, "Helvetica")
    draw_center(c, "This is to certify that", h-190, 13, INK, "Helvetica")
    draw_center(c, "Jilla Shravya", h-224, 28, PURPLE)
    draw_center(c, "has successfully completed an internship with", h-250, 13, INK, "Helvetica")
    draw_center(c, "Nhancio Technologies Private Limited", h-278, 18, PURPLE)
    x, y, bw, bh = 80, h-410, 680, 105
    c.setFillColor(colors.HexColor("#F3F0FC")); c.rect(x, y, 185, bh, fill=1, stroke=0)
    c.setFillColor(PURPLE); c.setFont("Helvetica-Bold", 12)
    for i, label in enumerate(("ROLE", "INTERNSHIP PERIOD", "WORK MODE")): c.drawString(x+14, y+bh-25-i*35, label)
    c.setFillColor(INK); c.setFont("Helvetica-Bold", 13)
    c.drawString(x+210, y+bh-25, "Accounting Executive")
    c.drawString(x+210, y+bh-60, "1 October 2026 – 30 October 2026")
    c.drawString(x+210, y+bh-95, "Remote")
    c.setFont("Helvetica", 11); c.setFillColor(INK)
    c.drawCentredString(421, y-23, "During the internship, she contributed to assigned accounting and finance activities, collaborated with the Nhancio team,")
    c.drawCentredString(421, y-40, "and demonstrated professionalism, commitment, and a willingness to learn. We appreciate her contribution and wish her continued success.")
    c.setFont("Helvetica", 11); c.setFillColor(MUTED); c.drawCentredString(421, y-68, "Issued on 29 September 2026")
    c.setFont("Helvetica-Bold", 12); c.setFillColor(PURPLE); c.drawString(80, 82, "For Nhancio Technologies Private Limited")
    c.drawImage(str(BASE / "assets/authorized-signature.png"), 680, 70, width=82, height=34, mask="auto", preserveAspectRatio=True)
    c.setFillColor(INK); c.setFont("Helvetica-Bold", 11); c.drawCentredString(721, 59, "Didigam Sathyanarayana"); c.drawCentredString(721, 44, "Director, Nhancio")
    c.setStrokeColor(CYAN); c.setLineWidth(1.5); c.line(80, 28, w-80, 28)
    draw_center(c, "nhancio.com  •  7095 2 88 950  •  hello@nhancio.com  •  Hyderabad", 12, 10, PURPLE)
    c.save(); return path

if __name__ == "__main__": print(build())
