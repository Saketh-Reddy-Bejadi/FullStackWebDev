const taskContainer=document.querySelector(".task__container");
console.log(taskContainer);
const globalStorage=[];
const getNewcard=(taskData)=>
  `
    <div class="column col-sm-12 col-md-6 col-lg-4 mt-2 mb-2">
    <div class="card">
      <div class="card-header d-flex gap-2 justify-content-end">
        <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-check fa-lg"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button>
      </div>
      <div class="card-body">
        <img src=${taskData.imgURL} alt="...." class="card-img-top">
        <h5 class="card-title mt-3 fw-bold text-primary">${taskData.taskTitle}</h5>
        <p class="card-text">${taskData.taskDescription}</p>
      </div>
    </div>
  </div>
    `;

const loadCardData=()=>{
  const getCardData=localStorage.getItem("zxcvbnm");


  const {cards} =JSON.parse(getCardData);


  cards.map((cardObject) =>{
    taskContainer.insertAdjacentHTML("beforeend",getNewcard(cardObject));
    globalStorage.push(cardObject);
  })
};
const saveChanges=() =>{
    const taskData= {
        id:`${Date.now()}`,
        imgURL:document.getElementById("ImgURL").value,
        taskTitle:document.getElementById("TaskTitle").value,
        taskDescription:document.getElementById("TaskDescription").value,
    }
    // console.log(taskData);
    if (taskData.id,taskData.imgURL,taskData.taskTitle,taskData.taskDescription) {
  //       const newCARD=`
  //   <div class="column col-sm-12 col-md-6 col-lg-4 mt-2 mb-2">
  //   <div class="card">
  //     <div class="card-header d-flex gap-2 justify-content-end">
  //       <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
  //       <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button>
  //     </div>
  //     <div class="card-body">
  //       <img src=${taskData.imgURL} alt="...." class="card-img-top">
  //       <h5 class="card-title mt-3 fw-bold text-primary">${taskData.taskTitle}</h5>
  //       <p class="card-text">${taskData.taskDescription}</p>
  //       <a href="#" class="btn btn-primary">${taskData.taskType}</a>
  //     </div>
  //   </div>
  // </div>
  //   `;
    taskContainer.insertAdjacentHTML("beforeend",getNewcard(taskData));


    globalStorage.push(taskData);
    localStorage.setItem("zxcvbnm",JSON.stringify({cards:globalStorage}));


    }

    
};






// <form action="#" id="myForm">
// <div class="modal-body">
//   <div class="mb-3">
//     <label for="fileOrURL" class="form-label" onclick="">File Upload</label>
//     <label for="#" class="form-label">or</label>
//     <label for="fileOrURL" class="form-label">URL</label>
//     <input type="text" class="form-control" name="fileOrURL" id="fileOrURL" placeholder="http://image.com/image.jpg">
//     <input type="file" class="form-control" name="fileUpload" id="fileUpload" >
// </div>

//     <label for="TaskTitle" class="form-label">Task Title</label>
//     <input type="text" class="form-control" name="TaskTitle" id="TaskTitle" placeholder="Web Development">
//     <label for="TaskType" class="form-label">Task Type</label>
//     <input type="text" class="form-control" id="TaskType" placeholder="Practice">
//     <label for="TaskDescription" class="form-label">Description</label>
//     <textarea class="form-control" id="TaskDescription" placeholder="This is DOM manipulation class" cols="10" rows="3"></textarea>
// </div>
// <div class="modal-footer">
//     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//     <input type="submit" class="btn btn-primary" value="Save changes">
// </div>
// </form>