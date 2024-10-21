/* FUNCTION main()  
 * Ask for the name of a dog (dogName)
 * Ask how many cups of food they get each meal (cups)
 * call feedDog with parameters dogName, cups
 * @param: none (main never gets params)
 * @return: none (main never gets returns
 */

function main(){
    let dogName = prompt("what is your dogs name");
    let cups = prompt("how many cups of food would you like");
    feedDog(dogName || Cups);
}
