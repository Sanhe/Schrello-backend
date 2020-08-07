import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
    {
        // cardId: Number,
        // title: String
        // cardId: {
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

const CardModel = mongoose.model("card", cardSchema, "card");

export default CardModel;