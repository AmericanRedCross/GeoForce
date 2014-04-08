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
        loginUrl: 'https://cs18.salesforce.com',
        user: 'gis@salesforce.com.uat',
        password: 'R3dcr0ss!',
        token: 'YAwMz0iFSaLzhxmprffYXAEb'
    }

};