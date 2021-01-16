/*
@media screen and (min-width:480px) { 
  画面サイズが480pxからはここを読み込む
  480px <= x
}
@media screen and (min-width:768px) and ( max-width:1024px) {
  画面サイズが768pxから1024pxまではここを読み込む
  768 <= x <=1024
}
@media screen and (min-width:1024px) {
  画面サイズが1024pxからはここを読み込む　
  1024 <= x
}
*/

const MediaQuery = {
  Phone: 480,
  Tablet: 761,
  PC: 1200,
};

export default MediaQuery;
