function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const RandomNumber = (number) => {
    number = rand(10, 20);
    return number;
}

module.exports = RandomNumber;