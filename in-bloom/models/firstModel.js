// here, we'll use sequelize to export our data model in a similar way as 
//the below code.  We'll rename the file later as well.

// module.exports = function(sequelize, DataTypes) {
//   var Post = sequelize.define("Post", {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     body: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     category: {
//       type: DataTypes.STRING,
//       defaultValue: "Personal"
//     }
//   });
//   return Post;
// };