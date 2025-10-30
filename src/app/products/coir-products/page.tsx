export default function CoirProductsPage() {
  return (
  <div className="container py-16 text-foreground">
      <h1 className="text-3xl font-semibold">Coir Products</h1>
      
      <div className="mt-10">
        <p className="mt-4 max-w-3xl muted">
          Our range of coir products includes cocopeat, coir fiber bundles, coir sticks, and coir ropes, all 
          manufactured from tender coconut waste. These natural, biodegradable materials find extensive applications 
          in agriculture, horticulture, packaging, and construction industries.
        </p>
        
        <p className="mt-4 max-w-3xl muted">
          Each product is processed to meet quality standards and environmental certifications, providing sustainable 
          alternatives to synthetic materials while supporting waste management and circular economy principles.
        </p>

        <div className="card p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Product Range</h2>
          <ul className="list-disc pl-5 text-sm muted space-y-2">
            <li><strong>Cocopeat:</strong> Organic growing medium for plants</li>
            <li><strong>Coir Bundle:</strong> Natural fiber for various industrial uses</li>
            <li><strong>Coir Stick:</strong> Versatile gardening and support material</li>
            <li><strong>Coir Rope:</strong> Strong, durable natural rope</li>
            <li>100% biodegradable and eco-friendly materials</li>
            <li>Made from renewable coconut waste</li>
          </ul>
        </div>

        <div className="mt-8">
          <button className="btn">View Catalog</button>
        </div>
      </div>
    </div>
  );
}
