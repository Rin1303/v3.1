function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
    }
    const descDenmark = describeCountry('Denmark', 5.4,'Copenhagen');
    const descGermany = describeCountry('Germany', 83,'Berlin');
    const descFinland = describeCountry('Finland', 6,'Helsinki');
    console.log(descDenmark, descGermany, descFinland);