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
    }
  }


export default SummaryApi;