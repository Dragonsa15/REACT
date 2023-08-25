// HOF
export default function map(elems, transformFn) {
    var result = [];
    for (var i = 0; i < elems.length; i++) {
        result.push(transformFn(elems[i]));
    }
    return result;
}

// HOF
export function forEach(elems, action) {
    for (var i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}

// module.exports = {
//     forEach, map
// }