import './header.css'
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import xiomi_logo from '../../assets/Xiaomi_logo.png'

export function Header() {
    const navbarList = ["Boutique", "Smartphones", "Tablettes", "Smart Home", "Life Style", "Promotions", "Nouvauté"]

    return (
        <div className='flex space-between align-item-center bg-header '>
            <img src={xiomi_logo} alt='logo' className='logo' style={{ paddingLeft: "20px" }} />
            <ul className='flex'>
                {navbarList.map((nav) => {

                    return (<li >{nav}</li>)
                })}
            </ul>

            <div className='flex align-item-center ' style={{ paddingRight: "20px" }}>
                <div className='flex flex-col'>
                    <input type="search" placeholder='Rechercher ..' className='search-input' />
                    <div className='flex search-bar' >
                        <FaSearch style={{ width: "20px", height: "20px", padding: "2px" ,paddingLeft: "9px" }} />
                    </div>
                </div>
                <div className='relative '>
                    <CiUser style={{ width: "30px", height: "30px" }} className='cursor-pointer' />
                    <div style={{ position: "relative", display: "inline-block" }} className='cursor-pointer'>
                        <IoCartOutline style={{ width: "30px", height: "30px" }} />
                        <div className="notif">
                            <span style={{ color: "white", fontSize: "10px" }}>0</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
