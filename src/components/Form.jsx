import React,{Component} from 'react';

class Form extends Component{
    constructor (props){
        super(props);
        this.state = {
            tittle:'',
            body:'',
            share:'all',
            type:''
        }
    }
    
    handelInputs=(e)=>{
        /*
        switch (e.target.name) {
            case 'tittle':
                this.setState({tittle:e.target.value})
                break;
            case 'body':
                this.setState({
                    body:e.target.value
                })
                break;
            case 'type':
                this.setState({
                    type:e.target.value
                })
                break;
            case 'share':
                this.setState({
                    share:e.target.value
                })
            
            default:
                // code
        }
        */
        
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handelSubmit=(e)=>{
        console.log(e.target);
        e.preventDefault();
    }
    render () {
        let {tittle,body,share,type}=this.state;
        
return (<section class="mt-3 px-3">
    <h3 class="text-center">Form</h3>
    <hr />
<form onSubmit={this.handelSubmit}>
    <label for="title">Tittle</label>
    <input class="form-control" type="text" name="tittle" id="tittle" onChange={this.handelInputs} value={tittle} placeholder="Enter Tittle" />
    
    <label for="body">Text</label>
    <textarea name="body" class="form-control" placeholder="Enter text." onChange={this.handelInputs} value={body}></textarea>
    
    <label for="type">Question</label>
    <input type="radio" name="type" value="question" onChange={this.handelInputs} id="type" />
    <br />
    <label for="type">Fun</label>
    <input type="radio" name="type" onChange={this.handelInputs} id="type" checked="true" value="fun" />
    <br />
    <select name="share" id="share" class="form-control" value={share} onChange={this.handelInputs}>
        <option value="all">All</option>
        <option value="friends">Friends</option>
    <option value="private">Private</option>
    </select>
    <br />
    <button class="btn btn-success mt-2">Create</button>
</form>
{/*Preview Start*/}
<section class="container mt-3 border border-rounded p-3">
    <h3 class="text-center">Post Preview</h3>
    <hr />
    <h4 class="mt-2 text-center">{tittle}</h4>
    <p class="text-justify">
        {body}
    </p>
    <b>Share with : {share.toUpperCase()}</b>
    <br />
    <b>Post type : {type.toUpperCase()}</b>
</section>
</section>)
    }
}

export default Form;