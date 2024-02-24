import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function DescriptionCard({ residents, films, terrain }) {
  return (
    <Card sx={{ minWidth: 275 }} style={{ fontFamily: "cursive" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Number of Residents
        </Typography>
        <Typography variant="h5" component="div">
          {residents.length}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Number of Films
        </Typography>
        <Typography variant="h5" component="div">
          {films.length}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Number of terrains types
        </Typography>
        <Typography variant="h5" component="div">
          {terrain.length}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DescriptionCard;
