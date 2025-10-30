import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";

export const metadata: Metadata = {
  title: "WAStec Bio-GAS Pvt. Ltd.",
  description: "Turning Waste into Renewable Energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--surface)]/90 backdrop-blur border-b border-muted">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full" style={{ background: "linear-gradient(135deg, var(--brand-primary), var(--brand-accent))" }} />
          <span className="text-lg font-semibold text-white">WAStec Bio-GAS Pvt. Ltd.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
          <Link className="hover:text-[var(--brand-primary)]" href="/">Home</Link>
          <Link className="hover:text-[var(--brand-primary)]" href="/about">About</Link>
          <Link className="hover:text-[var(--brand-primary)]" href="/technology">Technology</Link>
          
          <DropDownNav label="Services">
            <DropdownLink href="/services">All Services</DropdownLink>
            <DropdownLink href="/services/consultancy">Consultancy</DropdownLink>
            <DropdownLink href="/services/biocng">Bio-CNG Plant</DropdownLink>
            <DropdownLink href="/services/biocoal">Bio-Coal Plant</DropdownLink>
            <DropdownLink href="/services/coir">Coir Plant</DropdownLink>
          </DropDownNav>
          
          <DropDownNav label="Products">
            <DropdownLink href="/products/portable-biogas">Portable Biogas</DropdownLink>
            <DropdownLink href="/products/briquette">Biomass Briquette</DropdownLink>
            <DropdownLink href="/products/coir-products">Coir Products</DropdownLink>
            <DropdownLink href="/products/organic-booster">Organic Booster</DropdownLink>
          </DropDownNav>
          
          <Link className="hover:text-[var(--brand-primary)]" href="/dashboard">Dashboard</Link>
          <Link className="hover:text-[var(--brand-primary)]" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function DropDownNav({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="relative group">
      <button className="text-[var(--brand-primary)] hover:text-[var(--brand-primary)] flex items-center gap-1">
        {label}
        <span className="text-xs">▼</span>
      </button>
      <div className="absolute top-full left-0 mt-1 w-56 bg-[var(--surface)] border border-muted rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-2">
          {children}
        </div>
      </div>
    </div>
  );
}

function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="block px-4 py-2 text-sm hover:bg-black/20 hover:text-[var(--brand-primary)] transition-colors"
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-muted bg-[var(--surface)] text-white">
      <div className="container py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full" style={{ background: "linear-gradient(135deg, var(--brand-primary), var(--brand-accent))" }} />
            <span className="font-semibold">WAStec Bio-GAS Pvt. Ltd.</span>
          </div>
          <p className="mt-3 text-sm subtle max-w-sm">
            Eco-friendly biogas technology with IoT automation and smart waste-to-energy solutions.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm subtle">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Connect</h4>
          <div className="flex items-center gap-4">
            <Link aria-label="LinkedIn" href="#" className="hover:text-[var(--brand-primary)]"><Linkedin className="h-5 w-5" /></Link>
            <Link aria-label="Instagram" href="#" className="hover:text-[var(--brand-primary)]"><Instagram className="h-5 w-5" /></Link>
            <Link aria-label="YouTube" href="#" className="hover:text-[var(--brand-primary)]"><Youtube className="h-5 w-5" /></Link>
            <Link aria-label="GitHub" href="#" className="hover:text-[var(--brand-primary)]"><Github className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
      <div className="border-t border-muted py-4">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs subtle">
          <span>© 2025 WAStec Bio-GAS Pvt. Ltd.</span>
          <span>Contact: wastec@example.com | +91-90000-00000</span>
        </div>
      </div>
    </footer>
  );
}
