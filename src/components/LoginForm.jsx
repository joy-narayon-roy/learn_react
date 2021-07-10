import React from 'react';

class LoginForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            done:false
        };
    }

    inputHandler = (e)=> {
        let {
            name,
            value
        } = e.target;
        
        this.setState({
            [name]:value
        })
    }
    
    sendData =async () =>{
        let data = await fetch('/login')
        //let res = await data.json()
        return data
    }
    
    formSubmitHandeller = e =>{
        e.preventDefault()
        let loading = '<i class="fa fa-spinner fa-spin"></i>'
        const form = e.target;
        
        form[2].classList.add('disabled');
        
        form[2].innerHTML=(loading)
        let res = this.sendData()
        console.log(res);
    }

    render () {
        return (<section class="container">
    <form class="border rounded p-3 mt-3" onSubmit={this.formSubmitHandeller} accept-charset="utf-8">
        <h2 class="text-center border-bottom pb-2">Login</h2>
        
        <div class="my-3">
            <label for="email">Email :-</label>
            <input type="email" class="form-control" name="email" required onChange={this.inputHandler} value={this.state.email} />
        </div>
        <div class="my-3">
            <label for="password">Password :-</label>
            <input type="password" class="form-control" name="password" onChange={this.inputHandler} value={this.state.password} />
        </div>
        <button class={this.state.done?'btn btn-success':'btn btn-success' } type="submit">Login</button>
        </form>
        </section>
        )
    }
}

export default LoginForm;