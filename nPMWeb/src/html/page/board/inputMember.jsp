<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<html>
<head>
<title>Insert title here</title>
<script language="javascript">
	function validCheck(f){
		return true;
	}
	function goList(){
		location.href="./listMember.jsp";
	}
</script>
</head>
<body>
	<h3>�Խ��� �� �Է���</h3>
	<hr>
	<table border="1" width="400">
		<form method="post" action="./createProc.jsp" onSubmit="return validCheck(this)">
		<tr><td>�̸�</td><td><input type="text" name="username"></td></tr>
		<tr><td>���̵�</td><td><input type="text" name="userid"></td></tr>
		<tr><td>��й�ȣ</td><td><input type="text" name="userpw"></td></tr>
		<tr>
			<td colspan="2" align="center">
				<input type="submit"  value="����">
				<input type="button"  value="���" onClick="javascript:goList()">
			</td>
		</tr>
		</form>
	</table>
</body>
</html>