function hanoi(n,A,C,B){


    if (n == 1) {
        console.log("Move disk 1 from rod ", A ,
            " to rod ",C)
        return;
    }
    hanoi(n - 1, A,B, C);
    console.log( "Move disk " ,n, " from rod ", A ," to rod ",C ) ;
    hanoi(n - 1, B,C, A); 

}


console.log(hanoi(4,'A','B','C'));