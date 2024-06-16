const questions = [
    {
        question: "what is your name 1 ?",
        answers: [
            {text: "javed",correct:  true},
            {text: "junaid",correct: false},
            {text: "arsalan",correct: false},
            {text: "taimur",correct: false},


        ]
    },
    {
        question: "what is your name 2 ?",
        answers: [
            {text: "javed",correct:  false},
            {text: "junaid",correct:  true},
            {text: "arsalan",correct: false},
            {text: "taimur",correct: false},
        ] 
    },
    {
        question: "what is your name 3 ?",
        answers: [
            {text: "javed",correct:   false},
            {text: "junaid",correct: false},
            {text: "arsalan",correct:  true},
            {text: "taimur",correct: false},


        ] 
    },
    {
        question: "what is your name 4 ?",
        answers: [
            {text: "javed",correct:   false},
            {text: "junaid",correct: false},
            {text: "arsalan",correct: false},
            {text: "taimur",correct:  true},


        ]
    },
    {
        question: "what is your name 4 ?",
        answers: [
            {text: "javed",correct:   false},
            {text: "junaid",correct: false},
            {text: "arsalan",correct: false},
            {text: "taimur",correct:  true},


        ]
    }
    
];




const questionElement = document.getElementById("question");
const answerbtn = document.getElementById("answer-buttons");
const nextbtn = document.getElementById("next-btn");

let currentquestionindex = 0;
let score = 0;

function startquiz(){
    restate();
    currentquestionindex = 0;
     score = 0;
     nextbtn.innerHTML="Next";
     showquestion();

}

function showquestion(){
    restate();
    let currentquestion = questions[currentquestionindex];
    let questionno = currentquestionindex + 1;
    questionElement.innerHTML = questionno + ". "+ currentquestion.question;

currentquestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbtn.appendChild(button);
    if(answer.correct){

        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectanswer);
});

}
function restate(){
    nextbtn.style.display="none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);

    }
}
function selectanswer(e){
    const selectbtn = e.target;
    const iscorrect = selectbtn.dataset.correct === "true";
    if(iscorrect){
selectbtn.classList.add("correct");
score++;
    }else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbtn.style.display = "block";
}
nextbtn.addEventListener("click",() =>{
    if(currentquestionindex < questions.length){
        handlenextbtn();
    }else{
        startquiz();
    }
})
function handlenextbtn(){
    currentquestionindex++;
    if(currentquestionindex < questions.length){
showquestion();
    }else{
        showscore();
    }
}

function showscore(){
restate();
questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
nextbtn.innerHTML = "play again";
nextbtn.style.display = "block";
}
startquiz();

