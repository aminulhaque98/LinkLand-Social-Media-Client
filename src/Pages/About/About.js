import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const About = () => {
    // useTitle('About');
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const [email, setEmail] = useState(user?.email);
    const [education, setEducation] = useState('M.C Collage sylhet');
    const [address, setAddress] = useState('Bangladesh,sylhet');


    const handleSubmit = event => {
        event.preventDefault();
        console.log(name, email, education, address);
    }

    // console.log(name, email, education, address);

    const handleNameChange = event => {
        setName(event.target.value);
    };
    const handleEmailChange = event => {
        setEmail(event.target.value);
    };
    const handleEducationChange = event => {
        setEducation(event.target.value);
    };
    const handleAddressChange = event => {
        setAddress(event.target.value);
    };


    return (
        <div className="w-3/4 mx-auto my-20">
            <div className="hero-content ">
                <div className="card  w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input onChange={handleNameChange} type="text" defaultValue={name} placeholder="" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={handleEmailChange} defaultValue={email} type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Education Status</span>
                            </label>
                            <input onChange={handleEducationChange} defaultValue={education} type="text" placeholder="education" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Address</span>
                            </label>
                            <input onChange={handleAddressChange} type="text" defaultValue={address} placeholder="" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default About;