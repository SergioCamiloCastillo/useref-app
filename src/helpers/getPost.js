const getPost = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const response = await fetch(url);
  const post = await response.json();
  return post;
};
export default getPost;
