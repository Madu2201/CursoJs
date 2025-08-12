function fatorial(n) {
   let far = 1;
   for (let c = n; c > 1; c--) {
       far *= c;
   }
}

console.log(fatorial(5)); // Output: 120

// 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(n) {
    if (n === 0 || n === 1) {   
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

console.log(fatorial(5)); // Output: 120

/*
5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 x 4! = 5 x (4 x 3 x 2 x 1) = 5 x 24 = 120
5! = 5 x fatorial(4)
*/