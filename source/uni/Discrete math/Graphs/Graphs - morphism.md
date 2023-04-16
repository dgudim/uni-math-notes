
# Homomorphism 

> [!definition]
> Graphs $G_{1}=(V_{1},E_{1})$ and $G_{2}=(V_{2},E_{2})$ are **homomorphic**, if there exists such function: $f:G_{1}\to G_{2}$
> 1. If $v \in V_{1}$, then $f(v) \in V_{2}$
> 2. If $e \in E_{1}$, then $f(e) \in E_{2}$
> 3. If in graph $G$ [[Graphs - basics#Directed graphs|vertices]] $u$ and $v$ were [[Graphs - basics#Vertices and edges|adjacent]], then in $G_{2}$ [[Graphs - basics#Directed graphs|vertices]] $f(u)$ and $f(v)$ are also [[Graphs - basics#Vertices and edges|adjacent]]
> 
> > [!tldr] 
> > We map one graph onto another, [[#Folding|folding]] if necessary

> [!theorem] 
> 1. If function $f$ is **homomorphism** from $G_{1}$ to $G_{2}$, then $f(G_{1})$ is a [[Graphs - connectivity#Subgraph ($G' subset G$)|subgraph]] of $G_{2}$
> 2. If graph $G_{1}$ is [[Graphs - connectivity#Connected graph|connected]] and function $f$ is **homomorphism**, then $f(G_{1})$ is also [[Graphs - connectivity#Connected graph|connected]]
> 3. If graph $G_{1}$ is [[Graphs - basics#Complete graph|complete]] and function $f$ is **homomorphism**, then $f(G_{1})$ is also [[Graphs - basics#Complete graph|complete]]

> [!example] 
> Construct **homomorphism** from *B* to *A*
> 
> `````col
> ````col-md
> flexGrow=1
> ===
> **A**
> 
> ```dot 
> ---
> preset: math-graph
> ---
> graph neato { 
> 
> bgcolor="transparent" 
> 
> graph [layout = neato] 
> 
> node [shape = circle, 
>       style = filled, 
>       width=0.3, 
>       height=0.3, 
>       color=green, 
>       fillcolor = white] 
> 
> edge [color = lightgrey] 
> 
> "3/b" -- {1 "2/a"}
> "2/a" -- 1
> 
> } 
> ```
> 
> ````
> ````col-md
> flexGrow=1
> ===
> 
> **B**
> 
> ```dot 
> ---
> preset: math-graph
> ---
> graph neato { 
> 
> bgcolor="transparent" 
> 
> graph [layout = neato] 
> 
> node [shape = circle, 
>       style = filled, 
>       width=0.3, 
>       height=0.3, 
>       color=green, 
>       fillcolor = white] 
> 
> edge [color = lightgrey] 
> 
> a -- b
> 
> } 
> ```
> 
> ````
> `````
> 
> $f(a)=2, f(b)=3$

## Folding

> One of the techniques for constructing [[#Homomorphism|homomorphism]] is **graph folding**

> [!example] 
> Map *A* to *B* 
> 
> `````col 
> ````col-md 
> flexGrow=1
> ===
> 
> **A**
> 
> ```dot 
> ---
> preset: math-graph
> ---
> graph neato { 
> 
> bgcolor="transparent" 
> 
> graph [layout = neato] 
> 
> node [shape = circle, 
>       style = filled, 
>       width=0.3, 
>       height=0.3, 
>       color=green, 
>       fillcolor = white] 
> 
> 1 [pos="-1,-0.5!"] 
> 2 [pos="1,-0.5!"] 
> 3 [pos="-1,0.5!"] 
> 4 [pos="1,0.5!"] 
> 5 [pos="0,0!"] 
> 
> 
> node [color=transparent, 
>       fillcolor=transparent, 
>       label="", 
> 	  width=0,
>       height=0]
> "-" [pos="0, 1!"] 
> "." [pos="0,-1!"]
> 
> edge [color = lightgrey] 
> 
> 5 -- {1 2 3 4}
> 1 -- 3
> 2 -- 4
> 
> edge [style=dashed, color=green, penwidth=2]
> 5 -- {".", "-"}
> 
> } 
> ```
> 
> ```` 
> ````col-md 
> flexGrow=1
> ===
> 
> **B**
> 
> ```dot 
> ---
> preset: math-graph
> ---
> graph neato { 
> 
> bgcolor="transparent" 
> 
> graph [layout = neato] 
> 
> node [shape = circle, 
>       style = filled, 
>       width=0.3, 
>       height=0.3, 
>       color=green, 
>       fillcolor = white] 
> 
> a [pos="-1,-0.5!"] 
> b [pos="-1,0.5!"] 
> c [pos="0,0!"] 
> 
> edge [color = lightgrey] 
> 
> a -- b
> b -- c
> c -- a
> 
> } 
> ```
> 
> ```` 
> `````
> 
> We get this:
> 
> $f(1)=f(2)=a$
> $f(3)=f(4)=b$
> $f(5)=c$
> 
> ```dot 
> ---
> preset: math-graph
> ---
> graph neato { 
> 
> bgcolor="transparent" 
> 
> graph [layout = neato] 
> 
> node [shape = circle, 
>       style = filled, 
>       width=0.3, 
>       height=0.3, 
>       color=green, 
>       fillcolor = white] 
> 
> "1,2" [pos="-1,-0.5!"] 
> "3,4" [pos="-1,0.5!"] 
> 
> node [width=0.65, 
>       height=0.65]
> 5 [pos="0,0!"] 
> 
> edge [color = lightgrey] 
> 
> 5 -- {"3,4", "1,2"}
> "3,4" -- "1,2"
> 
> 
> } 
> ```

--- 
<br>

# Isomorphism

> [!definition] 
> Graphs $G_{1}=(V_{1},E_{1})$ and $G_{2}=(V_{2},E_{2})$ are **isomorphic** ($G_{1} \cong G_{2}$), if there exists such *bijection* $f:G_{1} \to G_{2}$, that 
> $\forall \{u,v\} \in E_{1} \implies \{f(u), f(v)\} \in E_{2}$ and 
> $\forall \{w,y\} \in E_{2} \implies \{f^{-1}(w), f^{-1}(y)\} \in E_{1}$ 
> $|V_{1}|=|V_{2}|$, $|E_{1}|=|E_{2}|$
> 
> > [!tldr] 
> > The same graph written differently

> [!example] 
> 
> `````col 
> ````col-md 
> flexGrow=1
> ===
> 
> ## $G$
> 
> ```dot 
> ---
> preset: math-graph
> ---
> graph neato { 
> 
> bgcolor="transparent" 
> 
> graph [layout = neato] 
> 
> node [shape = circle, 
>       style = filled, 
>       width=0.3, 
>       height=0.3, 
>       color=green, 
>       fillcolor = white] 
> 
> a [pos="1,0!"] 
> b [pos="0,1!"] 
> c [pos="0,0!"] 
> d [pos="1,1!"] 
> 
> edge [color = lightgrey] 
>  
> c -- {a b d}
> a -- {b d}
> b -- d
> 
> } 
> ```
> 
> ```` 
> ````col-md 
> flexGrow=2
> ===
> 
> ## $T$
> 
> ```dot 
> ---
> preset: math-graph
> ---
> graph neato { 
> 
> rankdir=LR;
> 
> bgcolor="transparent" 
> 
> graph [layout = dot] 
> 
> node [shape = circle, 
>       style = filled, 
>       width=0.3, 
>       height=0.3, 
>       color=green, 
>       fillcolor = white] 
> 
> 
> edge [color = lightgrey] 
>  
> 3 -- {1 2 4}
> 1 -- {2 4}
> 2 -- 4
> 
> } 
> ```
> 
> ```` 
> `````
> 

> [!info] 
> Properties:
> 
> 1. Graph is **isomorphic** to itself
> 2. If $G_{1}$ is **isomorphic** to $G_{2}$, then $G_{2}$ is **isomorphic** to $G_{1}$
> 3. If $G_{1}$ is **isomorphic** to $G_{2}$ and $G_{2}$ to $G_{3}$, then $G_{1}$ is **isomorphic** to $G_{3}$


## Labeled and unlabeled graphs

> [!definition] 
> A class of graphs any representatives of which are [[#Isomorphism|isomorphic]] graphs is called an **unlabeled** graph
> Any element of this class is a **labeled** graph

`````col 
````col-md 
flexGrow=1
===

### D (Unlabeled)

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
      fillcolor = white, 
      label=""] 

a [pos="0,0!"] 
b [pos="0.5,0.8!"] 
c [pos="1,0!"] 

edge [color = lightgrey] 
 
a -- {b} 
c -- {b} 
} 
```

```` 
````col-md 
flexGrow=1
===

### A (Labeled)

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

1 [pos="0,0!"] 
2 [pos="0.5,0.8!"] 
3 [pos="1,0!"] 

edge [color = lightgrey] 
 
1 -- {2} 
1 -- {3} 
} 
```

```` 

````col-md 
flexGrow=1
===

### B (Labeled)

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

1 [pos="0,0!"] 
2 [pos="0.5,0.8!"] 
3 [pos="1,0!"] 

edge [color = lightgrey] 
 
1 -- 2 
3 -- 2 
} 
```

```` 

````col-md 
flexGrow=1
===

### C (Labeled)

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
1 [pos="0.5,0.8!"] 
c [pos="1,0!"] 

edge [color = lightgrey] 
 
a -- {c} 
c -- {1} 
} 
```

```` 

`````

### Invariants

> [!definition] 
> Graph functions ([[Graphs - basics#Directed graphs|vertices]], [[Graphs - basics#Undirected graph|edges]], [[Graphs - basics#Order (degree) of vertices|degree]] sequences, [[Graphs - metrics#Diameter of a graph|diameter]], amount of [[Graphs - metrics#Center of a graph|centers]], amount of [[Graphs - connectivity#Articulations|articulations]], etc.), that have same value with all [[#Isomorphism|isomorphic]] graphs are called **invariants**. 

> [!example] 
> $A$, $B$, $C$ are [[#Isomorphism|isomorphic]] to each other, all of them have 3 [[Graphs - basics#Directed graphs|vertices]], 2 [[Graphs - basics#Undirected graph|edges]], same [[Graphs - basics#Order (degree) of vertices|degree]] sequences, same [[Graphs - metrics#Diameter of a graph|diameter]] and amount of [[Graphs - metrics#Center of a graph|centers]], same amount of [[Graphs - connectivity#Articulations|articulations]] and so on.

### Amount of labeled graphs

> Let’s $|V|=n;$, then amount of all possible [[Graphs - basics#Undirected graph|edges]] (pairs of 2 different [[Graphs - basics#Directed graphs|vertices]]) is:
> 
> $\large m=\frac{n(n-1)}{2}$
> 
> So generating function for amount of $n$-th order [[#Labeled and unlabeled graphs|labeled]] graphs is:
> 
> $G_{n}(x)=(1+x)^m$
> 
> Amount of *all* possible [[#Labeled and unlabeled graphs|labeled]] graphs (of $n$-th order): $G_{n}(1)=(1+1)^m=2^m$
> 
> Amount of *all* possible [[#Labeled and unlabeled graphs|labeled]] graphs can be calculated *approximately*:
> 
> $\large g_{n}(x) \sim \frac{2^m}{n!}, n \to \infty$

## Checking for isomorphism

1. We can check [[#Invariants|invariants]]:
	1. Amount of [[Graphs - basics#Directed graphs|vertices]]
	2. Amount of [[Graphs - basics#Undirected graph|edges]]
	3. Vertex [[Graphs - basics#Order (degree) of vertices|degrees]]
	4. [[Graphs - metrics#Distance matrix|Distance matrices]]
	5. [[Graphs - connectivity#Length of the path|Length]] of [[Graphs - connectivity#Cycle|cycles]] 
	6. ...

### Method for programs

2. Also, we can use this method: 
> We will use the following 2 graphs as an example:
`````col 
````col-md 
flexGrow=1
===

### $Ga$

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

5 [pos="0,0!"] 
4 [pos="0.5,0.9!"] 
3 [pos="1.5,0.9!"] 
2 [pos="2,0!"] 
1 [pos="1.5,-0.9!"] 
6 [pos="0.5,-0.9!"] 

edge [color = lightgrey] 

5 -- {4 6 1}
2 -- {1 3 6}
4 -- {6 1}
3 -- {6 1}

} 
```

```` 
````col-md 
flexGrow=1
===

### $Gb$

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

5 [pos="0,0!"] 
4 [pos="0.5,0.9!"] 
3 [pos="1.5,0.9!"] 
2 [pos="2,0!"] 
1 [pos="1.5,-0.9!"] 
6 [pos="0.5,-0.9!"] 

edge [color = lightgrey] 

6 -- {5 1 2}
3 -- {2 4 1}
5 -- {1 2}
4 -- {1 2}

} 
```

```` 
`````

1. Make [[Graphs - basics#Adjacency matrix|adjacency]] matrix:

````col
```col-md
flexGrow=1
===

$$ 

G_{A} = 

\begin{pmatrix} 
* & \color{orange}1 & \color{orange}1 & \color{orange}1 & \color{orange}1 &* \\
\color{orange}1 & * & \color{orange}1 & * & * & \color{orange}1 \\
\color{orange}1 & \color{orange}1 & * & * & * & \color{orange}1 \\
\color{orange}1 & * & * & * & \color{orange}1 & \color{orange}1 \\
\color{orange}1 & * & * & \color{orange}1 & * & \color{orange}1 \\
* & \color{orange}1 & \color{orange}1 & \color{orange}1 & \color{orange}1 &*
\end{pmatrix} 

$$

```
```col-md
flexGrow=1
===

$$ 

G_{B} = 

\begin{pmatrix} 
* & * & \color{orange}1 & \color{orange}1 & \color{orange}1 & \color{orange}1 \\
* & * & \color{orange}1 & \color{orange}1 & \color{orange}1 & \color{orange}1 \\
\color{orange}1 & \color{orange}1 & * & \color{orange}1 & * & * \\
\color{orange}1 & \color{orange}1 & \color{orange}1 & * & * & * \\
\color{orange}1 & \color{orange}1 & * & * & * & \color{orange}1 \\
\color{orange}1 & \color{orange}1 & * & * & \color{orange}1 & *
\end{pmatrix} 

$$

```
````

2. Make [[Graphs - basics#Degree matrix|degree]] matrix:

$d=4$

````col
```col-md
flexGrow=1
===

$$ 

D_{A}=

\begin{pmatrix} 
\color{lime}8 & 0 & 0 & 0 & 0 & 0 \\
0 & \color{cyan}7 & 0 & 0 & 0 & 0 \\
0 & 0 & \color{cyan}7 & 0 & 0 & 0 \\
0 & 0 & 0 & \color{cyan}7 & 0 & 0 \\
0 & 0 & 0 & 0 & \color{cyan}7 & 0 \\
0 & 0 & 0 & 0 & 0 & \color{lime}8
\end{pmatrix} 

$$

```
```col-md
flexGrow=1
===

$$ 

D_{B}=

\begin{pmatrix} 
\color{lime}8 & 0 & 0 & 0 & 0 & 0 \\
0 & \color{lime}8 & 0 & 0 & 0 & 0 \\
0 & 0 & \color{cyan}7 & 0 & 0 & 0 \\
0 & 0 & 0 & \color{cyan}7 & 0 & 0 \\
0 & 0 & 0 & 0 & \color{cyan}7 & 0 \\
0 & 0 & 0 & 0 & 0 & \color{cyan}7
\end{pmatrix} 

$$

```
````

3. Sum those matrices **($A = G_{A} + D_{A}$ ; $B=G_{B}+D_{B}$):**

````col
```col-md
flexGrow=1
===

$$ 

A = 

\begin{pmatrix} 
\color{lime}8 & \color{orange}1 & \color{orange}1 & \color{orange}1 & \color{orange}1 &* \\
\color{orange}1 & \color{cyan}7 & \color{orange}1 & * & * & \color{orange}1 \\
\color{orange}1 & \color{orange}1 & \color{cyan}7 & * & * & \color{orange}1 \\
\color{orange}1 & * & * & \color{cyan}7 & \color{orange}1 & \color{orange}1 \\
\color{orange}1 & * & * & \color{orange}1 & \color{cyan}7 & \color{orange}1 \\
* & \color{orange}1 & \color{orange}1 & \color{orange}1 & \color{orange}1 & \color{lime}8
\end{pmatrix} 

$$

```
```col-md
flexGrow=1
===

$$ 

B = 

\begin{pmatrix} 
\color{lime}8 & * & \color{orange}1 & \color{orange}1 & \color{orange}1 & \color{orange}1 \\
* & \color{lime}8 & \color{orange}1 & \color{orange}1 & \color{orange}1 & \color{orange}1 \\
\color{orange}1 & \color{orange}1 & \color{cyan}7 & \color{orange}1 & * & * \\
\color{orange}1 & \color{orange}1 & \color{orange}1 & \color{cyan}7 & * & * \\
\color{orange}1 & \color{orange}1 & * & * & \color{cyan}7 & \color{orange}1 \\
\color{orange}1 & \color{orange}1 & * & * & \color{orange}1 & \color{cyan}7
\end{pmatrix} 

$$

```
````
4. Add any small number $\large\epsilon_{0.1}$ to the same value in the diagonal of both matrices. I.e: $a_{11}=8$ and ($b_{11}=8$ or $b_{22}=8$)
5. Invert those matrices
6. Search for element equal to $a_{11}$ in the inverted *B* matrix
7. Repeat (Choose one more element and add $\large\epsilon_{0.2}$, $\large\epsilon_{0.1}$ will stay in it's position)
8. Construct mapping $$p= 
\begin{Bmatrix}
1 & 2 & 3 & 4 & 5 & 6 \\
1 & 3 & 4 & 5 & 6 & 1
\end{Bmatrix} $$

--- 
<br>

# Homeomorphism (topological [[#Isomorphism|isomorphism]])

> [!definition] 
> Graphs $G$ and $G'$ are called **homeomorphic**, if they can be [[#Derived graph|derived]] from the same graph

> $G_{2}$ and $G_{3}$ are **homeomorphic**, they can be both [[#Derived graph|derived]] from $G_{1}$ by adding [[#Extension|extensions]] $5$ and $6$ respectively

`````col 
````col-md 
flexGrow=1
===

### $G_1$

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

2 -- {1 3 4}
1 -- 3

} 
```

```` 
````col-md 
flexGrow=1
===

### $G_2$



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

2 -- {1 5 4}
5 -- 3
1 -- 3

} 
```

```` 
````col-md 
flexGrow=1
===

### $G_3$

```dot 
---
preset:math-graph
---
graph neato { 

rankdir="LR";

bgcolor="transparent" 

graph [layout = neato] 

node [shape = circle, 
      style = filled, 
      width=0.3, 
      height=0.3, 
      color=green, 
      fillcolor = white] 

edge [color = lightgrey] 

2 -- {1 3 6}
1 -- 3
6 -- 4

} 
```

```` 
`````

> [!theorem] 
> If graphs $G$ and $G'$ are **homeomorphic**, they will have same amount of [[Graphs - basics#Directed graphs|vertices]] with <u>odd</u> [[Graphs - basics#Order (degree) of vertices|degrees]]
> > [!note] 
> > So, if [[Graphs - basics#Directed graphs|vertex]] [[Graphs - basics#Order (degree) of vertices|degrees]] of two graphs are *1,3,3,3,2* and *1,3,2,2,2* correspondingly, *these graphs are not homeomorphic*. If amount of [[Graphs - basics#Directed graphs|vertices]] with <u>odd</u> [[Graphs - basics#Order (degree) of vertices|degrees]] *is the same*, we can’t predict the situation

### Extension

> [!definition] 
> If graph $G(V,E)$ has [[Graphs - basics#Undirected graph|edge]] $e=\{v_{1},v_{2}\}$, and graph $G'(V',E')$ is produced from $G(V,E)$ by *putting additional vertex* $v$ on that [[Graphs - basics#Undirected graph|edge]] (It becomes $\{v_{1},v\}$ and $\{v,v_{2}\}$), then $G'(V',E')$ is an **extension** of $G(V,E)$

`````col 
````col-md 
flexGrow=1
===

**$G(V,E)$**

```dot 
---
preset:math-graph
name:derived_0
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

a -- b
b -- c
c -- d
d -- e
e -- a

} 
```

```` 
````col-md 
flexGrow=1
===

**$G'(V',E')$**


```dot 
---
preset:math-graph
name:derived_1
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

node [fillcolor=green]
f [pos="0.5,-0.9!"] 

edge [color = lightgrey] 

a -- b
b -- c
c -- d
d -- e
e -- f
f -- a

} 
```

```` 
`````

### Derived graph

> [!definition] 
> If graphs $G_{1},G_{2},G_{3},\dots G_{n}$ are such that every graph $G_{i+1}$ is an [[#Extension|extension]] of graph $G_{i}$, then graph $G_{n}$ is a **derived** graph of graph $G_{1}$

`````col 
````col-md 
flexGrow=1
===

**$G_1$**

```refgraph
derived_0
```

```` 
````col-md 
flexGrow=1
===

**$G_2$**


```refgraph 
derived_1
```

```` 

````col-md 
flexGrow=1
===

**$G_3$**


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

node [fillcolor=green]
f [pos="0.7,-1.2!"] 
i [pos="0,-0.8!"] 

edge [color = lightgrey] 

a -- b
b -- c
c -- d
d -- e
e -- f
f -- i
i -- a

} 
```

````

`````

--- 
<br>

# Go to other topics
``` dataview
list from "uni/Discrete math"
```
