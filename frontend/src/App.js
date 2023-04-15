import MainPage from './components/MainPage';
import { Route, Routes } from 'react-router-dom';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import RoomPage from './components/RoomPage';

export default function App(prop) {
    return (
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/room/:roomid' element={<RoomPage/>}/>
      </Routes>
    );
}
