import nextra from 'nextra';

const withNextra = nextra({
  // nextra: {
  //   theme: 'nextra-theme-docs',
  //   themeConfig: './theme.config.jsx',
  // },
  // rootDir: './pages',
  // contentDirBasePath: '/pages',
  defaultShowCopyCode: true,
});

export default withNextra({
  reactStrictMode: true,
});

