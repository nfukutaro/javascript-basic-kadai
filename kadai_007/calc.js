//変数numに任意の整数を代入する
num = 6

if (num % 3 === 0 && num % 5 === 0){
    console.log('3と5の倍数です');
}
else if(num % 5 === 0){
    console.log('5の倍数です');
}
else if(num % 3 === 0){
    console.log('3の倍数です');
}
else{
    console.log(num)
}
