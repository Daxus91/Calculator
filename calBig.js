const input= document.getElementById("input")
const inputRecord= document.getElementById("inputRecord")
const botonesNumero= Array.from(document.querySelectorAll(".number"))
const botonesOperacion= Array.from(document.querySelectorAll(".interaction"))
const clear= document.getElementById("clear")

let num1= 0
let num2= 0
let operador= ""

// const add= (num1,num2)=> num1+num2
// const sub= (num1,num2)=> num1-num2
// const mul= (num1,num2)=> num1*num2
// const div= (num1,num2)=> num1/num2

const operations= {
    add: (n1,n2) => n1 + n2,
    sub: (n1,n2) => n1 - n2,
    mul: (n1,n2) => n1 * n2,
    div: (n1,n2) => n1 / n2
}

botonesNumero.forEach(part => {
    part.addEventListener("click", ftn =>{
        input.value+= part.innerText
    })
})

botonesOperacion.forEach(part => {
    part.addEventListener("click", ftn =>{
        
        if(part.innerText==="="){

            num2=Number(input.value)

            inputRecord.value+= input.value

            const ansOps= operations[operador](num1,num2)
            input.value= ansOps


            // if(operador==="+"){
            //     const answer= add(num1,num2)
            //     input.value= answer
            // }else if(operador==="-"){
            //     const answer= sub(num1,num2)
            //     input.value= answer
            // }else if(operador==="*"){
            //     const answer= mul(num1,num2)
            //     input.value= answer
            // }else{
            //     const answer= div(num1,num2)
            //     input.value= answer
            // }
            return
        }
        
        num1= Number(input.value)
        operador=part.id
        inputRecord.value+= input.value+part.innerText
        input.value= "" 
    })
   
})

clear.addEventListener("click", ()=>{
    num1=""
    num2=""
    input.value=""
})

//Testing GIT








