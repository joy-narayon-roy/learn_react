import React,{Component} from 'react';
import TemperatureInput from './TemperatureInput.jsx';
class Converter{
    ctf(c){
        return (5*c);
    }
    ctk(k){
        return (10*k);
    }
}

let converter = new Converter();

class TemperatureConverter extends Component{
    constructor (){
        super();
        this.state = {
            c:0,
            f:0,
            k:0
        }
    }
    
    inputHandeler = (e)=>{
        let {value} = e.target;
        if (e.target.name=='c') {
            this.setState({
                f:converter.ctf(value),
                k:converter.ctk(value)
            })
        }
        
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    render (){
        return (<section class="my-4 border">
            <div class="container">
                <h3 class="text-center">Temperature Converter</h3>
                <hr />
                <TemperatureInput  scale="c" data={this.state} handaler={this.inputHandeler}/>
                <hr />
                <TemperatureInput scale="f" data={this.state} handaler={this.inputHandeler}/>
                <hr />
                <TemperatureInput scale="k" data={this.state} handaler={this.inputHandeler}/>
            <p class="jumbotron text-center display-4">{this.state.c} °C <br /> {this.state.f} °F <br />
            {this.state.k} °K</p>
            </div>
        </section>)
    }
}

export default TemperatureConverter;