import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar, IconButton } from '@mui/material';

const Header = () => {
    return (
        <div className="Header">

            <div className="Header-Left">

                <div className="HeaderLeft-Icon">
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </div>

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png?20221017173631" alt="" />
            </div>

            <div className="Header-Middle">
                <SearchIcon />
                <input type="text" placeholder='Search mail' />
                <TuneIcon />

            </div>

            <div className="Header-Right">
                <IconButton>
                    <HelpIcon />
                </IconButton>

                <IconButton>
                    <SettingsIcon />
                </IconButton>

                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <Avatar />
                </IconButton>
            </div>


        </div>
    )
}



export default Header;