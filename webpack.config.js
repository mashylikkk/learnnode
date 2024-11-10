import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
                test: /\.scss$/, 
                use: [
                    "style-loader", 
                    "css-loader", 
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                quietDeps: true,
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'],
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
        // Use HtmlWebpackPlugin for index.njk and about.njk templates
        new HtmlWebpackPlugin({
            template: "./src/index.njk",
        }),
        new HtmlWebpackPlugin({
            template: "./src/about.njk",
            filename: 'about.html'
        }),
    ],
};
