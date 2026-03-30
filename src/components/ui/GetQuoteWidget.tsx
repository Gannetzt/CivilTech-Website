import React, { useState } from 'react';
import { MessageSquare, X, Send, CheckCircle2 } from 'lucide-react';

export function GetQuoteWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', product: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-900 to-blue-700 hover:from-green-600 hover:to-green-500 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full lg:w-auto"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Get Quote</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300" 
            onClick={() => setIsOpen(false)}
          />
          
          <div 
            className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 w-full max-w-[450px] overflow-hidden animate-in zoom-in-95 fade-in duration-200"
          >
            <div className="bg-gradient-to-r from-blue-900 to-green-600 p-6 text-white flex justify-between items-center rounded-t-2xl">
              <div>
                <h3 className="font-bold text-xl">Get a Free Quote</h3>
                <p className="text-blue-100 text-sm mt-1">Our experts aim to reply within 24hr</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
                aria-label="Close quote form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center border-4 border-green-50 shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Request Sent Successfully!</h4>
                  <p className="text-gray-500 text-sm">Our technical team has received your details and will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="widget-name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Name *</label>
                    <input required type="text" id="widget-name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all text-sm" placeholder="Your full name" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="widget-email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Email *</label>
                      <input required type="email" id="widget-email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all text-sm" placeholder="you@domain.com" />
                    </div>
                    <div>
                      <label htmlFor="widget-phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Phone *</label>
                      <input required type="tel" id="widget-phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all text-sm" placeholder="Mobile / Landline" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="widget-product" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Service / Area of Interest</label>
                    <select id="widget-product" name="product" value={formData.product} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all text-sm">
                      <option value="">Select Category (Optional)</option>
                      <option value="Waterproofing">Waterproofing Solutions</option>
                      <option value="Sealants">Expansion Joints & Sealants</option>
                      <option value="ConcreteAids">Concrete Aids</option>
                      <option value="Flooring">Protective Flooring</option>
                      <option value="Tiling">Tiling & Adhesives</option>
                      <option value="Repair">General Repair Compounds</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="widget-message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Project Details *</label>
                    <textarea required id="widget-message" name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none transition-all text-sm resize-none" placeholder="Provide details about your project specifications, area mapping, or specific issues."></textarea>
                  </div>
                  <button type="submit" className="w-full mt-2 bg-blue-900 hover:bg-green-600 text-white font-bold py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 group">
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Get Instant Quote
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
