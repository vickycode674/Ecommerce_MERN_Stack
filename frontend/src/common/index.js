const backendDomain = "http://localhost:8080"

const SummaryApi = {
    SignUp : {
         url : `${backendDomain}/api/signup`,
         method: 'post',
    },
    SignIn : {
        url : `${backendDomain}/api/signin`, 
        method: 'post',
    },
    currentUser : {
        url : `${backendDomain}/api/user-details`, 
        method: 'get',
    },
    logout_User : {
        url : `${backendDomain}/api/logout`, 
        method: 'get',
    },
    allUser : {
        url : `${backendDomain}/api/all-user`, 
        method: 'get',
    },
    updateUser :{
        url : `${backendDomain}/api/update-user`, 
        method: 'post',
    },
    uploadProduct:{
        url: `${backendDomain}/api/upload-product`,
        method:'post',
    },
    allProduct:{  //step 4 receving routes or hiting from here frontend stay as intermetidate
        url: `${backendDomain}/api/get-product`,
        method:'get',
    },
    updateProduct:{  //step 4 receving routes or hiting from here frontend stay as intermetidate
        url: `${backendDomain}/api/update-product`,
        method:'post',
    },
    categoryProduct:{
        url:`${backendDomain}/api/get-categoryProduct`,
        method:'get',
    },
    categoryWiseProduct : {
        url:`${backendDomain}/api/category-product`,
        method:'post'
    },
    productDetails : {
        url:`${backendDomain}/api/product-details`,
        method:'post'
    }
  }


export default SummaryApi;