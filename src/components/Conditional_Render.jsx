/*Conditional_Render && List_key*/
import React,{Component} from 'react';

class Conditional_Render extends Component{
    constructor (props){
        super(props);
        let {students}=props;
        this.state={
            login:true,
            students
        };
    }
    
    handelAccount = ()=>{
        this.setState({
            login:!this.state.login
        })
    }
    
    Card = (props)=>{
        let {student,render} = props;
        
        if(!render) return null;
        
        return (<div class="mx-3 my-4 card card-body">
            <h5>Name : {student.name}</h5>
            <h5>Class : {student.class}</h5>
            <h5>Roll : {student.roll}</h5>
        </div>)
    }
    
    render () {
        let {login,students} = this.state;
        let status;
        if (login) {
            status = <h5>Status : Login</h5>;
        }else{
            status = <h5>Status : Logout</h5>;
        }
        return (<section class="container border py-3 my-3">
<div>
    <h3 class="text-center">Conditional Rendering<br /> List && Keys</h3>
    <hr />
    {status}
    <span>Want to </span><button class={login?'btn btn-danger':'btn btn-success'} onClick={this.handelAccount} type="button">{login?'Logout':'Login'}</button><br />
    <p class={login?'':'disable'}>{login?'Your Friends :':'Please Login.'}</p>
    {students.map(student=>{
        return (<this.Card student={student} render={login}/>)
    })}
</div>
</section>)
    }
}

export default Conditional_Render;