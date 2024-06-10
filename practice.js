function charFrequency(str) {
    const map = new Map();
    for(let char of str) {
        if(map.has(char)) {
            map.set(char, map.get(char) + 1)
        }
        else {
            map.set(char, 1)
        }
    }
    return map
}

console.log(charFrequency("mississippi")); // Map { 'm' => 1, 'i' => 4, 's' => 4, 'p' => 2 }

