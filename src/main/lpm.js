const chp = require("child_process")
const fs = require("fs")
const lpm = require("./lpm.json")

const { download } = require("./lib/download")
const { remove } = require("./lib/remove")
const { loadconfig } = require("./lib/loadconfig")
const { list } = require("./lib/list")

const HOME = process.env.HOME

if (process.env.LPM_HOME === undefined) {
    fs.appendFileSync(HOME + "/.bashrc", "\nexport PATH=$PATH:$HOME/.lpm")
    fs.appendFileSync(HOME + "/.bashrc", "\nexport LPM_HOME=$HOME/.lpm")
    console.log("LPM requires restart command line\n")
}




try {
    chp.execSync("curl --version")
}catch (e) {
    console.log("[FAILED] LPM requires 'curl'")
    process.exit(1)
}



const argv = process.argv
const flag = argv[2]


if (flag === "install") {
    download(argv[3])
}else if (flag === "remove") {
    remove(argv[3])
}else if (flag　=== "version") {
    console.log(lpm.version)
}else if (flag === "list") {
    console.log("* * *Available packages* * *")
    for (let i = 0; i < list.length; i++) {
        console.log(list[i])
    }
    console.log("* * * * * * * * * * * * * *")
}