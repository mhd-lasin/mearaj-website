import React from 'react'
import aboutImage from "../../assets/img/about-kandura.jpg"
const About = () => {
    const aboutData = [
        {
            title: "Master Tailors",
            subtitle: "In-house experts"
        },
        {
            title: "Premium Fabrics",
            subtitle: "Climate-appropriate"
        },
        {
            title: "Perfect Fit",
            subtitle: "Guaranteed precision"
        },
        {
            title: "Heritage",
            subtitle: "Emirati tradition"
        }
    ];
    return (
        <>
            <section id="about" className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                        <div className="relative img-zoom rounded-sm overflow-hidden shadow-2xl">
                            <img src={aboutImage}
                                alt="Traditional Emirati tailor working on Kandura craftsmanship"
                                className="w-full h-[600px] object-cover" />
                            <div
                                className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-brand-black/80 to-transparent p-8">
                                <p className="text-white font-serif text-xl italic">"Where tradition meets precision"</p>
                            </div>
                        </div>


                        <div className="space-y-6">
                            <p className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm">Our Heritage</p>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-black leading-tight">
                                A Legacy of Emirati<br />Craftsmanship
                            </h2>
                            <div className="space-y-4 text-brand-charcoal/80 leading-relaxed">
                                <p>
                                    MEARAJ represents the pinnacle of traditional Emirati tailoring in Ajman. Founded on the
                                    principles of authenticity and precision, we have dedicated ourselves to preserving the art
                                    of Kandura craftsmanship while embracing modern elegance.
                                </p>
                                <p>
                                    Our in-house master tailors bring decades of experience, combining time-honored techniques
                                    with contemporary styling. Every stitch reflects our commitment to excellence, ensuring that
                                    each Kandura not only fits perfectly but honors the rich cultural heritage of the UAE.
                                </p>
                                <p>
                                    From selecting the finest breathable fabrics suited to the UAE climate to executing precise
                                    measurements that account for every detail, we transform traditional wear into a statement
                                    of personal sophistication. At MEARAJ, we don't just tailor garments—we craft experiences
                                    that embody dignity, comfort, and timeless style.
                                </p>
                            </div>


                            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-brand-gold/20">
                            {aboutData.map((item, index) => (
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-brand-gold rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-serif font-bold text-brand-black">{item.title}</h4>
                                        <p className="text-sm text-brand-charcoal/60">{item.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About