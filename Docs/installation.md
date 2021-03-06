# Installation Instructions

## Tested Builds

### 1. commit 46d71f1b563c74ff8ccc002bcd57aefcb3e02237
    * Virtual Box Ubuntu 12.04.1 (64 bit), 4GB RAM, 8 Cores, 100GB HD
        - Linux Build Info: ﻿3.11.0-19-generic  #33~precise1-Ubuntu SMP Wed Mar 12 21:16:27 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux

## Preliminary Packages

Make sure you have done `sudo apt-get update` and `sudo apt-get upgrade` on your fresh install.

### 1. Install Git

```
sudo apt-get install git
```


### 2. Install NodeJS

#### Ubuntu 14.04 LTS

```
sudo apt-get install nodejs
sudo apt-get install npm
sudo chmod -R a+rwx /usr/local/lib/node_modules/
sudo chmod -R a+rwx /usr/bin/nodejs
sudo chmod -R a+rwx /usr/bin/node
sudo chmod -R a+rwx /usr/bin/npm

```

#### Ubuntu 12.04 LTS

```
﻿sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install python-software-properties python g++ make nodejs
```

There is a naming conflict with the node package (Amateur Packet Radio Node Program), and the nodejs binary has been renamed from node to nodejs. You'll need to symlink `/usr/bin/node` to `/usr/bin/nodejs` or you could uninstall the Amateur Packet Radio Node Program to avoid that conflict.

```
sudo ln -s /usr/bin/nodejs /usr/bin/node
```

## NGINX

### 1. Install Nginx

```
sudo apt-get install nginx
```

### 2. Start Nginx

```
sudo service nginx start
```

### 3. Automatically start Nginx when server starts.

```
update-rc.d nginx defaults
```

This step may not be necessary, and if nginx is set up to already run on startup, you'll get a message like:

```
﻿nick@nick-VirtualBox:~$ update-rc.d nginx defaults
 System start/stop links for /etc/init.d/nginx already exist.
unable to write to /var/lib/update-rc.d/nginx.new at /usr/sbin/update-rc.d line 59.
```


## Dump PostGIS Database from Dev Box

```
pg_dump redcross_dev | gzip > 2014-04-21.gz
```

## Install PostGIS

### 1. Instructions from ﻿http://trac.osgeo.org/postgis/wiki/UsersWikiPostGIS21UbuntuPGSQL93Apt

#### Ubuntu 14.04

```
﻿sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ trusty-pgdg main" >> /etc/apt/sources.list'
wget --quiet -O - http://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
﻿sudo apt-get install postgresql-9.3
sudo apt-get install postgresql-9.3-postgis-2.1
sudo apt-get install postgresql-contrib
﻿sudo -u postgres psql
CREATE EXTENSION adminpack;
\q
```

#### Ubuntu 12.04

```
﻿sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ precise-pgdg main" >> /etc/apt/sources.list'
wget --quiet -O - http://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
﻿sudo apt-get install postgresql-9.3 postgresql-9.3-postgis pgadmin3 postgresql-contrib
﻿sudo -u postgres psql
CREATE EXTENSION adminpack;
\q
```

### 2. Set postgres password. Create a username. Replace yourUserName with what you want as your user name.
```
sudo -u postgres psql postgres
\password postgres
-- enter password twice
-- exit db
sudo passwd postgres
sudo su - postgres


createuser -d -E -i -l -P -r -s yourUserName
-- do this if you want to create another user
```

### 3. Enable PostGIS Extensions

Execute the Following SQL:

```
﻿-- Enable PostGIS (includes raster)
CREATE EXTENSION postgis;
-- Enable Topology
CREATE EXTENSION postgis_topology;
-- fuzzy matching needed for Tiger
CREATE EXTENSION fuzzystrmatch;
-- Enable US Tiger Geocoder
CREATE EXTENSION postgis_tiger_geocoder;
```

Make sure that you have the right version of PostGIS installed.

```
SELECT PostGIS_full_version();
```

It needs to be 2.1.1 or 2.1.2 or 2.1.3


### 4. Load database that was dumped from another machine.

First create the database you want to load the dump into in pgAdmin III.

Or, you can do it in psql by typing:

```
psql
CREATE DATABASE rc;
\q
```

Then, execute:

```
﻿sudo su postgres
﻿gunzip -c 2014-06-04.gz | psql redcross_dev
```

Where 2014-04-21.gz is the dump and rc is the empty database that you just created. This may take quite a while...

If you would like to load a dump to a remote database such as geo.redcross.org, you can do the following:

```
﻿gunzip -c 2014-06-06.gz | psql -h redcrossgeo.colkd43xjmvs.us-west-2.rds.amazonaws.com -p 5432 -U user_name -W database_name
```


## Install GeoForce

### 1. Clone Git Repository

```
git clone https://github.com/AmericanRedCross/GeoForce.git
```

### 2. Install NodeJS Package Dependencies

```
sudo chmod -R a+rwx /usr/local/lib/node_modules/
cd GeoAngular
sudo npm install -g grunt-cli
sudo npm install
cd ../Succubus
sudo npm install
cd ../Chubbs
sudo npm install
```

### 3. Fill in proper settings for Chubbs in settings.js (Chubbs/settings.js)

If you are on a production server, change these to: 

```js
process.env.NODE_ENV = 'production';
settings.enableSecurity = true;
```

If you have enabled security, make sure you have `geo.cer` and `geo.pfx` in the Chubbs directory. These are your SSL security certificates.

```js
//Settings.js is not part of the repository.  However, it should be deployed with the application and contain deployment-specific settings.
//There is a settings.js.example file that should match the structure and properties of this file that IS checked in to the repo.
var settings = {};
var settingsNonsensitive = require("./settingsNonsensitive.js");

//Bring in the non sensitive stuff.
settings = settingsNonsensitive;

//Change to 'production' or 'test' depending on deployment.
process.env.NODE_ENV = 'development';

//application port settings
settings.application.port = 3001;
settings.application.ip = "localhost";

//Enable Security?
settings.enableSecurity = false;

//SSL Settings
settings.ssl = {};
settings.ssl.pfx = 'geo.pfx';
settings.ssl.password = '<password>';

//Express Session Secret
settings.expressSessionSecret = "specialsecret";

//Settings for postgres DB
settings.pg.username = 'postgres';
settings.pg.password = '<password>';
settings.pg.server = '<database-url>';
settings.pg.port = '5432';
settings.pg.database = 'redcross_prod';

//how many features to return by default - dont worry about this for RedCross
settings.pg.featureLimit = 1000;

//PROD SalesForce OAUTH settings
settings.salesforce = {};
settings.salesforce.ConsumerKey = "<long-garbled-string>"; //clientID
settings.salesforce.ClientSecret = "<just-positive-integers>";
settings.salesforce.Scope = ["id", "profile"];
settings.salesforce.CallbackURL = "https://geo.redcross.org/oauth2/callback";
settings.salesforce.authorizationURL = 'https://na14.salesforce.com/services/oauth2/authorize';
settings.salesforce.tokenURL = 'https://na14.salesforce.com/services/oauth2/token';

//Dev SalesForce OAUTH
//settings.salesforce = {};
//settings.salesforce.ConsumerKey = "<long-garbled-string>"; //clientID
//settings.salesforce.ClientSecret = "<just-positive-integers>;
//settings.salesforce.Scope = ["id", "profile"];
//settings.salesforce.CallbackURL = "https://geo.redcross.org/oauth2/callback";
//settings.salesforce.authorizationURL = 'https://cs19.salesforce.com/services/oauth2/authorize';
//settings.salesforce.tokenURL = 'https://cs19.salesforce.com/services/oauth2/token';

module.exports = settings;
```

### 4. Fill in proper settings for Succubus (Succubus/settings.js)

```js
module.exports = {

  // PostGIS Database Connection
  pg: {
    server: '<database-url>',
    port: '5432',
    database: 'redcross_prod',
    user: 'postgres',
    password: '<password>',
    escapeStr: 'anystr'
  },

//  pg: {
//    server: 'localhost',
//    port: '5432',
//    database: 'redcross_dev',
//    user: 'postgres',
//    password: '',
//    escapeStr: 'anystr'
//  },

  // Salesforce Credentials

  // Production Salesforce Instance
//  salesforce: {
//    loginUrl: 'https://na14.salesforce.com',
//    user: 'gis@redcross.org',
//    password: '<password>',
//    token: '<long-string-token>'
//  }

  // UAT (Development) Salesforce Instance
  salesforce: {
    loginUrl: 'https://cs18.salesforce.com',
    user: 'gis@salesforce.com.uat',
    password: '<password>',
    token: '<long-string-token>'
  }

};
```

### 5. Run Succubus (be in Succubus dir)

```
node index.js
```

### 6.5 Install npm Forever
sudo npm install -g forever

### 6. Run Chubbs Temporarily (be in Chubbs dir)

```
node app.js
```

### Run Chubbs in Forever (stays up even if the server crashes)
```
sudo forever list
sudo forever stop 0
sudo forever --minUptime 500ms --spinSleepTime 500ms start app.js
```


# Setup NGINX with Simple .htpasswd Authentication

If you would like to set up a production server with SSL rather than this simple mode of authentication, 
instead follow `Docs/InstallAndSetupNotes/nginx_ssl_setup.txt`.

[How To Set Up HTTP Authentication With Nginx On Ubuntu 12.10](https://www.digitalocean.com/community/articles/how-to-set-up-http-authentication-with-nginx-on-ubuntu-12-10)

sudo apt-get install apache2-utils

cd ~/GeoForce/GeoAngular/app
sudo htpasswd -c .htpasswd redcross
(will prompt for password)

From [http://stackoverflow.com/questions/5009324/node-js-nginx-and-now](http://stackoverflow.com/questions/5009324/node-js-nginx-and-now).

Create a text file in `/etc/nginx/sites-available/geoforce`

In that file, enter:

```
# the IP(s) on which your node server is running. I chose port 3001.
upstream app_geoforce {
    server 127.0.0.1:3001;
}

server {
    listen 0.0.0.0:80;
    # the domain name or ip of the server this is on
    server_name 54.201.181.57;
    access_log /var/log/nginx/geoforce.log;

    # pass the request to the node.js server with the correct headers and much more can be added, see nginx config options
    location / {
      auth_basic "Restricted";
      auth_basic_user_file /home/ubuntu/GeoForce/GeoAngular/app/.htpasswd;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $http_host;
      proxy_set_header X-NginX-Proxy true;

      proxy_pass http://app_geoforce;
      proxy_redirect off;
    }
}
```

Next, enable the site defined above

```
cd /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/geoforce geoforce
```


Restart nginx

```
sudo service nginx restart
```


```

# Donate some blood (and eat some pancakes).


## Further notes...

### Restart PostgreSQL

```
sudo service postgresql restart
```
