class queue{

    constructor(){
        this.arr=[];
    }

    enqueue(val){
        this.arr.push(val);
    }

    dequeue(){
        this.arr.shift();
    }

}

function maxQueue(arr,k){

    let result=[];
    let i=0;
    let max=-10000; // it is min value
    for(let j=0;j<k;j++){
       if(arr[j]>max)
         max=arr[j]
    }
    result.push(max);

    while(i+k<arr.length){
        if(arr[i+k]>max)
        max=arr[i+k];

        result.push(max);
        i++;
    }

return result;
}

function maxQueueBruteForce(arr,k){

    let result=[];
    for(let i=0;i<=arr.length-k;i++){
        let max=-1,j=i;
        while(j<k+i){
            max=Math.max(max,arr[j]);
            j++;
        }
        result.push(max);
    }
 return result;
}

console.log(maxQueue([1,3,-1,-3,5,3,6,7],3));
console.log(maxQueueBruteForce([1, 3, -1, -3, 5, 3, 6, 7], 3));