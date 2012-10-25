// ����� nPM_introduce ��ư ����
var introduce_Button = Titanium.UI.createButton({
	color : '#000',
	selectedColor : '#fff',
	backgroundImage : 'nPMMobile_Image/nPM_Logo.png',
	top : 610,
	width : 100,
	height : 100,
	left : 560

});

// ����� nPM_introduce �̹��� ����
var introduce_Image = Titanium.UI.createImageView({

	top : 0,
	width : 'auto',
	//	height:630,
	image : 'nPMMobile_Image/introduce_Image.png'

});

//����� nPM_introduce Label ����
var introduce_Label = Titanium.UI.createLabel({
	color : '#999',
	text : 'nPM �Ұ�',
	font : {
		fontSize : 25,
		fontFamily : 'Helvetica Neuw'
	},
	left : 572,
	top : 715,
	width : 'auto'
});

//introduce_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
introduce_Button.addEventListener('click', function(e) {

	var winExplain = Titanium.UI.createWindow();

	var btnBack = Titanium.UI.createButton({

		top : 12,
		title : '�ڷ�',
		width : 40,
		height : 'auto',
		right : 10
	});

	winExplain.open();
	//	introduceBottom_View.add(btnBack);
	introduce_Image.add(btnBack);

	winExplain.add(introduce_Image);
	//	winExplain.add(introduceBottom_View);

	btnBack.addEventListener('click', function(e) {
		winExplain.close();
		main_Win.open();
	});

});

main_Win.add(introduce_Button);
main_Win.add(introduce_Label);