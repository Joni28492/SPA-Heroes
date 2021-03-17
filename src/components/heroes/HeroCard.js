

import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="card ms-3 "  style={ { maxWidth: 540 } }>
           <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${ id }.jpg`} className="card-img" alt={superhero}/>
                </div>

                <div className="col-md-8">
                   <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text"> {alter_ego} </p>
                        {/* condicion por si hay varios alter-ego */}
                        {
                            (alter_ego !== characters)
                            && <p className="card-text">{characters}</p>
                        }
                        <p className="card-text">
                            {/* primera vez que aparece */}
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        {/* utilizamos Link en vez de etiqueta a, la ruta aun no existe */}
                        <Link to={`./hero/${id}`}>
                            Más...
                        </Link>

                   </div>
                </div>

           </div>
        </div>
    )
}
