import React, { useContext } from 'react';
import './postModal.css';
import { toast } from 'react-hot-toast';
import { FaBackspace, FaImages } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PostModal = () => {
    const { user } = useContext(AuthContext);

    const handlePosting = event => {
        event.preventDefault();
        const form = event.target;
        const privacyType = form.privacyType.value;
        const postYourMind = form.postYourMind.value;
        const image = form.image.files[0];

        console.log('field', postYourMind, image, privacyType);

        //process.env.REACT_APP_imgbb i am not find problem 
        const formDate = new FormData()
        formDate.append('image', image)

        const url = "https://api.imgbb.com/1/upload?key=b0e7ee6ce6b56eb9ba71cba89e876465";

        console.log(url);

        //imgbb te photo upload
        fetch(url, {
            method: 'POST',
            body: formDate,
        })
            .then(res => res.json())
            .then(data => {
                const { display_url } = data?.data

                //mongodb te data upload
                const postU = {
                    userPhotoURL: user?.photoURL,
                    userName: user?.displayName,
                    privacyType,
                    postYourMind,
                    picture: display_url,

                }
                fetch('https://linkland-social-server.vercel.app/socialPosts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(postU)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            form.reset();
                            toast.success('Your post placed successfully');
                        }
                    })
                    .catch(err => console.error(err));

            }).catch(err => console.log(err))

    }



    return (
        <>

            <input type="checkbox" id="post-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="post-modal" className="btn btn-accent w-24 btn-circle absolute right-2 top-2 text-5xl"><FaBackspace></FaBackspace></label>

                    <form onSubmit={handlePosting} className='grid grid-cols-1 gap-3 mt-4'>
                        <div className="avatar flex gap-5">
                            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt="" />
                            </div>
                            <span>
                                <h1 className=''>{user?.displayName}</h1>

                                <select name="privacyType" className="select select-bordered select-xs w-24  mb-2 max-w-xs">
                                    <option selected>Public</option>
                                    <option>Friends</option>
                                    <option>Friends except...</option>
                                    <option>Only me</option>
                                </select>

                            </span>
                        </div>

                        {/* <input name="userName" type="text" disabled value={user?.displayName} className="input input-bordered w-full" />
                    <input name="email" type="text" disabled value={user?.email} className="input input-bordered w-full" /> */}

                        <input name="postYourMind" type="text" placeholder="What's on your mind?" className="input input-bordered w-full" />

                        <div className="divider "></div>

                        <div className="form-control">

                            <label htmlFor='image' className='label-style btn btn-active btn-ghost'>
                                <FaImages></FaImages>Photo/video
                            </label>
                            <input type='file' id='image' name='image/*' />
                        </div>

                        <input className='btn btn-primary w-full' type="submit" value="Post" />
                    </form>

                </div>
            </div>

        </>
    );
};

export default PostModal;