
let count=0;
let pointer=0;
let music= new Audio ('music/music.mp3');
    music.play();
let stop= ()=>{
        music.pause();
        document.getElementById('button').innerText= "paused";
}
let check= (you, comp)=>{
    console.log(comp);
    console.log(you);
    document.getElementById('Lucky_no').innerText= comp;
    document.getElementById('You_Guess').value== null;
    if(you==comp){
        count++;
        pointer++;
        return "Congratulations! '🎉🎉🎉🎊 You guess it correct.";
    }
    else{
        pointer++;
        return "Sorry! 😔😔😔 You guess it wrong."
    }
}

function show_score(){
    if(pointer>1){
        alert(`Your Score from the ${pointer} Guesses you made is: ${count}`);
    }
    else{
        alert('You have not started playing the Game.')
    }
}
let show= ()=>{
    let comp=Math.round(Math.random()*10) ;
    console.log(comp);
    let d= document.getElementById('You_Guess').value;
    document.getElementById('Your_Guess').style.display= 'block';
    document.getElementById('Your_Guess').innerText= d;
    let result= check(d, comp);
    setTimeout(() => {
        document.getElementById('Your_Guess').style.display= 'none';
        document.getElementById('Lucky_no').innerText= "?";
    }, 4000);
    document.getElementById('result_of_game').innerText= result;
    // if(music.ended===true){
    //     music.play();
    // }
}   

