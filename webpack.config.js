
const path = require('path'); //requerimos un modulo de node.js llamado path
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Se instancia el pluggin de html que se instalo 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {//se crea un nuevo modulo que se exportara con dicha configuracion
    entry: './src/index.js', //entrada, se hace referencia al archivo principal
    output: {//output, donde se guardaran los archivos resultantes cuando se compile
        path: path.resolve(__dirname, 'dist'),//instancia con resolve para detectar el directorio en
                                            //donde nos encontramos y le pasamos el directorio (dist)
                                            //en donde guardaremos los archivos.
        filename: 'bundle.js',//nombre del archivo principal
    },
    resolve: {//resolver extensiones que utilizaremos para el proyecto
        extensions: ['.js', '.jsx'],
    },
    module: { //modulo en donde se crean las reglas necesarias para el proyecto
        rules: [
            {
                test: /\.(js|jsx)$/,//expres. regular que identifia archivos js y jsx
                exclude: /node_modules/, //exclusion de la carpeta de node_modules
                use: {
                    loader: 'babel-loader',//loader que utiliza babel
                },
            },
            {//objetos de reglas para archivos de html
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            },
            {//reglas de CSS, identica archivos con extension .scss o .css
                test:  /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },
            {//Regla para elementos multimedia
                test: /\.(png|gif|jpg)$/, //añade al proyecto elemento png gif jpg
                use: [
                    {
                        'loader': 'file-loader', //paquete que se instalo con npm
                        options: {//se asignara un hash para el nombre del archivo
                            name: 'assets/[hash].[ext]'
                        }
                    }
                ]
            }
        ],
    },
    plugins: [ //plugins necesarios
        new HtmlWebpackPlugin({//nueva referencia a HtmlWebPackPlugin
            template: './public/index.html',
            filename: './index.html',
        }),

        new MiniCssExtractPlugin({//crea el archivo css del proyecto
            filename: 'assets/[name].css'
        })
    ],
};