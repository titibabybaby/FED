var arr=document.querySelectorAll(".box-page");
//遍历每个元素
for(var n=0;n<arr.length;n++){
    for(var r=0;r<3;r++){
        for(var c=0;c<3;c++){
            //创建元素
            var divs=document.createElement("div");
            divs.style.cssText="width:100px;height:100px;border:2px solid white;border-sizing:border-box;background-image:url(../image/a"+n+".jpg);background-size:300px 300px;position:absolute";
            arr[n].appendChild(divs);//.appendChild()方法可向节点的子节点列表的末尾添加新的子节点
            //平铺小方块
            divs.style.left=c*100+"px";
            divs.style.top=r*100+"px";
            //背景图像定位，如果要显示背景图像上小方块，值是负的
            divs.style.backgroundPositionX=-c*100+"px";
            divs.style.backgroundPositionY=-r*100+"px";
        }
    }
    
}