const taskContainer=document.querySelector(".task__container");
console.log(taskContainer);
const saveChanges=() =>{
    const taskData= {
        id:`${Date.now()}`,
        imgURL:document.getElementById("ImgURL").value,
        taskTitle:document.getElementById("TaskTitle").value,
        taskType:document.getElementById("TaskType").value,
        taskDescription:document.getElementById("TaskDescription").value,
    }
    console.log(taskData);
    const newCARD=`
    <div class="column col-sm-12 col-md-6 col-lg-4">
    <div class="card">
      <div class="card-header d-flex gap-2 justify-content-end">
        <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button>
      </div>
      <div class="card-body">
        <img src=${taskData.imgURL} alt="...." class="card-img-top">
        <h5 class="card-title mt-3 fw-bold text-primary">${taskData.taskTitle}</h5>
        <p class="card-text">${taskData.taskDescription}</p>
        <a href="#" class="btn btn-primary">${taskData.taskType}</a>
      </div>
    </div>
  </div>
    `;
    taskContainer.insertAdjacentHTML("beforeend",newCARD);
};

