const fs = require('fs');
const path_taskDB = '/data/task.json';

const getTaskInfo = async () => {
    let path = `.${path_taskDB}`;
    if(!fs.existsSync(path))
     throw new Error('Source data not found for load Task Info');
    
    let data = loadTask(path);
    return data;
}


const loadTask = ($path) => {
    try {
        let dataTask = require(`..${$path}`);
        return dataTask
    } catch (error) {
        return [];
    }

}

const saveTask = async (taskList) => {
  let data = JSON.stringify(taskList);
  fs.writeFile(`.${path_taskDB}`, data, (err) => {
      throw new Error(err);
  })
  return true;
}

module.exports = {
    getTaskInfo,
    saveTask
}