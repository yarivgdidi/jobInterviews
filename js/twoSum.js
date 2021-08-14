function getTwoSum(x, arr) {
    const hash = {}
    arr.forEach(a => {
        if (!hash[a]) {
            hash[a] = null;
        }
        if (hash[x-a] === null) {
            hash[x-a] = a;
        }
    });

    const results  = []
    Object.entries(hash).forEach( ([k, v]) => {
        if (v !== null) {
            results.push([k*1,v])
        }
    })
    return results;
}

function getThreeSum(x, arr) {
    const res = []
    arr.forEach(a => {
        y = getTwoSum(x-a, arr)
        if (y && y.length > 0) {
            res.push([a, ...y])
        }

    })
    return res
}

const A = [1, 2, 7, 8, 3, 10, 6]
console.log(getTwoSum(10, A))
console.log(getThreeSum(10, A))
