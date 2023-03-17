import './home.css';
import React, { useContext } from 'react';
import { FaImages } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import PostModal from '../../PostModal/PostModal';
import Posts from '../../Posts/Posts';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='mx-5 my-5'>
            <div className=" p-5 border border-slate-300 ">
                <div className="avatar flex justify-center gap-5 ">
                    <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt="" />
                    </div>
                    {/* <input type="text" placeholder="what's on your mind?" ng-model="myModel" className="input input-bordered input-success w-full max-w-xs" /> */}

                    <label htmlFor="post-modal" className="input-style btn-active btn-ghost rounded-full sm:w-full md:w-full lg:w-1/2 text-left pl-4">What's on your mind {user?.displayName}?</label>

                    {/* <div className="w-96 h-24">
                        <select className="select select-bordered select-xs mb-2 max-w-xs">
                            <option disabled selected>Public</option>
                            <option>Friends</option>
                            <option>Friends except...</option>
                            <option>Only me</option>
                        </select>
                    </div> */}

                </div>

                <div className="divider "></div>

                <label htmlFor='post-modal' className='label-btn-style btn btn-active btn-ghost'>
                    <FaImages></FaImages>Photo/video
                </label>
            </div>
            {/* post */}
            <Posts></Posts>

            {/* modal */}
            <PostModal></PostModal>
        </div>
    );
};

export default Home;