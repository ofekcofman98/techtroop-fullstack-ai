const Landing = ({user, storeData}) => {
    const hottestItem = storeData.find(product => product.hottest);

    return (
        <div>
            <h2>Welcome, {user}</h2>
            {hottestItem && (
                <p style={{ fontWeight: 'bold', color: '#d32f2f' }}>
                    Hottest item: {hottestItem.item}
                </p>
            )}
        </div>
    )
}

export default Landing;