import io from 'socket.io-client';

const socket = io.connect('https://destructochat.herokuapp.com/');

export default socket;
