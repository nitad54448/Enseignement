// Regression test for point_symmetry.html: runs the page's own group-theory code in Node (no browser needed).
//   node scripts/check_point_symmetry.js [path/to/point_symmetry.html]
// Checks, for all 32 point groups: closure/order, enantiomorphism, character-table orthogonality,
// the listed basis functions (x, R_z, xy, ...), and the tensor forms against textbook counts.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const file = process.argv[2] || path.join(__dirname, '..', 'point_symmetry.html');
const scripts = [...fs.readFileSync(file, 'utf8').matchAll(/<script>([\s\S]*?)<\/script>/g)];
const code = scripts[scripts.length - 1][1];

// Minimal stand-ins for the three.js classes used by the pure logic.
class Matrix4 {
  constructor() { this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]; }
  identity() { this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]; return this; }
  set(...r) { const e = this.elements; for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) e[j * 4 + i] = r[i * 4 + j]; return this; }
  makeScale(x, y, z) { return this.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1); }
  makeRotationAxis(a, t) {
    const c = Math.cos(t), s = Math.sin(t), k = 1 - c, { x, y, z } = a;
    return this.set(k * x * x + c, k * x * y - s * z, k * x * z + s * y, 0, k * x * y + s * z, k * y * y + c, k * y * z - s * x, 0, k * x * z - s * y, k * y * z + s * x, k * z * z + c, 0, 0, 0, 0, 1);
  }
  multiplyMatrices(a, b) {
    const ae = a.elements, be = b.elements, te = this.elements;
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { let s = 0; for (let k = 0; k < 4; k++) s += ae[k * 4 + i] * be[j * 4 + k]; te[j * 4 + i] = s; }
    return this;
  }
  determinant() { const e = this.elements; return e[0] * (e[5] * e[10] - e[9] * e[6]) - e[4] * (e[1] * e[10] - e[9] * e[2]) + e[8] * (e[1] * e[6] - e[5] * e[2]); }
}
class Vector3 {
  constructor(x = 0, y = 0, z = 0) { this.x = x; this.y = y; this.z = z; }
  normalize() { const l = Math.hypot(this.x, this.y, this.z); this.x /= l; this.y /= l; this.z /= l; return this; }
}
class Dummy {}
// `document` has no getElementById here, so the page skips init() and only defines its functions.
const ctx = vm.createContext({ THREE: { Matrix4, Vector3, Group: Dummy }, window: {}, document: {}, console, Math, Set, Map, Array, Object, Number, String, Float64Array, Error, parseInt, Infinity });
vm.runInContext(code + '\nthis.T = { pointGroups, CHAR_TABLES, analyzeGroup, M3, reduce, TENSOR_SPECS, KLEINMAN_SPEC, tensorForm, irrepCharacter };', ctx);
const { pointGroups, M3, reduce, TENSOR_SPECS, KLEINMAN_SPEC, tensorForm, irrepCharacter } = ctx.T;
const analyze = ctx.T.analyzeGroup;

let bad = 0;
const fail = (...a) => { bad++; console.log('FAIL', ...a); };

// ---- Reference data, independent of the page ----
const ORDER = { '1': 1, '-1': 2, '2': 2, 'm': 2, '2/m': 4, '222': 4, 'mm2': 4, 'mmm': 8, '4': 4, '-4': 4, '4/m': 8, '422': 8, '4mm': 8, '-42m': 8, '4/mmm': 16, '3': 3, '-3': 6, '32': 6, '3m': 6, '-3m': 12, '6': 6, '-6': 6, '6/m': 12, '622': 12, '6mm': 12, '-6m2': 12, '6/mmm': 24, '23': 12, 'm-3': 24, '432': 24, '-43m': 24, 'm-3m': 48 };
const ENANTIOMORPHIC = new Set(['1', '2', '222', '4', '422', '3', '32', '6', '622', '23', '432']);
const ELASTIC = { '1': 21, '-1': 21, '2': 13, 'm': 13, '2/m': 13, '222': 9, 'mm2': 9, 'mmm': 9, '4': 7, '-4': 7, '4/m': 7, '422': 6, '4mm': 6, '-42m': 6, '4/mmm': 6, '3': 7, '-3': 7, '32': 6, '3m': 6, '-3m': 6, '6': 5, '-6': 5, '6/m': 5, '622': 5, '6mm': 5, '-6m2': 5, '6/mmm': 5, '23': 3, 'm-3': 3, '432': 3, '-43m': 3, 'm-3m': 3 };
const PIEZO = { '1': 18, '-1': 0, '2': 8, 'm': 10, '2/m': 0, '222': 3, 'mm2': 5, 'mmm': 0, '4': 4, '-4': 4, '4/m': 0, '422': 1, '4mm': 3, '-42m': 2, '4/mmm': 0, '3': 6, '-3': 0, '32': 2, '3m': 4, '-3m': 0, '6': 4, '-6': 2, '6/m': 0, '622': 1, '6mm': 3, '-6m2': 1, '6/mmm': 0, '23': 1, 'm-3': 0, '432': 0, '-43m': 1, 'm-3m': 0 };
const PYRO = new Set(['1', '2', 'm', 'mm2', '4', '4mm', '3', '3m', '6', '6mm']);
const OPTIC = new Set(['1', '2', 'm', '222', 'mm2', '4', '-4', '422', '-42m', '3', '32', '6', '622', '23', '432']);
const KLEINMAN_ZERO = new Set(['422', '622', '432']); // non-centrosymmetric groups with no SHG in the Kleinman limit

// ---- Helpers for the basis-function check ----
function parseQuad(str) {
  const idx = { x: 0, y: 1, z: 2 };
  const Q = new Array(9).fill(0);
  str.replace(/\s+/g, '').replace(/-/g, '+-').split('+').filter(Boolean).forEach(t => {
    let sign = 1; if (t[0] === '-') { sign = -1; t = t.slice(1); }
    let c = 1; const m = t.match(/^(\d+)/); if (m) { c = +m[1]; t = t.slice(m[1].length); }
    const a = idx[t[0]], b = t.endsWith('^2') ? a : idx[t[1]];
    Q[a * 3 + b] += sign * c / (a === b ? 1 : 2);
    if (a !== b) Q[b * 3 + a] += sign * c / 2;
  });
  return Q;
}
function splitSets(str) {
  const out = []; let depth = 0, cur = '';
  for (const ch of str || '') {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ',' && depth === 0) { out.push(cur); cur = ''; } else cur += ch;
  }
  if (cur.trim()) out.push(cur);
  return out.map(x => x.trim()).map(x => (x.startsWith('(') ? x.slice(1, -1).split(',').map(y => y.trim()) : [x]));
}
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
const transformQuad = (m, Q) => {
  const r = new Array(9).fill(0);
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { let v = 0; for (let k = 0; k < 3; k++) for (let l = 0; l < 3; l++) v += m[i * 3 + k] * Q[k * 3 + l] * m[j * 3 + l]; r[i * 3 + j] = v; }
  return r;
};

const signatures = new Map();
for (const key of Object.keys(pointGroups)) {
  let A;
  try { A = analyze(key); } catch (e) { fail(key, 'analyzeGroup threw:', e.message); continue; }

  if (A.order !== ORDER[key]) fail(key, 'order', A.order, '!=', ORDER[key]);
  if (A.chiral !== ENANTIOMORPHIC.has(key)) fail(key, 'enantiomorphic flag', A.chiral);

  // Character table: dimensions, orthonormal rows, chi(g^-1) = conj(chi(g))
  const rows = []; A.irreps.forEach(ir => ir.rows.forEach(r => rows.push(r)));
  if (rows.length !== A.classes.length) fail(key, 'irreps', rows.length, 'classes', A.classes.length);
  if (rows.reduce((s, r) => s + A.chars[r][0][0] ** 2, 0) !== A.n) fail(key, 'sum of squared dimensions != order');
  for (let a = 0; a < rows.length; a++) for (let b = 0; b < rows.length; b++) {
    let re = 0, im = 0;
    A.classes.forEach((cls, c) => {
      const x = A.chars[rows[a]][c], y = A.chars[rows[b]][c];
      re += cls.length * (x[0] * y[0] + x[1] * y[1]);
      im += cls.length * (x[1] * y[0] - x[0] * y[1]);
    });
    if (Math.abs(re - (a === b ? A.n : 0)) > 1e-6 || Math.abs(im) > 1e-6) fail(key, 'orthogonality rows', a, b);
  }
  A.ops.forEach((op, i) => A.irreps.forEach(ir => ir.rows.forEach(r => {
    const x = A.chars[r][A.colOfOp[i]], y = A.chars[r][A.colOfOp[A.inv[i]]];
    if (Math.abs(x[0] - y[0]) > 1e-6 || Math.abs(x[1] + y[1]) > 1e-6) fail(key, 'chi(g^-1) != conj chi(g)', ir.label);
  })));

  // Listed basis functions: each set must be an invariant subspace whose trace equals the irrep's character.
  A.irreps.forEach(ir => ['lin', 'quad'].forEach(kind => splitSets(ir[kind]).forEach(set => {
    const basis = set.map(f => {
      if (kind === 'lin') { const r = f.match(/^R_([xyz])$/); const v = [0, 0, 0]; v[{ x: 0, y: 1, z: 2 }[r ? r[1] : f]] = 1; return { v, axial: !!r }; }
      return { v: parseQuad(f), axial: false };
    });
    let ok = true; const chi = new Array(A.n).fill(0);
    A.ops.forEach((op, gi) => basis.forEach(b => {
      const img = kind === 'lin' ? M3.apply(op.m, b.v).map(x => x * (b.axial ? op.det : 1)) : transformQuad(op.m, b.v);
      const proj = new Array(img.length).fill(0);
      basis.forEach(c => { const k = dot(img, c.v) / dot(c.v, c.v); c.v.forEach((x, i) => { proj[i] += k * x; }); });
      if (proj.some((x, i) => Math.abs(x - img[i]) > 1e-6)) ok = false;
      chi[gi] += dot(img, b.v) / dot(b.v, b.v);
    }));
    if (!ok) fail(key, kind, set.join(' | '), 'in', ir.label, 'is not an invariant subspace');
    else A.ops.forEach((op, gi) => { if (Math.abs(chi[gi] - irrepCharacter(A, ir, gi)) > 1e-6) fail(key, kind, set.join(' | '), 'in', ir.label, 'wrong character for operation', gi); });
  })));

  // Reduction: x,y,z, rotations and quadratic functions decompose into exactly the listed irreps.
  const count = ir => s => splitSets(s).reduce((n, set) => n + set.length, 0) / (ir.rows.length > 1 ? 2 : ir.dim);
  const vecChars = A.classes.map(c => M3.trace(A.ops[c[0]].m));
  const rotChars = A.classes.map(c => A.ops[c[0]].det * M3.trace(A.ops[c[0]].m));
  const quadChars = A.classes.map(c => { const i = c[0]; return (M3.trace(A.ops[i].m) ** 2 + M3.trace(A.ops[A.mult[i][i]].m)) / 2; });
  const rv = reduce(A, vecChars), rr = reduce(A, rotChars), rq = reduce(A, quadChars);
  A.irreps.forEach((ir, k) => {
    const nLin = (ir.lin.replace(/R_[xyz]/g, '').match(/[xyz]/g) || []).length / (ir.rows.length > 1 ? 2 : ir.dim);
    const nRot = (ir.lin.match(/R_[xyz]/g) || []).length / (ir.rows.length > 1 ? 2 : ir.dim);
    if (Math.round(rv[k][0]) !== nLin) fail(key, 'x,y,z multiplicity of', ir.label);
    if (Math.round(rr[k][0]) !== nRot) fail(key, 'rotation multiplicity of', ir.label);
    if (Math.round(rq[k][0]) !== count(ir)(ir.quad)) fail(key, 'quadratic multiplicity of', ir.label);
  });

  const sig = A.ops.map(o => o.kind).sort().join(' ');
  if (signatures.has(sig)) fail(key, 'same operation-type signature as', signatures.get(sig));
  signatures.set(sig, key);

  // Tensor forms
  const n = Object.fromEntries(TENSOR_SPECS.map(spec => [spec.id, tensorForm(A, spec).count]));
  const kleinman = tensorForm(A, KLEINMAN_SPEC).count;
  if (n.c !== ELASTIC[key]) fail(key, 'elastic constants', n.c, 'expected', ELASTIC[key]);
  if (n.d !== PIEZO[key]) fail(key, 'piezoelectric moduli', n.d, 'expected', PIEZO[key]);
  if ((n.p > 0) !== PYRO.has(key)) fail(key, 'pyroelectricity', n.p);
  if ((n.g > 0) !== OPTIC.has(key)) fail(key, 'optical activity', n.g);
  if ((kleinman > 0) !== (n.d > 0 && !KLEINMAN_ZERO.has(key))) fail(key, 'Kleinman SHG components', kleinman);
}

console.log(`${Object.keys(pointGroups).length} groups checked, ${bad} problem${bad === 1 ? '' : 's'}`);
process.exit(bad ? 1 : 0);
