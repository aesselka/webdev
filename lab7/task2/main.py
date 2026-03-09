from models import Animal, Dog, Cat


def main():
    animals = [
        Animal("Generic Animal", 5, 10),
        Dog("Sharik", 3, 25, "German Shepherd"),
        Dog("Aqtos", 2, 15, "Golden Retriever"),
        Cat("Murka", 4, 4.5, True),
        Cat("Matroskin", 6, 5, False),
    ]

    print("^-^ All Animals ^-^")
    for animal in animals:
        print(animal)

    print("\n^-^ Descriptions ^-^")
    for animal in animals:
        print(animal.describe())

    print("\n^-^ Polymorphism: speak() ^-^")
    for animal in animals:
        print(animal.speak())

    print("\n^-^ Dog-specific methods ^-^")
    for animal in animals:
        if isinstance(animal, Dog):
            print(animal.fetch())

    print("\n^-^ Cat-specific methods ^-^")
    for animal in animals:
        if isinstance(animal, Cat):
            print(animal.is_indoor())


if __name__ == "__main__":
    main()
