function winElem(arr) {

    let temp = {};
    let result = [];
    let max=1;
    let val=arr[0];
    for (let i = 0; i < arr.length; i++) {

        if (temp[arr[i]]) {
            temp[arr[i]]++;
            if (temp[arr[i]]>max)
            {
                max = temp[arr[i]];
                val = arr[i]
            }
        }

        else
            temp[arr[i]] = 1;

    }


    return val;
}


console.log(winElem([1, 4, 3,3,3,3, 4, 5, 2, 2,2]));