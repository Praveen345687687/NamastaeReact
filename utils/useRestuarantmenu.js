import { useState,useEffect } from "react";
import { menu_url } from "./constant";

const useRestuarantmenu = (resId) => {
    const [resinfo ,setresinfo ]= useState(null);
       useEffect(()=>{
        fetchdata();
    },[]);
    const fetchdata = async () =>{
        const data = await fetch(menu_url+resId);
        const json = await data.json();
        setresinfo(json);
    };
    return resinfo;
};
export default useRestuarantmenu;

