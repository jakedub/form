// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
(function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
let formInput = document.getElementById ("fields");
let form = document.createElement ("form");
let second = formData[1]; //last name
let third = formData[2]; //email
let fourth = formData [3]; //URL
let fifth = formData [4]; //select language
let sixth = formData [5]; //text area
let seventh = formData [6]; //mobile telephone
let eigth = formData [7]; //home phone

for (let i=0; i<formData.length; i++){
  let label = document.createElement ("label");
  let input = document.createElement ("input");
    // if (formData[i].type === "textarea") {
    //   let textInput = document.createElement ("textarea")
    // } else if (formData[i].type === "select") {
    //   let selectInput =document.createElement ("select");
    // } else if (formdata[i].type === "tel") {
    //   let input = document.createElement ("tel");
    // } else {
    //   let input = document.createElement ("input");
    // }

label.setAttribute("for", formData[i].label);
input.setAttribute("id", formData[i].id);
input.setAttribute("placeholder", formData[i].label);
input.setAttribute("type", formData[i].type);

fields.appendChild(label);
fields.appendChild(input);
fields.appendChild(form);

}
