// ����� nPM Ȩ������ �ּ� ����
var project_Homepage = Ti.UI.createWebView({
	//	url:'http://solar4.ssu.ac.kr:8080/m_npm.html',
	top : 50,
	url : 'http://solar4.ssu.ac.kr:8080/project_Management.html',
	width : 'auto',
	height : 'auto'
});

//����� nPM_project ��ư ����
var project_Button = Titanium.UI.createButton({
	color : '#000', // ��ư ����
	selectedColor : '#fff', // ��ư Ŭ������ �� ����
	backgroundImage : 'nPMMobile_Image/project_Icon.png', // ��ư �̹���
	top : 250, // ��ư ���� ����
	width : 100, // ��ư �ʺ�
	height : 100, // ��ư ����
	left : 310 // ��ư ���� ���� ��ġ

});

//����� nPM_project Label ����
var project_Label = Titanium.UI.createLabel({
	color : '#999',
	text : '������Ʈ ����',
	font : {
		fontSize : 25,
		fontFamily : 'Helvetica Neuw'
	},
	left : 302,
	top : 355,
	width : 'auto'
});

//project_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
project_Button.addEventListener('click', function(e) {
	/*
	 project_Homepage.addEventListener('load', function(e)
	 {});
	 */
	top_View.show();
	project_Homepage.show();

	main_Win.add(top_View);
	main_Win.add(project_Homepage);
});

main_Win.add(project_Button);
main_Win.add(project_Label);