export default function OrganicBoosterPage() {
  return (
    <div className="container py-16 text-foreground">
      <h1 className="text-3xl font-semibold">Organic Fermented Booster</h1>
      
      <div className="mt-10">
        <p className="mt-4 max-w-3xl muted">
          Our Organic Fermented Booster is a premium liquid fertilizer derived from biogas slurry through an 
          advanced fermentation process. This nutrient-rich organic solution enhances soil health, improves plant 
          growth, and provides essential micro-organisms that promote sustainable agriculture.
        </p>
        
        <p className="mt-4 max-w-3xl muted">
          By converting the slurry byproduct from our biogas plants into valuable fertilizer, we complete the 
          circular economy loop, ensuring zero waste while delivering superior crop nutrition and soil improvement 
          for farmers and gardeners.
        </p>

        <div className="card p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
          <ul className="list-disc pl-5 text-sm muted space-y-2">
            <li>Made from biogas slurry - zero waste solution</li>
            <li>Rich in beneficial microorganisms</li>
            <li>Improves soil structure and fertility</li>
            <li>Enhanced nutrient absorption by plants</li>
            <li>100% organic and chemical-free</li>
            <li>Increases crop yield and quality</li>
          </ul>
        </div>

        <div className="mt-8">
          <button className="btn">Order Product</button>
        </div>
      </div>
    </div>
  );
}
