var chartData = JSON.parse(localStorage.getItem('guacaResults'));

var chartCanvas = document.getElementById('canvas').getContext('2d');

var data = {
    labels: ["Math", "Science", "Geography", "Grammar"],
    datasets: [
        {
            label: "Questions Displayed",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81]
        },
        {
            label: "Correct Answers No.",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19]
        },
        {
            label: "Incorrect Answers No.",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81]
        },
    ]
};

for (i = 0; i < 39; i++) {
  if (chartData[i].category == 'math') {
     data.datasets[0].data[1] += chartData[i].questionDisplayCounter;
     data.datasets[1].data[1] += chartData[i].rightAnswerCounter;
     data.datasets[2].data[1] += chartData[i].wrongAnswerCounter;
   } else if (chartData[i].category == 'Science') {
     data.datasets[0].data[2] += chartData[i].questionDisplayCounter;
     data.datasets[1].data[2] += chartData[i].rightAnswerCounter;
     data.datasets[2].data[2] += chartData[i].wrongAnswerCounter;
   } else if (chartData[i].category == 'Geography') {
     data.datasets[0].data[3] += chartData[i].questionDisplayCounter;
     data.datasets[1].data[3] += chartData[i].rightAnswerCounter;
     data.datasets[2].data[3] += chartData[i].wrongAnswerCounter;
   } else if (chartData[i].category == 'Grammar') {
     data.datasets[0].data[3] += chartData[i].questionDisplayCounter;
     data.datasets[1].data[3] += chartData[i].rightAnswerCounter;
     data.datasets[2].data[3] += chartData[i].wrongAnswerCounter;
   }
   }


var guacaBarChart = new Chart (chartCanvas).Bar(data);

  // if (chartData){
  //   data = JSON.parse(chartData);
  //   for (var i = 0; i < prodArray.length; i++) {
  //     questionsArray[i].questionStringTracker = data.datasets[0].data[i];
  //     rightAnswerArray[i].rightAnswerTracker = data.datasets[1].data[i];
  //     wrongAnswerOneArray[i].wrongAnswerOneTracker = data.datasets[2].data[i];
  //     wrongAnswerTwoArray[i].wrongAnswerTwoTracker = data.datasets[3].data[i];
  //     wrongAnswerThreeArray[i].wrongAnswerThreeTracker = data.datasets[4].data[i];
  //     catagoryArray[i].catagoryTracker = data.datasets[5].data[i];
  //   }
  //
  // }
  // else{
  //   console.log('local Storage empty ');
  //   localStorage.setItem('chartPersist', JSON.stringify(data));
  // }


// var clearLS = document.getElementById('clearLSButton');
// clearLS.addEventListener('click',clearLSHandler);
//
//     function clearLSHandler (event) {
//       console.log('i just cleared the local storage');
//       localStorage.clear();
