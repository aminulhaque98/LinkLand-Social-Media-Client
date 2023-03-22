import React, { useContext } from 'react';
import { FaRegCommentAlt, FaRegShareSquare } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PostCard = ({ post }) => {
    const { user } = useContext(AuthContext);
    const { _id, userPhotoURL, userName, picture, privacyType, postYourMind } = post;

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
                    <p>{postYourMind.slice(0, 30)}</p>
                </div>
                <figure>
                    <img className='w-full h-56' src={picture} alt="image" />
                </figure>
                <div className="divider"></div>
                <div className="card-actions mb-5 justify-evenly">
                    <div className="badge badge-outline"> <AiOutlineLike></AiOutlineLike> Like</div>
                    <div className="badge badge-outline"> <FaRegCommentAlt></FaRegCommentAlt>   Comment</div>
                    <div className="badge badge-outline"> <FaRegShareSquare></FaRegShareSquare> Share</div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;