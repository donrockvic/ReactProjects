const person = {
    name: 'Vicky',
    age: 27,
    location: {
        city: 'Dhanbad',
        temp: 92
    }
};

const {name=User, age} = person;


console.log(`${name} is ${age} yeat old.`) 


const {city, temp: temperature} = perosn.location;
if (city && temperature){
    console.log(`It's ${temperature} in ${city}}`)
}

// Array
const address = ['vip colony', 'dhanbad', 'jharkhand', 'india']

const [street, city, state, country] = address;

console.log(`you are in ${city}`);