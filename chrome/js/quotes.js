const quotes = [
  {
    quote: '변화는 자기 개선과 같습니다.한 번도 가보지 못한 곳으로 자신을 밀어붙이세요.',
    author: '팻 서밋'
  },
  {
    quote: '자신을 개선하면 세상이 더 좋아집니다. 너무 느리게 성장하는 것을 두려워하지 마십시오. 가만히 서 있는 것을 두려워하십시오.',
    author: '벤자민 프랭클린'
  },
  {
    quote: '자기 개선은 게임의 이름이며 주요 목표는 상대방을 파괴하는 것이 아니라 자신을 강화하는 것입니다.',
    author: '맥스웰 말츠'
  },
  {
    quote: '내 스스로 확신한다면 나는 남의 확신을 구하지 않는다.',
    author: '에드거앨런 포'
  },
  {
    quote: '약한 사람은 결정을 내리기 전에 의심하고 강한 사람은 결정을 내린 후 의심한다.',
    author: '카를 그라우스'
  },
  {
    quote: '남들이 당신을 어떻게 생각할까 너무 걱정하지 말라. 그들은 그렇게 당신에 대해 많이 생각하지 않는다.',
    author: '엘리노어 루즈벨트'
  },
  {
    quote: '생각하는 대로 살지 않으면 사는 대로 생각하게 된다.',
    author: '폴 발레리'
  },
  {
    quote: '당신이 가진 힘은 당신이 될 수 있는 최고의 모습이 되어 더 나은 세상을 만들 수 있다는 것입니다.',
    author: '애슐리 리카즈'
  },
  {
    quote: '변화없이 진보는 불가능하며, 마음을 바꾸지 못하는 사람은 아무것도 바꿀 수 없다.',
    author: '조지 버나드 쇼'
  },
  {
    quote: '우리가 지금보다 더 나아지려고 노력할 때 우리 주변의 모든 것이 더 좋아집니다.',
    author: '파울로 코엘료'
  },
  {
    quote: '당신이 작업할 최고의 프로젝트는 바로 당신입니다.',
    author: '딘 그라지오시'
  },
  {
    quote: '자신이 ‘할 수 없다’고 생각하는 동안 사실은 그것을 ‘하기 싫다’고 다짐하고 있는 것이다. 그러므로 실행되지 않는 것이다.',
    author: '스피노자'
  }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');


const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;


