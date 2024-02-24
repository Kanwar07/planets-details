import React, { useContext } from "react";
import { data } from "../context/Contextdata";
import paginationplanetsstyle from "./PaginationPlanets.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function PaginationPlanets() {
  const { planetsdata, count, url, seturl } = useContext(data);

  const changeurl = (index) => {
    let urlSearchParams = new URLSearchParams(new URL(url).search);
    urlSearchParams.set("page", index.toString());
    let updatedUrl =
      "https://swapi.dev/api/planets/?" + urlSearchParams.toString();
    seturl(updatedUrl);
  };

  return (
    <div>
      {planetsdata.length > 0 && (
        <div className={paginationplanetsstyle.pagination}>
          <span>
            <ArrowBackIcon />
          </span>
          {[...Array(count / 10)].map((_, index) => {
            return (
              <span key={index} onClick={() => changeurl(index + 1)}>
                {index + 1}
              </span>
            );
          })}
          <span>
            <ArrowForwardIcon />
          </span>
        </div>
      )}
    </div>
  );
}

export default PaginationPlanets;
