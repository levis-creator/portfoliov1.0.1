import styles  from '@/styles/Nav.module.css';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi'; 
const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
     
            <div className="px-3 pt-10 pb-5b flex justify-between items-center w-screen md:px-[97px]">
                <Link href="/">
                    <div className={styles.logo}>
                    LN
                    </div>
                </Link>
            <div className={styles.menu}>
            <IconButton
                id='menubutton'
                aria-controls={open ? 'menubutton' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>   
                <div className="text-white">
                    
                        <BiMenuAltRight />
                </div>
                </IconButton>
                <Menu
                className='text-white p-2'
                    id="menu"
                    anchorEl={anchorEl}
                    anchorOrigin={{vertical:'bottom', horizontal:'left'}}
                    transformOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'menubutton',
                    }}
                >
                    <MenuItem><Link href="/">Home</Link></MenuItem>
                    <MenuItem><Link href="/about-me">About me</Link></MenuItem>
                    <MenuItem><Link href="/skills">Skills</Link></MenuItem>
                    <MenuItem><Link href="/contact-me">Contact me</Link></MenuItem>
                </Menu>
            </div>
            </div>
  
    );
}

export default NavBar;