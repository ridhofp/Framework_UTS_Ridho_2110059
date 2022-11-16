import React from 'react';
import { NavLink} from "react-router-dom";



const Card = ({ 
    imgsrc,
    title,
}) => {

    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={imgsrc} className="card-img-top" id="coverImg" alt="card" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <b className="card-price">Rp300.000</b>
                        <br></br>
                        <br></br>
                        <br></br>
                        <NavLink to="Form" className="btn btn-primary">Order</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
