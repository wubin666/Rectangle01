$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $widthValidate = $('#width-validate'),
      $heightValidate = $('#height-validate');

  $width.focusout(function(){
    var w=$width.val();
    if(w===''){
      $widthValidate.html('宽度不能为空！');
      $width.select();
      return;   
    } else {
      $widthValidate.html('');
    } 
    if(Number(w)<0){
      $widthValidate.html('宽度不能为负！');
      $width.select();
      return;   
    }else{
      $widthValidate.html('');   
    }
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(w)){
      $widthValidate.html('宽度不是合法数字！');
      $width.select();
      return;    
    }else{
      $widthValidate.html('');     
    }
  }) ;

  $height.focusout(function() {
    var h=$height.val();
    if(h===''){
      $heightValidate.html('高度不能为空！');
      $height.select();
      return;
    } else {
      $heightValidate.html('');
    } 
    if(Number(h)<0){
      $heightValidate.html('高度不能为负！');
      $height.select();
      return;
    }else{
      $heightValidate.html('');
    }
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(h)){
      $heightValidate.html('高度不是合法数字！');
      $height.select();
      return;
    }else{
      $heightValidate.html('');   
    }
  });

  $btnCal.click(function(){
    var w = $width.val(),
        h = $height.val();

    var r=new Reactangle(w,h);
    
    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
