function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    // this is the function body
    console.log('Running Calculate Bill!!');
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;
  }

  const firstName = 'wes';
  function sayHiTo(firstName) {
    return `Hello ${firstName}`;
  }


  const greeting = sayHiTo('wes')
  console.log(greeting);

  const myTotals13 = calculateBill(20 + 20 + 30 + 20, 0.15);
  console.log(myTotals13);

  function doctorize(name) {
    return `Dr ${name}`;
  }

  function yell(name) {
    return `HEY ${name.toUpperCase()}`;
  }

  console.log(yell(doctorize('wes')));