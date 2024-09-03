$ = ((s_querySelectorAll, s_EventListener, s_add, s_remove, s_classList, $, oa,sl,un) => (
    (oa = Object.assign),
	(sl = (a,r) => r? [a[r|0]] : a),
	($ = (s, context, tsimmes=[],fe,re,c,b) => (
		(c = (b = context && $(context)[0]) || document), // b contains the context if not bad and c the operator
		s && tsimmes.push( // if s is truly then push the following
			...(s.dispatchEvent // if arg is node or window,
				? [s] // then pass [s]
				: "" + s === s // else if arg is a string
					? /</.test(s) // if the string contains "<" (if HTML code is passed)
						// then parse it and return node.children
						// use 'undefined' (HTMLUnknownElement) if context is not presented
						? ((context = document.createElement(context)).innerHTML = s
							, context.children)
					    : (re = s.match(/(.*?)(\[(\d+)\]$|$)/), // Extract the selector from the array index if any
						    !b ? sl(c[s_querySelectorAll](re[1]), re[3]) : tsimmes) // And query/filter the resulting list or empty array if bad context
					: s)), // else guessing that s variable is array-like Object
		(fe = tsimmes.forEach.bind(tsimmes)),
        oa(tsimmes, {
        	                  c:(v)=>tsimmes.map(e=>oa(e.style,v)),
        	                  on:(n,fn)=>fe(e=>e[s_add+s_EventListener](n, fn)),
        	                  off:(n,fn)=>fe(e=>e[s_remove+s_EventListener](n, fn)),
        	                  cls:(n,on)=> on == un ? // on is undefined, act like hasClass
        	                  						0 in tsimmes && tsimmes.every(e=>e[s_classList].contains(n))
        	                  					: fe(e=> !~on ? e[s_classList].toggle(n) : on ? e[s_classList][s_add](n) : e[s_classList][s_remove](n)), // else act like toggle if on is -1 or addClass if 1/true or removeClass is 0/false
							  insert:(v,b)=>fe(e=>e.insertAdjacentHTML(!~b?'afterbegin':'beforeend',v)),
							  remove:()=>fe(e=>e[s_remove]()),
							  p:(t,v,i)=> v==un? tsimmes.reduce((a,e)=>[...a,e[t]],[]) : fe(e=>e[t] = v),
        	                 })
	)),

	oa($, { o:(s, context) => $(s, context)[0]})
))('querySelectorAll', 'EventListener', 'add', 'remove', 'classList');
