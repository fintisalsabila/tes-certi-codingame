--------------- 1. SOAL ---------------
  The program:
You have intercepted an enemy communication, but the signal is encrypted. However, you know that the message was encrypted using the following algorithm:

For every letter in the message, write an integer E representing the distance of that letter from the letter z in the English alphabet. For spaces, write a value of -1.

You must decrypt this communication, or risk losing the war!
INPUT:
Line 1: An integer N for the number of letters to decrypt.
Next N lines: An integer E representing a single letter of the message.

OUTPUT:
Line 1: A lowercase string representing the decrypted message.

CONSTRAINTS:
1 ≤ N ≤ 100

EXAMPLE:
Input
5
18
21
14
14
11
Output
hello
 

--------------- 1. JAWAB: ---------------
const N = parseInt(readline());
let decryptedMessage = '';

for (let i = 0; i < N; i++) {
    const E = parseInt(readline());

    if (E === -1) {
        decryptedMessage += ' ';
    } else {
        // Calculate the decrypted character
        const decryptedCharCode = 'z'.charCodeAt(0) - E;
        const decryptedChar = String.fromCharCode(decryptedCharCode);
        decryptedMessage += decryptedChar;
    }
}

// Write an answer using console.log()
console.log(decryptedMessage);



--------------- 2. SOAL: ---------------
 Goal
There are too many applicants for a singing show. To select the best ones, groups are formed and each participant of a group is evaluated. The participant with the most points in the group is selected.

If several participants have the most points, all of them are selected.

You are given N groups with P participants each, as well as the number of points each participant has scored.

How many participants will be selected and how many points in total have the selected participants scored between themselves?
  
Input
Line 1: An integer N for the number of groups.
Line 2: An integer P for the number of participants in a group.
Next N lines: A line of P integers representing the points scored by each participant of this group, separated by spaces.
  
Output
Two integers representing the number of selected participants and the sum of their points, separated by a space.
  
Constraints
2 ≤ N, P ≤ 15
0 ≤ points ≤ 9
  
Example
Input
3
4
2 0 0 5
5 7 4 6
1 8 5 4
Output
3 20

  
--------------- 2. JAWAB: ---------------
const N = parseInt(readline());
const P = parseInt(readline());

let totalSelected = 0;
let totalPoints = 0;

for (let i = 0; i < N; i++) {
    const inputs = readline().split(' ').map(Number);
    
    // Find the maximum points in the group
    const maxPoints = Math.max(...inputs);
    
    // Count how many participants have the maximum points
    let countMaxPoints = 0;
    for (let j = 0; j < P; j++) {
        if (inputs[j] === maxPoints) {
            countMaxPoints++;
            totalPoints += maxPoints; // Accumulate points for selected participants
        }
    }
    
    // Add to the total number of selected participants
    totalSelected += countMaxPoints;
}

// Output the result
console.log(totalSelected + ' ' + totalPoints);



--------------- 3. SOAL: ---------------
 Goal
Clap@7 is a game played by a group of people, whereby each person will call out numbers, in ascending order, starting from 1. However, if the number satisfies any of the following conditions:

> The number is divisible by 7
> The number has the digit 7 in it
> The sum of the digits of the number is divisible by 7

Then the person has to clap instead of calling out the number. If the person does not perform the correct action, he loses.

Given an integer N, determine how many claps there have been, if the game has terminated at N, including N.

An example is shown, where three players A, B and C are playing this game.

A: 1
B: 2
C: 3
A: 4
B: 5
C: 6
A: CLAP
B: 8
C: 9
A: 10
B: 11
C: 12
A: 13
B: CLAP
C: 15
A: CLAP
B: CLAP
C: 18
  
Input
Line 1: An integer N which is the number at which the game has ended.
  
Output
Print the number of CLAPS
  
Constraints
1 ≤ N ≤ 3000000
  
Example
Input
17
Output
4

--------------- 3. JAWAB: ---------------
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());

let claps = 0;

for (let i = 1; i <= N; i++) {
    if (i % 7 === 0 || i.toString().includes('7') || sumOfDigitsDivisibleBy7(i)) {
        claps++;
    }
}

console.log(claps);

function sumOfDigitsDivisibleBy7(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum % 7 === 0;
}



--------------- 4. SOAL: ---------------
The program:
Your program must output a hollow square composed of the # symbol with sides of length N.
  
INPUT:
N, an integer.

OUTPUT:
A NxN square over N lines made of # symbols.

CONSTRAINTS:
0 < N < 100

EXAMPLE:
Input
5
Output
#####
#   #
#   #
#   #
#####
 

--------------- 4. JAWAB: ---------------
const N = parseInt(readline());

if (N === 1) {
    console.log('#');
} else {
    // Print the top line
    console.log('#'.repeat(N));

    // Print the middle hollow lines
    for (let i = 2; i < N; i++) {
        console.log('#' + ' '.repeat(N - 2) + '#');
    }

    // Print the bottom line
    console.log('#'.repeat(N));
}


--------------- 5. SOAL: ---------------
 Goal
Your task is to decode a message using the following steps:
1) Count the length of the given message
2) Place the letters of the message into a square grid, from left to right and top to bottom.
3) Read the message from the resulting grid from top to bottom and left to right.

EXAMPLE FOR DECODING:
1) Given a string
CiaonmdGe (9 characters)

2) Divide it into equals rows and columns (here 3 rows, 3 columns):
Cia
onm
dGe

3) Print the concatenation of all the columns, from top to bottom, from left to right in one line :
CodinGame


Good luck with decoding!
Input:
A string message. The square root of the number of characters in the string will always be an integer.
  
Output:
Decoded message
  
Constraints:
2*2 <= message length <= 20*20
  
Example
Input
CiaonmdGe
Output
CodinGame

--------------- 5. JAWAB: ---------------
const message = readline();

// Calculate the size of the grid (square root of message length)
const length = message.length;
const size = Math.sqrt(length);

// Construct the grid
let grid = [];
for (let i = 0; i < size; i++) {
    grid.push(message.substr(i * size, size));
}

// Read the message from the grid column by column
let decodedMessage = '';
for (let col = 0; col < size; col++) {
    for (let row = 0; row < size; row++) {
        decodedMessage += grid[row][col];
    }
}

// Output the decoded message
console.log(decodedMessage);

