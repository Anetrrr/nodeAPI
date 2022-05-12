import { v4 as uuidv4 } from 'uuid';
let users = []
export const createNewUser = (req, res) => {
    const user = req.body;
    //const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    //const userWithID = { ...user, id: uuidv4()}
    //users.push(userWithID);
    users.push({...user, id: uuidv4()});
    //users.push()
    res.send(`User with the first name ${user.firstName} and last name ${user.lastName} added!`);
}
export const getAllUsers = (req, res) => {
    console.log(users);
    res.send(users);
}
export const getSpecificUser = (req, res) => {

    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
}
export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User with the id ${id} removed from the database! Sorry!`)
 }
 export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } =  req.body;
    const userUpdated = users.find((user) => user.id === id);

    if(firstName) userUpdated.firstName = firstName;
    if(lastName) userUpdated.lastName = lastName;
    if(age) userUpdated.age = age;
    res.send(`User details with id ${id} have been updated`)
}