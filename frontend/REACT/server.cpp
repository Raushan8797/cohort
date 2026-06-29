#include <iostream>
using namespace std;

// Remote procedure (Server)
int add(int a, int b)
{
    return a + b;
}

int main()
{
    int num1, num2;

    // Client Side
    cout << "Enter two numbers: ";
    cin >> num1 >> num2;

    cout << "Client: Sending request to server..." << endl;

    // RPC Call
    int result = add(num1, num2);

    // Server Response
    cout << "Server: Processing request..." << endl;
    cout << "Server: Sending result back to client..." << endl;

    // Client Receives Response
    cout << "Result = " << result << endl;

    return 0;
}