import React, { useEffect, useState } from 'react';
import PostCard from '../Posts/PostCard';
import Posts from '../Posts/Posts';

const AllSocialMediaPost = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        fetch("https://linkland-social-server.vercel.app/socialPosts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <div className='text-center my-5'>
                <p className='text-2xl font-bold '>All Social Posts</p>
                {/* <h2 className='text-5xl font-semibold'>Our Post Aria</h2> */}
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>


                {
                    posts.map(post => <PostCard
                        key={post._id}
                        post={post}
                    ></PostCard>
                    )
                }

            </div>
        </div>
    );
};

export default AllSocialMediaPost;