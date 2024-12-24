const people = [
  {
    name: "Rahul",
    age: 37,
    employed: true,
    profession: "Software engineer",
    city: "Pune",
    hobbies: ["Gardening", "Playing Chess"],
    ownsCar: true,
    transportation: "car",
    course: ["Comp Sci"],
    ownsPet: true,
    numOfPets: 1,
    pets: [
      {
        type: "Golden Retriever",
        name: "Max",
        age: 4,
        isVaccinated: true,
        fullyVac: true,
        activity: ["playing fetch in the park"],
      },
    ],
  },

  {
    name: "Ananya",
    age: 30,
    employed: false,
    profession: "NA",
    city: "Bangalore",
    hobbies: ["Cooking"],
    ownsCar: false,
    transportation: "public transport",
    course: ["Comp Sci", "Graphic Designing"],
    ownsPet: true,
    numOfPets: 1,
    pets: [
      {
        type: "parrot",
        name: "Kiwi",
        age: "NA",
        isVaccinated: true,
        fullyVac: false,
        activity: ["mimicking Ananya's Voice"],
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
    hobbies: ["Gardening", "Tending rose garden", "Reading"],
    bookGenre: "historical fiction",
    ownsCar: false,
    transportation: "NA",
    course: ["Comp Sci"],
    ownsPet: true,
    numOfPets: 2,
    pets: [
      {
        type: "Persian Cat",
        name: "Bella",
        age: 3,
        isVaccinated: true,
        fullyVac: true,
        activity: ["lounging in the sun"],
      },
      {
        type: "Persian Cat",
        name: "Leo",
        age: 3,
        isVaccinated: true,
        fullyVac: true,
        activity: ["lounging in the sun"],
      },
    ],
  },

  {
    name: "Kavya",
    age: 28,
    employed: false,
    profession: "dancer",
    city: "Chennai",
    hobbies: ["Reading", "Watching sci-fi shows"],
    bookGenre: "modern fantasy novel",
    ownsCar: false,
    transportation: "NA",
    course: "NA",
    ownsPet: true,
    numOfPets: 1,
    pets: [
      {
        type: "Rescue rabbit",
        name: "Snowy",
        age: 2,
        isVaccinated: true,
        fullyVac: false,
        activity: ["hopping around Kavya's backyard", "nibbling on carrots"],
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
const uniques = function (unique, hobby) {
  unique.includes(hobby) ? unique : unique.push(hobby);
  return unique;
};

const allHobbies = people.flatMap(({ hobbies }) => hobbies).reduce(uniques, []);

// 7. How many pets belong to people who are currently unemployed ?
const unemployeds = people.filter(({ employed }) => employed);
const totalPets = (total, { numOfPets }) => total + numOfPets;
const petOfUnemployeds = unemployeds.reduce(totalPets, 0);

// 8. What is the average age of the individuals mentioned in the passage?
const ages = people.reduce((sum, { age }) => sum + age, 0) / people.length;

// 9. How many individuals have studied computer science, and how many of them
// have pets?
const compSci = people.filter(({ course }) =>
  course.includes("Computer Science")
);
const havePets = compSci.filter(({ numOfPets }) => numOfPets !== 0);

// 10. How many individuals own more than one pet?
const moreThan1 = people.filter(({ numOfPets }) => numOfPets > 1).length;

// 11. Which pets are associated with specific favorite activities ?
const favActivities = pet.flatMap(({ name, activity }) => ({ name, activity }));

// 12. What are the names of all animals that belong to people who live in
//   Bangalore or Chennai ?
const fromCities = ["Bangalore", "Chennai"];
const peopleFrom = people.filter(({ city }) => fromCities.includes(city));
const petsFrom = peopleFrom.map(({ pets }) => pets.map(({ name }) => name));

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
console.log("List of unique hobbies:", allHobbies, "\n");
console.log("Number of unique hobbies:", allHobbies.length, "\n");
console.log("Average age of all people:", ages, "\n");
console.log("People who studied Computer Science:", compSci.length, "\n");
console.log("Computer Science holders having pets:", havePets.length, "\n");
console.log("People having more than 1 pets:", moreThan1, "\n");
console.log("Pet Names and their favorite activities:", favActivities, "\n");
console.log("Pets of people from Bangalore and Chennai:", petsFrom, "\n");
