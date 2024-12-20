function top1(b) {
    let c = b.split(' ');
    let d = c.reduce((e, f) => f.length > e.length ? f : e, "");
    let g = c.reduce((e, f) => f.length < e.length ? f : e, c[0]);
    return { d, g };
  }
  
  console.log(top1("Hello world this is JavaScript"));
  







  function top3(b) {
    let c = b.split(' ').map(d => d.split('').reverse().join(''));
    return c.join(' ');
  }
  
  console.log(top3("Hello world"));








  function top4(b) {
    let c = b.trim().split(' ');
    let d = c[c.length - 1];
    return d.length;
  }
  
  console.log(top4("Hello world from JavaScript"));
  
  





  function top5(b) {
    let c = [];
    let d = b.filter((e, f) => b.indexOf(e) !== f && !c.includes(e) && c.push(e));
    return d;
  }
  
  console.log(top5([1, 2, 3, 2, 4, 3, 5]));
 
  


  function top6(b) {
    let c = "";
    for (let d of b) {
      if (d !== " ") {
        c += d;
      }
    }
    return c;
  }
  
  console.log(top6("Hello World! How are you?"));
  



  function top7(b) {
    let c = 0;
    for (let d of b) {
      if (!isNaN(d) && d !== " ") {
        c += Number(d);
      }
    }
    return c;
  }
  
  console.log(top7("abc123def45"));
  