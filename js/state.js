let PLAYER_ID = null;
let CURRENT_USER = null;
let CURRENT_CHAR_SLOT = null;

let eventCatalog = { monster:[], treasure:[], special:[] };
let gearCatalog = [];
let pendingNewSlot = null;
let selectedClass = '전사';
let autoSaveTimer = null;
let saveFailCount = 0;
let oeCustom = {};
let oeCurrentKey = null;

const state = {
  heroName:'주인님의 영웅',
  heroClass:'전사',
  level:1,
  exp:0,
  gold:0,
  logs:[],
  mapHistory:[],
  currentLocation:null,
  map:null,
  markers:[],
  currentLocationMarker:null,
  pendingDecoded:null,
  battle:null,
  html5QrCode:null,
  scannerRunning:false,
  inventory:[],
  equipment:{ ...EMPTY_EQUIPMENT },
  selectedItemId:null,
  usedBarcodes:new Set(),
  shopStock:[],
  devMode:{
    luckLevel:1,
    difficulty:1,
    allowDupe:false
  }
};
