#Concy (concept bla bla lang)

there are tuples (as in factor)

```
jim= [ name: janko age: 20 ]
```

concept is a rule that can match or not match the tuple

```
person= [ conc name: required string age: optional 0 integer ]
```

verbs are only monadic or diadic as in J. they also need to match a concept (generic functions)

```
+ jim

. jim
name: "janko" age: 21

. jim + 5
name: "janko" age: 26

. jim = "matej"
name: "matej" age: 26
```

### how could some practical programming look 

```
connect 'sqlite-db %main.db query "select * from user" inject-# [      
    name-o: uppercase name
    age-o: (str age) + " year" + (age > 1) ? [ "s" | "" ]
  ] templatize "<h1>{name-o}</h1><small>{age-o}</small>"
```

connect id monadic, 'sqlite-db flags main with sqlite-db concept, query is didactic taking db connection on left and query string on right.

execution is as follows:

```
((((connect ('sqlite-db %main.db)) query "select * from user") inject-# [      
    name-o: uppercase name
    age-o: (str age) + " year" + (age > 1) ? [ "s" | "" ]
  ]) templatize "<h1>{name-o}</h1><small>{age-o}</small>")
```

###cool stuff to think about

adverbs as x/ and x~

add/ [ 1 2 3 ] == [ 1 add 2 add 3 ]

"select * from user;" query~ conn == conn query "select * from user;"


###code trials (compared to factor)

```
: handle-time-client ( -- )
    now timestamp>rfc822 print ;

: <time-server> ( -- threaded-server )
    ascii <threaded-server>
        "time-server" >>name
        1234 >>insecure
        [ handle-time-client ] >>handler ;

: start-time-server ( -- )
    <time-server> start-server drop ;

MAIN: start-time-server
```

```
handler= f [ req | timestamp>rfc822 now ]

start-time-server= f [| 8888 make-server-with :handler ]

MAIN: start-time-server
```
