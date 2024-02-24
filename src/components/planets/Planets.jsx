import React, { useContext } from "react";
import { data } from "../context/Contextdata";
import PlanetCard from "../card/PlanetCard";
import { Grid } from "@mui/material";
import PaginationPlanets from "../pagination/PaginationPlanets";
import planetsstyle from "./Planets.module.css";

function Planets() {
  const { planetsdata } = useContext(data);

  return (
    <div className={planetsstyle.main}>
      <Grid item container spacing={2}>
        {planetsdata.length > 0 ? (
          planetsdata.map((planet, index) => {
            const { name, climate, population, terrain, residents, films } =
              planet;
            return (
              <Grid key={index} item xs={12} sm={4} md={4} lg={3}>
                <PlanetCard
                  {...{ name, climate, population, terrain, residents, films }}
                />
              </Grid>
            );
          })
        ) : (
          <h1>Loading planets...</h1>
        )}
      </Grid>
      <PaginationPlanets />
    </div>
  );
}

export default Planets;
