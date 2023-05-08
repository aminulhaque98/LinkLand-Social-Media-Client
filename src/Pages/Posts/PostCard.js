import React, {useEffect, useContext, useState } from 'react';
import { FaRegCommentAlt, FaRegShareSquare } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import CommentModal from '../Comment/CommentModal';

const PostCard = ({ post }) => {
    const { user } = useContext(AuthContext);
    const { _id, userPhotoURL, userName, picture, privacyType, postYourMind, } = post;
    const [count, setCount] = useState(0);

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://linkland-social-server.vercel.app/socialComment')
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);




    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-2xl">

                <div className="card-body">

                    <div className="avatar flex gap-5">
                        <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={userPhotoURL} alt="pfl" />
                        </div>
                        <span>
                            <h1 className=''>{userName}</h1>
                            <p>{privacyType}</p>
                        </span>
                    </div>

                    {/* <h2 className="card-title">
                        image!
                        <div className="badge badge-secondary">{privacyType}</div>
                    </h2> */}
                    <p>{postYourMind.slice(0, 100)}...Read More</p>
                </div>
                <figure>
                    <img className='w-full h-56' src={picture} alt="postPicture" />
                </figure>
                <div className="card-actions mt-5 justify-evenly">
                    <div className="badge badge-outline"> <AiOutlineLike></AiOutlineLike> {count}</div>
                    <div className="badge badge-outline"> <FaRegCommentAlt></FaRegCommentAlt>   {comments.length}</div>
                    <div className="badge badge-outline"> <FaRegShareSquare></FaRegShareSquare> 00</div>
                </div>
                <div className="divider mt-0 mb-0"></div>
                <div className="card-actions  justify-evenly">
                    <button onClick={() => setCount((previousCount) => previousCount + 1)} className="badge badge-outline"> <AiOutlineLike></AiOutlineLike> Like</button>
                    <label htmlFor='comment-modal' className="label-btn badge badge-outline"> <FaRegCommentAlt></FaRegCommentAlt> Comment</label>
                    <button className="badge badge-outline"> <FaRegShareSquare></FaRegShareSquare> Share</button>
                </div>
                <div className="divider mt-0"></div>
            </div>
            {/* comment modal */}

            <CommentModal></CommentModal>
        </div>
    );
};

export default PostCard;