import {
  Rocket,
  Check,
  ArrowRight,
  Lightbulb,
  Compass,
  Telescope,
  Globe,
  Satellite,
  Target,
  Wrench,
  Search,
  Share2,
  ChevronRight,
  Mail,
} from 'lucide-react';
import MotionReveal from '../components/MotionReveal';
import HorizontalScroller from '../components/HorizontalScroller';
import FaqAccordion from '../components/FaqAccordion';
import AnimatedCounter from '../components/AnimatedCounter';
import LogoMarquee from '../components/LogoMarquee';
import HomeHero from '../components/HomeHero';
import NewsletterForm from '../components/NewsletterForm';

const faqItems = [
  {
    question: "What is NASA's primary mission?",
    answer:
      "NASA's mission is to explore the unknown in air and space, innovate for the benefit of humanity, and inspire the world through discovery. That work spans four domains operating simultaneously: human spaceflight, robotic science missions, Earth observation, and aeronautics research — with findings from each informing the others.",
  },
  {
    question: 'How is NASA funded, and what does it cost?',
    answer:
      'NASA is funded through annual U.S. federal appropriations — approximately $25 billion per year, representing less than half a percent of the total federal budget. All scientific data, research findings, and imagery produced by NASA are publicly owned and publicly available at no cost.',
  },
  {
    question: 'What is the Artemis program, and when will humans return to the Moon?',
    answer:
      'Artemis is NASA\'s program to return humans to the Moon for the first time since Apollo 17 in 1972 — and to establish a sustainable lunar presence that serves as the proving ground for eventual crewed Mars missions. Artemis I, an uncrewed test of the Space Launch System and Orion spacecraft, completed a 25-day lunar orbit mission in November 2022. Crewed Artemis missions are in active development.',
  },
  {
    question: "How can anyone access NASA's scientific data and imagery?",
    answer:
      'All NASA scientific data is publicly available at no cost. Primary access points include the NASA Open Data Portal at data.nasa.gov, the NASA Technical Reports Server, and individual mission data archives. All NASA imagery is in the public domain — free to use, share, and build on without a license.',
  },
  {
    question: 'Can civilians apply to become NASA astronauts?',
    answer:
      'Yes. NASA periodically opens astronaut candidate applications to qualified U.S. citizens. Minimum requirements include a master\'s degree in a STEM field and at least two years of relevant professional experience — or 1,000 or more hours as a jet pilot-in-command. Visit nasa.gov/astronauts for current application cycles and full requirements.',
  },
  {
    question: 'How can students and educators engage with NASA?',
    answer:
      'NASA operates internships, fellowships, citizen science projects, teacher professional development programs, and free STEM curricula for students from kindergarten through graduate school. Visit nasa.gov/learning-resources for current opportunities organized by education level.',
  },
  {
    question: "What is NASA's relationship with commercial space companies?",
    answer:
      'NASA partners with commercial companies — including through the Commercial Crew Program — to provide transportation services to and from the International Space Station. These partnerships allow NASA to direct its core resources toward frontier exploration and science while enabling a growing commercial space economy. NASA sets the mission priorities and maintains public ownership of all scientific research; commercial partners provide contracted services.',
  },
];

const pillars = [
  {
    icon: <Rocket size={22} aria-hidden="true" />,
    title: 'Explore',
    body: 'Return humans to the Moon via Artemis and build the foundation for crewed Mars missions.',
  },
  {
    icon: <Telescope size={22} aria-hidden="true" />,
    title: 'Discover',
    body: 'Deploy robotic explorers across the solar system to answer fundamental science questions.',
  },
  {
    icon: <Globe size={22} aria-hidden="true" />,
    title: 'Protect',
    body: "Monitor Earth's climate, weather, and ecosystems through satellite observation.",
  },
  {
    icon: <Wrench size={22} aria-hidden="true" />,
    title: 'Innovate',
    body: 'Develop next-generation propulsion, aircraft, and space technologies.',
  },
  {
    icon: <Lightbulb size={22} aria-hidden="true" />,
    title: 'Inspire',
    body: 'Connect students, developers, and the public through open data and STEM programs.',
  },
];

const missionDomains = [
  {
    tag: 'Human Spaceflight',
    title: 'Artemis',
    body: 'NASA is returning humans to the Moon for the first time since Apollo 17, building the infrastructure for a sustained lunar presence — and using what\'s learned there as the foundation for crewed Mars missions.',
    benefit: 'Returning humans to the Moon, and laying the groundwork for Mars.',
    cta: 'Learn About Artemis',
    image: '/images/general/022_artemis-base-camp-3-2.png',
    alt: 'Artist concept of NASA Artemis lunar base camp with Orion spacecraft on the Moon surface',
  },
  {
    tag: 'Orbital Research',
    title: 'International Space Station',
    body: 'The ISS is humanity\'s orbiting laboratory — a platform for microgravity research in medicine, biology, physics, and materials science that cannot be replicated on Earth, continuously crewed since November 2000.',
    benefit: 'Advancing human health and proving that nations can explore together.',
    cta: 'Explore the ISS',
    video: '/videos/video-3-iss-in-orbit-human-spaceflight-mission-card.mp4',
    image: '/images/general/025_iss074e0325229_large.jpg',
    alt: 'International Space Station in orbit above Earth with solar panels fully deployed',
  },
  {
    tag: 'Robotic Exploration',
    title: 'Robotic Solar System Exploration',
    body: "NASA's robotic fleet — Perseverance on Mars, Voyager in interstellar space, Europa Clipper bound for Jupiter — gathers data no human can yet collect in person, from the surface of other worlds to the edge of the solar system.",
    benefit: 'Answering the fundamental questions: Are we alone? Where did we come from?',
    cta: 'View Robotic Missions',
    image: '/images/general/mission-domain-card-mars-surface-rover-exploration.png',
    alt: 'NASA Mars rover traversing the rocky red Martian surface',
  },
  {
    tag: 'Earth Science',
    title: 'Earth Science',
    body: "NASA's fleet of Earth-observing satellites monitors climate change, sea-level rise, wildfires, drought, and weather systems — delivering the data scientists and governments need to understand and respond to planetary-scale challenges.",
    benefit: 'Protecting life on Earth using the same capabilities that explore space.',
    cta: 'Explore Earth Science',
    image: '/images/general/mission-domain-card-earth-observation-satellite.png',
    alt: 'Earth-observing satellite in orbit above the planet monitoring climate and weather',
  },
  {
    tag: 'Aeronautics',
    title: 'Aeronautics Research',
    body: "NASA's aeronautics division is developing quieter, more efficient aircraft and next-generation air traffic systems — advancing sustainable aviation technology through research conducted at centers including Glenn, Langley, Armstrong, and Ames.",
    benefit: 'Making air travel safer, faster, and cleaner for everyone who flies.',
    cta: 'Learn About Aeronautics',
    image: '/images/general/aeronautics-news-card-biofuel-research-aircraft.png',
    alt: 'Experimental NASA aeronautics research aircraft in flight',
  },
];

const processStages = [
  {
    num: '01',
    label: 'Ask',
    icon: <Search size={26} aria-hidden="true" />,
    title: 'Scientific question',
    body: 'NASA convenes the world\'s leading scientists to identify the most consequential unanswered questions of the generation.',
  },
  {
    num: '02',
    label: 'Design',
    icon: <Target size={26} aria-hidden="true" />,
    title: 'Rigorous review',
    body: 'Mission concepts advance through scientific merit, engineering, technology-readiness, and budget review. Only those that clear all four gates move forward.',
  },
  {
    num: '03',
    label: 'Build',
    icon: <Wrench size={26} aria-hidden="true" />,
    title: '10 field centers',
    body: 'JPL, Goddard, Glenn, Langley, Ames and more collaborate with commercial partners and international agencies to design, test, and build.',
  },
  {
    num: '04',
    label: 'Explore',
    icon: <Compass size={26} aria-hidden="true" />,
    title: 'Operate for decades',
    body: 'Real-time mission control teams manage spacecraft across millions and billions of miles, responding to conditions no simulation anticipated.',
  },
  {
    num: '05',
    label: 'Share',
    icon: <Share2 size={26} aria-hidden="true" />,
    title: 'Open science',
    body: 'All NASA scientific data is published openly and free of charge — accessible to any researcher, developer, educator, or curious person anywhere.',
  },
];

const differentiators = [
  {
    index: '01',
    heading: 'Private companies explore for profit. NASA explores for humanity.',
    body: "You've watched commercial space companies reshape the industry — and wondered where NASA fits. The answer: at the foundation. NASA's congressional mandate directs it toward science and exploration that is too long-horizon, too high-risk, or too publicly beneficial to be driven by commercial return.",
    points: [
      'Operates on a multi-decade science roadmap, not a quarterly earnings cycle',
      'All scientific data is legally required to be publicly available — free, in perpetuity',
      'Over 2,000 commercial technology spinoffs adopted globally',
      'Coordinates exploration with partner agencies across 27+ nations',
    ],
  },
  {
    index: '02',
    heading: '67 years of firsts — and the next chapter is already underway.',
    body: 'No commercial company has landed a human on the Moon. No commercial company maintains a continuous human presence in orbit. No commercial company has successfully landed a rover on Mars, deployed an observatory at the second Lagrange point, or sent a probe into interstellar space. NASA has done all of it.',
    points: [
      'Only organization to have landed humans on the Moon — 12 astronauts across Apollo',
      'Five successful Mars rover landings: Sojourner, Spirit, Opportunity, Curiosity, Perseverance',
      'Hubble Space Telescope: more than three decades of science from low Earth orbit',
      'James Webb Space Telescope: the most powerful space observatory ever built',
    ],
  },
  {
    index: '03',
    heading: "NASA doesn't just explore for scientists. It explores for everyone.",
    body: "You may not be an astronaut or an astrophysicist — but NASA's work is already part of your daily life. Weather forecasts. GPS navigation. The photograph of Earth from space that permanently changed how humanity sees itself. These came from a public investment in exploration.",
    points: [
      'All imagery is in the public domain — free to use, share, and build on',
      'Citizen science programs let anyone contribute to active NASA research',
      'STEM education programs serve students from kindergarten through graduate school',
      'NASA Open Data Portal offers thousands of scientific datasets to researchers and developers',
    ],
  },
];

const resourceCards = [
  {
    tag: 'Earth',
    title: 'NASA Satellite Data Tracks Unprecedented Wildfire Spread Across Southeast Asia',
    summary:
      'Daily Earth observation satellite imagery from NASA is helping researchers and emergency responders track active fires and monitor air quality impacts in real time.',
    date: 'April 23, 2026',
    video: '/videos/video-4-southeast-asia-wildfire-satellite-imagery-news-card.mp4',
    image: '/images/general/010_seasiafires_tmo_20260422_th.jpg',
    alt: 'Satellite imagery of wildfire smoke plumes spreading across Southeast Asia',
  },
  {
    tag: 'Aeronautics',
    title: "NASA's ACCESS II Research Shows Sustainable Aviation Biofuel Cuts Soot Emissions",
    summary:
      "Researchers at NASA's Armstrong and Glenn centers completed flight testing of an alternative jet biofuel blend that reduced particulate emissions — a step toward quieter, cleaner commercial aviation.",
    date: 'April 23, 2026',
    video: '/videos/video-6-aeronautics-research-aircraft-biofuel-access-ii-news-card.mp4',
    image: '/images/general/aeronautics-news-card-biofuel-research-aircraft.png',
    alt: 'NASA aeronautics research aircraft in flight testing sustainable biofuel',
  },
  {
    tag: 'Opportunities',
    title: 'NASA Internship Applications Now Open — Work at the Forefront of Exploration',
    summary:
      "NASA's internship program places students from across the U.S. at its 10 field centers — from Goddard and JPL to Glenn and Langley. Applications for the next cohort are now being accepted.",
    date: 'April 23, 2026',
    image: '/images/general/internship-opportunities-card-mission-control-environment.png',
    alt: 'NASA mission control environment representing NASA internship opportunities',
  },
  {
    tag: 'Mission Update',
    title: 'Artemis II Crew Prepares for the First Crewed Lunar Journey Since Apollo',
    summary:
      'The four astronauts selected for Artemis II have completed integrated simulation training for their journey around the Moon.',
    date: 'April 23, 2026',
    image: '/images/general/023_a2crew-7ff19d.jpg',
    alt: 'Artemis II crew during simulation training',
  },
  {
    tag: 'Science',
    title: 'James Webb Space Telescope Reveals Structure in One of the Universe\'s Earliest Galaxies',
    summary:
      'New infrared observations from the Webb telescope offer the clearest view yet of galaxy formation in the first billion years after the Big Bang.',
    date: 'April 23, 2026',
    image: '/images/general/006_STScI-01KM5VPG2R1WX1SY7ASDJ9JEV5.jpg',
    alt: 'James Webb Space Telescope infrared image of an early-universe galaxy',
  },
];

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'GovernmentOrganization',
  name: 'National Aeronautics and Space Administration',
  alternateName: 'NASA',
  url: 'https://www.nasa.gov',
  description:
    'NASA explores space, Earth, and the universe — advancing human spaceflight, robotic planetary science, Earth observation, and aeronautics research for the benefit of all humanity.',
  foundingDate: '1958',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '300 E Street SW',
    addressLocality: 'Washington',
    addressRegion: 'DC',
    postalCode: '20546',
    addressCountry: 'US',
  },
  telephone: '+12023580001',
  sameAs: [
    'https://www.facebook.com/NASA',
    'https://www.instagram.com/nasa',
    'https://twitter.com/nasa',
    'https://www.youtube.com/nasa',
    'https://en.wikipedia.org/wiki/NASA',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NASA',
  url: 'https://www.nasa.gov',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.nasa.gov/search/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: typeof item.answer === 'string' ? item.answer : '',
    },
  })),
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ========== HERO ========== */}
      <HomeHero />

      {/* ========== TRUST / MILESTONE BAND ========== */}
      <section className="section stats-band stats-band--split-accent">
        <div className="container">
          <div className="stats-band-grid">
            <div className="stats-band-item">
              <div className="stats-band-value">
                <AnimatedCounter value={67} suffix="+" />
              </div>
              <div className="stats-band-label">
                Years of continuous space exploration
              </div>
            </div>
            <div className="stats-band-item">
              <div className="stats-band-value">
                <AnimatedCounter value={10} />
              </div>
              <div className="stats-band-label">Field centers across the U.S.</div>
            </div>
            <div className="stats-band-item">
              <div className="stats-band-value">24/7</div>
              <div className="stats-band-label">Human presence in orbit since 2000</div>
            </div>
            <div className="stats-band-item">
              <div className="stats-band-value">
                <AnimatedCounter value={2000} suffix="+" />
              </div>
              <div className="stats-band-label">
                Commercial tech spinoffs from NASA research
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PARTNER MARQUEE ========== */}
      <MotionReveal as="section" className="trust-strip">
        <div className="container trust-strip-inner">
          <h2>Trusted by the World&apos;s Leading Space Organizations</h2>
          <LogoMarquee ariaLabel="NASA partners">
            <div className="logo-marquee-item">
              <span className="logo-marquee-item-text">ESA</span>
            </div>
            <div className="logo-marquee-item">
              <span className="logo-marquee-item-text">JAXA</span>
            </div>
            <div className="logo-marquee-item">
              <span className="logo-marquee-item-text">Canadian Space Agency</span>
            </div>
            <div className="logo-marquee-item">
              <span className="logo-marquee-item-text">SpaceX</span>
            </div>
            <div className="logo-marquee-item">
              <span className="logo-marquee-item-text">Boeing</span>
            </div>
            <div className="logo-marquee-item">
              <span className="logo-marquee-item-text">NOAA</span>
            </div>
            <div className="logo-marquee-item">
              <span className="logo-marquee-item-text">National Science Foundation</span>
            </div>
          </LogoMarquee>
        </div>
      </MotionReveal>

      {/* ========== CORE VALUE PROP / PILLARS ========== */}
      <MotionReveal as="section" id="products" className="section section--overlay-mesh">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">U.S. Space Exploration Programs</span>
            <h2 className="section-title">The Science That Pushes Humanity Forward</h2>
            <p className="section-lede">
              We live at an inflection point. Questions that once seemed purely
              philosophical — Is there life on Mars? Can humans survive beyond
              Earth? What shaped the universe in its first moments? — now have
              technical pathways to answers.
            </p>
          </div>
          <div className="pillars-grid">
            {pillars.map((pillar, i) => (
              <MotionReveal key={pillar.title} delay={i * 0.08}>
                <article
                  className="pillar-card"
                  
                  
                >
                  <span className="icon-chip">{pillar.icon}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
          <div
            style={{
              marginTop: 'var(--spacing-xl)',
              textAlign: 'center',
            }}
          >
            <a
              href="#services"
              className="btn btn-primary"
              
              
            >
              <Rocket size={18} aria-hidden="true" />
              <span>Explore Our Missions</span>
            </a>
          </div>
        </div>
      </MotionReveal>

      {/* ========== MISSION DOMAIN CARDS ========== */}
      <MotionReveal
        as="section"
        id="services"
        className="section section-alt section--overlay-glow"
      >
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title">
              Space Exploration Programs That Change What We Know
            </h2>
            <p className="section-lede">
              Five integrated domains — from the lunar surface to interstellar
              space, from Earth&apos;s atmosphere to the dawn of the universe.
            </p>
          </div>
          <div className="services-grid">
            {missionDomains.map((domain, i) => (
              <MotionReveal key={domain.title} delay={i * 0.08}>
                <article
                  className="service-card"
                  
                  
                >
                  <div className="service-card-media">
                    {domain.video ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={domain.image}
                        aria-hidden="true"
                      >
                        <source src={domain.video} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={domain.image} alt={domain.alt} />
                    )}
                  </div>
                  <span className="service-card-tag">{domain.tag}</span>
                  <h3>{domain.title}</h3>
                  <p>{domain.body}</p>
                  <span className="service-card-benefit">{domain.benefit}</span>
                  <a href="#newsletter" className="card-cta">
                    <span>{domain.cta}</span>
                    <ChevronRight size={16} aria-hidden="true" />
                  </a>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </MotionReveal>

      {/* ========== MISSION SPOTLIGHT ========== */}
      <MotionReveal
        as="section"
        id="work"
        className="section spotlight-section section--overlay-orb"
      >
        <div className="container">
          <div className="spotlight-grid">
            <div
              className="spotlight-media"
              
            >
              <img
                src="/images/general/003_25382-pia24173-1600.jpg"
                alt="NASA Perseverance rover on the surface of Mars in Jezero Crater collecting rock samples"
              />
            </div>
            <div>
              <span className="section-eyebrow">Mission Spotlight</span>
              <h2 className="section-title" style={{ color: '#fff' }}>
                Perseverance: Searching for Ancient Life on Mars
              </h2>
              <p>
                In February 2021, NASA&apos;s Perseverance rover touched down in
                Jezero Crater — an ancient Martian river delta chosen because
                geological evidence suggests it once held liquid water, and
                possibly conditions for life. Alongside its core science
                mission, Perseverance deployed Ingenuity: the first powered,
                controlled aircraft ever flown on another planet.
              </p>
              <div className="spotlight-stats">
                <div className="spotlight-stat">
                  <span className="spotlight-stat-label">Landed</span>
                  <span className="spotlight-stat-value">Feb 18, 2021 · Jezero Crater</span>
                </div>
                <div className="spotlight-stat">
                  <span className="spotlight-stat-label">Rock samples</span>
                  <span className="spotlight-stat-value">
                    <AnimatedCounter value={23} /> sealed for Earth return
                  </span>
                </div>
                <div className="spotlight-stat">
                  <span className="spotlight-stat-label">Ingenuity flights</span>
                  <span className="spotlight-stat-value">
                    <AnimatedCounter value={72} /> — first flight on another world
                  </span>
                </div>
                <div className="spotlight-stat">
                  <span className="spotlight-stat-label">Status</span>
                  <span className="spotlight-stat-value">Active · 4+ Earth years</span>
                </div>
              </div>
              <div style={{ marginTop: 'var(--spacing-lg)' }}>
                <a
                  href="#newsletter"
                  className="btn btn-primary"
                  
                  
                >
                  <span>Read the Perseverance Story</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </MotionReveal>

      {/* ========== PROCESS / 5-STAGE PIPELINE ========== */}
      <MotionReveal
        as="section"
        id="process"
        className="section process-section section--overlay-grid"
      >
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Our Process</span>
            <h2 className="section-title">
              From Bold Question to World-Changing Discovery
            </h2>
            <p className="section-lede">
              Every NASA mission follows a disciplined lifecycle refined over 67
              years — from a fundamental scientific question through launch,
              discovery, and public benefit.
            </p>
          </div>
          <div className="process-pipeline">
            {processStages.map((stage, i) => (
              <MotionReveal key={stage.num} delay={i * 0.08}>
                <div className="process-step">
                  <div className="process-step-num" aria-hidden="true">
                    {stage.num}
                  </div>
                  <div className="process-step-label">{stage.label}</div>
                  <h3 className="process-step-title">{stage.title}</h3>
                  <p className="process-step-body">{stage.body}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
          <div
            style={{ marginTop: 'var(--spacing-2xl)', textAlign: 'center' }}
          >
            <a
              href="#services"
              className="btn btn-primary"
              
              
            >
              <Rocket size={18} aria-hidden="true" />
              <span>Explore Our Missions</span>
            </a>
          </div>
        </div>
      </MotionReveal>

      {/* ========== DIFFERENTIATION — WHY NASA ========== */}
      <MotionReveal
        as="section"
        id="pricing"
        className="section section-alt section--overlay-mesh"
      >
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">How We&apos;re Different</span>
            <h2 className="section-title">Why NASA — And No One Else</h2>
          </div>
          <div className="differentiation-list">
            {differentiators.map((diff, i) => (
              <MotionReveal key={diff.index} delay={i * 0.08}>
                <article className="differentiation-part">
                  <div className="differentiation-index" aria-hidden="true">
                    {diff.index}
                  </div>
                  <div className="differentiation-body">
                    <h3>{diff.heading}</h3>
                    <p>{diff.body}</p>
                    <ul>
                      {diff.points.map((pt) => (
                        <li key={pt}>
                          <Check size={18} aria-hidden="true" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </MotionReveal>

      {/* ========== RESOURCES — HORIZONTAL SCROLLER ========== */}
      <MotionReveal
        as="section"
        id="testimonials"
        className="section section--overlay-spotlight"
      >
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Latest From NASA</span>
            <h2 className="section-title">Follow Every Discovery as It Happens</h2>
            <p className="section-lede">
              From mission updates to space science explainers — stay current
              with exploration, or{' '}
              <a
                href="https://www.nasa.gov/news"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}
              >
                visit the NASA Newsroom
              </a>{' '}
              for the full archive.
            </p>
          </div>
          <HorizontalScroller ariaLabel="Latest NASA stories">
            {resourceCards.map((card) => (
              <article
                key={card.title}
                className="resource-card"
                style={{ minWidth: 320, maxWidth: 360, flexShrink: 0 }}
                
                
              >
                <div className="resource-card-media">
                  {card.video ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={card.image}
                      aria-hidden="true"
                    >
                      <source src={card.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={card.image} alt={card.alt} />
                  )}
                </div>
                <span className="resource-tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
                  {card.summary}
                </p>
                <div className="resource-card-meta">
                  <span>{card.date}</span>
                  <a
                    href="https://www.nasa.gov/news"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-link"
                  >
                    <span>Read More</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </HorizontalScroller>
        </div>
      </MotionReveal>

      {/* ========== FAQ ========== */}
      <MotionReveal as="section" className="section faq-section section-alt">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Frequently Asked Questions</span>
            <h2 className="section-title">
              You&apos;ve Got Questions About Space. We&apos;ve Got Answers.
            </h2>
          </div>
          <FaqAccordion items={faqItems} />
          <p
            style={{
              marginTop: 'var(--spacing-xl)',
              textAlign: 'center',
              color: 'var(--color-text-muted)',
              fontStyle: 'italic',
            }}
          >
            Have a different question? Visit{' '}
            <a
              href="https://www.nasa.gov/contact/"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}
            >
              NASA Help
            </a>
            .
          </p>
        </div>
      </MotionReveal>

      {/* ========== FINAL CTA / NEWSLETTER ========== */}
      <section id="newsletter" className="cta-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.3,
            zIndex: 0,
            mixBlendMode: 'screen',
          }}
        >
          <source src="/videos/video-5-explore-our-missions-cta-section-background-loop.mp4" type="video/mp4" />
        </video>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="cta-grid">
            <MotionReveal>
              <span className="section-eyebrow">Stay Connected to the Mission</span>
              <h2 className="section-title" style={{ color: '#fff' }}>
                Join Millions Following Humanity&apos;s Greatest Adventure
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'var(--text-lg)' }}>
                Sign up for NASA mission updates, discovery alerts, and
                exploration highlights — delivered directly to your inbox.
              </p>
              <ol className="cta-steps">
                <li>Submit your name and email in the form</li>
                <li>Receive a welcome message with links to NASA&apos;s most active current missions</li>
                <li>Get alerts for major discoveries, launches, and exploration milestones as they happen</li>
              </ol>
            </MotionReveal>
            <MotionReveal delay={0.12}>
              <NewsletterForm />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* ========== ALTERNATIVE CTA ========== */}
      <MotionReveal as="section" className="alt-cta">
        <div className="container">
          <span className="section-eyebrow">Not ready to subscribe?</span>
          <h2 className="section-title" style={{ marginInline: 'auto' }}>
            Explore Every Mission — No Signup Required
          </h2>
          <p
            className="section-lede"
            style={{ textAlign: 'center', marginInline: 'auto' }}
          >
            Browse every active and historical mission in NASA&apos;s space
            exploration catalog — from Apollo to Artemis, Hubble to Webb,
            Viking to Perseverance. Open to everyone. Free forever.
          </p>
          <div style={{ marginTop: 'var(--spacing-lg)' }}>
            <a
              href="https://www.nasa.gov"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              
              
            >
              <Satellite size={18} aria-hidden="true" />
              <span>Browse All NASA Missions</span>
            </a>
          </div>
        </div>
      </MotionReveal>
    </>
  );
}
