// Write a function that counts the vowels in a string
// vowels = a, e, i, o, u
// Bonus: inlcude tha cases for "y"

const vowels = ["a", "e", "i", "o", "u"]

const vowelsCounter = (str) => {
    let counter = 0;
    let vowelsFound = []

    for (val of str){
        for (vowel of vowels){
            if (val === vowel){
                vowelsFound.push(val)
                counter += 1;
            }
        }
    }

    return (`Vowels found: ${counter},  The vowels are: ${vowelsFound}`)
}

console.log(vowelsCounter('Hipopotamo'));
