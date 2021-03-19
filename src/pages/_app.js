import '~/styles/tailwind.css'
import 'photoswipe/dist/photoswipe.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import 'react-lazy-load-image-component/src/effects/blur.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
