import React from 'react'
import customTailoringImg from '../../assets/img/custom-tailoring.jpg'

const CustomTailoring = () => {
    const bespokeSteps = [
        {
            number: "1",
            title: "Personalized Measurements",
            description: "Comprehensive 20-point measurement system capturing every contour for precision fit."
        },
        {
            number: "2",
            title: "Fabric Selection",
            description: "Choose from premium cotton, linen, wool, or blends—selected for UAE climate comfort."
        },
        {
            number: "3",
            title: "Expert Stitching",
            description: "Hand-finished details by our in-house master tailors with decades of experience."
        }
    ];

    const perfectFor = [
        "Daily Wear",
        "Formal Occasions",
        "Weddings",
        "Eid Celebrations",
        "Corporate Events"
    ];

    return (
        <section id="custom" className="py-20 md:py-32 bg-brand-black text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-charcoal/30 -skew-x-12 transform translate-x-1/4">
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-8">
                        <div>
                            <p className="text-brand-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">Bespoke
                                Experience</p>
                            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Custom Tailoring<br />
                                <span className="text-brand-gold italic">Redefined</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                                Experience the luxury of a Kandura crafted exclusively for you. Our bespoke process combines
                                traditional Emirati techniques with your personal style preferences.
                            </p>
                        </div>


                        <div className="space-y-6">
                            {bespokeSteps.map((step, index) => (
                                <div key={index} className="flex items-start space-x-4 group">
                                    <div
                                        className="shrink-0 w-12 h-12 rounded-full border-2 border-brand-gold text-brand-gold flex items-center justify-center font-serif font-bold text-xl group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                                        {step.number}</div>
                                    <div>
                                        <h4 className="font-serif text-xl font-bold mb-2">{step.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-brand-gold/30">
                            <p className="text-sm text-brand-gold uppercase tracking-widest mb-4">Perfect For</p>
                            <div className="flex flex-wrap gap-3">
                                {perfectFor.map((item, index) => (
                                    <span key={index}
                                        className="px-4 py-2 bg-brand-charcoal border border-brand-gold/30 rounded-full text-sm">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>


                        <a href="#contact"
                            className="inline-block px-10 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 mt-4 rounded-xl">
                            Get Your Kandura Tailored
                        </a>
                    </div>


                    <div className="relative pb-10">
                        <div className="img-zoom rounded-2xl overflow-hidden shadow-2xl">
                            <img src={customTailoringImg}
                                alt="Premium Kandura tailoring process with fabric and measurements"
                                className="w-full h-[700px] object-cover" />
                        </div>

                        <div
                            className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-brand-gold text-brand-black p-6 rounded-2xl shadow-xl max-w-xs z-10">
                            <p className="font-serif text-2xl font-bold mb-1">20+ Years</p>
                            <p className="text-sm font-medium">Combined master tailor experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomTailoring
