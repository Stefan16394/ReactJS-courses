import React, { Component } from 'react'
import requester from '../../infrastructure/requester';
import Genre from './Genre';
import { withUserAuthorization } from '../../hoc/WithAuthorization';

const genres = [
    { title: "POP", query: '/?query=Pop', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu07_kcjOS3PwKrROTC0sCVd9cQSXPxIStKeNeToaGg7jSTfeM_w" },
    { title: "ROCK", query: '/?query=Rock', image: "https://thumb9.shutterstock.com/display_pic_with_logo/4085221/494612782/stock-vector-man-play-guitar-494612782.jpg" },
    { title: "HIP HOP", query: '/?query=Hip%20Hop', image: "https://steemitimages.com/DQmYfWPWR2VbpBziL8fBUvcwCBGHCVoqSdUBYUUxVd3UavD/Music.jpg" },
    { title: "METAL", query: '/?query=Metal', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UCYpU946l5cM41tyXpEKVScPq7Q2T11sxuKPVG5vYhX8mDxNJA" },
    { title: "JAZZ", query: '/?query=Jazz', image: "https://pbs.twimg.com/profile_images/3387614749/f5cd5f011097f253c3b04ea5fac8bc18_400x400.jpeg" },
    { title: "CLASSIC", query: '/?query=Classic', image: "http://cdn-images.audioaddict.com/3/c/0/d/9/5/3c0d95e439549d60d92d298a8faa3701.png" },
]

class GenreList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: ''
        }
    }

    componentDidMount() {
        const id = sessionStorage.getItem('userid')
        requester.get('user', id, 'kinvey').then(user => {
            this.setState({
                user
            })
        })
    }

    subscribeButton = (e) => {
        e.preventDefault()
        const name = e.target.name.toLowerCase()
        const user = this.state.user
        let subs = JSON.parse(user.subs)

        if (subs.indexOf(name) === -1) {
            subs.push(name)
        }
        else {
            subs = subs.filter(x => x !== name)
        }

        user.subs = JSON.stringify(subs)
        requester.update('user', user._id, 'kinvey', user).then(user => {
            this.setState({ user })
            this.props.history.push('/genres')
        })
    }

    render() {
        if (this.state.user) {
            return (
                <div>
                    {genres.map(g => {
                        const buttonType = this.state.user.subs.indexOf(g.title.toLowerCase()) === -1 ? 'Subscribe' : 'Unsubscribe'
                        g.button = buttonType
                        return <Genre genre={g} subscribe={this.subscribeButton} key={g.title} />
                    })}
                </div>
            )
        }
        return <h1>Loading...</h1>
    }
}

export default withUserAuthorization(GenreList)