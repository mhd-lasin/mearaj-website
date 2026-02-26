import React from 'react'
import interiorImg from '../../assets/img/shop-interior.jpg'
import tailorImg from '../../assets/img/master-craftmanship.jpg'
import fabricImg from '../../assets/img/premium-fabrics.jpg'
import finishedImg from '../../assets/img/finished-elegance.jpg'
import fittingImg from '../../assets/img/precision-fitting.jpg'
import collectionImg from '../../assets/img/ready-collection.jpg'
const Gallery = () => {
    const galleryItems = [
        {
            src: interiorImg,
            alt: "Luxury Emirati Kandura shop interior with premium fabrics display",
            title: "Shop Interior"
        },
        {
            src: tailorImg,
            alt: "Traditional Emirati tailor hands stitching Kandura with precision",
            title: "Master Craftsmanship"
        },
        {
            src: fabricImg,
            alt: "Premium white Kandura fabric texture close-up",
            title: "Premium Fabrics"
        },
        {
            src: finishedImg,
            alt: "Elegant white Kandura on male model in studio setting",
            title: "Finished Elegance"
        },
        {
            src: fittingImg,
            alt: "Tailor measuring client for custom Kandura fitting",
            title: "Precision Fitting"
        },
        {
            src: collectionImg,
            alt: "Collection of finished Kanduras on display hangers",
            title: "Ready Collection"
        }
    ];

    return (
        <section id="gallery" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">Our Work</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-black mb-6">Gallery</h2>
                    <p className="text-brand-charcoal/70">A glimpse into our Ajman atelier—where premium fabrics transform into
                        impeccable Kanduras.</p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {galleryItems.map((item, index) => (
                        <div key={index} className="img-zoom relative group overflow-hidden rounded-2xl aspect-4/5">
                            <img src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover" />
                            <div
                                className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-white font-serif text-xl italic">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery
