import { io } from 'socket.io-client';

export const socket = io('https://yeoguga.dmonster.kr:4001', {
    // autoConnect: false,
    // path: '/react/',       
});