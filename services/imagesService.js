export const getImageFromId = id => `https://picsum.photos/${600}/${600}?image=${id}`;

export const fetchImages = async () => {
  const response = await fetch('https://picsum.photos/list');
  if (!response.ok) {
    throw new Error('Network error');
  }
  return response.json();
}