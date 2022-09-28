layui.use('layer', function(){
    // 确定弹窗
    var index = layer.open({
        title:"Login",
        type:1,
        content: layui.$('.layerForm')
        });
  });
