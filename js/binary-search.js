var list = [1, 2, 3, 4, 5, 6, 7, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
var attempts = 0;

function binarySearch(list, item) {
    var lessThan = 0;
    var moreThan = list.length - 1;
    while (lessThan <= moreThan) {
        var middle = Math.floor((lessThan + moreThan) / 2) 
        var throb = list[middle]
        if (throb === item) {
            return `o número ${item} se encontra no índice ${middle} da lista. Foram preciso ${attempts} tentativas para encontrá-lo.`
        }
        if (throb > item) {
            moreThan = middle - 1
            attempts++
        } else {
            lessThan = middle + 1
            attempts++
        }
    }
}

console.log(binarySearch(list, 23))