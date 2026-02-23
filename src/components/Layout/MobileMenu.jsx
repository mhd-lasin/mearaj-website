import React from 'react'

const MobileMenu = ({ navLinks }) => {
  return (
    <div id="mobile-menu"
      className="md:hidden mt-4 bg-brand-cream border border-brand-gold/20 rounded-sm shadow-xl p-6 absolute left-6 right-6 top-full animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="flex flex-col space-y-5">
        {navLinks.map((link) => (
          <a key={link.name}
            href={link.href}
            className="text-sm font-medium text-brand-charcoal hover:text-brand-gold transition-colors uppercase tracking-widest">{link.name}</a>
        ))}
      </div>
    </div>
  )
}

export default MobileMenu