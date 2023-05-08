import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import CommentModalCard from './CommentModalCard';
import { toast } from 'react-hot-toast';
import { FaBackspace } from 'react-icons/fa';


const CommentModal = () => {
    const { user } = useContext(AuthContext);
    // const [comments, setComments] = useState([]);

    // console.log('getComment', comments, comments.length);


    // useEffect(() => {
    //     fetch('http://localhost:5000/socialComment')
    //         .then(res => res.json())
    //         .then(data => setComments(data))
    // }, []);

    const handleCommeting = event => {
        event.preventDefault();
        const form = event.target;
        const cmntYourMind = form.cmntYourMind.value;


        //mongodb te data upload
        const commentU = {
            userPhotoURL: user?.photoURL,
            userName: user?.displayName,
            cmntYourMind,

        }
        fetch('https://linkland-social-server.vercel.app/socialComment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentU)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Your comment placed successfully');
                }
            })
            .catch(err => console.error(err));
    }


    return (
        <>

            <input type="checkbox" id="comment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="comment-modal" className="btn btn-accent w-24 btn-circle absolute right-2 top-2 text-5xl"><FaBackspace></FaBackspace></label>

                    <form onSubmit={handleCommeting} className='grid grid-cols-2 gap-3 mt-4'>
                        <div className="avatar flex gap-5">
                            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt="" />
                            </div>
                            <span>
                                <h1 className=''>{user?.displayName}</h1>

                                <input name="cmntYourMind" type="text" placeholder="Comment as " className="input input-bordered w-full" />
                            </span>
                           
                        </div>

                        <input className='btn btn-primary w-1/2 mt-5' type="submit" value="Comment" />
                    </form>

                </div>


            </div>

            {/* {
                    comments.map(comment => <CommentModalCard
                        key={comment._id}
                        comment={comment}
                    ></CommentModalCard>
                    )
                } */}
        </>
    );
};

export default CommentModal;