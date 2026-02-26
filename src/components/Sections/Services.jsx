import React from 'react'

const Services = () => {
    const servicesData = [
        {
            title: "Ready-Made Kanduras",
            subtitle: "Walk-in & Select",
            description: "Curated collection of premium ready-to-wear Kanduras in various sizes and styles, perfect for immediate needs without compromising on quality or elegance.",
            icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        },
        {
            title: "Custom Tailored",
            subtitle: "By Appointment",
            description: "Bespoke Kanduras crafted from scratch based on your unique measurements and preferences, from fabric selection to final stitching.",
            icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        },
        {
            title: "In-House Tailors",
            subtitle: "Expert Craftsmen",
            description: "Our master craftsmen work on-site, ensuring quality control at every stage while allowing you to watch your garment take shape and consult directly with the experts.",
            icon: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
        },
        {
            title: "Premium Fabrics",
            subtitle: "Imported & Local",
            description: "Sourced from the finest mills, including lightweight cotton, linen blends, and luxury wool designed for the UAE climate—breathable, durable, and elegant.",
            icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        },
        {
            title: "Perfect Fit Guarantee",
            subtitle: "100% Satisfaction",
            description: "Every custom Kandura includes complimentary adjustments to ensure your garment fits flawlessly and feels comfortable all day.",
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
            title: "Expert Alterations",
            subtitle: "Same-Day Available",
            description: "Precise alteration services to perfect the fit of your existing Kanduras, regardless of where they were purchased.",
            icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        }
    ]
    return (
        <>
            <section id="services" className="py-20 md:py-32 bg-brand-cream">
                <div className="container mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">What We Offer</p>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-black mb-6">Our Services</h2>
                        <p className="text-brand-charcoal/70">From ready-made elegance to bespoke craftsmanship, discover our
                            comprehensive range of Kandura services designed for the modern gentleman.</p>
                    </div>


                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl hover-lift border border-brand-gold/10 group">
                                <div
                                    className="w-14 h-14 bg-brand-cream rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-300">
                                    <svg className="w-7 h-7 text-brand-gold group-hover:text-white transition-colors" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                            d={service.icon} />
                                    </svg>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-brand-black mb-3">{service.title}</h3>
                                <p className="text-brand-charcoal/70 leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <span className="text-brand-gold text-sm font-medium uppercase tracking-wider">{service.subtitle}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services