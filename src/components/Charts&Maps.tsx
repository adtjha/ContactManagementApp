import { Typography } from "@material-tailwind/react";
import { QueryOne } from "./QueryOne";
import { QueryTwo } from "./QueryTwo";

export const ChartsAndMaps = () => {
  return (
    <>
      <Typography variant='h3'>Chart</Typography>
      <Typography variant='paragraph'>
        The below chart shows the count of death, recovered, cases of covid.
      </Typography>
      <QueryOne />
      <Typography variant='h3'>Map</Typography>
      <Typography variant='paragraph'>
        The below map shows the count of death, cases of covid in each country.
      </Typography>
      <QueryTwo />
      {/* <QueryThree /> */}
    </>
  );
};
