const prices: (number | string)[] = [1, 2, 3, 4, 5, 6, 'as']

// const user: [string, number] = ['germi', 123]

let user: [string, number, boolean]

user = ['germi', 19, true]

// destructuring de una tupla 
const [username, age] = user

console.log(username, age)  // -> donde username = al string de la primer posicion y age va a ser igual al numero de la segunda posicion
