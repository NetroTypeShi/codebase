import requests

r = requests.get('https://dummyjson.com/users')
users = r.json()
print(users.keys())
lista_users = users.get("users")
#print(lista_users)
primer_usuario = lista_users[0]
print(primer_usuario.keys())
contraseña_usuario = primer_usuario.get("password")
nombre_usuario = primer_usuario.get("username")
data = {
    "username" : nombre_usuario,
    "password" : contraseña_usuario
}
url = 'https://dummyjson.com/user/login'
response = requests.post(url, data=data)

print(response.json())