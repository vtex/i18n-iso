NODE_ENV=production
cd demo
yarn build 
yarn build:static
gh-pages -d ./out -b gh-pages -r https://$GH_TOKEN@github.com/vtex/i18n-iso.git