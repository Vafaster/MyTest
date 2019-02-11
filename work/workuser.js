const fs = require('fs');

const path_userDB = ('/data/users.json');


const getInfoUser = async () => {
        let path = `.${path_userDB}`;
        if(!fs.existsSync(path))
          throw new Error(`Source data for Load users not found`);
        let data = loadUser(path_userDB);
        return data;
}

const loadUser = (path) => {
    try {
        let data = require(`..${path}`);
        return data;
    } catch (error) {
        return [];
    }
}

const saveUser = async (listOfUSer) => {
    let data =  JSON.stringify(listOfUSer);
    fs.writeFile(`.${path_userDB}`, data, error => {
        if(error)
          throw new Error(error);
    });
    return true;
}

const validateUser = async (user ,password, type = null , data ) => {

    let index = data.findIndex(usr => usr.user === user)
    if(index< 0)//index -1 not found
      throw new Error(`User : ${user} not found`);
    
    if(data[index].password != password)
       throw new Error (`Invalid Password for user ${user}`);
 
    if(type && data[index].type != type )
        throw new Error (`User has not acces to make this action, you must be  ${type}`) ; 
    
     
    return true;
}

module.exports = {
    getInfoUser,
    validateUser,
    saveUser
}