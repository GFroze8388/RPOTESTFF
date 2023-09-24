
alert("11")
function start(){
  let playAgain = true;
  let numberOfQuestions;
  const colour = ["Белый".toLowerCase(), "Синий".toLowerCase(), "Красный".toLowerCase()]
//Сколько вопросов
  do{
    numberOfQuestions = prompt("Введи сколько вопросов вы хотите увидеть(1-10)")
    if(numberOfQuestions < 1 || numberOfQuestions > 10){
      alert("Введи ВОЗМОЖНЫЕ ЧИСЛА")
    }
  }while(numberOfQuestions < 1 || numberOfQuestions > 10)


//Викторина
    do{
//Присваивание №2
      const questions = ["Как расшифровывается СССР?", "Кто управлял в 1930 году СССР?(Фамилия)", "Когда был заключен пакт Молотова-Риббентропа(год)", "Назови столицу СССР", "Кто написал музыку для гимн СССР(Фамилия)","Как расшифровывается РФ?", "Кто был основателем СССР?(Фамилия)","В каком году распался СССР?","В каком году В.В.Путин стал призидентом?","Назови любой цвет изображенный на флаге россии"],
            answers = ["Союз Советских Социалистических Республик", "Сталин", "1939", "Москва", "Александров", "Российская Федерация", "Ленин","1993","2000", "nullttgg"];
      let userAnswer = 0;
      let rightAnswers = 0;
      
      
//Ответ на вопрос
      for (let times = 0; times < numberOfQuestions; times++) {
        userAnswer = prompt(questions[times])
        userAnswer = userAnswer.toLowerCase()
        if(userAnswer == colour[1] || userAnswer == colour[2] || userAnswer == colour[0]){
          if(times == 9){
            answers[9] = userAnswer
          } 
         } 
        if(userAnswer == answers[times].toLowerCase()){
          alert("И это правильный ответ!");
          rightAnswers += 1;
        }else{
          alert("Ответ не верный!");
        }
      }
      let procent = Math.round(100 / numberOfQuestions * rightAnswers)
      alert("Вопросов решили правильно: " + rightAnswers + ". Вопросы закончились. Ваш процент прохождения: " + procent +"%") 
      
//вопрос о еще одной попытке
      if(rightAnswers != numberOfQuestions){
        playAgain = confirm("Попробовать еще раз?");
      }else{
        playAgain = false;
      }
    }
  while(playAgain == true)


//прощание
    alert("До встречи!");
}
