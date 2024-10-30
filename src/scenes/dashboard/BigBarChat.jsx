import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement, // Import the BarElement
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the elements and scales
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const BigBarChart = ({labels, data}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    <Box
        gridColumn="span 12"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
    >
    <Box height="250px" m="-20px 0 0 0">
        <Box
            mt='25px'
            p="20px"
            gridColumn="span 2"
            gridRow="span 1"
            backgroundColor={colors.primary[400]}
        >
            <Typography variant="h2" fontWeight="600" mb={5}>
                Price Distributions
            </Typography>
            <Bar
                data={{
                    labels: labels,
                    datasets: [
                        {
                            data: data,
                            backgroundColor: 'orange'
                        }
                    ]
                }}
                style={{
                    maxHeight: 300,
                }}
                options={{
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    plugins: {legend: {display: false}, tooltip: {titleColor: 'white'}},
                    scales: {
                      x: {
                        ticks: {
                          color: "white", // X-axis labels color
                        },
                        title: {
                          color: "white", // X-axis title color
                        },
                        grid: {
                          color: "lightblue", // Color for X-axis grid lines (ruler)
                          borderColor: "white", // Color for X-axis border line
                        },
                      },
                      y: {
                        ticks: {
                          color: "white", // Y-axis labels color
                        },
                        title: {
                          color: "white", // Y-axis title color
                        },
                        grid: {
                          color: "lightblue", // Color for Y-axis grid lines (ruler)
                          borderColor: "white", // Color for Y-axis border line
                        },
                      },
                    },
                }}
            />
        </Box>
    </Box>
    </Box>
    )
}

export default BigBarChart;