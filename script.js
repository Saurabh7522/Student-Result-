
const marks = () => {
    let math = document.getElementById("math").value;
    let english = document.getElementById("english").value;
    let sanskrit = document.getElementById("sanskrit").value;
    let science = document.getElementById("science").value;
    let socailscience = document.getElementById("socailscience").value;
    let hindi = document.getElementById("hindi").value;
    let result = document.querySelector(".result")
    let inputVal = document.querySelector(".inputVal");
    let grades = "";
  

  
    let totalGrades = parseFloat(math) + parseFloat(english) + parseFloat(sanskrit) + parseFloat(science) + parseFloat(socailscience) + parseFloat(hindi);
  
    let percentage = (totalGrades / 600) * 100;

    if (percentage < 100 && percentage >= 80) {
      grades = "A";
    } else if (percentage < 80 && percentage >= 60) {
      grades = "B";
    } else if (percentage < 59 && percentage >= 40) {
      grades = "C";
    } else {
      grades = "You are Fail";
    };
  
    if (percentage >= 39.5) {
      result.innerHTML = `Out of 600 your total marks is ${totalGrades} and percentage is ${percentage}% and <br> your grade is ${grades}.  You are Pass.`;
    } else {
      result.innerHTML = `Out of 600 your total marks is ${totalGrades} and percentage is ${percentage}% and <br> your grade is ${grades}.   You are Fail.`;
    }
    
    // let a = result.innerHTML > 600 ? true : alert('pls Enter valid marks');
    if(percentage > 100){
        // alert('pls Enter valid marks');
        result.innerHTML ="Pls Enter valid Data ";

    };
    
  };
  
  
  
  
  
  
  
  