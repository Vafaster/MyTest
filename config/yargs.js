let userlog = {
    user : {
        alias : 'u',
        description : 'User',
        demand: true
    },
    password : {
        alias : 'p',
        description : 'Password',
        demand:true
    }
};

const newuser = {
    newuser : {
        alias : 'j',
        demand : true
    }    
};
let userpass = {
    userpass : {
        alias : 'k',
        demand : true
    }
};

let elementTask = {
    
    description :{
        alias : 'd',
        demand : true
    },
    completed: {
        alias : 's',
        default: false
    }
}


const argv = require('yargs')
                .command('newtask', 'New task for user', {
                                user: userlog.user , 
                                password: userlog.password,
                                newuser : newuser.newuser,
                                userpass : userpass.userpass ,
                                description : elementTask.description,
                                completed : elementTask.completed
                })
                .command('newuser', 'Create a new User', {
                                user: userlog.user , 
                                password: userlog.password,
                                newuser : newuser.newuser,
                                userpass : userpass.userpass
                })
                .command('updatetask', 'You can update state of task and set a comment', {
                                user: userlog.user , 
                                password: userlog.password,
                                description : elementTask.description,
                                completed : elementTask.completed
                })
                .command('listtask','List of task asignet to user', {
                                user: userlog.user , 
                                password: userlog.password
                })
                .help()
                .argv
             ;

module.exports={
    argv
}