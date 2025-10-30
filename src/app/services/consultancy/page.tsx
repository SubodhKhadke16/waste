export default function ConsultancyPage() {
  return (
    <div className="container py-16 text-foreground">
      <h1 className="text-3xl font-semibold">Consultancy Services</h1>
      
      <div className="mt-10">
        <p className="mt-4 max-w-3xl muted">
          WAStec Bank is our innovative marketplace for waste management, offering comprehensive consultancy services 
          for organizations looking to implement sustainable waste-to-energy solutions. We provide expert guidance 
          on feasibility studies, sizing, performance optimization, and the Zero Waste to Landfill Movement.
        </p>
        
        <p className="mt-4 max-w-3xl muted">
          Our consultancy services help businesses and communities transition from traditional waste disposal to 
          circular economy models, maximizing resource recovery and minimizing environmental impact.
        </p>

        <div className="card p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Key Services</h2>
          <ul className="list-disc pl-5 text-sm muted space-y-2">
            <li>Waste management feasibility studies</li>
            <li>System sizing and design optimization</li>
            <li>Zero Waste to Landfill implementation</li>
            <li>Performance monitoring and optimization</li>
            <li>WAStec Bank marketplace integration</li>
            <li>Custom training and workshops</li>
          </ul>
        </div>

        <div className="mt-8">
          <button className="btn">Contact Us for Consultancy</button>
        </div>
      </div>
    </div>
  );
}
