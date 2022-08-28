const { string }= require('joi');
const mongoose= require('mongoose');

const FileSchema=mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    file:{
         data :Buffer,
         contentType: String
    }
});

mongoose.connect('mongodb://localhost:27017/Passiontiles')
.then(()=>console.log("Connected  with mongoDB..."))
.catch(err=>console.log(err));

module.exports=FileModel1=mongoose.model('EcatalogueDigitalwallGlossyS30x60',FileSchema);
module.exports=FileModel2=mongoose.model('EcatalogueDigitalwallGlossyS30x45',FileSchema);
module.exports=FileModel3=mongoose.model('EcatalogueDigitalwallMattS30x60',FileSchema);
module.exports=FileModel4=mongoose.model('EcatalogueDigitalwallMattS30x45',FileSchema);
module.exports=FileModel5=mongoose.model('EcatalogueDigitalwallElavationS20x45',FileSchema);
module.exports=FileModel6=mongoose.model('EcatalogueDigitalwallWoodS20x45',FileSchema);
module.exports=FileModel7=mongoose.model('EcatalogueOutdoorParkingS30x30',FileSchema);
module.exports=FileModel8=mongoose.model('EcatalogueSolublesaltS60x60',FileSchema);
module.exports=FileModel9=mongoose.model('EcatalogueMultichargedVitrifiedS60x60',FileSchema);
module.exports=FileModel10=mongoose.model('EcatalogueMultichargedVitrifiedS80x80',FileSchema);
module.exports=FileModel11=mongoose.model('EcatalogueDigitalglazedvitrifiedS60X60',FileSchema);
module.exports=FileModel12=mongoose.model('EcatalogueDigitalglazedvitrifiedSMirrorS60X60',FileSchema);
module.exports=FileModel13=mongoose.model('EcatalogueDigitalglazedvitrifiedS60X120',FileSchema);
module.exports=FileModel14=mongoose.model('EcatalogueDigitalglazedvitrifiedMirrorS60X120',FileSchema);
module.exports=FileModel15=mongoose.model('EcatalogueDigitalglazedvitrifiedS80X160',FileSchema);
module.exports=FileModel16=mongoose.model('EcatalogueDigitalglazedvitrifiedS60X240',FileSchema);
module.exports=FileModel17=mongoose.model('EcatalogueDigitalglazedvitrifiedS90x180',FileSchema);
module.exports=FileModel18=mongoose.model('EcatalogueDigitalglazedvitrifiedS120x120',FileSchema);
module.exports=FileModel19=mongoose.model('EcatalogueDigitalglazedvitrifiedS120x240',FileSchema);
module.exports=FileModel20=mongoose.model('EcatalogueDigitalwallKitchenS30x45',FileSchema);
module.exports=FileModel21=mongoose.model('EcatalogueDigitalwallBathroomS30x45',FileSchema);
module.exports=FileModel22=mongoose.model('ProductDigitaltile',FileSchema);
module.exports=FileModel23=mongoose.model('ProductOutdoor Parking Tiles',FileSchema);
module.exports=FileModel24=mongoose.model('ProductSoluble Salt',FileSchema);
module.exports=FileModel25=mongoose.model('ProductMulti Charged Vitrified Tiles',FileSchema);
module.exports=FileModel26=mongoose.model('ProductDigital Glazed Vitrified Tiles',FileSchema);



