// $Id$

Drupal.behaviors.drupable = function (context) {
  // Console related JS
  //setTimeout(function() {$('#console .status').slideUp("slow")}, 5000);
  
  //$('#console .help').after('<div id="showhelp">Need Help?</div>');
  //$('#showhelp').click(function(){
  //  $('#console .help').slideDown(300);
  //  $(this).hide()
  //})
  
  $("#main:has(#tabs)").hover(
    function () {
      $(this).find("#tabs").fadeIn(400)
    },
    function () {
      $(this).find("#tabs").fadeOut(400)
    }
  );
  
  
  $('div.fieldset:not(.tao-processed)').each(function() {
    $(this).addClass('tao-processed');
    if ($(this).is('.collapsible')) {
      if ($('input.error, textarea.error, select.error', this).size() > 0) {
        $(this).removeClass('collapsed');
      }
      // Note that .children() only returns the immediate ancestors rather than
      // recursing down all children.
      $(this).children('.fieldset-title').click(function() {
        $(this).siblings('.fieldset-content').slideToggle('fast');
        $(this).parent().toggleClass('collapsed');
        
        return false;
      });
    }
  });
}
