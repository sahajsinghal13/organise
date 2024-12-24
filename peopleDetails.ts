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
    numOfPets: 1,
    pets: [
      {
        type: "Golden Retriever",
        name: "Max",
        age: 4,
        isVaccinated: true,
        fullyVac: true,
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
    numOfPets: 1,
    pets: [
      {
        type: "parrot",
        name: "Kiwi",
        age: "NA",
        isVaccinated: true,
        fullyVac: false,
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
    hobbies: ["gardening", "tending rose garden", "reading"],
    bookGenre: "historical fiction",
    ownsCar: false,
    transportation: "NA",
    eduation: ["Computer Science"],
    ownsPet: true,
    numOfPets: 2,
    pets: [
      {
        type: "Persian Cat",
        name: "Bella",
        age: 3,
        isVaccinated: true,
        fullyVac: true,
        hobbies: ["lounging in the sun"],
      },
      {
        type: "Persian Cat",
        name: "Leo",
        age: 3,
        isVaccinated: true,
        fullyVac: true,
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
    hobbies: ["Reading", "watching sci-fi shows"],
    bookGenre: "modern fantasy novel",
    ownsCar: false,
    transportation: "NA",
    eduation: "NA",
    ownsPet: true,
    numOfPets: 1,
    pets: [
      {
        type: "Rescue rabbit",
        name: "Snowy",
        age: 2,
        isVaccinated: true,
        fullyVac: false,
        hobbies: ["hopping around Kavya's backyard", "nibbling on carrots"],
      },
    ],
  },
];

// 1. How many individuals are currently employed?
const getEmployed = people.filter(({ employed }) => employed).length;

// 2. How many people own a car?
const getCarOwners = people.filter(({ ownsCar }) => ownsCar).length;

const pet = people.flatMap((person) => person.pets);
// 3. How many pets are fully vaccinated?
const fullyVaccinatedPets = pet.filter(({ fullyVac }) => fullyVac).length;

// 4. What are the names of all the pets, and what type of animal is each?
const petNameAndType = pet.map(({ name, type }) => ({ name, type }));

// 5. Which cities do the individuals live in?
const ResidentialCity = people.map(({ name, city }) => ({ name, city }));

// 6. How many hobbies are shared across the group? What are they?
// const unique = (hobbyList, person) => person.hobbies;
// const allHobbies = people.map({hobbies} => person.hobbies.reduce(unique, []));

// 7. How many pets belong to people who are currently unemployed ?
const unemployeds = people.filter(({ employed }) => employed);
const totalPets = (total, { numOfPets }) => total + numOfPets;
const petOfUnemployeds = unemployeds.reduce(totalPets, 0);

// 15. How many individuals have more than two hobbies?
const moreThan2 = people.filter(({ hobbies }) => hobbies.length > 2).length;

// 19. How many individuals live in cities starting with the letter "B"?
const cityWithB = people.filter(({ city }) => city.at(0) === "B").length;

// 20. Which individuals do not own any pets?
const hasNoPets = people.filter(({ numOfPets }) => !numOfPets).length;

console.log("Number of people employed:", getEmployed, "\n");
console.log("Number of people who owns a car:", getCarOwners, "\n");
console.log("Number of fully vaccinated pets:", fullyVaccinatedPets, "\n");
console.log("Name and Types of pets:", petNameAndType, "\n");
console.log("City of residence of each person:", ResidentialCity, "\n");
console.log("Number of people with more than 2 hobbies:", moreThan2, "\n");
console.log("Number of people living in city with 'B':", cityWithB, "\n");
console.log("Number of people not having any pets:", hasNoPets, "\n");
console.log("Number of pets of unemployed people:", petOfUnemployeds, "\n");
