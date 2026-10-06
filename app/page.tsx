import { products } from "./products/product-data";
import SiteHeader from "./components/site-header";
import HorizontalGallery from "./components/horizontal-gallery";
import PublicationFigure from "./components/publication-figure";
import Link from "next/link";
import OfficeLocations from "./components/office-locations";

const capabilities = [
  {
    number: "01",
    title: "Autonomy & flight software",
    body: "Explainable, lightweight decision systems that move expert judgment onboard and operate within real mission constraints.",
    image: "/capabilities/autonomy.png",
    imageAlt: "Illustration of a spacecraft above Earth",
  },
  {
    number: "02",
    title: "Spacecraft operations",
    body: "Instrument commanding, in-flight calibration, telemetry monitoring, data correction, and day-to-day mission support.",
    image: "/capabilities/operations.png",
    imageAlt: "Illustration of a spacecraft operations control room",
  },
  {
    number: "03",
    title: "Modeling & simulation",
    body: "Physics-based and data-driven models that connect early design decisions to flight-ready hardware and software.",
    image: "/capabilities/simulation.png",
    imageAlt: "Illustration of a spacecraft simulation and its surrounding environment",
  },
  {
    number: "04",
    title: "Data systems & analytics",
    body: "Ground data processing, searchable science archives, anomaly detection, and resilient pipelines for mission-scale data.",
    image: "/capabilities/analytics.png",
    imageAlt: "Illustration of scientific data analysis displays",
  },
];

const serviceGroups = [
  {
    number: "01",
    title: "Data science, modeling & simulation",
    groups: [
      {
        label: "Artificial intelligence / machine learning",
        items: ["Recovery of missing or corrupted data", "Data fusion", "Super resolution", "Data correction", "Physics-informed AI / ML"],
      },
      {
        label: "Model-based systems engineering",
        items: ["Digital twins", "Sensitivity and parametric analyses", "System simulation and emulation", "Instrument response and tolerancing"],
      },
      {
        label: "Simulation and analysis",
        items: ["Spacecraft environment interactions", "System aging and lifetime prediction", "Noise and crosstalk estimation and reduction", "Material and surface effects", "Instrument and spacecraft performance modeling", "Uncertainty estimation"],
      },
    ],
  },
  {
    number: "02",
    title: "Spacecraft & mission operations systems",
    groups: [
      {
        label: "Spacecraft operations and autonomy",
        items: ["Multi-spacecraft trusted autonomy", "Onboard fault detection, categorization, recovery, and mitigation", "Event-driven operational activities", "Health and safety monitoring", "Instrument calibration"],
      },
      {
        label: "Mission ground systems",
        items: ["Science and mission operations centers", "Intelligent ground systems", "Science data processing", "Data assimilation, correction, storage, indexing, and distribution"],
      },
    ],
  },
  {
    number: "03",
    title: "Hardware, laboratories & facilities",
    groups: [
      {
        label: "Space flight hardware",
        items: ["Board layout and design", "Instrument and spacecraft design, build, test, and integration", "Cleanroom operations", "Lab and ground-support equipment automation"],
      },
      {
        label: "Laboratory support",
        items: ["Automated repetitive tests and experiments", "Outlier and limit analysis", "Searchable results databases", "Web-based researcher collaboration"],
      },
      {
        label: "Research facility management",
        items: ["Clean rooms and vacuum systems maintained to NASA flight-hardware standards", "Experiment scheduling and preparation", "Facility collaboration tools"],
      },
    ],
  },
];

const team = [
  {
    name: "Dr. Alex Barrie",
    role: "Founder & Chief Executive Officer",
    focus: "Spacecraft autonomy, plasma instrumentation, mission operations",
    href: "https://www.linkedin.com/in/alex-barrie-07892b28",
  },
  {
    name: "Stephen Kreisler",
    role: "Chief Technology Officer, Chief Information Officer",
    focus: "Flight and ground software, science operations systems",
    href: null,
  },
  {
    name: "Dr. Conrad Schiff",
    role: "Chief Scientist, Business Development Lead",
    focus: "Astrodynamics, formation flying, mission design, distributed systems",
    href: null,
  },
  {
    name: "Dr. Miles Bengtson",
    role: "Chief Technologist",
    focus: "",
    href: null,
  },
];

const partners = [
  { name: "NASA", logo: "/partners/nasa-meatball.png", href: "https://www.nasa.gov/", className: "is-nasa" },
  { name: "Southwest Research Institute", logo: "/partners/swri.svg", href: "https://www.swri.org/", className: "is-swri" },
  { name: "Air Force Research Laboratory", logo: "/partners/afrl-white.png", href: "https://www.afrl.af.mil/", className: "is-afrl" },
  { name: "CU LASP", logo: "/partners/cu-lasp-color.png", href: "https://lasp.colorado.edu/", className: "is-lasp" },
  { name: "Cal Poly Pomona", logo: "/partners/cal-poly-pomona.svg", href: "https://www.cpp.edu/", className: "is-cpp" },
  { name: "UC Santa Cruz", logo: "/partners/uc-santa-cruz.svg", href: "https://www.ucsc.edu/", className: "is-ucsc" },
  { name: "Aerojet Rocketdyne", logo: "/partners/aerojet-rocketdyne.svg", href: "https://www.l3harris.com/company/aerojet-rocketdyne", className: "is-rocketdyne" },
  { name: "KBR", logo: "/partners/kbr.svg", href: "https://www.kbr.com/", className: "is-kbr" },
  { name: "Heliophysics Digital Resource Library (HDRL)", logo: "/products/hdrl-logo.jpeg", href: null, className: "is-hdrl" },
];

const newsItems = [
  {
    author: "Dr. Alex Barrie",
    date: "July 23, 2026",
    dateTime: "2026-07-23",
    topic: "SmallSat 2026",
    image: null,
    imageAlt: "",
    title: "Meet Aurora at SmallSat",
    summary: "Alex will be at SmallSat to discuss spacecraft autonomy, AI, and the mission problems teams are working through.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7485875024948793344/",
  },
  {
    author: "Aurora Engineering",
    date: "July 19, 2026",
    dateTime: "2026-07-19",
    topic: "Team recognition",
    image: "/news/capstone-award.jpg",
    imageAlt: "CAPSTONE team award photograph from Aurora Engineering’s announcement",
    title: "CAPSTONE team receives NASA Space Flight Awareness Award",
    summary: "Aurora congratulates Liam Greenlee, Joseph Patton, and the CAPSTONE team on receiving NASA's Space Flight Awareness Award.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7484667525700653056/",
  },
  {
    author: "Aurora Engineering",
    date: "May 6, 2026",
    dateTime: "2026-05-06",
    topic: "Flight autonomy",
    image: "/news/medos-flight.jpg",
    imageAlt: "NASA spacecraft image shared with Aurora’s MEDOS flight announcement",
    title: "Aurora marks MEDOS flight demonstration milestone",
    summary: "Aurora recognizes a successful onboard autonomy milestone and thanks SwRI, CU LASP, and the MMS mission for their support.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7457834845172514816/",
  },
  {
    author: "Dr. Miles Bengtson",
    date: "May 6, 2026",
    dateTime: "2026-05-06",
    topic: "Engineering update",
    image: "/news/medos-flight.jpg",
    imageAlt: "NASA spacecraft image from the MEDOS flight demonstration announcement",
    title: "Trustworthy onboard autonomy demonstrated on a NASA mission",
    summary: "A lightweight onboard operations agent was demonstrated on a long-running NASA mission, with a broader demonstration planned next.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7457796144039882753/",
  },
];

const productShowcases: Record<string, { mediaIndex?: number; caption?: string; cover?: string; sourceLabel?: string }> = {
  medos: { mediaIndex: 1, caption: "MMS flight detection · MEDOS technical brief, Figure 2" },
  recap: { mediaIndex: 1, caption: "Planning and task allocation · ReCAP technical brief, Figure 2" },
  surfas: { mediaIndex: 0, caption: "Scene-layer fusion · SURFAS technical brief" },
  "mission-assistant-ai": { cover: "Mission knowledge.\nTraceable answers.", sourceLabel: "Operations AI white paper" },
  "telemetry-dashboard": { mediaIndex: 1, caption: "MMS FPI dashboard · Aurora technical brief, Figure 2" },
  "ground-systems": { cover: "From telemetry\nto mission control.", sourceLabel: "Engineering capability" },
  "ep-modeling-simulation": { cover: "Physics-informed\nengineering decisions.", sourceLabel: "Engineering capability" },
};

const productShowcaseOrder = ["medos", "recap", "surfas", "mission-assistant-ai", "telemetry-dashboard", "ground-systems", "ep-modeling-simulation"];
const featuredProducts = [...products].sort((a, b) => productShowcaseOrder.indexOf(a.slug) - productShowcaseOrder.indexOf(b.slug));

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="main-content">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-content">
          <h1>Detect the event.<br /><em>Respond onboard.</em></h1>
          <p>
            Aurora Engineering’s MEDOS software transforms spacecraft telemetry into explainable events and rational onboard responses. Flight-proven on NASA’s flagship MMS mission.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/products/medos">Explore MEDOS <Arrow /></Link>
            <a className="text-link" href="#capabilities">Our capabilities <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <figure className="hero-medos-figure">
          <figcaption>
            <span>MEDOS autonomous response</span>
            <a href="https://science.nasa.gov/science-research/science-enabling-technology/technology-highlights/new-onboard-capability-to-enable-autonomous-spacecraft-operations/" target="_blank" rel="noreferrer">NASA source <Arrow /></a>
          </figcaption>
          <img
            src="/medos-autonomous-response.jpg"
            alt="NASA diagram of MEDOS detecting penetrating radiation and commanding a protective response"
          />
          <div className="hero-response-readout">
            <div><span>01 / EVENT</span><strong>Penetrating radiation detected</strong></div>
            <div><span>02 / DECISION</span><strong>Instrument risk identified onboard</strong></div>
            <div><span>03 / RESPONSE</span><strong>Command instrument to safe mode</strong></div>
          </div>

        </figure>

      </section>

      <section className="partner-band" id="partnerships" aria-labelledby="partner-band-title">
        <div className="partner-band-copy">
          <p>Partners & collaborators</p>
          <h2 id="partner-band-title">Working across aerospace, academia, and government.</h2>
        </div>
        <div className="partner-logo-grid">
          {partners.map((partner) => {
            const logo = <img src={partner.logo} alt={partner.name} loading="lazy" />;
            return partner.href ? (
              <a className={`partner-logo ${partner.className}`} href={partner.href} target="_blank" rel="noreferrer" aria-label={partner.name} title={partner.name} key={partner.name}>{logo}</a>
            ) : (
              <div className={`partner-logo ${partner.className}`} title={partner.name} key={partner.name}>
                {logo}
                {partner.className === "is-hdrl" && <span>{partner.name}</span>}
              </div>
            );
          })}
        </div>
      </section>

      <section className="section capabilities" id="capabilities">
        <div className="section-intro">
          <div>
            <p className="section-kicker">What we do</p>
            <h2>Research and engineering<br />for the future of spaceflight.</h2>
          </div>
          <p>
            We work where physics, software, and operations meet, helping mission teams reduce uncertainty, respond faster, and get more science from every system.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.number}>
              <img className="capability-image" src={item.image} alt={item.imageAlt} loading="lazy" />
              <div className="capability-copy">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section team-section" id="leadership">
        <div className="section-intro">
          <div>
            <p className="section-kicker">Leadership</p>
            <h2>Our Leadership Team</h2>
          </div>
          <p>
            Decades of hands-on experience across NASA, the Department of Defense, and numerous flight missions, spanning spacecraft operations, advanced research, and mission-critical engineering.
          </p>
        </div>
        <div className="team-grid">
          {team.map((person) => (
            <article className="team-card" key={person.name}>
              <div className="person-copy">
                <h3>{person.name}</h3>
                {person.role && <strong>{person.role}</strong>}
                {person.focus && <p>{person.focus}</p>}
              </div>
              {person.href && <a className="person-profile-link" href={person.href} target="_blank" rel="noreferrer" aria-label={`View ${person.name} on LinkedIn`}>LinkedIn <Arrow /></a>}
            </article>
          ))}
        </div>
      </section>

      <section className="section service-matrix" id="services">
        <div className="section-intro">
          <div>
            <p className="section-kicker">Complete service portfolio</p>
            <h2>From theory to<br />mission support.</h2>
          </div>
          <p>
            Aurora supports clients from early design and simulation through flight operations, laboratory automation, and the stewardship of research facilities.
          </p>
        </div>
        <div className="service-groups">
          {serviceGroups.map((service) => (
            <details className="service-group" key={service.number}>
              <summary className="service-title">
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <span className="service-toggle" aria-hidden="true">+</span>
              </summary>
              <div className="service-columns">
                {service.groups.map((group) => (
                  <div key={group.label}>
                    <h4>{group.label}</h4>
                    <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
        <div className="engagement-panel" aria-labelledby="engagement-title">
          <div className="engagement-intro">
            <p className="section-kicker">How we engage</p>
            <h3 id="engagement-title">The right team for the next decision.</h3>
            <p>Aurora can lead a focused technical effort, embed alongside an established program, or transition a proven capability into a client&apos;s operational environment.</p>
          </div>
          <div className="engagement-grid">
            <article><span>01</span><strong>Focused technical sprint</strong><p>Resolve a bounded modeling, software, data, or mission-design question with reviewable evidence.</p></article>
            <article><span>02</span><strong>Embedded mission support</strong><p>Add experienced engineers and scientists to an integrated government, laboratory, university, or industry team.</p></article>
            <article><span>03</span><strong>Capability transition</strong><p>Adapt Aurora technology to client interfaces, assurance needs, data, and operational workflows.</p></article>
          </div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="section-intro products-intro">
          <div>
            <p className="section-kicker section-kicker-light">Products & capability briefs</p>
            <h2>Products & capabilities</h2>
          </div>
          <p>
            Explainable AI and autonomous systems for onboard decisions, cooperative planning, and mission operations. Explore the technical figures, flight evidence, and engineering briefs behind the work.
          </p>
        </div>
        <HorizontalGallery label="Products and capabilities" count={products.length} theme="dark">
          {featuredProducts.map((product) => {
            const showcase = productShowcases[product.slug];
            const media = showcase.mediaIndex !== undefined ? product.media[showcase.mediaIndex] : undefined;
            return (
            <article className="product-card" key={product.slug}>
              <div className="product-card-top">
                <span>{product.code}</span>
                <span>{product.category}</span>
              </div>
              {media ? (
                <PublicationFigure src={media.src} alt={media.alt} caption={showcase.caption!} />
              ) : (
                <div className="product-text-cover">
                  <span>{showcase.sourceLabel}</span>
                  <strong>{showcase.cover}</strong>
                </div>
              )}
              <div className="product-card-heading">
                {product.slug === "medos" && <img src="/products/medos-logo.png" alt="MEDOS logo" loading="lazy" />}
                <h3><Link href={`/products/${product.slug}`}>{product.shortTitle}</Link></h3>
              </div>
              {product.slug === "medos" && <p className="product-full-name">Module for the Event Driven Operation of Spacecraft</p>}
              <p>{product.deck}</p>
              <div className="product-card-foot">
                <span>{product.stage}</span>
                <Link href={`/products/${product.slug}`} aria-label={`Explore ${product.shortTitle} capability`}>Explore capability <Arrow /></Link>
              </div>
            </article>
          );})}
        </HorizontalGallery>
      </section>

      <section className="section news-section" id="news">
        <div className="section-intro news-intro">
          <div>
            <p className="section-kicker">Recent news</p>
            <h2>Updates from the people<br />doing the work.</h2>
          </div>
          <div className="news-intro-side">
            <p>Recent posts from Aurora Engineering and its team on mission milestones, technical demonstrations, and events.</p>
            <a href="https://www.linkedin.com/company/auroraengineeringllc/posts/" target="_blank" rel="noreferrer">
              View all on LinkedIn <Arrow />
            </a>
          </div>
        </div>
        <HorizontalGallery label="Aurora news" count={newsItems.length}>
          {newsItems.map((item, index) => (
            <a
              className={`news-card${index === 0 ? " news-card-featured" : ""}`}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={item.href}
            >
              {item.image ? <img className="news-image" src={item.image} alt={item.imageAlt} loading="lazy" /> : <div className="news-text-cover"><span>SmallSat</span><strong>2026</strong><p>Meet Aurora Engineering</p></div>}
              <div className="news-card-top">
                <span className="linkedin-mark" aria-hidden="true">in</span>
                <div>
                  <strong>{item.author}</strong>
                  <time dateTime={item.dateTime}>{item.date}</time>
                </div>
                <span className="news-arrow"><Arrow /></span>
              </div>
              <span className="news-topic">{item.topic}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <span className="news-read">Read post on LinkedIn <Arrow /></span>
            </a>
          ))}
        </HorizontalGallery>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="contact-main">
          <p className="section-kicker section-kicker-light">Contact us</p>
          <h2>Let’s solve the hard<br />problems in space.</h2>
          <p>Email our team to discuss your mission, an engineering challenge, or working with Aurora.</p>
        </div>
        <div className="contact-emails">
          <article>
            <h3>General & mission inquiries</h3>
            <a className="contact-email-address" href="mailto:info@aurora.engineering">info@aurora.engineering</a>
            <p>Tell us about your mission, technical needs, or partnership opportunities.</p>
          </article>
          <article>
            <h3>Careers</h3>
            <a className="contact-email-address" href="mailto:careers@auroraengineering.com">careers@auroraengineering.com</a>
            <p>Get in touch about joining the Aurora team.</p>
          </article>
        </div>
        <div className="contact-secondary">
          <div className="contact-actions">
            <a className="text-link text-link-light" href="https://www.linkedin.com/company/auroraengineeringllc" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a>
          </div>
          <div className="contact-office">
            <div><span>Office</span><p>15 Main St. Unit B<br />Wilton, NH 03086</p></div>
          </div>
        </div>
      </section>

      <footer>
        <a className="logo-panel footer-logo" href="#top" aria-label="Aurora Engineering home">
          <img src="/aurora-logo.png" alt="Aurora Engineering" />
        </a>
        <p>Spaceflight engineering services, from simulation to operation.</p>
        <div className="footer-links">
          <a href="#capabilities">Capabilities</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#leadership">Leadership</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </div>
        <OfficeLocations />
        <span>© 2026 Aurora Engineering LLC</span>
      </footer>
    </main>
  );
}
