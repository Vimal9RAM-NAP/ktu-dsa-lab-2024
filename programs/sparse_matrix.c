#include <stdio.h>

struct Element {
    int row;
    int col;
    int val;
};

int main() {
    int r, c, k = 1;

    printf("Enter matrix dimensions (rows cols): ");
    scanf("%d %d", &r, &c);

    int matrix[r][c];
    printf("Enter matrix elements:\n");
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            scanf("%d", &matrix[i][j]);
        }
    }

    struct Element sparse[50];

    // Read non-zero elements into tuple format
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (matrix[i][j] != 0) {
                sparse[k].row = i;
                sparse[k].col = j;
                sparse[k].val = matrix[i][j];
                k++;
            }
        }
    }

    // Header entry storing total rows, cols, and non-zero counts
    sparse[0].row = r;
    sparse[0].col = c;
    sparse[0].val = k - 1;

    // Display Sparse Matrix Representation (3-Tuple)
    printf("\nSparse Matrix Representation (Row, Col, Value):\n");
    for (int i = 0; i < k; i++) {
        printf("%d\t%d\t%d\n", sparse[i].row, sparse[i].col, sparse[i].val);
    }

    return 0;
}