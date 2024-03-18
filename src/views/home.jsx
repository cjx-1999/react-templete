import { Button } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setList } from '@/store/sliceExample';
import { getHomeList } from '@/api/home';

function Home() {
  const [msg, setMsg] = useState();
  // const list = useSelector((state) => state.slice.list);
  useEffect(() => {
    getHomeList().then((res) => {
      setMsg(res.data);
    })
  }, []);
  return (
    <>
      {msg}
      <br />
      <Button color="primary">Purple</Button>
      <div className="purple-theme">
        <Button color="primary">Purple</Button>
      </div>
    </>
  );
}
export default Home;
