'use client';

import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';

import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from 'mdx-components';

import { source } from 'lib/source';

const ClientWrapper = ({ page }) => {

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
              {/* <MDX
                components={getMDXComponents({
                  // this allows you to link to other pages with relative file paths
                  a: createRelativeLink(source, page),
                })}
              /> */}
      </DocsBody>
    </DocsPage>
  );
};

export default ClientWrapper;