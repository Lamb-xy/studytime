function htmlEscape(htmlStr) {
	return htmlStr.replace(/<|>|"|&/g, (match) => {
		switch (match) {
			case '<':
				return '&lt;'
			case '>':
				return '&gt;'
			case '"':
				return '&quot;'
			case '&':
				return '&amp;'
		}
	})
}

function htmlUnEscape(str) {
	return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
		switch (match) {
			case '&lt;':
				return '<'
			case '&gt;':
				return '>'
			case '&quot;':
				return '"'
			case '&amp;':
				return '&'
		}
	})
}
// 把这两个函数暴露出去
module.exports={
    htmlEscape,
    htmlUnEscape
}