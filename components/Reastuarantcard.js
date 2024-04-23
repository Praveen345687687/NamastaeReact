import { IMG_URL } from "../utils/constant";


const Reastuarantcard = (props) => {
    const {resData} =props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,sla}= resData?.info;
   return (
       <div className="res-card">
           <img
           className="res-logo"
           src= {  IMG_URL +
           cloudinaryImageId 
           }
           />
           <h3>{name}</h3> 
            <h4>{cuisines.join(", ")}</h4>
           <h4>{costForTwo}</h4>
           <h4> {avgRating} ratings</h4>
           <h4> {sla?.deliveryTime} mins</h4>
       </div> 
   );
};
export default Reastuarantcard;
