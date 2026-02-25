import React from 'react'
import Navbar from './components/Layout/Navbar'
import Hero from './components/Sections/Hero'
import About from './components/Sections/About'
import Services from './components/Sections/Services'
const App = () => {
  return (
    <>
      <div className="bg-brand-cream text-brand-charcoal font-sans antialiased selection:bg-brand-gold selection:text-white">
        <Navbar />
        <Hero />
        <About />
        <Services />
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
                  <div className="flex items-start space-x-4 group">
                    <div
                      className="shrink-0 w-12 h-12 rounded-full border-2 border-brand-gold text-brand-gold flex items-center justify-center font-serif font-bold text-xl group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                      1</div>
                    <div>
                      <h4 className="font-serif text-xl font-bold mb-2">Personalized Measurements</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Comprehensive 20-point measurement
                        system capturing every contour for precision fit.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div
                      className="shrink-0 w-12 h-12 rounded-full border-2 border-brand-gold text-brand-gold flex items-center justify-center font-serif font-bold text-xl group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                      2</div>
                    <div>
                      <h4 className="font-serif text-xl font-bold mb-2">Fabric Selection</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Choose from premium cotton, linen,
                        wool, or blends—selected for UAE climate comfort.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div
                      className="shrink-0 w-12 h-12 rounded-full border-2 border-brand-gold text-brand-gold flex items-center justify-center font-serif font-bold text-xl group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                      3</div>
                    <div>
                      <h4 className="font-serif text-xl font-bold mb-2">Expert Stitching</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Hand-finished details by our in-house
                        master tailors with decades of experience.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-gold/30">
                  <p className="text-sm text-brand-gold uppercase tracking-widest mb-4">Perfect For</p>
                  <div className="flex flex-wrap gap-3">
                    <span
                      className="px-4 py-2 bg-brand-charcoal border border-brand-gold/30 rounded-full text-sm">Daily
                      Wear</span>
                    <span
                      className="px-4 py-2 bg-brand-charcoal border border-brand-gold/30 rounded-full text-sm">Formal
                      Occasions</span>
                    <span
                      className="px-4 py-2 bg-brand-charcoal border border-brand-gold/30 rounded-full text-sm">Weddings</span>
                    <span
                      className="px-4 py-2 bg-brand-charcoal border border-brand-gold/30 rounded-full text-sm">Eid
                      Celebrations</span>
                    <span
                      className="px-4 py-2 bg-brand-charcoal border border-brand-gold/30 rounded-full text-sm">Corporate
                      Events</span>
                  </div>
                </div>


                <a href="#contact"
                  className="inline-block px-10 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 mt-4">
                  Get Your Kandura Tailored
                </a>
              </div>


              <div className="relative pb-10">
                <div className="img-zoom rounded-sm overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1594938298603-c8148c4729d7?auto=format&q=80&w=1200"
                    alt="Premium Kandura tailoring process with fabric and measurements"
                    className="w-full h-[700px] object-cover" />
                </div>

                <div
                  className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-brand-gold text-brand-black p-6 rounded-sm shadow-xl max-w-xs z-10">
                  <p className="font-serif text-2xl font-bold mb-1">20+ Years</p>
                  <p className="text-sm font-medium">Combined master tailor experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="gallery" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6">

            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">Our Work</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-black mb-6">Gallery</h2>
              <p className="text-brand-charcoal/70">A glimpse into our Ajman atelier—where premium fabrics transform into
                impeccable Kanduras.</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

              <div className="img-zoom relative group overflow-hidden rounded-sm aspect-4/5">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&q=80&w=800"
                  alt="Luxury Emirati Kandura shop interior with premium fabrics display"
                  className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-serif text-xl italic">Shop Interior</p>
                </div>
              </div>


              <div className="img-zoom relative group overflow-hidden rounded-sm aspect-4/5">
                <img src="https://images.unsplash.com/photo-1598556822060-3e736b671235?auto=format&q=80&w=800"
                  alt="Traditional Emirati tailor hands stitching Kandura with precision"
                  className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-serif text-xl italic">Master Craftsmanship</p>
                </div>
              </div>


              <div className="img-zoom relative group overflow-hidden rounded-sm aspect-4/5">
                <img src="https://images.unsplash.com/photo-1620626012053-1a5a4be44d6f?auto=format&q=80&w=800"
                  alt="Premium white Kandura fabric texture close-up" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-serif text-xl italic">Premium Fabrics</p>
                </div>
              </div>


              <div className="img-zoom relative group overflow-hidden rounded-sm aspect-4/5">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&q=80&w=800"
                  alt="Elegant white Kandura on male model in studio setting" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-serif text-xl italic">Finished Elegance</p>
                </div>
              </div>


              <div className="img-zoom relative group overflow-hidden rounded-sm aspect-4/5">
                <img src="https://images.unsplash.com/photo-1551731671-55c91152a51d?auto=format&q=80&w=800"
                  alt="Tailor measuring client for custom Kandura fitting" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-serif text-xl italic">Precision Fitting</p>
                </div>
              </div>


              <div className="img-zoom relative group overflow-hidden rounded-sm aspect-4/5">
                <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&q=80&w=800"
                  alt="Collection of finished Kanduras on display hangers" className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-serif text-xl italic">Ready Collection</p>
                </div>
              </div>
            </div>


          </div>
        </section>

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
                className="px-10 py-4 bg-brand-black text-white font-bold uppercase tracking-widest hover:bg-brand-charcoal transition-all duration-300 shadow-lg">
                Visit Our Store
              </a>
              <a href="#contact"
                className="px-10 py-4 border-2 border-brand-black text-brand-black font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        <aside className="py-12 bg-brand-black text-white border-b border-brand-gold/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-brand-gold/20 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h4 className="font-serif font-bold text-lg">Custom Orders</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Available</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-brand-gold/20 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-serif font-bold text-lg">Walk-In Friendly</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider">No Appointment Needed</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-brand-gold/20 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                  </svg>
                </div>
                <h4 className="font-serif font-bold text-lg">Expert Tailors</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider">On-Site</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-brand-gold/20 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="font-serif font-bold text-lg">Premium Finish</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Guaranteed</p>
              </div>
            </div>
          </div>
        </aside>


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


                <div className="space-y-6 bg-white p-8 rounded-sm shadow-sm border border-brand-gold/10">
                  <div className="flex items-start space-x-4">
                    <div
                      className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-brand-black mb-1">Address</h4>
                      <p className="text-brand-charcoal/70">Al Rashidiya, Ajman, United Arab Emirates</p>
                      <p className="text-sm text-brand-charcoal/50 mt-1">Near Ajman Corniche</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div
                      className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-brand-black mb-1">Store Hours</h4>
                      <p className="text-brand-charcoal/70">Saturday – Thursday: 9:00 AM – 10:00 PM</p>
                      <p className="text-brand-charcoal/70">Friday: 4:00 PM – 10:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div
                      className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-brand-black mb-1">Contact</h4>
                      <p className="text-brand-charcoal/70">+971 6 XXX XXXX</p>
                      <p className="text-brand-charcoal/50 text-sm">WhatsApp Available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div
                      className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-brand-black mb-1">Amenities</h4>
                      <p className="text-brand-charcoal/70">Walk-in Friendly • Ample Parking Available</p>
                      <p className="text-brand-charcoal/50 text-sm">Private Fitting Rooms • Air Conditioned</p>
                    </div>
                  </div>
                </div>
              </div>


              <div
                className="h-[500px] bg-brand-gray rounded-sm overflow-hidden shadow-lg border border-brand-gold/20 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.317265715103!2d55.43562731501448!3d25.40125198379977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5758a790b0c3%3A0x8f5fa5b5c5b5b5b5!2sAjman%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%" height="100%" style={{ border: '0' }} allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                  title="MEARAJ Location in Ajman, UAE">
                </iframe>
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-sm shadow-md">
                  <p className="text-brand-black font-bold text-sm">MEARAJ Ajman</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="contact" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <p className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">Get In Touch</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-black mb-6">Contact Us</h2>
              <p className="text-brand-charcoal/70">Have questions about our services or ready to schedule a custom
                fitting? Reach out to our team.</p>
            </div>

            <form className="space-y-6 bg-brand-cream p-8 md:p-12 rounded-sm border border-brand-gold/20"
              onsubmit="event.preventDefault(); alert('Thank you for your message. We will contact you shortly.');">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-brand-charcoal mb-2 uppercase tracking-wider">Name</label>
                  <input type="text" required
                    className="w-full px-4 py-3 bg-white border border-brand-gold/30 rounded-sm focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="Your Name" />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-brand-charcoal mb-2 uppercase tracking-wider">Phone</label>
                  <input type="tel" required
                    className="w-full px-4 py-3 bg-white border border-brand-gold/30 rounded-sm focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="+971 XX XXX XXXX" />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-brand-charcoal mb-2 uppercase tracking-wider">Email</label>
                <input type="email" required
                  className="w-full px-4 py-3 bg-white border border-brand-gold/30 rounded-sm focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="your@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-charcoal mb-2 uppercase tracking-wider">Service
                  Interest</label>
                <select
                  className="w-full px-4 py-3 bg-white border border-brand-gold/30 rounded-sm focus:outline-none focus:border-brand-gold transition-colors">
                  <option>Ready-Made Kandura</option>
                  <option>Custom Tailoring</option>
                  <option>Alterations</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-brand-charcoal mb-2 uppercase tracking-wider">Message</label>
                <textarea rows="4"
                  className="w-full px-4 py-3 bg-white border border-brand-gold/30 rounded-sm focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button type="submit"
                className="w-full py-4 bg-brand-black text-white font-bold uppercase tracking-widest hover:bg-brand-gold transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </section>


        <footer className="bg-brand-black text-white py-16 border-t border-brand-gold/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

              <div className="space-y-4">
                <h3 className="font-serif text-3xl font-bold text-brand-gold">MEARAJ</h3>
                <p className="text-gray-400 text-sm leading-relaxed italic">"Where tradition is tailored to perfection."
                </p>
                <p className="text-gray-500 text-sm">Premium Kandura craftsmanship in the heart of Ajman, UAE.</p>
              </div>


              <div>
                <h4 className="font-serif font-bold text-lg mb-4 text-brand-gold">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#home" className="hover:text-brand-gold transition-colors">Home</a></li>
                  <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
                  <li><a href="#services" className="hover:text-brand-gold transition-colors">Services</a></li>
                  <li><a href="#custom" className="hover:text-brand-gold transition-colors">Custom Tailoring</a></li>
                  <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</a></li>
                  <li><a href="#visit" className="hover:text-brand-gold transition-colors">Visit Us</a></li>
                </ul>
              </div>


              <div>
                <h4 className="font-serif font-bold text-lg mb-4 text-brand-gold">Services</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Ready-Made Kanduras</li>
                  <li>Custom Tailoring</li>
                  <li>In-House Alterations</li>
                  <li>Fabric Selection</li>
                  <li>Perfect Fit Guarantee</li>
                </ul>
              </div>


              <div>
                <h4 className="font-serif font-bold text-lg mb-4 text-brand-gold">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Al Rashidiya, Ajman, UAE</li>
                  <li>+971 6 XXX XXXX</li>
                  <li>info@mearaj.com</li>
                  <li className="pt-2">Sat-Thu: 9AM-10PM</li>
                  <li>Fri: 4PM-10PM</li>
                </ul>


                <div className="flex space-x-4 mt-6">
                  <a href="#"
                    className="w-10 h-10 bg-brand-charcoal rounded-full flex items-center justify-center hover:bg-brand-gold transition-colors"
                    aria-label="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#"
                    className="w-10 h-10 bg-brand-charcoal rounded-full flex items-center justify-center hover:bg-brand-gold transition-colors"
                    aria-label="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#"
                    className="w-10 h-10 bg-brand-charcoal rounded-full flex items-center justify-center hover:bg-brand-gold transition-colors"
                    aria-label="WhatsApp">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.56 5.93L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="pt-8 border-t border-brand-gold/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">© MEARAJ – Ajman, UAE. All rights reserved.</p>
              <p className="text-gray-600 text-xs">Crafted with precision and pride.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App