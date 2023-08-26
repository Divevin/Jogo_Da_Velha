//Variaveis Globais
let vez = "X"
let st = document.getElementById("status")
let r1 = document.getElementById("r1")
let r2 = document.getElementById("r2")
let cont = "1"

//                Pegar elemento(ID DO HTML)

let q1 = document.getElementById("q1")
let q2 = document.getElementById("q2")
let q3 = document.getElementById("q3")

let q4 = document.getElementById("q4")
let q5 = document.getElementById("q5")
let q6 = document.getElementById("q6")

let q7 = document.getElementById("q7")
let q8 = document.getElementById("q8")
let q9 = document.getElementById("q9")










function verificaVitoria() {
    if (q1.innerText == "X" && q2.innerText == "X" && q3.innerText == "X" ||
        q4.innerText == "X" && q5.innerText == "X" && q6.innerText == "X" ||
        q7.innerText == "X" && q8.innerText == "X" && q9.innerText == "X" ||

        q1.innerText == "X" && q4.innerText == "X" && q7.innerText == "X" ||
        q2.innerText == "X" && q5.innerText == "X" && q8.innerText == "X" ||
        q3.innerText == "X" && q6.innerText == "X" && q9.innerText == "X" ||

        q1.innerText == "X" && q5.innerText == "X" && q9.innerText == "X" ||
        q7.innerText == "X" && q5.innerText == "X" && q3.innerText == "X" 
        ){
        st.innerHTML = "<b>X Venceu <b>" +
            "<button onclick='resetar()' >RESETAR</button>"
        r1.innerText = parseInt(r1.innerText) + 1

    } else if (q1.innerText == "O" && q2.innerText == "O" && q3.innerText == "O" ||
               q4.innerText == "O" && q5.innerText == "O" && q6.innerText == "O" ||
               q7.innerText == "O" && q8.innerText == "O" && q9.innerText == "O" ||

               q1.innerText == "O" && q4.innerText == "O" && q7.innerText == "O" ||
               q2.innerText == "O" && q5.innerText == "O" && q8.innerText == "O" ||
               q3.innerText == "O" && q6.innerText == "O" && q9.innerText == "O" ||

               q1.innerText == "O" && q5.innerText == "O" && q9.innerText == "O" ||
               q7.innerText == "O" && q5.innerText == "O" && q3.innerText == "O") {
        console.log("O Venceu")
        st.innerHTML = "<b>O Venceu <b>" +
            "<button onclick='resetar()'>RESETAR</button>"
        r2.innerText = parseInt(r2.innerText) + 1
    }

}



function mudaQuadradinho(quadradinho) {
    if (quadradinho.innerText == "") {
        if (vez == "X") {
            quadradinho.innerText = "X"
            vez = "O"
        } else {
            quadradinho.innerText = "O"
            vez = "X"
        }

        verificaVitoria()
    }
}

function resetar() {

    q1.innerText = ""
    q2.innerText = ""
    q3.innerText = ""

    q4.innerText = ""
    q5.innerText = ""
    q6.innerText = ""

    q7.innerText = ""
    q8.innerText = ""
    q9.innerText = ""

}

