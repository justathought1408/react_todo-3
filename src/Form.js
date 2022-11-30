import {useState} from 'react';
import {RiAddLine} from 'react-icons/ri'

export const Form = ({text, setText, array, setArray, object, count, setCount}) => {
	return (
			<form action="#" onSubmit={(event) => {
				event.preventDefault();
				text && setArray([...array, object]);
				text && setCount(count + 1);
				setText('');
			}}>
				<input type="text" value={text} onChange={(event) => {
					setText(event.target.value);
				}}/>
				<button className="btn_add"><RiAddLine className="add_icon"/></button>
			</form>
		)
}