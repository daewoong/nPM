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

//page_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
page_Button.addEventListener('click', function(e) {
	/*
	 page_Homepage.addEventListener('load', function(e)
	 {});
	 */
	top_View.show();
	main_Win.add(top_View);

	page_Homepage.show();
	main_Win.add(page_Homepage);
});

main_Win.add(page_Button);
main_Win.add(page_Label);