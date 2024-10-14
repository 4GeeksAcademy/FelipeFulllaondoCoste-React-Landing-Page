import React from "react";


function Jumbotron() {
    return (
        <main role="main" className="container bg-body-secondary p-5" style={{marginTop: '5rem'}}>
            <div className="jumbotron">
                <h1 className="display-1">A Warm Welcome!</h1>
                <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo praesentium libero quasi maiores itaque totam architecto, id esse exercitationem asperiores doloribus nostrum incidunt veniam cumque. Facere rerum in ipsa.</p>
                <a className="btn btn-lg btn-primary" href="#">Call to action!</a>
            </div>
        </main>

    )
}

export default Jumbotron;