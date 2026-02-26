import React from 'react'

const Location = () => {
    const storeInfo = [
        {
            icon: (
                <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Address",
            lines: ["9FWR+HPC – Sheikh Zayed Street", "Al Jerf 2, Ajman"],
            subtext: "United Arab Emirates"
        },
        {
            icon: (
                <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Store Hours",
            lines: ["Saturday – Thursday: 9:00 AM – 1:00 PM, 4:30 PM – 11:30 PM", "Friday: 4:30 PM – 11:30 PM"]
        },
        {
            icon: (
                <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Contact",
            lines: ["050 439 4512"],
            subtext: "WhatsApp Available"
        },
        {
            icon: (
                <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            ),
            title: "Amenities",
            lines: ["Walk-in Friendly • Ample Parking Available"],
            subtext: "Private Fitting Rooms • Air Conditioned"
        }
    ];

    return (
        <section id="visit" className="py-20 md:py-32 bg-brand-cream">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    <div className="space-y-8">
                        <div>
                            <p className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">Find Us</p>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-black mb-6">Visit Our Atelier
                            </h2>
                            <p className="text-brand-charcoal/70 text-lg leading-relaxed">
                                Located in the heart of Ajman, our boutique offers a welcoming environment where you can
                                explore our collection and consult with our master tailors.
                            </p>
                        </div>


                        <div className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-brand-gold/10">
                            {storeInfo.map((info, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-bold text-brand-black mb-1">{info.title}</h4>
                                        {info.lines.map((line, idx) => (
                                            <p key={idx} className="text-brand-charcoal/70">{line}</p>
                                        ))}
                                        {info.subtext && <p className="text-sm text-brand-charcoal/50 mt-1">{info.subtext}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div
                        className="h-[500px] bg-brand-gray rounded-2xl overflow-hidden shadow-lg border border-brand-gold/20 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.2500906271853!2d55.4916681!3d25.3964379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f7df7c3f54f5%3A0x2ea42b5aedd00fd9!2sAl%20Mearajtailor%26textielsllc!5e0!3m2!1sen!2sae!4v1772120156781!5m2!1sen!2sae"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                            title="Al Mearaj Tailor">
                        </iframe>
                        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-2xl shadow-md">
                            <p className="text-brand-black font-bold text-sm">MEARAJ Ajman</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location
