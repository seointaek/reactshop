import { Outlet } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import Wacthed from '../components/Wacthed';
import { useEffect } from 'react';

export default function Layout() {
  /*let obj1 = {name1 : '자료1'};
  console.log('1--', obj1)
  localStorage.setItem("data1", obj1);

  let obj2 = {name1 : '자료1 JSON'};
  let changeJSON = JSON.stringify(obj2);
  localStorage.setItem("data2", changeJSON);
  console.log('2--', changeJSON)

  let getItem = localStorage.getItem('data2');
  console.log('3--', JSON.parse(getItem));*/
  
  useEffect(() => {
    if(localStorage.getItem('watched')){
      localStorage.setItem('watched', JSON.stringify([]));
    }
  }, []);
 


  return (
    <div className="mw">
      <Wacthed/>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
