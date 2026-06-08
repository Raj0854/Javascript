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

