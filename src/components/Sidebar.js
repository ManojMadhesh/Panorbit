import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './pages.css';

const Sidebar = () => {
    const location = useLocation();

    // List of pages that should have the sidebar
    const sidebarPages = ['/profile', '/posts', '/gallery', '/todo'];

    // Check if the current location is in the sidebarPages array
    const showSidebar = sidebarPages.includes(location.pathname);

    if (!showSidebar) {
        return null; // Do not render the sidebar on the landing page
    }

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/todo">Todo</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
