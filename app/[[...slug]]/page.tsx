

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { source } from 'lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';

import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from 'mdx-components';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from 'lib/layout.shared';

export default async function Page(props: PageProps<'/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  console.log(page);

  const MDX = page.data.body;

  return (
    <DocsLayout tree={source.pageTree} {...baseOptions()}>
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDX
            components={getMDXComponents({
              // this allows you to link to other pages with relative file paths
              a: createRelativeLink(source, page),
            })}
          />
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}
export async function generateStaticParams() {
  return source.generateParams();
}
export async function generateMetadata(
  props: PageProps<'/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();
  return {
    title: page.data.title,
    description: page.data.description,
  };
}