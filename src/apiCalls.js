export const fetchAllItems = () => {
  return fetch('http://localhost:3001/api/v1/inventory')
  .then(response => response.json())
}