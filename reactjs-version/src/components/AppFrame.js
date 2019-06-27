import React from 'react';

const AppFrame = ({ body}) => {
    return (
        <div>
            <div className='app-frame'>
            <div>{body}</div>
            </div>
        </div>
    );
};

export default AppFrame;