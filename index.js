//const { default: { stream } } = require("got");
//const { createWriteStream } = require("fs");
const { execSync } = require("child_process");
const path = "./Lavalink.jar";

const lljar = "https://github.com/davidffa/lavalink/releases/download/v1.2.0/Lavalink.jar";
// temp code untill I made jar options & checking.
// aka selection between downloading the "custom" "dev" "dev-with-plugins"

//const start = () => {
         execSync("java -jar Lavalink.jar", { stdio: "inherit" });
// };

//start();
