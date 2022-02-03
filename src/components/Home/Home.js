import React from 'react';
import useAuth from '../Hooks/useAuth';

const Home = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1>This is Home </h1>
            <h5>Name: {user.displayName}</h5>
        </div>
    );
};

export default Home;