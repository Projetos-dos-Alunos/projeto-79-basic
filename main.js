menuListArray = ["",
    "",
    "",
    "",
    "",
    ""];

function addItem() {
    var htmldata;
    var imgtags = '<img id="im1" src="images/pizzaImg.png"/>'
    var item = document.getElementById("addItem").value;
    menuListArray.sort();
    htmldata = ""
    for (var i = 0; i < menuListArray.length; i++) {
        htmldata = htmldata + imgtags + menuListArray[i] + '<br>';
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata;

}

function getMenu() {
    var htmldata = "";
    menuListArray.sort();
    for (var i = 0; i < menuListArray.length; i++) {
        htmldata = htmldata + menuListArray[i] + '<br>'
    }
    document.getElementById("displayMenu").innerHTML = htmldata;
}

function addTop() {
    //Aqui eu vou pegar o valor que a pessoa digitar na caixa de texto e vou jogar o que ela escreveu na variável "item".

    // E aqui eu chamo uma função que já está funcionando lá em cima. Eu estou chamando ela aqui embaixo, porque eu estou adicionando mais ingredientes , mais itens.
    

}