 <!-- Lab 7 - Task 2 -->

OOP project in Python. Built a simple class hierarchy using animals as the example.

 <!-- Files -->

- `models.py` - contains all the classes
- `main.py` - creates objects and runs everything

 <!-- How to run -->

```bash
py main.py
```

 <!-- What's inside -->

Base class `Animal` with name, age, and weight attributes plus describe() and speak() methods.

Two child classes `Dog` and `Cat` inherit from it. Both add their own attributes and override speak() to return different sounds.

In main.py all objects are stored in a list, iterated over, and methods are called on each one to show polymorphism.
