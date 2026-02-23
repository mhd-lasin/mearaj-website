import React from 'react'
import heroImage from "../../assets/img/hero-kandura.jpg"
const Hero = () => {
    return (
        <>
            <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 overflow-hidden bg-brand-cream">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 transform translate-x-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left Content */}
                        <div className="order-2 lg:order-1 space-y-8 fade-in">
                            <div className="inline-block px-4 py-1.5 border border-brand-gold/30 rounded-full">
                                <p className="text-brand-gold font-medium tracking-[0.2em] uppercase text-[10px] md:text-xs">
                                    In house Atelier - Ajman, UAE
                                </p>
                            </div>

                            <h1 className="font-serif text-5xl md:text-7xl xl:text-8xl font-bold text-brand-black leading-[1.1] tracking-tight">
                                Timeless <br />
                                <span className="text-brand-gold italic">Kanduras.</span>
                            </h1>

                            <p className="text-lg md:text-xl text-brand-charcoal/80 max-w-xl leading-relaxed">
                                Crafted by master tailors with decades of heritage.
                                Experience the pinnacle of Emirati elegance and precision fit,
                                bespoke for the modern gentleman.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 pt-4">
                                <a href="#visit"
                                    className="px-8 py-4 bg-brand-black text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-all duration-300 shadow-xl text-center">
                                    Visit Our Store
                                </a>
                                <a href="#custom"
                                    className="px-8 py-4 border border-brand-black text-brand-black text-xs font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all duration-300 text-center">
                                    Custom Tailoring
                                </a>
                            </div>

                            <div className="flex items-center gap-6 pt-8 border-t border-brand-gold/20">
                                <div>
                                    <p className="font-serif text-2xl font-bold text-brand-black">20+</p>
                                    <p className="text-[10px] uppercase tracking-wider text-brand-charcoal/50">Years Exp</p>
                                </div>
                                <div className="w-px h-8 bg-brand-gold/20"></div>
                                <div>
                                    <p className="font-serif text-2xl font-bold text-brand-black">100%</p>
                                    <p className="text-[10px] uppercase tracking-wider text-brand-charcoal/50">Perfect Fit</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Image with Decorative Frame */}
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative z-10 aspect-4/5 md:aspect-3/4 lg:aspect-4/5 rounded-sm overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
                                <img src={heroImage}
                                    alt="Premium Emirati Kandura Tailoring"
                                    className="w-full h-full object-cover object-top" />
                            </div>
                            {/* Gold Frame accents */}
                            <div className="absolute -z-10 -top-6 -right-6 w-1/2 h-1/2 border-t-2 border-r-2 border-brand-gold/40"></div>
                            <div className="absolute -z-10 -bottom-6 -left-6 w-1/2 h-1/2 border-b-2 border-l-2 border-brand-gold/40"></div>

                            {/* Floating Tag */}
                            <div className="absolute -bottom-4 right-8 bg-white p-4 shadow-xl border-l-4 border-brand-gold fade-in hidden md:block">
                                <p className="text-xs font-bold uppercase tracking-widest text-brand-black mb-1 italic">The Signature Cut</p>
                                <p className="text-[10px] text-brand-charcoal/60">Limited Artisan Series</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero