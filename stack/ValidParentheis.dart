void main() {
  String parenthesis = "{[()]}";
  if (isBalanced(parenthesis)) {
    print("Balanced");
  } else {
    print("Not Balanced");
  }
}

bool isBalanced(String exp) {
  List stk = [];

  for (int i = 0; i < exp.length; i++) {
    String char = exp[i];

    if (char == '{' || char == '[' || char == '(') {
      stk.add(char);
    } else if (char == '}' || char == ']' || char == ')') {
      if (stk.isEmpty) {
        return false; 
      }

      String remove = stk.removeLast();
      
      if ((char == '}' && remove != '{') ||
          (char == ']' && remove != '[') ||
          (char == ')' && remove != '(')) {
        return false; 
      }
    }
  }

  return stk.isEmpty; 
}
