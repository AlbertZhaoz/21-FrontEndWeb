 //Demo
 layui.use('form', function(){
    var form = layui.form;
    
    //监听提交
    form.on('submit(formDemo)', function(data){
      layer.msg(JSON.stringify(data.field));
      return false;
    });
  });

layui.use('form',function(){
    var form = layui.form;
    form.on('select(cityFilter)', function(data){
        console.log(data.elem); //得到select原始DOM对象
        console.log(data.value); //得到被选中的值
        console.log(data.othis); //得到美化后的DOM对象
      });  
})

layui.use('layer', function(){
    var layer = layui.layer;
    
    // 消息框
    layer.msg('hello');
  
    // 确定弹窗
    var index = layer.open({
        content:'test'
        });
  });

 