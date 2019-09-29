const HtmlWebpackPlugin = require('html-webpack-plugin');
//Ya no es nesesario especificar el archivo de origen y de salida con webpack
module.exports = {
  entry: './src/app.js',
  output: {
    //path: 'build',
    /*
     *devemos darle una ruta absoluta, no una ruta relativa:una ruta absoluta es como /home/noe/Downloads/linux, mientras que una ruta realiva es un pedazo de ruta....Webpack es una herramienta de nodejs y usamos una constante de node llamada __dirname
     */
    path: __dirname + '/build',
    filename: 'bundle.js',
  },
plugins: [
new HtmlWebpackPlugin({
	template: './src/index.html'
})
]
};
