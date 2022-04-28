function changeNameColor(){
    const colours = ["red","orange","yellow","blue","pink","purple","lightBlue","magenta","lime"];
    var num = Math.floor(Math.random() * 10);

    document.getElementById("name").style.color = colours[num];
}