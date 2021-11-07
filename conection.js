const sio = io('http://127.0.0.1:8000');
sio.on('connect', () => {
    console.log('connected');
    sio.emit('graph_connect', 'Streaming!');
});
sio.on('disconnect', () => {
    console.log('disconnected');
});