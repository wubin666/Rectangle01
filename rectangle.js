$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $form =$('form'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

  function Reactangle(width,height){
    var w=Number(width),
        h=Number(height);
    this.perimeter=function(){
      return 2*(w+h);
    };
    this.area=function(){
      return w*h;
    }
  }

  $form.click(function(e){
    var w = $width.val(),
        h = Number($height.val());

    var r=new Reactangle(w,h);
    
    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
