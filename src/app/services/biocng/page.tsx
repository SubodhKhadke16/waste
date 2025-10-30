export default function BioCNGPage() {
  return (
    <div className="container py-16 text-foreground">
      <h1 className="text-3xl font-semibold">Bio-CNG Plant</h1>
      
      <div className="mt-10">
        <p className="mt-4 max-w-3xl muted">
          Our Bio-CNG (Compressed Natural Gas) plants convert organic food waste into clean, renewable natural gas 
          suitable for vehicle fuel and industrial applications. Utilizing advanced anaerobic digestion technology, 
          we transform waste into a valuable energy resource while reducing greenhouse gas emissions.
        </p>
        
        <p className="mt-4 max-w-3xl muted">
          The purification process removes impurities from biogas to meet CNG quality standards, producing a 
          carbon-neutral fuel that can replace fossil fuels in transportation and power generation.
        </p>

        <div className="card p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-5 text-sm muted space-y-2">
            <li>High-purity methane production (95%+ CH₄)</li>
            <li>Converts food waste to clean vehicle fuel</li>
            <li>Automated monitoring and control systems</li>
            <li>Meets international CNG quality standards</li>
            <li>Scalable from small to industrial capacity</li>
            <li>Significant reduction in carbon footprint</li>
          </ul>
        </div>

        <div className="mt-8">
          <button className="btn">Get a Quote</button>
        </div>
      </div>
    </div>
  );
}
