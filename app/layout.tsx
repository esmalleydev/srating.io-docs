import { Layout, useThemeConfig } from 'nextra-theme-docs';
import { getPageMap } from 'nextra/page-map';
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 
// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
// const navbar = (
//   <Navbar
//     logo={<b>Nextra</b>}
//     // ... Your additional navbar options
//   />
// )
// const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>
 
export default async function RootLayout({ children }) {
  const themeConfig = useThemeConfig();
  // useEffect(() => {
  //     window.dataLayer = window.dataLayer || [];
  //     function gtag(){window.dataLayer.push(arguments);}
  //     gtag('js', new Date());
  //     gtag('config', 'AW-11331182972');
  //   }, []);
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      {/* <Head>
      </Head> */}
      <body>
        <Layout
        pageMap={await getPageMap()}
          {...themeConfig}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}