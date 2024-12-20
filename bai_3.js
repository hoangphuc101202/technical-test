const fs = require('fs');

const data = fs.readFileSync('data.json', 'utf8')
const obj = JSON.parse(data)
const statA = fs.statSync('data.json')
const statBefore = statA.size
function removeNullValues(obj) {
    if (Array.isArray(obj)) {
        return obj.map(removeNullValues);
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.fromEntries(
            Object.entries(obj)
                .filter(([_, value]) => value !== null) 
                .map(([key, value]) => [key, removeNullValues(value)]) 
        );
    }
    return obj; 
}
const newObj = removeNullValues(obj)
const removeNullValuesJSON = JSON.stringify(newObj)
fs.writeFileSync('output.json', removeNullValuesJSON)
const stat = fs.statSync('output.json')
const statAfter = stat.size
console.log("Total", (statBefore - statAfter) / 1024)
console.log(statBefore/1024)
console.log(statAfter/1024)