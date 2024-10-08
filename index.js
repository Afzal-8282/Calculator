let displayValue = '';
let decimalUsed = false;

function appendNumber(number) {
  displayValue += number;
  document.getElementById('display').value = displayValue;
}

function appendDecimal() {
  if (!decimalUsed) {
    displayValue += '.';
    document.getElementById('display').value = displayValue;
    decimalUsed = true;  // Mark the decimal as used
  }
}

function calculate() {
  // Simple calculation logic
  displayValue = eval(displayValue);
  document.getElementById('display').value = displayValue;
  decimalUsed = false;  // Reset decimal usage after calculation
}

function clearDisplay() {
  displayValue = '';
  decimalUsed = false;  // Reset decimal usage on clear
  document.getElementById('display').value = displayValue;
}

function deleteLast() {
    // Remove the last character from the display value
    displayValue = displayValue.slice(0, -1);
  
    // Update the display
    document.getElementById('display').value = displayValue;
  
    // Check if the last character removed was a decimal
    if (!displayValue.includes('.')) {
      decimalUsed = false;  // Allow the decimal to be used again if removed
    }
  }
  
