import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'


const Icon = ({name, size=18}) => {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    message: <><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.6 9.6 0 0 1-4.1-.9L3 21l1.9-4A8.6 8.6 0 1 1 21 11.5Z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"/></>,
    whatsapp: <><path d="M20.2 3.8A10 10 0 0 0 4.4 16.3L3 21l4.8-1.3A10 10 0 1 0 20.2 3.8Z"/><path d="M8.2 7.7c.2-.4.4-.4.7-.4h.6c.2 0 .4.1.5.4l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.3 0 .5.5.9 1.2 1.6 2.1 2.1.2.1.4.1.5 0l.7-.5c.2-.1.4-.1.6 0l1.9.8c.3.1.4.3.4.5v.6c0 .3 0 .5-.4.7-.4.3-1 .4-1.5.3-1.2-.2-2.6-1-3.9-2.3-1.3-1.3-2.1-2.7-2.3-3.9-.1-.5 0-1.1.3-1.5Z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.8" r=".7" fill="currentColor" stroke="none"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    bag: <><path d="M6 8h12l1 12H5L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></>,
    spark: <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Zm7 14 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}
const ArrowRight = ({size=18}) => <Icon name="arrow" size={size}/>
const MessageCircle = ({size=18}) => <Icon name="message" size={size}/>
const WhatsApp = ({size=18}) => <Icon name="whatsapp" size={size}/>
const Instagram = ({size=18}) => <Icon name="instagram" size={size}/>
const MapPin = ({size=18}) => <Icon name="pin" size={size}/>
const ShoppingBag = ({size=18}) => <Icon name="bag" size={size}/>
const Sparkles = ({size=18}) => <Icon name="spark" size={size}/>
const Menu = ({size=18}) => <Icon name="menu" size={size}/>
const X = ({size=18}) => <Icon name="close" size={size}/>

const WA = '263772579054'
const waLink = `https://wa.me/${WA}`
const instagramLinks = [
  'https://www.instagram.com/avalanchecollections09/',
  'https://www.instagram.com/avalanchecollection/'
]

const images = {
  hero: '/assets/Screenshot 2026-09-30 125316.webp',
  blueDress: '/assets/Screenshot 2026-09-30 125231.webp',
  blackDress: '/assets/Screenshot 2026-09-30 125238.webp',
  whiteDress: '/assets/Screenshot 2026-09-30 125247.webp',
  purpleDress: '/assets/Screenshot 2026-09-30 125252.webp',
  set: '/assets/Screenshot 2026-09-30 125258.webp',
  suit: '/assets/Screenshot 2026-09-30 125303.webp',
  wrap: '/assets/Screenshot 2026-09-30 125309.webp',
  blueSet: '/assets/Screenshot 2026-09-30 125321.webp',
  printDress: '/assets/Screenshot 2026-09-30 125328.webp',
  orange: '/assets/Screenshot 2026-09-30 125345.webp',
  blackLook: '/assets/Screenshot 2026-09-30 125355.webp',
  brown: '/assets/Screenshot 2026-09-30 125400.webp'
}

const products = [
  { name: 'Featured Look 01', image: images.blueDress, tag: 'Featured' },
  { name: 'Featured Look 02', image: images.blackDress, tag: 'Featured' },
  { name: 'Featured Look 03', image: images.whiteDress, tag: 'Featured' },
  { name: 'Featured Look 04', image: images.purpleDress, tag: 'New Look' },
  { name: 'Featured Look 05', image: images.set, tag: 'Look' },
  { name: 'Featured Look 06', image: images.wrap, tag: 'Look' },
  { name: 'Featured Look 07', image: images.blueSet, tag: 'Look' },
  { name: 'Featured Look 08', image: images.printDress, tag: 'Look' },
  { name: 'Featured Look 09', image: images.orange, tag: 'New Look' },
  { name: 'Featured Look 10', image: images.blackLook, tag: 'Look' },
  { name: 'Featured Look 11', image: images.brown, tag: 'Look' },
  { name: 'Featured Look 12', image: images.suit, tag: 'Look' }
]

const categories = [
  { title: 'Dresses', image: images.orange },
  { title: 'Sets & Co-ords', image: images.blueSet },
  { title: 'Statement Looks', image: images.purpleDress },
  { title: 'Workwear', image: images.suit },
  { title: 'New Arrivals', image: images.blackLook }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav-wrap">
        <nav className="nav glass">
          <a href="#home" className="brand" onClick={closeMenu} aria-label="Avalanche Collections home">
            <img src="/assets/logo.webp" alt="Avalanche Collections" />
          </a>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#collections" onClick={closeMenu}>Collections</a>
            <a href="#new" onClick={closeMenu}>New Arrivals</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#visit" onClick={closeMenu}>Visit</a>
            <a className="mobile-wa" href={waLink} target="_blank" rel="noreferrer" onClick={closeMenu}>WhatsApp</a>
          </div>

          <div className="nav-actions">
            {instagramLinks.map((link, i) => (
              <a key={link} href={link} target="_blank" rel="noreferrer" aria-label={`Instagram ${i + 1}`} className="icon-link">
                <Instagram size={18} />
              </a>
            ))}
            <a className="outline-button nav-wa" href={waLink} target="_blank" rel="noreferrer">
              <WhatsApp size={17} />
              <span>Shop on WhatsApp</span>
              <ArrowRight size={16} />
            </a>
          </div>

          <button className="menu-button" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero photo-section" style={{ '--bg': `url("${images.hero}")` }}>
          <div className="hero-backdrop" />
          <div className="hero-content">
            <p className="eyebrow">STYLE FOR EVERY YOU</p>
            <h1>Fashion<br /><span>That Moves</span><br />With You.</h1>
            <p className="hero-copy">Discover women’s fashion at Avalanche Collections, with in-store shopping at The Waves Plaza in central Harare.</p>
            <div className="hero-actions">
              <a className="gold-button" href={waLink} target="_blank" rel="noreferrer">
                <WhatsApp size={18} /> Shop on WhatsApp <ArrowRight size={16} />
              </a>
              <a className="ghost-button" href="#collections">Explore Collections <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="hero-side-note"><span>01</span><span>03</span><span>05</span></div>
          <div className="hero-signature">Find your<br />next look.</div>

          <div className="promise-strip glass">
            <div><Sparkles /><span><b>Women’s Fashion</b><small>Explore the collection</small></span></div>
            <div><ShoppingBag /><span><b>In-Store Shopping</b><small>The Waves Plaza</small></span></div>
            <div><MapPin /><span><b>Harare</b><small>Central Avenue</small></span></div>
            <div><WhatsApp /><span><b>WhatsApp</b><small>+263 77 257 9054</small></span></div>
          </div>
        </section>

        <section id="collections" className="section photo-section categories-section" style={{ '--bg': `url("${images.purpleDress}")` }}>
          <div className="section-wash" />
          <div className="section-heading">
            <div>
              <p className="eyebrow">SHOP BY CATEGORY</p>
              <h2>Our Collections</h2>
            </div>
            <a href="#new" className="text-link">View the collection <ArrowRight size={17} /></a>
          </div>
          <div className="category-grid">
            {categories.map(category => (
              <a className="category-card" href="#new" key={category.title}>
                <img src={category.image} alt={category.title} loading="lazy" />
                <div className="card-overlay" />
                <div className="category-label"><b>{category.title}</b><span>Explore <ArrowRight size={15} /></span></div>
              </a>
            ))}
          </div>
        </section>

        <section id="new" className="section photo-section arrivals-section" style={{ '--bg': `url("${images.blackLook}")` }}>
          <div className="section-wash darker" />
          <div className="arrivals-layout">
            <div className="arrivals-copy glass-soft">
              <p className="eyebrow">NEW ARRIVALS</p>
              <h2>Just In</h2>
              <p>Browse selected looks from Avalanche Collections. For availability, sizes and current pricing, enquire directly on WhatsApp.</p>
              <a className="gold-button" href={waLink} target="_blank" rel="noreferrer">Ask on WhatsApp <ArrowRight size={16} /></a>
            </div>
            <div className="product-grid">
              {products.slice(0, 8).map(product => (
                <a className="product-card glass" href={waLink} target="_blank" rel="noreferrer" key={product.name}>
                  <div className="product-image"><img src={product.image} alt={product.name} loading="lazy" /><span>{product.tag}</span></div>
                  <div className="product-meta"><h3>{product.name}</h3><span>Enquire <ArrowRight size={14} /></span></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section photo-section editorial-section" style={{ '--bg': `url("${images.suit}")` }}>
          <div className="section-wash" />
          <div className="editorial-card glass-soft">
            <p className="eyebrow">AVALANCHE COLLECTIONS</p>
            <h2>Style is personal.<br /><span>Make it yours.</span></h2>
            <p>A women’s clothing store in central Harare, bringing fashion closer to you through in-store shopping and direct WhatsApp enquiries.</p>
            <div className="editorial-points">
              <span><Sparkles size={16} /> Women’s fashion</span>
              <span><ShoppingBag size={16} /> In-store shopping</span>
              <span><MessageCircle size={16} /> Direct WhatsApp enquiries</span>
            </div>
            <a className="ghost-button" href={waLink} target="_blank" rel="noreferrer">Chat with Avalanche <ArrowRight size={16} /></a>
          </div>
        </section>

        <section id="visit" className="section visit-section photo-section" style={{ '--bg': `url("${images.blueSet}")` }}>
          <div className="section-wash" />
          <div className="visit-card glass-soft">
            <p className="eyebrow">VISIT THE STORE</p>
            <h2>Find Avalanche<br /><span>in Harare.</span></h2>
            <div className="address-row"><MapPin /><div><b>The Waves Plaza</b><span>88 Central Avenue, between 7th & 8th Street<br />Shop D, next to the Pharmacy<br />Harare, Zimbabwe</span></div></div>
            <div className="visit-actions">
              <a className="gold-button" href={waLink} target="_blank" rel="noreferrer"><WhatsApp size={18} /> WhatsApp Us</a>
              <a className="ghost-button" href="tel:+263772579054">Call +263 77 257 9054</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer photo-section" style={{ '--bg': `url("${images.brown}")` }}>
        <div className="footer-wash" />
        <div className="footer-inner">
          <img className="footer-logo" src="/assets/logo.webp" alt="Avalanche Collections" />
          <p>Women’s fashion · Harare · The Waves Plaza</p>
          <div className="footer-links">
            {instagramLinks.map(link => <a key={link} href={link} target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a>)}
            <a href={waLink} target="_blank" rel="noreferrer"><WhatsApp size={17} /> WhatsApp</a>
          </div>
          <small>© {new Date().getFullYear()} Avalanche Collections. All rights reserved.</small>
        </div>
      </footer>

      <a className="floating-wa" href={waLink} target="_blank" rel="noreferrer" aria-label="Chat with Avalanche Collections on WhatsApp">
        <WhatsApp size={27} />
      </a>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
