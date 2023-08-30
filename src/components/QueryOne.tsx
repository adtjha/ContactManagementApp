import { useQuery } from "react-query";
import { LineChart } from "./LineChart"; // Importing the LineChart component

export const QueryOne = () => {
  // Use the react-query hook to fetch COVID-19 data
  const { isLoading, error, data } = useQuery("covid-all", () =>
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
      (res) => res.json()
    )
  );

  // Render loading message if data is still loading
  if (isLoading) {
    return <>Loading...</>;
  }

  // Render error message if an error occurred during data fetching
  if (error) {
    return <>Error: {JSON.stringify(error, null, 2)}</>;
  }

  // Render the LineChart component with the fetched data
  return <LineChart data={data} />;
};
