// Basic javascript collection collection for FCC (intro to js)

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    var id = collection[id] // can't use dot notation when property value is number

    if (id[prop] === undefined) {
        id[prop] = [value] // setting the value
    }

    if (value == "") {
        delete id[prop];
    }

    else if (prop !== "tracks") {
        id[prop] = value;
        //id["tracks"] = [];
    }
    else {
        id[prop].push(value);
    }




    console.log(id)
    return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

