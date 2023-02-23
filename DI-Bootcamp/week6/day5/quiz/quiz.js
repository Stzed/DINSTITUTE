const addPBtn = document.querySelector('#btn');
const paragraphContainer = document.querySelector('#p');
let paragraphCount = 0;

addPBtn.addEventListener('click', () => {
  const newParagraph = document.createElement('p');
  paragraphCount++;
  const paragraphContent = (paragraphCount % 3 === 0) ? 'Hello' : 'New Paragraph';
  newParagraph.textContent = paragraphContent;
  paragraphContainer.appendChild(newParagraph);

  newParagraph.addEventListener('mouseover', () => {
    newParagraph.style.color = 'red';
  });
});



// question 13