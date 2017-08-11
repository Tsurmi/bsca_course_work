const testString = 'abcbcababcdbc';

const longestString = (string) => {
    let max = 0, current_string = "", char, pos;

    for (let i = 0; i < string.length; i += 1) {
        char = string.charAt(i);
        pos = current_string.indexOf(char);
        if (pos !== -1) {

            current_string = current_string.substr(pos + 1);
        }
        current_string += char;
        max = Math.max(max, current_string.length);
    }
    return max;
}



console.log(longestString(testString));
