import React, { useEffect, useState } from "react";
import PostService from "../../API/PostService";
import MyCard from "../MyCard/MyCard";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchPosts()
    }, []);
    async function fetchPosts(){
        const post = await PostService.getAll();
        setPosts(post);
    };
    return (
        <div className="postsDiv">
            {posts.map(post =>
                <MyCard key={post.id} id={post.id} cost={post.userId * 100 + post.id * 17} icon={'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'} body={post.body} title={post.title}/>
            )}
        </div>
    );
};

export default Posts;
