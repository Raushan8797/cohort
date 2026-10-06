import { api } from "../../../config/api";

 export const getAllProductApi = async (search) => {
    try {
        let url = search ? `/product/search?q=${search}` : "/product?limit=100"
        let res = await api.get(url)
        return res.data
    } catch (error) {
        console.log("error in product api " , error);
        
    }
}

export const getProductCat = async () => {
    try {
        let res = await api.get("/products/categories")
        return res.data
    } catch (error) {
        console.log("error in product cat api " , error);
        
    }
}

export const getProductbyCat = async (category) => {
    try {
        let res = await api.get(`/products/category/${category}`)
        return res.data
    } catch (error) {
        console.log("error in product by  category api " , error);
        
    }}