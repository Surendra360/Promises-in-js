//async code

// fetch("https://jsonplaceholder.typicode.com/user")
// .then((res)=>res.json)
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))


//*convert async to sync*
//using aync - await


//  const getUserAndPosts=async()=>{}

async function getUserAndPosts(){
    try {
        const userstr = await fetch("https://jsonplaceholder.typicode.com/users");
        const userjson = await userstr.json();

        const poststr = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20");
        const postjson = await poststr.json();

        console.log(userjson);
        console.log(postjson);
        console.log("user fetched!");

    } catch (err) {
        console.log(err);
    }
}
getUserAndPosts();