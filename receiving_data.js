sio.on('graph_front', (data) => {
    console.log(myChart.data.datasets[0].data);
    let y1 = data['y1'];
    let y2 = data['y2'];
    let x = myChart.data.labels.at(-1) + 1;
    myChart.data.datasets[0].data.push([x, y1]);
    myChart.data.datasets[0].data.splice(0, 1);
    myChart.data.datasets[1].data.push([x, y2]);
    myChart.data.datasets[1].data.splice(0, 1);
    myChart.data.labels.push(x);
    myChart.data.labels.splice(0, 1);
    myChart.update();
    sio.emit('graph_connect', "Successful!");
});
