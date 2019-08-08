import React from 'react';

const Error = ({err}) => {
    return (
        <div className="alerta">
           {err}
        </div>
    );
};

export default Error;