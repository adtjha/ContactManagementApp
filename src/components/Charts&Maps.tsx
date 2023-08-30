import { Typography } from "@material-tailwind/react";
import { QueryOne } from "./QueryOne"; // Importing QueryOne component
import { QueryTwo } from "./QueryTwo"; // Importing QueryTwo component

export const ChartsAndMaps = () => {
  return (
    <>
      {/* Heading for the Chart */}
      <Typography variant='h3'>Chart</Typography>

      {/* Description of the chart */}
      <Typography variant='paragraph'>
        The below chart shows the count of death, recovered, and cases of
        COVID-19.
      </Typography>

      {/* Render the QueryOne component */}
      <QueryOne />

      {/* Heading for the Map */}
      <Typography variant='h3'>Map</Typography>

      {/* Description of the map */}
      <Typography variant='paragraph'>
        The below map shows the count of death and cases of COVID-19 in each
        country.
      </Typography>

      {/* Render the QueryTwo component */}
      <QueryTwo />

      {/* You can uncomment this line if you have a QueryThree component */}
      {/* <QueryThree /> */}
    </>
  );
};
