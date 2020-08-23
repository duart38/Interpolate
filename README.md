# Interpolate
Deno text interpolator

## example
```JavaScript
let t = new Interpolation("hello {{first}} {{second}}");

t.bind((dat)=>{
    console.log("bound", dat)
})

console.log(t.fill("first", "lovely"));
console.log(t.fill("second", "world"));
```