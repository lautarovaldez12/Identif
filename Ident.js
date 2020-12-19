function cuenta(user,pass) {
    switch(true){
        case user === "admin" && pass === "1234":
            console.log("Bienvenido!")
            break
        case user != "admin" || pass != "1234":
            console.log("Usario o contraseña incorrecto")
            break
        default:
            console.log("no esta ingresando el tipo de dato correcto")
    }
}

cuenta("admin", "1234")