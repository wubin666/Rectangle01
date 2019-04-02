$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $widthValidate = $('#width-validate'),
      $heightValidate = $('#height-validate');

  $width.keypress(function(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDafault();
    }
  });
  if(e.key === '.'){
    if(e.target.value==='')e.preventDafault();
    if(e.target.value.indexOf('.')!==-1){
      e.preventDafault();
    }else{
      if(e.target.selectionStart===0)e.preventDafault();
    }
  }
  $btnCal.click(function(){
    var w = $width.val(),
        h = $height.val();
    var validWidth=valid(w),
        validHeight=valid(h);
    if(!validWidth.isOK){
      $widthValidate.html('宽度'+validWidth.reason);
      return;
    }
    if(!validHeight.isOK){
      $heightValidate.html('高度'+validHeight.reason);
      return;
    }

    var r=new Reactangle(w,h);
    
    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
