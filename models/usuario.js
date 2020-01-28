//Define o model pessoa
const UsuarioModel = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        userName: DataTypes.STRING,
        password: DataTypes.STRING,
    });
    return Usuario
}

module.exports = UsuarioModel