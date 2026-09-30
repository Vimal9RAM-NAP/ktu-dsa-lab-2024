#include <stdio.h>

int main() {
    int n, key, found = 0;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    int a[n];
    printf("Enter %d elements:\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &a[i]);
    }

    printf("Enter element to search: ");
    scanf("%d", &key);

    for (int i = 0; i < n; i++) {
        if (a[i] == key) {
            printf("Element found at index %d (Position %d).\n", i, i + 1);
            found = 1;
            break;
        }
    }

    if (!found) {
        printf("Element not found in the array.\n");
    }

    return 0;
}