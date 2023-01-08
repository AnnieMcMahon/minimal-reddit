const baseUrl = 'https://www.reddit.com';

export const getPostComments = async (postId) => {
  const response = await fetch(`${baseUrl}/comments/${postId}.json`);
  const jsonResponse = await response.json();
  return jsonResponse[1].data.children.map((comment) => comment.data);
};

export const Reddit = {
  search(searchTerm) {
    return fetch(`https://www.reddit.com/search.json?q=${searchTerm}`)
      .then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (!jsonResponse.data) {
          return [];
        }
        return jsonResponse.data.children.map(post => ({
          id: post.data.id,
          title: post.data.title,
          url: post.data.url,
          media: post.data.media
        }))
      })
  }
}