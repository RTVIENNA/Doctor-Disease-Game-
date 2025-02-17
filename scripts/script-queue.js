
// Queue data structure using JavaScript
class Queue {

    /* Properties (Variables) for the class */
    // Array to store the queue items
    // Private property
    #className = "Queue";

    /* Methods (Functions) for the class */
    // Constructor method
    // Initialize the queue
    constructor() {
        this.items = [];
        this.patient_id_counter = 0;
    }

    // Getter and Setter methods
    get getClassName() {
        return this.#className;
    }

    // Normal methods
    // Add an item to the queue
    enqueue(element) {

        console.log("Enqueue: ", element);

        this.items.push(element);
        this.patient_id_counter = this.patient_id_counter + 1;
    }

    // Remove the first item from the queue
    dequeue() {

        // The == operator compares the values of two variables after performing type conversion if necessary. On the other hand, the === operator compares the values of two variables without performing type conversion.
        // Validate if the queue is empty
        if (this.items.length === 0) {
            console.log("Queue is empty!");
            return "Queue is empty";
        }

        // Remove the first item from the queue
        this.items.shift();
    }
}