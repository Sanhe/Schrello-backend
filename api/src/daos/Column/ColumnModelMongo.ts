import mongoose from "mongoose";

const columnSchema = new mongoose.Schema(
    {
        // columnId: Number,
        // title: String
        // columnId: {
        //     type: Number,
        //     unique: true,
        //     required: true
        // },
        // boardId: {
        //     type: String,
        //     required: true
        // },
        // title: {
        //     type: String,
        //     required: true
        // },
        // backgroundColorId: {
        //     type: String,
        //     required: true
        // },
        // timestamps: {
        //     type: String,
        //     required: true
        // }
    }
    ,
    { timestamps: true },
);

const ColumnModel = mongoose.model("column", columnSchema, "column");

export default ColumnModel;