// ����� nPM Ȩ������ �ּ� ����
var nPM_Homepage = Ti.UI.createWebView({

	top : 50,
	url : 'http://solar4.ssu.ac.kr:8080', // ������ �ּ�
	width : 'auto',
	height : 'auto'
});

//����� nPM ��ư ����
var nPM_Button = Titanium.UI.createButton({
	color : '#000',
	selectedColor : '#fff',
	backgroundImage : 'nPMMobile_Image/nPM_Icon.png',
	top : 250,
	width : 100,
	height : 100,
	left : 80
});

//����� nPM Label ����
var nPM_Label = Titanium.UI.createLabel({
	color : '#999', // Label ���� ����
	text : 'nPM', // Label �̸� ����
	font : {
		fontSize : 25,
		fontFamily : 'Helvetica Neuw'
	}, // Label font ����
	left : 105, // Label ���� ��ġ ����
	top : 355, // Label ���� ��ġ ����
	width : 'auto' // Label �ʺ� �ڵ� ����
});

//nPM_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
nPM_Button.addEventListener('click', function(e) {
	//	nPM_Homepage.addEventListener('load', function(e){  // nPM_Homepage ����

	top_View.show();
	nPM_Homepage.show();

	main_Win.add(top_View);
	main_Win.add(nPM_Homepage);
	// main_Win �Լ��� ��
});

main_Win.add(nPM_Button);
main_Win.add(nPM_Label);