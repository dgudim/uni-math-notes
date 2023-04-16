
# Subgraph ($G' \subset G$)

> [!definition] 
> Graph $G' = (V', E')$ is a *subgraph* of graph $G = (V, E)$ if $V' \subset V$, $E' \subset E$

`````col
````col-md
flexGrow=1
===
## $G$

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="1,0!"] 
b [pos="0,1!"] 
c [pos="0,0!"] 
d [pos="1,1!"] 

edge [color = lightgrey] 
 
a -- {b d} 
c -- {b a d} 
d -- {b b} 
} 
```

````
````col-md
flexGrow=1
===
## $T \subset G$

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=yellow, 
      fillcolor = white] 

a [pos="1,0!"] 
b [pos="0,1!"] 
c [pos="0,0!"] 
d [pos="1,1!"] 

edge [color = lightgrey] 
 
a -- {b d} 
c -- {b} 
d -- {b} 
} 
```

````
`````

--- 
<br>

# Special vertices

`````col
````col-md
flexGrow=1
===
## Isolated

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="1,0!"] 
b [pos="0,1!"] 
c [pos="0,0!"] 
d [pos="1,1!"] 

edge [color = lightgrey] 
 
a -- {b} 
c -- {b a} 
} 
```

> In this case [[Graphs - basics#Directed graphs|vertex]] **d** is **isolated**

````
````col-md
flexGrow=1
===
## Rising

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="1,0!"] 
b [pos="0,1!"] 
c [pos="0,0!"] 
d [pos="1,1!"] 

edge [color = lightgrey] 
a -- {b d} 
c -- {b a} 
} 
```
> In this case [[Graphs - basics#Directed graphs|vertex]] **d** is **rising** (it's [[Graphs - basics#Order (degree) of vertices|order]] is 1 | $p(v)=1$)

````
`````

--- 
<br>

# Homogeneous graph

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="0,0!"] 
b [pos="0.5,0.9!"] 
c [pos="1.5,0.9!"] 
d [pos="2,0!"] 
e [pos="1.5,-0.9!"]
f [pos="0.5,-0.9!"]

edge [color = lightgrey] 
a -- {b c}
b -- {c d}
c -- {d e}
d -- {e f}
e -- {f a}
f -- {a b}
} 
```

> [!definition] 
> Graph is **homogeneous**, if all [[Graphs - basics#Directed graphs|vertices]] have the same [[Graphs - basics#Order (degree) of vertices|degree]] 

--- 
<br>

# Connected graph

> [!definition]
> Graph is called **connected**, if any two [[Graphs - basics#Directed graphs|vertices]] can be connected by a [[#Path|path]]

`````col
````col-md
flexGrow=1
===
## Connected

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="0,0!"] 
b [pos="0.5,0.9!"] 
c [pos="1.5,0.9!"] 
d [pos="2,0!"] 
e [pos="1.5,-0.9!"] 
f [pos="0.5,-0.9!"] 

edge [color = lightgrey] 

a -- {b d e} 
b -- {c d} 
e -- f
} 
```

````
````col-md
flexGrow=1
===
## Not connected

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="0,0!"] 
b [pos="0.5,0.9!"] 
c [pos="1.5,0.9!"] 
d [pos="2,0!"] 
e [pos="1.5,-0.9!"] 
f [pos="0.5,-0.9!"] 

edge [color = lightgrey] 

a -- {b d e} 
b -- {c d} 
} 
```

````
`````

> [!note]
> *Connected* means that we can start *journey* from any [[Graphs - basics#Directed graphs|vertex]] and access any vertex we want

## Connected components

> [!definition]
> Maximal [[#Connected graph|connected]] [[#Subgraph ($G' subset G$)|subgraph]] is called a **connected component**. 

> Second [[#Connected graph|graph]] has *2* **connected components**

> [!note]
> 1. Any graph of [[Graphs - basics#Graph order|order]] *n* has no more than *n* connected components
> 2. If graph of [[Graphs - basics#Graph order|order]] *n* has *n* connected components, then all [[Graphs - basics#Directed graphs|vertices]] are [[#Special vertices|isolated]]
> 3. A [[#Connected graph|connected graph]] of second [[Graphs - basics#Graph order|order]] has one [[Graphs - basics#Undirected graph|edge]] 
> 4. A [[#Connected graph|connected graph]] of third [[Graphs - basics#Graph order|order]] has 2 or 3 [[Graphs - basics#Undirected graph|edges]] 

--- 
<br>

# Closure

> [!definition] 
> If $G(V,E)$ has $n$ [[Graphs - basics#Directed graphs|vertices]], then it’s **closure** $cl(G)$ is a graph obtained from $G$ by adding [[Graphs - basics#Undirected graph|edges]]: if sum of [[Graphs - basics#Order (degree) of vertices|degrees]] of 2 vertices $p(u)+p(v) \geq n$, then [[Graphs - basics#Undirected graph|edge]] $\{u,v\}$ is added. 
> 
> - This procedure is done until no more edges can be added.

--- 
<br>

# Walk

> [!definition]
> **Walk** is any finite sequence of graph [[Graphs - basics#Directed graphs|vertices]] and [[Graphs - basics#Undirected graph|edges]] 

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="0,0!"] 
b [pos="0.5,0.9!"] 
c [pos="1.5,0.9!"] 
d [pos="2,0!"] 
e [pos="1.5,-0.9!"] 
f [pos="0.5,-0.9!"] 

edge [color = lightgrey] 

a -- {b d e} 
b -- {c d} 

} 
```

Can be written in 2 ways:
1. *e*, {e, a}, *a*, {a, d}, *d*, {b, d}, *b*, {a, b}, *a*
2. *e*, *a*, *d*, *b*, *a*

> [!note]
> If you are going for a walk, you can visit same street ([[Graphs - basics#Undirected graph|edges]]) several times


## Open / closed walk

> [[#Walk]] is **open** if first and last [[Graphs - basics#Directed graphs|vertices]] are different
> If walk starts and ends in the same vertex, it called **closed**

> [!info] 
> First and last vertices are called **terminal** vertices


## Circuit

> If all [[Graphs - basics#Undirected graph|edges]] of [[#Walk|walk]] are distinct, it called a **circuit**


## Path

> [[#Open / closed walk|Open]] [[#Circuit|circuit]] is called a **path** 

### Length of the path

> **Length of the [[#Path|path]]** is amount of it's [[Graphs - basics#Undirected graph|edges]] 

### Euler path

> **Euler path** is [[#Path|path]] that goes through every [[Graphs - basics#Undirected graph|edge]] of a graph *exactly once*

> [!note] 
> - If the [[Graphs - basics#Order (degree) of vertices|degrees]] of all [[Graphs - basics#Directed graphs|vertices]] of the graph are *not less than 2*, then the graph has at least one [[#Euler path|Euler]] [[#Cycle|cycle]]
> - A [[#Connected graph|connected]] [[Graphs - basics#Undirected graph|undirected]] graph has an [[#Euler path|Euler]] [[#Cycle|cycle]] *if, and only if* the [[Graphs - basics#Order (degree) of vertices|degrees]] of *all* [[Graphs - basics#Directed graphs|vertices]] of the graph are *even* numbers
> - If the [[Graphs - basics#Order (degree) of vertices|degrees]] of *exactly two* [[Graphs - basics#Directed graphs|vertices]] are *odd* numbers, then the **Euler path** exists. 
> 	- Its beginning and end are at [[Graphs - basics#Directed graphs|vertices]] of *odd* [[Graphs - basics#Order (degree) of vertices|degrees]] 

#### Euler graph

> If a graph has a [[#Euler path]] and it's a [[#Cycle|cycle]], the graph is called a **Euler** graph

> [!note] 
> [[Graphs - metrics2#Edge graph|Edge graph]] of **Euler graph** has both [[#Euler path|Euler]] and [[#Hamiltonian path|Hamiltonian]] [[#Cycle|cycles]].

#### How to find a Euler cycle

1. Take any [[Graphs - basics#Directed graphs|vertex]] $v$
2. Find [[Graphs - basics#Properties|adjacent]] vertex $w$. If there are no [[Graphs - basics#Properties|adjacent]] vertices - stop
3. Check if [[Graphs - basics#Undirected graph|edge]] $\{v,w\}$ is a [[#Bridges|bridge]]
	- If [[Graphs - basics#Undirected graph|edge]] is *not* a [[#Bridges|bridge]], add it to the cycle and remove from the graph
	- If [[Graphs - basics#Undirected graph|edge]] *is* a [[#Bridges|bridge]]
		- If *there are more vertices* [[Graphs - basics#Properties|adjacent]] to $v$ - choose another vertex
		- If there are *no* more vertices [[Graphs - basics#Properties|adjacent]] to $v$ - add edge to the cycle and remove it from graph. Go to vertex $w$ and repeat
4. Repeat until no [[Graphs - basics#Undirected graph|edges]] left

### Hamiltonian path

> The **Hamiltonian** [[#Path|path]] is a simple [[#Open / closed walk|open/closed]] [[#Circuit|circuit]] that goes through all [[Graphs - basics#Directed graphs|vertices]] of a graph *exactly once*

> [!theorem] 
> - If a graph has a [[#Bridges|bridge]], then it has *no* **Hamiltonian** [[#Cycle|cycle]]. 
> - If the graph obtained by *removing* this [[#Bridges|bridge]] _has a **Hamiltonian** cycle_, then the *initial* graph _has a **Hamiltonian** path_.

#### Hamiltonian graph

> If a graph has a [[#Hamiltonian path]] and it's a [[#Cycle|cycle]], the graph is called a **Hamiltonian** graph

> [!theorem] 
> If $G(V,E)$ is [[#Connected graph|connected]], has $n$ [[Graphs - basics#Directed graphs|vertices]]. $n\geq 3$ and *every* vertex's *v* [[Graphs - basics#Order (degree) of vertices|degree]], $p(v)\geq \frac{n}{2}$, then graph is **Hamiltonian**
> > [!note] 
> > This is not a *necessary* condition, only a *sufficient* one: a graph whose [[Graphs - basics#Order (degree) of vertices|degrees]] of all vertices are equal to 2 ([[#Cycle|cycle]]) is *both* an [[#Euler graph|Euler]] and a **Hamiltonian** graph

> [!theorem] 
> If $G(V,E)$ is [[#Connected graph|connected]], has $n$ [[Graphs - basics#Directed graphs|vertices]]. $n\geq 3$ and sum of [[Graphs - basics#Order (degree) of vertices|degrees]] of some [[Graphs - basics#Properties|nonadjacent]] vertices, $p(u)+p(v) \geq n$, then graph is **Hamiltonian** *if and only if* graph with [[Graphs - basics#Undirected graph|edge]] $\{u,v\}$ is **Hamiltonian**
> 
> <u>This leads to the following:</u>
> 
> $G(V,E)$ is **Hamiltonian** *if and only if* it’s [[#Closure]] is **Hamiltonian**
 
> [!note] 
> [[Graphs - metrics2#Edge graph|Edge graph]] of a **Hamiltonian graph** is also **Hamiltonian graph**


## Cycle

> [[#Open / closed walk|Closed]] [[#Circuit|circuit]] is called a **cycle** 

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="0,0!"] 
b [pos="0.5,0.9!"] 
c [pos="1.5,0.9!"] 
d [pos="2,0!"] 
e [pos="1.5,-0.9!"] 
f [pos="0.5,-0.9!"] 

edge [color = lightgrey] 
 
a -- b
c -- d
c -- f
d -- e
e -- b
f -- a 
} 
```

> [[#Connected graph]] is a [[#Cycle|cycle]], if all vertices have [[Graphs - basics#Order (degree) of vertices|degree]] 2 | $p(v_{i})=2$

### Cyclic graph

> 1. A graph with at least one [[#Cycle|cycle]] is called a **cyclic** graph
> 2. A graph without any [[#Cycle|cycles]] is called an **acyclic** graph
> 	- Graph has *no cycles* if and only if it's [[#Cyclomatic number|cyclomatic number]] = 0 ($v(G)=0$)

### Independent cycles

`````col
````col-md
flexGrow=1
===

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="0,0!"] 
b [pos="0.5,0.9!"] 
c [pos="1.5,0.9!"] 
d [pos="2,0!"] 
e [pos="1.5,-0.9!"] 
f [pos="0.5,-0.9!"] 
o [pos="1,0!"]

edge [color = lightgrey] 
 
a -- b
f -- a
d -- o

edge [color = yellow, penwidth=2] 
b -- c
c -- d
b -- o
f -- o
e -- f
d -- e

} 
```

````
````col-md
flexGrow=1
===

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="0,0!"] 
b [pos="0.5,0.9!"] 
c [pos="1.5,0.9!"] 
d [pos="2,0!"] 
e [pos="1.5,-0.9!"] 
f [pos="0.5,-0.9!"] 
o [pos="1,0!"]

edge [color = lightgrey] 
 
a -- b
d -- e
e -- f
f -- a

f -- o

edge [color = red, penwidth=2] 
b -- c
c -- d
b -- o
d -- o

} 
```

````
````col-md
flexGrow=1
===

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="0,0!"] 
b [pos="0.5,0.9!"] 
c [pos="1.5,0.9!"] 
d [pos="2,0!"] 
e [pos="1.5,-0.9!"] 
f [pos="0.5,-0.9!"] 
o [pos="1,0!"]

edge [color = lightgrey] 
 

d -- e
e -- f

b -- c
c -- d

d -- o

edge [color = cyan, penwidth=2] 
b -- o
f -- o
a -- b
f -- a

} 
```

````
`````

#### Cyclomatic number

> **Cyclomatic** number is the number of [[#Independent cycles|independent cycles]] in a graph 
> $G=(V,E)$; 
> $v(G)=m-n+k$
> n - amount of [[Graphs - basics#Directed graphs|vertices]]
> m - amount of [[Graphs - basics#Undirected graph|edges]]
> k - amount of [[#Connected components|connected components]]

#### How to determine which cycles are independent

> Which [[#Cycle|cycles]] of a [[Graphs - basics#Complete graph|complete graph]] $K_{5}$ are **independent**?
> 
> $C_{1}=\{v_{5}, v_{2}, v_{3}, v_{4}, v_{2}, v_{1}, v_{4}, v_{5}\}$
> $C_{2}=\{v_{5}, v_{2}, v_{1}, v_{4}, v_{5}\}$
> $C_{3}=\{v_{2}, v_{3}, v_{4}, v_{2}\}$
> $C_{4}=\{v_{5}, v_{1}, v_{3}, v_{4}, v_{5}\}$
> $C_{5}=\{v_{1}, v_{4}, v_{3}, v_{1}\}$

1. Enumerate the [[Graphs - basics#Undirected graph|edges]] of $K_{5}$: 
	- $\{v_{1}, v_{2}\} - 1$
	- $\{v_{1}, v_{3}\} - 2$
	- $\{v_{1}, v_{4}\} - 3$
	- $\{v_{1}, v_{5}\} - 4$
	- $\{v_{2}, v_{3}\} - 5$
	- $\{v_{2}, v_{4}\} - 6$
	- $\{v_{2}, v_{5}\} - 7$
	- $\{v_{3}, v_{4}\} - 8$
	- $\{v_{3}, v_{5}\} - 9$
	- $\{v_{4}, v_{5}\} - 10$

2. Make vectors for *every* [[#Cycle|cycle]] and fill the table
	- [[Graphs - basics#Undirected graph|Edge]] $\{v_{1}, v_{2}\}$ is present in $C_{1}$ and $C_{2}$ but in *reverse order*, we write *-1* in the table for those [[#Cycle|cycles]]
	- [[Graphs - basics#Undirected graph|Edge]] $\{v_{1}, v_{2}\}$ is *not present* in any other [[#Cycle|cycles]], we write *0* in the table for those [[#Cycle|cycles]]
	- [[Graphs - basics#Undirected graph|Edge]] $\{v_{1}, v_{3}\}$ is present in $C_{4}$ in the *same order*, we write *1* in the table for this [[#Cycle|cycle]]

|         |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  | 10  |
| ------- |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $C_{1}$ | -1  |  0  |  1  |  0  |  1  | -1  | -1  |  1  |  0  |  1  |
| $C_{2}$ | -1  |  0  |  1  |  0  |  0  |  0  | -1  |  0  |  0  |  1  |
| $C_{3}$ |  0  |  0  |  0  |  0  |  1  | -1  |  0  |  1  |  0  |  0  |
| $C_{4}$ |  0  |  1  |  0  | -1  |  0  |  0  |  0  |  1  |  0  |  1  |
| $C_{5}$ |  0  | -1  |  1  |  0  |  0  |  0  |  0  | -1  |  0  |  0  |

3. Now we find the *rank* of the matrix

> After simplification we get *4* **independent** [[#Cycle|cycles]]

|         |  1  |  2  |  3  |  4  |
| ------- |:---:|:---:|:---:|:---:|
| $C_{2}$ |  1  |  0  |  0  |  0  |
| $C_{5}$ |  0  |  1  |  0  |  0  |
| $C_{4}$ |  0  |  0  |  1  |  0  |
| $C_{1}$ |  0  |  0  |  0  |  1  |

#### Cycles base

> Let's take this case for example

|         |  1  |  2  |  4  |
| ------- |:---:|:---:|:---:|
| $C_{1}$ |  1  |  0  | -1  |
| $C_{2}$ |  1  | -1  |  0  |
| $C_{3}$ | -1  |  1  |  0  |

> To find the **base** we need to find minors with *determinant* not equal to *0*

> We will discard one row and try to make *nonzero determinant* from remaining ones.

````col
```col-md
flexGrow=1
===

##### Remove $C_{1}$

|         |  1  |  2  |  4  |
| ------- |:---:|:---:|:---:|
| $C_{2}$ |  1  | -1  |  0  |
| $C_{3}$ | -1  |  1  |  0  |

> Column 3 is all zeros, we can't use it
> Remaining columns make *zero determinant*. So these vectors are *dependent*.

```
```col-md
flexGrow=1
===

##### Remove $C_{2}$

|         |  1  |  2  |  4  |
| ------- |:---:|:---:|:---:|
| $C_{1}$ |  1  |  0  | -1  |
| $C_{3}$ | -1  |  1  |  0  |

> Column 1 and 2 make a *nonzero* determinant.
> Base is $\{C_{1}, C_{3}\}$

```
```col-md
flexGrow=1
===

##### Remove $C_{3}$

|         |  1  |  2  |  4  |
| ------- |:---:|:---:|:---:|
| $C_{1}$ |  1  |  0  | -1  |
| $C_{2}$ |  1  | -1  |  0  |

> Column 1 and 2 make a *nonzero* determinant.
> Base is $\{C_{1}, C_{2}\}$

```
````

> In this case **base** is $\{C_{1}, C_{3}\}$ or $\{C_{1}, C_{2}\}$

> Any [[#Cycle|cycle]] in a graph can be expressed by it's **base** cycles:
> $C=C_{i1} \ \oplus \ C_{i2} \ \oplus \ ...\ \oplus \ C_{in}$   

--- 
<br>

# Separability of graphs

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="0,0!",color=red] 
b [pos="0.5,0.9!"] 
c [pos="1.5,0.9!",color=red] 
d [pos="2,0!"] 
e [pos="1.5,-0.9!"] 
f [pos="0.5,-0.9!",color=red] 

edge [color = lightgrey] 

c -- {a b}
b -- a

edge [color = lightgreen, penwidth=2] 
c -- d
a -- f
e -- f

} 
```

## Articulations

> [!definition]
> [[Graphs - basics#Directed graphs|Vertex]] $v \in V$ of graph $G=(V, E)$ is called **articulation**, if graph $G-v$ has more [[#Connected components|connected components]] than graph $G$

> If graph has an **articulation** it is **separable**

> [[Graphs - basics#Directed graphs|Vertices]] *f*, *a*, *c* are **articulations** in our graph

`````col
````col-md
flexGrow=1
===
### $G-c$

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="0,0!"] 
b [pos="0.5,0.9!"] 
d [pos="2,0!"] 
e [pos="1.5,-0.9!"] 
f [pos="0.5,-0.9!"] 

edge [color = lightgrey] 
b -- a
a -- f
f -- e
} 
```

````
````col-md
flexGrow=0.8
===
### $G-a$

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

b [pos="0.5,0.9!"] 
c [pos="1.5,0.9!"] 
d [pos="2,0!"] 
e [pos="1.5,-0.9!"] 
f [pos="0.5,-0.9!"] 

edge [color = lightgrey] 
d -- c
c -- b
f -- e
} 
```

````
````col-md
flexGrow=1
===
### $G-f$

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="0,0!"] 
b [pos="0.5,0.9!"] 
c [pos="1.5,0.9!"] 
d [pos="2,0!"] 
e [pos="1.5,-0.9!"] 

edge [color = lightgrey] 
d -- c
c -- {a b}
b -- a
} 
```

````
`````

## Blocks

> [!definition]
> **Block** - maximal [[#Subgraph ($G' subset G$)|subgraph]] without [[#Articulations|articulations]] 

> [[#Separability of graphs|Our graph]] has *4* **blocks**

```````col 
 
``````col-md 
flexGrow=0.4
===

Split on [[#Articulations|articulations]]
`````` 

[___COMMENT___]: # (Column with split graph)

``````col-md 
flexGrow=1.2
===

`````dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.35, 
      height=0.35, 
      fixedsize=true,
      color=green, 
      fillcolor = white] 

a [pos="0.1,0.2!", color=red] 
a1 [pos="0.1,-0.2!", label=a, color=red] 
b [pos="0.5,0.9!"] 
c [pos="1.3,0.9!", color=red] 
c1 [pos="1.6,0.65!", label=c, color=red] 
d [pos="2,0!"] 
d1 [pos="2,0!", label=d] 
e [pos="1.5,-0.9!"] 
f [pos="0.4,-0.75!", color=red] 
f1 [pos="0.8,-0.9!", label=f, color=red] 

edge [color = lightgrey] 

e -- f1
f -- a1
a -- {b, c}
b -- c
c1 -- d

} 
`````
``````


[___COMMENT___]: # (Columnt with 4 blocks)

``````col-md
flexGrow=1.5
===

> After splitting we get these 4 **blocks**

[___COMMENT___]: # (Fisrt 2 blocks)

`````col

````col-md
flexGrow=1
===

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

c [pos="0,0!"] 
d [pos="1,1!"] 

edge [color = lightgrey] 
 c -- d
} 
```

````
````col-md
flexGrow=1
===

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

f [pos="0,0!"] 
e [pos="1,1!"] 

edge [color = lightgrey] 
 f -- e
} 
```

````
`````

[___COMMENT___]: # (Last 2 blocks)

`````col 
````col-md
flexGrow=1
===

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="0,0!"] 
f [pos="1,1!"] 

edge [color = lightgrey] 
 a -- f
}
```

````
````col-md
flexGrow=1
===

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="0,0!"] 
b [pos="0.5,1!"] 
c [pos="1,0!"]

edge [color = lightgrey] 
 a -- b
 b -- c
 c -- a
}
```

````
`````




```````

## Bridges

> [!definition]
> [[Graphs - basics#Undirected graph|Edge]] $e \in E$ of graph $G=(V, E)$ is called **bridge**, if graph $G-e$ has more [[#Connected components|connected components]] than graph $G$ 

> [[Graphs - basics#Undirected graph|Edges]] $\{c, d\}$, $\{e, f\}$ and $\{a, f\}$ are **bridges** in [[#Separability of graphs|our graph]] 

`````col
````col-md
flexGrow=1
===
### $G-\{c,d\}$

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="0,0!"] 
b [pos="0.5,0.9!"] 
c [pos="1.5,0.9!"] 
d [pos="2,0!"] 
e [pos="1.5,-0.9!"] 
f [pos="0.5,-0.9!"] 

edge [color = lightgrey] 
c -- {a b}
b -- a
a -- f
f -- e
} 
```

````
````col-md
flexGrow=1
===
### $G-\{e,f\}$

```dot
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="0,0!"] 
b [pos="0.5,0.9!"] 
c [pos="1.5,0.9!"] 
d [pos="2,0!"] 
e [pos="1.5,-0.9!"] 
f [pos="0.5,-0.9!"] 

edge [color = lightgrey] 
d -- c
c -- {a b}
b -- a
a -- f
} 
```

````
````col-md
flexGrow=1
===
### $G-\{a,f\}$

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

a [pos="0,0!"] 
b [pos="0.5,0.9!"] 
c [pos="1.5,0.9!"] 
d [pos="2,0!"] 
e [pos="1.5,-0.9!"] 
f [pos="0.5,-0.9!"] 

edge [color = lightgrey] 
d -- c
c -- {a b}
b -- a
f -- e
} 
```

````
`````

## Separating sets

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = circo] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

edge [color = lightgrey] 
a -- {c b}
c -- b
d -- {c b e}
f -- {i}
g -- {h}

edge [color = red, penwidth=2]
d -- f
e -- f
g -- f

edge [color = yellow, penwidth=2]
e -- g

} 
```

> Subset $S \subset E$ is a **separating** set of [[#Connected graph|connected graph]] $G=(V,E)$, if graph $G'=(V,E \textbackslash S)$ is a *disconnected* graph

> In this case $\{\{d,f\}, \{e,f\}, \{g,f\}, \{e,g\}\}$ is a **separating set**

### Cuts

> Any minimal [[#Separating sets|separating set]] is a **cut**

> [!note]
> Any [[#Bridges|bridge]] is a [[#Separating sets|separating set]] and a **cut**

> In this case $\{\{d,f\}, \{e,f\}, \{g,f\}\}$ is a **cut**

--- 
<br>

# Go to other topics
``` dataview
list from "uni/Discrete math"
```


