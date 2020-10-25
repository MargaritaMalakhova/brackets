module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < bracketsConfig.length; i++) {
        let brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
        if (str.indexOf(brackets) !== -1) {
            str = str.split(brackets).join('');
            i = -1;
        }
    }
    return str.length===0;
}
