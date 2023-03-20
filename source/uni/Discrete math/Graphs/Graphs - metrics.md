
# Distances

## Distance between vertices

> **Distance between 2 [[Graphs - basics#Directed graphs|vertices]]** is the *length* of shortest [[Graphs - connectivity#Path|path]] connecting these vertices. 
> Notion: $\rho (u,w)$ 

> [!note] 
> 1. $\rho (u,w)$ >= 0. $\rho (u,w)$ = 0, if u = w
> 2. $\rho (u,w)$ = $\rho (w,u)$
> 3. $\rho (x,y)$ + $\rho (y,z)$ >= $\rho (x,z)$ 

## Distance matrix

> This is how you make a **distance matrix**

`````col
````col-md
flexGrow=1
===

```dot 
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
2 [pos="0.5,0.9!"] 
3 [pos="1.5,0.9!"] 
4 [pos="2,0!"] 
5 [pos="1.5,-0.9!"] 
6 [pos="0.5,-0.9!"] 

edge [color = grey] 
 
1 -- 2
2 -- 3
3 -- 4
4 -- 5
5 -- 6
6 -- 1

} 
```

````
````col-md
flexGrow=1
===

|     | #c/white **1**  | #c/white **2** | #c/white **3** | #c/white **4** | #c/white **5** | #c/white **6** | 
| --- | -------------- | -------------- | -------------- | -------------- | -------------- | -------------- |
| #c/white **1**   | X              | #c/green **1** | **2**          | #c/red **3**   | **2**          | #c/green **1** |
| #c/white **2**   | #c/green **1** | X              | #c/green **1** | **2**          | #c/red **3**   | **2**          |
| #c/white **3**   | **2**          | #c/green **1** | X              | #c/green **1** | **2**          | #c/red **3**   |
| #c/white **4**   | #c/red **3**   | **2**          | #c/green **1** | X              | #c/green **1** | **2**          |
| #c/white **5**   | **2**          | #c/red **3**   | **2**          | #c/green **1** | X              | #c/green **1** |
| #c/white **6**   | #c/green **1** | **2**          | #c/red **3**   | **2**          | #c/green **1** | X              |

````
`````

1. Make an [[Graphs - basics#Adjacency matrix|adjacency matrix]] T

$$ 

\begin{array}{} & 

\begin{pmatrix}  
- & \color{lightgreen}1 & - & - & - & \color{lightgreen}1 \\ 
\color{lightgreen}1 & - & \color{lightgreen}1 & - & - & - \\ 
- & \color{lightgreen}1 & - & \color{lightgreen}1 & - & - \\ 
- & - & \color{lightgreen}1 & - & \color{lightgreen}1 & - \\ 
- & - & - & \color{lightgreen}1 & - & \color{lightgreen}1 \\ 
\color{lightgreen}1 & - & - & - & \color{lightgreen}1 & - \\     
\end{pmatrix} 

\end{array} 
$$

2. We move the units from the adjacency matrix to the distance matrix 
3. Simple graph is symmetric antireflective relation. We calculate $T*T$ (composition)

$$ 

\begin{array}{} & 

\begin{pmatrix}  
- & \color{lightgreen}1 & - & - & - & \color{lightgreen}1 \\ 
\color{lightgreen}1 & - & \color{lightgreen}1 & - & - & - \\ 
- & \color{lightgreen}1 & - & \color{lightgreen}1 & - & - \\ 
- & - & \color{lightgreen}1 & - & \color{lightgreen}1 & - \\ 
- & - & - & \color{lightgreen}1 & - & \color{lightgreen}1 \\ 
\color{lightgreen}1 & - & - & - & \color{lightgreen}1 & - \\     
\end{pmatrix} 
*
\begin{pmatrix}  
- & \color{lightgreen}1 & - & - & - & \color{lightgreen}1 \\ 
\color{lightgreen}1 & - & \color{lightgreen}1 & - & - & - \\ 
- & \color{lightgreen}1 & - & \color{lightgreen}1 & - & - \\ 
- & - & \color{lightgreen}1 & - & \color{lightgreen}1 & - \\ 
- & - & - & \color{lightgreen}1 & - & \color{lightgreen}1 \\ 
\color{lightgreen}1 & - & - & - & \color{lightgreen}1 & - \\     
\end{pmatrix} 
=
\begin{pmatrix}  
\color{orange}1 & - & \color{orange}1 & - & \color{orange}1 & - \\ 
- & \color{orange}1 & - & \color{orange}1 & - & \color{orange}1 \\ 
\color{orange}1 & - & \color{orange}1 & - & \color{orange}1 & - \\ 
- & \color{orange}1 & - & \color{orange}1 & - & \color{orange}1 \\ 
\color{orange}1 & - & \color{orange}1 & - & \color{orange}1 & - \\ 
- & \color{orange}1 & - & \color{orange}1 & - & \color{orange}1  
\end{pmatrix} 

\end{array} 
$$

4. All newly formed *non-zero elements* show that the distance between the vertices is not greater than *2*. We write *2* in **distance matrix**
5. We calculate $T*T*T$ 

$$ 

\begin{array}{} & 

\begin{pmatrix}  
- & \color{lightgreen}1 & - & - & - & \color{lightgreen}1 \\ 
\color{lightgreen}1 & - & \color{lightgreen}1 & - & - & - \\ 
- & \color{lightgreen}1 & - & \color{lightgreen}1 & - & - \\ 
- & - & \color{lightgreen}1 & - & \color{lightgreen}1 & - \\ 
- & - & - & \color{lightgreen}1 & - & \color{lightgreen}1 \\ 
\color{lightgreen}1 & - & - & - & \color{lightgreen}1 & - \\     
\end{pmatrix} 
*
\begin{pmatrix}  
\color{orange}1 & - & \color{orange}1 & - & \color{orange}1 & - \\ 
- & \color{orange}1 & - & \color{orange}1 & - & \color{orange}1 \\ 
\color{orange}1 & - & \color{orange}1 & - & \color{orange}1 & - \\ 
- & \color{orange}1 & - & \color{orange}1 & - & \color{orange}1 \\ 
\color{orange}1 & - & \color{orange}1 & - & \color{orange}1 & - \\ 
- & \color{orange}1 & - & \color{orange}1 & - & \color{orange}1  
\end{pmatrix} 
=
\begin{pmatrix}  
- & \color{red}1 & - & \color{red}1 & - & \color{red}1 \\ 
\color{red}1 & - & \color{red}1 & - & \color{red}1 & - \\ 
- & \color{red}1 & - & \color{red}1 & - & \color{red}1 \\ 
\color{red}1 & - & \color{red}1 & - & \color{red}1 & - \\ 
- & \color{red}1 & - & \color{red}1 & - & \color{red}1 \\ 
\color{red}1 & - & \color{red}1 & - & \color{red}1 & - \\     
\end{pmatrix} 

\end{array} 
$$

6. All newly formed *non-zero elements* show that the distance between the vertices is not greater than *3*. We write *3* in **distance matrix**

### Distance matrix properties

`````col
````col-md
flexGrow=1
===

```dot 
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

edge [color = grey] 

a -- {c d} 
b -- {c a d}
f -- {a e}

} 
```

````
````col-md
flexGrow=1.2
===


|     | **a** | **b** | **c** | **d** | **e** | **f** | Row max |         notes |
|:---:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-------:| -------------:|
|  **a**  |   **X**   |   1   |   1   |   1   |   2   |   1   |    2    | [[#Center of a graph\|center/radius]] |
|  **b**  |   1   |   **X**   |   1   |   1   |   *3*   |   2   |    3    |      [[#Diameter of a graph\|diameter]] |
|  **c**  |   1   |   1   |   **X**   |   2   |   *3*   |   2   |    3    |      [[#Diameter of a graph\|diameter]] |
|  **d**  |   1   |   1   |   2   |   **X**   |   *3*   |   2   |    3    |      [[#Diameter of a graph\|diameter]] |
|  **e**  |   2   |   *3*   |   *3*   |   *3*   |   **X**   |   1   |    3    |      [[#Diameter of a graph\|diameter]] |
|  **f**  |   1   |   2   |   2   |   2   |   1   |   **X**   |    2    | [[#Center of a graph\|center/radius]] |


````
`````

--- 
<br>

# Eccentricity of a vertex

> **Eccentricity** of a [[Graphs - basics#Directed graphs|vertex]] is it's maximum [[#Distances|distances to other vertices]] of a given graph
> $e(u)=max \ \rho (v,u)$ 

--- 
<br>

# Diameter of a graph

> The **diameter** of a graph is the maximum [[#Distances|distance between vertices]] 
> $d(G)=max \ \rho (u,w)$ 

## Diametrical circuit

> A simple [[Graphs - connectivity#Circuit|circuit]] is **diametrical** if it's [[#Length of the path|length]] is equal to the **diameter** and is the shortest path connecting it's [[Graphs - connectivity#Open / closed walk|terminal]] vertices

--- 
<br>

# Center of a graph

> [[Graphs - basics#Directed graphs|Vertex]] $c \in V$ is called a **center** of a graph, if it has minimal [[#Eccentricity of a vertex|eccentricity]] among all graph [[Graphs - basics#Directed graphs|vertices]] 
> $e(c)=min \ e(v)$ 

## Graph radius

> The **radius** of a graph is it's [[#Center of a graph|center]] [[#Eccentricity of a vertex|eccentricity]] (minimum [[#Eccentricity of a vertex|eccentricity]] of all it's [[Graphs - basics#Directed graphs|vertices]])
> $r(G)=min \ e(v)$

--- 
<br>

# Go to other topics
``` dataview
list from "uni/Discrete math"
```


