import random

transition_matrix = [
    [0.7, 0.3],  # UP → UP/DOWN
    [0.4, 0.6]   # DOWN → UP/DOWN
]

def next_state(current):
    r = random.random()
    if r < transition_matrix[current][0]:
        return 0
    return 1

def run_simulation(days=30):
    price = 100.0
    prices = [price]
    state = 0
    for _ in range(days):
        state = next_state(state)
        multiplier = 1.01 if state == 0 else 0.99  # UP 1%, DOWN -1%
        price *= multiplier
        prices.append(price)
    return prices

def monte_carlo(n=1000):
    simulations = []
    for _ in range(n):
        simulations.append(run_simulation())
    return simulations