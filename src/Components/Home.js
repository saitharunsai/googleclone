import React from 'react';
import './Home.css';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import google_body_logo from './googlelogo_color_272x92dp.png';
import Search from '../Store/Search';

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/image">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home__body">
                <img src={google_body_logo} alt=""/>
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home;