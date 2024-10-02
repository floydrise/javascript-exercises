const findTheOldest = function(people) {
    var currentYear = new Date().getFullYear();
    return people.reduce(function (oldestPerson, currentPerson) {
        var oldestAge = (oldestPerson.yearOfDeath || currentYear) - oldestPerson.yearOfBirth;
        var personAge = (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth;
        return personAge > oldestAge ? currentPerson : oldestPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;

