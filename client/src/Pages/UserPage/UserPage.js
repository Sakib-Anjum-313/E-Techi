import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Common/NavBar/NavBar';

const UserPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default UserPage;