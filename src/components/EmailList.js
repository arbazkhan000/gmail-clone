import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton } from "@mui/material";
import React from "react";
import './EmailList.css';
import EmailListRow from './EmailListRow';

const EmailList = () => {
    return (
        <div className="EmailList">

            <div className="EmailList-Setting">

                <div className="EmailListSetting-Left">
                    <IconButton>
                        <CheckBoxOutlineBlankIcon />
                    </IconButton>

                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>

                    <IconButton>
                        <RefreshIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            
            <div className="Email-Row">
                <EmailListRow title="Twitch" subject="lorem1dwegfGwgwhrwhrwhh" description="Thiw work Amazing" time="2 hours" />
            </div>

        </div>
    )
}

export default EmailList