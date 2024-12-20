function twosum(nums , target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i+ 1; j < nums.length; j++){
            if(nums[i]+ nums[j]== target){
                return [i,j];
            }
        }
    }
}


function two_sum(nums, target){
    const map = new Map()
    for(let i = 0; i < nums.length ; i++){
        let comple = target - nums[i]
        if(map.has(comple)){
            return [map.get(comple) , i]
        }
        map.set(nums[i], i)
    }
    return []

}

console.log(two_sum([2, 7, 11, 15], 9)) // O(n)
