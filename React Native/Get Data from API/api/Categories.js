import apiClient from "../backup/Api Backup/apiClient";
import ApiClient from "./apiClient";

const GetCategorie=()=>ApiClient.get("/Categories/Categories");
const GetProducts=(id)=>ApiClient.get("/Products/ProductbyCatid/"+id)


// const postcateogry=(items)=>ApiClient.post("",items);
// const postcateogry=(items)=>ApiClient.delete("");
// const postcateogry=(items)=>ApiClient.put("",items);

export default {
    GetCategorie,
    GetProducts
}