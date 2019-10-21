import React, { Component } from 'react'

const EventosContext = React.createContext();
export const EventConsumer = EventosContext.Consumer;

class EventProvider extends Component {
    token = 'EKIORYTXARZSOJ5K3HAF';
    ordenar = 'date'
    state = {  }
    
obtenerEventos = async (busqueda) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locate=es_ES´;
}

    render() { 
        return (  );
    }
}
 
export default EventProvider;