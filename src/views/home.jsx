import { Button } from 'antd-mobile';
import { useEffect, useState } from 'react';
import { getHomeList } from '@/api/home';
import { HomeStyle, ExtendStyle } from './css/homeStyle';
import { ThemeProvider } from 'styled-components';
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
      {/* use styled components */}
      <ThemeProvider theme={{ height: '150px' }}>
        <HomeStyle size={100} color='#ea2465'>
          <div>
            <span>use styled components</span>
          </div>
        </HomeStyle>
        <ExtendStyle>
          <div>
            <span>use styled components</span>
            <div className='text'>123456</div>
          </div>
        </ExtendStyle>
      </ThemeProvider>
    </>
  );
}
export default Home;
