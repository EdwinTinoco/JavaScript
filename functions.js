function ageVerification(age) {
    if (age > 25) {
        console.log('can rent a car');
    } else {
        console.log('is not old enough yet');
    }
}

ageVerification(15);


function hiThere () {
    console.log('Hi there');
}

hiThere(); // Hi there

function hiThereTwo() {
    return 'Hi there again';
}

hiThereTwo(); // "Hi there again"

var storedText = hiThere(); // Hi there

storedText; // undefined

var storedTextTwo = hiThereTwo();

storedTextTwo; // "Hi there again"
