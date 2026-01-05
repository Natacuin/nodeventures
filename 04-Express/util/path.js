const path = require('path');

module.exports=path.dirname(require.main.filename);
//Deprecated version
//module.exports=path.dirname(process.mainModule.filename);
