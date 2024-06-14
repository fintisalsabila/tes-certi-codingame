**********TEST C++ CODINGAME**********

---------------1. SOAL:---------------
The program:
Your program must reverse the positions of each word in the sentence given as input.

INPUT:
S, a string.

OUTPUT:
A string containing all the space-separated words of S in reverse order.

CONSTRAINTS:
S contains at least one word.
S contains less than 1000 characters.

EXAMPLE:
Input
Hello World
Output
World Hello
 

---------------1. JAWABAN:---------------
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    string input;
    getline(cin, input);  // Read the entire line as input

    vector<string> words;
    string word;

    // Split the input string into words
    for (char ch : input) {
        if (ch == ' ') {
            if (!word.empty()) {
                words.push_back(word);
                word.clear();
            }
        } else {
            word += ch;
        }
    }
    if (!word.empty()) {
        words.push_back(word);
    }

    // Reverse the order of words
    reverse(words.begin(), words.end());

    // Join the words into a single string with spaces
    string result;
    for (size_t i = 0; i < words.size(); ++i) {
        result += words[i];
        if (i != words.size() - 1) {
            result += ' ';
        }
    }

    // Output the reversed string
    cout << result << endl;

    return 0;
}



---------------2. SOAL:---------------
The program:
Your program must output the biggest number that is writtable using the given digits.

INPUT:
Line 1: An integer N, the number of digits.
Line 2: N space separated digits.

OUTPUT:
Line 1: The biggest number that is writtable using all the given digits.

CONSTRAINTS:
1 ≤ N ≤ 10

EXAMPLE:
Input
9
1 2 3 4 5 6 7 8 9

Output
987654321


---------------2. JAWABAN:---------------
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    int N;
    cin >> N;  // Read the number of digits

    vector<int> digits(N);
    for (int i = 0; i < N; ++i) {
        cin >> digits[i];  // Read each digit
    }

    // Sort the digits in descending order
    sort(digits.begin(), digits.end(), greater<int>());

    // Check if all digits are zero
    bool allZeros = all_of(digits.begin(), digits.end(), [](int i){ return i == 0; });

    if (allZeros) {
        cout << "0" << endl;
    } else {
        // Concatenate the sorted digits into a single string
        string largestNumber;
        for (int digit : digits) {
            largestNumber += to_string(digit);
        }

        // Output the resulting largest number
        cout << largestNumber << endl;
    }

    return 0;
}



---------------3. SOAL:---------------
 Goal
We want to control a robot with a specific set of orders: up down left right.
Sadly our robot doesn't like long statements, it only understands ^ v < >.
Additionally we want to avoid repeating orders, if we have more than one of the same orders, we indicate the repetition with a number after the order: up up up -> ^3

Input:
A line containing the orders, separated by spaces.

Output:
A line with the compressed orders without spaces.

Constraints:
Orders can be: up down left right
Number of orders < 30

Example
Input:
up up right down left
Output:
^2>v<


-------------------------JAWABAN:---------------------
#include <iostream>
#include <string>
#include <sstream>
#include <vector>

using namespace std;

int main() {
    string input;
    getline(cin, input); // Read the entire line of orders

    istringstream iss(input);
    vector<string> orders;
    string order;

    while (iss >> order) {
        orders.push_back(order);
    }

    string result;
    char previousSymbol = 0;
    int count = 0;

    for (const string& ord : orders) {
        char currentSymbol;

        if (ord == "up") {
            currentSymbol = '^';
        } else if (ord == "down") {
            currentSymbol = 'v';
        } else if (ord == "left") {
            currentSymbol = '<';
        } else if (ord == "right") {
            currentSymbol = '>';
        } else {
            continue;
        }

        if (currentSymbol == previousSymbol) {
            count++;
        } else {
            if (count > 1) {
                result += to_string(count);
            }
            result += currentSymbol;
            previousSymbol = currentSymbol;
            count = 1;
        }
    }

    if (count > 1) {
        result += to_string(count);
    }

    cout << result << endl;

    return 0;
}



---------------4. SOAL:---------------
 Goal
You must determine whether or not the first word is an encrypted version of the second word by using a letter substitution cipher, in which each letter is replaced by the letter a fixed number of places later or earlier in the alphabet.
https://static.codingame.com/work/servlet/fileservlet?id=32630892976525
Example of encryption where each letter is shifted by 4 (A becomes E)
 
Input
Line 1: Uppercase letter sequence A.
Line 2: Uppercase unencrypted word B.

Output
Line 1: Either true or false.
Constraints
len(A) = len(B)
2 < len(A), len(B) < 20

Example
Input:
TUSPOH
STRONG

Output:
true


-------------JAWABAN :--------------
#include <iostream>
#include <string>

using namespace std;

bool isEncryptedVersion(const string& A, const string& B) {
    int len = A.length();
    if (len != B.length()) return false;

    int shift = (A[0] - B[0] + 26) % 26;

    for (int i = 1; i < len; ++i) {
        if ((A[i] - B[i] + 26) % 26 != shift) {
            return false;
        }
    }
    return true;
}

int main() {
    string A;
    string B;

    getline(cin, A);
    getline(cin, B);

    if (isEncryptedVersion(A, B)) {
        cout << "true" << endl;
    } else {
        cout << "false" << endl;
    }

    return 0;
}
