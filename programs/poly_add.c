#include <stdio.h>

struct Term {
    int coeff;
    int exp;
};

int main() {
    int n1, n2, i = 0, j = 0, k = 0;

    printf("Enter number of terms in Polynomial 1: ");
    scanf("%d", &n1);
    struct Term p1[n1];
    printf("Enter terms (coeff exp) in descending order:\n");
    for (int x = 0; x < n1; x++) {
        scanf("%d %d", &p1[x].coeff, &p1[x].exp);
    }

    printf("Enter number of terms in Polynomial 2: ");
    scanf("%d", &n2);
    struct Term p2[n2];
    printf("Enter terms (coeff exp) in descending order:\n");
    for (int x = 0; x < n2; x++) {
        scanf("%d %d", &p2[x].coeff, &p2[x].exp);
    }

    struct Term p3[n1 + n2];

    while (i < n1 && j < n2) {
        if (p1[i].exp == p2[j].exp) {
            p3[k].coeff = p1[i].coeff + p2[j].coeff;
            p3[k].exp = p1[i].exp;
            i++; j++; k++;
        } else if (p1[i].exp > p2[j].exp) {
            p3[k] = p1[i];
            i++; k++;
        } else {
            p3[k] = p2[j];
            j++; k++;
        }
    }

    while (i < n1) p3[k++] = p1[i++];
    while (j < n2) p3[k++] = p2[j++];

    printf("\nResultant Polynomial (After Addition): ");
    for (int x = 0; x < k; x++) {
        printf("%dx^%d", p3[x].coeff, p3[x].exp);
        if (x < k - 1) printf(" + ");
    }
    printf("\n");

    return 0;
}