import {  Navigate, Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function Main(){

    return(
        <div>
            <Routes>
            <Route path="/" element={<Navigate replace to="/login" />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </div>
    )
}

export default Main 