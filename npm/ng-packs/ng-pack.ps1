# publish extension
yarn nx build extension
cd dist/libs/extension 
npm pack
npm publish
cd ../../../

# publish theme-shared
yarn nx build theme-shared
cd dist/libs/theme-shared
npm pack
npm publish
cd ../../../

# publish theme-basic
yarn nx build theme-basic
cd dist/libs/theme-basic
npm pack
npm publish
cd ../../../

# publish account
yarn nx build account
cd dist/libs/account 
npm pack
npm publish
cd ../../../

# publish identity
yarn nx build identity
cd dist/libs/identity 
npm pack
npm publish
cd ../../../
