import React, {useEffect, useRef} from "react";
import { useState } from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import dropdown from '../../assets/dropdown.svg';
import con from '../../assets/con.png';
import './header.scss';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <NavLink to="/">
                <object data={logo} type="image/svg+xml" title="Logo" alt="Logo">
        <p>No SVG support, here's a substitute</p>
        <img src={logo} alt="Logo" />
      </object>
                </NavLink>
            </div>
            <div className="navigation">
                <ul>
                    <li><NavLink to="/"><span>Our Company <object data={dropdown} type="image/svg+xml" title="Drop down" alt="Drop Down Icon">
        <p>No SVG support, here's a substitute</p>
        <img src={dropdown} alt="Drop Down Icon" />
      </object></span>
                    <ul className="dropdown">
                        <li><NavLink><div className="dropdown-box">
                            <div className="drop-icon">
                                <img src={con} />
                            </div>
                            <div className="drop-content">
                                <h4>About Us</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div></NavLink></li>
                        <li><NavLink><div className="dropdown-box">
                            <div className="drop-icon">
                                <img src={con} />
                            </div>
                            <div className="drop-content">
                                <h4>Gallery</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div></NavLink></li>
                        <li><NavLink><div className="dropdown-box">
                            <div className="drop-icon">
                                <img src={con} />
                            </div>
                            <div className="drop-content">
                                <h4>Legal</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div></NavLink></li>
                    </ul>
                    </NavLink></li>
                    <li><NavLink to="/">Pricing</NavLink></li>
                    <li><NavLink to="/"><span>Developers <object data={dropdown} type="image/svg+xml" title="Drop down" alt="Drop Down Icon">
        <p>No SVG support, here's a substitute</p>
        <img src={dropdown} alt="Drop Down Icon" />
      </object></span>
                    <ul className="dropdown">
                        <li><NavLink><div className="dropdown-box">
                            <div className="drop-icon">
                                <img src={con} />
                            </div>
                            <div className="drop-content">
                                <h4>Docs</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div></NavLink></li>
                        <li><NavLink><div className="dropdown-box">
                            <div className="drop-icon">
                                <img src={con} />
                            </div>
                            <div className="drop-content">
                                <h4>Getting Started</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div></NavLink></li>
                        <li><NavLink><div className="dropdown-box">
                            <div className="drop-icon">
                                <img src={con} />
                            </div>
                            <div className="drop-content">
                                <h4>Community</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div></NavLink></li>
                    </ul>
                    </NavLink></li>
                    <li><NavLink to="/">FAQ</NavLink></li>
                </ul>
            </div>
            <div className="cta">
                <button>Book a Demo</button>
            </div>
        </div>
    )
}

export default Header