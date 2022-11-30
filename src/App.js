import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Form} from './Form.js';
import {Arr} from './Arr.js';
import {Item} from './Item.js'
import {RiArrowGoBackFill} from 'react-icons/ri'
import './App.css';

function App() {
    const [array, setArray] = useState([]);
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);
    const [compCount, setCompCount] = useState(0);
    const object = {
        text,
        isCompleted: false,
        id: uuidv4(),
    }
    const deleteHandler = (id) => {
        setArray(array.filter((item) => item.id !== id))
    }
    const toggleHandler = (id) => {
        setArray(array.map((item) => 
            item.id === id ? {...item, isCompleted: !item.isCompleted} : {...item}))
    }
    return (
        <div className="App">
            <Form text={text} setText={setText} array={array} 
                setArray={setArray} count={count} object={object}  setCount={setCount}/>
            <Arr array={array} text={text} deleteHandler={deleteHandler} setArray={setArray} setCount={setCount} count={count} compCount={compCount} setCompCount={setCompCount} toggleHandler={toggleHandler}/>
            {!array.length && <p>Todo List is Empty</p>}
            {!!compCount && <p>{compCount} completed ToDo's</p>}
            {!!count && <p>{count} ToDo's</p>}
            {!!count && <button className="delete_all" onClick={() => {
                                setArray([]);
                                setCount(0);
                                setCompCount(0);
                        }}>delete all</button>}
            {!!compCount && <button className="delete_completed" onClick={() => {
                                setArray(array.filter((item) => !item.isCompleted));
                                setCount(count - ((array.filter((item) => item.isCompleted)).length));
                                setCompCount(0);
                        }}>delete completed</button>}
        </div>
    );
}

export default App;
