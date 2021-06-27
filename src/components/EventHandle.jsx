import React,{Component} from 'react';

function Button(props) {
    return(<button class="btn btn-secondary" onClick={props.event}>{props.text}</button>)
};

class EventHandle extends Component{
    constructor (props) {
        super(props);
        this.state = {
            text : 'I am from text.'
        }
    }
    
    handleEvent=(e)=>{
        
        this.setState({
            text : 'The text is Changed'
        })
    }
    
    handleEventPara1 = (e) =>{
        this.setState({
            text:e
        })
        
    }
    
    handleEventPara2 = (text) =>{
        this.setState({
            text
        });
    }
    
render(){
return (<section class="container border py-3 my-3">
<div>
    <h2 class="text-center">Event Handle</h2>
    <hr />
    <h4>{this.state.text}</h4>
    <button onClick={this.handleEvent} class="btn btn-primary">Change it.</button>
    <br />
    
    <button onClick={()=>this.handleEvent()} class="btn btn-primary">Change it.</button>
    
    <button onClick={()=>this.handleEventPara1("This is From Parameter.")} class="btn btn-success">Change it.</button>
    <button onClick={this.handleEventPara1.bind(this,"This is 2nd way to pass Parameter.")} class="btn btn-success">Change it.</button>
    <br />
    <Button text="Greeting" event={this.handleEventPara2.bind(this,"Welcome! This is the power of 'React'")}/>
    <Button text="Greeting" event={()=>this.handleEventPara2("Welcome! This is the power of 'React'.This is 2nd Way.")}/>
</div>
</section>);
}
}

export default EventHandle;