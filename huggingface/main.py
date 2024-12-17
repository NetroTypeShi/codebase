import requests

API_URL = "https://api-inference.huggingface.co/models/bigscience/bloom"
headers = {"Authorization": "Bearer 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"}
payload = {
    "inputs": "el atentado del 11 de septiembre es gracioso porque",
}

response = requests.post(API_URL, headers=headers, json=payload)
print(response.json())
