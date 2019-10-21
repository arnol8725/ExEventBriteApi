import React, { Component } from 'react';
import axios from 'axios';

//Create el context
const CategoriaContext = React.createContext();
export const CategoriaConsumer = CategoriaContext.Consumer;

class CategoriaProvider extends Component {

    token = 'EKIORYTXARZSOJ5K3HAF';

    componentDidMount(){
        this.obtenerCategorias();
    }

    obtenerCategorias = async () => {
            let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

            let categorias = await axios.get(url);
            console.log(categorias);

            this.setState ({
                    categorias : categorias.data.categories
            });
    }

    state = { 
        categorias : []
     }
    render() { 
        return ( 
            <CategoriaContext.Provider
                value={{
                    categosias : this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriaContext.Provider>
         );
    }
}
 
export default CategoriaProvider;