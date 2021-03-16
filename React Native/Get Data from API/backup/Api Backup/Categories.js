import ApiClient from "./apiClient";

const GetCategorie=()=>ApiClient.get("/Categories/Categories");
const GetProducts=()=>ApiClient.get("/Products/ProductbyCatid/1016")

export default {
    GetCategorie,
    GetProducts
}