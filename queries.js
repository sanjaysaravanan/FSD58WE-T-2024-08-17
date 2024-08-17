// create DB
// use 'fsd56we-tamil';

// show collections; // list of collections in database

// Create Collection
db.createCollection("mentors");

db["mentors"].insertOne({ name: "Sanjay", role: "MERN Mentor" });

// Automatically creates a new Collection students
db.students.insertOne({ name: "Sanjay", batch: "FSD58WE-T" });

// 1. Select all the information about Users
db.users.find();

// 2. Select the user with id 4
db.users.find({ id: 4 }).toArray(); // returns an array with ne document
// 2.1 Select the user object with id 4
db.users.findOne({ id: 4 });

// 3. find the user with email Sincere@april.biz
db.users.findOne({ email: "Sincere@april.biz" });

// 4. with eq operator
db.users.findOne({ email: { $eq: "Sincere@april.biz" } });

// 5. Select all the users whose age is less than 50
// lt operator in query
db.users.find({ age: { $lt: 50 } });

// 6. Select all the user whose age is greater than 50
// gt operator in query
db.users.find({ age: { $gt: 50 } });

// 7. Select all the users who age is less than or equal to 35
// lte operator in query
db.users.find({ age: { $lte: 50 } });

// 8. Select all the users whose age is between 40 and 50 ( include 40 & 50 )
db.users.find({ age: { $lte: 50, $gte: 40 } });
db.users.find({ $and: [{ age: { $lte: 50 } }, { age: { $gte: 40 } }] });

// 8.1 find all the users whose ids in the array [4, 7, 3]
db.users.find({ id: { $in: [4, 7, 3] } });

// 8.2 find all the users except these ids in the array [4, 7, 3]
db.users.find({ id: { $nin: [4, 7, 3] } });

// $in
// 13. select all the users whose name is in the list
// ['Clementina DuBuque', 'Nicholas Runolfsdottir V', 'Mrs. Dennis Schulist']

// $nin
// 14. select all the users expect whose name is in the list
// ['Clementina DuBuque', 'Nicholas Runolfsdottir V', 'Mrs. Dennis Schulist']

// $regex
// 15. select all the users whose name has charater D in it
db.users.find({ name: { $regex: "D" } });
// $where
// 15.1 select all the users where age is odd number

// Projection
// 16. Select name, id, email, website from the users coollection
db.users.find({}, { name: 1, id: 1, email: 1, website: 1, _id: 0 });

// 17. Select all fields except company, hobbies, address from the users coollection
db.users.find({}, { company: 0, hobbies: 0, address: 0 });

// handling composite fields

// Objects
// 18. select all the users who live in this zipcode "92998-3874"
db.users.find({ "address.zipcode": { $eq: "92998-3874" } });
db.users.findOne({ "address.zipcode": { $eq: "92998-3874" } });

// 19. select all the users who live in this lat "-37.3159"
db.users.findOne({ "address.geo.lat": { $eq: "-37.3159" } });

// Array
// 20. Select all the users who has the hobby of "Coding"
// in this or that
db.users.find({ hobbies: { $in: ["Coding"] } });

//Next Session:
// 20.1. Select all the users who has the hobby of "Coding" or "Sleep"
// in this or that

// 21. Select all the users who has the hobby of both "Jogging" & "Cycle"

// Deletion
// 22. Delete All Users

// 9. First two users whose age is between 40 and 50 ( include 40 & 50 )

// 10. First two users

// 11. find the 3, 4 users
