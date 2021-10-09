import React from "react";

import "./styles.scss";

export default function Layout({ children }) {
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <img className="site-header-image" src="images/Pinkaloo.jpg" alt="Pinkaloo Logo" />
        <div>Theme Toggle</div>
      </header>
      <main className="site-content">{children}</main>
      <footer className="site-footer">
        <div>Philip B Flynt Jr</div>
      </footer>
    </div>
  );
}
