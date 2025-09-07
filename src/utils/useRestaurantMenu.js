import {useEffect, useState} from "react";
import {MENU_URL} from "./constants";

const useRestaurantMenu = (restaurantId) => {

    const[resInfo, setResInfo] = useState(null);
    //fetch Data from API
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_URL + restaurantId);
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;