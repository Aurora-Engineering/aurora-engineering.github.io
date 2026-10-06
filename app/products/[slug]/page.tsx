import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, products } from "../product-data";
import SiteHeader from "../../components/site-header";
import OfficeLocations from "../../components/office-locations";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

const sectionLinks = [
  ["01", "Overview", "overview"],
  ["02", "Mission need", "challenge"],
  ["03", "Engineering approach", "approach"],
  ["04", "Evidence and uses", "evidence"],
  ["05", "Work with Aurora", "services"],
  ["06", "Source media", "resources"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return {
    title: `${product.shortTitle} | Aurora Engineering`,
    description: product.deck,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const [heroMedia, ...supportingMedia] = product.media;

  return (
    <main className="project-template-page product-whitepaper-page">
      <a className="skip-link" href="#overview">Skip to product overview</a>
      <SiteHeader />
      <div className="template-utility">
        <span>Aurora Engineering technical capability</span>
        <Link href="/#products">Return to products</Link>
      </div>

      <article>
        <section className="template-hero">
          <nav className="template-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><Link href="/#products">Products</Link><span>/</span><b>{product.shortTitle}</b>
          </nav>
          <div className="template-hero-grid">
            <div>
              <p className="template-label">{product.code} · {product.category}</p>
              <h1>{product.title}</h1>
              <p className="template-deck">{product.deck}</p>
            </div>
            <dl className="template-facts">
              <div><dt>Status</dt><dd>{product.stage}</dd></div>
              <div><dt>Delivery</dt><dd>{product.sponsor}</dd></div>
              <div><dt>Brief type</dt><dd>{product.sourceType}</dd></div>
              <div><dt>Engagement</dt><dd>Available for partner missions</dd></div>
            </dl>
          </div>
        </section>

        <figure className="template-hero-media product-hero-media">
          {heroMedia ? (
            <div className="product-hero-frame">
              <img src={heroMedia.src} alt={heroMedia.alt} />
            </div>
          ) : (
            <div className="template-media-art" role="img" aria-label={`${product.shortTitle} client-configurable capability graphic`}>
              <span className="template-media-orbit orbit-a" />
              <span className="template-media-orbit orbit-b" />
              <i />
              <strong>CLIENT-CONFIGURABLE CAPABILITY</strong>
              <small>Aurora can shape this engineering capability around your mission, data, interfaces, and operating environment.</small>
            </div>
          )}
          <figcaption>
            <span>Media 01 · {heroMedia ? "Source one-pager" : "Aurora capability brief"}</span>
            <span>{heroMedia?.caption ?? `${product.shortTitle} capability overview`}</span>
          </figcaption>
        </figure>

        <div className="template-body">
          <aside className="template-toc" aria-label="On this page">
            <p>On this page</p>
            {sectionLinks.map(([number, label, id]) => (
              <a href={`#${id}`} key={id}><span>{number}</span>{label}</a>
            ))}
          </aside>

          <div className="template-article">
            <section id="overview">
              <p className="template-section-label">01 · Overview</p>
              <h2>A transferable mission capability</h2>
              <p className="template-lead">{product.thesis}</p>
              <p>{product.deck}</p>
              <div className="template-callout">
                <span>Adaptable by design</span>
                <p>Aurora can apply the same engineering pattern to a partner&apos;s mission, then tailor the models, data sources, software interfaces, verification evidence, and level of operational authority to the project.</p>
              </div>
            </section>

            <section id="challenge">
              <p className="template-section-label">02 · Mission need</p>
              <h2>Why this work matters</h2>
              <p>{product.challenge}</p>
            </section>

            <section id="approach">
              <p className="template-section-label">03 · Engineering approach</p>
              <h2>How Aurora structures the work</h2>
              <p>Each engagement begins with the mission decision and available evidence. The implementation is then sized to the client&apos;s architecture, assurance needs, schedule, and operating environment.</p>
              <ol className="template-steps">
                {product.approach.map((item, index) => (
                  <li key={item.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><strong>{item.title}</strong><p>{item.body}</p></div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="evidence">
              <p className="template-section-label">04 · Evidence and uses</p>
              <h2>What the capability establishes</h2>
              <ul className="product-evidence-list">
                {product.outcomes.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <h3 className="product-subheading">Representative applications</h3>
              <div className="brief-applications product-applications">
                {product.applications.map((item) => <span key={item}>{item}</span>)}
              </div>
            </section>

            <section id="services">
              <p className="template-section-label">05 · Work with Aurora</p>
              <h2>Bring the capability into your project</h2>
              <p>Aurora&apos;s scientists and engineers can support a focused analysis, prototype a mission concept, integrate production software, or work alongside an existing prime, university, laboratory, or government team.</p>
              <div className="product-service-grid">
                {product.services.map((service, index) => (
                  <article key={service}><span>{String(index + 1).padStart(2, "0")}</span><strong>{service}</strong></article>
                ))}
              </div>
            </section>

            <section id="resources">
              <p className="template-section-label">06 · Source media and resources</p>
              <h2>Approved public material</h2>
              {supportingMedia.length > 0 && (
                <div className="product-media-gallery">
                  {supportingMedia.map((media, index) => (
                    <figure className={media.kind === "mark" ? "is-mark" : undefined} key={media.src}>
                      <div><img src={media.src} alt={media.alt} loading="lazy" /></div>
                      <figcaption><span>Media {String(index + 2).padStart(2, "0")}</span>{media.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
              {product.sources.length > 0 && (
                <div className="template-resources product-resources">
                  {product.sources.map((source) => (
                    <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>
                      <span><small>Public resource</small>{source.label}</span><Arrow />
                    </a>
                  ))}
                </div>
              )}
              <p className="product-source-note">{product.sourceNote}</p>
            </section>
          </div>
        </div>
      </article>

      <section className="template-next">
        <div><p className="template-section-label">A capability for your mission</p><h2>Bring Aurora the mission constraint.</h2></div>
        <a className="button button-light" href="mailto:info@aurora.engineering?subject=Aurora%20capability%20inquiry">Contact Aurora <Arrow /></a>
      </section>

      <footer className="brief-footer">
        <img src="/aurora-logo.png" alt="Aurora Engineering" />
        <OfficeLocations />
        <Link href="/">Return to Aurora Engineering</Link>
      </footer>
    </main>
  );
}
