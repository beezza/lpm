const fs = require("fs")

const HOME = process.env.HOME

function uninstall(ModuleName) {
    try {
        console.log("uninstalling " + ModuleName + ". . .")
        try {
            fs.unlinkSync(HOME + "/.lpm/" + ModuleName)
        }catch (e) {
            console.log(ModuleName + " is not installed")
            process.exit(0)
        }
        console.log(`"${ModuleName}" was uninstalled successfully`)
    }catch (e) {
        console.log("returned an error:\n" + e.stack)
        process.exit(1)
    }
}

module.exports.remove = uninstall