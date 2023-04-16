# Basic information

> [!definition] 
> **Graph coloring** is a special case of graph *labeling* 
> - Assignment of labels traditionally called "colors" to elements of a graph

- Coloring the [[Graphs - basics#Directed graphs|vertices]] of a graph such that no two [[Graphs - basics#Properties|adjacent]] vertices are of the *same color* ([[#Vertex coloring]])
- Coloring the [[Graphs - basics#Vertices and edges|edges]] such that **no** two [[Graphs - basics#Properties|adjacent]] edges are of the *same color*
- **Total** *coloring* of vertices and edges
- **Face** *coloring* of a [[Graphs - planarity#Planar graph|planar graph]] assigns a color to each *face* or *region* so that **no** *two faces* sharing a *boundary* have the *same color*

## Dual graph

> Instead of coloring map we can color [[Graphs - planarity#Area of a Planar graph planar graph|areas]] of it’s **dual graph** (areas will be vertices)

`````col 
````col-md 
flexGrow=1
===

Original graph

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
      color=darkgray, 
      fillcolor = white] 

a[pos="0,0!",fillcolor=green] 
b[pos="1,1!",fillcolor=blue] 
c[pos="1,0!",fillcolor=red]
d[pos="1,-1!",fillcolor=blue]
e[pos="2,0!",fillcolor=green]

edge [color = lightgrey] 
 
a -- {b c d}
e -- {b c d}
c -- {b d}

} 
```

```` 
````col-md 
flexGrow=1
===

Cross every [[Graphs - basics#Vertices and edges|edge]]

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.4, 
      height=0.4, 
      color=green,
      fillcolor = white] 

a[pos="0,0!"] 
b[pos="1,1!"] 
c[pos="1,0!"]
d[pos="1,-1!"]
e[pos="2,0!"]

node [width=0.3, height=0.3, color=red, fixedsize = true]
      
A[pos="0,1!"] 

B[pos="0.7,0.3!"] 
C[pos="1.3,0.3!"]  
D[pos="0.7,-0.3!"] 
E[pos="1.3,-0.3!"]  

node [label="A"]
A1[pos="2,1!"] 
A2[pos="0,-1!"] 
A3[pos="2,-1!"]

edge [color = lightgrey] 
 
a -- {b c d}
e -- {b c d}
c -- {b d}

edge [color = red] 

B -- A
C -- A1
D -- A2
E -- A3
B -- {C, D}
E -- {C, D}

} 
```

```` 
````col-md 
flexGrow=1
===

Redraw

```dot 
---
preset:math-graph
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape=triangle, width=0.8, height=0.8
      style = filled,  
      color=transparent, 
      fixedsize=true
      fillcolor = white] 
      
b[pos="0.7,0.3!",orientation=105,fillcolor=blue]
e[pos="1.3,0.3!",orientation=135,fillcolor=green]  
d[pos="1.3,-0.3!",orientation=165,fillcolor=blue] 
a[pos="0.7,-0.3!",orientation=195,fillcolor=green]

c[pos="0.3,0.7!",orientation=135,fillcolor=red,shape=box]

node [shape = circle, color=red, width=0.3, height=0.3]

B[pos="0,0!"] 
C[pos="1,1!"] 
A[pos="1,0!"]
D[pos="1,-1!"]
E[pos="2,0!"]

edge [color = red] 
 
B -- {A C D}
E -- {A C D}
A -- {D C}

} 
```

````

`````

--- 
<br>

# Vertex coloring

> Example of **vertex coloring**
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
      color=darkgray, 
      fillcolor = white, label=""] 

b, e, d1, a1[fillcolor=blue]
a, c, b1[fillcolor=green]
d, e1, c1[fillcolor=red]

edge [color = lightgrey] 

a -- {a1, b}
b -- {b1, c}
c -- {c1, d}
d -- {d1, e}
e -- {e1, a}

c1 -- {b1}
e1 -- {a1, d1}
a1 -- b1
c1 -- d1

} 
```

`````col 
````col-md 
flexGrow=1
===

Let’s say we have **5** colors and we want to color vertices. 
- There are _$5*4=20$_ ways to do this


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

edge [color = lightgrey] 

a -- b
 
} 
```

```` 
````col-md 
flexGrow=1
===

Let’s say we have **4** colors and we want to color vertices. 
- There are _$4*3*2*2=48$_ ways to do this

```dot 
---
preset:math-graph
name:square_diagonal
---
graph neato { 

bgcolor="transparent" 

graph [layout = twopi] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

edge [color = lightgrey] 

a -- {b, c, d}
c -- {b, d}
 
} 
```

```` 
`````

## Chromatic polynomial and number

> [!definition] 
> **Chromatic polynomial** $C_{G}(\lambda)$ shows in how many *different ways* we can color vertices using $\lambda$ colors

> [!definition] 
> **Chromatic number** - *Smallest* possible amount of colors needed to color [[Graphs - basics#Directed graphs|vertices]]
> It is equal to *smallest* integer with which [[#Chromatic polynomial|chromatic polynomial]] $G_{G}(n)\neq 0$

`````col 
````col-md 
flexGrow=1
===

```refgraph
square_diagonal
```

```` 
````col-md 
flexGrow=2
===

Let's have *$\lambda$* colors. For this graph there will be *$\lambda(\lambda-1)(\lambda-2)(\lambda-2)=C_G(\lambda)$* ways to do it 

- *$\lambda$* for the first vertex, *$\lambda-1$* for second vertex and *$\lambda-2$* for top  and bottom vertices

> [!note] 
> $C_G(3) \neq 0$
> $C_G(2) = 0$
> $C_G(1) = 0$
> So, minimal amount of colors (**chromatic number**) is **3**

```` 
`````

> Some formulas for known graph types

| Type                                               | Formula                                             |
| -------------------------------------------------- | --------------------------------------------------- |
| [[Graphs - basics#Complete graph\|Complete]] graph | $\lambda(\lambda-1)(\lambda-2)\dots(\lambda-(n-1))$ |
| [[Graphs - trees#Tree\|Tree]]                      | $\lambda(\lambda-1)^{n-1}$                          |
| Noodle structure (line)                            | $\lambda(\lambda-1)^{n-1}$ |
| [[Graphs - connectivity#Cycle\|Cycle]]             | $(\lambda-1)^n+(-1)^n(\lambda-1)$                   |
| [[Graphs - basics#Special graphs\|Empty]] graph    | $\lambda^n$                                         |

> [!theorem] 
> If $G=G_{1} \cup G_{2} \cup \dots \cup G_{n}$ where $G_{i}$ - it's [[Graphs - connectivity#Connected components|connected components]], then $$C_{G}(\lambda)=C_{G_{1}}(\lambda)*C_{G_{2}}(\lambda)*\dots*C_{G_{n}}(\lambda)$$
> > [!tldr]
> > If graph $G$ can be colored using **K** colors, then some [[Graphs - connectivity#Connected components|connected component]] of it can be colored using **K** colors
> 

> [!theorem] 
> $$C_{G\hat{e}}=C_{G}(\lambda)+C_{G/e}(\lambda)$$
> 
> Where:
> - $G\hat{e}$ is $G - e$
> - $G/e$ is $G$ with "contracted" [[Graphs - basics#Vertices and edges|edge]] $e$

`````col 
````col-md 
flexGrow=1
===

#### G

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

b [pos="1,0!"] 
c [pos="0,1!"] 
a [pos="0,0!"] 
d [pos="1,1!"] 

edge [color = lightgrey] 

a -- b [label="e", fontcolor=white]
c -- {a d}
b -- d

} 
```

```` 
````col-md 
flexGrow=1
===

#### $G\hat{e}$

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

b [pos="1,0!"] 
c [pos="0,1!"] 
a [pos="0,0!"] 
d [pos="1,1!"] 

edge [color = lightgrey] 

c -- {a d}
b -- d

} 
```

```` 
````col-md 
flexGrow=1
===

#### $G/e$

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

c [pos="0,1!"] 
a [pos="0.5,0!"] 
d [pos="1,1!"] 

edge [color = lightgrey] 

c -- {a d}
a -- d

} 
```

```` 
`````

## Heuristics

### Greedy Algorithm (FF)

1. Assign the first color to the first [[Graphs - basics#Directed graphs|vertex]]
2. The remaining [[Graphs - basics#Directed graphs|vertices]] are assigned the *smallest possible* color 
	- A color is *not* available if the [[#Neighborhood of vertices|neighboring]] vertex already has that color

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
      color=darkgray, 
      fillcolor = white] 

1 [pos="0.1,-0.1!", fillcolor=pink] 
2 [pos="0.4,0.9!", fillcolor=pink] 
3 [pos="1.6,0.9!", fillcolor=lightgreen] 
4 [pos="1.9,-0.1!", fillcolor=pink] 
5 [pos="1,-0.8!", fillcolor=lightblue] 

edge [color = lightgrey] 
 
5 -- {1 3 4}
3 -- {1 2 4}

} 
```

```` 

````col-md 
flexGrow=0.7
===

Colors:
1. #c/red **red** 
2. #c/green **green** 
3. #c/blue **blue** 
4. gray 

Vertices: 1 2 3 4 5

```` 

````col-md 
flexGrow=1
===

- 1 vertex: #c/red **red** 
- 2 vertex: #c/red **red**  
- 3 vertex: 
	- ! #c/red **red** (impossible)
	- #c/green **green** 
- 4 vertex: #c/red **red** 
- 5 vertex: 
	- ! #c/red **red** (impossible)
	- ! #c/green **green** (impossible)
	- #c/blue **blue** 


```` 
`````

### Random Queue (RS)

1. List vertices randomly
2. Apply [[#Greedy Algorithm (FF)|greedy algorithm]]

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
      color=darkgray, 
      fillcolor = white] 

1 [pos="0.1,-0.1!", fillcolor=lightblue] 
2 [pos="0.4,0.9!", fillcolor=pink] 
3 [pos="1.6,0.9!", fillcolor=lightgreen] 
4 [pos="1.9,-0.1!", fillcolor=lightblue] 
5 [pos="1,-0.8!", fillcolor=pink] 

edge [color = lightgrey] 
 
5 -- {1 3 4}
3 -- {1 2 4}

} 
```

```` 

````col-md 
flexGrow=0.7
===

Colors:
1. #c/red **red** 
2. #c/green **green** 
3. #c/blue **blue** 
4. gray 

Vertices: 5 3 1 4 2

```` 

````col-md 
flexGrow=1
===

- 5 vertex: #c/red **red**  
- 3 vertex: 
	- ! #c/red **red** (impossible)
	- #c/green **green** 
- 1 vertex: 
	- ! #c/red **red** (impossible)
	- ! #c/green **green** (impossible)
	- #c/blue **blue**  
- 4 vertex: 
	- ! #c/red **red** (impossible)
	- ! #c/green **green** (impossible)
	- #c/blue **blue** 
- 2 vertex: #c/red **red** 


```` 
`````

### Largest First (LF)

> [[Graphs - basics#Directed graphs|Vertices]] with a smaller [[Graphs - basics#Order (degree) of vertices|degree]] usually have a *greater choice* of possible colors

1. List vertices in descending order of [[Graphs - basics#Order (degree) of vertices|degrees]] (vertices with equal *degrees* are taken from list as is (with the *smallest* number))
2. Apply [[#Greedy Algorithm (FF)|greedy algorithm]]

`````col 
````col-md 
flexGrow=1
===

```dot 
---
preset:math-graph
name:LFSL
---
graph neato { 

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=darkgray, 
      fillcolor = white] 

1 [pos="0.1,-0.1!", fillcolor=lightblue] 
2 [pos="0.4,0.9!", fillcolor=lightgreen] 
3 [pos="1.6,0.9!", fillcolor=pink] 
4 [pos="1.9,-0.1!", fillcolor=lightblue] 
5 [pos="1,-0.8!", fillcolor=lightgreen] 

edge [color = lightgrey] 
 
5 -- {1 3 4}
3 -- {1 2 4}

} 
```

```` 

````col-md 
flexGrow=0.7
===

Colors:
1. #c/red **red** 
2. #c/green **green** 
3. #c/blue **blue** 
4. gray 

Vertices: 3 5 1 4 2

```` 

````col-md 
flexGrow=1
===

- 3 vertex: #c/red **red**  
- 5 vertex: 
	- ! #c/red **red** (impossible)
	- #c/green **green** 
- 1 vertex: 
	- ! #c/red **red** (impossible)
	- ! #c/green **green** (impossible)
	- #c/blue **blue**  
- 4 vertex: 
	- ! #c/red **red** (impossible)
	- ! #c/green **green** (impossible)
	- #c/blue **blue** 
- 2 vertex: 
	- ! #c/red **red** (impossible)
	- #c/green **green** 


```` 
`````

### Smallest Last (SL)

- **h-degree**: the number of colors *not available* for this [[Graphs - basics#Directed graphs|vertex]]
- **k-degree**: the number of *unpainted* vertices [[Graphs - basics#Properties|adjacent]] to the vertex

Sorting rules:
- Vertex with the *biggest* **h-degree** is preferred
- If **h-degrees** of several vertices are the same, take one with the biggest **k-degree**
- If **k-degrees** of several vertices are the same, take one with the *smallest number* (closest to the start of the list)

`````col 
````col-md 
flexGrow=0.7
===

```refgraph
LFSL
```

```` 

````col-md 
flexGrow=0.3
===

Colors:
1. #c/red **red** 
2. #c/green **green** 
3. #c/blue **blue** 
4. gray 

```` 

````col-md 
flexGrow=1
===

- 3 vertex (biggest **k-degree**, 4): #c/red **red**  
- 5 vertex (biggest **k-degree**, 2): 
	- ! #c/red **red** (impossible)
	- #c/green **green** 
- 1 vertex (smaller number): 
	- ! #c/red **red** (impossible)
	- ! #c/green **green** (impossible)
	- #c/blue **blue**  
- 4 vertex (biggest **h-degree**, 4): 
	- ! #c/red **red** (impossible)
	- ! #c/green **green** (impossible)
	- #c/blue **blue** 
- 2 vertex: 
	- ! #c/red **red** (impossible)
	- #c/green **green** 


```` 
`````

--- 
<br>

# Go to other topics
``` dataview
list from "uni/Discrete math"
```

