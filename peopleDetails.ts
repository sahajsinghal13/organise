const people = [
  {
    name: "Rahul",
    age: "NA",
    employed: true,
    profession: "Software engineer",
    location: "Pune",
    hobbies: "playing chess and gardening",
    ownsCar: true,
    transportation: "car",
    eduation: "Computer Science",
    ownsPet: true,
    NumOfPets: 1,
    pets: [
      {
        breed: "Golden Retriever",
        name: "Max",
        age: 4,
        isVaccinated: true,
        fullyVaccinated: true,
        hobbies: "playing fetch in the park",
      },
    ],
  },

  {
    name: "Ananya",
    age: 30,
    employed: false,
    profession: "NA",
    location: "Bangalore",
    hobbies: "cooking and experimenting with Italian recipes",
    ownsCar: false,
    transportation: "public transport",
    eduation: "Computer Science and minor in Graphic Designing",
    ownsPet: true,
    NumOfPets: 1,
    pets: [
      {
        breed: "parrot",
        name: "Kiwi",
        isVaccinated: true,
        fullyVaccinated: false,
        hobbies: "mimicking Ananya's Voice",
        phrases: 20,
      },
    ],
  },

  {
    name: "Ramesh",
    age: 45,
    employed: true,
    profession: "Business owner",
    location: "Jaipur",
    hobbies: "gardening, tending rose garden and reading historical fiction",
    ownsCar: false,
    transportation: "NA",
    eduation: "Computer Science",
    ownsPet: true,
    NumOfPets: 2,
    pets: [
      {
        breed: "Persian Cat",
        name: "Bella",
        age: 3,
        isVaccinated: true,
        fullyVaccinated: true,
        hobbies: "lounging in the sun",
      },
      {
        breed: "Persian Cat",
        name: "Leo",
        age: 3,
        isVaccinated: true,
        fullyVaccinated: true,
        hobbies: "lounging in the sun",
      },
    ],
  },

  {
    name: "Kavya",
    age: 28,
    employed: false,
    profession: "dancer",
    location: "Chennai",
    hobbies: "Reading modern fantasy novel and watching sci-fi shows",
    ownsCar: false,
    transportation: "NA",
    eduation: "NA",
    ownsPet: true,
    pets: [
      {
        NumOfPets: 1,
        breed: "Rescue rabbit",
        name: "Snowy",
        age: 2,
        isVaccinated: true,
        fullyVaccinated: false,
        hobbies: "hopping around Kavya's backyard and nibbling on carrots",
      },
    ],
  },
];

// 1. How many individuals are currently employed?
const getEmployed = people.filter((person) => person.employed).length;

console.log("Number of People who are Employed:", getEmployed);

// 2. How many people own a car?
const getCarOwners = people.filter((person) => person.ownsCar).length;

console.log("Number of People who owns Car:", getCarOwners);

// 3. How many pets are fully vaccinated?
const isFullyVaccinated = function (person) {
  return person.pets.filter((pet) => pet.fullyVaccinated);
};

const fullyVaccinatedPets = people.flatMap(isFullyVaccinated).length;

console.log("Number of fully vaccinated pets:", fullyVaccinatedPets);
