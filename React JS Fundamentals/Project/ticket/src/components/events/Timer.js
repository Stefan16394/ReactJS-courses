import React,{Component} from 'react'

class Timer extends Component{
    constructor(props){
        super(props)
        this.state={
            time:''
        }
    }

    componentDidMount(){
         this.interval=setInterval(this.calculateRemainingTime,1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    calculateRemainingTime=()=> {
        if(this.props.time!==undefined){
            const theEvent = new Date(this.props.time);
            const now = new Date();
            var totalSeconds = (theEvent - now) / 1000;
            var days = Math.floor(totalSeconds / (3600 * 24));
            var hours = Math.floor((totalSeconds- (days * (3600 * 24))) / 3600);
            var minutes = Math.floor((totalSeconds - (days * (3600 * 24)) - (hours * 3600)) / 60);
            var seconds = Math.floor(totalSeconds - (days * (3600 * 24)) - (hours * 3600) - (minutes * 60));

            if (hours < 10) { hours = "0" + hours; }
            if (minutes < 10) { minutes = "0" + minutes; }
            if (seconds < 10) { seconds = "0" + seconds; }
            this.setState({
                time:`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
            })
        }
    }
    
    render(){
        return(
            <div className='eventTime'>Event starts in: {this.state.time}</div>
        )
    }  
}

export default Timer
