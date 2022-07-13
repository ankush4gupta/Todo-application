
import { useState } from "react";
import { Routes, Route } from "react-router-dom"

import './App.css'
import { Create } from './components/Create';
import { Detail } from "./components/Detail";
import { Login } from './components/Login';
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Register"
import { Todo } from './components/Todo';
import { Protected } from "./components/Protected"


function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const logout = (data) => {
    console.log(data,"getting")
    setisLoggedIn(data)
  }


  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} logout={logout}/>
      <Routes>
        <Route path="/login" element={<Login logout={logout} />}></Route>
        <Route path="/register" element={<Register logout={logout} />}></Route>

        <Route path="/todo" element={
          <Protected isLoggedIn={isLoggedIn}>
            <Todo/>
          </Protected>
        }></Route>


        <Route path="/create" element={<Create />}></Route>
        <Route path="/:taskId" element={<Detail />}></Route>
      </Routes>

    </div>
  )
}

export default App