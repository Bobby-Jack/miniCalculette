// exo1


let btn1 = document.querySelector('.exo1_btn')

btn1.addEventListener('click', ()=>{
    console.log("hello");
    let input1 = document.querySelector('.exo1_input1')
    let a = input1.value
    let input2 = document.querySelector('.exo1_input2')
    let b = input2.value
    let result = Number(a)+Number(b)
    console.log(result);
    let reponse = document.getElementById('response1')
    reponse.textContent = result

})


// exo 2

let btn2 = document.querySelector('.exo2_btn')

btn2.addEventListener('click', ()=>{
    let input1 = document.querySelector('.exo2_input1')
    let a = Number(input1.value)
    let input2 = document.querySelector('.exo2_input2')
    let b = Number(input2.value)
    let result;
    let select = document.querySelector('.exo2_select')
    console.log(select);
    let ope = select.value
    switch (ope) {
        case "+":
            result = a+b
            break;
        case "-":
            result = a-b
            break;
        case "*":
            result = a*b
            break;
        case "/":
            result = a/b
            break;
    
        default:
            alert('error : bad operator value')
            break;
    }

    console.log(result);
    let reponse = document.getElementById('response2')
    reponse.textContent = result
})


// exo3

let btn3 = document.querySelector('.exo3_btn')

let btnPlus = document.querySelector('.exo3.fa-plus')
let btnMinus = document.querySelector('.exo3.fa-minus')
let btnMulti = document.querySelector('.exo3.fa-times')
let btnDivid = document.querySelector('.exo3.fa-divide')

let exo3Operator = document.querySelector('.exo3_operator')



let operator = "fa-plus"


function changeForExo3_operator(newValue) {
    exo3Operator.classList.remove('fa-plus')
    exo3Operator.classList.remove('fa-minus')
    exo3Operator.classList.remove('fa-divide')
    exo3Operator.classList.remove('fa-times')
    
    exo3Operator.classList.add(newValue)

    operator= newValue
}

btnDivid.addEventListener('click', ()=>{
    changeForExo3_operator("fa-divide")
})
btnMinus.addEventListener('click', ()=>{
    changeForExo3_operator("fa-minus")
})
btnMulti.addEventListener('click', ()=>{
    changeForExo3_operator("fa-times")
})
btnPlus.addEventListener('click', ()=>{
    changeForExo3_operator("fa-plus")
})


btn3.addEventListener('click', ()=>{
    let input1 = document.querySelector('.exo3_input1')
    let a = Number(input1.value)
    let input2 = document.querySelector('.exo3_input2')
    let b = Number(input2.value)
    let result;    
    switch (operator) {
        case "fa-plus":
            result = a+b
            break;
        case "fa-minus":
            result = a-b
            break;
        case "fa-times":
            result = a*b
            break;
        case "fa-divide":
            result = a/b
            break;
    
        default:
            alert('error : bad operator value')
            break;
    }

    console.log(result);
    let reponse = document.getElementById('response3')
    reponse.textContent = result
})


//exo 4


let exo4_input1 = document.querySelector('.exo4_input1') 
let exo4_input2 = document.querySelector('.exo4_input2') 
let btn4 = document.querySelector('.exo4_btn')
let exo4_operator = 'fa-plus'

let exo4_select = document.querySelector('.exo4_select')

function changeForExo4_operator(newValue) {
    exo4_select.classList.remove('fa-plus')
    exo4_select.classList.remove('fa-minus')
    exo4_select.classList.remove('fa-divide')
    exo4_select.classList.remove('fa-times')
    
    exo4_select.classList.add(newValue)

    exo4_operator= newValue
}

exo4_input1.addEventListener('click', ()=>{
    exo4_input1.classList.add('exo4_focus')
    exo4_input2.classList.remove('exo4_focus')
})

exo4_input2.addEventListener('click', ()=>{
    exo4_input2.classList.add('exo4_focus')
    exo4_input1.classList.remove('exo4_focus')
})

let allNumBtn = document.getElementById('numbersExo4').childNodes

allNumBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        let target = document.querySelector('.exo4_focus')
        target.value = target.value + btn.innerText
    })
})


let allOperatorBtn = document.getElementById('operatorsExo4').childNodes

allOperatorBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        let valueBtn = btn.childNodes[1].classList[1]
        console.log(valueBtn);
        changeForExo4_operator(valueBtn)
    })
})

btn4.addEventListener('click', ()=>{
    let input1 = document.querySelector('.exo4_input1')
    let a = Number(input1.value)
    let input2 = document.querySelector('.exo4_input2')
    let b = Number(input2.value)
    let result;    
    switch (exo4_operator) {
        case "fa-plus":
            result = a+b
            break;
        case "fa-minus":
            result = a-b
            break;
        case "fa-times":
            result = a*b
            break;
        case "fa-divide":
            result = a/b
            break;
    
        default:
            alert('error : bad operator value')
            break;
    }

    console.log(result);
    let reponse = document.getElementById('response4')
    reponse.textContent = result
})