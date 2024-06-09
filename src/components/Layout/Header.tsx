"use client";
import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header: any = document.getElementById("header");
      if (window.scrollY > 1) {
        header.setAttribute("data-stuck", "true");
      } else {
        header.removeAttribute("data-stuck");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <img
        loading="eager"
        src="/zento/assets/images/svg-icons.svg?v=1b89f44b98"
        alt="Social Icons"
        style={{ display: "none" }}
      />

      <nav className="mobile main-nav">
        <div className="close">
          <svg className="icon">
            <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#close-icon" />
          </svg>
        </div>
        <div className="logo">
          <a href="https://ghost.estudiopatagon.com/zento">
            <img
              src="https://ghost.estudiopatagon.com/zento/content/images/2024/01/logo-zento.svg"
              alt="Zento"
              width={170}
              height={60}
              decoding="async"
            />
          </a>
        </div>
        <ul className="menu underline-effect">
          <li className="nav-home current-menu-item">
            <a href="https://ghost.estudiopatagon.com/zento/">Home</a>
          </li>
          <li className="nav-style-guide">
            <a href="https://ghost.estudiopatagon.com/zento/style-guide/">
              Style Guide ✨
            </a>
          </li>
          <li className="nav-explore-our-tags">
            <a href="https://ghost.estudiopatagon.com/zento/explore-our-tags/">
              Explore our Tags
            </a>
          </li>
          <li className="nav-text-only-post">
            <a href="https://ghost.estudiopatagon.com/zento/text-only/">
              Text Only Post
            </a>
          </li>
          <li className="nav-classic-post-image">
            <a href="https://ghost.estudiopatagon.com/zento/classic/">
              Classic Post (image)
            </a>
          </li>
          <li className="nav-vertical-post">
            <a href="https://ghost.estudiopatagon.com/zento/vertical/">
              Vertical Post
            </a>
          </li>
          <li className="nav-fullwidth-post">
            <a href="https://ghost.estudiopatagon.com/zento/fullwidth/">
              Fullwidth Post
            </a>
          </li>
          <li className="nav-no-sidebar-post">
            <a href="https://ghost.estudiopatagon.com/zento/nosidebar/">
              No Sidebar Post
            </a>
          </li>
          <li className="nav-home-demos">
            <a href="https://themes.estudiopatagon.com/selector/zento-ghost/">
              Home Demos 🚀
            </a>
          </li>
        </ul>
        <div className="account">
          <a
            href="https://ghost.estudiopatagon.com/zento/signin"
            className="link-button"
          >
            Login
          </a>
          <a
            href="https://ghost.estudiopatagon.com/zento/subscribe"
            className="epcl-button"
          >
            Subscribe
          </a>
        </div>
      </nav>
      <div className="menu-overlay"></div>
      <div className="wrapper">
        {/* data-stuck */}
        <header id="header" className="minimalist enable-sticky">
          {/* start: .menu-wrapper */}
          <div className="menu-wrapper">
            <div className="grid-container">
              <div className="epcl-flex grid-wrapper">
                {/* start: .main-nav */}
                <nav className="main-nav">
                  <ul className="menu">
                    <li className="search-menu-item">
                      <span className="link" data-ghost-search="">
                        <svg className="icon main-color large">
                          <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#search-icon" />
                        </svg>
                        <span className="hide-on-mobile">Quick Search...</span>
                      </span>
                    </li>
                  </ul>
                </nav>
                {/* end: .main-nav */}
                <div className="logo">
                  <a href="https://ghost.estudiopatagon.com/zento">
                    <img
                      src="https://ghost.estudiopatagon.com/zento/content/images/2024/01/logo-zento.svg"
                      alt="Zento"
                      width={170}
                      height={60}
                      decoding="async"
                    />
                  </a>
                </div>
                <div className="account underline-effect hide-on-mobile hide-on-tablet hide-on-desktop-sm">
                  <a
                    href="https://ghost.estudiopatagon.com/zento/signin"
                    className="link-button epcl-login"
                  >
                    Login
                  </a>
                  <a
                    href="https://ghost.estudiopatagon.com/zento/subscribe"
                    className="epcl-button"
                  >
                    Subscribe
                  </a>
                </div>
                <div className="open-menu">
                  <svg className="open icon ularge">
                    <use xlinkHref="/zento/assets/images/svg-icons.svg?v=1b89f44b98#menu-icon" />
                  </svg>
                </div>
                <div className="clear" />
              </div>
              <div className="clear" />
            </div>
          </div>
          {/* end: .menu-wrapper */}
          <div className="clear" />
        </header>
      </div>
    </div>
  );
}

export default Header;
