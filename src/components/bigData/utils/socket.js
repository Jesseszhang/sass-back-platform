export const socket = function (url, resolve, reject) {
    url = `ws://192.168.1.193:54321/area/530100${url}`;
  
    const ws = new WebSocket(url);

    const reConnect = ()=> {
      const rews = new WebSocket(url);
      rews.addEventListener('open', (event)=>{
        console.log('断线重连成功...');
      });

      rews.addEventListener('message', (event)=>{
        console.log('断线重连返回数据....', event.data)
        resolve(event.data)
      });

      rews.addEventListener('error', (event)=>{
        reject(event)
      });

      rews.addEventListener('close', disConnet);
    }

    ws.addEventListener('open', (event)=>{
      // console.log('连接成功...');
    });

    ws.addEventListener('message', (event)=>{
      // console.log('数据请求成功....', event.data)
      resolve(event.data)
    });

    ws.addEventListener('error', (event)=>{
      reject(event)
    });

    const disConnet = ()=>{
      console.log('服务端推送关闭');
      setTimeout(()=>{
        reConnect();
      }, 5000);
    }

    ws.addEventListener('close', disConnet);
} 