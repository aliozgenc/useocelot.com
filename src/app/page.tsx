export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="container-narrow flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg" style={{ background: "linear-gradient(135deg, var(--brand-green), var(--brand-blue))" }} />
          <span className="text-xl font-semibold text-[color:var(--foreground)]">Ocelot AI</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a className="hover:opacity-80" href="#features">Features</a>
          <a className="hover:opacity-80" href="#how">How it works</a>
          <a className="hover:opacity-80" href="#faq">FAQ</a>
          <a className="hover:opacity-80" href="/privacy">Privacy</a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero-gradient">
          <div className="container-narrow py-20 sm:py-28">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-[color:var(--foreground)]">
                Create and publish digital products in minutes with AI
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-[color:color-mix(in oklab, var(--foreground) 70%, white)]">
                Ocelot AI turns your ideas into polished digital products—ebooks, guides, templates, and more—then publishes them to your Shopify store with a few clicks.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a className="btn-primary" href="#cta">Add to Shopify</a>
                <a className="btn-secondary" href="#how">See how it works</a>
              </div>
              <p className="mt-3 text-xs opacity-70">No credit card required • 14‑day free trial</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="container-narrow py-16 sm:py-24">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-white/70 backdrop-blur">
              <h3 className="text-lg font-semibold">AI product generator</h3>
              <p className="mt-2 text-sm opacity-80">Describe what you want. Our AI drafts content, cover designs, and product structure instantly.</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white/70 backdrop-blur">
              <h3 className="text-lg font-semibold">One‑click publishing</h3>
              <p className="mt-2 text-sm opacity-80">Push products with pricing, variants, and assets straight to your Shopify catalog.</p>
            </div>
            <div className="p-6 rounded-2xl border bg-white/70 backdrop-blur">
              <h3 className="text-lg font-semibold">Built for scale</h3>
              <p className="mt-2 text-sm opacity-80">Templates and workflows that help you produce and ship consistently.</p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="bg-[color:color-mix(in oklab, var(--brand-blue) 5%, white)]">
          <div className="container-narrow py-16 sm:py-24">
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <div className="text-sm uppercase tracking-wide text-[color:var(--brand-blue)] font-semibold">Step 1</div>
                <h4 className="mt-1 font-semibold">Prompt the idea</h4>
                <p className="mt-2 text-sm opacity-80">Enter your niche and product type. Add tone and audience. Hit generate.</p>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide text-[color:var(--brand-blue)] font-semibold">Step 2</div>
                <h4 className="mt-1 font-semibold">Review & refine</h4>
                <p className="mt-2 text-sm opacity-80">Adjust sections, visuals, and pricing with smart suggestions.</p>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wide text-[color:var(--brand-blue)] font-semibold">Step 3</div>
                <h4 className="mt-1 font-semibold">Publish to Shopify</h4>
                <p className="mt-2 text-sm opacity-80">Publish to your storefront. We handle media, variants, and SEO.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <a className="btn-primary" href="#cta">Start free trial</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container-narrow py-16 sm:py-24">
          <h3 className="text-2xl font-semibold">Frequently asked questions</h3>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium">What kinds of digital products can I create?</h4>
              <p className="mt-2 text-sm opacity-80">Ebooks, guides, checklists, templates, and resource packs—optimized for your audience.</p>
            </div>
            <div>
              <h4 className="font-medium">Can I customize the content?</h4>
              <p className="mt-2 text-sm opacity-80">Yes. You can edit structure, copy, images, and metadata before publishing.</p>
            </div>
            <div>
              <h4 className="font-medium">How does pricing work?</h4>
              <p className="mt-2 text-sm opacity-80">Flexible pricing with a free trial. Upgrade when you publish your first product.</p>
            </div>
            <div>
              <h4 className="font-medium">Is it Shopify‑approved?</h4>
              <p className="mt-2 text-sm opacity-80">The app follows Shopify guidelines and integrates natively with your store.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container-narrow py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="opacity-80">© {new Date().getFullYear()} Ocelot AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:opacity-80" href="/privacy">Privacy</a>
            <a className="hover:opacity-80" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
