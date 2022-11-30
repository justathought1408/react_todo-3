import { RiCheckDoubleLine, RiDeleteBin5Line } from "react-icons/ri";
import {useState} from 'react';

export const Item = ({item, deleteHandler, count, setCount, setCompCount, compCount, toggleHandler}) => {
	return (
		<div className={item.isCompleted ? "Item__row_green" : "Item__row"}>
			<p item={item} >{item.text}</p>
			<div>
				<RiCheckDoubleLine className={item.isCompleted ? "icon check_icon" : "icon check_icon_green"} onClick={() => {
					toggleHandler(item.id);
					item.isCompleted ? setCompCount(compCount - 1) : setCompCount(compCount + 1)
				}}/>
				<RiDeleteBin5Line className="icon delete_icon" onClick={() => {
					setCount(count - 1);
					deleteHandler(item.id);
					item.isCompleted && setCompCount(compCount - 1);
				}}/>
			</div>
		</div>
	)
}