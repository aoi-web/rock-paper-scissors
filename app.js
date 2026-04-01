let userScore=0;
let compScore=0;
let userScoreText=document.querySelector("#user-score");
let compScoreText=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const choiceId=choice.getAttribute("id");
        play(choiceId)
    })
})

const play = (user) =>{

    console.log("user choice = "+user)
    let comp=genCompChoice();
     console.log("comp choice = "+comp)

     if(user===comp){
        draw();
        msg.innerText="Game Was Draw";
         msg.style.backgroundColor="blue";
     }
     else{
        let userWin= true;
        if(user==="rock"){
            if(comp==="paper"){
                userWin=false;
            }
            else{
            userWin=true;
            }
        }
        else if(user==="paper"){
            if(comp==="rock"){
                userWin=true;
            }
            else{
                userWin =false;
            }
        }
        else{
            if(comp==="paper"){
                userWin=true;
            }
            else{
                userWin=false;
            }
        }
        if(userWin){
            userScore++;
        }
        else{
            compScore++;
        }
        console.log(userWin);
        showWinner(userWin,user,comp)
     }
     

}

const genCompChoice = ()=>{

    const options = ["rock","paper","scissors"];
    let ind= Math.floor(Math.random()*3);
    return options[ind];

}

const draw =()=>{
    console.log("the game was a draw");
}

const showWinner = (userWin,user,comp)=>{

    if(userWin){
        msg.innerText=`You Win !! Your ${user} beats ${comp} `;
        msg.style.backgroundColor="green";
        userScoreText.innerText=userScore;
    }
    else{
         msg.innerText=`You Lost !! Their ${comp} beats ${user} `;
         msg.style.backgroundColor="red";
         compScoreText.innerText=compScore;
    }
}