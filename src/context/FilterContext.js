import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducer";

const filterInitial = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}
export const FilterContext = createContext(filterInitial);
export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitial);
    function initalProductList(products) {
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        })
    }
    function bestSeller(products) {
        return state.bestSellerOnly? products.filter(product => product.best_seller === true):products;
    }
    function inStock(products) {
        return state.onlyInStock ?products.filter(product => product.in_stock === true) :products;
    }
    function sort(products) {
        if (state.sortBy === "lowtohigh") {
            return products.sort((a, b) => Number(a.price) - Number(b.price));
        }else
        if (state.sortBy === "hightolow") {
            return products.sort((a, b) => Number(b.price) - Number(a.price));
        }else{
            return products;
        }
    }
    function rating(products) {
        if (state.ratings === "4STARABOVE") {
            return products.filter(product => product.rating >= 4);
        }
        if (state.ratings === "3STARABOVE") {
            return products.filter(product => product.rating >= 3);
        }
        if (state.ratings === "2STARABOVE") {
            return products.filter(product => product.rating >= 2);
        }
        if (state.ratings === "1STARABOVE") {
            return products.filter(product => product.rating >= 1);
        }else{
            return products;
        }

    }
    const filterProductList = sort(rating(inStock(bestSeller(state.productList))));
    const value = {
        state,
        dispatch,
        products: filterProductList,
        initalProductList
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )

}
export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}