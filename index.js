const mapToNegativize = function(array) {
    return array.map((num) => -num)
}
const mapToNoChange = function(array) {
    return array.map((num) => num)
}
const mapToDouble = function(array) {
    return array.map((num) => num*2)
}
const mapToSquare = function(array) {
    return array.map((num) => num**2)
}
const reduceToTotal = function(array, startingPoint = 0) {
    return array.reduce((item, sum) => sum += item) + startingPoint
}
const reduceToAllTrue = function(array) {
    return array.reduce(function(item, result = true) {
        if (!!item && result) {
            return result = true;
        } else {
            return result = false;
        }
    })
}
const reduceToAnyTrue = function(array) {
    return array.reduce(function(item, result = false) {
        if (!!item || result) {
            return result = true;
        } else {
            return result = false;
        }
    })
}