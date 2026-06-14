// Fetch api provides an interface for fetching(sending/receiving) resoures.
// API stands for Application Programming interface
// It uses Request and Response objects. These objects are predefined.
// The fetch() method is used to fetch a resource(data) from url.
// it can be as
// let promise = fetch(URL,[options])
// GET is default method in fetch
const url = "https://jsonplaceholder.typicode.com/users/1"

const getUser = async () => {
    let response = await fetch(url)//response
    console.log(response.status)
}
// JSON() methods returns a second promise that converts json data into js object which readable.

const getUser = async () => {
    let response = await fetch(url)//response
    let data = await response.json()
    console.log(data)

}

// html connections
const button = document.querySelector("#btn")
const details = document.querySelector("#details")

const getUser = async () => {
    let response = await fetch(url)//response
    let data = await response.json()
    console.log(data)
    details.innerText = `ID = ${data.id}\nUsername = ${data.username}\nEmail = ${data.email}`
}
button.addEventListener("click",getUser)
