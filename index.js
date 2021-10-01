function submitData(userName, userEmail) {
  const destinationURL = 'http://localhost:3000/users';
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  };

  return fetch(destinationURL, configurationObject)
    .then(response => response.json())
    .then(object => {
      const p = document.createElement('p');
      const body = document.querySelector('body');

      p.textContent = object.id;
      body.append(p);
      console.log(object);
    })
    .catch(error => {
      const p = document.createElement('p');
      const body = document.querySelector('body');
      p.textContent = error.message;
      body.append(p);
    });
}

