const taskContainer=document.querySelector(".task__container");
console.log(taskContainer);
const globalStorage=[];
const getNewcard=(taskData)=>
  `
    <div class="column col-sm-12 col-md-6 col-lg-4 mt-2 mb-2">
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
        taskType:document.getElementById("TaskType").value,
        taskDescription:document.getElementById("TaskDescription").value,
    }
    // console.log(taskData);
    if (taskData.id,taskData.imgURL ||taskData.imgURL==NA,taskData.taskTitle,taskData.taskType,taskData.taskDescription) {
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

