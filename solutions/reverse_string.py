def reverse_string(string):

    reversed_string = ""

    for i in range(len(string) - 1, -1, -1):
        reversed_string += string[i]

    return reversed_string

print("Expecting: 'ih'")
print(reverse_string("hi"))

print("")

print("Expecting: 'ybabtac'")
print(reverse_string("catbaby"))

print("")

print("Expecting: 'a'")
print(reverse_string("a"))

print("")

print("Expecting: '' (empty string)")
print(reverse_string(""))