import express from "express";
import "./coingeckoData";

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/price/:id", ( req, res ) => {
    if(req.params.id === "bitcoin"){
        console.log("bitcoin");
    }else if (req.params.id === "ethereum"){
        console.log("etherum")
    }else if (req.params.id === "tixl-new"){
        console.log("tixl");
    }
    else{
        console.log("Unknown Coin");
    }
});

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );