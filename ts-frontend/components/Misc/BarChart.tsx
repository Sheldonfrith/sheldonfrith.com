import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  BarController,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { objectKeys } from "../../lib/ObjectKeys";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  BarController
);
interface BarChartProps {
  datasetNamesInOrder: string[];
  xAxisLabelsInOrder: string[];
  dataByDatasetName: { [datasetName: string]: number[] };
}
type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
};
const BarChart: React.FunctionComponent<BarChartProps> = ({
  datasetNamesInOrder,
  xAxisLabelsInOrder,
  dataByDatasetName,
}) => {
  const [data, setData] = useState<ChartData>();
  const [options, setOptions] = useState<any>();
  useEffect(() => {
    var style = getComputedStyle(document.body);
    var bgColor = style.getPropertyValue("--bg");
    var textColor = style.getPropertyValue("--text1");
    const textColor2 = style.getPropertyValue("--text2");
    var accent2 = style.getPropertyValue("--accent2");
    var accent1 = style.getPropertyValue("--accent1");

    const newData = {
      labels: xAxisLabelsInOrder,
      datasets: datasetNamesInOrder.map((datasetName) => {
        return {
          label: datasetName,
          data: dataByDatasetName[datasetName],
          backgroundColor: accent1,
          borderColor: accent2,
          borderWidth: 3,
          // color: 'white'
        };
      }),
    };
    const newOptions = {
      color: textColor,
      scales: {
        yAxes: {
          title: {
            display: true,
            text: "Time (ms) * 1000 / Array Length",
            color: textColor2,
          },
          grid: {
            color: accent1,
          },
          ticks: {
            color: textColor,
          },
        },
        xAxes: {
          grid: {
            // color: textColor
          },
          ticks: {
            color: textColor,
          },
        },
      },
    };
    //console.log(newData, dataByDatasetName);
    setData(newData);
    setOptions(newOptions);
  }, [datasetNamesInOrder, dataByDatasetName, xAxisLabelsInOrder]);
  if (!data || !options) {
    return <> </>;
  }
  return <Bar data={data} options={options}></Bar>;
};
export default BarChart;
