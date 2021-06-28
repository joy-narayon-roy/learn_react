import React,{Component} from 'react';
import TemperatureInput from './TemperatureInput.jsx';

class Converter{
    ctf(c){
        return (((9*c)/5)+32);
    }
    ctk(c){
        console.log(typeof c);
        return (c+273.16);
    }
    ftc(f){
        console.log(typeof f);
        return ((5*(f-32))/9);
    }
    ftk(f){
        return ((((f-32)*5)/9)+273);
    }
    ktf(k){
        return ((((k-273.16)*9)/5)+32);
    }
    ktc(k){
        return (k-273.16);
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
        if (e.target.name==='c') {
            this.setState({
                f:converter.ctf(value),
                k:converter.ctk(value)
            })
        }else if (e.target.name === 'f') {
            this.setState({
                c:converter.ftc(value),
                k:converter.ftk(value)
            })
        }else if (e.target.name === 'k') {
            this.setState({
                f:converter.ktf(value),
                c:converter.ktc(value)
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