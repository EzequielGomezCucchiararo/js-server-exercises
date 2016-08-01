# Node Exercises

## 1. Connection to the server

Write a node.JS program that execute a connection to server and return success message like *"Success, i'm listening from port: 3000"*

_Hint: You need npm module - http_

### Extra

Set the port of the connection using an environment variable PORT

## 2. Show Content

Write a node program that read a file (passed as parameter) in local machine and shows in the console the content of it.

    node app.js test.txt

_Hint: You need npm module - [`fs`](https://nodejs.org/api/fs.html)_

## 3. HTML Code

Write a node.JS program that read and shows in the console the html code of one external page. The link of the external page should be read from a file `link.txt`

_Hint: You need npm module -> [`request`](https://github.com/request/request)_  

##4. File list

Write a node.JS program that list the name files of the current directory

_Hint:_

    var path = "/Users/User/ProjectExample/Files"; <- Assign a local path // text1.txt, text2.txt, example.html...*_

##6. Writing on txt
Write a node.JS program that creates a txt file and write on it.

_Hint: You need npm module -> concat-stream_

##7. Processing values
Write a node.JS program that process local txt and return values as a Array.

_Hint: You need npm module -> concat-stream_

##8. Show Hour
Write a node.JS program that shows you the local hour of server.

_Hint: You need npm module -> strftime_

##9. Compare values
Write a node.JS program that search information in .txt file and returns you how much coincidences find.

*If you search about "John", and in your txt files are 2 John, should return 2*

_Hint: **You can try save all data in one array and compare with search..**_

##10. Saving
Write a node.JS program that sum all integers saved in other txt file.

##11. Creating HTML
Write a node.JS program that create a HTML file.
*Access this HTML with http://localhost:8080 from your browser*

_Hint: You need npm module -> html_

##12. Creating HTML II
Write a node.JS program that create a HTML file with a JavaScript function inside that say: "Hello!"
*Access this HTML with http://localhost:8080 from your browser*

_Hint: You need npm module -> html_

---

##13. JSON
Write a node.JS program that read a JSON file and show you some propierties for console.

    JSON FILE:
        {
             "username":"xyz",
             "password":"xyz@123"
             "email":"xyz@xyz.com",
             "id": 0001
        }

Read username, password, email and id,

## 14 JSON II - Read JSON From File System
Write a node.JS program that read a JSON object and show the propierties for console

_Hint: 

    var jsonObj = require("./path/to/myjsonfile.json");_

## 15 JSON III - Delete An Element From A JSON Object
Write a node.JS program that read a JSON file and delete one propierty.

_Hint:_

    var myJson = {'key':'value'}; delete myJson['key'];_

## 16 JSON IV - Iterate
Write a node.JS program that read a JSON file and show you some propierties for console with itinerate values

_Hint:_

    for(var myKey in myJson) {
       console.log("key:"+myKey+", value:"+myJson[myKey]);
    }

## 17 JSON V - Check Key
Write a node.JS program that read a JSON file and compare if propierties exist in JSON file.

_Hint:_

    if(myJson.hasOwnProperty('key2')){
         //do something if the key exist
    }

## 18 JSON VI - Function
Write a node.JS program that read a JSON file and return the values as a function 

_example:_ 

    function doSomething() { return doSomething.value + 50; }
    var doSomethingElse = function() { return doSomethingElse.value + 100; };
    doSomething.value = 100;
    doSomethingElse.value = 100;
    console.log( doSomething() ); -> 150
    console.log( doSomethingElse() ); -> 200

## 20 JSON VI - Comparing Two JSON **!!!!!!!Final Challenge** 
Write a node.JS program that read two JSON files and compare if propierties are same in both files and show success message when the comparation it's over.

_Hint:_    
        
        if(typeof o1[keyPair[0]] == typeof o2[keyPair[1]] == "object")         {
        return deepEquals(o1[keyPair[0]], o2[keyPair[1]])
        } else {
        return o1[keyPair[0]] == o2[keyPair[1]];


## *CAUTION*, some process like Create HTML or Petitions to servers need close the previous conexion before execute another new.
