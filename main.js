window.addEventListener('load',()=>{
    const form=document.querySelector('#new_task');
    const input=document.querySelector('#new-task-input');
    const list_el=document.querySelector('#tasks');

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const task =input.value;
        if (!task){
            alert('pleas fill out the task')
            return;
        }
        const task_el=document.createElement("div");
        task_el.classList.add('task');

        const tasl_content_el=document.createElement('div');
        tasl_content_el.classList.add('content');
        // tasl_content_el.innerText=task;

        task_el.appendChild(tasl_content_el);
        const tasl_input_el =document.createElement("input");
        tasl_input_el.classList.add('text');
        tasl_input_el.type='text';
        tasl_input_el.value=task;
        tasl_input_el.setAttribute('readonly','readonly');

        tasl_content_el.appendChild(tasl_input_el);
        const task_actions_al =document.createElement('div');
        task_actions_al.classList.add('actions');

        const task_edit_al =document.createElement('button');
        task_edit_al.classList.add('edit');
        task_edit_al.innerHTML='Edit';

        const task_delete_al =document.createElement('button');
        task_delete_al.classList.add('delete');
        task_delete_al.innerHTML='Delete';

        task_actions_al.appendChild(task_edit_al);
        task_actions_al.appendChild(task_delete_al);

        task_el.appendChild(task_actions_al);
        list_el.appendChild(task_el);
        input.value="";

        task_edit_al.addEventListener('click',()=>{

            if(task_edit_al.innerText.toLowerCase()=='edit'){
                tasl_input_el.removeAttribute('readonly');
                tasl_input_el.focus();
                task_edit_al.innerText='Save';
            }else{
                tasl_input_el.setAttribute('readonly','readonly');
                task_edit_al.innerText="Edit";
            }
            
        });

        task_delete_al.addEventListener('click',()=>{
            list_el.removeChild(task_el);

        })


    })
})