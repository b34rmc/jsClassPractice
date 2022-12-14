/*
Due Thursday 10/27/2022

/*
Data Dump
You have been given a raw data dump that is structured as an array of objects. 
The object's keys are companies, and the values are arrays of emails, followed by a 3 digit department number. 
I need you to write a program that will go through the data, 
print the emails for each company and what department number that email belongs to.
*/

const data = [
  {
    Google: [
      "test@test.com 123",
      "test@test.com 321",
      "test@test.com 451",
      "test@test.com 123",
    ],
  },
  {
    Yahoo: [
      "test@test.com 123",
      "test@test.com 321",
      "test@test.com 451",
      "test@test.com 451",
    ],
  },
  {
    IBM: [
      "test@test.com 888",
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 123",
    ],
  },
  {
    GREGS: [
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    "AUTO SHOP": [
      "test@test.com 888",
      "test@test.com 555",
      "test@test.com 555",
      "test@test.com 123",
    ],
  },
  {
    "PAWN SHOP": [
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    Nike: [
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 555",
      "test@test.com 123",
    ],
  },
  {
    Franks: [
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 555",
      "test@test.com 123",
    ],
  },
  {
    Tims: [
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 123",
    ],
  },
  {
    Apple: [
      "test@test.com 123",
      "test@test.com 555",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    Sony: [
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    Disney: [
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    Popies: [
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
      "test@test.com 123",
    ],
  },
  {
    Sally: [
      "test@test.com 123",
      "test@test.com 555",
      "test@test.com 888",
      "test@test.com 123",
    ],
  },
  {
    Henry: [
      "test@test.com 123",
      "test@test.com 555",
      "test@test.com 555",
      "test@test.com 555",
    ],
  },
  {
    "Dave's": [
      "test@test.com 123",
      "test@test.com 888",
      "test@test.com 555",
      "test@test.com 123",
    ],
  },
];
console.log(data[{ Google }]);
