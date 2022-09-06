
var mainDiv = document.getElementById("mainCont") ;
var headingDiv = document.createElement("div");
var headingDivH1 = document.createElement("h1");
headingDiv.setAttribute("class", "main-heading")
var headingDivH1Txt = document.createTextNode("ToDo App")

var contentDiv = document.createElement("div")
var input = document.createElement("input");
input.setAttribute("class", "input")
input.setAttribute("id", "value")

input.setAttribute("type", "text")
input.setAttribute("placeholder", "Enter Item")

var addBtn = document.createElement("button");
addBtn.setAttribute("onClick", "add()");
var addBtnTxt = document.createTextNode("Add")


mainDiv.appendChild(headingDiv);
headingDiv.appendChild(headingDivH1);
headingDivH1.appendChild(headingDivH1Txt);
mainDiv.appendChild(contentDiv);
contentDiv.appendChild(input);
contentDiv.appendChild(addBtn);
addBtn.appendChild(addBtnTxt)

var inputData=[];



function add() {
    // console.log(input.value);
    // inputData.push(input.value)
    // console.log(inputData)

    function Data (id, value, taskComplted) {
        this.id = id;
        this.value = value;
        this.taskComplted = taskComplted;
    }

    var data = new Data(inputData.length, input.value, false)
    inputData.push(data)
    // console.log(inputData);

    for (var i = 0; i < inputData.length; i++){
        console.log(inputData[i]);
        for (var key in inputData[i]){
            console.log(inputData[i][key])

            var listingDiv = document.createElement("div");
            var ul = document.createElement("ul");
            var li = document.createElement("li");
            var liTxt = document.createTextNode(inputData[i][key])

          

        }
        
        
       
    }

    contentDiv.appendChild(listingDiv)
    listingDiv.appendChild(ul);
    ul.appendChild(li)
    li.appendChild(liTxt)












}





