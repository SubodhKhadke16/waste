export default function FaqPage() {
  const faqs = [
    { q: "How does a biogas plant work?", a: "Microbes digest organic waste without oxygen, producing biogas for energy and nutrient-rich slurry." },
    { q: "What waste can be used?", a: "Food scraps, kitchen waste, agri residue, and animal dung are ideal feedstock." },
    { q: "How can I monitor my plant remotely?", a: "Our IoT sensors stream live data to the dashboard and send alerts for thresholds." },
    { q: "What safety measures are used?", a: "Leak detection, pressure relief, emergency shutoffs, and routine audits." },
    { q: "Can I install this on my farm or hostel?", a: "Yes. We size systems for campuses, farms, hostels, and institutions." },
  ];
  return (
    <div className="container py-16 text-white">
      <h1 className="text-3xl font-semibold">FAQ</h1>
      <div className="mt-8 divide-y rounded-2xl border border-muted bg-[var(--surface)] shadow-sm">
        {faqs.map((f) => (
          <div key={f.q} className="p-6">
            <div className="font-semibold">{f.q}</div>
            <div className="mt-2 text-sm muted">{f.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


