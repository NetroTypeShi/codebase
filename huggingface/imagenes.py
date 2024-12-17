from huggingface_hub import InferenceClient

from PIL import Image

# Conexión al modelo de Hugging Face
client = InferenceClient("black-forest-labs/FLUX.1-dev", token="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")

# Generar la imagen con el modelo


# output is a PIL.Image object
image = client.text_to_image("kanyewest in a skyrim suit")
image.save("diddy.png")