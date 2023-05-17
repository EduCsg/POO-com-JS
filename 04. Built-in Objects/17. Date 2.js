let date = new Date();

console.log(date); // 2023-05-17T19:26:11.973Z

// OBS: Janeiro é o mês 0
console.log(new Date(date.setMonth(2))); // 2023-03-17T19:26:32.050Z

console.log(new Date(Date.now()));

console.log(Date.parse(new Date(date.setMonth(2)))); // 1679081303000

console.log(new Date(1679081303000)); // 2023-03-17T19:28:23.000Z
