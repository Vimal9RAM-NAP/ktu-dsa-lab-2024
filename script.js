const topics = [
    {
        title: "Binary Search",
        file: "programs/binary_search.c",
        aim: "To search for a given element in a sorted array using the Binary Search technique and output its position.",
        algorithm: [
            "Initialize LOW = 0 and HIGH = N - 1.",
            "Loop while LOW <= HIGH.",
            "Calculate MID = (LOW + HIGH) / 2.",
            "If A[MID] == KEY, element is found. Stop.",
            "If A[MID] < KEY, search right half: set LOW = MID + 1.",
            "Else, search left half: set HIGH = MID - 1.",
            "If LOW > HIGH, element is not present in the array."
        ],
        output: "Enter number of elements: 5\nEnter 5 sorted elements:\n10 20 30 40 50\nEnter element to search: 40\nElement found at index 3 (Position 4).",
        viva: [
            { q: "What is the prerequisite for Binary Search?", a: "The input array must be strictly sorted." },
            { q: "What is the time complexity of Binary Search?", a: "Best Case: O(1), Average and Worst Case: O(log n)." },
            { q: "Why is mid calculated as low + (high - low)/2 in production?", a: "To prevent integer overflow when low and high are very large." }
        ]
    },
    {
        title: "Polynomial Addition using Array",
        file: "programs/poly_add.c",
        aim: "To add two single-variable polynomials represented as structure arrays.",
        algorithm: [
            "Represent terms using a structure with coeff and exp.",
            "Initialize pointers i = 0 (Poly1), j = 0 (Poly2), k = 0 (Result Poly3).",
            "While i < n1 and j < n2:",
            "  a. If P1[i].exp == P2[j].exp: P3[k].coeff = P1[i].coeff + P2[j].coeff, increment i, j, k.",
            "  b. If P1[i].exp > P2[j].exp: Copy P1[i] to P3[k], increment i, k.",
            "  c. Else: Copy P2[j] to P3[k], increment j, k.",
            "Append any remaining terms from P1 or P2 into P3.",
            "Display the resultant polynomial P3."
        ],
        output: "Enter terms in Poly 1: 3\n5 2\n4 1\n2 0\nEnter terms in Poly 2: 2\n3 2\n1 0\n\nResultant Polynomial: 8x^2 + 4x^1 + 3x^0",
        viva: [
            { q: "How are terms stored in memory for this implementation?", a: "In array structures ordered strictly by decreasing exponents." },
            { q: "What is the worst-case time complexity of polynomial addition?", a: "O(m + n), where m and n are the number of terms in the two polynomials." }
        ]
    },
    {
        title: "Circular Queue using Array",
        file: "programs/circular_queue.c",
        aim: "To implement a Circular Queue using an array supporting Enqueue, Dequeue, and Display operations.",
        algorithm: [
            "Initialize FRONT = -1 and REAR = -1.",
            "Enqueue(val): Check overflow if (REAR + 1) % MAX == FRONT. If empty set FRONT = REAR = 0, else REAR = (REAR + 1) % MAX. Insert item.",
            "Dequeue(): Check underflow if FRONT == -1. Delete item. If FRONT == REAR set both to -1, else FRONT = (FRONT + 1) % MAX.",
            "Display(): Loop from i = FRONT to REAR using i = (i + 1) % MAX."
        ],
        output: "Inserted 10\nInserted 20\nInserted 30\nQueue contents: 10 20 30\nDeleted 10\nQueue contents: 20 30\nInserted 40\nInserted 50\nInserted 60\nQueue contents: 20 30 40 50 60",
        viva: [
            { q: "What major limitation of a Linear Queue does a Circular Queue resolve?", a: "Memory wastage caused by unfillable empty slots left behind after dequeue operations." },
            { q: "How do you detect overflow in a Circular Queue?", a: "When (REAR + 1) % MAX == FRONT." }
        ]
    },
    {
        title: "Doubly Linked List (Insertions)",
        file: "programs/dll_insertion.c",
        aim: "To implement a Doubly Linked List with insertion at the beginning and insertion at the end.",
        algorithm: [
            "Define node structure with data, prev, and next pointers.",
            "Insert Beginning(val): Create node N. Set N.prev = NULL, N.next = HEAD. If HEAD != NULL set HEAD.prev = N. Set HEAD = N.",
            "Insert End(val): Create node N with N.next = NULL. If HEAD == NULL, set N.prev = NULL and HEAD = N. Else traverse to last node P, set P.next = N and N.prev = P.",
            "Display(): Traverse from HEAD printing data through next pointers."
        ],
        output: "Inserted 20 at beginning.\nInserted 10 at beginning.\nInserted 30 at end.\nInserted 40 at end.\nDoubly Linked List: 10 <-> 20 <-> 30 <-> 40 <-> NULL",
        viva: [
            { q: "What is an advantage of a DLL over a SLL?", a: "It supports bi-directional traversal (forward and backward) and easier deletion of a node if its pointer is given." },
            { q: "What extra memory overhead does DLL introduce?", a: "One additional pointer per node (`prev`) to store the address of the preceding node." }
        ]
    },
    {
    title: "Linear Queue using Array",
    file: "programs/queue.c",
    aim: "To implement a Linear Queue using an array with Enqueue, Dequeue, and Display operations.",
    algorithm: [
        "Initialize FRONT = -1 and REAR = -1.",
        "Enqueue(val): If REAR == MAX - 1, print Queue Overflow. If FRONT == -1 set FRONT = 0. Increment REAR = REAR + 1 and set Queue[REAR] = val.",
        "Dequeue(): If FRONT == -1 or FRONT > REAR, print Queue Underflow. Print deleted element Queue[FRONT] and increment FRONT = FRONT + 1. If FRONT > REAR, reset FRONT = REAR = -1.",
        "Display(): Loop from i = FRONT to REAR and print Queue[i]."
    ],
    output: "Inserted 10\nInserted 20\nInserted 30\nQueue contents: 10 20 30\nDeleted 10\nQueue contents: 20 30\nInserted 40\nInserted 50\nQueue Overflow!\nQueue contents: 20 30 40 50",
    viva: [
        { q: "What principle does a Queue follow?", a: "FIFO (First In, First Out)." },
        { q: "What is the primary drawback of a Linear Queue using an array?", a: "Memory utilization inefficiency: once elements are dequeued, the space before FRONT cannot be reused even if REAR reaches MAX - 1." }
    ]
},
{
    title: "Double Ended Queue (Deque)",
    file: "programs/deque.c",
    aim: "To implement a Double Ended Queue using a circular array allowing insertion and deletion at both front and rear ends.",
    algorithm: [
        "Initialize FRONT = -1 and REAR = -1.",
        "Insert Front(val): Check overflow. If empty set FRONT = REAR = 0; else if FRONT == 0 set FRONT = MAX - 1; else decrement FRONT. Insert item at Queue[FRONT].",
        "Insert Rear(val): Check overflow. If empty set FRONT = REAR = 0; else if REAR == MAX - 1 set REAR = 0; else increment REAR. Insert item at Queue[REAR].",
        "Delete Front(): Check underflow. Delete Queue[FRONT]. If FRONT == REAR reset both to -1; else if FRONT == MAX - 1 set FRONT = 0; else increment FRONT.",
        "Delete Rear(): Check underflow. Delete Queue[REAR]. If FRONT == REAR reset both to -1; else if REAR == 0 set REAR = MAX - 1; else decrement REAR."
    ],
    output: "Inserted 10 at Rear\nInserted 20 at Rear\nInserted 5 at Front\nDeque contents: 5 10 20\nDeleted 20 from Rear\nDeque contents: 5 10\nDeleted 5 from Front\nDeque contents: 10",
    viva: [
        { q: "What are the two restricted types of Deque?", a: "Input-Restricted Deque (insertion at one end, deletion at both) and Output-Restricted Deque (deletion at one end, insertion at both)." },
        { q: "Can a Deque act as both a Stack and a Queue?", a: "Yes, by restricting operations to one end it acts as a Stack (LIFO), and using opposite ends it acts as a Queue (FIFO)." }
    ]
},
{
    title: "Linear Search",
    file: "programs/linear_search.c",
    aim: "To search for a given target element sequentially in an array and display its index position.",
    algorithm: [
        "Read the size of the array N and N elements.",
        "Read the KEY element to search.",
        "Set found = 0.",
        "Loop i from 0 to N - 1:",
        "  a. If A[i] == KEY, print success message with index i, set found = 1, and break loop.",
        "If found == 0, print that element was not found in array."
    ],
    output: "Enter number of elements: 5\nEnter 5 elements:\n45 12 89 23 67\nEnter element to search: 23\nElement found at index 3 (Position 4).",
    viva: [
        { q: "Does Linear Search require elements to be sorted?", a: "No, Linear Search works on both unsorted and sorted arrays." },
        { q: "What is the time complexity of Linear Search?", a: "Best Case: O(1) when key is at index 0. Worst and Average Case: O(n)." },
        { q: "When is Linear Search preferred over Binary Search?", a: "For small datasets or when the array is unsorted and sorting overhead is unnecessary." }
    ]
}
];

async function loadTopic(index) {
    const t = topics[index];

    // Update active button state
    document.querySelectorAll('.nav-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });

    // Populate Right Panel
    document.getElementById('topic-title').innerText = t.title;
    document.getElementById('topic-aim').innerText = t.aim;
    document.getElementById('output-block').innerText = t.output;

    // Render Algorithm Steps
    const algList = document.getElementById('topic-algorithm');
    algList.innerHTML = t.algorithm.map(step => `<li>${step}</li>`).join('');

    // Render Viva
    const vivaContainer = document.getElementById('viva-container');
    vivaContainer.innerHTML = t.viva.map(item => `
        <div class="viva-item">
            <div class="viva-q">Q: ${item.q}</div>
            <div class="viva-a">A: ${item.a}</div>
        </div>
    `).join('');

    // Fetch .c file source dynamically
    try {
        const response = await fetch(t.file);
        if (response.ok) {
            const codeText = await response.text();
            document.getElementById('code-block').innerText = codeText;
        } else {
            document.getElementById('code-block').innerText = "// File not found. Make sure programs/ contains the .c file.";
        }
    } catch (err) {
        document.getElementById('code-block').innerText = "// Code loading error: Serve files over a local web server (e.g. Live Server).";
    }
}

// Load first topic on startup
window.onload = () => loadTopic(0);