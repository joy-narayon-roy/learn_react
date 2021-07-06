import ThemeContext from './themeContext.jsx'
function ShowName({theme}) {
    let style=theme==='dark'?{background:'#3b3b3b',
        borderRadius:'5px',
        color: '#fff'
    }:{};
    
    return (<h5 class='text-center p-3' style={style}>
        My name is Joy.
    </h5>)
}
export default function Section() {
    return (<ThemeContext.Consumer>
        {({theme})=><ShowName theme={theme}/>}
    </ThemeContext.Consumer>)
}