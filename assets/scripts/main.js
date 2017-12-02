var onLoad = function() {

  function findClosestThread(dom) {
    var thread = dom.closest('[data-thread-id]');
    var value = null;
    if (thread && thread.length) {
      value = thread.attr('data-thread-id');
    }
    return {thread: thread, value: value};
  }

  $('.thread .vote .up, .thread .vote .down').on('click', function(e) {

    /**
     * Get current thread id
     */

    var threadObj = findClosestThread($(e.currentTarget));
    var thread = threadObj.thread;
    var value = threadObj.value;
    var parentValue = value;

    /**
     * Potentially get parent thread id
     */
    if (thread.hasClass('response')) {
      var pThreadObj = findClosestThread(thread.parent());
      var parentValue = pThreadObj.value;
    }

    console.log('Thread: ', value, 'ParentThread: ', parentValue);

    /**
     * Find out if we are going up or down
     */
    var direction = 0;
    if ($(e.currentTarget).hasClass('down')) {
      direction = -1;
    }
    if ($(e.currentTarget).hasClass('up')) {
      direction = 1;
    }

    var $vote = $(e.currentTarget).closest('.vote');
    var $count = $vote.find('.count');
    var count = parseInt($count.html(), 10) + direction;
    $count.html(count);
  });
};

$(document).ready(onLoad);
