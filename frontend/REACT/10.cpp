#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

// FCFS
int FCFS(vector<int> req, int head) {
    int seek = 0;
    for (int i = 0; i < req.size(); i++) {
        seek += abs(head - req[i]);
        head = req[i];
    }
    return seek;
}

// SSTF
int SSTF(vector<int> req, int head) {
    int seek = 0;
    vector<bool> visited(req.size(), false);

    for (int i = 0; i < req.size(); i++) {
        int minDist = 1000000, index = -1;

        for (int j = 0; j < req.size(); j++) {
            if (!visited[j] && abs(head - req[j]) < minDist) {
                minDist = abs(head - req[j]);
                index = j;
            }
        }

        seek += minDist;
        head = req[index];
        visited[index] = true;
    }
    return seek;
}

// SCAN
int SCAN(vector<int> req, int head, int disk_size) {
    vector<int> left, right;
    int seek = 0;

    left.push_back(0);

    for (int r : req) {
        if (r < head)
            left.push_back(r);
        else
            right.push_back(r);
    }

    sort(left.begin(), left.end());
    sort(right.begin(), right.end());

    for (int r : right) {
        seek += abs(head - r);
        head = r;
    }

    seek += abs(head - (disk_size - 1));
    head = disk_size - 1;

    for (int i = left.size() - 1; i >= 0; i--) {
        seek += abs(head - left[i]);
        head = left[i];
    }

    return seek;
}

// C-SCAN
int CSCAN(vector<int> req, int head, int disk_size) {
    vector<int> left, right;
    int seek = 0;

    left.push_back(0);
    right.push_back(disk_size - 1);

    for (int r : req) {
        if (r < head)
            left.push_back(r);
        else
            right.push_back(r);
    }

    sort(left.begin(), left.end());
    sort(right.begin(), right.end());

    for (int r : right) {
        seek += abs(head - r);
        head = r;
    }

    seek += (disk_size - 1);
    head = 0;

    for (int r : left) {
        seek += abs(head - r);
        head = r;
    }

    return seek;
}

int main() {
    int n, head, disk_size;

    cout << "Enter number of disk requests: ";
    cin >> n;

    vector<int> requests(n);

    cout << "Enter disk requests: ";
    for (int i = 0; i < n; i++) {
        cin >> requests[i];
    }

    cout << "Enter initial head position: ";
    cin >> head;

    cout << "Enter disk size: ";
    cin >> disk_size;

    cout << "\n----- Results -----\n";
    cout << "FCFS Seek Time   : " << FCFS(requests, head) << endl;
    cout << "SSTF Seek Time   : " << SSTF(requests, head) << endl;
    cout << "SCAN Seek Time   : " << SCAN(requests, head, disk_size) << endl;
    return 0;
}