<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@page import="java.util.*, vo.*"%>
<% request.setCharacterEncoding("euc-kr"); %>
<jsp:useBean id="dao" class="dao.MemberDAO"/>
<jsp:useBean id="dto" class="vo.MemberVO"/>
<%
ArrayList al = new ArrayList();
al = dao.list();
%>
<html>
<head>
<title>Member</title>
</head>
<body>
	<h3>ȸ�����</h3><hr>
	<table width="550" border="1">
		<tr>
			<td>��ȣ</td>
			<td>�̸�</td>
			<td>���̵�</td>
			<td>��й�ȣ</td>
			<td>�����</td>
		</tr>
		<% if(al.isEmpty()){ %>
		<tr><td colspan='5'>��ϵ� ȸ���� �����ϴ�</center></td></tr>
		<% } else {
			int viewNum = 1;
			for(int i=0; i<al.size(); i++){
				dto = (MemberVO)al.get(i);
		%>
		<tr>
		<td>
			<a href="readMember.jsp?seq=<%=dto.getSeq() %>"><%=viewNum%></a>
		</td>
		<td><%=dto.getUserid()%></td>
		<td><%=dto.getUsername()%></td>
		<td><%=dto.getUserpw()%></td>
		<td><%=dto.getRegdate()%></td>
		</tr>
		<% 
				viewNum++;
			}
		}
		%>
	</table>
	<a href="./createProc.jsp">ȸ������ �Է�</a>
</body>
</html>