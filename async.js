console.log('start')

setTimeout(function(){
    console.log("Async-1")
},5)


setTimeout(function(){
    console.log('Async-2')
},5);

for(let i =0;i<550;i++){
    console.log('i am inside sync');
}
