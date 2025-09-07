import RestaurantCard from "./RestaurantCard"; // This is a named import
import {useEffect, useState} from "react"; //This type import is called named import
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    //State variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]); // Initializing with an empty array
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); // State for filtered restaurants
    // State variable to hold the search text

    const [searchText, setSearchText] = useState(""); // State for search text

    //Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
    console.log("Body component rendered");

    // useEffect hook to fetch data when the component mounts
    // This hook runs after the first render, and whenever the component updates
    useEffect(() => {
        console.log("useEffect called");
        fetchData();
    }, []); // Empty dependency array means this effect runs once after the initial render

    const fetchData = async () => {
        //const data = await fetch("http://localhost:3000/api/restaurants");
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9396261&lng=77.53542949999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        //console.log(json);
        //console.log(json.data.cards[1]);
        const restaurants =
            json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants || [];
        // Safely access the restaurants array
        console.log(restaurants);
        // Update the state with the fetched restaurants
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants); // Initialize filteredRestaurants with the full list
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>
                Looks like u r offline!!! please check u r internet
            </h1>
        );
    }

    // Conditional rendering based on the length of listOfRestaurants
    return listOfRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value); // Update searchText state on input change
                        }}
                    />
                    <button
                        onClick={() => {
                            // Implement search functionality here
                            console.log("Searching for:", searchText);
                            const filteredRestaurants = listOfRestaurants.filter(
                                (restaurant) =>
                                    restaurant.info?.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                            );
                            // Filter restaurants based on search text
                            setFilteredRestaurants(filteredRestaurants);
                            // Update the list of restaurants to show only those that match the search text
                            setSearchText(""); // Clear the search input after searching
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (restaurant) => restaurant.avgRating > 4.0
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info?.id || restaurant.id}
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
