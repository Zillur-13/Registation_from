
class Student{
   constructor(firstName,lastName,id,deparment,amount,email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id,
    this.amount = amount;
    this.email = email
   }

  convert(){
    return{
        firstName : this.firstName,
        lastName : this.lastName,
        id : this.id,
        deparment : this.deparment,
        amount : this.amount,
        email : this.email
    }
  }

}



document.querySelector(`#studentFrom`).addEventListener(`submit`,function(e){
    e.preventDefault('');

   let firstName = document.querySelector(`#firstName`).value;
   let lastName = document.querySelector(`#lastName`).value;
   let id = document.querySelector(`#id`).value;
   let deparment = document.querySelector(`#department`).value;
   let amount = document.querySelector(`#amount`).value;
   let email = document.querySelector(`#email`).value;


   let student = new Student(firstName,lastName,id,deparment,amount,email);
//    console.log(student);

   let students =  JSON.parse(localStorage.getItem('students')) || [];
   console.log(students);

   students.push(student.convert());
   localStorage.setItem('students',JSON.stringify(students));

   document.querySelector(`#studentFrom`).reset()
   alert(`registation successfully go ahead next step`)
   

})


