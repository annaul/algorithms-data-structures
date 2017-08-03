class Joe(object):
    arrival_time = 10
    age = 50

class Jim(object):
    arrival_time = 10
    age = 75


def GreetBefore(A, B):
  if A.arrival_time != B.arrival_time:
    return A.arrival_time < B.arrival_time
  return A.age > B.age

# def GreetBefore(A, B):
#   if A.arrival_time != B.arrival_time:
#     return "1", A.arrival_time > B.arrival_time
#   return "2", A.age > B.age

print GreetBefore(Joe, Jim)
