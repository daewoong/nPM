//iframe�� �ε�ɶ����� ������ ����
//var baseHeight = document.getElementById("iframe1").scrollHeight; //�⺻�������

function resizeHeight(obj) {
    thisHeight = obj.contentWindow.document.body.scrollHeight;

    if (thisHeight > baseHeight) {
        obj.height = thisHeight;
    } else {
        //�⺻������� �۾Ƶ� �⺻������ ����
        obj.height = baseHeight;
    }
}
function setheight() {
    if (parent.document.getElementById("iframe1")) {
        parent.document.getElementById("iframe1").height = document.body.clientHeight;
    }
}