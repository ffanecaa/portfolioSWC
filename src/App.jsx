import { useState ,useEffect} from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

import Home from "./pages/Home";
import { PortfolioDetails } from "./screen/portfolio/PortfolioDetails";


const App = () => {
 const [loader, setLoader] = useState(true);

useEffect(() => {
  const timer = setTimeout(()=> {
    setLoader(false)
},5000)

  return () =>clearTimeout(timer) 
}, [])



  return (
    <>
    {loader && (
        <div className="preloader">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
          </svg>

            <div className="load-text">
              <span>C</span>
              <span>a</span>
              <span>r</span>
              <span>g</span>
              <span>a</span>
              <span>n</span>
              <span>d</span>
              <span>o</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
         
          </div>
        </div>
      )}

{!loader && (
        <>
        <BrowserRouter>
        <Routes>
           <Route 
          path="/"
          element={
            <Layout>
              <Home/>
            </Layout>
          }
         />
         <Route
                path="/details/:id"
                element={
                  <Layout>
                    <PortfolioDetails />
                  </Layout>
                }
              />

        </Routes>
        
        
        
        
        </BrowserRouter>
        </>
      )}
    </>
  )
}

export default App

