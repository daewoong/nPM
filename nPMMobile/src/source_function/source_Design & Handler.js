
var github_Homepage = Ti.UI.createWebView({

	top : 50,
	url : 'http://github.com/nPMbynPM/nPM',
	width : 'auto',
	height : 'auto'
});


//����� nPM_source ��ư ����
var source_Button = Titanium.UI.createButton({

	color : '#000',
	selectedColor : '#fff',
	backgroundImage : 'nPMMobile_Image/source_Icon.png',
	top : 430,
	width : 100,
	height : 100,
	left : 310

});

// ����� nPM_source Label ����
var source_Label = Titanium.UI.createLabel({
	color : '#999',
	text : '�ҽ�����',
	font : {
		fontSize : 25,
		fontFamily : 'Helvetica Neuw'
	},
	left : 318,
	top : 535,
	width : 'auto'
});

//source_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
source_Button.addEventListener('click', function(e) {
	/*
	 github_Homepage.addEventListener('load', function(e)
	 {});
	 */
	top_View.show();
	main_Win.add(top_View);

	github_Homepage.show();
	main_Win.add(github_Homepage);
});

main_Win.add(source_Button);
main_Win.add(source_Label);