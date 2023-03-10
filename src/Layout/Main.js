import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const { user } = useContext(AuthContext)
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
                        <div className="avatar flex gap-5">
                            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt="" />
                            </div>
                            <span>
                                <h1 className=''>{user?.displayName}</h1>
                                <p>3 Friends</p>
                            </span>
                        </div>
                        <div className="divider bg-fuchsia-700 rounded-full"></div>

                        <div className="">All Friends</div>
                        <div className="divider w-1/3"></div>
                        <div className="avatar flex gap-5">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt="" />
                            </div>
                            <h1 className=''>{user?.displayName}</h1>
                        </div>
                        <br />
                        <div className="avatar flex gap-5">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt="" />
                            </div>
                            <h1 className=''>{user?.displayName}</h1>
                        </div>
                        <br />
                        <div className="avatar flex gap-5">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt="" />
                            </div>
                            <h1 className=''>{user?.displayName}</h1>
                        </div>


                        {/* <li><Link to='/'>{user?.displayName}</Link></li> */}
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;