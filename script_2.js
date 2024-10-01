

class Student {
    constructor(firstName,lastName,id,amount,email){
      this.firstName = firstName;
      this.lastName = lastName;
      this.id = id;
      this.amount = amount;
      this.email = email

    }
}


const getFunction =()=>{
    
    const students = JSON.parse(localStorage.getItem(`students`)) || [];
    // console.log(students)

    const studentTableBody = document.querySelector(`#studentTableBody`);
    studentTableBody.innerHTML = "";


    students.forEach((studentData,index)=>{
        let student = new Student(studentData.firstName,studentData.lastName,studentData.id,studentData.amount,studentData.email)

       const row = `
        <tr style="font-weight: bold">
           <td>${index + 1}</td>
           <td>${student.firstName}</td>
           <td>${student.lastName}</td>
           <td>${student.id}</td>
           <td>${student.amount}</td>
           <td>${student.email}</td>
           <td>
             <button class="btn btn-danger"><i class="fa-solid fa-trash"></i> Delete</button>   
             <button class="btn btn-danger"><i class="fa-solid fa-pen-to-square"></i> eidit</button>   
           </td>
        </tr>
         
        `

        studentTableBody.innerHTML += row;
    });

}

window.onload = function(){
    getFunction();
};

