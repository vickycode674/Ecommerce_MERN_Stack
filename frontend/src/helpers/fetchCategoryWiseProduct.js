import SummaryApi from "../common/index"
const fetchCategoryWiseProduct = async(category)=>{
    const response = await fetch(SummaryApi.categoryWiseProduct.url,{
        method:SummaryApi.categoryWiseProduct.method,
        headers:{
            "content-type" : "application/json"
        },
        body:JSON.stringify({
            category:category
        })
    })    

    const dataResposne = await response.json()

    return dataResposne
}

export default  fetchCategoryWiseProduct;