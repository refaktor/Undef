#Concy (concept bla bla lang)


## Tuples

there are tuples (as in factor)

```
jim= [ name: janko age: 20 ]
```

##Concepts

concept is a rule that can match or not match the tuple

```
person= [ conc name: required string age: optional 0 integer ]
```

##Concept converters

we can define concept converters and they get called with flagging something as concept ('<concept-name>)
example of converting a string to url concept:

```
read 'url "http://www.example.com/" join page
```

##Verbs

verbs are only monadic or diadic as in J. they also need to match a concept (as generic functions)

```
(+)inc-age= f [  person n: number |  
	age: age + 1
  |
	age: age + n
]
```

```
(=)set-name= f [ person n: str ||
	name: n
]
```

```
+ jim

. jim
name: "janko" age: 21

. jim + 5
name: "janko" age: 26

. jim = "matej"
name: "matej" age: 26
```

### runtime optimisation

every verb doesn't have to check if the entering tuple is of correct type. but the first time tuple is checked for type a flag can be 
added to the tuple for that type. this also helps find the right verb method for given scentence

# sets, arrays...

verbs vork on sets of tuples as tuples themselves in minimal cruft manner

we need apply verbs to sets and to arrays to map / reduce / filter / seek them


### how would some practical programming look with monadic / diadic only ?

```
con= connect-sqlite %main.db

users= con query "select * from user;"  ( we get array of tupples )

users -<< f > a "users:\n" x . > a:name + "\n" . ( we solved the need for more args here with default value in function  -<< reduce )

( users -:[ > name: uppercase name . ) -<< f > a "users:\n" x . > a:name + "\n" .   (: -:[ map tuples :)


( users -:[+ > 
  name-o: uppercase name
  age-o: (str age) + " year" + (age > 1) ? > "s" : "" .  (: there is probably a conflict with this blocking code > . and monadic diadic operators)
) templatize "<h1>{name-o}</h1><small>{age-o}</small>"
```


if we revert to more classic block syntax

```
users -<< f [ a "users:\n" x | a:name + "\n" ]                               (: we solved the need for more args here with default value in function  -<< reduce :)

( users -:[ [ name: uppercase name ] ) -<< f [ a "users:\n" x | a:name + "\n" ]                        (: -:[ map tuples :)



( users inject-a [
  name-o: uppercase name
  age-o: (str age) + " year" + (age > 1) ? [ "s" | "" ]                      (: there is probably a conflict with this blocking code > . and monadic diadic operators)
]) templatize "<h1>{name-o}</h1><small>{age-o}</small>"
```



' is a monadic operation that flags passing value with concept (in this case that it's a sqlit-db) so that the sqlite general method connect is used

```
(((connect 'sqlite-db %main.db ) query "select * from user") inject-# [      
  name-o: uppercase name
  age-o: (str age) + " year" + (age > 1) ? [ "s" | "" ]                      (: there is probably a conflict with this blocking code > . and monadic diadic operators)
]) templatize "<h1>{name-o}</h1><small>{age-o}</small>"
```

is general symbol for array  % is for set (or something else might be better)


###reverse that

for experiment what if we reverse the dyadic arg from previous example

```
  "<h1>{name-o}</h1><small>{age-o}</small>" templatize [      
    name-o: uppercase name
    age-o: (str age) + " year" + (age > 1) ? [ "s" | "" ]                      (: there is probably a conflict with this blocking code > . and monadic diadic operators)
  ] inject-# "select * from user" query connect 'sqlite-db %main.db
```

how do we know that connect must be called monadically ... have to look a little deeper



###and if we reverse the order of evaluation

what if we just reverse the order than so that contrary to J evaluation goes left to right (does this screw the monadic/diadic in any way .. have to see reason for it in J)

```
connect 'sqlite-db %main.db query "select * from user" inject-# [      
    name-o: uppercase name
    age-o: (str age) + " year" + (age > 1) ? [ "s" | "" ]
  ] templatize "<h1>{name-o}</h1><small>{age-o}</small>"
```


