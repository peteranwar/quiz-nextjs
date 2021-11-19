import Link from 'next/link';
import Image from "next/image"

import React, { useEffect, useRef, useState } from 'react'




import { useRouter } from 'next/router';
import { useUserData } from '../../context/UserDataState';
import { Button } from 'react-bootstrap';



const Navbar = (props) => {
    const [userData, setUserData] = useUserData();

    const router = useRouter();
    const [colorChange, setColorchange] = useState(false);
    const [openNav, setOpenNav] = useState(false);




    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
    }, [])

    const headerClasses = () => {
        return (
            `navContainer ${colorChange ? 'navScroll' : ''}`
        )
    }

  



    function handleLogout() {
        // console.log(isLogin);
        localStorage.removeItem('isLogin');
        localStorage.removeItem('userData');
        setUserData(null)
        router.push('/login')
    }

    return (
        <nav className={headerClasses()}>

            <div className={`menuBtn ${openNav ? 'closeMenu' : ''}`} onClick={() => setOpenNav(!openNav)} >
                <div className="btnLine"></div>
                <div className="btnLine"></div>
                <div className="btnLine"></div>
            </div>
            {/* { openNav ? <CloseIcon color="primary" className={`${classes.menuBtn} ${openNav ? "close" : '' }`} onClick={() => setOpenNav(!openNav)}/> : <MenuIcon color="primary" className={`${classes.menuBtn} ${openNav ? "close" : '' }`} onClick={() => setOpenNav(!openNav)} /> } */}

            <div className="logo">
                <Link href="/" >
                    <a>
                        <Image
                            src="/assets/images/ML_logo.png"
                            width="250px"
                            height="50px"
                            alt="master linux-logo"
                        />
                    </a>
                </Link>

            </div>



            <div className='navContent'>
                <div className={`linksContainer d-flex align-items-center ${openNav ? "open-nav" : ''}`}>
                    <ul className="links list-unstyled m-0">
                        <li>
                            <Link href="/">
                                <a className={`navLink ${router.pathname == "/" ? "active" : ""}`}>Home</a>
                            </Link>
                        </li>
                       
                    </ul>

                    {userData !== null &&
                    <Button onClick={handleLogout}>
                        Log Out
                    </Button>
                    
                    } 
                 
                </div>
            </div>
        </nav>
    )
}

export default Navbar
