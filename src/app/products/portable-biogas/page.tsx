export default function PortableBiogasPage() {
  return (
    <div className="container py-16 text-foreground">
      <h1 className="text-3xl font-semibold">Portable Biogas Plant</h1>
      
      <div className="mt-10">
        <p className="mt-4 max-w-3xl muted">
          Our portable biogas plants are specialized systems designed specifically for processing food waste at 
          household and small-scale levels. These compact, user-friendly units allow individuals and communities 
          to convert organic kitchen waste into clean cooking gas and high-quality organic fertilizer.
        </p>
        
        <p className="mt-4 max-w-3xl muted">
          Equipped with IoT monitoring capabilities and our Biogas Monitoring App, users can track gas production, 
          monitor system performance, and receive alerts from their smartphones, making sustainable living accessible 
          and convenient.
        </p>

        <div className="card p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-5 text-sm muted space-y-2">
            <li>Specialized for food waste processing</li>
            <li>Portable and easy to install</li>
            <li>IoT-enabled monitoring system</li>
            <li>Produces clean cooking gas daily</li>
            <li>Generates organic fertilizer slurry</li>
            <li>Suitable for homes, restaurants, and small businesses</li>
          </ul>
        </div>

        <div className="mt-8 flex gap-4">
          <button className="btn">Get the App</button>
          <a href="/contact" className="btn" style={{ background: "transparent", border: "1px solid var(--brand-primary)" }}>Contact Us</a>
        </div>
      </div>
    </div>
  );
}
