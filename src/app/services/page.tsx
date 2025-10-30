export default function ServicesPage() {
  const services = [
    { title: "Biogas Plant Installation", desc: "Turnkey design, construction, and commissioning." },
    { title: "IoT Automation & Monitoring", desc: "Sensors, dashboards, and remote controls that work together." },
    { title: "Maintenance & Safety Audits", desc: "Routine service, calibration, and compliance checks." },
    { title: "Consultancy", desc: "Feasibility, sizing, and performance optimization." },
    { title: "Renewable Energy Workshops", desc: "Practical training for teams and students." },
  ];
  return (
  <div className="container py-16 text-foreground">
      <h1 className="text-3xl font-semibold">Services</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="card p-6">
            <div className="h-10 w-10 rounded-md" style={{ background: "var(--brand-primary)" }} />
            <h3 className="mt-4 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


