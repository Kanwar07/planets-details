import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import planetcardstyle from "./PlanetCard.module.css";
import DescriptionCard from "./DescriptionCard";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

function PlanetCard({ name, climate, population, terrain, residents, films }) {
  const [over, setover] = useState(null);

  const handlePopoverOpen = (event) => {
    setover(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setover(null);
  };
  const open = Boolean(over);

  const moredetails = () => {
    console.log("hey");
  };

  return (
    <>
      <Card className={planetcardstyle.card}>
        <CardContent>
          {" "}
          <span className={planetcardstyle.heading}>{name} </span>({climate})
        </CardContent>
        <CardContent>
          <span className={planetcardstyle.heading1}>Population :</span>{" "}
          {population}
        </CardContent>
        <Typography
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          onClick={() => moredetails()}
          className={planetcardstyle.button}
        >
          More Details
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
            }}
            open={open}
            anchorEl={over}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            {<DescriptionCard {...{ residents, films, terrain }} />}
          </Popover>
        </Typography>
      </Card>
    </>
  );
}

export default PlanetCard;
