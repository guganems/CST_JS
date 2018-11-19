// Your code here
class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(point2){
        var newX = this.x + point2.x;
        var newY = this.y + point2.y;

        return new Point(newX, newY);
    }
}

console.log(new Point(1, 2).plus(new Point(2, 1)))
// → Point{x: 3, y: 3}
