//import "./src/components/pages/itemListContainer/ItemListContainer.css";
import { Grid, Paper, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProductCard from "../../common/productCard/ProductCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ItemListContainer = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <Item>
            <ProductCard
              price={100}
              title={"titulo"}
              description={"Descrpcion"}
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Item>
            <ProductCard
              price={100}
              title={"titulo"}
              description={"Descrpcion"}
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Item>
            <ProductCard
              price={100}
              title={"titulo"}
              description={"Descrpcion"}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemListContainer;
