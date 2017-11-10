# Fork the template locally and run it to test changes to the template.
set -e
cd ..
rm -rf vue-test
vue init ./vue-webpack-typescript vue-test
cd vue-test
npm install
npm run test

