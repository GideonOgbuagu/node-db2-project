
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    // VIN, make, model, and mileage.
    tbl.increments()

    tbl.integer("VIN")
    tbl.string("make").notNullable();
    tbl.string("model").notNullable;
    tbl.integer("mileage");
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars")
  
};
