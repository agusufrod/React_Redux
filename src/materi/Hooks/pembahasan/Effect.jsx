import { useEffect, useState } from 'react';

const Effect = () => {
  let [text, setText] = useState('');
  let [user, setUser] = useState({});
  let [seconds, setSecounds] = useState(0);

  // useEffect(() => {
  //   setDisplay(() => localStorage.getItem('text'));
  // }, []);

  useEffect(() => {
    console.log('get API');
    fetch('https://newsapi.org/v2/everything?apiKey=4bc675224b5144e0bcb1f83216534b65&q=')
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, []);

  useEffect(() => {
    localStorage.setItem('text', text);
    console.log('singkronisasi');
  }, [text]);

  useEffect(() => {
    let intervalid = setInterval(() => {
      setSecounds((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(intervalid);
    };
  }, []);

  return (
    <div>
      <textarea cols="30" rows="10" onChange={(e) => setText(e.target.value)} />
      <p>{user.name}</p>
      <div>
        Waktu : {Math.floor(seconds / 60)} menit {seconds % 60} detik
      </div>
    </div>
  );
};

export default Effect;
