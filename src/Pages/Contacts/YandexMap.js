import React, { Component} from "react";
import "../Contacts/Contacs.css"
import { YMaps, Map, Placemark } from "react-yandex-maps";

export default class YandexMap extends Component {
    render() {
        return (
    <YMaps>
    
      <div className="YandexMap">
        <div className="ContactsMenu">Контакты</div> 
        <div className="map-test">
      <Map 
        defaultState={{ 
            center: [55.755811, 37.617617], 
            zoom: 11 ,
        }}
            >
                <Placemark geometry={[55.752004, 37.617734]}  />
       </Map>  
       </div>
      </div>
    </YMaps>

             );
    
        }
    }