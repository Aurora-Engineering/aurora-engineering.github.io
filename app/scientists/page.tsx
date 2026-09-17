import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "Leadership | Aurora Engineering",
  description:
    "Meet Aurora Engineering’s leadership team, bringing decades of experience across NASA, the Department of Defense, and flight missions.",
  openGraph: {
    title: "Leadership | Aurora Engineering",
    description:
      "Our leadership team connects spacecraft operations, advanced research, and mission-critical engineering.",
  },
  twitter: {
    card: "summary",
    title: "Leadership | Aurora Engineering",
    description: "Our Leadership Team",
  },
};

const scientists = [
  {
    number: "01",
    initials: "AB",
    name: "Dr. Alexander C. Barrie",
    familiarName: "Alex Barrie",
    role: "Founder & Chief Executive Officer",
    affiliation: "Aurora Engineering",
    photo: "/team/alex-barrie.jpg",
    bio: "Alex leads Aurora’s work across spacecraft autonomy, plasma instrumentation, and mission operations. His recent research connects flight-proven instrumentation experience with transparent onboard decision systems, including the MEDOS framework demonstrated with NASA’s Magnetospheric Multiscale mission.",
    focus: ["Spacecraft autonomy", "Plasma instrumentation", "Mission operations", "Flight systems"],
    work: [
      {
        type: "Journal paper · 2025",
        title: "The Module for Event Driven Operations on Spacecraft (MEDOS)",
        href: "https://ntrs.nasa.gov/citations/20250002215",
      },
      {
        type: "AIAA presentation · 2025",
        title: "Production of Flight Instruments for Multi-Satellite Constellations",
        href: "https://ntrs.nasa.gov/citations/20240016141",
      },
    ],
    profile: "https://www.linkedin.com/in/alex-barrie-07892b28",
  },
  {
    number: "02",
    initials: "SK",
    name: "Stephen “Steve” Kreisler",
    familiarName: "Stephen Kreisler",
    role: "Chief Technology Officer, Chief Information Officer",
    affiliation: "Aurora Engineering at NASA Goddard",
    photo: null,
    bio: "Stephen develops scientific software and data-system capabilities for heliophysics missions. His published work includes Python packages for the HERMES mission and cloud-oriented data processing for NASA’s Space Weather Science Operations Center.",
    focus: ["Scientific Python", "Heliophysics data", "Mission ground systems", "Open science"],
    work: [
      {
        type: "AGU poster · 2023",
        title: "Functionality of the Python Packages for the HERMES Mission",
        href: "https://ntrs.nasa.gov/citations/20230017957",
      },
      {
        type: "AGU conference paper · 2023",
        title: "Open Science in Action: The Role of SWxSOC",
        href: "https://ntrs.nasa.gov/citations/20230017954",
      },
    ],
    profile: null,
  },
  {
    number: "03",
    initials: "CS",
    name: "Dr. Conrad Schiff",
    familiarName: "Conrad Schiff",
    role: "Chief Scientist, Business Development Lead",
    affiliation: "Scientific collaborator · NASA Goddard veteran",
    photo: null,
    bio: "Conrad’s career spans orbital mechanics, formation flying, and mission design for programs including Clementine, WMAP, JWST, and MMS. His current research record includes distributed mission architectures, operational atmospheric-drag modeling, and the dynamics of interplanetary dust.",
    focus: ["Astrodynamics", "Formation flying", "Mission design", "Distributed systems"],
    work: [
      {
        type: "NASA mission feature",
        title: "MMS Formation and Magnetic Reconnection",
        href: "https://www.nasa.gov/missions/mms/nasas-mms-formation-will-give-unique-look-at-magnetic-reconnection/",
      },
      {
        type: "NASA presentation · 2024",
        title: "Operational Challenges Using Atmospheric Drag Models",
        href: "https://ntrs.nasa.gov/citations/20240007224",
      },
      {
        type: "NASA presentation · 2023",
        title: "On the Ultimate Fate of Interplanetary Dust",
        href: "https://ntrs.nasa.gov/citations/20230005156",
      },
    ],
    profile: null,
  },
  {
    number: "04",
    initials: "CH",
    name: "Dr. Carrie Hill",
    familiarName: "Carrie Hill",
    role: "Research Director",
    affiliation: "Aurora Engineering",
    photo: null,
    bio: "Carrie works at the intersection of experiment development and numerical simulation. Her research includes spacecraft-environment interactions, electric-propulsion plume modeling, spacecraft charging, and optical instrument development for NASA’s PACE mission.",
    focus: ["Spacecraft simulation", "Electric propulsion", "Numerical modeling", "Instrument development"],
    work: [
      {
        type: "IEPC conference paper · 2022",
        title: "Current Capabilities of AFRL’s Spacecraft Simulation Tool",
        href: "https://ntrs.nasa.gov/citations/20220008291",
      },
      {
        type: "IEEE IGARSS paper · 2023",
        title: "Optical and Detector Design of the Ocean Color Instrument for the NASA PACE Mission",
        href: "https://2023.ieeeigarss.org/TempDev/view_paper.php?PaperNum=4891",
      },
    ],
    profile: "https://www.linkedin.com/in/carrie-hill",
  },
];

export default function LeadershipPage() {
  return (
    <main className="scientists-page">
      <a className="skip-link" href="#scientist-profiles">Skip to leadership profiles</a>
      <SiteHeader />

      <section className="scientists-hero">
        <div className="scientists-hero-grid" aria-hidden="true" />
        <div className="scientists-hero-copy">
          <p className="brief-kicker">Aurora Engineering · Leadership</p>
          <h1>Our Leadership<br />Team</h1>
          <p>
            Decades of hands-on experience across NASA, the Department of Defense, and numerous flight missions, spanning spacecraft operations, advanced research, and mission-critical engineering.
          </p>
        </div>
        <div className="scientists-signal" aria-hidden="true"><i /><i /><i /><i /></div>
      </section>

      <section className="scientist-roster" id="scientist-profiles" aria-label="Leadership profiles">
        <div className="scientist-roster-intro">
          <p className="section-kicker">Leadership profiles</p>
          <h2>Experience across<br />research and flight.</h2>
          <p>Meet the people leading Aurora’s team, with selected work from their research and mission experience.</p>
        </div>

        {scientists.map((scientist) => (
          <article className="scientist-profile" id={scientist.familiarName.toLowerCase().replaceAll(" ", "-")} key={scientist.name}>
            <div className={`scientist-portrait${scientist.photo ? " has-photo" : ""}`}>
              <span>{scientist.initials}</span>
              {scientist.photo && <img src={scientist.photo} alt={`Portrait of ${scientist.familiarName}`} />}
              <i aria-hidden="true" />
            </div>

            <div className="scientist-copy">
              <div className="scientist-name-row">
                <div>
                  <span>{scientist.number} · {scientist.role}</span>
                  <h2>{scientist.name}</h2>
                  <strong>{scientist.affiliation}</strong>
                </div>
                {scientist.profile && <a href={scientist.profile} target="_blank" rel="noreferrer" aria-label={`Open public profile for ${scientist.familiarName}`}>Profile ↗</a>}
              </div>

              <p className="scientist-bio">{scientist.bio}</p>

              <div className="scientist-focus">
                <span>Research focus</span>
                <div>{scientist.focus.map((item) => <b key={item}>{item}</b>)}</div>
              </div>

              <div className="scientist-work">
                <span>Selected work</span>
                <div>
                  {scientist.work.map((work) => (
                    <a href={work.href} target="_blank" rel="noreferrer" key={work.href}>
                      <small>{work.type}</small>
                      <strong>{work.title}</strong>
                      <b aria-hidden="true">↗</b>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="scientists-contact">
        <div>
          <p className="brief-section-label">Work with the team</p>
          <h2>Connect research<br />to mission reality.</h2>
        </div>
        <a className="button button-light" href="mailto:info@aurora.engineering">Start a conversation <span aria-hidden="true">↗</span></a>
      </section>

      <footer className="brief-footer">
        <img src="/aurora-logo.png" alt="Aurora Engineering" />
        <p>15 Main St. Unit B · Wilton, NH 03086</p>
        <Link href="/">Return home</Link>
      </footer>
    </main>
  );
}
