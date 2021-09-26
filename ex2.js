let X = []; //change X to get different result
switch(typeof X){
  case ('boolean'):
    console.log("Х - логическая переменная");
    break;
  case ('string'):
    console.log("Х - строка");
    break;
  case ('number'):
    console.log("Х - число");
    break;
  default:
    console.log("Тип Х не определен");
}