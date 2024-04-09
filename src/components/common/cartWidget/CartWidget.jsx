import { Badge } from "@mui/icons-material";
import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <Badge badgeContent={0} showZero color="primary">
      <BsFillCartCheckFill size="30px" color="beige" />
    </Badge>
  );
};

export default CartWidget;
