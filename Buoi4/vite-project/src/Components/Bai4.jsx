import React from 'react'
import { useState, useEffect } from 'react'
function Bai4() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetchdata = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPosts(data);
            setFilteredPosts(data);
        }
        fetchdata();
    }, [])
    useEffect(() => {
        const result = posts.filter((post) =>
            post.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredPosts(result);
    }, [search, posts])
    return (
        <div>
            <input type="text" className='form-control' placeholder='search title' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <div>
                {filteredPosts.map((post)=>(
                    <div key={post.id}>
                        <p>{post.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bai4