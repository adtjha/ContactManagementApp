import { useEffect, useRef, useMemo } from "react";
import { plot, ruleY, lineY } from "@observablehq/plot";

export const LineChart = ({ data }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const cases = useMemo(() => {
    return Object.entries(data.cases).map((e) => ({
      date: new Date(e[0]),
      cases: e[1],
    }));
  }, [data.cases]);

  const deaths = useMemo(() => {
    return Object.entries(data.deaths).map((e) => ({
      date: new Date(e[0]),
      cases: e[1],
    }));
  }, [data.deaths]);

  const recovered = useMemo(() => {
    return Object.entries(data.recovered).map((e) => ({
      date: new Date(e[0]),
      cases: e[1],
    }));
  }, [data.recovered]);

  useEffect(() => {
    if (data === undefined) return;
    const ploty = plot({
      padding: 0.6,
      x: {
        type: "time",
        domain: [new Date("1/22/20"), new Date("3/9/23")],
        grid: true,
      },
      y: { domain: [0, 1000000000], grid: true },
      marks: [
        ruleY(cases, { x: "date", y: "cases", interval: "week" }),
        lineY(cases, { x: "date", y: "cases", stroke: "red", tip: true }),
        lineY(deaths, { x: "date", y: "cases", stroke: "blue", tip: true }),
        lineY(recovered, { x: "date", y: "cases", stroke: "green", tip: true }),
      ],
    });
    console.log();
    containerRef?.current?.append(ploty);

    return () => ploty.remove();
  }, [data, cases, deaths, recovered]);

  return <div ref={containerRef} />;
};
