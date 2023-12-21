import { Link, Outlet } from 'react-router-dom';

export default function Company() {
  return (
    <>
      <div>회사소개 페이지 입니다.</div>
      <div>
        <Link to="/our/ceo">대표인사말</Link>
        <Link to="/our/orga">조직도</Link>
      </div>
      <Outlet></Outlet>
    </>
  );
}
