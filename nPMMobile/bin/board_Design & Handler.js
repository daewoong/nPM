// ����� nPM_board Ȩ������ �ּ� ����
var board_Homepage = Ti.UI.createWebView({

	top : 50,
	url : 'http://solar4.ssu.ac.kr/xe/freeboard',
	width : 'auto',
	height : 'auto'
});

//����� nPM_board ��ư ����
var board_Button = Titanium.UI.createButton({

	color : '#000',
	selectedColor : '#fff',
	backgroundImage : 'nPMMobile_Image/board_Icon.png',
	top : 430,
	width : 100,
	height : 100,
	left : 560,

});

//����� nPM_board Label ����
var board_Label = Titanium.UI.createLabel({
	color : '#999',
	text : '�Խ���',
	font : {
		fontSize : 25,
		fontFamily : 'Helvetica Neuw'
	},
	left : 580,
	top : 535,
	width : 'auto'
});

//board_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
board_Button.addEventListener('click', function(e) {
	/*
	 board_Homepage.addEventListener('load', function(e)
	 {});
	 */

	top_View.show();
	main_Win.add(top_View);

	board_Homepage.show();
	main_Win.add(board_Homepage);
});

main_Win.add(board_Button);
main_Win.add(board_Label);