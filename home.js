
let Texto_dinamico = document.getElementById('Texto_Dinamico')

let Data_Atual = new Date()
let Horas = Data_Atual.getHours()


if(Horas >= 5 && Horas <= 12){
    Texto_dinamico.innerText = "Bom dia, Seja Bem vindo(a)"
}else if(Horas < 18){
        Texto_dinamico.innerText = "Boa Tarde, Seja Bem vindo(a)"
    } else {
        Texto_dinamico.innerText = "Boa Noite, Seja Bem vindo(a)"
    }