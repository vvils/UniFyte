var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type: String, required: true},
    date_created: {type: Date},
    petitions: [{
        type: Schema.Types.ObjectId,
        ref: "Petition"
    }]
});

productSchema.virtual('url').get(function(){
  return 'post/user/_id' + this.id;
})

module.exports = mongoose.model("Users", userSchema);
