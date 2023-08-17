import '@/styles/globals.css'
import { BrowserRouter } from 'react-router-dom'
import Sidenav from '../components/Sidenav'
export default function App({ Component, pageProps }) {
 return <Component {...pageProps} />
}


