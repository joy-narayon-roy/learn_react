import React from 'react';

class LoginForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            email: '',
            password: ''
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

    render () {
        return (<section class="container">
    <form class="border rounded p-3 mt-3" accept-charset="utf-8">
        <h2 class="text-center border-bottom pb-2">Login</h2>
        
        <div class="my-3">
            <label for="email">Email :-</label>
            <input type="email" class="form-control" name="email" onChange={this.inputHandler} value={this.state.email} />
        </div>
        <button class="btn btn-success" type="submit">Enter</button>
        </form>
        </section>
        )
    }
}

export default LoginForm;