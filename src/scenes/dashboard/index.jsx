import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import CategoryIcon from '@mui/icons-material/Category';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StoreIcon from '@mui/icons-material/Store';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import Header from "../../components/Header";
import BigStatBox from "./BigStatBox";
import BigBarChart from "./BigBarChat";
import { NiveaMenData } from '../../data/niveamen_sale'

function convertCurrencyToInt(currencyStr) {
  // Remove any non-numeric characters except for the period (.) to handle decimals
  let cleanedString = currencyStr.replace(/[^\d.]/g, '');
  
  // Parse as a float and then convert to an integer by rounding or truncating
  let number = parseFloat(cleanedString);
  
  // Return the integer version
  return Math.floor(number); // Or Math.round(number) if you want rounding
}

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const IconList = [
      <PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "40px" }}/>,
      <LocalGroceryStoreIcon sx={{ color: colors.greenAccent[600], fontSize: "40px" }}/>,
      <CategoryIcon sx={{ color: colors.greenAccent[600], fontSize: "40px" }}/>,
      <StoreIcon sx={{ color: colors.greenAccent[600], fontSize: "40px" }}/>,
  ]
    
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="NIVEA MEN DASHBOARD" subtitle="At 29 October, 2024"/>
      </Box>
      <Box padding={1}></Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="200px"
        gap="20px"
      >
        {/* ROW 1 */}
        <BigStatBox 
                bigNumber={NiveaMenData.total.revenue} subtitle="Revenue" 
                donutData={{title:['tiki', 'lazada'] , data:[convertCurrencyToInt(NiveaMenData.tiki.revenue), convertCurrencyToInt(NiveaMenData.lazada.revenue)]}}
                icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "40px" }}/>}
                />
        <BigStatBox 
                bigNumber={NiveaMenData.total.unitSold} subtitle="Unit Solds" 
                donutData={{title:['tiki', 'lazada'] , data:[convertCurrencyToInt(NiveaMenData.tiki.unitSold), convertCurrencyToInt(NiveaMenData.lazada.unitSold)]}}
                icon={<LocalGroceryStoreIcon sx={{ color: colors.greenAccent[600], fontSize: "40px" }}/>}
        />
        
        {/* ROW 2 */}
        <BigStatBox 
                bigNumber={NiveaMenData.total.numProduct} subtitle="Related Products" 
                donutData={{title:['tiki', 'lazada'] , data:[NiveaMenData.tiki.numProduct, NiveaMenData.lazada.numProduct]}}
                icon={<CategoryIcon sx={{ color: colors.greenAccent[600], fontSize: "40px" }}/>}
        />
        <BigStatBox 
                bigNumber={NiveaMenData.total.numShop} subtitle="Shops" 
                donutData={{title:['tiki', 'lazada'] , data:[NiveaMenData.tiki.numShop, NiveaMenData.lazada.numShop]}}
                icon={<StoreIcon sx={{ color: colors.greenAccent[600], fontSize: "40px" }}/>}
        />

        {/* ROW 3 */}
        <BigBarChart labels={NiveaMenData.priceDist.labels} data={NiveaMenData.priceDist.data}/>

        {/* ROW 4 */}
        {/* BEST SELLER PRODUCTS */}
        {/* <Box
          gridColumn="span 12"
          // gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Best Seller Products
            </Typography>
          </Box>
          
          
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box> */}
      </Box>
      <Box padding={1}
      >
      </Box>
    </Box>
  );
};

export default Dashboard;
