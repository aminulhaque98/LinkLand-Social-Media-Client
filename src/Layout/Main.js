import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="right-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="right-drawer" className="drawer-overlay"></label>
                    <ul className="menu g-5 p-4 w-80 bg-base-100 text-base-content">


                        <li><Link to='/'>All Friends</Link></li>



                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;