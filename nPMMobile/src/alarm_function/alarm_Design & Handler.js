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

//����� nPM_alarm �̹��� ����
var alarm_Image = Titanium.UI.createImageView({

	top : 0, // �̹��� ���� ��ġ
	width : 'auto',
	image : 'nPMMobile_Image/alarm_Image.png' // �̹��� ����

});

//����� nPM_alarm Label ����
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

//alarm_Button Ŭ�� �� �߻��ϴ� �̺�Ʈ �ڵ鷯
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

main_Win.add(alarm_Button);
main_Win.add(alarm_Label);