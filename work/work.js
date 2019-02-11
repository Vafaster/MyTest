const fs = require('fs');
const workuser = require('./workuser.js');
const worktask = require('./worktask');
const path_taskDB = ('/db/task.json');

let userList = [];


/*
  ################  NEW TASK ##################
*/

const newTask = async (userlog, passlog, userTask, description) => {

    let objTask = {
        description,
        user:userTask,
        completed:false
    }
  
}


/*
  ################  NEW USER ##################
*/

const newUser = async (userlog, passlog, username, password) => {
    let objUser = {
        user:username,
        password,
        type:'user'
    };

    await workuser.getInfoUser().then( data => {
        userList = data;
    }).catch(error => {throw new Error(error)});    
    
    ///Validad Admin
    await workuser.validateUser(userlog,passlog,'admin',userList)
    .then()
    .catch(err => {throw new Error(err)});
    ////
    
    let userFind = userList.find(usr =>  usr.user === username);
    if(userFind)
     throw new Error(`Username: ${username} already exist`);

    userList.push(objUser);
    await workuser.saveUser(userList).then()
    .catch(error => {throw new Error(error)});

    return (`Add successfully new user ${objUser.user}`  );

}



module.exports = {
    newUser
}

