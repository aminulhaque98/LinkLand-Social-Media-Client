import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [visible, setVisiable] = useState(3);

    useEffect(() => {
        fetch("http://localhost:5000/socialPosts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <div className='text-center my-5'>
                <p className='text-2xl font-bold '>Top Posts</p>
                <h2 className='text-5xl font-semibold'>Our Service Aria</h2>
                <p className=''>Knowledge and experience gives us a step up over the competition.</p>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {/* .slice(0, visible) */}
                {
                    posts.map(post => <PostCard
                        key={post._id}
                        post={post}
                    ></PostCard>
                    )
                }

            </div>

            {/* <div className="text-center m-8">
                <button onClick={showMore} className="btn btn-outline btn-secondary text-2xl px-20">show More</button>
            </div> */}

        </div>
    );
};

export default Posts;