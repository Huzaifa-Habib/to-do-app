var mainDiv = document.getElementById("mainCont") ;
var modalDiv = document.getElementById("modalDiv")
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
input.setAttribute("type", "text")
input.setAttribute("placeholder", "Enter Item")
input.setAttribute("maxlength", "40")
input.setAttribute("id", "input")

var coverDiv = document.createElement("div");
coverDiv.setAttribute("class", "cover");



var addBtn = document.createElement("button");
addBtn.setAttribute("onClick", "add(event)");
addBtn.setAttribute("class", "add-btn");
var addBtnTxt = document.createTextNode("Add")
var updateBtn = document.createElement("btn");
updateBtn.setAttribute("onClick", "update()")
updateBtn.setAttribute("class", "update-btn")
updateBtn.style.display = "none"
var updateBtnTxt = document.createTextNode("Update")

var verifyDivMain = document.createElement("div")
verifyDivMain.setAttribute("class", "verify-main")
var verifyDiv = document.createElement("div")
verifyDiv.setAttribute("class", "verify")
var verifyDivH1 = document.createElement("h3");
var verifyDivH1Txt = document.createTextNode("Are You Sure?")
var verifyBtnDiv = document.createElement("div");
verifyBtnDiv.setAttribute("class", "v")
var yesBtn = document.createElement("button");
yesBtn.setAttribute("class", "yes")
yesBtn.setAttribute("onClick", "yes()")

var yesBtnTxt = document.createTextNode("yes")

var noBtn = document.createElement("button");
noBtn.setAttribute("class", "no")
noBtn.setAttribute("onClick", "no()")

var noBtnTxt = document.createTextNode("No")


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
contentDiv.appendChild(coverDiv)

modalDiv.appendChild(verifyDivMain)
verifyDivMain.appendChild(verifyDiv);
verifyDiv.appendChild(verifyDivH1);
verifyDivH1.appendChild(verifyDivH1Txt);
verifyDiv.appendChild(verifyBtnDiv);
verifyBtnDiv.appendChild(yesBtn)
yesBtn.appendChild(yesBtnTxt)

verifyBtnDiv.appendChild(noBtn)
noBtn.appendChild(noBtnTxt)







var inputData=[];

var listingDiv = document.createElement("div");
listingDiv.setAttribute("class", "list-div");
var listingDivH1 = document.createElement("h1");
var listingDivH1Txt = document.createTextNode("My Lists")
contentDiv.appendChild(listingDiv)
listingDiv.appendChild(listingDivH1);
listingDivH1.appendChild(listingDivH1Txt)




function Data (id, value, taskComplted) {
    this.id = id;
    this.value = value;
    this.taskComplted = taskComplted;
}

var data;





function add() {
    // console.log(input.value);
    // inputData.push(input.value)
    // console.log(inputData)

    data = new Data(inputData.length, input.value, false)

    inputData.push(data)


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

            var compBtn = document.createElement("button");
            compBtn.setAttribute("id", "complete")
            compBtn.setAttribute("class", "complete")
            compBtn.setAttribute("onClick", "complete(event)")
            var compBtnTxt = document.createTextNode("Incomplete")

                    
            var string =JSON.stringify(inputData)
            // console.log(string)
            window.localStorage.setItem("Todo tasks", string);
            // var item = window.localStorage.getItem("Todo task")
            // // console.log(item)
            // var parse = JSON.parse(string)
            // console.log(parse.string.value); 
            var parse =JSON.parse(string)
            // console.log(parse)

            // for (var key in parse) {
            //     // console.log("Value "+parse[key].value)

               
            // }
    

            
        }  

        
       

    }
    // console.log(inputData);



   
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

    var get = window.localStorage.getItem("Todo tasks");
    // console.log(get)



    // if (window.performance ) {
    //     console.log(" 'Previous Tasks' " + parse[key].value)
    // }
 
}




    
// if (window.performance ) {
//     // console.info("window.performance works fine on this browser");
//     var dataLoad = document.getElementById("dataLoad")
//     dataLoad.style.display="block"

//     var loadPre = document.createElement("p");
//     loadPre.setAttribute("onClick", "loadFad()")
//     var loadPreTxt = document.createTextNode("Check Previous Data")


    
//     dataLoad.appendChild(loadPre);
//     loadPre.appendChild(loadPreTxt);


//     function loadFad() {
//         var preDataDivMain = document.createElement("div");
//         preDataDivMain.style.display = "block"
//         loadPre.style.display= "none"

//         var preDataDiv = document.createElement("div");
//         var preDataDivTable = document.createElement("table");
//         var preDataDivTableTr1 = document.createElement("tr")
//         var preDataDivTableTr1Th = document.createElement("th")
//         var preDataDivTableTr1ThTxt = document.createTextNode("ID")

//         var preDataDivTableTr1Th1 = document.createElement("th")
//         var preDataDivTableTr1Th1Txt = document.createTextNode("Task")

//         var preDataDivTableTr1Th2 = document.createElement("th")
//         var preDataDivTableTr1Th2Txt = document.createTextNode("Progress")

//         var tr2 = document.createElement("table");
//         var tr2td1 = document.createElement("td");
//         // var tr2td1Txt = document.createTextNode()



//         dataLoad.appendChild(preDataDivMain);
//         preDataDivMain.appendChild(preDataDiv);
//         preDataDiv.appendChild(preDataDivTable);
//         preDataDivTable.appendChild(preDataDivTableTr1)
//         preDataDivTableTr1.appendChild(preDataDivTableTr1Th)
//         preDataDivTableTr1Th.appendChild(preDataDivTableTr1ThTxt)

//         preDataDivTableTr1.appendChild(preDataDivTableTr1Th1)
//         preDataDivTableTr1Th1.appendChild(preDataDivTableTr1Th1Txt)

//         preDataDivTableTr1.appendChild(preDataDivTableTr1Th2)
//         preDataDivTableTr1Th2.appendChild(preDataDivTableTr1Th2Txt)




//     }
   

   
    

// }







function del() {
    verifyDivMain.style.display="block"
   
     
}

function yes() {
    var a = document.getElementById("task").remove();
    verifyDivMain.style.display="none"

}

function no() {
    verifyDivMain.style.display="none"


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
    addBtn.style.display="none"

    coverDiv.style.display="block"

}

function update() {
    getLi.textContent = input.value
    input.value = "";
    addBtn.style.display="block"
    updateBtn.style.display="none"
    coverDiv.style.display = "none"

    
}

function complete(event) {
    var h = event.target.childNodes[0];
    var k = event.target.parentNode.childNodes[2]
    // console.log(k)
    if (h && h.textContent === "Incomplete") {
    h.textContent = "Completed";
     
    k.style.background = "limeGreen"
    k.style.transition = "2s"
    }

    else{
        h.textContent = "Incomplete";
        k.style.background = "orange"
        k.style.transition = "2s"
    }
   
}

// console.log(inputData)
// window.onbeforeunload = function() {
//     alert( "Dude, are you sure you want to refresh? Think of the kittens!");
// }


//   console.info(performance.navigation.type);
//   if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
//     console.info( "This page is reloaded" );
//   } else {
//     console.info( "This page is not reloaded");
//   }








