import { Footer, Layout, Navbar } from 'nextra-theme-docs'
// import { Banner, Head } from 'nextra/components'

// @ts-expect-error
import { getPageMap } from 'nextra/page-map';
// @ts-expect-error
import 'nextra-theme-docs/style.css';
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 
// const banner = <Banner storageKey="some-key">released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<span>srating.io API V1 Documentation</span>}
    // ... Your additional navbar options
  />
)
const footer = <Footer><span>SRATING LLC</span></Footer>
 
export default async function RootLayout({ children }) {

  const pageMap = await getPageMap();
  // console.log(pageMap);
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
      <head>
        <meta name="theme-color" content="#000000" />
        <meta
          name="srating API Documentation"
          content="Sports data API Documentation for college NCAA basketball"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>sRating Docs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="srating API Docs" />
        <meta property="og:description" content="srating API Documentation" />
      </head>
      {/* <Head>
      </Head> */}
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/esmalleydev/srating.io-docs/tree/master"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}