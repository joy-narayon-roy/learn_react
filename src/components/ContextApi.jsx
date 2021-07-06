import React from 'react'
import Section from './ContextApi/Section.jsx'
import ThemeContext from './ContextApi/themeContext.jsx';


export default class ContextApi extends React.Component{
    constructor (props){
        super(props);
        this.state={
            theme:'lite'
        }
    }
    
    changeTheme=()=>{
        if (this.state.theme==='lite') {
            this.setState({
                theme:'dark'
            })
        }else{
            this.setState({
                theme:'lite'
            })
        }
    }
    
    render(){
        const {theme}=this.state;
    return (<section class="container my-4 py-3 border">
        <h3 class="text-center border-bottom py-2">Context API</h3>
        <p class="lead text-justify text-muted">
            This is an other <b>Pattern</b> of <b>Higher Order Component</b> To avoid the <b>Prop Drilling</b> method in React.
        </p>
        <button onClick={this.changeTheme} class="btn btn-outline-primary" type="button">Change Theme</button>
        <div class="my-4">
        <ThemeContext.Provider value={{theme:theme}}>
            <Section />
        </ThemeContext.Provider>
        </div>
    </section>)
    }
}