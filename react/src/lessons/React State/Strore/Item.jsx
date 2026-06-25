const Item = ({itemData, shouldDiscount}) => {
    const finalPrice = shouldDiscount 
        ? itemData.price * (1- itemData.discount)
        : itemData.price;

    return (
        <div>
            <h5>{itemData.item}: ${finalPrice}</h5>
        </div>
    )
}

export default Item;