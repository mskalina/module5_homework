let arr = ["п", "п", "п", "п", "п"];
let flag = 1;
console.log(arr.length);
for(let i=1; i<arr.length-1; i=i+1){
    if (arr[0]==arr[i]){
        flag=flag+1;
    }
}
if (flag==4) {
    ans=true;
}else{
    ans=false;
}
console.log(ans)