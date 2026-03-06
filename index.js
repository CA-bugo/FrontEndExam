const content=document.querySelector("#content");
const submit=document.querySelector("#add");

//add event listener to submit button

submit.addEventListener('click',()=>{
    let fullName=document.querySelector("#fullName").value;
    let course=document.querySelector("#course").value;
    let yearLevel=document.querySelector("#yearLevel").value;
    let email=document.querySelector("#email").value;
    let dateEnrolled=document.querySelector("#dateEnrolled").value;
    let formData={fullName,course,yearLevel,email,dateEnrolled};

    fetch("http://localhost:7000/api/users",{
        method:'POST',
        body: JSON.stringify(formData),
        headers:{
            "Content-Type":"application/json",
        },
    }).catch((error)=>{
        console.log(error);
    })
    alert("User Added Successfully");
    location.reload();
});


window.addEventListener('load', ()=>{
    getUsers();
})

function getUsers(){
    let html=""
    //FETCH API
    fetch('http://localhost:7000/api/users',{mode:'cors'})
    .then(response=>{
        console.log(response);
        return response.json();
    })
    .then(data=>{
        console.log(data);
        data.forEach(element=>{
            html+=`<li>
                <div class="student-info">
                    <span><span class="label">Full Name:</span> ${element.fullName}</span>
                    <span><span class="label">Course:</span> ${element.course}</span>
                    <span><span class="label">Year Level:</span> ${element.yearLevel}</span>
                    <span><span class="label">Email:</span> ${element.email}</span>
                    <span><span class="label">Date Enrolled:</span> ${element.dateEnrolled}</span>
                </div>
            </li>`
        })

        content.innerHTML=html;
    })
    .catch(error=>{
        console.log(error);
    })
}
