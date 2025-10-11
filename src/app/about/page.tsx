export default function AboutPage() {
  return (
    <div className="container py-16 text-white">
      <h1 className="text-3xl font-semibold">About WAStec Group of Companies</h1>
      <p className="mt-4 max-w-3xl muted">
        WAStec Group of Companies, founded by Manav Kukreja, is a social enterprise focused on sustainable and renewable energy solutions. The group includes Kukreja's WAStec Bio-Gas Private Limited, a pioneering startup incubated at the Bhabha Atomic Research Centre (BARC), Mumbai.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <div className="card card-pad">
          <h3 className="font-semibold">Mission</h3>
          <p className="mt-2 text-sm muted">Transform organic waste into clean energy using safe, automated systems and innovative biogas purification technology.</p>
        </div>
        <div className="card card-pad">
          <h3 className="font-semibold">Vision</h3>
          <p className="mt-2 text-sm muted">Build a future where every facility produces its own reliable green power through sustainable waste management.</p>
        </div>
        <div className="card card-pad">
          <h3 className="font-semibold">Innovation</h3>
          <p className="mt-2 text-sm muted">BARC-incubated startup specializing in biogas purification into CNG and comprehensive waste upcycling solutions.</p>
        </div>
      </div>

      {/* Founder Profile */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Meet Our Founder</h2>
        <div className="card p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="h-32 w-32 rounded-full mx-auto mb-6" style={{ background: "linear-gradient(135deg, var(--brand-primary), var(--color-accent))" }} />
              <h3 className="text-xl font-semibold text-center mb-2">Manav Kukreja</h3>
              <p className="text-center muted mb-4">Founder & CEO, WAStec Group of Companies</p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Leadership Role</h4>
                <p className="text-sm muted">As a social entrepreneur, Manav Kukreja leads WAStec in pioneering sustainable energy solutions and waste management innovations. Based in Mumbai, Maharashtra.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Core Technologies</h4>
                <ul className="text-sm muted space-y-1">
                  <li>• Biogas purification into CNG</li>
                  <li>• Tender coconut waste processing</li>
                  <li>• Horticultural waste briquette production</li>
                  <li>• Sustainable upcycling solutions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Incubation Support</h4>
                <p className="text-sm muted">WAStec is proudly incubated at the prestigious Bhabha Atomic Research Centre (BARC), leveraging cutting-edge research facilities and scientific expertise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Details */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Company Information</h2>
        <div className="card p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="muted">Company Name:</span>
                <span className="font-medium">Kukreja's WAStec Bio-Gas Private Limited</span>
              </div>
              <div className="flex justify-between">
                <span className="muted">Incorporation Date:</span>
                <span className="font-medium">January 25, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="muted">Company Status:</span>
                <span className="font-medium text-green-400">Active (as of September 2025)</span>
              </div>
              <div className="flex justify-between">
                <span className="muted">Registration:</span>
                <span className="font-medium">ROC Mumbai</span>
              </div>
            </div>
            <div>
              <span className="muted block mb-2">Registered Address:</span>
              <span className="font-medium">
                AIC-BARC, 1st Floor<br/>
                DAE Con, Anushaktinagar<br/>
                Mumbai, Maharashtra
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Innovations */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Our Technical Innovations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold mb-3">Biogas to CNG Purification</h3>
            <p className="text-sm muted mb-4">
              Our flagship technology focuses on purifying biogas into high-quality compressed natural gas (CNG). This innovative process transforms organic waste into clean, renewable energy, contributing to India's energy independence and environmental sustainability.
            </p>
            <div className="space-y-1 text-xs muted">
              <div>• Advanced purification systems</div>
              <div>• Quality assurance protocols</div>
              <div>• Scalable production methods</div>
            </div>
          </div>
          
          <div className="card p-6">
            <h3 className="font-semibold mb-3">Waste Upcycling Solutions</h3>
            <p className="text-sm muted mb-4">
              WAStec specializes in comprehensive waste management through innovative upcycling projects. We process various waste materials including tender coconut waste and horticultural waste to create valuable products.
            </p>
            <div className="space-y-1 text-xs muted">
              <div>• Tender coconut waste processing</div>
              <div>• Horticultural waste briquettes</div>
              <div>• Circular economy solutions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Timeline */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Company Milestones</h2>
        <div className="card p-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold">January 25, 2025</h3>
                <p className="text-sm muted">Kukreja's WAStec Bio-Gas Private Limited officially incorporated in Mumbai</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold">BARC Incubation</h3>
                <p className="text-sm muted">Successfully incubated at Bhabha Atomic Research Centre (BARC), Mumbai</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold">September 2025</h3>
                <p className="text-sm muted">Active private limited company status maintained with ROC Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


