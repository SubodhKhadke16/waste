export default function BioCoalPage() {
  return (
    <div className="container py-16 text-foreground">
      <h1 className="text-3xl font-semibold">Bio-Coal Plant</h1>
      
      <div className="mt-10">
        <p className="mt-4 max-w-3xl muted">
          Our Bio-Coal plants process city green waste and tree residues into high-density biomass briquettes. 
          This sustainable fuel alternative helps reduce deforestation while providing a cleaner-burning energy 
          source for industrial and domestic use.
        </p>
        
        <p className="mt-4 max-w-3xl muted">
          By converting urban green waste into bio-coal, we create a circular economy solution that diverts 
          organic waste from landfills and produces renewable fuel with lower emissions than conventional coal.
        </p>

        <div className="card p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-5 text-sm muted space-y-2">
            <li>Converts city green/tree waste efficiently</li>
            <li>High-density briquette production</li>
            <li>Lower emissions than traditional coal</li>
            <li>Suitable for industrial and domestic use</li>
            <li>Reduces waste going to landfills</li>
            <li>Renewable and sustainable fuel source</li>
          </ul>
        </div>

        <div className="mt-8">
          <button className="btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}
