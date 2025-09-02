import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import {MENU_URL} from "../utils/constants";

const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null);

    const {restaurantId} = useParams();
    console.log(restaurantId)

    useEffect(()=>{
       fetchMenu();
    }, []);

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_URL + restaurantId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    if (resInfo === null ) return  <Shimmer/>;

    const { name, cuisines, costForTwoMessage, areaName } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

    const {itemCards} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h1>{cuisines.join(', ')}</h1>
            <h2>{areaName}</h2>
            <h2>{costForTwoMessage}</h2>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name}
                        -- {item.card.info.price/100 || item.card.info.defaultPrice / 100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;