const myCountry = {
    country: 'Denmark',
    capital: 'Copenhagen',
    language: 'Danish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Germany'],
    describe: function () {
    console.log(
    `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
    },
    checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    }
    };
    myCountry2.describe();
    myCountry2.checkIsland();
    console.log(myCountry2);   