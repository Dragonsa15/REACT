// predicate is a dependency for HOF
export default function filter(elems, predicate) {
    let result = [];
    for (var i = 0; i < elems.length; i++) {
        if (predicate(elems[i])) {
            result.push(elems[i]);
        }
    }
    return result;
}