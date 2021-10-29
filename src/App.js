import './App.scss';
import firebase from "firebase/compat/app";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addToDo} from "./store/sliceTodo";
import InputField from "./components/InputField";
import ListItems from "./components/ListItems";
import {addWish} from "./store/sliceWish";
import React from "react";
import Modal from "./components/Modal/Modal";

const firebaseConfig = {
  apiKey: "AIzaSyALGnziJbWnqAqFrYuzc9sgYYduic4deyI",
  authDomain: "todolist-2fbbd.firebaseapp.com",
  projectId: "todolist-2fbbd",
  storageBucket: "todolist-2fbbd.appspot.com",
  messagingSenderId: "196086162965",
  appId: "1:196086162965:web:2409c98e0b703152b8d01c"
};

firebase.initializeApp(firebaseConfig);

const App = React.memo(() => {

  const[text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addToDo({text}))
    setText('');
  }

  const addTaskWish = () => {
    dispatch(addWish({text}));
    setText('');
  }

  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="App">
      <span className='title'>Аришкин список покупок</span>
      <InputField addTaskWish={addTaskWish} addTask={addTask} text={text} setText={setText} />
      <ListItems />
      <Modal active={modalActive} setActive={setModalActive}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, laborum.</p>
      </Modal>
      <button onClick={() => setModalActive(true)}>Test animated modal active</button>
    </div>
  );
})

export default App;

