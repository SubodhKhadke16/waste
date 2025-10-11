export default function ContactPage() {
  return (
    <div className="container py-16 text-white">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <form className="card p-6 grid gap-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input className="mt-1 w-full rounded-md border p-2" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border p-2" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea className="mt-1 w-full rounded-md border p-2 h-28" placeholder="How can we help?" />
          </div>
          <button className="btn w-fit">Send</button>
        </form>
        <div className="grid gap-4">
          <div className="card p-6">
            <h3 className="font-semibold">Find Us</h3>
            <div className="mt-3 aspect-video w-full rounded-md overflow-hidden bg-black/10">
              <iframe
                title="map"
                className="w-full h-full"
                src="https://www.google.com/maps?q=India&output=embed"
                loading="lazy"
              />
            </div>
          </div>
          <div className="card p-6 text-sm">
            <div className="muted">Email: wastec@example.com</div>
            <div className="muted">Phone: +91-90000-00000</div>
            <div className="mt-2 muted">Social: LinkedIn | Instagram | YouTube</div>
          </div>
        </div>
      </div>
    </div>
  );
}


