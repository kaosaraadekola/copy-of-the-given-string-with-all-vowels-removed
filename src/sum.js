/** Return a copy of the given string, with all vowels removed
 * removingVowels 
 * @param {string} inputString
 * @returns {string}
 */

function removingVowels(inputString) {
   
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    let result = "";

    
    for (let letters of inputString) {
       
        if (!vowels.includes(letters)) {
           
            result += letters;
        }
    }


    return result;
}

console.log(removingVowels("Hello World")); 

export { removingVowels };
