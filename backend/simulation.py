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
    state = 0
    result = [state]

    for _ in range(days):
        state = next_state(state)
        result.append(state)

    return result

def monte_carlo(n=1000):
    simulations = []
    for _ in range(n):
        simulations.append(run_simulation())
    return simulations