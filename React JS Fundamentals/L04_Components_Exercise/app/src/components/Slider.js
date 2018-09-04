import React, { Component } from 'react'
import left from '../resources/left.png'
import right from '../resources/right.png'
import './Slider.css'

class Slider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            focusedEpId: 0,
            imgUrl: ''
        }

        this.getNewEp = (id) => {
            fetch('http://localhost:8000/episodePreview/' + id)
                .then(data => {
                    return data.json()
                }).then(parsedData => {
                    this.setState({
                        focusedEpId: parsedData.id,
                        imgUrl: parsedData.url
                    })
                })
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/episodePreview/' + this.state.focusedEpId)
            .then(data => {
                return data.json()
            }).then(parsedData => {
                this.setState({
                    imgUrl: parsedData.url
                })
            })
    }

    render() {
        return (
            <div className='warper'>
                <img onClick={() => this.getNewEp(this.state.focusedEpId - 1)}
                    className='.slider-button .case-left ' src={left} alt='leftArrow' />
                <img className='sliderImg' src={this.state.imgUrl} alt='focusedImage' />
                <img onClick={() => this.getNewEp(this.state.focusedEpId + 1)}
                    className='.slider-button .case-left ' src={right} alt='rightArrow' />
            </div >
        )
    }
}

export default Slider