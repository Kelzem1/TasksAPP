document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Escribe una tarea")
    }
    else{
        document.querySelector('#tasks').innerHTML 
        += `
            <div class="task">
                <span id="taskname">
                ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `

        var current_tasks = document.querySelectorAll(".delete")
        for(var i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove()
            }
        }

        var tasks = document.querySelectorAll(".task")
        for(var i = 0; i < tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed')
            }
        }
        document.querySelector("#newtask input").value = ""
    }
}
document.getElementById('enter').onkeydown = function(e){
    if(e.keyCode == 13){
          document.querySelector('#tasks').innerHTML 
        += `
            <div class="task">
                <span id="taskname">
                ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `
        document.querySelector("#newtask input").value = "";

        var current_tasks = document.querySelectorAll(".delete")
        for(var i = 0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove()
            }
        }

        var tasks = document.querySelectorAll(".task")
        for(var i = 0; i < tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed')
            }
        }
    }
}