class Person {
    constructor(name = 'Anyonmyous', age=0) {
        this.name = name;
        this.age = age;
    }

    grtGreetings() {
        return 'Hi, I am ${this.name}!';
    }

    getDescription() {
        return '${this.name} is ${this.age} year(s) old.';
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }
}


const me = new Person('Vicky  nb kumar', 26);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());


