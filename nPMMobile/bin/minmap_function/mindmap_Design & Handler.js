var mindmap_Win = Titanium.UI.createWindow();

mindmap_Win.setBackgroundImage('nPMMobile_Image/mindmap_Background.png');

// mindmap_Button�� ������ �̺�Ʈ �ڵ鷯�� �����Ѵ�.
mindmap_Button.addEventListener('click', function(e)// mind ��ư Ŭ���Ͽ��� ��
{
	// main_Win.close();
	mindmap_Win.open();
	// mindmap_Win �����ش�.
	mindMapInit();
	// mindMapInit()�� ȣ��

});

// ����� nPM_project Ȩ������ �ּ� ����
var mindmap_Homepage = Ti.UI.createWebView({

	top : 50,
	url : 'http://solar4.ssu.ac.kr/mindmap.html',
	width : 'auto',
	height : 'auto'
});

//����� nPM_mindmap ��ư ����
var mindmap_Button = Titanium.UI.createButton({

	color : '#000',
	selectedColor : '#fff',
	backgroundImage : 'nPMMobile_Image/mind_Icon.png',
	top : 250,
	width : 100,
	height : 100,
	left : 560
	//	right:200

});


//����� nPM_mindmap Label ����
var mindmap_Label = Titanium.UI.createLabel({
	color : '#999',
	text : '���ε��',
	font : {
		fontSize : 25,
		fontFamily : 'Helvetica Neuw'
	},
	left : 565,
	top : 355,
	width : 'auto'
});

mindmap_Button.addEventListener('click', function(e)// mind ��ư Ŭ���Ͽ��� ��
		{
			//	main_Win.close();
			mindmap_Win.open();
			// mindmap_Win �����ش�.
			mindMapInit();
			// mindMapInit()�� ȣ��

});

//main_Win�� ��ư �߰�
main_Win.add(mindmap_Button);

// main_Win�� Label �߰�
main_Win.add(mindmap_Label);
