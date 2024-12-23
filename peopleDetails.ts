const people = [
  {
    name: "Rahul",
    age: "NA",
    employed: true,
    profession: "Software engineer",
    city: "Pune",
    hobbies: ["gardening", "playing chess"],
    ownsCar: true,
    transportation: "car",
    eduation: ["Computer Science"],
    ownsPet: true,
    NumOfPets: 1,
    pets: [
      {
        breed: "Golden Retriever",
        name: "Max",
        age: 4,
        isVaccinated: true,
        fullyVaccinated: true,
        hobbies: ["playing fetch in the park"],
      },
    ],
  },

  {
    name: "Ananya",
    age: 30,
    employed: false,
    profession: "NA",
    city: "Bangalore",
    hobbies: ["cooking"],
    ownsCar: false,
    transportation: "public transport",
    eduation: ["Computer Science", "Graphic Designing"],
    ownsPet: true,
    NumOfPets: 1,
    pets: [
      {
        breed: "parrot",
        name: "Kiwi",
        isVaccinated: true,
        fullyVaccinated: false,
        hobbies: ["mimicking Ananya's Voice"],
        phrases: 20,
      },
    ],
  },

  {
    name: "Ramesh",
    age: 45,
    employed: true,
    profession: "Business owner",
    city: "Jaipur",
    hobbies: ["gardening", "tending rose garden", "reading historical fiction"],
    ownsCar: false,
    transportation: "NA",
    eduation: ["Computer Science"],
    ownsPet: true,
    NumOfPets: 2,
    pets: [
      {
        breed: "Persian Cat",
        name: "Bella",
        age: 3,
        isVaccinated: true,
        fullyVaccinated: true,
        hobbies: ["lounging in the sun"],
      },
      {
        breed: "Persian Cat",
        name: "Leo",
        age: 3,
        isVaccinated: true,
        fullyVaccinated: true,
        hobbies: ["lounging in the sun"],
      },
    ],
  },

  {
    name: "Kavya",
    age: 28,
    employed: false,
    profession: "dancer",
    city: "Chennai",
    hobbies: ["Reading modern fantasy novel", "watching sci-fi shows"],
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
        hobbies: ["hopping around Kavya's backyard", "nibbling on carrots"],
      },
    ],
  },
];

// 1. How many individuals are currently employed?
const getEmployed = people.filter((person) => person.employed).length;

// 2. How many people own a car?
const getCarOwners = people.filter((person) => person.ownsCar).length;

// 3. How many pets are fully vaccinated?
const isFullyVaccinated = function (person) {
  return person.pets.filter((pet) => pet.fullyVaccinated);
};

const fullyVaccinatedPets = people.flatMap(isFullyVaccinated).length;

// 4. What are the names of all the pets, and what type of animal is each?
const petNameAndType = (pet) => [pet.name, pet.breed];
const getPetDetails = (person) => person.pets.map(petNameAndType);
const petDetails = people.flatMap(getPetDetails);

// 5. Which cities do the individuals live in?
const city = people.map((person) => [person.name, person.city]);

// 6. How many hobbies are shared across the group? What are they?
const sharedHobbies = function (hobbyList) {};

// 7. How many pets belong to people who are currently unemployed?

// 15. How many individuals have more than two hobbies?
const moreThan2 = people.filter((person) => person.hobbies.length > 2).length;

console.log("Number of people with more than 2 hobbies", moreThan2);

// 19. How many individuals live in cities starting with the letter "B"?
const cityWithB = people.filter((person) => person.city.at(0) === "B").length;

// console.log("Number of people living in city starting with 'B':", cityWithB);

// 20. Which individuals do not own any pets?
const hasNoPets = people.filter((person) => person.NumOfPets === 0).length;

// console.log("Number of people not owning any pets", hasNoPets);
