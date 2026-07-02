import { useEffect, useState } from "react"
import { data } from "../React Data Flow/Exercise2/data";

const Exercise2 = ({postsToFetch = 10}) => {
    const [posts, setPosts] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();
                
                const topPosts = data.slice(0, postsToFetch);
                setPosts(topPosts);
            }
            catch (error) {
                console.error("Failed fetching data", error);
            }
        }

        fetchPosts();
    },[]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isSmallScreen = windowWidth < 600;
    
    return (
        <div style={{ padding: "20px" }}>

            <h1 style={{ textAlign: "center" }}>Top Posts</h1>
                <div 
                    style={{ 
                        display: "grid", 
                        gridTemplateColumns: isSmallScreen ? "1fr" : "repeat(auto-fill, minmax(220px, 1fr))",
                        gap: "20px",
                        marginTop: "20px"}}
                >
                    {posts.map((post) => (
                        <div 
                            key={post.id}
                            style={{ 
                                border: "1px solid #ccc", 
                                padding: "15px", 
                                borderRadius: "4px",
                                textAlign: "center"
                            }}
                        >
                            <h3><strong>{post.title}</strong></h3>
                            <h4>{post.body}</h4>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Exercise2;