// import { useState,useEffect } from "react";
import Shimmers from './shimmer';
// import { menu_url } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestuarantmenu from '../utils/useRestuarantmenu';

const Restuarantmenu = () =>{
// const [resinfo,setresinfo] = useState(null);
 const {resId}=useParams();
console.log(resId);

const resinfo = useRestuarantmenu(resId);
// useEffect(() =>{
// fetchmenu();
// },[]);
// //wihtout dependecy array each and every render my useeffect was called..

// const fetchmenu = async () =>{
//     const data = await fetch(menu_url +resId); 
//         const json = await data.json();
//         console.log(json);
//         setresinfo(json);
//     }
    if (resinfo == null) return <Shimmers />;
    const {text}=resinfo?.data?.cards[0]?.card?.card;
    const{avgRating, cuisines, costForTwo} =resinfo?.data?.cards[2]?.card?.card?.info;
    
   const {
    itemCards
   } = resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return(
        <div className="restaurantmenu">
             <h1>{text}</h1>
             <p>{cuisines.join(", ")} - Rs.{costForTwo/100}</p>
             <p>{avgRating}</p>
             <h2>Menu</h2>
                        <ul>{itemCards.map((item) => (<li key={ item?.card?.info?.id }> { item?.card?.info?.name } - Rs.{item?.card?.info?.price / 100 
           || item?.card?.info?.defaultPrice / 100 
           }
           </li>
           ))}
           </ul>
          
             
        </div>
    );
    
};

export default Restuarantmenu;