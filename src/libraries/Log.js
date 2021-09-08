

var log = {
    write: function (message, object) { 
        console.log("Log entry: " +  message + "\n"
            + JSON.stringify(object, null, " ")
            )
    }
};

module.exports = log