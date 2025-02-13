import { AgChart, AgChartOptions } from "ag-charts-community"
import { getData } from "./data"

const options: AgChartOptions = {
  theme: {
    palette: {
      fills: ["#f3622d", "#fba71b", "#57b757", "#41a9c9"],
      strokes: ["#aa4520", "#b07513", "#3d803d", "#2d768d"],
    },
  },
  container: document.getElementById("myChart"),
  title: {
    text: "Apple's revenue by product category",
  },
  subtitle: {
    text: "in billion U.S. dollars",
  },
  data: getData(),
  series: [
    {
      type: "column",
      xKey: "year",
      yKey: "NAQ1",
      yName: "Q1 - North America",
      legendItemName: "Q1",
      stackGroup: "na",
      fill: "#f3622d",
    },
    {
      type: "column",
      xKey: "year",
      yKey: "NAQ2",
      yName: "Q2 - North America",
      legendItemName: "Q2",
      stackGroup: "na",
      fill: "#fba71b",
    },
    {
      type: "column",
      xKey: "year",
      yKey: "NAQ3",
      yName: "Q3 - North America",
      legendItemName: "Q3",
      stackGroup: "na",
      fill: "#57b757",
    },
    {
      type: "column",
      xKey: "year",
      yKey: "NAQ4",
      yName: "Q4 - North America",
      legendItemName: "Q4",
      stackGroup: "na",
      fill: "#41a9c9",
    },
    {
      type: "column",
      xKey: "year",
      yKey: "EURQ1",
      yName: "Q1 - Europe",
      legendItemName: "Q1",
      stackGroup: "eur",
      showInLegend: false,
    },
    {
      type: "column",
      xKey: "year",
      yKey: "EURQ2",
      yName: "Q2 - Europe",
      legendItemName: "Q2",
      stackGroup: "eur",
      showInLegend: false,
    },
    {
      type: "column",
      xKey: "year",
      yKey: "EURQ3",
      yName: "Q3 - Europe",
      legendItemName: "Q3",
      stackGroup: "eur",
      showInLegend: false,
    },
    {
      type: "column",
      xKey: "year",
      yKey: "EURQ4",
      yName: "Q4 - Europe",
      legendItemName: "Q4",
      stackGroup: "eur",
      showInLegend: false,
    },
    {
      type: "column",
      xKey: "year",
      yKey: "ASIAQ1",
      yName: "Q1 - Asia",
      legendItemName: "Q1",
      stackGroup: "asia",
      showInLegend: false,
    },
    {
      type: "column",
      xKey: "year",
      yKey: "ASIAQ2",
      yName: "Q2 - Asia",
      legendItemName: "Q2",
      stackGroup: "asia",
      showInLegend: false,
    },
    {
      type: "column",
      xKey: "year",
      yKey: "ASIAQ3",
      yName: "Q3 - Asia",
      legendItemName: "Q3",
      stackGroup: "asia",
      showInLegend: false,
    },
    {
      type: "column",
      xKey: "year",
      yKey: "ASIAQ4",
      yName: "Q4 - Asia",
      legendItemName: "Q4",
      stackGroup: "asia",
      showInLegend: false,
    },
  ],
}

AgChart.create(options)
