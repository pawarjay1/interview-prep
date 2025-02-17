import { useEffect, useState } from "react";

const useCurrencyinfo = (currancy) => {
    
    const [data, setData] = useState({}); 
    
    useEffect((currancy)=>{
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json')
        .then(res=>res.json())
        .then(res=>setData(res[currancy])); 
        console.log(data);
    },[currancy]); 
    console.log(data); 
    return data; 
}

export default useCurrencyinfo; 