async function checkPostAvailability() {
    const result2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data2 = await result2.json();
    let hasil = result2.userId > 5 ? "post is available for user IDs greater than 5" : "post is not available for user IDs greater than 5";
    console.log(hasil);
}
checkPostAvailability();