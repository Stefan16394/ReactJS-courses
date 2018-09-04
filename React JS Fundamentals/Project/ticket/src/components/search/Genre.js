import React from 'react'

const Genre= (props) => {
    return (     
            <div className="card" style={{ width: "18rem", display: "inline-block" ,margin:"10px"}}>
                <span><strong>{props.genre.title}</strong></span>
                <a href={props.genre.query}>
                <img className="card-img-top" src={props.genre.image} alt="Card" />
                 </a>
                <button name={props.genre.title} onClick={props.subscribe} style={{margin: "3px"}} type="button" className="btn btn-dark">{props.genre.button}</button>
            </div>
    )
}

export default Genre