const d=document;
const root =d.getElementById('root');
const input = d.createElement('input');
input.setAttribute('placeholder','Enter your task...');
const list=d.createElement('ul');
list.classList.add("list")

const button= d.createElement('button'); 
button.textContent= 'add task';
button.classList.add("btn")
button.classList.add("btn-success")

button.addEventListener('click',() => { 
    if(input.value){


        const text=d.createElement('p');
        text.classList.add("task")
        text.textContent=input.value; 

        text.addEventListener("click", done)


        const li=d.createElement('li');  
        const deleteButton=d.createElement("button") 
        deleteButton.textContent="delete"
        deleteButton.classList.add("btn")  
        deleteButton.classList.add("btn-danger")  
        li.appendChild(text) 
        li.appendChild(deleteButton) 
        list.appendChild(li)
        input.value=""
     
        // deleteButton.addEventListener("click", function(){console.log(this)})
        deleteButton.addEventListener("click", function(){
            if(confirm("Are you sure?")){
                this.parentElement.remove()
            }
         })    
    }else{
        alert("Task must have a value")
    }

});

function done(){

    this.classList.toggle("done")
    //console.log(this) 
    // recibe como this al elemento que esta llamando la 
    //funcion para este caso text
}


root.appendChild(input); 
root.appendChild(button); 
root.appendChild(list) 

