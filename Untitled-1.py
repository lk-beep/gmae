import random
def guess_the_number():
    print("Arvaa numro peli")
    number_to_guess = random.randint(1, 100)
    attempts = 0
    guessed = False
    while not guessed:
        try:
            user_guess = int(input("arvaa numero 1 ja 100 vlillä: "))
            attempts += 1 
            if user_guess < number_to_guess:
                print("liian alhaalla.")
            elif user_guess > number_to_guess:
                print("liian korkealla")
            else:
                print(f"oikein {number_to_guess} näin monessa {attempts} yrityksessä.")
                guessed = True
        except ValueError:
            print("Anna oikea numeroo.")
if __name__ == "__main__":
    guess_the_number()
