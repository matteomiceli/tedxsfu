import React from 'react';
import Logo from '../static/images/Logo.png'

function Navbar() {
    return (
        <div className="flex h-28 fixed top-0 left-0 z-20 w-screen justify-between items-center px-12">
            <div className="flex items-center">
                <img className="" src={Logo} alt="TEDxSFU logo" />
                <div className="flex items-center ml-10">
                    <div className="one-px h-14 bg-ted-red"></div>
                    <div className="h-16 flex flex-col mx-2 justify-between">
                        <p className="text-white font-NeueHaas text-sm w-32">Anvil Theatre <br></br>New Westminster</p>
                        <p className="text-gray-400 font-NeueHaas text-sm">Location</p>
                    </div>
                    <div className="one-px h-14 bg-ted-red"></div>
                    <div className="h-16 flex flex-col mx-2 justify-between">
                        <p className="text-white font-NeueHaas text-3xl w-32">Nov 20<sup>th</sup></p>
                        <p className="text-gray-400 font-NeueHaas text-sm">Date</p>
                    </div>
                    <div className="one-px h-14 bg-ted-red"></div>
                    <div className="h-16 flex flex-col mx-2 justify-between">
                        <p className="text-white font-NeueHaas text-3xl w-32">1-8 pm</p>
                        <p className="text-gray-400 font-NeueHaas text-sm">Time</p>
                    </div>
                </div>
            </div>
            <nav>
                <ul className="flex font-NeueHaas">
                    <a className="text-white text-sm mr-6 hover:text-gray-400" href="#">
                        <p>1</p>
                        <li>SPEAKERS</li>
                    </a>
                    <a className="text-white text-sm mr-6 hover:text-gray-400" href="#">
                        <p>2</p>
                        <li><a className="" href="/">LEGACY</a></li>
                    </a>
                    <a className="text-white text-sm mr-6 hover:text-gray-400" href="#">
                        <p>3</p>
                        <li><a className="" href="/">TEAM</a></li>
                    </a>
                    <a className="text-white text-sm mr-6 hover:text-gray-400" href="#">
                        <p>4</p>
                        <li><a className="" href="/">SPONSORS</a></li>
                    </a>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;