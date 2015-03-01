$('.b-header__container_left, .b-header__container_right').addClass('b-header__container');
$('.b-header__container').each(function() {
    var $this = $(this);
    $this.html($this.html().replace(/>\s*</g, '><'));
});
$('.b-button_auth a').first().addClass('user-fio');
