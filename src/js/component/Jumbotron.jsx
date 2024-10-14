import React from "react";


function Jumbotron() {
    return (
        <main role="main" className="container bg-body-secondary p-5" style={{marginTop: '5rem'}}>
            <div className="jumbotron">
                <h1 className="bold" style={{fontSize: '5rem'}}>A Warm Welcome!</h1>
                <p className="lead">This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser's viewport.</p>
                <a className="btn btn-lg btn-primary" href="#">Call to action!</a>
            </div>
        </main>

    )
}

export default Jumbotron;