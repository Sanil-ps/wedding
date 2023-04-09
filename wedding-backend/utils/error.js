function createError(status,message){
    const err= new Error();
    err.message = message;
    err.status = status
    return err;
}
module.exports = {createError}
// module.export = createError;