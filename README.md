This utility allows you to run a normally static webpage as a NodeJS server, useful for testing things on a phone.

First, install NodeJS and npm, then clone this repository. To install dependencies, navigate inside the repository and run:
```
npm install
```

To use, run:

```
node server.js [path to html file]
```

It will now be running on localhost port 8000.

### Integration with ngrok

There is also a bash script that will:
- Run this server
- Set up an ngrok tunnel to expose the webpage to the internet
- Display a qr code for the tunnel's URL, making it easy to scan with a phone

I find this very useful for testing websites on my phone to see if they function as expected.

**To use**:

Install ngrok and Python 3, then run:

```
./host_ngrok.sh [path to html file]
```