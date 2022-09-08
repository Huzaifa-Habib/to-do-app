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


var addBtn = document.createElement("button");
addBtn.setAttribute("onClick", "add()");
addBtn.setAttribute("class", "add-btn");
var addBtnTxt = document.createTextNode("Add")


mainDiv.appendChild(headingDiv);
headingDiv.appendChild(headingDivH1);
headingDivH1.appendChild(headingDivH1Txt);
mainDiv.appendChild(contentDiv);
contentDiv.appendChild(inputDiv);
inputDiv.appendChild(input)
inputDiv.appendChild(addBtn);
addBtn.appendChild(addBtnTxt)

var inputData=[];

var listingDiv = document.createElement("div");
listingDiv.setAttribute("class", "list-div");
var listingDivH1 = document.createElement("h1");
var listingDivH1Txt = document.createTextNode("My Lists")
contentDiv.appendChild(listingDiv)
listingDiv.appendChild(listingDivH1);
listingDivH1.appendChild(listingDivH1Txt)


var compBtn = document.createElement("button");





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
        // for (var key in inputData[i]){
        //     console.log(inputData[i][key])

        


        if (input.value.length <= 30  ) {

           
            listingDiv.style.display="block"

             
            var ul = document.createElement("ul");
            var taskDiv = document.createElement("div")
            taskDiv.setAttribute("class", "task-div")
            var liDiv = document.createElement("div")
            liDiv.setAttribute("class", "li-div")
            var li = document.createElement("li");
            var liTxt = document.createTextNode(data.value)
            var btnDiv =document.createElement("div")
            btnDiv.setAttribute("class", "btn-div")
            var delBtn = document.createElement("button");
            delBtn.setAttribute("class", "del")
            var delBtnTxt = document.createTextNode("Delete")

            var editBtn = document.createElement("button");
            editBtn.setAttribute("class", "edit")
            var editBtnTxt = document.createTextNode("Edit")


            compBtn = document.createElement("button");
            compBtn.setAttribute("class", "complete")
            compBtn.setAttribute("onClick", "complete()")
            var compBtnTxt = document.createTextNode("Incomplete")
            

   
            

        }  
       

        // }

        // else{
            
        //     alert("Correct your input")
        // }
    

    }
   
                
    

    if (input.value.length > 30) {
        alert("Your Text length should be in 30 characters. ")
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
    compBtn.appendChild(compBtnTxt)

 
   
    






    input.value = "";
    

}



function complete() {
    for (var i = 0; i < inputData.length; i++){
    compBtn.innerText = "Completed"
    compBtn.style.transition = "10s"
    }
    

}

               
