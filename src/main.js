function getPinyin()
	{
		var value = document.getElementById('test').value;
		var type = document.querySelector('[name="pinyin_type"]:checked').value;
		var result = '';
		if(value)
		{
			switch(type)
			{
				case '0': result = pinyinUtil.getPinyin(value); break;
				case '1': result = Zhuyin2Keyboard(pinyinUtil.getPinyin(value)); break;
				case '2': result = Zhuyin2Pinyin(value); break;
				case '3': result = Keyboard2Pinyin(value); break;
				default: break;
			}
		}
		var html = result;
		if(result instanceof Array)
		{
			html = '<ol>';
			result.forEach(function(val)
			{
				html += '<li>'+val+'</li>';
			});
			html += '</ol>';
		}
		document.getElementById('result').innerHTML = html;
	}
	document.getElementById('test').addEventListener('input', getPinyin);
	document.addEventListener('change', function(e)
	{
		if(e.target.name === 'pinyin_type')
		{
			getPinyin();
		}
	});
	getPinyin();