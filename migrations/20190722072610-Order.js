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
    'order', 
    {
    id: { type: 'int', length: 6, primaryKey: true, autoIncrement: true },
    is_round_trip: { type: 'boolean'},
    date_created: { type: 'date'},
    date_scheduled: { type: 'date'},
    user_id: { type: 'int', length: 6 },
    merchant_id: { type: 'int', length: 6 },
    parcel_size: { type: 'string', length: 45 },
    num_parcels: { type: 'int', length: 6 },
  }, 
  callback
  );
}
exports.down = function(db, callback) {
  db.dropTable('order');
  callback
};

exports._meta = {
  "version": 1
};
