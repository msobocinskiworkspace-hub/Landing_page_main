import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Play } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const scrollToCTA = () => {
    document.getElementById("cta-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // === DATA & STATE for Results Timeline ===
  const results = [
    {
      title: "Logistics — Cold Outreach",
      content:
        "30,000 EUR+ in revenue, access to the world's largest FMCG company's tender via LinkedIn cold outreach for a logistics company.",
    },
    {
      title: "Logistics — Organic Growth",
      content:
        "900+ LinkedIn followers for free with organic growth for a brand-new logistics company LinkedIn page within 10 months.",
    },
    {
      title: "Recruitment Consulting — Brand Awareness",
      content:
        "5× increase in brand awareness through the company LinkedIn page for a recruitment consulting agency.",
    },
    {
      title: "UI/UX Designer — Inbound Leads",
      content:
        "3 inbound leads within a week for a UI/UX designer — with NO selling posts.",
    },
    {
      title: "Web3 Development — Intro Meetings",
      content:
        "12 introduction meetings with clients for a web3 development agency via cold outreach on a base of 200 contacts.",
    },
    {
      title: "Event Agency Dubai — Weekly Calls",
      content:
        "3–5 calls booked every week for an event agency in Dubai through a personal brand of the co-founder.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number>(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // === STATE for Early Bird Counter ===
  const TOTAL_EARLY_BIRD_SPOTS = 39;
  const [spotsReserved, setSpotsReserved] = useState<number>(0);
  const spotsRemaining = TOTAL_EARLY_BIRD_SPOTS - spotsReserved;
  
  const handleSecureAccess = () => {
    if (spotsRemaining > 0) {
      setSpotsReserved(prev => prev + 1);
    }
    window.open('https://www.naffy.io/mariia-tokinova/linkedin-mini-course-cheetah', '_blank');
  };

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const v = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (v) {
          const i = Number(v.target.getAttribute("data-idx"));
          if (!Number.isNaN(i)) setOpenIdx(i);
        }
      },
      { threshold: 0.5 }
    );
    rowRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header with Logo */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center">
          <a 
            href="https://www.cheetahmktg.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="/Cheetah.png" 
              alt="Cheetah Logo" 
              className="h-12 w-auto"
            />
          </a>
        </div>
      </header>

      {/* Main content with top padding for fixed header */}
      <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-6 py-2">
            Early-bird: €39 (regular €49)
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            LinkedIn marketing finally explained.
            <br />
            <span className="text-primary">In just 1 hour.</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A no-bullshit crash course for B2B founders, solopreneurs, and experts who want to generate leads and build
            visibility on LinkedIn. Without outsourcing or overthinking.
          </p>
          <div className="mb-8 space-y-2">
            <p className="text-lg font-semibold text-foreground">🎯 1 hour. 4 short lessons. Forever access. Practical as hell.</p>
            <p className="text-lg font-semibold text-secondary">
              💸 Early-bird: €39 (regular €49) — first 39 seats only.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold text-primary mb-3">Only {spotsRemaining} spots left at €39! 🔥</p>
          </div>
          <Button
            onClick={scrollToCTA}
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Grab your spot 
          </Button>
        </div>
      </section>

      {/* What You'll Gain Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Why it's worth it</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Learn how LinkedIn actually works for B2B companies and founders' brands",
              "Start showing up without sounding cringe or salesy",
              "Fix your profile to attract leads, not likes",
              "Get a simple, working framework for lead gen + messaging",
              "Know what to post (and what to skip)",
            ].map((benefit, index) => (
              <Card key={index} className="p-6 border-2 hover:border-primary transition-colors">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-card-foreground">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-xl text-center mt-12 font-semibold text-foreground">
            You'll walk away with clarity, confidence, and a clear next step.
          </p>
        </div>
      </section>

      {/* Who Am I Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center text-foreground">Who am I</h2>

          <div className="grid gap-10 md:grid-cols-2 items-stretch">
            {/* === IMAGE === */}
            <div className="order-1 md:order-2">
              <div className="rounded-3xl overflow-hidden shadow-xl bg-muted w-full aspect-[4/5]">
                <img
                  src="/assets/mariia.jpg" /* plik w public/assets/mariia.jpg */
                  alt="Mariia Tokinova portrait"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* === TEXT === */}
            <div className="order-2 md:order-1 flex">
              <Card className="p-8 md:p-10 border-2 bg-white/60 backdrop-blur-sm shadow-md rounded-3xl flex flex-col justify-center">
                <p className="text-lg leading-relaxed text-card-foreground mb-6">
                  Hi, I'm <span className="font-semibold text-primary">Mariia Tokinova</span> — founder of
                  <span className="font-semibold text-secondary"> Cheetah Marketing Collective</span>. I help B2B
                  companies and founders build their presence and generate leads on LinkedIn.
                </p>

                <p className="text-lg leading-relaxed text-card-foreground mb-6">
                  For the past <span className="font-semibold text-primary">9+ years</span>, I’ve been working with
                  small and medium-sized businesses across Europe, the US, and the Middle East — especially in
                  <span className="font-medium text-secondary"> manufacturing, logistics, and services</span>.
                </p>

                <p className="text-lg leading-relaxed text-card-foreground mb-6">
                  I’ve ghostwritten for founders and C-level executives, helping brands go from
                  <em className="italic"> invisible</em> to <span className="font-semibold text-primary">in-demand</span>.
                  I know what works — and what’s just noise.
                </p>

                <p className="text-lg leading-relaxed text-card-foreground font-medium">
                  This mini-course distills everything I’ve learned into clear, actionable steps you can apply
                  immediately — no fluff, no buzzwords, just strategy that works.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-foreground">My story</h2>
          <Card className="p-8 border-2 bg-gradient-to-br from-secondary/5 to-accent/5">
            <p className="text-lg leading-relaxed text-card-foreground mb-4">
              Back in 2020, I kind of oversold my LinkedIn skills when applying for a B2B marketing manager role :D So
              when I actually got the job, I had to figure out how LinkedIn lead generation really worked, and fast.
            </p>
            <p className="text-lg leading-relaxed text-card-foreground mb-4">
              I taught myself everything from scratch with YouTube tutorials and real-life experiments. I started manual
              outreach with spreadsheets, and it was a chaotic disaster, still somehow generating leads. At the same
              time, I was posting like I did back in my Instagram and Facebook days as a social media manager.
            </p>
            <p className="text-lg leading-relaxed text-card-foreground mb-4">
              Bit by bit, I cracked the code. I figured out what worked and how to scale it. I added automation and
              advance content flows. And over the years, I've applied it all: in freelance projects, full-time jobs, and
              now with clients in my Cheetah Marketing Collective.
            </p>
            <p className="text-xl font-semibold text-foreground mt-6">This course is what I wish I had when I was starting.</p>
          </Card>
        </div>
      </section>

      {/* Early Bird Offer */}
      <section id="cta-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-6 bg-destructive text-destructive-foreground text-lg px-6 py-2">Limited Time Offer</Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Special offer:
            <br />
            Early-bird €39
          </h2>
          <Card className="p-10 border-4 border-primary">
            <p className="text-2xl mb-4 text-card-foreground">
              The first 39 people get full lifetime access for just <span className="font-bold text-primary text-3xl">€39</span>.
            </p>
            <p className="text-xl mb-6 text-muted-foreground">After that, it's €49. Still fair, but why wait?</p>
            <p className="text-lg mb-8 text-card-foreground font-semibold">
              It's one hour of your time. Could change the way you market and get leads forever.
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={handleSecureAccess}
                size="lg" 
                className="text-xl px-12 py-8 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Secure early access →
              </Button>
            </div>
            <p className="mt-6 text-xl font-bold text-primary">
              {spotsRemaining > 0 
                ? `⏰ Only ${spotsRemaining}/${TOTAL_EARLY_BIRD_SPOTS} spots remaining!` 
                : '❌ Early bird spots sold out!'}
            </p>
          </Card>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">What exactly you get</h2>
          <div className="space-y-6 mb-12">
            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-2xl font-bold mb-3 text-card-foreground">1. Profile</h3>
              <p className="text-lg text-muted-foreground">
                Turn views into conversations. With no bullshit and too much focus on the banners and about sections…
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-l-secondary">
              <h3 className="text-2xl font-bold mb-3 text-card-foreground">2. Foundations</h3>
              <p className="text-lg text-muted-foreground">
                Lead gen + marketing foundation logic that ACTUALLY works, regardless of the algorithm
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-l-accent">
              <h3 className="text-2xl font-bold mb-3 text-card-foreground">3. Messaging</h3>
              <p className="text-lg text-muted-foreground">How to talk to leads people without being a creepy spamer</p>
            </Card>
            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-2xl font-bold mb-3 text-card-foreground">4. Content</h3>
              <p className="text-lg text-muted-foreground">
                Non-cringe ways to stay visible and express yourself - it's like having your OWN magazine
              </p>
            </Card>
          </div>
          <Card className="p-8 bg-muted/50">
            <h3 className="text-2xl font-bold mb-6 text-foreground">You also get:</h3>
            <ul className="space-y-4">
              {[
                "Lifetime access on Naffy.io platform",
                "Real life examples from my practice and actionable ideas",
                "An opportunity to book a Q&A session with Mariia after the course",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Course Preview Video */}
          <div className="mt-12">
            <div 
              className="rounded-2xl p-8 mb-6"
              style={{
                background: 'linear-gradient(to right, #4285F4, #FF88E6, #EEFF41)'
              }}
            >
              <h3 className="text-2xl font-bold text-white">See it in action — Course preview</h3>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <video 
                width="100%" 
                height="auto" 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-auto aspect-[2560/1080]"
              >
                <source src="/movie.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

     {/* Why This Works Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-10 text-foreground">Why this works</h2>

    {/* --- WSTĘP GŁÓWNY --- */}
    <Card className="p-8 md:p-10 border-2 mb-10 text-left">
      <p className="text-lg leading-relaxed text-card-foreground mb-4">
        I’m not a “LinkedIn guru” — I’m a B2B marketer with <span className="font-semibold text-primary">strategy</span> as my
        superpower. Everything in this course is based on <span className="font-semibold text-secondary">real marketing foundations</span>,
        not short-lived trends or algorithms.
      </p>

      <p className="text-lg leading-relaxed text-card-foreground">
        You won’t find any “growth hacks” here — only methods that have <span className="font-medium text-foreground">consistently worked</span>
        through market shifts, crises, and the AI revolution.
      </p>
    </Card>

    {/* --- BLOK: This isn’t theory --- */}
    <Card className="p-8 md:p-10 border-2 mb-10 text-left hover:border-primary transition-colors">
      <h3 className="text-2xl font-semibold mb-4 text-primary">This isn’t theory</h3>
      <p className="text-lg leading-relaxed text-card-foreground mb-4">
        It’s built on what’s been proven to work for:
      </p>
      <ul className="space-y-2 ml-6">
        <li className="text-lg text-card-foreground">• Ghostwriting clients (manufacturers, agencies, consultants, B2B founders)</li>
        <li className="text-lg text-card-foreground">• My own content and profile</li>
        <li className="text-lg text-card-foreground">• Outreach that booked real sales calls and meetings</li>
      </ul>
    </Card>

    {/* --- BLOK: It’s short because I cut the fluff --- */}
    <Card className="p-8 md:p-10 border-2 mb-16 text-left hover:border-secondary transition-colors">
      <h3 className="text-2xl font-semibold mb-4 text-secondary">It’s short because I cut the fluff</h3>
      <p className="text-lg leading-relaxed text-card-foreground">
        You get only what matters — clear, practical lessons tested in real campaigns. 
        No filler, no buzzwords — just strategy that works.
      </p>
    </Card>

    {/* --- 3 DOLNE BLOCZKI --- */}
    <div className="grid gap-6 md:grid-cols-3 text-left">
      <Card className="p-8 border-2 hover:border-primary transition-colors">
        <h3 className="text-2xl font-semibold mb-4 text-primary">Real experience</h3>
        <p className="text-lg text-card-foreground leading-relaxed">
          Every example comes from real B2B campaigns — not from guesswork or copy-pasted tactics.
        </p>
      </Card>

      <Card className="p-8 border-2 hover:border-accent transition-colors">
        <h3 className="text-2xl font-semibold mb-4 text-accent">Proven process</h3>
        <p className="text-lg text-card-foreground leading-relaxed">
          The same framework that’s worked for clients in manufacturing, logistics, and consulting industries.
        </p>
      </Card>

      <Card className="p-8 border-2 hover:border-accent transition-colors">
        <h3 className="text-2xl font-semibold mb-4 text-accent">Clear results</h3>
        <p className="text-lg text-card-foreground leading-relaxed">
          You’ll know exactly what to do — step by step — to turn visibility into real business leads.
        </p>
      </Card>
    </div>
  </div>
</section>

      {/* Who It's For Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
      Who it's for (and not for)
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* LEFT CARD */}
      <Card className="p-8 border-2 border-primary bg-primary/5 text-center">
        <h3 className="text-2xl font-bold mb-6 text-primary flex items-center justify-center gap-3">
          <CheckCircle2 className="w-8 h-8" />
          You'll love this if:
        </h3>
        <ul className="space-y-4">
          {[
            "You run or promote B2B services or a manufacturing business",
            "You want leads but hate sleazy marketing",
            "You've tried LinkedIn and got nowhere",
            "You're done guessing what to post",
          ].map((item, index) => (
            <li key={index} className="relative pl-11">
              <CheckCircle2 className="absolute left-0 top-1 h-5 w-5 text-primary" />
              <span className="text-card-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* RIGHT CARD */}
      <Card className="p-8 border-2 border-destructive bg-destructive/5 text-center">
        <h3 className="text-2xl font-bold mb-6 text-destructive flex items-center justify-center gap-3">
          <XCircle className="w-8 h-8" />
          It's not for:
        </h3>
        <ul className="space-y-4">
          {[
            "Influencers looking for followers",
            "People who want a magic bullet without doing the work",
          ].map((item, index) => (
            <li key={index} className="relative pl-11">
              <XCircle className="absolute left-0 top-1 h-5 w-5 text-destructive" />
              <span className="text-card-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  </div>
</section>

   {/* Results Section – Timeline Accordion */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
      Results my clients got
    </h2>

    {/* przewijana kolumna z przyciąganiem */}
    <div className="relative pl-8 sm:pl-12">
      {/* pionowa linia „timeline” */}
      <span
        aria-hidden
        className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-border to-transparent"
      />

      <div className="space-y-4 max-h-[72vh] overflow-y-auto pr-2 snap-y snap-mandatory">
        {results.map((r, i) => {
          const open = openIdx === i;
          return (
            <div
              key={i}
              ref={(el) => (rowRefs.current[i] = el)}
              data-idx={i}
              className="snap-start scroll-mt-28"
            >
              {/* GŁÓWKA */}
              <button
                type="button"
                onClick={() => setOpenIdx(open ? -1 : i)}
                className={[
                  "group w-full text-left rounded-2xl border transition-colors",
                  open
                    ? "border-primary/50 bg-primary/5"
                    : "border-border bg-card/60 hover:bg-card"
                ].join(" ")}
              >
                <div className="flex items-start gap-4 p-5">
                  {/* numer w kółku */}
                  <div className={[
                      "shrink-0 grid place-items-center size-10 rounded-full border-2",
                      open ? "border-primary text-primary" : "border-muted-foreground/30 text-muted-foreground"
                    ].join(" ")}
                  >
                    {i + 1}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                        {r.title}
                      </h3>
                      {/* strzałka */}
                      <svg
                        className={[
                          "size-5 shrink-0 transition-transform",
                          open ? "rotate-180 text-primary" : "text-muted-foreground"
                        ].join(" ")}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>

                    {/* TREŚĆ: płynne rozwijanie grid-rows hack */}
                    <div className={[
                        "grid transition-all duration-300 ease-out",
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-3 text-base sm:text-lg text-card-foreground">
                          {r.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>

    <div className="text-center mt-10">
      <p className="text-lg text-muted-foreground">
        Testimonials coming soon from industry peers
      </p>
    </div>
  </div>
</section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">The next client might already be watching your profile.</h2>
          <p className="text-2xl mb-8 text-white/90">This course helps you turn it into a lead, not a lost opportunity.</p>
          <Card className="p-10 mb-8">
            <p className="text-2xl font-bold text-foreground mb-4">🎯 €39 for the first 39 seats. Then €49. Forever access.</p>
            <p className="text-xl font-bold text-primary mb-6">
              {spotsRemaining > 0 
                ? `⚡ ${spotsRemaining} spots left at special price!` 
                : '❌ Early bird price sold out - €49 applies now'}
            </p>
            <Button 
              onClick={handleSecureAccess}
              size="lg" 
              className="text-xl px-12 py-8 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get access now →
            </Button>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "Is this for personal profiles or company pages?", a: "100% personal. Company pages don't convert as fast and get way less reach. It's a nice to have, while personal page is a must-have." },
              { q: "Is it beginner-friendly?", a: "Yes. It's built for people who've tried LinkedIn but didn't get results based on my consultations and audits for my clients." },
              { q: "Do I need to buy tools?", a: "No. I'll show free + optional tools. Automation is a bonus, not a must." },
              { q: "Is this live or pre-recorded?", a: "Pre-recorded, short and sweet. Watch anytime." },
            ].map((faq, index) => (
              <Card key={index} className="p-6 border-2 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-3 text-foreground">{faq.q}</h3>
                <p className="text-lg text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
              </div>
  </div>
</section>

{/* Footer */}
<footer className="py-12 px-4 sm:px-6 lg:px-8 bg-muted border-t">
  <div className="max-w-4xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      {/* Company Info */}
      <div>
        <h3 className="text-lg font-bold text-foreground mb-4">Mariia Tokinova Consulting</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>NIP 5252953883</p>
          <p>VAT EU PL5252953883</p>
          <p>Poland, Cracow, Długa str. 82, 30-018</p>
        </div>
      </div>

      {/* Contact & Links */}
      <div>
        <h3 className="text-lg font-bold text-foreground mb-4">Get in touch</h3>
        <div className="space-y-3">
          <a 
            href="mailto:mariia@cheetahmktg.com"
            className="block text-sm text-primary hover:text-primary/80 transition-colors"
          >
            mariia@cheetahmktg.com
          </a>
          <a 
            href="https://www.cheetahmktg.com/s/Privacy_Policy_EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy policy
          </a>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t pt-8">
      <p className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mariia Tokinova Consulting. All rights reserved.
      </p>
    </div>
  </div>
</footer>
      </div>
    </div>
  );
}

export default Index;