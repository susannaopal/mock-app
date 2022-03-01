export const fetchAllItems = () => {
  return fetch('http://localhost:3001/api/v1/inventory')
  .then(response => response.json())
}


export const postNewItem = (addedItem) => {
    return fetch('http://localhost:3001/api/v1/inventory', {
      method: 'POST',
      body:  JSON.stringify({
        name: addedItem.name,
        type: addedItem.type,
        price: addedItem.price,
        numberAvailable: addedItem.price
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}


