# Open Hearts

Built By: Amina Oluwo, Eliana Freudenberger, Rivka Weingarten
This is an app built for local communities to help families in need.

A donor can go to the donate page and donate an amount that will be evenly distributed to all families.
Or the donor can choose a family on the families page and donate separately to the family,

CSS Framework: Bootstrap

Stack: MongoDB, Express, NodeJS

Server-Side Rendering: JSX

Node Modules: method-override, dotenv, express-react-views, react, cors, body-parser

Routes used.

API (http://localhost:5001/families)
Method Path Purpose
GET / Home page
GET / Index page of families
POST / add a new family
GET "/:id" Details about a particular family
PUT "/:id" Update a particular family
DELETE "/:id" Delete a particular family
POST /:id/donation Add donation
DELETE /:id/donation/:donationId Delete a donation (needed when deleting family)
GET /fetchtotaldonationamount aggregate all donations
POST /donate Divide donation equally among families

App (http://localhost:3000)
Path Component
/ Home.jsx
/families Families.jsx
donations Donations.jsx
families/new AddFamily.jsx
families/:id FamilyDetails1.jsx
families/id/edit EditFamily.jsx

- Error404.jsx
  ![image](https://github.com/RivkaWeingarten/OpenHearts/assets/126045006/cd39bf90-8a24-41c2-89f3-06f996cfbac7)

Families Schema

alias String, required
  address1 String, required
  address2 String, required
  city String, default
  state String, default
  zip String, default
  phone String, default
  email String, default
  moreInfo String, default
  monthlyBudget Number, default
  food Number, default
  rent Number, default
  utilityBills Number, default
  other Number, default
  donations mongoose.Schema.Types.ObjectId, ref

Donations Schema

    donor	 String, default

donationAmount Number, default
  rentAmount Number, default
  foodAmount Number, default
  utilityBillsAmount Number, default
  otherAmount Number, default
