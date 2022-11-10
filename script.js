// let promise =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if(response == ok){
//             resolve();
//         }else{
//             reject("network error")
//         }
        
//     },2000)
// });
// promise
// .then(res=>console.log(res))
// .catch(res => console.log(res));
// console.log("lolo");





// let promise =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(77)},2000)
// });
// async function getData(){
//     let res =await promise;
//     console.log(res);
// }
// getData();
// let promise =new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(77)},2000)
// });

// (async()=>{
//     console.log(await promise);
// })();



//IIFE
// function func() {
//     console.log("hello");
// }
// func()

//   (function func() {
//     console.log("hello");
// })();
// let selPosts = document.querySelector("#posts_select")
let selectUsers = document.querySelector("#users_select");
let listdiv = document.querySelector("#list");
let table = document.querySelector("#table");
function draw(array) {
    
    listdiv.innerHTML = "";
    for(let task of array ){
        listdiv.innerHTML +=`<a href="#"><p>${task.title}</p></a>
        <hr>`;
    }
}

function show(arr) {
    
    table.innerHTML = "";
    for(let elem of arr ){
        table.innerHTML +=`<p>${elem.body}</p>
        <hr>`;
    }
}




    // ;(async ()=>{
    //     let response = await fetch(TODOS_URL);
    //     let data = await response.json();
    //     console.log(data);
    //     draw(data.slice(0,20));
    // })();
    
    async function loadPosts(selectedUserId){
        let response = await fetch(POSTS_URL);
        let data = await response.json();
        draw(data.filter(item => item.userId === selectedUserId));
    }
    loadPosts(1);

    async function loadComments(selectedPostId){
        let response = await fetch(COMMENTS_URL);
        let comms = await response.json();
        show(comms.filter(index => index.postId === selectedPostId)); 
    }
    

    listdiv.addEventListener('click',()=>{
        
        window.open(show());
        
    })


//     listdiv.addEventListener('click', ()=>{
//         let selectedPostId = +listdiv.value;
//         window.open(loadComments(selectedPostId))
//     }
// )




    ;(async function(){
        let response = await fetch(USERS_URL);
        let users = await response.json();
        for(const user of users){
            selectUsers.innerHTML += `<option value=${user.id}>${user.name}</option>`
        }
    })();

    selectUsers.addEventListener('change',()=>{
        let selectedUserId = +selectUsers.value ;
        loadPosts(selectedUserId)
    })