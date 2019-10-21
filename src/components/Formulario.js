import React, { Component } from 'react';
import {CateriasConsumer, CategoriaConsumer} from '../context/categoriasContext'

class Formulario extends Component {
    state = { 
        nombre:'',
        categoria:''
     }

     obtenerDatosEvento = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:value
        })
        
     }

    render() { 
        return ( 
                <form >
                    <fieldset className="ik-fielset uk-margin">
                            <legend className="uk-legend uk-text-center">
                                Busca tu evento por Nombre o Categoria
                            </legend>
                    </fieldset>
                    <div className="uk-column-1-3@m uk-margin">
                        <div className="uk-margin" uk-margin="true">
                                <input 
                                    name="nombre" 
                                    className="uk-input"
                                    type="text"
                                    placeholder="Nombre de Evento o Ciudad"
                                    onChange = {this.obtenerDatosEvento}
                                />
                        </div>
                        <div className="uk-margin" uk-margin="true">  
                                <select 
                                    className="uk-select"
                                    name="categoria"
                                    onChange = {this.obtenerDatosEvento}
                                    >
                                    <option value="">--Selecciona Categoria--</option>
                                    <CategoriaConsumer>
                                            { (value) => {
                                                return (
                                                   value.categosias.map(x => (
                                                        <option key={x.id} value={x.id}>
                                                                    {x.name_localized}
                                                        </option>
                                                   ))
                                                )
                                            }}
                                    </CategoriaConsumer>
                                </select>
                        </div>
                        <div>
                                <input tyoe="submit" className="uk-button uk-button-danger" value="Buscar"/>
                        </div>
                    </div>
                </form>
         );
    }
}
 
export default Formulario;
