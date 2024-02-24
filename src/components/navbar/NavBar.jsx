import React from "react";
import navbarstyle from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <nav className={navbarstyle.nav}>
        <div>
          <span className={navbarstyle.simpleiconslanetscale}></span>
        </div>
        <div style={{ cursor: "pointer" }}>
          <h2>Planets</h2>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
