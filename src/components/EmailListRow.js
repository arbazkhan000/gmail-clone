import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarIcon from "@mui/icons-material/Star";
import { IconButton } from "@mui/material";
import React from "react";
import "./EmailListRow.css";


const EmailListRow = ({ id, title, subject, desc, time }) => {
  return (
    <div className="EmailListRow">
      <div className="EmailListRow-Option">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>

        <IconButton>
          <StarIcon />
        </IconButton>
      </div>

      <div className="EmailListRow-List">

        <div className="EmilListRowList-Body">
          <h4>{title}</h4>

          <div className="EmaillistRowListBody-Info">
            <p>{subject}</p>
            <p>{desc}</p>
            <span>{time}</span>
          </div>


        </div>

      </div>
    </div>
  );
};

export default EmailListRow;
