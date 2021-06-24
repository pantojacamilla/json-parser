    function binarySearch(arr, target) {&#xD;&#xA;        let left = 0;&#xD;&#xA;        let right = arr.length - 1;&#xD;&#xA;        while (left <= right) {&#xD;&#xA;            const mid = left + Math.floor((right - left) / 2);&#xD;&#xA;            if (arr[mid] === target) {&#xD;&#xA;                return mid;&#xD;&#xA;            }&#xD;&#xA;            &#xD;&#xA;            if (arr[mid] < target) {&#xD;&#xA;                left = mid + 1;&#xD;&#xA;            }&#xD;&#xA;            // Look here. Here is my problem&#xD;&#xA;            if(arr[mid] > target){&#xD;&#xA;                right = mid - 1;&#xD;&#xA;            }&#xD;&#xA;        }&#xD;&#xA;        return -1;&#xD;&#xA;    }