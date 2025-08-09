function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1 // Math.floor = arredonda o resultado para baixo, não deixando decimal; Math.random = Cria um número decimal aleatório entre 0 e 1 (por isso fazemos x100); + 1 desloca o resultado para o intervalo de 1 a 100 (isso para caso o math.random gerar 0)
}

function celciusToFahrenheit(celcius) { // Passamos um parâmetro pois no outro arquivo iremos atribuir o valor que queremos
    return (celcius * 9) / 5 + 32
}

module.exports = { // module.exports permite que nós importemos esse arquivo "para fora"
    generateRandomNumber,
    celciusToFahrenheit
}