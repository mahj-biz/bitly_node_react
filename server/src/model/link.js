import { DataTypes } from "sequelize";
import { postgresConnection } from "../database/connection";

const Link = postgresConnection.define(
  "link_bitlys",
  {
    original_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortened_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    visit_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:0
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);

export default Link;
