function newGame() {
    const doctor = new Doctor('Dr. Cullen');
    const patient = new Patient('Alice');
    const diseases = new Diseases(['Multi-resistant pathogens', 'Meningitis', 'AIDS', 'Ebola', 'Birdflu', 'Kongo-Fever', 'Flu', 'COVID-19', 'Cancer']);
    game = new Game(doctor, patient, diseases);
    game.renderGame();
}

class Doctor // Erstellung einer Klasse für den Arzt
{
    constructor(name) {
        this.name = name; //Speichern des Namens des Arztes
    }

    treat(patient) //Patient wird geheilt
    {
        const treating = Math.floor(Math.random() * (15 - 5 + 1)) + 5; //Zufällige Heilung zwischen 5 und 15
        patient.treat += treating;//Fügt Lebenspunkte hinzu
        const paramediccross = '\u271A'; // !!!
        const message = `${this.name} heals ${patient.name} by ${treating} ${paramediccross}.`;//Um so viel wurde geheilt
        console.log(message);
        return message; // Rückgabe der Aktion
    }
}

class Diseases {
    constructor(diseases) {
        this.queue = new Queue(); // Erstellung einer Warteschlange für die Krankheiten
        diseases.forEach(disease => this.queue.enqueue(disease)); // Hinzufügen der Krankheiten zur Warteschlange
    }

    attack(patient) //Patient wird angegriffen
    {
        if (this.queue.items.length > 0) {
            const randomIndex = Math.floor(Math.random() * this.queue.items.length); //Zufällige Auswahl einer Krankheit
            const selectedDisease = this.queue.items[randomIndex]; //Zufällige Auswahl einer Krankheit aus Zeile 123
            const damage = Math.floor(Math.random() * (20 - 10 + 1)) + 10; //Zufälliger Schaden zwischen 10 und 20
            patient.treat -= damage; //Abzug der Lebenspunkte
            const virus = '\u{1F9A0}';
            const message = `${selectedDisease} attacks ${patient.name} causing ${damage} damage ${virus}.`; //Um so viel wurde geschadet
            console.log(message);
            return message; // Rückgabe der Aktion
        }
        return "No disease to attack."; //Keine Krankheit zum Angreifen
    }
}

class Patient {
    constructor(name) {
        this.name = name; //Name des Patienten
        this.treat = 100; //Lebenspunkte des Patienten, startet mit 100 
    }
}

class Game {
    constructor(doctor, patient, diseases)//Erstellung des Spiels
    {
        this.doctor = doctor; //Verbindung des Arztes, des Patienten und der Krankheiten
        this.patient = patient; //Verbindung des Arztes, des Patienten und der Krankheiten
        this.diseases = diseases; //Verbindung des Arztes, des Patienten und der Krankheiten
        this.turn = 0; //Rundenzähler
        this.lastAction = ''; //damit kann man die letzte Aktion speichern 
    }

    nextTurn() {
        this.turn++; // Rundenzähler erhöhen immer um 1 Inkrement
        const isDoctorTurn = Math.random() < 0.5; //Zufällig entscheidet das Spiel, ob der Arzt oder die Krankheiten dran sind, 
        //mit einer Wahrscheinlichkeit von 50%

        // Aktion basierend auf dem Zug
        if (isDoctorTurn) {
            this.lastAction = this.doctor.treat(this.patient); //Wenn per Zufall entschieden wird dann heilt der Arzt 
        } else {
            this.lastAction = this.diseases.attack(this.patient); //ansonten wird per Zufall entschieden dass die Krankheit angreift
        }

        this.renderGame(); //Aktualisierung des Spiels, zeigt den aktuellen Zustand an

        // Prüfen, ob der Patient tot ist
        if (this.patient.treat <= 0) {
            //this.lastAction = `${this.patient.name} has died. Game Over!`; //Wenn die Lebenspunkte des Patienten unter 0 fallen, ist das Spiel vorbei
            //console.log(this.lastAction);
            this.renderGame(); //Aktualisierung des Spiels, zeigt den aktuellen Zustand an
            this.resetGame(); //Spiel zurücksetzen wenn es vorbei ist. 
        }
    }

    renderGame() //Aktualisierung des Spiels, zeigt den aktuellen Zustand an
    {
        const canvas = document.getElementById('stateCanvas');//
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Patientendaten und Runde anzeigen im Canvas
        ctx.font = '16px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(`Round: ${this.turn}`, 10, 30); // die Zahlen geben die Koordinationspunkte im Canvas an
        ctx.fillText(`Patient Health: ${this.patient.treat}`, 10, 60);

        // Letzte Aktion anzeigen
        if (this.lastAction) {
            ctx.fillText(this.lastAction, 10, 90);
        }
    }

    resetGame() {
        this.patient.treat = 100;
        this.turn = 0; // Rundenzähler zurücksetzen
        console.log('Game has been reset.');
        this.lastAction = 'The kid has died. She is in heaven now. Game has been reset.';
        this.renderGame();
    }
}

let game = null; //Spiel wird initialisiert

// Funktion für den nächsten Zug
function nextTurn() //Funktion für den nächsten Zug
{
    if (game) {
        game.nextTurn();
    }
}
