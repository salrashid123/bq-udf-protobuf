var protobuf = require("protobufjs");

const {encode, decode} = require('base64-arraybuffer');

module.exports.ProtoSave = function (d,t,payload) {
    var root = protobuf.Root.fromJSON(d);
    var echoMessage = root.lookupType(String(t));
    var message = echoMessage.create(payload);
    var buffer = echoMessage.encode(message).finish();
    return encode(buffer)
}
  
module.exports.ProtoLoad = function (d,t,k) {
    var root = protobuf.Root.fromJSON(d);
    var echoMessage = root.lookupType(String(t));
    var message = echoMessage.decode(k);
    return message;
}


module.exports.DecodeBuf = function (d) {
    return new Uint8Array( decode(d) );
}