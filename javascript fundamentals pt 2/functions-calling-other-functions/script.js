const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
    };
    describePopulation('Denmark', 5);
    describePopulation('Germany', 83);
    describePopulation('USA', 332);