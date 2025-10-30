export default function BriquettePage() {
  return (
  <div className="container py-16 text-foreground">
      <h1 className="text-3xl font-semibold">Biomass Briquette</h1>
      
      <div className="mt-10">
        <p className="mt-4 max-w-3xl muted">
          Our biomass briquettes are high-density, eco-friendly fuel alternatives made from compressed agricultural 
          and forestry waste. These briquettes burn longer, produce less smoke, and generate more heat compared to 
          loose biomass, making them ideal for industrial boilers, cooking stoves, and space heating applications.
        </p>
        
        <p className="mt-4 max-w-3xl muted">
          Produced through our advanced briquetting process from city green waste and organic materials, these 
          briquettes offer a sustainable solution that reduces deforestation, minimizes waste, and provides a 
          renewable energy source.
        </p>

        <div className="card p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-5 text-sm muted space-y-2">
            <li>Made from agricultural and forestry waste</li>
            <li>Higher heat value than loose biomass</li>
            <li>Low moisture content and consistent quality</li>
            <li>Reduced smoke and ash production</li>
            <li>Suitable for industrial and domestic use</li>
            <li>Eco-friendly renewable fuel</li>
          </ul>
        </div>

        <div className="mt-8">
          <button className="btn">Order Now</button>
        </div>
      </div>
    </div>
  );
}
