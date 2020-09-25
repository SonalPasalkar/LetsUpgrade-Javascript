let Employees=[
    {
      name:"akash",
      age:24,
      city:"pune",
      salary:25000

    },
    {
        name:"shweta",
        age:22,
        city:"banglore",
        salary:30000
    },
    {
        name:"sandy",
        age:25,
        city:"mumbai",
        salary:25000
    },
    {
        name:"parth",
        age:26,
        city:"maisur",
        salary:20000
    }
]
function display(emparray)
{
    let tabledata=" ";
    let srno=1;

  emparray.forEach(function(emp)
  {
     
      let currentrow=`<tr>
          <td>${srno}</td>
          <td>${emp.name}</td>
          <td>${emp.age}</td>
          <td>${emp.city}</td>
          <td>${emp.salary}</td>
          <td><button onclick="deleteEmployee()">Delete</button></td>
          </tr>`;
          tabledata +=currentrow;
          srno++;
  });
   document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
  
}
display(Employees);


function searchByName()
{
    
    let searchName = document.getElementById("searchname").value;

   // console.log(searchName);
    let newData = Employees.filter(function(employee){
        return employee.name.indexOf(searchName)!=-1;
    })
    console.log(newData);
    display(newData);
}
// function searchById()
// {
    
//     let searchId = document.getElementById("searchid").value;

//    // console.log(searchName);
//     let newData1 = srno.filter(function(Employees){
//         return srno.indexOf(searchId)!=-1;
//     })
//     console.log(newData1);
//     display(newData1);
// }


function deleteEmployee(index){
    Employees.splice(index,1);
    display(Employees);
}
