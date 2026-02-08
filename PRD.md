# SmoothPay - Product Requirements Document (PRD)

**Version:** 1.0  
**Date:** 2026-02-08  
**Status:** Pre-Launch / Validation Phase  
**Owner:** [Your Name]

---

## Executive Summary

**Vision:**  
Build the first income smoothing platform specifically designed for freelancers, contractors, and gig workers - solving the core problem of variable income anxiety.

**Mission:**  
Eliminate financial stress for independent workers by converting unpredictable income into steady, reliable paychecks.

**Problem:**  
57M+ freelancers in the US suffer from severe income anxiety due to variable monthly earnings ($1K → $10K → $2K). Traditional financial tools (Mint, YNAB) assume steady paychecks and don't address the root cause: income volatility.

**Solution:**  
SmoothPay automatically calculates a user's 12-month average income and pays them that amount every month - smoothing out seasonal fluctuations and eliminating anxiety about "next month's paycheck."

**Market Opportunity:**
- **TAM (Total Addressable Market):** 57M+ freelancers in US, 1.1B globally
- **SAM (Serviceable Addressable Market):** ~20M full-time freelancers earning $30K-$200K/year
- **SOM (Serviceable Obtainable Market):** Target 1,000 paying users in Year 1

**Business Model:**
- Freemium: Basic income smoothing free
- Pro: $15-29/month (tax withholding, forecasting, integrations)
- Target: $15K-29K MRR @ 1,000 users

---

## 1. Problem Statement

### 1.1 Core Problem

**Primary Pain:** Freelancers experience severe anxiety from not knowing when their next paycheck will come.

**Evidence (from Reddit r/freelance):**
- "I'm constantly worried that one day I'll just stop getting inquiries and bookings." (276 upvotes)
- "The uncertainty of how much $ I'd make at the end of each month gives me anxiety." (189 upvotes)
- "How do you stop worrying that the next job will never come?" (412 upvotes)

**Root Cause:**  
All existing financial tools assume steady income (salary). Freelancers have variable income, making traditional budgeting advice ("save 6 months expenses," "50/30/20 rule") impossible to follow.

### 1.2 Secondary Problems

1. **Seasonal Income Swings**
   - Busy season: $10K-15K/month
   - Slow season: $1K-3K/month
   - Causes feast-or-famine spending patterns

2. **Traditional Budgeting Doesn't Work**
   - Can't budget when you don't know monthly income
   - YNAB requires "budget only money you have" - useless for planning

3. **Social Credibility Issues**
   - Hard to get approved for rentals (landlords want "stable income")
   - Harder to get loans/mortgages
   - "Freelancer" = red flag to financial institutions

4. **Burnout from Financial Stress**
   - Constant money worry leads to poor decisions
   - Psychological toll over 10+ years

### 1.3 Current "Solutions" (Inadequate)

| Solution | Why It Fails |
|----------|-------------|
| "Just save more" | Doesn't address anxiety or volatility |
| YNAB/Mint | Built for salary earners, not variable income |
| Bigger emergency fund | Helps but doesn't solve root cause (still anxious) |
| Get a "real job" | Not a solution - defeats purpose of freelancing |

---

## 2. Target Market

### 2.1 Primary Personas

#### Persona 1: "Sarah - The Established Freelancer"
- **Age:** 32
- **Occupation:** Freelance graphic designer
- **Income:** $60K-$90K/year ($3K-$12K/month)
- **Experience:** 4 years full-time freelance
- **Pain Points:**
  - Income swings wildly (summer is slow, Q4 is crazy)
  - Can't commit to recurring expenses (gym, subscriptions)
  - Constantly checking bank account
  - Hard to get approved for apartment lease
- **Goals:**
  - Steady, predictable income
  - Sleep better at night
  - Plan vacations without guilt
  - Get approved for a mortgage

#### Persona 2: "Marcus - The Side Hustler Transitioning Full-Time"
- **Age:** 28
- **Occupation:** Software developer (freelance on side, planning to go full-time)
- **Income:** $40K salary + $20K-$50K freelance
- **Experience:** 2 years side hustle, wants to quit job
- **Pain Points:**
  - Scared to quit job due to income uncertainty
  - Needs to prove he can sustain $5K-7K/month before quitting
  - Partner worried about financial stability
- **Goals:**
  - Confidence to quit 9-5
  - Proof of consistent income
  - Financial safety net

#### Persona 3: "Jenna - The Creative/Content Creator"
- **Age:** 25
- **Occupation:** YouTube creator, Substack writer
- **Income:** $1K-$15K/month (highly variable)
- **Experience:** 3 years
- **Pain Points:**
  - One viral video = $10K, then $800 next month
  - Can't plan anything
  - Parents think she should "get a real job"
- **Goals:**
  - Steady income regardless of viral hits
  - Prove to family she's financially stable
  - Budget like a normal person

### 2.2 Market Segmentation

**Primary Target (Phase 1):**
- Full-time freelancers/contractors
- Earning $30K-$150K/year
- 2+ years experience (have income history)
- US-based (initial launch)

**Secondary Target (Phase 2):**
- Content creators (YouTube, Substack, podcasters)
- Gig workers (Uber, DoorDash + other income)
- Commission-based sales (real estate, insurance)

**Tertiary Target (Phase 3+):**
- Small business owners (variable profit)
- Seasonal workers
- International freelancers

### 2.3 Market Size

- **US Freelancers:** 57M (2024)
- **Full-time freelancers:** ~20M
- **Earning $30K+/year:** ~10M
- **Target (realistic):** 1,000 users Year 1, 10,000 Year 2

**Market Trends:**
- Gig economy growing 3x faster than traditional workforce
- Remote work → more freelancing
- Creator economy → more variable income earners
- Gen Z prefers freelance/entrepreneurship

---

## 3. Product Vision & Strategy

### 3.1 Product Vision

**Short-term (6 months):**
- Launch MVP: Income smoothing + waitlist validation
- 100+ waitlist signups
- 10-50 beta users
- Validate willingness to pay

**Medium-term (1-2 years):**
- 1,000 paying users
- $15K-29K MRR
- Partnerships with banks/fintech (Stripe Treasury)
- Mobile app

**Long-term (3-5 years):**
- 50K+ users
- Full "Freelance Finance OS" (invoicing, taxes, retirement)
- Category leader in "income smoothing"
- Acquisition target or IPO path

### 3.2 Product Strategy (Zero-to-One)

**Thiel's Framework Applied:**

1. **Start Small, Monopolize:**
   - Target: Full-time freelancers only (not everyone)
   - Niche: Income smoothing (not "budgeting")
   - Own this tiny market before expanding

2. **10x Better (not 10%):**
   - YNAB/Mint = expense tracking
   - SmoothPay = income smoothing (fundamentally different)
   - 10x reduction in anxiety (emotional value)

3. **Proprietary Technology:**
   - Income smoothing algorithm
   - Seasonal pattern detection
   - Predictive income forecasting (ML)

4. **Network Effects:**
   - More users → better average calculations
   - Community features (optional Phase 2)
   - Data moat

5. **Zero Marginal Cost:**
   - SaaS + fintech
   - Code leverage
   - Scales infinitely

### 3.3 Positioning

**Category:** Income Smoothing Platform (new category)

**Positioning Statement:**
"For freelancers who suffer from income anxiety, SmoothPay is the income smoothing platform that turns variable income into steady paychecks—unlike YNAB or Mint, which assume you have a salary."

**Differentiation:**
| Feature | SmoothPay | YNAB | Mint | Traditional Bank |
|---------|-----------|------|------|------------------|
| Income Smoothing | ✅ Core | ❌ | ❌ | ❌ |
| Variable Income Budgeting | ✅ | ⚠️ Partial | ❌ | ❌ |
| Freelancer-Specific | ✅ | ❌ | ❌ | ❌ |
| Automated Payouts | ✅ | ❌ | ❌ | ❌ |
| Anxiety Reduction | ✅ (core value) | ⚠️ | ⚠️ | ❌ |

**Unfair Advantage:**
- First mover in income smoothing
- Proprietary algorithm
- Deep understanding of freelancer psychology (from Reddit research)
- Emotional value (reduce anxiety) > functional value

---

## 4. Product Features & Requirements

### 4.1 MVP Features (Phase 1 - Months 1-3)

#### Core Feature: Income Smoothing

**User Flow:**
1. User connects bank account (Plaid integration)
2. System calculates 12-month rolling average income
3. User sets "payout schedule" (monthly, bi-weekly)
4. System automatically transfers "salary" amount
5. Excess during high months stays in account
6. System covers shortfalls during low months

**Technical Requirements:**
- Plaid integration for bank connection
- Rolling average calculation (12-month window)
- Automated transfer scheduling
- Float management (ensure sufficient funds)
- Overdraft protection (can't go negative)

**User Requirements:**
- Minimum 6 months income history
- Minimum average income: $1,500/month
- Must maintain minimum balance (e.g., 1 month average)

**Success Metrics:**
- User anxiety reduction (NPS survey)
- Income variability (before: ±60%, after: ±10%)
- User retention (90%+ after 3 months)

---

#### Feature 2: Dashboard & Insights

**Components:**
- Current balance
- This month's payout amount
- Income trend (past 12 months)
- Next payout date
- Projected next month's income

**Insights:**
- "Your income is trending up 15%"
- "You have 4.2 months of runway at current payout rate"
- "Slow season alert: August historically down 30%"

---

#### Feature 3: Waitlist & Onboarding

**Waitlist Page:**
- Email capture
- User type (freelancer, contractor, creator, etc.)
- Biggest financial stress (open text)
- Referral tracking

**Onboarding (Beta Users):**
1. Welcome email
2. Bank connection (Plaid)
3. Income analysis (show 12-month chart)
4. Payout setup
5. First "salary" transfer
6. Success celebration

---

### 4.2 Phase 2 Features (Months 4-6)

#### Feature 4: Tax Withholding

**Problem:** Freelancers forget to save for taxes → panic in April

**Solution:**
- Auto-withhold 25-30% of income
- Separate tax account
- Quarterly tax reminders
- Integration with tax filing (future)

---

#### Feature 5: Cash Flow Forecasting

**Problem:** "Will I survive next month?"

**Solution:**
- AI-powered income prediction (1-6 months ahead)
- Confidence intervals ("80% chance you'll make $4K-6K")
- Scenario planning ("What if I only make $2K next month?")
- Alerts ("Warning: Next month looks slow")

---

#### Feature 6: Income Verification/Proof

**Problem:** Freelancers can't prove "steady income" to landlords/lenders

**Solution:**
- Generate official-looking income reports
- "Receives $5,500/month via SmoothPay" (looks like salary)
- Landlord/lender verification portal
- "Income stability score"

---

### 4.3 Phase 3 Features (Months 7-12)

#### Feature 7: Freelance Finance OS

**Expansion into full platform:**
- Invoicing + payment collection
- Expense tracking
- Profit/loss statements
- Retirement account integration (SEP IRA)
- Health insurance marketplace

**Why Later:**
- Avoid feature bloat in MVP
- Validate core value first
- Easier to add than remove

---

### 4.4 Non-Functional Requirements

**Security:**
- Bank-level encryption (AES-256)
- SOC 2 compliance (required for fintech)
- Two-factor authentication
- No storing sensitive data (use Plaid)

**Performance:**
- Page load < 2s
- Dashboard real-time updates
- 99.9% uptime (SLA)

**Compliance:**
- FDIC insurance (partner bank)
- KYC/AML (Know Your Customer / Anti-Money Laundering)
- Privacy policy (GDPR, CCPA)

**Scalability:**
- Support 10,000+ users
- Handle $50M+ annual transaction volume
- Auto-scaling infrastructure (Vercel + Supabase)

---

## 5. Technical Architecture

### 5.1 Tech Stack

**Frontend:**
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI components
- Vercel (hosting)

**Backend:**
- Next.js API routes
- Supabase (Postgres database)
- Prisma ORM
- Vercel Edge Functions

**Payments & Banking:**
- Stripe Treasury (hold funds)
- Plaid (bank connections)
- Stripe Connect (payouts)

**ML/AI (Phase 2):**
- OpenAI API (income forecasting)
- Time-series analysis
- Pattern detection

**Analytics:**
- PostHog (product analytics)
- Google Analytics (marketing)
- Mixpanel (user behavior)

**Email:**
- Resend (transactional emails)
- ConvertKit (marketing emails)

---

### 5.2 System Architecture

```
┌─────────────────────────────────────────────────┐
│                   Frontend                       │
│  Next.js App (Vercel) - Landing + Dashboard     │
└────────────┬────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────┐
│              API Layer (Next.js)                 │
│  - User auth (Supabase Auth)                    │
│  - Bank connections (Plaid)                     │
│  - Income calculations                          │
│  - Payout scheduling                            │
└────────────┬────────────────────────────────────┘
             │
    ┌────────┼────────┐
    ▼        ▼        ▼
┌────────┐ ┌────────┐ ┌────────────┐
│Supabase│ │ Plaid  │ │   Stripe   │
│  DB    │ │ (Bank) │ │ (Payments) │
└────────┘ └────────┘ └────────────┘
```

---

### 5.3 Data Model

**Users Table:**
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  created_at: timestamp;
  onboarded: boolean;
  plan: 'free' | 'pro';
  stripe_customer_id?: string;
}
```

**Income Transactions:**
```typescript
interface Income {
  id: string;
  user_id: string;
  amount: number;
  date: timestamp;
  source: 'bank' | 'stripe' | 'paypal';
  plaid_transaction_id?: string;
}
```

**Payouts:**
```typescript
interface Payout {
  id: string;
  user_id: string;
  amount: number;
  scheduled_date: timestamp;
  status: 'pending' | 'completed' | 'failed';
  stripe_transfer_id?: string;
}
```

**Settings:**
```typescript
interface Settings {
  user_id: string;
  payout_frequency: 'monthly' | 'biweekly';
  payout_day: number; // 1-28
  tax_withholding: boolean;
  tax_rate: number; // 0.25-0.35
  minimum_balance: number;
}
```

---

## 6. Go-to-Market Strategy

### 6.1 Launch Plan

**Phase 1: Validation (Week 1-2)**
- ✅ Build landing page
- ✅ Launch on Reddit r/freelance, r/solopreneurs
- Target: 100 waitlist signups
- Success metric: 10%+ conversion to paid beta

**Phase 2: Beta (Week 3-8)**
- Onboard 10-50 beta users
- Manual onboarding (high-touch)
- Weekly feedback calls
- Iterate based on feedback

**Phase 3: Public Launch (Month 3)**
- Product Hunt launch
- Indie Hackers feature
- Press outreach (TechCrunch, The Hustle)
- Open to public

---

### 6.2 Marketing Channels

**Organic (Primary):**
1. **Reddit** (r/freelance, r/digitalnomad, r/solopreneurs, r/Fire)
   - Genuine posts about solving problem
   - Not salesy - share journey
   
2. **Indie Hackers**
   - Build in public
   - Share metrics, learnings
   
3. **Twitter/X**
   - Thread about problem + solution
   - Daily tips for freelancers
   
4. **SEO/Content**
   - Blog: "How to budget with variable income"
   - Target: Long-tail keywords

**Paid (Later):**
- Google Ads (intent: "freelance budgeting," "variable income")
- Facebook/Instagram (creator targeting)
- Reddit ads (if organic works)

**Partnerships:**
- Freelancer communities (Freelance Friday, etc.)
- Accounting software (FreshBooks, Wave)
- Invoicing tools (referral program)

---

### 6.3 Pricing Strategy

**Free Plan:**
- Basic income smoothing
- Manual setup
- 1 bank account
- Limited to $10K/month throughput

**Pro Plan ($15-29/month):**
- Automatic income smoothing
- Tax withholding
- Multiple bank accounts / Stripe integration
- Cash flow forecasting
- Income verification reports
- Unlimited throughput
- Priority support

**Pricing Psychology:**
- Start at $19/month (sweet spot)
- Annual discount: $15/month ($180/year - save $48)
- Anchor against cost of accountant ($100-300/month)

**Revenue Projections:**
- 100 users @ $19/month = $1,900 MRR
- 1,000 users @ $19/month = $19K MRR
- 10,000 users @ $19/month = $190K MRR

---

## 7. Success Metrics & KPIs

### 7.1 North Star Metric

**Primary:** User anxiety reduction  
**Proxy:** Net Promoter Score (NPS) > 50

**Secondary:** Monthly Recurring Revenue (MRR)

---

### 7.2 Key Metrics

**Acquisition:**
- Waitlist signups per week
- Conversion rate (waitlist → beta user)
- Cost per acquisition (CPA)

**Activation:**
- Time to first payout
- % users who complete onboarding
- Bank connection success rate

**Retention:**
- Month 1 retention: >80%
- Month 3 retention: >90%
- Churn rate: <5% monthly

**Revenue:**
- MRR growth rate
- Average revenue per user (ARPU)
- Free → Paid conversion rate

**Referral:**
- NPS score
- Organic referrals per user
- Viral coefficient (k-factor)

---

### 7.3 Success Criteria (6 Months)

**Must Have:**
- ✅ 100+ waitlist signups
- ✅ 10+ beta users
- ✅ NPS > 40
- ✅ $1K+ MRR

**Should Have:**
- 500+ waitlist
- 50+ paying users
- NPS > 50
- $5K+ MRR

**Nice to Have:**
- 1,000+ waitlist
- 100+ paying users
- Featured on Product Hunt
- $10K+ MRR

---

## 8. Risks & Mitigation

### 8.1 Technical Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Banking partner issues | High | Medium | Use Stripe Treasury (reliable) |
| Float management (run out of funds) | High | Low | Algorithm prevents this + minimum balance |
| Plaid connection failures | Medium | Medium | Fallback: manual CSV upload |
| Security breach | Critical | Low | SOC 2, penetration testing |

---

### 8.2 Business Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| No product-market fit | Critical | Medium | Validate with waitlist + beta |
| Regulatory issues (banking license) | High | Low | Partner with licensed bank |
| Competitors copy us | Medium | High | Build moat: network effects, brand |
| Users over-withdraw | Medium | Medium | Minimum balance requirements |

---

### 8.3 Market Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Freelance market shrinks | High | Very Low | Market growing 3x vs. traditional |
| Recession (less freelance work) | Medium | Medium | Users NEED this more during recession |
| Big player enters (PayPal, Square) | Medium | Medium | We're niche, they're broad |

---

## 9. Roadmap

### Month 1-2: Validation
- ✅ Build landing page
- ✅ Write PRD
- Launch waitlist
- Target: 100 signups
- Interview 20+ freelancers

### Month 3-4: MVP Build
- Implement core income smoothing
- Plaid integration
- Dashboard
- Beta invite 10 users

### Month 5-6: Beta Testing
- Onboard 50 users
- Iterate based on feedback
- Add tax withholding
- Prepare for public launch

### Month 7-8: Public Launch
- Product Hunt launch
- Open to public
- Press outreach
- Target: 100 paying users

### Month 9-12: Scale
- Add forecasting (AI)
- Mobile app
- Partnerships
- Target: 500 paying users

---

## 10. Team & Resources

### Current Team
- [Your Name] - Founder, Product, Marketing
- (Future) CTO - Engineering
- (Future) Designer - UI/UX

### Technology Partners
- Stripe (payments)
- Plaid (bank connections)
- Vercel (hosting)
- Supabase (database)

### Budget (Seed Phase)
- Development: $0 (build yourself)
- Infrastructure: $100-500/month (Stripe, Plaid, hosting)
- Marketing: $500-1,000/month (ads, tools)
- Legal/Compliance: $5,000-10,000 (one-time)
- **Total Year 1:** $15,000-25,000

**Funding Strategy:**
- Bootstrap initially
- Revenue-funded growth
- Raise seed ($500K-1M) if traction strong

---

## 11. Appendix

### 11.1 Competitor Analysis

| Competitor | Strengths | Weaknesses | Our Advantage |
|------------|-----------|------------|---------------|
| YNAB | Strong brand, loyal users | Not for variable income | We're specialized |
| Mint (Intuit) | Free, large user base | Generic, not freelancer-focused | Niche focus |
| Wave | Free invoicing + accounting | No income smoothing | Core feature |
| Stripe Treasury | Infrastructure available | No consumer product | We build on it |
| Traditional banks | Trust, FDIC insurance | Don't understand freelancers | Purpose-built |

**Conclusion:** No direct competitor. We're creating new category.

---

### 11.2 User Research Quotes (Reddit)

> "I'm constantly worried that one day I'll just stop getting inquiries and bookings. My industry has a busy season and a slow season."

> "There are months where I'd make double or even triple than what I used to make. But now I've hit a month where I barely made anything. The uncertainty gives me anxiety."

> "How do you stop worrying that the next job will never come?"

> "Traditional recommendation is 6 months of expenses, but if you're freelance it could take more than 6 months to find equivalent work. Why feel rushed?"

> "Do you feel like people look down on you as a freelancer? I think there are SO many misconceptions."

---

### 11.3 Legal & Compliance Considerations

**Required:**
- Partner with FDIC-insured bank (Stripe Treasury)
- KYC/AML compliance
- Terms of Service
- Privacy Policy (GDPR, CCPA)
- Disclosures (not FDIC-insured ourselves)

**Optional (Later):**
- Money transmitter license (if we move money between users)
- SEC registration (if offering investment products)

**Recommendation:** Work with fintech lawyer ($5K-10K one-time)

---

### 11.4 References

**Market Research:**
- Freelance Forward 2024 (Upwork study)
- Gig Economy Data Hub (Pew Research)
- Reddit r/freelance (2,000+ posts analyzed)

**Product Inspiration:**
- Stripe Treasury documentation
- YNAB methodology
- Ramit Sethi (I Will Teach You To Be Rich)
- Naval Ravikant (wealth creation)
- Peter Thiel (Zero to One)

---

## Document Control

**Version History:**
- v1.0 (2026-02-08): Initial PRD - Market research, MVP scope, launch plan

**Approvals:**
- [Your Name] - Founder (Approved 2026-02-08)

**Next Review:** After 100 waitlist signups

---

**END OF PRD**
