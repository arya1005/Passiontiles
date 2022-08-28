const ecatalogueDigitalwallGlossyS30x60=require('./ecatalogueDigitalwallGlossyS30x60');
const ecatalogueDigitalwallglossyS30x45=require('./ecatalogueDigitalwallGlossyS30x45');
const ecataloguemattS30x60=require('./ecatalogueDigitalwallMattS30x60');
const ecataloguemattS30x45=require('./ecatalogueDigitalwallMattS30x45');
const ecataloguekitchenS30x45=require('./ecatalogueDigitalwallKitchenS30x45');
const ecataloguebathroomS30x45=require('./ecatalogueDigitalwallBathroomS30x45');
const ecatalogueelavationS20x45=require('./ecatalogueDigitalwallElavationS20x45');
const ecataloguewoodS20x45=require('./ecatalogueDigitalwallWoodS20x45');
const ecatalogueoutdoorParking30x30=require('./ecatalogueOutdoorParkingS30x30');
const ecataloguesolublesalt60x60=require('./ecatalogueSolublesaltS60x60');
const ecataloguemultichargedVitrifiedS60x60=require('./ecatalogueMultichargedVitrifiedS60x60');
const ecataloguemultichargedVitrifiedS80x80=require('./ecatalogueMultichargedVitrifiedS80x80');
const ecataloguedigitalglazedvitrifiedS60X60=require('./ecatalogueDigitalglazedvitrifiedS60X60');
const ecataloguedigitalglazedvitrifiedSMirror60X60=require('./ecatalogueDigitalglazedvitrifiedSMirror60X60')
const ecataloguedigitalglazedvitrifiedS60X120=require('./ecatalogueDigitalglazedvitrifiedS60X120');
const ecataloguedigitalglazedvitrifiedSMirror60X120=require('./ecatalogueDigitalglazedvitrifiedMirrorS60X120');
const ecataloguedigitalglazedvitrifiedS60X160=require('./ecatalogueDigitalglazedvitrifiedS80X160');
const ecataloguedigitalglazedvitrifiedS60X240=require('./ecatalogueDigitalglazedvitrifiedS60X240');
const ecataloguedigitalglazedvitrifiedS90X180=require('./ecatalogueDigitalglazedvitrifiedS90x180');
const ecataloguedigitalglazedvitrifiedS120x120=require('./ecatalogueDigitalglazedvitrifiedS120x120');
const ecataloguedigitalglazedvitrifiedS120x240=require('./ecatalogueDigitalglazedvitrifiedS120x240');
const productdigitaltile=require('./productdigitaltile');
const productoutdoorparkingtile=require('./productoutdoorparkingtile');
const productsolublesalt=require('./productsolublesalt');
const productmultichargedvitrifiedtile=require('./productmultichargedvitrifiedtile');
const productdigitalglazedvitrifiedtile=require('./productdigitalglazedvitrified');
const home=require('./HomeModel');


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api/ecatalogueDigitalwallGlossyS30x60',ecatalogueDigitalwallGlossyS30x60);
app.use('/api/ecatalogueDigitalwallGlossyS30x45',ecatalogueDigitalwallglossyS30x45);
app.use('/api/ecatalogueDigitalwallMattS30x60',ecataloguemattS30x60);
app.use('/api/ecatalogueDigitalwallMattS30x45',ecataloguemattS30x45);
app.use('/api/ecatalogueDigitalwallKitchenS30x45',ecataloguekitchenS30x45);
app.use('/api/ecatalogueDigitalwallBathroomS30x45',ecataloguebathroomS30x45);
app.use('/api/ecatalogueDigitalwallElavationS20x45',ecatalogueelavationS20x45);
app.use('/api/ecatalogueDigitalwallWoodS20x45',ecataloguewoodS20x45);
app.use('/api/ecatalogueOutdoorParkingS30x30',ecatalogueoutdoorParking30x30);
app.use('/api/ecatalogueSolublesaltS60x60',ecataloguesolublesalt60x60);
app.use('/api/ecatalogueMultiChargedVitrifiedS60x60',ecataloguemultichargedVitrifiedS60x60);
app.use('/api/ecatalogueMultiChargedVitrifiedS80x80',ecataloguemultichargedVitrifiedS80x80);
app.use('/api/ecatalogueDigitalGlazedVitrifiedS60X60',ecataloguedigitalglazedvitrifiedS60X60);
app.use('/api/ecatalogueDigitalGlazedVitrifiedMirrorS60X60',ecataloguedigitalglazedvitrifiedSMirror60X60);
app.use('/api/ecatalogueDigitalglazedVitrifiedS60X120',ecataloguedigitalglazedvitrifiedS60X120);
app.use('/api/ecatalogueDigitalglazedVitrifiedMirrorS60X120',ecataloguedigitalglazedvitrifiedSMirror60X120);
app.use('/api/ecatalogueDigitalglazedVitrifiedS80X160',ecataloguedigitalglazedvitrifiedS60X160);
app.use('/api/ecatalogueDigitalglazedVitrifiedS60X240',ecataloguedigitalglazedvitrifiedS60X240);
app.use('/api/ecatalogueDigitalglazedVitrifiedS90x180',ecataloguedigitalglazedvitrifiedS90X180);
app.use('/api/ecatalogueDigitalglazedVitrifiedS120x120',ecataloguedigitalglazedvitrifiedS120x120);
app.use('/api/ecatalogueDigitalglazedVitrifiedS120x240',ecataloguedigitalglazedvitrifiedS120x240);
app.use('/api/productDigitaltile',productdigitaltile);
app.use('/api/productOutdoorparkingtile',productoutdoorparkingtile);
app.use('/api/productSolublesalt',productsolublesalt);
app.use('/api/productMultichargedvitrifiedtile',productmultichargedvitrifiedtile);
app.use('/api/productDigitalglazedvitrifiedtile',productdigitalglazedvitrifiedtile);
app.use('/api/homeImage',home);


const FileModel = require('./file_model');


app.get('/',(req,res)=>{
    res.send('Upload File');
    });
    
app.listen(3300,console.log('Successfully running at 3300'));