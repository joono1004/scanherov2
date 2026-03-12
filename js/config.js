const SUPABASE_URL = 'https://svyxrnwjxhwtsanexuht.supabase.co';
const SUPABASE_KEY = 'sb_publishable_IC07F5YFaruLMKsTEAPA8Q_ewH7l1ez';

const GM_ID = 'gmmaster';
const GM_FAKE_USER = {
  id: 'gm-master-0000-0000-000000000001',
  email: 'gmmaster@scanhero.local',
  isGM: true
};

const CLASS_INFO = {
  '전사': { icon:'⚔️', color:'#ff9a7a', desc:'강인한 방어와 근접 전투', stats:{atk:80,def:95,spd:50,crit:40} },
  '궁사': { icon:'🏹', color:'#63d09a', desc:'빠른 속도와 원거리 공격', stats:{atk:75,def:55,spd:95,crit:70} },
  '마법사': { icon:'🔮', color:'#b27dff', desc:'강력한 마법과 높은 치명타', stats:{atk:95,def:40,spd:65,crit:90} }
};

const rankTable = [
  { minLevel:1,  rank:'견습',  soldiers:2 },
  { minLevel:3,  rank:'전사',  soldiers:3 },
  { minLevel:5,  rank:'기사',  soldiers:4 },
  { minLevel:8,  rank:'영웅',  soldiers:5 },
  { minLevel:12, rank:'전설',  soldiers:6 }
];

const markerIcons = { 몬스터:'⚔️', 보물:'🎁', 장비:'🧰', 특수:'✨' };
const rarityOrder = ['common','uncommon','rare','epic','legendary'];
const slotLabels = {
  weapon:'무기', armor:'갑옷', shield:'방패', gloves:'장갑', boots:'장화',
  ring1:'반지1', ring2:'반지2', necklace:'목걸이', cloak:'망토', helmet:'투구', ring:'반지'
};

const EMPTY_EQUIPMENT = {
  weapon:null,
  armor:null,
  shield:null,
  gloves:null,
  boots:null,
  ring1:null,
  ring2:null,
  necklace:null,
  cloak:null,
  helmet:null
};
