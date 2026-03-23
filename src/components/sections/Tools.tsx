import { useState } from 'react';
import { Calculator, Droplet, Thermometer, ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: 'Concrete Finishing',
    description: 'Find a range of Civiltech Construction Chemicals LLP solutions for simple repairs and making good on new concrete.',
    image: 'https://images.unsplash.com/photo-1633677095081-492aad9530d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZpbmlzaGluZyUyMHN1cmZhY2V8ZW58MXx8fHwxNzY1ODYxMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Waterproofing Solutions',
    description: 'Civiltech Construction Chemicals LLP delivers a full range of world-class waterproofing systems from basement to roof, including waterproof membranes and waterstops.',
    image: 'https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnByb29maW5nJTIwbWVtYnJhbmUlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY1ODYxMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Industrial Flooring Solutions',
    description: 'With an unrivalled range of market leading flooring products, we deliver complete flooring solutions, from design to installation.',
    image: 'https://images.unsplash.com/photo-1731481562702-0e94ce06ebb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmxvb3IlMjBlcG94eXxlbnwxfHx8fDE3NjU4NjEyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Concrete Repair Solutions',
    description: 'Our repair materials and protective systems can help prolong the life of structures way beyond their original design.',
    image: 'https://images.unsplash.com/photo-1762643119387-211dd1ed73da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHJlcGFpciUyMHJlc3RvcmF0aW9ufGVufDF8fHx8MTc2NTg2MTI4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Tools() {
  // Sealant Calculator States
  const [jointWidth, setJointWidth] = useState(0);
  const [jointLength, setJointLength] = useState(0);
  const [jointDepth, setJointDepth] = useState(0);
  const [packSize, setPackSize] = useState(0);
  const [sealantPerMeter, setSealantPerMeter] = useState(0);
  const [totalPacks, setTotalPacks] = useState(0);

  // Concrete Calculator States
  const [concreteLength, setConcreteLength] = useState(0);
  const [concreteWidth, setConcreteWidth] = useState(0);
  const [concreteDepth, setConcreteDepth] = useState(0);
  const [concreteVolume, setConcreteVolume] = useState(0);

  // Dew Point Calculator States
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [dewPoint, setDewPoint] = useState(0);

  const calculateSealant = () => {
    if (jointWidth && jointLength && jointDepth) {
      // Calculate volume in cubic mm, convert to liters
      const volumePerMeter = (jointWidth * jointDepth * 1000) / 1000000;
      setSealantPerMeter(Number(volumePerMeter.toFixed(3)));
      
      const totalVolume = volumePerMeter * jointLength;
      if (packSize > 0) {
        setTotalPacks(Math.ceil(totalVolume / packSize));
      }
    }
  };

  const calculateConcrete = () => {
    if (concreteLength && concreteWidth && concreteDepth) {
      // Convert to cubic meters
      const volume = (concreteLength * concreteWidth * concreteDepth) / 1000;
      setConcreteVolume(Number(volume.toFixed(3)));
    }
  };

  const calculateDewPoint = () => {
    if (temperature && humidity) {
      // Simplified dew point calculation
      const a = 17.27;
      const b = 237.7;
      const alpha = ((a * temperature) / (b + temperature)) + Math.log(humidity / 100);
      const dewPointTemp = (b * alpha) / (a - alpha);
      setDewPoint(Number(dewPointTemp.toFixed(1)));
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6">Civiltech Construction Chemicals LLP Tools</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              A range of tools and calculators available from Civiltech Construction Chemicals LLP to help during your design and installation work.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-700 italic">
            Civiltech Construction Chemicals LLP tools and calculators are a useful tool for consumption estimation, it remains the engineer's responsibility to judge the required amounts of needed products for a given area of application.
          </p>
        </div>
      </section>

      {/* Calculators Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sealant Consumption Calculator */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Droplet className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-gray-900">Sealant Consumption</h3>
                  <p className="text-sm text-gray-600">Calculate sealant requirements</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Joint Width (mm)</label>
                  <input
                    type="number"
                    value={jointWidth || ''}
                    onChange={(e) => setJointWidth(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Joint Length (m)</label>
                  <input
                    type="number"
                    value={jointLength || ''}
                    onChange={(e) => setJointLength(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Joint Depth (mm)</label>
                  <input
                    type="number"
                    value={jointDepth || ''}
                    onChange={(e) => setJointDepth(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Pack Size (Litres)</label>
                  <input
                    type="number"
                    value={packSize || ''}
                    onChange={(e) => setPackSize(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
              </div>

              <button
                onClick={calculateSealant}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors mb-4"
              >
                Calculate
              </button>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Liters per linear metre</span>
                  <span className="text-2xl text-blue-600">{sealantPerMeter}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Total packs required</span>
                  <span className="text-2xl text-blue-600">{totalPacks}</span>
                </div>
              </div>
            </div>

            {/* Concrete Calculator */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Calculator className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-gray-900">Concrete Calculator</h3>
                  <p className="text-sm text-gray-600">Estimate concrete volume</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Length (m)</label>
                  <input
                    type="number"
                    value={concreteLength || ''}
                    onChange={(e) => setConcreteLength(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Width (m)</label>
                  <input
                    type="number"
                    value={concreteWidth || ''}
                    onChange={(e) => setConcreteWidth(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Depth (mm)</label>
                  <input
                    type="number"
                    value={concreteDepth || ''}
                    onChange={(e) => setConcreteDepth(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="0"
                  />
                </div>
              </div>

              <button
                onClick={calculateConcrete}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors mb-4"
              >
                Calculate
              </button>

              <div className="pt-4 border-t">
                <div className="text-center">
                  <p className="text-gray-600 text-sm mb-2">Concrete Volume Required</p>
                  <p className="text-3xl text-green-600">{concreteVolume} m³</p>
                </div>
              </div>
            </div>

            {/* Dew Point Calculator */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Thermometer className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-gray-900">Dew Point Calculator</h3>
                  <p className="text-sm text-gray-600">Substrate temperature check</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Temperature (°C)</label>
                  <input
                    type="number"
                    value={temperature || ''}
                    onChange={(e) => setTemperature(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Relative Humidity (%)</label>
                  <input
                    type="number"
                    value={humidity || ''}
                    onChange={(e) => setHumidity(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="0"
                    min="0"
                    max="100"
                  />
                </div>
              </div>

              <button
                onClick={calculateDewPoint}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors mb-4"
              >
                Calculate
              </button>

              <div className="pt-4 border-t">
                <div className="text-center">
                  <p className="text-gray-600 text-sm mb-2">Dew Point Temperature</p>
                  <p className="text-3xl text-purple-600">{dewPoint}°C</p>
                  <p className="text-xs text-gray-500 mt-3">
                    This tool shows the substrate temperature required for safe product application
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Featured Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of construction chemical solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 right-6 text-white">
                    {solution.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-all group-hover:gap-3">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Brochures Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-xl p-12 text-center">
            <h2 className="text-white mb-4">Online Brochures</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Delivering exceptional products worldwide
            </p>
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-2">
              View All Brochures
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
