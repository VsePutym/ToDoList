import {useDispatch} from "react-redux";
import s from './TodoItem.module.scss';
import x from '../img/1.png'
import {removeWish, wishCompleted} from "../store/sliceWish";

const TodoItem = ({text, completed, id}) => {
const dispatch = useDispatch()
  console.log('render')
  return (
    <li className={s.Items}>
      <input id={id} type="checkbox" onChange={() => dispatch(wishCompleted({id}))} checked={completed}/>
      <label htmlFor={id}>
        <div className={s.tick} />
      </label>
      <span>{text}</span>
      <img alt='trash' src={x} onClick={() => dispatch(removeWish({id}))} className='delete' />
    </li>
  )
}

export default TodoItem;