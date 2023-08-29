window.onload = function () {
  
    var minutes = 0o0; 
    var minutes2 = 0o0;
    var minutes3 = 0o0;
    var minutes4 = 0o0;
    var minutes5 = 0o0;
    var seconds = 0o0; 
    var seconds2 = 0o0; 
    var seconds3 = 0o0; 
    var seconds4 = 0o0; 
    var seconds5 = 0o0; 
    var appendSeconds = document.getElementById("seconds")
    var appendSeconds_2 = document.getElementById("seconds-2")
    var appendSeconds_3 = document.getElementById("seconds-3")
    var appendSeconds_4 = document.getElementById("seconds-4")
    var appendSeconds_5 = document.getElementById("seconds-5")
    var appendMinutes = document.getElementById("minutes")
    var appendMinutes_2 = document.getElementById("minutes-2")
    var appendMinutes_3 = document.getElementById("minutes-3")
    var appendMinutes_4 = document.getElementById("minutes-4")
    var appendMinutes_5 = document.getElementById("minutes-5")
    var buttonStart = document.getElementById('button-start');
    var buttonStart_2 = document.getElementById('button-start-2');
    var buttonStart_3 = document.getElementById('button-start-3');
    var buttonStart_4 = document.getElementById('button-start-4');
    var buttonStart_5 = document.getElementById('button-start-5');
    var buttonStop = document.getElementById('button-stop');
    var buttonStop_2 = document.getElementById('button-stop-2');
    var buttonStop_3 = document.getElementById('button-stop-3');
    var buttonStop_4 = document.getElementById('button-stop-4');
    var buttonStop_5 = document.getElementById('button-stop-5');
    var buttonStopAll = document.getElementById('button-stop-all')
    var Interval ;
    var Interval2 ;
    var Interval3 ;
    var Interval4 ;
    var Interval5 ;
    
    

  

    ///////////////////////////////////////////////////////////////////Timer 1////////////////////////////////////////////////////////////////////
    buttonStart.onclick = function() {
       Interval = setInterval(startTimer1, 1000);
    }
    
      buttonStop.onclick = function() {
        clearInterval(Interval)
            seconds = "00";
            minutes = "00";
            appendSeconds.innerHTML = seconds;
            appendMinutes.innerHTML = minutes;
    }
    
    function startTimer1 () {
        seconds++; 
      
      if(seconds <= 9){
        appendSeconds.innerHTML = "0" + seconds;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
        
      } 
      
      if (seconds > 59) {
        console.log("minutes");
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
      }
      
      if (minutes > 9){
        appendMinutes.innerHTML = minutes;
      }
    
    }
    ///////////////////////////////////////////////////////////////////Timer 2////////////////////////////////////////////////////////////////////
    buttonStart_2.onclick = function() {
         Interval2 = setInterval(startTimer2, 1000);
      }
      
        buttonStop_2.onclick = function() {
          clearInterval(Interval2)
              seconds2 = "00";
              minutes2 = "00";
              appendSeconds_2.innerHTML = seconds2;
              appendMinutes_2.innerHTML = minutes2;
      }
      
      function startTimer2 () {
          seconds2++; 
        
        if(seconds2 <= 9){
            appendSeconds_2.innerHTML = "0" + seconds2;
        }
        
        if (seconds2 > 9){
            appendSeconds_2.innerHTML = seconds2;
          
        } 
        
        if (seconds2 > 59) {
          console.log("minutes");
          minutes2++;
          appendMinutes_2.innerHTML = "0" + minutes2;
          seconds2 = 0;
          appendSeconds_2.innerHTML = "0" + 0;
        }
        
        if (minutes2 > 9){
            appendMinutes_2.innerHTML = minutes2;
        }
      
      }
        ///////////////////////////////////////////////////////////////////Timer 3////////////////////////////////////////////////////////////////////
        buttonStart_3.onclick = function() {
          Interval3 = setInterval(startTimer3, 1000);
       }
       
         buttonStop_3.onclick = function() {
           clearInterval(Interval3)
               seconds3 = "00";
               minutes3 = "00";
               appendSeconds_3.innerHTML = seconds3;
               appendMinutes_3.innerHTML = minutes3;
       }
       
       function startTimer3 () {
           seconds3++; 
         
         if(seconds3 <= 9){
             appendSeconds_3.innerHTML = "0" + seconds3;
         }
         
         if (seconds3 > 9){
             appendSeconds_3.innerHTML = seconds3;
           
         } 
         
         if (seconds3 > 59) {
           console.log("minutes");
           minutes3++;
           appendMinutes_3.innerHTML = "0" + minutes3;
           seconds3 = 0;
           appendSeconds_3.innerHTML = "0" + 0;
         }
         
         if (minutes3 > 9){
             appendMinutes_3.innerHTML = minutes3;
         }
       
       }
          ///////////////////////////////////////////////////////////////////Timer 4////////////////////////////////////////////////////////////////////
          buttonStart_4.onclick = function() {
            Interval4 = setInterval(startTimer4, 1000);
         }
         
           buttonStop_4.onclick = function() {
             clearInterval(Interval4)
                 seconds4 = "00";
                 minutes4 = "00";
                 appendSeconds_4.innerHTML = seconds4;
                 appendMinutes_4.innerHTML = minutes4;
         }
         
         function startTimer4 () {
             seconds4++; 
           
           if(seconds4 <= 9){
               appendSeconds_4.innerHTML = "0" + seconds4;
           }
           
           if (seconds4 > 9){
               appendSeconds_4.innerHTML = seconds4;
             
           } 
           
           if (seconds4 > 59) {
             console.log("minutes");
             minutes4++;
             appendMinutes_4.innerHTML = "0" + minutes4;
             seconds4 = 0;
             appendSeconds_4.innerHTML = "0" + 0;
           }
           
           if (minutes4 > 9){
               appendMinutes_4.innerHTML = minutes4;
           }
         
         }
          ///////////////////////////////////////////////////////////////////Timer 5////////////////////////////////////////////////////////////////////
          buttonStart_5.onclick = function() {
            Interval5 = setInterval(startTimer5, 1000);
         }
         
           buttonStop_5.onclick = function() {
             clearInterval(Interval5)
                 seconds5 = "00";
                 minutes5 = "00";
                 appendSeconds_5.innerHTML = seconds5;
                 appendMinutes_5.innerHTML = minutes5;
         }
         
         function startTimer5 () {
             seconds5++; 
           
           if(seconds5 <= 9){
               appendSeconds_5.innerHTML = "0" + seconds5;
           }
           
           if (seconds5 > 9){
               appendSeconds_5.innerHTML = seconds5;
             
           } 
           
           if (seconds5 > 59) {
             console.log("minutes");
             minutes5++;
             appendMinutes_5.innerHTML = "0" + minutes5;
             seconds5 = 0;
             appendSeconds_5.innerHTML = "0" + 0;
           }
           
           if (minutes5 > 9){
               appendMinutes_5.innerHTML = minutes5;
           }
         
         }
///////////////////////////////////////////////////////////////////Stop All////////////////////////////////////////////////////////////////////
      buttonStopAll.onclick = function() {
          clearInterval(Interval)
            seconds = "00";
            minutes = "00";
          clearInterval(Interval2)
            seconds2 = "00";
            minutes2 = "00";
          clearInterval(Interval3)
            seconds3 = "00";
            minutes3 = "00";
          clearInterval(Interval4)
            seconds4 = "00";
            minutes4 = "00";
          clearInterval(Interval5)
            seconds5 = "00";
            minutes5 = "00";
        appendSeconds_5.innerHTML = seconds5;
        appendSeconds_4.innerHTML = seconds4;
        appendSeconds_3.innerHTML = seconds3;
        appendSeconds_2.innerHTML = seconds2;
        appendSeconds.innerHTML = seconds;
        appendMinutes_5.innerHTML = minutes5;
        appendMinutes_4.innerHTML = minutes4;
        appendMinutes_3.innerHTML = minutes3;
        appendMinutes_2.innerHTML = minutes2;
        appendMinutes.innerHTML = minutes;
}

   }