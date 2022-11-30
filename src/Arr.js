import {Item} from './Item.js'

export const Arr = ({array, deleteHandler, count, setCount, setCompCount, compCount, toggleHandler}) => {
	return array.map((item) => 
		<Item key={item.id} deleteHandler={deleteHandler} item={item} count={count} setCount={setCount} setCompCount={setCompCount} compCount={compCount} toggleHandler={toggleHandler}/>)
}