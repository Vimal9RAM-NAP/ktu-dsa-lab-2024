#include <stdio.h>
#define MAX 5

int queue[MAX];
int front = -1, rear = -1;

void enqueue(int val)
{
    if (rear == MAX - 1)
    {
        printf("Queue Overflow!\n");
        return;
    }
    if (front == -1)
    {
        front = 0;
    }
    rear++;
    queue[rear] = val;
    printf("Inserted %d\n", val);
}

void dequeue()
{
    if (front == -1 || front > rear)
    {
        printf("Queue Underflow!\n");
        return;
    }
    printf("Deleted %d\n", queue[front]);
    front++;
    if (front > rear)
    {
        front = rear = -1; // Reset queue when empty
    }
}

void display()
{
    if (front == -1 || front > rear)
    {
        printf("Queue is Empty!\n");
        return;
    }
    printf("Queue contents: ");
    for (int i = front; i <= rear; i++)
    {
        printf("%d ", queue[i]);
    }
    printf("\n");
}

int main()
{
    enqueue(10);
    enqueue(20);
    enqueue(30);
    display();
    dequeue();
    display();
    enqueue(40);
    enqueue(50);
    enqueue(60); // Overflow check
    display();
    return 0;
}