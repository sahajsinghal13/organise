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
    ownsPet: true,
    pet: {
      NumOfPets: 1,
      breed: "Golden Retriever",
      name: "Max",
      age: 4,
      isVaccinated: true,
      fullyVaccinated: true,
      hobbies: "playing fetch in the park",
    },
    eduation: "Computer Science",
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
    ownsPet: true,
    pet: {
      NumOfPets: 1,
      breed: "parrot",
      name: "Kiwi",
      isVaccinated: true,
      fullyVaccinated: false,
      hobbies: "mimicking Ananya's Voice",
      phrases: 20,
    },
    eduation: "Computer Science and minor in Graphic Designing",
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
    ownsPet: true,
    pet: {
      NumOfPets: 2,
      pet1: {
        breed: "Persian Cat",
        name: "Bella",
        age: 3,
        isVaccinated: true,
        fullyVaccinated: true,
        hobbies: "lounging in the sun",
      },
      pet2: {
        breed: "Persian Cat",
        name: "Leo",
        age: 3,
        isVaccinated: true,
        fullyVaccinated: true,
        hobbies: "lounging in the sun",
      },
    },
    eduation: "Computer Science",
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
    ownsPet: true,
    pet: {
      NumOfPets: 1,
      breed: "Rescue rabbit",
      name: "Snowy",
      age: 2,
      isVaccinated: true,
      fullyVaccinated: false,
      hobbies: "hopping around Kavya's backyard and nibbling on carrots",
    },
    eduation: "NA",
  },
];

// 1. How many individuals are currently employed?
const getEmployed = () => people.filter((person) => person.employed).length;

console.log("Number of People who are Employed:", getEmployed());

// 2. How many people own a car?
const getCarOwners = () => people.filter((person) => person.ownsCar).length;

console.log("Number of People who owns Car:", getCarOwners());
