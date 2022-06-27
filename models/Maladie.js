const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MaladieSchema = new Schema({
  name: {
    type: String,
    
  },
  classification: {
    type: String,
    
  },
  icd10Code: {
    type: String,
    
  },
  omimId: {
    type: String,
    
  },
  symbol: {
    type: String,
    
  },
  othername: {
    type: String,
    
  },
  inheritance: {
    type: String,
    
  },
  gene: {
    type: String,
    
  },
  geneSymbol: {
    type: String,
    
  },
  omimGene: {
    type: String,
    
  },
  referenceId: {
    type: String,
    
  },
  reference: {
    type: String,
    
  },
 
});

module.exports = Post = mongoose.model('disease', MaladieSchema);
