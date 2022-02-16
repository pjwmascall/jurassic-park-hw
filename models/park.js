const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaurSpecies) {
    const filteredDinosaurs = [];
    while (this.dinosaurs.length > 0) {
        let lastElement = this.dinosaurs.length - 1;
        if (this.dinosaurs[lastElement].species === dinosaurSpecies) {
            this.dinosaurs.pop();
        }
        else {
            filteredDinosaurs.push(this.dinosaurs.pop());
        }
    }
    this.dinosaurs = filteredDinosaurs;
}

Park.prototype.findDinosaurMostVisitors = function() {
    let mostVisitors = 0;
    let dinosaurSpecies;
    for (dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay >= mostVisitors) {
            mostVisitors = dinosaur.guestsAttractedPerDay;
            dinosaurSpecies = dinosaur.species;
        }
    }
    return dinosaurSpecies;
}

Park.prototype.findAllDinosaursBySpecies = function(species) {
    allDinosaursOfSpecies = [];
    for ([i, dinosaur] of this.dinosaurs.entries()) {
        if (dinosaur.species === species) {
            allDinosaursOfSpecies.push(i)
        }
    }
    return allDinosaursOfSpecies;
}

Park.prototype.totalNumberOfVisitorsPerDay = function() {
    let total = 0;
    for (dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay;
    }
    return total;
}

Park.prototype.totalNumberOfVisitorsPerYear = function() {
    let totalPerDay = this.totalNumberOfVisitorsPerDay();
    return totalPerDay * 365;
}

Park.prototype.totalRevenuePerYear = function() {
    let visitorsPerYear = this.totalNumberOfVisitorsPerYear();
    return visitorsPerYear * this.ticketPrice;
}
  
module.exports = Park;