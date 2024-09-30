function compareTwoArrays() {
    let a = [1, 2, 3, 4,5];
    let b = [1, 2, 3, 5];

  
    if (a.length != b.length)
        return "False";
    else {

        for (let i = 0; i < a.length; i++)
            if (a[i] != b[i])
                return "False";
        return "True";
    }
}
let v = compareTwoArrays();

console.log(v);
