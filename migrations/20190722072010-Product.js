'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable(
    'product', 
    {
    id: { type: 'int', length: 6, primaryKey: true, autoIncrement: true },
    name: { type: 'string', length: 45 },
    description: { type: 'string', length: 45 },
    price: { type: 'int', length: 6 },
    size: { type: 'string', length: 45 },
    weight: { type: 'int', length: 6 },
    reorder_price: { type: 'int', length: 6 },
    image: { type: 'string', length: 45 },
    merchant_id: { type: 'int', length: 6 },
    stock_count: { type: 'int', length: 6 },
  }, 
  callback
  );
}

exports.down = function(db, callback) {
  db.dropTable('product');
  callback
};

exports._meta = {
  "version": 1
};
