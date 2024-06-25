const header = document.getElementById ("header")
const button = document.getElementById ("changeTextButton")
const text = document.querySelectorAll (".text")
const list = document.querySelectorAll (".list-item")
const firstListItem = document.querySelector (".list-item")
console.log(firstListItem)
button.addEventListener ("click",
    function() {header.innerHTML="Text ChangedS"}
)
for (let i = 0; i < text.length; i++) {
    text[i].style.color="blue"
}
for (let i=0; i < list.length; i++) {
    console.log(list[i].innerHTML);
    list[i].addEventListener("click"
       , function() {list[i].style.color="red"}
    )
}
firstListItem.style.backgroundColor="yellow"
