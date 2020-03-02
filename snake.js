function detectLoop(head){

    if(!head)
     return "snake";
    let slow=head,fast=head.next;

    while(slow){
        if(slow==fast)
        return "snail";
          
        slow=slow.next;
        if(slow)
        fast=slow.next;

    }
 return "snake";
}
