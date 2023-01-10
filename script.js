(() => {

    const itemDiv = document.getElementById('items');

    document.getElementById('btn_show').addEventListener('click',
         ()=> {
             let elemWidth=document.getElementById('input_width').value;
             let elemHeight=document.getElementById('input_height').value;
             let elemColor=document.getElementById('input_color').value;
             let elemRadius=document.getElementById('input_radius').value;
            let n = document.getElementById('input_count').value;
           for (let i = 0; i < n; i++) {
               const imgTag = document.createElement('img');
               imgTag.style.width=elemWidth+'px';
               imgTag.style.height = elemHeight+'px';
               imgTag.style.backgroundColor = elemColor;
               imgTag.style.borderRadius=elemRadius+'px';
               const imgList=document.createElement('LI');
               imgList.appendChild(imgTag)
               itemDiv.appendChild(imgList);
           }
        });
})();
