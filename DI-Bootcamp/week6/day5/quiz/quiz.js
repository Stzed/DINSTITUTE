
// question 13

// const addPBtn = document.querySelector('#btn');
// const paragraphContainer = document.querySelector('#p');
// let paragraphCount = 0;

// addPBtn.addEventListener('click', () => {
//   const newParagraph = document.createElement('p');
//   paragraphCount++;
//   const paragraphContent = (paragraphCount % 3 === 0) ? 'Hello' : 'New Paragraph';
//   newParagraph.textContent = paragraphContent;
//   paragraphContainer.appendChild(newParagraph);

//   newParagraph.addEventListener('mouseover', () => {
//     newParagraph.style.color = 'red';
//   });
// });







//question 28
// const getCatFact = async () => {
//   try {
//     const response = await fetch('https://catfact.ninja/fact');
//     if (!response.ok) {
//       throw new Error('Unable to fetch data');
//     }
//     const data = await response.json();
//     return data.fact;
//   } catch (error) {
//     console.error(error.message);
//   }
// };

// const displayCatFact = async () => {
//   const catFact = await getCatFact();
//   const catFactsList = document.getElementById('catFacts');
//   const li = document.createElement('li');
//   li.textContent = catFact;
//   catFactsList.appendChild(li);
// };

// const btn = document.getElementById('btn');
// btn.addEventListener('click', displayCatFact);







//question 29
const postFormData = async (formData) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error('Unable to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const form = document.getElementById('post-form');
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const response = await postFormData(formData);
  console.log(response);
  const responseDiv = document.getElementById('response');
  responseDiv.textContent = JSON.stringify(response);
};

const form = document.getElementById('post-form');
form.addEventListener('submit', handleSubmit);
