const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// hardcoded articles
var articles = [
  {
    title: 'This is my first title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies lacinia purus vitae consectetur. Suspendisse pellentesque sapien tristique diam ornare maximus. Mauris fringilla velit sit amet congue scelerisque. Donec diam eros, commodo tempus velit vitae, pretium hendrerit neque. Proin in molestie nisi. Fusce eget turpis ac augue viverra commodo. Suspendisse porttitor lacus eget varius mattis. Praesent vel porta neque. Praesent ac eros congue nisl elementum mattis non non nisl. Duis blandit felis quis auctor faucibus. Nullam interdum ante nec dolor commodo vulputate. Cras scelerisque metus at nulla euismod, ac vulputate sem ultricies.',
    author: 'Daniel Price',
    date: new Date(),
    vote: 100,
    comments: [
      {
        author: 'Matthew Aho',
        comment: 'This article sucks bro'
      },
      {
        author: 'Daniel Price',
        comment: 'Shut up matt'
      }
    ]
  },
  {
    title: 'This is my second title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies lacinia purus vitae consectetur. Suspendisse pellentesque sapien tristique diam ornare maximus. Mauris fringilla velit sit amet congue scelerisque. Donec diam eros, commodo tempus velit vitae, pretium hendrerit neque. Proin in molestie nisi. Fusce eget turpis ac augue viverra commodo. Suspendisse porttitor lacus eget varius mattis. Praesent vel porta neque. Praesent ac eros congue nisl elementum mattis non non nisl. Duis blandit felis quis auctor faucibus. Nullam interdum ante nec dolor commodo vulputate. Cras scelerisque metus at nulla euismod, ac vulputate sem ultricies.',
    author: 'Daniel Price',
    comments: []
  },
  {
    title: 'This is my third title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies lacinia purus vitae consectetur. Suspendisse pellentesque sapien tristique diam ornare maximus. Mauris fringilla velit sit amet congue scelerisque. Donec diam eros, commodo tempus velit vitae, pretium hendrerit neque. Proin in molestie nisi. Fusce eget turpis ac augue viverra commodo. Suspendisse porttitor lacus eget varius mattis. Praesent vel porta neque. Praesent ac eros congue nisl elementum mattis non non nisl. Duis blandit felis quis auctor faucibus. Nullam interdum ante nec dolor commodo vulputate. Cras scelerisque metus at nulla euismod, ac vulputate sem ultricies.',
    author: 'Daniel Price'
  },
  {
    title: 'This is my fourth title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies lacinia purus vitae consectetur. Suspendisse pellentesque sapien tristique diam ornare maximus. Mauris fringilla velit sit amet congue scelerisque. Donec diam eros, commodo tempus velit vitae, pretium hendrerit neque. Proin in molestie nisi. Fusce eget turpis ac augue viverra commodo. Suspendisse porttitor lacus eget varius mattis. Praesent vel porta neque. Praesent ac eros congue nisl elementum mattis non non nisl. Duis blandit felis quis auctor faucibus. Nullam interdum ante nec dolor commodo vulputate. Cras scelerisque metus at nulla euismod, ac vulputate sem ultricies.',
    author: 'Daniel Price'
  },
  {
    title: 'This is my fith title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies lacinia purus vitae consectetur. Suspendisse pellentesque sapien tristique diam ornare maximus. Mauris fringilla velit sit amet congue scelerisque. Donec diam eros, commodo tempus velit vitae, pretium hendrerit neque. Proin in molestie nisi. Fusce eget turpis ac augue viverra commodo. Suspendisse porttitor lacus eget varius mattis. Praesent vel porta neque. Praesent ac eros congue nisl elementum mattis non non nisl. Duis blandit felis quis auctor faucibus. Nullam interdum ante nec dolor commodo vulputate. Cras scelerisque metus at nulla euismod, ac vulputate sem ultricies.',
    author: 'Daniel Price'
  },
  {
    title: 'This is my sixth title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies lacinia purus vitae consectetur. Suspendisse pellentesque sapien tristique diam ornare maximus. Mauris fringilla velit sit amet congue scelerisque. Donec diam eros, commodo tempus velit vitae, pretium hendrerit neque. Proin in molestie nisi. Fusce eget turpis ac augue viverra commodo. Suspendisse porttitor lacus eget varius mattis. Praesent vel porta neque. Praesent ac eros congue nisl elementum mattis non non nisl. Duis blandit felis quis auctor faucibus. Nullam interdum ante nec dolor commodo vulputate. Cras scelerisque metus at nulla euismod, ac vulputate sem ultricies.',
    author: 'Daniel Price'
  },
  {
    title: 'This is my seventh title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies lacinia purus vitae consectetur. Suspendisse pellentesque sapien tristique diam ornare maximus. Mauris fringilla velit sit amet congue scelerisque. Donec diam eros, commodo tempus velit vitae, pretium hendrerit neque. Proin in molestie nisi. Fusce eget turpis ac augue viverra commodo. Suspendisse porttitor lacus eget varius mattis. Praesent vel porta neque. Praesent ac eros congue nisl elementum mattis non non nisl. Duis blandit felis quis auctor faucibus. Nullam interdum ante nec dolor commodo vulputate. Cras scelerisque metus at nulla euismod, ac vulputate sem ultricies.',
    author: 'Daniel Price'
  }
];

app.get('/articles', (req, res) => {
  res.json({
    articles: articles,
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))