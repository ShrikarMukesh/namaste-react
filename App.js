import React from "react";
import ReactDOM from "react-dom/client";
/*
   Header Component
     -- Logo Component
     -- Menu Component

   Body Component
     -- Search Component
     -- RestaurantContainer
     -- RestaurantCard
       -- Image
       -- Name of Res, Star Rating, Cusines , delivery tie

   Footer Component
     -- Copyright Component
     -- Links Component
     -- Addess Component
     -- Contact Component
*/
const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const stayleCard = {
  backgroundColor: "gray",
};

const RestaurantCard = (props) => {
  //This called as destrucuring
  //const { resName, cuisine } = props;

  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines } = resData;
  return (
    <div className="res-card" style={stayleCard}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-logo"
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>Delivery Time: 30 min</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantsObj.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const restaurantsObj = [
  {
    id: "10575",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "Richmond Town",
    areaName: "Shanti Nagar",
    costForTwo: "₹600 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.2,
    parentId: "721",
    avgRatingString: "4.2",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 1.6,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "1.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 01:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "302697",
    name: "Barbeque Nation",
    cloudinaryImageId: "d3najev2rpzakxfvp318",
    locality: "Rajajinagar",
    areaName: "Rajajinagar",
    costForTwo: "₹600 for two",
    cuisines: [
      "North Indian",
      "Barbecue",
      "Biryani",
      "Kebabs",
      "Mughlai",
      "Desserts",
    ],
    avgRating: 3.9,
    parentId: "2438",
    avgRatingString: "3.9",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 54,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "50-55 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-15 23:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹599",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "424558",
    name: "La Pino'z Pizza",
    cloudinaryImageId: "mocil3npmwpcdcfaxql1",
    locality: "Gandhi Bazaar Main Road",
    areaName: "Basavanagudi",
    costForTwo: "₹220 for two",
    cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.3,
    parentId: "4961",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 43,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 00:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "197238",
    name: "The Belgian Waffle Co.",
    cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
    locality: "SRI Vasavi Temple Street",
    areaName: "Basavanagudi",
    costForTwo: "₹200 for two",
    cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
    avgRating: 4.4,
    veg: true,
    parentId: "2233",
    avgRatingString: "4.4",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 43,
      lastMileTravel: 2.5,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "2.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 00:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "23846",
    name: "Domino's Pizza",
    cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
    locality: "Rehinus Street",
    areaName: "Richmond Town",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.3,
    parentId: "2456",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 02:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "23846",
    name: "Domino's Pizza",
    cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
    locality: "Rehinus Street",
    areaName: "Richmond Town",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.3,
    parentId: "2456",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 02:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "23846",
    name: "Domino's Pizza",
    cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
    locality: "Rehinus Street",
    areaName: "Richmond Town",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.3,
    parentId: "2456",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 02:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "10575",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "Richmond Town",
    areaName: "Shanti Nagar",
    costForTwo: "₹600 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.2,
    parentId: "721",
    avgRatingString: "4.2",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 1.6,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "1.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 01:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "302697",
    name: "Barbeque Nation",
    cloudinaryImageId: "d3najev2rpzakxfvp318",
    locality: "Rajajinagar",
    areaName: "Rajajinagar",
    costForTwo: "₹600 for two",
    cuisines: [
      "North Indian",
      "Barbecue",
      "Biryani",
      "Kebabs",
      "Mughlai",
      "Desserts",
    ],
    avgRating: 3.9,
    parentId: "2438",
    avgRatingString: "3.9",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 54,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "50-55 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-15 23:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹599",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "424558",
    name: "La Pino'z Pizza",
    cloudinaryImageId: "mocil3npmwpcdcfaxql1",
    locality: "Gandhi Bazaar Main Road",
    areaName: "Basavanagudi",
    costForTwo: "₹220 for two",
    cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.3,
    parentId: "4961",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 43,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 00:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "197238",
    name: "The Belgian Waffle Co.",
    cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
    locality: "SRI Vasavi Temple Street",
    areaName: "Basavanagudi",
    costForTwo: "₹200 for two",
    cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
    avgRating: 4.4,
    veg: true,
    parentId: "2233",
    avgRatingString: "4.4",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 43,
      lastMileTravel: 2.5,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "2.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 00:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "23846",
    name: "Domino's Pizza",
    cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
    locality: "Rehinus Street",
    areaName: "Richmond Town",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.3,
    parentId: "2456",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 02:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "23846",
    name: "Domino's Pizza",
    cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
    locality: "Rehinus Street",
    areaName: "Richmond Town",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.3,
    parentId: "2456",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 02:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "23846",
    name: "Domino's Pizza",
    cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
    locality: "Rehinus Street",
    areaName: "Richmond Town",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.3,
    parentId: "2456",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 02:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "10575",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "Richmond Town",
    areaName: "Shanti Nagar",
    costForTwo: "₹600 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.2,
    parentId: "721",
    avgRatingString: "4.2",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 1.6,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "1.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 01:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "302697",
    name: "Barbeque Nation",
    cloudinaryImageId: "d3najev2rpzakxfvp318",
    locality: "Rajajinagar",
    areaName: "Rajajinagar",
    costForTwo: "₹600 for two",
    cuisines: [
      "North Indian",
      "Barbecue",
      "Biryani",
      "Kebabs",
      "Mughlai",
      "Desserts",
    ],
    avgRating: 3.9,
    parentId: "2438",
    avgRatingString: "3.9",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 54,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "50-55 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-15 23:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹599",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "424558",
    name: "La Pino'z Pizza",
    cloudinaryImageId: "mocil3npmwpcdcfaxql1",
    locality: "Gandhi Bazaar Main Road",
    areaName: "Basavanagudi",
    costForTwo: "₹220 for two",
    cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.3,
    parentId: "4961",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 43,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 00:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "197238",
    name: "The Belgian Waffle Co.",
    cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
    locality: "SRI Vasavi Temple Street",
    areaName: "Basavanagudi",
    costForTwo: "₹200 for two",
    cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
    avgRating: 4.4,
    veg: true,
    parentId: "2233",
    avgRatingString: "4.4",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 43,
      lastMileTravel: 2.5,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "2.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 00:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "23846",
    name: "Domino's Pizza",
    cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
    locality: "Rehinus Street",
    areaName: "Richmond Town",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.3,
    parentId: "2456",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 02:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "23846",
    name: "Domino's Pizza",
    cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
    locality: "Rehinus Street",
    areaName: "Richmond Town",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.3,
    parentId: "2456",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 02:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "23846",
    name: "Domino's Pizza",
    cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
    locality: "Rehinus Street",
    areaName: "Richmond Town",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.3,
    parentId: "2456",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2.4,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-06-16 02:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <AppLayout />
  </div>
);
