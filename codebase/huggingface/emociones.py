
import requests

API_URL = "https://api-inference.huggingface.co/models/SamLowe/roberta-base-go_emotions"
headers = {"Authorization": "Bearer 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"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()
	
output = query({
	"inputs": "you will go to a diddy party tonight",	
})
emociones = output[0,1]
for emocion in emociones:
	print(emocion)