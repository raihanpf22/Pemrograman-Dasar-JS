function  solution (A) {
    // write your code in JavaScript (Node.js 8.9.4)
   let total = A
    let positif = 0
    let arr=[]

    for(let i= 0; i<= total.length;i++){
        if(total[i]>0){
            arr.push(total[i])
        }
    }
    if (arr.length == 1){
        return arr[0]
    }else if (arr.length == 0){
        return 0
    }else{
    for (let j = 0; j<=2; j++){
        positif = positif + arr[j]
    }
    
        return positif
    }
}

// output 3 bilangan pertama positif
console.log(solution([3, -2, 0])) //3
console.log(solution([-9, -4, -2, -6])) //0
console.log(solution([4, -2, 0, 5, -2, 1, 6])) //10