var renderArticles = function(articles) {
  console.log(9);
 /*
  * This function takes in an article data and returns
  * valid dom for an article block
  * 
  * @param Object article
  * @return String dom
  */ 
  function generateArticleDOM(article, articleIndex) {
    var dom = ''; // A String of dom
    dom += '<div class="article" data-index="' + articleIndex + '">';
    dom +=     '<div class="title">' + article.title + '</div>';
    dom +=     '<div class="body">' + article.body + '</div>';
    dom +=     '<div class="author">' + article.author + '</div>';
    dom +=     '<div class="vote" data-index="' + articleIndex + '">' + (String(article.vote || 0)) + '</div>';
    if (article.date) {
      dom +=   '<div class="date">' + article.date.toString() + '</div>';
    }
    dom +=     '<div class="comments">'

    // if (article.comments && article.comments.length) {
    //   for (var i = 0; i < article.comments.length; i++) {
    //     dom +=         '<div class="comment">';
    //     dom +=             '<div class="author">' + article.comments[i].author + '</div>';
    //     dom +=             '<div class="comment">' + article.comments[i].comment + '</div>';
    //     dom +=         '</div>';
    //   }
    // }

    var foo = true;
    var i = 0;
    try {
      while (i < articles[i].comments.length) {
        dom +=         '<div class="comment">';
        dom +=             '<div class="author">' + article.comments[i].author + '</div>';
        dom +=             '<div class="comment">' + article.comments[i].comment + '</div>';
        dom +=         '</div>';
        i += 1;
      }
    } catch (e) {
      dom += '<div>NO COMMENTS</div>';
      console.log('article comments for ' + articleIndex + ' failed');
    }
      
    dom +=     '</div>'; 
    dom += '</div>';
    return dom;
  }

  for (var i = 0; i < articles.length; i++) {
    var domString = generateArticleDOM(articles[i], i);    
    $('div.articles').append(domString);  
  }

  $('.article .vote').on('click', function(elem) {
    var index = parseInt($(elem.currentTarget).attr('data-index'), 10);
    var vote = articles[index].vote || 0;
    vote += 1;
    $(elem.currentTarget).html(vote);
    articles[index].vote = vote;
  });
  console.log(10);
}

function fetchArticles() {
  console.log(4);
  var options = {
    url: 'http://127.0.0.1:3000/articles',
    success: function(data, status, xhr) {
      console.log(8);
      renderArticles(data.articles);
      console.log(11);
    },
    error: function(error) {
      console.log(8);
      console.error(error);
      console.log(9);
    }
  };
  console.log(5);
  $.ajax(options);
  console.log(6);
}


function mainApp() {
  console.log(3);
  fetchArticles();
  console.log(7);
}

console.log(1);
$(document).ready(mainApp);
console.log(2);



/**
 * functions always have a return (if you don't specify something it is undefined)
 * functions unless otherwise noted are syncronous and will execute the next line after the return
 */

function a() {
  return 'foo';
}

function b() {
  var foo = a();
  return foo;
}

function c() {
  var bar = b();
}

function a(cb) {
  console.log(2);
  setTimeout(cb, 5000);
  console.log(3);
}

function b(cb) {
  console.log(5);
  setTimeout(cb, 2000);
  console.log(6);
}

function c(cb) {
  console.log(8);
  setTimeout(cb, 3000);
  console.log(9);
}

function cbA() {
  console.log(13);
  console.log('a');
}

function cbB() {
  console.log(11);
  console.log('b');
}

function cbC() {
  console.log(12);
  console.log('c');
}

console.log(1);
a(cbA);
console.log(4);
b(cbB);
console.log(7);
c(cbC);
console.log(10);








