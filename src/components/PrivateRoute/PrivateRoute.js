import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = (props) => {
    const { children, ...rest } = props;
    return (
        <Route
            {...rest}
        >

        </Route>
    );
};

export default PrivateRoute;