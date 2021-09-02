// choice(items): returns a randomly selected item from array of items
// remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
const choice = (arr) => {
    let idx = Math.floor((Math.random() * arr.length) + 1)
    return { idx: idx, item: arr[idx] };
}

const remove = (arr, idx) => {
     arr.splice(idx, 1);
}


export { choice, remove }