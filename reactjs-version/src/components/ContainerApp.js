import React, { Component } from 'react';
import FormSearch from './FormSearch';
import Results from './Results';
import Header from './Header';

class ContainerApp extends Component {

    state = {
        dataResults: [],
        hideText: false,
    }
    
    //Obtengo los datos de FormSearch para pasarle el estado a Results
    getDatosResults = datos => {
        //obtengo los datos de FormSeach en el fetch
        const dataResults =  datos 
        
            this.setState({
                dataResults,
                hideText: true
            })
    }

    render() {
        return (
            <section className="container">
                    <Header />
                    <FormSearch getDatosResults={this.getDatosResults} />
                    <Results dataResults={this.state.dataResults}
                    hideText={this.state.hideText} />
            </section>
        );
    }
}

export default ContainerApp;