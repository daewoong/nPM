var okBtn = "";
// facebook ���� ���� ����

//window �� view ����
Titanium.UI.setBackgroundColor('#FEDCDC');
// ƼŸ�� �ùķ������� ������ �ʱ�
var main_Win = Titanium.UI.createWindow();
// main ������ ��

//  main �������� ���ȭ�� ����(�̹��� ��)
main_Win.setBackgroundImage('nPMMobile_Image/background_Icon.png');

var back_Home = Ti.UI.createButton({
	top : 12,
	title : '�ڷ�',
	width : 40,
	height : 'auto',
	right : 10

});

var top_View = Ti.UI.createView({

	top : 0,
	backgroundColor : '#a9a9a9',
	width : 'auto',
	height : 'auto'
});

back_Home.addEventListener('click', function() {

	nPM_Homepage.hide();
	project_Homepage.hide();
	mindmap_Homepage.hide();
	gantt_Homepage.hide();
	github_Homepage.hide();
	board_Homepage.hide();
	page_Homepage.hide();
	top_View.hide();

});

// ����� nPM Ȩ������ �ּ� ����
var nPM_Homepage = Ti.UI.createWebView({

	top : 50,
	url : 'http://solar4.ssu.ac.kr:8080', // ������ �ּ�
	width : 'auto',
	height : 'auto'
});

top_View.add(back_Home);

// ����� nPM Ȩ������ �ּ� ����
var project_Homepage = Ti.UI.createWebView({
	//	url:'http://solar4.ssu.ac.kr:8080/m_npm.html',
	top : 50,
	url : 'http://solar4.ssu.ac.kr:8080/project_Management.html',
	width : 'auto',
	height : 'auto'
});

top_View.add(back_Home);

// ����� nPM_project Ȩ������ �ּ� ����
var mindmap_Homepage = Ti.UI.createWebView({

	top : 50,
	url : 'http://solar4.ssu.ac.kr/mindmap.html',
	width : 'auto',
	height : 'auto'
});

top_View.add(back_Home);

// ����� nPM_gantt Ȩ������ �ּ� ����
var gantt_Homepage = Ti.UI.createWebView({

	top : 50,
	url : 'http://solar4.ssu.ac.kr:8080/m_gantt.html',
	width : 'auto',
	height : 'auto'

});

top_View.add(back_Home);

// ����� nPM_git_hurb Ȩ������ �ּ� ����
var github_Homepage = Ti.UI.createWebView({

	top : 50,
	url : 'http://github.com/nPMbynPM/nPM',
	width : 'auto',
	height : 'auto'
});

top_View.add(back_Home);

// ����� nPM_board Ȩ������ �ּ� ����
var board_Homepage = Ti.UI.createWebView({

	top : 50,
	url : 'http://solar4.ssu.ac.kr/xe/freeboard',
	width : 'auto',
	height : 'auto'
});

top_View.add(back_Home);

var page_Homepage = Ti.UI.createWebView({

	top : 50,
	url : 'http://solar4.ssu.ac.kr:8080/index.html#slidepanel',
	width : 'auto',
	height : 'auto'
});
top_View.add(back_Home);

// ����� nPM ��ư ����
var nPM_Button = Titanium.UI.createButton({
	color : '#000',
	selectedColor : '#fff',
	backgroundImage : 'nPMMobile_Image/nPM_Icon.png',
	top : 250,
	width : 100,
	height : 100,
	left : 80
});

// ����� nPM_project ��ư ����
var project_Button = Titanium.UI.createButton({
	color : '#000', // ��ư ����
	selectedColor : '#fff', // ��ư Ŭ������ �� ����
	backgroundImage : 'nPMMobile_Image/project_Icon.png', // ��ư �̹���
	top : 250, // ��ư ���� ����
	width : 100, // ��ư �ʺ�
	height : 100, // ��ư ����
	left : 310 // ��ư ���� ���� ��ġ

});

// ����� nPM_mindmap ��ư ����
var mindmap_Button = Titanium.UI.createButton({

	color : '#000',
	selectedColor : '#fff',
	backgroundImage : 'nPMMobile_Image/mind_Icon.png',
	top : 250,
	width : 100,
	height : 100,
	left : 560
	//	right:200

});

// ����� nPM_gantt ��ư ����
var gantt_Button = Titanium.UI.createButton({

	color : '#000',
	selectedColor : '#fff',
	backgroundImage : 'nPMMobile_Image/gantt_Icon.png',
	top : 430,
	width : 100,
	height : 100,
	left : 80
	//	right:200

});

// ����� nPM_source ��ư ����
var source_Button = Titanium.UI.createButton({

	color : '#000',
	selectedColor : '#fff',
	backgroundImage : 'nPMMobile_Image/source_Icon.png',
	top : 430,
	width : 100,
	height : 100,
	left : 310

});

// ����� nPM_board ��ư ����
var board_Button = Titanium.UI.createButton({

	color : '#000',
	selectedColor : '#fff',
	backgroundImage : 'nPMMobile_Image/board_Icon.png',
	top : 430,
	width : 100,
	height : 100,
	left : 560,

});

// ����� nPM_page ��ư ����
var page_Button = Titanium.UI.createButton({
	color : '#000',
	selectedColor : '#fff',
	backgroundImage : 'nPMMobile_Image/page_Icon.png',
	top : 610,
	width : 100,
	height : 100,
	left : 80

});

// ����� nPM_alarm ��ư ����
var alarm_Button = Titanium.UI.createButton({
	color : '#000',
	selectedColor : '#fff',
	backgroundImage : 'nPMMobile_Image/alarm_Icon.png',
	top : 610,
	width : 100,
	height : 100,
	left : 310

});

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

// ����� nPM_alarm �̹��� ����
var alarm_Image = Titanium.UI.createImageView({

	top : 0, // �̹��� ���� ��ġ
	width : 'auto',
	image : 'nPMMobile_Image/alarm_Image.png' // �̹��� ����

});

// ����� nPM_introduce �̹��� ����
var introduce_Image = Titanium.UI.createImageView({

	top : 0,
	width : 'auto',
	//	height:630,
	image : 'nPMMobile_Image/introduce_Image.png'

});

// ipad�� facebook �����

// ����� nPM facebook Button ����
var facebook_Button = Titanium.Facebook.createLoginButton({
	top : 900,
	left : 550,
	style : Ti.Facebook.BUTTON_STYLE_WIDE

});

// ����� nPM Label ����
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

// ����� nPM_project Label ����
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

// ����� nPM_mindmap Label ����
var mindmap_Label = Titanium.UI.createLabel({
	color : '#999',
	text : '���ε��',
	font : {
		fontSize : 25,
		fontFamily : 'Helvetica Neuw'
	},
	left : 565,
	top : 355,
	width : 'auto'
});

// ����� nPM_gantt Label ����
var gantt_Label = Titanium.UI.createLabel({
	color : '#999',
	text : '��Ʈ��Ʈ',
	font : {
		fontSize : 25,
		fontFamily : 'Helvetica Neuw'
	},
	left : 90,
	top : 535,
	width : 'auto'
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

// ����� nPM_board Label ����
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

// ����� nPM_page Label ����
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

// ����� nPM_alarm Label ����
var alarm_Label = Titanium.UI.createLabel({
	color : '#999',
	text : 'nPM ��������',
	font : {
		fontSize : 25,
		fontFamily : 'Helvetica Neuw'
	},
	left : 290,
	top : 715,
	width : 'auto'
});

// ����� nPM_introduce Label ����
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

// ������ facebook app id���
Ti.Facebook.appid = '195974147201995';
// facebook login �� ���ٱ��� �ο�
Ti.Facebook.permissions = ['publish_stream', 'read_stream', "user_checkins", "publish_checkins", 'create_event'];

// facebook_login ��ư Ŭ���� �̺�Ʈ �߻�
Ti.Facebook.addEventListener('login', function(e) {

	var check = "no";
	var faceBtn = "no"

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

// nPM_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
nPM_Button.addEventListener('click', function(e) {
	//	nPM_Homepage.addEventListener('load', function(e){  // nPM_Homepage ����

	top_View.show();
	nPM_Homepage.show();

	main_Win.add(top_View);
	main_Win.add(nPM_Homepage);
	// main_Win �Լ��� ��
});
// project_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
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

// gantt_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
gantt_Button.addEventListener('click', function(e) {
	/*
	 gantt_Homepage.addEventListener('load', function(e)
	 {});
	 */
	top_View.show();
	main_Win.add(top_View);

	gantt_Homepage.show();
	main_Win.add(gantt_Homepage);
});

// source_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
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

// board_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
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

// page_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
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

// alarm_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
alarm_Button.addEventListener('click', function(e) {

	var winAlarm = Titanium.UI.createWindow();
	// ���ο� window ����
	var btnBack = Titanium.UI.createButton({// main_Win���� ���ư��� ���� ��ư ����

		top : 900,
		title : '�ڷ�',
		width : 60,
		height : 'auto',
		right : 2
	});

	winAlarm.open();
	// ���ο� window ����
	//	alarmBottom_View.add(btnBack);  // ���ο� window�� btnBack button �߰�
	winAlarm.add(alarm_Image);
	alarm_Image.add(btnBack);
	//	winAlarm.add(alarmBottom_View);

	btnBack.addEventListener('click', function(e)// btnBack button Ŭ���ϸ�
	{
		winAlarm.close();
		// ���ο� window ����
		main_Win.open();
		// main_Win���� ���ư�
	});

});

// introduce_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
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

// main_Win�� ��ư �߰�
main_Win.add(nPM_Button);
main_Win.add(project_Button);
main_Win.add(mindmap_Button);
main_Win.add(gantt_Button);
main_Win.add(source_Button);
main_Win.add(board_Button);
main_Win.add(page_Button);
main_Win.add(alarm_Button);
main_Win.add(introduce_Button);
main_Win.add(facebook_Button);

// main_Win�� Label �߰�
main_Win.add(nPM_Label);
main_Win.add(project_Label);
main_Win.add(mindmap_Label);
main_Win.add(gantt_Label);
main_Win.add(source_Label);
main_Win.add(board_Label);
main_Win.add(page_Label);
main_Win.add(alarm_Label);
main_Win.add(introduce_Label);

// ������ main_Win �ùķ����Ϳ� ���
main_Win.open();

///////////////////////////////////////////////////////// ���ε� �� ////////////////////////////////////////////////////////////

// ���ε���� ���� ���ο� window�� ����
var mindmap_Win = Titanium.UI.createWindow();

mindmap_Win.setBackgroundImage('nPMMobile_Image/mindmap_Background.png');

// mindmap_Button�� ������ �̺�Ʈ �ڵ鷯�� �����Ѵ�.
mindmap_Button.addEventListener('click', function(e)// mind ��ư Ŭ���Ͽ��� ��
{
	//	main_Win.close();
	mindmap_Win.open();
	// mindmap_Win �����ش�.
	mindMapInit();
	// mindMapInit()�� ȣ��

});

var mindviewMiddle = Titanium.UI.createView({// ���ο� window�� view����

	backgroundColor : '#cacaca', // view ������
	top : 0, // view �����
	width : 'auto', // view �ʺ�
	backgroundImage : 'nPMMobile_Image/mindmap_Background.png' // view��� �̹���
});

var checkHeight = 135;
var numOftext = 0;
var scopeData = 0;
var checkLine = 0;

var saveContent = "";

//���� �ּ�
var servletAddr = 'http://solar4.ssu.ac.kr:8080/mobileServlet';

// ��� ����Ǿ� �ִ� mindmap node(�θ���, �ڽĳ��)ȣ���ϴ� �Լ�
var mindMapInit = function() {

	// �����κ��� data�� �������� ���� �۾�
	var param = "action=init";
	var xhr = Ti.Network.createHTTPClient();

	xhr.open("POST", servletAddr);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
	xhr.setRequestHeader("Cache-Control", "no-cache, must-revalidate");
	xhr.setRequestHeader("Pragma", "no-cache");
	xhr.send(param);
	xhr.onload = function() {
		var doc = this.responseXML.documentElement;
		// ������ sml ���� ����
		var id = doc.getElementsByTagName('id');

		// ���ο� node ������ ��Ÿ�� ��ġ ���� ����
		var height = 220;
		// var check_side=68;
		var check_side = 10;
		//	var check_height=135;
		var check_height = 100;
		//	var plus_side=225;
		var plus_side = 20;
		var node_Count = 0;
		var height_Count = 0;
		var upgrade_count = 0;

		var circleSize = 130;
		var circleX = 120;
		var circleY = 0;
		var circle = [];

		var num = 0;
		var num2 = 0;

		var label = Titanium.UI.createLabel({
			text : 'Click circle repeatedly to animate or drag the circle',
			bottom : 80,
			color : '#555',
			font : {
				fontSize : 12,
				fontFamily : 'Helvetica Neue'
			},
			textAlign : 'center',
			height : 'auto',
			width : 'auto'
		});

		//id�� ������ ���� �Ľ� ����
		for (var i = 0; i < id.length; i++) {
			var currentItem = id.item(i);
			var mytext = currentItem.getElementsByTagName('mytext').item(0).text;
			var mynumber = currentItem.getElementsByTagName('number').item(0).text;

			num = i;
			num2 = i + 1;

			switch(i) {
				case 0:

					circle[num] = Titanium.UI.createView({
						height : circleSize,
						width : circleSize,
						anchorPoint : {
							x : (circleSize / 2),
							y : (circleSize / 2)
						},
						borderRadius : (circleSize / 2),
						backgroundColor : '#336699',
						opacity : 0.3,
						left : check_side + node_Count * plus_side,
						top : check_height + height
					});

					circle[num2] = Titanium.UI.createView({
						height : circleSize,
						width : circleSize,
						anchorPoint : {
							x : (circleSize / 2),
							y : (circleSize / 2)
						},
						borderRadius : (circleSize / 2),
						backgroundColor : '#e6e6fa',
						top : check_height + height,
						left : check_side + node_Count * plus_side,
					});

					circle[num].addEventListener('touchmove', function(e) {
						circle[num].setTop(e.y + circleY - (circleSize / 2));
						circle[num].setLeft(e.x + circleX - (circleSize / 2));
					});
					/*
					 circle[num2].addEventListener('touchend', function(e)
					 {

					 circleY = circle[i].getTop();
					 circleX = circle[i].getLeft();

					 circle[num2].setTop(circle[num].getTop());
					 circle[num2].setLeft(circle[num].getLeft());
					 });
					 */
					circle[num].addEventListener('touchmove', function(e) {
						label.setLeft(e.x);
						label.setTop(e.y);
					});

					// ��ư ���� �� ��ư �Ӽ� �ʱ�ȭ
					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						//	top:check_height + height,
						top : 40,
						objName : mynumber,
						title : mytext,
						width : 120,
						height : 50,
						//		left:check_side + node_Count*plus_side
					});

					//		mindviewMiddle.add(circle);
					//		mindviewMiddle.add(circle2);
					circle[num].add(parentNode_Button);
					circle[num2].add(parentNode_Button);
					//		mindviewMiddle.add(parentNode_Button);

					// mind ��ư Ŭ���Ͽ��� �� �̺�Ʈ �ڵ鷯 ȣ��
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = this.title + "  -->  "// ���� Ŭ���� ����� �̸� ����
						mindmapAdd(this.objName, this.title);
						// mindmapAdd �Լ� ȣ��
					});

					mindmap_Win.add(circle[num]);
					mindmap_Win.add(circle[num2]);

					break;
			}
		}

		//////////////// �߰� ��� ////////////////////

		/*

		circle[i] = Titanium.UI.createView({
		height:circleSize,
		width:circleSize,
		anchorPoint:{x:(circleSize/2),y:(circleSize/2)},
		borderRadius:(circleSize/2),
		backgroundColor:'#336699',
		opacity:0.3,
		left:check_side + node_Count*plus_side,
		top:check_height + height
		});

		var circle[i+1] = Titanium.UI.createView({
		height:circleSize,
		width:circleSize,
		anchorPoint:{x:(circleSize/2),y:(circleSize/2)},
		borderRadius:(circleSize/2),
		backgroundColor:'#e6e6fa',
		top:check_height + height,
		left:check_side + node_Count*plus_side,
		});

		circle2.addEventListener('touchmove', function(e)
		{
		circle.setTop(e.y + circleY - (circleSize/2));
		circle.setLeft(e.x + circleX - (circleSize/2));
		});

		circle2.addEventListener('touchend', function(e)
		{
		circleY = circle.getTop();
		circleX = circle.getLeft();

		circle2.setTop(circle.getTop());
		circle2.setLeft(circle.getLeft());
		});

		circle.addEventListener('touchmove', function(e)
		{
		label.setLeft(e.x);
		label.setTop(e.y);
		});

		// ��ư ���� �� ��ư �Ӽ� �ʱ�ȭ
		var parentNode_Button = Ti.UI.createButton({

		color: '#000',
		//	top:check_height + height,
		top:40,
		objName:mynumber,
		title:mytext,
		width:120,
		height:50,
		//		left:check_side + node_Count*plus_side
		});

		//		mindviewMiddle.add(circle);
		//		mindviewMiddle.add(circle2);
		circle.add(parentNode_Button);
		circle2.add(parentNode_Button);
		//		mindviewMiddle.add(parentNode_Button);

		// mind ��ư Ŭ���Ͽ��� �� �̺�Ʈ �ڵ鷯 ȣ��
		parentNode_Button.addEventListener('click', function(e) {

		saveContent = this.title + "  -->  "  // ���� Ŭ���� ����� �̸� ����
		mindmapAdd(this.objName, this.title); // mindmapAdd �Լ� ȣ��
		});

		mindmap_Win.add(circle[num]);
		mindmap_Win.add(circle[num2]);

		break;
		case 1:
		var circle = Titanium.UI.createView({
		height:circleSize,
		width:circleSize,
		anchorPoint:{x:(circleSize/2),y:(circleSize/2)},
		borderRadius:(circleSize/2),
		backgroundColor:'#336699',
		opacity:0.3,
		left:check_side + node_Count*plus_side,
		top:check_height + height
		});

		var circle2 = Titanium.UI.createView({
		height:circleSize,
		width:circleSize,
		anchorPoint:{x:(circleSize/2),y:(circleSize/2)},
		borderRadius:(circleSize/2),
		backgroundColor:'#e6e6fa',
		top:check_height + height,
		left:check_side + node_Count*plus_side,
		});

		circle2.addEventListener('touchmove', function(e)
		{
		circle.setTop(e.y + circleY - (circleSize/2));
		circle.setLeft(e.x + circleX - (circleSize/2));
		});

		circle2.addEventListener('touchend', function(e)
		{
		circleY = circle.getTop();
		circleX = circle.getLeft();

		circle2.setTop(circle.getTop());
		circle2.setLeft(circle.getLeft());
		});

		circle.addEventListener('touchmove', function(e)
		{
		label.setLeft(e.x);
		label.setTop(e.y);
		});

		// ��ư ���� �� ��ư �Ӽ� �ʱ�ȭ
		var parentNode_Button = Ti.UI.createButton({

		color: '#000',
		//	top:check_height + height,
		top:40,
		objName:mynumber,
		title:mytext,
		width:120,
		height:50,
		//		left:check_side + node_Count*plus_side
		});

		//		mindviewMiddle.add(circle);
		//		mindviewMiddle.add(circle2);
		circle.add(parentNode_Button);
		circle2.add(parentNode_Button);
		//		mindviewMiddle.add(parentNode_Button);

		// mind ��ư Ŭ���Ͽ��� �� �̺�Ʈ �ڵ鷯 ȣ��
		parentNode_Button.addEventListener('click', function(e) {

		saveContent = this.title + "  -->  "  // ���� Ŭ���� ����� �̸� ����
		mindmapAdd(this.objName, this.title); // mindmapAdd �Լ� ȣ��
		});

		break;
		case 2:
		var circle = Titanium.UI.createView({
		height:circleSize,
		width:circleSize,
		anchorPoint:{x:(circleSize/2),y:(circleSize/2)},
		borderRadius:(circleSize/2),
		backgroundColor:'#336699',
		opacity:0.3,
		left:check_side + node_Count*plus_side,
		top:check_height + height
		});

		var circle2 = Titanium.UI.createView({
		height:circleSize,
		width:circleSize,
		anchorPoint:{x:(circleSize/2),y:(circleSize/2)},
		borderRadius:(circleSize/2),
		backgroundColor:'#e6e6fa',
		top:check_height + height,
		left:check_side + node_Count*plus_side,
		});

		circle2.addEventListener('touchmove', function(e)
		{
		circle.setTop(e.y + circleY - (circleSize/2));
		circle.setLeft(e.x + circleX - (circleSize/2));
		});

		circle2.addEventListener('touchend', function(e)
		{
		circleY = circle.getTop();
		circleX = circle.getLeft();

		circle2.setTop(circle.getTop());
		circle2.setLeft(circle.getLeft());
		});

		circle.addEventListener('touchmove', function(e)
		{
		label.setLeft(e.x);
		label.setTop(e.y);
		});

		// ��ư ���� �� ��ư �Ӽ� �ʱ�ȭ
		var parentNode_Button = Ti.UI.createButton({

		color: '#000',
		//	top:check_height + height,
		top:40,
		objName:mynumber,
		title:mytext,
		width:120,
		height:50,
		//		left:check_side + node_Count*plus_side
		});

		//		mindviewMiddle.add(circle);
		//		mindviewMiddle.add(circle2);
		circle.add(parentNode_Button);
		circle2.add(parentNode_Button);
		//		mindviewMiddle.add(parentNode_Button);

		// mind ��ư Ŭ���Ͽ��� �� �̺�Ʈ �ڵ鷯 ȣ��
		parentNode_Button.addEventListener('click', function(e) {

		saveContent = this.title + "  -->  "  // ���� Ŭ���� ����� �̸� ����
		mindmapAdd(this.objName, this.title); // mindmapAdd �Լ� ȣ��
		});

		break;

		*/

		// id�� ������ 0�̶��
		/*
		if(i==0){

		// ��ư ���� �� ��ư �Ӽ� �ʱ�ȭ
		var parentNode_Button = Ti.UI.createButton({

		color: '#000',
		top:check_height + height,
		objName:mynumber,
		title:mytext,
		width:185,
		height:50,
		left:check_side + node_Count*plus_side
		});

		mindviewMiddle.add(parentNode_Button);

		// mind ��ư Ŭ���Ͽ��� �� �̺�Ʈ �ڵ鷯 ȣ��
		parentNode_Button.addEventListener('click', function(e) {

		saveContent = this.title + "  -->  "  // ���� Ŭ���� ����� �̸� ����
		mindmapAdd(this.objName, this.title); // mindmapAdd �Լ� ȣ��
		});
		}
		*/
		// ���ٿ� 3���� ��带 ǥ���ϱ� ���� 3���� �ϼ��Ǹ� �� �����ٷ� ����
		/*
		else if(i%3==0){

		var circle3 = Titanium.UI.createView({
		height:circleSize,
		width:circleSize,
		anchorPoint:{x:(circleSize/2),y:(circleSize/2)},
		borderRadius:(circleSize/2),
		backgroundColor:'#336699',
		opacity:0.3,
		top:check_height + height_Count*check_height + height,
		left:check_side + node_Count*plus_side
		});

		var circle4 = Titanium.UI.createView({
		height:circleSize,
		width:circleSize,
		anchorPoint:{x:(circleSize/2),y:(circleSize/2)},
		borderRadius:(circleSize/2),
		backgroundColor:'#e6e6fa',
		top:check_height + height_Count*check_height + height,
		left:check_side + node_Count*plus_side
		});

		circle4.addEventListener('touchmove', function(e)
		{
		circle3.setTop(e.y + circleY - (circleSize/2));
		circle3.setLeft(e.x + circleX - (circleSize/2));
		});

		circle4.addEventListener('touchend', function(e)
		{
		circleY = circle3.getTop();
		circleX = circle3.getLeft();

		circle4.setTop(circle3.getTop());
		circle4.setLeft(circle3.getLeft());
		});

		circle3.addEventListener('touchmove', function(e)
		{
		label.setLeft(e.x);
		label.setTop(e.y);
		});

		height_Count++;
		node_Count = 0;

		var parentNode_Button = Ti.UI.createButton({

		color: '#000',
		//	top:check_height + height_Count*check_height + height,
		objName:mynumber,
		top:40,
		title:mytext,
		width:120,
		height:50,
		//	left:check_side + node_Count*plus_side
		});

		//		mindviewMiddle.add(parentNode_Button);

		circle3.add(parentNode_Button);
		circle4.add(parentNode_Button);

		parentNode_Button.addEventListener('click', function(e) {

		saveContent = this.title + "  -->  "
		mindmapAdd(this.objName, this.title);
		});
		}
		// ó�� ��� ������ �ƴϰ� 2��° ���� 2��° ������ ������ ��
		else if(i%3!=0 & node_Count!=0){

		var parentNode_Button = Ti.UI.createButton({

		color: '#000',
		top:check_height + height_Count*check_height +  height,
		objName:mynumber,
		title:mytext,
		width:185,
		height:50,
		left:check_side + node_Count*plus_side
		});

		mindviewMiddle.add(parentNode_Button);

		parentNode_Button.addEventListener('click', function(e) {

		saveContent = this.title + "  -->  "
		mindmapAdd(this.objName, this.title);
		});

		}
		// ���� 3���� ��찡 �ƴ� ��
		else{
		node_Count = upgrade_count;

		var parentNode_Button = Ti.UI.createButton({

		color: '#000',
		top:check_height  + height,
		objName:mynumber,
		title:mytext,
		width:185,
		height:50,
		left:check_side + node_Count*plus_side
		});

		//			mindviewMiddle.add(parentNode_Button);

		parentNode_Button.addEventListener('click', function(e) {

		saveContent = this.title + "  -->  "
		mindmapAdd(this.objName, this.title);
		});
		}

		node_Count++;
		upgrade_count++;

		}
		*/
		// ��ư ���� �� �Ӽ� �ʱ�ȭ
		var useMind = Ti.UI.createButton({
			top : 47,
			title : '����',
			width : 40,
			height : 'auto',
			right : 45
		});

		// ��ư ���� �� �Ӽ� �ʱ�ȭ
		var btnBack = Titanium.UI.createButton({

			title : '�ڷ�',
			width : 40,
			height : 'auto',
			right : 2,
			top : 47

		});

		// ���� ��ư�� �̺�Ʈ �ڵ鷯 �ο�
		useMind.addEventListener('click', function(e) {
			alert('���ϴ� ��带 Ŭ���ϼ���!');
		});

		// �ڿ� ��ư�� �̺�Ʈ �ڵ鷯 �ο�
		btnBack.addEventListener('click', function(e) {
			mindmap_Win.close();
			main_Win.open();
			/*
			 circle[num].hide();
			 circle[num2].hide();
			 circle3.hide();
			 circle4.hide();
			 */
			for ( i = 0; i < num; i++) {
				circle[i].hide();
			}
		});
		// ���� �����쿡 �Ӽ� �߰���
		//		mindviewMiddle.add(btnBack);
		//		mindviewMiddle.add(useMind);
		/*
		 mindmap_Win.add(circle);
		 mindmap_Win.add(circle2);
		 mindmap_Win.add(circle3);
		 mindmap_Win.add(circle4);
		 mindmap_Win.add(btnBack);
		 mindmap_Win.add(useMind);
		 mindmap_Win.add(label);

		 */
	}
	//	mindmap_Win.add(mindviewMiddle);
};

//�ڽĳ�带 Ŭ���Ͽ��� ���� ���ο� window
var mindmapAdd = function(parentnumber, parenttext) {// Ŭ������ �� ���ο� ������ ����� �Լ�
	var mindWin = Ti.UI.createWindow();
	// ���ο� window ����

	mindWin.title = parenttext;
	// �Լ��� �Ű��������� ����
	mindWin.open();

	// �� ���� �� �Ӽ� �ʱ�ȭ
	var labelParent = Ti.UI.createLabel({

		top : 30,
		color : '#000',
		width : 'auto',
		height : 'auto',
		text : parenttext,
		textAlign : 'center',
		font : {
			fontSize : 30,
			fontStyle : 'italic'
		},
		objName : parentnumber
	});

	// �ڷ� ��ư ���� �� �Ӽ� �ʱ�ȭ
	var backButton = Ti.UI.createButton({
		saveContent : null,
		title : '�ڷ�',
		width : 40,
		height : 'auto',
		right : 2,
		top : 47
	});

	// �ڷ� ��ư�� �̺�Ʈ �ڵ鷯 �ο�
	backButton.addEventListener('click', function() {
		mindWin.close();
		// ���� open���� window �����
	});

	//�߰� ��ư ���� �� �Ӽ� �ʱ�ȭ
	var addButton = Ti.UI.createButton({
		top : 47,
		title : '�߰�',
		width : 40,
		height : 'auto',
		right : 45
	});

	// �߰� ��ư�� �̺�Ʈ �ڵ鷯 �ο�
	addButton.addEventListener('click', function() {
		//  mindmapInsert�Լ� ȣ��
		mindmapInsert(labelParent.objName, labelParent.text);
	});

	// view ���� �� �Ӽ� �ʱ�ȭ
	var mindviewMiddle = Titanium.UI.createView({

		backgroundColor : '#cacaca',
		top : 0,
		backgroundImage : 'nPMMobile_Image/mindmap_Background3.png',
		width : 'auto'
	});

	var child_Viewmiddle = Titanium.UI.createView({

		backgroundColor : '#808080',
		top : 85,
		//		height: 100,
		width : 'auto'
	});

	// ���ο� ��� �߰���ġ�� ���� �Ӽ� ����
	var check_side = 20;
	var check_height = 125;
	var plus_side = 100;
	var node_Count = 0;
	var height_Count = 0;
	var upgrade_count = 0;

	var param = "action=child" + "&parentnumber=" + parentnumber;
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("POST", servletAddr);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
	xhr.setRequestHeader("Cache-Control", "no-cache, must-revalidate");
	xhr.setRequestHeader("Pragma", "no-cache");
	xhr.send(param);
	xhr.onload = function() {
		var doc = this.responseXML.documentElement;
		var id = doc.getElementsByTagName('id');

		// �� ���������� ������ ����� ���� ���ϴ� ��ư ���� �� �Ӽ� �ʱ�ȭ
		var node_Button = Titanium.UI.createButton({

			color : '#ff0000',
			top : 430,
			title : parenttext,
			width : 185,
			height : 50,
			left : 293

		});

		mindviewMiddle.add(node_Button);

		//id�� ������ ���� �Ľ� ����
		for (var i = 0; i < id.length; i++) {
			var currentItem = id.item(i);
			var mytext = currentItem.getElementsByTagName('mytext').item(0).text;
			var mynumber = currentItem.getElementsByTagName('number').item(0).text;

			switch(i) {
				case 0:
					// ����� ������ 1�����

					// ��� ��ư ���� �� �Ӽ� �ʱ�ȭ
					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 430,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 68
					});

					mindviewMiddle.add(parentNode_Button);
					// ���� �����쿡 �߰�
					// ��� ��ư�� �̺�Ʈ �ڵ鷯 �ο�
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 1:
					// ����� ������ 2�����

					// ��� ��ư ���� �� �Ӽ� �ʱ�ȭ
					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 430,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 518
					});

					mindviewMiddle.add(parentNode_Button);
					// ��� ��ư�� �̺�Ʈ �ڵ鷯 �ο�
					parentNode_Button.addEventListener('click', function(e) {
						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 2:
					// ����� ������ 3�����

					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 305,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 293
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);

					});
					break;

				case 3:
					// ����� ������ 4�����

					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 555,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 293
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 4:
					// ����� ������ 5�����
					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 305,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 68
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 5:
					// ����� ������ 6�����

					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 305,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 518
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 6:
					// ����� ������ 7�����

					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 555,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 68
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 7:
					// ����� ������ 8�����

					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 555,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 518
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 8:
					// ����� ������ 9�����

					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 555,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 68
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 9:
					// ����� ������ 10�����
					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 305,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 293
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 10:
					// ����� ������ 11�����
					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 305,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 293
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

				case 11:
					// ����� ������ 12�����
					var parentNode_Button = Ti.UI.createButton({

						color : '#000',
						top : 305,
						objName : mynumber,
						title : mytext,
						width : 185,
						height : 50,
						left : 518
					});

					mindviewMiddle.add(parentNode_Button);
					parentNode_Button.addEventListener('click', function(e) {

						saveContent = saveContent + this.title + "  -->  "
						mindmapAdd(this.objName, this.title);
					});
					break;

			}

			node_Count++;
			upgrade_count++;

		}
	};

	mindviewMiddle.add(addButton);
	mindviewMiddle.add(backButton);
	mindWin.add(mindviewMiddle);
}
//�߰���ư�� ������ ���� ���ο� window
var mindmapInsert = function(parentnumber, parenttext) {// Ŭ������ �� ���ο� ������ ����� �Լ�
	var mindWin = Ti.UI.createWindow();
	// ���ο� ������ ����
	mindWin.open();
	// ������ ������ ����

	// �� ���� �� �Ӽ� �ʱ�ȭ
	var labelParent = Ti.UI.createLabel({

		top : 30,
		color : '#000',
		width : 'auto',
		height : 'auto',
		text : parenttext,
		textAlign : 'center',
		font : {
			fontSize : 30,
			fontStyle : 'italic'
		},
		objName : parentnumber
	});

	// �Է¹ޱ� ���� �ؽ�Ʈ �ʵ� ���� �� �ʱ�ȭ
	var txtField = Titanium.UI.createTextField({
		top : 490,
		width : 'auto',
		left : 250,
		hintText : '���� ���� ������ �ϰ� ��Ű���?(Ŭ��)'
	});

	// �� ���� �� �Ӽ� �ʱ�ȭ
	var currentMind = Titanium.UI.createLabel({
		top : 375,
		width : 'auto',
		left : 285,
		font : {
			fontSize : 15,
			fontStyle : 'italic'
		},
		text : ' * ������� ������ ���ε� ��� * '

	});

	// �� ���� �� �Ӽ� �ʱ�ȭ
	var showMind = Titanium.UI.createLabel({

		top : 405,
		width : 'auto',
		left : 293,
		font : {
			fontSize : 10,
			fontStyle : 'italic'
		},
		text : saveContent

	})

	//�ڷΰ��� ��ư ���� �� �Ӽ� �ʱ�ȭ
	var backButton = Ti.UI.createButton({
		saveContent : null,
		title : '�ڷ�',
		width : 40,
		height : 'auto',
		right : 2,
		top : 47
	});

	// �ڷΰ��� ��ư�� �̺�Ʈ �ڵ鷯 �ο�
	backButton.addEventListener('click', function() {
		mindWin.close();
		// ���� ������ �ݴ´�.

	});

	//�߰� ��ư ���� �� �Ӽ� �ʱ�ȭ
	var addButton = Ti.UI.createButton({
		top : 47,
		title : '�߰�',
		width : 40,
		height : 'auto',
		right : 45
	});

	// ���� ������ �������� �߰��� view ���� �� �Ӽ� �ʱ�ȭ
	var mindviewMiddle = Titanium.UI.createView({
		backgroundColor : '#cacaca',
		top : 0,
		backgroundImage : 'nPMMobile_Image/mindmap_Background4.png',
		width : 'auto'
	});

	// ��ư ���� �� �Ӽ� �ʱ�ȭ
	var child_Button = Ti.UI.createButton({

		color : '#ff0000',
		top : 430,
		title : parenttext,
		width : 185,
		height : 50,
		left : 293

	});

	mindviewMiddle.add(child_Button);

	// �߰���ư�� �̺�Ʈ �ڵ鷯 �ο�(�Է��� ���� ��� ����ǰ� �� ȭ�鿡 �߰��Ǿ� ��Ÿ��)
	addButton.addEventListener('click', function() {
		var param = "action=insert" + "&parentnumber=" + labelParent.objName + "&text=" + txtField.value;
		var xhr = Ti.Network.createHTTPClient();
		xhr.open("POST", servletAddr);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
		xhr.setRequestHeader("Cache-Control", "no-cache, must-revalidate");
		xhr.setRequestHeader("Pragma", "no-cache");
		xhr.send(param);
		xhr.onload = function() {
			saveContent = null;
			alert('�߰��Ϸ�');

		};
	});

	// ���� �����쿡 �� �Ӽ��� �߰�
	mindviewMiddle.add(backButton);
	mindviewMiddle.add(txtField);
	mindviewMiddle.add(addButton);
	mindviewMiddle.add(currentMind);
	mindWin.add(mindviewMiddle);
	mindviewMiddle.add(showMind);

}

