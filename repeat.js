function repeatElem(arr){

    let temp={};
    let result=[];
    for(let i=0;i<arr.length;i++){

        if(temp[arr[i]]){
            result.push(arr[i]);
        }

        else
        temp[arr[i]]=true;

    }


    return result;
}


console.log(repeatElem([1,4,3,4,5,2,2]));