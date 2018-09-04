import React from 'react'

const Purchase = (props) => {
    return (<span className="border border-white">
        <div className="formbuy">
            <img className='image' src='https://cdn.barcodesinc.com/themes/barcodesinc/images/upc.gif'  alt={props.purchase.band}/>
            <span style={{ position: "inherit", left: "170px", bottom: "10px" }} className="eventTitle">
                <span>{props.purchase.band}: {props.purchase.total}$ </span>
                <a href={'/user/refund/'+props.purchase._id} type="submit" className="btn btn-warning">Refund</a>
            </span>
        </div>
    </span>)
}

export default Purchase