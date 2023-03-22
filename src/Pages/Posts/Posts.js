import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostCard from './PostCard';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [visible, setVisiable] = useState(3);

    useEffect(() => {
        fetch("https://linkland-social-server.vercel.app/socialPosts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <div className='text-center my-5'>
                <p className='text-2xl font-bold '>Top Posts</p>
                {/* <h2 className='text-5xl font-semibold'>Our Post Aria</h2> */}
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>


                {
                    posts.slice(0, visible).map(post => <PostCard
                        key={post._id}
                        post={post}
                    ></PostCard>
                    )
                }

            </div>

            <div className="text-center m-8">
                <Link to='/media'><button className="btn btn-outline btn-secondary sm:text-xl md:text-2xl lg:text-2xl px-10">Show More</button></Link>
            </div>

        </div>
    );
};

export default Posts;