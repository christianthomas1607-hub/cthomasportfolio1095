import '../styles/global.css';
import Layout from '../components/layout';
import Router from 'next/router'
import { useState, useEffect } from 'react';
import Loader from '../components/loader';
import Loading from '../components/loading';
import { Suspense } from 'react'



export default function App({ Component, pageProps }) {


  return (
    
    <Layout>
      {/* {isLoading && <Loader/>} */}
      <Suspense fallback={<Loading/>}>
      <Component {...pageProps} />
      </Suspense>
    </Layout>
  
  );
}