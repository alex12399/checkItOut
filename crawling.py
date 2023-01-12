import requests
address = input("Please provide the contract address. If no address is provided we will use the default Doggies contract address ")
if len(address) == 0:
    address = "0xC7dF86762ba83f2a6197e1Ff9Bb40ae0f696B9E6"
data = { "address": address}
response = requests.post("http://localhost:8080/api/crawler", json = data)
print(response.json())
