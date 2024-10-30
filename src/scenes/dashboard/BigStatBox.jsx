import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBoxFor2 from "../../components/StatBoxFor2";

const BigStatBox = ({bigNumber, subtitle, donutData, icon}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
        gridColumn="span 6"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        >
        <StatBoxFor2
            position='relative'
            overflow='visible'
            title={bigNumber}
            subtitle={subtitle}
            donutFor2Data={donutData}
            icon={icon}
        /> 
        </Box>
    )
}

export default BigStatBox;