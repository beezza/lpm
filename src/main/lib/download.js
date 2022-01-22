const chp = require("child_process")
const fs = require("fs")

const HOME = process.env.HOME

const repo = "https://raw.githubusercontent.com/beezza/lpm-repo/main/main/"

function getRepo(ModuleName) {
    return repo + ModuleName.toLowerCase()
}

function download(ModuleName) {
    try {
        console.log(`fetching latest version of "${ModuleName}". . .`)
        const fetched = chp.execSync("curl " + getRepo(ModuleName)).toString()
        if (fetched == "404: Not Found") {
            console.log(ModuleName + " was not found")
            process.exit(0)
        }
        console.log("writing fetched data. . .")
        fs.writeFileSync(HOME + "/.lpm/" + ModuleName, fetched)
        console.log(`setting up ${ModuleName}. . .`)
        chp.execSync("chmod 700 " + HOME + "/.lpm/" + ModuleName)
        console.log(`"${ModuleName}" was installed successfully`)
    }catch (e) {
        console.log("returned an error:\n" + e.stack)
        process.exit(1)
    }
}

module.exports.download = download