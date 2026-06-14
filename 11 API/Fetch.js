// Fetch api provides an interface for fetching(sending/receiving) resoures.
// API stands for Application Programming interface
// It uses Request and Repsonse objects. These objects are predefined.
// The fetch() method is used to fetch a resource(data) from url.
// it can be as
// let promise = fetch(URL,[options])
const url = "https://jsonplaceholder.typicode.com/users/1"
const getUser = async () => {
    let User = fetch(url)
    console.log(User)
}
