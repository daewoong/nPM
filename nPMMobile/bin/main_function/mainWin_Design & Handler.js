//window �� view ����
Titanium.UI.setBackgroundColor('#FEDCDC');
// ƼŸ�� �ùķ������� ������ �ʱ�
var main_Win = Titanium.UI.createWindow();
// main ������ ��

// main �������� ���ȭ�� ����(�̹��� ��)
main_Win.setBackgroundImage('nPMMobile_Image/background_Icon.png');
var facebook_Logincheck = false;    // facebook �α��� üũ ���� ����

// facebook�� �α��� ���� ���� ����� app�� �������� ���� label ����
var label_uid = Ti.UI.createLabel({
	text : Ti.Facebook.uid,
	font : {
		fontSize : 14
	},
	height : 'auto',
	top : 10,
	textAlign : 'center'
});



// ����� ��ũ �ּҷ� �̵���, ���� �������� ���ư��� ���� ������ ��ư
var back_Home = Ti.UI.createButton({
	top : 12,
	title : '�ڷ�',
	width : 40,
	height : 'auto',
	right : 10

});

// ����� ��ũ�ּ��� view���� ���ο� view �߰�(�ڷΰ��� ��ư ������ ����)
var top_View = Ti.UI.createView({

	top : 0,
	backgroundColor : '#a9a9a9',
	width : 'auto',
	height : 'auto'
});


// top_view���� nPM�ΰ� �����ϱ� ���� ��ư
var top_button = Ti.UI.createButton({
	
	backgroundImage : 'nPMMobile_Image/nPM_Logo.png',
	top : 7,
		width : 45,
		height : 50,
		left : 10
		
	});

// �� ������ �����ϱ� ���� view ����
var page_Mainview = Ti.UI.createView({
	
	backgroundColor : '#808080',
	top : 0,
	width : 'auto'

});


back_Home.addEventListener('click', function() {

	nPM_Homepage.hide();
	project_Homepage.hide();
	mindmap_Homepage.hide();
	gantt_Homepage.hide();
	github_Homepage.hide();
	board_Homepage.hide();
	page_Homepage.hide();
	page_Mainview.hide();
	top_View.hide();

});

top_View.add(back_Home);
top_View.add(top_button);
