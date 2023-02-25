import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div class="flex gap-4">
                <div class="flex-auto w-32">
                    01
                </div>
                <div class="flex-auto w-64 ">
                    <Outlet></Outlet>
                </div>
                <div class="flex-auto w-32 ">
                    03
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;