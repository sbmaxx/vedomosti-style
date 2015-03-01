### TL;DR

<a href="https://fotki.yandex.ru/next/users/sbmaxx/album/16903/view/675669" target="_blank"><img src="https://img-fotki.yandex.ru/get/6838/17667337.2/0_a4f55_79753d10_XL.png" width="800" height="508" border="0" title="2015-03-01 14-29-23 Ведомости.png" alt="2015-03-01 14-29-23 Ведомости.png"/></a>

<a href="https://fotki.yandex.ru/next/usemrs/sbmaxx/album/16903/view/675668" target="_blank"><img src="https://img-fotki.yandex.ru/get/15565/17667337.2/0_a4f54_7e45e81_XL.png" width="800" height="508" border="0" title="2015-03-01 14-30-22 Ведомости.png" alt="2015-03-01 14-30-22 Ведомости.png"/></a>

## Правки

```javascript
(function() {
    var bundlePath = 'https://rawgit.com/sbmaxx/vedomosti-style/master/';
    $('head').append('<link rel="stylesheet" href="' + bundlePath + 'index.css' + '"></link>');
    $('head').append('<script src="' + bundlePath + 'index.js' + '"></script>');
}());
```

Входные данные — mbp retina 15", браузер развернут "почти на всю ширину экрана", `$(document).width` — 1155px. При этом после авторизации шапку распирает на [две строки] [1]. С более коротким логином проблемы [не наблюдается] [2], но не менять же ради этого имя ;)

Варианты починить:
* [убрать поле "подписка"] [3] для авторизованных пользователей с подпиской;
* [ужать по горизонтали] [4] разделители элементов в шапке.


Более того, пока игрался со стилями*, обнаружил некоторые шероховатости в вёрстке, несоответствие идеалогии БЭМ.

1. внутри блока `header` содержится несколько элементов и блоков, например: `b-header__container_left`, `b-header__container_right`, `b-logo`, `b-date` и другие. У каждого этого блока заданы отступы сверху и снизу: `padding: 0 35px`, хотя по концепции АНБ, разумней задать один раз это свойство у блока `b-header__container`;
1. элементы `b-header__container_right`, `b-header__container_left` не содержат `className` с именем элемента без модификатора, потому на них них сложно наложить одинаковые стили, рекомендуется примиксовать к ним класс `b-header__container`;
1. как и пункте 1 каждый из вложенных блоков устанавливает свойство `line-height`, разумней выставить его один раз в `b-header__container`
1. блок `b-date` имеет лишнее свойство `float: left;`
1. блоку `b-header__divider` необходимо поставить стили `margin: 0 5px`, второе значение можно подобрать эмпирическим путём ;)
1. `icon-gazeta` иконка газеты из спрайта задана с размерами 32x32 пикселя, хотя фактически не превышает 24x26, из-за этого трудней достичь равных отступов от блока `b-header__divider`.
1. аналогично `icon-subscribe`
1. иконка `no-person` больше других иконок, что немного странно, для простоты я её "уменьшил" до 24x26
1. в блоке `b-subscribe` в очередной раз задана высота строки в `32px`, хотя можно было задать это один раз. более того задана с `!important`;
1. аналогично `.b-button.b-button_auth a`
1. в итоговом HTML не вырезаны пробелы между тэгами, из-за этого несмотря на корректные стили между элементами остаются [отступы](5). Рекомендуется вырезать все незначащие пробелы после генерации HTML;
1. вернуть висячую пунктуацию, так любимую на прежнем сайте ;)

_\* — обращал внимание только на `header`._

[1]: https://yadi.sk/i/U7DSOaYrex6Wa
[2]: https://yadi.sk/i/eieIR1xJex6Xd
[3]: https://yadi.sk/i/hv5YxfLWex6cT
[4]: https://yadi.sk/i/Ft2bdqTqex7tJ
[5]: https://yadi.sk/i/Ur7rXf7Iex9uV
[6]: https://yadi.sk/i/p3iA4PbNexB7p
[7]: https://yadi.sk/i/cKpe3QUiexBBT
