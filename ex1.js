user_input=prompt("Введите число");
if  (typeof +user_input == 'number' && !isNaN(user_input)){
  if (user_input===""){
    alert ("Упс, кажется, вы ошиблись")
  }else{
    if (+user_input%2===0){
      alert("Число четное")
    }else{
      alert("Число нечетное")
    }
  }
}else{
  alert("Упс, кажется, вы ошиблись")
}