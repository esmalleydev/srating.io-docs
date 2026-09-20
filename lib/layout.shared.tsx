import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <img src="/logo192.png" alt="" width={24} height={24} />
          <span>srating.io API</span>
        </>
      ),
    },
    githubUrl: 'https://github.com/esmalleydev/srating.io-docs',
    links: [
      {
        text: 'Pricing',
        url: 'https://srating.io/pricing?view=api',
        external: true,
      },
    ],
  };
}
