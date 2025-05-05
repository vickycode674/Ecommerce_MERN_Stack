
import './App.css'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import SummaryApi from './common'
import Context from './context'
import { setUserDetails } from './store/userSlice'
import { useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch()

  const fetchUserDetails = async()=>{
     const dataResponse = await fetch(SummaryApi.currentUser.url,{
      method: SummaryApi.currentUser.method,
      credentials: 'include'
     }
    )
    const dataApi = await dataResponse.json();

    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }

  console.log("Here is the final detials based on the api=========",dataApi)
  }

  

  useEffect(()=>{
    fetchUserDetails();
  },[])
  
  return (
    <>
   <Context.Provider value={{
     fetchUserDetails
   }}>

    <ToastContainer/>
     <Header />
     <main className='min-h-[calc(100vh-100px)]'>
        <Outlet />
     </main>
     <Footer/>
     </Context.Provider>
    </>
  )
}

export default App
