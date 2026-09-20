import Link from 'next/link';
// must match the layout variant used in app/layout.tsx
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/notebook/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
};

// DocsLayout renders the header, the sidebar and its children as siblings, and it is
// DocsPage that claims the main content column. Without it the 404 renders as a bare
// sibling of the sidebar and ends up inside the sidebar instead of the content area.
export default function NotFound() {
  return (
    <DocsPage
      toc={[]}
      tableOfContent={{ enabled: false }}
      tableOfContentPopover={{ enabled: false }}
      breadcrumb={{ enabled: false }}
      footer={{ enabled: false }}
    >
      <DocsTitle>Page not found</DocsTitle>
      <DocsDescription>
        That page does not exist, or it has moved.
      </DocsDescription>
      <DocsBody>
        <p>
          Head back to the <Link href="/">getting started guide</Link>, or use the search
          at the top of the page to find an endpoint.
        </p>
      </DocsBody>
    </DocsPage>
  );
}
