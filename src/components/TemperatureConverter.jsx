import React,{Component} from 'react';
import TemperatureInput from './TemperatureInput.jsx';

class TemperatureConverter extends Component{
    
    constructor (props) {
        super(props);
        this.state ={
            c:0,
            k:0,
            f:0
        }
    }
    
    inputHandaler = (e) =>{
        console.log(e.target.value);
        console.log(this.state);
    }
    
    render (){
        return (<section class="my-4 border">
            <div class="container">
                <h3 class="text-center">Temperature Converter</h3>
                <hr />
                <TemperatureInput scale="c" />
                <hr />
                <TemperatureInput scale="k" handler={this.inputHandaler} />
            <p class="jumbotron">{'Ok'}</p>
            </div>
        </section>)
    }
}

export default TemperatureConverter;