import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Search, ArrowRight, Building2, Map } from 'lucide-react';

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
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
    organisation: '',
    subject: '',
    message: ''
  });

  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    setSelectedCity('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const dataToSubmit = {
        Name: formData.name || '',
        Email: formData.email || '',
        Phone: formData.phone || '',
        Organisation: formData.organisation || '',
        Subject: formData.subject || '',
        Message: formData.message || '',
        Type: 'Contact'
      };

      await fetch((import.meta as any).env.VITE_GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit)
      });
      
      alert('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', phone: '', organisation: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDistributorSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative py-24 sm:py-32 bg-slate-900 text-white overflow-hidden">
        {/* Dynamic Abstract Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-green-500/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086225-ee531b7ef390?q=80&w=2670&auto=format&fit=crop')] opacity-[0.03] mix-blend-overlay bg-cover bg-center"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-2xl text-gray-300 font-light leading-relaxed">
              We engineer solutions for the future. Partner with our technical experts to bring your visionary projects to life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-24 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
            
            {/* Contact Form Details */}
            <div className="lg:col-span-3">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 opacity-50"></div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a message</h2>
                <p className="text-gray-500 mb-8">Fill out the form below and we'll be in touch shortly.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Name</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required
                        className="w-full px-5 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm outline-none" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}
                        className="w-full px-5 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm outline-none" placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Phone</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required maxLength={10} minLength={10} pattern="[0-9]{10}" title="Please enter exactly 10 digits"
                        className="w-full px-5 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm outline-none" placeholder="10-digit mobile number" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="organisation" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Organisation</label>
                      <input type="text" id="organisation" name="organisation" value={formData.organisation} onChange={handleInputChange}
                        className="w-full px-5 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm outline-none" placeholder="Company Name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange}
                      className="w-full px-5 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm outline-none" placeholder="How can we help?" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={5}
                      className="w-full px-5 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm outline-none resize-none" placeholder="Tell us more about your project..." />
                  </div>

                  <button type="submit" disabled={isSubmitting}
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-10 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-3 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 group disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar Contact Details */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  Headquarters
                </h3>
                <div className="space-y-8">
                  <div className="group flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                        Kondapur<br/>Hyderabad, Telangana<br/>India
                      </p>
                    </div>
                  </div>
                  
                  <div className="group flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600 group-hover:text-green-700 transition-colors">+91 40-35982016 | +91 89787 85341</p>
                    </div>
                  </div>

                  <div className="group flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600 group-hover:text-blue-700 transition-colors">mailtociviltech@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative flex-grow group cursor-pointer min-h-[300px]">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-blue-900/40 to-transparent mix-blend-multiply"></div>
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 ring-1 ring-white/50 shadow-2xl">
                      <Map className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg drop-shadow-md">View Interactive Map</h3>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium Distributor Search */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">Locate a Distributor</h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Find authorized Civiltech distributors near you. Our nationwide network ensures prompt delivery and technical support anywhere in India.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-gray-100 p-8 sm:p-12 relative overflow-hidden">
               <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-600 to-green-500"></div>
               <form onSubmit={handleDistributorSearch} className="grid md:grid-cols-12 gap-6 items-end relative z-10">
                <div className="md:col-span-5 space-y-2">
                  <label htmlFor="state" className="text-xs font-bold text-gray-500 uppercase tracking-widest">State / Region</label>
                  <select id="state" value={selectedState} onChange={handleStateChange} required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium appearance-none cursor-pointer">
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-4 space-y-2">
                  <label htmlFor="city" className="text-xs font-bold text-gray-500 uppercase tracking-widest">City</label>
                  <select id="city" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} required disabled={!selectedState}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium appearance-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                    <option value="">{selectedState ? 'Select City' : 'Choose State First'}</option>
                    {selectedState && citiesByState[selectedState]?.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-3">
                  <button type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white h-[56px] rounded-xl transition-colors flex items-center justify-center gap-2 font-bold group shadow-lg shadow-slate-900/20">
                    <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Search
                  </button>
                </div>
              </form>

              {/* Results */}
              {selectedState && selectedCity && (
                <div className="mt-12 pt-12 border-t border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                      <MapPin className="w-4 h-4" />
                    </span>
                    Distributors in {selectedCity}, {selectedState}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/0 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors relative z-10">Premium Builder Supply {item}</h4>
                        <div className="space-y-3 text-sm relative z-10">
                          <div className="flex items-start gap-3 text-gray-600">
                            <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>123 Industrial Area Phase {item},<br/>{selectedCity}, {selectedState}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>+91 98765 43210</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                            <span>contact@pbs{item}.com</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Online Brochures CTA */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-slate-900">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-500/20 to-transparent"></div>
               <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative p-12 sm:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Complete Product Catalog</h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Explore our comprehensive range of high-performance construction chemicals. Download technical data sheets and detailed brochures instantly.
                </p>
              </div>
              <button className="flex-shrink-0 bg-white hover:bg-gray-50 text-slate-900 px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-3 font-bold group shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:scale-105">
                View Brochures
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
