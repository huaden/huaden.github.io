//javascript file
//javascript file

const container = document.querySelector(".container")
const searchIcons = document.querySelectorAll(".search-bar i")

searchIcons.forEach(searchIcon =>{
    searchIcon.addEventListener("click", () => {
        container.classList.toggle("change");
    })
})

function handleKeyPress(event){
    if(event.keyCode == 13){//check if enter key is pressed
        var input = document.getElementById("searchBar");
        var value = input.value.trim(); //trims leading/trailing space

        if (value != "") {
            var list = document.getElementById("listOfInputs");
            var listItem = document.createElement("li");
            listItem.textContent = value;
            list.appendChild(listItem);
            input.value = "";
        }
    }
}
