const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');


exports.autenticarUsuario = async (req,res) =>{
    //Revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({ errores: errores.array() });
    }

    //Extraer email y password
    const {email, password} = req.body;

    try {
        
        //Revisar que sea un usuario registrado
        let usuario = await Usuario.findOne({ email });
        if(!usuario){
            return res.status(400).json({ msg: 'El usuario no existe'});
        }
        
        //Revisar password
        const passCorrecto = await bcryptjs.compare(password, usuario.password);
        if (!passCorrecto){
            return res.status(400).json({ msg: 'Password incorrecto'});
        }

        //Si todo es correcto pasamos el JWT 
         //Crear y firmar el JWT
         const payload = {
            usuario: {
                id: usuario.id
            }
        };
        //Firmar el jwr
        jwt.sign(payload, process.env.SECRETA,{
            expiresIn: 3600
        }, (error, token) =>{
            if(error) throw error;
            //Mensaje de confirmación
            res.json({ token });
        })
    } catch (error) {
        console.log(error)
    }
}