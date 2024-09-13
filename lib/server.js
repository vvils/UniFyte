const fetch = require('node-fetch');

(async () => {
  const where = encodeURIComponent(JSON.stringify({
    "name": {
      "$exists": true
    },
    "state": {
      "$exists": true
    }
  }));
  const response = await fetch(
    `https://parseapi.back4app.com/classes/University?limit=10&order=-name&where=${where}`,
    {
      headers: {
        'X-Parse-Application-Id': 'Ipq7xXxHYGxtAtrDgCvG0hrzriHKdOsnnapEgcbe', // This is the fake app's application id
        'X-Parse-Master-Key': 'HNodr26mkits5ibQx2rIi0GR9pVCwOSEAkqJjgVp', // This is the fake app's readonly master key
      }
    }
  );
  const data = await response.json(); // Here you have the data that you need
  console.log(JSON.stringify(data, null, 2));
})();