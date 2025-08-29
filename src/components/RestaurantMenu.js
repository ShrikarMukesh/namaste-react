import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null);


    useEffect(()=>{
       fetchMenu();
    }, []);

    const fetchMenu = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=912754&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    const { name, cuisines, costForTwoMessage, areaName } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

    return  resInfo === null ? (
        <Shimmer/>
    ): (
        <div className="menu">
            <h1>{name}</h1>
            <h1>{cuisines}</h1>
            <h2>{areaName}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul>
                <li>Pizza</li>
                <li>Uppit</li>
                <li></li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;