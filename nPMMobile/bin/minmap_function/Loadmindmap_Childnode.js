// �ڽĳ�带 Ŭ���Ͽ��� ���� ���ο� window
var mindmapAdd = function(parentnumber, parenttext) {// Ŭ������ �� ���ο� ������ ����� �Լ�
	var mindWin = Ti.UI.createWindow();
	// ���ο� window ����

	mindWin.title = parenttext;
	// �Լ��� �Ű��������� ����
	mindWin.open();

	// �� ���� �� �Ӽ� �ʱ�ȭ
	var labelParent = Ti.UI.createLabel({

		top : 30,
		color : '#000',
		width : 'auto',
		height : 'auto',
		text : parenttext,
		textAlign : 'center',
		font : {
			fontSize : 30,
			fontStyle : 'italic'
		},
		objName : parentnumber
	});

	// �ڷ� ��ư ���� �� �Ӽ� �ʱ�ȭ
	var backButton = Ti.UI.createButton({
		saveContent : null,
		title : '�ڷ�',
		width : 40,
		height : 'auto',
		right : 2,
		top : 47
	});

	// �ڷ� ��ư�� �̺�Ʈ �ڵ鷯 �ο�
	backButton.addEventListener('click', function() {
		mindWin.close();
		// ���� open���� window �����
	});

	// �߰� ��ư ���� �� �Ӽ� �ʱ�ȭ
	var addButton = Ti.UI.createButton({
		top : 47,
		title : '�߰�',
		width : 40,
		height : 'auto',
		right : 45
	});

	// �߰� ��ư�� �̺�Ʈ �ڵ鷯 �ο�
	addButton.addEventListener('click', function() {
		// mindmapInsert�Լ� ȣ��
		mindmapInsert(labelParent.objName, labelParent.text);
	});

	// view ���� �� �Ӽ� �ʱ�ȭ
	var mindviewMiddle = Titanium.UI.createView({

		backgroundColor : '#cacaca',
		top : 0,
		backgroundImage : 'nPMMobile_Image/mindmap_Background3.png',
		width : 'auto'
	});

	var child_Viewmiddle = Titanium.UI.createView({

		backgroundColor : '#808080',
		top : 85,
		// height: 100,
		width : 'auto'
	});

	// ���ο� ��� �߰���ġ�� ���� �Ӽ� ����
	var check_side = 20;
	var check_height = 125;
	var plus_side = 100;
	var node_Count = 0;
	var height_Count = 0;
	var upgrade_count = 0;

	var param = "action=child" + "&parentnumber=" + parentnumber;
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("POST", servletAddr);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
	xhr.setRequestHeader("Cache-Control", "no-cache, must-revalidate");
	xhr.setRequestHeader("Pragma", "no-cache");
	xhr.send(param);
	xhr.onload = function() {
		var doc = this.responseXML.documentElement;
		var id = doc.getElementsByTagName('id');

		// �� ���������� ������ ����� ���� ���ϴ� ��ư ���� �� �Ӽ� �ʱ�ȭ
		var node_Button = Titanium.UI.createButton({

			color : '#ff0000',
			top : 430,
			title : parenttext,
			width : 185,
			height : 50,
			left : 293

		});

		mindviewMiddle.add(node_Button);

		// id�� ������ ���� �Ľ� ����
		for (var i = 0; i < id.length; i++) {
			var currentItem = id.item(i);
			var mytext = currentItem.getElementsByTagName('mytext').item(0).text;
			var mynumber = currentItem.getElementsByTagName('number').item(0).text;

			switch(i) {
				case 0:
					// ����� ������ 1�����

					// ��� ��ư ���� �� �Ӽ� �ʱ�ȭ
					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 430,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 68
					});

					mindviewMiddle.add(parentNode_Button);
					// ���� �����쿡 �߰�
					// ��� ��ư�� �̺�Ʈ �ڵ鷯 �ο�
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 1:
					// ����� ������ 2�����

					// ��� ��ư ���� �� �Ӽ� �ʱ�ȭ
					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 430,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 518
					});

					mindviewMiddle.add(parentNode_Button);
					// ��� ��ư�� �̺�Ʈ �ڵ鷯 �ο�
					parentNode_Button.addEventListener('click', function(e) {
						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 2:
					// ����� ������ 3�����

					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 305,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 293
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);

					});
					break;

				case 3:
					// ����� ������ 4�����

					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 555,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 293
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 4:
					// ����� ������ 5�����
					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 305,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 68
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 5:
					// ����� ������ 6�����

					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 305,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 518
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 6:
					// ����� ������ 7�����

					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 555,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 68
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 7:
					// ����� ������ 8�����

					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 555,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 518
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 8:
					// ����� ������ 9�����

					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 555,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 68
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 9:
					// ����� ������ 10�����
					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 305,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 293
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 10:
					// ����� ������ 11�����
					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 305,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 293
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 11:
					// ����� ������ 12�����
					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 305,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 518
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

			}

			node_Count++;
			upgrade_count++;

		}
	};

	mindviewMiddle.add(addButton);
	mindviewMiddle.add(backButton);
	mindWin.add(mindviewMiddle);
}