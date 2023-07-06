

'strict mode'
const textArea =document.getElementById('text');
const addBtn=document.getElementById('addBtn');
const showNotes = document.getElementById('showNotes');
const title = document.getElementById('title');

let allNots={}



    addBtn.addEventListener('click',(e)=>{

console.log(allNots);

if(textArea.value.trim()!==""){
    creetNotes(textArea.value,title.value)
        title.value=''
        textArea.value=''
        title.style.borderColor = "rgb(0, 255, 170)";
        textArea.style.borderColor = "rgb(0, 255, 170)";
        textArea.setAttribute('placeholder','your note get sevd')

        
 }else if(textArea.value.trim()==="") {
    
        title.style.borderColor = "red";
        textArea.style.borderColor = "red";
        textArea.setAttribute('placeholder','your notes is empty')
     
    }
   setTimeout(removeStyling,800)
   }
)
function removeStyling(){
    title.value=''
        textArea.value=''
        title.style.borderColor = "white";
        textArea.style.borderColor = "white";
        textArea.setAttribute('placeholder','type another notes')
}

document.getElementById('deletBtn').onclick=()=>{ title.value=''
textArea.value=''}



function Notes(note,title){

    this.title=title
    this.note=note;
    this.id=Math.floor(Math.random()*444)
    this.data=function(){
    return new Date
    }
}



function creetNotes(notes,title){
    const note=   new Notes(notes);
    allNots[note.id]=note;

    note.title=title;
    
    let html
    html=  `
    <div class="card" class="column" id="${note.id}">
    <article>
    <h2>${note.title}</h2>
    <p>${note.note}</p>
    

    <sup>${note.data()}</sup>
    <button type="button" onclick="delet()" id='delet2'class="btn-delete">delete</button>

    
    </article></div>`;
     showNotes.innerHTML+=html
    localStorage.setItem(note.id,html)

}



 function delet(){
        const delet2 = document.getElementById('delet2') 
    const idElemnt= document.getElementById(delet2.parentElement.parentNode.id);
    idElemnt.remove()
    delete allNots[idElemnt.id]
       console.log(allNots);
       localStorage.removeItem(idElemnt.id)
    }



    for(let i =0 ; i< localStorage.length; i++){
      
showNotes.innerHTML+=`${localStorage.getItem(localStorage.key(i))}`
 }



