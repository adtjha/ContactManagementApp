import { useQuery } from "react-query";
import { LineChart } from "./LineChart";

export const QueryOne = () => {
  const { isLoading, error, data } = useQuery("covid-all", () =>
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
      (res) => res.json()
    )
  );

  return isLoading ? (
    <>Loading...</>
  ) : error ? (
    <>Error: {JSON.stringify(error, null, 2)}</>
  ) : (
    <LineChart data={data} />
  );
};
