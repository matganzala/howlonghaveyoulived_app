let lifeDateEntry = prompt("Digite a data de nascimento (formato DD/MM/YYYY)")//Data de nascimento
let lifeDate = moment(lifeDateEntry, "DD/MM/YYYY")//conversão de uma String para data
let today = moment()//data de hoje, trazendo o moment para retornar a data atual
let dateDiff = today - lifeDate//data de hoje - data de partida
let chosenOption = prompt("Escolha como gostaria de exibir o tempo de vida\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias")
if (chosenOption == 1) {
    let secondsOflife = Math.round/*Biblioteca para quebrar a diferença na divisão*/(dateDiff / 1000)//Divisão
    alert("Tempo de vida: " + secondsOflife + " segundos")
} else if (chosenOption == 2) {
    let minutesOflife = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vida: " + minutesOflife + " minutos")
} else if (chosenOption == 3) {
    let hoursOflife = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vida: " + hoursOflife + " horas")
} else if (chosenOption == 4) {
    let daysOflife = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vida: " + daysOflife + " dias")
}  else {
    alert("Opção inválida")
}
