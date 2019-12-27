
//variable shadowing

//Global ()
    //Local ()
        //Local
    //Local

// let name = 'Andrew'

if (true) {
    // let name = 'Mike'
    if (true) {
        let name = 'Jen'
        console.log(name) //Jen
    }
}
if (true) {
    console.log(name) //Andrew
}