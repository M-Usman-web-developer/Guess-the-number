
function main() {
    let rand_generated = 0;


    while (true) {
        let rad = Math.floor(1 + 100 * Math.random());
        console.log(rad);
        

        let input_user = prompt('Enter your guess!!! ');
        rand_generated++;

        if (input_user == rad) {
            console.log('Your Guess is correct! Congratulations');
            break; // Exits the while loop

        } else if (input_user > rad) {
            console.log('Your Guess is greater than the original number! Opps');

        } else if (input_user < rad) {
            console.log('Your Guess is less than the original number! Opps');
        }
    }
    console.log('At the '+rand_generated+ ' attempted to reached the goal...');
    
}
main();
