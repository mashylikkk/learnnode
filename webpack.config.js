import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

let name = 'Mariia Kozyrenko';

const response = await fetch('https://rickandmortyapi.com/api/character')
const data = await response.json();
const characters = data.results;

export default {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                quietDeps: true,
                            }
                        }
                    }
                ],
            },
            {
                test: /\.njk$/,
                use: [
                    {
                        loader: 'simple-nunjucks-loader',
                        options: {}
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.njk',
            templateParameters: {
                name,characters
            }   
        }),
        new HtmlWebpackPlugin({
            template: './src/about.njk',
            filename: 'about.html'
        }),
    ],
}