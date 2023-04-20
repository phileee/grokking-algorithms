let graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

function search(name) {
    let searchQueue = [];
    searchQueue = [...searchQueue, ...graph[name]];
    let searched = [];
    while (searchQueue) {
        let person = searchQueue.shift();
        if (!searched.includes(person)) {
            if (person[person.length-1] == "m") {
                return `${person} is a mango seller!`;
            } else {
                searchQueue = [...searchQueue, ...graph[person]];
                searched.push(person);
            }
        }
    }
    return false;
}

console.log(search("you"));