export default function TechnologyPage() {
  return (
    <div className="container py-16 text-white">
      <h1 className="text-3xl font-semibold">Technology</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="card card-pad">
          <h3 className="font-semibold">Plant Layout</h3>
          <ul className="mt-3 list-disc pl-5 text-sm muted space-y-1">
            <li>Digesters</li>
            <li>Gas storage</li>
            <li>Slurry pit</li>
            <li>Pipeline</li>
          </ul>
        </div>
        <div className="card card-pad">
          <h3 className="font-semibold">Automation Setup</h3>
          <ul className="mt-3 list-disc pl-5 text-sm muted space-y-1">
            <li>Sensors: temperature, gas, pH</li>
            <li>ESP8266 based control</li>
            <li>Remote OTA updates</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 card card-pad">
        <h3 className="font-semibold">Flow Diagram</h3>
        <p className="mt-2 text-sm muted">Waste → Digestion → Gas → Power</p>
      </div>

      <div className="mt-10 card card-pad">
        <h3 className="font-semibold">Maintenance</h3>
        <ul className="mt-3 list-disc pl-5 text-sm muted space-y-1">
          <li>Auto-cleaning routines</li>
          <li>IoT alerts and notifications</li>
          <li>Predictive maintenance scheduling</li>
        </ul>
      </div>
    </div>
  );
}


