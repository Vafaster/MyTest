const {argv} = require('./config/yargs');
const work = require('./work/work.js');

let param = argv._[0]
let user_login = argv.user;
let user_password = argv.password;
let user_nuser = argv.newuser;
let user_npassword = argv.userpass;

switch(param){
    case 'newtask' : 
        break;
    case 'newuser' : 
        //workuser.getInfoUser().then(rsp => console.log(rsp)).catch(err => console.log(err));
        work.newUser(user_login, user_password, user_nuser, user_npassword).then(rsp => console.log(rsp)).catch(err => console.log(`${err}`));
        break;
    case 'updatetask' :
        break;
    case 'listtask' : 
        break;
    default :  console.log(`unrecognized parameter  ${param}`);break;
}


