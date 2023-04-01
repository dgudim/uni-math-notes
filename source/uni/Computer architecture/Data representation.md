# Digital logic

- Built on <u>two-valued</u> logic system
	- **+5v** and *0v*
	- **High** and *low***
	- **true** and *false*
	- **asserted** and *not asserted*

> [!note] 
> Underneath it's all electrons and wires

## Data representation

- Builds on [[#Digital logic|digital logic]]
- Applies familiar abstractions
- Interprets sets of boolean values as
	- numbers
	- characters
	- addresses

> [!note] 
> Underneath it's all just bits

### Bit (Binary digit)

> [!definition] 
> Direct representation of digital logic values

- Can be *0* or *1*
- Multiple **bits** are used to represent complex data items
- Same underlying hardware can represent bits of an [[#Integer representation in binary|integer]] or bits of a character

### Byte

> [!definition] 
> Set of multiple [[#Bit (Binary digit)|bits]]

- Size depends on underlying hardware (computer)
	- CDC - **6 [[#Bit (Binary digit)|bits]]**
	- BB&N - **10 [[#Bit (Binary digit)|bits]]**
	- IBM - **8 [[#Bit (Binary digit)|bits]]** (standard nowadays)
- On most computers the **byte** is the <u>smallest addressable</u> unit of storage

#### Byte size

> [!definition] 
> Numbers of [[#Bit (Binary digit)|bits]] per [[#Byte|byte]] determines range of values that can be stored 

- [[#Byte]] of *k* [[#Bit (Binary digit)|bits]] can store *$2^k$* values
	- **6 [[#Bit (Binary digit)|bits]]** - **64** values
	- **8 [[#Bit (Binary digit)|bits]]** - **256** values
	- **10 [[#Bit (Binary digit)|bits]]** - **1024** values

### Binary representation

> [[#Bit (Binary digit)|Bits]] themselves have no meaning
> [[#Byte]] just stores *1's* and *0's*
> i.e: 
> - 000 001 010 011
> - 100 101 110 111

> All meaning is determined by how the [[#Bit (Binary digit)|bits]] are interpreted

> [!example] 
> Possible interpretation of 3 [[#Bit (Binary digit)|bits]] 
> - Device status
> 	- First [[#Bit (Binary digit)|bit]] is *1* if disk is connected
> 	- Seconds [[#Bit (Binary digit)|bit]] is *1* if printer is connected
> 	- Third [[#Bit (Binary digit)|bit]] is *1* is keyboard is connected
> - *Integer* interpretation
> 	- [[#Binary weighted positional interpretation|Positional interpretation]] uses base *2*
> 	- Values are from *0* to *7*
> 	- [[#Order of bits and bytes|Order of bits]] must be specified

#### Binary weighted positional interpretation

| $2^5$ | $2^4$ | $2^3$ | $2^2$ | $2^1$ | $2^0$ |
| -------- | -------- | ------- | ------- | ------- | ------- |
| 32       | 16       | 8       | 4       | 2       | 1       | 

> [!example] 
> <u>0 1 0 1 0 1</u> is interpreted as:
> $0 * 2^5 + 1 * 2^4 + 0 * 2^3 + 1 * 2^2 + 0 * 2^1 + 1 * 2^0 = 21$

- A set of *k* [[#Bit (Binary digit)|bits]] can represent integers from *0* to *$2^k-1$*

> [!seealso] 
> 1. [[#Integer representation in binary]]
> 
> 2. ##### Powers of 2
> 
> | Power of 2 | Decimal value | Decimal digits |
> | ---------- | ------------- | -------------- |
> | 0          | 1             | 1              |
> | 1          | 2             | 1              |
> | 2          | 4             | 1              |
> | 3          | 8             | 1              |
> | 4          | 16            | 2              |
> | 5          | 32            | 2              |
> | 6          | 64            | 2              |
> | 7          | 128           | 3              |
> | 8          | 256           | 3              |
> | 9          | 512           | 3              |
> | 10         | 1024          | 4              |
> | 11         | 2048          | 4              |
> | 12         | 4096          | 4              |
> | 15         | 16384         | 5              |
> | 16         | 32768         | 5              |
> | 20         | 1048576       | 7              |
> | 30         | 1073741824    | 10             |
> | 32         | 4294967296    | 20             |

#### Number systems

> [!example] 
> $42_{10}=101010_{2}=52_{8}=2A_{16}$
> Binary: *0b*
> Octal: *0o*
> Hex: *0x*

##### Hexadecimal notation

- Mathematically it's *base 16*
- Each hex digit encodes *4* [[#Bit (Binary digit)|bits]]
- Typically syntax: starts with *0x*
- Supported in some languages

##### Any system to decimal

$$\large (x_{n-1},x_{n-2},\dots ,x_{0},x_{-1},x_{-2}, \dots ,x_{-l})=\sum_{i=-l}^{n-1}x_{i}*p^i$$

- *n* - amount of decimals <u>before</u> the coma
- *i* - amount of decimals <u>after</u> the coma
- *$x_{i}$*- number of i-th order 
- *p* - base of the number system

##### Decimal to any system

1. <u>For the whole part</u>:
	1. Divide by the *base* of the system 
	2. Keep track of *quotient* and *remainder*
	3. Keep dividing the *quotient* until you get a *0*
	4. Write *remainders* in reverse order
2. <u>For the fractional part</u>:
	1. Multiply the fractional part by the *base*
	2. Take the *whole* part 
		1. *1,345* becomes *0,345*, *1* is recorded
		2. *0,765* does not change, *0* is recorded
	3. Repeat until the desired *precision* is reached

##### Binary to hex/octal and reverse

> Group/ungroup by *4* for *hex*, by *3* for *octal*

- $1000 \ 0001 = 81_{16}$ 
	- $1000_{2}=8_{16}$
	- $0001 = 1_{16}$

$B43_{16} = 1011 \ 0100 \ 0011_{2}$

--- 
<br>

# ASCII

> [!definition] 
> 
> - **A**merican **S**tandard **C**ode for **I**nformation **I**nterchange
> - Vendor independent
> - Adopted by PC manufacturers
> - Specifies <u>128 characters</u>
> - Unprintable characters for modem control

> [!seealso] 
> Full ASCII table
> 
|     | Dec | Char                     | Dec | Char  | Dec | Char | Dec | Char |
| --- | --- | ------------------------ | --- | ----- | --- | ---- | --- | ---- |
| 0   | NUL | (null)                   | 32  | SPACE | 64  | @    | 96  | `    |
| 1   | SOH | (start of heading)       | 33  | !     | 65  | A    | 97  | a    |
| 2   | STX | (start of text)          | 34  | "     | 66  | B    | 98  | b    |
| 3   | ETX | (end of text)            | 35  | #     | 67  | C    | 99  | c    |
| 4   | EOT | (end of transmission)    | 36  | $     | 68  | D    | 100 | d    |
| 5   | ENQ | (enquiry)                | 37  | %     | 69  | E    | 101 | e    |
| 6   | ACK | (acknowledge)            | 38  | &     | 70  | F    | 102 | f    |
| 7   | BEL | (bell)                   | 39  | '     | 71  | G    | 103 | g    |
| 8   | BS  | (backspace)              | 40  | (     | 72  | H    | 104 | h    |
| 9   | TAB | (horizontal tab)         | 41  | )     | 73  | I    | 105 | i    |
| 10  | LF  | (NL line feed, new line) | 42  | *     | 74  | J    | 106 | j    |
| 11  | VT  | (vertical tab)           | 43  | +     | 75  | K    | 107 | k    |
| 12  | FF  | (NP form feed, new page) | 44  | ,     | 76  | L    | 108 | l    |
| 13  | CR  | (carriage return)        | 45  | -     | 77  | M    | 109 | m    |
| 14  | SO  | (shift out)              | 46  | .     | 78  | N    | 110 | n    |
| 15  | SI  | (shift in)               | 47  | /     | 79  | O    | 111 | o    |
| 16  | DLE | (data link escape)       | 48  | 0     | 80  | P    | 112 | p    |
| 17  | DC1 | (device control 1)       | 49  | 1     | 81  | Q    | 113 | q    |
| 18  | DC2 | (device control 2)       | 50  | 2     | 82  | R    | 114 | r    |
| 19  | DC3 | (device control 3)       | 51  | 3     | 83  | S    | 115 | s    |
| 20  | DC4 | (device control 4)       | 52  | 4     | 84  | T    | 116 | t    |
| 21  | NAK | (negative acknowledge)   | 53  | 5     | 85  | U    | 117 | u    |
| 22  | SYN | (synchronous idle)       | 54  | 6     | 86  | V    | 118 | v    |
| 23  | ETB | (end of trans. block)    | 55  | 7     | 87  | W    | 119 | w    |
| 24  | CAN | (cancel)                 | 56  | 8     | 88  | X    | 120 | x    |
| 25  | EM  | (end of medium)          | 57  | 9     | 89  | Y    | 121 | y    |
| 26  | SUB | (substitute)             | 58  | \:    | 90  | Z    | 122 | z    |
| 27  | ESC | (escape)                 | 59  | ;     | 91  | \[   | 123 | {    |
| 28  | FS  | (file separator)         | 60  | <     | 92  | \    | 124 | \|   |
| 29  | GS  | (group separator)        | 61  | =     | 93  | ]    | 125 | }    |
| 30  | RS  | (record separator)       | 62  | >     | 94  | ^    | 126 | ~    |
| 31  | US  | (unit separator)         | 63  | ?     | 95  | _    | 127 | DEL  |

## Unicode

- Extends [[#ASCII]]
	- Assigns meaning to values from 128 to 255
	- Characters can be **16/32 [[#Bit (Binary digit)|bits]]** long
- Can represent *larger set* of characters
- Can accommodate languages such as Chinese

--- 
<br>

# Integer representation in binary

- Each binary integer represented in *k* [[#Bit (Binary digit)|bits]]
- Computers have used $k=8,16,32,60,64$
- Many computers support multiple integer sizes
- [[#Binary weighted positional interpretation|Positional interpretation]] produces [[#Unsigned integers|unsigned]] integers

## Unsigned integers

- Straightforward [[#Binary weighted positional interpretation|positional interpretation]]
- Each successive [[#Bit (Binary digit)|bit]] represents <u>next power of 2</u>
- No negative numbers (A set of *k* [[#Bit (Binary digit)|bits]] can represent integers from *0* to *$2^k-1$*)
- Precision is fixed (size of integer is constant)
- Arithmetic operations can produce [[#Overflow|overflow]]/underflow (result can't be represented in *k* bits)
- [[#Overflow]] is handled with wraparound and carry bit

## Overflow

- Values wrap around address space
- Hardware records **overflow** in a separate <u>carry indicator</u>
	- Software must check it after operations
	- Can be used to [[Processor#Condition codes|raise an exception]]

> Red is overflow
> 
> $\begin{align} 1\ 0\ 0 \\ +\ 1\ 1\ 0 \\ \hline {\color{red}1}\ 0\ 1\ 0 \end{align}$

## Signed integers

- Needed by most programs
- Several representations are possible
	- [[#Sign magnitude]]
	- [[#One's complement]]
	- [[#Two's complement]]
- Some [[#Bit (Binary digit)|bit]] patters are used for negative values
- ! Trade-off: [[#Unsigned integers|unsigned]] representation can store integers twice as large

| Binary | [[#Unsigned integers\|Unsigned]] | [[#Sign magnitude]] | [[#One's complement]] | [[#Two's complement]] |
| ------ |:--------------------------------:|:-------------------:|:---------------------:|:---------------------:|
| 0000   |                0                 |          0          |           0           |           0           |
| 0001   |                1                 |          1          |           1           |           1           |
| 0010   |                2                 |          2          |           2           |           2           |
| 0011   |                3                 |          3          |           3           |           3           |
| 0100   |                4                 |          4          |           4           |           4           |
| 0101   |                5                 |          5          |           5           |           5           |
| 0110   |                6                 |          6          |           6           |           6           |
| 0111   |                7                 |          7          |           7           |           7           |
| 1000   |                8                 |         -0          |          -7           |          -8           |
| 1001   |                9                 |         -1          |          -6           |          -7           |
| 1010   |                10                |         -2          |          -5           |          -6           |
| 1011   |                11                |         -3          |          -4           |          -5           |
| 1100   |                12                |         -4          |          -3           |          -4           |
| 1101   |                13                |         -5          |          -2           |          -3           |
| 1110   |                14                |         -6          |          -1           |          -2           |
| 1111   |                15                |         -7          |          -0           |          -1           |

### Sign magnitude

- Familiar to humans
- First [[#Bit (Binary digit)|bit]] represents *sign*
- Successive [[#Bit (Binary digit)|bits]] represent absolute value of integer
- ? Quirk: can create *-0*

### One's complement

- Positive numbers use [[#Binary weighted positional interpretation|positional representation]]
- Negative number are formed by inverting all [[#Bit (Binary digit)|bits]] of positive value
- ? Quirk: two representations for *0*: *0000* and *1111*

> [!note] 
> Some checksum algorthms use **one's complement**

### Two's complement

- Positive numbers use [[#Binary weighted positional interpretation|positional representation]]
- Negative numbers formed by subtracting *1* from positive value and inverting all bits
	- *0010* represents *2*
	- *1110* represents *-2*
	- <u>High order bit is set if number is negative</u>
- ? Quirk: one more <u>negative</u> value

#### Implementation

- We consider using [[#Unsigned integers|unsigned]] **two's complement** together because a single piece of hardware can handle arithmetic of both.
- <u>Software can choose</u> an interpretation for each integer

> [!example] 
> *4* [[#Bit (Binary digit)|bits]]
> - Adding *1* to binary *1001* produces *1010*
> - [[#Unsigned integers|Unsigned]] interpretation goes from *9* to *10*
> - [[#Two's complement]] interpretation goes from *-7* to *-6*

### Sign extension

- Needed for [[#Unsigned integers|unsigned]] and [[#Two's complement|two's complement]] representations
- Used to accommodate <u>multiple sizes of integers</u>
- Extends high-order [[#Bit (Binary digit)|bit]] (sign [[#Bit (Binary digit)|bit]])

> When using [[#Two's complement|two's complement representation]] and assigning *32-bit* integer to *64-bit* integer, upper 32 [[#Bit (Binary digit)|bits]] are filled with
> - *0* for a <u>positive</u> number
> - *1* for a <u>negative</u> number
> - (High order [[#Bit (Binary digit)|bit]] is replicated)

> [!example] 
> - The *8-bit* version of integer *-3* is
> 	- *11111101*
> - The *16-bit* version of integer *-3* is
> 	- *__<u>11111111</u>__11111101*

> *Sign extension* also applies to <u>bit-shifting</u>

> [!example] 
> Shifting *-4* one [[#Bit (Binary digit)|bit]] right should produce *-2* (divide by *2*)
> - *16-bit* representation of *-4* is
> 	- *1111 1111 1111 1100*
> - After right shift, value is *-2*
> 	- *__<u>1</u>__111 1111 1111 1110*
> 	  
> So, for right shift we also replicate <u>high order</u> [[#Bit (Binary digit)|bit]]

## Order of bits and bytes

- @ Need to choose order for
	- **Storage** in physical memory system
	- **Transmission** over a network

1. [[#Bit (Binary digit)|Bit]] order 
	- Handled by hardware
	- Usually hidden from programmer
2. [[#Byte]] order
	- Affects multi-byte data items (i.e: [[#Integer representation in binary|integers]])
	- Visible and important to programmer

### Endianness

![[endianness_had.webp]]

#### Little endian

> <u>Least</u> significant byte of integer is in lowest memory location

#### Big Endian

> <u>Most</u> significant byte of integer is in lowest memory location


## Binary coded decimal (BCD)

- Pioneered by IBM
- <u>Represents integer as a string</u> of [[#Byte|bytes]]
	- Unpacked: one digit per *8-bit* [[#Byte|byte]]
	- Packed: one digit per *4-bit* **nibble**
- Uses [[#Sign magnitude|sign magntude]] representation

> [!example] 
> Unpacked **BCD**
> - *123456* is stored as
> 	- 0x01 0x02 0x03 0x04 0x05 0x06
> - *-123456* is stored as
> 	- 0x01 0x02 0x03 0x04 0x05 0x06 0x0D

- ! Disadvantages
	- Takes up more space
	- Hardware is slower than integer or floating point
- $ Advantages
	- Gives results humans expect 
	- Avoids repeating binary value for *.01*

> [!note] 
> Preferred by banks

--- 
<br>

# Floating point

> - @ Fundamental idea: follow standard scientific representation, specify *a few significant bits* and an *order of magnitude*
> 
> *Example:* $6.022*10^{23}$
> 
> - Hardware allocates fixed-size [[#Bit (Binary digit)|bit]] blocks for *exponent* and *mantissa*

## IEEE standard 754

> Widely adopted by computer architects

- *Single precision format*
```asciidoc-table
[cols="3,8,23"]
|===
| S | Exponent | Mantissa

| 1 bit
| 8 bits
| 23 bits

|===
```

- *[[Processor#Double precision|Double precision]] format*
```asciidoc-table
[cols="3,8,23"]
|===
| S | Exponent | Mantissa

| 1 bit
| 11 bits
| 52 bits

|===
```

> [!example] 
> Let's take *6.5*
> - In binary. *6* is *110* and *.5* is *.1*, giving *110.1*
> - Normalizing gives _$1.101*2^2$_
> - In IEEE floating point
> 	- The sign [[#Bit (Binary digit)|bit]] is *0* for positive numbers
> 	- <u>The exponent is biased</u> by adding *127*, giving *129* (*1000 0001*)
> 	- The leading *1* of the *mantissa* is not stored, giving *1010 0000*
> - The result is
> 
> ```asciidoc-table
> [cols="3,8,22"]
> |===
> | S | Exponent | Mantissa
> 
> | 0
> | 1 0 0 0 0 0 0 1
> | 1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
> 
> |===
> ```

### Special values in IEEE floating point

- Zero
- Positive infinity ($+\infty$)
- Negative infinity ($-\infty$)

> [!note] 
> <u>Infinity</u> values handles cases such as the <u>result of division by 0</u>

--- 
<br>

# Go to other topics
``` dataview
list from "uni/Computer architecture"
```
