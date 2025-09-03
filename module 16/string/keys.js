const computer = {
    brand : 'lenovo',
    price : 49999,
    processor : 'intel',
    hdd : '512gb',
    monitor : 'hp'
}

console.log(computer)

const values = Object.values(computer);
console.log(values)

const keys = Object.keys(computer);
console.log(keys)


for(const prop in computer){
    console.log(prop)
    console.log(computer[prop])
}