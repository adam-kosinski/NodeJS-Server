This utility allows you to run a normally static webpage as a NodeJS server, useful for testing things on a phone.

First, install NodeJS and npm, then clone this repository. To install dependencies, navigate inside the repository and run:
```
npm install
```

To use, run:

```
node server.js [path to html file]
```

It will now be running on localhost port 8000. You can specify a different port number with the PORT environment variable.

### Integration with ngrok

You can run the server with an ngrok tunnel. This is useful for testing websites on a phone.

First, register for an ngrok account and add your authtoken to the environment. You can do this by adding the following to your `~/.bashrc` file:
```
export NGROK_AUTHTOKEN=your-authtoken
```

Then run the server with the ngrok option:
```
node server.js [path to html file] --ngrok
```