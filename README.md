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
| Method   | Path                                  | Purpose                                   |
| ------   | ------------------------------------  | ----------------------------------------- |
|DELETE    |/:id/donation/:donationId              |Divide donation equally among families
|GET       |/                                      |Home page
|GET       |/                                      |Index page of families
|POST      |/                                      |add a new family
|GET       |"/:id"                                 |Details about a particular family
|PUT       |"/:id"                                 |Update a particular family
|DELETE    |"/:id"                                 |Delete a particular family
|POST      |/:id/donation                          |Add donation
|DELETE    |/:id/donation/:donationId              |Delete a donation (needed when deleting family)
|GET       |/fetchtotaldonationamount              |aggregate all donations
|POST      |/donate                                |Divide donation equally among families

App (http://localhost:3000)
|       Path       |      Component     | Purpose                    |
|:----------------:|:------------------:|----------------------------|
| /                | Home.jsx           | Home Page                  |
| /families        | Families.jsx       | List of Families           |
| donations        | Donations.jsx      | Donations for all families |
| families/new     | AddFamily.jsx      | add a family               |
| families/:id     | FamilyDetails1.jsx | see details of a family    |
| families/id/edit | EditFamily.jsx     | edit a family              |
| *                | Error404.jsx       | error page                 |

Families Schema
| name          | String,       |
|---------------|---------------|
| alias         | String,       |
| address1      | String,       |
| address2      | String,       |
| city          | String,       |
| state         | String,       |
| zip           | String,       |
| phone         | String,       |
| email         | String,       |
| moreInfo      | String,       |
| monthlyBudget | Number,       |
| food          | Number,       |
| rent          | Number,       |
| utilityBills  | Number,       |
| other         | Number,       |
| donations     | foreign table |

name               | type          |
|--------------------|---------------|
| donor              | String,       |
| donationAmount     | Number,       |
| rentAmount         | Number,       |
| foodAmount         | Number,       |
| utilityBillsAmount | Number,       |
| otherAmount        | Number,       |
