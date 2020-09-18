let Students = [
    {
        name:"sonali",
        age:35,
        country:"India",
         hobbies : ["Drawing","rangoli"]
    } ,
    {
        name:"sonal",
        age:19,
        country:"India",
        hobbies : ["Drawing","Reading","mehndi"]
    } ,
    {
        name :"siya",
        age: 16,
        country:"USA",
        hobbies: ["dance","cricket"]

    },
    {
        name:"ana",
        age:20,
        country:"london",
        hobbies: ["playing","cake making"]
    },
    
    
    {
        name:"arohi",
        age:32,
        country:"UK",
        hobbies: ["playing","coding"]
    }
    
];
  function displayAge()
  {
    console.log("Printing All Objects having age less than 30");
    for(i=0;i<Students.length;i++)
    {
         if(Students[i].age<30)
          console.log(Students[i]);

       
    }
  }
  displayAge();  



function displayCountry()
{
    console.log("Printing All Objects having country India");
   // console.log("Checking");
   for(j=0;j<Students.length;j++)
   {
    if(Students[j].country=="India")
    console.log(Students[j]);
         
    }
}
displayCountry();

 
