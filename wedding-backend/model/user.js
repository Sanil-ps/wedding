const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['provider','customer'],
        default: 'customer'
    },
})

// userSchema.pre('save', async function (next) {
// 	if (this.isModified('password')) {
// 		this.password = await bcrypt.hash(this.password, 12);
// 	}
// 	next();
// });
mongoose.model('User', userSchema)