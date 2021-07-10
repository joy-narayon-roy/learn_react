import React from 'react';

function NewRow( {
    data
}) {
    return (<div class="row my-2">
                <input type="date" class="col-4 form-control" />
                <input type="number" maxlength="11" class="col-6 form-control" />
                <input type="number" class="col-2 form-control" />
    </div>
    )
}

export default class MultipleDataInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            datas: [{
                date: '',
                number: '',
                amount: 0
            }]
        }
    }

    addRow = ()=> {
        this.setState(({
            datas
        })=> {
            datas.push({
                data: '',
                number: '',
                amount: 10
            })
            return datas;
        })
    }

    deleteRow = ()=> {
        this.setState(({
            datas
        })=>{ 
            alert(datas.length)
            if (datas.length > 0) {
                datas.pop();
            }
            return datas
        })
    }

    render() {
        let {
            datas
        } = this.state;

        return (<section class="container">
        <h3 class="my-1 py-2 border-bottom text-center">Multiple Data Form</h3>
        <form class="container" accept-charset="utf-8">
            {datas.map(data=> {
            return <NewRow data={data} />
        })}
            <div class="d-flex justify-content-between">
                <button class="btn btn btn-outline-success" type="submit">Submit</button>
                <div class="">
                
                <button type="button" class="btn btn-success text-light" onClick={this.addRow}><i class="fa fa-plus"></i></button>
                
                <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt" onClick={this.deleteRow}></i></button>
        </div>
        </div>
        </form>
        </section>
        )
    }
}