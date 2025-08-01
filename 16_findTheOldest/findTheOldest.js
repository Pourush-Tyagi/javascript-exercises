const findTheOldest = function(people) {
    
    const currentYear = new Date().getFullYear();

    const oldest = people.reduce((oldest, person) => {
    const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

    return age > oldestAge ? person : oldest;
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
