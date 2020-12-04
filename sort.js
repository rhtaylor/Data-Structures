function customSort(ar){
    let min = ar[0]; 
    let minIndex = 0; 
    for (let i = 0; i < ar.length; i++){
        console.log(min < ar[i])
        if (ar[i] < min){
            console.log("IN LOOP", ar[i])
            min = ar[i]; 
            minIndex = i
        }
    } 
    ar.splice(minIndex, 1) 
    return console.log(min)
} 

customSort([10, 5, -1, 1, 6])