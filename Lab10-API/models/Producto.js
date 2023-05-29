const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({

    codigoAlumno:{
        type: String,
        require: true
    },
    
    nombre: {
        type: String,
        require: true
    },
    codigoCarrera: {
        type: String,
        require: true
    },
    campo: {
        type: Number,
        require: true
    },
    fecha: {
        type: Date,
        default: Date.now()
    }
    
});

module.exports = mongoose.model('Producto', ProductoSchema)