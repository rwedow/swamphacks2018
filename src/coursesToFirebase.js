const firebase = require('./firebase');

const coursesRef = firebase.database().ref('courses');
const course = {
  "title": "Credit",
  "description":"The basics of credit cards, credit score, and how to use credit to your advantage.",
  "submodules":
  [
    {
      "title": "What is credit?",
      "subtitle": "The basics of credit cards.",
      "slideTexts": 
      [
        {
          "order":1,
          "maintext": "Credit is receiving money now with the promise that it will be repaid later.\nThere are four main types of credit: \nRevolving (Credit Cards)\nCharge Cards\nService (Utilities, Memberships, Subscriptions)\nInstallment (Car Loans, Home Mortgages)"
        },
        {
          "order":2,
          "maintext":"A credit card allows you to borrow money to make charges up to a certain credit limit.\nIf you pay back the borrowed money within a certain time frame, you do not have to pay anything extra."
        }
        
       ]
      
    },
    {
      "title": "Why do I need credit?",
      "subtitle": "lorem ipsum",
      "slideTexts": 
      [
	    {
	      "order":1,
	      "maintext": "lorem ipsum 2"
	    },
	    {
	      "order":2,
	      "maintext":"dolor sit amet"
	    }
        
      ]
     }
  ]
}
coursesRef.push(course);
