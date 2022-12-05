export class Quiz{
    constructor(results){
        this.results = results;
        this .tNoOfQuestions = results.length;
        this.currentQuest= 0;
        this.showQuestion();
        this.submitBtn = document.getElementById("next");
        this.submitBtn.addEventListener("click", this.nextQuestion.bind(this));
        this.score = 0;
    }


    showQuestion(){
        document.getElementById("question").innerHTML = this.results[this.currentQuest].question;
        document.getElementById("currentQuestion").innerHTML= this.currentQuest+1
        document.getElementById("totalNumberOfQuestions").innerHTML= this.tNoOfQuestions;

        let answers =[ this.results[this.currentQuest].correct_answer , ... this.results[this.currentQuest].incorrect_answers];

            function shuffle(array) {
                let currentIndex = array.length,  randomIndex;
            
                // While there remain elements to shuffle.
                while (currentIndex != 0) {
            
                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
            
                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
                }
            
                return array;
            }           
        shuffle(answers)
        let temp = "";
        for (let i = 0; i < answers.length; i++) {
        temp += `  <div class="form-check">
        <label class="form-check-label">
            <input type="radio" class="form-check-input" name="answer" id="" value="${answers[i]}" >
            ${answers[i]}
        </label>
        </div>
        `
        }
        document.getElementById("rowAnswer").innerHTML= temp;
            }

            nextQuestion(){
                let userAnswerElement = document.getElementsByName("answer");
                if ([...userAnswerElement].filter(el => el.checked ).length ==1 ) {
                    $("#alert").fadeOut(300);
                    this.checkUserAnswer();
                    this.currentQuest++;
                    if (this.currentQuest < this.tNoOfQuestions) {
                        this.showQuestion();
                    }
                        else{
                            $("#quiz").fadeOut(500, () => {
                                $("#finish").fadeIn(500)
                                document.getElementById("score").innerHTML = this.score;
                                document.getElementById("tryBtn").addEventListener("click",()=>{
                                    $("#finish").fadeOut(500,()=>{
                                        $("#setting").fadeIn(500);
                                    })
                                })
                            })
                        }
                    }
                    else{
                        $("#alert").fadeIn(300)
                    }
                }

            checkUserAnswer(){
                let userAnswerElement = document.getElementsByName("answer");
                let userAnswer = [...userAnswerElement].filter(el => el.checked)[0].value;
                 if (userAnswer ==  this.results[this.currentQuest].correct_answer){
                    this.score++;
                    $("#Correct").fadeIn(300, ()=> $("#Correct").fadeOut(300))
                    }
                    else{
                        $("#inCorrect").fadeIn(300, ()=> $("#inCorrect").fadeOut(300))

                    }


            
}


                
}