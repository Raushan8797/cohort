#include <iostream>
using namespace std;

int main()
{
    int n, tq;

    cout << "Enter number of processes: ";
    cin >> n;

    int bt[n], rt[n], wt[n], tat[n];

    // Input burst times
    for (int i = 0; i < n; i++)
    {
        cout << "Enter burst time for process " << i + 1 << ": ";
        cin >> bt[i];
        rt[i] = bt[i];   // Remaining time
    }

    cout << "Enter time quantum: ";
    cin >> tq;

    int time = 0;
    bool done;

    // Round Robin logic
    do
    {
        done = true;

        for (int i = 0; i < n; i++)
        {
            if (rt[i] > 0)
            {
                done = false;

                if (rt[i] > tq)
                {
                    time += tq;
                    rt[i] -= tq;
                }
                else
                {
                    time += rt[i];
                    wt[i] = time - bt[i];
                    rt[i] = 0;
                }
            }
        }

    } while (!done);

    // Calculate turnaround time
    for (int i = 0; i < n; i++)
    {
        tat[i] = bt[i] + wt[i];
    }

    // Display results
    float total_wt = 0, total_tat = 0;

    cout << "\nProcess\tBurst Time\tWaiting Time\tTurnaround Time\n";

    for (int i = 0; i < n; i++)
    {
        cout << "P" << i + 1 << "\t"
             << bt[i] << "\t\t"
             << wt[i] << "\t\t"
             << tat[i] << endl;

        total_wt += wt[i];
        total_tat += tat[i];
    }

    cout << "\nAverage Waiting Time = " << total_wt / n << endl;
    cout << "Average Turnaround Time = " << total_tat / n << endl;

    return 0;
}