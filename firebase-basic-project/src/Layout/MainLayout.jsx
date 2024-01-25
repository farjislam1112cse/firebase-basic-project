import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Header';
import Home from '../pages/Home';

const MainLayout = () => {
    return (
        <div style={{ background: 'url("../src/image/bg.jpg")', backgroundRepeat: "no-repeat" }}>
            <Header></Header>
            <Outlet></Outlet>


        </div>
    );
};

export default MainLayout;