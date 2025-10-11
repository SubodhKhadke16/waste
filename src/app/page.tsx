export default function HomePage() {
  return (
    <div className="container py-16 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">WAStec Group of Companies</h1>
        <p className="text-xl muted mb-8 max-w-3xl mx-auto">
          Pioneering sustainable energy solutions through biogas purification and waste management innovation.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/about" className="btn btn-primary">Learn More</a>
          <a href="/services" className="btn btn-secondary">Our Services</a>
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <div className="card card-pad text-center">
          <div className="h-16 w-16 mx-auto rounded-full mb-4" style={{ background: "linear-gradient(135deg, var(--brand-primary), var(--color-accent))" }} />
          <h3 className="font-semibold mb-2">Biogas Purification</h3>
          <p className="text-sm muted">Converting biogas into high-quality CNG for clean energy solutions.</p>
        </div>
        <div className="card card-pad text-center">
          <div className="h-16 w-16 mx-auto rounded-full mb-4" style={{ background: "linear-gradient(135deg, var(--brand-primary), var(--color-accent))" }} />
          <h3 className="font-semibold mb-2">Waste Upcycling</h3>
          <p className="text-sm muted">Processing tender coconut waste and creating briquettes from horticultural waste.</p>
        </div>
        <div className="card card-pad text-center">
          <div className="h-16 w-16 mx-auto rounded-full mb-4" style={{ background: "linear-gradient(135deg, var(--brand-primary), var(--color-accent))" }} />
          <h3 className="font-semibold mb-2">BARC Incubated</h3>
          <p className="text-sm muted">Proudly incubated at Bhabha Atomic Research Centre for cutting-edge innovation.</p>
        </div>
      </div>
    </div>
  );
}