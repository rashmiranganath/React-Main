var name = "Ninja";

console.log(this.name)

function bike() {
    console.log(this.name);
}
    
console.log(this)
bike();           