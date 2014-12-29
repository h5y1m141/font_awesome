$(document).on({
  mouseenter: function() {
    var offset, cssStyle;
    offset = $(this).offset();
    console.log($(this).attr("id"));

    var htmlElement;
    htmlElement = {
      "webApplication":'<div id="webApplicationIcon" class="sub">' +
        '<ul class="list-inline">' +
        '<li><i class="fa fa-adjust fa-3x"></i></li>' +
        '<li><i class="fa fa-arrows fa-3x"></i></li>' +
        '</ul>' +
        '</div>',
      "fileType":'<div id="fileTypeIcon" class="sub">' +
        '<ul class="list-inline">' +
            '<li><i class="fa fa-file fa-3x"></i></li>' +
            '<li><i class="fa fa-file-archive-o fa-3x"></i></li>' +
            '<li><i class="fa fa-file-audio-o fa-3x"></i></li>' +
            '<li><i class="fa fa-file-code-o fa-3x"></i></li>' +
            '<li><i class="fa fa-file-excel-o fa-3x"></i></li>' +
            '<li><i class="fa fa-file-image-o fa-3x"></i></li>' +
            '<li><i class="fa fa-file-movie-o fa-3x"></i></li>' +
            '<li><i class="fa fa-file-o fa-3x"></i></li>' +
            '<li><i class="fa fa-file-pdf-o fa-3x"></i></li>' +
            '<li><i class="fa fa-file-photo-o fa-3x"></i></li>' +
            '<li><i class="fa fa-file-picture-o fa-3x"></i></li>' +
            '<li><i class="fa fa-file-powerpoint-o fa-3x"></i></li>' +
            '<li><i class="fa fa-file-sound-o fa-3x"></i></li>' +
            '<li><i class="fa fa-file-text fa-3x"></i></li>' +
            '<li><i class="fa fa-file-text-o fa-3x"></i></li>' +
            '<li><i class="fa fa-file-video-o fa-3x"></i></li>' +
            '<li><i class="fa fa-file-word-o fa-3x"></i></li>' +
            '<li><i class="fa fa-file-zip-o fa-3x"></i></li>' +
        '</ul>' +
        '</div>',
      "spinner":'<div id="spinnerIcon" class="sub">' +
        '<ul class="list-inline">' +
            '<li><i class="fa fa-circle-o-notch fa-3x"></i></li>' +
            '<li><i class="fa fa-cog fa-3x"></i></li>' +
            '<li><i class="fa fa-gear fa-3x"></i></li>' +
            '<li><i class="fa fa-refresh fa-3x"></i></li>' +
            '<li><i class="fa fa-spinner fa-3x"></i></li>' +
        '</div>'
    };
    cssStyle = {
      position: 'absolute',
      left: 300,
      top: 0,
      width: 400,
      height: 300,
      fontSize: 14,
      zIndex: 2,
      background: 'rgba(240,240,240,0.7)'
    };

    return $(this).append($(htmlElement[$(this).attr("id")]).css(cssStyle));
  },
  mouseleave: function() {
    $('.sub').removeAttr('style');
    return $('.sub').empty();
  }
}, '.menuName');

$(document).on({
  mouseenter: function() {
    var cssStyle, selectClass;
    cssStyle = {
      background: 'rgba(235,40,235,0.7)'
    };
    selectClass = $(this).attr('class');
    $(this).css(cssStyle);
    $("#baseIcon").removeClass($("#baseIcon").attr('class')).addClass(selectClass);
  },
  mouseleave: function() {
    $('.fa').removeAttr('style');
  }
}, '.fa-3x');

$(document).ready(function() {
  $("#baseIcon").click(function(){
    var htmlElement, offset;
    offset = $(this).offset();
    console.log(offset.left);
    htmlElement = '<div id="mainMenu"><h4 id="webApplication" class="menuName">Web Application Icons</h4><h4 id="fileType" class="menuName">File Type Icons</h4><h4 id="spinner" class="menuName">Spinner Icons</h4></div>';
    $(this).after($(htmlElement).css({
      display: 'block',
      position: 'absolute',
      left: 50,
      top: 50,
      width: 300,
      height: 150,
      fontSize: 14,
      zIndex: 1,
      background: 'rgba(240,240,240,0.7)'
    }));
  });
});
