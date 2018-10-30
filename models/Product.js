module.exports = function(sequelize, DataTypes) {
    const Products = sequelize.define('Products', {
      product_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      department_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DOUBLE(10,2),
        allowNull: false
      },
      stock_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING
      }
    });
  
    return Products;
  }