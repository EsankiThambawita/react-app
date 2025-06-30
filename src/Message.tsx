//PascalCasing
function Message () {
    //This is not html. This is JSX(JavaScript XML)
    //This piece of code <h1>Hello World!</h1> gets converted to js
    
    const name = 'Esanki';
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World!</h1>;
    
}

export default Message;