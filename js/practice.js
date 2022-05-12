let dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
]

function getOlder(arr) {
    for (let x = 0;x < arr.length; x++) {
      arr[x].age += 1;
    }
    return arr;
}

function getOlderFor(arr) {
    for (let obj of arr) {
        obj.age += 1;
    }
    return arr;
}
console.log(getOlder(dogs));
console.log(getOlderFor(dogs));

let cars = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
]
function washCars(arr) {
    for (let obj of arr) {
        obj.isDirty = false;
    }
    return arr;
}

console.log(washCars(cars));

let admin =[
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
]

function adminList(arr) {
    let bucket = 0;
    for (let obj of arr) {
        if (obj.isAdmin === true) {
            bucket += 1;
        } else {
            continue;
        }
    }
    return bucket;
}

console.log(adminList(admin));

function adminEmail(arr) {
    let bucket = [];
    for (let obj of arr) {
        if (obj.isAdmin === true) {
            bucket.push(obj.email);
        } else {
            continue;
        }
    }
    return bucket;
}

console.log(adminEmail(admin));

function listOfAdmin(arr) {
    let bucket = [];
    for (let obj of arr) {
        if (obj.isAdmin === true) {
            bucket.push(obj);
        }
    }
    return bucket;
}
console.log(listOfAdmin(admin));

let mixedArr = ["fred", true, 5, 3];

function filterNumbers(arr) {
    let bucket = [];
    for (let obj of arr) {
        if (typeof obj === "number") {
            bucket.push(obj);
        } else {
            continue;
        }
    }
    return bucket.sort();
}
console.log(filterNumbers(mixedArr));

let breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

let fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

function makeSandwichObjects(arr1, arr2) {
    let obj = [];
    for (let x = 0; x < arr1.length && x < arr2.length; x++) {
        let sandwich = {
            bread: arr1[x],     // Replace [x] with Math.floor(Math.random()*arr1.length) for random numbers to build random sandwiches
            filling: arr2[x]    //  Replace [x] with Math.floor(Math.random()*arr2.length) for random numbers to build random sandwiches
        };
        obj.push(sandwich);
    }
    return obj;
}

console.log(makeSandwichObjects(breads, fillings));

let fruits = ["apple", "banana", "orange", "apple", "pineapple"];

function AllIndexesOf (arr, val) {
    if (arr.includes(val) === true) {
        return arr.indexOf(val);
    } else {
        return [];
    }
}

console.log(AllIndexesOf(fruits, "apple"));