import ThemeContext from './themeContext.jsx';
import React from 'react';


function ShowName({theme}) {
    let style=theme==='dark'?{background:'#3b3b3b',
        borderRadius:'5px',
        color: '#fff'
    }:{};
    
    return (<h5 class='text-center p-3' style={style}>
        My name is Joy.
    </h5>)
}

/*
// 1st way.
//Render Props Pattern.

export default function Section() {
    return (<ThemeContext.Consumer>
        {({theme})=><ShowName theme={theme}/>}
    </ThemeContext.Consumer>)
}
*/

/*------------------------------*/
/*
// 2nd way
// If it was a Class Compoonent.

export default class Section extends React.Component{
    
    render(){
        const{theme}=this.context;
        
        return (<ShowName theme={theme}/>)
    }
}

Section.contextType = ThemeContext;
/* 
--------- Efficiency----------
    * Avoid Render Props Pattern
    * Contrext is accessible in Class Component within 'this.context'.
    * Much easier.
    
*/

//3rd Way.
/* 
    *If we access the context in a Functional Component.
    *We can use 'useContext()' react hook.
*/
export default function Section() {
    const context = React.useContext(ThemeContext);
    const {theme} = context;
    
    return (<ShowName theme={theme}/>)
}