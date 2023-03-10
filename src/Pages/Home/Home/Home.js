import React, { useContext } from 'react';
import { FaImages } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

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
                    <button className="btn-active btn-ghost rounded-full w-1/2 text-left pl-4">What's on your mind {user?.displayName}?</button>

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

                <div className=' justify-center text-center'><button className="btn btn-active btn-ghost"><span className='pr-2 text-2xl'><FaImages></FaImages></span> Photo/video</button></div>
            </div>
        </div>
    );
};

export default Home;