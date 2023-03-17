import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PostCard = ({ post }) => {
    const { user } = useContext(AuthContext);
    const { _id, picture, privacyType, postYourMind } = post;

    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-2xl">
                <figure>
                    <img className='w-full h-56' src={picture} alt="image" />
                </figure>
                <div className="card-body">

                    <div className="avatar flex gap-5">
                        <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} alt="" />
                        </div>
                        <span>
                            <h1 className=''>{user?.displayName}</h1>
                            <p>{privacyType}</p>
                        </span>
                    </div>

                    {/* <h2 className="card-title">
                        image!
                        <div className="badge badge-secondary">{privacyType}</div>
                    </h2> */}
                    <p>{postYourMind}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Like</div>
                        <div className="badge badge-outline">Comment</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;