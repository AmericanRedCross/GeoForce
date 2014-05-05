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
pg_dump redcross-localdev | gzip > 2014-04-21.gz
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

It needs to be 2.1.1 or 2.1.2


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
﻿gunzip -c 2014-04-21.gz | psql rc
```

Where 2014-04-21.gz is the dump and rc is the empty database that you just created. This may take quite a while...


## Install GeoForce

### 1. Clone Git Repository

```
git clone https://github.com/AmericanRedCross/GeoForce.git
```

### 2. Install NodeJS Package Dependencies

```
cd GeoAngular
sudo npm install -g grunt-cli
npm install
cd ..
cd Succubus
npm install
cd ..
cd Chubbs
npm install
```

### 3. Fill in proper settings for Chubbs in settings.js (Chubbs/settings.js)

```
﻿//Settings.js is not part of the repository.  However, it should be deployed with the application and contain deployment-specific settings.
//there is a settings.js.example file that should match the structure and properties of this file that IS checked in to the repo.
var settings = {}

settings.pg = {};
settings.application = {};
settings.tilestream = {};

//application port settings
settings.application.port = 3000;
settings.application.ip = "localhost";

//Settings for postgres DB
settings.pg.username = 'rc';
settings.pg.password = 'rc';
settings.pg.server = 'localhost';
settings.pg.port = '5432';
settings.pg.database = 'rc';
settings.pg.featureLimit = 1000; //how many features to return by default

settings.tilestream.host = 'tiles.fspmaps.com'
settings.tilestream.path = "/api/Tileset";
settings.tilestream.port = "8888";

//Should the API display postgres views?
settings.displayViews = true;

//Should the API display postgres tables?
settings.displayTables = true;

//Should the API hide any postgres tables or views?
settings.pg.noFlyList = ["att_0"];

//The list of formats to be returned by the Table Query REST endpoint.  If ogr2ogr is installed, .shp will be added automatically.
settings.application.formatList =[ 'html', 'GeoJSON', 'esriJSON'];

//Where to write out TopoJSON files?
settings.application.topoJsonOutputFolder = "/public/topojson/output/";

//Where to write out GeoJSON files?
settings.application.geoJsonOutputFolder = "/public/geojson/output/";

//Optional.  If you're using port forwarding or URL rewriting, but need to display full URLs to your assets, this will stand in for the host.
// settings.application.publichost = "myhost.com"; //Keep this empty if you want to use the default host
// settings.application.publicport = "80";

//The lowest administrative level for each datasource
settings.dsLevels = {};
settings.dsLevels["gadm"] = 5;
settings.dsLevels["gaul"] = 2;
settings.dsLevels["naturalearth"] = 1;
settings.dsLevels["local"] = 2;

//Columns by level and datasource
settings.dsColumns = {};

//Used to define how to query DB for admin stack
//Columns aliased to be consistent between data sources.
//GADM
settings.dsColumns["gadm0"] = { geometry: "ST_AsGeoJSON(geom_simplify_high) as geom,", columns: "guid as stack_guid, id_0 as adm0_code, name_0 as adm0_name, ST_AsText(ST_Centroid(geom)) as centroid, 0 as level" };
settings.dsColumns["gadm1"] = { geometry: "ST_AsGeoJSON(geom_simplify_high) as geom,", columns: "guid as stack_guid, id_0 as adm0_code, name_0 as adm0_name, id_1 as adm1_code, name_1 as adm1_name, ST_AsText(ST_Centroid(geom)) as centrosid, 1 as level" };
settings.dsColumns["gadm2"] = { geometry: "ST_AsGeoJSON(geom_simplify_high) as geom,", columns: "guid as stack_guid, id_0 as adm0_code, name_0 as adm0_name, id_1 as adm1_code, name_1 as adm1_name, id_2 as adm2_code, name_2 as adm2_name, ST_AsText(ST_Centroid(geom)) as centroid, 2 as level" };
settings.dsColumns["gadm3"] = { geometry: "ST_AsGeoJSON(geom_simplify_high) as geom,", columns: "guid as stack_guid, id_0 as adm0_code, name_0 as adm0_name, id_1 as adm1_code, name_1 as adm1_name, id_2 as adm2_code, name_2 as adm2_name, id_3 as adm3_code, name_3 as adm3_name, ST_AsText(ST_Centroid(geom)) as centroid, 3 as level" };
settings.dsColumns["gadm4"] = { geometry: "ST_AsGeoJSON(geom_simplify_high) as geom,", columns: "guid as stack_guid, id_0 as adm0_code, name_0 as adm0_name, id_1 as adm1_code, name_1 as adm1_name, id_2 as adm2_code, name_2 as adm2_name, id_3 as adm3_code, name_3 as adm3_name, id_4 as adm4_code, name_4 as adm4_name, ST_AsText(ST_Centroid(geom)) as centroid, 4 as level" };
settings.dsColumns["gadm5"] = { geometry: "ST_AsGeoJSON(geom_simplify_high) as geom,", columns: "guid as stack_guid, id_0 as adm0_code, name_0 as adm0_name, id_1 as adm1_code, name_1 as adm1_name, id_2 as adm2_code, name_2 as adm2_name, id_3 as adm3_code, name_3 as adm3_name, id_4 as adm4_code, name_4 as adm4_name, id_5 as adm5_code, name_5 as adm5_name, ST_AsText(ST_Centroid(geom)) as centroid, 5 as level" };

module.exports = settings;
```

### 4. Fill in proper settings for Succubus (Succubus/settings.js)

```js
﻿module.exports = {

    // PostGIS Database Connection
    pg: {
        server: 'localhost',
        port: '5432',
        database: 'rc',
        user: 'rc',
        password: 'rc',
        escapeStr: 'nh9'
    },

    // Salesforce Credentials
    salesforce: {
        loginUrl: 'https://cs18.salesforce.com',
        user: '***',
        password: '***',
        token: '***'
    }

};
```

### 5. Run Succubus (be in Succubus dir)

```
node index.js
```

### 6. Run Chubbs (be in Chubbs dir)

```
node app.js
```


## Cheat sheet

### Restart PostgreSQL

```
sudo /etc/init.d/postgresql restart
```

