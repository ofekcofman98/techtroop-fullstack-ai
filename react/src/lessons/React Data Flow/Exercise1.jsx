import { useEffect, useState } from "react"

const data = {
    images: [
        "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
        "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
        "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
    currentImg: 0
}


const Exercise1 = () => {
    const [currentImg, setCurrentImg] = useState(data.currentImg);
    
    const handlePrevious = () => {
        if (currentImg > 0) {
            setCurrentImg(prevIdx => prevIdx - 1);
        }
    };
    
    const handleNext = () => {
        if (currentImg < data.images.length - 1) {
            setCurrentImg(prevIdx => prevIdx + 1);
        }
    };

    return (
        <div>
            <button 
                onClick={handlePrevious} className="previous">Previous</button>
            <div>
                <img src={data.images[currentImg]} alt="images" />
            </div>
            <button onClick={handleNext} className="next">Next</button>
        </div>
    )
}

export default Exercise1;