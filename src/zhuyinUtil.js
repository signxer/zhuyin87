function Zhuyin2Keyboard(zhuyin)
{
	var keyMap = 
	{
		"ㄇ": "a",
		"ㄖ": "b",
		"ㄏ": "c",
		"ㄎ": "d",
		"ㄍ": "e",
		"ㄑ": "f",
		"ㄕ": "g",
		"ㄘ": "h",
		"ㄛ": "i",
		"ㄨ": "j",
		"ㄜ": "k",
		"ㄠ": "l",
		"ㄩ": "m",
		"ㄙ": "n",
		"ㄟ": "o",
		"ㄣ": "p",
		"ㄆ": "q",
		"ㄐ": "r",
		"ㄋ": "s",
		"ㄔ": "t",
		"ㄧ": "u",
		"ㄒ": "v",
		"ㄊ": "w",
		"ㄌ": "x",
		"ㄗ": "y",
		"ㄈ": "z",
		"ㄅ": "1",
		"ㄉ": "2",
		"ˇ": "3",
		"ˋ": "4",
		"ㄓ": "5",
		"ˊ": "6",
		"˙": "7",
		"ㄚ": "8",
		"ㄞ": "9",
		"ㄢ": "0",
		"ㄦ": "-",
		"ㄤ": ";",
		"ㄝ": ",",
		"ㄡ": ".",
		"ㄥ": "/",
		"ˉ":""
	};
	return zhuyin.replace(/[ㄇㄖㄏㄎㄍㄑㄕㄘㄛㄨㄜㄠㄩㄙㄟㄣㄆㄐㄋㄔㄧㄒㄊㄌㄗㄈㄅㄉˇˋㄓˊ˙ㄚㄞㄢㄦㄤㄝㄡㄥˉ]/g, function(m){ return keyMap[m]; });
}

function Zhuyin2Pinyin(zhuyin)
{
	var words = zhuyin.split(' ');
	var pinyin = new Array();
	for (i in words)
	{
		//这里要加个分割系统
		//具体再说吧
		//查找音调有几个
		//超过1个
		//分割
		if (words[i].indexOf("ˇ") == -1 && words[i].indexOf("ˋ") == -1 && words[i].indexOf("ˊ") == -1 && words[i].indexOf("˙") == -1) {
			if(words[i].indexOf("ˉ") == -1){
				pinyin.push(pinyinUtil.getHanzi(words[i]+"ˉ"));
			}
			else{
				pinyin.push(pinyinUtil.getHanzi(words[i]));
			}
		}
		else{
			pinyin.push(pinyinUtil.getHanzi(words[i]));
		}
	}
	result = pinyin.join(" ");
	return result;
}


function Keyboard2Pinyin(zhuyin)
{
	var keyMap = 
	{
		"A" : "ㄇ",
		"B" : "ㄖ",
		"C" : "ㄏ",
		"D" : "ㄎ",
		"E" : "ㄍ",
		"F" : "ㄑ",
		"G" : "ㄕ",
		"H" : "ㄘ",
		"I" : "ㄛ",
		"J" : "ㄨ",
		"K" : "ㄜ",
		"L" : "ㄠ",
		"M" : "ㄩ",
		"N" : "ㄙ",
		"O" : "ㄟ",
		"P" : "ㄣ",
		"Q" : "ㄆ",
		"R" : "ㄐ",
		"S" : "ㄋ",
		"T" : "ㄔ",
		"U" : "ㄧ",
		"V" : "ㄒ",
		"W" : "ㄊ",
		"X" : "ㄌ",
		"Y" : "ㄗ",
		"Z" : "ㄈ",
		"a" : "ㄇ",
		"b" : "ㄖ",
		"c" : "ㄏ",
		"d" : "ㄎ",
		"e" : "ㄍ",
		"f" : "ㄑ",
		"g" : "ㄕ",
		"h" : "ㄘ",
		"i" : "ㄛ",
		"j" : "ㄨ",
		"k" : "ㄜ",
		"l" : "ㄠ",
		"m" : "ㄩ",
		"n" : "ㄙ",
		"o" : "ㄟ",
		"p" : "ㄣ",
		"q" : "ㄆ",
		"r" : "ㄐ",
		"s" : "ㄋ",
		"t" : "ㄔ",
		"u" : "ㄧ",
		"v" : "ㄒ",
		"w" : "ㄊ",
		"x" : "ㄌ",
		"y" : "ㄗ",
		"z" : "ㄈ",
		"1" : "ㄅ",
		"2" : "ㄉ",
		"3" : "ˇ",
		"4" : "ˋ",
		"5" : "ㄓ",
		"6" : "ˊ",
		"7" : "˙",
		"8" : "ㄚ",
		"9" : "ㄞ",
		"0" : "ㄢ",
		"-" : "ㄦ",
		";" : "ㄤ",
		"," : "ㄝ",
		"." : "ㄡ",
		"/" : "ㄥ"
	};
	return Zhuyin2Pinyin(zhuyin.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-;,./]/g, function(m){ return keyMap[m]; }));
}