const postId = +localStorage.getItem('postId');
$.ajax({
    url:'https://jsonplaceholder.ir/comments?postId='+postId,
        method:'get',
        success:(response)=>{
            $("#comments_list").empty();
            response.map(comment => $("#comments_list").append(`
            <p>${comment.name}</p>
            <p>${comment.email}</p>
            <p>${comment.body}</p>
            <hr>
            `)
            )
        },
        error: error => {
            alert("Smth went wrong");
        }
})