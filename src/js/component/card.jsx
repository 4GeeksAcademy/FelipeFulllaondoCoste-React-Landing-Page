import React from "react";


function Card(props) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img
                src={props.image}
                className="card-img-top"
                alt="..."
                style={{height: "15rem", objectFit: "cover", objectPosition:"center"}}
            />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.body}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;