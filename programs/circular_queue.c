#include <stdio.h>
#define MAX 5

int queue[MAX];
int front = -1, rear = -1;

void enqueue(int val) {
    if ((rear + 1) % MAX == front) {
        printf("Queue Overflow!\n");
        return;
    }
    if (front == -1) {
        front = rear = 0;
    } else {
        rear = (rear + 1) % MAX;
    }
    queue[rear] = val;
    printf("Inserted %d\n", val);
}

void dequeue() {
    if (front == -1) {
        printf("Queue Underflow!\n");
        return;
    }
    printf("Deleted %d\n", queue[front]);
    if (front == rear) {
        front = rear = -1;
    } else {
        front = (front + 1) % MAX;
    }
}

void display() {
    if (front == -1) {
        printf("Queue is Empty!\n");
        return;
    }
    printf("Queue contents: ");
    int i = front;
    while (1) {
        printf("%d ", queue[i]);
        if (i == rear) break;
        i = (i + 1) % MAX;
    }
    printf("\n");
}

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);
    display();
    dequeue();
    display();
    enqueue(40);
    enqueue(50);
    enqueue(60);
    display();
    return 0;
}