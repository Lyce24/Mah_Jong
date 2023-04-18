import { useState } from 'react';
import { useSocket } from './SocketProvider';
import '../index.css';

export default function CreateRoomButton() {

  const [roomNum, setRoomNum] = useState(null);
  const socket = useSocket();

  function handleClick() {
    console.log('Clicked');

    socket.send(JSON.stringify({
      'type': 'create_room',
    }));

    if (roomNum !== null) {
      window.location.href = `/room/${roomNum}`;
    } else {
      console.log('Error');
    }

    /* axios.get(`http://localhost:8000/api/create_room/`)
    .then(res => {
      window.location.href = `/room/${res.data.room_id}`;
    })
    .catch(err => {
      console.log(err.response.status);
      alert("Error");
    }); */
  }

  return (
    <div className="createRoomButton">
      <button type="button" onClick={handleClick} className='button'>Create a Game!</button>
    </div>

  );
}