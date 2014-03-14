/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Tue Mar 11 2014
 */

module.exports = {

    // PostGIS Database Connection
    pg: {
        server: 'localhost',
        port: '5432',
        database: 'redcross-localdev',
        user: 'postgres',
        password: '',
        escapeStr: 'nh9'
    },

    // Salesforce Credentials
    salesforce: {
        loginUrl: 'https://cs9.salesforce.com',
        user: 'gis@redcross.org',
        password: 'Bmx1982$',
        token: '3oFZwrt5JcdbwmtK8crUR6vp'
    }

};