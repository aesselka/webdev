class Animal:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def describe(self):
        return f"{self.name} is {self.age} years old and weighs {self.weight} kg"

    def speak(self):
        return f"{self.name} makes a sound"

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, weight={self.weight})"


class Dog(Animal):
    def __init__(self, name, age, weight, breed):
        super().__init__(name, age, weight)
        self.breed = breed

    def speak(self):
        return f"{self.name} says: Woof!"

    def fetch(self):
        return f"{self.name} fetches the ball!"

    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, breed={self.breed})"


class Cat(Animal):
    def __init__(self, name, age, weight, indoor):
        super().__init__(name, age, weight)
        self.indoor = indoor

    def speak(self):
        return f"{self.name} says: Meow!"

    def is_indoor(self):
        status = "indoor" if self.indoor else "outdoor"
        return f"{self.name} is an {status} cat"

    def __str__(self):
        return f"Cat(name={self.name}, age={self.age}, indoor={self.indoor})"
