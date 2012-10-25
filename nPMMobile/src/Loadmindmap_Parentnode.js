var mindviewMiddle = Titanium.UI.createView({// ���ο� window�� view����

	backgroundColor : '#cacaca', // view ������
	top : 0, // view �����
	width : 'auto', // view �ʺ�
	backgroundImage : 'nPMMobile_Image/mindmap_Background.png' // view��� �̹���
});


var saveContent = "";
// ���� �ּ�
var servletAddr = 'http://solar4.ssu.ac.kr:8080/mobileServlet';


var mindMapInit = function() {

	// �����κ��� data�� �������� ���� �۾�
	var param = "action=init";
	var xhr = Ti.Network.createHTTPClient();

	xhr.open("POST", servletAddr);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
	xhr.setRequestHeader("Cache-Control", "no-cache, must-revalidate");
	xhr.setRequestHeader("Pragma", "no-cache");
	xhr.send(param);
	xhr.onload = function() {
		var doc = this.responseXML.documentElement;
		// ������ sml ���� ����
		var id = doc.getElementsByTagName('id');

		// ���ο� node ������ ��Ÿ�� ��ġ ���� ����
		var height = 220;
		// var check_side=68;
		var check_side = 10;
		// var check_height=135;
		var check_height = 100;
		// var plus_side=225;
		var plus_side = 20;
		var node_Count = 0;
		var height_Count = 0;
		var upgrade_count = 0;

	    // id�� ������ ���� �Ľ� ����
		for (var i = 0; i < id.length; i++) {
			var currentItem = id.item(i);
			var mytext = currentItem.getElementsByTagName('mytext').item(0).text;
			var mynumber = currentItem.getElementsByTagName('number').item(0).text;

			num = i;
			num2 = i + 1;

			
		if(i==0){

		// ��ư ���� �� ��ư �Ӽ� �ʱ�ȭ
		var parentNode_Button = Ti.UI.createButton({

		color: '#000',
		top:check_height + height,
		objName:mynumber,
		title:mytext,
		width:185,
		height:50,
		left:check_side + node_Count*plus_side
		});

		mindviewMiddle.add(parentNode_Button);

		// mind ��ư Ŭ���Ͽ��� �� �̺�Ʈ �ڵ鷯 ȣ��
		parentNode_Button.addEventListener('click', function(e) {

		saveContent = this.title + "  -->  "  // ���� Ŭ���� ����� �̸� ����
		mindmapAdd(this.objName, this.title); // mindmapAdd �Լ� ȣ��
		});
		}
		*/
		// ���ٿ� 3���� ��带 ǥ���ϱ� ���� 3���� �ϼ��Ǹ� �� �����ٷ� ����
		
		else if(i%3==0){

				
		height_Count++;
		node_Count = 0;

		var parentNode_Button = Ti.UI.createButton({

		color: '#000',
		 top:check_height + height_Count*check_height + height,
		objName:mynumber,
		top:40,
		title:mytext,
		width:120,
		height:50,
		 left:check_side + node_Count*plus_side
		});

	    mindviewMiddle.add(parentNode_Button);
		parentNode_Button.addEventListener('click', function(e) {

		saveContent = this.title + "  -->  "
		mindmapAdd(this.objName, this.title);
		});
		}
		// ó�� ��� ������ �ƴϰ� 2��° ���� 2��° ������ ������ ��
		else if(i%3!=0 & node_Count!=0){

		var parentNode_Button = Ti.UI.createButton({

		color: '#000',
		top:check_height + height_Count*check_height +  height,
		objName:mynumber,
		title:mytext,
		width:185,
		height:50,
		left:check_side + node_Count*plus_side
		});

		mindviewMiddle.add(parentNode_Button);

		parentNode_Button.addEventListener('click', function(e) {

		saveContent = this.title + "  -->  "
		mindmapAdd(this.objName, this.title);
		});

		}
		// ���� 3���� ��찡 �ƴ� ��
		else{
		node_Count = upgrade_count;

		var parentNode_Button = Ti.UI.createButton({

		color: '#000',
		top:check_height  + height,
		objName:mynumber,
		title:mytext,
		width:185,
		height:50,
		left:check_side + node_Count*plus_side
		});

		 mindviewMiddle.add(parentNode_Button);

		parentNode_Button.addEventListener('click', function(e) {

		saveContent = this.title + "  -->  "
		mindmapAdd(this.objName, this.title);
		});
		}

		node_Count++;
		upgrade_count++;

		}
	
		// ��ư ���� �� �Ӽ� �ʱ�ȭ
		var useMind = Ti.UI.createButton({
			top : 47,
			title : '����',
			width : 40,
			height : 'auto',
			right : 45
		});

		// ��ư ���� �� �Ӽ� �ʱ�ȭ
		var btnBack = Titanium.UI.createButton({

			title : '�ڷ�',
			width : 40,
			height : 'auto',
			right : 2,
			top : 47

		});

		// ���� ��ư�� �̺�Ʈ �ڵ鷯 �ο�
		useMind.addEventListener('click', function(e) {
			alert('���ϴ� ��带 Ŭ���ϼ���!');
		});

		// �ڿ� ��ư�� �̺�Ʈ �ڵ鷯 �ο�
		btnBack.addEventListener('click', function(e) {
			mindmap_Win.close();
			main_Win.open();
			
			for ( i = 0; i < num; i++) {
				circle[i].hide();
			}
		});
		// ���� �����쿡 �Ӽ� �߰���
		 mindviewMiddle.add(btnBack);
		 mindviewMiddle.add(useMind);
	
	}
	 mindmap_Win.add(mindviewMiddle);
};