
class Experte {
    constructor(ratio) {
        this.ratio = ratio;
    }
}

class Note {
    constructor () {
        this.fach = new Fach();
    }
}

class Muendlich extends Note {
    constructor() {
        super();
        this.experte = [];
    }

    addExperte(experte) {
        this.experte.push(experte);
    }
}

class Schriftlich extends Note {
    constructor() {
        super();
    }
}



class Fach {
    constructor() {

    }
}



class Student {

    constructor (name) {
        this.name = name;
        this.noten = [];
    }
}


let student = new Student("Harri");
let note = new Muendlich();
let experte = new Experte(2);
experte.name = "Susi";
note.addExperte(experte);
note.fach = new Fach();
student.noten.push(note)
console.log(student);
console.log(note);


