#
# 6 Number generator from Hash

##### What do you need to have installed
NodeJS LTS version
https://nodejs.org/dist/v16.17.0/node-v16.17.0-x64.msi


##### How to launch this web-server

1. Clone the project
``` git clone https://github.com/fudeel/generate-six-number-from-hash.git```

2. Navigate to the project folder and run the command
``` npm install```
3. To launch the web-server just write 
``` node dist/app.js```


Once Launched you can make **HTTP POST** Request to the http://localhost:3000/de-hash with this body:
*{
	"hash": "000000000012312394823894ufuew89u12893789urd8"
}*

The web-server will give you this answer: *[1,2,31,23,9,4]*


