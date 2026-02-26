import React from 'react'

const Experience = () => {
    return (
        <section className="py-20 bg-brand-gold/10 border-y border-brand-gold/30">
            <div className="container mx-auto px-6 text-center">
                <h2 className="font-serif text-4xl md:text-6xl font-bold text-brand-black mb-6">
                    Experience True<br />
                    <span className="text-brand-gold italic">Emirati Craftsmanship</span>
                </h2>
                <p className="text-brand-charcoal/70 text-lg max-w-2xl mx-auto mb-10">
                    Visit our Ajman atelier and discover the difference that master tailoring makes. From ready-made
                    elegance to bespoke perfection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#visit"
                        className="px-10 py-4 bg-brand-black text-white font-bold uppercase tracking-widest hover:bg-brand-charcoal transition-all duration-300 shadow-lg text-center">
                        Visit Our Store
                    </a>
                    <a href="#contact"
                        className="px-10 py-4 border-2 border-brand-black text-brand-black font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all duration-300 text-center">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Experience
