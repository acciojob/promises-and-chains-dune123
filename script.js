//your JS code here. If required.
const submitButton=document.getElementById("submitButton")

//promise return answer
const agePromise=(age,name)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(age>18){
                resolve(`Welcome ${name}. You can vote`)
            }
            else{
                reject(`Oh sorry ${name}. You aren't old enough`)
            }
        },4000)
    })
}

submitButton.addEventListener("click",()=>{
   const nameInput=document.getElementById("nameInput").value;
   const numInput=document.getElementById("numInput").value;
   if(nameInput.trim()===""||numInput.trim()===""){
        alert("inputs cannot be empty")
   }
   else{
        agePromise(Number(numInput),nameInput)
        .then((data)=>{
            alert(data);
        })
        .catch((err)=>{
            alert(err)
        })
    }
})