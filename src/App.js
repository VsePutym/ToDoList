import './App.scss';
import firebase from "firebase/compat/app";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {addToDo} from "./store/sliceTodo";
import InputField from "./components/InputField";
import ListItems from "./components/ListItems";

const firebaseConfig = {
  apiKey: "AIzaSyALGnziJbWnqAqFrYuzc9sgYYduic4deyI",
  authDomain: "todolist-2fbbd.firebaseapp.com",
  projectId: "todolist-2fbbd",
  storageBucket: "todolist-2fbbd.appspot.com",
  messagingSenderId: "196086162965",
  appId: "1:196086162965:web:2409c98e0b703152b8d01c"
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  const[text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addToDo({text}))
    setText('');
  }

  return (
    <div className="App">
      <h1>Аришкин список покупок</h1>
      <InputField addTask={addTask} text={text} setText={setText} />
      <ListItems />
    </div>
  );
}

export default App;

