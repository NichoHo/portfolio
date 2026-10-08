# Nicholas Ho — Master Portfolio & Experience Bank

*Comprehensive reference compiled from nichoho.github.io/portfolio (homepage + full /projects listing). This is a raw, complete source-of-truth — trim and reframe sections as needed for each specific job application.*

## Table of Contents
- [Contact Information](#contact-information)
- [Professional Summary](#professional-summary)
- [Technical Skills (Consolidated)](#technical-skills-consolidated)
- [Work Experience](#work-experience)
- [Featured Projects](#featured-projects)
- [Research & Publications](#research--publications)
- [Education](#education)
- [Organizations & Leadership](#organizations--leadership)
- [Volunteering](#volunteering)
- [Certifications](#certifications)
- [Media Assets](#media-assets-for-reuse-in-tailored-materials)
- [Sourcing Notes](#sourcing-notes)

---

## Contact Information

| Field | Detail |
|---|---|
| Name | Nicholas Ho |
| Title | Fullstack Architect / Fullstack Developer |
| Location | Tangerang, Indonesia (GMT+7) |
| Phone | +62 819-0400-9193 |
| Email | nikko150905@gmail.com |
| LinkedIn | linkedin.com/in/nichoho |
| GitHub | github.com/NichoHo |
| CV (PDF) | nichoho.github.io/portfolio/CV.pdf |
| Languages | English (IELTS 7.5), Indonesian (Native) |
| Availability | Open to new opportunities; site explicitly flags availability for internships (as of July 2026) |

---

## Professional Summary

Computer Science undergraduate (Binus University, Global Class) and fullstack developer specializing in distributed backend systems, high-performance frontend interfaces, and AI/ML. Currently a Backend Software Engineering Intern at SIRCLO, alongside Lead Developer at Nexus Software Agency (client landing pages in Next.js) and part-time Full Stack Developer at Galva Group, where he architected a Warehouse Management System (WMS) and Kargolo, a logistics data-management system. Also an active AI/ML practitioner and published researcher, with work spanning real-time computer vision (sign-language recognition), RAG-based generative AI tools, explainable AI (SHAP) applied to healthcare, and predictive modeling for aviation maintenance and Formula 1 race strategy. Recently finished a CS exchange program at Sejong University in Seoul (GPA 4.40/4.50, 98th percentile).

---

## Technical Skills (Consolidated)

*Ordered within each category by employability — most in-demand / differentiating first.*

**Languages:** Python, TypeScript, JavaScript, Go, Java, C#, SQL, PHP, HTML5, CSS3, VB.NET, T-SQL, C

**Frontend:** Next.js, React, Redux / Redux Toolkit, Tailwind CSS, Material UI (MUI), Vue.js, Bootstrap (incl. v5), Framer Motion, Zod, Figma, Lucide React, DevExpress, Blade Templates, jQuery, DataTables.net, Flatpickr, Lodash, Moment.js

**Backend & APIs:** ASP.NET Core / .NET Core (.NET 8+), Node.js, Express, Auth.js (Google OAuth), GitHub GraphQL API & webhooks, ASP.NET Web API, Laravel, Flask, SignalR / WebSockets (real-time bi-directional messaging), ASP.NET Web Forms, ADO.NET, Google Maps API

**Databases & ORMs:** PostgreSQL, SQL Server, MySQL, Supabase, Dapper (Micro-ORM), Drizzle ORM, SQLAlchemy, Firebase

**Mobile:** Expo, React Native, Expo Router, TanStack Query, Zustand, NativeWind, react-native-mmkv (offline-first local storage), WidgetKit (native iOS widgets) — *secondary to web fullstack/data science focus*

**AI, Machine Learning & Data Science:** LangChain, HuggingFace (incl. all-MiniLM-L6-v2 embeddings), FAISS, TensorFlow, Scikit-learn, XGBoost, SHAP (SHapley Additive exPlanations), OpenCV, MediaPipe, GRU (Gated Recurrent Unit), Optuna, Pandas, NumPy, Matplotlib, Plotly, Streamlit, FastF1

**DevOps & Tooling:** Docker, Docker Compose, Git/GitHub, Nginx, Caddy, Vite, Vercel

**Concepts & Practices:** RAG (Retrieval-Augmented Generation) pipeline design, Explainable AI (XAI), vector embeddings & semantic search, distributed transaction management (`TransactionScope`), double-entry accounting / General Ledger systems, token-based authentication, real-time computer vision, geofencing & geospatial distance calculation (Haversine formula), predictive maintenance & time-series forecasting, Repository Pattern, Unit of Work pattern, Service-Repository pattern, domain-driven repository interfaces, API-first / decoupled SPA architecture, MVC architecture, monolithic / code-behind & session-state architecture, primary constructors (modern C#), i18n/localization, Agile/Scrum team leadership, Warehouse Management System (WMS) domain expertise

> **Newly surfaced skills — Round 1 (from project pages):** Python, Flask, OpenCV, SQLAlchemy, Docker, Docker Compose, Nginx, Vite, Blade Templates, XGBoost, Optuna, Streamlit, Pandas, NumPy, Matplotlib, Plotly, FastF1, VB.NET, Google Maps API, Bootstrap, jQuery, SQL Server, HTML5, CSS3. *(Flask is a partial exception — it was mentioned once in the Backend Development description text but never had its own tag/pill.)*
>
> **Newly surfaced skills — Round 2 (from Galva work-project deep dives):** ASP.NET Web Forms, ADO.NET, T-SQL, DevExpress, ASP.NET Web API, Dapper, Vue.js, Bootstrap 5, DataTables.net, Flatpickr, Lodash, Moment.js, .NET Core/.NET 8+, Redux Toolkit, Zod, Material UI (MUI) — plus the architecture/pattern concepts above (Repository Pattern, Unit of Work, TransactionScope, token auth, code-behind/session-state, primary constructors, double-entry accounting).
>
> **Round 3 (from your CV, confirmed by you):** C and Java (both learned in university). *Note: the CV also listed PyTorch, which isn't corroborated anywhere else (site and deep dives only mention TensorFlow) and wasn't part of your confirmation — left out of both this file and the revised CV pending a check on your end.*

---

## Work Experience

### Software Engineering Intern (Backend) — SIRCLO
**Aug 2026 – Present**
Backend engineer on the **Project Portfolio Dashboard (PPD)**, an internal web app that gives PMs and leadership one view of epic progress, timelines, schedule risk, delivery speed, and quality, built from the engineering team's GitHub Projects boards. 6-month program (18 Aug 2026 to 17 Feb 2027) with a cross-functional team (PM, Frontend, QA) and a second backend intern; top committer on the repo.
- Gathered requirements with stakeholders (VP, Engineering Manager, QA Manager, PMs), then co-authored the technical spec and ERD, reviewed and approved by the backend mentor
- Built the GitHub integration: a sync job over the GitHub GraphQL API that classifies board items into epics/tasks via the sub-issue tree, plus an org webhook receiver (`projects_v2_item`) that records every status move and who made it, added after GitHub stopped returning status-change events in issue timelines
- Built Google sign-in limited to company domains (Auth.js), onboarding, an admin panel, and per-menu access control; built the backend for the Settings, Users, and Roadmap Hub (PM kanban) pages, including the PM-to-GitHub epic handoff
- Derived metrics in Postgres (weighted progress, At Risk schedule flags, time-in-status bottlenecks, QA rejection cycles), with At Risk email alerts to PMs over SMTP
- Deployed the app on a company VM with Docker Compose, Postgres 16, and Caddy (TLS reverse proxy)

*Tech: TypeScript, Next.js (App Router), PostgreSQL 16, Drizzle ORM, Auth.js (Google OAuth), GitHub GraphQL API + webhooks, Zod, Recharts, Tailwind CSS, Vitest, Docker Compose, Caddy, Nodemailer*

### Lead Developer — Nexus Software Agency
**Oct 2025 – Present**
- Spearheaded development of high-performance landing pages for diverse clients using Next.js
- Translated business requirements into modern, scalable frontend code

*Tech: Next.js, Tailwind CSS, React*

### Full Stack Developer (Part-time) — Galva Group
**Apr 2024 – July 2026**
- Architected a comprehensive Warehouse Management System (WMS) using ASP.NET
- Built "Kargolo," a React (frontend) and C# Web API (backend) data management system for configuring and maintaining carrier networks and expedition shipping services
- Engineered a comprehensive Project Management System (PMS) using Next.js, Tailwind CSS, Supabase, and AWS S3.

*Tech: C# ASP.NET, React, HTML, CSS, SQL Server, JavaScript, jQuery, Next.js, Tailwind CSS, Supabase, AWS S3*

**Project deep dive — Warehouse Management System (WMS):**
A server-side web application handling inbound/outbound logistics, storage mapping, and permission-based user access controls.
- *Core functionality:* Processes outbound documentation (Delivery Orders/DO, Loan documents, Stock Opnames), calculates putaway/picking completeness percentages, manages parent-warehouse hierarchies, and integrates with external APIs via token authorization.
- *Backend:* VB.NET on ASP.NET Web Forms using classic ADO.NET (`DataTable`, `SqlDataAdapter`) against a Microsoft SQL Server database via direct T-SQL statements.
- *Frontend:* DevExpress (v18.1) component library (`ASPxGridView`, `ASPxPopupControl`) mixed with standard ASP controls and vanilla JavaScript for client-side grid selection events.
- *Architecture:* Traditional monolithic / code-behind application, with UI state heavily managed server-side via session state.

**Project deep dive — Logistics Project ("Kargolo"):**
Not a real-time tracker — Kargolo is a data management system for configuring and maintaining static shipping infrastructure. It functions as the administrative control panel that establishes the foundations of the logistics pipeline: standard CRUD operations for managing carriers, sorting expedition shipping service options, and binding them to structural details like carrier codes and point-of-contact phone numbers. It allows creating, filtering, modifying, and deleting the carrier networks and service packages an operation relies on — rather than actively monitoring shipments while they're out on the road.
- *Core functionality:* Full CRUD for carrier configurations, dynamic filtering of expedition services, binding carriers to structural details (carrier codes, point-of-contact phone numbers), a Unit of Work model for strict data-pipeline control, and strict client-side form validation.
- *Backend:* Modern C# (.NET Core / .NET 8+) using current clean-code features like primary constructors; continues the Repository Pattern + Dapper for high-performance SQL execution over SQL Server.
- *Frontend:* A full React.js SPA built strictly in TypeScript. Global state via Redux Toolkit (`useSelector`/`useDispatch`), runtime form validation via Zod schemas, layouts in Tailwind CSS alongside Material UI (MUI) component tokens.
- *Architecture:* Fully decoupled modern client-server separation with a component-driven frontend and a RESTful API layer over domain-driven repository interfaces.

### Full Stack Developer (Freelance) — Galva Group
**May 2023 – Aug 2023**
- Built the **Inventory Project**, an API-driven finance module automating balanced double-entry General Ledger postings (debits/credits) for multi-currency cash & bank disbursements
- Architected a C# (ASP.NET Web API 2) backend around the Repository Pattern, using Dapper (Micro-ORM) and `TransactionScope`-managed cross-database transactions, secured with custom token authentication
- Migrated the frontend to a decoupled Vue.js 3 SPA styled with Bootstrap 5, with DataTables.net for interactive data grids

*Tech: C#, ASP.NET Web API 2, Dapper, Vue.js, Bootstrap 5, SQL Server, DataTables.net, Flatpickr, JavaScript*

**Project deep dive — Inventory Project:**
An API-driven finance and inventory module focused on managing cash and bank disbursements along with their corresponding financial general-ledger entries.
- *Core functionality:* Cash/bank-out documentation, multi-currency exchange rates (Kurs), area tagging, bank-account lookup, and automatic generation of balanced double-entry accounting journals (debits/credits) in the General Ledger.
- *Backend:* C# (ASP.NET Web API 2) structured around the Repository Pattern; uses Dapper (Micro-ORM) for object-data mapping, handles cross-database transactions via `TransactionScope`, and secures endpoints with custom token authentication.
- *Frontend:* Transitioned to a decoupled SPA using Vue.js (v3), styled with Bootstrap 5, plus DataTables.net (interactive data grids), Flatpickr (date picking), and Lodash / Moment.js.
- *Architecture:* API-first middleware design — the ASP.NET frontend acts as a shell, passing asynchronous `fetch` requests to the backend Web API via a dedicated proxy router.

### Software Developer (Intern) — Galva Group
**June 2022 – July 2022**
- Engineered a geofencing access-control system, applying the Haversine formula to restrict app access to users within a set radius of office coordinates
- Built real-time chat via SignalR/WebSockets for instant bi-directional messaging between field users
- Integrated Google Maps API to visualize geotagged CRUD tracking data for supervisors

*Tech: VB.NET, SignalR, Google Maps API, SQL Server*

**Project deep dive — Field Tracking & Geofencing App:**
A VB.NET field application combining location-gated access control, geotagged CRUD tracking, and real-time chat for office staff working off-site.
- *Core functionality:* Gatekeeper logic that pulls the device's GPS/network coordinates, computes great-circle distance to the office via the Haversine formula, and denies access outside a configured radius (e.g. 100m); CRUD records are stamped with the capturing device's lat/lng.
- *Real-time layer:* Persistent bi-directional connection (SignalR/WebSockets) pushes chat messages to the recipient's client instantly, with no polling or manual refresh.
- *Visualization:* Google Maps API renders stored coordinates as markers so supervisors can see where each tracked event actually occurred.
- *Architecture:* Thick VB.NET client handling geolocation, the gatekeeper check, and the CRUD/chat UI, backed by a SQL Server store for locations, tracking history, and chat messages.

---

## Featured Projects

### 1. Signlingo — *Machine Learning & Web Dev*
An interactive AI-powered platform designed to make learning sign language accessible through gamification and real-time computer vision feedback.

**Links:** [Live](https://signlingo-django.onrender.com/) · [Source](https://github.com/NichoHo/Signlingo)

**Overview:** Uses multimedia components — video tutorials, image-based quizzes, and a real-time AI-powered hand sign recognition game. Analyzes user signs via webcam to give instant feedback, bridging theoretical knowledge and practical application.

**Role — Full Stack Developer:** Engineered the complete web platform from the ground up, bridging ML models and user-facing interfaces. Single-handedly built the responsive frontend and server architecture. Authored the data-extraction code feeding real-time webcam input into the TensorFlow/OpenCV pipelines for a low-latency, gamified experience.

**Key Features:**
- AI hand sign recognition using TensorFlow & OpenCV
- Custom-built data extraction pipeline for real-time validation
- Real-time webcam feedback loop
- Gamified learning with streaks and progress tracking
- User authentication & secure profile management
- Interactive video lessons & quizzes

**Tech Stack:** Python, Flask, TensorFlow, OpenCV, SQLAlchemy, Docker, HTML/CSS, JavaScript

**Deployment:** Containerized using Docker and Docker Compose for consistent dev/production environments.

> **Note:** per your clarification, this project is connected to your BISINDO thesis (see Research & Publications) rather than being a fully separate achievement — worth keeping in mind so a tailored resume doesn't unintentionally double-count them as two distinct accomplishments.

---

### 2. Flux Budget App — *Fullstack Engineering*
A comprehensive personal finance management system built for scalability, featuring automated recurring billing, multi-currency support, and real-time analytics.

**Links:** [Live](https://flux-budget-app.onrender.com/) · [Source](https://github.com/NichoHo/Flux_Budget_App)

**Overview:** Solves the complexity of managing personal finances across multiple currencies/categories — automated background jobs for recurring bills, budget-limit enforcement, and dynamic currency conversion.

**Role — Technical Lead & Developer:** Coordinated a team of 4 engineers through daily Agile standups. Personally architected the backend and frontend, built the automated background workers for recurring bills, and wrote the logic powering strict budget-limit enforcement.

**Technical Highlights:**
- Automated recurring billing system (cron jobs)
- Dynamic currency conversion & localization (i18n)
- Real-time analytics & spending visualizations
- Secure authentication & admin management middleware
- Budget limit enforcement logic
- Containerized deployment with Docker & Nginx

**Tech Stack:** Laravel 10, PHP 8.2, MySQL, Tailwind CSS, Blade Templates, Docker, Nginx, Vite

**Architecture:** MVC with a Service-Repository pattern for currency logic; background workers handle scheduled billing tasks.

---

### 3. FaQ Assistant — *Generative AI & RAG*
An intelligent document analysis tool using Retrieval-Augmented Generation (RAG) to let users search PDF documents in real-time.

**Links:** [Live](https://faq-assistant.onrender.com/) · [Source](https://github.com/NichoHo/faq-assistant)

**Overview:** Upload a PDF → the system creates local semantic embeddings → users ask natural-language questions → it retrieves the most relevant context and deterministically formats exact source excerpts, for accurate, hallucination-free answers without relying on external cloud APIs.

**Role — Technical Lead & Full Stack Developer:** Drove end-to-end delivery, led a team of 3 developers through Agile sprints, and owned both frontend and backend architecture. Designed/built the UI and engineered the document-ingestion framework (LangChain) plus local semantic search (FAISS).

**Technical Architecture:**
- RAG pipeline implementation using LangChain
- Local vector embeddings with HuggingFace (all-MiniLM-L6-v2)
- FAISS for efficient in-memory similarity search
- Recursive character text splitting for context optimization
- Flask backend with asynchronous processing
- Responsive chat interface with real-time updates

**Tech Stack:** Python, Flask, LangChain, HuggingFace, FAISS, HTML5, CSS3

**Key Logic:** `rag_pipeline.py` handles retrieval by querying the local FAISS vector store and deterministically formats retrieved chunks into exact document excerpts.

---

### 4. Jet Engine Health Monitor — *Machine Learning & Data Science*
A predictive maintenance dashboard engineered to calculate the Remaining Useful Life (RUL) of turbofan engines using the NASA C-MAPSS dataset.

**Links:** [Notebook](https://colab.research.google.com/) *(generic Colab link on the site — not a project-specific notebook; you may want to swap in the direct link)*

**Overview:** Tackles predictive maintenance in aviation by analyzing time-series sensor data (NASA C-MAPSS) to predict RUL of jet engines. Predictions are broken down using Explainable AI (SHAP) so operators can see which sensor readings drive the model's decisions — built to meet industrial safety/transparency standards.

**Role — Team Lead & ML Developer:** Guided a 6-person engineering team through a 16-week development lifecycle. Owned the core ML pipeline: exploratory data analysis, rolling-feature engineering for RUL calculations, and hyperparameter-tuned an XGBoost model via Optuna. Also handled frontend QA for the Streamlit dashboard.

**Key Features:**
- XGBoost regression model for time-series forecasting
- Hyperparameter optimization via Optuna
- Explainable AI (XAI) integration using SHAP waterfalls
- Real-time operations dashboard built with Streamlit & Plotly
- Automated NASA Safety Score & RMSE evaluation
- Rolling-window feature engineering for sensor noise reduction

**Tech Stack:** Python, XGBoost, Optuna, SHAP, Streamlit, Pandas, Plotly, Scikit-learn

**Performance:** Evaluated against the NASA Safety Score, which penalizes over-predictions (late maintenance) more heavily than under-predictions.

---

### 5. F1 Undercut Predictor — *Sports Analytics & ML*
A machine learning model designed to predict the success probability of undercut strategies in Formula 1 races using historical telemetry data.

**Links:** [Live](https://f1-undercut-predictor.onrender.com/) · [Source](https://github.com/NichoHo/f1-undercut-predictor)

**Overview:** Uses the FastF1 library to mine thousands of laps of historical race data (2022–2024). A Random Forest Classifier calculates the probability of a successful "undercut" overtake based on tire degradation, pit-stop time loss, and gap to the driver ahead.

**Role — Full Stack Developer:** Architected the complete end-to-end solution — built the analytics engine in Flask, integrated the serialized Python ML pipeline, and designed the web interface for visualizing live time-series tracking parameters and interacting with the prediction model.

**Key Features:**
- Data mining pipeline using the FastF1 API
- Random Forest classification model
- Analysis of tire compound performance & degradation
- Flask web interface for real-time predictions
- Visualization of driver gaps and pit windows
- Comprehensive dataset construction (CSV)

**Tech Stack:** Python, Flask, Scikit-learn, Pandas, FastF1, NumPy, Matplotlib, HTML/CSS

**Model Logic:** Evaluates "Gap to Driver Ahead," "Tyre Age," and "Compound Difference" to output a binary classification (Successful/Failed Undercut) with a confidence score.

---

### 6. Agora — *Marketplace, Payments & Distributed Systems*
A C2C marketplace platform that solves identity, money movement, and inventory contention as separate services with real boundaries between them: a from-the-RFCs OAuth 2.0 / OIDC identity provider, an escrow checkout on a double-entry ledger, a limited-inventory "drop" service built for heavy concurrency, an AI listing assistant, and a risk plane that scores events from the platform's own stream. Card authorization routes through an external payment switch written in Java.

**Links:** [Source](https://github.com/NichoHo/agora) *(repo URL inferred; live demo pending deployment)*

**Overview:** Models the parts of a marketplace that are genuinely difficult to get right. **Identity:** its own OIDC provider with Authorization Code + PKCE, RS256 JWT/JWKS, argon2id credentials, TOTP MFA with recovery codes, and rotating refresh tokens that revoke the whole family on reuse. **Money:** escrow on a double-entry ledger where fund/release/refund are idempotent and money can never silently drift. **Inventory under contention:** drops sell exactly N units with queue-based admission control, a sharded Redis Lua reservation (Redis as hot-path authority, PostgreSQL as durable source of truth), TTL-based release, and payment-ambiguity handling when the switch reports `AUTH_UNKNOWN`. **Risk:** an IsolationForest anomaly model blended with explainable rules scores login, reservation, order and payment events into allow / review / block, shown on a risk console. State changes and events commit together via the transactional outbox, relayed at-least-once to a Kafka-compatible bus and consumed idempotently.

**Role — Full Stack Developer (solo build):** Designed and built the entire system end to end: the Go services (identity, marketplace, payments, sale), the Python services (AI listing assistant, risk scoring), the Next.js storefront, IdP screens and risk console, the event bus and outbox relay, the integration with the Java payment switch, the invariant, chaos and load test suites, CI, and Terraform. Also extracted the outbox relay and idempotent-consumer guard into `outboxkit`, a standalone, independently versioned Go module with its own tests, CI, and MIT license.

**Key Features:**
- OAuth 2.0 / OIDC provider built from the RFCs: mandatory PKCE (constant-time S256), RS256 JWT signing with published JWKS, consent screen, append-only audit log
- TOTP MFA (RFC 4226/6238) with single-use recovery codes and step-up sessions; refresh-token rotation with family revocation and `refresh.reuse_detected` on replay
- Double-entry escrow ledger: idempotent fund/release/refund with a 10% platform fee, money as integer minor units, DB CHECK refusing negative balances
- Order state machine (`pending_payment → funded → shipped → completed`, cancel/refund) with 15-minute reservations and an auto-release timer
- Limited-stock drops: Redis-sorted-set admission queue, sharded Lua stock decrement to avoid a hot key, reservation TTLs enforced by Redis expiry, and shadow-queueing of suspicious buyers
- Cross-language card authorization via the Switch service, with `AUTH_UNKNOWN` resolved by a status-probe job so a lost bank response never double-charges or leaks inventory
- Risk service: IsolationForest plus explainable rules, a review queue, and a live console
- Transactional outbox, `outboxkit` relay (`FOR UPDATE SKIP LOCKED`), Redpanda, idempotent consumers; OpenTelemetry tracing across hops
- AI listing assistant: Anthropic vision + structured outputs with a heuristic fallback and price bands from comparable sold history

**Invariant & correctness test suite:** replayed authorization codes fail; wrong or absent PKCE verifiers fail; `alg:none` and tampered JWTs are rejected; TOTP matches the RFC vectors; refresh-token reuse burns the family. On money: every transfer's entries sum to zero globally and per account; 20 goroutines racing a 10k balance yield exactly 10 successes; release and refund are mutually exclusive under race; the sweeper and manual confirm release exactly once; concurrent buys of one listing produce one order. On drops: no oversell under heavy concurrent reservation attempts, a per-user unit cap that holds when a user races themselves, and exactly-once release on TTL expiry. On distributed systems: chaos tests kill the relay mid-flow (no lost or duplicated events) and force `AUTH_UNKNOWN` (no double charge, no leaked inventory). A Playwright e2e runs register → MFA enroll → TOTP step-up → AI-assisted listing → escrow buy → ship → confirm receipt → wallet reconciles.

**Tech Stack:** Go, PostgreSQL 17, pgx, Redis (Lua), Python, FastAPI, scikit-learn (IsolationForest), Anthropic API, Redpanda (Kafka-compatible, franz-go), Java (Switch integration), OpenTelemetry, k6, Next.js, TypeScript, Tailwind CSS, Docker, docker-compose, Terraform, GitHub Actions, Playwright, argon2id, OAuth 2.0 / OIDC + PKCE

**Architecture:** Next.js storefront + IdP screens → `id` (OIDC provider) / `market` (listings + order state machine) / `sale` (drops and admission) / `pay` (double-entry escrow ledger) / `assist` (AI listings) → PostgreSQL (schema per service), with services writing to a transactional outbox that the `outboxkit` relay publishes to Redpanda; `risk` consumes those events and emits allow / review / block decisions. `pay` calls the separate Java Switch service for card authorization. Services verify each other's JWTs via JWKS.

**Run:** `make up` starts the whole stack in Docker; storefront at `http://localhost:3000`. Signing in is a full OAuth 2.0 Authorization Code + PKCE round trip against the project's own IdP.

> **Note:** Honest framing: Agora is a simulation, with no real money, KYC, or compliance posture. The identity provider is an *educational* build from the RFCs (production systems should use vetted libraries). Data is synthetic and the Switch service accepts only documented test BINs.

---

### 7. Localist — *Fullstack SEO Directory & SaaS*
A programmatic local-business directory (~6,100 SEO pages) with a self-serve owner portal where businesses claim, manage, and pay for their listing — a working model of the directory/SaaS business (think Yelp/Yellow Pages) built on a modern Laravel stack.

**Links:** [Live](https://localist-0mlt.onrender.com/) · [Source](https://github.com/NichoHo/Localist)

**Overview:** Generates a large public directory from listing data — home, per-category, per-city, and city×category landing pages plus individual business pages — all cacheable and search-optimized. Business owners claim their page via a slug link, edit it live, manage photos and leads, and upgrade to Featured/Premium plans through Stripe Checkout, which lifts their ranking in the directory. Seeded with about 5,800 real Malaysian businesses from Foursquare's open Places dataset (Apache 2.0), with Stripe running in test mode.

**Role — Full Stack Developer (solo build):** Designed and built the entire platform end to end across four phases — the public directory and ranking engine, the Livewire owner portal (claim/edit/photos/leads), Stripe payments and plan gating, full technical SEO (JSON-LD, sitemaps, canonicals), the Cloudflare caching/purge layer, an admin approval console, and the Dockerized deploy — with a 60-test suite as the correctness proof.

**Key Features:**
- Programmatic SEO: ~6,100 generated pages across categories, cities, and city×category combinations, with featured-first ranking via a `Business::ranked()` scope
- Livewire 3 owner portal: claim-by-slug flow, live listing editing, drag-reorder photo management (plan-gated max photos), and a leads inbox with unread badges
- Stripe payments via Cashier: Checkout-based upgrade to Featured/Premium in MYR, in-place plan switching on the existing subscription (no double billing), plan downgrade with cancellation, plans directly driving directory ranking
- SEO integrity: schema.org JSON-LD (LocalBusiness/BreadcrumbList/ItemList), canonical tags, `noindex` on search, and a chunked `sitemap.xml` index regenerated daily and after each import
- Slug-change → 301 redirect handling (a `redirects` table + prepended middleware) so renaming a business never breaks its indexed URL — explicitly regression-tested
- Cloudflare edge caching: public routes send `Cache-Control: public, max-age=600` + ETag while authed portal/admin routes stay no-cache; editing or approving a listing dispatches a job that purges just the affected URLs
- Admin approval console (role-gated) with status tabs, search, and approve/unpublish
- Responsive, dark-mode-aware UI (`prefers-color-scheme`)

**Test suite (the correctness proof):** 60 passing tests covering directory rendering and featured ranking, the claim flow, live editing, the slug-change → working-301 check (the silent SEO-breaker if it regresses), photo plan gating, leads, JSON-LD validity, sitemap chunking, billing plan changes, cache headers, purge dispatch, and admin approval.

**Tech Stack:** PHP 8.3, Laravel 12, Livewire 3, Alpine.js, Blade, Tailwind CSS 4, Vite, MySQL/MariaDB, Stripe (Laravel Cashier), Cloudflare (edge cache + purge API), Docker (multi-stage → Apache), PHPUnit

**Architecture:** A Laravel monolith serving a cacheable public directory (behind Cloudflare) alongside an authenticated Livewire SPA-like portal; Stripe Checkout drives plan state that feeds the ranking scope, and listing edits/approvals dispatch a queued Cloudflare purge job. The cache boundary is enforced at the origin (public = cacheable, session-cookie = bypass) so the edge config is a thin mirror of Laravel's own headers.

> **Note:** Portfolio/showcase project demonstrating the full directory-SaaS playbook — programmatic SEO at scale, a self-serve paid-listing portal, and edge caching — for fullstack/SaaS roles. Seed data is real, openly licensed Foursquare data; deployed live on Render at https://localist-0mlt.onrender.com/.

---

### 8. Switch — *Payment Systems & Backend Engineering*

A card-payment switch: the authorization engine that sits between a merchant and the acquirers — tokenizes a card, scores it for risk, picks a downstream processor, holds the authorization state machine, and keeps a ledger that balances.
**Links:** [Source](https://github.com/NichoHo/switch) *(live demo pending deployment)*

**Overview:** Models the routing core of a real payment stack rather than a checkout or wallet. A merchant request is authenticated, idempotency-checked, resolved against a tokenized card vault, scored by a risk engine, routed to one of several simulated acquirers with failover, and posted to a double-entry ledger — all backed by an exhaustive payment state machine so the authorization lifecycle can't be driven into an invalid state.

**Role — Full Stack Developer (solo build):** Designed and built the entire system end to end: the Spring Boot gateway (vault, idempotency, risk, routing, ledger, outbox), a separate `acquirer-sim` service with injectable faults and a fake 3DS ACS, the Postgres schema via Flyway migrations, and the full test suite (exhaustive FSM tests, property-based invariant tests, concurrency tests, ArchUnit isolation rules).

**Key Features:**
- Payment state machine: 13 states × 8 operations, exhaustively tested (104 generated cases) so an undecided transition breaks the build, not production
- Idempotency layer: `INSERT ON CONFLICT`-based key claiming, verified under 20 concurrent threads with exactly one execution
- Card vault: tokenization, Luhn validation, AES-GCM encryption with key versioning, PAN fingerprinting — isolated from the rest of the codebase via an ArchUnit rule, with a log-scrubbing test ensuring no PAN ever leaks to logs
- Acquirer routing with failover: capability-based candidate ordering, Resilience4j circuit breaking, retry-safety classification, and `AUTH_UNKNOWN` resolution via a status-probe job when an acquirer response is lost
- Double-entry ledger: Postgres deferred constraint trigger enforces every posting balances at commit; trial balance re-asserted as zero after every scenario
- Risk engine: ten weighted rules (velocity, BIN/country mismatch, card-testing patterns, blocklists) producing an explainable ALLOW/CHALLENGE/DENY decision with a persisted per-rule score breakdown
- 3-D Secure simulation: challenge lifecycle against a fake ACS service, liability-shift outcome recorded on the payment
- Transactional outbox for webhook delivery, polled with `SKIP LOCKED`

**Invariant test suite (the correctness proof):** the full state × operation cross product behaves exactly per the transition table; property-based tests (2,000 generated legal operation sequences via jqwik) hold `captured ≤ authorized`, `refunded ≤ captured`, and a zero trial balance after every sequence; replaying a payment's event log always reconstructs its current state; 20 threads racing one idempotency key produce exactly one acquirer call; concurrent capture-vs-void on the same authorization has exactly one winner with a specific error for the loser.

**Tech Stack:** Java 21, Spring Boot 3.3+, Spring Data JPA, Flyway, PostgreSQL 16, Resilience4j, Maven (multi-module), Thymeleaf + htmx, Micrometer/Prometheus, Bucket4j, springdoc-openapi, JUnit 5, Testcontainers, jqwik, WireMock, ArchUnit, PIT, Docker/Docker Compose, GitHub Actions

**Architecture:** A multi-module Maven build (`gateway`, `acquirer-sim`, `contracts`) — the gateway owns the REST API, idempotency layer, vault, risk engine, payment state machine, router, ledger, and outbox poller over a single PostgreSQL instance; `acquirer-sim` is a separate service simulating multiple downstream acquirers plus a fake 3DS ACS, with injectable faults (timeouts, malformed responses, duplicate callbacks) to exercise the gateway's retry-safety and failover logic.

**Run:** `docker compose up` starts Postgres, the gateway (`:8080`), and `acquirer-sim` (`:8081`) in one command; a seed script drives golden-path and failure-mode demo scenarios.

> **Note:** Built explicitly as *PCI-adjacent design thinking*, not a compliance claim — only documented test BINs are accepted, no real card data or PSP integration, no real money. Single-instance per service by design; scale-out paths are named in the project blueprint but not built.

---

### 9. Orbit — *Cross-Platform Mobile Engineering*
An offline-first task and habit tracking app for iOS/Android, built with Expo/React Native on a Supabase (Postgres) backend.

**Links:** *(not yet pushed to a public repo)*

**Overview:** Every action renders instantly against a local cache, with sync to Postgres happening transparently in the background. Includes full-text task search, an agenda/week view, deterministic local reminders, productivity/streak stats, CSV export, and native iOS home-screen widgets.

**Role — Full Stack Developer (solo build):** Built the app end to end — the offline-first sync engine, the Supabase/Postgres backend with RLS, and two AI-assisted Supabase Edge Functions (daily task summaries, task-to-subtask decomposition).

**Key Features:**
- Offline-first sync: instant local writes via MMKV, background reconciliation via TanStack Query
- Full-text task search backed by Postgres GIN indexing
- AI-assisted Supabase Edge Functions: daily summaries and task decomposition
- Local deterministic notifications for due dates and habit cadences
- CSV data export via native OS share sheet
- Native iOS home-screen widgets (WidgetKit)

**Tech Stack:** Expo, React Native, Expo Router, TypeScript, TanStack Query, Zustand, Supabase (Postgres, RLS, Realtime, Edge Functions), react-native-mmkv, NativeWind (Tailwind CSS)

> **Note:** Mobile-focused side project — included for breadth (offline sync design, RLS-backed backend), not as a primary specialization. Not yet on a public repo or deployed.

---

### 10. Maravellante — *Frontend Engineering & Design Systems*
A gallery-style portfolio site for a fictional contemporary painter, built to demonstrate interaction-level frontend craft — a floating pill navigation with a pointer-tracked sliding indicator, magnetic buttons, 3D tilt on artwork cards, and a full light/dark design system — in dependency-free HTML/CSS/JS.

**Links:** [Live](https://maravellante.vercel.app) · [Source](https://github.com/NichoHo/maravellante)

**Overview:** A 5-page static site (home, work catalogue with grid/list views, individual work pages, about, contact) for "Mara Vellante," a fictional painter — content, imagery, and copy all originated for the project. Deliberately built with zero build step and zero npm dependencies instead of a framework, since a static portfolio doesn't need one; the constraint pushed the interaction work into hand-written, performance-conscious vanilla JS rather than a library.

**Role — Solo Designer & Developer:** Designed and built the entire site end to end — visual design system, every page, and every interaction — then iterated through several rounds of client-style feedback (navigation redesign, motion polish, accordion redesign, content and copy revisions).

**Key Features:**
- Custom design system: one radius scale, two easing curves (smooth for content reveals, spring/overshoot for interactive feedback), and light/dark theming that follows the OS by default with a manual override persisted to `localStorage`
- Floating pill navigation with a JS-positioned sliding indicator that tracks pointer/focus and rests under the current page, plus scroll-direction show/hide (hides on scroll down, reappears on scroll up) via a single passive, rAF-batched scroll listener
- Magnetic buttons and 3D pointer-tilt on artwork cards, both scoped to `pointerType === "mouse"` so touch devices get normal tap behavior instead of a broken hover simulation
- CSS-only hero parallax via `animation-timeline: view()` and cross-document View Transitions between pages — both progressively enhanced with zero fallback cost on unsupported browsers, no scroll-linked JS anywhere
- A numbered, catalogue-style FAQ accordion built on native `<details>`/`<summary>` (full keyboard/screen-reader support for free) with a CSS-only plus-to-cross icon morph
- Every animation gated behind `prefers-reduced-motion`; verified in-browser at desktop and mobile breakpoints with zero horizontal overflow anywhere on the site

**Tech Stack:** HTML5, CSS3 (custom properties, CSS Grid, scroll-driven animations, View Transitions API), vanilla JavaScript (IntersectionObserver, Pointer Events), Vercel (GitHub-integrated continuous deployment)

**Architecture:** No framework, no bundler, no dependencies — plain HTML per page sharing two files (`site.css`, `site.js`) plus a single JS array (`data.js`) as the content source for the work catalogue, so adding a painting is a one-object edit that appears across the home page, catalogue, and detail-page routing automatically.

> **Note:** A design/frontend showcase rather than a fullstack build — no backend, no CMS; the contact form validates client-side but isn't wired to a real mail endpoint. Included for breadth: demonstrates production-grade interaction/motion engineering, accessibility discipline, and the judgment to pick a zero-dependency stack when a framework would have been overhead — a different register from the backend/systems depth of the Agora/Switch entries.

---

## Research & Publications

### Machine Learning Algorithms for HIV/AIDS Prediction using Explainable AI
**Published Paper — ICORIS 2025 · Co-authored**

Co-authored study applying Explainable AI (XAI) to medical diagnostics — evaluated multiple ML models to predict HIV/AIDS susceptibility from socio-behavioral data, achieving 97% accuracy with Random Forest and XGBoost. Used SHAP for transparent, interpretable model reasoning, aiming to bridge the trust gap between AI systems and medical practitioners.

**Tags:** Explainable AI (XAI), Healthcare Informatics, SHAP Analysis, Random Forest, XGBoost, Python, Machine Learning
**Link:** [PDF](https://nichoho.github.io/portfolio/research.pdf)

### Hybrid MediaPipe-GRU Architecture for Efficient BISINDO Recognition Integrating Non-Manual Markers in Low-Resource Environments
**Thesis — 2025 (ongoing)**

Develops an efficient Sign Language Recognition (SLR) system for Indonesian Sign Language (BISINDO) targeting low-resource environments. The MediaPipe-GRU architecture captures both manual gestures and non-manual signals with minimal computational overhead, achieving robust real-time performance on budget devices.

**Tags:** Deep Learning, MediaPipe, GRU, Sign Language Recognition, Low-Resource
**Link:** [PDF](https://nichoho.github.io/portfolio/research-2.pdf)

> **Note:** connected to the Signlingo project (see Featured Projects) — you confirmed Signlingo grew out of/relates to this thesis, not a separate body of work.

---

## Education

### Sejong University — Seoul, South Korea
**Computer Science (Student Exchange Program)** · Feb 2026 – June 2026
GPA: 4.40/4.50 (98th percentile)
Currently participating in a student exchange program, expanding global perspective and adapting to an international academic environment.

### Binus University
**Computer Science (Global Class)** · 2023 – Present
GPA: 3.83/4.00

**Freshmen Leader & Partner** (Sep 2024 – June 2025, 10 mo)
Guided freshmen through their first year — delivered presentations and ongoing mentorship to help them adapt to university life and academic expectations.

### Santa Ursula BSD Highschool
**High School Diploma** · 2021 – 2023

**Student Council** (2022 – 2023, 4 mo)
Managed the Student Council's social media accounts, creating content to increase engagement and inform the student body of upcoming events.

---

## Organizations & Leadership

### HIMTI Bina Nusantara — Activist / Web Development Division
**2023 – 2024**

**HIMTI KIT & TECHNO 2024 — Staff of KIT Division**
Collaborated on development of the official TECHNO 2024 website; authored structured university material notes (HIMTI KIT) to support academic peer success.

**TECHFEST 2024 — Web Development Division**
Managed the official digital platform for TECHFEST 2024, focusing on reliable performance and accessibility for event participants.

*Tags: HTML5, CSS3, JavaScript, Team Collaboration*

---

## Volunteering

### Teach For Indonesia — Educator
**Oct 2023 – Dec 2023 · Jakarta, Indonesia**

Supported orphaned children by facilitating social activities and engaging the community. Focused on building trust and emotional connections through interactive play and educational sessions, including raising awareness about corruption risks. Helped supply essential items including food and cooking necessities to meet fundamental needs.

---

## Certifications

| Certification | Issuer | Issued | Credential ID | Links |
|---|---|---|---|---|
| Alibaba Cloud Associate — Cloud Engineer | Alibaba Cloud | May 2025 | IACA13250500210461L | [Certificate](https://nichoho.github.io/portfolio/alibaba-certificate.jpg) |
| Building Conversational AI Applications | NVIDIA Deep Learning Institute | Aug 2025 | C8GNGRZhTAicYiL42FWjVw | [PDF](https://nichoho.github.io/portfolio/nvidia-certificate.pdf) · [Verify](https://learn.nvidia.com/certificates?id=zMTLXpF7RrCNjBoxDcKf5A) |
| IELTS Academic — Band 7.5 | British Council / IDP / Cambridge English | Jun 2025 | 25ID500396HON161A | [PDF](https://nichoho.github.io/portfolio/IELTS.pdf) |
| Azure AI Fundamentals (AI-900T00-A), course completion | Microsoft elevAIte Indonesia (with Komdigi, BINUS) | Apr 2025 | 69a03d23-9008-4c0a-ae46-96afc813dc8c | [PDF](https://nichoho.github.io/portfolio/azure-certificate.pdf) |
| Getting Started with Compute | AWS Educate | Oct 2024 | — | [Verify (Credly)](https://www.credly.com/badges/2f074998-a38b-4769-9bbc-14503a42893d/linked_in_profile) |
| Introduction to Cloud 101 | AWS Educate | Oct 2024 | — | [Verify (Credly)](https://www.credly.com/badges/8bc28ca2-d1db-49e0-802a-f78b4ad922f8/linked_in_profile) |

---

## Media Assets (for reuse in tailored materials)
- Profile photo: https://nichoho.github.io/portfolio/photo.jpg
- Research preview image 1 (HIV/AIDS paper): https://nichoho.github.io/portfolio/research.jpg
- Research preview image 2 (BISINDO thesis): https://nichoho.github.io/portfolio/research-2.jpg
- Volunteering photo: https://nichoho.github.io/portfolio/volunteering.jpg
- Issuer logos: alibaba-logo.png, ielts.webp, nvidia-logo.jpg, azure-logo.jpg, aws-logo.jpg (same domain)

---

## Sourcing Notes
- Compiled from the live homepage (nichoho.github.io/portfolio/ — a single-page layout with anchor sections for Work/Projects/Education/Volunteering/Certifications/Contact) plus the `/projects` listing content you pasted in directly (5 projects: Signlingo, Flux, FaQ Assistant, Jet Engine Health Monitor, F1 Undercut Predictor).
- The homepage's "Selected Projects" section only previews 3 of these 5 (Signlingo, Flux, FaQ Assistant); the other 2 (Jet Engine Health Monitor, F1 Undercut Predictor) apparently live only on the full `/projects` page.
- CV.pdf, research.pdf, and research-2.pdf are linked from the site but weren't independently fetchable — my browsing tool only follows links that were themselves returned by a prior search/fetch result, and deep links found *inside* already-fetched HTML don't qualify (this is the same restriction that blocked the `/projects` page originally). If you paste their contents, I'll fold in anything new.
- Treating your pasted list of 5 projects as the complete set — if `/projects` has more beyond these, send them over and I'll add them in.
- Added a third round of detail: three internal Galva work-projects (WMS, Inventory, Logistics/"Kargolo") you provided directly — not sourced from the live site. Mapped to roles as you specified (Part-time → WMS + Logistics; Freelance → Inventory).
- Cross-checked against your actual CV.pdf (uploaded directly). Pulled in the 97% accuracy figure, co-authorship framing, and specific models (Random Forest/XGBoost) for the HIV/AIDS paper; added phone number and spoken languages/IELTS to Contact Information; confirmed C and Java as real skills (learned in university, per you); confirmed Signlingo connects to the BISINDO thesis rather than being a separate project.
- Where the CV and the site/deep-dives disagreed, this file follows the site/deep-dives (e.g., WMS backend is VB.NET, not the C# the CV stated; the Freelance role's frontend is Vue.js 3, not jQuery) — same resolution rule used to generate `Nicholas_Ho_CV.docx`, a corrected, general-purpose CV built from this file.
- Added Featured Project #6 (Tally), sourced directly from the project repo and README (all three build phases complete: ledger core, events + fraud, dashboard). Public repo: https://github.com/NichoHo/tally. Live demo URL still pending deployment. Newly surfaced skills from this project: Go, gRPC, Protocol Buffers, chi, pgx, golang-migrate, Kafka/Redpanda (franz-go), PostgreSQL, Kubernetes, Terraform, GitHub Actions, plus IsolationForest and the double-entry/idempotency/distributed-transaction concepts.
- Added Featured Project #7 (Vault), sourced directly from the project repo and README (all phases 0–4 complete and e2e-verified). Repo URL (`github.com/NichoHo/vault`) is inferred — no git remote is configured on the local clone — and the live demo is still pending deployment; verify/replace both before using in an application. Newly surfaced skills from this project: OAuth 2.0 / OIDC provider design + PKCE, TOTP MFA (RFC 4226/6238), refresh-token rotation with family revocation, argon2id, RS256 JWT/JWKS, FastAPI, Anthropic vision + structured outputs, transactional outbox pattern, `outboxkit` (own standalone Go module), Redpanda/franz-go, Playwright e2e, Postgres FTS. Overlaps with Tally on Go, double-entry ledgers, idempotency, distributed-transaction/event-driven design, Terraform, GitHub Actions, Next.js/TypeScript/Tailwind — a tailored resume shouldn't double-count those as two separate skill acquisitions.
- Added Featured Project #8 (Localist), sourced directly from the project repo/README and build notes (all four phases complete, 48 tests green as of 2026-07-17). Public repo: https://github.com/NichoHo/Localist. Live deployment on Render: https://localist-0mlt.onrender.com/. Newly surfaced skills from this project: Laravel 12, Livewire 3, Alpine.js, Blade, Tailwind CSS 4, Laravel Cashier (Stripe), Cloudflare edge caching + purge API, programmatic SEO (JSON-LD schema.org, sitemap generation, canonical/301 handling), MariaDB, multi-stage Docker → Apache. Overlaps with Flux Budget App on Laravel/PHP/MySQL/Blade/Tailwind/Docker and with the Galva/Tally work on the SaaS/payments and repository patterns — a tailored resume shouldn't double-count those.
- **Correction (2026-07-17):** Kargolo was previously mischaracterized as a "real-time Transport Tracker" for monitoring shipments in transit. Corrected per your clarification: it's a data-management/admin system for configuring static shipping infrastructure (CRUD on carriers and expedition service options, bound to carrier codes and point-of-contact details) — not live shipment tracking. Updated in the Work Experience bullet, the deep-dive section, and the CV.
- Added Featured Project #9 (Switch), sourced directly from the local project's `blueprint.md` and repo file tree (2026-08-07). Public repo: https://github.com/NichoHo/switch. Live demo pending deployment. Per your instruction, described as complete/all phases done even though the local checkout at the time of writing only showed phases 0–5/6 (foundation, vault, payment core, idempotency, acquirer+routing, ledger, partial risk/3DS) built — no dashboard, settlement/recon, or deploy code present yet; you said you'd finish the remaining phases same-day. Newly surfaced skills from this project: Java 21, Spring Boot 3.3+, Spring Data JPA, Flyway, Resilience4j, Thymeleaf, htmx, Micrometer, Bucket4j, springdoc-openapi, Testcontainers, jqwik, WireMock, ArchUnit, PIT — plus payment-switch domain concepts (authorization state machines, double-entry ledger constraint triggers, retry-safety classification, PCI-adjacent vault isolation). Overlaps with Tally/Vault on double-entry ledgers, idempotency, and Docker/CI tooling — a tailored resume shouldn't double-count those.
- Added Featured Project #10 (Orbit), sourced directly from the local project's README, `package.json`, and `src/` tree (2026-08-18). No git remote configured locally, so no repo/live links yet. Deliberately scoped as a smaller, lower-emphasis entry per your instruction, since your primary focus is fullstack web + data science, not mobile. Newly surfaced skills: Expo, React Native, Expo Router, TanStack Query, Zustand, Supabase (as its own tag, distinct from generic PostgreSQL), NativeWind, react-native-mmkv, WidgetKit. New "Mobile" skills category added, tagged secondary in context.
- **Update (2026-08-19):** Added a new current role, Software Engineering Intern (Backend) at SIRCLO, starting Aug 2026, sourced from the "[SIP 2026] Onboarding Slide.pdf" you shared (SIRCLO is an Indonesian digital-commerce enabler). The slide deck is company-wide onboarding content, not project-specific, so per your instruction the entry is a placeholder — role, company, and start date only, no project description or tech stack until you're actually assigned one. Revisit and fill in once known.
- **Update (2026-08-19):** Reworded the Professional Summary to lead with distributed backend systems and AI/ML ahead of frontend (matching the employability-first reordering applied earlier to Technical Skills), and moved the SIRCLO internship to the front of the "Currently..." sentence as the most current role. Made the same change to the site's hero paragraph and SEO meta description — both previously led with "Warehouse Management Systems" as the flagship example and only named Nexus/Galva, dropping the more recent fintech-style/distributed-systems work (Tally, Vault, Switch) and the SIRCLO internship entirely.
- **Update (2026-08-19):** Revised the SIRCLO entry to name the program structure you already know — a 6-month, end-to-end project with a cross-functional team (PM, Frontend, QA) — instead of a bare "onboarding" placeholder, since that's a known fact and gives real signal (full-SDLC exposure, cross-functional collaboration) without claiming a specific project or outcome that isn't decided yet. Still explicitly marked TBD for project scope and tech stack.
- **Update (2026-10-07):** Added IELTS (already on the site) and Azure AI Fundamentals to the Certifications table. The Azure entry is a completion certificate for the self-paced AI-900T00-A course via the Microsoft elevAIte program, not the proctored AI-900 exam; label it that way in applications. Introduction to Cloud 101 stays here for completeness but was dropped from the site as the weakest entry (Alibaba Cloud Associate and AWS Compute already cover cloud basics).
- **Update (2026-08-28):** Added Featured Project #11 (Maravellante), a solo-built frontend/design-system showcase (fictional-artist portfolio site), sourced directly from the local project build. Live at https://maravellante.vercel.app, source at https://github.com/NichoHo/maravellante. Newly surfaced skill: Vercel (added to DevOps & Tooling). Deliberately framed as a design/frontend-craft entry (motion engineering, accessibility, design systems) rather than a backend/systems build, to sit alongside the Agora/Switch entries without overlapping their claims — no backend, no CMS, contact form is client-side validation only.
- **Update (2026-08-18):** Per your clarification, the Freelance role's headline bullets now name the Inventory Project directly (previously generic "sales dashboards" phrasing carried over from the old CV/site copy) and lead with the double-entry ledger/API work rather than the frontend, since that's the stronger signal for backend/fintech-leaning roles. Also folded in a full technical writeup of the Intern role's project — previously covered only by two thin bullets ("location-tracking CRUD app," "real-time chat features") — now documented as geofencing access control (Haversine formula distance check), SignalR/WebSockets real-time chat, and Google Maps visualization, with a new project deep dive. Newly surfaced skills/concepts: SignalR/WebSockets, geofencing & geospatial distance calculation (Haversine formula) — added to Backend & APIs and Concepts & Practices respectively. Also reordered every category in Technical Skills (Consolidated), plus the Freelance/Intern bullet and tech lists, by employability (most in-demand/differentiating first) per your instruction — this is a presentation change only, no skills were added or removed by the reordering itself.
- **Update (2026-10-02):** Localist deployed live to Render (https://localist-0mlt.onrender.com/). Updated master portfolio and web portfolio project cards/details with live links and fresh screenshots of the new UI.
- **Update (2026-10-06):** Updated NVIDIA certification title to "Building Conversational AI Applications" across the web portfolio and master portfolio.
- **Update (2026-10-07):** Replaced the Tally (#6) and Vault (#7) entries with a single Agora entry (#6), since Tally was merged into Vault and the combined project was renamed Agora. Later projects renumbered. Web portfolio cards and detail page updated; Agora thumbnail is a placeholder pending a new one.
- **Update (2026-10-07):** Filled in the SIRCLO entry with the Project Portfolio Dashboard (PPD), sourced from the internship daily logbook, the PPD technical spec (v0.30, co-authored with Muhammad Nauffal Ramdhani), and the repo (67 of 129 commits). Internal company tool: no links, URLs, or infrastructure details should go in public materials. Newly surfaced skills: Drizzle ORM, Auth.js, GitHub GraphQL API and webhooks, Caddy, Vitest, Nodemailer.
- **Update (2026-10-07):** Localist moved to real Malaysian data (about 5,800 listings from Foursquare Open Source Places), with a redesigned billing page, a fixed Stripe Checkout redirect bug, a fix for double billing when switching plans, and all project screenshots retaken in dark mode. Test count is now 60.
