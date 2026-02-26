import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'Ready-Made Kandura',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your message, ${formData.name}. We will contact you shortly.`);
        setFormData({
            name: '',
            phone: '',
            email: '',
            service: 'Ready-Made Kandura',
            message: ''
        });
    };

    const services = [
        "Ready-Made Kandura",
        "Custom Tailoring",
        "Alterations",
        "General Inquiry"
    ];

    return (
        <section id="contact" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <p className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">Get In Touch</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-black mb-6">Contact Us</h2>
                    <p className="text-brand-charcoal/70">Have questions about our services or ready to schedule a custom
                        fitting? Reach out to our team.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-brand-cream p-8 md:p-12 rounded-2xl border border-brand-gold/20">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-brand-charcoal mb-2 uppercase tracking-wider">Name</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                required
                                className="w-full px-4 py-3 bg-white border border-brand-gold/30 rounded-xl focus:outline-none focus:border-brand-gold transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-brand-charcoal mb-2 uppercase tracking-wider">Phone</label>
                            <input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                type="tel"
                                required
                                className="w-full px-4 py-3 bg-white border border-brand-gold/30 rounded-xl focus:outline-none focus:border-brand-gold transition-colors"
                                placeholder="+971 XX XXX XXXX"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-brand-charcoal mb-2 uppercase tracking-wider">Email</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            required
                            className="w-full px-4 py-3 bg-white border border-brand-gold/30 rounded-sm focus:outline-none focus:border-brand-gold transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-brand-charcoal mb-2 uppercase tracking-wider">Service Interest</label>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-brand-gold/30 rounded-xl focus:outline-none focus:border-brand-gold transition-colors"
                        >
                            {services.map((service, index) => (
                                <option key={index} value={service}>{service}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-brand-charcoal mb-2 uppercase tracking-wider">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-3 bg-white border border-brand-gold/30 rounded-xl focus:outline-none focus:border-brand-gold transition-colors"
                            placeholder="Tell us about your requirements..."
                        ></textarea>
                    </div>

                    <button type="submit"
                        className="w-full py-4 bg-brand-black text-white font-bold uppercase tracking-widest hover:bg-brand-gold transition-all duration-300 rounded-xl">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
