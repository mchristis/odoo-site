/* <fw-scene-3d scene="inspect"> · Three.js station renderer for FactoryWalk (DEPTH-1407 prototype).
   Loads the pinned three.js build (0.184.0). DS colours only. Respects prefers-reduced-motion. */
(function () {
  if (customElements.get('fw-scene-3d')) return;
  const SRC = 'https://unpkg.com/three@0.184.0/build/three.module.js';
  let P = null; const load = () => P || (P = import(SRC));
  const C = { white: '#FFFFFF', light: '#F4F4F4', mid: '#E3E3E3', line: '#DDDDDD', g1: '#BBBBBB', g2: '#B2B3B3', g3: '#8E8E8E', dark: '#6B6B6B', ink: '#4F4F4E', orange: '#CDD62B', bg: '#F7F7F5', grid: '#EDEDED' };

  class FwScene3d extends HTMLElement {
    static get observedAttributes() { return ['scene', 'accent']; }
    connectedCallback() {
      Object.assign(this.style, { display: 'block', position: 'absolute', inset: '0', width: '100%', height: '100%', overflow: 'hidden' });
      if (this._on) return; this._on = true;
      load().then((T) => { if (this._on) this._build(T); }).catch(() => { this.dataset.failed = '1'; });
    }
    disconnectedCallback() {
      this._on = false; cancelAnimationFrame(this._raf);
      if (this._ro) this._ro.disconnect(); if (this._io) this._io.disconnect();
      if (this._r) { this._r.dispose(); this._r.domElement.remove(); this._r = null; }
    }
    attributeChangedCallback() { if (this._T && this._r) this._stage(); }

    _build(T) {
      this._T = T;
      let r;
      try { r = new T.WebGLRenderer({ antialias: true, powerPreference: 'low-power', preserveDrawingBuffer: true }); } catch (e) { this.dataset.failed = '1'; return; }
      this._r = r;
      r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      r.shadowMap.enabled = true; r.shadowMap.type = T.PCFShadowMap;
      r.outputColorSpace = T.SRGBColorSpace; r.toneMapping = T.NeutralToneMapping; r.toneMappingExposure = 1.0;
      Object.assign(r.domElement.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block' });
      this.appendChild(r.domElement);
      this._reduce = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
      this._ro = new ResizeObserver(() => requestAnimationFrame(() => this._resize())); this._ro.observe(this);
      this._vis = true;
      this._io = new IntersectionObserver((e) => { this._vis = e[0].isIntersecting; }); this._io.observe(this);
      this._stage();
      const t0 = performance.now();
      const loop = () => { this._raf = requestAnimationFrame(loop); if (!this._vis) return; this._tick((performance.now() - t0) / 1000); r.render(this._s, this._cam); };
      if (this._reduce) { this._tick(0); r.render(this._s, this._cam); } else loop();
    }

    _resize() {
      if (!this._r || !this._cam) return;
      const w = this.clientWidth || 1, h = this.clientHeight || 1, a = w / h, H = this._frameH || 7.2;
      this._r.setSize(w, h, false);
      const W = Math.max(H * a, this._frameW || 0), HH = W / a;
      Object.assign(this._cam, { left: -W / 2, right: W / 2, top: HH / 2, bottom: -HH / 2 });
      this._cam.updateProjectionMatrix();
      if (this._reduce) this._r.render(this._s, this._cam);
    }

    /* ---------- helpers ---------- */
    _mat(hex, rough, metal, extra) { return new this._T.MeshStandardMaterial(Object.assign({ color: hex, roughness: rough == null ? 0.55 : rough, metalness: metal || 0 }, extra || {})); }
    _rbox(w, h, d, r) {
      const T = this._T; r = Math.min(r, w / 2 - 0.002, h / 2 - 0.002, d / 2 - 0.002);
      const iw = w - 2 * r, ih = h - 2 * r, cr = Math.min(r * 0.6, iw / 2 - 0.001, ih / 2 - 0.001), s = new T.Shape();
      const x = -iw / 2, y = -ih / 2;
      s.moveTo(x + cr, y); s.lineTo(x + iw - cr, y); s.quadraticCurveTo(x + iw, y, x + iw, y + cr); s.lineTo(x + iw, y + ih - cr); s.quadraticCurveTo(x + iw, y + ih, x + iw - cr, y + ih);
      s.lineTo(x + cr, y + ih); s.quadraticCurveTo(x, y + ih, x, y + ih - cr); s.lineTo(x, y + cr); s.quadraticCurveTo(x, y, x + cr, y);
      const g = new T.ExtrudeGeometry(s, { depth: Math.max(0.001, d - 2 * r), bevelEnabled: true, bevelThickness: r, bevelSize: r, bevelSegments: 4, curveSegments: 6 });
      g.center(); g.computeVertexNormals(); return g;
    }
    _mesh(g, m, x, y, z, parent, name) { const o = new this._T.Mesh(g, m); o.position.set(x, y, z); o.castShadow = true; o.receiveShadow = true; if (name) o.name = name; (parent || this._s).add(o); return o; }
    _tex(w, h, draw) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new this._T.CanvasTexture(c); t.colorSpace = this._T.SRGBColorSpace; t.anisotropy = 4; return t; }
    _cellTex() {
      return this._cellT || (this._cellT = this._tex(256, 256, (g, w, h) => {
        g.fillStyle = C.mid; g.fillRect(0, 0, w, h); g.fillStyle = C.ink; g.fillRect(10, 10, w - 20, h - 20);
        g.strokeStyle = C.dark; g.lineWidth = 2; for (let k = 1; k < 6; k++) { const p = 10 + k * (w - 20) / 6; g.beginPath(); g.moveTo(p, 10); g.lineTo(p, h - 10); g.stroke(); g.beginPath(); g.moveTo(10, p); g.lineTo(w - 10, p); g.stroke(); }
      }));
    }
    _worker(x, z, rotY, pose) {
      const T = this._T, g = new T.Group(); g.name = 'worker';
      const cloth = this._m.cloth, trou = this._m.trou, shoe = this._m.ink, skin = this._m.skin, cap = this._m.white;
      [-0.095, 0.095].forEach((dx) => {
        this._mesh(new T.CapsuleGeometry(0.075, 0.66, 6, 16), trou, dx, 0.47, 0, g);
        this._mesh(this._rbox(0.13, 0.08, 0.27, 0.035), shoe, dx, 0.04, 0.05, g);
      });
      const torso = this._mesh(new T.CapsuleGeometry(0.18, 0.38, 8, 20), cloth, 0, 1.14, 0, g); torso.scale.set(1, 1, 0.72);
      this._mesh(new T.CylinderGeometry(0.05, 0.055, 0.08, 16), skin, 0, 1.5, 0, g);
      this._mesh(new T.SphereGeometry(0.11, 32, 24), skin, 0, 1.63, 0.005, g);
      this._mesh(new T.SphereGeometry(0.118, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), cap, 0, 1.655, 0, g);
      const visor = this._mesh(new T.CylinderGeometry(0.1, 0.1, 0.012, 32, 1, false, -Math.PI / 2, Math.PI), cap, 0, 1.66, 0.04, g); visor.scale.set(1, 1, 1.25);
      const ang = pose === 'screen' ? [-1.15, -1.3] : [-0.85, -0.95];
      [[-0.235, ang[0]], [0.235, ang[1]]].forEach(([dx, a]) => {
        const s = new T.Group(); s.position.set(dx, 1.4, 0); s.rotation.x = a; s.rotation.z = dx < 0 ? 0.08 : -0.08; g.add(s);
        this._mesh(new T.CapsuleGeometry(0.058, 0.46, 6, 16), cloth, 0, -0.27, 0, s);
        this._mesh(new T.SphereGeometry(0.055, 20, 14), skin, 0, -0.56, 0, s);
      });
      g.position.set(x, 0, z); g.rotation.y = rotY; this._s.add(g); return g;
    }

    /* ---------- scene ---------- */
    _stage() {
      const T = this._T, sc = this.getAttribute('scene') || 'inspect';
      const s = new T.Scene(); this._s = s; s.background = new T.Color(C.bg);
      this._anim = [];
      this._m = {
        white: this._mat(C.white, 0.42), light: this._mat(C.light, 0.5), mid: this._mat(C.mid, 0.55), g1: this._mat(C.g1, 0.45, 0.25),
        ink: this._mat(C.ink, 0.5, 0.1), dark: this._mat(C.dark, 0.4, 0.2), cloth: this._mat(C.line, 0.85), trou: this._mat(C.g3, 0.85), skin: this._mat(C.line, 0.7),
        orange: this._mat(this._ac = (this.getAttribute('accent') || C.orange), 0.4, 0, { emissive: this._ac, emissiveIntensity: 0.55 }), cell: this._mat('#FFFFFF', 0.35, 0.15, { map: this._cellTex() })
      };
      s.add(new T.HemisphereLight(0xffffff, C.mid, 1.9));
      const sun = new T.DirectionalLight(0xffffff, 2.1); sun.position.set(-5, 11, 7); sun.castShadow = true;
      Object.assign(sun.shadow.camera, { left: -11, right: 11, top: 11, bottom: -11, near: 1, far: 40 });
      sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02; sun.shadow.radius = 5; s.add(sun);
      const fill = new T.DirectionalLight(0xffffff, 0.5); fill.position.set(8, 4, -3); s.add(fill);
      const floor = new T.Mesh(new T.PlaneGeometry(80, 80), this._mat(C.bg, 0.95)); floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; s.add(floor);
      const grid = new T.GridHelper(80, 40, C.grid, C.grid); grid.position.y = 0.002; s.add(grid);
      const cam = new T.OrthographicCamera(-5, 5, 4, -4, 0.1, 100); this._cam = cam;
      const tgt = new T.Vector3(1.4, 1.0, 0.1); cam.position.copy(tgt).add(new T.Vector3(1, 0.82, 1).normalize().multiplyScalar(30)); cam.lookAt(tgt);
      this._frameH = 5.4; this._frameW = 8.8;
      (this['_sc_' + sc] || this._sc_inspect).call(this);
      this._resize();
    }

    _sc_inspect() {
      const T = this._T, m = this._m, s = this._s;
      // context blocks
      this._mesh(this._rbox(5, 2.6, 3, 0.08), m.white, 6.4, 1.3, -6.2, s, 'context');
      this._mesh(this._rbox(3, 1.2, 4, 0.08), m.white, -5.8, 0.6, 5.6, s, 'context');
      this._mesh(this._rbox(2.4, 0.9, 2.4, 0.08), m.white, 7.2, 0.45, 3.8, s, 'context');
      // inspection station base
      const st = new T.Group(); st.name = 'station-01'; s.add(st);
      this._mesh(this._rbox(3.2, 0.86, 1.6, 0.09), m.white, 0.1, 0.47, 0, st, 'base');
      this._mesh(new T.BoxGeometry(3.05, 0.06, 1.45), m.mid, 0.1, 0.03, 0, st, 'plinth');
      [-0.95, 0.1, 1.15].forEach((x) => this._mesh(new T.BoxGeometry(0.008, 0.6, 0.01), m.line || m.mid, x, 0.42, 0.805, st, 'door-line'));
      this._mesh(new T.BoxGeometry(2.6, 0.02, 1.2), m.light, -0.05, 0.905, 0, st, 'deck');
      // hood (tunnel) over the inspection table
      this._mesh(this._rbox(1.9, 0.16, 1.66, 0.07), m.white, -0.55, 1.86, 0, st, 'hood-top');
      this._mesh(this._rbox(1.9, 0.98, 0.12, 0.05), m.white, -0.55, 1.37, -0.77, st, 'hood-back');
      this._mesh(this._rbox(0.14, 0.98, 1.66, 0.06), m.white, 0.33, 1.37, 0, st, 'hood-side');
      this._mesh(new T.BoxGeometry(1.9, 0.022, 0.022), m.orange, -0.55, 1.78, 0.84, st, 'accent');
      this._mesh(new T.BoxGeometry(0.022, 0.92, 0.022), m.orange, 0.41, 1.33, 0.84, st, 'accent');
      const glow = new T.PointLight(0xffffff, 1.4, 2.4, 2); glow.position.set(-0.55, 1.6, 0.1); st.add(glow);
      // camera portal
      [-0.74, 0.74].forEach((z) => this._mesh(this._rbox(0.13, 1.5, 0.13, 0.05), m.white, 1.12, 1.6, z, st, 'portal-post'));
      this._mesh(this._rbox(0.2, 0.16, 1.62, 0.06), m.white, 1.12, 2.4, 0, st, 'portal-beam');
      this._mesh(new T.BoxGeometry(0.022, 1.42, 0.022), m.orange, 1.2, 1.6, 0.82, st, 'accent');
      const head = this._mesh(this._rbox(0.24, 0.2, 0.24, 0.04), m.g1, 1.12, 2.21, 0, st, 'camera-head');
      this._mesh(new T.CylinderGeometry(0.05, 0.05, 0.05, 24), m.ink, 0, -0.12, 0, head, 'lens');
      this._anim.push((t) => { head.position.z = Math.sin(t * 0.9) * 0.5; });
      // signal tower
      this._mesh(new T.CylinderGeometry(0.025, 0.025, 0.42, 16), m.g1, 1.55, 1.11, -0.62, st, 'signal-post');
      this._mesh(new T.CylinderGeometry(0.05, 0.05, 0.14, 24), m.orange, 1.55, 1.39, -0.62, st, 'signal-lamp');
      // cells on the inspection table
      const cg = new T.BoxGeometry(0.42, 0.012, 0.42);
      [[-1.05, 0.05], [-0.55, 0.05], [-0.05, 0.05]].forEach(([x, z]) => this._mesh(cg, m.cell, x, 0.922, z, st, 'cell'));
      // station number on the front
      const num = this._tex(512, 400, (g) => { g.fillStyle = C.ink; g.font = '300 260px "Helvetica Neue", Helvetica, Arial, sans-serif'; g.textBaseline = 'alphabetic'; g.fillText('01', 20, 280); g.fillStyle = C.orange; g.fillRect(30, 318, 120, 12); });
      const np = new T.Mesh(new T.PlaneGeometry(0.6, 0.47), new T.MeshBasicMaterial({ map: num, transparent: true, toneMapped: false })); np.position.set(1.22, 0.5, 0.812); st.add(np);
      // outfeed conveyor
      const cv = new T.Group(); cv.name = 'conveyor'; s.add(cv);
      this._mesh(this._rbox(4.2, 0.12, 0.9, 0.04), m.white, 3.8, 0.76, 0, cv, 'conveyor-frame');
      this._mesh(new T.BoxGeometry(4.15, 0.02, 0.76), m.mid, 3.8, 0.83, 0, cv, 'belt');
      [2.0, 3.8, 5.6].forEach((x) => [-0.36, 0.36].forEach((z) => this._mesh(this._rbox(0.09, 0.7, 0.09, 0.03), m.light, x, 0.35, z, cv, 'leg')));
      const mg = new T.BoxGeometry(0.62, 0.02, 0.62);
      [0, 1, 2].forEach((k) => { const c = this._mesh(mg, m.cell, 0, 0.85, 0, cv, 'cell'); this._anim.push((t) => { const L = 3.9, x = ((t * 0.32 + k * L / 3) % L); c.position.x = 1.85 + x; }); });
      // cell cart
      const cart = new T.Group(); cart.name = 'cell-cart'; cart.position.set(-3.0, 0, 1.0); s.add(cart);
      this._mesh(this._rbox(1.2, 0.06, 0.8, 0.02), m.light, 0, 0.26, 0, cart, 'cart-deck');
      [[-0.52, -0.33], [0.52, -0.33], [-0.52, 0.33], [0.52, 0.33]].forEach(([x, z]) => {
        const w = this._mesh(new T.CylinderGeometry(0.07, 0.07, 0.04, 24), m.ink, x, 0.08, z, cart, 'wheel'); w.rotation.x = Math.PI / 2;
        this._mesh(new T.CylinderGeometry(0.015, 0.015, 0.12, 12), m.g1, x, 0.19, z, cart, 'caster');
      });
      [-0.36, 0.36].forEach((z) => this._mesh(new T.CylinderGeometry(0.018, 0.018, 0.9, 12), m.g1, -0.58, 0.72, z, cart, 'handle-post'));
      const bar = this._mesh(new T.CylinderGeometry(0.018, 0.018, 0.72, 12), m.g1, -0.58, 1.17, 0, cart, 'handle'); bar.rotation.x = Math.PI / 2;
      const stackM = [m.light, m.light, m.cell, m.mid, m.light, m.light];
      [-0.24, 0.3].forEach((x) => this._mesh(new T.BoxGeometry(0.48, 0.46, 0.62), stackM, x, 0.52, 0, cart, 'cell-stack'));
      // terminal (electrical tester readout)
      const kiosk = new T.Group(); kiosk.name = 'tester-terminal'; kiosk.position.set(2.7, 0, -1.75); s.add(kiosk);
      this._mesh(this._rbox(0.34, 1.05, 0.28, 0.05), m.white, 0, 0.525, 0, kiosk, 'pedestal');
      const scr = new T.Group(); scr.position.set(0, 1.2, 0.05); scr.rotation.x = -0.55; kiosk.add(scr);
      this._mesh(this._rbox(0.66, 0.46, 0.05, 0.02), m.dark, 0, 0, 0, scr, 'screen-bezel');
      const ui = this._tex(320, 220, (g, w, h) => {
        g.fillStyle = C.white; g.fillRect(0, 0, w, h); g.fillStyle = C.ink;
        for (let a = 0; a < 3; a++) for (let b = 0; b < 4; b++) g.fillRect(40 + b * 34, 50 + a * 34, 28, 28);
        g.strokeStyle = C.orange; g.lineWidth = 6; g.beginPath(); g.arc(248, 110, 30, 0, Math.PI * 2); g.stroke();
        g.beginPath(); g.moveTo(234, 110); g.lineTo(245, 122); g.lineTo(264, 98); g.stroke();
      });
      const face = new T.Mesh(new T.PlaneGeometry(0.58, 0.39), new T.MeshBasicMaterial({ map: ui, toneMapped: false })); face.position.z = 0.027; scr.add(face);
      // operators
      this._worker(-0.62, 1.22, Math.PI, 'table');
      this._worker(2.7, -1.18, Math.PI, 'screen');
    }


    _module(x, y, z, w, d, parent, rot) {
      const T = this._T, m = this._m, g = new T.Group(); g.position.set(x, y, z); if (rot) g.rotation.x = rot; (parent || this._s).add(g);
      this._mesh(this._rbox(w, 0.05, d, 0.012), m.g1, 0, 0, 0, g, 'module-frame');
      const tex = this._cellTex().clone(); tex.needsUpdate = true; tex.wrapS = tex.wrapT = T.RepeatWrapping; tex.repeat.set(Math.round(w / 0.3), Math.round(d / 0.3));
      this._mesh(new T.BoxGeometry(w - 0.06, 0.012, d - 0.06), this._mat('#FFFFFF', 0.3, 0.1, { map: tex }), 0, 0.026, 0, g, 'module-glass');
      return g;
    }
    _lab() {
      const m = this._m, s = this._s;
      this._mesh(this._rbox(4.2, 1.6, 0.25, 0.06), m.white, -0.4, 0.8, -2.6, s, 'lab-wall');
      this._mesh(this._rbox(2.2, 0.9, 1.0, 0.06), m.white, -3.2, 0.45, -1.4, s, 'bench');
    }
    _screen(parent, x, y, z, rx, draw) {
      const T = this._T, sc = new T.Group(); sc.position.set(x, y, z); sc.rotation.x = rx || 0; parent.add(sc);
      this._mesh(this._rbox(0.62, 0.42, 0.05, 0.02), this._m.dark, 0, 0, 0, sc, 'screen-bezel');
      const f = new T.Mesh(new T.PlaneGeometry(0.56, 0.36), new T.MeshBasicMaterial({ map: this._tex(320, 210, draw), toneMapped: false })); f.position.z = 0.027; sc.add(f); return sc;
    }
    _console(x, z, draw) {
      const T = this._T, k = new T.Group(); k.name = 'console'; k.position.set(x, 0, z); this._s.add(k);
      this._mesh(this._rbox(0.7, 0.95, 0.5, 0.05), this._m.white, 0, 0.475, 0, k, 'console-body');
      this._screen(k, 0, 1.22, 0.06, -0.45, draw); return k;
    }
    _curve(g, w, h, kind) {
      g.fillStyle = C.white; g.fillRect(0, 0, w, h); g.strokeStyle = C.mid; g.lineWidth = 2; g.strokeRect(24, 20, w - 48, h - 50);
      g.strokeStyle = C.orange; g.lineWidth = 5; g.beginPath();
      for (let i = 0; i <= 60; i++) { const px = 24 + i * (w - 48) / 60, t = i / 60; let v;
        if (kind === 'iv') v = 1 - Math.pow(t, 9); else if (kind === 'tc') v = 0.5 + 0.42 * Math.sign(Math.sin(t * 18)) * Math.min(1, Math.abs(Math.sin(t * 18)) * 3); else if (kind === 'load') v = 0.5 + 0.38 * Math.sin(t * 40); else v = 0.15 + 0.7 * t;
        const py = 20 + (1 - v) * (h - 50); i ? g.lineTo(px, py) : g.moveTo(px, py); }
      g.stroke(); g.fillStyle = C.ink; g.fillRect(24, h - 20, 70, 8); g.fillRect(110, h - 20, 40, 8);
    }

    _sc_hail() {
      const T = this._T, m = this._m, s = this._s; this._lab();
      const st = new T.Group(); st.name = 'hail-launcher'; s.add(st);
      this._mesh(this._rbox(2.6, 0.62, 1.6, 0.08), m.white, 0.6, 0.31, 0, st, 'test-bed');
      this._module(0.6, 0.65, 0, 2.0, 1.2, st);
      [[-0.75, -0.85], [-0.75, 0.85], [1.95, -0.85], [1.95, 0.85]].forEach(([x, z]) => this._mesh(this._rbox(0.1, 2.0, 0.1, 0.04), m.white, x, 1.62, z, st, 'gantry-post'));
      [-0.75, 1.95].forEach((x) => this._mesh(this._rbox(0.14, 0.1, 1.8, 0.03), m.g1, x, 2.66, 0, st, 'rail'));
      const br = new T.Group(); st.add(br); this._mesh(this._rbox(2.84, 0.12, 0.16, 0.04), m.g1, 0.6, 2.74, 0, br, 'bridge');
      const car = new T.Group(); br.add(car);
      this._mesh(this._rbox(0.28, 0.22, 0.28, 0.05), m.white, 0, 2.74, 0, car, 'carriage');
      this._mesh(new T.CylinderGeometry(0.045, 0.045, 0.95, 32), m.g1, 0, 2.17, 0, car, 'barrel');
      this._mesh(new T.CylinderGeometry(0.068, 0.068, 0.07, 32), m.ink, 0, 1.68, 0, car, 'muzzle');
      this._mesh(new T.BoxGeometry(0.03, 0.03, 0.03), m.orange, 0.15, 2.86, 0, car, 'ready-lamp');
      const ball = this._mesh(new T.SphereGeometry(0.04, 24, 16), this._mat('#FFFFFF', 0.12), 0, 1.6, 0, car, 'ice-ball');
      const pts = []; for (let a = 0; a < 11; a++) pts.push([0.6 + (a % 4 - 1.5) * 0.45, ((a / 4 | 0) - 1) * 0.36]);
      const marks = pts.map(([x, z]) => { const k = this._mesh(new T.CircleGeometry(0.03, 24), m.ink, x, 0.69, z, st, 'impact'); k.rotation.x = -Math.PI / 2; k.visible = false; return k; });
      this._anim.push((t) => { const n = (t / 1.6) | 0, i = n % 11, f = (t % 1.6) / 1.6, p = pts[i];
        br.position.z = p[1]; car.position.x = p[0]; ball.visible = f > 0.55 && f < 0.8; ball.position.y = 1.6 - Math.max(0, (f - 0.55) / 0.25) * 0.92;
        marks.forEach((k, j) => { k.visible = j < i || (j === i && f >= 0.8); }); });
      this._mesh(this._rbox(0.04, 1.6, 1.1, 0.01), this._mat('#FFFFFF', 0.1, 0, { transparent: true, opacity: 0.35 }), 2.5, 0.8, 1.2, s, 'guard');
      this._console(3.1, 1.2, (g, w, h) => this._curve(g, w, h, 'v'));
      this._worker(3.1, 1.85, Math.PI, 'screen');
      this._frameH = 5.6; this._frameW = 9.2;
    }

    _sc_uv() {
      const T = this._T, m = this._m, s = this._s; this._lab();
      const st = new T.Group(); st.name = 'uv-chamber'; s.add(st);
      this._mesh(this._rbox(2.4, 2.3, 1.6, 0.1), m.white, 0.4, 1.15, -0.4, st, 'chamber');
      this._mesh(this._rbox(1.5, 1.3, 0.04, 0.03), m.g1, 0.2, 1.25, 0.41, st, 'window-frame');
      this._mesh(new T.BoxGeometry(1.36, 1.16, 0.02), this._mat('#6B6B6B', 0.1, 0.2), 0.2, 1.25, 0.44, st, 'window');
      this._mesh(new T.BoxGeometry(1.4, 0.05, 0.5), m.orange, 0.2, 1.82, 0.05, st, 'uv-lamps');
      const glow = new T.PointLight(0xffffff, 1.2, 2.2, 2); glow.position.set(0.2, 1.5, 0.1); st.add(glow);
      [0.85, 1.25].forEach((y, k) => this._module(0.2, y, -0.1, 1.2, 0.8, st));
      this._mesh(this._rbox(0.5, 0.9, 0.08, 0.03), m.light, 1.3, 1.5, 0.42, st, 'panel');
      this._screen(st, 1.3, 1.62, 0.47, 0, (g, w, h) => this._curve(g, w, h, 'v'));
      this._mesh(this._rbox(0.5, 1.5, 0.8, 0.06), m.white, 2.0, 0.75, -0.4, st, 'cooling-unit');
      [-0.25, 0.05, 0.35].forEach((z) => this._mesh(new T.BoxGeometry(0.02, 1.1, 0.02), m.g1, 2.26, 0.85, z - 0.4, st, 'vent'));
      this._mesh(new T.CylinderGeometry(0.05, 0.05, 0.14, 24), m.orange, 1.6, 2.4, -0.9, st, 'signal-lamp');
      this._anim.push((t) => { glow.intensity = 1.0 + 0.2 * Math.sin(t * 2); });
      this._worker(-1.4, 0.9, Math.PI / 2, 'screen');
    }

    _sc_chamber() {
      const T = this._T, m = this._m, s = this._s; this._lab();
      const st = new T.Group(); st.name = 'climate-chamber'; s.add(st);
      this._mesh(this._rbox(1.9, 2.4, 1.6, 0.1), m.white, 0.2, 1.2, -0.4, st, 'chamber');
      const door = new T.Group(); door.position.set(-0.75, 0, 0.42); st.add(door);
      this._mesh(this._rbox(1.7, 2.2, 0.1, 0.05), m.light, 0.85, 1.15, 0, door, 'door');
      this._mesh(this._rbox(0.8, 0.8, 0.02, 0.02), this._mat('#FFFFFF', 0.05, 0, { transparent: true, opacity: 0.3 }), 0.85, 1.4, 0.06, door, 'door-window');
      this._mesh(this._rbox(0.05, 0.5, 0.06, 0.02), m.g1, 1.55, 1.1, 0.1, door, 'handle');
      this._module(0.2, 1.1, -0.4, 1.2, 0.8, st, -0.0);
      this._mesh(this._rbox(0.9, 1.3, 1.6, 0.08), m.white, 1.65, 0.65, -0.4, st, 'refrigeration-unit');
      [0, 1, 2, 3].forEach((k) => this._mesh(new T.BoxGeometry(0.6, 0.02, 0.02), m.g1, 1.65, 0.3 + k * 0.18, 0.41, st, 'grille'));
      this._screen(st, 1.65, 1.6, 0.42, 0, (g, w, h) => this._curve(g, w, h, 'tc'));
      const dot = this._mesh(new T.SphereGeometry(0.018, 16, 12), m.orange, 1.43, 1.6, 0.46, st, 'cycle-marker');
      this._mesh(new T.CylinderGeometry(0.05, 0.05, 0.14, 24), m.orange, 1.9, 1.4, -0.9, st, 'signal-lamp');
      this._anim.push((t) => { const f = (t * 0.08) % 1; dot.position.x = 1.43 + f * 0.44; door.rotation.y = 0; });
      this._worker(-1.4, 0.9, Math.PI / 2, 'screen');
    }

    _sc_load() {
      const T = this._T, m = this._m, s = this._s; this._lab();
      const st = new T.Group(); st.name = 'mechanical-load'; s.add(st);
      this._mesh(this._rbox(2.6, 0.5, 1.6, 0.08), m.white, 0.6, 0.25, 0, st, 'base');
      [[-0.6, -0.7], [1.8, -0.7], [-0.6, 0.7], [1.8, 0.7]].forEach(([x, z]) => this._mesh(this._rbox(0.12, 0.5, 0.12, 0.03), m.g1, x, 0.75, z, st, 'module-support'));
      const mod = this._module(0.6, 1.02, 0, 2.2, 1.3, st);
      [[-0.75, 0], [1.95, 0]].forEach(([x]) => this._mesh(this._rbox(0.12, 2.0, 1.6, 0.04), m.white, x, 1.5, 0, st, 'side-frame'));
      this._mesh(this._rbox(2.84, 0.14, 1.6, 0.05), m.white, 0.6, 2.5, 0, st, 'top-beam');
      const heads = []; [-0.2, 0.6, 1.4].forEach((x) => [-0.35, 0.35].forEach((z) => {
        const r = new T.Group(); r.position.set(x, 0, z); st.add(r);
        this._mesh(new T.CylinderGeometry(0.03, 0.03, 1.1, 16), m.g1, 0, 1.85, 0, r, 'piston');
        this._mesh(new T.CylinderGeometry(0.11, 0.11, 0.04, 32), m.ink, 0, 1.28, 0, r, 'suction-pad'); heads.push(r); }));
      this._console(3.0, 1.1, (g, w, h) => this._curve(g, w, h, 'load'));
      this._anim.push((t) => { const v = Math.sin(t * 2.4); heads.forEach((r) => { r.position.y = -0.2 - 0.04 * v; }); mod.position.y = 1.02 - 0.03 * Math.max(0, v); });
      this._worker(3.0, 1.75, Math.PI, 'screen');
      this._frameH = 5.6; this._frameW = 9.2;
    }

    _aim(x, y, z, H, W) { const T = this._T, tgt = new T.Vector3(x, y, z); this._cam.position.copy(tgt).add(new T.Vector3(1, 0.82, 1).normalize().multiplyScalar(30)); this._cam.lookAt(tgt); this._frameH = H; this._frameW = W; }
    _plate(txt, x, y, z, parent) {
      const T = this._T, ac = this._ac || C.orange;
      const tx = this._tex(512, 400, (g) => { g.fillStyle = C.ink; g.font = '300 220px "Helvetica Neue", Helvetica, Arial, sans-serif'; g.fillText(txt, 20, 270); g.fillStyle = ac; g.fillRect(30, 318, 120, 12); });
      const p = new T.Mesh(new T.PlaneGeometry(0.5, 0.39), new T.MeshBasicMaterial({ map: tx, transparent: true, toneMapped: false })); p.position.set(x, y, z); parent.add(p); return p;
    }
    _pcell(parent, x, y, z) {
      const T = this._T, m = this._m, g = new T.Group(); g.position.set(x, y, z); parent.add(g);
      this._mesh(this._rbox(0.072, 0.2, 0.17, 0.008), m.ink, 0, 0, 0, g, 'prismatic-cell');
      this._mesh(new T.BoxGeometry(0.03, 0.014, 0.034), m.g1, 0, 0.107, -0.05, g, 'terminal-neg');
      this._mesh(new T.BoxGeometry(0.03, 0.014, 0.034), m.light, 0, 0.107, 0.05, g, 'terminal-pos');
      this._mesh(new T.BoxGeometry(0.02, 0.004, 0.02), m.mid, 0, 0.102, 0, g, 'vent');
      return g;
    }
    _signal(parent, x, y, z) { const T = this._T, m = this._m; this._mesh(new T.CylinderGeometry(0.022, 0.022, 0.4, 16), m.g1, x, y + 0.2, z, parent, 'signal-post'); [m.mid, m.white, m.orange].forEach((mm, k) => this._mesh(new T.CylinderGeometry(0.045, 0.045, 0.07, 24), mm, x, y + 0.44 + k * 0.075, z, parent, 'signal-lamp')); }

    _sc_fstack() {
      const T = this._T, m = this._m, s = this._s;
      this._mesh(this._rbox(4, 2.4, 2.6, 0.08), m.white, 5.2, 1.2, -4.6, s, 'context');
      this._mesh(this._rbox(2.6, 1.1, 3, 0.08), m.white, -5, 0.55, 4.4, s, 'context');
      const st = new T.Group(); st.name = 'robotic-stacking'; s.add(st);
      this._mesh(this._rbox(2.0, 0.84, 1.1, 0.08), m.white, 0.1, 0.42, 0, st, 'table');
      this._mesh(new T.BoxGeometry(1.9, 0.02, 1.0), m.light, 0.1, 0.85, 0, st, 'deck');
      this._mesh(this._rbox(0.9, 0.02, 0.26, 0.006), m.g1, 0.08, 0.87, 0, st, 'fixture-base');
      [-0.32, 0.48].forEach((x) => this._mesh(this._rbox(0.04, 0.26, 0.26, 0.01), m.g1, x, 0.99, 0, st, 'end-plate'));
      [-0.1, 0.1].forEach((z) => this._mesh(new T.BoxGeometry(0.8, 0.02, 0.02), m.mid, 0.08, 0.89, z, st, 'guide-rail'));
      const placed = []; for (let k = 0; k < 10; k++) { const c = this._pcell(st, -0.255 + k * 0.075, 0.98, 0); c.visible = false; placed.push(c); }
      const cv = new T.Group(); cv.name = 'infeed'; s.add(cv);
      this._mesh(this._rbox(1.4, 0.08, 0.36, 0.03), m.white, -1.75, 0.8, 0, cv, 'conveyor');
      this._mesh(new T.BoxGeometry(1.36, 0.012, 0.28), m.mid, -1.75, 0.845, 0, cv, 'belt');
      [-2.3, -1.2].forEach((x) => [-0.13, 0.13].forEach((z) => this._mesh(this._rbox(0.06, 0.76, 0.06, 0.02), m.light, x, 0.38, z, cv, 'leg')));
      const wait = [-1.33, -1.55, -1.77, -1.99].map((x) => this._pcell(cv, x, 0.95, 0));
      const P0 = [-0.55, -0.58], L1 = 0.62, L2 = 0.56, top = 1.46;
      this._mesh(this._rbox(0.36, 0.86, 0.36, 0.05), m.white, P0[0], 0.43, P0[1], st, 'robot-pedestal');
      this._mesh(new T.CylinderGeometry(0.13, 0.15, 0.52, 32), m.white, P0[0], 1.12, P0[1], st, 'robot-column');
      this._mesh(new T.BoxGeometry(0.05, 0.05, 0.02), m.orange, P0[0], 1.2, P0[1] + 0.15, st, 'robot-status');
      const a1 = new T.Group(); a1.position.set(P0[0], top, P0[1]); st.add(a1);
      this._mesh(this._rbox(L1 + 0.16, 0.11, 0.17, 0.05), m.white, L1 / 2, 0, 0, a1, 'arm-1');
      const a2 = new T.Group(); a2.position.set(L1, 0.1, 0); a1.add(a2);
      this._mesh(new T.CylinderGeometry(0.075, 0.075, 0.1, 32), m.g1, 0, -0.04, 0, a2, 'elbow');
      this._mesh(this._rbox(L2 + 0.12, 0.09, 0.13, 0.04), m.white, L2 / 2, 0, 0, a2, 'arm-2');
      const q = new T.Group(); q.position.set(L2, 0, 0); a2.add(q);
      this._mesh(new T.CylinderGeometry(0.02, 0.02, 0.5, 16), m.g1, 0, -0.18, 0, q, 'quill');
      const grip = new T.Group(); q.add(grip);
      this._mesh(this._rbox(0.09, 0.03, 0.18, 0.01), m.dark, 0, -0.44, 0, grip, 'vacuum-gripper');
      [-0.05, 0.05].forEach((z) => this._mesh(new T.CylinderGeometry(0.018, 0.018, 0.02, 16), m.ink, 0, -0.465, z, grip, 'suction-cup'));
      const held = this._pcell(grip, 0, -0.58, 0);
      const ik = (x, z) => { const dx = x - P0[0], dz = z - P0[1], dd = Math.min(L1 + L2 - 0.001, Math.hypot(dx, dz)); const e = Math.acos(Math.max(-1, Math.min(1, (dd * dd - L1 * L1 - L2 * L2) / (2 * L1 * L2)))); const base = Math.atan2(-dz, dx) - Math.atan2(L2 * Math.sin(e), L1 + L2 * Math.cos(e)); return [base, e]; };
      const pick = [-1.11, 0], sm = (u) => u * u * (3 - 2 * u), TT = 2.6;
      this._anim.push((t) => {
        const n = Math.floor(t / TT) % 11, f = (t % TT) / TT;
        placed.forEach((c, k) => { c.visible = k < n; });
        const slot = [-0.255 + Math.min(n, 9) * 0.075, 0];
        let x, z, dn, carry;
        if (f < 0.15) { [x, z] = pick; dn = sm(Math.min(1, f / 0.075 > 1 ? (0.15 - f) / 0.075 : f / 0.075)); carry = f > 0.075; }
        else if (f < 0.5) { const u = sm((f - 0.15) / 0.35); x = pick[0] + (slot[0] - pick[0]) * u; z = pick[1] + (slot[1] - pick[1]) * u; dn = 0; carry = true; }
        else if (f < 0.65) { [x, z] = slot; const u = (f - 0.5) / 0.15; dn = sm(u < 0.5 ? u * 2 : (1 - u) * 2); carry = u < 0.5; }
        else { const u = sm((f - 0.65) / 0.35); x = slot[0] + (pick[0] - slot[0]) * u; z = slot[1] + (pick[1] - slot[1]) * u; dn = 0; carry = false; }
        if (n >= 10) carry = false;
        const [b, e] = ik(x, z); a1.rotation.y = b; a2.rotation.y = e; grip.rotation.y = -(b + e); grip.position.y = -0.1 * dn;
        held.visible = carry; wait[0].visible = !(carry && f < 0.5) && n < 10 || f >= 0.65;
      });
      this._signal(st, 1.0, 0.84, -0.42);
      this._plate('P05', 0.72, 0.46, 0.555, st);
      this._console(1.95, -1.25, (g, w, h) => { g.fillStyle = C.white; g.fillRect(0, 0, w, h); g.fillStyle = C.ink; for (let k = 0; k < 10; k++) g.fillRect(30 + k * 26, 70, 18, 70); g.fillStyle = this._ac || C.orange; g.fillRect(30, 160, 150, 8); });
      this._worker(1.95, -0.6, Math.PI, 'screen');
      this._aim(-0.2, 0.9, 0, 3.8, 6.4);
    }

    _sc_fweld() {
      const T = this._T, m = this._m, s = this._s;
      this._mesh(this._rbox(4, 2.4, 2.6, 0.08), m.white, 5.2, 1.2, -4.6, s, 'context');
      const st = new T.Group(); st.name = 'laser-welding'; s.add(st);
      this._mesh(this._rbox(2.2, 0.88, 1.4, 0.08), m.white, 0, 0.44, 0, st, 'machine-base');
      this._mesh(new T.BoxGeometry(2.1, 0.02, 1.3), m.light, 0, 0.89, 0, st, 'bed');
      const mod = new T.Group(); mod.position.set(0, 0.9, 0); st.add(mod);
      this._mesh(this._rbox(0.9, 0.02, 0.26, 0.006), m.g1, 0.08, 0, 0, mod, 'fixture');
      [-0.32, 0.48].forEach((x) => this._mesh(this._rbox(0.04, 0.24, 0.24, 0.01), m.g1, x, 0.12, 0, mod, 'end-plate'));
      for (let k = 0; k < 10; k++) this._pcell(mod, -0.255 + k * 0.075, 0.11, 0);
      const bus = this._mat('#C8C8C8', 0.3, 0.6);
      [-0.05, 0.05].forEach((z, r) => { for (let k = 0; k < 5; k++) { const x0 = -0.255 + (2 * k + (r ? 1 : 0)) * 0.075; if (x0 + 0.075 > 0.44) continue; this._mesh(new T.BoxGeometry(0.13, 0.006, 0.04), bus, x0 + 0.0375, 0.22, z, mod, 'busbar'); } });
      const joints = []; [-0.05, 0.05].forEach((z) => { for (let k = 0; k < 10; k++) joints.push([-0.255 + k * 0.075, z]); });
      const done = joints.map(([x, z]) => { const d = this._mesh(new T.CylinderGeometry(0.008, 0.008, 0.002, 12), m.dark, x, 0.224, z, mod, 'weld'); d.visible = false; return d; });
      [[-0.95, -0.55], [-0.95, 0.55], [0.95, -0.55], [0.95, 0.55]].forEach(([x, z]) => this._mesh(this._rbox(0.08, 1.2, 0.08, 0.03), m.white, x, 1.5, z, st, 'gantry-post'));
      [-0.95, 0.95].forEach((x) => this._mesh(this._rbox(0.12, 0.08, 1.26, 0.03), m.g1, x, 2.12, 0, st, 'y-rail'));
      const br = new T.Group(); st.add(br);
      this._mesh(this._rbox(2.04, 0.1, 0.14, 0.04), m.white, 0, 2.2, 0, br, 'x-beam');
      const hd = new T.Group(); br.add(hd);
      this._mesh(this._rbox(0.2, 0.18, 0.2, 0.04), m.white, 0, 2.2, 0.1, hd, 'carriage');
      this._mesh(this._rbox(0.16, 0.3, 0.16, 0.03), m.g1, 0, 1.92, 0.1, hd, 'galvanometer');
      this._mesh(new T.CylinderGeometry(0.05, 0.05, 0.08, 24), m.ink, 0, 1.74, 0.1, hd, 'field-lens');
      this._mesh(this._rbox(0.07, 0.1, 0.07, 0.015), m.dark, 0.13, 1.88, 0.1, hd, 'ccd-camera');
      this._mesh(new T.TorusGeometry(0.06, 0.008, 8, 32), m.light, 0, 1.69, 0.1, hd, 'ring-light').rotation.x = Math.PI / 2;
      const spark = this._mesh(new T.SphereGeometry(0.012, 12, 8), m.orange, 0, 1.125, 0.1, hd, 'weld-point'); spark.visible = false;
      const glow = new T.PointLight(this._ac || C.orange, 0, 0.6, 2); glow.position.set(0, 1.15, 0.1); hd.add(glow);
      const glass = this._mat('#FFFFFF', 0.05, 0, { transparent: true, opacity: 0.16 });
      this._mesh(this._rbox(2.14, 1.16, 0.02, 0.01), glass, 0, 1.5, 0.66, st, 'guard-front');
      this._mesh(this._rbox(0.02, 1.16, 1.3, 0.01), glass, 1.03, 1.5, 0, st, 'guard-side');
      this._mesh(this._rbox(2.14, 1.16, 0.02, 0.01), this._mat('#FFFFFF', 0.5), 0, 1.5, -0.66, st, 'guard-back');
      this._mesh(new T.BoxGeometry(2.14, 0.03, 0.03), m.orange, 0, 0.92, 0.7, st, 'accent');
      const cool = new T.Group(); cool.position.set(-1.55, 0, 0.45); st.add(cool);
      this._mesh(this._rbox(0.5, 0.9, 0.62, 0.05), m.white, 0, 0.45, 0, cool, 'water-chiller');
      [0, 1, 2, 3, 4].forEach((k) => this._mesh(new T.BoxGeometry(0.02, 0.5, 0.36), m.g1, 0.26, 0.45, -0.05 + 0, cool, 'grille').position.y = 0.3 + k * 0.1);
      this._mesh(this._rbox(0.5, 1.0, 0.42, 0.05), m.white, -1.55, 0.5, -0.3, st, 'laser-source');
      this._signal(st, -1.55, 1.0, -0.3);
      this._plate('P12', 0.7, 0.46, 0.705, st);
      this._console(2.0, -1.35, (g, w, h) => { g.fillStyle = C.ink; g.fillRect(0, 0, w, h); g.strokeStyle = this._ac || C.orange; g.lineWidth = 4; g.beginPath(); g.arc(160, 105, 34, 0, Math.PI * 2); g.stroke(); g.beginPath(); g.moveTo(110, 105); g.lineTo(210, 105); g.moveTo(160, 55); g.lineTo(160, 155); g.stroke(); });
      this._worker(2.0, -0.7, Math.PI, 'screen');
      const TT = 0.55;
      this._anim.push((t) => {
        const tot = joints.length + 3, n = Math.floor(t / TT) % tot, f = (t % TT) / TT, j = Math.min(n, joints.length - 1), p = joints[j];
        const prev = joints[Math.max(0, j - 1)], u = n >= joints.length ? 1 : Math.min(1, f / 0.4), ux = prev[0] + (p[0] - prev[0]) * u, uz = prev[1] + (p[1] - prev[1]) * u;
        hd.position.x = ux; br.position.z = uz - 0.1;
        const on = n < joints.length && f > 0.45 && f < 0.8; spark.visible = on; glow.intensity = on ? 0.8 : 0;
        done.forEach((d, k) => { d.visible = k < n || (k === n && f >= 0.8); });
      });
      this._aim(0, 1.2, 0, 3.8, 6.4);
    }

    _sc_funload() {
      const T = this._T, m = this._m, s = this._s;
      this._mesh(this._rbox(4, 2.4, 2.6, 0.08), m.white, 5.2, 1.2, -4.6, s, 'context');
      const st = new T.Group(); st.name = 'module-unloading'; s.add(st);
      const mkMod = (p) => { const g = new T.Group(); p.add(g); this._mesh(this._rbox(0.9, 0.02, 0.26, 0.006), m.g1, 0, 0, 0, g, 'fixture'); [-0.4, 0.4].forEach((x) => this._mesh(this._rbox(0.04, 0.24, 0.24, 0.01), m.g1, x, 0.12, 0, g, 'end-plate')); for (let k = 0; k < 10; k++) this._pcell(g, -0.3375 + k * 0.075, 0.11, 0); this._mesh(this._rbox(0.76, 0.012, 0.18, 0.004), m.light, 0, 0.222, 0, g, 'busbars'); return g; };
      this._mesh(this._rbox(1.8, 0.08, 0.5, 0.03), m.white, -1.3, 0.8, 0, st, 'line-end-conveyor');
      this._mesh(new T.BoxGeometry(1.76, 0.012, 0.42), m.mid, -1.3, 0.845, 0, st, 'belt');
      [-2.0, -0.6].forEach((x) => [-0.2, 0.2].forEach((z) => this._mesh(this._rbox(0.06, 0.76, 0.06, 0.02), m.light, x, 0.38, z, st, 'leg')));
      const onLine = mkMod(st); onLine.position.set(-0.85, 0.86, 0);
      const next = mkMod(st); next.position.set(-1.85, 0.86, 0);
      const P = [0.2, -0.75];
      this._mesh(new T.CylinderGeometry(0.22, 0.26, 0.12, 32), m.g1, P[0], 0.06, P[1], st, 'arm-base');
      this._mesh(new T.CylinderGeometry(0.08, 0.08, 1.9, 24), m.white, P[0], 1.07, P[1], st, 'mast');
      const rot = new T.Group(); rot.position.set(P[0], 0, P[1]); st.add(rot);
      const lift = new T.Group(); rot.add(lift);
      this._mesh(this._rbox(0.22, 0.2, 0.22, 0.04), m.white, 0, 1.6, 0, lift, 'lift-carriage');
      this._mesh(new T.BoxGeometry(0.05, 0.05, 0.02), m.orange, 0, 1.6, 0.12, lift, 'status');
      this._mesh(this._rbox(1.2, 0.1, 0.12, 0.04), m.white, 0.6, 1.62, 0, lift, 'boom');
      const hook = new T.Group(); hook.position.set(1.05, 1.55, 0); lift.add(hook);
      this._mesh(new T.CylinderGeometry(0.02, 0.02, 0.36, 12), m.g1, 0, -0.18, 0, hook, 'drop');
      this._mesh(this._rbox(0.96, 0.04, 0.12, 0.015), m.dark, 0, -0.38, 0, hook, 'lifting-beam');
      [-0.42, 0.42].forEach((x) => this._mesh(this._rbox(0.03, 0.2, 0.3, 0.008), m.dark, x, -0.48, 0, hook, 'clamp'));
      const held = mkMod(hook); held.position.set(0, -0.62, 0);
      const cart = new T.Group(); cart.name = 'transport-cart'; cart.position.set(1.0, 0, 0.35); st.add(cart);
      this._mesh(this._rbox(1.1, 0.06, 0.7, 0.03), m.white, 0, 0.5, 0, cart, 'cart-deck');
      this._mesh(this._rbox(1.1, 0.04, 0.7, 0.03), m.light, 0, 0.18, 0, cart, 'cart-shelf');
      [[-0.5, -0.3], [-0.5, 0.3], [0.5, -0.3], [0.5, 0.3]].forEach(([x, z]) => { this._mesh(this._rbox(0.04, 0.42, 0.04, 0.01), m.light, x, 0.31, z, cart, 'cart-post'); this._mesh(new T.CylinderGeometry(0.05, 0.05, 0.04, 16), m.ink, x, 0.05, z, cart, 'castor').rotation.x = Math.PI / 2; });
      this._mesh(this._rbox(0.04, 0.4, 0.6, 0.02), m.g1, 0.6, 0.8, 0, cart, 'handle');
      const onCart = [-0.17, 0.17].map((z) => { const g = mkMod(cart); g.position.set(0, 0.54, z); g.visible = false; return g; });
      this._signal(st, -0.4, 0.84, -0.32);
      this._plate('P17', 0.75, 0.33, 0.705, st);
      this._console(1.9, -1.0, (g, w, h) => { g.fillStyle = C.white; g.fillRect(0, 0, w, h); g.fillStyle = C.ink; g.fillRect(30, 60, 140, 26); g.fillRect(30, 100, 220, 10); g.fillStyle = this._ac || C.orange; g.fillRect(30, 130, 90, 10); });
      this._worker(1.9, -0.4, Math.PI, 'screen');
      const pick = Math.atan2(-(0 - P[1]), -0.85 - P[0]), drop = [Math.atan2(-(0.18 - P[1]), 1.0 - P[0]), Math.atan2(-(0.52 - P[1]), 1.0 - P[0])];
      const sm = (u) => u * u * (3 - 2 * u), TT = 6;
      this._anim.push((t) => {
        const cyc = Math.floor(t / TT) % 3, f = (t % TT) / TT, d = drop[Math.min(cyc, 1)];
        let a = pick, up = 0, carry = false;
        if (cyc === 2) { a = pick; up = 0.4; }
        else if (f < 0.15) { up = sm(f / 0.15) * 0; carry = f > 0.1; up = f > 0.1 ? sm((f - 0.1) / 0.05) * 0.1 : 0; }
        else if (f < 0.3) { carry = true; up = 0.1 + sm((f - 0.15) / 0.15) * 0.3; }
        else if (f < 0.55) { carry = true; up = 0.4; a = pick + (d - pick) * sm((f - 0.3) / 0.25); }
        else if (f < 0.7) { carry = true; a = d; up = 0.4 - sm((f - 0.55) / 0.15) * 0.42; }
        else { a = d + (pick - d) * sm((f - 0.7) / 0.3); up = -0.02 + sm((f - 0.7) / 0.3) * 0.02; }
        rot.rotation.y = a; lift.position.y = up;
        hook.rotation.y = -a;
        held.visible = carry;
        onLine.visible = cyc < 2 && f < 0.1;
        next.visible = cyc === 0 || (cyc === 1 && f < 0.7); next.position.x = (cyc === 0 && f > 0.7) ? -1.85 + sm((f - 0.7) / 0.3) : (cyc === 1 ? -0.85 : -1.85);
        if (cyc === 1 && f < 0.1) next.visible = false;
        onCart[0].visible = cyc > 0 || f >= 0.7;
        onCart[1].visible = cyc === 2 || (cyc === 1 && f >= 0.7);
      });
      this._aim(-0.3, 0.9, -0.2, 3.8, 6.4);
    }

    _sc_fpress() {
      const T = this._T, m = this._m, s = this._s;
      this._mesh(this._rbox(4, 2.4, 2.6, 0.08), m.white, 5.2, 1.2, -4.6, s, 'context');
      const st = new T.Group(); st.name = 'compression-bundling'; s.add(st);
      this._mesh(this._rbox(2.4, 0.84, 1.2, 0.08), m.white, 0, 0.42, 0, st, 'press-frame-base');
      this._mesh(new T.BoxGeometry(2.3, 0.02, 1.1), m.light, 0, 0.85, 0, st, 'bed');
      [-1.1, 1.1].forEach((x) => this._mesh(this._rbox(0.18, 0.7, 0.7, 0.04), m.white, x, 1.2, 0, st, 'press-stand'));
      [-0.18, 0.18].forEach((z) => this._mesh(new T.CylinderGeometry(0.025, 0.025, 2.2, 16), m.mid, 0, 1.18, z, st, 'tie-rod').rotation.z = Math.PI / 2);
      const cyl = this._mesh(new T.CylinderGeometry(0.11, 0.11, 0.4, 24), m.g1, -0.82, 1.08, 0, st, 'hydraulic-cylinder'); cyl.rotation.z = Math.PI / 2;
      const ram = new T.Group(); st.add(ram);
      this._mesh(new T.CylinderGeometry(0.04, 0.04, 0.3, 16), m.light, -0.55, 1.08, 0, ram, 'piston').rotation.z = Math.PI / 2;
      this._mesh(this._rbox(0.05, 0.34, 0.34, 0.01), m.dark, -0.4, 1.08, 0, ram, 'pressure-plate');
      this._mesh(this._rbox(0.05, 0.34, 0.34, 0.01), m.dark, 0.52, 1.08, 0, st, 'fixed-plate');
      const stack = new T.Group(); st.add(stack);
      const cells = []; for (let k = 0; k < 10; k++) cells.push(this._pcell(stack, 0, 0.98, 0));
      const ends = [-1, 1].map(() => this._mesh(this._rbox(0.04, 0.24, 0.24, 0.01), m.g1, 0, 0.99, 0, stack, 'end-plate'));
      const straps = [-0.06, 0.06].map((z) => { const g = new T.Group(); stack.add(g); this._mesh(new T.BoxGeometry(0.86, 0.006, 0.02), m.orange, 0.06, 1.1, z, g, 'band-top'); this._mesh(new T.BoxGeometry(0.86, 0.006, 0.02), m.orange, 0.06, 0.875, z, g, 'band-bottom'); g.visible = false; return g; });
      const gauge = this._mesh(this._rbox(0.22, 0.22, 0.06, 0.02), m.white, -1.1, 1.7, 0.2, st, 'force-display');
      const bar = this._mesh(new T.BoxGeometry(0.16, 0.02, 0.01), m.orange, -1.1, 1.62, 0.235, st, 'force-bar');
      this._signal(st, 1.1, 1.55, -0.2);
      this._plate('P06', 0.85, 0.46, 0.605, st);
      this._console(2.1, -1.3, (g, w, h) => { g.fillStyle = C.white; g.fillRect(0, 0, w, h); g.strokeStyle = C.ink; g.lineWidth = 4; g.beginPath(); g.moveTo(30, 170); g.lineTo(120, 150); g.lineTo(200, 80); g.lineTo(290, 70); g.stroke(); g.fillStyle = this._ac || C.orange; g.fillRect(30, 60, 80, 8); });
      this._worker(2.1, -0.7, Math.PI, 'screen');
      const sm = (u) => u * u * (3 - 2 * u), TT = 7, L0 = 0.095, L1 = 0.075;
      this._anim.push((t) => {
        const f = (t % TT) / TT;
        let c = 0, slide = 0; if (f < 0.15) slide = 1 - sm(f / 0.15); else if (f < 0.45) c = sm((f - 0.15) / 0.3); else if (f < 0.85) c = 1; else { c = 1; slide = -sm((f - 0.85) / 0.15); }
        const p = L0 + (L1 - L0) * c, len = p * 9, x0 = 0.5 - 0.025 - 0.02 - len - 0.036;
        stack.position.x = slide * -1.6; stack.visible = true;
        cells.forEach((cl, k) => { cl.position.x = x0 + 0.036 + k * p; });
        ends[0].position.x = x0 - 0.0; ends[1].position.x = x0 + 0.072 + len + 0.02;
        ram.position.x = (ends[0].position.x - 0.045) - (-0.4) + (slide ? slide * 0 : 0);
        if (slide) ram.position.x = -0.3;
        bar.scale.x = Math.max(0.05, c); bar.position.x = -1.18 + 0.08 * Math.max(0.05, c);
        straps.forEach((g, k) => { g.visible = f > 0.55 + k * 0.1 && f < 0.98; g.position.x = x0 + 0.12 - 0.06 - 0.06; });
      });
      this._aim(0.1, 1.0, 0, 3.6, 6.2);
    }

    _sc_fclean() {
      const T = this._T, m = this._m, s = this._s;
      this._mesh(this._rbox(4, 2.4, 2.6, 0.08), m.white, 5.2, 1.2, -4.6, s, 'context');
      const st = new T.Group(); st.name = 'terminal-cleaning'; s.add(st);
      this._mesh(this._rbox(2.0, 0.88, 1.3, 0.08), m.white, 0, 0.44, 0, st, 'machine-base');
      this._mesh(new T.BoxGeometry(1.9, 0.02, 1.2), m.light, 0, 0.89, 0, st, 'bed');
      const mod = new T.Group(); mod.position.set(0, 0.9, 0); st.add(mod);
      this._mesh(this._rbox(0.9, 0.02, 0.26, 0.006), m.g1, 0.08, 0, 0, mod, 'fixture');
      [-0.32, 0.48].forEach((x) => this._mesh(this._rbox(0.04, 0.24, 0.24, 0.01), m.g1, x, 0.12, 0, mod, 'end-plate'));
      for (let k = 0; k < 10; k++) this._pcell(mod, -0.255 + k * 0.075, 0.11, 0);
      const pads = []; [-0.05, 0.05].forEach((z) => { for (let k = 0; k < 10; k++) pads.push(this._mesh(new T.BoxGeometry(0.032, 0.003, 0.036), m.dark, -0.255 + k * 0.075, 0.216, z, mod, 'oxide')); });
      [[-0.88, -0.58], [-0.88, 0.58], [0.88, -0.58], [0.88, 0.58]].forEach(([x, z]) => this._mesh(this._rbox(0.07, 1.1, 0.07, 0.03), m.white, x, 1.45, z, st, 'frame-post'));
      const br = new T.Group(); st.add(br);
      this._mesh(this._rbox(1.84, 0.09, 0.13, 0.04), m.white, 0, 2.0, 0, br, 'gantry-beam');
      const hd = new T.Group(); br.add(hd);
      this._mesh(this._rbox(0.18, 0.16, 0.18, 0.04), m.white, 0, 2.0, 0.1, hd, 'carriage');
      this._mesh(this._rbox(0.14, 0.32, 0.14, 0.03), m.g1, 0, 1.74, 0.1, hd, 'cleaning-head');
      this._mesh(new T.CylinderGeometry(0.035, 0.045, 0.1, 24), m.ink, 0, 1.54, 0.1, hd, 'nozzle');
      this._mesh(new T.CylinderGeometry(0.012, 0.012, 0.5, 12), m.mid, 0.1, 1.85, 0.1, hd, 'extraction-hose');
      const beam = this._mesh(new T.CylinderGeometry(0.004, 0.012, 0.37, 12), m.orange, 0, 1.305, 0.1, hd, 'laser-line'); beam.visible = false;
      const glass = this._mat('#FFFFFF', 0.05, 0, { transparent: true, opacity: 0.16 });
      this._mesh(this._rbox(1.86, 1.1, 0.02, 0.01), glass, 0, 1.45, 0.61, st, 'enclosure-front');
      this._mesh(this._rbox(0.02, 1.1, 1.2, 0.01), glass, 0.9, 1.45, 0, st, 'enclosure-side');
      this._mesh(this._rbox(1.86, 1.1, 0.02, 0.01), this._mat('#FFFFFF', 0.5), 0, 1.45, -0.61, st, 'enclosure-back');
      this._mesh(this._rbox(1.86, 0.03, 1.24, 0.01), m.white, 0, 2.02, 0, st, 'enclosure-roof').visible = false;
      this._mesh(new T.BoxGeometry(1.86, 0.03, 0.03), m.orange, 0, 0.92, 0.65, st, 'accent');
      this._mesh(this._rbox(0.46, 0.8, 0.5, 0.05), m.white, -1.4, 0.4, -0.3, st, 'fume-extractor');
      this._signal(st, 0.8, 2.0, -0.55);
      this._mesh(this._rbox(0.05, 0.34, 0.46, 0.02), m.ink, 1.45, 1.35, -0.3, st, 'touch-screen');
      this._plate('P10', 0.62, 0.46, 0.655, st);
      this._mesh(this._rbox(0.05, 0.5, 0.05, 0.02), m.g1, 1.45, 0.9, -0.3, st, 'screen-pole');
      this._worker(1.9, -0.3, -Math.PI / 2, 'screen');
      const TT = 0.32, bright = m.light;
      this._anim.push((t) => {
        const tot = pads.length + 4, n = Math.floor(t / TT) % tot, f = (t % TT) / TT, j = Math.min(n, pads.length - 1);
        const x = -0.255 + (j % 10) * 0.075, z = j < 10 ? -0.05 : 0.05;
        hd.position.x = x; br.position.z = z - 0.1;
        beam.visible = n < pads.length && f > 0.2;
        pads.forEach((p, k) => { p.material = (k < n || (k === n && f > 0.6)) && n < pads.length ? bright : m.dark; });
      });
      this._aim(0, 1.2, 0, 3.6, 6.2);
    }

    _sc_cspot() {
      const T = this._T, m = this._m, s = this._s;
      this._mesh(this._rbox(4, 2.4, 2.6, 0.08), m.white, 5.2, 1.2, -4.6, s, 'context');
      const st = new T.Group(); st.name = 'double-sided-spot-welding'; s.add(st);
      this._mesh(this._rbox(2.2, 0.86, 1.3, 0.08), m.white, 0, 0.43, 0, st, 'machine-base');
      this._mesh(new T.BoxGeometry(2.1, 0.02, 1.2), m.light, 0, 0.87, 0, st, 'bed');
      const pack = new T.Group(); pack.position.set(0, 0.88, 0); st.add(pack);
      const NX = 8, NZ = 4, P = 0.075, R = 0.034, H = 0.26, y0 = 0.17;
      this._mesh(this._rbox(NX * P + 0.04, 0.03, NZ * P + 0.04, 0.008), m.g1, 0, y0 - H / 2 + 0.035, 0, pack, 'holder-bottom');
      this._mesh(this._rbox(NX * P + 0.04, 0.03, NZ * P + 0.04, 0.008), m.g1, 0, y0 + H / 2 - 0.035, 0, pack, 'holder-top');
      this._mesh(this._rbox(NX * P + 0.08, 0.02, NZ * P + 0.08, 0.008), m.dark, 0, 0.01, 0, pack, 'fixture');
      const cg = new T.CylinderGeometry(R, R, H, 24), capG = new T.CylinderGeometry(R * 0.55, R * 0.55, 0.006, 16);
      const pts = [];
      for (let i = 0; i < NX; i++) for (let k = 0; k < NZ; k++) { const x = (i - (NX - 1) / 2) * P, z = (k - (NZ - 1) / 2) * P; this._mesh(cg, m.ink, x, y0, z, pack, 'cylindrical-cell'); this._mesh(capG, m.light, x, y0 + H / 2 + 0.003, z, pack, 'cell-cap'); pts.push([x, z]); }
      const nickel = this._mat('#C9C9C9', 0.3, 0.6);
      for (let i = 0; i < NX; i++) { const x = (i - (NX - 1) / 2) * P; this._mesh(new T.BoxGeometry(0.03, 0.004, NZ * P), nickel, x, y0 + H / 2 + 0.008, 0, pack, 'nickel-strip-top'); this._mesh(new T.BoxGeometry(0.03, 0.004, NZ * P), nickel, x, y0 - H / 2 - 0.004, 0, pack, 'nickel-strip-bottom'); }
      const welds = pts.map(([x, z]) => { const d = this._mesh(new T.CylinderGeometry(0.007, 0.007, 0.002, 10), m.dark, x, y0 + H / 2 + 0.011, z, pack, 'spot-weld'); d.visible = false; return d; });
      [[-0.95, -0.55], [-0.95, 0.55], [0.95, -0.55], [0.95, 0.55]].forEach(([x, z]) => this._mesh(this._rbox(0.08, 1.15, 0.08, 0.03), m.white, x, 1.45, z, st, 'gantry-post'));
      const br = new T.Group(); st.add(br);
      this._mesh(this._rbox(1.98, 0.1, 0.14, 0.04), m.white, 0, 2.08, 0, br, 'x-beam');
      const hd = new T.Group(); br.add(hd);
      this._mesh(this._rbox(0.22, 0.18, 0.2, 0.04), m.white, 0, 2.08, 0, hd, 'carriage');
      const tips = [];
      [-0.035, 0.035].forEach((dx, k) => { const g = new T.Group(); hd.add(g); this._mesh(this._rbox(0.06, 0.34, 0.08, 0.015), k ? m.g1 : m.dark, dx, 1.84, 0, g, 'weld-head'); this._mesh(new T.CylinderGeometry(0.008, 0.012, 0.16, 12), m.mid, dx, 1.6, 0, g, 'electrode'); tips.push(g); });
      this._mesh(new T.CylinderGeometry(0.01, 0.01, 0.4, 10), m.mid, 0.12, 1.9, 0, hd, 'cooling-line');
      const spark = this._mesh(new T.SphereGeometry(0.014, 12, 8), m.orange, 0, 1.33, 0, hd, 'spark'); spark.visible = false;
      const lo = new T.Group(); st.add(lo);
      this._mesh(this._rbox(0.12, 0.18, 0.12, 0.02), m.g1, 0, 0.58, 0, lo, 'lower-head');
      this._mesh(this._rbox(1.9, 0.06, 0.08, 0.02), m.mid, 0, 0.47, 0.5, st, 'lower-rail');
      this._mesh(this._rbox(0.5, 0.9, 0.5, 0.05), m.white, -1.5, 0.45, -0.3, st, 'weld-power-supply');
      this._mesh(this._rbox(0.4, 0.7, 0.45, 0.05), m.white, -1.5, 0.35, 0.35, st, 'water-cooler');
      this._mesh(new T.BoxGeometry(2.0, 0.03, 0.03), m.orange, 0, 0.9, 0.67, st, 'accent');
      this._signal(st, 0.95, 2.03, -0.55);
      this._plate('C08', 0.75, 0.44, 0.665, st);
      this._console(1.9, -1.0, (g, w, h) => { g.fillStyle = C.white; g.fillRect(0, 0, w, h); g.fillStyle = C.ink; for (let i = 0; i < 8; i++) for (let k = 0; k < 4; k++) g.fillRect(40 + i * 30, 50 + k * 30, 20, 20); g.fillStyle = this._ac || C.orange; g.fillRect(40, 175, 120, 8); });
      this._worker(1.9, -0.4, Math.PI, 'screen');
      const TT = 0.4, order = []; for (let i = 0; i < NX; i++) for (let k = 0; k < NZ; k++) order.push(i * NZ + (i % 2 ? NZ - 1 - k : k));
      this._anim.push((t) => {
        const tot = order.length + 4, n = Math.floor(t / TT) % tot, f = (t % TT) / TT, j = order[Math.min(n, order.length - 1)], [x, z] = pts[j];
        hd.position.x = x; br.position.z = z; lo.position.set(x, 0, z);
        const dn = n < order.length && f > 0.3 && f < 0.8 ? Math.sin((f - 0.3) / 0.5 * Math.PI) * 0.03 : 0;
        tips.forEach((g) => { g.position.y = -dn; }); lo.position.y = dn * 0.5;
        spark.visible = n < order.length && f > 0.5 && f < 0.62;
        welds.forEach((d, k) => { d.visible = false; }); for (let q = 0; q < Math.min(n + (f > 0.62 ? 1 : 0), order.length); q++) welds[order[q]].visible = true;
      });
      this._aim(0, 1.2, 0, 3.6, 6.2);
    }

    _sc_csort() {
      const T = this._T, m = this._m, s = this._s;
      this._mesh(this._rbox(4, 2.4, 2.6, 0.08), m.white, 5.2, 1.2, -4.6, s, 'context');
      const st = new T.Group(); st.name = 'automatic-sorting'; s.add(st);
      const R = 0.03, H = 0.14, cg = new T.CylinderGeometry(R, R, H, 20), capG = new T.CylinderGeometry(R * 0.55, R * 0.55, 0.005, 12);
      const mkCell = (p) => { const g = new T.Group(); p.add(g); this._mesh(cg, m.ink, 0, H / 2, 0, g, 'cylindrical-cell'); this._mesh(capG, m.light, 0, H + 0.003, 0, g, 'cell-cap'); return g; };
      this._mesh(this._rbox(1.0, 0.9, 0.7, 0.06), m.white, -1.3, 0.45, -0.1, st, 'feed-hopper-base');
      this._mesh(this._rbox(0.8, 0.22, 0.5, 0.04), m.light, -1.3, 1.01, -0.1, st, 'feed-tray');
      for (let i = 0; i < 8; i++) for (let k = 0; k < 4; k++) mkCell(st).position.set(-1.62 + i * 0.09, 1.12, -0.28 + k * 0.09);
      this._mesh(this._rbox(0.5, 0.06, 0.16, 0.02), m.white, -0.55, 0.92, 0.25, st, 'infeed');
      this._mesh(this._rbox(0.34, 0.4, 0.34, 0.05), m.white, -0.55, 1.15, 0.25, st, 'ocv-ir-tester');
      this._mesh(this._rbox(0.18, 0.06, 0.22, 0.02), m.dark, -0.55, 1.0, 0.25, st, 'test-probes');
      const tl = this._mesh(new T.BoxGeometry(0.06, 0.03, 0.01), m.orange, -0.55, 1.25, 0.425, st, 'test-light');
      const N = 11, W = 0.12, x0 = -0.15;
      this._mesh(this._rbox(N * W + 0.12, 0.84, 1.1, 0.06), m.white, x0 + (N - 1) * W / 2, 0.42, 0, st, 'sorter-base');
      this._mesh(this._rbox(N * W + 0.08, 0.04, 0.14, 0.015), m.g1, x0 + (N - 1) * W / 2, 0.88, 0.25, st, 'transfer-rail');
      const ch = [];
      for (let c = 0; c < N; c++) { const x = x0 + c * W; this._mesh(this._rbox(0.1, 0.03, 0.62, 0.01), c === N - 1 ? m.dark : m.light, x, 0.86, -0.18, st, c === N - 1 ? 'reject-channel' : 'ok-channel'); [-0.05, 0.05].forEach((dx) => this._mesh(new T.BoxGeometry(0.006, 0.05, 0.62), m.mid, x + dx, 0.9, -0.18, st, 'channel-guide')); ch.push({ x, n: c === N - 1 ? 1 : 2 + (c * 3) % 4, cells: [] }); }
      ch.forEach((o) => { for (let q = 0; q < 6; q++) { const g = mkCell(st); g.position.set(o.x, 0.875, 0.06 - q * 0.075); g.visible = q < o.n; o.cells.push(g); } });
      const shut = new T.Group(); st.add(shut);
      this._mesh(this._rbox(0.12, 0.12, 0.16, 0.02), m.dark, 0, 1.0, 0.25, shut, 'shuttle');
      const held = mkCell(shut); held.position.set(0, 0.9, 0.25);
      const lamps = ch.map((o, c) => this._mesh(new T.BoxGeometry(0.05, 0.02, 0.01), c === N - 1 ? m.ink : m.mid, o.x, 0.6, 0.555, st, 'channel-lamp'));
      this._signal(st, x0 + N * W, 0.84, -0.62);
      this._plate('C04', x0 + N * W - 0.25, 0.3, 0.555, st);
      this._console(1.7, -1.5, (g, w, h) => { g.fillStyle = C.white; g.fillRect(0, 0, w, h); g.fillStyle = C.ink; for (let c = 0; c < 10; c++) g.fillRect(30 + c * 26, 150 - (20 + (c * 37) % 90), 18, 20 + (c * 37) % 90); g.fillStyle = this._ac || C.orange; g.fillRect(30 + 10 * 26, 140, 18, 10); });
      this._worker(1.7, -0.9, Math.PI, 'screen');
      const seq = [3, 7, 1, 10, 5, 2, 8, 4, 0, 6, 9, 3, 5], sm = (u) => u * u * (3 - 2 * u), TT = 2.2;
      this._anim.push((t) => {
        const k = Math.floor(t / TT), f = (t % TT) / TT, c = seq[k % seq.length], tx = ch[c].x, sx = -0.55;
        if (k % (seq.length * 2) === 0 && f < 0.02) ch.forEach((o, i) => { o.n = i === N - 1 ? 1 : 2 + (i * 3) % 4; });
        let x = sx, show = true;
        if (f < 0.3) { x = sx; tl.visible = Math.floor(f * 20) % 2 === 0; }
        else if (f < 0.7) { tl.visible = false; x = sx + (tx - sx) * sm((f - 0.3) / 0.4); }
        else { x = tx; show = f < 0.8; }
        shut.position.x = x; held.visible = show;
        lamps.forEach((l, i) => { l.material = i === c && f > 0.3 ? m.orange : (i === N - 1 ? m.ink : m.mid); });
        ch.forEach((o, i) => { const extra = i === c && f >= 0.8 ? 1 : 0; o.cells.forEach((g, q) => { g.visible = q < Math.min(6, o.n + extra); }); });
        if (f >= 0.98 && !this._sortDone) { this._sortDone = k; }
        if (this._sortDone !== undefined && this._sortDone !== k && this._sortLast !== this._sortDone) { const cc = seq[this._sortDone % seq.length]; ch[cc].n = ch[cc].n >= 6 ? (cc === N - 1 ? 1 : 2) : ch[cc].n + 1; this._sortLast = this._sortDone; this._sortDone = undefined; }
      });
      this._aim(0.1, 0.9, -0.05, 3.4, 6.0);
    }
    _tick(t) { (this._anim || []).forEach((f) => f(t)); }
  }
  customElements.define('fw-scene-3d', FwScene3d);
})();
