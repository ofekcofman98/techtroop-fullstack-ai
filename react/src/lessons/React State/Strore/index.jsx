import Landing from "./Landing"
import Item from "./Item"
import Home from "./Home"
import { useState } from "react"

const data = {
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
}

const StoreExercise = () => {
    const [storeData, setStoreData] = useState(data);

    const navigate = (pageName) =>{
        setStoreData({
            ...storeData,
            currentPage: pageName
        });
    };

    return (
        <div>
            <div>
                <button onClick={() => navigate("Landing")}>Landing</button>
                <button onClick={() => navigate("Home")}>Hone</button>
            </div>

            {storeData.currentPage === "Landing" ? (
                <Landing
                    user={storeData.user}
                    storeData={storeData.store} 
                /> 
            ) : (
                <Home
                    storeData={storeData.store}
                    shouldDiscount={storeData.shouldDiscount}
                />
            )
            }
        </div>
    )
}

export default StoreExercise;