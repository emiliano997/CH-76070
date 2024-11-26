async function getUser(id) {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (user.status === 404) {
    throw new Error("User not found");
  }

  return user.json();
}

async function getPosts(userId) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  return posts.json();
}

// async await
async function main(userId) {
  try {
    const user = await getUser(userId);

    const posts = await getPosts(user.id);

    console.log(posts);
  } catch (error) {
    console.error(error.message);
  }
}

// main(5);

// .then, .catch
getUser(5)
  .then((user) => {
    getPosts(user.id)
      .then((posts) => {
        console.log(posts);
      })
      .catch((error) => {
        console.error(error.message);
      });
  })
  .catch((error) => {
    console.error(error.message);
  });
