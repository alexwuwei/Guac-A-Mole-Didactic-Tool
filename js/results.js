var chartData = JSON.parse(localStorage.getItem('guacaResults'));

var chartCanvas = document.getElementById('canvas').getContext('2d');

var meetTheTeam = document.getElementById('meetTheTeam');
var playAgain = document.getElementById('playAgain');

meetTheTeam.addEventListener('click', teamHandle);
playAgain.addEventListener('click', playHandle);

function teamHandle(event) {
  window.location = 'team.html';
}

function playHandle(event) {
  window.location = 'main.html';
}



var data = {
    labels: ["Math", "Science", "Geography", "Grammar"],
    datasets: [
        {
            label: "Questions Displayed",
            fillColor: "rgb(255,117,26)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgb(173, 173, 133)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [0, 0, 0, 0]
        },
        {
            label: "Correct Answers No.",
            fillColor: "rgb(51,102,0)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgb(153, 153, 38)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [0, 0, 0, 0]
        },
        {
            label: "Incorrect Answers No.",
            fillColor: "rgb(51,3,99)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgb(229, 230, 25)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [0, 0, 0, 0]
        },
    ]
};

for (i = 0; i < 39; i++) {
  if (chartData[i].category == 'math') {
     data.datasets[0].data[1] += chartData[i].questionDisplayCounter;
     console.log('math thing found');
     data.datasets[1].data[1] += chartData[i].rightAnswerCounter;
     console.log('math thing found');
     data.datasets[2].data[1] += chartData[i].wrongAnswerCounter;
     console.log('math thing found');
   } else if (chartData[i].category == 'Science') {
     data.datasets[0].data[2] += chartData[i].questionDisplayCounter;
     console.log('science thing found');
     data.datasets[1].data[2] += chartData[i].rightAnswerCounter;
     console.log('science thing found');
     data.datasets[2].data[2] += chartData[i].wrongAnswerCounter;
     console.log('science thing found');
   } else if (chartData[i].category == 'Geography') {
     data.datasets[0].data[3] += chartData[i].questionDisplayCounter;
     console.log('geography thing found');
     data.datasets[1].data[3] += chartData[i].rightAnswerCounter;
     console.log('geography thing found');
     data.datasets[2].data[3] += chartData[i].wrongAnswerCounter;
     console.log('geography thing found');
   } else if (chartData[i].category == 'Grammar') {
     data.datasets[0].data[3] += chartData[i].questionDisplayCounter;
     console.log('grammar thing found');
     data.datasets[1].data[3] += chartData[i].rightAnswerCounter;
     console.log('grammar thing found');
     data.datasets[2].data[3] += chartData[i].wrongAnswerCounter;
     console.log('grammar thing found');
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
