var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var petitionSchema = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    date_created: {type: Date},
    created_by: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

productSchema.virtual('url').get(function(){
  return 'post/petition/_id' + this.id;
})

module.exports = mongoose.model("Petitions", petitionSchema);
