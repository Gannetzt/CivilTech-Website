import { useState } from 'react';
import { Download, CheckCircle, FileText } from 'lucide-react';

const products = [
  { name: 'Lokfix E77', id: 'e77' },
  { name: 'Lokfix E55', id: 'e55' },
  { name: 'Lokfix E45T', id: 'e45t' },
  { name: 'Lokfix E35', id: 'e35' }
];

const features = [
  'Longer working times for complex applications',
  'C1 & C2 seismic resistance*',
  '100 year design life*',
  'Fixings can be spaced closer together than mechanical anchors',
  'Does not apply expansive force to the substrate',
  'Resistant to a variety of chemicals',
  'Low VOC',
  'Tested with diamond drilled bore holes*',
  'Temporary service temp tested to 72°C*',
  'Enables fixings closer to edges than mechanical anchors',
  'Fire rated up to 2 hours',
  'Re-usable by replacing sealing cap product may be kept to the end of original shelf life',
  'LEED compliant',
  'Available with design software'
];

const applications = [
  'Accredited for use in dry, damp and flooded concrete substrates.*',
  'Can be used with cracked and un-cracked concrete.',
  'Anchoring of threaded rod fixings',
  'Fixing of post installed reinforcement',
  'Internal, external and submerged conditions',
  'Can be applied to a wide variety of fixing sizes',
  'For horizontal, vertical and overhead application',
  'Anchoring of internal threaded rod sleeves'
];

const processSteps = [
  {
    title: 'DESIGN',
    description: 'Civiltech Construction Chemicals LLP bespoke software will guide you through the design process',
    icon: '📐'
  },
  {
    title: 'SPECIFY',
    description: 'Lokfix E products have industry leading accreditation and design life of 50 to 100 years.',
    icon: '📋'
  },
  {
    title: 'EASY MIX',
    description: 'Let the cartridge system do the mixing for you. No more mess!',
    icon: '🔄'
  },
  {
    title: 'APPLY',
    description: 'Use a standard cartridge gun for most applications',
    icon: '🔧'
  },
  {
    title: 'SUSTAINABILITY',
    description: 'Civiltech Construction Chemicals LLP E range contains no styrenes and cartridges can be re-used.',
    icon: '♻️'
  }
];

export function Lokfix() {
  const [selectedProduct, setSelectedProduct] = useState('e77');
  const [holeDiameter, setHoleDiameter] = useState('');
  const [boltDiameter, setBoltDiameter] = useState('');
  const [embeddedLength, setEmbeddedLength] = useState('');
  const [consumption, setConsumption] = useState(0);

  const calculateConsumption = () => {
    const hole = parseFloat(holeDiameter);
    const embedded = parseFloat(embeddedLength);
    if (hole && embedded) {
      const volume = Math.PI * Math.pow(hole / 2, 2) * embedded;
      setConsumption(Math.ceil(volume));
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section 1 */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">Hang your hat on it</h1>
              <p className="text-xl mb-8 text-blue-50">
                For decades people have been depending on Civiltech Construction Chemicals LLP Lokfix resins to provide long term fixings that you can rely on. Now we bring you the new generation of improved materials.
              </p>
              <div className="flex flex-wrap gap-4">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product.id)}
                    className={`px-6 py-3 rounded-lg transition-all ${
                      selectedProduct === product.id
                        ? 'bg-white text-blue-600'
                        : 'bg-blue-700 hover:bg-blue-600 text-white'
                    }`}
                  >
                    {product.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1722954881636-c57bb310e0c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBhbmNob3IlMjBib2x0fGVufDF8fHx8MTc2NTg2MDg0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Construction fixing"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1613207012467-58f20a42a6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcG94eSUyMHJlc2luJTIwY2FydHJpZGdlfGVufDF8fHx8MTc2NTg2MDg0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Lokfix E45T"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="mb-6">Work smarter when the heat is on</h2>
              <p className="text-xl mb-8 text-green-50">
                Lokfix E45T with extended working time
              </p>
              <div className="flex flex-wrap gap-4">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product.id)}
                    className={`px-6 py-3 rounded-lg transition-all ${
                      selectedProduct === product.id
                        ? 'bg-white text-green-600'
                        : 'bg-green-700 hover:bg-green-600 text-white'
                    }`}
                  >
                    {product.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 3 */}
      <section className="relative py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Added Grip</h2>
              <p className="text-xl mb-8 text-blue-50">
                Civiltech Construction Chemicals LLP have added Lokfix E77 to the range, a new epoxy with enhanced properties.
              </p>
              <div className="flex flex-wrap gap-4">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product.id)}
                    className={`px-6 py-3 rounded-lg transition-all ${
                      selectedProduct === product.id
                        ? 'bg-white text-blue-600'
                        : 'bg-blue-800 hover:bg-blue-700 text-white'
                    }`}
                  >
                    {product.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1725951612621-dcf8f88d0508?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBmaXhpbmclMjB0b29sc3xlbnwxfHx8fDE3NjU4NjA4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Construction tools"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Standard to critical fixing made</h2>
            <h2 className="text-gray-900">easy with <strong>Lokfix E</strong> range</h2>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
              Civiltech Construction Chemicals LLP has been producing high quality fixings for over 50 years. The Lokfix E range combines the industry trusted brand with a clean and easy approach to application.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details - Lokfix E77 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex gap-4 mb-8">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product.id)}
                    className={`px-4 py-2 rounded-lg transition-all text-sm ${
                      selectedProduct === product.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                  >
                    {product.name}
                  </button>
                ))}
              </div>
              <h2 className="text-gray-900 mb-4">Lokfix E77</h2>
              <h3 className="text-gray-700 mb-6">Pure Epoxy 3:1 Resin Anchor</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Lokfix E77 is Fosroc's solution for large and heavy duty anchoring into cracked and un-cracked concrete. It is also suitable to anchoring heavy duty rebar. It has industry leading strength and low partial safety factors with a design life tested up to 100 years. It may be used in dry, damp and flooded conditions. Comes with industry leading accreditation and design software.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Data Sheet
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  ETA - Fixings
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Safety Data
                </button>
              </div>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1745900435345-4ef41cf2c25e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uY3JldGUlMjBkcmlsbGluZ3xlbnwxfHx8fDE3NjU4NjA4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Concrete drilling"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Features and Applications */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="text-gray-900 mb-6">Features</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-gray-900 mb-6">Common Application</h3>
              <div className="space-y-3">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{application}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6 italic">* Always consult technical information for specific details</p>
            </div>
          </div>
        </div>
      </section>

      {/* Software Download */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="mb-6">Software Download</h2>
              <p className="text-xl mb-8 text-white/90">
                Designfix software incorporating Lokfix E77, Lokfix E55 and Lokfix E45T is freely available to download. This enables fast and accurate design guidance in accordance with the European standards.
              </p>
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Software
              </button>
            </div>
            <div className="grid grid-cols-1 gap-6 text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl mb-3">📐</div>
                <h4 className="mb-2">Your Design</h4>
                <p className="text-white/80">Amend the design to meet your specific project, fixing requirements and loads.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="mb-2">Fast Guidance</h4>
                <p className="text-white/80">Quick intuitive agreement for fixing sizes and product type.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="mb-2">From Us to You</h4>
                <p className="text-white/80">Civiltech Construction Chemicals LLP have enlisted DesignFix to provide the software free of charge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Consumption Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Lokfix Product Consumption</h2>
            <p className="text-gray-600">Quickly calculate the quantities you will need for your fixing.</p>
            <p className="text-sm text-gray-500 mt-2 italic">*Theoretical consumption. Make allowance for product wastage</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-gray-700 mb-2">Hole Diameter (mm)</label>
                <input
                  type="number"
                  value={holeDiameter}
                  onChange={(e) => setHoleDiameter(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter diameter"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Bolt Diameter (mm)</label>
                <input
                  type="number"
                  value={boltDiameter}
                  onChange={(e) => setBoltDiameter(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter diameter"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Embedded Length (mm)</label>
                <input
                  type="number"
                  value={embeddedLength}
                  onChange={(e) => setEmbeddedLength(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter length"
                />
              </div>
            </div>
            <button
              onClick={calculateConsumption}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg transition-colors mb-6"
            >
              Calculate Consumption
            </button>
            {consumption > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <p className="text-gray-700 mb-2">Consumption ml</p>
                <p className="text-4xl text-blue-600">{consumption}</p>
                <p className="text-gray-600 mt-2">Consumption Round up ml</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Get your free Lokfix quote</h2>
            <p className="text-gray-600">Whatever your enquiry, we'd love to hear from you.</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 12345 67890"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Product</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select product</option>
                    <option value="e77">Lokfix E77</option>
                    <option value="e55">Lokfix E55</option>
                    <option value="e45t">Lokfix E45T</option>
                    <option value="e35">Lokfix E35</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg transition-colors"
              >
                Send Enquiry
              </button>
            </form>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
              <p className="mb-2"><strong>Civiltech Construction Chemicals LLP India</strong></p>
              <p>Embassy Point, No 150, 2nd Floor, Infantry Road, HYD, 560234, IN</p>
              <p className="mt-2">+91 12 3456 7890</p>
              <p>india@constructionchemicalsllp.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
