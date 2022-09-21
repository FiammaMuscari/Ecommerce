import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {
  const year = new Date().getFullYear();
  return (

    <div>
            <section>
                <footer className="text-center text-white" style={{backgroundColor: "#0d6efd"}}>

                    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    Copyright © {year} Fiamma Muscari&nbsp;
                        <NavLink className="text-light text-decoration-none" to="/">
                            Shopify
                        </NavLink>
                    </div>
                </footer>
            </section>
        </div>
  );
};

export default Footer;
