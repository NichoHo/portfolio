import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.platypus import SimpleDocTemplate, Paragraph, Table, TableStyle, Spacer, HRFlowable

OUT = sys.argv[1]
M = 0.5 * 72
W = letter[0] - 2 * M - 12  # frame has 6pt padding per side

name = ParagraphStyle("n", fontName="Helvetica-Bold", fontSize=17, leading=20, alignment=TA_CENTER)
sub = ParagraphStyle("s", fontName="Helvetica", fontSize=10.5, leading=13, alignment=TA_CENTER)
contact = ParagraphStyle("c", fontName="Helvetica", fontSize=8, leading=10, alignment=TA_CENTER)
sec = ParagraphStyle("h", fontName="Helvetica-Bold", fontSize=10.5, leading=12, spaceBefore=3)
body = ParagraphStyle("b", fontName="Helvetica", fontSize=8.2, leading=9.5)
bullet = ParagraphStyle("u", parent=body, leftIndent=10, bulletIndent=2, spaceBefore=1)
head = ParagraphStyle("t", fontName="Helvetica-Bold", fontSize=9, leading=11)
date = ParagraphStyle("d", fontName="Helvetica-Oblique", fontSize=9, leading=11, alignment=2)
stack = ParagraphStyle("k", parent=body, leftIndent=10, textColor="#444444", fontSize=8)

story = []

def section(t):
    story.append(Paragraph(t, sec))
    story.append(HRFlowable(width="100%", thickness=0.6, color="black", spaceBefore=1, spaceAfter=2))

def row(left, right=""):
    t = Table([[Paragraph(left, head), Paragraph(right, date)]], colWidths=[W * 0.76, W * 0.24])
    t.setStyle(TableStyle([("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                           ("TOPPADDING", (0, 0), (-1, -1), 1.5), ("BOTTOMPADDING", (0, 0), (-1, -1), 0)]))
    story.append(t)

def bullets(*items):
    for i in items:
        story.append(Paragraph(i, bullet, bulletText="•"))

def tech(t):
    story.append(Paragraph("<i>Tech: " + t + "</i>", stack))

story += [
    Paragraph("NICHOLAS HO", name),
    Paragraph("Software Engineer | Backend &amp; Full Stack", sub),
    Paragraph("Tangerang, Indonesia | +62 819-0400-9193 | nikko150905@gmail.com | linkedin.com/in/nichoho | "
              "github.com/NichoHo | nichoho.github.io/portfolio", contact),
]

section("SUMMARY")
story.append(Paragraph(
    "Computer Science student (Binus University Global Class, GPA 3.83) and backend-focused full-stack engineer, "
    "shipping production software since 2023. Currently a Backend Software Engineering Intern at SIRCLO. "
    "Built enterprise logistics and finance systems in C#/.NET at Galva Group, and solo-built payment and marketplace "
    "systems in Go and Java with idempotency, double-entry ledgers, and event-driven services, proven by "
    "concurrency tests. Published ML researcher; led student teams of up to 6 engineers.", body))

section("WORK EXPERIENCE")
row("Software Engineering Intern (Backend) | SIRCLO", "Aug 2026 - Present")
bullets(
    "Top committer on the Project Portfolio Dashboard, an internal app that turns engineering's GitHub Projects boards "
    "into progress, risk, velocity, and QA views. Built and deployed it with TypeScript, Next.js, Postgres, Drizzle, "
    "Docker Compose, and Caddy.",
    "Gathered requirements with the VP, Engineering and QA Managers, and PMs; co-authored the technical spec and ERD.",
    "Built a GitHub GraphQL sync job and an org webhook receiver that logs every status change and its author, plus "
    "Google sign-in, per-menu access control, and At Risk email alerts.",
    "Computed delivery metrics as SQL rollups in Postgres: weighted epic progress, At Risk schedule flags, "
    "time-in-status bottlenecks, and QA rejection cycles.")
row("Lead Developer | Nexus Software Agency", "Oct 2025 - Present")
bullets("Lead development of client landing pages in Next.js and Tailwind CSS, from business requirements to release.")
row("Full Stack Developer (Part-time) | Galva Group", "Apr 2024 - Jul 2026")
bullets(
    "Built backend logic for an enterprise Warehouse Management System (VB.NET, ASP.NET Web Forms, SQL Server/T-SQL): "
    "delivery orders, stock opname, putaway/picking completeness, multi-warehouse hierarchies, and token-authenticated "
    "external API integrations.",
    "Built Kargolo, a logistics admin system for carrier networks and expedition services: React/TypeScript SPA "
    "(Redux Toolkit, Zod, MUI) over a .NET 8 Web API using the Repository and Unit of Work patterns with Dapper.",
    "Built a Project Management System with Next.js, Tailwind CSS, Supabase, and AWS S3.")
row("Full Stack Developer (Freelance) | Galva Group", "May 2023 - Aug 2023")
bullets(
    "Built the Inventory finance module, which posts balanced double-entry General Ledger journals for multi-currency "
    "cash and bank disbursements.",
    "Designed an API-first C# ASP.NET Web API backend (Repository pattern, Dapper) with TransactionScope "
    "cross-database transactions and token auth, and moved the frontend to a Vue.js 3 SPA.")

section("PROJECTS")
row("Agora | C2C Marketplace &amp; Payments Platform (solo build)", "Go, Python, Next.js")
bullets(
    "Built Go services (PostgreSQL, Redis) for identity, escrow payments, and limited-stock drops: an OAuth 2.0 / OIDC "
    "provider written from the RFCs (PKCE, JWKS, TOTP MFA), an idempotent double-entry escrow ledger, and sharded Redis "
    "Lua reservations that never oversell. Python services handle risk scoring and AI-assisted listings.",
    "Published events through a transactional outbox to Redpanda (Kafka API), released the relay as outboxkit, a "
    "standalone open-source Go module, and verified it with chaos and k6 load tests: no lost events or double charges.")
row("Switch | Card Payment Authorization Engine (solo build)", "Java, Spring Boot")
bullets(
    "Built a payment switch with an encrypted card vault, an idempotency layer that runs exactly once under 20 "
    "concurrent threads, a rules-based risk engine, and acquirer failover (Resilience4j). Proved it with 104 state-machine "
    "tests and 2,000 property-based sequences (jqwik, Testcontainers) that keep the ledger balanced.")
row("Localist | Directory SaaS with Paid Listings (solo build, live)", "Laravel, Stripe")
bullets("Built and deployed a directory of ~6,100 SEO pages covering 5,800 real businesses, with a Livewire owner "
        "portal, Stripe subscriptions (Laravel Cashier), Cloudflare edge caching with targeted purges, and 60 PHPUnit tests.")
row("FaQ Assistant | RAG Document Q&amp;A (Technical Lead, team of 3)", "Python, LangChain")
bullets("Led Agile sprints and built a local RAG pipeline (LangChain, HuggingFace embeddings, FAISS) that answers "
        "questions about uploaded PDFs with exact source excerpts and no external LLM API.")
section("EDUCATION")
row("Computer Science (Global Class) | Binus University | GPA 3.83 / 4.00", "2023 - Present")
row("Student Exchange, Computer Science | Sejong University, Seoul | GPA 4.40 / 4.50 (top 2%)", "Feb 2026 - Jun 2026")

section("RESEARCH")
row("Machine Learning Algorithms for HIV/AIDS Prediction using Explainable AI", "ICORIS 2025, published")
bullets("Co-authored; 97% accuracy with Random Forest and XGBoost, with SHAP making predictions interpretable for clinicians.")
row("Hybrid MediaPipe-GRU Architecture for Efficient BISINDO Recognition", "Thesis, ongoing")
bullets("Lightweight sign-language recognition for budget devices; applied in Signlingo, a gamified web app (Flask, TensorFlow).")

section("SKILLS &amp; CERTIFICATIONS")
for k, v in [
    ("Programming", "Go, Java, Python, TypeScript, JavaScript, C#, SQL, PHP, VB.NET, C"),
    ("Backend", "Spring Boot, ASP.NET Core / .NET 8, Node.js, Express, FastAPI, Flask, Laravel, REST, OAuth 2.0 / OIDC"),
    ("Data &amp; Messaging", "PostgreSQL, SQL Server, MySQL, Redis, Kafka (Redpanda), Supabase, Drizzle, Dapper"),
    ("DevOps &amp; Testing", "Docker, Terraform, GitHub Actions (CI/CD), AWS S3, Cloudflare, OpenTelemetry, JUnit 5, Testcontainers, Playwright, k6"),
    ("Frontend", "React, Next.js, Redux Toolkit, Tailwind CSS, Vue.js, Livewire"),
    ("AI / ML", "Scikit-learn, XGBoost, TensorFlow, LangChain, FAISS, RAG, SHAP, OpenCV, MediaPipe, Pandas"),
    ("Spoken Languages", "English (IELTS Academic 7.5), Indonesian (native)"),
    ("Certifications", "Alibaba Cloud Associate: Cloud Engineer (2025), NVIDIA DLI: Building Conversational AI Applications (2025)"),
]:
    story.append(Paragraph(f"<b>{k}:</b> {v}", body))

doc = SimpleDocTemplate(OUT, pagesize=letter, leftMargin=M, rightMargin=M, topMargin=0.32 * 72, bottomMargin=0.28 * 72,
                        title="Nicholas Ho - CV", author="Nicholas Ho")
doc.build(story)
