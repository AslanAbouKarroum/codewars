// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// My Solution
function perimeter(n) {
    if(n==0) return 4;
    let res = [1,1];
    while(res.length<n+1){
        res.push(res.slice(-2).reduce((acc,num)=>acc+num));
    };
    return res.reduce((acc,num)=>acc+num)*4;
};

