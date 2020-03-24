const headingGenerator = (title, num) => {
    return `<h${num}>${title}</h${num}>`;
}

console.log(headingGenerator("Hi there", 1));
console.log(headingGenerator("Greetings", 2));