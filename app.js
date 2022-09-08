var mainDiv = document.getElementById("mainCont") ;
var headingDiv = document.createElement("div");
var headingDivH1 = document.createElement("h1");
headingDiv.setAttribute("class", "main-heading")
var headingDivH1Txt = document.createTextNode("ToDo App")

var contentDiv = document.createElement("div")
contentDiv.setAttribute("class", "content")
var inputDiv = document.createElement("div")
inputDiv.setAttribute("class", "input-div")
var input = document.createElement("input");
input.setAttribute("class", "input")
input.setAttribute("id", "value")

if (input.value.length === "") {
    alert("You can ")
}


input.setAttribute("type", "text")
input.setAttribute("placeholder", "Enter Item")
input.setAttribute("maxlength", "21")
input.setAttribute("id", "input")



var addBtn = document.createElement("button");
addBtn.setAttribute("onClick", "add(event)");
addBtn.setAttribute("class", "add-btn");
var addBtnTxt = document.createTextNode("Add")
var updateBtn = document.createElement("btn");
updateBtn.setAttribute("onClick", "update()")
updateBtn.style.display = "none"
var updateBtnTxt = document.createTextNode("Update")


mainDiv.appendChild(headingDiv);
headingDiv.appendChild(headingDivH1);
headingDivH1.appendChild(headingDivH1Txt);
mainDiv.appendChild(contentDiv);
contentDiv.appendChild(inputDiv);
inputDiv.appendChild(input)
inputDiv.appendChild(addBtn);
addBtn.appendChild(addBtnTxt)
inputDiv.appendChild(updateBtn);
updateBtn.appendChild(updateBtnTxt);



var inputData=[];

var listingDiv = document.createElement("div");
listingDiv.setAttribute("class", "list-div");
var listingDivH1 = document.createElement("h1");
var listingDivH1Txt = document.createTextNode("My Lists")
contentDiv.appendChild(listingDiv)
listingDiv.appendChild(listingDivH1);
listingDivH1.appendChild(listingDivH1Txt)


var compBtn = document.createElement("button");


function Data (id, value, taskComplted) {
    this.id = id;
    this.value = value;
    this.taskComplted = taskComplted;
}




function add() {
    // console.log(input.value);
    // inputData.push(input.value)
    // console.log(inputData)

  

    var data = new Data(inputData.length, input.value, false)
    inputData.push(data)

    // console.log(inputData);

    for (var i = 0; i < inputData.length; i++){
        // console.log(inputData[i]);
        // for (var key in inputData[i]){
        //     console.log(inputData[i][key])

        if(input.value === "") {
            alert("Input cannot be empty")
            break;

        }


        else {
            listingDiv.style.display="block"

             
            var ul = document.createElement("ul");
            var taskDiv = document.createElement("div")
            taskDiv.setAttribute("class", "task-div")
            taskDiv.setAttribute("id", "task")

            var liDiv = document.createElement("div")
            liDiv.setAttribute("class", "li-div")
            var li = document.createElement("li");
            // li.setAttribute("class", "p")
            li.setAttribute("id", "p")
            var liTxt = document.createTextNode(data.value)
            var btnDiv =document.createElement("div")
            btnDiv.setAttribute("class", "btn-div")
            var delBtn = document.createElement("button");
            delBtn.setAttribute("class", "del")
            delBtn.setAttribute("onClick", "del()")

            var delBtnTxt = document.createTextNode("Delete")

            var editBtn = document.createElement("button");
            editBtn.setAttribute("class", "edit")
            editBtn.setAttribute("onClick", "edit(event)")

            var editBtnTxt = document.createTextNode("Edit")


            compBtn = document.createElement("button");
            compBtn.setAttribute("class", "complete")
            compBtn.setAttribute("onClick", "complete()")
            var compBtnTxt = document.createTextNode("Incomplete")
          

        }  
       

    }
   
    listingDiv.appendChild(ul);
    ul.appendChild(taskDiv)
    taskDiv.appendChild(liDiv)
    liDiv.appendChild(li)
    li.appendChild(liTxt)
    taskDiv.appendChild(btnDiv);
    btnDiv.appendChild(delBtn)
    delBtn.appendChild(delBtnTxt)
    btnDiv.appendChild(editBtn)
    editBtn.appendChild(editBtnTxt)
    btnDiv.appendChild(compBtn)
    compBtn.appendChild(compBtnTxt);

    input.value = ""; 
  


 
}

function del() {
    var a = document.getElementById("task").remove();
    // console.log(a);
    
}
var getLi;
var input;
function edit(event) {
    console.log(event.target.parentNode.parentNode.childNodes[0].childNodes[0])
     getLi = event.target.parentNode.parentNode.childNodes[0].childNodes[0]
     
    console.log(getLi)
     input =document.getElementById("input");
    input.value = getLi.textContent

    updateBtn.style.display="inline"



}

function update() {
    getLi.textContent = input.value
    input.value = "";
    
}

function complete() {
    getLi.innerText.style.color = "red";
}





               