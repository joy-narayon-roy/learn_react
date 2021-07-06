class Context {
    constructor (value) {
        this.value = value;
    }

    Provider = ({
        children, value
    })=> {
        this.value = value;
        return children;
    }

    Consumer = ({
        children
    }) => {
        return children(this.value)
    }
}

export default function creatContext(value = null) {
    const context = new Context(value);
    return context;
}