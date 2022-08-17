var obj1 = {name: "Person1", age:5};
var obj2 = {age:5 , name: "Person1"};

var flag=true;

// comparing length and then data of the objects 
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log(`Are the objects equal ${flag}`);

