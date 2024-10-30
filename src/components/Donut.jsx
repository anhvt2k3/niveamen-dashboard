import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components
Chart.register(ArcElement, Tooltip, Legend);

const DonutFor2 = ({ title , data, size = '170' }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  if (!Array.isArray(title) || !Array.isArray(data) || title.length === 0 || data.length === 0) {
    console.error("Title and data should be non-empty arrays");
    return null; // Prevent rendering if data is invalid
  }
  
  return (
    // <div style={{ overflow: 'visible', position: 'relative', maxHeight: '3000px' }}>
    <Box style={{
          maxWidth: `${size}px`, // adjust as needed
          maxHeight: `${size}px`, // adjust as needed
    }}
    >
    <Doughnut
    data={{
      labels: title,
      datasets: [
        {
              backgroundColor: [
                colors.blueAccent[500],
                colors.greenAccent[500]
              ],
              borderColor: "transparent",
              data: data
            }
          ]
        }}
        options={{
          maintainAspectRatio: true,
          responsive: true,
          cutout: '60%',
          radius: '80%',
          plugins: {
            legend: {
              labels: {font: {size: 12}, color: 'white'},
              align: 'start',
              position: 'bottom',
            },
          },
        }}
      />
      </Box>
    // </div>
  );
};

export default DonutFor2;
