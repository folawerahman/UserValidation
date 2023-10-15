const usersData = {
    folawe : {
        firstName: 'folawe',
        lastName: 'rahman',
        email: 'folawe@gmail.com',
        accountRegistered: true,
        password: "folawerahman"
    },

    zainab : {
        firstName: 'zainab',
        lastName: 'rahman',
        email: 'zainab@gmail.com',
        accountRegistered: false,
        password: "zainabrahman"
    },

    bolaji : {
        firstName: 'bolaji',
        lastName: 'rahman',
        email: 'bolaji@gmail.com',
        accountRegistered: true,
        password: "bolajirahman"
    },

    kjay : {
        firstName: 'kjay',
        lastName: 'rahman',
        email: 'kjay@gmail.com',
        accountRegistered: false,
        password: "kjayrahman"
    },
}

//functions
function displayLoginPrompt () {
    let userName = prompt("Enter your Username")

while (validateUserName(userName) == false){
    userName = prompt("Invalid Username", "Please enter a valid username")
}

if (userName == null){
    return
}

let password = prompt ("Enter your Password")

while (validatePassword(password) == false){
    password = prompt("Invalid Password", "Please enter a valid password")
}

if (password == null){
    return
}

let confirmPassword = prompt ("Confirm your Password")

while (confirmPassword !== password){
    confirmPassword = prompt("Password Incorrect! Please confirm your password again")
}

if (confirmPassword == null){
    return
}

//Check if userData exists
const user = usersData[userName]

if (user == undefined){
    alert('Incorrect Username or Password!')
}

if (userName == null){
    return
}

console.log(user) 
alert(
    `Your registered details:
    First name: ${user.firstName}
    Last name: ${user.lastName}
    Email: ${user.email}
    Account registered: ${user.accountRegistered}`
)

}
displayLoginPrompt()
alert("This is the end of this program")

function validateUserName(userName) {
    if (userName == null){
        return true
    } 
    
    if (userName.length > 10) {
        return false
    } else {
        return true
    }
}

function validatePassword(password) {
    if (password == null){
        return true
    }

    if (password.length < 6) {
        return false
    } else {
        return true
    }
}


