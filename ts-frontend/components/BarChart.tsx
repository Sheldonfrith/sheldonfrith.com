import React, {useState, useEffect, useContext, useCallback, useRef} from 'react';
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
    BarController
  } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { objectKeys } from '../lib/ObjectKeys';
  
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
  )
interface BarChartProps{
    datasetNamesInOrder: string[];
    xAxisLabelsInOrder: string[];
    dataByDatasetName: {[datasetName: string]: number[]};
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
}
const BarChart: React.FunctionComponent<BarChartProps> =({
    datasetNamesInOrder,
    xAxisLabelsInOrder,
    dataByDatasetName
})=> {
    const [data, setData] = useState<ChartData>();
    useEffect(()=> {
        const newData = {
            labels: xAxisLabelsInOrder,
            datasets: datasetNamesInOrder.map(datasetName=> {
                return {
                    label: datasetName,
                    data: dataByDatasetName[datasetName],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            })
        }
        console.log(newData, dataByDatasetName);
        setData(newData);
    } ,[datasetNamesInOrder, dataByDatasetName, xAxisLabelsInOrder]);
if (!data) {
    return <> </>;
}
return (
<Bar data={data}  >
</Bar>
);
}
export default BarChart;
