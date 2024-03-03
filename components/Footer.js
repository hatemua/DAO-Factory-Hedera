



import Head from "next/head";
import Image from "next/image";

export default function Footer() {
  return (
    <>
 <>
  <div
    className="main-menu menu-fixed menu-light menu-accordion    menu-shadow "
    data-scroll-to-active="true"
    data-img="theme-assets/images/backgrounds/02.jpg"
  >
    <div className="navbar-header">
      <ul className="nav navbar-nav flex-row">
        <li className="nav-item mr-auto">
          <a className="navbar-brand" href="index.html">
            <img
              className="brand-logo"
              alt="Chameleon admin logo"
              src="theme-assets/images/logo/logo.png"
            />
            <h3 className="brand-text">Chameleon</h3>
          </a>
        </li>
        <li className="nav-item d-md-none">
          <a className="nav-link close-navbar">
            <i className="ft-x" />
          </a>
        </li>
      </ul>
    </div>
    <div className="main-menu-content">
      <ul
        className="navigation navigation-main"
        id="main-menu-navigation"
        data-menu="menu-navigation"
      >
        <li className=" nav-item">
          <a href="index.html">
            <i className="ft-home" />
            <span className="menu-title" data-i18n="">
              Dashboard
            </span>
          </a>
        </li>
        <li className=" nav-item">
          <a href="charts.html">
            <i className="ft-pie-chart" />
            <span className="menu-title" data-i18n="">
              Charts
            </span>
          </a>
        </li>
        <li className=" nav-item">
          <a href="icons.html">
            <i className="ft-droplet" />
            <span className="menu-title" data-i18n="">
              Icons
            </span>
          </a>
        </li>
        <li className="active">
          <a href="cards.html">
            <i className="ft-layers" />
            <span className="menu-title" data-i18n="">
              Cards
            </span>
          </a>
        </li>
        <li className=" nav-item">
          <a href="buttons.html">
            <i className="ft-box" />
            <span className="menu-title" data-i18n="">
              Buttons
            </span>
          </a>
        </li>
        <li className=" nav-item">
          <a href="typography.html">
            <i className="ft-bold" />
            <span className="menu-title" data-i18n="">
              Typography
            </span>
          </a>
        </li>
        <li className=" nav-item">
          <a href="tables.html">
            <i className="ft-credit-card" />
            <span className="menu-title" data-i18n="">
              Tables
            </span>
          </a>
        </li>
        <li className=" nav-item">
          <a href="form-elements.html">
            <i className="ft-layout" />
            <span className="menu-title" data-i18n="">
              Form Elements
            </span>
          </a>
        </li>
        <li className=" nav-item">
          <a href="https://themeselection.com/demo/chameleon-admin-template/documentation">
            <i className="ft-book" />
            <span className="menu-title" data-i18n="">
              Documentation
            </span>
          </a>
        </li>
      </ul>
    </div>
    <a
      className="btn btn-danger btn-block btn-glow btn-upgrade-pro mx-1"
      href="https://themeselection.com/products/chameleon-admin-modern-bootstrap-webapp-dashboard-html-template-ui-kit/"
      target="_blank"
    >
      Download PRO!
    </a>
    <div className="navigation-background" />
  </div>
  <footer className="footer footer-static footer-light navbar-border navbar-shadow">
    <div className="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2">
      <span className="float-md-left d-block d-md-inline-block">
        2018 © Copyright{" "}
        <a
          className="text-bold-800 grey darken-2"
          href="https://themeselection.com"
          target="_blank"
        >
          ThemeSelection
        </a>
      </span>
      <ul className="list-inline float-md-right d-block d-md-inline-blockd-none d-lg-block mb-0">
        <li className="list-inline-item">
          <a
            className="my-1"
            href="https://themeselection.com/"
            target="_blank"
          >
            {" "}
            More themes
          </a>
        </li>
        <li className="list-inline-item">
          <a
            className="my-1"
            href="https://themeselection.com/support"
            target="_blank"
          >
            {" "}
            Support
          </a>
        </li>
        <li className="list-inline-item">
          <a
            className="my-1"
            href="https://themeselection.com/products/chameleon-admin-modern-bootstrap-webapp-dashboard-html-template-ui-kit/"
            target="_blank"
          >
            {" "}
            Purchase
          </a>
        </li>
      </ul>
    </div>
  </footer>
</>



    </>
  );
}
