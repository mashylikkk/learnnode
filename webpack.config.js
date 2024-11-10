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
        ],
    }, // Added comma here to separate `module` and `plugins`
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
    ],
};
