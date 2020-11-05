module.exports = (app, allModels) => {

    // Controller Functions
    const usersControllerCallbacks = require("./controllers/users")(allModels);
    const todosControllerCallbacks = require("./controllers/todos")(allModels);


}