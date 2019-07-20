import React, { useState } from 'react'

const FetchContext = React.createContext();
export const FetchConsumer = FetchContext.Consumer;

const FetchProvider = () => {

    const [data, setData] = useState('test')

    let handleSubmit;

    handleSubmit = (values) => {

        console.log(values);
        setData(values);
        console.log(data);
    }

    return (
      <FetchContext.Provider
        value={{
            data: data,
            handleSubmit: handleSubmit
        }}
      >
       {this.props.children}
      </FetchContext.Provider>
    );
};

export default FetchProvider;