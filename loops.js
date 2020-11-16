var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
var count = 0; 
for(var i = 0; i < officeItems.length; ++i){
  if(officeItems[i] == "computer")
  count++;
}
//count = (str.match(/computer/g) || []).length;
console.log(count);



        var people = [
            {
              name: "Mike",
              age: 12,
              gender: "male"
            },{
              name: "Madeline",
              age: 80,
              gender: "female"
            },{
              name: "Cheryl",
              age: 22,
              gender: "female"
            },{
              name: "Sam",
              age: 30,
              gender: "male"
            },{
              name: "Suzy",
              age: 4,
              gender: "female"
            }
          ] 
          for(let x = 0; x < people.length; x++) {
            if(people[x].age >= 18){
               console.log(people[x].name + " Is Old Enough");
            }
            else {
               console.log(people[x].name + " Is Not Old Enough");
            } 
       }

var lightSwitch = {
  switch: [2,3,2],
  switch2: [1,2,3,4]
}
for(var i = 0; i < lightSwitch.length; ++i){
       if( lightSwitch.lenth == 2) {    
        console.log("The light is On") 
        } 
        else { 
            console.log("The light is off");
        } break;
      }











console.log("Mike is not old enough to see Mad Max")
console.log()
        