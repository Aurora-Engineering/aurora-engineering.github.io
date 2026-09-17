import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";

export const metadata: Metadata = {
  title: "Products | Aurora Engineering",
  robots: { index: false, follow: true },
};

export default function LegacyProjectTemplatePage() {
  return (
    <main className="project-template-page">
      <meta httpEquiv="refresh" content="0;url=/#products" />
      <SiteHeader />
      <section className="template-next">
        <div>
          <p className="template-section-label">Aurora Engineering products</p>
          <h1>Explore our capabilities.</h1>
        </div>
        <Link className="button button-light" href="/#products">Continue to products <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
