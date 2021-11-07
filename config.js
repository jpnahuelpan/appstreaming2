var arrayLength = 10
var newArray1 = []
var newArray2 = []
var labels = []

for(let i = 0; i < arrayLength; i++) {
    let y1 = Math.round(Math.random()*10) + 1;
    let y2 = Math.round(Math.random()*10) + 1;
    newArray1[i] = [i, y1];
    newArray2[i] = [i, y2];
    labels[i] = i;
};

const config = {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Line 1',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgb(255, 99, 132)',
          borderDash: [8, 4],
          fill: true,
          data: newArray1,
        },
        {
          label: 'Line 2',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgb(54, 162, 235)',
          cubicInterpolationMode: 'monotone',
          fill: true,
          data: newArray2,
        }
      ]
    },
    options: {
      scales: {
        x: {
          display: true
        },
        y: {
          display: true
        }
      },
      animation: {
        duration: 0 
      }
    }
  };
