//using selectors inside the element
let questions = document.querySelectorAll('.question');
//console.log(questions);
questions.forEach(function(question){
    let btn = question.querySelector('.question-btn');
    //console.log(btn)
    btn.addEventListener('click',function(){

        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text");
            }
        })



        question.classList.toggle("show-text");
    });

});




// traversing the dom


// let btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         //console.log(e.currentTarget.parentElement.parentElement);
//         let question =e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text")
//     });
// });

