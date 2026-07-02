(function () {
    'use strict';

    const FONT = {
        'A':[[0,1,1,1,0],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1]],
        'B':[[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,0]],
        'C':[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,0],[1,0,0,0,1],[0,1,1,1,0]],
        'D':[[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0]],
        'E':[[1,1,1,1,1],[1,0,0,0,0],[1,1,1,0,0],[1,0,0,0,0],[1,1,1,1,1]],
        'F':[[1,1,1,1,1],[1,0,0,0,0],[1,1,1,0,0],[1,0,0,0,0],[1,0,0,0,0]],
        'G':[[0,1,1,1,1],[1,0,0,0,0],[1,0,1,1,1],[1,0,0,0,1],[0,1,1,1,0]],
        'H':[[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1]],
        'I':[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1]],
        'J':[[1,1,1,1,1],[0,0,0,0,1],[0,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
        'K':[[1,0,0,0,1],[1,0,0,1,0],[1,1,1,0,0],[1,0,0,1,0],[1,0,0,0,1]],
        'L':[[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1]],
        'M':[[1,0,0,0,1],[1,1,0,1,1],[1,0,1,0,1],[1,0,0,0,1],[1,0,0,0,1]],
        'N':[[1,0,0,0,1],[1,1,0,0,1],[1,0,1,0,1],[1,0,0,1,1],[1,0,0,0,1]],
        'O':[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
        'P':[[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0]],
        'Q':[[0,1,1,1,0],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,1,0],[0,1,1,0,1]],
        'R':[[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1]],
        'S':[[0,1,1,1,1],[1,0,0,0,0],[0,1,1,1,0],[0,0,0,0,1],[1,1,1,1,0]],
        'T':[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],
        'U':[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
        'V':[[1,0,0,0,1],[1,0,0,0,1],[0,1,0,1,0],[0,1,0,1,0],[0,0,1,0,0]],
        'W':[[1,0,0,0,1],[1,0,0,0,1],[1,0,1,0,1],[1,1,0,1,1],[1,0,0,0,1]],
        'X':[[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1]],
        'Y':[[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],
        'Z':[[1,1,1,1,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,1,1,1,1]],
        '0':[[0,1,1,1,0],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[0,1,1,1,0]],
        '1':[[0,0,1,0,0],[1,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1]],
        '2':[[0,1,1,1,0],[1,0,0,0,1],[0,0,1,1,0],[0,1,0,0,0],[1,1,1,1,1]],
        '3':[[1,1,1,1,0],[0,0,0,0,1],[1,1,1,1,0],[0,0,0,0,1],[1,1,1,1,0]],
        '4':[[1,0,0,1,0],[1,0,0,1,0],[1,1,1,1,1],[0,0,0,1,0],[0,0,0,1,0]],
        '5':[[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,0],[0,0,0,0,1],[1,1,1,1,0]],
        '6':[[0,1,1,1,0],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,1],[0,1,1,1,0]],
        '7':[[1,1,1,1,1],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,0,1,0,0]],
        '8':[[0,1,1,1,0],[1,0,0,0,1],[0,1,1,1,0],[1,0,0,0,1],[0,1,1,1,0]],
        '9':[[0,1,1,1,0],[1,0,0,0,1],[0,1,1,1,1],[0,0,0,0,1],[0,1,1,1,0]],
        '!':[[1],[1],[1],[0],[1]], '?':[[0,1,1,1,0],[1,0,0,0,1],[0,0,1,1,0],[0,0,0,0,0],[0,0,1,0,0]],
        '#':[[0,1,0,1,0],[1,1,1,1,1],[0,1,0,1,0],[1,1,1,1,1],[0,1,0,1,0]],
        '%':[[1,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,1]],
        '/':[[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,0]],
        '"':[[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]],
        '[':[[1,1,1],[1,0,0],[1,0,0],[1,0,0],[1,1,1]], ']':[[1,1,1],[0,0,1],[0,0,1],[0,0,1],[1,1,1]],
        '{':[[0,1,1,1],[0,1,0,0],[1,1,0,0],[0,1,0,0],[0,1,1,1]], '}':[[1,1,1,0],[0,0,1,0],[0,0,1,1],[0,0,1,0],[1,1,1,0]],
        '(':[[0,1,1],[1,0,0],[1,0,0],[1,0,0],[0,1,1]], ')':[[1,1,0],[0,0,1],[0,0,1],[0,0,1],[1,1,0]],
        '^':[[0,1,0],[1,0,1],[0,0,0],[0,0,0],[0,0,0]], '-':[[0,0,0],[0,0,0],[1,1,1],[0,0,0],[0,0,0]],
        '+':[[0,0,0],[0,1,0],[1,1,1],[0,1,0],[0,0,0]], '=':[[0,0,0],[1,1,1],[0,0,0],[1,1,1],[0,0,0]],
        '_':[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,1]],
        "'":[[1],[1],[0],[0],[0]], '.':[[0],[0],[0],[0],[1]], ',':[[0],[0],[0],[1],[1]],
        '|':[[1],[1],[1],[1],[1]], '<':[[0,0,1],[0,1,0],[1,0,0],[0,1,0],[0,0,1]],
        '>':[[1,0,0],[0,1,0],[0,0,1],[0,1,0],[1,0,0]], ' ': [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
    };

    const DEFAULTS = { textColor: '#ffffff', bgColor: '#ff8614', newTextColor: '#ffffff', newBgColor: '#ff8614', defaultText: 'RANK' };
    const charW = 5, charH = 5, spacing = 1;

    let state = { hPad: 2, vPad: 1, bgDir: false, textDir: false, rounded: false, shadow: 3, recentColors: [], pack: [] };
    const MAX_COLORS = 20, MAX_PACK = 50;
    let canvas, ctx;

    function init() {
        canvas = document.getElementById('canvas');
        if (!canvas) return;
        ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.imageSmoothingEnabled = false;
        bind();
        $('bgDirectionSelect').value = 'horizontal';
        $('textDirectionSelect').value = 'horizontal';
        $('roundedCornersSwitch').checked = false;
        $('textShadowSwitch').value = '3';
        state.hPad = 2; state.vPad = 1;
        $('hPadding').value = 3; $('vPadding').value = 1;
        resizeCanvas();
        draw();
        seedColors();
    }

    function $(id) { return document.getElementById(id); }
    function on(id, ev, fn) { const e = $(id); if (e) e.addEventListener(ev, fn); }

    function bind() {
        on('textInput', 'input', () => { resizeCanvas(); draw(); });
        on('textShadowSwitch', 'change', () => { state.shadow = parseInt($('textShadowSwitch').value); draw(); });
        on('textDirectionSelect', 'change', () => { state.textDir = $('textDirectionSelect').value === 'vertical'; draw(); });
        on('bgDirectionSelect', 'change', () => { state.bgDir = $('bgDirectionSelect').value === 'vertical'; draw(); });
        on('roundedCornersSwitch', 'change', () => { state.rounded = $('roundedCornersSwitch').checked; draw(); });
        ['hPadding', 'vPadding'].forEach(id => on(id, 'change', () => { readPad(); resizeCanvas(); draw(); }));
        on('addHPadding', 'click', () => { step('hPadding', 1); });
        on('removeHPadding', 'click', () => { step('hPadding', -1); });
        on('addVPadding', 'click', () => { step('vPadding', 1); });
        on('removeVPadding', 'click', () => { step('vPadding', -1); });
        on('addTextColor', 'click', () => { bump('textColorAmount', 1); rebuild('text'); });
        on('removeTextColor', 'click', () => { bump('textColorAmount', -1); rebuild('text'); });
        on('addBgColor', 'click', () => { bump('bgColorAmount', 1); rebuild('bg'); });
        on('removeBgColor', 'click', () => { bump('bgColorAmount', -1); rebuild('bg'); });
        on('textColorAmount', 'change', () => rebuild('text'));
        on('bgColorAmount', 'change', () => rebuild('bg'));
        on('copyCanvasButton', 'click', copyTag);
        on('saveCanvasButton', 'click', saveTag);
        on('addToPackButton', 'click', addToPack);
        on('downloadPackButton', 'click', downloadPack);
        on('clearPackButton', 'click', clearPack);
        on('clearColorHistory', 'click', clearColors);
        document.addEventListener('focusin', e => {
            const id = e.target?.id || '';
            document._ac = /^text(Color|Hex)/.test(id) ? 'text' : /^bg(Color|Hex)/.test(id) ? 'bg' : document._ac || 'bg';
        });
    }

    function readPad() {
        state.hPad = Math.max(0, Math.min(10, parseInt($('hPadding').value) || 0));
        state.vPad = Math.max(0, Math.min(10, parseInt($('vPadding').value) || 0));
        $('hPadding').value = state.hPad; $('vPadding').value = state.vPad;
    }

    function step(id, dir) {
        const el = $(id);
        const v = Math.max(0, Math.min(10, (parseInt(el.value) || 0) + dir));
        el.value = v;
        if (id === 'hPadding') state.hPad = v; else state.vPad = v;
        resizeCanvas(); draw();
    }

    function bump(id, dir) {
        const el = $(id);
        el.value = Math.max(1, Math.min(5, (parseInt(el.value) || 1) + dir));
    }

    function measureWidth(text) {
        let w = text.split('').reduce((a, ch) => {
            const d = FONT[ch.toUpperCase()] || FONT[' '];
            return a + (d ? d[0].length : 5) + spacing;
        }, -spacing);
        return Math.max(w + state.hPad * 2, 1);
    }

    function resizeCanvas() {
        const text = $('textInput').value || DEFAULTS.defaultText;
        canvas.width = measureWidth(text);
        canvas.height = charH + state.vPad * 2;
        canvas.style.width = (canvas.width * 8) + 'px';
        canvas.style.height = (canvas.height * 8) + 'px';
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const text = $('textInput').value || DEFAULTS.defaultText;
        const bgC = grab('bg'), txC = grab('text');
        const bgV = state.bgDir, txV = state.textDir, rnd = state.rounded, shd = state.shadow;

        if (bgC.length > 1) {
            const g = ctx.createLinearGradient(0, 0, bgV ? 0 : canvas.width, bgV ? canvas.height : 0);
            bgC.forEach((c, i) => g.addColorStop(i / (bgC.length - 1), c));
            ctx.fillStyle = g;
        } else ctx.fillStyle = bgC[0] || DEFAULTS.bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (rnd) {
            ctx.clearRect(0, 0, 1, 1); ctx.clearRect(canvas.width - 1, 0, 1, 1);
            ctx.clearRect(0, canvas.height - 1, 1, 1); ctx.clearRect(canvas.width - 1, canvas.height - 1, 1, 1);
        }

        if (shd > 0) {
            ctx.globalAlpha = 0.5;
            const ox = shd === 3 ? 1 : 0, oy = shd === 2 ? 1 : 0;
            let sx = state.hPad + ox;
            for (const ch of text.toUpperCase()) { if (FONT[ch]) { putChar(ch, sx, state.vPad + oy, '#000000'); sx += charW + spacing; } }
            ctx.globalAlpha = 1;
        }

        let cx = state.hPad;
        if (txC.length > 1) {
            for (let i = 0; i < text.length; i++) {
                const ch = text[i].toUpperCase();
                if (!FONT[ch]) continue;
                const pos = txV ? (charH - 1 - (i % charH)) / (charH - 1) : i / (text.length - 1);
                if (txV) putCharVGrad(ch, cx, state.vPad, txC);
                else putChar(ch, cx, state.vPad, mix(txC, pos));
                cx += charW + spacing;
            }
        } else {
            const col = txC[0] || DEFAULTS.textColor;
            for (const ch of text.toUpperCase()) { if (FONT[ch]) { putChar(ch, cx, state.vPad, col); cx += charW + spacing; } }
        }
    }

    function grab(type) {
        const a = [], n = parseInt($(type + 'ColorAmount').value) || 1;
        for (let i = 1; i <= n; i++) { const e = $(type + 'Color' + i); if (e) a.push(e.value); }
        return a.length ? a : [type === 'bg' ? DEFAULTS.bgColor : DEFAULTS.textColor];
    }

    function mix(c, t) {
        if (c.length === 1) return c[0];
        const s = t * (c.length - 1), idx = Math.min(Math.floor(s), c.length - 2), f = s - idx;
        const r1 = parseInt(c[idx].slice(1,3),16), g1 = parseInt(c[idx].slice(3,5),16), b1 = parseInt(c[idx].slice(5,7),16);
        const r2 = parseInt(c[idx+1].slice(1,3),16), g2 = parseInt(c[idx+1].slice(3,5),16), b2 = parseInt(c[idx+1].slice(5,7),16);
        const h = v => (v < 16 ? '0' : '') + Math.round(v).toString(16);
        return '#' + h(r1+(r2-r1)*f) + h(g1+(g2-g1)*f) + h(b1+(b2-b1)*f);
    }

    function putChar(ch, x, y, color) {
        const p = FONT[ch]; if (!p) return;
        ctx.fillStyle = color;
        for (let r = 0; r < p.length; r++) for (let c = 0; c < p[r].length; c++) if (p[r][c]) ctx.fillRect(x + c, y + r, 1, 1);
    }

    function putCharVGrad(ch, x, y, colors) {
        const p = FONT[ch]; if (!p) return;
        for (let r = 0; r < p.length; r++) { ctx.fillStyle = mix(colors, r / (p.length - 1)); for (let c = 0; c < p[r].length; c++) if (p[r][c]) ctx.fillRect(x + c, y + r, 1, 1); }
    }

    function syncColor(ci, hi) {
        if (!ci || !hi) return;
        ci.addEventListener('input', () => { hi.value = ci.value.slice(1); draw(); });
        ci.addEventListener('change', () => { hi.value = ci.value.slice(1); pushColor(ci.value); draw(); });
        hi.addEventListener('input', () => { const h = hi.value.replace(/[^0-9a-f]/gi,''); if (h.length === 6) { ci.value = '#' + h; pushColor(ci.value); draw(); } });
    }

    function pushColor(c) {
        if (!c || c === '#000000') return;
        const n = c.toLowerCase(), idx = state.recentColors.indexOf(n);
        if (idx > -1) state.recentColors.splice(idx, 1);
        state.recentColors.unshift(n);
        if (state.recentColors.length > MAX_COLORS) state.recentColors.pop();
        renderColors();
    }

    function renderColors() {
        const el = $('colorHistoryContainer');
        if (!el) return;
        if (!state.recentColors.length) { el.innerHTML = '<div class="swatch-empty">No colors yet</div>'; return; }
        el.innerHTML = state.recentColors.map(c => `<div class="swatch" style="background:${c}" data-c="${c}" title="${c}"></div>`).join('');
        el.querySelectorAll('.swatch').forEach(el2 => el2.addEventListener('click', () => {
            const inp = $(document._ac === 'text' ? 'textColor1' : 'bgColor1');
            if (inp) { inp.value = el2.dataset.c; inp.dispatchEvent(new Event('input', { bubbles: true })); }
        }));
    }

    function clearColors() { state.recentColors.length = 0; renderColors(); }
    function seedColors() { pushColor(DEFAULTS.bgColor); pushColor(DEFAULTS.textColor); }

    function rebuild(type) {
        const container = $(type + 'Colors'), amt = parseInt($(type + 'ColorAmount').value) || 1;
        const def = type === 'text' ? DEFAULTS.textColor : DEFAULTS.bgColor;
        const ndef = type === 'text' ? DEFAULTS.newTextColor : DEFAULTS.newBgColor;
        if (!container) return;
        const prev = [];
        for (let i = 1; i <= amt; i++) { const e = $(type + 'Color' + i); if (e) prev[i-1] = e.value; }
        container.innerHTML = '';
        for (let i = 1; i <= amt; i++) {
            const val = i === 1 ? def : (prev[i-1] || ndef);
            container.insertAdjacentHTML('beforeend',
                `<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
                    <label style="font-size:0.7rem;color:#505358;min-width:36px;">C${i}</label>
                    <input type="color" id="${type}Color${i}" class="clr-picker" value="${val}">
                    <input type="text" id="${type}Hex${i}" class="clr-hex" value="${val.slice(1)}">
                </div>`);
            const ci = $(type + 'Color' + i), hi = $(type + 'Hex' + i);
            if (ci && hi) { syncColor(ci, hi); ci.addEventListener('input', draw); hi.addEventListener('input', draw); }
        }
        draw();
    }

    function copyTag() {
        canvas.toBlob(blob => {
            if (!blob) return;
            navigator.clipboard.write([new ClipboardItem({'image/png': blob})]).then(() => {
                const b = $('copyCanvasButton'), o = b.innerHTML;
                b.innerHTML = '<i class="fa-regular fa-check"></i> Copied!';
                setTimeout(() => b.innerHTML = o, 1800);
            }).catch(() => {});
        });
    }

    function saveTag() {
        const text = $('textInput').value || 'tag', fn = text.replace(/[^a-z0-9_-]/gi,'').toLowerCase() + '.png';
        const a = document.createElement('a');
        a.download = fn; a.href = canvas.toDataURL('image/png');
        document.body.appendChild(a); a.click(); a.remove();
    }

    function addToPack() {
        const dataUrl = canvas.toDataURL('image/png'), text = $('textInput').value || 'tag';
        const fn = text.replace(/[^a-z0-9_-]/gi,'').toLowerCase();
        state.pack.push({ dataUrl, text, filename: fn });
        if (state.pack.length > MAX_PACK) state.pack.shift();
        renderPack();
    }

    function renderPack() {
        const el = $('packContainer'), cnt = $('packCount');
        if (!el) return;
        if (cnt) cnt.textContent = state.pack.length ? `(${state.pack.length})` : '';
        if (!state.pack.length) { el.innerHTML = '<div class="pack-empty">No tags in pack yet</div>'; return; }
        el.innerHTML = state.pack.map((e, i) =>
            `<div class="pack-item"><img src="${e.dataUrl}" alt="${e.text}"><span class="name">${e.text}</span><button class="del" data-idx="${i}"><i class="fa-solid fa-xmark"></i></button></div>`
        ).join('');
        el.querySelectorAll('.del').forEach(b => b.addEventListener('click', () => { state.pack.splice(parseInt(b.dataset.idx), 1); renderPack(); }));
    }

    function clearPack() { state.pack.length = 0; renderPack(); }

    function downloadPack() {
        if (!state.pack.length) return;
        const zip = new JSZip();
        state.pack.forEach(e => zip.file(e.filename + '.png', e.dataUrl.replace(/^data:image\/png;base64,/,''), { base64: true }));
        zip.generateAsync({ type: 'blob' }).then(blob => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob); a.download = 'tag-pack.zip';
            document.body.appendChild(a); a.click(); a.remove();
            URL.revokeObjectURL(a.href);
        });
    }

    document.addEventListener('DOMContentLoaded', () => { init(); rebuild('text'); rebuild('bg'); });
})();
