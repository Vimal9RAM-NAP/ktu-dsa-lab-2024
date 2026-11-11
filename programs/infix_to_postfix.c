#include <stdio.h>
#include <ctype.h>

char stack[100];
int top = -1;

void push(char x) {
    stack[++top] = x;
}

char pop() {
    return stack[top--];
}

int priority(char x) {
    if (x == '^')
        return 3;
    if (x == '*' || x == '/')
        return 2;
    if (x == '+' || x == '-')
        return 1;
    return 0;
}

int main() {
    char infix[100], postfix[100], x;
    int i, j = 0;

    printf("Enter infix: ");
    scanf("%s", infix);

    for (i = 0; infix[i] != '\0'; i++) {
        x = infix[i];

        if (isalnum(x))
            postfix[j++] = x;

        else if (x == '(')
            push(x);

        else if (x == ')') {
            while (stack[top] != '(')
                postfix[j++] = pop();
            pop();
        }

        else {
            while (top != -1 && priority(stack[top]) >= priority(x))
                postfix[j++] = pop();
            push(x);
        }
    }

    while (top != -1)
        postfix[j++] = pop();

    postfix[j] = '\0';

    printf("Postfix: %s", postfix);

    return 0;
}