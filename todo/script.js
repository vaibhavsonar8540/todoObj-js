let form = document.getElementById("form");

form.addEventListener('submit',(e)=>
{
    e.preventDefault();

    let Task = document.getElementById("task").value;

    let Pripority = document.getElementById("priority").value;

    let todoObj =
    {
        task : Task,
        prio : Pripority
    };

    console.log(todoObj);

    document.getElementById("task").value = "";
    document.getElementById("priority").value="";
    
})