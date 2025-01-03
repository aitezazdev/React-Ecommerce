import axios from "axios";
import { setProducts, setLoading } from "../Reducers/productsReducer";

export const asyncGetProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch(setProducts(data));
    console.log(data);
    
  } catch (error) {
    console.error("Failed to fetch products:", error);
  } finally {
    dispatch(setLoading(false));
  }
};
