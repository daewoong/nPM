<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<% request.setCharacterEncoding("euc-kr"); %>
<jsp:useBean id="dao" class="dao.MemberDAO"/>
<jsp:useBean id="dto" class="vo.MemberVO"/> 
<%
int seq = Integer.parseInt(request.getParameter("seq"));
System.out.println("readMember���� db�� �о�� seq �� : " + seq);
dto = dao.view(seq);
%>  
<html>
<head>
<title>Member</title>
<script language="javascript">
function goUpt(){
	document.memForm.action ="updateProc.jsp";
	document.memForm.submit();
}
function goDel(idVal){
	document.memForm.action="deleteProc.jsp";
	document.memForm.submit();
}
function goList(){
	location.href="./listMember.jsp";
}
</script>
</head>
<body>
<h3>ȸ������ �󼼺���</h3><hr>
<table width="550" border="1">
	<form name="memForm" method="post">
		<input type=hidden name=seq value="<%=dto.getSeq()%>">
		<tr><td>��ȣ</td><td><%=dto.getSeq()%></td></tr>
		<tr>
			<td>���̵�</td>
			<td>
				<input type="text" name="userid" value="<%=dto.getUserid()%>">
			</td>
		</tr>	
		<tr>
			<td>�̸�</td>
			<td>
				<input type="text" name="username" value="<%=dto.getUsername()%>">
			</td>
		</tr>	
		<tr>
			<td>��й�ȣ</td>
			<td>
				<input type="text" name="userpw" value="<%=dto.getUserpw()%>">
			</td>
		</tr>	
		<tr><td>�����</td><td><%=dto.getRegdate()%></td></tr>
		<tr>
			<td colspan="2" align="center">
				<input type="button" value="����"  onClick="javascript:goUpt()">
				<input type="button" value="����"  onClick="javascript:goDel()">
				<input type="button" value="���"  onClick="javascript:goList()">	
			</td>
		</tr>
	</form>
</table>
</body>
</html>