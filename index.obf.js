const a0_0x33bc5c=a0_0x65ad;(function(_0x4b13f4,_0x473c6b){const _0xff9102=a0_0x65ad,_0x55b995=_0x4b13f4();while(!![]){try{const _0x535043=-parseInt(_0xff9102(0x15c))/0x1+-parseInt(_0xff9102(0x125))/0x2+-parseInt(_0xff9102(0x111))/0x3*(parseInt(_0xff9102(0x135))/0x4)+parseInt(_0xff9102(0x158))/0x5+-parseInt(_0xff9102(0x115))/0x6*(parseInt(_0xff9102(0x147))/0x7)+parseInt(_0xff9102(0x13a))/0x8+parseInt(_0xff9102(0x155))/0x9*(parseInt(_0xff9102(0x105))/0xa);if(_0x535043===_0x473c6b)break;else _0x55b995['push'](_0x55b995['shift']());}catch(_0xaa59c3){_0x55b995['push'](_0x55b995['shift']());}}}(a0_0x1e5c,0x28999));const axios=require(a0_0x33bc5c(0x10e)),chalk=require(a0_0x33bc5c(0x154)),cfonts=require(a0_0x33bc5c(0x145)),HttpProxyAgent=require(a0_0x33bc5c(0x10f)),SocksProxyAgent=require(a0_0x33bc5c(0x117)),fs=require('fs'),readline=require(a0_0x33bc5c(0x109)),Table=require('cli-table3');function a0_0x65ad(_0x3809bb,_0x1fc87c){const _0x1e5cf3=a0_0x1e5c();return a0_0x65ad=function(_0x65ad02,_0x3f071f){_0x65ad02=_0x65ad02-0x101;let _0x444a3c=_0x1e5cf3[_0x65ad02];return _0x444a3c;},a0_0x65ad(_0x3809bb,_0x1fc87c);}cfonts[a0_0x33bc5c(0x13e)](a0_0x33bc5c(0x12e),{'font':'block','align':a0_0x33bc5c(0x106),'colors':[a0_0x33bc5c(0x108),'white'],'background':a0_0x33bc5c(0x151),'letterSpacing':0x1,'lineLength':'0'}),console[a0_0x33bc5c(0x12a)](chalk[a0_0x33bc5c(0x144)](a0_0x33bc5c(0x10c)));const rl=readline[a0_0x33bc5c(0x110)]({'input':process[a0_0x33bc5c(0x126)],'output':process[a0_0x33bc5c(0x14d)]});function displayTable(_0x703efc,_0x52ec8e,_0x50071e,_0xa31dfc){const _0x4fc2c7=a0_0x33bc5c,_0x37ddb3=new Table({'head':[_0x4fc2c7(0x102),'Value'],'colWidths':[0x1e,0x32],'style':{'head':[_0x4fc2c7(0x108)],'border':[_0x4fc2c7(0x118)]}});_0x37ddb3['push']([_0x4fc2c7(0x10b),_0x703efc[_0x4fc2c7(0x15b)]],[_0x4fc2c7(0x13f),_0x703efc['type']],[_0x4fc2c7(0x12c),_0x703efc[_0x4fc2c7(0x14e)]],['Symbol',_0x703efc[_0x4fc2c7(0x128)]],[_0x4fc2c7(0x11e),_0x703efc['interval']],[_0x4fc2c7(0x11a),_0x703efc[_0x4fc2c7(0x15e)]],[_0x4fc2c7(0x104),_0x703efc[_0x4fc2c7(0x11b)]],[_0x4fc2c7(0x10a),_0x703efc[_0x4fc2c7(0x130)]],[_0x4fc2c7(0x156),_0x703efc[_0x4fc2c7(0x142)]],[_0x4fc2c7(0x103),_0x703efc[_0x4fc2c7(0x129)]],[_0x4fc2c7(0x127),_0x52ec8e],[_0x4fc2c7(0x132),_0x50071e],[_0x4fc2c7(0x149),_0xa31dfc]),console['log'](_0x37ddb3[_0x4fc2c7(0x148)]());}function getTimeUntilNextReset(){const _0x350a23=a0_0x33bc5c,_0x581ba8=new Date(),_0x7d729e=[0x7,0xf,0x17];let _0xc7b4df=null;for(const _0xb07ffe of _0x7d729e){const _0x36a547=new Date(_0x581ba8);_0x36a547['setHours'](_0xb07ffe,0x0,0x0,0x0);if(_0x36a547>_0x581ba8){_0xc7b4df=_0x36a547;break;}}return!_0xc7b4df&&(_0xc7b4df=new Date(_0x581ba8),_0xc7b4df['setDate'](_0x581ba8['getDate']()+0x1),_0xc7b4df[_0x350a23(0x139)](_0x7d729e[0x0],0x0,0x0,0x0)),_0xc7b4df-_0x581ba8;}async function performTrading(_0x368d08,_0x40ac4d){const _0x350afb=a0_0x33bc5c,_0x2478ad={'headers':{'Authorization':_0x350afb(0x123)+_0x40ac4d,'Content-Type':_0x350afb(0x101)},'httpsAgent':_0x368d08};try{const _0x522f2b=await axios[_0x350afb(0x14c)](_0x350afb(0x120),{'operationName':_0x350afb(0x134),'query':_0x350afb(0x14a)},_0x2478ad),_0x2d16c7=_0x522f2b['data'][_0x350afb(0x137)]['me'][_0x350afb(0x146)],_0x17f826=_0x2d16c7[_0x350afb(0x136)];if(_0x17f826>=0x14){console['log'](chalk['yellow'](_0x350afb(0x11f)));const _0x5b7ac5=getTimeUntilNextReset(),_0x5c78f6=new Date(Date[_0x350afb(0x112)]()+_0x5b7ac5);console['log'](chalk[_0x350afb(0x150)]('⏳\x20Waktu\x20reset\x20berikutnya:\x20'+_0x5c78f6[_0x350afb(0x159)]())),await new Promise(_0x119355=>setTimeout(_0x119355,_0x5b7ac5));return;}const _0x24970a=Math[_0x350afb(0x122)]()<0.5?'UP':'DOWN',_0x7e9096=await axios[_0x350afb(0x14c)](_0x350afb(0x120),{'operationName':'dailyMissionOrderBet','query':'mutation\x20dailyMissionOrderBet($input:\x20DailyMissionOrderBetInput!)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20dailyMissionOrderBet(input:\x20$input)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20success\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20order\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uuid\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20option_premium_id\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20option_premium_name\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20symbol\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20interval\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end_time_mode\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end_time_value\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20start_time\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20unix_start_time\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end_time\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20unix_end_time\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20start_price\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20end_price\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20odds\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet_amount\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet_target\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20status\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20order_status_display\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20winning_amount\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20created_at\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20is_allow_cancel\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cancel_order_start_time_interval\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cancel_order_end_time_interval\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bet_currency_type\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20__typename\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20wallet\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20amount\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20currency_type\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20version\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20__typename\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20__typename\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}','variables':{'input':{'bet_target':_0x24970a,'end_time_mode':_0x350afb(0x107),'end_time_value':'10','option_premium_id':'1'}}},_0x2478ad);if(!_0x7e9096[_0x350afb(0x137)]['data']||!_0x7e9096[_0x350afb(0x137)][_0x350afb(0x137)][_0x350afb(0x153)]||!_0x7e9096[_0x350afb(0x137)]['data']['dailyMissionOrderBet'][_0x350afb(0x113)])throw new Error(_0x350afb(0x13d));const _0x5de986=_0x2d16c7,_0x2abf5f=_0x5de986[_0x350afb(0x12b)]>0x0?chalk[_0x350afb(0x108)](_0x350afb(0x124)):chalk[_0x350afb(0x143)]('LOSE'),_0x30d875=_0x5de986['today_income'],_0x242590=_0x7e9096[_0x350afb(0x137)][_0x350afb(0x137)]['dailyMissionOrderBet']['order'];displayTable(_0x242590,_0x2abf5f,_0x30d875,_0x17f826);}catch(_0x5dce9e){if(_0x5dce9e[_0x350afb(0x12d)]&&_0x5dce9e[_0x350afb(0x12d)][_0x350afb(0x137)][_0x350afb(0x116)]){const _0x3f3ed3=_0x5dce9e[_0x350afb(0x12d)][_0x350afb(0x137)][_0x350afb(0x116)][0x0][_0x350afb(0x15d)];if(_0x3f3ed3[_0x350afb(0x141)](_0x350afb(0x15a))){console[_0x350afb(0x12a)](chalk[_0x350afb(0x150)](_0x350afb(0x14f))),await new Promise(_0x3ee036=>setTimeout(_0x3ee036,0x7530));return;}}console['log'](chalk[_0x350afb(0x143)]('Error:',_0x5dce9e[_0x350afb(0x15d)]));}}function a0_0x1e5c(){const _0x444f66=['9819423HhadPA','Status','split','28490CAehjm','toLocaleTimeString','The\x20mining\x20round\x20has\x20been\x20completed','uuid','284194XsqKFo','message','start_price','application/json','Field','Created\x20At','Bet\x20Amount','10HzfxAf','center','RELATIVE_SECOND','green','readline','Bet\x20Target','UUID','Script\x20coded\x20by\x20-\x20@balveerxyz\x20||\x20Auto\x20Trading\x20SoarFun','question','axios','http-proxy-agent','createInterface','9354bWshXN','now','order','startsWith','6OdPrXp','errors','socks-proxy-agent','gray','tokens.txt','Start\x20Price','bet_amount','floor','utf8','Interval','⚠️\x20The\x20mining\x20round\x20has\x20been\x20completed.\x20Please\x20wait\x20for\x20the\x20next\x20round\x20to\x20begin.','https://soarfun-ua.com/graphql?locale=EN&pf=web&udid=1366169e-7341-4079-a8d5-399aafe143c4&ac=OX076872','Token\x20tidak\x20ditemukan.\x20Pastikan\x20file\x20tokens.txt\x20berisi\x20token.','random','Bearer\x20','WIN','653772EwzZeT','stdin','Result','symbol','created_at','log','round_income','Option\x20Premium\x20ID','response','Airdrop\x20888','SIGINT','bet_target','toLowerCase','Today\x20Income','exit','getInfo','280OnQAGd','today_round_count','data','socks5://','setHours','1105624vZHPrT','\x0aBot\x20dihentikan\x20oleh\x20pengguna.','Menunggu\x2010\x20detik\x20sebelum\x20trading\x20berikutnya...','Respons\x20API\x20tidak\x20valid:\x20Data\x20order\x20tidak\x20ditemukan.','say','Type','filter','includes','status','red','blue','cfonts','daily_mission_info','1675177GUAlbu','toString','Today\x20Round\x20Count','query\x20getInfo\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20me\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20daily_mission_info\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20can_bet\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20every_bet_amount\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20is_opening\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20last_order_uuid\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20next_bet_amount\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20round_bet_count\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20status\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20today_income\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20today_round_count\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20have_finish_reward\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20have_finish_total_reward\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20next_round_sec\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20today_finish_round_income\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20today_finish_total_round_income\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20today_total_bonus\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20today_total_round_count\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20round_income\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20__typename\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20__typename\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}','close','post','stdout','option_premium_id','\x0a⚠️\x20Mining\x20round\x20telah\x20selesai.\x20Menunggu\x20round\x20berikutnya...','yellow','transparent','readFileSync','dailyMissionOrderBet','chalk'];a0_0x1e5c=function(){return _0x444f66;};return a0_0x1e5c();}async function main(){const _0x30f0a6=a0_0x33bc5c;let _0xe859e9=null;rl[_0x30f0a6(0x10d)]('Mau\x20menggunakan\x20proxy?\x20(y/n):\x20',async _0x5deca3=>{const _0x2b6b26=_0x30f0a6;if(_0x5deca3[_0x2b6b26(0x131)]()==='y'){const _0x42fac3=fs[_0x2b6b26(0x152)]('proxy.txt',_0x2b6b26(0x11d))[_0x2b6b26(0x157)]('\x0a')[_0x2b6b26(0x140)](Boolean),_0xeeb18f=_0x42fac3[Math[_0x2b6b26(0x11c)](Math['random']()*_0x42fac3['length'])];if(_0xeeb18f['startsWith']('http://'))_0xe859e9=new HttpProxyAgent(_0xeeb18f);else _0xeeb18f[_0x2b6b26(0x114)](_0x2b6b26(0x138))&&(_0xe859e9=new SocksProxyAgent(_0xeeb18f));console[_0x2b6b26(0x12a)](chalk[_0x2b6b26(0x108)]('Menggunakan\x20proxy:\x20'+_0xeeb18f));}else console[_0x2b6b26(0x12a)](chalk[_0x2b6b26(0x150)]('Tidak\x20menggunakan\x20proxy.'));const _0x2f21fc=fs[_0x2b6b26(0x152)](_0x2b6b26(0x119),_0x2b6b26(0x11d))[_0x2b6b26(0x157)]('\x0a')[_0x2b6b26(0x140)](Boolean),_0x2064fd=_0x2f21fc[0x0];if(!_0x2064fd){console[_0x2b6b26(0x12a)](chalk[_0x2b6b26(0x143)](_0x2b6b26(0x121))),rl[_0x2b6b26(0x14b)]();return;}while(!![]){await performTrading(_0xe859e9,_0x2064fd),console[_0x2b6b26(0x12a)](chalk['yellow'](_0x2b6b26(0x13c))),await new Promise(_0xf2cc32=>setTimeout(_0xf2cc32,0x2710));}});}process['on'](a0_0x33bc5c(0x12f),()=>{const _0x3dfbea=a0_0x33bc5c;console[_0x3dfbea(0x12a)](chalk['red'](_0x3dfbea(0x13b))),process[_0x3dfbea(0x133)]();}),main();