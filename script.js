function Hello(){
    let name = "Jim";
    const age = 30;
    var course = "5210";

    let display = document.getElementById("show");
    display.innerHTML = `Student name is ${name} and he is ${age} years of age and he is doing the course ${course}`;
}