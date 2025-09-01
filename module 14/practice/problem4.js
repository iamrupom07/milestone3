var myMarks = 48;
var myFriendsMarks = 36;

if (myMarks > 80){
    if(myFriendsMarks > 80){
        console.log("go for a lunch");
    }
    else if(myFriendsMarks < 80 && myFriendsMarks >= 60){
        console.log("good luck next time");
    }
    else if(myFriendsMarks < 60 && myFriendsMarks >= 40){
        console.log("keep your friend's message unseen.");
    }
    else{
        console.log("Block your friend");
    }
}
else{
    console.log("go to home and sleep and act sad");
}