import '../styles/global.css';
import Layout from '../components/layout';
import Router from 'next/router'
import { useState, useEffect } from 'react';
import Loader from '../components/loader';
import Loading from '../components/loading';
import { Suspense } from 'react'



export default function App({ Component, pageProps }) {

// const [isLoading, setIsLoading] = useState(false);

// useEffect(() => {
//   Router.events.on("routeChangeStart", () => {
//       setIsLoading(true)
//     });

//     Router.events.on("routeChangeComplete", ()=>{
//       setIsLoading(false)
//     });

//     Router.events.on("routeChangeError", () =>{
//       setIsLoading(false)
//     });

//     return () => {
//       Router.events.off("routeChangeStart", () => {
//       setIsLoading(true)
//     });

//     Router.events.off("routeChangeComplete", ()=>{
//       setIsLoading(false)
//     });

//     Router.events.off("routeChangeError", () =>{
//       setIsLoading(false)
//     });

//     }

// }, []);


  return (
    
    <Layout>
      {/* {isLoading && <Loader/>} */}
      <Suspense fallback={<Loading/>}>
      <Component {...pageProps} />
      </Suspense>
    </Layout>
  
  );
}