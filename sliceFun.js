const fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Coconut', 'Durian'];
const newArr = [];
let newArrIndex = 0;
let growIndex = 0;

function numberSlice(data) {
    if(data >= fruits.length - 1) {
        return 0;
    } else {
        for(let i = 0; i < fruits.length; i++) {
            if(fruits.indexOf(fruits[i]) > data) {
                newArr[i] = fruits[i];
            }
        }
        return newArr.filter(x => x !== null);
    }
}

function stringSlice(data) {
    if(fruits.length - 1 === fruits.indexOf(data)) {
        return 0;
    } else {
        for(let i = 0; i < fruits.length; i++) {
            if(fruits[i] === data) {
                growIndex = i;
                growIndex++;
                for(let i = growIndex; i < fruits.length; i++) {
                    newArr[newArrIndex] = fruits[i];
                    newArrIndex++;
                }
                return newArr;
            }
        }
        if(growIndex === 0) {
            return 0;
        } else {
            for(let i = growIndex; i < fruits.length; i++) {
                newArr[newArrIndex] = fruits[i];
                newArrIndex++;
            }
            return newArr;
        }
    }
}

function sliceFrom(data) {
    if(isNaN(data) || data === '') {
        return stringSlice(data);
    } else {
        return numberSlice(data);
    }
}

console.log(sliceFrom('Banana'));
