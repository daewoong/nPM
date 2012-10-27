// ����� nPM facebook Button ����
var facebook_Button = Titanium.Facebook.createLoginButton({
	top : 900,
	left : 550,
	style : Ti.Facebook.BUTTON_STYLE_WIDE

});

// ������ facebook app id���
Ti.Facebook.appid = '195974147201995';
// facebook login �� ���ٱ��� �ο�
Ti.Facebook.permissions = ['publish_stream', 'read_stream', "user_checkins", "publish_checkins", 'create_event'];

// facebook_login ��ư Ŭ���� �̺�Ʈ �߻�
Ti.Facebook.addEventListener('login', function(e) {

	var check = "no";
	var faceBtn = "no";

	if (e.success) {//  login�� �������̶�
		alert('Logged In');
		Titanium.App.Properties.setBool("enableFacebook", true);

		var fbToken = Ti.Facebook.accessToken;
		var fbUid_r = Ti.Facebook.uid;
		// ������� id�� �����ϴ� ����

		var fbUid_r = Ti.UI.createTextField({
			top : 300,
			height : 200,
			width : 200,
			value : 1,
			textAlign : 'center',
			font : {
				fontSize : 40,
				fontStyle : 'italic'
			},
		});
		okBtn = "ok";

	} else if (e.error) {
		alert(e.error);
		Titanium.App.Properties.setBool("enableFacebook", false);
	} else if (e.cancelled) {
		alert("Canceled");
		okBtn = "ok";
		Titanium.App.Properties.setBool("enableFacebook", false);
	}
});

// facebook logout�� �� �߻��ϴ� �̺�Ʈ
Ti.Facebook.addEventListener('logout', function(e) {
	if (e.success) {
		Titanium.App.Properties.setBool("enableFacebook", false);
		alert('Logged Out');
	} else if (e.error) {
		alert(e.error);
	}
});

// facebook_login �Լ� ����
function login() {
	Ti.facebook.authorize()
}

// facebook_logout �Լ� ����
function logout() {
	Ti.facebook.logout()
}

main_Win.add(facebook_Button);