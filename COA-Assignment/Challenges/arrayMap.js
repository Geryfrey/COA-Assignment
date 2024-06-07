function arrayMap(arr, target) {
   
    let left = 0;          //Initialize the first pointer at the beginning of the array.
    let currentSum = 0;  //to keep track of the sum of elements in the current window.
    
    for (let right = 0; right < arr.length; right++) {  //Iterate through the loop consecutively using the second pointer"Right".
        currentSum += arr[right];
        

        // check if the currentSum exceeds the targetSum, then move the left pointer to the right and 
        // subtract the elements from currentSum until currentSum is less than or equal to the target.

        while (currentSum > target && left <= right) {
            currentSum -= arr[left];
            left++;
        }
        
        // return true if the currentSum equal to the targetSum.

        if (currentSum === target) {
            return true;
        }
    }
    
    return false; // return false otherwise.
}

// THIS IS A TEST CASE

const arr = [1,5,6,3,7,7];
const target = 14;
console.log(arrayMap(arr, target));