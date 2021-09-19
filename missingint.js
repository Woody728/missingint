//First attempt:

function solution(A){
    let myMap = new Map();
    zarray = [];
    for(i=0;i<=A.length;i++){
        myMap.set(i+1,0);
        }
    for(i=0;i<A.length;i++){
        myMap.set(A[i], myMap.get(A[i])+1);
    }
    for(i=0;i<=A.length;i++){
        if(myMap.get(i+1)===0){
            zarray.push(i+1);
        }
    }
    answer = Math.min(...zarray);
    return answer;
}

console.log(solution(([1, 3, 6, 4, 1, 2])))
console.log(solution([1,2,3]));
console.log(solution([-1,-3]));

//Better solution I found online using sort:

function solution(A){
    let min = 1;
    A.sort((a,b)=>{return a-b});
    for(i=0;i<A.length;i++){
        if(min===A[i]){
            min++;
        }
    }
    return min;
}
