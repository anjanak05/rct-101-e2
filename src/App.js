import React, { useEffect, useState } from "react";
import axios from "axios"
import Product from "./components/Product";
import Pagination from "./components/Pagination";


const App = () => {
const [prod1, setProd1] = useState([])

const [page, setPage] = useState(1);
 const [limit, setLimit] = useState(3);
 const [totalcount, settotalcount] = useState(0);

useEffect (()=>{
  const products = async () =>{
    let r = await axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
    console.log(r.data)
    setProd1(r.data)
    console.log(r.data.length)
    settotalcount(Number(r.data.length))
  }
  products()
}, [page, limit])



  return <>  <Product value={prod1} />
  <br/>
<Pagination settotalcount={settotalcount} totalcount={totalcount} setLimit={setLimit} setPage={setPage} page={page}  />
  </>
};

export default App;
