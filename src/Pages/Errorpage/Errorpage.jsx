import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate= useNavigate();
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Error Page</title>
            </Helmet>
            <h1>This is error page</h1>
            <AwesomeButton onPress={()=>navigate(-1)} type="danger">Go Back</AwesomeButton>
        </div>
    );
};

export default ErrorPage;