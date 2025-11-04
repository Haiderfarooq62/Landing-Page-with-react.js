import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [formState, setFormState] = useState("idle");
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  function openModal(plan = null) {
    if (plan) setSelectedPlan(plan);
    setIsModalOpen(true);
    setFormState("idle");
  }

  function closeModal() {
    setIsModalOpen(false);
    setForm({ name: "", email: "", password: "" });
    setFormState("idle");
  }

  function handleScrollToFeatures() {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.includes("@") || form.password.length < 6) {
      alert("Please provide a valid name, email and a password of 6+ characters.");
      return;
    }
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 900);
  }

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-gray-200 antialiased">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between sticky top-0 bg-gradient-to-b from-[#0b0b0f]/90 to-transparent z-30">
        <div className="flex items-center gap-3">
           <img src="/logo.png"alt="FrontEdge Logo"className="w-10 h-10 object-contain" />
          <div>
            <div className="font-semibold">FrontEdge</div>
            <div className="text-xs text-gray-400">Modern React UI Showcase</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#home" className="hover:text-white">Home</a>
          <button onClick={handleScrollToFeatures} className="hover:text-white">Features</button>
          <a href="#pricing" onClick={() => pricingRef.current?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white">Pricing</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#blog" className="hover:text-white">Blog</a>
          <button onClick={() => openModal()} className="bg-gradient-to-r from-pink-500 to-yellow-400 text-black px-4 py-2 rounded-full font-semibold">Get Started</button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <section id="home" className="grid md:grid-cols-2 gap-8 items-center py-10">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold leading-tight">
              A simple path to
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-300"> customer satisfaction</span>
            </motion.h1>

            <p className="mt-4 text-gray-400 max-w-prose">Build beautiful websites and manage digital products with an elegant, fast workflow. Showcase, ship, and measure results — all in one place.</p>

            <div className="mt-6 flex gap-3">
              <button onClick={() => openModal()} className="px-5 py-3 rounded-md bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-medium">Start free</button>
              <button onClick={handleScrollToFeatures} className="px-5 py-3 rounded-md border border-gray-700 text-gray-300">Watch demo</button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-gray-400">
              <div>
                <div className="text-xl font-bold">$2.5M</div>
                <div className="text-xs text-gray-500">Revenue</div>
              </div>
              <div>
                <div className="text-xl font-bold">45%</div>
                <div className="text-xs text-gray-500">Conversion uplift</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-b from-[#0f1724] to-[#061018] rounded-2xl p-6 shadow-xl border border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <div className="text-xs text-gray-400">Analytics</div>
                <div className="text-sm font-medium">Last 30 days</div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <MetricCard label="Users" value="34.2k" change="+6%" />
                <MetricCard label="Sales" value="1.2k" change="+3%" />
                <MetricCard label="Churn" value="2.1%" change="-0.4%" />
              </div>

              <div className="mt-6 h-36 bg-gradient-to-r from-[#061018] to-[#071025] rounded-md flex items-end gap-3 p-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex-1 rounded-md">
                    <div style={{ height: `${30 + i * 10}px` }} className="w-full rounded bg-gradient-to-t from-pink-500 to-yellow-300"></div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                <div>Visitors</div>
                <div>Daily breakdown</div>
              </div>
            </div>

            <div className="absolute right-4 bottom-[-36px] w-44 md:w-56 transform rotate-2">
              <div className="bg-[#07070a] border border-gray-800 rounded-2xl p-3 shadow-2xl">
                <div className="bg-black rounded-xl p-2">
                  <div className="h-64 w-full bg-gradient-to-b from-gray-800 to-black rounded-lg overflow-hidden">
                    <div className="p-3 text-sm text-gray-300">
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-semibold">MyApp</div>
                        <div className="text-xs text-gray-500">v1.2</div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm">Orders</div>
                          <div className="text-sm font-semibold">128</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm">Revenue</div>
                          <div className="text-sm font-semibold">$12.4k</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm">Products</div>
                          <div className="text-sm font-semibold">36</div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FEATURES */}
        <section id="features" ref={featuresRef} className="py-12">
          <h3 className="text-xl font-semibold">Features</h3>
          <p className="text-gray-400 mt-2 max-w-prose">Everything you need to sell, manage and grow your digital products.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {featureData.map((f, idx) => (
              <FeatureCard key={idx} {...f} />
            ))}
          </div>
        </section>

        {/* CARDS & CTA */}
        <section className="py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Practical outcomes & financial performance</h3>
              <p className="text-gray-400">Real world scenarios and numbers from customers who shipped faster and increased conversions.</p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <ResultCard title="$2.5M" subtitle="Revenue influenced" />
                <ResultCard title="45%" subtitle="Conversion uplift" />
              </div>
            </div>
          </div>

          <div className="bg-[#071012] p-6 rounded-2xl border border-gray-800">
            <h4 className="font-semibold">Manage your products</h4>
            <p className="text-gray-400 mt-2">A central place to add, track and publish products to your site.</p>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div>Product A</div>
                <div className="text-gray-200 font-semibold">Active</div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div>Product B</div>
                <div className="text-gray-500">Draft</div>
              </div>
            </div>

            <div className="mt-6">
              <button onClick={() => openModal()} className="w-full px-4 py-3 rounded-md bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-medium">Try it free</button>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" ref={pricingRef} className="py-12">
          <h3 className="text-xl font-semibold">Pricing</h3>
          <p className="text-gray-400 mt-2 max-w-prose">Simple, transparent pricing. Upgrade anytime.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <PlanCard title="Starter" price="$0" features={["Basic pages","Analytics","Community support"]} selected={selectedPlan==='Starter'} onSelect={() => { setSelectedPlan('Starter'); openModal('Starter'); }} />
            <PlanCard title="Pro" price="$29/mo" features={["Everything in Starter","Payments","Priority support"]} highlight selected={selectedPlan==='Pro'} onSelect={() => { setSelectedPlan('Pro'); openModal('Pro'); }} />
            <PlanCard title="Business" price="$99/mo" features={["Everything in Pro","SAML SSO","Dedicated success"]} selected={selectedPlan==='Business'} onSelect={() => { setSelectedPlan('Business'); openModal('Business'); }} />
          </div>

        </section>

        {/* ABOUT */}
        <section id="about" className="py-12">
          <h3 className="text-xl font-semibold">About</h3>
          <p className="text-gray-400 mt-2 max-w-prose">We help teams deliver beautiful websites and measurable results. Our mission is to make building and selling digital products fast and delightful. We focus on design, performance and actionable analytics so teams can iterate with confidence.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-[#071017] p-6 rounded-2xl border border-gray-800">
              <h4 className="font-semibold">Our Story</h4>
              <p className="text-gray-400 mt-2 text-sm">Started by a small product team, we built tools to remove friction from shipping websites and selling digital goods. Today thousands of teams use our product to launch quickly.</p>
            </div>
            <div className="bg-[#071017] p-6 rounded-2xl border border-gray-800">
              <h4 className="font-semibold">Security & Privacy</h4>
              <p className="text-gray-400 mt-2 text-sm">We prioritise user data protection with encryption, role-based access and regular audits. You control who sees what.</p>
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section id="blog" className="py-12">
          <h3 className="text-xl font-semibold">From the blog</h3>
          <p className="text-gray-400 mt-2 max-w-prose">Stories, case studies and product updates.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {blogPosts.map((b, i) => (
              <article key={i} className="bg-[#071017] p-4 rounded-lg border border-gray-800">
                <h4 className="font-semibold">{b.title}</h4>
                <p className="text-gray-400 text-sm mt-2">{b.excerpt}</p>
                <div className="mt-3 text-xs text-gray-500">{b.date} • {b.read}</div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12">
          <h3 className="text-xl font-semibold">Questions & Answers</h3>
          <div className="mt-4 space-y-3">
            {faqData.map((f, i) => (
              <details key={i} className="bg-[#071017] p-4 rounded-md border border-gray-800">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-gray-400">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-sm text-gray-400">
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="font-semibold">FrontEdge</div>
              <div className="text-xs text-gray-500">Modern React UI Showcase</div>
            </div>

            <div className="flex gap-6">
              <a href="#home" className="hover:text-white">Home</a>
              <button onClick={handleScrollToFeatures} className="hover:text-white">Features</button>
              <a href="#pricing" onClick={() => pricingRef.current?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white">Pricing</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#blog" className="hover:text-white">Blog</a>
            </div>

            <div className="text-gray-500">© {new Date().getFullYear()} FrontEdge</div>
          </div>
        </footer>

      </main>

      {/* Signup Modal (no reload) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="w-full max-w-xl bg-[#071017] rounded-2xl p-6 relative">
            <button onClick={closeModal} className="absolute right-4 top-4 text-gray-400 hover:text-white">✕</button>

            {formState !== "success" ? (
              <div>
                <h3 className="text-2xl font-bold mb-2">Create your account</h3>
                {selectedPlan && <div className="text-sm text-gray-400 mb-4">Signing up for: <span className="font-semibold">{selectedPlan}</span></div>}

                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="text-sm text-gray-300">Full name</label>
                    <input name="name" value={form.name} onChange={handleInput} className="w-full mt-1 p-3 bg-[#0b0b0f] rounded-md border border-gray-800 text-white" placeholder="Your name" />
                  </div>

                  <div>
                    <label className="text-sm text-gray-300">Email address</label>
                    <input name="email" value={form.email} onChange={handleInput} className="w-full mt-1 p-3 bg-[#0b0b0f] rounded-md border border-gray-800 text-white" placeholder="you@example.com" />
                  </div>

                  <div>
                    <label className="text-sm text-gray-300">Password</label>
                    <input name="password" value={form.password} onChange={handleInput} type="password" className="w-full mt-1 p-3 bg-[#0b0b0f] rounded-md border border-gray-800 text-white" placeholder="Choose a password" />
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <button disabled={formState === "submitting"} type="submit" className="px-5 py-3 rounded-md bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold">{formState === "submitting" ? "Creating..." : "Create account"}</button>
                    <button type="button" onClick={closeModal} className="px-4 py-3 rounded-md border border-gray-700 text-gray-300">Cancel</button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <svg className="mx-auto mb-4" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                <p className="text-gray-400 mb-6">Your account has been created (demo). Check your email for a confirmation link.</p>
                <div className="flex justify-center gap-3">
                  <button onClick={() => { setFormState('idle'); closeModal(); }} className="px-6 py-3 rounded-md bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold">Close</button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

/* Helper components and data */

function MetricCard({ label, value, change }) {
  return (
    <div className="bg-[#051018] p-3 rounded-md border border-gray-800">
      <div className="text-xs text-gray-400">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-xs text-gray-500">{change}</div>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-[#071017] p-6 rounded-2xl border border-gray-800 hover:scale-[1.01] transition-transform">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-yellow-400 flex items-center justify-center font-semibold">F</div>
      <h4 className="mt-4 font-semibold">{title}</h4>
      <p className="mt-2 text-gray-400 text-sm">{desc}</p>
      <div className="mt-4 text-xs text-gray-500">Learn more →</div>
    </div>
  );
}

function PlanCard({ title, price, features, highlight, selected, onSelect }) {
  return (
    <div onClick={onSelect} className={`p-6 rounded-2xl border cursor-pointer ${selected ? 'border-green-400 ring-2 ring-green-500' : (highlight ? 'border-pink-500' : 'border-gray-800')} bg-[#071017]`}>
      <div className="text-sm text-gray-400">{title}</div>
      <div className="text-2xl font-bold mt-2">{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-gray-400">
        {features.map((f, i) => (<li key={i}>• {f}</li>))}
      </ul>
      <div className="mt-6">
        <button onClick={(e) => { e.stopPropagation(); onSelect(); }} className={`w-full px-4 py-3 rounded-md ${selected ? 'bg-green-400 text-black' : 'bg-transparent border border-gray-700 text-gray-300'}`}>{selected ? 'Selected' : 'Select'}</button>
      </div>
    </div>
  );
}

function ResultCard({ title, subtitle }) {
  return (
    <div className="bg-[#061019] p-4 rounded-lg border border-gray-800">
      <div className="text-sm text-gray-400">{subtitle}</div>
      <div className="text-2xl font-bold mt-2">{title}</div>
    </div>
  );
}

const featureData = [
  { title: 'Easy setup & publish', desc: 'Get a site live in minutes with ready templates.' },
  { title: 'Built-in analytics', desc: 'Understand which pages convert best.' },
  { title: 'Payments & checkout', desc: 'Accept payments and manage orders easily.' },
  { title: 'Customizable themes', desc: 'Match the brand with full theme control.' },
  { title: 'Team collaboration', desc: 'Invite teammates and manage roles.' },
  { title: 'Integrations', desc: 'Connect to external tools and services.' }
];

const faqData = [
  { q: 'How much does it cost?', a: 'We offer a free tier and paid plans — pricing depends on usage and features.' },
  { q: 'Can I migrate my store?', a: 'Yes, import/export tools make migrations straightforward.' },
  { q: 'Is there a free trial?', a: 'Yes — try all premium features free for 14 days.' }
];

const blogPosts = [
  { title: 'How we increased conversions by 45%', excerpt: 'A step-by-step case study of design changes and A/B tests.', date: 'May 5, 2025', read: '4 min read' },
  { title: 'Designing fast landing pages', excerpt: 'Tips for minimal CSS and high impact hero sections.', date: 'Apr 18, 2025', read: '3 min read' },
  { title: 'Selling digital products: pricing tactics', excerpt: 'Subscription vs one-time — how to pick the right model.', date: 'Mar 28, 2025', read: '5 min read' }
];
