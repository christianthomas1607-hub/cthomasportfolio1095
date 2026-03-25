import { useEffect, useState } from "react";

import { Datatypes } from "./types/Datatypes";
import { Console } from "console";


export async function Data(): Promise<Datatypes[]> {
  try {

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL

    const apidata = await fetch(`${baseURL}/api/data`, {
      cache: "no-store",
    });

    if (!apidata.ok) {
      throw new Error("API fetch response not successful.");
    } 

    return await apidata.json();

  } 
  catch (err) {
    console.error(err);
    return [];
  }
}

  
  // const data: Datatypes[] = await apidata.json()

  // return data;



  // const [data, setData] = useState<Datatypes[]>([]);
  
  //   useEffect(() => {
  //     fetch('/api/data')
  //       .then(response => response.json())
  //       .then((data: Datatypes[]) => setData(data))
  //       .catch(error => console.error(error));
  
  //     return () => {
        
  //     };
  //   }, []);

  //   return data;