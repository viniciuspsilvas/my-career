export async function fetchPosts() {
    const response = await fetch('/api/blog');
    const data = await response.json();
    return data;
  }