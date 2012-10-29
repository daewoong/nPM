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

	if (Titanium.Facebook.loggedIn == false) {
		return;
	}

	else {
		// facebook�� ����� ������ ���� ���� view
		var image_View = Titanium.UI.createView({

			backgroundColor : '#808080',

			top : 80,
			height : 400,
			width : 'auto'

		});

		// token ����
		Ti.API.debug(Titanium.Facebook.accessToken);

		Titanium.Facebook.requestWithGraphPath('me/albums', {
			fields : 'id,name,cover_photo,count,created_time'
		}, 'GET', function(e) {

			if (e.success) {

				Ti.API.debug(e.result);

				if (e.result) {
					var data = JSON.parse(e.result).data;
					for (x in data) {
						Ti.API.debug(JSON.stringify(data[x]));

						var image = Titanium.UI.createImageView({
							image : "https://graph.facebook.com/"
									+ (data[x].cover_photo || 0)
									+ "/picture?access_token="
									+ Ti.Facebook.accessToken,
							top : 0,
							left : 0,
							width : '800',
							height : 'auto'
						});

						if (data[x].name == "Profile Pictures") {
							image_View.add(image);

						}

					}
				}

			}
		});

		// ������ �� ����
		var profile = Ti.UI.createLabel({

			color : '#ffffff', // ����
			text : '������', // �ؽ�Ʈ
			font : { // ���� ��Ÿ��
				fontSize : 28,
				fontFamily : 'Helvetica Neuw'
			},
			left : 100, // ���� ��ġ
			top : 18, // ���� ��ġ
			width : 'auto' // ����

		});

		// ������ ��2 ����
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

		// �̸� ����
		var name = Ti.UI.createLabel({

			color : '#ffffff',
			text : 'id : ' + Ti.Facebook.uid, // facebook�� id�� ������
			font : {
				fontSize : 23,
				fontFamily : 'Helvetica Neuw'
			},
			left : 100,
			top : 100,
			width : 'auto'

		});

		// ���� �� ����
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

		//	���� �� ����
		var mail = Ti.UI.createLabel({

			color : '#ffffff',
			text : '����ó : ',
			font : {
				fontSize : 23,
				fontFamily : 'Helvetica Neuw'
			},
			left : 100,
			top : 220,
			width : 'auto'

		});

		// ���� �� ����
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

		// ��� �� ����
		var speck = Ti.UI.createLabel({

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

		var bottom_View = Ti.UI.createView({

			backgroundColor : '#00ced1',
			top : 480,

			width : 'auto'

		});
	}

	// �� �Ӽ��� bottom_view�� ����
	bottom_View.add(name);
	bottom_View.add(birth);
	bottom_View.add(mail);
	bottom_View.add(job);
	bottom_View.add(speck);
	bottom_View.add(profile_down);
	bottom_View.add(profile);
	bottom_View.add(profile_down);
	
	// �� �Ӽ��� page_MainView�� ����
	page_Mainview.add(bottom_View);
	page_Mainview.add(back_Home);
	Page_Mainview.add(image_View);
	main_Win.add(page_Mainview);

};

//page_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
page_Button.addEventListener('click', function(e) {

	// facebook �α��� ������ ���
	if (Titanium.Facebook.loggedIn == false) {
		alert("facebook �α��� �ϼ���");
		return;
	} // facebook �α��� ���� ���
	else {
		page_Mainview.show();

	}

});

main_Win.add(page_Button);
main_Win.add(page_Label);