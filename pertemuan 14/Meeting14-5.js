async function getPostDetails() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await result.json();
  if (result.status === 200) {
    console.log(data.title);
  } else {
    console.log("failed to fetch post");
  }
}
getPostDetails();
