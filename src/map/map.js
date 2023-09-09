import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";

// import allStates from "./data/allstates.json";


const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// const offsets = {
//   VT: [50, -8],
//   NH: [34, 2],
//   MA: [30, -1],
//   RI: [28, 2],
//   CT: [35, 10],
//   NJ: [34, 1],
//   DE: [33, 0],
//   MD: [47, 10],
//   DC: [49, 21]
// };

const MapChart = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //   // https://www.bls.gov/lau/
    //   csv("/unemployment-by-county-2017.csv").then(counties => {
    //     setData(counties);
    //   });
    // }, []);

    const [data, setData] = useState([]);

    useEffect(() => {
        csv("/RECM_2022.csv").then(state => {
            setData(state);
        });
      }, []);

    console.log(data[0]);
    
    const colorScale = scaleQuantile()
      .domain(data.map(d => d.RECM))
      .range([
        "#F0FFF0",
        "#E0EEE0",
        "#C1CDC1",
        "#98FB98",
        "#90EE90",
        "#7FFF00",
        "#76EE00",
        "#66CD00",
        "#32CD32",
        "#458B00",
        "#228B22",
        "#008000",
        "#006400",
        "#006400",
        "#004D00"
      ]);

    return (
        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const cur = data.find(s => s.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={cur ? colorScale(cur.RECM) : "#EEE"}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      );
};

export default MapChart;
