const path = require("path");
const express = require("express");
const { ArgumentParser } = require("argparse");

// argument parsing
const parser = new ArgumentParser()
parser.add_argument("html-path")
parser.add_argument("--port")
parser.add_argument("--ngrok", { action: "store_true" })
const args = parser.parse_args()

if (!args["html-path"].endsWith(".html")) {
    console.log("Please include a file with a .html extension");
    process.exit();
}

const app = express();
const port = process.env.PORT || args.port || 8000;

// set up express server

const directory = path.dirname(args["html-path"]);

//need to call app.get() first, since if we use express.static first it will default to index.html always
app.get("/", function (req, res) {
    res.sendFile(path.resolve(args["html-path"])); //convert path to absolute
});

app.use(express.static(directory));

app.listen(port, function () {
    console.log("Listening on port " + port)
});


// set up ngrok if user asked for it

if (args["ngrok"]) {
    const ngrok = require("@ngrok/ngrok");
    const qrcode = require("qrcode-terminal");

    (async function () {
        const ngrokUrl = (await ngrok.forward({ addr: port, authtoken_from_env: true })).url();
        console.log("ngrok URL:", ngrokUrl)
        qrcode.generate(ngrokUrl, { small: true })
    })();
}

