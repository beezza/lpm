const fs = require("fs")


function loadconfig() {
    if (!fs.existsSync(__dirname + "/lpm.config.jsom")) {
        return undefined
    }else {
        return require(__dirname + "/lpm.config.json")
    }
}

module.exports.loadconfig = loadconfig