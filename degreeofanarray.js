//Objective is to find the smallest possible subarray size that shares the same 
//'degree' as the entire array. The degree of an array is determined by the
//max frequency of all of it's elements.

let nums = [1, 2, 2, 3, 1]


//O(n) solution that finds the degree of the array, then finds the smallest
//subarray size by finding the first and last indices of those elements
//with the highest frequency

let map = {}
let firstIndexes = {}
let lastIndexes = {}
let result = Infinity

for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] == undefined) {
        map[nums[i]] = 1
    } else {
        map[nums[i]]++
    }

    if (firstIndexes[nums[i]] == undefined) {
        firstIndexes[nums[i]] = i
    }
    lastIndexes[nums[i]] = i
}

let max = Math.max(...Object.values(map))
for (let key in map) {
    if (map[key] == max) {
        result = Math.min(result, lastIndexes[key] - firstIndexes[key] + 1)
    }
}

return result
