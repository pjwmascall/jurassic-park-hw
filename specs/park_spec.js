const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 50);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function() {
    const numDinosaurs = park.dinosaurs.length;
    const dinosaur = new Dinosaur('triceratops', 'herbivore', 30);
    park.addDinosaur(dinosaur);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, numDinosaurs + 1);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    const dinosaur1 = new Dinosaur('triceratops', 'herbivore', 30);
    const dinosaur2 = new Dinosaur('t-rex', 'carnivore', 50);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const numDinosaurs = park.dinosaurs.length;
    park.removeDinosaur(dinosaur1.species);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, numDinosaurs - 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const dinosaur1 = new Dinosaur('triceratops', 'herbivore', 30);
    const dinosaur2 = new Dinosaur('t-rex', 'carnivore', 50);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.findDinosaurMostVisitors();
    assert.strictEqual(actual, 't-rex');
  });


  it('should be able to find all dinosaurs of a particular species', function() {
    const dinosaur1 = new Dinosaur('triceratops', 'herbivore', 30);
    const dinosaur2 = new Dinosaur('t-rex', 'carnivore', 50);
    const dinosaur3 = new Dinosaur('triceratops', 'herbivore', 30);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findAllDinosaursBySpecies('triceratops');
    assert.deepStrictEqual(actual, [0, 2]);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    const dinosaur1 = new Dinosaur('triceratops', 'herbivore', 30);
    const dinosaur2 = new Dinosaur('t-rex', 'carnivore', 50);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.totalNumberOfVisitorsPerDay();
    assert.strictEqual(actual, 80);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    const dinosaur1 = new Dinosaur('triceratops', 'herbivore', 30);
    const dinosaur2 = new Dinosaur('t-rex', 'carnivore', 50);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.totalNumberOfVisitorsPerYear();
    assert.strictEqual(actual, 29200);
  });

  it('should be able to calculate total revenue for one year', function() {
    const dinosaur1 = new Dinosaur('triceratops', 'herbivore', 30);
    const dinosaur2 = new Dinosaur('t-rex', 'carnivore', 50);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.totalRevenuePerYear();
    assert.strictEqual(actual, 1460000);
  });

});
