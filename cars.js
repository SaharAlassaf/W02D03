class Cars {
    constructor(make, model, colour, image, registrationNumber, price) {
        this.make = make;
        this.model = model;
        this.colour = colour;
        this.image = image;
        this.registrationNumber = registrationNumber;
        this.price = price;
    }
    editPrice(newPrice){
        this.price = newPrice;
    }
    showAll(){
        return `${this.make} \n ${this.model} \n ${this.colour} \n ${this.image} \n ${this.registrationNumber} \n ${this.price}`
    }
}

let Car1 = new Cars("Toyota", 2015, "red", 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.toyota.com.sa%2F-%2Fmedia%2FFeature%2FToyotaKSA%2FSliders%2FLatestModelsSlider%2FRav4-2019%2Fbackground-575x270.png&imgrefurl=https%3A%2F%2Fwww.toyota.com.sa%2F&tbnid=1xnvgLw9u_0-WM&vet=12ahUKEwjojrHzhtbzAhVL8IUKHTQaCY8QMygBegUIARDLAQ..i&docid=SKEscmGRiF2MHM&w=575&h=270&q=toyota&ved=2ahUKEwjojrHzhtbzAhVL8IUKHTQaCY8QMygBegUIARDLAQ', 10934, 10000);
/*
         .
         .
         .
let Car2 = new Cars();
let Car3 = new Cars();
let Car4 = new Cars();
let Car5 = new Cars();
*/

console.log(Car1.showAll());
Car1.editPrice(200000);
console.log(Car1.price);