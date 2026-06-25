import Item from "./Item";

const Home = ({storeData, shouldDiscount}) => {
    return (
        <div>
            <h3></h3>
            <div>
                {storeData.map((product, index) => (
                    <Item
                        key={index}
                        itemData={product}
                        shouldDiscount={shouldDiscount}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;