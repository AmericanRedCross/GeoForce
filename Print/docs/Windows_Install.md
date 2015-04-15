PGRestAPI - Windows Installation
=========

## Dependencies

*PhantomJS

###Install Node.js 0.10.x (0.10.15 when this project started) + npm
Download the windows node installation package and run: http://nodejs.org/dist/v0.10.21/x64/node-v0.10.21-x64.msi

###Install PhantomJS

###Clone with GIT (or download [.zip file](https://github.com/apollolm/phantasm/archive/master.zip) from GitHub

    git clone https://github.com/apollolm/phantasm.git

-or-

Create a 'phantasm' directory, then:

extract files from [.zip file](https://github.com/apollolm/phantasm/archive/master.zip) and copy to phantasm folder

###Navigate to phantasm folder, and npm install
from the console:  

    npm install


###To Run as a Windows Service
When starting as a windows service, install winser
	
	npm install -g winser


modify the package.json to add 'install-windows-service' and 'uninstall-windows-service':  

	"scripts": {
		"start" : "node app.js",
		"install-windows-service": "winser -i",
		"uninstall-windows-service": "winser -r"
	}

Install the app as a service
	
	npm run-script install-windows-service

To Uninstall the service

	npm run-script uninstall-windows-service

Open windows task manager, find 'phantasm'(or whatever the name property is in package.json), right click and start the service.


##Miscellaneous

