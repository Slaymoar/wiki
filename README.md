#H1 Wiki

#H2 Installation

#H4 Install Node and Yarn
```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

#H4 Clone Repo and setup app
```bash
cd /path/to/folder
git clone git@github.com:danieprice/wiki.git
cd wiki
yarn
sudo chmod +x ./app.js
```

#H5 Start API
```bash
node ./app.js
# API started at 127.0.0.1:3000

# for debugging
node debug ./app.js
```

#H5 Open browser file