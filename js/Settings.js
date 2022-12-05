import {Quiz}from "./quiz.js"

export class Settings {

    constructor(){
            this.catogeryEL = document.getElementById("category");
            this. diffucltyEL = document.getElementsByName("difficulty");
            this.numberOfQuestionsEL = document.getElementById("numberOfQuestions");
            this.startBtnEL= document.getElementById("startBtn");
            this.startBtnEL.addEventListener("click",this.StartQuiz.bind(this) )
    }
    
    async StartQuiz(){
        this.startBtnEL.disabled = false;
        let catogery= this.catogeryEL.value;
        let diffuclty  = [...this.diffucltyEL].filter(el => el.checked )[0].value;   
        let numberOfQuestions = this.numberOfQuestionsEL.value;
        let api = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${catogery}&difficulty=${diffuclty}`
        let results =    await this.fethcAPI(api);
        if (results.length > 0) {
            $("#setting").fadeOut(500, ()=> $("#quiz").fadeIn(500))
        }
    let quiz = new Quiz(results);
    this.startBtnEL.disabled = true;

    }
async fethcAPI(api){

    let response = await fetch(api);
    let results =  await response .json();
    return results.results
}
    }