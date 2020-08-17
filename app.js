const Gun = require('gun');
require('gun-db');

var vfs = require( "sack.vfs" );
var vol = vfs.Volume( "MountName", "vfsFile.dat" );


const server = require('http').createServer().listen(8765);

const gun = Gun({
  file: false,
  db: {
    file: "$sack@MountName$gun.db",
    exclusive : true
  },
  web: server
});
console.log('Relay peer started on port 8765 with /gun');