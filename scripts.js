const instances = document.getElementById('instances');
const instanceSelector = document.getElementById('instanceSelector');
const userView = document.getElementById('userView');

const websites = [
  'https://discord.com/app#',
  'https://google.com/webhp?igu=1',
  'https://party.finance/',
  'https://www.google.com/search?igu=1',
  'https://app.party.finance/',
  'https://discord.com/',
];

// Generate the instances and add them to the UI
websites.forEach((website, index) => {
    const iframe = document.createElement('iframe');
    iframe.src = website;
    instances.appendChild(iframe);

    const option = document.createElement('option');
    option.value = index;
    option.innerText = `Instance ${index + 1}`;
    instanceSelector.appendChild(option);
  });


function addToView() {
  const selectedIndex = instanceSelector.value;
  const selectedIframe = instances.children[selectedIndex].cloneNode(true);
  selectedIframe.style.display = 'block';
  userView.appendChild(selectedIframe);
}