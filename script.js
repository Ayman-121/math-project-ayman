function isArithmeticSequence(seq) {
  return seq.every((val, i, arr) => i === 0 || (val - arr[i - 1] === arr[1] - arr[0]));
}

function updateNthTermInfo(firstValue, rateOfChange, nthTerm) {
  const nthValue = firstValue + (nthTerm - 1) * rateOfChange;
  document.getElementById('nth-term-info').innerText = `The ${nthTerm}th term is: ${nthValue}`;

  if (document.getElementById('sum-checkbox').checked) {
    const sum = (nthTerm / 2) * (2 * firstValue + (nthTerm - 1) * rateOfChange);
    document.getElementById('nth-term-info').innerText += `, Sum: ${sum}`;
  }
}

document.getElementById('sequence-input').addEventListener('input', function () {
  const inputText = this.value.replace(/[^0-9,-\s]/g, ''); // Allow only numbers, commas, and spaces as commas
  this.value = inputText.replace(/\s+/g, ',');

  const sequence = this.value.split(',').map(Number);
  if (sequence.length > 1 && isArithmeticSequence(sequence)) {
    const firstValue = sequence[0];
    const rateOfChange = sequence[1] - sequence[0];

    document.getElementById('sequence-info').innerText = `First value: ${firstValue}, Rate of change: ${rateOfChange}`;

    const nthTerm = parseInt(document.getElementById('nth-term-input').value);
    if (!isNaN(nthTerm)) {
      updateNthTermInfo(firstValue, rateOfChange, nthTerm);
    } else {
      document.getElementById('nth-term-info').innerText = '';
    }
  } else {
    document.getElementById('sequence-info').innerText = 'Please enter a valid arithmetic sequence.';
    document.getElementById('nth-term-info').innerText = '';
  }
});

document.getElementById('nth-term-input').addEventListener('input', function () {
  const inputText = document.getElementById('sequence-input').value;
  const sequence = inputText.split(',').map(Number);
  const firstValue = sequence[0];
  const rateOfChange = sequence[1] - sequence[0];

  const nthTerm = parseInt(this.value);
  if (!isNaN(nthTerm)) {
    updateNthTermInfo(firstValue, rateOfChange, nthTerm);
  } else {
    document.getElementById('nth-term-info').innerText = '';
  }
});

document.getElementById('sum-checkbox').addEventListener('change', function () {
  const inputText = document.getElementById('sequence-input').value;
  const sequence = inputText.split(',').map(Number);
  const firstValue = sequence[0];
  const rateOfChange = sequence[1] - sequence[0];

  const nthTerm = parseInt(document.getElementById('nth-term-input').value);
  if (!isNaN(nthTerm)) {
    updateNthTermInfo(firstValue, rateOfChange, nthTerm);
  }
});
