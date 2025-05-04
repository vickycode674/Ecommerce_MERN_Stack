const backendDomain = "http://localhost:8080"

const SummaryApi = {
    SignUp : {
         url : `${backendDomain}/api/signup`,
         method: 'post',
    },
    SignIn : {
        url : `${backendDomain}/api/signin`, 
        method: 'post',
    }
}


export default SummaryApi;