let str = "MY name is Alex";

let count = 0;

for(let i = 0; i < str.length; i++){
    if(str.toLowerCase()[i] === 'a'){
        count++
    }
}

console.log(count);