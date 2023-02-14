const draggableList = document.getElementById("draggable-list")
const checkBtn = document.getElementById("check")

const richestPeople = [
    "Jeff Bezos",
    "Elon Musk",
    "Bernard Arnault",
    "Bill Gates",
    "Mark Zuckerberg",
    "Warren Buffett",
    "Larry Ellison",
    "Larry Page",
    "Sergy Brin",
    "Mukesh Ambani"
]

const listItems = [];

let dragStartIndex;
createList()
function createList() {
    [...richestPeople]
    .map(a =>({value:a,sort:Math.random()}))
    .sort( (a,b)=>a.sort - b.sort)
    .map(a => a.value)
    .forEach((person,index)=>{
        console.log(person)
        const listItem = document.createElement("li");
        
        
        listItem.setAttribute('data-index',index)
        listItem.innerHTML =  ` 
        <span class="number">${index+1}</span>
        <div class="draggable" draggable=true>
                <p class="person-name">${person}</p>
                <i class="fas fa-grip-lines"></i>
        </div>
        `
        listItems.push(listItem);
        draggableList.appendChild(listItem)
            
    })
    addEventListener();
}

function dragStart(){
    //console.log("Event","drag start")
    dragStartIndex = +this.closest('li').getAttribute('data-index')
    console.log(dragStartIndex);
}
function dragOver(e){
   // console.log("Event","drag over")
   e.preventDefault();
  
}
function dragDrop(){
    //console.log("Event","drag drop")
    const dragEndIndex = +this.closest('li').getAttribute('data-index');
    console.log('dragEndIndex: '+dragEndIndex);
    swapItems(dragStartIndex,dragEndIndex);
    this.classList.remove('over')
}

function swapItems(from,to){
    const itemOne = listItems[from].querySelector('.draggable');
    const itemTwo = listItems[to].querySelector('.draggable')
    
    listItems[from].appendChild(itemTwo);
    listItems[to].appendChild(itemOne);
}
function dragEnter(){
    //console.log("Event","drag enter")
    this.classList.add('over')
}
function dragLeave(){
    //console.log("Event","drag leave")
    this.classList.remove('over')
}
function addEventListener(){
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems  = document.querySelectorAll('.draggable-list li');

    draggables.forEach((draggable) =>{
        draggable.addEventListener('dragstart',dragStart)
    })
    dragListItems.forEach(item =>{
        item.addEventListener('dragover',dragOver)
        item.addEventListener('drop',dragDrop)
        item.addEventListener('dragenter',dragEnter)
        item.addEventListener('dragleave',dragLeave)
    })
}
checkBtn.addEventListener('click',checkOrder)

function checkOrder(){
    listItems.forEach((listItem,index)=>{
        const personName = listItem.querySelector('.draggable').innerText.trim();
        if(personName !== richestPeople[index]){
            listItem.classList.add('wrong');
        }else{
            listItem.classList.remove('wrong');         
            listItem.classList.add('right');
        }
    })
}