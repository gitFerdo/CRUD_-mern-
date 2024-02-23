const express = require( 'express' );
const mongoose = require( 'mongoose' );
const cors = require( 'cors' );
const UserModel = require( './models/Users' );

const app = express();

app.use( cors() );
app.use( express.json() );

mongoose.connect( "mongodb+srv://crud:crud@atlascluster.mr5bpcu.mongodb.net/crud" )

app.post( "/createUser", ( req, rse ) =>
{
    UserModel.create( req.body )
        .then( users => res.json( users ) )
        .catch( err => res.json( err ) )
} )

app.listen( 3001, () =>
{
    console.log( "Server is Running" );
} );