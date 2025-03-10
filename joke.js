import NumberRandomizer from './numbergenertor.js';

const randomJoke = () => {
    let firstWords = ['What', 'Why'];
    let secondParts = [' do you call a', ' did the', ' do'];
    let thirdParts = [
        ' well-balanced horse? Stable.', ' pile of cats? A meow-ntain.',
        ' cows wear bells? Because their horns don’t work.', ' hummingbirds hum? Because they don’t know the words!', 
        ' bicycle fall over? Because it was two tired.', ' cookie go to the hospital? Because he felt crumby.', 
        ' triangle say to the circle? You’re pointless.', ' tomato say to the other tomato during a race? Ketchup.'
    ];

    let randomNumber = NumberRandomizer.getRandomNumber() % firstWords.length;
    let joke = [];
    let firstWord = firstWords[randomNumber];
    joke.push(firstWord);

    switch (firstWord) {
        case 'What':
            randomNumber = NumberRandomizer.getRandomNumber() % secondParts.length;
            let secondPart = secondParts[randomNumber];
            joke.push(secondPart);

            switch (secondPart) {
                case ' do you call a':
                    randomNumber = NumberRandomizer.getRandomNumber() % 2; // Only two valid jokes for ' do you call a'
                    joke.push(thirdParts[randomNumber]);
                    break;
                case ' did the':
                    randomNumber = (NumberRandomizer.getRandomNumber() % 6) + 2; // Valid jokes for ' did the' start from index 2
                    joke.push(thirdParts[randomNumber]);
                    break;
            }
            break;

        case 'Why':
            randomNumber = (NumberRandomizer.getRandomNumber() % 2) + 1; // Only two valid second parts for 'Why'
            secondPart = secondParts[randomNumber];
            joke.push(secondPart);

            switch (secondPart) {
                case ' did the':
                    randomNumber = (NumberRandomizer.getRandomNumber() % 4) + 2; // Valid jokes for ' did the' start from index 2
                    joke.push(thirdParts[randomNumber]);
                    break;
                case ' do':
                    randomNumber = (NumberRandomizer.getRandomNumber() % 6) + 2; // Valid jokes for ' do' start from index 2
                    joke.push(thirdParts[randomNumber]);
                    break;
            }
            break;
    }

    return joke.join('');
}

console.log(randomJoke());