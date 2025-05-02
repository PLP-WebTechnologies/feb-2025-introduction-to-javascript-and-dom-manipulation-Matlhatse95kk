// Text modification function
function modifyText() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = textElement.textContent.includes('Modified') 
        ? 'Initial text content' 
        : 'Modified text content!';
}

// Style modification function
function changeStyle() {
    const targetElement = document.getElementById('targetElement');
    targetElement.classList.toggle('modified-style');
}

// Element toggle function
let isElementCreated = false;
let newElement = null;

function toggleElement() {
    const container = document.getElementById('elementContainer');
    
    if (!isElementCreated) {
        newElement = document.createElement('div');
        newElement.textContent = 'New Dynamic Element';
        newElement.classList.add('new-element');
        container.appendChild(newElement);
        isElementCreated = true;
    } else {
        container.removeChild(newElement);
        isElementCreated = false;
    }
}