// Q.1 Prompt the user to enter their full name. Generate  a username for them based on the input. start username with @ and replace spaces with underscores, followed by their full name and end with fullname length. For example, if the user enters "John Doe", the generated username should be "@John_Doe_8".  
 let fullname= prompt("Enter your fullname")
 let username= `@ ${fullname.replace(" ","_")} ${fullname.length}`
 console.log(fullname)
 console.log(username)