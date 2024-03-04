const searchForm = document.getElementById('searchForm');
const helpersList = document.getElementById('helpersList');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  const skill = document.getElementById('skill').value;
  const date = document.getElementById('date').value;
    const response = await fetch(`/api/helpers?skill=${skill}&date=${date}`);
    const helpers = await response.json();
    console.log(helpers);
    helpersList.innerHTML = helpers.map(helper => `<li>${helper.name}</li>`).join('');
}