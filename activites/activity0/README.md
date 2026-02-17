# Activity 0

- AA'Laysha Gibson 
- 02-17-2026

## introduction 

- This is activity 0 ...

this is part1 image...

![part 1](part1.png)

this is part2 image ...

![part2](part2.png)


## Fruit list

1. pears
2. apples
     1. red 
     2. yellow
     3. green 
3. oranges

## Fruit list

- pears
- apples
     - red 
     - yellow
     - green 
- oranges

## Links / Images

- [wikiBob](https://gitlab.com/bobby.estey/wikibob/-/blob/master/README.md)
- [Grand Canyon University](https://www.gcu.edu/)

![America's Flagship Seal](https://gitlab.com/bobby.estey/wikibob/-/raw/master/docs/icons/cv64AmericasFlagShip100x100.png)
![America's Flagship Seal](https://gitlab.com/bobby.estey/wikibob/-/raw/master/docs/icons/cv64AmericasFlagShip100x100.png "America's Flag Ship")

## Tables
|First Name|Last Name|
|--|--|
|AA'Laysha|Gibson|
|Ardrienne|Francis|

## Code Blocks

```java
// Java Example
public class CodeBlock {
    public static void main(String[] args) {
        System.out.println("Code Block Example");
    }
}
```


```mermaid
---
title: MermaidJS - Class Diagram - Animal example
---
classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
```