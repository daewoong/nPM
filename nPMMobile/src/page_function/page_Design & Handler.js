// ����� ������ Ȩ������ �ּ� ����
var page_Homepage = Ti.UI.createWebView({

	top : 50,
	url : 'http://solar4.ssu.ac.kr:8080/index.html#slidepanel',
	width : 'auto',
	height : 'auto'
});

//����� nPM_page ��ư ����
var page_Button = Titanium.UI.createButton({
	color : '#000',
	selectedColor : '#fff',
	backgroundImage : 'nPMMobile_Image/page_Icon.png',
	top : 610,
	width : 100,
	height : 100,
	left : 80

});

//����� nPM_page Label ����
var page_Label = Titanium.UI.createLabel({
	color : '#999',
	text : '��������',
	font : {
		fontSize : 25,
		fontFamily : 'Helvetica Neuw'
	},
	left : 87,
	top : 715,
	width : 'auto'
});

// �������� Ŭ���� ��Ÿ���� view(facebook�� ����)
var pageInit = function() {
	
	// face_book�� �α����� �ȵȴٸ�
	if(facebook_Logincheck == false)
	{
		alert("facebook �α��� �ϼ���");
		return;
	}
	
	else
	{
		// �� ������ view�ȿ��� ���ο� view����(facebokk�� ����� ������� �̹��� �����ϱ� ����)
		var image_View = Ti.UI.createView({
	
		backgroundColor : '#808080',
		top : 80,
		backgroundImage : 'nPMMobile_Image/page_Icon.png',
		height:400,
		width : 'auto'
	
		});
	
		// ������ label�� �����ϱ� ���� label 
		var profile = Ti.UI.createLabel({
	
			color : '#ffffff',
			text : '������',
			font : {
				fontSize : 28,
				fontFamily : 'Helvetica Neuw'
			},
			left : 100,
			top : 18,	
			width : 'auto'
	
		});

		// ������ �ٹ̱� ���� label 
		var profile_down = Ti.UI.createLabel({
	
			color : '#ffffff',
			text : '_________________________________________________',
			font : {
				fontSize : 28,
				fontFamily : 'Helvetica Neuw'
			},
			left : 0,
			top : 40,
			width : 'auto'
	
		});
	
		// �̸� label�� �����ϱ� ���� label
		var name = Ti.UI.createLabel({
		
			color : '#ffffff',
			text : '�̸� : ',
			font : {
			fontSize : 23,
			fontFamily : 'Helvetica Neuw'
			},
			left : 100,
			top : 100,
			width : 'auto'
	
		});
	
		// ������� label�� �����ϱ� ���� label
		var birth = Ti.UI.createLabel({
		
			color : '#ffffff',
			text : '������� : ',
			font : {
				fontSize : 23,
				fontFamily : 'Helvetica Neuw'
			},
			left : 100,
			top : 160,
			width : 'auto'
	
		});
	
		// ���� label�� �����ϱ� ���� label
		var mail = Ti.UI.createLabel({
		
			color : '#ffffff',
			text : '����ó: ',
			font : {
				fontSize : 23,
				fontFamily : 'Helvetica Neuw'
			},
			left : 100,
			top : 220,
			width : 'auto'
	
		});
	
		// ���� label�� �����ϱ� ���� label
		var job = Ti.UI.createLabel({
			
			color : '#ffffff',
			text : '���� : ',
			font : {
				fontSize : 23,
				fontFamily : 'Helvetica Neuw'
			},	
			left : 100,
			top : 280,
			width : 'auto'
	
		});
	
		// ��� label�� �����ϱ� ���� label
		var  speck = Ti.UI.createLabel({
	
			color : '#ffffff',
			text : '��� :   nPM ������Ʈ,   ezTrans ������Ʈ',
			font : {
				fontSize : 23,
				fontFamily : 'Helvetica Neuw'
			},
			left : 100,
			top : 340,
			width : 'auto'
	
		});
	

		// facebook���� ���� ���������� �����ͼ� �����ִ� view
		var bottom_View = Ti.UI.createView({
	
			backgroundColor : '#00ced1',
			top : 480,
			width : 'auto'
	
		});
	}
	
	
	// �� label�� view�� �߰�
		bottom_View.add(name);
		bottom_View.add(birth);
		bottom_View.add(mail);
		bottom_View.add(job);
		bottom_View.add(speck);
		bottom_View.add(profile_down);
		bottom_View.add(profile);
		bottom_View.add(profile_down);
		page_Mainview.add(bottom_View);
		page_Mainview.add(back_Home);
		page_Mainview.add(image_View);
		main_Win.add(page_Mainview);
	
	
};

//page_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
page_Button.addEventListener('click', function(e) {
	
	pageInit();  // pageInit() ȣ��
	page_Mainview.show();
	
});

main_Win.add(page_Button);
main_Win.add(page_Label);