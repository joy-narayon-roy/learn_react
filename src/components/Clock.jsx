import React,{Component} from 'react'

class Clock extends Component{
    constructor (props){
        super(props);
        this.state = {
            date : {
                hh : new Date().getHours(),
                mm : new Date().getMinutes(),
                ss : new Date().getSeconds()
            }
        }
    }
    
    
    
    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({
                date : {
                    hh : new Date().getHours(),
                    mm : new Date().getMinutes(),
                    ss : new Date().getSeconds()
            }
            });
        },1000);
        
    }
    
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    
    render(){
        return (
        <section>
            <div>
                <span class="hh">
                    {this.state.date.hh}
                </span>
                 : 
                <span class="mm">
                    {this.state.date.mm}
                </span>
                 : 
                <span class="ss">
                    {this.state.date.ss}
                </span>
            </div>
        </section>
            )
    }
}

export default Clock;