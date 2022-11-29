export default function Roll (sides, dice, numTimes){
    var results = []
    for(let i = 0; i < numTimes; i++) {
        let k = 0;
        for(let j = 0; j < dice; j++) {
            k += Math.floor(Math.random() * sides) + 1;
        }
        results.push(k);
    }

    
    const result = {sides: sides, dice: dice, rolls: numTimes, results: results};
    return result;
}