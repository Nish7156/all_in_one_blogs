import React from 'react'

function NotFound() {
  return (
    <div>
       <main id="page-404" className="main epcl-flex epcl-fullheight">
  <header className="section epcl-flex">
    <div className="logo-wrapper">
      <div className="logo">
        <a href="https://ghost.estudiopatagon.com/zento-personal">
          <img
            src="https://ghost.estudiopatagon.com/zento-personal/content/images/2024/02/logo-zento-personal-1.svg"
            alt="Zento"
            width={170}
            height={60}
            decoding="async"
          />
        </a>
      </div>
      <div className="clear" />
      <div className="description textcenter">Thoughts, stories and ideas.</div>
    </div>
    <div className="clear" />
  </header>
  <div className="epcl-flex">
    <div className="left grid-45 tablet-grid-45 hide-on-mobile">
      <img
        className=""
        src="/zento-personal/assets/images/error-404.svg?v=49dd8d696b"
        alt="error"
      />
    </div>
    <div className="not-found grid-55 tablet-grid-55 np-mobile">
      <h1 className="title ularge bordered">
        <svg
          className="decoration"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35 35"
          fill="none"
        >
          <path
            fill="currentColor"
            d="M14.666 13.25a2.093 2.093 0 0 0 2.912-.534l5.239-7.587a2.187 2.187 0 0 1 3.038-.557l3.994 2.757c.48.332.803.83.909 1.404a2.17 2.17 0 0 1-.352 1.635l-5.238 7.588a2.093 2.093 0 1 0 3.446 2.378l5.238-7.587a6.33 6.33 0 0 0 1.024-4.768 6.33 6.33 0 0 0-2.648-4.096l-3.994-2.757a6.379 6.379 0 0 0-8.863 1.624l-5.238 7.588a2.093 2.093 0 0 0 .533 2.912ZM17.956 25.168l-7.588 5.239c-.48.331-1.06.456-1.635.35a2.17 2.17 0 0 1-1.404-.907l-2.757-3.994a2.187 2.187 0 0 1 .557-3.04l7.587-5.238a2.093 2.093 0 1 0-2.378-3.445L2.75 19.37a6.38 6.38 0 0 0-1.624 8.864l2.757 3.994a6.33 6.33 0 0 0 4.096 2.647 6.327 6.327 0 0 0 4.768-1.024l7.588-5.238a2.093 2.093 0 1 0-2.379-3.446Z"
          />
          <path
            fill="currentColor"
            d="M24.376 11.6a2.094 2.094 0 0 0-2.93.42l-4.04 5.386-5.387 4.04a2.094 2.094 0 0 0 2.512 3.35l5.626-4.22c.159-.12.3-.26.419-.419l4.22-5.625a2.094 2.094 0 0 0-.42-2.931ZM23.81 26.825l-.5 6.494a1.56 1.56 0 1 0 2.998-.479l-2.498-6.015ZM34.994 24.747a1.56 1.56 0 0 0-1.676-1.436l-6.494.5 6.015 2.497a1.561 1.561 0 0 0 2.155-1.561Z"
          />
        </svg>
        Page not found
      </h1>
      <p>
        Unfortunately the page you are looking for{" "}
        <strong>is not available.</strong>
      </p>
      <div className="buttons">
        <a
          href="https://ghost.estudiopatagon.com/zento-personal"
          className="epcl-button"
        >
          Go back to home
        </a>
      </div>
    </div>
  </div>
</main>
 
    </div>
  )
}

export default NotFound