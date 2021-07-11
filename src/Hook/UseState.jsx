import React, {
    useState
} from 'react';

export default function UseState() {
    
    
    const [products,
        setProducts] = useState({
            pen: 0,
            pencil: 0
        })

    const handelQuantity = (e)=> {
        function add(ele) {
            if (ele.dataset.item === 'pen') {
                setProducts(pre=> {
                    return {
                        pen: pre.pen+1,
                        pencil: pre.pencil
                    }
                })
            } else if (ele.dataset.item === 'pencil') {
                setProducts(pre=> {
                    return {
                        pen: pre.pen,
                        pencil: pre.pencil+1
                    }
                })
            }
        }
        function remove(ele) {
            if (ele.dataset.item === 'pen') {
                setProducts(pre=> {
                    return {
                        pen: pre.pen === 0?0: pre.pen-1,
                        pencil: pre.pencil
                    }
                })
            } else if (ele.dataset.item === 'pencil') {
                setProducts(pre=> {
                    return {
                        pen: pre.pen,
                        pencil: pre.pencil === 0?0: pre.pencil-1
                    }
                })
            }
        }
        let btn = e.target;
        if (btn.dataset.lable === 'add') {
            add(btn)
        } else {
            remove(btn)
        }
    }

    const handelInput = (e)=> {
        const {
            dataset,
            valueAsNumber
        } = e.target;

        setProducts(prev=> {
            if (dataset.lable === 'pen') {
                return {
                    pen: valueAsNumber >= 0?valueAsNumber: 0,
                    pencil: prev.pencil
                }
            } else if (dataset.lable === 'pencil') {
                return {
                    pen: prev.pen,
                    pencil: valueAsNumber >= 0?valueAsNumber: 0
                }
            }
        })
    }



    return (<section class="container my-3 py-3 border">
    <h3 class="text-center border-bottom py-2">Hook</h3>
    <small class="lead text-muted">useState()</small>
    <div class="container-fluids">
        <div class="list-group">
            <div class="list-group-item">
                <div class="row">
                    <div class="col-7">
                        Pen <span class="text-muted">(5tk)</span>
    </div>
                    <div class="col-5">
                        <div class="input-group">
                            <button class="btn btn-sm btn-success" onClick={handelQuantity} type="button" data-lable="add" data-item="pen">+</button>
                            <input type="number" onChange={handelInput} class="form-control" data-lable="pen" value={products.pen} />
                            <button class="btn btn-sm btn-danger" onClick={handelQuantity} data-lable="remove" data-item="pen" type="button">-</button>
        </div>
    </div>
    </div>
    </div>
            <div class="list-group-item">
                <div class="row">
                    <div class="col-7">
                        Pencil <span class="text-muted">(10tk)</span>
        </div>
                    <div class="col-5">
                        <div class="input-group">
                            <button class="btn btn-sm btn-success" onClick={handelQuantity} type="button" data-lable="add" data-item="pencil">+</button>
                            <input type="number" onChange={handelInput} class="form-control" data-lable="pencil" value={products.pencil} />
                            <button class="btn btn-sm btn-danger" onClick={handelQuantity} data-lable="remove" data-item="pencil" type="button">-</button>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    </section>
    )
}