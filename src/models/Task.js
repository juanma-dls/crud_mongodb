const moongoose = require('mongoose');
const {Schema} = moongoose;

const taskSchema = new Schema(
    {
        title: {
            type: String,
            unique: true,
            require: true
        },

        description: {
            type: String,
            unique: true,
            require: true
        },
        finish: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps:true,
        versionKey: false
    }

);

const Task = moongoose.model('Task', taskSchema)
module.exports = Task;