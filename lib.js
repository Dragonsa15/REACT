// HOF
function map(elems, transformFn) {
    var result = [];
    for (var i = 0; i < elems.length; i++) {
        result.push(transformFn(elems[i]));
    }
    return result;
}

// HOF
function forEach(elems, action) {
    for (var i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}

// add HOF filter