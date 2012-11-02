package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Vector;
import java.util.concurrent.ExecutionException;

import db.DBManager;

import vo.MemberVO;

public class MemberDAO {
	
	public int insert (MemberVO vo){
		Connection conn = null;
		PreparedStatement pstmt = null;
		String insertSQL = 
				"INSERT INTO member(userid, username, userpw, regdate) VALUES(?,?,?,now())";
		int res = 0;
		
		try {
			if(vo.getUserid()!=null){
			conn = DBManager.dbConn();
			pstmt = conn.prepareStatement(insertSQL);
			pstmt.setString(1, vo.getUserid());
			pstmt.setString(2, vo.getUsername());
			pstmt.setString(3, vo.getUserpw());
			res = pstmt.executeUpdate();
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		} finally{
			try {
				DBManager.close(conn, pstmt);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		if(res > 0)
			return 1;
		else
			return 0;
	}
	
	/**
	 * ȸ�� ��� ����
	 * @return list
	 */
	public ArrayList list(){
		ArrayList list = new ArrayList();
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String listSQL = "Select seq, userid, username, userpw, regdate from member";
		try {
			conn =DBManager.dbConn();
			pstmt = conn.prepareStatement(listSQL);
			rs = pstmt.executeQuery();
			while(rs.next()){
				MemberVO dto = new MemberVO();
				dto.setSeq(rs.getInt("seq"));
				dto.setUserid(rs.getString("userid"));
				dto.setUsername(rs.getString("username"));
				dto.setUserpw(rs.getString("userpw"));
				dto.setRegdate(rs.getString("regdate"));
				list.add(dto);
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		} finally {
			try {
				DBManager.close(conn, pstmt, rs);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return list;
	}
	 /** ȸ������ �󼼺���
	  * @param seq
	  * @return MenberVO
	  */
	public MemberVO view(int seq){
		MemberVO vo = new MemberVO();
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String readSQL = "SELECT userid, username, userpw, regdate FROM member WHERE seq=?";
		try {
			conn = DBManager.dbConn();
			pstmt = conn.prepareStatement(readSQL);
			pstmt.setInt(1, seq);
			rs = pstmt.executeQuery();
			if(rs.next()){
				vo.setSeq(seq);
				vo.setUserid(rs.getString("userid"));
				vo.setUsername(rs.getString("username"));
				vo.setUserpw(rs.getString("userpw"));
				vo.setRegdate(rs.getString("regdate"));
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		} finally {
			try {
				DBManager.close(conn, pstmt, rs);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return vo;
	}
	
	/** ȸ������ ����
	 * @param dto
	 * @return int
	 */
	public int update(MemberVO vo) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		String updateSQL = "UPDATE member SET userid=?, username=?, userpw=?, regdate=now() WHERE seq=?";
		int res = 0;
		System.out.println("updateSQL : " + updateSQL);
		try {
			conn = DBManager.dbConn();
			pstmt = conn.prepareStatement(updateSQL);
			pstmt.setString(1, vo.getUserid());
			pstmt.setString(2, vo.getUsername());
			pstmt.setString(3, vo.getUserpw());
			pstmt.setInt(4, vo.getSeq());
			res = pstmt.executeUpdate();
		} catch (Exception e) {
			System.out.println("catch���� ������ ��� : ");
			System.out.println(e.getMessage());
		} finally {
			try {
				System.out.println("DB���������� �ݾҴ�.");
				DBManager.close(conn, pstmt);
			} catch (Exception e) {
				System.out.println("DB���������� ���� ���ߴ�..");
				e.printStackTrace();
			}
		}
		if(res>0)
			return 1;
		else
			return 0;
	}
	
	/** ȸ������ ����
	 * @param vo
	 * @return boolean
	 */
	public int delete(int seq){
		Connection conn = null;
		PreparedStatement pstmt = null;
		String deleteSQL = "DELETE FROM member WHERE seq=?";
		int res=0;
		try {
			conn = DBManager.dbConn();
			pstmt = conn.prepareStatement(deleteSQL);
			pstmt.setInt(1, seq);
			res = pstmt.executeUpdate();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		} finally {
			try {
				DBManager.close(conn, pstmt);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		if(res>0)
			return 1;
		else
			return 0;
	}
}
