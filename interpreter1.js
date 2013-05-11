var Undef = function(dbg) {

    var d = function(x){if(dbg){console.log(x)};return x}

    this.evalu = function(block, pos, state)
    { 
	while (pos < block.length) {
	    e = evalexpr(block,pos,state);
	    pos = e[1];
	    state = e[2];
	}
	return e;
    }
    
    var evalexpr = function(block,pos,state) 
    {
	d("--->>>");d(pos);d(block[pos]);d("<<<---");
	switch(block[pos][0]) 
	    { 
	    case "word": 
		return proc_word(block[pos][1],block,pos,state);
	    case "setword": 
		return proc_setword(block[pos][1],block,pos,state);
	    case "number":
		return [block[pos][1],pos+1,state];
	    default:
		return ["#error 3#",pos,state];
	    }
    }
    
    var proc_setword = function(word, block, pos, state)
    {
	var r = evalexpr(block,pos+1,state);
	state[word] = r[0];
	return r;
    };

    var proc_word = function(word, block, pos, state)
    {
	if (this.natives[word]) {
	    var nat = this.natives[word];
	    if (typeof nat == "function") 
		{
		    var args = []
			pos += 1;
			for (var i=1;i<=nat.length;i+=1) {
			    var e = evalexpr(block,pos,state);
			    pos = e[1];
			    state = e[2];
			    args.push(e[0]);
			}
		    return [d(nat.apply(null, args)),pos,state];
		}
	    else
		{
		    return ["#error 2#",pos,state];
		}
	} else {
	    return ["#error 1#",pos,state];
	}
    }
	
    this.natives = { 
	unit: function(a) { return a },  
	inc: function(a){return a + 1},
	add: function(a,b) { return a + b },  
	alert: function(a){alert(a)},
    }
	
    return this;

}
	
	


