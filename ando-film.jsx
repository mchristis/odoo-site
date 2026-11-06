// DEPTH-1495 · ANDO factory film (60 s, 1920 × 1080). Station names and tests from factory-walk-data.js (set "ando").
const { CompositionStage, useComposition, Captions, Easing, animate, clamp } = window;

const MOTION = {
  enter: (start, end) => animate({ from: 0, to: 1, start, end, ease: Easing.easeOutCubic }),
  move: (start, end) => animate({ from: 0, to: 1, start, end, ease: Easing.easeInOutCubic }),
  pop: (start, end) => animate({ from: 0, to: 1, start, end, ease: Easing.easeOutBack }),
};

const LIME = '#CDDB65', INK = '#252525', MUTED = '#5F5E5E', SOFT = '#8E8E8E', LINE = '#DDDDDD';
const FONT = '"Helvetica Neue", Helvetica, Arial, sans-serif';

const STEPS = [
  ['Cell inspection', 'inspect'], ['Cell sorting', 'sort'], ['Laser cutting', 'cut'],
  ['Stringing', 'string'], ['String EL', 'el'],
  ['Glass preparation', 'glass'], ['Encapsulant cutting', 'eva'], ['Robotic layup', 'layup'], ['Pre-lamination EL', 'el'], ['Taping', 'tape'],
  ['Lamination', 'lam'], ['Buffer', 'buffer'], ['Visual inspection', 'visual'],
  ['Framing', 'frame'], ['Junction box soldering', 'jbox'], ['Junction box potting', 'pot'], ['Curing', 'cure'],
  ['Flash test', 'flash'], ['Final EL and safety', 'safety'], ['Labelling', 'label'], ['Sorting by power class', 'sort'], ['Robotic packing', 'pack'], ['Store and dispatch', 'truck'], ['From factory to site', 'site'],
];

const CHAPTERS = [
  { name: 'Cells', title: 'Cells', from: 0, to: 2, test: 'Electrical verification and EL imaging to the inspection plan. Rejected cells are held separately.' },
  { name: 'Strings', title: 'Strings', from: 3, to: 4, test: 'EL images are evaluated against defect criteria; faulty strings are removed.' },
  { name: 'Layup', title: 'Lay-up', from: 5, to: 9, test: 'Vision checks of string spacing, orientation and polarity.' },
  { name: 'Lamination', title: 'Lamination', from: 10, to: 12, test: 'Temperature, pressure, vacuum and cycle time are recorded; laminates are inspected for bubbles and delamination.' },
  { name: 'Frame', title: 'Frame and junction box', from: 13, to: 16, test: 'Joint inspection, bypass diode check, cable length and connector identity.' },
  { name: 'Test', title: 'Test and dispatch', from: 17, to: 23, test: 'Complete current–voltage (I–V) curve with corrections to reference conditions.' },
];

const KIT = {"inspect":[[0,0,0,110,70,36],[0,0,36,8,8,60],[102,0,36,8,8,60],[0,0,96,110,8,8],[48,0,80,14,14,16]],"sort":[[0,0,0,130,70,30],[10,0,30,24,60,16],[48,0,30,24,60,16],[86,0,30,24,60,16]],"cut":[[0,0,0,110,70,36],[10,0,36,90,70,50],[45,25,86,20,20,14]],"string":[[0,0,0,130,60,30],[10,10,30,40,40,26],[80,10,30,40,40,26]],"el":[[0,0,0,110,80,56],[10,10,56,90,60,6]],"glass":[[0,0,0,110,70,20],[10,10,20,90,60,14]],"eva":[[0,0,0,120,70,30],[10,10,30,70,50,40],[90,10,30,26,50,14]],"layup":[[0,0,0,110,70,36],[0,-10,36,8,8,70],[102,-10,36,8,8,70],[0,-10,106,110,8,8],[40,-10,86,16,16,20]],"tape":[[0,0,0,130,60,30],[0,-10,30,8,8,60],[122,-10,30,8,8,60],[0,-10,90,130,8,8],[55,-10,70,14,14,20]],"lam":[[0,0,0,130,90,44],[10,10,44,110,70,20]],"buffer":[[0,0,0,100,80,8],[0,0,8,8,8,80],[92,0,8,8,8,80],[0,72,8,8,8,80],[92,72,8,8,8,80],[0,0,40,100,80,6],[0,0,80,100,80,6]],"visual":[[0,0,0,110,70,30],[20,20,30,70,6,70],[10,-10,30,8,8,80],[92,-10,30,8,8,80],[10,-10,110,90,8,8]],"frame":[[0,0,0,110,70,36],[20,0,36,70,70,54]],"jbox":[[0,0,0,110,70,36],[30,10,36,40,40,30]],"pot":[[0,0,0,110,70,36],[20,20,36,70,30,6]],"cure":[[0,0,0,150,60,36],[5,5,36,140,50,24]],"flash":[[0,0,0,130,80,60],[10,10,60,110,20,8]],"safety":[[0,0,0,60,60,70],[60,10,0,50,50,36]],"label":[[0,0,0,110,70,36],[60,10,36,40,40,24]],"pack":[[0,0,0,100,70,10],[5,5,10,90,60,36]],"truck":[[0,0,0,150,60,50],[150,10,0,40,50,40]],"site":[[0,0,0,110,80,50],[10,10,50,90,60,12],[25,20,62,60,40,12],[-30,30,0,16,10,30]]};

const SP = 300, C = Math.cos(Math.PI / 6), S = 0.5;
const iso = (x, y, z) => [(x - y) * C, (x + y) * S - z];
const P = (p) => p[0].toFixed(1) + ',' + p[1].toFixed(1);

function Box({ x, y, z, w, d, h, on, top = '#FFFFFF', left = '#ECECEA', right = '#DEDEDC' }) {
  const a = iso(x, y, z + h), b = iso(x + w, y, z + h), c = iso(x + w, y + d, z + h), e = iso(x, y + d, z + h);
  const b0 = iso(x + w, y, z), c0 = iso(x + w, y + d, z), e0 = iso(x, y + d, z);
  const st = on ? LIME : '#CFCFCD', sw = on ? 2 : 1;
  return (
    <g>
      <polygon points={[e, c, c0, e0].map(P).join(' ')} fill={left} stroke={st} strokeWidth={sw} strokeLinejoin="round" />
      <polygon points={[b, c, c0, b0].map(P).join(' ')} fill={right} stroke={st} strokeWidth={sw} strokeLinejoin="round" />
      <polygon points={[a, b, c, e].map(P).join(' ')} fill={top} stroke={st} strokeWidth={sw} strokeLinejoin="round" />
    </g>
  );
}

// continuous station index k(T): hold ~65% of each slot, then glide to the next station
function stationAt(T, CUES, total) {
  if (T < CUES.Cells) return 0;
  for (let i = 0; i < CHAPTERS.length; i++) {
    const ch = CHAPTERS[i], s = CUES[ch.name], e = i + 1 < CHAPTERS.length ? CUES[CHAPTERS[i + 1].name] : CUES.Close;
    if (T < e) {
      const n = ch.to - ch.from + 1, u = (T - s) / (e - s) * n, j = Math.min(n - 1, Math.floor(u)), f = u - j;
      const last = i === CHAPTERS.length - 1 && j === n - 1;
      return ch.from + j + (last ? 0 : MOTION.move(0.65, 1)(f));
    }
  }
  return STEPS.length - 1;
}

function Station({ i, k }) {
  const on = Math.abs(k - i) < 0.35;
  const boxes = KIT[STEPS[i][1]] || KIT.layup;
  return <g>{boxes.map((b, j) => <Box key={j} x={i * SP + b[0]} y={b[1]} z={b[2] + 18} w={b[3]} d={b[4]} h={b[5]} on={on && j === 0} />)}</g>;
}

// the module that travels the line; its build state follows the station it has passed
function Module({ k }) {
  const x = k * SP + 20, y = 92, z = 18;
  const st = Math.floor(k + 0.4);
  const cell = '#2B3F6B', laminate = '#22345A';
  const parts = [];
  if (st <= 2) {
    parts.push(<Box key="c" x={x + 30} y={y + 8} z={z} w={22} d={22} h={2} top={cell} left={cell} right={cell} />);
  } else if (st <= 4) {
    for (let c = 0; c < 4; c++) parts.push(<Box key={'s' + c} x={x + c * 24} y={y + 8} z={z} w={20} d={20} h={2} top={cell} left={cell} right={cell} />);
  } else if (st <= 9) {
    parts.push(<Box key="g" x={x} y={y} z={z} w={100} d={44} h={2} top="#EEF2F4" left="#E2E6E8" right="#D8DCDE" />);
    if (st >= 7) for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) parts.push(<Box key={'l' + r + c} x={x + 4 + c * 24} y={y + 3 + r * 20} z={z + 2} w={20} d={17} h={1} top={cell} left={cell} right={cell} />);
  } else {
    if (st >= 13) parts.push(<Box key="f" x={x - 3} y={y - 3} z={z} w={106} d={50} h={5} top="#C9CCCF" left="#BFC2C5" right="#B4B7BA" />);
    parts.push(<Box key="lam" x={x} y={y} z={z + (st >= 13 ? 3 : 0)} w={100} d={44} h={2} top={laminate} left={laminate} right={laminate} />);
    if (st >= 19) parts.push(<Box key="lb" x={x + 70} y={y + 30} z={z + 6} w={14} d={8} h={1} top="#FFFFFF" left="#F2F2F2" right="#E8E8E8" />);
  }
  return <g>{parts}</g>;
}

function Line({ k, T, CUES, total }) {
  const N = STEPS.length;
  const lineEnd = (N - 1) * SP + 200;
  // camera: whole line at open and close, follows the module in between
  const target = iso(k * SP + 70, 110, 0);
  const whole = iso(lineEnd / 2, 60, 0);
  const zIn = MOTION.move(CUES.Opening + 0.6, CUES.Cells)(T), zOut = MOTION.move(CUES.Close, CUES.Close + 2.2)(T);
  const near = 1.35 + 0.06 * Math.sin(T * 0.35), far = 0.2;
  const sc = far + (near - far) * zIn - (near - far) * zOut;
  const mix = zIn - zOut;
  const cx = whole[0] + (target[0] - whole[0]) * mix, cy = whole[1] + (target[1] - whole[1]) * mix;
  const fx = 1240 + (1180 - 1240) * (1 - mix), fy = 600 + (740 - 600) * (1 - mix);
  const belt = [iso(-140, 80, 18), iso(lineEnd, 80, 18), iso(lineEnd, 150, 18), iso(-140, 150, 18)];
  return (
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0 }}>
      <g transform={`translate(${fx} ${fy}) scale(${sc}) translate(${-cx} ${-cy})`}>
        <Box x={-140} y={80} z={0} w={lineEnd + 140} d={70} h={18} top="#F0F0EE" left="#E4E4E2" right="#D9D9D7" />
        <polygon points={belt.map(P).join(' ')} fill="none" stroke={LINE} strokeWidth="1" />
        {STEPS.map((s, i) => <Station key={i} i={i} k={k} />)}
        <Module k={k} />
      </g>
    </svg>
  );
}

function Panel({ k, T, CUES, showTests }) {
  let chI = 0; CHAPTERS.forEach((c, i) => { if (T >= CUES[c.name]) chI = i; });
  const st = clamp(Math.floor(k + 0.35), CHAPTERS[chI].from, CHAPTERS[chI].to);
  const ch = CHAPTERS[chI];
  const inLine = T >= CUES.Cells && T < CUES.Close;
  const o = MOTION.enter(CUES.Cells - 0.2, CUES.Cells + 0.6)(T) * (1 - MOTION.enter(CUES.Close - 0.4, CUES.Close + 0.2)(T));
  const chStart = CUES[ch.name];
  const slide = MOTION.enter(chStart, chStart + 0.7)(T);
  return (
    <>
    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 780, background: '#F7F7F5', borderRight: `1px solid ${LINE}`, opacity: inLine ? o : 0 }}></div>
    <div style={{ position: 'absolute', left: 120, top: 150, width: 560, opacity: inLine ? o : 0, display: 'flex', flexDirection: 'column', gap: 28, fontFamily: FONT }}>
      <div style={{ fontSize: 22, fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED }}>ANDO · {String(chI + 1).padStart(2, '0')} / 06</div>
      <div style={{ fontSize: 76, fontWeight: 200, lineHeight: 1.05, letterSpacing: -1.5, color: INK, transform: `translateY(${(1 - slide) * 24}px)`, opacity: slide }}>{ch.title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, borderTop: `1px solid ${LINE}`, paddingTop: 24 }}>
        {STEPS.slice(ch.from, ch.to + 1).map((s, j) => {
          const i = ch.from + j, act = i === st, done = i < st;
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 30, fontWeight: act ? 400 : 300, color: act ? INK : done ? SOFT : MUTED }}>
              <span style={{ width: 14, height: 14, borderRadius: 7, flex: 'none', background: act ? LIME : 'transparent', border: `1px solid ${act ? LIME : '#BBBBBB'}` }}></span>
              <span style={{ fontSize: 22, color: SOFT, width: 36 }}>{String(i + 1).padStart(2, '0')}</span>
              <span>{s[0]}</span>
            </div>
          );
        })}
      </div>
      {showTests ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, background: '#FFFFFF', borderRadius: 12, padding: 24, opacity: MOTION.enter(chStart + 1.2, chStart + 2)(T) }}>
          <div style={{ fontSize: 20, fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED }}>How it is checked</div>
          <div style={{ fontSize: 28, fontWeight: 300, lineHeight: 1.35, color: INK }}>{ch.test}</div>
        </div>
      ) : null}
    </div>
    </>
  );
}

function Titles({ T, CUES, total }) {
  const a = MOTION.enter(0.2, 1.2)(T) * (1 - MOTION.enter(CUES.Cells - 0.8, CUES.Cells - 0.1)(T));
  const b = MOTION.enter(CUES.Close + 1.6, CUES.Close + 2.6)(T);
  return (
    <div style={{ position: 'absolute', inset: 0, fontFamily: FONT, pointerEvents: 'none' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, width: 1920, height: 420, background: 'linear-gradient(#F7F7F5 78%, rgba(247,247,245,0))', opacity: Math.max(a, b) }}></div>
      <div style={{ position: 'absolute', left: 120, top: 140, opacity: a, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 24, fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED }}>ANDO · 24 stations</div>
        <div style={{ fontSize: 104, fontWeight: 200, letterSpacing: -2, color: INK, transform: `translateY(${(1 - a) * 20}px)` }}>From cell to site.</div>
      </div>
      <div style={{ position: 'absolute', left: 120, top: 140, width: 900, opacity: b, display: 'flex', flexDirection: 'column', gap: 24, transform: `translateY(${(1 - b) * 20}px)` }}>
        <div style={{ fontSize: 24, fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED }}>24 · From factory to site</div>
        <div style={{ fontSize: 44, fontWeight: 200, lineHeight: 1.25, color: INK }}>No serials are typed. The installed layout and the warranty registration are created from the scans.</div>
      </div>
    </div>
  );
}

const SLOT_PROMPT = { Cells: '01', Strings: '04', Layup: '08', Lamination: '11', Frame: '15', Test: '18' };
function Images({ T, CUES }) {
  return (
    <div style={{ position: 'absolute', left: 820, top: 60, right: 60, bottom: 60, borderRadius: 24, overflow: 'hidden', background: '#EFEFED' }}>
      {CHAPTERS.map((ch, i) => {
        const s = CUES[ch.name], e = i + 1 < CHAPTERS.length ? CUES[CHAPTERS[i + 1].name] : CUES.Close;
        const o = (i === 0 ? 1 : MOTION.enter(s - 0.3, s + 0.5)(T)) * (i === CHAPTERS.length - 1 ? 1 : 1 - MOTION.enter(e - 0.3, e + 0.5)(T));
        const z = 1 + 0.08 * MOTION.move(s - 0.3, e + 0.5)(T);
        return (
          <div key={ch.name} style={{ position: 'absolute', inset: 0, opacity: T >= s - 0.3 && T < e + 0.5 ? o : 0, transform: 'scale(' + z.toFixed(4) + ')', transformOrigin: '60% 50%' }}>
            <image-slot id={'ando-film-' + ch.name.toLowerCase()} shape="rect" placeholder={'Drop image: ' + ch.title + ' (prompt ' + SLOT_PROMPT[ch.name] + ', 16:10)'} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}></image-slot>
          </div>
        );
      })}
    </div>
  );
}

function Piece({ showTests, visual }) {
  const { T, CUES, authoredTotal } = useComposition();
  const k = stationAt(T, CUES, authoredTotal);
  let chI = 0; CHAPTERS.forEach((c, i) => { if (T >= CUES[c.name]) chI = i; });
  const st = clamp(Math.floor(k + 0.35), CHAPTERS[chI].from, CHAPTERS[chI].to);
  return (
    <div data-screen-label={'ANDO film t=' + Math.floor(T) + 's'} style={{ position: 'absolute', inset: 0, background: '#F7F7F5', overflow: 'hidden' }}>
      <Line k={k} T={T} CUES={CUES} total={authoredTotal} />
      {visual === 'Images' ? <div style={{ position: 'absolute', inset: 0, opacity: MOTION.enter(CUES.Cells - 0.6, CUES.Cells)(T) * (1 - MOTION.enter(CUES.Close, CUES.Close + 0.8)(T)) }}><Images T={T} CUES={CUES} /></div> : null}
      <Panel k={k} T={T} CUES={CUES} showTests={showTests} />
      <Titles T={T} CUES={CUES} total={authoredTotal} />
      <div style={{ position: 'absolute', right: 120, bottom: 90, fontFamily: FONT, fontSize: 22, letterSpacing: '0.1em', color: SOFT, opacity: T >= CUES.Cells && T < CUES.Close ? 1 : 0 }}>STATION {String(st + 1).padStart(2, '0')} / 24</div>
    </div>
  );
}

function AndoFilm() {
  const [t, setTweak] = useTweaks(window.FILM_TWEAKS || { motionEditor: true, showTests: true, visual: 'Line drawing' });
  return (
    <>
      <CompositionStage width={1920} height={1080} scenes={window.OM_SCENES} playback={window.OM_PLAYBACK} bg="#F7F7F5">
        <Piece showTests={t.showTests} visual={t.visual || 'Line drawing'} />
      </CompositionStage>
      {window.FILM_EMBED ? null : <TweaksPanel>
        <TweakSection label="Film" />
        <TweakToggle label="Motion editor" value={t.motionEditor} onChange={(v) => setTweak('motionEditor', v)} />
        <TweakRadio label="Visual" value={t.visual || 'Line drawing'} options={['Line drawing', 'Images']} onChange={(v) => setTweak('visual', v)} />
        <TweakToggle label="Show the test per scene" value={t.showTests} onChange={(v) => setTweak('showTests', v)} />
      </TweaksPanel>}
    </>
  );
}

window.AndoFilm = AndoFilm;
