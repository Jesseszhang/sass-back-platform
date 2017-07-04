const {
  dropMenu: dropMenuHub,
  inputBox: inputBoxHub,
  bubble: bubbleHub
} = require('components/config/componentHub.json');

SAAS.componentHub[dropMenuHub] = SAAS.componentHub[dropMenuHub] || [];

$(window).on('click', () => {
  SAAS.componentHub[dropMenuHub].forEach((component, index) => {
    component.hideMenuItem = true;
  });

  SAAS.componentHub[inputBoxHub].forEach((component, index) => {
    component.fold();
  });

  SAAS.componentHub[bubbleHub].forEach((component, index) => {
    clearTimeout(component.bubbleDisplayCounter);
    component.bubbleDisplay = false;
  });
});