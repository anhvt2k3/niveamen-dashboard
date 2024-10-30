import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import DonutFor2 from "./Donut";

const StatBoxFor2 = ({ title, subtitle, icon, donutFor2Data, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px" >
      <Box display="flex" justifyContent="space-between" >
        <Box>
          {icon}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        <Box display="flex" justifyContent="space-between" mt="2px">
          <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
            {subtitle}
          </Typography>
        </Box>
        </Box>
          <DonutFor2 title={donutFor2Data.title} data={donutFor2Data.data}/>
      </Box>
    </Box>
  );
};

export default StatBoxFor2;
