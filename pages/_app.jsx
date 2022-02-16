import SiteLayout from '@components/layout/site/SiteLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  )
}

export default MyApp
