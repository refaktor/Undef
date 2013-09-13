#Velblot

####__forget OO this is "one hump Camel case oriented language"__

Just toying around w/ (stupid?) ideas again.

###Reasoning:

 - Lisp evals lists by default except when marked otherwise '(x 1)
 - Rebol doesn't eval lists (blocks) by default, but evals words by default unless specified otherwise 'lit-word
 - Velblot doesn't eval words by default except if they are marked by Camel case.

Which (maybe) enables us to again explore new directions. Like rebol could, and came up with some cool stuff.


###Some contrains (e.i. rules)

My 2 rules for any new language to make any sense:

 - It HAS to be homoiconic !
 - It should be expression focused (not statements, expressions except when you really do mutable stuff) !

A question to keep in mind:

 - Is the langauge a canvas?

###Braindump (type as I think)

```
> Calculate Time from 14:20 to Now
```
Which would look in Python as:

```
> Time.calculate(from='14:20', to=Now())

```
Or in Rebol as:

```
> time/calculate/from/to 14:20 now
```

It would have thesame reverse polish notation as rebol which "eats" as many args as needed at runtime. Hence no need for
lisps parens (but they can be there if you want to explicitly define eval structure).

```
> Add 2 Inc 3
6
```

Each function takes exactly as much args as statically neede except if it has refinements. These seem two problems. 1. refinement collision and 
how does a funtion know if there are any refinements up-ahead.

```
> Add 2 Inc 3
6
```

Refinement collision would have to be detected by the interpreter and reported. Solved by programmer adding parens for explicit strucutre.

Up-ahead problem maybe doesn't exist. After evaler takes all args that it needs it check if the next one is one of the funtions refinements. If not it considers it done.
If yes it has to check for potential collision up the three. But in this case refinements can only be there statically. If they arrive as result of some other evaluation it
has to be explicitly precomputed. Is paren enough here? This together with collisions seems complex and not kind of ugly.

So can we add some explicit structure.


```
> Onloaded: ..... have no idea yet how we define arg/refinements yet
> If Success? Read http://www.example.com then call :OnLoaded ( Show message "page will loading async" with info icon ) else ( Show message "show probably won't load" with alert icon )
```

Yep there is a problem.. To make it clear in minimal example (remember "If" is a funtion as other are, "else" is a refinement) 

```
> If A If B ( Msg 1 ) else ( Msg 2 )
```

###The dots?

What if we say each function call is a scentence (it does begin with Capital letter) so it should end with a ".". How noisy would it be???

```
> If A If B ( Msg 1. ). else ( Msg 2. ).
> If Success? Read http://www.example.com then call :OnLoaded. . ( Show message "page will loading async" with info icon. ) else ( Show message "show probably won't load" with alert icon. ).
```

Not too bad in this examples.. basically we are back at Lisp now .. with explicit strucutre. Probably worse for simple examples:

```
> Print Add 2 Inc 3...
> Print Add Inc Mul 2 3.. Inc 3...
```

It's not thaaaaaaat bad, but we're back at explicit now :( .. OTOH we don't need ocasional parens.

###Function definition

How could we define the "arguments":

```
> Read: Func ( url , 'then 'call callback , 'with 'headers headers, 'only 'head )
  	     ( ... the sequence sets variables along the way , "," stands for "OR", if no variable creates a flag Only-head in our case )
```

###Commas?

Could we make . required only in cases where there are refinements? Seems unlikely.. or with that we create the problem we created "." in the first place again.
Could we explicitly mark where . is neede without making code too ugly?? With a , after Func maybe??

```
> If, A If B ( Msg 1 ) else ( Msg 2 ).
> If, Success? Read, http://www.example.com then call :OnLoaded. ( Show, message "page will loading async" with info icon. ) else ( Show, message "page probably won't load" with alert icon. ).
```

In this case Funcs that use refinements need , and they need . others don't. It's a little weird .. but maybe this is still better than the "." overkill and absolutely explicit call structure. because with that we are just lisp with Upperaca and "." instad of ( and ).

###

The refinements would offer also something like generic methods / pattern matching

```
Read: Func ( 'http, url,  '.... ) ...
Read: Func ( 'smtp, domain, ... '.... ) ... 
```

Basically "," represents OR only after all the parts are with sequence in front .. before that sequences and/or arguments are mandatory. This could be explicitly....


