import React from 'react';

 class Counter extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            count:0
        }
    }
    
    counter = () => {
        this.setState((oldState)=>({count:oldState.count+1}))
    }
    
    render(){
        const {render} = this.props;

        const {count} = this.state;
        
        return render(count,this.counter)
        
    }
}

export default Counter;