var chartData = localStorage.getItem('chartPersist');
  if (chartData){
    data = JSON.parse(chartData);
    for (var i = 0; i <prodArray.length; i++) {
      questionsArray[i].questionStringTracker = data.datasets[0].data[i];
      rightAnswerArray[i].rightAnswerTracker = data.datasets[1].data[i];
      wrongAnswerOneArray[i].wrongAnswerOneTracker = data.datasets[2].data[i];
      wrongAnswerTwoArray[i].wrongAnswerTwoTracker = data.datasets[3].data[i];
      wrongAnswerThreeArray[i].wrongAnswerThreeTracker = data.datasets[4].data[i];
      catagoryArray[i].catagoryTracker = data.datasets[5].data[i];
    }

  }
  else{
    console.log('local Storage empty ');
    localStorage.setItem('chartPersist', JSON.stringify(data));
  }


var clearLS = document.getElementById('clearLSButton');
clearLS.addEventListener('click',clearLSHandler);

    function clearLSHandler (event) {
      console.log('i just cleared the local storage');
      localStorage.clear();
