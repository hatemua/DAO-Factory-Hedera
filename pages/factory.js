import Head from "next/head";
import Image from "next/image";
import dynamic from 'next/dynamic';
const BladeConnectorProvider = dynamic(
  () => import('../providers/BladeConnectorContext').then((mod) => mod.BladeConnectorProvider),
  { ssr: false }
);
import { Inter } from "next/font/google";
import Menu from "../components/Menu";
const Content = dynamic(() => import('../components/Content'), {
  ssr: false, // This will disable server-side rendering for this component
});
const Header = dynamic(() => import('../components/Header'), {
  ssr: false, // This will disable server-side rendering for this component
});
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
      <>
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui"
  />
  <meta
    name="description"
    content="Chameleon Admin is a modern Bootstrap 4 webapp & admin dashboard html template with a large number of components, elegant design, clean and organized code."
  />
  <meta
    name="keywords"
    content="admin template, Chameleon admin template, dashboard template, gradient admin template, responsive admin template, webapp, eCommerce dashboard, analytic dashboard"
  />
  <meta name="author" content="ThemeSelect" />
  <title>
    Bootstrap Cards - Chameleon Admin - Modern Bootstrap 4 WebApp &amp;
    Dashboard HTML Template + UI Kit
  </title>
  <link
    rel="apple-touch-icon"
    href="theme-assets/images/ico/apple-icon-120.png"
  />
  <link
    rel="shortcut icon"
    type="image/x-icon"
    href="theme-assets/images/ico/favicon.ico"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Muli:300,300i,400,400i,600,600i,700,700i%7CComfortaa:300,400,700"
    rel="stylesheet"
  />
  <link
    href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
    rel="stylesheet"
  />
  {/* BEGIN VENDOR CSS*/}
  <link rel="stylesheet" type="text/css" href="theme-assets/css/vendors.css" />
  {/* END VENDOR CSS*/}
  {/* BEGIN CHAMELEON  CSS*/}
  <link rel="stylesheet" type="text/css" href="theme-assets/css/app-lite.css" />
  {/* END CHAMELEON  CSS*/}
  {/* BEGIN Page Level CSS*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="theme-assets/css/core/menu/menu-types/vertical-menu.css"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="theme-assets/css/core/colors/palette-gradient.css"
  />
</>
      </Head>
      <BladeConnectorProvider>

      <Header />
      <Menu/>
      <Content/>
     
      </BladeConnectorProvider>
      <Footer/>
      <script src="theme-assets/vendors/js/vendors.min.js" type="text/javascript"></script>
   
    <script src="theme-assets/js/core/app-menu-lite.js" type="text/javascript"></script>
    <script src="theme-assets/js/core/app-lite.js" type="text/javascript"></script>
    </>
  );
}
