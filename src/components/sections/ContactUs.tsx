import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Search, ArrowRight } from 'lucide-react';

const states = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal'
];

const citiesByState: { [key: string]: string[] } = {
  'Karnataka': ['Bangalore', 'Mysore', 'Mangalore', 'Hubli'],
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli'],
  'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar'],
  'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
  'West Bengal': ['Kolkata', 'Siliguri', 'Durgapur', 'Asansol'],
  'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota']
};

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    organisation: '',
    country: 'India',
    message: '',
    subject: ''
  });

  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    setSelectedCity('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleDistributorSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for distributor in:', selectedState, selectedCity);
    // Handle distributor search
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-900 to-green-600 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Contact Us</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed font-medium">
              Whatever your enquiry, we'd love to hear from you. Our technical experts are ready to assist with your projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-gray-900 mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-bold text-sm tracking-wide uppercase">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-bold text-sm tracking-wide uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2 font-bold text-sm tracking-wide uppercase">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all text-sm"
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div>
                    <label htmlFor="organisation" className="block text-gray-700 mb-2 font-bold text-sm tracking-wide uppercase">
                      Organisation
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all text-sm"
                      placeholder="Your organisation"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-bold text-sm tracking-wide uppercase">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all text-sm"
                    placeholder="Subject of your enquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-bold text-sm tracking-wide uppercase">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all text-sm resize-none"
                    placeholder="Describe your project requirements or enquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-green-600 text-white px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 font-bold shadow-lg shadow-blue-900/20"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Information */}
            <div className="flex flex-col gap-8 sm:gap-12">
              <div>
                <h2 className="text-gray-900 mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold">Contact Details</h2>
                
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-10 border-2 border-gray-100 shadow-xl">
                  <h3 className="text-blue-950 font-bold mb-8 text-xl border-b border-green-500 pb-2 inline-block">Civiltech Construction Chemicals LLP</h3>
                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-bold mb-1">Corporate Office</p>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          Kondapur Hyderabad, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-bold mb-1">Call Us</p>
                        <p className="text-gray-600 text-sm sm:text-base font-medium">+91 40 2345 6789</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-bold mb-1">Email Support</p>
                        <p className="text-gray-600 text-sm sm:text-base font-medium">info@civiltech.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 rounded-2xl h-64 sm:h-80 flex items-center justify-center border-2 border-dashed border-gray-200">
                <div className="text-center text-gray-400">
                  <MapPin className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 opacity-50" />
                  <p className="font-bold tracking-widest uppercase text-xs">Interactive Map Component</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distributor Search Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-gray-900 mb-4">Distributor Search</h2>
              <p className="text-gray-600 text-lg">
                We have nationwide network of Distributors available from the search option provided below. Civiltech Construction Chemicals LLP has trained and experience applicators spread across India for product application. For details on application support please write to us.
              </p>
            </div>

            <form onSubmit={handleDistributorSearch} className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="state" className="block text-gray-700 mb-2">
                    Select state *
                  </label>
                  <select
                    id="state"
                    value={selectedState}
                    onChange={handleStateChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select state</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="city" className="block text-gray-700 mb-2">
                    Select city *
                  </label>
                  <select
                    id="city"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    required
                    disabled={!selectedState}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">
                      {selectedState ? 'Select city' : 'Select state first'}
                    </option>
                    {selectedState && citiesByState[selectedState]?.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Search Distributors
              </button>
            </form>

            {/* Results placeholder */}
            {selectedState && selectedCity && (
              <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-gray-900 mb-4">Distributors in {selectedCity}, {selectedState}</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors"
                    >
                      <h4 className="text-gray-900 mb-2">Distributor Name {item}</h4>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span>Address details here</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-blue-600" />
                          <span>+91 12 3456 7890</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-blue-600" />
                          <span>distributor{item}@example.com</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Online Brochures Section */}
      <section className="py-20 bg-white">
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
