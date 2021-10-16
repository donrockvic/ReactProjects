const app = {
    title: 'Indescision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value='';
        renderElement();
    }
};

const removeAll = () => {
    app.options = [];
    renderElement();
};

const onDMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length);
    const optionSelected = app.options[randomNum];
    alert(optionSelected);
};


const renderElement = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0?'Here are your options': 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onDMakeDecision}>What should I do</button>
            <button onClick={removeAll}>Remove all</button>
            <ol>
                {
                    app.options.map( (items) => {
                       return <li key={items}>{items}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit} >
                <input type="text" name="option"  />
                <button>Add Options</button>
            </form>
        </div>
    );
    
    
    ReactDOM.render(template,
        document.getElementById('root')
    );
};

renderElement();