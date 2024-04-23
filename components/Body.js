//import resList from "../utils/Mockdata";
import Reastuarantcard from "./Reastuarantcard";
import { useState,useEffect} from "react";
import Shimmers from './shimmer';
import { Link } from "react-router-dom";
import { swiggy_api } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
//this arraydestructure the resList after that setoListOFresturant contain the filtered list and last react find the differene b/w listof resturant and setlist of 
//resturants  object using react and show in ui.
    let [listOfRestaurants,setListOfRestaurant] = useState([]);
    const [filterdRestuarant,setFilterdRestuarant]= useState([]);
    const [searchtext,setsearchtext] = useState("");
   console.log("hoe much rendered?")
    useEffect(() => {
      fetchData();
      console.log("will working...");
    },[]);
    
    const fetchData = async () => {
    const data= await fetch(swiggy_api);
     const json = await data.json();

    console.log(json);
   
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterdRestuarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false)
    return (
    <h1>
      look's like your're in Offline!! please check you Internet Connection !!.
      </h1>
    );

   
 // Assuming this is the beginning of your component or relevant function
if (!listOfRestaurants || listOfRestaurants.length === 0) {
  return <Shimmers />;
}

  
return( 
         <div className="body">
         <div className="filter">

          <div className="search">

          <input type="test" className="serach-box" value = {searchtext}
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}
          />

          <button

          onClick={ () => {
          console.log(searchtext); 

        const filterdRestuarant = listOfRestaurants.filter((res) => 
          res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
          setFilterdRestuarant(filterdRestuarant);
          }}
          >search
           </button>
          </div>

         <button
          className="filter-btn"
          onClick={ () => {
            listOfRestaurants = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.3
            );
         setFilterdRestuarant(listOfRestaurants);
         } } >
         Top Rated Restaurants
         </button>
         </div>

         <div className="res-container">
            {
             filterdRestuarant.map((restaurant) =>(
             <Link 
             key = {restaurant.info.id}
             to={"/restuarants/"+restaurant.info.id}>
              <Reastuarantcard  resData={restaurant}/></Link>
               )
               )
            }
            
         </div>
     </div>
    );
  };
 
 export default Body;

 