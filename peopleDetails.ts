const people = [
  {
    name: "Rahul",
    age: "NA",
    employed: true,
    profession: "Software engineer",
    location: "Pune",
    hobbies: "playing chess and gardening",
    OwnsCar: true,
    transportation: "car",
    ownsPet: true,
    pet: {
      NumOfPets: 1,
      breed: "Golden Retriever",
      name: "Max",
      age: 4,
      isVaccinated: true,
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
    OwnsVehicle: false,
    transportation: "public transport",
    ownsPet: true,
    pet: {
      NumOfPets: 1,
      breed: "parrot",
      name: "Kiwi",
      isVaccinated: true,
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
    OwnsVehicle: "NA",
    transportation: "NA",
    ownsPet: true,
    pet: {
      NumOfPets: 2,
      pet1: {
        breed: "Persian Cat",
        name: "Bella",
        age: 3,
        isVaccinated: true,
        hobbies: "lounging in the sun",
      },
      pet2: {
        breed: "Persian Cat",
        name: "Leo",
        age: 3,
        isVaccinated: true,
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
    OwnsVehicle: false,
    transportation: "NA",
    ownsPet: true,
    pet: {
      NumOfPets: 1,
      breed: "Rescue rabbit",
      name: "Snowy",
      age: 2,
      isVaccinated: true,
      hobbies: "hopping around Kavya's backyard and nibbling on carrots",
    },
    eduation: "NA",
  },
];

// 1. How many individuals are currently employed?
const getNames = (person) => person.name;

const peopleEmployed = function (people) {
  return people.filter((person) => person.employed).map(getNames);
};

console.log(peopleEmployed(people));
