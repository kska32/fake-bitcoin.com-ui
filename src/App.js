import React, { Component } from 'react';
import {Header,Segment,Icon,Grid} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './App.scss';


let catsData = [
  {
      label:'Start here',
      list: [
        'Bitcoin Basics','Bitcoin.com Wallet','Bitcoin Wallets',
        'Avoiding Fraud','FAQs','Original Whitepaper'
      ]
  },
  {
      label:'Get Bitcoin',
      list:[
        'Free Bitcoin Cash [new]','Bitcoin Exchanges',
        'Buy with Credit Card', 'Cloud Mining',
        'Send Us Traffic'
      ]
  },
  {
    label: 'Use Bitcoin',
    list:[
      'Badger [new]','Tip with Bitcoin Cash [new]',
      'Bitcoin.com Store','Buy Gift Cards',
      'Merchant Solutions'
    ]
  },
  {
    label:'Play Games',
    list:[    
        'Slots','Roulette','Blackjack','Video Poker',
        'Craps','Keno','Dice','Satoshi Circle','Learn More'
    ]
  },
  {
    label:'News',
    list: [
        'Bitcoin News Telegram','Top Stories','Blockchain Tech',
        'Opinion','Altcoins','Press Releases','Submit Press Release'
    ]
  },
  {
    label:'Forum',
    list:[
        'AMA - Ask Me Anything','General Discussion',
        'Marketplace', 'Technical','Mining'
    ]
  },
  {
    label:'Tools',
    list:[
        'Developer Platform [new]', 'Oracle [new]',
        'Blockchain Notary', 'Site Widgets',
        'Block Explorer', 'Paper Wallet [new]', 'Bounty Hunter'
    ]
  },
  {
    label:'Economy',
    list:[
      'Markets','Bitcoin Cash (BCH) Charts',
      'Bitcoin Core (BTC) Charts','Price Converter',
      'Issue Voting','Derivatives Exchanges','Bitcoin Mining Pool'
    ]
  },
  {
    label:'About Us',
    list:[
      'Company Blog','Press Kit','Contact',
      'Work for Bitcoin','Advertise','Freedom [new]'
    ]
  },
  {
    label: 'Learn More',
    list:[  
      'Bitcoin Mining','Podcast','Guides',
      'Security','Bitcoin ATMs','Debit Cards'
    ]
  }
];


let psTileData = [
  {
    img:"img/knowledge-icon.webp",
    h3:"Knowledge Base",
    p:"Questions? Learn more with our extensive library of Bitcoin resources",
    a:"Knowledge Base"
  },
    {
      img:"img/developer-icon.webp",
      h3:"Developer Tools",
      p:"Want to build something? Check out our awesome BCH developer tools",
      a:"Developer Tools"
    },
      {
        img:"img/wallet-icon.webp",
        h3:"Bitcoin Wallet",
        p:"Need a wallet? Try our highly rated and free to use Bitcoin wallet",
        a:"Bitcoin.com Wallet"
      },
        {
          img:"img/mining-icon.webp",
          h3:"Bitcoin Mining",
          p:"Looking to invest? Get a Bitcoin mining contract with us and earn Bitcoin passively",
          a:"Start Mining"
        },
          {
            img:"img/games-icon.webp",
            h3:"Bitcoin Games",
            p:"Feeling Lucky? Try your chances in a variety of games at our provable fair online casino",
            a:"Play Bitcoin Games"
          },
            {
              img:"img/blockexplorer-icon.webp",
              h3:"Block Explorer",
              p:"Track your BCH or BTC transactions and addresses with our Block Explorer",
              a:"Block Explorer"
            },
              {
                img:"img/charts-icon.webp",
                h3:"Bitcoin Markets",
                p:"Feeling analytical? Check out our detailed market data. Prices, transactions, and more",
                a:"View Markets"
              },
                {
                  img:"img/buy-icon.webp",
                  h3:"Buy Bitcoin",
                  p:"Looking to buy? Buy BCH or BTC directly from us quickly and securely",
                  a:"Buy Bitcoin"
                },
                  {
                    img:"img/tools-icon.webp",
                    h3:"Bitcoin Tools",
                    p:"Make paper wallets, explore the blockchain, and much more with our suite of Bitcoin tools",
                    a:"Bitcoin Tools"
                  }
];


let quickLinksData = [
  {text:'BADGER'},{text:'CONSULTANTS'},{text:'DEVELOPERS'},{text:'MARKETS'},{text:'GIFT CARDS'},
  {text:'FREE BITCOIN CASH'},{text:'PRINT MONEY'},{text:'BITCOIN ATM'},{text:'BUY BITCOIN'},{text:'EVENTS'},
  {text:'FORUM'},{text:'NEWS'},{text:'PODCAST'},{text:'STORE'},{text:'GETTING STARTED'},
  {text:'PROMOTIONAL MATERIAL'},{text:'CONTACT US'},{text:'GAMES'},{text:'JOBS'},{text:'WALLETS'},
  {text:'GUIDE'},{text:'FAQ'},{text:'CHARTS'},{text:'DEVELOPER DISCORD'},{text:'ADVERTISE'},
  {text:'LEGAL'},{text:'PRIVACY'},{text:'ABOUT US'},{text:'PARTNERS'},{text:'WIDGETS'}
]



class App extends Component {

  constructor(props){
     super(props);
     this.state = {
        ishmbgrOpen:false
     };
  }

  hmbgrMenuHandle(e){
      this.setState({ishmbgrOpen:!this.state.ishmbgrOpen});
  }

  cats(catsData){
    let myfontem = (str)=>{
      return <div>
           {str}<font color="#fab915"><em>[new]</em></font>
      </div>;
    }

    return (<div className="menuWrap">
      {
          catsData.map(
            (v,i)=><div className="cat" key={i}>
              <a href='#' className="label">{v.label}</a>
              <ul>
                { v.list.map((vv,i)=><li key={i}><a href='#'>{
                      vv.split("[new]").length>1 ? myfontem(vv.split("[new]")[0]) : vv
                }</a></li>) }
              </ul>
            </div>
          )
      }
      <div className="clear">&nbsp;</div>
      <div className="social">
          <a href='#'><Icon name="telegram" size="large"/></a>
          <a href='#'><Icon name="facebook" size="large"/></a>
          <a href='#'><Icon name="twitter" size="large"/></a>
          <a href='#'><Icon name="youtube" size="large"/></a>
      </div>
    </div>);
  }

  render() {
    return (
      <div>
        <div style={{position:"fixed",width:"100%",zIndex:10000000}}>
          <div className='nav'>
            <h2>Bitcoin.com</h2>
            <ul>
              <li><a href='#'>Start here</a></li>
              <li><a href='#'>News</a></li>
              <li><a href='#'>Forum</a></li>
              <li><a href='#'>Games</a></li>
              <li><a href='#'>Buy<span> Bitcoin</span></a></li>
              <li><a href='#'>Mining</a></li>
            </ul>

            <a href='#' className='psa'>PSA</a>

            <div className="bchusd">
              <a href='#'>
                <div className='label'>BCH/USD</div>
                <div>
                  <span className='price'>$151</span>
                  <strong className='arrow'></strong>
                </div>
              </a>
            </div>

            <div className="btcusd">
              <a href='#'>
                <div className='label'>BTC/USD</div>
                <div>
                  <span className='price'>$4018</span>
                  <strong className='arrow'></strong>
                </div>
              </a>
            </div>

            <div className="hmbgrMenu" onClick={(e)=>{ this.hmbgrMenuHandle(e) }}>
                <div className={"hmbgr" + (this.state.ishmbgrOpen? ' hmbgrOpen':'')}></div>
            </div>
          </div>
        </div>
        {
          this.state.ishmbgrOpen && <div className="menuPopup">
              { this.cats(catsData) }
          </div>
        }
        <div className="header">
          <a href="#" className="walletBuy"></a>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>Bitcoin.com Wallet</h1>
                <p>Simple & Secure</p>
                <h4 className="wallet-h4">
                  <span style={{fontWeight: 600}}>3,720,302</span>
                  Wallets Created
                </h4>
                <div className="wallet-icons">
                  <img src="img/wallet-icons.webp" alt="iOS, Android, Linux, Windows"/>
                </div>
                <a className="download-btn" href="#">Download for Free</a>
              </div>

              <div className="col-md-6 header-right">
                  <h1>Buy Bitcoin</h1>
                  <p>Purchase BCH or BTC</p>
                  <h4 className="buy-h4">Fast Processing • Use VISA or Mastercard</h4>
                  <div className="buy-icons">
                    <img src="img/buy-icons.webp" alt="Visa, Masercard"/>
                  </div>
                  <a className="buyCoinBt" href="#">Buy Bitcoin Now</a>
  
              </div>
            </div>
          </div>
        </div>

        <div className="quickstart">
          <div className="quickstartWrapper">
              <div className="col">Bitcoin Markets</div>
              <div className="col">Bitcoin Games</div>
              <div className="col">Bitcoin Mining</div>
          </div>
        </div>


        <div className="news">
          <div className="news-header">
            <h1>Latest News</h1>
          </div>
          <div className="news-body">
          
            <div className="news-title">
                <h3 className="news-headline">Stablecoins Are Threatened by These Two Major Issues</h3>
            </div>
            
            <div className="news-title">
              <h3 className="news-headline">Bitcoin Cash Developers Launch  Privacy-Preserving Light Client Neutrino</h3>
            </div>
            <div className="news-title">
              <h3 className="news-headline">In the Daily: Riotx Exchange, Monacoin Hacker, Coinflex Investors</h3>
            </div>
            <div className="news-title">
              <h3 className="news-headline">These Cryptocurrency Exchanges Offer Futures Markets on Unreleased Tokens</h3>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="videoWrapper">
            <div className="readme">
               <h1>Latest Video</h1>
               <p>
                  We post new videos every week discussing a range of Bitcoin topics. From the most current news and trends to libertarian and economic philosophy, you're sure to learn something new. Subscribe to our channel to stay up to date on what's happening in the crypto space.
               </p>
               <a href='#'>Bitcoin.com Channel</a>
            </div>
            <div className="videoBox">
              <iframe src="https://www.youtube.com/embed/videoseries?list=PLL-mmY61Sru9tssydNEVPAjepY5TAc0SD" frameBorder="0" allowFullScreen=""></iframe>
            </div>
          </div>
        </div>


        <div className="bitCoinCash">
          <div className="bitCoinCashWrapper">
            <img src="img/2-bitcoin-cash-logo-wt-large.webp"/>
              <p>
                In August of 2017 Bitcoin forked into two versions, Bitcoin Core (BTC) and Bitcoin Cash (BCH). The fork was a result of competing scaling solutions for the Bitcoin network.
                <br/>
                <br/>
                <span style={{textDecoration: 'underline', fontWeight:600}}>Bitcoin.com is fully supportive of the Bitcoin Cash (BCH) fork</span>
                . We believe it maintains the original properties of Bitcoin that made it so popular, as well as provides a scaling solution that is ready to handle exponential global adoption. Today.  
              </p>
            <a href="#">Learn More</a>
            <a href="#">Buy Bitcoin Cash</a>
          </div>
        </div>

        <div className="productsAndService">
          <div className="psWrapper">
              <div className="psHeader"><h1>Products & Services</h1></div>
              <div className="psBody">
                {
                  psTileData.map((v,i)=>{
                    return <div className="titlePadding" key={i}>
                              <div className="tile">
                                  <img src={v.img} alt={'Bitcoin ' + v.h3}/>
                                  <h3>{v.h3}</h3>
                                  <p>{v.p}</p>
                                  <a href="#">K{v.a}</a>
                              </div>
                          </div>
                  })
                }
              </div>
          </div>
        </div>

        <div className="foot">
                <div className="footWrapper">
                    <h1>Get great Bitcoin content sent to your inbox</h1>
                    <a href="#">SIGN ME UP!</a>
                </div>
        </div>

        <div className="pageFooter">
                <a href='#' className='feedback'>
                  
                  <span className="content">
                      <span className="square"></span>
                      Give Feedback
                  </span>
                </a>
                <div className="pageFooterWrapper">
                    <div className="theWrapper">
                      <div className="quote">
                          <h3>quote</h3>
                          <p>Bitcoin is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It's the dawn of a better, more free world.</p>
                          <span>— Roger Ver<br/>  CEO Bitcoin.com</span>
                      </div>
                      <div className="quickLinks">
                          <h3>QuickLinks</h3>
                          <ul>
                              {
                                quickLinksData.map((v,i)=>{
                                    return <li key={i}><a href='#'>{v.text}</a></li>
                                })
                              }
                          </ul>
                      </div>
                      <div className="about">
                              <h3>ABOUT BITCOIN.COM</h3>
                              <p>Bitcoin.com is your premier source for everything Bitcoin related. We can help you <a href='#'>buy bitcoin</a>, choose a bitcoin <a href='#'>wallet</a>. You can also read the latest <a href='#'>news</a>, or engage with the community on our <a href='#'>Bitcoin Forum</a>. Please keep in mind that this is a commercial website that lists wallets, exchanges and other bitcoin related companies.</p>
                      </div>
                      <div className="newForm">
                              <h3>NEW FROM BITCOIN.COM</h3>
                              <a href='#'>BADGER</a>
                              <a href='#'>BUILD ON BITCOIN CASH</a>
                              <a href='#'>TIP WITH BITCOIN CASH</a>
                              <a href='#'>BUY GIFT CARDS</a>
                              <a href='#'>BITCOIN MARKETS</a>
                              <a href='#'>FREE BITCOIN CASH</a>
                              <a href="#" className="mobilefeedback">
                                <Icon name="mail outline" size="large"/>GIVE FEEDBACK
                              </a>
                      </div>
                    </div>
                    <hr/>
                    <div className="theWrapper">
                        <div className="leftX">
                              Saint Bitts LLC. 2019 | Bitcoin.com <br/>
                              <font color='white'><small>Coded By kska32@gmail.com</small></font>
                        </div>
                        <div className="rightX">
                              
                                <a href='#'><Icon name="telegram" size="big"/></a>
                                <a href='#'><Icon name="facebook" size="big"/></a>
                                <a href='#'><Icon name="twitter" size="big"/></a>
                                <a href='#'><Icon name="youtube" size="big"/></a>
                                <a href='#'><Icon name="rss" size="big"/></a>
                        </div>
                    </div>
                </div>
        </div>

      </div>
    );
  }
}

export default App;
