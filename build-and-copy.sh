set -x
cd ~/projects/react-date-picker
npm run lib
rm -rf ~/projects/portal/nodejs/webapp/node_modules/react-date-picker/lib
cp -r lib ~/projects/portal/nodejs/webapp/node_modules/react-date-picker/lib

