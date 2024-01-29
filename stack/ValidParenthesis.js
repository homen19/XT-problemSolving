function checkExp(exp) {
    const stk = [];
    for (let i = 0; i < exp.length; i++) {
        if (exp[i] === '{' || exp[i] == '[' || exp[i] == '(') {
            stk.push(exp[i]);
        }
        let remove = stk.pop();
        if (exp[i] == ')') {
            if (remove == '{' || remove == '[') {
                return false;
            }
        }
        if (exp[i] == '}') {
            if (remove == '(' || remove == '[') {
                return false;
            }
        }
        if (exp[i] == ']') {
            if (remove == '(' || remove == '{') {
                return false;
            }
        }
    }
    return stk.length == 0;
}
let parenthesis = "{[()]}";
if (checkExp(parenthesis)) {
    console.log("Balanced");
}
else {
    console.log("Not Balanced");
}