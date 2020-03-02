
function isBalanced(str) {
    var i, ch;

    var bracketsMap = new Map();
    bracketsMap.set(']', '[');
    bracketsMap.set('}', '{');
    bracketsMap.set(')', '(');

    // Use the spread operator to transform a map into a 2D key-value Array.
    var closBrackets = [...bracketsMap.keys()];
    var openBrackets = [...bracketsMap.values()];

    var temp = [];
    var len = str.length;

    for (i = 0; i < len; i++) {
        ch = str[i];

        if (openBrackets.indexOf(ch) > -1) {
            temp.push(ch);
        } else if (closBrackets.indexOf(ch) > -1) {

            var expectedBracket = bracketsMap.get(ch);
            if (temp.length === 0 || (temp.pop() !== expectedBracket)) {
                return false;
            }

        } else {
            // Ignore the characters which do not match valid Brackets symbol
            continue;
        }
    }

    return (temp.length === 0);
}


var test = "{[]}";

console.log(isBalanced(test));