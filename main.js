function edit(q){
  document.getElementById("res").innerHTML = q;
}
function openai(q){
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODZlZjQ3ZmMtYTIyNi00ZDg2LWFhNWItNTBhMDI2Mzg3MWEwIiwidHlwZSI6ImFwaV90b2tlbiJ9.tAaEu-8ps0n0N91NAJJAtsHTTqRU2hDJP3OtvNpoG8c'
  },
  body: JSON.stringify({
    response_as_dict: true,
    attributes_as_list: false,
    show_original_response: false,
    temperature: 0,
    max_tokens: 250,
    providers: "openai",
    text: q
  })
};

fetch('https://api.edenai.run/v2/text/generation', options)
  .then(response => response.json())
  .then(response => res(response.openai.generated_text))
  .catch(err => console.error(err));
}

function cohere(q){
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODZlZjQ3ZmMtYTIyNi00ZDg2LWFhNWItNTBhMDI2Mzg3MWEwIiwidHlwZSI6ImFwaV90b2tlbiJ9.tAaEu-8ps0n0N91NAJJAtsHTTqRU2hDJP3OtvNpoG8c'
  },
  body: JSON.stringify({
    response_as_dict: true,
    attributes_as_list: false,
    show_original_response: false,
    temperature: 0,
    max_tokens: 250,
    providers: "cohere",
    text: q
  })
};

fetch('https://api.edenai.run/v2/text/generation', options)
  .then(response => response.json())
  .then(response => res(response.cohere.generated_text))
  .catch(err => console.error(err));
}
