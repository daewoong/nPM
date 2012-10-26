// �߰���ư�� ������ ���� ���ο� window
var mindmapInsert = function(parentnumber, parenttext) {// Ŭ������ �� ���ο� ������ ����� �Լ�
	var mindWin = Ti.UI.createWindow();
	// ���ο� ������ ����
	mindWin.open();
	// ������ ������ ����

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

	// �Է¹ޱ� ���� �ؽ�Ʈ �ʵ� ���� �� �ʱ�ȭ
	var txtField = Titanium.UI.createTextField({
		top : 490,
		width : 'auto',
		left : 250,
		hintText : '���� ���� ������ �ϰ� ��Ű���?(Ŭ��)'
	});

	// �� ���� �� �Ӽ� �ʱ�ȭ
	var currentMind = Titanium.UI.createLabel({
		top : 375,
		width : 'auto',
		left : 285,
		font : {
			fontSize : 15,
			fontStyle : 'italic'
		},
		text : ' * ������� ������ ���ε� ��� * '

	});

	// �� ���� �� �Ӽ� �ʱ�ȭ
	var showMind = Titanium.UI.createLabel({

		top : 405,
		width : 'auto',
		left : 293,
		font : {
			fontSize : 10,
			fontStyle : 'italic'
		},
		text : saveContent

	})

	// �ڷΰ��� ��ư ���� �� �Ӽ� �ʱ�ȭ
	var backButton = Ti.UI.createButton({
		saveContent : null,
		title : '�ڷ�',
		width : 40,
		height : 'auto',
		right : 2,
		top : 47
	});

	// �ڷΰ��� ��ư�� �̺�Ʈ �ڵ鷯 �ο�
	backButton.addEventListener('click', function() {
		mindWin.close();
		// ���� ������ �ݴ´�.

	});

	// �߰� ��ư ���� �� �Ӽ� �ʱ�ȭ
	var addButton = Ti.UI.createButton({
		top : 47,
		title : '�߰�',
		width : 40,
		height : 'auto',
		right : 45
	});

	// ���� ������ �������� �߰��� view ���� �� �Ӽ� �ʱ�ȭ
	var mindviewMiddle = Titanium.UI.createView({
		backgroundColor : '#cacaca',
		top : 0,
		backgroundImage : 'nPMMobile_Image/mindmap_Background4.png',
		width : 'auto'
	});

	// ��ư ���� �� �Ӽ� �ʱ�ȭ
	var child_Button = Ti.UI.createButton({

		color : '#ff0000',
		top : 430,
		title : parenttext,
		width : 185,
		height : 50,
		left : 293

	});

	mindviewMiddle.add(child_Button);

	// �߰���ư�� �̺�Ʈ �ڵ鷯 �ο�(�Է��� ���� ��� ����ǰ� �� ȭ�鿡 �߰��Ǿ� ��Ÿ��)
	addButton.addEventListener('click', function() {
		var param = "action=insert" + "&parentnumber=" + labelParent.objName + "&text=" + txtField.value;
		var xhr = Ti.Network.createHTTPClient();
		xhr.open("POST", servletAddr);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
		xhr.setRequestHeader("Cache-Control", "no-cache, must-revalidate");
		xhr.setRequestHeader("Pragma", "no-cache");
		xhr.send(param);
		xhr.onload = function() {
			saveContent = null;
			alert('�߰��Ϸ�');

		};
	});

	// ���� �����쿡 �� �Ӽ��� �߰�
	mindviewMiddle.add(backButton);
	mindviewMiddle.add(txtField);
	mindviewMiddle.add(addButton);
	mindviewMiddle.add(currentMind);
	mindWin.add(mindviewMiddle);
	mindviewMiddle.add(showMind);

}
