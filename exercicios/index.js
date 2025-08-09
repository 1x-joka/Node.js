import getPosts, {getPostsLenght} from "./postController.js"; // Chamando a função getPosts do arquivo postController.js (que está com default) e chamando a função getPostsLenght do mesmo arquivo (não está com default)
console.log(getPosts())
console.log(`Posts Lenght: ${getPostsLenght()}`)

/*
const {generateRandomNumber, celciusToFahrenheit} = require('./utils') // Chamamos o arquivo na pasta utils e atribuímos aos const's ...

console.log(`Random Number: ${generateRandomNumber()}`)
console.log(`Celcius To Fahrenheit: ${celciusToFahrenheit()}`)
*/