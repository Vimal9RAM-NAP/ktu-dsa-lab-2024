#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

struct Node *head = NULL;

// Insert at Beginning
void insertBeginning(int x) {
    struct Node *newNode = malloc(sizeof(struct Node));

    newNode->data = x;
    newNode->next = head;
    head = newNode;
}

// Insert at End
void insertEnd(int x) {
    struct Node *newNode = malloc(sizeof(struct Node));
    struct Node *temp = head;

    newNode->data = x;
    newNode->next = NULL;

    if (head == NULL)
        head = newNode;
    else {
        while (temp->next != NULL)
            temp = temp->next;

        temp->next = newNode;
    }
}

// Delete at Beginning
void deleteBeginning() {
    struct Node *temp;

    if (head == NULL)
        printf("List is Empty\n");
    else {
        temp = head;
        head = head->next;
        free(temp);
    }
}

// Delete at End
void deleteEnd() {
    struct Node *temp = head;

    if (head == NULL)
        printf("List is Empty\n");

    else if (head->next == NULL) {
        free(head);
        head = NULL;
    }

    else {
        while (temp->next->next != NULL)
            temp = temp->next;

        free(temp->next);
        temp->next = NULL;
    }
}

// Display
void display() {
    struct Node *temp = head;

    if (head == NULL)
        printf("List is Empty\n");
    else {
        while (temp != NULL) {
            printf("%d -> ", temp->data);
            temp = temp->next;
        }
        printf("NULL\n");
    }
}

int main() {
    insertBeginning(20);
    insertBeginning(10);
    insertEnd(30);
    insertEnd(40);

    display();

    deleteBeginning();
    deleteEnd();

    display();

    return 0;
}