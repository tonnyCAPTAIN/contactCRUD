const { constants } = require("../constants")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ 
                title: "Validation Fail", 
                message: err.message, 
                stackTace: err.stack, 
        });
            break;
        case constants.NOT_FOUND:
            res.json({ 
                title: "Not found", 
                message: err.message, 
                stackTace: err.stack, 
        });
        case constants.FORBIDDEN:
            res.json({ 
                title: "Forbidden", 
                message: err.message, 
                stackTace: err.stack, 
        });
        case constants.UNAUTHORIZED:
            res.json({ 
                title: "Unauthorized", 
                message: err.message, 
                stackTace: err.stack, 
            });
        case constants.SERVER_ERROR:
            res.json({ 
                title: "Server error", 
                message: err.message, 
                stackTace: err.stack, 
            });
        default:
            console.log("No error all good !!")
            break;
    }
    
    
};

module.exports = errorHandler;