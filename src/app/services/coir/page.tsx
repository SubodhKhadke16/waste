export default function CoirPage() {
  return (
    <div className="container py-16 text-foreground">
      <h1 className="text-3xl font-semibold">Coir Plant</h1>
      
      <div className="mt-10">
        <p className="mt-4 max-w-3xl muted">
          Our Coir Processing Plant transforms tender coconut waste into valuable coir products. This innovative 
          facility processes coconut husks to produce cocopeat, coir fiber, and other eco-friendly materials used 
          in agriculture, horticulture, and construction applications.
        </p>
        
        <p className="mt-4 max-w-3xl muted">
          By upcycling coconut waste that would otherwise be discarded, we create sustainable, biodegradable 
          products while reducing environmental impact and supporting local economies.
        </p>

        <div className="card p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-5 text-sm muted space-y-2">
            <li>Processes tender coconut waste efficiently</li>
            <li>Produces high-quality cocopeat</li>
            <li>Manufactures coir fiber products</li>
            <li>Creates value from agricultural waste</li>
            <li>Eco-friendly and biodegradable materials</li>
            <li>Suitable for horticulture and agriculture</li>
          </ul>
        </div>

        <div className="mt-8">
          <button className="btn">View Products</button>
        </div>
      </div>
    </div>
  );
}
