function f([x, y] = [1, 2], {z: z} = {z: 3}){
    return x + y + z;
}

console.log(f());