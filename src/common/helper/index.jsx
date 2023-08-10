export default {
    getUniqueString: function (length = 10) {
        const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let text = '';
        for (let i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    },
    isHTMLContent: function (str) {
        if (!str || str == '' || typeof str != 'string') return false;
        var regex = /(<([^>]+)>)/gi;

        var returnText = '' + str;

        if (regex.test(returnText)) {
            return true;
        }

        //-- get rid of html-encoded characters:
        returnText = returnText.replace(/&lt;/gi, '<');
        returnText = returnText.replace(/&gt;/gi, '>');
        returnText = returnText.replace(/&#x3C;/gi, '<');
        returnText = returnText.replace(/&#x3E;/gi, '>');
        var a = document.createElement('div');
        //clean attributes
        try {
            returnText = returnText.replace(/(<[^>]+)[^a-z](on[a-z]+\s*=\s*([^\s>]+))/gi, '$1');
        } catch (error) {
            console.warn('Clean attributes error: ', error);
        }
        a.innerHTML = returnText;

        for (var c = a.childNodes, i = c.length; i--;) {
            if (c[i].nodeType == 1) return true;
        }

        return false;
    },
    cleanXSS: (inputText, allowScript) => {
        if (typeof inputText != 'string') return inputText;

        if (!inputText || inputText == '') return '';

        var returnText = '' + inputText;
        //clean script
        if (!allowScript) {
            var fnRecursionScriptTag = function (_content) {
                if (!_content) return '';

                var _reg1 = /<script(.*?[^>]?)>([\w\W]*?)<\/script>/gi,
                    _reg2 = /<script(.*?[^>]?)>/gi;

                var _result = _content.replace(_reg1, '');
                _result = _result.replace(_reg2, '');

                if (_reg1.test(_result) || _reg2.test(_result)) {
                    _result = fnRecursionScriptTag(_result);
                }

                return _result;
            };

            returnText = fnRecursionScriptTag(returnText);
        }

        //clean attributes
        try {
            returnText = returnText.replace(/(<[^>]+)[^a-z](on[a-z]+\s*=\s*([^\s>]+))/gi, '$1');
        } catch (error) {
            console.warn('Clean attributes error: ', error);
        }

        return returnText;
    },
}