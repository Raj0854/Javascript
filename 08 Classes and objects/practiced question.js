// Q.1 you are creating a website for your college. create a class named "user" with 2 properties "name" and "email". create a method named "viewDetails" that allowa user to view website data.
class User{
    constructor(name,email){
        this.name = name
        this.email = email
    }
    viewDetails(){
        console.log ("Name:" + this.name + "\nEmail : " + this.email)
   }
}

let user1 =  new User("aman","aman@example.com")
let user2 =  new User("zoya","zoya@example.com")

// Q.2 create a new class named "Admin" which inherits from the "User" class. add a new method named "editDetails" that allows the admin to edit the website data.
class Admin extends User{
    constructor(name,email){
        super(name,email)
    }
    editDetails(newName,newEmail){
        this.name = newName
        this.email = newEmail
        console.log("Data edited succcessfully")

    }
}
let admin = new Admin("dean", "dean@example.com")

//Q.