const button = document.querySelector("#boton")
const remove = document.querySelector("#remove")
const removeall = document.querySelector("#all")

let lista = document.querySelector("#añadir")
button.onclick= function(){
    console.log(lista.value)

    if(!lista.value){
        alert("No has puesto nada")
    }else{
        const newDiv = document.createElement("h2");
       
        const newContent = document.createTextNode(` -${lista.value}`);

      
        newDiv.appendChild(newContent);
        
        const currentDiv = document.getElementById("h21");
        document.body.insertBefore(newDiv, currentDiv);
    }
    
}

remove.onclick= function(){
    let elements = document.querySelector("h2")
    console.log("presionado")

    elements.remove()
}

removeall.onclick= function(){
    window.location.reload()
}